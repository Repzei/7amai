---
term: "GPU"
title: "Hvad er en GPU, og hvorfor skal AI bruge så mange?"
summary: "Hvorfor de chips, der først blev lavet til spil, nu driver næsten al AI."
date: 2026-11-13
minutes: 2
other_lang_url: /explained/gpu/
read_more:
  - { label: "NVIDIA: Hvad er forskellen på en CPU og en GPU? (engelsk)", url: "https://blogs.nvidia.com/blog/whats-the-difference-between-a-cpu-and-a-gpu/" }
short: |
  En GPU (grafikprocessor) er en chip, der laver tusindvis af små beregninger på samme tid. Den blev først lavet til at tegne grafik i spil, hvor hver pixel skal have sin egen beregning.

  AI-modeller kræver den samme slags arbejde: enorme bunker af simple gangestykker. Derfor kører AI på GPU'er, og derfor betyder de firmaer, der laver dem, så meget.
---
En GPU, eller grafikprocessor, er en computerchip, der er bygget til at lave mange små beregninger på én gang. Den blev først lavet til at tegne grafik i spil. Hver pixel på skærmen skal have sin egen beregning, og det hele skal ske på en brøkdel af et sekund.

Hovedchippen i din computer, CPU'en, virker anderledes. Den har få stærke kerner, der hurtigt klarer forskellige opgaver én efter én. En GPU har hundredvis eller tusindvis af enklere kerner, og de arbejder alle sammen samtidig.

> **Tænk på det sådan her:** en CPU er nogle få dygtige kokke, der kan lave alt. En GPU er tusind køkkenhjælpere, der hver skræller én kartoffel. Til en menu med halvtreds retter vil du have kokkene. Til et bjerg af kartofler vil du have hjælperne.

AI er et bjerg af kartofler. At træne og køre en model betyder, at man ganger enorme tabeller af tal med hinanden, igen og igen. Hvert gangestykke er simpelt, og de fleste kan ske på samme tid. Det er præcis det arbejde, en GPU er god til. Moderne AI-chips har også særlige dele, der gør disse tabelberegninger endnu hurtigere.

Derfor står de firmaer, der laver chippene, især Nvidia, i midten af AI-branchen. Hver ny model, hvert datacenter og hver AI-tjeneste har brug for dem, og der er sjældent nok.

**Hvad betyder det for dig:** prisen på GPU'er og hvor mange der findes, bestemmer meget af, hvad AI koster. Så nyheder om GPU'er, fra en stor chipordre til en ny chef hos en chipproducent, handler om, hvor hurtig og billig din AI kan blive.
