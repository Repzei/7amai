---
name: project-7amai
description: 7am AI - mission "best AI newsletter in the world". Identitet "The 7", strategi (spor, engelsk+dansk, AI-mærkning, faser mod sponsorer), låste beslutninger og status. Fuld strategi i 7amai/STRATEGI.md
metadata:
  type: project
---

# 7am AI (startet 2026-10-08, live 2026-10-09)

Dagligt AI-nyhedsbrev på https://7amai.com + mail, skrevet af en Claude cloud-routine. Teknik og drift: [[project-7amai-infra]]. Faldgruber: [[feedback-7amai-lessons]]. **Fuld strategi: `MitProjekt/7amai/STRATEGI.md`** (læs den før større ændringer).

**Why:** Mission (Jesper, 2026-10-09): "7am AI best AI newsletter in the world". Mål: indtægt via sponsorer. Startede som Jespers eget AI-overblik.

**How to apply:** Alt nyt skal styrke identiteten "The 7" og kunne køre uden Jesper (Gainfully har forrang). Byg i fasernes rækkefølge, spring ikke til vækst før kvaliteten er der.

## Identitet: "The 7" (godkendt af Jesper 2026-10-09)
- 7 historier. 7 minutter. Klar kl. 7.
- Tre løfter: **Sourced** (hvert punkt linker til primærkilden, åbne rettelser), **So what** (hvad det betyder for læseren), **No hype**.
- Signal-mærke pr. punkt: Big deal · Worth knowing · Quick hit.
- "Verified" blev bevidst til "Sourced": "verified" lover menneskelig kontrol, vi ikke altid har.

## Låste beslutninger
- Navn 7am AI, domæne 7amai.com (.dk ikke nødvendigt; .store kun gratis og uden auto-fornyelse; merch senere under 7amai.com/shop).
- **Engelsk hovedudgave + automatisk dansk udgave** (dansk må ikke koste Jesper tid).
- **Tre spor læseren selv vælger:** Build, AI generelt, Europe. Alle får alt som standard, fravalg efter tilmelding. Én samlet udgave med mærkede punkter, mailen filtreres pr. læser.
- **Redaktion:** sendes kl. 7 AI-mærket ("Written by AI. Every claim links to its primary source."). Når Jesper når at godkende (kladde ca. 6:30), sendes den som "Reviewed by Jesper". Godkendelse er bonus, aldrig flaskehals. Valgfri "Jesper's pick" om fredagen. Aftengodkendelse fravalgt (US-lanceringer kommer 18-23 dansk tid).
- **EU AI Act art. 50(4)** gælder siden 2026-08-02 (ikke udskudt af Digital Omnibus): AI-tekst om offentlig interesse skal mærkes, medmindre menneskelig gennemgang + redaktionelt ansvar. AI-oversættelser tæller også.
- Platform: side på 7amai.com (Jekyll), mail/liste på Resend. beehiiv revurderes ved ca. 1.000 læsere (tjek API til automatisk udgivelse først).
- Droppet: pristracker, "Ask 7am"-chat, lydudgave (måske fase 3).

## Faser
- **0 Fundament (næste):** "The 7"-format, engelsk + dansk, godkend-flow + mærkning, nyt design (forside med tilmelding, udgave-side, mail), dobbelt opt-in, afmelding, privatlivspolitik.
- **1 Blød lancering (0-500):** netværk, LinkedIn, danske udviklerfællesskaber, ét delbart opslag pr. dag, henvisningsprogram.
- **2 Vækst (500-5.000):** emnesider + "Shipped or not?" (SEO), gensidige anbefalinger, Product Hunt / Hacker News.
- **3 Indtægt (5.000+):** én sponsorplads om dagen, målrettet pr. spor.
- Mål (forslag): >50 % åbner, >30 % klikker, 10.000 læsere på 12 mdr., første sponsor ved 2.000-5.000.

## Status
- [x] Prototype live 2026-10-09: side, routine, mail, domæne + HTTPS. Hukommelse virker (udgave 2 rettede udgave 1).
- [x] Strategi lagt 2026-10-09 (STRATEGI.md).
- [x] Fase 0 del 1 (2026-10-09): The 7-format, EN hovedudgave + DA under /da/, godkendelse via PR (udkast 06, afsendelse 07), AI-mærkning efter art. 50(4).
- [x] Godkendelsesflow testet end-to-end 2026-10-09 (testudgave 10. okt.: udkast -> PR #1 -> Jesper mergede -> 'Reviewed by Jesper' + mail sendt; dansk AI-mærket).
- [ ] Fase 0 del 2: design. Jesper valgte retning **B + C** 2026-10-09 (B: Plakat-syverens hvide gitter, stort rødt 7-tal, Archivo/Source Serif; C: kildespalte med primary/reported, signal-mærker; A: kun lille '07:00'-tidsstempel i toppen). Udkast v2: https://claude.ai/artifact/2vZsg6jDCGL7GHYUrxmDvq. Afventer svar på: helhed, størrelse på 7-tallet, primary/reported. Derefter bygges det ind i side, udgave og mail.
- [ ] Fase 0 del 3: tilmelding (dobbelt opt-in, afmelding, privatlivspolitik).
