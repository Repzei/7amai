---
title: "GitHub's Copilot can now pick and mix AI models for you"
summary: "GitHub's Copilot Fusion chooses the models for each coding task, as agents start four in ten pull requests. Also: Google's Gemini 4 Carbon goes to security teams first, big tech's AI money, Claude's spending reports, and Britain's deal for data centres."
date: 2026-10-29 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "model-routing", from: 1, more: ["ai-agent", "benchmark"] }
today:
  - { t: "GitHub's Copilot Fusion picks and mixes AI models for each coding task.", why: "Developers and anyone paying for coding agents." }
  - { t: "Google's Gemini 4 Carbon tops a key ranking, but only cyber defenders get it.", why: "Anyone following the race between the big AI labs." }
  - { t: "Microsoft took in $10B from OpenAI, and Google takes AI ads abroad.", why: "Anyone wondering whether AI makes money." }
  - { t: "Claude Enterprise now shows what each team's AI spending buys.", why: "Managers and finance teams paying the AI bill." }
  - { t: "Britain offers faster grid access to data centres that invest locally.", why: "Anyone following where Europe's AI will run." }
other_lang_url: /da/2026/10/29/
items:
  - { n: 1, anchor: "copilot-fusion", signal: big, tracks: [build, general], min: 1.5, source: official, topic: code, why: "Developers stop picking models, and the price of a finished task becomes what counts.", bars: { title: "Pull requests that began with an agent's draft", max: 100, rows: [{ l: "March", v: 17, t: "17%" }, { l: "September", v: 40, t: "40%", hl: true }] } }
  - { n: 2, anchor: "gemini-4-carbon", signal: big, tracks: [general, build], min: 1.5, source: official, topic: model, why: "The assistant is becoming the place where work happens, and apps now compete to be found inside it." }
  - { n: 3, anchor: "big-tech-ai-money", signal: worth, tracks: [general], min: 1, source: reported, number: "$10B", number_label: "Microsoft's revenue from OpenAI in one quarter", topic: money, why: "The money is real, and it is moving from classic search ads into AI answers.", tiles: [{ n: "103%", t: "growth in Google Cloud's revenue from a year ago" }] }
  - { n: 4, anchor: "claude-smart-reports", signal: quick, tracks: [general, build], min: 1, source: official, number: "10x", number_label: "growth this year in spending on Anthropic-based coding tools, per Jellyfish", topic: business, why: "Finance teams now ask what they got for the AI bill, and vendors have to answer." }
  - { n: 5, anchor: "uk-data-centre-covenant", signal: quick, tracks: [europe, general], min: 1, source: reported, topic: law, why: "More governments want their AI to run on their own soil, and power is the bottleneck." }
  - { n: 6, anchor: "local-speech", signal: worth, tracks: [build, general, europe], min: 1, source: official, number: "40", number_label: "languages Nemotron 3.5 Transcribe can write down", topic: local, why: "Speech can now be turned into text without the audio ever leaving your office." }
  - { n: 7, anchor: "rag-conflict-typing", signal: worth, tracks: [build], min: 1, source: official, topic: research, why: "Let a cheap model do the easy part, and call the expensive one only when it is unsure." }
---

### 1. GitHub's Copilot can now pick and mix AI models for you {#copilot-fusion}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>GitHub's new Copilot Fusion chooses and combines AI models for each coding task. On an independent test, it came close to the top setup at about half the cost.</p>

On Wednesday, GitHub said over 40% of pull requests began with an agent's first draft in September, up from 17% in March. A pull request is a proposed change to a project's code.

That leaves every team choosing which model to pay for. At its Universe conference, GitHub's answer was to stop choosing.

#### <span>1 of 2</span> Copilot Fusion
In Copilot, you can now pick "Copilot Fusion" instead of one model. You set the effort to Standard, High or Max, and Copilot decides which models do the work. Sometimes a cheap model drafts, and a stronger one steps in only if a check fails.

Artificial Analysis, an independent test group, put Fusion Max about two points behind Claude Code with Opus 5.5 at Max. But Fusion cost about half as much per task, VentureBeat reports. It works on every Copilot plan.

The catch: you still pay each model's normal rate, and a benchmark is not your code.

