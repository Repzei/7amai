---
title: "A planted file in your Downloads folder can hijack your coding agent"
summary: "Security researchers show how one text file can steer Claude Code or Codex when you start them in the wrong folder. Also: OpenAI's discounts pull coding work from Anthropic, Musk's $40B for chips, Block's voice model that runs on a Mac, and mathematicians fixing OpenAI's math write-ups."
date: 2026-10-26 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "prompt-injection", from: 1, more: ["ai-agent", "open-weight"] }
today:
  - { t: "A planted instruction file in Downloads can steer Claude Code or Codex when you start them there.", why: "Anyone who uses a coding agent." }
  - { t: "OpenAI is reportedly winning coding work from Anthropic with deep discounts, and API prices keep falling.", why: "Developers and companies who pay for AI models." }
  - { t: "Musk says SpaceX has closed $40B of debt for AI chips, and that Grok can now phone a business for you.", why: "Anyone following who can still pay for AI compute." }
  - { t: "Block's Dessa is a voice model trained only on speech, and it runs on a MacBook.", why: "Anyone who wants voice AI without the cloud." }
  - { t: "Mathematicians, with Terence Tao's backing, start a public hub to fix and cite OpenAI's AI-made math papers.", why: "Anyone who wonders how to check results made by AI." }
other_lang_url: /da/2026/10/26/
items:
  - { n: 1, anchor: "agents-md-downloads", signal: worth, tracks: [build, general], min: 2, source: reported, number: "1,300+", number_label: "Claude Code sessions started from Downloads at one firm's customers", topic: security, why: "Downloads is a place where any website can leave a note, and the agent cannot tell the difference.", do: "Start agents only inside the project folder, never in Downloads.", steps: { title: "How the attack works", list: ["A web page can drop an AGENTS.md file in Downloads", "You start your coding agent in Downloads", "The agent reads the file and follows its instructions"] } }
  - { n: 2, anchor: "ai-price-war", signal: worth, tracks: [build, general], min: 1.5, source: reported, number: "52%", number_label: "of Rippling's coding work now runs on OpenAI, up from 16%", topic: price, why: "When customers can switch in a day, price is the main weapon left.", bars: { title: "Share of Rippling's coding work on OpenAI", max: 100, rows: [{ l: "Before", v: 16, t: "16%" }, { l: "Now", v: 52, t: "52%", hl: true }] } }
  - { n: 3, anchor: "musk-gpus-grok-calls", signal: quick, tracks: [general], min: 1, source: reported, number: "$40B", number_label: "of debt for GPUs, Musk says", topic: money, why: "If Musk is right, money for AI is moving to the few firms with other income." }
  - { n: 4, anchor: "block-dessa", signal: worth, tracks: [general, europe], min: 1, source: official, topic: voice, why: "A voice AI on your own laptop keeps your conversation on your own machine." }
  - { n: 5, anchor: "oai-math-revised", signal: quick, tracks: [general], min: 1, source: official, topic: research, why: "A proof is only useful when other people can follow and check it.", steps: { title: "How the hub works", list: ["OpenAI's models help find math results", "Mathematicians review and correct the write-ups", "Fixes and sources gather in one open place"] } }
  - { n: 6, anchor: "nanbeige-4-3-33b", signal: worth, tracks: [build, europe], min: 1, source: official, topic: open, why: "A free model for agent work on your own hardware, so your code never has to leave the building." }
  - { n: 7, anchor: "collection-date-rag", signal: worth, tracks: [build], min: 1, source: official, topic: research, why: "A wrong date on a page can steer the answer, and someone could plant one on purpose." }
---

### 1. A planted file in your Downloads folder can hijack your coding agent {#agents-md-downloads}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">2 min</span></p>
<div class="number"><b>1,300+</b><span>Claude Code sessions started from Downloads at one firm's customers</span></div>

<p class="short"><span>The short version</span>Coding agents read instruction files in the folder you start them in. If that folder is Downloads, a stranger can write those instructions.</p>

Tools like Claude Code and Codex look for a small text file when they start. It is called AGENTS.md or CLAUDE.md, and it tells the agent how a project works. But the agent trusts the file in whatever folder you start it in.

