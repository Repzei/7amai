---
title: "DeepSeek opdaterer sin åbne Flash-model og sænker prisen pr. opgave"
summary: "DeepSeeks nye åbne model scorer højere i kodetests og bruger færre ord på det. Desuden: Claude opklarer et 25 år gammelt kryptomysterium, Claude Design lukker som selvstændigt site, og Replit vælger OpenAI."
date: 2026-10-18 07:00:00 +0200
reviewed: false
checked: false
minutes: 7
explained: { main: "benchmark", from: 1, more: ["open-weight", "context-window"] }
other_lang_url: /2026/10/18/
items:
  - { n: 1, anchor: "deepseek-flash-1017", signal: big, tracks: [build, europe], min: 1.5, source: official, number: "77,0", number_label: "i DeepSWE mod 74,0 til Claude Opus 5 (DeepSeeks egen kørsel)" }
  - { n: 2, anchor: "nist-curve-seeds", signal: worth, tracks: [general], min: 1, source: official }
  - { n: 3, anchor: "quantum-circuits", signal: quick, tracks: [general], min: 0.5, source: official }
  - { n: 4, anchor: "claude-design-closes", signal: worth, tracks: [build, general], min: 1, source: official }
  - { n: 5, anchor: "replit-openai", signal: worth, tracks: [build], min: 1, source: reported }
  - { n: 6, anchor: "agent-incident-guide", signal: worth, tracks: [build, general], min: 1, source: official }
  - { n: 7, anchor: "meta-crawling-terms", signal: quick, tracks: [general], min: 0.5, source: reported }
  - { n: 8, anchor: "codex-crash-dumps", signal: quick, tracks: [general, build], min: 0.5, source: reported }
  - { n: 9, anchor: "llama-cpp-discover", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 10, anchor: "leash-escalation", signal: worth, tracks: [build], min: 1, source: official }
---

### 1. DeepSeeks opdaterede Flash-model scorer højere og koster mindre pr. opgave {#deepseek-flash-1017}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1½ min</span></p>
<div class="number"><b>77,0</b><span>i DeepSWE mod 74,0 til Claude Opus 5 (DeepSeeks egen kørsel)</span></div>

DeepSeek udgav DeepSeek-V4.1-Flash-1017 den 17. oktober. Det er en opdatering af firmaets Flash-model, og den kører allerede i DeepSeeks app, på hjemmesiden og i API'et.

Alle kan hente vægtene fra Hugging Face. De bruger MIT-licensen, en af de mest frie open source-licenser. Modellen kan læse op til 1 million tokens på én gang.

DeepSeek siger, at modellen bliver hurtigere færdig og skriver kortere svar. Kortere svar betyder færre tokens, og du betaler pr. token.

I DeepSeeks egen kørsel af kodetesten DeepSWE får den 77,0, op fra 74,2 for den forrige udgave. The Decoder læser DeepSeeks graf som lige under 0,20 dollar pr. opgave, ned fra omkring 0,50.

På samme graf koster konkurrenterne 2 dollar eller mere pr. opgave. Claude Opus 5 får 74,0 i den test.

Se dog på hele tabellen.

Opus 5 fører stadig i 8 af de 11 tests i DeepSeeks tabel. I Terminal-Bench 4.0 får den 51,8 mod 42,3. Ingen har testet den nye model uafhængigt endnu.

DeepSeek åbner også sin egen websøgning for udviklere. Search og Fetch API'erne koster 0,75 dollar pr. 1.000 kald hver.

Kald gennem Claude Code, Codex eller DeepSeeks eget værktøj er gratis indtil 31. oktober kl. 16:00 UTC.

Vil du køre den selv, kræver det tung hardware. Siden på Hugging Face angiver 763 milliarder parametre.

> **Hvad betyder det:** Betaler du for mange kørsler med kodeagenter, så test modellen på dine egne opgaver via DeepSeeks API. Sammenlign prisen pr. færdig opgave, ikke prisen pr. token.

