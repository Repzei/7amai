---
name: 7amai-last-session
description: "7am AI HANDOFF fra seneste session - hvad blev lavet, valg Jesper traf, faldgruber, hvor vi starter. Laes lige efter 7am AI's to-do"
metadata:
  node_type: memory
  type: project
  originSessionId: b8e3a230-7b07-4e90-9530-645548d14765
  modified: 2026-11-12T20:47:25.439Z
---

# 7am AI: handoff (seneste: 12. nov. 2026, udgavesiden som mailen; side-session startet fra marketing)

Detaljer i [[project-7amai-todo]] (afsnit UDGAVESIDEN SOM MAILEN). Overskriv denne fil ved hver sessions afslutning.

## Lavet og hvorfor
- **Udgavesiden i mailens sprog, live på alle udgaver EN + DA** (91d2134 testside, 252a6d5 go-live): ét hvidt kort pr. historie på himmelblå, emne-ikon + "1 · Emne · min", nøgletal/fliser/trin/søjler fra `items`, hele teksten, grøn Derfor-boks, Arial 17 px, ingen versaler. Fordi alle nye læsere (LinkedIn-lanceringen) lander på siden, og den føltes "kedelig og tung" ved siden af mailen.
- **Forklaret-fejl rettet**: hovedbegrebet stod som rå markdown på alle udgavesider (markdownify i `_includes/explained.html`).
- Læselinjen: den bevægende sol er erstattet af en 3 px orange streg øverst (Jespers valg, f402a61), fuld når den sidste historie slutter (22b30e1).
- Køreplan (`.agent/roadmap.json`) + CLAUDE.md-filtabel opdateret.

## Valg Jesper traf
- 12/11: variant A ("lav a"); kunne ikke se forskel på A og C. B (fold-ud) fravalgt.
- 12/11: ingen "Kort fortalt:" på siden (skjult med CSS); i mailen bliver det stående.

## Faldgruber
- Ingen Ruby/Jekyll lokalt. Mønster der virkede: midlertidig samling `_cardtest` (noindex, sitemap false, egen permalink) med kopier af ægte udgaver, push, test, fjern igen ved go-live.
- Browser-panelet må ikke åbne 7amai.com: hent den byggede HTML med curl og server den lokalt (`python -m http.server` i scratchpad, samme port som allerede er godkendt).
- Liquid: filter-argumenter kan ikke være kæder (`replace_first: a, b | append: c` virker ikke); brug `capture`.
- `main.content` fra en anden samling er urenderet markdown, når udgaverne bygges: brug `| markdownify`.

## Hvor vi starter næste gang
1. Har Jesper set siden på telefonen? Rettelser efter hans ønske.
2. Overvej (kun med Jespers ja): forside, Forklaret-, emne- og metodesider i samme skrift/stil, så hele sitet hænger sammen.
3. Ellers som før: LinkedIn-lanceringen (Jesper), TJEK Anthropic-reglen 12-14/11, "Shipped or not?" ca. 16/11, måling ca. 25/11.
