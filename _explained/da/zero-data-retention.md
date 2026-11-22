---
term: "Zero data retention"
title: "Hvad er zero data retention?"
summary: "Hvad en AI-udbyder lover, når den siger, at den ikke gemmer dine data, og hvor løftet stopper."
date: 2026-11-22
minutes: 2
other_lang_url: /explained/zero-data-retention/
read_more:
  - { label: "OpenRouter: Zero Data Retention (ZDR) (engelsk)", url: "https://openrouter.ai/docs/features/zdr" }
short: |
  Zero data retention, eller ZDR, er et løfte fra en AI-udbyder. Den gemmer ikke dine prompts eller modellens svar, når forespørgslen er behandlet. Og når intet bliver gemt, kan den heller ikke træne på det.

  Løftet gælder kun det firma, der giver det. Kommer din prompt forbi en router eller en forhandler, har hver af dem deres egne regler.
---
Zero data retention, eller ZDR, er et løfte fra en AI-udbyder: den gemmer ikke dine prompts eller modellens svar, når den har behandlet din forespørgsel.

> **Tænk på det sådan her:** en makulator ved siden af kopimaskinen. Du afleverer et ark, får din kopi, og originalen ryger direkte i makulatoren i stedet for i en skuffe.

Når du sender en prompt til en AI-model, skal udbyderen læse den for at kunne svare. Spørgsmålet er, hvad der sker bagefter. Nogle udbydere gemmer prompts for at træne nye modeller. Andre gemmer dem et stykke tid for at opdage misbrug. En ZDR-udbyder gemmer ikke noget som fast praksis, når forespørgslen er færdig, og kan derfor heller ikke træne på dine data.

Routeren OpenRouter deler for eksempel udbydere i tre grupper. ZDR gemmer intet. Lagring af sikkerhedshensyn kan gemme data for at stoppe misbrug, men ikke til træning. Den tredje gruppe gemmer data og træner på dem. Du kan bede den kun sende dine forespørgsler til ZDR-udbydere. OpenRouter nævner nogle grænser. At holde en prompt kortvarigt i hukommelsen for at svare hurtigere tæller ikke som lagring. Og værktøjer, du slår til, som websøgning, kan have deres egne regler.

Den største grænse er, at løftet kun binder det firma, der giver det. Din prompt kan komme forbi en app, en router og et hostingfirma på vej til modellen. Hvis en af dem logger den eller bliver hacket, hjælper ZDR-mærket ikke.

**Hvad betyder det for dig:** ZDR mindsker risikoen for, at dine data havner i et træningssæt eller et læk. Men det er et løfte, ikke en lås. Data, der aldrig må slippe ud, er sikrest, hvis du lader dem blive ude af prompten eller selv kører modellen.
