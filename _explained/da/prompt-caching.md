---
term: "Prompt caching"
title: "Hvad er prompt caching?"
summary: "Hvorfor en AI-model kan læse den samme tekst igen for en brøkdel af prisen."
date: 2026-11-19
minutes: 2
other_lang_url: /explained/prompt-caching/
read_more:
  - { label: "Anthropics dokumentation: Prompt caching (engelsk)", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-caching" }
  - { label: "Google AI Studio: Context caching (engelsk)", url: "https://aistudio.google.com/docs/caching" }
short: |
  Når du sender tekst til en AI-model, betaler du for hvert token, den læser. Prompt caching lader modellen gemme sit arbejde med starten af en prompt, så den næste forespørgsel, der starter på samme måde, kan genbruge det.

  Den genbrugte del koster meget mindre, ofte en tiendedel af normalprisen eller mindre. Det virker kun, hvis starten af prompten er præcis den samme.
---
Prompt caching betyder, at en AI-model gemmer sit arbejde med den første del af en prompt. Så skal den ikke gøre det igen.

Hver gang du sender en forespørgsel til en model, læser den alt, du sender: instruktionerne, dokumenterne, hele samtalen indtil nu. Du betaler for hvert token, de små stykker tekst, modellen læser. I en lang samtale er det meste af teksten den samme fra den ene forespørgsel til den næste. Det samme gælder en agent, der arbejder på ét projekt i en time.

> **Tænk på det sådan her:** En lærer retter en stak eksamensopgaver, hvor første side er ens. I stedet for at læse side ét igen for hver opgave husker læreren den og starter på side to. Arbejdet med side ét bliver gjort én gang.

Det er det, caching gør. Udbyderen gemmer modellens arbejde med starten af prompten i kort tid. Når den næste forespørgsel starter med præcis den samme tekst, fortsætter modellen derfra. Anthropic tager en tiendedel af den normale inputpris for de fleste modeller, når den læser fra cachen. Google slår caching til som standard for sine nyere Gemini-modeller.

Der er regler. Den gemte del skal være præcis den samme, helt ned til sidste tegn, og den skal stå først. Ændrer du ét ord tidligt i prompten, skal resten læses igen. Cachen udløber også: hos Anthropic efter 5 minutter som standard, medmindre den bliver brugt igen. Svaret, du får, er det samme som uden caching. Kun prisen og hastigheden ændrer sig.

**Hvad betyder det for dig:** For apps og agenter, der sender de samme lange instruktioner igen og igen, kan caching skære meget af regningen. Når du sammenligner priser på modeller, så se også på prisen for gemt input. Ved lange agentopgaver kan den betyde mere end normalprisen.
