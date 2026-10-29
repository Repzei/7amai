# 7am AI: strategi

**Mission:** 7am AI skal være et af verdens bedste AI-nyhedsbreve.
**Lagt:** 9. oktober 2026 (Claudex Loop: forslag, kritik og syntese). Ejer: Jesper.

## 1. Identitet: tre gange 7

Navnet er formatet: **Kl. 7. Alle 7 dage. Ca. 7 minutter.**

Ændret 12. okt. 2026 (Jesper): vi lover ikke længere præcis 7 historier. Antallet følger
dagens nyheder.

Ændret 15. okt. 2026 (Jesper): udgaverne var blevet for korte (1,5-2,5 min), fordi agenten
researchede for lidt, ikke fordi der manglede nyheder. Nu: **kernen rammer ca. 7 minutter
(6-7, mindst 5) alle dage** og består af hovedhistorier + "Open source & local AI" + "Paper of
the day". Derefter **Explained** til dem med mere tid: tre begreber fra dagens nyheder forklaret
i almindeligt sprog, ét i fuld længde og to som fold-ud, hentet fra et voksende bibliotek på
7amai.com/explained/ (godt for læserne og for Google). Ændret 16. okt. (Jesper): erstatter
bonussen "On the radar" + "Try it today", som var rodet og ikke gav læseren noget. Explained tæller ikke
med, så løftet om at kunne læse kernen på 7 minutter holder. "Aldrig fyld" gælder stadig: alt
skal være nyt, have en kilde og sige, hvad det betyder; dybde frem for flere tynde historier.

