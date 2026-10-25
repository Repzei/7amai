---
term: "CVE"
title: "Hvad er en CVE?"
summary: "Det fælles ID-nummer, som alle kendte sikkerhedshuller får, og hvad tallet ved siden af betyder."
date: 2026-10-25
minutes: 2
other_lang_url: /explained/cve/
read_more:
  - { label: "CVE-programmet: forside og formål (cve.mitre.org)", url: "https://cve.mitre.org/" }
  - { label: "FIRST: CVSS v4.0 User Guide", url: "https://www.first.org/cvss/v4.0/user-guide" }
short: |
  En CVE er et fælles ID for et kendt sikkerhedshul, fx CVE-2026-111497. Den gør det muligt for alle at tale om den samme fejl uden forvirring.

  Ved siden af ser man ofte en CVSS-score fra 0 til 10. Den siger, hvor alvorligt hullet er, ikke hvor sandsynligt det er, at du bliver ramt.
---
En CVE er et offentligt ID-nummer for et kendt sikkerhedshul i software. Bogstaverne står for Common Vulnerabilities and Exposures. Programmet startede i 1999, og formålet er at finde, beskrive og registrere offentligt kendte sårbarheder.

Hvert ID har samme form: CVE, året og et nummer. Brotli-fejlen i denne uges nyheder hedder CVE-2026-111497. Organisationer kaldet CNA'er, fx store softwarefirmaer og sikkerhedsfirmaer, deler numrene ud. Den amerikanske nonprofit-organisation MITRE driver programmet med støtte fra den amerikanske cybermyndighed CISA.

> **Tænk på det sådan her:** en CVE er som et journalnummer på et hospital. To læger kan beskrive en patient med forskellige ord, men journalnummeret sikrer, at de taler om den samme person.

En CVE siger, hvad der er i stykker, ikke hvor slemt det er. Det er opgaven for CVSS, et separat pointsystem, som sikkerhedsorganisationen FIRST står bag. Det giver en score fra 0 til 10. Fra 7,0 er det High, og fra 9,0 er det Critical.

Scoren har en grænse, og det siger FIRST selv. Den måler, hvor alvorligt et hul er generelt, ikke risikoen for netop dig. Et kritisk hul i en funktion, du aldrig bruger, betyder mindre end et middelalvorligt hul i din login-side.

**Hvad betyder det for dig:** når en sikkerhedsmeddelelse nævner en CVE, kan du søge på ID'et og straks se, om dine værktøjer er ramt. Brug så scoren og din viden om, hvad du selv kører, til at vælge, hvad der skal opdateres først.
