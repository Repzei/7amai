---
name: project-7amai-todo
description: "AKTIV to-do for 7am AI (adskilt fra Gainfully) - START HER: status, næste skridt, åbne punkter. Opdateres løbende med [x]"
metadata:
  type: project
---

# 7am AI: to-do (START HER, opdateret 2026-10-10)

Beslutninger og strategi: [[project-7amai]] (fuld strategi i `MitProjekt/7amai/STRATEGI.md`). Drift og ID'er: [[project-7amai-infra]]. Faldgruber: [[feedback-7amai-lessons]].
Gainfully har sin egen to-do ([[gainfully-todo-liste-status]]); bland dem ikke.

## Status
- Live på https://7amai.com (EN) og /da/ (DA). Prototype til Jesper, `noindex`.
- Routines kører hverdage: **udkast kl. 6** (PR + udkast-mail med "Approve on GitHub") og **afsendelse kl. 7** (merget PR = "Reviewed by Jesper", ellers AI-mærket). Første rigtige udgave: mandag 12. okt.
- Hele godkendelsesflowet testet 2026-10-09 med testudgave 10. okt. (PR #1).

## Næste skridt
1. [ ] **Jesper: godkend designudkast v5** (https://claude.ai/artifact/2vZsg6jDCGL7GHYUrxmDvq). v5 (2026-10-12, efter Jespers feedback): logo ca. 60 % mindre på forsiden, kraftigere "am" i små logoer, "denne uge"-tal (ægte tal: kilder, % official, rettelser) og tæt liste over seneste udgaver (inspireret af newsletter.alphasignal.ai, men kun ægte data), skiftende "Picked for builders/Europe/everyone", "Get the 7"-knap rettet.
1b. [x] **Format besluttet 2026-10-12:** kl. 7, alle 7 dage, højst 7 minutter; antal historier varierer. Vejledning, skabeloner, routines (daglig cron) og STRATEGI opdateret. Weekend-formater ("week in 7", "7 to try") droppet for nu.
1c. [x] **Identitet besluttet 2026-10-12:** First Light, ren version ("version 2"), låst i STRATEGI 1.1. Vej: v6 tre koncepter -> Jesper valgte First Light -> v7 fire varianter -> v8 hybrid + test-side -> Jesper valgte den rene uden test.
1d. [x] **Finpudset version 2 (v9) GODKENDT af Jesper 2026-10-12** ("ser godt ud for nu"), https://claude.ai/artifact/2vZsg6jDCGL7GHYUrxmDvq: konstrueret mærke + 16 px-version, horisont-læselinje, solopgangs-animation, lead-historie + The number, mail, delekort, mørk tilstand, farve- og typespecifikation.
2. [ ] **Byg v9 ind, trin for trin (startet 2026-10-12, hvert trin committes for sig):** (a) [x] udseende (2026-10-12, commit 13efc50, live og tjekket): style.css-tokens (First Light), skrift Schibsted Grotesk + Newsreader, SVG-logo i layout, assets/favicon.svg; (b) [x] udgave-side (2026-10-12, commits 07458cf/0ae47cb, live): sticky horisont-læselinje med sol (læsetid fra front matter `minutes` eller ord/230), større lead-historie (første h3), CSS klar til `.tag-official/.tag-reported/.tag-unconfirmed`, `.number`, `.legend` (bruges af agenten fra trin d); style.css får ?v=byggetid mod cache; (c) [x] mailskabelon i First Light (2026-10-12): PNG-logo assets/logo-mail.png (Gmail viser ikke SVG; tegnet med Pillow, scratch-script), Helvetica/Georgia-fallback, horisont-streg med sol, guld/solorange signal, So what-boks, kildemærke pr. historie, The number på lead, ny pladsholder {{COUNT}}; (d) [x] agentens vejledning (2026-10-12, commit 95bbed7): kildemærker Official/Reported/Unconfirmed (DA: Officiel/Rapporteret/Ubekræftet) i kildelinjen, regel "ingen Big deal uden Official", The number kun med ægte tal (`<div class="number">` + `number`/`number_label` i items), læsetid pr. historie i item-meta, tone efter STRATEGI 1.4, mailens {{COUNT}}/{{NUMBER}}. Forklaring af kildemærkerne ("How sure are we?") vises automatisk i bunden af hver udgave via layout + i18n.
   **v9 ER FULDT BYGGET IND 2026-10-12.** Næste udgave (13. okt. kl. 6/7) er den første med det nye design i mailen og de nye mærker. Tjek udkast-mailen og udgaven i morgen. Oprindelig liste:: forside, udgave-sider (lead-historie, The number, læselinje, spor-filter, Official/Reported/Unconfirmed), dansk udgave, tegnet SVG-mærke + favicon, mail (til de skrifttyper Gmail/Outlook viser, test lys/mørk).
3. [ ] **Opdatér agentens vejledning** (`.agent/INSTRUCTIONS.md`): The number (kun ægte tal), læsetid pr. historie, historie 1 = den der ændrer mest, kildemærker Official/Reported/Unconfirmed, regel "ingen Big deal uden Official", tone-stilguide (STRATEGI 1.4).
4. [ ] **Følg de første 1-2 ugers udgaver** (første ude 12. okt.): kvalitet, længde, kilder, tidspunkt.
5. [ ] **Fase 0 del 3: tilmelding (startet 2026-10-12).** Valg: Cloudflare Worker (gratis, ingen database, signerede bekræftelseslinks), ny Resend-nøgle med fuld adgang (network secret) så agenten kan sende Broadcasts med Resends indbyggede afmelding, dataansvarlig "Jesper Larsen, privacy@7amai.com". Trin: (a) [x] worker-kode `worker/src/index.js` + `worker/wrangler.toml` (2026-10-12): POST /subscribe (honeypot `website`, mail-validering, signeret HMAC-token, bekræftelsesmail EN/DA via Resend) og GET /confirm (72 t gyldighed, opretter kontakt i SEGMENT_EN/DA, PATCH unsubscribed=false hvis den findes, redirect til /welcome/ eller /da/welcome/ med ?s=invalid|expired|error). Ingen npm-pakker. 10/10 lokale tests (scratch worker-test.mjs med falsk Resend). Ikke deployet endnu: kræver Cloudflare-konto, `npx wrangler login`, secrets RESEND_API_KEY + SIGNING_SECRET, segment-ID'er i wrangler.toml. `worker` er udelukket fra Jekyll. **POST /broadcast** tilføjet (commit 3ff22c1, 7/7 tests): mindste adgang, fordi Gainfully deler Resend-kontoen. Resend-nøglen med fuld adgang ligger KUN i Cloudflare-workeren; agenten beholder sin sende-nøgle og kalder /broadcast med BROADCAST_TOKEN (network secret for workerens host) for at sende udgaven til SEGMENT_EN/DA (Resend tilføjer afmeldingslink). Status 2026-10-12: Jesper har oprettet Cloudflare-konto, segmenterne "7am AI EN/DA" og nøglen "7am-ai-onboarding" (fuld adgang, må IKKE i claude.ai-miljøet). **Worker LIVE 2026-10-12: https://7amai-signup.jesperkhl.workers.dev** (wrangler login via `npx.cmd`, fordi PowerShell blokerer npx.ps1; segment-ID'er EN 9df4ffd3-4a15-4e18-a2ec-15b3ad3ff93e, DA dc0facb5-533c-4b69-babc-9e0017206d5d i wrangler.toml). Secrets sat 2026-10-12 (RESEND_API_KEY skulle sættes igen via `Get-Clipboard | npx.cmd wrangler secret put ...`, fordi indsætning i Wranglers skjulte felt gemte 1 tegn). Rigtig tilmelding testet END-TO-END 2026-10-12: bekræftelsesmail -> Jesper klikkede -> velkomstside vist på telefon -> Jesper er kontakt i SEGMENT_EN. Svarede 503 not_configured indtil secrets var sat (vagt mod gætbar signeringsnøgle, min. 32 tegn). Mangler: Jesper sætter secrets RESEND_API_KEY, SIGNING_SECRET, BROADCAST_TOKEN med `npx.cmd wrangler secret put`; BROADCAST_TOKEN også som network secret i 7am-ai-miljøet (host 7amai-signup.jesperkhl.workers.dev, Bearer). (b) [x] sider: velkomst EN/DA (/welcome/, /da/welcome/ med fejltilstande ?s=expired|invalid|error) + privatlivspolitik EN/DA LIVE 2026-10-12 (/privacy/, /da/privacy/; commit 427b557), linket fra formularen og sidefoden. **privacy@7amai.com VIRKER IKKE ENDNU** (del ikke formularen offentligt før). Simply.com's DNS-pakke har ingen mail (kræver betalt opgradering), ImprovMX gratis = 1 domæne (bruges af Gainfully) og vilkårene forbyder flere gratis konti. **Besluttet 2026-10-12: i morgen flyttes 7amai.com's DNS til Cloudflare og Email Routing sættes op (privacy@ -> Gmail).** Midlertidig gainfully.app-adresse fravalgt. Ved flytning skal disse linjer genskabes hos Cloudflare før navneserverne skiftes hos simply.com: A @ 185.199.108.153/.109/.110/.111.153 (GitHub Pages, DNS only/grå sky, ikke proxied), CNAME www -> repzei.github.io, alle Resends linjer (MX + TXT på `send`, TXT `resend._domainkey`, evt. `_dmarc`), Google Search Console-TXT på @ (`google-site-verification=...`, tilføjet hos simply.com 2026-10-12; kopiér værdien fra simply før flytning). Tjek bagefter: https://7amai.com, HTTPS-certifikat, Resend domæne-status, testmail, tilmelding. Mulighed bagefter: workerens custom domain (fx api.7amai.com). Jesper skal desuden: (2) tjekke i Resend at open/click tracking er SLÅET FRA for 7amai.com (politikken lover det). Ikke juridisk rådgivning. Kendt: Google Fonts sender IP til Google (nævnt i politikken; overvej at hoste skrifttyperne selv senere); (c) [x] tilmeldingsformular LIVE på / og /da/ (2026-10-12, commit b3e8769): `_includes/signup.html` (fetch til `site.signup_endpoint`, honeypot, klient-validering, beskeder via i18n `signup_*`), solorange knap med natblå tekst. Testet i browser (ugyldig mail fanges). Privatlivspolitik er nu på plads; (d) [ ] agent: afsendelse via workerens /broadcast til EN/DA-segmenter. Kræver: Jesper lægger BROADCAST_TOKEN som network secret i 7am-ai-miljøet (host 7amai-signup.jesperkhl.workers.dev, header Authorization, prefix Bearer), derefter ændres AFSENDELSE i INSTRUCTIONS.md (curl til /broadcast for en + da; udkast-mail til Jesper som nu). Indtil da får kun Jesper mailen (NEWSLETTER_TO), tilmeldte på listen får intet. Jesper: Cloudflare-konto + `wrangler login`, ny Resend-nøgle (fuld adgang) i cloud-miljøet + som worker-secret, to lister (EN/DA) i Resend, mail-videresendelse for privacy@7amai.com. Oprindelig: (dobbelt opt-in via Resend, afmeldingslink, privatlivspolitik). Kræver en lille backend (statisk side kan ikke selv gemme tilmeldinger).

## Jesper skal selv
- [ ] Varemærketjek af "7am" (EUIPO, USPTO, IP Australia): "7am" er et australsk dagligt nyhedspodcast (Schwartz Media 2019, Solstice Media 2025). Ikke juridisk rådgivning.
- [ ] 5-sekunders-test: vis forsiden til 5 personer, spørg "hvad er det her?".

## Backlog (senere faser)
- [ ] "7am, wherever you are": udsendelse kl. 7 i læserens tidszone (fase 1).
- [ ] Henvisningsprogram, delbart opslag pr. dag, automatiske delekort med The number (fase 1).
- [ ] Emnesider + "Shipped or not?" (fase 2, SEO).
- [ ] Fjern `noindex`, når kvaliteten er bevist og tilmeldingen virker. Google Search Console er BEKRÆFTET for 7amai.com (domæne-ejendom via DNS-TXT, 2026-10-12); indsend sitemap der, når noindex fjernes (jekyll-sitemap mangler endnu).
- [ ] beehiiv revurderes ved ca. 1.000 læsere.

## Færdigt
- [x] 2026-10-08/09: prototype, domæne 7amai.com + HTTPS, Resend (network secret), routines.
- [x] 2026-10-09: strategi (STRATEGI.md), "The 7"-format, EN + DA, godkendelse via PR, AI-mærkning (EU AI Act art. 50(4)), CLAUDE.md + .claude-memory.
- [x] 2026-10-10: identitet låst (STRATEGI 1.1-1.5), designudkast v2, v3 og v4.
- [x] 2026-10-12: første rigtige udgave ude (PR #2 udkast, afsendt 07:14 AI-mærket; ca. 15 min startforsinkelse i skyen). Designudkast v5.





















