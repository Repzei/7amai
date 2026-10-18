# 7am AI: stilguide

Målet: en travl læser forstår hver historie i første læsning, husker den bagefter og får en
"nå, okay"-følelse. Også læsere, der læser langsomt, er ordblinde eller læser på deres andetsprog.
Klogt indhold, enkelt sprog, og hver historie er en historie, ikke en liste. Læs denne fil før du
skriver (U4).

Ændret 19. okt. 2026 efter Jespers feedback: udgaverne føltes som "tilfældige sætninger sat
sammen", "So what" forklarede ikke noget, og tre historier om Claude stod hver for sig.

## Fortæl en historie, ikke en liste (det vigtigste)
Hver historie har én tråd, som læseren kan følge:
1. **Hvorfor er det interessant?** Start med det, læseren allerede kender eller bekymrer sig om
   (en pris, et problem, et mysterium). Det giver en grund til at læse videre.
2. **Hvad skete der?** Nyheden, med de 1-3 vigtigste fakta.
3. **Hvad er fangsten?** Det ærlige forbehold (hvem målte, hvad mangler, hvem kan bruge det).
4. **Derfor er det vigtigt:** aha-forklaringen (se nedenfor).

Sætningerne skal hænge sammen. Brug bindeord: "fordi", "så", "men", "derfor", "det betyder",
"til gengæld". Hvert afsnit bygger videre på det forrige. Korte sætninger er godt, men de må
aldrig blive en række løsrevne fakta. Læs historien højt i tankerne: lyder den som en person, der
forklarer noget, eller som en opslagstavle?

## De 10 regler
1. **"Kort fortalt" først.** Hver historie starter med én fed sætning (højst ca. 25 ord), der er
   det, læseren skal huske. Den kan stå alene.
2. **Korte sætninger, der hænger sammen.** Gennemsnit højst 16 ord, ingen over 25. Men brug
   bindeord, så det bliver en forklaring og ikke en liste.
3. **Hverdagsord.** "bruge" frem for "utilize", "billigere" frem for "more cost-effective".
   Forklar fagudtryk første gang i en kort parentes, eller lad Explained gøre det.
4. **Aktiv form.** "Google released Gemini 4" frem for "Gemini 4 was released by Google".
5. **Højst 3 tal pr. historie, og sæt dem i forhold:** "a tenth of what rivals charge", "twice
   as fast as last month". Et tal uden sammenligning siger læseren lidt.
6. **Udvælg hårdt.** Ikke alle fakta fra kilden skal med. Tag dem, der bærer tråden. Model-ID'er,
   licensnavne, priser pr. 1.000 kald og parameterantal hører kun med, hvis historien handler om
   dem. Resten står i kilden, som er linket.
7. **"Derfor er det vigtigt" giver aha-følelsen.** Ikke en ordre og ikke "change nothing". Forklar
   konsekvensen i almindeligt sprog, gerne med en hverdagssammenligning, der passer, så læseren
   tænker "nå, okay". 1-3 sætninger.
8. **"Prøv det" / "Gør dette" kun når der er noget at gøre** (en frist, en konkret handling, et
   værktøj der kan prøves i dag). Ellers udelades linjen helt.
9. **Overskriften er en hel, kort sætning** med udsagnsord, højst ca. 12 ord, og den lover kun
   det, kilden siger.
10. **Ærlig usikkerhed, kort.** "DeepSeek ran the test itself, and nobody has checked it yet."

Forbudt (også i STRATEGI 1.4): hype ("game changer", "revolutionary", "groundbreaking"),
"in a world where", "let's dive in", udråbstegn, retoriske spørgsmål, fyldord ("basically",
"essentially", "it's worth noting that"), og overdrivelser, kilden ikke bærer ("most of the
internet", "the first ever").

## Saml historier, der hører sammen
Flere nyheder fra samme firma eller om samme emne samme dag bliver ÉN historie med nummererede
dele (`#### <span>1 of 3</span> Titel`), så læseren ikke slutter én Claude-historie og starter en
ny. Fælles "Kort fortalt" øverst, hver del 1-2 korte afsnit, ét fælles "Derfor er det vigtigt"
(der hvor delene har noget til fælles), og "Gør dette" ved den del, det gælder.

## Før og efter (fra udgaven 18. oktober)

**Før** (tolv løsrevne fakta, intet aha):
> DeepSeek released DeepSeek-V4.1-Flash-1017 on 17 October. It is an update to its Flash model,
> and it already runs in DeepSeek's app, website and API. Anyone can download the weights from
> Hugging Face. They use the MIT license [...] The model reads up to 1 million tokens at once. [...]
> **So what:** If you pay for many coding-agent runs, test this model on your own tasks.

**Efter** (én tråd, tre tal, aha):
> **The short version:** A new open model from DeepSeek scores like the top models on a coding
> test, but each task costs cents instead of dollars.
>
> When you use an AI agent to write code, you do not pay for the answer. You pay for every word the
> model reads and writes on the way there. So the real price is the cost of finishing a task.
>
> That is where DeepSeek's new Flash model stands out. On DeepSeek's own coding test, a task costs
> just under $0.20, while rivals land at $2 or more. It also scores a little above Claude Opus 5.
>
> There is a catch. DeepSeek ran the test itself, and nobody has checked it yet. On most other
> tests, Opus 5 is still ahead.
>
> **Why it matters:** Think of it like a taxi that now charges per trip instead of per minute, and
> the trip got ten times cheaper. Tasks that were too expensive to hand to an agent may now be
> worth it.

## Dagen på 60 sekunder (`today:` i front matter)
Én linje pr. hovedhistorie (også samlede historier), i samme rækkefølge: `t` er nyheden i én
sætning (højst ca. 20 ord), `why` er en kort halv sætning om, hvem det betyder noget for. Læseren
skal kunne få hele dagen ud af boksen alene. Ingen nye fakta, kun det, der står i historierne.

## Dansk udgave
- Naturligt dansk, som en dygtig dansk journalist ville skrive det. Ikke en oversættelse ord for ord.
- Samme regler og samme tråd. Labels: "Kort fortalt", "Derfor er det vigtigt", "Prøv det" /
  "Gør dette", dele `#### <span>1 af 3</span>`.
- Brug danske ord, når de findes og er naturlige ("pris", "gratis", "udvikler"), men behold de
  engelske fagudtryk, som danske udviklere selv bruger ("API", "open source", "token", "prompt").
- Æ, ø og å. Datoer som "1. december". Tal med punktum som tusindtalsseparator ("1.500 ord").

## Paper of the day og Explained
- **Paper:** Samme tråd: hvilket problem, hvad de prøvede, hvad de fandt (ét tal, sat i forhold),
  og derfor er det vigtigt. Skriv som til en nysgerrig kollega uden forskerbaggrund. Ingen formler.
- **Explained:** Skriv til en klog person, der aldrig har arbejdet med AI. Start med, hvad det er,
  i én enkel sætning. Brug én hverdagssammenligning ("Think of it like this" / "Tænk på det sådan
  her"), der faktisk passer. Forklar hvordan det virker uden formler, og slut med "Why it matters
  to you" / "Hvad betyder det for dig". Mønster: `_explained/open-weight.md`.

## Tjek før du er færdig
Kør `python3 .agent/readability.py --fix` på begge udgaver (U6). Læs derefter hver historie højt i
tankerne: Har den én tråd? Giver "Derfor er det vigtigt" et aha? Står der noget, kilden ikke siger?
