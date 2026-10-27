---
name: 7amai-last-session
description: "7am AI HANDOFF fra seneste session - hvad blev lavet, valg Jesper traf, faldgruber, hvor vi starter. Laes lige efter 7am AI's to-do"
metadata:
  node_type: memory
  type: project
  modified: 2026-10-26T21:38:00.237Z
  originSessionId: 74ccaa7e-94f3-47d4-b0bd-70dc0155df30
---

# 7am AI: handoff (seneste: 27. okt. 2026, besøgskilder + delingsbillede; før det 26/10 visuel mail)

Detaljer står i [[project-7amai-todo]] (afsnit VISUEL MAIL); dette er overblikket. Overskriv denne fil ved hver sessions afslutning.

## Lavet og hvorfor (26/10)
- **Visuel mail (variant B) live, commit dc48b37.** Jesper er ordblind og læser langsomt på engelsk; mailen skal kunne læses på 2-3 min. Ét kort pr. historie (ikon, nøgletal eller lille grafik, Kort fortalt, kort Derfor, knap til historien på siden), udviklerstof (Build uden General) samlet nederst, lang tekst kun på siden.
- **Grafik kun med tal fra historien:** felter `bars`/`tiles`/`steps` i `items`, tegnet som HTML-tabeller med ægte tekst (aldrig tekst i billeder). `readability.py` stopper udgaven, hvis et tal i items ikke står ordret i historiens tekst.
- **Agentens vejledning:** STYLE.md "Mailen", INSTRUCTIONS (U3-U6, A2), EDITORIAL kriterie 3. Dashboardets systemfane + roadmap.json opdateret og deployet.
- Tidligere (13.-21/10): mailen bygges af Jekyll, broadcast, dashboard, redaktørkontrol + guard-hook, historiestil, Explained, ærlig læsetid.

## Lavet 27/10
- Bluesky/Threads som egne kilder i besøgstallene (4cc58b5, workers deployet).
- Delingsbillede pr. udgave (74580c9): `.agent/og-image.py` i udkast-routinen, B med nøgletal, A som reserve. Tjek 28/10, at routinen kunne køre det (Pillow i skyen).

## Valg Jesper traf
- 26/10: variant B ("b er bedst det er det der skal laves"), testmailen godkendt ("ja, godkendt").
- Godkendelse er valgfri (merge før 07:00 = "Reviewed by Jesper"); ingen udkast-mail; udkast kl. 05:30.
- Ærligt AI-mærke, aldrig auto-"Reviewed" (EU AI Act art. 50). AI-mærket står øverst i mailen (ikke i bunden som i mockuppen).

## Faldgruber
- Test Liquid ved at pushe en ulinket side (noindex, sitemap false) ved siden af den rigtige; skift først efter Jespers ja. Ingen Ruby lokalt.
- Gmail viser ikke SVG: emne-ikonerne er PNG, tegnet af `.agent/mail-icons.py` (headless Edge + Pillow). Nyt emne: script + i18n `topics` + STYLE.md "Mailen".
- Python-heredocs i bash: `\\b` i almindelige strenge bliver til backspace; skriv scripts til fil eller brug raw strings.
- Ændres flow, tjenester eller format: opdatér dashboardets systemfane og roadmap.json i samme ændring.

## Hvor vi starter næste gang
1. Tjek udgaven 28/10: delingsbilledet i PR'en (og "delingsbillede OK"), mailens kort/grafik, Bluesky-link-kortet.
2. Resten af læsertestens forslag (fagord-regel, præcision, "Hvem skal vide det?", analogier) og forslag A1/A2/B1/B2 i to-do'en.
