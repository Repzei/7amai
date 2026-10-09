---
name: project-7amai-infra
description: 7am AI teknik og drift - repo, Jekyll/GitHub Pages, cloud-routine og miljø (ID'er), Resend, DNS hos simply.com, og hvordan man ændrer det
metadata:
  type: project
---

# 7am AI: teknik og drift

Formål og beslutninger: [[project-7amai]]. Faldgruber: [[feedback-7amai-lessons]].

## Repo og side
- GitHub: `Repzei/7amai` (OFFENTLIGT, fordi GitHub Pages kun er gratis sådan). Commits med GitHub noreply-mail (`<id>+Repzei@users.noreply.github.com`), aldrig Gmail.
- Lokalt: `C:/Users/havnd/.claude/projects/MitProjekt/7amai`. Projektinstruktioner i `CLAUDE.md`, memory-kopi i `.claude-memory/`.
- Jekyll på GitHub Pages fra `main` (ingen build-script): `_posts/<dato>-<slug>.md` = én udgave, `index.html` = arkiv, `feed.xml` via jekyll-feed, `_layouts/default.html` + `issue.html`, `assets/style.css` (lys/mørk, accent #E8572A).
- `_config.yml`: `url: https://7amai.com`, `baseurl: ""`, `future: true` (påkrævet), permalink `/:year/:month/:day/`, `exclude` README.md og CLAUDE.md.
- Domæne: købt hos simply.com, DNS hos simply.com: A @ -> 185.199.108.153 / .109 / .110 / .111.153, CNAME www -> repzei.github.io, plus Resends DNS-linjer. HTTPS: Let's Encrypt via GitHub, fornyes automatisk, "Enforce HTTPS" slået til.

## Agenten
- `.agent/INSTRUCTIONS.md` = hele processen (læses af routinen hver gang; ret her for at ændre adfærd).
- `.agent/SOURCES.md` = kildeliste, `.agent/email-template.html` = mailskabelon, `.agent/send-mail.mjs` = afsendelse via curl til Resend, `.agent/sent.log` = datoer der er sendt (idempotens: findes udgave men ikke i sent.log -> send kun).
- Hukommelse: agenten læser de 5 seneste `_posts` (ingen gentagelser, "Opfølgning"-sektion).

## Cloud-routine og miljø
- Routine: "7am AI (daglig AI-nyhedsmail)", id `trig_01UdzqNcTDciDH39dndFmm6U`, cron `30 4 * * 1-5` UTC (06:30 sommertid / 05:30 vintertid, altid før 7), Sonnet 5.5, tools Bash/Read/Write/Edit/Glob/Grep/WebSearch/WebFetch, INGEN connectors. https://claude.ai/code/routines/trig_01UdzqNcTDciDH39dndFmm6U
- Miljø: "7am-ai", id `env_01CanacjFNnL3tfRTKUqMifC` (separat fra Gainfully-agentens Default-miljø). Netværk **Full**. Env-variabler `NEWSLETTER_TO` (Jespers Gmail) og `NEWSLETTER_FROM` (`7am AI <brief@7amai.com>`). Resend-nøglen er en **network secret** (Bearer, host api.resend.com): proxyen sætter den på, agenten kan aldrig læse den.
- Ændr routinen med schedule-skill / RemoteTrigger (`update`, `run`, `list_runs`, `get_run_log`). Slet kun via claude.ai/code/routines.

## Resend
- Domæne 7amai.com verificeret (region Ireland, eu-west-1). API-nøgle "7am-ai-routine": kun Sending access, kun 7amai.com.
