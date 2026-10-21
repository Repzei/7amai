---
term: "Word error rate"
title: "Hvad er word error rate?"
summary: "Standardmålet for tale til tekst: hvor mange ord en model får forkert, og hvorfor lavere er bedre."
date: 2026-10-21
minutes: 2
other_lang_url: /explained/word-error-rate/
read_more:
  - { label: "Hugging Face Audio Course: Evaluation metrics for ASR (engelsk)", url: "https://huggingface.co/learn/audio-course/chapter5/evaluation" }
short: |
  Word error rate, forkortet WER, er den almindelige måde at bedømme tale til tekst på. Man sammenligner modellens tekst med en korrekt udskrift og tæller de ord, den fik forkert.

  En WER på 4 % betyder omkring 4 fejl pr. 100 ord. Lavere er bedre, og 0 % er perfekt. Det er tallet, du skal kigge på, når du sammenligner transskriptionsværktøjer.
---
Word error rate, eller WER, er et mål for, hvor godt en model til tale til tekst skriver ned, hvad folk siger. Den tæller de ord, modellen får forkert.

For at måle den skal man have en optagelse og en korrekt udskrift, som et menneske har skrevet. Modellens tekst sammenlignes med udskriften, ord for ord. Tre slags fejl tæller. Et forkert ord er en erstatning. Et manglende ord er en udeladelse. Et ekstra ord er en indsættelse. Man lægger alle fejlene sammen og deler med antallet af ord i den korrekte udskrift.

> **Tænk på det sådan her:** En lærer retter en diktat. Hvert forkert, manglende eller ekstra ord får en rød streg. WER er antallet af røde streger delt med antallet af ord i teksten.

Her er et eksempel fra Hugging Faces kursus. Den korrekte tekst er "the cat sat on the mat", seks ord. Modellen skriver "the cat sit on the". Det er ét forkert ord og ét manglende ord, altså to fejl ud af seks, eller omkring 33 %.

Lavere er bedre, og en perfekt model får 0 %. WER kan endda komme over 100 %, hvis en model tilføjer mange ekstra ord. Tallet afhænger også af testen. Fjerner man store bogstaver og tegnsætning først, bliver WER lavere. Derfor kan to tal kun sammenlignes, når de kommer fra samme test med samme regler.

**Hvad betyder det for dig:** Når et firma siger, at dets model har en lavere WER, betyder det færre ord, du skal rette i hånden. Tjek, at testen omfatter dit sprog, for tallene kan være meget forskellige fra sprog til sprog.
