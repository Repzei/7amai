---
term: "P vs NP"
title: "Hvad er P vs NP-problemet?"
summary: "Datalogiens største åbne spørgsmål: hvis et svar er let at tjekke, er det så også let at finde?"
date: 2026-10-28
minutes: 2
other_lang_url: /explained/p-vs-np/
read_more:
  - { label: "Clay Mathematics Institute: P vs NP (engelsk)", url: "https://www.claymath.org/millennium/p-vs-np/" }
  - { label: "Wikipedia: Exponential time hypothesis (engelsk)", url: "https://en.wikipedia.org/wiki/Exponential_time_hypothesis" }
short: |
  P vs NP stiller et enkelt spørgsmål: hvis det er let at tjekke, at et svar er rigtigt, er det så også let at finde svaret?

  De fleste eksperter tror, at svaret er nej, men ingen har bevist det. Det er et af Millennium-prisproblemerne, og meget af datalogien, også kryptering, bygger på antagelsen om, at nogle problemer virkelig er svære.
---
P vs NP er datalogiens største åbne spørgsmål. Det lyder: hvis det er let at tjekke, at et svar er rigtigt, er det så også let at finde svaret?

"P" står for problemer, en computer kan løse hurtigt. "NP" står for problemer, hvor en computer hurtigt kan tjekke et foreslået svar. Alle problemer i P er også i NP. Spørgsmålet er, om de to grupper i virkeligheden er de samme.

> **Tænk på det sådan her:** et puslespil tager lang tid at lægge, men et blik fortæller dig, om et færdigt spil er rigtigt. P vs NP spørger, om der altid findes en smart genvej, så du kan lægge spillet lige så hurtigt, som du kan tjekke det.

Clay Mathematics Institute giver et eksempel. Du skal vælge 100 ud af 400 studerende til et kollegium, og nogle par må aldrig bo sammen. Giver en kollega dig en liste, kan du hurtigt tjekke den. Men selv at finde en god liste virker håbløst, fordi der er flere mulige lister end atomer i det kendte univers.

Stephen Cook og Leonid Levin formulerede problemet i 1971, hver for sig. Det er et af Millennium-prisproblemerne, og det er stadig uløst.

Forskere bruger også strengere antagelser. En af dem er Exponential Time Hypothesis fra 1999. Den siger, at en kendt logisk opgave kaldet 3-SAT ikke kan løses meget hurtigere end ved at prøve et enormt antal muligheder. Er den antagelse sand, er P og NP forskellige. Men et modbevis betyder ikke, at P er lig med NP.

**Hvad betyder det for dig:** meget af din sikkerhed på nettet bygger på, at nogle problemer er meget svære at løse. Krypteringen bag dit login til banken er et eksempel. Derfor får påstande om, at AI har rystet en af de antagelser, så meget opmærksomhed.
