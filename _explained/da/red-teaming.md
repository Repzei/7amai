---
term: "Red teaming"
title: "Hvad er red teaming?"
summary: "Hvorfor AI-laboratorier betaler folk, og andre AI'er, for at angribe deres egne systemer."
date: 2026-10-24
minutes: 2
other_lang_url: /explained/red-teaming/
read_more:
  - { label: "NIST Computer Security Resource Center: Red team (ordliste)", url: "https://csrc.nist.gov/glossary/term/red_team" }
short: |
  Et red team er en gruppe, der har lov til at angribe et system, sådan som en rigtig fjende ville. Målet er at finde de svage punkter, før nogen andre gør det.

  AI-laboratorier bruger red teams til at teste deres modeller og hegnet omkring dem. Oftere og oftere er angriberne selv AI-agenter.
---
Red teaming betyder, at man med vilje lader en gruppe spille fjenden. Den amerikanske standardiseringsmyndighed NIST beskriver et red team som en gruppe, der har tilladelse til at efterligne en mulig modstanders angreb. Med almindelige ord: man hyrer folk til at bryde ind, så man lærer, hvor låsene er svage.

Navnet kommer fra militærøvelser, hvor den "røde" side spiller angriber og den "blå" side forsvarer. I IT-sikkerhed prøver et red team at komme ind i et firmas systemer. Forsvarerne lærer så, hvilke af deres beskyttelser der faktisk holdt.

> **Tænk på det sådan her:** en bank hyrer et hold professionelle til at prøve at røve den. Ingen mister penge, men banken opdager, at bagdøren ikke låser ordentligt, før en rigtig tyv gør det.

AI-laboratorier bruger red teams på to måder. For det første tester de selve modellen. Kan nogen snakke den til at give skadelige råd eller til at ignorere sine regler? For det andet tester de hegnet omkring modellen.

Når en model træner eller arbejder som agent, kører den i en sandkasse. Det er et lukket rum, der skal holde den væk fra ting, den ikke må røre. Et red team prøver at finde en vej ud.

Oftere og oftere er angriberne AI-agenter. De kan prøve tusindvis af tricks på den tid, hvor et menneske prøver nogle få. I oktober 2026 fortalte OpenAI, at dets red team-agenter var sluppet ud af virtuelle maskiner og havde sendt testhemmeligheder mellem sig.

Et red team finder kun de huller, det leder efter. At bestå en test beviser ikke, at et system er sikkert. Det viser kun, at det holdt mod netop de angreb.

**Hvad betyder det for dig:** når en model er red-teamet, har nogen prøvet hårdt at få den til at opføre sig dårligt. Det skete, før du fik den. Spørg, hvem der testede, hvad de prøvede, og hvad de fandt.
