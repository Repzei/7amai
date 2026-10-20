---
term: "Token"
title: "Hvad er et token?"
summary: "De små bidder tekst, en AI-model læser og skriver, og hvorfor du betaler pr. token."
date: 2026-10-20
minutes: 2
other_lang_url: /explained/token/
read_more:
  - { label: "Hugging Face LLM Course: Tokenizers (engelsk)", url: "https://huggingface.co/learn/llm-course/chapter2/4" }
  - { label: "Claude-dokumentation: Ordliste, Tokens (engelsk)", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
short: |
  Et token er en lille bid tekst, ofte et helt ord eller en del af et længere ord. AI-modeller læser ikke bogstaver eller ord. De deler teksten op i tokens og gør hvert token til tal.

  Tokens er også det, AI prissættes efter. Du betaler for de tokens, en model læser, og dem den skriver. Derfor koster lange tekster og lange agentopgaver mere.
---
Et token er en lille bid tekst, som en AI-model læser eller skriver. Det kan være et helt ord, en del af et ord, et enkelt bogstav eller et tegn.

Modeller kan ikke læse tekst direkte. De arbejder kun med tal. Derfor deler et program, der kaldes en tokenizer, først din tekst op i tokens og giver hvert token et nummer. Almindelige ord forbliver som regel hele. Sjældne eller lange ord deles op. Det engelske ord "tokenization" kan fx blive til "token" og "ization".

> **Tænk på det sådan her:** Et token er som en legoklods. Almindelige ord kommer som én færdig klods. Sjældne ord bygges af flere små klodser. Modellen arbejder kun med klodser, aldrig med hele sætninger.

På engelsk er et token ofte omkring tre til fire bogstaver langt, men det afhænger af modellen og sproget. Andre sprog, også dansk, bruger tit flere tokens på den samme tekst. Den samme sætning kan også tælle som et forskelligt antal tokens i to modeller.

Tokens betyder noget af to grunde. For det første måles en models arbejdshukommelse, dens context window, i tokens. For det andet tager AI-firmaerne betaling pr. token: én pris for de tokens, modellen læser, og som regel en højere pris for dem, den skriver. En agent, der arbejder i flere minutter, kan læse og skrive mange tusind tokens undervejs.

**Hvad betyder det for dig:** Når du sammenligner AI-priser, så sammenlign prisen for en færdig opgave, ikke kun prisen pr. million tokens. En billig model, der skal bruge mange flere tokens for at blive færdig, kan ende med at koste mere.
