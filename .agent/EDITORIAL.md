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
| 3 | "The number" er et ægte tal, der står i kilden, ikke et skøn eller en udregning. Mailens felter i `items` (STYLE.md "Mailen"): hvert tal i `number`, `tiles`, `bars`, `why` og `do` står ordret i historiens tekst og i kilden (intet udregnet, afrundet eller omsat, fx "halvdelen" bliver ikke til 50 %); søjler sammenligner kun tal med samme enhed og måling; trin siger kun det, historien siger; `why` og `do` siger det samme som "Derfor er det vigtigt" og "Gør dette". `readability.py` melder ingen "tallet ... står ikke i historiens tekst". | Fjern tallet (intet tal er bedre end et tvunget). Ret eller fjern grafikken; ret aldrig historien for at få et tal i grafikken til at passe. |
| 4 | Ingen fyld: hver historie (også Open source og Paper) er reelt ny siden forrige udgave og værd at bruge læserens tid på. Paper of the day linker til selve artiklen og beskriver kun, hvad den faktisk viser. Explained: de tre begreber bruges i dagens historier, nye forklaringer er faglig korrekte og har en åbnet, anerkendt kilde i `read_more`, og sammenligningen ("Think of it like this") giver et rigtigt billede, ikke et misvisende. | Fjern eller udskift historien. Er der for få tilbage, så find flere i kandidatlisten (U2), i stedet for at skrive kort. |
| 5 | Hver historie er en historie med én tråd (hvorfor interessant, hvad skete, fangsten), starter med "Kort fortalt", og "Derfor er det vigtigt" giver et aha med almindeligt sprog, ikke en ordre eller "change nothing". Nyheder fra samme firma eller om samme emne er samlet i én historie med dele. Højst 5 hovedhistorier. `today:` har én linje pr. hovedhistorie og intet, der ikke står i historierne. | Omskriv tråden, så sætningerne hænger sammen; skær fakta, der ikke bærer den; saml relaterede historier; skriv "Derfor er det vigtigt" om, så det forklarer konsekvensen. Kan der ikke siges noget, så er historien fyld (4). |
| 6 | Ingen hype og ingen pressemeddelelse: ingen "game changer", "revolutionary", "groundbreaking", "in a world where", "let's dive in", udråbstegn eller ukritisk gentagelse af firmaets egne superlativer. Benchmarks kun med kontekst. | Omskriv nøgternt med tal frem for adjektiver. |
| 7 | Kernen (hovedhistorier + Open source + Paper) er 5-7 minutter ved 200 ord/min, rundet op (ca. 1.000-1.400 ord), og alle læsetider er skrevet af `readability.py --fix` (tjek-tilstanden melder ingen afvigelser). Explained tæller ikke med i kernen, men vises med sin egen tid. Læsetiden er et løfte: hellere for høj end for lav. | Over 7: forkort eller drop den svageste historie. Under 5: tilføj en stærk kandidat fra kandidatlisten. Ret minuttallene. |
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
