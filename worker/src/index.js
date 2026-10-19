// 7am AI tilmelding: dobbelt opt-in uden database (D1 bruges kun til anonym besøgsstatistik).
// POST /subscribe  -> sender en bekræftelsesmail med et signeret link
// GET  /confirm    -> tjekker signaturen og tilføjer kontakten til EN- eller DA-segmentet i Resend
// Afmelding klares af Resend via {{{RESEND_UNSUBSCRIBE_URL}}} i hver udsendelse.
// POST /hit        -> anonym besøgsstatistik i D1 "7amai-stats" (se schema.sql), læses af worker/stats

import { WorkerEntrypoint } from "cloudflare:workers";
import { subscriberStats } from "./subscribers.js";

// Kun til dashboardet (worker/stats) via service binding: en navngiven entrypoint kan ikke nås over HTTP.
export class Stats extends WorkerEntrypoint {
  async subscribers(days) {
    return subscriberStats(this.env, days);
  }
}

const MAX_AGE_SECONDS = 72 * 3600;
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {
      "Access-Control-Allow-Origin": env.SITE,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (url.pathname === "/hit" && request.method === "POST") return hit(request, env, cors);
    // Uden hemmeligheder kører intet: et link signeret med en tom eller gætbar nøgle ville kunne forfalskes.
    if (!env.SIGNING_SECRET || env.SIGNING_SECRET.length < 32 || !env.RESEND_API_KEY) {
      return new Response(JSON.stringify({ ok: false, error: "not_configured" }), { status: 503, headers: { ...cors, "Content-Type": "application/json" } });
    }
    if (url.pathname === "/subscribe" && request.method === "POST") return subscribe(request, env, url, cors);
    if (url.pathname === "/confirm" && request.method === "GET") return confirm(url, env);
    if (url.pathname === "/broadcast" && request.method === "POST") return broadcast(request, env);
    return new Response("Not found", { status: 404 });
  },
};

// Anonym besøgsstatistik: kun tal, intet om personen (ingen IP, user agent eller klokkeslæt gemmes).
// Siden sender med sendBeacon som text/plain, så browseren ikke laver en CORS-preflight.
const HIT_SOURCES = new Set(["mail", "search", "social", "other", "direct", "internal"]);
async function hit(request, env, cors) {
  const done = (status) => new Response(null, { status, headers: cors });
  if (request.headers.get("Origin") !== env.SITE) return done(403);
  if (!env.DB) return done(204);
  let b;
  try {
    const raw = await request.text();
    if (raw.length > 1000) return done(413);
    b = JSON.parse(raw);
  } catch { return done(400); }

  const path = String(b.p || "");
  const seconds = Math.round(Number(b.t));
  const scroll = Math.round(Number(b.y));
  if (!/^\/[a-z0-9\/._-]{0,120}$/i.test(path) || !Number.isFinite(seconds) || !Number.isFinite(scroll)) return done(400);
  const lang = b.l === "da" ? "da" : "en";
  const src = HIT_SOURCES.has(b.s) ? b.s : "other";
  const day = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Copenhagen" }).format(new Date());

  await env.DB.prepare("INSERT INTO visits (day, path, lang, src, seconds, scroll) VALUES (?, ?, ?, ?, ?, ?)")
    .bind(day, path, lang, src, Math.min(Math.max(seconds, 0), 1800), Math.min(Math.max(scroll, 0), 100))
    .run();
  return done(204);
}

