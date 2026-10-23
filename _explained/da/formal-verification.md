---
term: "Formel verifikation (formal verification)"
title: "Hvad er formel verifikation?"
summary: "Hvordan et matematisk bevis kan vise, at kode opfører sig korrekt for alle input, ikke kun dem, du har testet."
date: 2026-10-23
minutes: 2
other_lang_url: /explained/formal-verification/
read_more:
  - { label: "seL4: Verification (engelsk)", url: "https://sel4.systems/Verification/" }
  - { label: "The Rocq Prover (engelsk)", url: "https://rocq-prover.org/" }
  - { label: "Anthropic: formel verifikation med Claude (engelsk)", url: "https://www.anthropic.com/research/formal-verification" }
short: |
  Formel verifikation betyder at bevise, som i matematik, at et program altid gør det, en skrevet regel siger. En test tjekker nogle input. Et bevis dækker alle input.

  Et program, en såkaldt bevistjekker, læser hvert trin, så et forkert bevis bliver fanget. Hagen er prisen: beviser er langsomme at skrive, så de er mest blevet brugt der, hvor fejl er meget farlige.
---
Formel verifikation er en måde at bevise, at et program følger en præcis regel, fx "denne kode går aldrig ned". Beviset skrives trin for trin, som et bevis i matematiktimen, og en computer tjekker det.

Almindelig test virker anderledes. Du kører programmet med mange input og ser, om noget går galt. Det finder mange fejl, men det kan aldrig prøve alle input. Et bevis dækker dem alle på én gang.

> **Tænk på det sådan her:** en test er som at køre en bil over en bro tusind gange og se, at den holder. Et bevis er som en ingeniørs beregning, der viser, at broen holder for enhver belastning op til grænsen. Hvor sammenligningen halter: beregningen er kun så god som sine antagelser. Er den rigtige bro bygget af andre materialer end tegningen, siger beviset intet om den.

Det sker i tre trin. Først skriver nogen reglen, en såkaldt specifikation. Så skriver nogen beviset for, at koden overholder den. Til sidst tjekker et værktøj, en bevistjekker som Rocq, hvert eneste trin. Er ét trin forkert, afviser tjekkeren beviset.

Det svære er at skrive beviset. Det kan være langt længere end selve programmet, så det har været langsomt og dyrt arbejde. Derfor er det mest brugt til software, hvor en fejl vil være meget farlig, fx styresystemkernen seL4. AI-modeller kan nu skrive meget af arbejdet, og det kan gøre beviser billige nok til almindelig kode.

**Hvad betyder det for dig:** meget af softwaren på din telefon og computer bygger på fælles open source-kode. Bliver den kode bevist og ikke bare testet, er hele typer af nedbrud og sikkerhedshuller udelukket.
