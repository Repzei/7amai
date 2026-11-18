---
term: "Remote code execution"
title: "Hvad er remote code execution?"
summary: "Den værste slags sikkerhedshul: en fremmed kører sin egen kode på din computer, langt væk fra."
date: 2026-11-18
minutes: 2
other_lang_url: /explained/remote-code-execution/
read_more:
  - { label: "MITRE CWE-787: Out-of-bounds Write (engelsk)", url: "https://cwe.mitre.org/data/definitions/787.html" }
  - { label: "OWASP: Buffer Overflow (engelsk)", url: "https://community.owasp.org/vulnerabilities/Buffer_Overflow" }
short: |
  Remote code execution, eller RCE, betyder, at en angriber kan få en computer til at køre sin egen kode uden at sidde ved den. Ofte skal angriberen bare sende den nogle data.

  Det er den alvorligste slags hul, fordi den, der kan køre kode på en server, som regel kan læse dens data, ændre dem eller bruge den til at angribe flere systemer.
---
Remote code execution, ofte forkortet RCE, betyder, at en person langt væk kan få din computer til at køre sin egen kode. Personen behøver hverken din adgangskode eller en plads ved dit skrivebord. Tit er det nok at sende de rigtige data til et program, der er åbent mod internettet.

> **Tænk på det sådan her:** et program er som en ekspedient, der følger en liste med instrukser. Normalt kan du kun række ekspedienten formularer, der skal udfyldes. Et RCE-hul er et trick, der får ekspedienten til at læse din formular som en ny instruks og derefter gøre, hvad der står.

En almindelig årsag er et program, der skriver data ud over enden af den hukommelse, det har sat af. Sikkerhedskataloget CWE kalder det en out-of-bounds write. Styrer en angriber det, der løber over, kan angriberen nogle gange ændre programmets egne instrukser og få det til at køre uventet kode.

Programmer i sprog som Java og Python er immune over for den slags, forklarer sikkerhedsorganisationen OWASP. Men der er én undtagelse: motoren, der kører sproget. Den er ofte skrevet i hurtigere og mindre beskyttet kode, så en fejl dér kan stadig åbne døren.

Et hul, der ikke kræver login, kaldes unauthenticated eller pre-auth. Det er det værste tilfælde, fordi alle, der kan nå serveren, kan prøve.

**Hvad betyder det for dig:** når en sikkerhedsmeddelelse siger "remote code execution", så tag den alvorligt med det samme. Find ud af, om du bruger den ramte software, og opdatér den først, før de mindre rettelser.