// Mindste adgang: agenten har ikke Resend-nøglen med fuld adgang. Den kan kun bede workeren
// om at sende dagens udgave til et af 7am AI-segmenterne (BROADCAST_TOKEN som network secret).
async function broadcast(request, env) {
  const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
  const given = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
  if (!env.BROADCAST_TOKEN || !(await sameSecret(given, env.BROADCAST_TOKEN))) return json(401, { ok: false, error: "unauthorized" });

  let b;
  try { b = await request.json(); } catch { return json(400, { ok: false, error: "bad_request" }); }
  const segment = b.lang === "da" ? env.SEGMENT_DA : b.lang === "en" ? env.SEGMENT_EN : "";
  if (!segment || !b.subject || !b.html) return json(400, { ok: false, error: "missing_fields" });

  const unsub = b.lang === "da" ? "Afmeld" : "Unsubscribe";
  const footer = `<p style="font-family:Helvetica,Arial,sans-serif;font-size:12px;color:#55627A;text-align:center;margin:16px 0;"><a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#55627A;">${unsub}</a></p>`;
  const html = b.html.includes("{{{RESEND_UNSUBSCRIBE_URL}}}") ? b.html : b.html.replace(/<\/body>/i, `${footer}</body>`);
  const text = `${b.text || ""}\n\n${unsub}: {{{RESEND_UNSUBSCRIBE_URL}}}`;

  const res = await fetch("https://api.resend.com/broadcasts", {
    method: "POST",
    headers: { Authorization: `Bearer ${String(env.RESEND_API_KEY).trim()}`, "Content-Type": "application/json" },
    // Resend tillader højst 70 tegn i det interne navn; emnet (det læserne ser) forkortes aldrig her.
    body: JSON.stringify({ segment_id: segment, from: env.FROM, subject: String(b.subject).slice(0, 200), html, text, name: String(b.name || b.subject).slice(0, 70), send: true }),
  });
  const out = await res.text();
  // Et segment uden tilmeldte (fx det danske i starten) er ikke en fejl: der er bare ingen at sende til.
  if (res.status === 422 && /no contacts/i.test(out)) return json(200, { ok: true, skipped: "empty_segment" });
  return json(res.ok ? 200 : 502, res.ok ? { ok: true, resend: JSON.parse(out || "{}") } : { ok: false, error: "resend_failed", detail: out.slice(0, 300) });
}

// Sammenligner hemmeligheder uden at afsløre noget via svartid.
async function sameSecret(a, b) {
  const k = await hmacKey("cmp");
  const [x, y] = await Promise.all([crypto.subtle.sign("HMAC", k, enc.encode(a)), crypto.subtle.sign("HMAC", k, enc.encode(b))]);
  const ua = new Uint8Array(x), ub = new Uint8Array(y);
  let d = 0;
  for (let i = 0; i < ua.length; i++) d |= ua[i] ^ ub[i];
  return d === 0;
}

async function subscribe(request, env, url, cors) {
  const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
  let data;
  try {
    data = request.headers.get("Content-Type")?.includes("application/json")
      ? await request.json()
      : Object.fromEntries(await request.formData());
  } catch {
    return json(400, { ok: false, error: "bad_request" });
  }

  // Honeypot: et skjult felt, som kun bots udfylder. Svar "ok", så de ikke lærer noget.
  if (data.website) return json(200, { ok: true });

  const email = String(data.email || "").trim().toLowerCase();
  const lang = data.lang === "da" ? "da" : "en";
  if (email.length > 254 || !EMAIL_RE.test(email)) return json(400, { ok: false, error: "invalid_email" });

  const token = await sign({ e: email, l: lang, t: Math.floor(Date.now() / 1000) }, env.SIGNING_SECRET);
  const link = `${url.origin}/confirm?token=${encodeURIComponent(token)}`;
  const mail = confirmationMail(lang, link, env.SITE);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${String(env.RESEND_API_KEY).trim()}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: env.FROM, to: [email], subject: mail.subject, html: mail.html, text: mail.text }),
  });
  if (!res.ok) {
    const detail = await res.text();
    const k = String(env.RESEND_API_KEY); console.log("resend /emails fejlede", res.status, detail.slice(0, 300), "noegle: laengde", k.trim().length, "re_", k.trim().startsWith("re_"), "mellemrum", /\s/.test(k));
    return json(502, { ok: false, error: "send_failed", status: res.status });
  }
  return json(200, { ok: true });
}

