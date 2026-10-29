---
name: 7amai-last-session
description: "7am AI HANDOFF fra seneste session - hvad blev lavet, valg Jesper traf, faldgruber, hvor vi starter. Laes lige efter 7am AI's to-do"
metadata:
  node_type: memory
  type: project
  modified: 2026-10-29T22:03:42.109Z
  originSessionId: 7c954deb-6af0-4771-b27f-2ea083bcde67
---

# 7am AI: handoff (seneste: 29. okt. 2026, markedsposition + skridt 1; før det 27/10 besøgskilder + delingsbillede)

Detaljer står i [[project-7amai-todo]] (afsnit TILLID, MAN KAN SE og MARKEDSPOSITION-ANALYSE); dette er overblikket. Overskriv denne fil ved hver sessions afslutning.

## Lavet og hvorfor (28.-29/10)
- **Markedsanalyse** (artifact https://claude.ai/artifact/P2yq6Z2SueV2gaT6qXikCE): de store sælger "lær AI på jobbet" (kurser, værktøjer, prompts), ingen viser kildesikkerhed eller rettelser. Jesper valgte "tillid, man kan se" + de gratis dele af dansk (B) og Build (C), og "Shipped or not?" rykket frem fra fase 2. Skrevet i STRATEGI 7.1 + roadmap.json (f314ee3).
- **Skridt 1 live (f9927f5):** videresend-linje øverst i mailen (`?ref=forward#signup`), opfordring til at videresende nederst, Del-knap pr. historie (`_includes/share.html`, `?ref=share`), tilmeldingsformular nederst på udgaven + link til den øverst. Nye kilder forward/share i beacon, worker, dashboard og privatlivspolitik EN/DA. Workers deployet af Jesper (627ed080 / 0347f738).

- **Skridt 2 live (90e34cd):** "How we work" / "Sådan arbejder vi" (/how-we-work/, /da/metode/) med tal for de 7 seneste udgaver, proces, kildemærker, AI-mærkning og rettelsesliste, alt regnet af Jekyll (`_includes/trust-stats.html`). Linket fra sidefoden og legenden i hver udgave.

## Valg Jesper traf
- 29/10: kombineret plan besluttet; "Shipped or not?" nu som skridt 4; testsiderne godkendt, men bad om en ekstra gennemgang først (gav: videresend-linje øverst i stedet for nederst, link til tilmelding øverst på udgaven, aria-label på Del).
- 29/10: privacy@ som fejl-adresse for nu; rettelser@ + svar på brief@ tages i en anden session; INGEN link til GitHub ("så åben skal det heller ikke være").
- Valgt fra: kilde pr. tilmeldt (ville knytte spor til mailadressen, strider mod privatlivspolitikken).

## Faldgruber
- **Jespers terminal er Windows PowerShell 5.1:** ingen `&&`, brug `;`. Giv kommandoer som `Set-Location ...; npx.cmd wrangler deploy`.
- **`wrangler deploy` blokeres af auto-mode** (produktion): Jesper kører det selv. Læsning/sletning af egne testrækker i D1 med `wrangler d1 execute` virker.
- Test nye ting bag et flag i front matter (`forward_box`, `share_preview`) + ulinkede testsider (noindex, sitemap false); fjern flag og slet testsider efter Jespers ja.
- En Edit-hook kan åbne en lokal fil i browser-panelet; brug så `tabs_create` til web-tests.
- Ændres flow, tjenester eller format: opdatér dashboardets systemfane og roadmap.json i samme ændring.

## Hvor vi starter næste gang
1. Tjek mailen 30/10: videresend-linjen øverst og opfordringen nederst (EN + DA), Del-knappen på en rigtig telefon.
2. Skridt 3: emnesider fra items `topic` (EN + DA; start med sikkerhed, EU AI Act, åbne modeller), "Set i udgaverne" på Explained, danske søgeord i /da/-titler. Evt. først 2b (rettelser@ + brief@-svar).
3. Ca. 10/11: Bluesky-besøg; ca. 25/11: mål forward/share/Search Console og vælg næste skridt.
