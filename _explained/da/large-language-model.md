---
term: "Stor sprogmodel (LLM)"
title: "Hvad er en stor sprogmodel (LLM)?"
summary: "En stor sprogmodel (LLM) er den slags AI-model, der ligger bag ChatGPT, Claude og Gemini: hvordan den lærer af tekst, og hvor den går galt."
date: 2026-11-26
minutes: 2
other_lang_url: /explained/large-language-model/
read_more:
  - { label: "IBM: What are large language models (LLMs)? (engelsk)", url: "https://www.ibm.com/think/topics/large-language-models" }
  - { label: "Google for Developers: Language models, Machine Learning Crash Course (engelsk)", url: "https://developers.google.com/machine-learning/crash-course/llm" }
  - { label: "Vaswani m.fl.: Attention Is All You Need, artiklen bag transformeren (engelsk)", url: "https://arxiv.org/abs/1706.03762" }
short: |
  En stor sprogmodel, eller LLM, er en AI-model, der er trænet på meget store mængder tekst. Den lærer at gætte det næste ord i en tekst, og det gør den i stand til at skrive, opsummere og svare på spørgsmål.

  ChatGPT, Claude og Gemini bygger på store sprogmodeller. De kan lyde sikre, selv når de tager fejl.
---
En stor sprogmodel (på engelsk large language model, LLM) er en AI-model, der er trænet på meget store mængder tekst. IBM beskriver den som en model, der gang på gang gætter det næste ord i en tekst. Når den gør det igen og igen, kan den skrive, opsummere, oversætte og svare på spørgsmål. ChatGPT, Claude, Gemini og Llama er alle eksempler på store sprogmodeller.

> **Tænk på det sådan her:** det er som autoudfyld på din telefon, men trænet på et enormt bibliotek af tekst. Den kan fortsætte med et helt svar, ikke kun ét ord.

En sprogmodel regner ifølge Google ud, hvor sandsynligt det er, at et ord eller et stykke af et ord kommer næste gang. De stykker hedder tokens. Under træningen læser modellen milliarder eller endda billioner af ord. Den får ingen facitliste. Den lærer ved selv at finde mønstre i teksten.

De fleste store sprogmodeller bruger en opbygning, der hedder transformer. Den blev præsenteret i 2017 i en artikel med titlen "Attention Is All You Need". Dens vigtigste idé er selvopmærksomhed (self-attention). Den lader modellen veje, hvordan hvert token hænger sammen med de andre, også dem der står langt væk i teksten. En transformer kan også arbejde på mange tokens på én gang, så træningen går meget hurtigere end før.

Modellens indre indstillinger kaldes parametre. Træningen justerer dem. Nogle store sprogmodeller har milliarder af dem. Efter den første træning kan en model trænes videre til en bestemt opgave, for eksempel med tilbagemeldinger fra mennesker.

Store sprogmodeller har begrænsninger. Fordi de vælger de mest sandsynlige ord, kan de skrive ting, der lyder rigtige, men er forkerte. Det kaldes hallucination. De kan også overtage skævheder fra den tekst, de har lært af. Og det kræver meget regnekraft og energi at træne og køre dem.

**Hvad betyder det for dig:** når du skriver med en AI-assistent, taler du med en stor sprogmodel. Den er et stærkt værktøj til udkast, resuméer og idéer. Men den slår ikke fakta op, medmindre den er bygget til det. Tjek derfor alt vigtigt, især tal, navne og kilder.
