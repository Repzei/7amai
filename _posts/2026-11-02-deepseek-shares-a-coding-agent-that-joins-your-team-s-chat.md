---
title: "DeepSeek shares a coding agent that joins your team's chat"
summary: "DeepSeek published the code for Super-Agent, a free coding agent that listens to a team's GitHub and chat and steps in when asked. Also: AI bug reports delay Postgres 19, malware that asks AI what you are worth, new chatbot rules, and the EU's gigafactory deadline."
date: 2026-11-02 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "open-source", from: 1, more: ["ai-agent", "prompt-injection"] }
today:
  - { t: "DeepSeek shared a free coding agent that works from a team's GitHub and chat.", why: "Developers who juggle several coding agents." }
  - { t: "AI finds so many bugs that PostgreSQL 19 will likely be late.", why: "Anyone curious how AI changes the software they rely on." }
  - { t: "A password stealer asks AI models to rank what its victims are worth.", why: "Anyone with passwords or crypto on a Windows PC." }
  - { t: "Claude stops rebuilding famous games, and ChatGPT limits paid accounts per device.", why: "Anyone who makes games with AI or shares a ChatGPT plan." }
  - { t: "Bids for the EU's AI gigafactories close on 12 November.", why: "Anyone who cares where Europe's AI will run." }
other_lang_url: /da/2026/11/02/
items:
  - { n: 1, anchor: "deepseek-super-agent", signal: big, tracks: [build, general], min: 1.5, source: official, number: "30%", number_label: "lower success for coding agents working as a team, in an earlier study", topic: agent, why: "The scarce thing is no longer the AI's time but yours, so agents will compete on how little they interrupt.", do: "Developers can read the code and setup guide on GitHub, as research code." }
  - { n: 2, anchor: "postgres-19-late", signal: worth, tracks: [build, general], min: 1.5, source: official, number: "1,169", number_label: "fixes to the newest release branch this year, up from 724", topic: code, why: "AI makes software better checked, but the queue moves to the humans who review the fixes." }
  - { n: 3, anchor: "volta-infostealer", signal: worth, tracks: [general], min: 1, source: official, topic: security, why: "One model saying no is not enough when the next model is one line of code away.", do: "Keep passwords and wallet phrases in a password manager or hardware-backed store, not in plain files.", steps: { title: "How VOLTA uses AI", list: ["Steals passwords, cards and crypto wallets", "Sends a report to an AI model", "The model ranks what is worth most", "If it refuses, the next model tries"] } }
  - { n: 4, anchor: "chatbot-rule-changes", signal: worth, tracks: [general], min: 1, source: reported, topic: business, why: "The rulebook around a chatbot now shapes what you can make with it and how much you pay." }
  - { n: 5, anchor: "eu-ai-gigafactories", signal: quick, tracks: [europe, general], min: 1, source: official, number: "€10B", number_label: "of EU and national money for Europe's AI gigafactories", topic: chips, why: "Europe wants AI computers it controls itself, even if they cost more and take longer." }
  - { n: 6, anchor: "strata-0-2-9", signal: worth, tracks: [build], min: 1, source: official, number: "1,424", number_label: "tokens a second when a Strix Halo PC reads a long prompt, up from 791", topic: local, why: "The wait before the first word is what you notice with long documents, and that part shrank." }
  - { n: 7, anchor: "llmon", signal: worth, tracks: [build, general], min: 1, source: official, number: "5.6%", number_label: "highest attack success after training, down from as much as 100%", topic: research, why: "Agent safety could come from how a model is trained, not only from filters in front of it." }
---

### 1. DeepSeek shares a coding agent that joins your team's chat {#deepseek-super-agent}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>30%</b><span>lower success for coding agents working as a team, in an earlier study</span></div>

<p class="short"><span>The short version</span>DeepSeek has published the code for Super-Agent, a free coding agent that listens to a team's GitHub and chat and steps in when asked. It is a research prototype, not a product.</p>

Today's coding agents wait for you. You type a task and watch. Run several at once, and you become the person who hands out work and checks it.

