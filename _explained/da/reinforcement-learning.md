---
term: "Reinforcement learning (forstærkningslæring)"
title: "Hvad er reinforcement learning?"
summary: "Hvordan AI-modeller lærer ved at prøve, fejle og blive belønnet, og hvorfor laboratorierne bruger det til at gøre dem bedre til kode."
date: 2026-10-30
minutes: 2
other_lang_url: /explained/reinforcement-learning/
read_more:
  - { label: "Hugging Face Deep RL Course: What is reinforcement learning? (engelsk)", url: "https://huggingface.co/learn/deep-rl-course/unit1/what-is-rl" }
short: |
  Reinforcement learning er en måde at træne AI på ved at prøve sig frem. Modellen prøver noget, får en belønning, når det går godt, og en straf, når det går skidt, og lærer langsomt at gøre mere af det, der giver belønning.

  AI-laboratorierne bruger det nu til at gøre sprogmodeller bedre til opgaver med et klart rigtigt svar, som kode der består sine tests.
---
Reinforcement learning er en måde at træne en AI på ved at prøve sig frem. Den, der lærer, kaldes ofte agenten. Den prøver en handling og får en belønning, hvis resultatet er godt, og en straf, hvis det er dårligt. Efter mange runder lærer den at gøre mere af det, der giver belønning.

> **Tænk på det sådan her:** Et barn spiller et computerspil, som ingen har forklaret. En mønt giver et point, og en fjende afslutter spillet. Efter et stykke tid samler barnet mønter og undgår fjender, uden at nogen har sagt, hvad det skal gøre.

Det er eksemplet, Hugging Face bruger i sit kursus, og det viser de tre dele. Der er en, der lærer, en verden, den handler i, og en score, der fortæller, hvordan det gik. Ingen viser den det rigtige træk. Den skal finde det ved at prøve.

Sprogmodeller lærer først ved at læse enorme mængder tekst. Det lærer dem at skrive, men ikke at løse svære opgaver godt. Derfor lægger laboratorierne reinforcement learning ovenpå. Modellen prøver en opgave mange gange, fx at skrive kode. Et tjek giver hvert forsøg en score, fx ved at køre kodens tests. Så bliver modellen skubbet i retning af de forsøg, der scorede godt.

Det virker bedst, når det er let at skelne et godt resultat fra et dårligt. Kode, der består tests, og matematik med et kendt svar passer godt. Det er sværere med smag eller tone, hvor mennesker skal bedømme svaret. Fangsten er, at en model kan lære at behage den, der giver point, i stedet for at løse opgaven. Er en test svag, kan modellen finde en genvej, der består testen, men ikke virker i virkeligheden.

**Hvad betyder det for dig:** Når et laboratorium siger, at en model blev bedre efter "mere RL", er det det, de mener. Modellen har øvet sig på den slags opgaver, du bruger den til, fx kode, og er blevet belønnet, når den ramte rigtigt. Derfor bliver modeller nu meget bedre fra version til version uden at vokse i størrelse.