Kilde: [api-docs.deepseek.com](https://api-docs.deepseek.com/news/news261017) · <span class="tag tag-official">Officiel</span> · [huggingface.co](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) · <span class="tag tag-official">Officiel</span> · [the-decoder.com](https://the-decoder.com/deepseek-v4-1-flash-1017-beats-larger-rivals-in-agentic-tasks-while-once-again-massively-cutting-per-task-costs/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Claude finder ud af, hvor tallene bag udbredte krypteringskurver kom fra {#nist-curve-seeds}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>

Anthropic fortalte den 16. oktober, at Claude har løst en 25 år gammel gåde i kryptografi. Claude fandt ud af, hvor starttallene til NIST-kurverne kom fra.

Kurverne hører til ECDSA, den mest udbredte standard af sin slags. P-256 er den mest kendte.

NSA leverede starttallene, de såkaldte seeds, i slutningen af 1990'erne. NSA forklarede dem aldrig, og det gav næring til frygt for en skjult bagdør.

Claude fandt ud af, at tallene kom fra en helt almindelig funktion til tilfældige tal i C. Den blev sat i gang med tidsstempler fra 1997 og 1998.

Det tog under en halv time. Starttallet til P-256 var nummer 1.842 i rækken, metoden gav.

Anthropic understreger, at der hverken er tale om et brud eller en svaghed. Fundet gør en bagdør mindre sandsynlig. Dusøren på 36.864 dollar gik til organisationen bag Let's Encrypt.

> **Hvad betyder det:** Du skal ikke ændre noget i dine systemer. Se det som et tegn på, at AI nu kan hjælpe med at afgøre gamle spørgsmål i sikkerhedsforskning.

Kilde: [anthropic.com](https://www.anthropic.com/research/ecdsa-curve-origins) · <span class="tag tag-official">Officiel</span> · [coindesk.com](https://coindesk.com/tech/2026/10/17/wow-it-s-a-real-discovery-claude-cracks-a-25-year-nsa-number-mystery) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. Claude har designet kvantekredsløb, der kræver langt færre trin {#quantum-circuits}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">½ min</span></p>

Anthropic fortalte også den 16. oktober, at Claude har slået de bedste offentliggjorte designs til otte kvantekredsløb. Hvert design brugte færre qubits og færre gates (de grundlæggende trin).

I ét tilfælde brugte det 17 gange færre gates mod 12 % flere qubits. Det er designs til fremtidens maskiner, ikke kørsler på rigtig hardware.

> **Hvad betyder det:** Intet at gøre i dag. Forvent, at AI gør forskning hurtigere, hvor en computer selv kan tjekke hvert svar.

Kilde: [anthropic.com](https://www.anthropic.com/research/designing-efficient-quantum-circuits) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. Claude Design lukker som selvstændigt site den 14. december, så gem dine projekter {#claude-design-closes}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>

Anthropic lukker det selvstændige Claude Design-site den 14. december. Derefter åbner claude.ai/design i stedet selve Claude.

Designsystemer kan allerede flyttes over i Claude som artifacts. Projekter kan ikke flyttes endnu. Chats og kommentarer bliver slettet i december, og offentlige links til projekter holder op med at virke.

Claude Code 2.1.302 fra den 16. oktober slår også fork-subagenter til som standard flere steder. Det er en slags hjælpeagenter. Sæt `CLAUDE_CODE_FORK_SUBAGENT=0` for at slå dem fra.

> **Hvad betyder det:** Bruger du Claude Design, så hent hvert projekt, du har brug for, som en .zip-fil. Brug Share og derefter Project HTML før den 14. december.

Kilde: [support.claude.com](https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude) · <span class="tag tag-official">Officiel</span> · [github.com](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 5. Replit gør OpenAI til standardmodel i sin kodeagent {#replit-openai}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>

Replits topchef, Amjad Masad, sagde på scenen ved TechCrunch Disrupt, at OpenAI nu driver Replit Agent som standard. Replit er en populær platform, hvor man bygger apps ved at chatte med en AI.

Indtil for nylig var Replit en af Anthropics fem største kunder, skriver TechCrunch. Masad nævnte pris, samarbejdet og ydeevne som grunde. "I think ChatGPT is better now," sagde han.

Claude kan stadig vælges på Replit. Men de fleste brugere beholder standardvalget, så ændringen betyder noget. En unavngiven kilde siger til TechCrunch, at samarbejdet med Anthropic stadig består.

> **Hvad betyder det:** Bygger du på Replit, så tjek, hvilken model din agent bruger nu. Sammenlign resultaterne på et rigtigt projekt, før du accepterer det nye standardvalg.

Kilde: [techcrunch.com](https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 6. Amerikanske myndigheder udgiver en drejebog for, når en AI-agent løber løbsk {#agent-incident-guide}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>

NIST, NSA og CISA udgav den 16. oktober en fælles vejledning om AI-hændelser under træning og test. En hændelse betyder her, at en AI-agent gør noget stort, som ingen har bedt om, og bryder operatørens regler.

Vejledningen er frivillig. Den beskriver ti gode praksisser i fem faser: forberede, opdage, reagere, genoprette og rapportere.

Den er skrevet til de største AI-laboratorier. Den amerikanske regering bruger betegnelsen "super intelligence" om så avanceret AI.

> **Hvad betyder det:** Kører du agenter med rigtig adgang, så skriv nu ned, hvem der stopper dem, og hvordan. Brug de fem faser som tjekliste.

Kilde: [nist.gov](https://www.nist.gov/news-events/news/2026/10/key-practices-incident-readiness-and-response-super-intelligence-training) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 7. Meta fjerner formulering, der lod firmaet træne AI på erhvervshjemmesider {#meta-crawling-terms}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">½ min</span></p>

Meta fjernede den 17. oktober en klausul fra sine nye erhvervsvilkår, skriver TechCrunch. Den lod Meta bruge indhold fra hjemmesider hos firmaer med en erhvervskonto til at træne sine produkter.

Juridiske eksperter havde advaret om, at den kunne omfatte mediers hjemmesider. Meta siger, at vilkårene kun gjaldt firmaets annoncer og erhvervsprodukter.

> **Hvad betyder det:** Har dit firma en erhvervskonto hos Meta, så læs de opdaterede vilkår. Tjek, hvad de tillader Meta på din hjemmeside.

Kilde: [techcrunch.com](https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 8. Codex på Mac kan i stilhed fylde din disk med crash-filer {#codex-crash-dumps}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">½ min</span></p>

Brugere af OpenAIs Codex-app til Mac med Apple Silicon melder om en fejl, der bliver ved med at skrive crash-filer. En bruger fandt omkring 323 GB i denne uge, fordelt på to mapper. Fejlen blev første gang meldt i juni, og OpenAI har ikke svaret i tråden.

> **Hvad betyder det:** Bruger du Codex på en Mac, så tjek mappen `~/Library/Application Support/Codex/Crashpad/pending`. Tjek også samme mappe under `com.openai.codex/web`, og tøm begge.

Kilde: [github.com](https://github.com/openai/codex/issues/25921) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Open source og lokal AI

### llama.cpp kan nu finde og hente modeller for dig {#llama-cpp-discover}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

Projektet llama.cpp fik den 17. oktober en ny visning, Discover Models, i sin indbyggede webapp. Det er den gratis motor bag mange værktøjer, der kører AI-modeller på din egen computer.

Indtil nu skulle du selv finde en modelfil på Hugging Face. Den nye visning lader dig søge på Hugging Face fra appen og filtrere efter størrelse. Den viser, hvilke udgaver der kan være i din computers hukommelse.

Downloads kan sættes på pause og genoptages. Appen henter også en lille hjælpemodel, der gør svarene hurtigere. Det bringer almindelig llama.cpp tættere på nemmere apps som LM Studio og Ollama.

Funktionen er slået fra som standard. Du slår den til med indstillingen "Enable Discover Models".

> **Hvad betyder det:** Kører du llama.cpp's server, så opdatér den og slå indstillingen til. Lad den finde en model, der passer til din hukommelse, og behold dine data på din egen maskine.

Kilde: [github.com](https://github.com/ggml-org/llama.cpp/pull/29584) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### En lille model, der beder om hjælp, når den er i tvivl, klarer sig som en topmodel for mindre {#leash-escalation}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>

En artikel på arXiv fra den 15. oktober viser, hvordan agenter til computerbrug kan blive billigere. Agenterne klikker og skriver på en computer for at løse opgaver. Metoden hedder LEASH.

Det er dyrt at køre en topmodel i hvert trin. Små åbne modeller er billige, men de fejler ofte alene. LEASH lader en lille model gøre arbejdet og give kontrollen til en stærk model, kun når den er i tvivl.

Tricket er, hvordan den måler tvivl. Den sammenligner den lille models indre tilstand med dens tidligere succeser og fejl.

Ligner den aktuelle tilstand en tidligere fejl, beder den om hjælp. Det koster ikke ekstra i hvert trin.

I testen OSWorld løste en lille Qwen-model med LEASH 73,7 % af opgaverne. Claude Opus 5 i hvert trin løste 72,9 %. LEASH gjorde det for 19 % færre penge.

> **Hvad betyder det:** Kører du lange agentopgaver, så prøv en billig model først, og giv kun de svære trin videre. Mål, hvor den fejler, før du betaler for en topmodel overalt.

Kilde: [arxiv.org](https://arxiv.org/abs/2610.22280) · <span class="tag tag-official">Officiel</span>
{: .sources}
