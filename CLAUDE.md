# CLAUDE.md: 7am AI

## Projektbeskrivelse
**7am AI** er et dagligt AI-nyhedsoverblik, klar før kl. 7 på hverdage. Hver udgave
udgives på https://7amai.com og sendes som en kort mail med links til hvert punkt.
Indholdet skrives af en planlagt Claude Code cloud-routine. Lige nu er det en prototype
til ejeren selv; det er bygget, så det kan åbnes som offentligt nyhedsbrev senere.

Sprog: engelsk hovedudgave på `/`, dansk udgave på `/da/`. Format: "The 7" (se `STRATEGI.md`).

## Tech stack
- **Jekyll på GitHub Pages** fra `main`. Ingen build-script, ingen npm-pakker til siden.
- **jekyll-feed** til `feed.xml`.
- **Resend** til mail (afsender `brief@7amai.com`), kaldt med `curl` fra `.agent/send-mail.mjs`.
- **To Claude Code cloud-routines** (Sonnet 5.5, separat cloud-miljø): udkast kl. 6 (PR + udkast-mail til godkendelse) og afsendelse kl. 7 (godkendt = "Reviewed by Jesper", ellers AI-mærket).
- Domæne og DNS hos simply.com. HTTPS via GitHub Pages (Let's Encrypt, fornyes automatisk).

## Filstruktur
| Sti | Hvad |
|---|---|
| `_posts/<dato>-<slug>.md` | Engelsk udgave (hovedudgave), `/<åååå>/<mm>/<dd>/` |
| `_da/<dato>-<slug>.md` | Dansk udgave, `/da/...` (altid AI-mærket) |
| `_data/i18n.yml` | Tekster pr. sprog (tagline, AI-mærkning m.m.) |
| `index.html`, `da/index.html` | Forside/arkiv pr. sprog |
| `_layouts/default.html`, `_layouts/issue.html` | Sideskabeloner (`noindex` i default, mens det er prototype) |
| `assets/style.css` | Al styling, lys/mørk via `prefers-color-scheme` |
| `_config.yml` | `url`, `future: true` (påkrævet), permalink, `exclude` |
| `CNAME` | `7amai.com` (styres af GitHub Pages-indstillingen) |
| `.agent/INSTRUCTIONS.md` | Agentens fulde proces. Ret her for at ændre indhold eller format |
| `.agent/SOURCES.md` | Kildeliste |
| `.agent/email-template.html` | Mailskabelon + byggeklodser |
| `.agent/send-mail.mjs` | Afsendelse via Resend |
| `.agent/sent.log` | Datoer der er sendt (idempotens) |
| `.claude-memory/` | Kopi af Claude-memory for projektet + `restore-memory.ps1` |
| `STRATEGI.md` | Mission, identitet "The 7", spor, redaktionel model, faser. Læs før større ændringer |

## Ufravigelige regler
- **Repoet er offentligt.** Ingen mailadresser, API-nøgler eller private data i filer eller
  commits. Git-identitet: GitHub noreply-mail. Modtager og afsender ligger kun som
  miljøvariabler i cloud-miljøet; Resend-nøglen er en network secret, som agenten ikke kan læse.
- **Em dash (U+2014) og en dash (U+2013) er forbudt** i indlæg, mails og sider. Tjek med python
  (`t.count(chr(0x2014))`), ikke `grep -P` (virker ikke i cloud-sandboxen).
- **Dansk med æ, ø og å**, aldrig ae/oe/aa i tekst til læsere.
- **Ingen opdigtede nyheder, tal eller citater.** Hvert punkt har en kilde, agenten selv har åbnet.
- **Kald til Resend skal gå gennem `curl`**, ikke Nodes `fetch` (den går uden om proxyen, der
  sætter nøglen på).
- **`future: true` må ikke fjernes** fra `_config.yml` (udgaven dateres 07:00, men bygges før).

## Kør og test
- Kør routinen manuelt via RemoteTrigger `run` (eller claude.ai/code/routines). Efter 00:00 dansk
  tid laver en manuel kørsel næste dags udgave.
- Fejlfinding: RemoteTrigger `list_runs` og `get_run_log`. "Sendt <dato>"-commit = mail sendt.
- Visuel kontrol: åbn udgaven på 375 px bredde i lys og mørk tilstand; ingen vandret scroll.

## Drift
- Routine-ID, miljø-ID, DNS og faldgruber står i `.claude-memory/project_7amai_infra.md` og
  `.claude-memory/feedback_7amai_lessons.md`.
- Hvis GitHub Pages-certifikatet ikke udstedes: fjern og sæt custom domain igen, når DNS er synlig.
