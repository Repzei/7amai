# CLAUDE.md: 7am AI

## Projektbeskrivelse
**7am AI** er et dagligt AI-nyhedsbrev, klar kl. 7 alle ugens 7 dage. Hver udgave
udgives på https://7amai.com og sendes som en kort mail med links til hvert punkt.
Indholdet skrives af en planlagt Claude Code cloud-routine. Lige nu er det en prototype
til ejeren selv; det er bygget, så det kan åbnes som offentligt nyhedsbrev senere.

Sprog: engelsk hovedudgave på `/`, dansk udgave på `/da/`. Format: kerne på ca. 7 minutter (hovedhistorier + Open source & local AI + Paper of the day) + Explained (3 begreber fra biblioteket `_explained/`, vist via `explained:` i front matter); se `STRATEGI.md` afsnit 1 og `.agent/INSTRUCTIONS.md` U3.

## Tech stack
- **Jekyll på GitHub Pages** fra `main`. Ingen build-script, ingen npm-pakker til siden.
- **jekyll-feed** til `feed.xml`.
- **Resend** til mail (afsender `brief@7amai.com`), kaldt med `curl` fra `.agent/send-mail.mjs`.
- **To Claude Code cloud-routines** (Sonnet 5.5, separat cloud-miljø): udkast kl. 5:30 / 4:30 vinter (Opus 5.5 med fire parallelle research-specialister via Agent-værktøjet; PR til valgfri godkendelse, ingen udkast-mail) og afsendelse kl. 7 (godkendt = "Reviewed by Jesper", ellers AI-mærket).
- Domæne registreret hos simply.com; DNS og Email Routing (privacy@7amai.com) hos Cloudflare fra 2026-10-14, alle records "DNS only". HTTPS via GitHub Pages (Let's Encrypt, fornyes automatisk).

## Filstruktur
| Sti | Hvad |
|---|---|
| `_posts/<dato>-<slug>.md` | Engelsk udgave (hovedudgave), `/<åååå>/<mm>/<dd>/` |
| `_da/<dato>-<slug>.md` | Dansk udgave, `/da/...` (altid AI-mærket) |
| `_data/i18n.yml` | Tekster pr. sprog (tagline, AI-mærkning m.m.) |
| `index.html`, `da/index.html` | Forside/arkiv pr. sprog |
| `_layouts/default.html`, `_layouts/issue.html` | Sideskabeloner. default: canonical, hreflang, OG/Twitter-kort (assets/og.png), `noindex` kun hvis siden har `noindex: true` (velkomstsiderne) |
| `assets/style.css` | Al styling, lys/mørk via `prefers-color-scheme` |
| `_config.yml` | `url`, `future: true` (påkrævet), permalink, `exclude` |
| `CNAME` | `7amai.com` (styres af GitHub Pages-indstillingen) |
| `.agent/INSTRUCTIONS.md` | Agentens fulde proces. Ret her for at ændre indhold eller format |
| `.agent/SOURCES.md` | Kildeliste |
| `.agent/email-template.html` | Mailskabelon + byggeklodser |
| `.agent/send-mail.mjs` | Mail til redaktøren (udkast + fallback) via Resend |
| `.agent/broadcast.mjs` | Udgaven til alle tilmeldte (segment en/da) via workerens /broadcast |
| `.agent/og-source.html` | Kilde til delingsbilledet assets/og.png (render: headless Edge 1200x630) |
| `.agent/sent.log` | Datoer der er sendt (idempotens) |
| `.claude-memory/` | Kopi af Claude-memory for projektet + `restore-memory.ps1` |
| `.claude/settings.json`, `.claude/hooks/guard.mjs` | Hårde regler (PreToolUse-hook), kører også i cloud-routinen: "Reviewed by Jesper" kun ved Jespers merge før kl. 7, ingen agent-merge før kl. 7, mail uden em dash og `{{`, Resend/broadcast kun via send-mail.mjs og broadcast.mjs. Test: `GUARD_NOW=<iso>` simulerer tidspunktet |
| `_includes/beacon.html` | Anonym besøgsstatistik (ingen cookies/IP; GPC/DNT respekteres): sender side, sprog, kilde, aktiv læsetid, scroll til `POST /hit`. Ikke på `noindex`-sider |
| `worker/` | Tilmeldings-worker `7amai-signup`: /subscribe, /confirm, /broadcast, /hit (D1 `7amai-stats`, EU) + intern RPC-entrypoint `Stats` (tæller tilmeldte; Resend-nøglen ligger kun her). Skema: `worker/schema.sql` |
| `worker/stats/` | Privat dashboard `7amai-stats` (https://7amai-stats.jesperkhl.workers.dev, Basic Auth med secret STATS_PASSWORD): tilmeldte, besøg, kilder, læsetid, læst til ende, top-udgaver. Henter tilmeldte via service binding til `Stats` |
| `.agent/roadmap.json` | Køreplanen (faser + status) som dashboardet viser live. Opdateres sammen med to-do'en, når noget bliver færdigt eller planen ændres |
| `.agent/EDITORIAL.md` | Jespers 10 redaktionelle kriterier (redaktørkontrol, trin U6) |
| `.agent/STYLE.md` | Stilguide: enkelt, let at læse og forstå (10 regler, før/efter-eksempel, dansk) |
| `.agent/readability.py` | Læsbarhedstjek uden pakker: sætningslængde (gns. højst 16, ingen over 25), kernens læsetid (5-7 min). Køres i U6 |
| `STRATEGI.md` | Mission, identitet "The 7", spor, redaktionel model, faser. Læs før større ændringer |

## Ufravigelige regler
- **Repoet er offentligt.** Ingen mailadresser, API-nøgler eller private data i filer eller
  commits. Git-identitet: GitHub noreply-mail. Modtager og afsender ligger kun som
  miljøvariabler i cloud-miljøet; Resend-nøglen er en network secret, som agenten ikke kan læse.
- **Em dash (U+2014) og en dash (U+2013) er forbudt** i indlæg, mails og sider. Tjek med python
  (`t.count(chr(0x2014))`), ikke `grep -P` (virker ikke i cloud-sandboxen).
- **Dansk med æ, ø og å**, aldrig ae/oe/aa i tekst til læsere.
- **Ingen opdigtede nyheder, tal eller citater.** Hvert punkt har en kilde, agenten selv har åbnet.
- **Kald til Resend skal gå gennem `curl`**, ikke Nodes `fetch` (den går uden om proxyen, der
  sætter nøglen på).
- **`future: true` må ikke fjernes** fra `_config.yml` (udgaven dateres 07:00, men bygges før).

## Kør og test
- Kør routinen manuelt via RemoteTrigger `run` (eller claude.ai/code/routines). Efter 00:00 dansk
  tid laver en manuel kørsel næste dags udgave.
- Fejlfinding: RemoteTrigger `list_runs` og `get_run_log`. "Sendt <dato>"-commit = mail sendt.
- Visuel kontrol: åbn udgaven på 375 px bredde i lys og mørk tilstand; ingen vandret scroll.

## Drift
- **Systemoversigt:** fanen "Sådan virker det" på dashboardet (https://7amai-stats.jesperkhl.workers.dev/#system, kode i `worker/stats/src/index.js`) forklarer hele kæden for Jesper. Ændres flowet, en tjeneste, tidspunkter, hemmeligheder eller sikkerhedsnet: opdatér fanen i samme ændring og deploy (`npx.cmd wrangler deploy` fra `worker/stats`). Køreplanen kræver ingen deploy: ret `.agent/roadmap.json` og push.
- Routine-ID, miljø-ID, DNS og faldgruber står i `.claude-memory/project_7amai_infra.md` og
  `.claude-memory/feedback_7amai_lessons.md`.
- Hvis GitHub Pages-certifikatet ikke udstedes: fjern og sæt custom domain igen, når DNS er synlig.
