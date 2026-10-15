# 7am AI: redaktionelle kriterier

Jespers kriterier for en udgave (stil: `.agent/STYLE.md`). Redaktørkontrollen (INSTRUCTIONS.md, trin U6) tjekker hver
historie mod dem, FØR udkastet lægges som pull request. Kontrollen erstatter ikke Jespers
godkendelse: kun en udgave Jesper har merget, må stå som "Reviewed by Jesper". En kontrolleret,
ikke-godkendt udgave får `checked: true` og mærket "checked against our editorial standards".

## Sådan kontrolleres
- Vær redaktøren, ikke skribenten: antag at der er fejl, og let efter dem. Brug Agent-værktøjet
  til en separat gennemgang, hvis det findes (giv den kun filerne og denne fil, ikke dine noter);
  ellers gå selv kriterierne igennem én for én, historie for historie.
- Åbn hver kilde IGEN med WebFetch i kontrollen, også dem der blev åbnet under research
  (research-noter tæller ikke: kontrollen skal se kilden med friske øjne). Hvad der ikke står i
  kilden, står ikke i udgaven.
- Tilføj aldrig nye historier i kontrollen. Ret, nedgradér eller fjern.
- Rettes den engelske udgave, rettes den danske tilsvarende (og omvendt).

## Kriterierne
| # | Kriterie | Består ikke: gør dette |
|---|---|---|
| 1 | Hver påstand har en kilde, der er åbnet, og linket virker (ingen 404, ingen betalingsmur uden at det siges). Tal, navne, datoer og priser står i kilden. | Ret påstanden, så den matcher kilden. Kan den ikke bekræftes: fjern påstanden, eller hele historien hvis den bærer den. |
| 2 | Kildemærket passer: Official = firmaet, myndigheden eller forfatterne selv; Reported = navngivet medie; Unconfirmed = rygte eller læk. Big deal kun med mindst én Official-kilde. | Ret mærket. Ingen Official-kilde: nedgradér Big deal til Worth knowing. |
| 3 | "The number" er et ægte tal, der står i kilden, ikke et skøn eller en udregning. | Fjern tallet (intet tal er bedre end et tvunget). |
| 4 | Ingen fyld: hver historie (også Open source, Paper og bonus) er reelt ny siden forrige udgave og værd at bruge læserens tid på. Try it today må være et nyttigt trick fra de seneste uger, men skal findes og virke som beskrevet i den officielle dokumentation. Paper of the day linker til selve artiklen og beskriver kun, hvad den faktisk viser. | Fjern eller udskift historien. Er der for få tilbage, så find flere i kandidatlisten (U2), i stedet for at skrive kort. |
| 5 | Hver historie siger, hvad den betyder for læseren ("So what" / "Hvad betyder det"), konkret og i bydeform, ikke bare hvad der skete. | Omskriv "So what". Kan der ikke siges noget konkret: overvej om historien er fyld (4). |
| 6 | Ingen hype og ingen pressemeddelelse: ingen "game changer", "revolutionary", "groundbreaking", "in a world where", "let's dive in", udråbstegn eller ukritisk gentagelse af firmaets egne superlativer. Benchmarks kun med kontekst. | Omskriv nøgternt med tal frem for adjektiver. |
| 7 | Kernen (hovedhistorier + Open source + Paper) er 6-7 minutter, mindst 5 (ca. 1.150-1.610 ord), og `minutes`/`bonus_minutes`/`min` passer med ordantallet (ord / 230). Bonus tæller ikke med. | Over 7: forkort eller flyt den svageste til On the radar. Under 5: tilføj en stærk kandidat fra kandidatlisten. Ret minuttallene. |
| 8 | Den danske udgave er naturligt dansk med æ, ø og å (ikke ae/oe/aa), ikke ordret oversat, og har samme historier, ankre og `items` som den engelske. | Omskriv de stive sætninger; ret afvigelser. |
| 9 | Ingen em dash (U+2014) eller en dash (U+2013) i nogen fil (python-tjekket i INSTRUCTIONS.md). | Erstat med bindestreg, kolon eller ny sætning. |
| 10 | Let at læse og forstå (`.agent/STYLE.md`): nyheden først, korte afsnit, fagudtryk forklaret, få tal sat i forhold. `python3 .agent/readability.py` melder OK for begge filer (gennemsnit højst 16 ord pr. sætning, ingen over 25, kernen 5-7 min). Læs også én historie højt i tankerne: forstår en travl læser uden AI-baggrund den i første læsning? | Del lange sætninger, skær fakta fra der ikke ændrer noget for læseren, forklar fagudtryk, omskriv i aktiv form. Kør scriptet igen. |

## Rapport
Skriv resultatet øverst i PR-beskrivelsen, så Jesper kan se det på et øjeblik:

```
Redaktørkontrol: 10/10 kriterier tjekket, <n> historier, kilder genåbnet i kontrollen: <x>/<y>.
Rettet: <kort liste, fx "#2 Big deal -> Worth knowing (ingen Official-kilde)"> eller "intet".
Fjernet: <historie + kriterie> eller "intet".
```
