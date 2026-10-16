---
term: "Mixture of experts (MoE)"
title: "Hvad er en mixture-of-experts-model (MoE)?"
summary: "Hvorfor kæmpemodeller kun bruger en lille del af sig selv pr. ord."
date: 2026-10-16
minutes: 2
other_lang_url: /explained/mixture-of-experts/
read_more:
  - { label: "Hugging Face: Mixture of Experts Explained (engelsk)", url: "https://huggingface.co/blog/moe" }
short: |
  En mixture-of-experts-model er delt op i mange mindre specialister, der kaldes eksperter. For hvert ord, den skriver, vælger en lille "router" kun nogle få af dem til at gøre arbejdet.

  Så en model kan have hundredvis af milliarder vægte i alt, men kun bruge en brøkdel pr. ord. Det gør den meget hurtigere og billigere at køre end en almindelig model af samme størrelse.
---
En mixture-of-experts-model er delt op i mange mindre specialister, der kaldes eksperter. For hvert ord, den skriver, vælger en lille del af modellen, routeren, kun nogle få eksperter til at gøre arbejdet. Resten holder pause.

> **Tænk på det sådan her:** Et stort hospital har hundredvis af læger, men du ser kun de to, du har brug for.

Derfor kan en model have hundredvis af milliarder vægte i alt, men kun bruge en brøkdel af dem pr. ord. Den skal stadig have hukommelse nok til alle eksperterne, men hvert skridt er meget hurtigere og billigere end i en "tæt" model af samme størrelse, hvor alle vægte arbejder på hvert ord.

Den afvejning er grunden til, at de fleste af nutidens største modeller er bygget sådan. Det er også derfor, værktøjer til at køre modeller lokalt, som llama.cpp, får særlige tricks til MoE-modeller: De kan lægge de eksperter, der sjældent bruges, i langsommere hukommelse.

**Hvad betyder det for dig:** Når en MoE-model har et kæmpe antal parametre, så kig også efter de "aktive" parametre. Det tal siger mere om hastighed og driftsomkostninger.
