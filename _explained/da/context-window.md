---
term: "Context window"
title: "Hvad er et context window?"
summary: "Hvor meget en model kan læse på én gang, og hvorfor pladsen slipper op."
date: 2026-10-16
minutes: 2
other_lang_url: /explained/context-window/
read_more:
  - { label: "Anthropic: Context windows (engelsk)", url: "https://docs.anthropic.com/en/docs/build-with-claude/context-windows" }
short: |
  Context window er, hvor meget tekst en model kan se på én gang: dit spørgsmål, de dokumenter du sætter ind, og dens eget svar. Det måles i tokens, cirka trekvart ord hver.

  Alt uden for vinduet kan modellen slet ikke se. Derfor bliver lange samtaler opsummeret, før pladsen slipper op.
---
Context window er, hvor meget tekst en model kan se på én gang. Det omfatter dit spørgsmål, de dokumenter du sætter ind, samtalen indtil nu og modellens eget svar.

Det måles i tokens. Et token er et lille stykke tekst, cirka trekvart engelsk ord. Et vindue på 1 million tokens rummer omkring 750.000 ord, eller flere tykke bøger.

> **Tænk på det sådan her:** Context window er modellens skrivebord. Alt, der ligger på bordet, kan den læse og bruge. Det, der ikke kan være på bordet, er ude af syne.

Når en samtale bliver længere end vinduet, må noget vige. Værktøjer som Claude Code og ChatGPT opsummerer de ældste dele af samtalen for at skabe plads. Derfor kan en model "glemme" detaljer fra starten af en lang session.

Et større vindue er ikke automatisk bedre. Lange tekster koster mere, fordi du betaler pr. token, og modeller kan være mindre præcise om detaljer, der ligger midt i en meget lang tekst.

**Hvad betyder det for dig:** Til store dokumenter eller kodebaser skal du tjekke vinduets størrelse. Til hverdagsspørgsmål giver en kortere og velvalgt kontekst ofte bedre og billigere svar.
