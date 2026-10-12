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

## Identitet: tre gange 7 (format ændret af Jesper 2026-10-12)
- **Kl. 7. Alle 7 dage. Højst 7 minutters læsning.** Antal historier varierer (typisk 4-7 hverdage, færre i weekenden); aldrig fyld. Erstatter "7 historier" ("The 7") fra 2026-10-09.
- Tre løfter: **Sourced** (hvert punkt linker til primærkilden, åbne rettelser), **So what** (hvad det betyder for læseren), **No hype**.
- Signal-mærke pr. punkt: Big deal · Worth knowing · Quick hit.
- "Verified" blev bevidst til "Sourced": "verified" lover menneskelig kontrol, vi ikke altid har.

## Låste beslutninger
- **Design ENDELIGT 2026-10-12: First Light, ren version ("version 2")** (STRATEGI 1.1): mærket = 7-tal på en horisont med solen på vej op bag; natblå #0E1A33 / morgenhimmel #EEF3FA / sol #FF8A2A / sol-tekst #B4500A / guld #FFC447; Schibsted Grotesk + Newsreader; mørk tilstand = nattehimmel. Horisont-læselinje (solen bevæger sig mens man læser). Alt på orange/guld har natblå tekst (hvid på orange 2,35:1). Retro 70'er-varianten fravalgt til hverdag ("som en meme-coin, holder ikke ved"), må bruges til merch/særlige øjeblikke. Kilder Official/Reported/Unconfirmed, ingen Big deal uden Official, 7am i læserens tidszone fra fase 1, tone-stilguide (STRATEGI 1.4) gælder stadig. Afløser B+C og "rødt 7 + am".
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

## Åbne risici
- **Navnet:** "7am" er et etableret australsk dagligt nyhedspodcast (Schwartz Media 2019, solgt til Solstice Media 2025). Intet nyhedsbrev "7am AI" fundet. Varemærketjek (EUIPO, USPTO, IP Australia) anbefalet før større investering i mærket. Ikke juridisk rådgivning.

## Status
Aktiv to-do med status og næste skridt: [[project-7amai-todo]] (`project_7amai_todo.md`).
