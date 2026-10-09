# 7am AI: strategi

**Mission:** 7am AI skal være et af verdens bedste AI-nyhedsbreve.
**Lagt:** 9. oktober 2026 (Claudex Loop: forslag, kritik og syntese). Ejer: Jesper.

## 1. Identitet: "The 7"

Navnet er formatet: **7 historier. 7 minutter. Klar kl. 7.**

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

1. **Mærket "7am":** et rødt 7-tal med et lille "am" ved siden af. Bruges som logo, favicon,
   profilbillede og på delekort. Aldrig et nøgent 7-tal (7-Eleven, 7UP og tv-kanaler ejer det).
2. **Tidsstemplet "07:00"** i mono i toppen af alt, fx "Mon 12 Oct · 07:00".
3. **De store tal 1 til 7**, der bærer hver udgave. Rødt tal ved Big deal.
4. **Signal-mærkerne** Big deal (rød flade), Worth knowing (rød kant), Quick hit (grå kant).
5. **Kildelinjen** ved hver historie med Official / Reported / Unconfirmed.

Design: retning "B + C" (godkendt af Jesper 9. okt. 2026): hvid papirflade, sort blæk, én
signal-rød, store smalle tal (Archivo), brødtekst i serif (Source Serif 4), kilder og klokkeslæt
i mono (IBM Plex Mono). Rød bruges kun til mærket, Big deal og officielle kilder.
Det store 7-tal vises kun på forsiden på computer; på mobil er det ca. 40 % og står ved siden af
overskriften, så tilmeldingen er synlig uden scroll; udgave-sider har intet stort 7-tal.

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

Kontrast mindst 4,5:1 i begge temaer for al tekst. Big deal-mærket har hvid tekst i lys
tilstand og mørk tekst i mørk tilstand (hvid på lys rød er kun 3,1:1).

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
- Begge udgaver mærkes efter samme regel (se afsnit 4). En AI-oversættelse tæller også
  som AI-genereret tekst.

## 4. Redaktionel model og EU AI Act

EU AI Act artikel 50(4) har gældt siden 2. august 2026 (ikke udskudt af Digital Omnibus):
AI-genereret tekst om emner af offentlig interesse skal mærkes, medmindre et menneske har
gennemgået den og har det redaktionelle ansvar.

- **Standard:** udgaven sendes kl. 7 med mærkningen *"Written by AI. Every claim links to
  its primary source."*
- **Når Jesper når det:** godkend-knap i en kladde-mail ca. kl. 6:30. Godkendt udgave sendes
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
- **Forside:** stort rødt 7-tal (kun computer), "Seven AI stories. Seven minutes. Ready at
  seven.", tilmelding over folden, dagens udgave som eksempel.
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

`noindex` bliver på, indtil kvaliteten er bevist og tilmeldingen virker.

## 8. Features

**Ja:**
1. "The 7"-format med signal-mærker og "So what" (fase 0)
2. Valgfrie spor (fase 0: mærkning, fase 1: fravalg i mailen)
3. Henvisningsprogram (fase 1)
4. "Shipped or not?" og emnesider (fase 2)

**Nej, droppet efter kritik:**
- Pristracker for modeller: Artificial Analysis og OpenRouter gør det bedre.
- "Ask 7am"-chat: en gimmick, der koster penge og ikke skaffer læsere.
- Lydudgave: genovervejes i fase 3 som fastholdelse.

## 9. Faser og vækst

| Fase | Mål | Hvad |
|---|---|---|
| **0: Fundament** (2-4 uger) | Kvaliteten er så god, at Jesper selv læser den hver dag | "The 7"-format, engelsk + dansk, godkend-flow, mærkning, nyt design, tilmelding (dobbelt opt-in, afmelding, privatlivspolitik) |
| **1: Blød lancering** | 0 til 500 læsere | Jespers netværk, LinkedIn, danske udviklerfællesskaber. Agenten laver ét delbart opslag om dagens bedste historie. Henvisningsprogram. |
| **2: Vækst** | 500 til 5.000 | Emnesider + "Shipped or not?" (SEO), gensidige anbefalinger med andre nyhedsbreve, lancering på Product Hunt og Hacker News |
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
- **Forvekslelighed:** uden "The 7"-formatet er vi bare endnu et nyhedsbrev. Formatet
  forhandles ikke væk.

## Låste beslutninger

- Navn 7am AI, domæne 7amai.com, identitet "The 7" (godkendt af Jesper 9. okt. 2026)
- Engelsk hovedudgave + automatisk dansk udgave
- Tre spor, som læseren selv vælger (alle får alt som udgangspunkt)
- AI-mærket som standard, "Reviewed by Jesper" når han når at godkende
- Mål: indtægt via sponsorer
- Design "B + C" med de fem faste kendetegn, mærket "7am" (aldrig nøgent 7-tal), tone efter 1.4
- Kilder mærkes Official / Reported / Unconfirmed; ingen Big deal uden Official-kilde
- "7am, wherever you are": udsendelse i læserens tidszone fra fase 1
- Kontrast mindst 4,5:1 i begge temaer
