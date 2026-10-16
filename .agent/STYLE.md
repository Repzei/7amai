# 7am AI: stilguide

Målet: en travl læser forstår hver historie i første læsning, også uden at være ekspert.
Enkelt, let at læse, let at forstå. Klogt indhold, enkelt sprog. Læs denne fil før du skriver (U4).

## De 10 regler
1. **Nyheden først.** Første sætning siger, hvad der skete, og hvem der gjorde det. Ingen optakt.
2. **Korte sætninger.** Gennemsnit højst 16 ord. Ingen sætning over 25 ord. Én idé pr. sætning.
3. **Hverdagsord.** Skriv "bruge" frem for "utilize", "billigere" frem for "more cost-effective".
   Forklar fagudtryk første gang i en kort parentes: "context window (how much text it can read at once)".
4. **Aktiv form.** "Google released Gemini 4" frem for "Gemini 4 was released by Google".
5. **Tal med mening.** Højst 2-3 tal pr. afsnit, og sæt dem i forhold: "half the price of GPT-6",
   "twice as fast as last month's version". Et tal uden sammenligning siger læseren lidt.
6. **Udvælg.** Ikke alle fakta fra kilden skal med. Tag dem, der ændrer, hvad læseren gør eller
   forstår. Resten hører hjemme i kilden, som er linket.
7. **Fast opbygning af en historie:**
   - Afsnit 1 (1-2 sætninger): hvad skete der.
   - Afsnit 2 (2-3 sætninger): hvorfor betyder det noget, og hvad var situationen før.
   - Afsnit 3 (valgfrit, 2-3 sætninger): de vigtigste detaljer (pris, tilgængelighed, begrænsninger).
   - So what: én eller to sætninger i bydeform, konkret.
   Korte afsnit (højst 3 sætninger). Hellere tre små afsnit end ét langt.
8. **Overskriften er en hel, kort sætning** med udsagnsord, der siger det vigtigste, højst ca. 12 ord.
   Den skal give mening alene, også i en mail-forhåndsvisning.
9. **Ærlig usikkerhed, kort.** "Google gives no benchmark numbers." Ikke en lang liste over, hvad
   kilden ikke siger; kun det, læseren ville savne.
10. **Kode og ID'er kun når læseren skal bruge dem.** Et model-ID eller et flag hører hjemme i
    So what, ikke midt i nyheden.

Forbudt (også i STRATEGI 1.4): hype ("game changer", "revolutionary", "groundbreaking"),
"in a world where", "let's dive in", udråbstegn, retoriske spørgsmål, fyldord ("basically",
"essentially", "it's worth noting that").

## Før og efter

**Før** (korrekt, men tung: én blok, ti fakta, model-ID i nyheden):
> Google released Gemini 4 Argon to developers on 13 October through the paid tier of the Gemini
> API, with Google AI Ultra subscribers able to try it in AI Studio and Antigravity. The model ID
> is `gemini-4-argon`. Until 30 November it costs $2 per million input tokens and $10 per million
> output tokens, thinking tokens included. From 1 December that becomes $4 and $20. [...]

**Efter** (samme fakta der betyder noget, let at læse):
> Google has opened Gemini 4 Argon, its newest model, to paying developers.
>
> The launch price is low on purpose: $2 per million input tokens until 30 November. On
> 1 December it doubles to $4. That makes it cheap to test now, but you should plan for the
> higher price.
>
> It is not available on the free tier. GitHub also added it to Copilot the same day for paid plans.
>
> **So what:** Test it on your own long tasks this month, and budget with the December price.

## Dansk udgave
- Naturligt dansk, som en dygtig dansk journalist ville skrive det. Ikke en oversættelse ord for ord.
- Samme regler: korte sætninger, hverdagsord, aktiv form ("Google har lanceret" frem for "Der er
  blevet lanceret").
- Brug danske ord, når de findes og er naturlige ("pris", "gratis", "udvikler"), men behold de
  engelske fagudtryk, som danske udviklere selv bruger ("API", "open source", "token", "prompt").
- Æ, ø og å. Datoer som "1. december". Tal med punktum som tusindtalsseparator ("1.500 ord").

## Paper of the day og Explained
- **Paper:** Forklar som til en nysgerrig kollega uden forskerbaggrund: problemet, ideen, resultatet
  (med ét tal, sat i forhold), og hvorfor det betyder noget i praksis. Ingen formler.
- **Explained:** Skriv til en klog person, der aldrig har arbejdet med AI. Start med, hvad det er,
  i én enkel sætning. Brug én hverdagssammenligning ("Think of it like this" / "Tænk på det sådan
  her"), der faktisk passer, og sig ærligt, hvor den halter. Forklar hvordan det virker uden
  formler, og slut med "Why it matters to you" / "Hvad betyder det for dig". Nævn gerne dagens
  nyhed som eksempel i hovedbegrebet, men skriv biblioteksfilen, så den også giver mening om et år.
  Mønster: `_explained/open-weight.md`.

## Tjek før du er færdig
Kør `python3 .agent/readability.py <fil>` på begge udgaver (U6). Den viser gennemsnitlig
sætningslængde, sætninger over 25 ord og kernens læsetid. Ret, til den melder OK.
