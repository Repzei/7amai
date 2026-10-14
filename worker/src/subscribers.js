// Tæller tilmeldte i Resend til dashboardet. Kører i tilmeldings-workeren, så Resend-nøglen med
// fuld adgang kun findes ét sted; dashboardet kalder den via en intern service binding (RPC).
// Returnerer kun tal, aldrig adresser.

const cphDay = (date) => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Copenhagen" }).format(date);

// Resend: GET /contacts?segment_id=...&limit=100&after=<id>. created_at fx "2026-10-06 23:47:56.678+00".
async function contactsIn(env, segment) {
  const all = [];
  let after = "";
  for (let page = 0; page < 50; page++) {
    const res = await fetch(`https://api.resend.com/contacts?segment_id=${segment}&limit=100${after ? `&after=${after}` : ""}`, {
      headers: { Authorization: `Bearer ${String(env.RESEND_API_KEY || "").trim()}` },
    });
    if (!res.ok) throw new Error(`Resend ${res.status}`);
    const body = await res.json();
    const data = body.data || [];
    all.push(...data);
    if (!body.has_more || !data.length) break;
    after = data[data.length - 1].id;
  }
  return all;
}

const createdDay = (c) => {
  const d = new Date(String(c.created_at || "").replace(" ", "T").replace(/\+00$/, "Z"));
  return isNaN(d) ? "" : cphDay(d);
};

export async function subscriberStats(env, days) {
  if (!Array.isArray(days) || !days.length || days.length > 400 || !days.every(d => /^\d{4}-\d{2}-\d{2}$/.test(d))) throw new Error("bad days");
  const [en, da] = await Promise.all([contactsIn(env, env.SEGMENT_EN), contactsIn(env, env.SEGMENT_DA)]);
  const count = (list) => ({ active: list.filter(c => !c.unsubscribed).length, unsubscribed: list.filter(c => c.unsubscribed).length });
  const activeDays = [...en, ...da].filter(c => !c.unsubscribed).map(createdDay);
  const week = days[Math.max(0, days.length - 7)];
  // Kurven viser nuværende aktive tilmeldte efter tilmeldingsdato (afmeldte tæller ikke med).
  return {
    en: count(en),
    da: count(da),
    total: activeDays.length,
    new7: activeDays.filter(d => d >= week).length,
    new30: activeDays.filter(d => d >= days[0]).length,
    cumulative: days.map(day => ({ day, total: activeDays.filter(d => d && d <= day).length })),
  };
}
