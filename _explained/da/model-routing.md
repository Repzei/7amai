---
term: "Model routing (modelvalg)"
title: "Hvad er model routing?"
summary: "Hvorfor AI-værktøjer i stigende grad vælger modellen for dig, og hvordan det sparer penge."
date: 2026-10-29
minutes: 2
other_lang_url: /explained/model-routing/
read_more:
  - { label: "LMSYS: RouteLLM, open source-værktøj til billigere valg af model (engelsk)", url: "https://lmsys.org/blog/2024-07-01-routellm/" }
short: |
  Model routing betyder, at et system kigger på hvert spørgsmål først og beslutter, hvilken AI-model der skal svare. Lette spørgsmål går til en billig, hurtig model. Svære går til en stærkere og dyrere.

  Målet er at få næsten samme kvalitet som den bedste model, men kun betale for den, når der er brug for den.
---
Model routing betyder, at et system kigger på hvert spørgsmål først og beslutter, hvilken AI-model der skal svare. Det system, der træffer valget, kaldes en router.

AI-modeller koster vidt forskelligt. De stærkeste kan koste mange gange mere pr. ord end de små, men de fleste spørgsmål har ikke brug for dem. En router prøver at finde ud af, hvilke spørgsmål der har.

> **Tænk på det sådan her:** Den praktiserende læge ser alle patienter først. De fleste går hjem med et enkelt råd, og kun de svære tilfælde bliver sendt videre til en dyr speciallæge. Så bruges speciallægens tid der, hvor den gør en forskel.

Der er et par almindelige måder at gøre det på. En simpel router gætter ud fra selve spørgsmålet. Den er ofte trænet på mange tidligere eksempler på, hvornår en billig models svar var godt nok. En kaskade virker omvendt: den billige model svarer først, og et tjek afgør, om opgaven skal sendes videre til en stærkere model. Nogle systemer går længere og lader én model skrive og en anden gennemgå.

Det virker. I en undersøgelse fra 2024 sendte forskere hos LMSYS de fleste spørgsmål til en billigere model. På én test beholdt de 95 % af GPT-4's kvalitet og skar over 85 % af prisen. Fangsten er, at en router kan tage fejl. Sender den et svært spørgsmål til en svag model, bliver svaret dårligere, og det er ikke sikkert, du opdager det.

**Hvad betyder det for dig:** Flere og flere AI-værktøjer vælger nu modellen for dig, ofte bag en indstilling som "auto" eller et indsatsniveau. Det kan gøre det samme arbejde meget billigere. Men det betyder også, at du ikke altid ved, hvilken model der gav dig svaret.