async function confirm(url, env) {
  const go = (lang, status) => Response.redirect(`${env.SITE}${lang === "da" ? "/da" : ""}/welcome/${status ? `?s=${status}` : ""}`, 302);
  const payload = await verify(url.searchParams.get("token") || "", env.SIGNING_SECRET);
  if (!payload) return go("en", "invalid");
  if (Math.floor(Date.now() / 1000) - payload.t > MAX_AGE_SECONDS) return go(payload.l, "expired");

  const segment = payload.l === "da" ? env.SEGMENT_DA : env.SEGMENT_EN;
  const auth = { Authorization: `Bearer ${String(env.RESEND_API_KEY).trim()}`, "Content-Type": "application/json" };
  const res = await fetch("https://api.resend.com/contacts", {
    method: "POST",
    headers: auth,
    body: JSON.stringify({ email: payload.e, unsubscribed: false, segments: [{ id: segment }] }),
  });
  if (!res.ok) {
    // Findes kontakten allerede (fx en, der har afmeldt sig og tilmelder sig igen), så slå den til igen.
    const upd = await fetch(`https://api.resend.com/contacts/${encodeURIComponent(payload.e)}`, {
      method: "PATCH",
      headers: auth,
      body: JSON.stringify({ unsubscribed: false }),
    });
    if (!upd.ok) return go(payload.l, "error");
  }
  return go(payload.l, "");
}

// --- signerede tokens (HMAC-SHA256), så bekræftelseslinket ikke kan forfalskes ---
const enc = new TextEncoder();
const b64url = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const unb64url = (s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
const hmacKey = (secret) => crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);

async function sign(payload, secret) {
  const body = b64url(enc.encode(JSON.stringify(payload)));
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(secret), enc.encode(body));
  return `${body}.${b64url(sig)}`;
}

async function verify(token, secret) {
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  try {
    const ok = await crypto.subtle.verify("HMAC", await hmacKey(secret), unb64url(sig), enc.encode(body));
    if (!ok) return null;
    const p = JSON.parse(new TextDecoder().decode(unb64url(body)));
    return typeof p.e === "string" && typeof p.t === "number" ? p : null;
  } catch {
    return null;
  }
}

// --- bekræftelsesmailen (First Light, mail-sikre skrifttyper, natblå tekst på solorange) ---
function confirmationMail(lang, link, site) {
  const t = lang === "da"
    ? { subject: "Bekræft din tilmelding til 7am AI", h: "Bekræft din tilmelding", p: "Tryk på knappen, så får du dagens AI-nyheder, du kan stole på, kl. 7 hver morgen på 7 minutter.", b: "Bekræft tilmelding", n: "Har du ikke bedt om det, kan du bare ignorere mailen. Linket virker i 3 døgn." }
    : { subject: "Confirm your 7am AI subscription", h: "Confirm your subscription", p: "Tap the button and you will get daily AI news you can trust at 7am every morning, in 7 minutes.", b: "Confirm subscription", n: "If you did not ask for this, just ignore this email. The link works for 3 days." };
  const html = `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#EEF3FA;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EEF3FA;"><tr><td align="center" style="padding:28px 12px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#FFFFFF;border-radius:16px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#0E1A33;"><tr><td style="padding:26px 26px 8px;"><img src="${site}/assets/logo-mail.png" width="40" height="40" alt="" style="vertical-align:middle;border-radius:9px;"><span style="font-size:19px;font-weight:800;vertical-align:middle;margin-left:8px;">7am AI</span></td></tr><tr><td style="padding:12px 26px 26px;"><h1 style="font-size:24px;line-height:1.15;margin:0 0 10px;">${t.h}</h1><p style="font-family:Georgia,serif;font-size:16px;line-height:1.5;color:#55627A;margin:0 0 20px;">${t.p}</p><a href="${link}" style="display:inline-block;background:#FF8A2A;color:#0E1A33;text-decoration:none;font-weight:800;font-size:15px;padding:12px 22px;border-radius:999px;">${t.b}</a><p style="font-size:12px;line-height:1.5;color:#55627A;margin:20px 0 0;">${t.n}</p></td></tr></table></td></tr></table></body></html>`;
  const text = `${t.h}\n\n${t.p}\n\n${t.b}: ${link}\n\n${t.n}`;
  return { subject: t.subject, html, text };
}