Vi vinder ikke ved at gøre det samme som de store engelske AI-nyhedsbreve (The Rundown,
TLDR AI, Ben's Bites), bare pænere. Vi vinder på et skarpt format og tre løfter, som går
igen i hver eneste udgave:

| Løfte | Hvad det betyder i praksis |
|---|---|
| **Sourced** | Hver historie har sine kilder ved siden af, mærket efter hvor sikre de er (se 1.3). Fejl rettes åbent i "Corrections". |
| **So what** | Hver historie siger, hvad den betyder for læseren. Ingen nyhed uden en konsekvens. |
| **No hype** | Rolig, præcis tone. Benchmarks kun med kontekst: hvad er bedre i praksis, og hvad koster det. |

Hvert punkt får et **signal-mærke**: `Big deal` · `Worth knowing` · `Quick hit` (højst 2 Big deal pr. udgave).

### 1.1 De fem faste kendetegn (låst 9. okt. 2026)

Identitet kommer fra genkendelige elementer, der bruges ens hvert eneste sted (side, mail,
sociale medier, delekort), ikke fra farverne alene:

1. **Mærket "First Light":** et 7-tal, der står på en horisont, med solen på vej op bag sig.
   Bruges som logo, favicon, profilbillede og på delekort. Aldrig et nøgent 7-tal (7-Eleven, 7UP)
   og aldrig "7am" i en cirkel (det australske podcast "7am" bruger en ring).
2. **Tidsstemplet "07:00"** i toppen af alt, fx "Mon 12 Oct · 07:00".
3. **Horisont-læselinjen:** en tynd horisont, hvor solen bevæger sig, mens man læser, op til
   udgavens læsetid (højst 7:00). Nummererede historier (solfarvet tal ved Big deal).
4. **Signal-mærkerne** Big deal (guld flade), Worth knowing (solorange kant), Quick hit (grå kant).
5. **Kildelinjen** ved hver historie med Official / Reported / Unconfirmed.

Design: **First Light, ren version ("version 2")**, endeligt valgt af Jesper 12. okt. 2026.
Retro-varianten (70'er-sol i bånd) blev fravalgt til hverdag: fed, men "som en meme-coin, den
holder ikke ved"; den rene er fremtidssikret. 70'er-solen må bruges til særlige øjeblikke
(merch, jubilæumsudgave, kampagner).
- Farver (lys = morgen): natblå blæk #0E1A33, morgenhimmel #EEF3FA, papir #FFFFFF, sol #FF8A2A,
  sol-tekst #B4500A, guld #FFC447 (Big deal), dis #55627A (dæmpet tekst), horisont #D3DCEA.
- Mørk tilstand = nattehimlen før solopgang: #0E1A33 baggrund, #16233F flader, #EAF0F8 tekst,
  sol-tekst #FFA366. Solen beholder sine farver.
- Skrift: Schibsted Grotesk (overskrifter, mærker, tal) og Newsreader (brødtekst).
- Solorange og guld er kun til mærket, Big deal, officielle kilder og den primære knap.

**One-liner (låst 19. okt. 2026, Jesper):** "Daily AI news you can trust. 7 minutes at 7am."
Dansk: "Dagens AI-nyheder, du kan stole på. 7 minutter kl. 7." Signatur over den: "7am · 7 days ·
7 minutes" / "Kl. 7 · 7 dage · 7 minutter". Bruges ens overalt: forsidens overskrift, sidens titel og
beskrivelse i Google (søgeordet "daily AI news" forrest), mailens bundlinje, delekortet, velkomstsider,
bekræftelsesmailen og profiler på sociale medier. Salgsværdier: tid (7 minutter kl. 7) og vished
(kilder og kildemærker); status ("start the day ahead") i introen og i marketing. Identiteten er
7-tallet, ikke "Today in 60 seconds" (det er en funktion i udgaven). Connection er fravalgt, indtil
der er mange læsere. Mockup: https://claude.ai/artifact/7YgEtCuFvcMKfu7Qt8RdqA

### 1.2 "7am, wherever you are"

Mailen sendes kl. 7 i læserens egen tidszone (Resend kan planlægge pr. modtager). Så holder
navnet i hele verden, og det bliver en feature i sig selv. Bygges i fase 1, når der er læsere
uden for Danmark. Indtil da: kl. 7 dansk tid.

### 1.3 Kilder: Official, Reported, Unconfirmed

| Mærke | Betyder | Eksempler |
|---|---|---|
| **Official** | Fra firmaet, myndigheden eller forfatterne selv | blog, release notes, dokumentation, lovtekst, forskningsartikel |
| **Reported** | Fra et navngivet medie | TechCrunch, The Verge, Reuters |
| **Unconfirmed** | Rygte eller læk | anonyme kilder; bruges sjældent og står også i teksten |

**Regel: ingen Big deal uden mindst én Official-kilde.** Mangler den, er historien højst
Worth knowing. Kilderne nummereres [1], [2] i teksten. En linje i bunden af siden forklarer
de tre mærker.

### 1.4 Tone (stilguide)

- Korte sætninger. Én pointe pr. sætning.
- Tal frem for adjektiver: "$0.10 per million tokens", ikke "dramatically cheaper".
- Overskriften siger, hvad der skete, ikke hvad man skal føle.
- "So what" skrives i bydeform: "Turn it on before ...", "Wait for the license ...".
- Forbudt: "game changer", "revolutionary", "in a world where", "let's dive in", udråbstegn.
- Usikkerhed siges ærligt: "not published yet", "Google says", "unconfirmed".
- Dansk: samme regler, med æ, ø og å, og "Hvad betyder det:" i stedet for "So what:".

### 1.5 Tilgængelighed

Kontrast mindst 4,5:1 i begge temaer for al tekst. Alt på solorange og guld har natblå tekst
(hvid på solorange er kun 2,35:1). Målt: sol-tekst på morgenhimmel 4,6:1, på papir 5,1:1,
natblå på guld 10,9:1, sol-tekst i mørk tilstand 7,9:1.

## 2. Læsere og spor

Ét nyhedsbrev, tre spor, som læseren selv kan vælge:
- **Build:** udviklere, indie-hackers, produktfolk (værktøjer, API'er, priser, kode)
- **AI generelt:** de store bevægelser forklaret uden fagsprog
- **Europe:** EU AI Act, GDPR, europæiske modeller og priser, lokal AI

Regler, så sporene ikke skræmmer nogen væk:
- Alle får alt som udgangspunkt. Man vælger spor fra efter tilmelding, aldrig før.
- Agenten skriver én samlet udgave, hvor hvert punkt er mærket med spor. Mailen pr. læser
  filtreres fra den samme udgave, så der aldrig skal skrives flere udgaver.
- Sporene gør det senere muligt at sælge målrettede sponsorpladser, fx kun til Build.

## 3. Sprog

- **Engelsk er hovedudgaven** ("bedst i verden" kræver engelsk).
- **Dansk udgave** laves automatisk ud fra den engelske. Den må ikke koste Jesper tid.
- **Dansk er en hovedindgang (Jesper 19. okt. 2026):** næsten ingen daglige, kildebelagte
  AI-nyhedsbreve findes på dansk. Automatisk marketing har dog ingen danske kanaler: dansk
  Bluesky blev fravalgt 23. okt. og dansk Threads 27. okt. 2026 efter publikumsanalyser (for få
  eller ingen data om danske brugere, og de læser engelsk). Danske læsere nås manuelt på
  LinkedIn og Facebook. Påstå aldrig "den eneste" eller "den første" (ikke dokumenteret).
- Begge udgaver mærkes efter samme regel (se afsnit 4). En AI-oversættelse tæller også
  som AI-genereret tekst.

## 4. Redaktionel model og EU AI Act

EU AI Act artikel 50(4) har gældt siden 2. august 2026 (ikke udskudt af Digital Omnibus):
AI-genereret tekst om emner af offentlig interesse skal mærkes, medmindre et menneske har
gennemgået den og har det redaktionelle ansvar.

- **Standard:** udgaven sendes kl. 7 med mærkningen *"Written by AI. Every claim links to
  its primary source."*
- **Redaktørkontrol (fra 2026-10-14):** hver udgave tjekkes automatisk mod Jespers kriterier
  (`.agent/EDITORIAL.md`) før den lægges som udkast: kilder åbnes igen, forkerte mærker rettes,
  fyld fjernes. Kontrolleret udgave mærkes *"Written by AI and checked against our editorial
  standards ... Not reviewed by a human editor."* Kontrollen er ikke en menneskelig gennemgang
  og giver derfor ALDRIG mærket "Reviewed by Jesper" (art. 50(4) kræver et menneske).
- **Når Jesper når det:** merge PR'en før kl. 7 (udkastet er klar ca. 5:30; ingen kladde-mail fra 15. okt., Jesper får den endelige mail som tilmeldt). Godkendt udgave sendes
  som *"Reviewed by Jesper"*. Godkendelse er en bonus, aldrig en flaskehals.
- **Jesper's pick (fredag, valgfri):** 2-3 linjer i Jespers egen stemme. Det giver en
  person bag nyhedsbrevet, uden at det koster tid hver dag.
- Aftengodkendelse er fravalgt: de store amerikanske lanceringer kommer kl. 18-23 dansk tid.
- Ingen opdigtede nyheder, tal eller citater. Rygter kun tydeligt mærket som rygter.

(Ikke juridisk rådgivning. Tjek den officielle tekst og Kommissionens retningslinjer, før
nyhedsbrevet åbnes for andre.)

## 5. Platform

- **Siden** bliver på 7amai.com (Jekyll på GitHub Pages): fuld kontrol over design og SEO.
- **Mail og læserliste** på Resend (Audiences, afmelding, dobbelt opt-in).
- **beehiiv vurderes igen ved ca. 1.000 læsere**, når henvisningsprogram, anbefalinger og
  annoncenetværk begynder at betyde noget. Tjek først, om indlæg kan oprettes via API på
  den plan, vi har råd til. Ellers kan agenten ikke udgive automatisk.

## 6. Design (UI)

- En identitet, man genkender på et halvt sekund: de fem faste kendetegn i afsnit 1.1.
- **Forside:** mærket, signaturen og one-lineren (afsnit 1.1), tilmelding over
  folden, dagens udgave som eksempel.
- **Udgave-side:** de 7 punkter med signal-mærke, "So what", kilde og del-link pr. punkt.
- **Mail:** mobil først, mørk tilstand, læsbar på 7 minutter, ét klik til hvert punkt.
- Lys og mørk tilstand, ingen vandret scroll på 375 px, hurtig (ingen tunge scripts).

## 7. SEO

Daglige opsummeringer ranker dårligt hos Google. Den reelle SEO-værdi ligger her:
1. **Emnesider** (fx `/eu-ai-act/`, `/local-ai/`, `/models/claude/`), der samler alle punkter
   om et emne over tid: stedsegrønne sider, der vokser hver dag.
2. **"Shipped or not?"**: offentlig oversigt over, hvad AI-firmaer har lovet, og om det er
   leveret (bygger på agentens "Opfølgning").
3. Udgave-sider med gode titler og struktureret data (NewsArticle).

`noindex` fjernet 2026-10-13 (Jespers beslutning): siden er synlig for Google, med sitemap, delekort og hreflang.

### 7.1 Markedsposition: tillid, man kan se (besluttet 29. okt. 2026, Jesper)

Analyse 28. okt. (https://claude.ai/artifact/P2yq6Z2SueV2gaT6qXikCE): de store (The Rundown,
Superhuman, The Neuron) vinder på størrelse og sælger "lær AI på jobbet" (kurser, værktøjer,
prompts), som kræver mennesker. Ingen af dem viser kildesikkerhed eller en åben rettelsesliste.
7am AI vinder ved at gøre løftet "you can trust" synligt og efterprøveligt på siden.

- **Rygrad (A):** "Sådan arbejder vi"-side, åben rettelsesliste med ugens tal (kilder, andel
  Official, rettelser), emnesider ud fra udgavernes `topic`-felt, "Set i udgaverne" på Explained
  og **"Shipped or not?" rykket frem fra fase 2** (kun Official-kilder, dato på hver status).
- **Med fra dansk (B):** danske søgeord på /da/, emnesiden "EU AI Act" på begge sprog.
- **Med fra Build (C):** emnesiden "AI-sikkerhed" med status på rettelser, spor-fravalg i fase 1.
- **Venter:** fast LinkedIn-rutine (Jespers tid), søgning (ved ca. 60+ udgaver), danske
  sponsorer (fase 3).
- **Laves ikke:** værktøjskatalog, prompt-bibliotek, kurser/akademi, community, betalt niveau,
  ugebrev eller flere nyhedsbreve.

Rækkefølge: (1) videresend- og del-links, (2) "Sådan arbejder vi" + rettelsesliste, (3)
emnesider + danske søgeord, (4) "Shipped or not?", (5) mål og justér ca. 25. nov.

## 8. Features

**Ja:**
1. Formatet kl. 7 / 7 dage / ca. 7 minutter (+ Explained) med signal-mærker og "So what" (fase 0)
2. Valgfrie spor (fase 0: mærkning, fase 1: fravalg i mailen)
3. Henvisningsprogram (fase 1)
4. "Shipped or not?" og emnesider (rykket frem fra fase 2 den 29. okt. 2026, se 7.1)

**Nej, droppet efter kritik:**
- Pristracker for modeller: Artificial Analysis og OpenRouter gør det bedre.
- "Ask 7am"-chat: en gimmick, der koster penge og ikke skaffer læsere.
- Lydudgave: genovervejes i fase 3 som fastholdelse.

## 9. Faser og vækst

| Fase | Mål | Hvad |
|---|---|---|
| **0: Fundament** (2-4 uger) | Kvaliteten er så god, at Jesper selv læser den hver dag | Formatet (kl. 7, 7 dage, ca. 7 min + Explained), engelsk + dansk, godkend-flow, mærkning, nyt design, tilmelding (dobbelt opt-in, afmelding, privatlivspolitik) |
| **1: Blød lancering** | 0 til 500 læsere | Jespers netværk, LinkedIn, danske udviklerfællesskaber. Agenten laver ét delbart opslag om dagens bedste historie. Henvisningsprogram. |
| **2: Vækst** | 500 til 5.000 | (Emnesider + "Shipped or not?" bygges allerede nu, se 7.1), gensidige anbefalinger med andre nyhedsbreve, lancering på Product Hunt og Hacker News |
| **3: Indtægt** | 5.000+ | Én sponsorplads om dagen, målrettet pr. spor. Mediekit. |

## 10. Mål for "bedst" (forslag, justeres efter fase 1)

- Over 50 % af læserne åbner mailen
- Over 30 % klikker på mindst ét punkt
- 10.000 læsere efter 12 måneder
- Første sponsor ved 2.000-5.000 læsere

## 11. Risici

- **Kvalitet:** fejl i AI-skrevet indhold koster tillid. Derfor "Sourced", åbne rettelser og
  godkendelse, når det er muligt.
- **Tid:** Gainfully har forrang. Alt i 7am AI skal kunne køre uden Jesper.
- **Forvekslelighed:** uden formatet (kl. 7, 7 dage, ca. 7 min) og de faste kendetegn er vi bare endnu et nyhedsbrev. Formatet
  forhandles ikke væk.

## Låste beslutninger

- Navn 7am AI, domæne 7amai.com. Format: kl. 7, alle 7 dage, ca. 7 minutters læsning + Explained (Jesper 15./16. okt. 2026; erstatter "højst 7 minutter" fra 12. okt., der erstattede "7 historier")
- Engelsk hovedudgave + automatisk dansk udgave
- Tre spor, som læseren selv vælger (alle får alt som udgangspunkt)
- AI-mærket som standard, "Reviewed by Jesper" når han når at godkende
- Mål: indtægt via sponsorer
- Design: First Light, ren version (Jesper 12. okt. 2026), med de fem faste kendetegn; tone efter 1.4
- Kilder mærkes Official / Reported / Unconfirmed; ingen Big deal uden Official-kilde
- "7am, wherever you are": udsendelse i læserens tidszone fra fase 1
- Kontrast mindst 4,5:1 i begge temaer
- Markedsposition "tillid, man kan se" med "Shipped or not?" og emnesider nu (Jesper 29. okt. 2026, afsnit 7.1)
