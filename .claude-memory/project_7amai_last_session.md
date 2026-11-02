---
name: 7amai-last-session
description: "7am AI HANDOFF fra seneste session - hvad blev lavet, valg Jesper traf, faldgruber, hvor vi starter. Laes lige efter 7am AI's to-do"
metadata:
  node_type: memory
  type: project
  modified: 2026-11-02T15:56:23.494Z
  originSessionId: 7c954deb-6af0-4771-b27f-2ea083bcde67
---

# 7am AI: handoff (seneste: 2. nov. 2026, skridt 3a + 3b live; før det 29/10 markedsposition + skridt 1-2)

Detaljer står i [[project-7amai-todo]] (afsnit TILLID, MAN KAN SE og MARKEDSPOSITION-ANALYSE); dette er overblikket. Overskriv denne fil ved hver sessions afslutning.

## Lavet og hvorfor
- **28.-29/10:** markedsanalyse (artifact https://claude.ai/artifact/P2yq6Z2SueV2gaT6qXikCE) -> "tillid, man kan se" (STRATEGI 7.1). Skridt 1 live (f9927f5: videresend-linje i mailen, Del-knap, tilmelding på udgaven) og skridt 2 live (90e34cd: /how-we-work/ + /da/metode/ med tal og rettelsesliste).
- **2/11 skridt 3a live (908fdcf, 7a49500):** emnesider /topics/ + /da/emner/, "Topics"/"Emner" i menuen; emner under 3 historier har noindex.
- **2/11 skridt 3b live (428fd74):** "Seen in the news"/"Set i udgaverne" på hver Explained-side (`_includes/seen-in.html`, højst 10 + "og N til i arkivet"); danske søgeord på /da/, /da/explained/ ("AI-begreber forklaret på dansk"), /da/emner/ ("AI-nyheder efter emne"); udgavernes beskrivelse starter med "AI-nyheder 2. november 2026:" / "AI news Nov 2, 2026:". Rettet undervejs: meta description ignorerede `description:` (34 sider viste taglinen), og:title knækkede ved citationstegn.

## Valg Jesper traf
- 29/10: kombineret plan; "Shipped or not?" nu som skridt 4; privacy@ som fejl-adresse for nu; INGEN link til GitHub.
- 2/11: "ja, gå live med begge, også engelsk dato" (datoen foran beskrivelsen også på EN).
- Valgt fra: kilde pr. tilmeldt (privatliv). Titlen på /da/ er den låste one-liner og ændres ikke for SEO.

## Faldgruber
- **Jespers terminal er Windows PowerShell 5.1:** ingen `&&`, brug `;`.
- **`wrangler deploy` blokeres af auto-mode** (produktion): Jesper kører det selv.
- Test nye ting bag et flag i front matter + ulinkede testsider (noindex, sitemap false); fjern flag og slet testsider efter Jespers ja.
- **Ingen `{` `}` i Liquid-strenge** (fejlet Pages-build 2/11, se [[feedback-7amai-lessons]] 15). Tjek `gh run list --limit 1` efter hvert push.
- En Edit-hook kan åbne en lokal fil i browser-panelet; brug så `tabs_create` til web-tests.
- Ændres flow, tjenester eller format: opdatér dashboardets systemfane og roadmap.json i samme ændring.

## Hvor vi starter næste gang
1. **Skridt 4 "Shipped or not?"** (`_data`-liste vedligeholdt af udkast-routinen, kun Official-kilder, dato + kilde pr. status). Godt første eksempel: 30/10-udgaven "Mistral lets anyone download Large 4", fordi 10/10 lovede åbne vægte i oktober (= Leveret). Også Kimi K3.1 Pro: åbne vægte lovet til 4/11 (udgave 24/10).
2. Evt. 2b (rettelser@ + brief@-svar; Jesper opretter reglerne i Cloudflare først).
3. Ca. 10/11: Bluesky-besøg; ca. 25/11: mål forward/share/Search Console (også danske forespørgsler efter 3b) og vælg næste skridt.
