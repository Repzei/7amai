---
term: "Koordineret offentliggørelse (coordinated disclosure)"
title: "Hvad er koordineret offentliggørelse?"
summary: "Hvordan sikkerhedshuller holdes hemmelige, til en rettelse er klar, og hvorfor det betyder mere, nu hvor AI finder flere af dem."
date: 2026-10-22
minutes: 2
other_lang_url: /explained/coordinated-disclosure/
read_more:
  - { label: "CISA: Coordinated Vulnerability Disclosure Process (engelsk)", url: "https://www.cisa.gov/coordinated-vulnerability-disclosure-process" }
  - { label: "CERT/SEI: The CERT Guide to Coordinated Vulnerability Disclosure (engelsk)", url: "https://www.sei.cmu.edu/library/the-cert-guide-to-coordinated-vulnerability-disclosure/" }
short: |
  Koordineret offentliggørelse er den normale måde at håndtere et sikkerhedshul på. Den, der finder det, fortæller først producenten om det, og begge tier, til en rettelse er klar.

  Så kommer rettelsen og advarslen ud samtidig, så brugerne kan beskytte sig, før angribere kender detaljerne. Et læk før den dag giver angriberne et forspring.
---
Koordineret offentliggørelse er processen for at håndtere et nyfundet sikkerhedshul. Den, der finder det, melder det til producenten i fortrolighed, producenten laver en rettelse, og alle offentliggør det sammen.

Trinnene er enkle. En forsker finder en fejl og melder den til producenten eller til et organ som den amerikanske myndighed CISA. Producenten tjekker meldingen og laver en rettelse. Fejlen får et ID, et såkaldt CVE-nummer, så alle kan henvise til det samme problem. Derefter udsendes rettelsen og en offentlig advarsel på samme tid.

> **Tænk på det sådan her:** du opdager, at en butiks bagdør ikke kan låses. Du siger det stille til ejeren, ikke til hele gaden. Når låsen er skiftet, kan ejeren fortælle kunderne, hvad der skete. Her halter sammenligningen: i software deler millioner af "butikker" den samme dør, så de skal alle have den nye lås samme dag.

Den stille periode er det svære. Gør producenten intet, kan advarslen alligevel komme ud efter et stykke tid. CISA kan fx offentliggøre allerede 45 dage efter første forsøg på at nå en producent, der ikke svarer. Slipper detaljer ud for tidligt, får angribere et forspring, mens brugerne endnu ikke har en rettelse.

AI lægger pres på systemet. AI-modeller hjælper nu forskere med at finde fejl hurtigere, så producenterne får flere meldinger. De samme modeller kan også hjælpe angribere med hurtigt at gøre en kort advarsel til et virkende angreb.

**Hvad betyder det for dig:** når en sikkerhedsopdatering kommer med en advarsel, er uret allerede startet. Detaljerne er offentlige, så installér rettelsen snart.
