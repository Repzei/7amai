// 7am AI tilmelding: dobbelt opt-in uden database.
// POST /subscribe  -> sender en bekræftelsesmail med et signeret link
// GET  /confirm    -> tjekker signaturen og tilføjer kontakten til EN- eller DA-segmentet i Resend
// Afmelding klares af Resend via {{{RESEND_UNSUBSCRIBE_URL}}} i hver udsendelse.

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
    if (url.pathname === "/subscribe" && request.method === "POST") return subscribe(request, env, url, cors);
    if (url.pathname === "/confirm" && request.method === "GET") return confirm(url, env);
    return new Response("Not found", { status: 404 });
  },
};

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
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: env.FROM, to: [email], subject: mail.subject, html: mail.html, text: mail.text }),
  });
  if (!res.ok) return json(502, { ok: false, error: "send_failed" });
  return json(200, { ok: true });
}

async function confirm(url, env) {
  const go = (lang, status) => Response.redirect(`${env.SITE}${lang === "da" ? "/da" : ""}/welcome/${status ? `?s=${status}` : ""}`, 302);
  const payload = await verify(url.searchParams.get("token") || "", env.SIGNING_SECRET);
  if (!payload) return go("en", "invalid");
  if (Math.floor(Date.now() / 1000) - payload.t > MAX_AGE_SECONDS) return go(payload.l, "expired");

  const segment = payload.l === "da" ? env.SEGMENT_DA : env.SEGMENT_EN;
  const auth = { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" };
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
    ? { subject: "Bekræft din tilmelding til 7am AI", h: "Bekræft din tilmelding", p: "Tryk på knappen, så får du de AI-nyheder, der betyder noget, kl. 7 hver morgen på under 7 minutter.", b: "Bekræft tilmelding", n: "Har du ikke bedt om det, kan du bare ignorere mailen. Linket virker i 3 døgn." }
    : { subject: "Confirm your 7am AI subscription", h: "Confirm your subscription", p: "Tap the button and you will get the AI news that matters at 7am every morning, in under 7 minutes.", b: "Confirm subscription", n: "If you did not ask for this, just ignore this email. The link works for 3 days." };
  const html = `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#EEF3FA;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EEF3FA;"><tr><td align="center" style="padding:28px 12px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#FFFFFF;border-radius:16px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#0E1A33;"><tr><td style="padding:26px 26px 8px;"><img src="${site}/assets/logo-mail.png" width="40" height="40" alt="" style="vertical-align:middle;border-radius:9px;"><span style="font-size:19px;font-weight:800;vertical-align:middle;margin-left:8px;">7am AI</span></td></tr><tr><td style="padding:12px 26px 26px;"><h1 style="font-size:24px;line-height:1.15;margin:0 0 10px;">${t.h}</h1><p style="font-family:Georgia,serif;font-size:16px;line-height:1.5;color:#55627A;margin:0 0 20px;">${t.p}</p><a href="${link}" style="display:inline-block;background:#FF8A2A;color:#0E1A33;text-decoration:none;font-weight:800;font-size:15px;padding:12px 22px;border-radius:999px;">${t.b}</a><p style="font-size:12px;line-height:1.5;color:#55627A;margin:20px 0 0;">${t.n}</p></td></tr></table></td></tr></table></body></html>`;
  const text = `${t.h}\n\n${t.p}\n\n${t.b}: ${link}\n\n${t.n}`;
  return { subject: t.subject, html, text };
}
