---
name: 7amai-last-session
description: "7am AI HANDOFF fra seneste session - hvad blev lavet, valg Jesper traf, faldgruber, hvor vi starter. Laes lige efter 7am AI's to-do"
metadata:
  node_type: memory
  type: project
  modified: 2026-11-04T20:40:41.586Z
  originSessionId: 7843c4d5-d2f3-4d82-b945-17d4e6156cee
---

# 7am AI: handoff (seneste: 4. nov. 2026, skridt 4 "Shipped or not?" live)

Detaljer står i [[project-7amai-todo]] (afsnit TILLID, MAN KAN SE); dette er overblikket. Overskriv denne fil ved hver sessions afslutning.

## Lavet og hvorfor
- **4/11 skridt 4 live (bc81503, e50d333, ce47033, b899fe2):** /shipped/ "Shipped or not?" + /da/leveret/ "Leveret eller ej?" fra `_data/promises.yml`: daterede løfter fra AI-firmaer og om de kom, kun Official-kilder. Første to: Moonshot Kimi K3.1 Pro og Mistral Large 4 (begge leveret).
- Udkast-routinen vedligeholder listen fra 5/11 (INSTRUCTIONS U5c, kontrol i U6, med i PR'en, slutlinje "Shipped: n nye, m ændrede").

## Valg Jesper traf
- 2/11: routinen vedligeholder listen. 4/11: navnet "Shipped or not?" / "Leveret eller ej?"; "ja gå live med den".
- Mit valg, sagt til Jesper: link i sidefoden og på How we work, ikke i menuen, fordi den er fuld ved 375 px.
- "Bekræftet"-datoen er den dag, firmaets egen kilde viser status, ellers tjekdagen. Kimi står 4/11, fordi filerne er dateret 2/11, men det kan ikke ses, hvornår repoet blev offentligt.

## Faldgruber
- **Sessionen kan ikke flyttes til 7amai** med change_directory (hook: mappen under `.claude` kan ikke slås op). Start 7am AI-sessioner direkte i `C:/Users/havnd/.claude/projects/MitProjekt/7amai`, ellers gælder repoets hooks ikke. Stien `MitProjekt/7amai` direkte under brugermappen findes ikke.
- `gh run watch` kan hænge over 5 min; vent i baggrunden med en curl-løkke mod den ændrede side.
- **Jespers terminal er Windows PowerShell 5.1:** ingen `&&`, brug `;`.
- **`wrangler deploy` blokeres af auto-mode** (produktion): Jesper kører det selv. Giv altid den fulde `cd`-sti til workerens mappe (`C:\Users\havnd\.claude\projects\MitProjekt\7amai\worker\stats`), ellers fejler det med "Could not detect a directory containing static files".
- Test nye ting på ulinkede testsider (noindex, sitemap false), og fjern det efter Jespers ja.
- **Ingen `{` `}` i Liquid-strenge** (se [[feedback-7amai-lessons]] 15). Tjek `gh run list --limit 1` efter hvert push.
- Ændres flow, tjenester eller format: opdatér dashboardets systemfane og roadmap.json i samme ændring.

## Hvor vi starter næste gang
1. **Tjek 5/11:** "Shipped: n nye, m ændrede" i udkastets slutlinje og "Shipped or not" i PR-rapporten. Ingen ændringer er det normale på en stille dag.
2. Evt. 2b (rettelser@ + brief@-svar; Jesper opretter reglerne i Cloudflare først).
3. Ca. 10/11: Bluesky-besøg; ca. 25/11: mål forward/share/Search Console (også danske forespørgsler) og vælg næste skridt.
