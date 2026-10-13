# 7am AI: redaktionelle kriterier

Jespers kriterier for en udgave. Redaktørkontrollen (INSTRUCTIONS.md, trin U6) tjekker hver
historie mod dem, FØR udkastet lægges som pull request. Kontrollen erstatter ikke Jespers
godkendelse: kun en udgave Jesper har merget, må stå som "Reviewed by Jesper". En kontrolleret,
ikke-godkendt udgave får `checked: true` og mærket "checked against our editorial standards".

## Sådan kontrolleres
- Vær redaktøren, ikke skribenten: antag at der er fejl, og let efter dem. Brug Agent-værktøjet
  til en separat gennemgang, hvis det findes (giv den kun filerne og denne fil, ikke dine noter);
  ellers gå selv kriterierne igennem én for én, historie for historie.
- Åbn hver kilde igen med WebFetch. Hvad der ikke står i kilden, står ikke i udgaven.
- Tilføj aldrig nye historier i kontrollen. Ret, nedgradér eller fjern.
- Rettes den engelske udgave, rettes den danske tilsvarende (og omvendt).

## Kriterierne
| # | Kriterie | Består ikke: gør dette |
|---|---|---|
| 1 | Hver påstand har en kilde, der er åbnet, og linket virker (ingen 404, ingen betalingsmur uden at det siges). Tal, navne, datoer og priser står i kilden. | Ret påstanden, så den matcher kilden. Kan den ikke bekræftes: fjern påstanden, eller hele historien hvis den bærer den. |
| 2 | Kildemærket passer: Official = firmaet, myndigheden eller forfatterne selv; Reported = navngivet medie; Unconfirmed = rygte eller læk. Big deal kun med mindst én Official-kilde. | Ret mærket. Ingen Official-kilde: nedgradér Big deal til Worth knowing. |
| 3 | "The number" er et ægte tal, der står i kilden, ikke et skøn eller en udregning. | Fjern tallet (intet tal er bedre end et tvunget). |
| 4 | Ingen fyld: hver historie er reelt ny (siden forrige udgave) og værd at bruge læserens tid på. Hellere 3 stærke end 7 halve. | Fjern historien. Udgaven har altid mindst én historie (se U3). |
| 5 | Hver historie siger, hvad den betyder for læseren ("So what" / "Hvad betyder det"), konkret og i bydeform, ikke bare hvad der skete. | Omskriv "So what". Kan der ikke siges noget konkret: overvej om historien er fyld (4). |
| 6 | Ingen hype og ingen pressemeddelelse: ingen "game changer", "revolutionary", "groundbreaking", "in a world where", "let's dive in", udråbstegn eller ukritisk gentagelse af firmaets egne superlativer. Benchmarks kun med kontekst. | Omskriv nøgternt med tal frem for adjektiver. |
| 7 | Hele udgaven kan læses på højst 7 minutter (maks ca. 1.500 ord brødtekst), og `minutes`/`min` passer med ordantallet (ord / 230). | Forkort eller fjern den svageste historie; ret minuttallene. |
| 8 | Den danske udgave er naturligt dansk med æ, ø og å (ikke ae/oe/aa), ikke ordret oversat, og har samme historier, ankre og `items` som den engelske. | Omskriv de stive sætninger; ret afvigelser. |
| 9 | Ingen em dash (U+2014) eller en dash (U+2013) i nogen fil (python-tjekket i INSTRUCTIONS.md). | Erstat med bindestreg, kolon eller ny sætning. |

## Rapport
Skriv resultatet øverst i PR-beskrivelsen, så Jesper kan se det på et øjeblik:

```
Redaktørkontrol: 9/9 kriterier tjekket, <n> historier.
Rettet: <kort liste, fx "#2 Big deal -> Worth knowing (ingen Official-kilde)"> eller "intet".
Fjernet: <historie + kriterie> eller "intet".
```
