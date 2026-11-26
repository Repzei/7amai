---
term: "Finjustering (fine-tuning)"
title: "Hvad er finjustering (fine-tuning) af en AI-model?"
summary: "Finjustering (fine-tuning) betyder, at man træner en færdig AI-model lidt videre på eksempler til én opgave. Her er forskellen på at træne fra bunden og at give en besked."
date: 2026-11-26
minutes: 2
other_lang_url: /explained/fine-tuning/
read_more:
  - { label: "IBM: What is fine-tuning? (engelsk)", url: "https://www.ibm.com/think/topics/fine-tuning" }
  - { label: "Hugging Face: Fine-tuning, Transformers-dokumentationen (engelsk)", url: "https://huggingface.co/docs/transformers/training" }
short: |
  Finjustering betyder, at man tager en AI-model, der allerede er trænet, og træner den lidt videre på et mindre sæt eksempler til én opgave, for eksempel en bestemt tone, et emne eller en opgavetype.

  Det kræver langt mindre regnekraft og data end at træne en model fra bunden. Risikoen er, at modellen glemmer noget af det, den kunne før.
---
Finjustering (på engelsk fine-tuning) betyder, at man tager en AI-model, der allerede er trænet. Så træner man den lidt videre på et mindre sæt eksempler til én opgave. IBM beskriver det som at tilpasse en forhåndstrænet model til bestemte opgaver eller brugssituationer.

> **Tænk på det sådan her:** en praktiserende læge, der tager et kursus for at blive hudlæge. Lægen kan allerede medicin. Kurset giver fokus, ikke en ny uddannelse.

Den første, store træning kaldes forhåndstræning (pre-training). Modellen starter med tilfældige indstillinger og lærer af enorme mængder data. Finjustering starter fra de indstillinger, forhåndstræningen allerede har givet. Hugging Face siger, at finjustering er det samme som forhåndstræning, bortset fra at man ikke starter med tilfældige indstillinger. Det kræver også langt mindre regnekraft, data og tid.

Den mest almindelige form er styret finjustering (supervised fine-tuning). Her giver man modellen eksempler med de rigtige svar, for eksempel par af et spørgsmål og et godt svar. IBM nævner brug som at ændre modellens tone eller træne den på kode. Man kan også lære den at følge instrukser eller give den viden til jura, finans eller medicin.

Der er to hovedveje. Fuld finjustering ændrer alle modellens indstillinger. Det kan blive meget dyrt for en stor model. IBM siger, at det kan kræve 12 til 20 gange mere grafikhukommelse, end selve modellen fylder. Metoder, der sparer på ressourcerne, som LoRA, ændrer kun en lille del eller lægger et lille tillæg oveni, så de er billigere.

Finjustering er ikke det samme som at give en besked (prompting). En besked fortæller modellen, hvad den skal gøre, hver gang du spørger. Finjustering ændrer selve modellen, og ændringen bliver.

Der er risici. IBM nævner to. Modellen kan glemme noget af sin grundviden, og det kaldes catastrophic forgetting. Og er eksempelsættet lille, kan modellen lære det udenad og klare sig dårligt på nyt input, hvilket kaldes overfitting. Gode resultater kræver ofte flere runder med forsøg og rettelser.

**Hvad betyder det for dig:** mange AI-produkter er en almindelig model, som nogen har finjusteret til ét formål, for eksempel kundeservice eller juridisk arbejde. Når et firma siger, at dets model er finjusteret, så spørg, hvilke eksempler den er trænet på. Det afgør, hvad modellen er god til, og hvor den er svag.
