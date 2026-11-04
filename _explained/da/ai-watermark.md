---
term: "AI-vandmærke"
title: "Hvad er et AI-vandmærke?"
summary: "Hvordan en AI kan gemme et mærke i helt almindelig tekst, og hvorfor et manglende mærke ikke beviser noget."
date: 2026-11-04
minutes: 2
other_lang_url: /explained/ai-watermark/
read_more:
  - { label: "Anthropic: How Claude's text watermark works (engelsk)", url: "https://www.anthropic.com/news/claude-text-watermark" }
  - { label: "Google AI for Developers: SynthID Text (engelsk)", url: "https://ai.google.dev/responsible/docs/safeguards/synthid" }
short: |
  Et AI-vandmærke er et skjult mønster, som en model lægger i det, den laver. Du kan ikke se det, men den, der har den rigtige nøgle, kan tjekke for det bagefter.

  I tekst sidder mærket i valget af ord. Det bliver svagere, når teksten er kort eller skrevet om, og et manglende mærke beviser aldrig, at et menneske skrev den.
---
Et AI-vandmærke er et skjult mønster, som en AI-model lægger i den tekst, det billede eller den lyd, den laver. Mennesker kan ikke se det. Men et tjek med den rigtige hemmelige nøgle kan finde det og sige, at indholdet sandsynligvis kom fra den AI.

> **Tænk på det sådan her:** en printer, der sætter små gule prikker på hver side. Du læser siden som normalt, men den, der kender koden, kan se, hvilken printer der lavede den.

I tekst er der ikke plads til skjulte prikker. Så mærket sidder i selve ordene. Når en model skriver, har den tit flere ord, der passer lige godt. Normalt vælger et tilfældigt tal ét af dem. Med et vandmærke træffer en hemmelig nøgle valget i stedet, ud fra de ord, der kom før.

Ét valg siger ingenting. Men over mange sætninger danner valgene et mønster, som næppe kunne opstå tilfældigt. Et tjek med nøglen tæller, hvor godt ordene passer til mønsteret. Googles SynthID og Anthropics vandmærke til Claude virker begge sådan. Teksten læses på samme måde, og der bliver ikke tilføjet skjulte tegn.

Mærket har klare grænser. Det er svagt i korte tekster, fordi der er få ordvalg at tælle. Det er svagt i faktuelle svar og kode, hvor der tit kun er ét rigtigt ord. Og det forsvinder, når nogen skriver teksten grundigt om.

Derfor giver et tjek en sandsynlighed, ikke en dom. Et fundet mærke er et stærkt tegn på, at AI'en var med. Et manglende mærke beviser intet: teksten kan være skrevet af et menneske, men den kan også bare være rettet, kort eller fra en anden AI.

I EU beder AI-forordningen udbydere af AI om at mærke det, deres systemer laver, så en maskine kan læse det. Det er én grund til, at flere laboratorier nu bruger vandmærker.

**Hvad betyder det for dig:** tekst, du skriver med hjælp fra en AI, kan bære dens mærke, også efter lette rettelser. Og påstår nogen, at en tekst er "lavet af AI" eller "skrevet af et menneske", så spørg, hvordan de har tjekket det. Testen kan kun sige "sandsynligvis".
