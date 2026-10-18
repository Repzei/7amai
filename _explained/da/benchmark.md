---
term: "Benchmark"
title: "Hvad er et benchmark?"
summary: "Hvordan AI-modeller bliver testet og får point, og hvorfor en høj score ikke er hele historien."
date: 2026-10-18
minutes: 2
other_lang_url: /explained/benchmark/
read_more:
  - { label: "Hugging Face LLM Evaluation Guidebook: Automated benchmarks basics", url: "https://github.com/huggingface/evaluation-guidebook/blob/main/contents/automated-benchmarks/basics.md" }
short: |
  Et benchmark er en fast test for AI-modeller: en række opgaver og en regel for, hvordan svarene får point. Alle modeller tager den samme test, så du kan sammenligne resultaterne.

  Tallene er nyttige, men begrænsede. Laboratoriet kører ofte selv testen på sin egen model, og testens spørgsmål kan slippe ind i de data, modellen har lært af.
---
Et benchmark er en fast test for AI-modeller. Det er en række opgaver, fx kodeopgaver eller eksamensspørgsmål, og en regel for, hvordan hvert svar får point.

Fordi alle modeller tager den samme test, kan du stille resultaterne op ved siden af hinanden. Derfor er AI-nyheder fulde af navne som SWE-bench, DeepSWE, Terminal-Bench og HLE. Hver test måler noget forskelligt, fra at rette rigtig kode til at svare på svære ekspertspørgsmål.

> **Tænk på det sådan her:** en køreprøve. Alle kører den samme rute, og den sagkyndige bruger den samme tjekliste, så resultaterne kan sammenlignes. Her halter sammenligningen: til en køreprøve sidder der en uafhængig sagkyndig. Inden for AI er det ofte firmaet bag modellen, der selv kører testen og oplyser resultatet.

Et par ting begrænser, hvad et tal fortæller dig. For det første: hvem kørte testen? Et laboratoriums egne tal er påstande, indtil andre gentager dem. For det andet: opsætningen. Den samme model kan score forskelligt med et andet værktøj, en anden prompt eller en anden tidsgrænse.

For det tredje: læk. Når en test er offentlig, kan dens spørgsmål havne i de data, en model lærer af. Så kan modellen have set svarene før. Hugging Faces guide til evaluering advarer direkte om det.

Endelig måler et benchmark kun det, det tester. En model kan ligge øverst i en kodetest og stadig være svag til det arbejde, du har brug for.

**Hvad betyder det for dig:** brug benchmark-tal til at lave en kort liste, ikke til at vælge. Tjek, hvem der kørte testen, og prøv så de bedste få modeller på dine egne opgaver.
