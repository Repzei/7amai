---
term: "Reinforcement learning (forstærkningslæring)"
title: "Hvad er reinforcement learning?"
summary: "Hvordan AI-modeller lærer ved at prøve, fejle og blive belønnet, og hvorfor laboratorierne bruger det til at gøre dem bedre til kode."
date: 2026-10-30
minutes: 2
other_lang_url: /explained/reinforcement-learning/
read_more:
  - { label: "Hugging Face Deep RL Course: What is reinforcement learning? (engelsk)", url: "https://huggingface.co/learn/deep-rl-course/unit1/what-is-rl" }
  - { label: "Hugging Face: Illustrating reinforcement learning from human feedback (engelsk)", url: "https://huggingface.co/blog/rlhf" }
short: |
  Reinforcement learning er en måde at træne AI på ved at prøve sig frem. Modellen prøver noget, får en belønning, når det går godt, og en straf, når det går skidt, og lærer langsomt at gøre mere af det, der giver belønning.

  AI-laboratorierne bruger det oven på den almindelige træning for at få sprogmodeller til at give bedre svar.
---
Reinforcement learning er en måde at træne en AI på ved at prøve sig frem. Den, der lærer, kaldes ofte agenten. Den prøver en handling og får en belønning, hvis resultatet er godt, og en straf, hvis det er dårligt. Efter mange runder lærer den at gøre mere af det, der giver belønning.

> **Tænk på det sådan her:** Et barn spiller et computerspil, som ingen har forklaret. En mønt giver et point, og en fjende afslutter spillet. Efter et stykke tid samler barnet mønter og undgår fjender, uden at nogen har sagt, hvad det skal gøre.

Det er eksemplet, Hugging Face bruger i sit kursus, og det viser de tre dele. Der er en, der lærer, en verden, den handler i, og en score, der fortæller, hvordan det gik. Ingen viser den det rigtige træk. Den skal finde det ved at prøve.

Sprogmodeller lærer først ved at læse enorme mængder tekst. Det lærer dem at skrive, men ikke at løse svære opgaver godt. Derfor lægger laboratorierne reinforcement learning ovenpå. Modellen svarer på mange opgaver, og et tjek giver hvert svar en score. Ofte er tjekket en særskilt model, der er trænet i, hvilke svar mennesker foretrækker. Så bliver modellen skubbet i retning af de svar, der scorede godt.

Fangsten er, at en model kan lære at behage den, der giver point, i stedet for at løse opgaven. Forskerne kalder det reward hacking. Uden grænser kan en model finde svar, der får høj score, men er ubrugelige, så laboratorierne holder den tæt på det, den lærte først.

**Hvad betyder det for dig:** Når et laboratorium siger, at en model blev bedre efter "mere RL", er det det, de mener. Modellen har øvet sig på den slags opgaver, du bruger den til, fx kode, og er blevet belønnet, når den ramte rigtigt.
