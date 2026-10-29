// 7am AI: privat statistik-dashboard. Kun samlede tal (ingen mails, ingen personer).
// GET /      -> dashboardet (HTML)
// GET /api   -> tallene som JSON
// Beskyttet med HTTP Basic Auth (secret STATS_PASSWORD); brugernavnet er ligegyldigt.

const DAYS = 30;
const enc = new TextEncoder();

export default {
  async fetch(request, env) {
    const headers = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow", "Referrer-Policy": "no-referrer" };
    if (!env.STATS_PASSWORD || env.STATS_PASSWORD.length < 16) return new Response("STATS_PASSWORD er ikke sat (min. 16 tegn).", { status: 503, headers });
    if (!(await authorized(request, env))) {
      return new Response("Login kræves", { status: 401, headers: { ...headers, "WWW-Authenticate": 'Basic realm="7am AI stats", charset="UTF-8"' } });
    }
    const url = new URL(request.url);
    if (url.pathname === "/api") {
      try {
        return new Response(JSON.stringify(await stats(env)), { headers: { ...headers, "Content-Type": "application/json" } });
      } catch (e) {
        return new Response(JSON.stringify({ error: String(e && e.message || e).slice(0, 200) }), { status: 500, headers: { ...headers, "Content-Type": "application/json" } });
      }
    }
    if (url.pathname === "/") {
      return new Response(PAGE, { headers: { ...headers, "Content-Type": "text/html; charset=utf-8", "Content-Security-Policy": "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; img-src data:" } });
    }
    return new Response("Not found", { status: 404, headers });
  },
};

async function authorized(request, env) {
  const h = request.headers.get("Authorization") || "";
  if (!h.startsWith("Basic ")) return false;
  let decoded = "";
  try { decoded = atob(h.slice(6)); } catch { return false; }
  const password = decoded.slice(decoded.indexOf(":") + 1);
  return sameSecret(password, env.STATS_PASSWORD);
}

