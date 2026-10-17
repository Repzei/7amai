---
term: "Kvantisering (quantization)"
title: "Hvad er kvantisering?"
summary: "Hvordan AI-modeller bliver gjort mindre, så de kan køre på mindre computere, og hvad det koster."
date: 2026-10-17
minutes: 2
other_lang_url: /explained/quantization/
read_more:
  - { label: "Hugging Face Transformers-dokumentation: Quantization overview", url: "https://huggingface.co/docs/transformers/main/en/quantization/overview" }
short: |
  Kvantisering gør en AI-model mindre ved at gemme hvert af dens tal med færre detaljer. En model, der bruger 16 bit pr. tal, kan ofte nøjes med 8 eller 4.

  Så kræver modellen langt mindre hukommelse og kører ofte hurtigere. Prisen er et lille tab af præcision, som vokser, jo mere man komprimerer.
---
Kvantisering er en måde at gøre en AI-model mindre på ved at gemme dens tal med færre detaljer. Det er en af de vigtigste grunde til, at store modeller kan køre på gaming-pc'er og bærbare.

En model er en enorm fil med tal, der kaldes vægte. Hver vægt gemmes ofte med 16 bit, nogle gange 32, hvilket er mange detaljer. Kvantisering runder hver vægt af, så den kan være i færre bit, fx 8 eller 4. En model med 4 bit pr. vægt kræver omkring en fjerdedel af den hukommelse, den brugte med 16.

> **Tænk på det sådan her:** et billede gemt som en mindre JPEG. Det fylder langt mindre og ser stadig rigtigt ud, men zoomer du ind, er nogle fine detaljer væk. Her halter sammenligningen: tabet i en model kan du ikke se. Den kan blive dårligere til nogle opgaver uden synlige tegn.

Du ser formaterne i modellernes navne: FP8 og INT8 bruger 8 bit, mens INT4 og NVFP4 bruger 4. GGUF er et udbredt filformat til kvantiserede modeller i værktøjer som llama.cpp og Ollama. Nogle nyere metoder går helt ned til 1 eller 2 bit, men de kræver som regel ekstra omhu for at bevare kvaliteten.

Afvejningen er enkel. Færre bit giver mindre hukommelse og ofte hurtigere svar. Det giver også et vist tab af præcision, som er lille ved 8 bit og vokser under 4. Laboratorierne tester ofte deres kvantiserede udgaver og offentliggør tallene, så du kan sammenligne.

**Hvad betyder det for dig:** kvantisering afgør, hvilke modeller der kan være på din hardware. Når en model kan køre på et grafikkort med 8 eller 24 GB, er det som regel en kvantiseret udgave. Test den på dine egne opgaver, for tabet er ikke det samme overalt.