#### <span>2 of 2</span> Copilot comes with GitHub Enterprise
GitHub Enterprise now includes Copilot for every licensed user, first for customers who buy through a sales team. Instead of fixed AI credits per seat, the company pays for use from one shared budget. If it runs out, code completion still works.

<div class="why"><b>Why it matters</b><p>It is like a phone plan that moves from a fixed bundle to paying per call. Meanwhile, the phone picks a good enough network for each call. Developers stop picking models, and the price of a finished task becomes what counts.</p></div>

Source: [github.blog](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion) · <span class="tag tag-official">Official</span> · [github.blog](https://github.blog/changelog/2026-10-28-github-enterprise-now-includes-access-to-github-copilot) · <span class="tag tag-official">Official</span> · [github.blog](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/) · <span class="tag tag-official">Official</span> · [venturebeat.com](https://venturebeat.com/orchestration/github-copilot-fusion-mixes-models-to-achieve-near-opus-5-5-coding-performance-at-half-the-per-task-cost) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Google's Gemini 4 Carbon tops a key ranking, but only security teams get it {#gemini-4-carbon}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Google's new Gemini 4 Carbon ranks first on a widely used model ranking, but for now only cyber defenders can use it. Google also opened Gemini and Search to more outside apps.</p>

#### <span>1 of 2</span> Gemini 4 Carbon
New AI models usually go to everyone at once. Carbon, released on Wednesday, goes first to a group of cyber defenders. Developers, firms and consumers come later, and Google gives no date.

The reason is its skill. Google says it scored 88.2% on SEC-bench Pro, a test of finding security holes, and it can also exploit them. On Artificial Analysis' index of general skill, it ranks first of 52 models.

The catch: the security scores come from Google's own announcement, measured without safety filters. A model that finds holes this well could also help attackers.

#### <span>2 of 2</span> Apps inside Gemini and Search
Google also opened a preview that lets developers put their apps inside Gemini and Search. Apps plug in through MCP, a common standard for connecting AI to outside tools. Over 50 apps already work in Gemini, and for now only US developers can join, TechCrunch reports.

<div class="why"><b>Why it matters</b><p>The assistant is becoming the place where work happens. For an app, being found inside Gemini may soon matter as much as ranking high in Google search once did.</p></div>

Source: [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/) · <span class="tag tag-official">Official</span> · [artificialanalysis.ai](https://artificialanalysis.ai/models/gemini-4-carbon) · <span class="tag tag-official">Official</span> · [blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/10/28/as-ai-agents-reshape-the-web-google-opens-gemini-and-search-to-more-apps/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. Microsoft took in $10B from OpenAI, and Google takes AI ads abroad {#big-tech-ai-money}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>$10B</b><span>Microsoft's revenue from OpenAI in one quarter</span></div>

<p class="short"><span>The short version</span>New results show how much money now flows through AI. Microsoft took in $10B from OpenAI in three months, and Google is bringing ads in AI search beyond the US.</p>

Microsoft took in $10B from its deals with OpenAI in the quarter to September, TechCrunch reports from Microsoft's filing. Google Cloud, which rents out computing power for AI, grew its revenue 103% from a year ago.

Search, Google's old money machine, grew only 12%, slower than earlier this year. Meanwhile, Google is taking ads in AI Mode, its chat-style search, to other countries for the first time.

The catch: investors were not won over, and Alphabet's shares fell after the results.

<div class="why"><b>Why it matters</b><p>The money is real, and it is moving from the classic list of search ads into AI answers. If you use AI search outside the US, expect ads inside the answers soon.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/10/28/microsoft-recorded-10-billion-in-revenue-from-openai/) · <span class="tag tag-reported">Reported</span> · [techcrunch.com](https://techcrunch.com/2026/10/28/google-expands-ai-search-ads-globally-as-core-ad-growth-slows/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. Anthropic shows companies what their Claude spending buys {#claude-smart-reports}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>10x</b><span>growth this year in spending on Anthropic-based coding tools, per Jellyfish</span></div>

<p class="short"><span>The short version</span>Claude Enterprise now reports what each team gets done with Claude and what it costs. Teams can also share one monthly budget.</p>

Spending on coding tools built on Anthropic's models grew 10x this year, says Jellyfish, which tracks how engineers work, faster than most finance chiefs planned. It is still only about 2% of engineering costs, TechCrunch reports.

On Wednesday, Anthropic added new tools to Claude Enterprise. Smart reports read a sample of a team's chats and show what the work cost and where it got stuck. With a shared monthly budget, heavy users run out less often while colleagues leave theirs unused.

The catch: this is the seller's own report on what its product is worth.

<div class="why"><b>Why it matters</b><p>Every finance team now asks the same question: what did we get for the AI bill? Whoever answers it best keeps the customer when the budget is cut.</p></div>

Source: [claude.com](https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/10/28/anthropic-just-launched-tools-to-show-companies-what-their-ai-spending-is-buying/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. Britain offers faster grid access to data centres that invest locally {#uk-data-centre-covenant}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Europe</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Britain's budget offers AI data centres a faster grid connection if they invest locally and protect water. The aim is to keep sensitive data in the country.</p>

AI data centres need a lot of power. In Essex, grid delays pushed the power for one planned data centre into the 2030s, and Microsoft dropped its plans for it, Reuters reports.

In Wednesday's budget, finance minister John Healey offered a deal called the British Data Centre Covenant. Operators that invest locally, create jobs and protect water supplies get priority on the grid, and may build their own power on site.

The catch: Britain estimates it needs to triple its AI-ready capacity by 2030, and the deal itself adds no new capacity.

<div class="why"><b>Why it matters</b><p>"When our armed forces use AI to keep us safe, we want that data here," Healey said. Like keeping a country's gold in its own vault, more governments want their AI to run on their own soil.</p></div>

Source: [kfgo.com (Reuters)](https://kfgo.com/2026/10/28/uks-healey-offers-grid-access-incentives-for-critical-data-centres/) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Open source & local AI

### NVIDIA's free model transcribes 40 languages, and llama.cpp learns to talk {#local-speech}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">Europe</span><span class="track">1 min</span></p>
<div class="number"><b>40</b><span>languages Nemotron 3.5 Transcribe can write down</span></div>

<p class="short"><span>The short version</span>NVIDIA released an open model that turns hour-long recordings in 40 languages into text. And llama.cpp, the engine behind many local AI apps, can now listen and speak.</p>

Meeting notes often go to a cloud service to be typed out. Two releases let you do it yourself.

#### <span>1 of 2</span> Nemotron 3.5 Transcribe
NVIDIA's new model is free, also for commercial use. It handles hour-long recordings and can tell speakers apart. NVIDIA says it ranks first among open models on a common English test.

The catch: for now it is built for big graphics cards, and lighter versions for PCs are still coming. It also only works on finished recordings.

#### <span>2 of 2</span> llama.cpp 0.8.0
llama.cpp's built-in server now does live voice chat and text to speech. It follows the same protocol as OpenAI's realtime voice service, so tools written for that should be easy to point at your own computer.

<div class="why"><b>Why it matters</b><p>Speech is one of the last things most people still send to the cloud. With free tools for both listening and talking, the audio can stay in your office, which matters under EU privacy rules.</p></div>

Source: [huggingface.co](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) · <span class="tag tag-official">Official</span> · [huggingface.co](https://huggingface.co/blog/nvidia/nemotron-transcribe-granary) · <span class="tag tag-official">Official</span> · [github.com/ggml-org](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### Cheap models can tell why sources disagree, almost like big ones {#rag-conflict-typing}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>When an AI's sources disagree, it needs to know why. Researchers show that cheap "decision models" can usually tell, and pass only the hardest cases to a big model.</p>

AI assistants often look things up first. When two sources disagree, the right reply depends on why: maybe one is out of date, or simply false.

Sorting that out usually takes a large model. The authors tested small "decision models" that just pick from a fixed list. Most matched or beat Gemini 2.5 Flash, at a fraction of the cost.

Their best setup is a cascade. The small model handles the easy cases and sends its least certain quarter to the stronger Gemini 3.8 Flash. For most models, that matched Gemini 3.8 Flash at 25 to 37% of its cost.

The catch: the paper is not peer reviewed, and the small models were worse at spotting a planted false source.

<div class="why"><b>Why it matters</b><p>It is the same idea as Copilot Fusion in story 1. A family doctor sends only the hard cases to a specialist. Here, a cheap model does the easy part and calls the expensive one only when unsure.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.36915) · <span class="tag tag-official">Official</span>
{: .sources}
