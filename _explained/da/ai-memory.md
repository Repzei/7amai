---
term: "AI-hukommelse"
title: "Hvad er hukommelse i en AI-assistent?"
summary: "Hvordan en AI gemmer noter mellem samtaler, og hvorfor en forkert note kan gøre mere skade end ingen note."
date: 2026-11-07
minutes: 2
other_lang_url: /explained/ai-memory/
read_more:
  - { label: "Claude Docs: Memory tool (engelsk)", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool" }
  - { label: "Anthropic: The components of agent memory (engelsk)", url: "https://www.anthropic.com/research/components-of-agent-memory" }
short: |
  En AI-model glemmer alt, når en samtale slutter. Hukommelse er en vej uden om: AI'en skriver noter i filer og læser dem igen i den næste samtale.

  Selve modellen ændrer sig ikke. Den får bare bedre noter at læse, så noterne skal være sande og passe til opgaven.
---
Hukommelse i en AI-assistent er noter, som AI'en skriver ned og læser igen senere, så den kan huske ting fra én samtale til den næste.

En AI-model lærer ikke af at tale med dig. Alt, hvad den ved om samtalen, ligger i dens kontekstvindue, den tekst den kan se lige nu. Når samtalen slutter, er teksten væk. Et hukommelsesværktøj løser det. AI'en gemmer det, den lærer, i filer, fx hvad du foretrækker, eller hvor langt et projekt er, og tjekker filerne, når en ny samtale starter.

> **Tænk på det sådan her:** en læge husker ikke alle patienter, men hun læser din journal, før hun ser dig. Journalen er hukommelsen. Har nogen skrevet noget forkert i den, stoler hun også på det.

Selve modellen forbliver den samme. Den får bare bedre noter at læse. Derfor handler god hukommelse mest om noterne: hvad der er værd at gemme, hvor det ligger, og hvornår det er forældet. Anthropic lader fx Claude gå gamle samtaler igennem offline for at rette noter, der er skredet. Korte, sande noter hjælper mest. En stor bunke gamle noter kan fylde kontekstvinduet og stå i vejen.

Noter kan også blive strakt for langt. En regel, der passer til én opgave, fx "du behøver ikke spørge først", kan være forkert i en anden.

**Hvad betyder det for dig:** en assistent med hukommelse sparer dig for at forklare det samme igen og igen. Men tjek en gang imellem, hvad den har gemt om dig, og ret eller slet det, der er forkert.
