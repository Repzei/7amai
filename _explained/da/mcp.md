---
term: "MCP"
title: "Hvad er MCP?"
summary: "Standarden, der lader en AI-assistent bruge dine filer, værktøjer og tjenester."
date: 2026-11-25
minutes: 2
other_lang_url: /explained/mcp/
read_more:
  - { label: "Model Context Protocol: Hvad er MCP?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }
short: |
  MCP, kort for Model Context Protocol, er en åben standard for at forbinde en AI-assistent med ting uden for chatten: dine filer, en database, et søgeværktøj, en betalingstjeneste.

  Uden den skal hver assistent have sin egen særlige forbindelse til hver tjeneste. Med den bygges tjenesten én gang og virker i alle assistenter, der taler MCP.
---
En AI-model kan i sig selv kun læse det, du skriver, og skrive et svar tilbage. MCP er standarden, der lader den række længere: åbne en fil, slå noget op i en database, sende en besked, starte et job.

> **Tænk på det sådan her:** MCP er et USB-C-stik til AI-assistenter. En producent af harddiske bygger ikke et stik til hvert mærke bærbar. Den bygger ét stik, og alle computere med det stik kan bruge disken. Protokollens egen dokumentation bruger samme sammenligning.

I praksis er der to sider. En tjeneste, kaldet en MCP-server, beskriver hvad den kan, og hvad hver handling kræver. Assistenten, kaldet klienten, læser den liste og kan kalde en handling, når det hjælper det, du har bedt om. Claude, ChatGPT og kodeværktøjer som VS Code og Cursor understøtter det alle, så én server virker i dem alle.

Protokollen startede hos Anthropic i november 2024 og er nu en åben standard med mange bidragydere.

Det, MCP ikke afgør, er hvor forsigtig tjenesten er. Standarden siger, hvordan en handling beskrives og kaldes. Om handlingen spørger dig først, hvor meget den må, og hvad der sker, når noget går galt, er op til den, der har bygget serveren. Derfor skal en betalingstjeneste bygget på MCP stadig have sine egne godkendelser og grænser.

**Hvad betyder det for dig:** Når en assistent pludselig kan læse din kalender, dit kodelager eller din bankkonto, står der oftest en MCP-server bag. Det er værd at vide, hvad hver tilsluttet server må. Assistenten kan bruge den, så snart din besked kalder på det.