// Sammenligner uden at afsløre noget via svartid.
async function sameSecret(a, b) {
  const key = await crypto.subtle.importKey("raw", enc.encode("cmp"), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const [x, y] = await Promise.all([crypto.subtle.sign("HMAC", key, enc.encode(a)), crypto.subtle.sign("HMAC", key, enc.encode(b))]);
  const ua = new Uint8Array(x), ub = new Uint8Array(y);
  let d = 0;
  for (let i = 0; i < ua.length; i++) d |= ua[i] ^ ub[i];
  return d === 0;
}

const cphDay = (date) => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Copenhagen" }).format(date);
function lastDays(n) {
  const out = [];
  for (let i = n - 1; i >= 0; i--) out.push(cphDay(new Date(Date.now() - i * 86400000)));
  return out;
}

async function stats(env) {
  const days = lastDays(DAYS);
  const from = days[0];
  const week = days.slice(-7)[0];
  const prevWeekFrom = cphDay(new Date(Date.now() - 13 * 86400000));
  // Tilmeldte tælles i tilmeldings-workeren (service binding SIGNUP), så Resend-nøglen kun ligger dér.
  const [subscribers, visits, system] = await Promise.all([env.SIGNUP.subscribers(days), visitStats(env, days, from, week, prevWeekFrom), systemStatus()]);
  return { generated: new Date().toISOString(), days, subscribers, visits, system };
}

// Til fanen "Sådan virker det": seneste udgave-PR og afsendelseslog fra det offentlige repo.
async function systemStatus() {
  const cache = { cf: { cacheTtl: 300, cacheEverything: true } };
  const gh = (path) => fetch(`https://api.github.com/repos/Repzei/7amai/${path}`, { headers: { "User-Agent": "7amai-stats", Accept: "application/vnd.github+json" }, ...cache })
    .then(r => (r.ok ? r.json() : null)).catch(() => null);
  const [prs, sentLog] = await Promise.all([
    gh("pulls?state=all&per_page=5"),
    fetch("https://raw.githubusercontent.com/Repzei/7amai/main/.agent/sent.log", cache).then(r => (r.ok ? r.text() : "")).catch(() => ""),
  ]);
  const roadmap = await fetch("https://raw.githubusercontent.com/Repzei/7amai/main/.agent/roadmap.json", cache)
    .then(r => (r.ok ? r.json() : null)).catch(() => null);
  const cph = (iso) => {
    const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Copenhagen", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date(iso)).map(x => [x.type, x.value]));
    return { date: `${p.year}-${p.month}-${p.day}`, time: `${p.hour}:${p.minute}` };
  };
  const pr = (Array.isArray(prs) ? prs : []).find(x => /^issue\/\d{4}-\d{2}-\d{2}$/.test(x.head && x.head.ref)) || null;
  let issue = null;
  if (pr) {
    const date = pr.head.ref.slice(6);
    const merged = pr.merged_at ? cph(pr.merged_at) : null;
    issue = {
      date, title: pr.title.replace(/^7am AI \d{4}-\d{2}-\d{2}: /, ""), pr: pr.number, prUrl: pr.html_url,
      created: cph(pr.created_at).time, state: pr.merged_at ? "merged" : pr.state,
      mergedAt: merged ? `${merged.date} ${merged.time}` : null,
      approved: merged ? (merged.date < date || (merged.date === date && merged.time < "07:00")) : null,
      url: `https://7amai.com/${date.replace(/-/g, "/")}/`,
    };
  }
  const sent = sentLog.trim().split("\n").filter(Boolean);
  return { today: cphDay(new Date()), lastSent: sent[sent.length - 1] || null, sentCount: sent.length, issue, roadmap };
}

const ISSUE_PATH = "(path GLOB '/[0-9][0-9][0-9][0-9]/*' OR path GLOB '/da/[0-9][0-9][0-9][0-9]/*')";

async function visitStats(env, days, from, week, prevWeekFrom) {
  const db = env.DB;
  const [daily, bySrc, issues, reads, prev] = await Promise.all([
    db.prepare("SELECT day, COUNT(*) AS n, SUM(src = 'mail') AS mail FROM visits WHERE day >= ? GROUP BY day").bind(from).all(),
    db.prepare("SELECT src, COUNT(*) AS n FROM visits WHERE day >= ? GROUP BY src ORDER BY n DESC").bind(from).all(),
    db.prepare(`SELECT path, COUNT(*) AS n, AVG(CASE WHEN seconds >= 3 THEN seconds END) AS avg, AVG(scroll >= 90) AS done FROM visits WHERE day >= ? AND ${ISSUE_PATH} GROUP BY path ORDER BY n DESC LIMIT 15`).bind(from).all(),
    db.prepare(`SELECT seconds, scroll FROM visits WHERE day >= ? AND ${ISSUE_PATH} LIMIT 50000`).bind(from).all(),
    db.prepare("SELECT COUNT(*) AS n FROM visits WHERE day >= ? AND day < ?").bind(prevWeekFrom, week).first(),
  ]);
  const byDay = Object.fromEntries((daily.results || []).map(r => [r.day, r]));
  const series = days.map(day => ({ day, n: byDay[day]?.n || 0, mail: byDay[day]?.mail || 0 }));
  const issueRows = reads.results || [];
  const engaged = issueRows.filter(r => r.seconds >= 3).map(r => r.seconds).sort((a, b) => a - b);
  const median = engaged.length ? engaged[Math.floor(engaged.length / 2)] : null;
  return {
    series,
    total30: series.reduce((s, d) => s + d.n, 0),
    total7: series.slice(-7).reduce((s, d) => s + d.n, 0),
    prev7: prev?.n || 0,
    mail30: series.reduce((s, d) => s + d.mail, 0),
    bySrc: (bySrc.results || []).map(r => ({ src: r.src, n: r.n })),
    issueVisits: issueRows.length,
    avgSec: engaged.length ? Math.round(engaged.reduce((s, x) => s + x, 0) / engaged.length) : null,
    medianSec: median,
    bounce: issueRows.length ? issueRows.filter(r => r.seconds < 3).length / issueRows.length : null,
    completion: issueRows.length ? issueRows.filter(r => r.scroll >= 90).length / issueRows.length : null,
    issues: (issues.results || []).map(r => ({ path: r.path, n: r.n, avg: r.avg == null ? null : Math.round(r.avg), done: r.done })),
  };
}

const PAGE = `<!doctype html>
<html lang="da">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>7am AI statistik</title>
<style>
:root { color-scheme: light dark; --sky:#EEF3FA; --paper:#FFFFFF; --ink:#0E1A33; --mist:#55627A; --line:#D3DCEA; --mark:#B4500A; --hover:#0E1A33; --sun:#FF8A2A; }
@media (prefers-color-scheme: dark) { :root { --sky:#0E1A33; --paper:#16233F; --ink:#EAF0F8; --mist:#A9B6CC; --line:#2A3A5C; --mark:#FFA366; --hover:#EAF0F8; } }
* { box-sizing: border-box; }
body { margin:0; background:var(--sky); color:var(--ink); font:15px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif; }
.wrap { max-width: 980px; margin: 0 auto; padding: 24px 16px 48px; }
header { display:flex; justify-content:space-between; align-items:flex-end; gap:12px; border-bottom:1.5px solid var(--ink); padding-bottom:12px; }
h1 { margin:0; font-size:22px; font-weight:900; letter-spacing:-0.02em; }
.muted { color:var(--mist); font-size:13px; }
.kpis { display:grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap:12px; margin:20px 0; }
.card { background:var(--paper); border-radius:14px; padding:16px; }
.kpi .label { font-size:12px; font-weight:700; letter-spacing:0.04em; text-transform:uppercase; color:var(--mist); }
.kpi .value { font-size:34px; font-weight:900; letter-spacing:-0.03em; line-height:1.1; margin-top:6px; font-variant-numeric: tabular-nums; }
.kpi .unit { font-size:16px; font-weight:700; letter-spacing:0; color:var(--mist); }
.kpi .sub { font-size:13px; color:var(--mist); margin-top:4px; }
.grid2 { display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:12px; }
h2 { font-size:13px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; color:var(--mist); margin:0 0 10px; }
.chart { position:relative; }
.chart svg { display:block; width:100%; height:auto; overflow:visible; }
.chart .axis { fill:var(--mist); font-size:11px; }
.chart .grid { stroke:var(--line); stroke-width:1; }
.chart .bar { fill:var(--mark); }
.chart .hit:hover + .bar, .chart .bar.on { fill:var(--hover); }
.chart .line { fill:none; stroke:var(--mark); stroke-width:2; }
.chart .dot { fill:var(--mark); stroke:var(--paper); stroke-width:2; }
.tip { position:absolute; pointer-events:none; background:var(--ink); color:var(--paper); font-size:12px; font-weight:700; padding:5px 8px; border-radius:6px; white-space:nowrap; transform:translate(-50%, -110%); display:none; }
table { width:100%; border-collapse:collapse; font-size:14px; font-variant-numeric: tabular-nums; }
th { text-align:left; font-size:12px; color:var(--mist); font-weight:700; padding:6px 8px; border-bottom:1px solid var(--line); }
td { padding:8px; border-bottom:1px solid var(--line); }
td.num, th.num { text-align:right; }
td a { color:var(--ink); }
.hbar { display:grid; grid-template-columns: 90px 1fr 48px; gap:8px; align-items:center; margin:6px 0; font-size:14px; }
.hbar .track { height:10px; background:var(--line); border-radius:4px; overflow:hidden; }
.hbar .fill { height:100%; background:var(--mark); border-radius:0 4px 4px 0; }
.hbar .n { text-align:right; font-variant-numeric: tabular-nums; }
.err { background:var(--paper); border-left:3px solid var(--sun); padding:12px 16px; border-radius:8px; }
footer { margin-top:24px; }
.tabs { display:flex; gap:8px; flex-wrap:wrap; margin:16px 0 4px; }
.tabs button { font:700 14px "Helvetica Neue", Helvetica, Arial, sans-serif; border:1.5px solid var(--line); background:var(--paper); color:var(--ink); border-radius:999px; padding:8px 16px; cursor:pointer; }
.tabs button[aria-selected="true"] { background:var(--sun); border-color:var(--sun); color:#0E1A33; }
.sys h2 { margin:28px 0 10px; }
.sys p.intro { color:var(--mist); margin:8px 0 0; max-width:70ch; }
.status { display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:12px; margin-top:14px; }
.status .card .v { font-size:18px; font-weight:800; margin-top:4px; }
.dot { display:inline-block; width:9px; height:9px; border-radius:50%; margin-right:6px; vertical-align:1px; background:var(--mist); }
.dot.ok { background:#2E9E5B; } .dot.warn { background:var(--sun); } .dot.bad { background:#D14343; }
.flow { list-style:none; margin:0; padding:0; position:relative; }
.flow::before { content:""; position:absolute; left:46px; top:8px; bottom:8px; width:2px; background:var(--line); }
.flow li { display:grid; grid-template-columns:92px 1fr; gap:14px; padding:10px 0; position:relative; }
.flow .t { font-weight:900; font-variant-numeric:tabular-nums; text-align:center; background:var(--paper); border:1.5px solid var(--line); border-radius:999px; padding:4px 0; height:fit-content; position:relative; z-index:1; font-size:14px; }
.flow li.key .t { border-color:var(--sun); color:var(--mark); }
.flow .b { background:var(--paper); border-radius:12px; padding:12px 14px; min-width:0; }
.flow .b strong { display:block; font-size:15px; margin-bottom:2px; }
.flow .b span { color:var(--mist); font-size:14px; }
.chips { display:flex; flex-wrap:wrap; gap:6px; margin-top:8px; }
.chip { font-size:11px; font-weight:800; letter-spacing:0.04em; text-transform:uppercase; border:1.5px solid var(--line); border-radius:999px; padding:2px 8px; color:var(--mist); }
.svc { display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px; }
.svc .card h3 { margin:0 0 6px; font-size:16px; }
.svc .card .role { font-size:12px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; color:var(--mark); margin-bottom:6px; }
.svc .card ul { margin:0; padding-left:18px; font-size:14px; }
.svc .card li { margin:3px 0; }
.svc .card a { color:var(--ink); }
.steps { counter-reset:s; list-style:none; padding:0; margin:0; display:grid; gap:8px; }
.steps li { counter-increment:s; background:var(--paper); border-radius:12px; padding:10px 14px 10px 46px; position:relative; font-size:14px; }
.steps li::before { content:counter(s); position:absolute; left:14px; top:10px; width:22px; height:22px; border-radius:50%; background:var(--sun); color:#0E1A33; font-weight:900; font-size:12px; display:grid; place-items:center; }
.sys table td:first-child { white-space:nowrap; font-weight:700; }
.sys code { font-family:ui-monospace, Menlo, Consolas, monospace; font-size:0.86em; background:var(--sky); border:1px solid var(--line); border-radius:4px; padding:1px 5px; }
.scroll { overflow-x:auto; }
.sys a, .sys a:visited { color:var(--mark); font-weight:700; }
:root { --c-claude:#8A5CF6; --c-gh:#24292F; --c-cf:#F38020; --c-rs:#0E1A33; --c-web:#B4500A; --c-reader:#2E9E5B; --c-jesper:#C08A00; }
@media (prefers-color-scheme: dark) { :root { --c-gh:#A9B6CC; --c-rs:#EAF0F8; --c-web:#FFA366; } }
.fd { display:flex; flex-direction:column; align-items:center; gap:0; }
.fd-node { background:var(--paper); border:1.5px solid var(--line); border-left:5px solid var(--c, var(--line)); border-radius:12px; padding:10px 14px; width:100%; max-width:340px; }
.fd-node b { display:block; font-size:15px; }
.fd-node small { display:block; color:var(--mist); font-size:13px; margin-top:2px; }
.fd-node .who { font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:var(--c); }
.fd-node.claude { --c:var(--c-claude); } .fd-node.gh { --c:var(--c-gh); } .fd-node.cf { --c:var(--c-cf); } .fd-node.rs { --c:var(--c-rs); } .fd-node.web { --c:var(--c-web); } .fd-node.reader { --c:var(--c-reader); } .fd-node.jesper { --c:var(--c-jesper); border-style:dashed; border-left-style:solid; }
.fd-arrow { position:relative; height:44px; width:100%; max-width:340px; display:flex; align-items:center; justify-content:center; }
.fd-arrow::before { content:""; position:absolute; left:50%; top:4px; bottom:10px; width:2px; background:var(--mark); transform:translateX(-50%); }
.fd-arrow::after { content:""; position:absolute; left:50%; bottom:4px; border:6px solid transparent; border-top:7px solid var(--mark); border-bottom:0; transform:translateX(-50%); }
.fd-arrow span { position:relative; z-index:1; background:var(--sky); color:var(--mist); font-size:12px; font-weight:700; padding:0 8px; margin-left:110px; white-space:nowrap; }
.fd-split { display:grid; grid-template-columns:1fr 1fr; gap:14px; width:100%; max-width:720px; align-items:start; }
.fd-col { display:flex; flex-direction:column; align-items:center; min-width:0; }
.fd-col .fd-arrow span { margin-left:0; position:absolute; top:0; left:calc(50% + 10px); }
.fd-row { display:flex; gap:12px; width:100%; max-width:720px; justify-content:center; align-items:stretch; flex-wrap:wrap; }
.fd-row .fd-node { max-width:340px; flex:1 1 220px; }
.fd-title { font-size:12px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; color:var(--mist); margin:0 0 8px; text-align:center; }
.fd-legend { display:flex; flex-wrap:wrap; gap:6px 14px; justify-content:center; margin:14px 0 0; font-size:12px; color:var(--mist); }
.fd-legend i { display:inline-block; width:10px; height:10px; border-radius:3px; margin-right:5px; vertical-align:-1px; background:var(--c); }
.rm { display:grid; gap:12px; }
.rm .card h3 { margin:0; font-size:16px; display:flex; justify-content:space-between; gap:10px; align-items:baseline; flex-wrap:wrap; }
.rm .goal { color:var(--mist); font-size:13px; margin:2px 0 8px; }
.rm .bar { height:6px; background:var(--line); border-radius:4px; overflow:hidden; margin-bottom:8px; }
.rm .bar span { display:block; height:100%; background:var(--c-reader); border-radius:0 4px 4px 0; }
.rm ul { list-style:none; margin:0; padding:0; }
.rm li { display:grid; grid-template-columns:auto 1fr; gap:10px; align-items:baseline; padding:5px 0; border-top:1px solid var(--line); font-size:14px; }
.rm li:first-child { border-top:0; }
.rm .note { color:var(--mist); font-size:12px; }
.pill { font-size:10px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:999px; padding:2px 8px; white-space:nowrap; border:1.5px solid var(--line); color:var(--mist); }
.pill.done { background:var(--c-reader); border-color:var(--c-reader); color:#FFFFFF; }
.pill.doing { border-color:var(--sun); color:var(--mark); }
.pill.next { border-color:var(--ink); color:var(--ink); }
.pill.jesper { border-color:var(--c-jesper); color:var(--c-jesper); border-style:dashed; }
.phase-status { font-size:11px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; color:var(--mist); }
@media (max-width:560px) { .fd-split { grid-template-columns:1fr; } .fd-arrow span { margin-left:120px; } }
@media (max-width:520px) { .flow::before { left:30px; } .flow li { grid-template-columns:60px 1fr; gap:10px; } .flow .t { font-size:12px; } }
</style>
</head>
<body>
<div class="wrap">
  <header><h1>7am AI statistik</h1><span class="muted" id="gen">Henter tal ...</span></header>
  <div class="tabs" role="tablist">
    <button id="b-stats" role="tab" aria-selected="true" aria-controls="tab-stats">Tal</button>
    <button id="b-system" role="tab" aria-selected="false" aria-controls="tab-system">Sådan virker det</button>
  </div>
  <section id="tab-stats" role="tabpanel">
  <div id="app"></div>
  <footer class="muted">
    Besøg tælles anonymt uden cookies: ingen IP, ingen personer, så det er besøg, ikke unikke læsere.
    Læsetid = aktiv tid med siden synlig på udgavesider (besøg under 3 sek. tæller som "kiggede kun forbi").
    Læst til ende = scrollet mindst 90 %. Tilmeldte = aktive kontakter i Resend (EN + DA). Seneste 30 dage, dansk tid.
  </footer>
  </section>

  <section id="tab-system" role="tabpanel" class="sys" hidden>
    <p class="intro">Hele 7am AI på én side: hvad der sker hver morgen, hvilke tjenester der er med, og hvordan de hænger sammen. Status øverst opdateres live (højst 5 minutter gammel).</p>

    <h2>Status lige nu</h2>
    <div class="status" id="sys-status"><div class="card muted">Henter status ...</div></div>

    <h2>Flowdiagram: sådan bliver udgaven til</h2>
    <div class="card">
      <div class="fd">
        <div class="fd-node claude"><span class="who">Claude · 05:30</span><b>Udkast-agenten</b><small>Opus 5.5 + 4 research-specialister i skyen</small></div>
        <div class="fd-arrow"><span>research, skriv, tjek</span></div>
        <div class="fd-row">
          <div class="fd-node gh"><span class="who">GitHub</span><b>Pull request</b><small>Udgave EN + DA, nye Explained-begreber, kontrolrapport</small></div>
          <div class="fd-node jesper"><span class="who">Jesper · valgfrit</span><b>Merger før 07:00</b><small>Så står der "Reviewed by Jesper"</small></div>
        </div>
        <div class="fd-arrow"><span>kl. 07:16</span></div>
        <div class="fd-node claude"><span class="who">Claude · 07:16</span><b>Afsendelses-agenten</b><small>Sonnet 5.5: merger PR, henter og sender mails</small></div>
        <div class="fd-arrow"><span>merge</span></div>
        <div class="fd-node gh"><span class="who">GitHub Pages</span><b>Bygger siden og mailen</b><small>Jekyll, samme kilde, et par minutter</small></div>
        <div class="fd-split">
          <div class="fd-col">
            <p class="fd-title" style="margin:10px 0 0">Spor 1: hjemmesiden</p>
            <div class="fd-arrow"></div>
            <div class="fd-node web"><span class="who">7amai.com</span><b>Udgaven + biblioteket</b><small>/explained/, sitemap til Google</small></div>
          </div>
          <div class="fd-col">
            <p class="fd-title" style="margin:10px 0 0">Spor 2: mailen</p>
            <div class="fd-arrow"><span>fetch-mail.sh henter /mail/en/ og /mail/da/, broadcast.mjs sender</span></div>
            <div class="fd-node cf"><span class="who">Cloudflare</span><b>Worker 7amai-signup</b><small>/broadcast, Resend-nøglen ligger kun her</small></div>
            <div class="fd-arrow"></div>
            <div class="fd-node rs"><span class="who">Resend</span><b>Sender mailen</b><small>Segment EN og DA, med afmeldingslink</small></div>
          </div>
        </div>
        <div class="fd-arrow"><span>kl. 7</span></div>
        <div class="fd-node reader"><span class="who">Læserne</span><b>Indbakken og 7amai.com</b><small>Engelsk eller dansk</small></div>
      </div>
      <div class="fd-legend">
        <span style="--c:var(--c-claude)"><i></i>Claude (Anthropic)</span><span style="--c:var(--c-gh)"><i></i>GitHub</span><span style="--c:var(--c-cf)"><i></i>Cloudflare</span><span style="--c:var(--c-rs)"><i></i>Resend</span><span style="--c:var(--c-web)"><i></i>Hjemmesiden</span><span style="--c:var(--c-reader)"><i></i>Læserne</span><span style="--c:var(--c-jesper)"><i></i>Dig</span>
      </div>
    </div>

    <h2>Flowdiagram: læserne og tallene</h2>
    <div class="card">
      <div class="fd-split">
        <div class="fd-col">
          <p class="fd-title">Tilmelding (dobbelt opt-in)</p>
          <div class="fd-node web"><span class="who">7amai.com</span><b>Formularen</b><small>Mail + sprog</small></div>
          <div class="fd-arrow"></div>
          <div class="fd-node cf"><span class="who">Cloudflare</span><b>/subscribe</b><small>Signeret link, 72 timer</small></div>
          <div class="fd-arrow"></div>
          <div class="fd-node rs"><span class="who">Resend</span><b>Bekræftelsesmail</b></div>
          <div class="fd-arrow"><span>læseren klikker</span></div>
          <div class="fd-node cf"><span class="who">Cloudflare</span><b>/confirm</b><small>Tjekker signaturen</small></div>
          <div class="fd-arrow"></div>
          <div class="fd-node rs"><span class="who">Resend</span><b>Segment EN eller DA</b><small>Får næste udgave kl. 7</small></div>
        </div>
        <div class="fd-col">
          <p class="fd-title">Anonyme tal (ingen cookies)</p>
          <div class="fd-node reader"><span class="who">Læseren</span><b>Læser en side</b></div>
          <div class="fd-arrow"><span>side, kilde, tid</span></div>
          <div class="fd-node cf"><span class="who">Cloudflare</span><b>/hit</b><small>Kun tal, intet om personen</small></div>
          <div class="fd-arrow"></div>
          <div class="fd-node cf"><span class="who">Cloudflare</span><b>D1-database i EU</b><small>Anonyme besøg</small></div>
          <div class="fd-arrow"></div>
          <div class="fd-node cf"><span class="who">Cloudflare</span><b>Dette dashboard</b><small>Henter tilmeldte via intern forbindelse</small></div>
        </div>
      </div>
    </div>

    <h2>Køreplan</h2>
    <p class="intro">Hvad der er bygget, hvad der er i gang, og hvad der kommer. Læses live fra <code>.agent/roadmap.json</code> i repoet.</p>
    <div class="rm" id="roadmap" style="margin-top:10px"><div class="card muted">Henter køreplanen ...</div></div>

    <h2>En morgen i 7am AI</h2>
    <ol class="flow">
      <li class="key"><div class="t">05:30</div><div class="b"><strong>Udkastet starter i skyen</strong><span>En planlagt Claude-agent (Opus 5.5) i Anthropics sky starter med repoet tjekket ud. Den læser sin vejledning (.agent/INSTRUCTIONS.md) og stilguiden. Kl. 04:30 i vintertid.</span><div class="chips"><span class="chip">Claude routine</span><span class="chip">miljø 7am-ai</span></div></div></li>
      <li><div class="t">05:31</div><div class="b"><strong>Fire research-specialister</strong><span>Agenten sender fire hjælpere ud samtidig: modeller og laboratorier, udviklerværktøjer, open source og lokal AI, forskning og regulering. Mindst 15 kandidater med kilder kommer tilbage og får point.</span><div class="chips"><span class="chip">WebSearch</span><span class="chip">WebFetch</span><span class="chip">SOURCES.md</span></div></div></li>
      <li><div class="t">05:40</div><div class="b"><strong>Skriver udgaven på to sprog</strong><span>Kerne på 5-7 min på engelsk og dansk: højst 5 hovedhistorier (nyheder fra samme firma samles i én), Open source og lokal AI og Paper of the day. Hver historie fortælles med "Kort fortalt", en tråd og "Derfor er det vigtigt". Øverst "Dagen på 60 sekunder", nederst dagens tre Explained-begreber.</span><div class="chips"><span class="chip">_posts</span><span class="chip">_da</span><span class="chip">_explained</span></div></div></li>
      <li><div class="t">05:45</div><div class="b"><strong>Redaktørkontrol</strong><span>Alle kilder åbnes igen, 10 kriterier tjekkes, og readability.py måler sætningslængde og skriver de ærlige læsetider (200 ord/min, rundet op). og-image.py tegner dagens delingsbillede (link-kortet på Bluesky m.fl.) ud fra lead-historiens nøgletal. Rapporten kommer øverst i PR'en.</span><div class="chips"><span class="chip">EDITORIAL.md</span><span class="chip">readability.py</span></div></div></li>
      <li class="key"><div class="t">05:50</div><div class="b"><strong>Pull request på GitHub</strong><span>Udgaven lægges på branchen issue/&lt;dato&gt;. Ingen mail til Jesper. En hook (guard.mjs) holder øje med hvert skridt og blokerer, hvis en regel brydes.</span><div class="chips"><span class="chip">GitHub</span><span class="chip">guard.mjs</span></div></div></li>
      <li><div class="t">før 07:00</div><div class="b"><strong>Valgfrit: Jesper godkender</strong><span>Merger Jesper PR'en før kl. 7 (fx i GitHub-appen), står der "Reviewed by Jesper". Ellers står der det ærlige mærke "checked against our editorial standards".</span><div class="chips"><span class="chip">EU AI Act art. 50</span></div></div></li>
      <li class="key"><div class="t">07:16</div><div class="b"><strong>Afsendelsen</strong><span>En anden agent (Sonnet 5.5) merger PR'en, så GitHub Pages bygger 7amai.com på et par minutter. Jekyll bygger også mailen på begge sprog (/mail/en/ og /mail/da/) fra samme filer som siden, så agenten skriver ikke selv mailen. Mailen er visuel: ét kort pr. historie med ikon, nøgletal eller lille grafik (kun tal fra historien), kort fortalt og en knap til hele historien på siden; udviklerstof samlet nederst. fetch-mail.sh venter, til Pages har bygget den nyeste commit, henter mailen og tjekker den. Så sendes den via broadcast.mjs til tilmeldings-workeren, som beder Resend sende den til alle i segmentet (med afmeldingslink). Dagen skrives i sent.log.</span><div class="chips"><span class="chip">GitHub Pages</span><span class="chip">fetch-mail.sh</span><span class="chip">Cloudflare worker</span><span class="chip">Resend</span></div></div></li>
      <li><div class="t">hele dagen</div><div class="b"><strong>Læserne</strong><span>Folk læser mailen og siden. Siden sender anonyme tal (side, kilde, læsetid, scroll) til /hit, som gemmer dem i databasen D1 i EU. Det er dem, fanen "Tal" viser. Nye læsere tilmelder sig via formularen.</span><div class="chips"><span class="chip">beacon</span><span class="chip">D1</span><span class="chip">dette dashboard</span></div></div></li>
    </ol>

    <h2>Tjenesterne, og hvad de gør</h2>
    <div class="svc">
      <div class="card"><div class="role">Hjernen</div><h3>Anthropic / Claude</h3><ul>
        <li>Routine <b>udkast</b>: kl. 05:30, Opus 5.5 + 4 research-hjælpere</li>
        <li>Routine <b>afsendelse</b>: kl. 07:16, Sonnet 5.5</li>
        <li>Miljø <b>7am-ai</b>: fuldt netværk, network secrets til Resend og broadcast</li>
        <li><a href="https://claude.ai/code/routines" rel="noreferrer">Routines og kørselslogs</a></li></ul></div>
      <div class="card"><div class="role">Kode, historik og hjemmeside</div><h3>GitHub</h3><ul>
        <li>Repo <a href="https://github.com/Repzei/7amai" rel="noreferrer">Repzei/7amai</a> (offentligt)</li>
        <li>Én PR pr. udgave, branchen slettes automatisk ved merge</li>
        <li>GitHub Pages bygger og hoster 7amai.com og mailen (Jekyll, _layouts/email.html; kort, ikoner og grafik i HTML)</li>
        <li>.agent/: vejledning, stil, kriterier, kilder, scripts</li></ul></div>
      <div class="card"><div class="role">Domæne, mail og små servere</div><h3>Cloudflare</h3><ul>
        <li>DNS for 7amai.com (alle records "DNS only")</li>
        <li>Email Routing: privacy@7amai.com til Jespers Gmail</li>
        <li>Worker <b>7amai-signup</b>: /subscribe, /confirm, /broadcast, /hit</li>
        <li>Worker <b>7amai-stats</b>: dette dashboard (adgangskode)</li>
        <li>D1-database <b>7amai-stats</b> i EU: anonyme besøg</li></ul></div>
      <div class="card"><div class="role">Mailudsendelse</div><h3>Resend</h3><ul>
        <li>Domæne 7amai.com (records på send. og rsend.)</li>
        <li>Segmenter: 7am AI EN og 7am AI DA</li>
        <li>Broadcasts med indbygget afmelding</li>
        <li>Bekræftelsesmails ved tilmelding</li></ul></div>
      <div class="card"><div class="role">Synlighed</div><h3>Google</h3><ul>
        <li>Search Console: 7amai.com bekræftet, sitemap indsendt</li>
        <li>Sitemap og robots.txt laves automatisk af Jekyll</li>
        <li>Google Fonts leverer skrifttyperne</li></ul></div>
      <div class="card"><div class="role">Domænet</div><h3>simply.com</h3><ul>
        <li>7amai.com er registreret her</li>
        <li>Navneserverne peger på Cloudflare (frida og guss)</li>
        <li>Rør ikke knappen "Ændre navneservere til Simply.com"</li></ul></div>
    </div>

    <h2>Når nogen tilmelder sig (dobbelt opt-in)</h2>
    <ol class="steps">
      <li>Læseren skriver sin mail i formularen på 7amai.com (engelsk eller dansk side).</li>
      <li>Tilmeldings-workeren laver et signeret link (gyldigt i 72 timer) og sender en bekræftelsesmail via Resend.</li>
      <li>Læseren klikker på linket. Workeren tjekker signaturen og lægger kontakten i segmentet EN eller DA i Resend.</li>
      <li>Læseren lander på velkomstsiden og får den næste udgave kl. 7. Afmelding sker med ét klik i hver mail.</li>
    </ol>

    <h2>Hvor hemmelighederne ligger</h2>
    <p class="intro">Kun navne. Værdierne står aldrig i repoet, og agenterne kan ikke læse dem: en proxy sætter dem på undervejs.</p>
    <div class="card scroll" style="margin-top:10px"><table>
      <thead><tr><th>Navn</th><th>Ligger i</th><th>Bruges til</th></tr></thead>
      <tbody>
        <tr><td>RESEND_API_KEY (fuld adgang)</td><td>Worker 7amai-signup</td><td>Broadcasts, kontakter, tælle tilmeldte. Kun ét sted.</td></tr>
        <tr><td>SIGNING_SECRET</td><td>Worker 7amai-signup</td><td>Signerer bekræftelseslinks</td></tr>
        <tr><td>BROADCAST_TOKEN</td><td>Worker 7amai-signup + miljø 7am-ai</td><td>Agenten må bede workeren sende udgaven</td></tr>
        <tr><td>Resend sende-nøgle</td><td>Miljø 7am-ai (network secret)</td><td>Mail til Jesper (fallback)</td></tr>
        <tr><td>STATS_PASSWORD</td><td>Worker 7amai-stats</td><td>Login til dette dashboard</td></tr>
      </tbody></table></div>

    <h2>Sikkerhedsnet</h2>
    <div class="svc">
      <div class="card"><h3>Hårde regler (guard.mjs)</h3><ul>
        <li>"Reviewed by Jesper" kun ved Jespers merge før 07:00</li>
        <li>Agenten må ikke merge før 07:00</li>
        <li>Ingen mail med em dash eller {{-rester</li>
        <li>Tal i mailens grafik skal stå i historien (readability.py i redaktørkontrollen)</li>
        <li>Mail kun via send-mail.mjs og broadcast.mjs</li>
        <li>GitHub-connectoren må ikke skrive filer</li></ul></div>
      <div class="card"><h3>Kvalitet</h3><ul>
        <li>Redaktørkontrol med 10 kriterier og genåbnede kilder</li>
        <li>readability.py: korte sætninger og ærlige læsetider</li>
        <li>Kun fakta fra kilder, agenten selv har åbnet</li></ul></div>
      <div class="card"><h3>Når noget fejler</h3><ul>
        <li>Mailen er ikke bygget efter 10 min: intet sendes, fejlen står i kørselsloggen</li>
        <li>Broadcast fejler: mailen går til Jesper i stedet</li>
        <li>Tomt segment: springes over, ikke en fejl</li>
        <li>Agenten skriver altid status i sin sidste linje (se kørselsloggen)</li></ul></div>
      <div class="card"><h3>Privatliv</h3><ul>
        <li>Ingen sporing af åbninger eller klik i mails</li>
        <li>Besøg tælles uden cookies og uden IP</li>
        <li>Data i EU, privatlivspolitik på begge sprog</li></ul></div>
    </div>
  </section>
</div>
<script>
(function () {
  var app = document.getElementById("app");
  var SRC = { mail: "Mailen", bluesky: "Bluesky", threads: "Threads", forward: "Videresendt mail", share: "Delte links", search: "Søgning", social: "Andre sociale medier", direct: "Direkte", internal: "Intern klik", other: "Andre sider" };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pct(x) { return x == null ? "-" : Math.round(x * 100) + " %"; }
  function dur(s) { if (s == null) return "-"; var m = Math.floor(s / 60), r = s % 60; return m ? m + " min " + r + " s" : r + " s"; }
  function clock(s) { if (s == null) return "-"; var r = s % 60; return Math.floor(s / 60) + ":" + (r < 10 ? "0" : "") + r + '<span class="unit"> min</span>'; }
  function dk(day) { var p = day.split("-"); return +p[2] + "/" + +p[1]; }
  function kpi(label, value, sub) { return '<div class="card kpi"><div class="label">' + label + '</div><div class="value">' + value + '</div><div class="sub">' + (sub || "&nbsp;") + "</div></div>"; }

  function bars(el, rows, label) {
    var W = 600, H = 200, L = 32, B = 22, T = 8, max = Math.max(1, Math.max.apply(null, rows.map(function (r) { return r.v; })));
    var step = (W - L) / rows.length, bw = Math.max(2, step - 2);
    var nice = Math.ceil(max / 4) * 4 || 4, svg = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(label) + '">';
    for (var g = 0; g <= 4; g++) { var gy = T + (H - B - T) * (1 - g / 4); svg += '<line class="grid" x1="' + L + '" x2="' + W + '" y1="' + gy + '" y2="' + gy + '"/><text class="axis" x="' + (L - 6) + '" y="' + (gy + 4) + '" text-anchor="end">' + Math.round(nice * g / 4) + "</text>"; }
    rows.forEach(function (r, i) {
      var h = (H - B - T) * r.v / nice, x = L + i * step + 1, y = H - B - h;
      svg += '<rect class="hit" data-i="' + i + '" x="' + (x - 1) + '" y="' + T + '" width="' + step + '" height="' + (H - B - T) + '" fill="transparent"/>';
      if (h > 0) svg += '<path class="bar" d="M' + x + "," + (H - B) + "V" + (y + Math.min(4, h)) + "q0,-" + Math.min(4, h) + " " + Math.min(4, bw / 2) + ",-" + Math.min(4, h) + "H" + (x + bw - Math.min(4, bw / 2)) + "q" + Math.min(4, bw / 2) + ",0 " + Math.min(4, bw / 2) + "," + Math.min(4, h) + "V" + (H - B) + 'Z"/>';
      else svg += '<rect class="bar" x="' + x + '" y="' + (H - B) + '" width="0" height="0"/>';
      if (i % 5 === 0 || i === rows.length - 1) svg += '<text class="axis" x="' + (x + bw / 2) + '" y="' + (H - 6) + '" text-anchor="middle">' + esc(r.x) + "</text>";
    });
    el.innerHTML = svg + '</svg><div class="tip"></div>';
    hover(el, rows, W, function (i) { return L + i * step + step / 2; }, function (r) { return r.tip; });
  }

  function line(el, rows, label) {
    var W = 600, H = 200, L = 32, B = 22, T = 8, max = Math.max(1, Math.max.apply(null, rows.map(function (r) { return r.v; })));
    var nice = Math.ceil(max / 4) * 4 || 4, step = (W - L) / Math.max(1, rows.length - 1);
    var px = function (i) { return L + i * step; }, py = function (v) { return T + (H - B - T) * (1 - v / nice); };
    var svg = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(label) + '">';
    for (var g = 0; g <= 4; g++) { var gy = py(nice * g / 4); svg += '<line class="grid" x1="' + L + '" x2="' + W + '" y1="' + gy + '" y2="' + gy + '"/><text class="axis" x="' + (L - 6) + '" y="' + (gy + 4) + '" text-anchor="end">' + Math.round(nice * g / 4) + "</text>"; }
    svg += '<path class="line" d="' + rows.map(function (r, i) { return (i ? "L" : "M") + px(i) + "," + py(r.v); }).join("") + '"/>';
    rows.forEach(function (r, i) {
      svg += '<rect class="hit" x="' + (px(i) - step / 2) + '" y="' + T + '" width="' + step + '" height="' + (H - B - T) + '" fill="transparent"/>';
      if (i % 5 === 0 || i === rows.length - 1) svg += '<text class="axis" x="' + px(i) + '" y="' + (H - 6) + '" text-anchor="middle">' + esc(r.x) + "</text>";
    });
    var last = rows[rows.length - 1];
    svg += '<circle class="dot" cx="' + px(rows.length - 1) + '" cy="' + py(last.v) + '" r="4.5"/>';
    el.innerHTML = svg + '</svg><div class="tip"></div>';
    hover(el, rows, W, px, function (r) { return r.tip; });
  }

  function hover(el, rows, W, xOf, text) {
    var svg = el.querySelector("svg"), tip = el.querySelector(".tip"), hits = el.querySelectorAll(".hit");
    hits.forEach(function (h, i) {
      h.addEventListener("mouseenter", function () {
        var scale = svg.getBoundingClientRect().width / W;
        tip.textContent = text(rows[i]); tip.style.display = "block";
        tip.style.left = xOf(i) * scale + "px"; tip.style.top = "8px";
      });
      h.addEventListener("mouseleave", function () { tip.style.display = "none"; });
    });
  }

  var tabs = document.querySelectorAll(".tabs button");
  function show(id) {
    tabs.forEach(function (b) { var on = b.getAttribute("aria-controls") === id; b.setAttribute("aria-selected", on ? "true" : "false"); document.getElementById(b.getAttribute("aria-controls")).hidden = !on; });
  }
  tabs.forEach(function (b) { b.addEventListener("click", function () { var id = b.getAttribute("aria-controls"); show(id); history.replaceState(null, "", id === "tab-system" ? "#system" : "#"); }); });
  if (location.hash === "#system") show("tab-system");

  function renderSystem(s) {
    var el = document.getElementById("sys-status");
    if (!s) { el.innerHTML = '<div class="card muted">Status kunne ikke hentes lige nu.</div>'; return; }
    var i = s.issue, cards = [];
    var sentToday = s.lastSent === s.today;
    cards.push('<div class="card"><div class="label">Seneste udgave</div><div class="v">' + (i ? '<a href="' + esc(i.url) + '" rel="noreferrer">' + dk(i.date) + '</a>' : "-") + '</div><div class="sub">' + (i ? esc(i.title) : "") + '</div></div>');
    var st = !i ? "-" : i.state === "merged" ? (i.approved ? '<span class="dot ok"></span>Reviewed by Jesper' : '<span class="dot ok"></span>Udgivet, AI-mærket') : i.state === "open" ? '<span class="dot warn"></span>Venter (PR åben)' : '<span class="dot bad"></span>Lukket uden merge';
    cards.push('<div class="card"><div class="label">Godkendelse</div><div class="v">' + st + '</div><div class="sub">' + (i ? 'PR <a href="' + esc(i.prUrl) + '" rel="noreferrer">#' + i.pr + '</a> oprettet ' + esc(i.created) + (i.mergedAt ? ", merget " + esc(i.mergedAt.slice(11)) : "") : "") + '</div></div>');
    cards.push('<div class="card"><div class="label">Afsendelse</div><div class="v">' + (sentToday ? '<span class="dot ok"></span>Sendt i dag' : '<span class="dot warn"></span>Ikke sendt i dag endnu') + '</div><div class="sub">Senest sendt: ' + (s.lastSent ? dk(s.lastSent) : "-") + " · " + s.sentCount + ' udgaver i alt</div></div>');
    cards.push('<div class="card"><div class="label">Næste kørsler</div><div class="v">05:30 og 07:16</div><div class="sub">Udkast og afsendelse, alle 7 dage (04:30 / 07:16 i vintertid)</div></div>');
    el.innerHTML = cards.join("");
    renderRoadmap(s.roadmap);
  }

  function renderRoadmap(r) {
    var el = document.getElementById("roadmap");
    if (!r || !r.phases) { el.innerHTML = '<div class="card muted">Køreplanen kunne ikke hentes lige nu.</div>'; return; }
    var L = { done: "Færdig", doing: "I gang", next: "Næste", later: "Senere", jesper: "Dit trin" };
    var P = { done: "Færdig", doing: "I gang nu", next: "Næste", later: "Senere" };
    el.innerHTML = r.phases.map(function (ph) {
      var items = ph.items || [], done = items.filter(function (i) { return i.s === "done"; }).length;
      var pctDone = items.length ? Math.round(done / items.length * 100) : 0;
      return '<div class="card"><h3>' + esc(ph.name) + '<span class="phase-status">' + esc(P[ph.status] || "") + " · " + done + "/" + items.length + '</span></h3>' +
        '<div class="goal">' + esc(ph.goal || "") + '</div><div class="bar"><span style="width:' + pctDone + '%"></span></div><ul>' +
        items.map(function (i) { return '<li><span class="pill ' + esc(i.s) + '">' + esc(L[i.s] || i.s) + '</span><span>' + esc(i.t) + (i.note ? ' <span class="note">(' + esc(i.note) + ')</span>' : "") + "</span></li>"; }).join("") +
        "</ul></div>";
    }).join("") + '<div class="muted" style="font-size:12px">Opdateret ' + esc(r.updated || "") + "</div>";
  }

  fetch("/api", { credentials: "same-origin" }).then(function (r) { return r.json(); }).then(function (d) {
    if (d.error) throw new Error(d.error);
    renderSystem(d.system);
    var s = d.subscribers, v = d.visits;
    document.getElementById("gen").textContent = "Opdateret " + new Date(d.generated).toLocaleString("da-DK");
    var trend = v.prev7 ? Math.round((v.total7 - v.prev7) / v.prev7 * 100) : null;
    app.innerHTML =
      '<div class="kpis">' +
        kpi("Tilmeldte", s.total, "EN " + s.en.active + " · DA " + s.da.active + (s.en.unsubscribed + s.da.unsubscribed ? " · afmeldt " + (s.en.unsubscribed + s.da.unsubscribed) : "")) +
        kpi("Nye tilmeldte", "+" + s.new7, "seneste 7 dage · +" + s.new30 + " på 30 dage") +
        kpi("Besøg", v.total7, "seneste 7 dage" + (trend == null ? "" : " · " + (trend >= 0 ? "+" : "") + trend + " % mod ugen før")) +
        kpi("Læsetid", clock(v.medianSec), "median pr. udgavebesøg · gns. " + dur(v.avgSec)) +
        kpi("Læst til ende", pct(v.completion), "af " + v.issueVisits + " udgavebesøg · kiggede kun forbi " + pct(v.bounce)) +
      "</div>" +
      '<div class="grid2">' +
        '<div class="card"><h2>Besøg pr. dag</h2><div class="chart" id="c-visits"></div><div class="muted">' + v.total30 + " besøg på 30 dage, heraf " + v.mail30 + " fra mailen</div></div>" +
        '<div class="card"><h2>Tilmeldte over tid</h2><div class="chart" id="c-subs"></div><div class="muted">Aktive tilmeldte efter tilmeldingsdato</div></div>' +
      "</div>" +
      '<div class="grid2" style="margin-top:12px">' +
        '<div class="card"><h2>Hvor kommer besøgene fra</h2><div id="c-src"></div></div>' +
        '<div class="card"><h2>Udgaver</h2><table><thead><tr><th>Udgave</th><th class="num">Besøg</th><th class="num">Gns. læsetid</th><th class="num">Til ende</th></tr></thead><tbody id="t-issues"></tbody></table></div>' +
      "</div>";

    bars(document.getElementById("c-visits"), v.series.map(function (r) { return { x: dk(r.day), v: r.n, tip: dk(r.day) + ": " + r.n + " besøg (" + r.mail + " fra mailen)" }; }), "Besøg pr. dag, seneste 30 dage");
    line(document.getElementById("c-subs"), s.cumulative.map(function (r) { return { x: dk(r.day), v: r.total, tip: dk(r.day) + ": " + r.total + " tilmeldte" }; }), "Tilmeldte over tid");

    var maxSrc = Math.max(1, Math.max.apply(null, v.bySrc.map(function (r) { return r.n; }).concat([0])));
    document.getElementById("c-src").innerHTML = v.bySrc.length ? v.bySrc.map(function (r) {
      return '<div class="hbar"><span>' + esc(SRC[r.src] || r.src) + '</span><div class="track"><div class="fill" style="width:' + Math.round(r.n / maxSrc * 100) + '%"></div></div><span class="n">' + r.n + "</span></div>";
    }).join("") : '<div class="muted">Ingen besøg endnu.</div>';

    document.getElementById("t-issues").innerHTML = v.issues.length ? v.issues.map(function (r) {
      return '<tr><td><a href="https://7amai.com' + esc(r.path) + '" rel="noreferrer">' + esc(r.path) + '</a></td><td class="num">' + r.n + '</td><td class="num">' + dur(r.avg) + '</td><td class="num">' + pct(r.done) + "</td></tr>";
    }).join("") : '<tr><td colspan="4" class="muted">Ingen udgavebesøg endnu.</td></tr>';
  }).catch(function (e) {
    app.innerHTML = '<p class="err">Kunne ikke hente tallene: ' + esc(e.message) + "</p>";
  });
})();
</script>
</body>
</html>`;
