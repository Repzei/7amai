---
term: "Parameter"
title: "Hvad er en parameter i en AI-model?"
summary: "De tal, en model lærer under træningen, og hvorfor flere ikke altid er bedre."
date: 2026-11-05
minutes: 2
other_lang_url: /explained/parameter/
read_more:
  - { label: "Google Machine Learning Glossary: parameter (engelsk)", url: "https://developers.google.com/machine-learning/glossary#parameter" }
short: |
  En parameter er et af de tal inde i en AI-model, som den lærer under træningen. Tilsammen rummer de alt, hvad modellen ved. Når der står "en 70B-model", betyder det 70 mia. af den slags tal.

  Flere parametre kan rumme mere viden, men modellen skal også bruge mere hukommelse og mere regnekraft til hvert svar.
---
En parameter er et af de tal inde i en AI-model, som modellen lærer under træningen. Googles ordliste kalder dem de vægte og bias-værdier, en model lærer. Tilsammen er de det, modellen ved.

Når træningen starter, er tallene tilfældige. Så læser modellen enorme mængder tekst og gætter det næste ord igen og igen. Hver gang den gætter forkert, skubber træningen tallene lidt, så næste gæt bliver bedre. Efter milliarder af den slags skub rummer tallene mønstre i sprog, fakta og færdigheder.

> **Tænk på det sådan her:** et mixerbord i et studie har mange små knapper. Én knap alene gør ikke meget. Men står de alle helt rigtigt, lyder sangen godt. Parametrene er knapperne, og træningen er lydteknikeren, der drejer dem millioner af gange, til det lyder rigtigt.

Derfor angiver man en models størrelse som et antal. "8B" betyder 8 mia. parametre, og "2,8T" betyder 2,8 billioner. Den fil, du henter til en åben model, er for det meste disse tal.

Antallet siger to ting. En større model kan som regel rumme mere viden og klare sværere opgaver. Men den skal også bruge mere hukommelse, og hvert svar kræver mere regnekraft. Nogle store modeller, såkaldte mixture-of-experts-modeller, bruger kun en lille del af deres parametre til hvert ord. Derfor taler man om "samlede" og "aktive" parametre.

Der er en fangst, når man sammenligner antal. En mindre model, der er trænet på bedre data, kan slå en større. Så tallet er et fingerpeg om pris og kraft, ikke en karakter.

**Hvad betyder det for dig:** antallet af parametre fortæller dig cirka, hvad en model koster at køre, og hvilken maskine den kræver. En model med nogle få milliarder parametre kan køre på en bærbar. En med billioner kræver et datacenter.
