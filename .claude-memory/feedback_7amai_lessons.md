---
name: feedback-7amai-lessons
description: Faldgruber fundet under opsætningen af 7am AI (cloud-routines, network secrets, Jekyll, GitHub Pages-certifikat) - gælder også fremtidige cloud-agenter
metadata:
  type: feedback
---

Lærdomme fra 7am AI ([[project-7amai]], [[project-7amai-infra]]). De fleste gælder alle Claude cloud-routines, også Gainfully-indholdsagenten.

**Why:** Hver af dem kostede en fejlet testkørsel eller en ødelagt side, før årsagen blev fundet.

**How to apply:** Tjek listen, før en ny cloud-agent eller statisk side sættes op, og når en routine fejler.

1. **Network secrets virker kun gennem proxyen.** Nodes indbyggede `fetch` ignorerer `HTTPS_PROXY` og går uden om proxyen, så nøglen kommer aldrig med (Resend svarede 401 "Missing API Key"). Brug `curl` (eller `NODE_USE_ENV_PROXY=1`) til kald, der skal have en network secret.
2. **Trusted-netværk blokerer almindelige hjemmesider** (cloud-sandboxen kunne ikke nå gainfully.app eller nyhedssider). Agenter der læser nettet, skal have et miljø med **Full** eller **Custom** netværk.
3. **Network secrets kan kun tilføjes, når et miljø redigeres**, ikke ved oprettelse.
4. **Routines får automatisk Google Drive og Claude Docs koblet på** ved oprettelse via API, selv med `mcp_connections: []`. Ryd dem bagefter med `update` + `clear_mcp_connections: true` (eller giv kun de nødvendige).
5. **`grep -P` med unicode (`\x{2014}`) virker ikke i sandboxen** ("code point too large"). Tjek em/en dash med python: `t.count(chr(0x2014))`.
6. **Jekyll skjuler fremtidigt daterede indlæg.** En udgave dateret 07:00, bygget 06:30, kræver `future: true` i `_config.yml`.
7. **GitHub Pages-certifikatet startes ikke, hvis custom domain sættes før DNS er synlig overalt.** Fix: når DNS svarer på 8.8.8.8 og 1.1.1.1, fjern og sæt `cname` igen via API (`PUT repos/<repo>/pages` med `{"cname":null}` og så domænet). Certifikatet kom inden for et minut. Derefter `https_enforced=true`.
8. **Offentligt repo = offentlige commits.** Brug GitHub noreply-mail som git-identitet, og læg aldrig modtager-mail eller nøgler i repoet (de ligger i cloud-miljøet).
9. **Kørsler efter midnat dansk tid laver næste dags udgave** (agenten bruger `TZ=Europe/Copenhagen`). En manuel test efter 00:00 "bruger" dagens udgave, og morgenkørslen springer så over.
