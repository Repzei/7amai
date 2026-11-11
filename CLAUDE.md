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
- Domæne registreret hos simply.com; DNS og Email Routing (privacy@, rettelser@ og brief@7amai.com til Jespers Gmail) hos Cloudflare fra 2026-10-14, alle records "DNS only". HTTPS via GitHub Pages (Let's Encrypt, fornyes automatisk).

## Filstruktur
| Sti | Hvad |
|---|---|
| `_posts/<dato>-<slug>.md` | Engelsk udgave (hovedudgave), `/<åååå>/<mm>/<dd>/` |
| `_da/<dato>-<slug>.md` | Dansk udgave, `/da/...` (altid AI-mærket) |
| `_data/i18n.yml` | Tekster pr. sprog (tagline, AI-mærkning m.m.) |
| `index.html`, `da/index.html` | Forside/arkiv pr. sprog |
| `_layouts/default.html`, `_layouts/issue.html` | Sideskabeloner. default: canonical, hreflang, OG/Twitter-kort (assets/og.png), `noindex` kun hvis siden har `noindex: true` (velkomstsiderne). Meta description = `summary`, ellers `description`, ellers taglinen; på udgaver med "AI news Nov 2, 2026: " / "AI-nyheder 2. november 2026: " foran (`desc_prefix` i i18n, 2/11) |
| `_layouts/explained.html`, `_explained/`, `_includes/seen-in.html` | Explained-bibliotekets sider. "Seen in the news" / "Set i udgaverne" (2/11): udgaver, hvis `explained.main` eller `more` er begrebets slug, nyeste først, højst 10 + "og N til i arkivet". Ingen udgaver = intet vises. Danske søgeord i titler/beskrivelser på /da/, /da/explained/, /da/emner/ (2/11); one-lineren i titlen er låst |
| `sitemap.xml`, `_includes/topic-count.html` | Eget sitemap (kopi af jekyll-sitemaps skabelon; pluginet springer sit eget over, når filen findes): udelader sider med `noindex: true` og tynde emnesider (under 3 historier, `topic_thin` i topic-count.html, samme betingelse som noindex i default.html), så noindex og sitemap altid følges ad (10/11) |
| `assets/style.css` | Al styling, lys/mørk via `prefers-color-scheme` |
| `_config.yml` | `url`, `future: true` (påkrævet), permalink, `exclude` |
| `CNAME` | `7amai.com` (styres af GitHub Pages-indstillingen) |
| `.agent/INSTRUCTIONS.md` | Agentens fulde proces. Ret her for at ændre indhold eller format |
| `.agent/SOURCES.md` | Kildeliste |
| `_layouts/email.html`, `_layouts/email-text.html`, `mail/` | Den endelige mail, bygget af Jekyll fra nyeste udgave (samme kilde som siden): `/mail/en/`, `/mail/da/`, `/mail/en.txt`, `/mail/da.txt`. Visuel (Jesper 26/10): ét kort pr. historie (emne-ikon, nøgletal/grafik, "Kort fortalt", kort "Derfor", knap til siden), Build uden General samlet i "For developers". Data fra `items` (`topic`, `why`, `do`, `bars`, `tiles`, `steps`; STYLE.md "Mailen"). Grafik i `_includes/mail-graphics.html` (kun tabeller, ægte tekst), ikoner `assets/mail-icons/<topic>.png`, labels `mail_*` + `topics` i i18n. Kun tabeller og inline styles. noindex, ikke i sitemap/feed |
| `.agent/fetch-mail.sh` | Henter mailen til routinen (trin A2): venter til Pages har bygget nyeste commit på main og dagens dato, tjekker `{{`/dash, skriver /tmp-filer og emner |
| `.agent/send-mail.mjs` | Mail til redaktøren (udkast + fallback) via Resend |
| `.agent/broadcast.mjs` | Udgaven til alle tilmeldte (segment en/da) via workerens /broadcast |
| `.agent/mail-icons.py` | Tegner mailens emne-ikoner `assets/mail-icons/<topic>.png` (PNG, fordi Gmail ikke viser SVG; headless Edge + Pillow) |
| `.agent/og-image.py`, `.agent/fonts/` | Delingsbillede pr. udgave (1200x630 PNG, Pillow, skrifter OFL): `assets/og/<dato>.png` og `assets/og/da/<dato>.png`, lavet i udkast-routinen (U6 punkt 5). B = lead-historiens nøgletal stort, A (intet nøgletal) = overskrift + sol. `default.html` bruger det på udgavesiden, når filen findes, ellers `assets/og.png` |
| `.agent/og-source.html` | Kilde til delingsbilledet assets/og.png (render: headless Edge 1200x630) |
| `.agent/sent.log` | Datoer der er sendt (idempotens) |
| `.claude-memory/` | Kopi af Claude-memory for projektet + `restore-memory.ps1` |
| `.claude/settings.json`, `.claude/hooks/guard.mjs` | Hårde regler (PreToolUse-hook), kører også i cloud-routinen: "Reviewed by Jesper" kun ved Jespers merge før kl. 7, ingen agent-merge før kl. 7, mail uden em dash og `{{`, Resend/broadcast kun via send-mail.mjs og broadcast.mjs. Test: `GUARD_NOW=<iso>` simulerer tidspunktet |
| `_includes/beacon.html` | Anonym besøgsstatistik (ingen cookies/IP; GPC/DNT respekteres): sender side, sprog, kilde, aktiv læsetid, scroll til `POST /hit`. Kilder via `?ref=`: mail, bluesky, threads, forward (videresend-linjen øverst i mailen), share (Del-knappen). Ikke på `noindex`-sider |
| `how-we-work.html`, `da/metode.html`, `_includes/trust-stats.html` | "How we work" / "Sådan arbejder vi" (29/10): proces, kildemærker, AI-mærkning, rettelser. Tal for de 7 seneste udgaver og rettelseslisten regnes af Jekyll (tag-klasser, `items`, overskriften `## Corrections`/`## Rettelser`). Linket fra sidefoden og fra "How sure are we?" i hver udgave. Ingen link til GitHub (Jesper 29/10). Fejl-adresse: `contact_email` i `_config.yml` |
| `_layouts/topic.html`, `topics/`, `da/emner/`, `_includes/topic-count.html`, `_includes/topics-index.html`, `_data/topic_slugs.yml` | Emnesider (live 2/11): én side pr. emne i `i18n.topics` (EN `/topics/<key>/`, DA `/da/emner/<dansk slug>/`) med alle historier, hvis `items` har `topic: <key>` (kun udgaver fra 26/10). Oversigt `/topics/`, `/da/emner/`, link i menuen. Emner under 3 historier får automatisk noindex i default.html (tyndt indhold). Nyt emne: i18n `topics` (begge sprog) + `topic_slugs.yml` + en side pr. sprog + ikon |
| `_data/promises.yml`, `shipped.html`, `da/leveret.html`, `_includes/promises-list.html` | "Shipped or not?" / "Leveret eller ej?" (live 4/11): daterede løfter fra AI-firmaer og om de kom, kun Official-kilder. Vedligeholdes af udkast-routinen (INSTRUCTIONS U5c, kontrol i U6, med i PR'en). Linket fra sidefoden og fra /how-we-work/ (ikke menuen: den er fuld ved 375 px) |
| `_includes/share.html` | Del-knap ved hver historie på udgavesiden (i `.item-meta`): telefonens del-menu eller kopiér link med `?ref=share#anker`. Udgaven har også tilmeldingsformular nederst og et link til den øverst (29/10) |
| `worker/` | Tilmeldings-worker `7amai-signup`: /subscribe, /confirm, /broadcast, /hit (D1 `7amai-stats`, EU) + intern RPC-entrypoint `Stats` (tæller tilmeldte; Resend-nøglen ligger kun her). Skema: `worker/schema.sql` |
| `worker/stats/` | Privat dashboard `7amai-stats` (https://7amai-stats.jesperkhl.workers.dev, Basic Auth med secret STATS_PASSWORD): tilmeldte, besøg, kilder, læsetid, læst til ende, top-udgaver. Henter tilmeldte via service binding til `Stats` |
| `.agent/roadmap.json` | Køreplanen (faser + status) som dashboardet viser live. Opdateres sammen med to-do'en, når noget bliver færdigt eller planen ændres |
| `.agent/EDITORIAL.md` | Jespers 10 redaktionelle kriterier (redaktørkontrol, trin U6) |
| `.agent/STYLE.md` | Stilguide: enkelt, let at læse og forstå (10 regler, før/efter-eksempel, dansk) |
| `.agent/readability.py` | Læsbarhedstjek uden pakker: sætningslængde (gns. højst 16, ingen over 25), kernens læsetid (5-7 min), og mailens felter i `items` (topic, why, og hvert tal i nøgletal/grafik står i historien), og Anthropic-balancen (højst 1 hovedhistorie om Anthropic/Claude (nævnt blandt overskriftens første 3 ord), lead højst 2 af 7 udgaver; interessekonflikt, fordi Claude skriver udgaven, INSTRUCTIONS U3). Køres i U6 |
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
