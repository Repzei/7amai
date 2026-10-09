---
title: "Gemini Nano Banana 2.1 er GA, og den gamle billedmodel udfases"
summary: "Google gør Nano Banana 2.1 generelt tilgængelig og udfaser gemini-3.1-flash-image. Derudover en rettelse til Haiku 5.5-tallene og to ting fra OpenAI og Anthropic, du kan prøve."
date: 2026-10-09 07:00:00 +0200
---

## Modeller og priser

### Gemini Nano Banana 2.1 er GA, og gemini-3.1-flash-image er deprecated {#nano-banana-2-1}
Google gjorde den 6. oktober `gemini-nano-banana-2.1` generelt tilgængelig i Gemini API. Den afløser Nano Banana 2 (`gemini-3.1-flash-image`) med bedre prompt-efterlevelse, mere konsistente figurer over flere runder og bedre tekst i billeder. Den kan også lave brede formater (1:4, 4:1, 1:8, 8:1) i 1K, 2K og 4K. Den gamle model er markeret deprecated uden annonceret nedlukningsdato. Changelog'en nævner ingen priser.

> **Betyder for dig:** Bruger du `gemini-3.1-flash-image` nogen steder, så skift modelstrengen nu, mens der ikke er en deadline. Tjek prisen i Google AI Studio, før du sender trafik over.

Kilde: [Gemini API changelog](https://ai.google.dev/gemini-api/docs/changelog)
{: .sources}

## Udviklerværktøjer

### OpenAI Decisions API (limited preview) til routing og klassificering {#decisions-api}
Fra OpenAI DevDay (2. oktober), som ikke var med i tidligere udgaver: Decisions API bruger den lille Luna-model til at vælge ét svar fra en foruddefineret liste ud fra tekst eller billede. Tænkt til klassificering, routing af forespørgsler og valg af en agents næste skridt. Samtidig er GPT-6.1 Sol (kodning, computer use) tilgængelig i API'et, og Agents API har fået computer use. InfoQ nævner hverken Luna-priser eller dato for generel tilgængelighed.

> **Betyder for dig:** Samme type opgave kan du løse med Haiku 5.5 og et struktureret output. Sammenlign, når Decisions API får priser.

Kilde: [InfoQ](https://www.infoq.com/news/2026/10/openai-devday-2026/)
{: .sources}

## Apps og forretning

### Claude for Startups: et års gratis Claude Team og $1.000 i API-credits {#claude-startups}
Anthropic udvider sit startup-program: et års gratis Claude Team (op til fem premium-pladser), $1.000 i API-credits, adgang til Claude Marketplace og virtuelle office hours med Applied AI-teamet. Kravet er, at virksomheden er stiftet inden for de seneste fem år, eller har modtaget finansiering inden for de seneste to. TechCrunch nævner ingen ansøgningsfrist.

> **Betyder for dig:** Er din virksomhed under fem år gammel, er $1.000 i credits et par måneders Claude API til en lille app. Ansøg via claude.com/programs/startups.

Kilde: [TechCrunch](https://techcrunch.com/2026/10/06/anthropic-gives-startups-a-free-year-of-enterprise-service-and-1000-in-token-credits/)
{: .sources}

## Opfølgning

### Haiku 5.5: priserne er bekræftet, men "75 % billigere" og 1M kontekst skal læses med forbehold {#haiku-5-5-opfoelgning}
I går skrev vi om Haiku 5.5 ud fra en sekundær kilde. Unite.ai, som gengiver Anthropics tabeller, bekræfter priserne: $0,10 input og $0,50 output pr. million tokens op til 100.000 tokens i prompten, og $0,50/$2,50 derover (Haiku 4.5: $1/$5). Anthropics "ca. 75 % billigere" er et gennemsnit inklusive en ny tokenizer, der bruger lidt flere tokens pr. opgave, så din egen regning bliver ikke nødvendigvis 90 %. Siden angiver ikke selv et kontekstvindue, så 1M fra i går er ikke bekræftet her. Modellen giver kun tekst ud, og modelstrengen er `claude-haiku-5-5`.

> **Betyder for dig:** Mål tokenforbruget på dine egne prompts, før du regner besparelsen ud, og tjek kontekstgrænsen i Anthropics dokumentation.

Kilde: [Unite.ai](https://www.unite.ai/anthropic-releases-claude-haiku-5-5-cutting-small-model-api-prices/)
{: .sources}

### GPT-6 Luna rulles ud til Free og Go i dag {#gpt-6-luna}
Fra i går: OpenAI udrullede GPT-6 Sol til betalende ChatGPT-brugere sammen med Intelligent UI. GPT-6 Luna følger til Free og Go i dag. 9to5Mac nævner stadig hverken API-adgang eller priser for disse to, ud over at Luna indgår i Decisions API-previewet ovenfor.

Kilde: [9to5Mac](https://9to5mac.com/2026/10/07/openai-brings-gpt-6-to-chatgpt-and-debuts-intelligent-ui/)
{: .sources}