Forever Security, a firm that watches AI agents at companies, found a rogue AGENTS.md in a customer's Downloads folder. An agent started there read the file and tried to install a malicious npm package. On Codex, a harmless test payload ran in 90% of tries. On Claude Code, a rogue CLAUDE.md sent traffic to the researchers' server. It posed as the model and got code to run in half the tests.

The researchers do not know how the file got there. But Chrome, Edge and Firefox save downloads without asking by default, and BleepingComputer confirmed that a test page could drop one. And people do start agents there: Forever counted more than 1,300 Claude Code sessions launched from Downloads among its customers.

The catch is that there is no bug to fix. "There is nothing here for OpenAI or Anthropic to patch," the researchers say, because the agent does what it was built to do.

<div class="why"><b>Why it matters</b><p>An instruction file is like a note on the kitchen table for a house sitter. It works when you wrote it. But Downloads is a table that any website can leave a note on, and the agent cannot tell the difference.</p></div>

<p class="todo"><b>Do this:</b> Start agents only inside the project folder, never in Downloads or your home folder. Read any AGENTS.md or CLAUDE.md you did not write, and keep approval prompts and the sandbox on.</p>

Source: [bleepingcomputer.com](https://www.bleepingcomputer.com/news/security/ai-coding-agents-hijacked-using-agentsmd-file-in-downloads-folder/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. OpenAI is reportedly buying coding work away from Anthropic {#ai-price-war}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>52%</b><span>of Rippling's coding work now runs on OpenAI, up from 16%</span></div>

<p class="short"><span>The short version</span>OpenAI is offering large discounts to win Anthropic's biggest coding customers, and it seems to work. For buyers, AI keeps getting cheaper.</p>

Companies that use AI for coding often pick one main model supplier. OpenAI is now using price to become that supplier, The Information reports, as relayed by The Decoder.

The numbers come from the customers themselves. At Rippling, OpenAI's share of coding work rose from 16% to 52%, and Anthropic's share shrank. DataCamp's CEO says OpenAI's prices cut its costs sharply. Replit also moved to OpenAI after a big discount.

Max Woolf, a former data scientist, looked at the public price lists on Sunday. His view: the cuts are mostly about competition, because switching models is easy and open models like DeepSeek's are cheap. He finds the timing odd, since both companies are expected to go public.

The catch: the figures come from one report built on what customers say, and neither company has commented on it.

<div class="why"><b>Why it matters</b><p>It works like phone plans once every operator offered the same network. When customers can switch in a day, price is the main weapon left. That is good for you as a buyer, and harder for the companies that need the revenue.</p></div>

Source: [the-decoder.com](https://the-decoder.com/openai-offers-discounts-up-to-90-percent-to-poach-anthropics-biggest-customers/) · <span class="tag tag-reported">Reported</span> · [minimaxir.com](https://minimaxir.com/2026/10/cheap-llms/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. Musk says SpaceX borrowed $40B for chips, and Grok can now phone for you {#musk-gpus-grok-calls}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>$40B</b><span>of debt for GPUs, Musk says</span></div>

<p class="short"><span>The short version</span>Musk says SpaceX has borrowed $40B for AI chips, and that smaller cloud firms can hardly borrow at all. And his Grok assistant can now make phone calls.</p>

#### <span>1 of 2</span> $40B for chips that arrive next year
Musk wrote that SpaceX has closed $40 billion of debt, mostly for GPUs that arrive in the first half of next year, Reuters reports. He added that lenders have almost shut off money for AI cloud firms without other income, and he expects some of them to fail. Reuters notes it is unclear what "closed" means here.

#### <span>2 of 2</span> Grok makes the call
Musk also posted that Grok's Bot can now call a person or a business for you. It makes the request, takes notes and sends you a summary, TeslaNorth reports. Plans, countries and what the other side sees on caller ID are not yet known.

<div class="why"><b>Why it matters</b><p>If Musk is right, money for AI is moving to the few firms with other income, like SpaceX's rockets and Starlink. And an assistant that phones a shop for you is an agent that talks to people who never chose to talk to an AI.</p></div>

Source: [lufkindailynews.com (Reuters)](https://lufkindailynews.com/news_reuters/business/musk-says-spacex-raised-40-billion-in-debt-for-gpus/article_1de18346-ef24-54d7-a052-a7892080fe90.html) · <span class="tag tag-reported">Reported</span> · [teslanorth.com](https://teslanorth.com/2026/10/25/grok-bot-phone-calls-elon-musk/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. Block's Dessa learned to talk from speech alone, and runs on a Mac {#block-dessa}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Block, the company behind Square, built a voice model that never saw text. It listens and talks at the same time, and it runs on a laptop.</p>

Most voice assistants turn your words into text, let a language model answer, and then read the answer aloud. Block says that kind of voice AI "can just plain suck."

Block's small research lab took another path. Dessa learned only from recordings of people talking, with no text at all. So it can say "yeah" while you talk, and it hears pauses and laughter. It runs on a MacBook Pro with an M4 Max chip.

The catch: you cannot try it yet. There is a waitlist, and a small group of safety researchers gets early access.

<div class="why"><b>Why it matters</b><p>A voice that sounds human and runs on your own laptop keeps your conversation on your own machine. It also means an AI caller may soon be hard to tell from a person.</p></div>

Source: [block.xyz](https://block.xyz/dessa) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. Mathematicians start a public hub to fix OpenAI's math papers {#oai-math-revised}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>A group of mathematicians opened a shared place to correct and cite the math write-ups that OpenAI's models produced. Terence Tao has already sent fixes.</p>

OpenAI has published math results that its models helped find. Mathematicians say the write-ups "can be difficult to understand and can have incomplete citations."

So four of them, Abhinav Nellore, Johannes Schmitt, Soledad Villar and Rachel Ward, presented oai-math-revised. It is an open GitHub project, and the community is invited to review, correct and add sources. They announced it on Terence Tao's blog on Saturday. Tao, one of the best-known living mathematicians, has already sent two fixes.

The catch: it only works if people join in, and the post does not say how many write-ups there are.

<div class="why"><b>Why it matters</b><p>A proof is only useful when other people can follow and check it. AI can now produce results faster than anyone reviews them, so the checking needs a home of its own.</p></div>

Source: [terrytao.wordpress.com](https://terrytao.wordpress.com/2026/10/24/oai-math-revised-a-community-hub-for-revising-openais-math-write-ups/) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### Nanbeige's free 33B model aims at coding agents you run yourself {#nanbeige-4-3-33b}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>A new open model from China claims to beat Qwen at agent coding tasks, at a size a strong home PC can run once compressed.</p>

Nanbeige, a team backed by the Chinese job site BOSS Zhipin, released Nanbeige4.3-33B this week. Anyone may use it, also commercially, under the Apache 2.0 license. On Terminal-Bench, a test of agents working in a terminal, it scores 80.9 against 73.0 for Qwen3.8-27B.

The catch: the scores come from Nanbeige's own model card. It trails Qwen on SWE-Bench Pro. Startup Fortune says a 4-bit version fits on a 24 GB card, but with less room for context.

<div class="why"><b>Why it matters</b><p>A free model that handles agent work on your own hardware means your code never has to leave the building.</p></div>

Source: [huggingface.co](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) · <span class="tag tag-official">Official</span> · [startupfortune.com](https://startupfortune.com/nanbeiges-new-33b-open-model-takes-aim-at-qwen-and-gemma-on-coding/) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Paper of the day

### Change only the date on a document, and the model changes its answer {#collection-date-rag}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>When a model gets two dated versions of a page, it trusts the date label more than the text. Swap the labels, and many answers flip.</p>

Many AI assistants look things up before they answer, and the pages they find often carry the date they were saved.

Researchers Minsu Oh, Seunghui Jwa, Soo Kyun Kim and Yeo-Chan Yoon tested how much models lean on that label. They gave five open models two versions of the same Wikipedia page and swapped only the dates. The text stayed the same. Accuracy fell by about 38 to 51 percentage points. Telling the model to ignore the dates did not help. Letting one model think first cut the damage a lot, and two API models were hardly affected.

<div class="why"><b>Why it matters</b><p>A date is a tiny piece of text that nobody checks. If it can steer the answer, a wrong timestamp in a search system becomes a wrong answer, and someone could plant one on purpose.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.32191) · <span class="tag tag-official">Official</span>
{: .sources}