DeepSeek, the Chinese AI lab, wants to turn that around. Its Super-Agent watches one GitHub project and, if you like, the work chat Feishu. When an approved person asks for something, it opens a task and works on it alone. Then it answers in the same thread, for example with a proposed code change.

The manual sets one goal: "take as little human attention as possible." It acts only when asked, or when a team rule allows it. The code is free under the MIT licence, and Bloomberg reports that DeepSeek aims it at Claude Code.

A new design is worth trying. In a study from January, coding agents working as a team succeeded about 30% less often than agents working alone. Super-Agent was not tested there.

The catch: DeepSeek calls it a "research prototype" and "not an official DeepSeek product." Coding agents wrote much of the code.

<div class="why"><b>Why it matters</b><p>It is open source, so anyone may read, change and share it. Think of a colleague who reads the team chat and picks up the jobs meant for them, instead of a builder you phone every morning. The scarce thing is no longer the AI's time but yours, so agents will compete on how little they interrupt.</p></div>

<p class="todo"><b>Try it:</b> Developers can read the code and setup guide on GitHub, as research code.</p>

Source: [github.com](https://github.com/deepseek-ai/dsh-superagent-prototype) · <span class="tag tag-official">Official</span> · [thenextweb.com](https://thenextweb.com/news/deepseek-super-agent-open-source-coding-agent) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. AI finds so many bugs that Postgres 19 is running late {#postgres-19-late}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>PostgreSQL, one of the most used databases, will likely ship version 19 in November instead of the usual autumn window. A core developer says AI tools found bugs faster than people could fix them.</p>

PostgreSQL stores the data behind a huge number of apps. New versions usually arrive by mid-October.

This year it will most likely be November, writes Robert Haas, a long-time Postgres developer. His answer to why: "LLMs happened." People now use AI to hunt for bugs in the code, and they find a lot.

From April to late September, fixes to the newest release branch rose from 724 last year to 1,169 this year. Three big features were pulled late in testing.

The catch is in the fixing. AI drafts of fixes are not always right, so a human must still review each one. And time meant for reviewing the release went to fixing old bugs.

<div class="why"><b>Why it matters</b><p>It is like a smoke alarm that suddenly hears every spark. The house gets safer, but someone still has to check each room. AI makes software better checked, but the queue moves to the humans who review the fixes. Haas says every Postgres developer will have to "raise their game."</p></div>

Source: [rhaas.blogspot.com](https://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. Malware asks AI models what a stolen computer is worth {#volta-infostealer}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Security researchers at Cisco Talos found a password stealer that sends its loot to an AI model. The model ranks which of the victim's accounts and wallets are worth the most.</p>

Password stealers are old news. The hard part for criminals is sorting thousands of stolen logins to find the ones that pay.

VOLTA hands that job to AI. It takes passwords, cards and crypto wallets from Windows PCs. Then it sends a report to an AI model, cast as "a forensic intelligence analyst". The answer has a section called "WHAT THEY'RE WORTH".

It tries Claude Opus 4.6 first. If that model refuses, it moves on to Kimi K2 and then Gemini 2.5 Flash.

The catch: the AI steals nothing. The damage is done before the model is asked.

<div class="why"><b>Why it matters</b><p>It is like a burglar who calls an appraiser after the break-in. One model saying no is not enough when the next model is one line of code away.</p></div>

<p class="todo"><b>Do this:</b> Keep passwords and wallet phrases in a password manager or hardware-backed store, not in plain files.</p>

Source: [blog.talosintelligence.com](https://blog.talosintelligence.com/appraisal-by-ai-model-driven-victim-prioritization-in-the-volta-infostealer/) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. Claude stops copying famous games, and ChatGPT limits accounts per device {#chatbot-rule-changes}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Two chatbots changed their rules over the weekend. Claude now refuses to rebuild a specific existing game, and ChatGPT caps how many paid accounts one device or card can use.</p>

#### <span>1 of 2</span> Claude says no to game copies
People have used AI to rebuild famous games such as Halo in the browser. Claude's guidelines now say: "Do not build a recreation of a specific existing game." Original games and games from your own designs are still fine, Engadget reports.

#### <span>2 of 2</span> ChatGPT counts your devices
ChatGPT now limits paid accounts per device and per payment card, The Decoder reports, citing OpenAI's help page. Users who hit it see "Device limit reached." The report gives no exact limits, and OpenAI points to buying extra credits instead.

<div class="why"><b>Why it matters</b><p>The models could still do both things. What changed is the rulebook around them. It is like a copy shop that will print anything except a whole book. The machine is the same, but the house rules shape what you can make and what you pay.</p></div>

Source: [engadget.com](https://engadget.com/2303469/anthropic-updates-claude-to-stop-it-from-recreating-existing-video-games) · <span class="tag tag-reported">Reported</span> · [the-decoder.com](https://the-decoder.com/openai-is-steering-chatgpt-users-toward-more-paid-usage/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. Bids for the EU's AI gigafactories close on 12 November {#eu-ai-gigafactories}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Europe</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>€10B</b><span>of EU and national money for Europe's AI gigafactories</span></div>

<p class="short"><span>The short version</span>The EU's call for giant AI data centres, which it calls gigafactories, closes on 12 November. Up to €10B of public money should pull in €20B more from private investors.</p>

The EU says it relies on countries outside the EU for over 80% of key digital products, services and infrastructure. AI computers are part of that.

Gigafactories are its answer: very large centres for training and running AI models. Firms and investors can bid together, and most EU countries, Denmark among them, will buy in jointly.

The catch: decisions come around the start of 2027, and then the sites must be built.

<div class="why"><b>Why it matters</b><p>It is like a town that builds its own power plant instead of buying power from a neighbour. Europe wants AI computers it controls itself, even if they cost more and take longer.</p></div>

Source: [digital-skills-jobs.europa.eu](https://digital-skills-jobs.europa.eu/en/latest/news/eu-ai-gigafactories-call-open-until-12-november-targeting-over-eu30-billion-investment) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### A free update lets big local models read prompts much faster {#strata-0-2-9}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Strata, a free app for running large AI models at home, now reads long prompts much faster on AMD's Strix Halo mini PCs. It can also run a 1-bit version of DeepSeek.</p>

Before a model writes a word, it must read your whole prompt. At home, with a long document, that takes a while.

Strata runs Qwen and DeepSeek models on your own PC. In version 0.2.9, a Strix Halo PC reads a long prompt at 1,424 tokens a second, up from 791. Writing speed stays about the same. It also adds 1-bit versions of DeepSeek.

The catch: the numbers come from the project's own tests, and the release page names no licence.

<div class="why"><b>Why it matters</b><p>It is like a colleague who skims much faster but writes at the same pace. With long documents and chat histories, the wait before the first word is what you notice, and that part shrank.</p></div>

Source: [github.com](https://github.com/Niko1221/Strata/releases/tag/v0.2.9) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### Teaching a model to tell orders from data nearly stops prompt injection {#llmon}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>5.6%</b><span>highest attack success after training, down from as much as 100%</span></div>

<p class="short"><span>The short version</span>Researchers trained small models to act only on clearly marked instructions. Most attacks hidden in web pages and files stopped working.</p>

AI agents read emails, web pages and files. Prompt injection hides an order in that text, and many models obey it, because they treat every word the same way.

Basel Shbita and colleagues tried a fix in training. Their method, LLMON, marks which parts of the input are instructions and which are only data. The model learns to act only on marked instructions.

On tests with hidden attacks, attack success fell from between 53% and 100% to at most 5.6%. The authors say the models kept their general skills.

The catch: it is a preprint, tested only on small models, and the input must be marked up this way.

<div class="why"><b>Why it matters</b><p>It is like a bank clerk who acts only on stamped forms, not on notes slipped into the envelope. If this holds up on bigger models, agent safety could come from how a model is trained, not only from filters in front of it.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.38120) · <span class="tag tag-official">Official</span>
{: .sources}
