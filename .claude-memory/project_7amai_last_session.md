---
name: 7amai-last-session
description: "7am AI HANDOFF fra seneste session - hvad blev lavet, valg Jesper traf, faldgruber, hvor vi starter. Laes lige efter 7am AI's to-do"
metadata:
  node_type: memory
  type: project
  originSessionId: e46f3b18-5cc3-4f90-9572-4af7f0591899
  modified: 2026-10-18T18:33:56.320Z
---

# 7am AI: handoff (sessioner 13.-18. okt. 2026)

Detaljer står i [[project-7amai-todo]]; dette er overblikket. Overskriv denne fil ved hver sessions afslutning.

## Lavet og hvorfor
- **Infrastruktur:** DNS flyttet til Cloudflare (DNSSEC fjernet først, `rsend` CNAME tilføjet), privacy@7amai.com via Email Routing, broadcast til alle tilmeldte (workerens /broadcast), privat dashboard (7amai-stats, Basic Auth) med anonyme besøgstal (D1 i EU, ingen cookies), siden synlig for Google.
- **Kvalitet:** redaktørkontrol med 10 kriterier (kilder genåbnes), hårde regler som hook (guard.mjs, også GitHub-connectoren), research med 4 parallelle specialister på Opus 5.5, stilguide + readability.py.
- **Format:** kerne 5-7 min ved 200 ord/min (scriptet skriver tiderne, rundet op), Explained-bibliotek (3 begreber pr. udgave) i stedet for bonus, og fra 19/10 historiestil: "Dagen på 60 sekunder", "Kort fortalt", én tråd, "Derfor er det vigtigt", samlede historier, højst 5.
- **Overblik til Jesper:** dashboardets fane "Sådan virker det" (flowdiagrammer, tjenester, hemmeligheder, live-status) + køreplan fra `.agent/roadmap.json`.

## Valg Jesper traf
- Godkendelse er valgfri (merge før 07:00 = "Reviewed by Jesper"); ingen udkast-mail; udkast kl. 05:30.
- Automatisk godkendelse med Jespers navn blev afvist som ulovligt/vildledende (EU AI Act art. 50); i stedet ærligt mærke "checked against our editorial standards".
- Kvalitet frem for forbrug: Opus 5.5 + 4 research-specialister til udkastet.
- Bonus (On the radar/Try it today) droppet: "rodet"; Explained valgt efter mockup.
- Ærlig læsetid: hellere for høj end for lav (Jesper læser langsomt på engelsk og er ordblind).
- Marketing: fuldt automatisk, AI-mærket, kun Bluesky/Threads først, 7am AI før Gainfully, delt i delmål D1-D7 ([[marketing-todo]]).
- Agenter: Haiku 5.5 (high på tester/db-tjekker, medium på soeger/logger), oversaetter Sonnet, reviewer Opus.

## Faldgruber
- Lange sessioner brænder tokens af (hele samtalen sendes hver gang): tjek `get_usage`, del i delmål, foreslå /clear ([[token-pacing]]).
- Min egen stilguide skabte hakkende fakta-lister; mål korthed, men kræv tråd og bindeord.
- Faktatjek også egne eksempler (overdrivelser som "most of the internet" sneg sig ind i en mockup).
- Ændres flow, tjenester eller format: opdatér dashboardets systemfane og roadmap.json i samme ændring.

## Hvor vi starter næste gang
1. Tjek udgaven 19/10: følger den historiestilen (today:, short, why, samlede historier, højst 5)?
2. Marketing D1 i en frisk session, efter forbrugstjek.
