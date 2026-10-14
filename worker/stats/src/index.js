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
  const [subscribers, visits] = await Promise.all([env.SIGNUP.subscribers(days), visitStats(env, days, from, week, prevWeekFrom)]);
  return { generated: new Date().toISOString(), days, subscribers, visits };
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
</style>
</head>
<body>
<div class="wrap">
  <header><h1>7am AI statistik</h1><span class="muted" id="gen">Henter tal ...</span></header>
  <div id="app"></div>
  <footer class="muted">
    Besøg tælles anonymt uden cookies: ingen IP, ingen personer, så det er besøg, ikke unikke læsere.
    Læsetid = aktiv tid med siden synlig på udgavesider (besøg under 3 sek. tæller som "kiggede kun forbi").
    Læst til ende = scrollet mindst 90 %. Tilmeldte = aktive kontakter i Resend (EN + DA). Seneste 30 dage, dansk tid.
  </footer>
</div>
<script>
(function () {
  var app = document.getElementById("app");
  var SRC = { mail: "Mailen", search: "Søgning", social: "Sociale medier", direct: "Direkte", internal: "Intern klik", other: "Andre sider" };
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

  fetch("/api", { credentials: "same-origin" }).then(function (r) { return r.json(); }).then(function (d) {
    if (d.error) throw new Error(d.error);
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
