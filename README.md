# 7am AI

Dagens vigtigste AI-nyheder, klar kl. 7 på hverdage. Prototype.

- Skrives af en planlagt Claude Code cloud-routine efter `.agent/INSTRUCTIONS.md`.
- Hver udgave er et indlæg i `_posts/`; GitHub Pages (Jekyll) bygger siden, arkivet og `feed.xml`.
- Mailen sendes via Resend med `.agent/send-mail.mjs`. Resend-nøglen er en network secret på
  cloud-miljøet (agenten kan bruge den, men aldrig læse den). Modtager og afsender ligger kun som
  miljøvariabler i cloud-miljøet (`NEWSLETTER_TO`, `NEWSLETTER_FROM`).
- Kilder: `.agent/SOURCES.md`. Ret gerne i den.
- Projektinstruktioner til Claude: `CLAUDE.md`. Claude-memory for projektet: `.claude-memory/`
  (gendan på en ny computer med `powershell -ExecutionPolicy Bypass -File .claude-memory\restore-memory.ps1`).
