# 7am AI

Dagens vigtigste AI-nyheder, klar kl. 7 på hverdage. Prototype.

- Skrives af en planlagt Claude Code cloud-routine efter `.agent/INSTRUCTIONS.md`.
- Hver udgave er et indlæg i `_posts/`; GitHub Pages (Jekyll) bygger siden, arkivet og `feed.xml`.
- Mailen sendes via Resend med `.agent/send-mail.mjs`. Nøgle, modtager og afsender ligger
  kun som miljøvariabler i cloud-miljøet (`RESEND_API_KEY`, `NEWSLETTER_TO`, `NEWSLETTER_FROM`).
- Kilder: `.agent/SOURCES.md`. Ret gerne i den.
