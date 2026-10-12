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
1d. [ ] **Finpudset version 2 (v9)** til godkendelse: konstrueret mærke + 16 px-version, horisont-læselinje, solopgangs-animation, lead-historie + The number, mail, delekort, mørk tilstand, farve- og typespecifikation.
2. [ ] **Byg det godkendte design ind**: forside, udgave-sider (lead-historie, The number, læselinje, spor-filter, Official/Reported/Unconfirmed), dansk udgave, tegnet SVG-mærke + favicon, mail (til de skrifttyper Gmail/Outlook viser, test lys/mørk).
3. [ ] **Opdatér agentens vejledning** (`.agent/INSTRUCTIONS.md`): The number (kun ægte tal), læsetid pr. historie, historie 1 = den der ændrer mest, kildemærker Official/Reported/Unconfirmed, regel "ingen Big deal uden Official", tone-stilguide (STRATEGI 1.4).
4. [ ] **Følg de første 1-2 ugers udgaver** (første ude 12. okt.): kvalitet, længde, kilder, tidspunkt.
5. [ ] **Fase 0 del 3: tilmelding** (dobbelt opt-in via Resend, afmeldingslink, privatlivspolitik). Kræver en lille backend (statisk side kan ikke selv gemme tilmeldinger).

## Jesper skal selv
- [ ] Varemærketjek af "7am" (EUIPO, USPTO, IP Australia): "7am" er et australsk dagligt nyhedspodcast (Schwartz Media 2019, Solstice Media 2025). Ikke juridisk rådgivning.
- [ ] 5-sekunders-test: vis forsiden til 5 personer, spørg "hvad er det her?".

## Backlog (senere faser)
- [ ] "7am, wherever you are": udsendelse kl. 7 i læserens tidszone (fase 1).
- [ ] Henvisningsprogram, delbart opslag pr. dag, automatiske delekort med The number (fase 1).
- [ ] Emnesider + "Shipped or not?" (fase 2, SEO).
- [ ] Fjern `noindex`, når kvaliteten er bevist og tilmeldingen virker.
- [ ] beehiiv revurderes ved ca. 1.000 læsere.

## Færdigt
- [x] 2026-10-08/09: prototype, domæne 7amai.com + HTTPS, Resend (network secret), routines.
- [x] 2026-10-09: strategi (STRATEGI.md), "The 7"-format, EN + DA, godkendelse via PR, AI-mærkning (EU AI Act art. 50(4)), CLAUDE.md + .claude-memory.
- [x] 2026-10-10: identitet låst (STRATEGI 1.1-1.5), designudkast v2, v3 og v4.
- [x] 2026-10-12: første rigtige udgave ude (PR #2 udkast, afsendt 07:14 AI-mærket; ca. 15 min startforsinkelse i skyen). Designudkast v5.





