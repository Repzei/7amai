---
term: "Computer use"
title: "Hvad er computer use?"
summary: "Hvordan en AI kan betjene dine apps ved at se på skærmen, og hvorfor den skal holdes i kort snor."
date: 2026-11-20
minutes: 2
other_lang_url: /explained/computer-use/
read_more:
  - { label: "Google AI Studio: Computer use (engelsk)", url: "https://aistudio.google.com/docs/computer-use" }
  - { label: "Anthropic: Computer use tool (engelsk)", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool" }
short: |
  Computer use betyder, at en AI-model betjener en computer, som et menneske gør. Den ser på et skærmbillede, beslutter, hvor den skal klikke, eller hvad den skal skrive, og ser så igen, hvad der skete.

  På den måde kan den bruge næsten alle apps, også dem uden en særlig forbindelse til AI. Prisen er, at den også kan klikke forkert, så du godkender de vigtige trin.
---
Computer use betyder, at en AI-model betjener en computer via skærmen, som et menneske gør. Den ser, klikker og skriver i stedet for at tale med en app gennem en særlig forbindelse.

De fleste AI-værktøjer kan kun arbejde med apps, der er bygget til dem. Et program skal have et API, en fast måde, som software kan tale med det på. Mange programmer har ikke et. Computer use kommer uden om det.

> **Tænk på det sådan her:** en ny kollega sætter sig ved dit skrivebord. Kollegaen kan ikke læse programmets kode. Kollegaen ser på skærmen, flytter musen og skriver, ligesom dig, og tjekker efter hvert trin, at det virkede.

Det virker som en løkke. Et styreprogram tager et skærmbillede og sender det til modellen sammen med opgaven. Modellen svarer med en handling, fx "klik her" eller "skriv det her". Programmet udfører den, tager et nyt skærmbillede og sender det tilbage. Sådan fortsætter det, til opgaven er løst.

Fordi modellen læser skærmen, læser den også alt, hvad der står på den. En hjemmeside kan gemme tekst, der prøver at give agenten nye instrukser. Det kaldes [prompt injection](/da/explained/prompt-injection/). Googles og Anthropics vejledninger giver de samme råd. Kør agenten i et isoleret miljø (en sandbox), og hold adgangskoder og betalingsoplysninger væk fra den. Lad et menneske godkende de trin, der betyder noget, som at købe, sende eller slette.

Det er også langsommere end et API. Hvert trin kræver et nyt billede og et nyt svar.

**Hvad betyder det for dig:** computer use lader en AI tage de kedelige klik i de apps, du allerede har. Men den handler som dig, så giv den kun de apps, opgaven kræver, og hold øje med de første kørsler.
