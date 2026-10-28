---
title: "OpenAI and Anthropic say their AI disproved a famous computing rule"
summary: "AI models at two labs claim to have broken a basic assumption about hard problems, and experts are now checking. Also: Claude in drug labs and city halls, Google's Genie 4, the hunt for chips beyond Nvidia, and fixes for coding agents."
date: 2026-10-28 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "p-vs-np", from: 1, more: ["formal-verification", "compute"] }
today:
  - { t: "AI models at OpenAI and Anthropic claim to disprove a key rule about hard problems.", why: "Anyone curious whether AI can do original research." }
  - { t: "Anthropic shows Claude's early drug work and gives US government 40% off.", why: "Anyone following where AI firms look for big customers." }
  - { t: "Google's Genie 4 makes a world you can walk through, now with sound.", why: "Anyone into games, video or robots." }
  - { t: "OpenAI reportedly plans to buy Google's chips, and an Nvidia-free cloud raised $100M.", why: "Anyone wondering what will happen to AI prices." }
  - { t: "Claude Code stops overwriting long rule files, and Copilot agents get their own login.", why: "Developers who use coding agents." }
other_lang_url: /da/2026/10/28/
items:
  - { n: 1, anchor: "eth-refuted", signal: big, tracks: [general, build], min: 1.5, source: official, number: "1999", number_label: "the year the assumption was first published", topic: research, why: "If the claim holds, AI is doing original research, not just helping." }
  - { n: 2, anchor: "anthropic-drugs-gov", signal: worth, tracks: [general, build], min: 1.5, source: official, number: "40%", number_label: "off Claude for every level of US government", topic: business, why: "AI firms now have to prove their worth in slow, careful places like drug labs and city halls.", tiles: [{ n: "89%", t: "less time for human review of drug paperwork at Enveda" }] }
  - { n: 3, anchor: "genie-4", signal: worth, tracks: [general], min: 1, source: official, topic: image, why: "These worlds can also be training grounds where robots and agents practice without breaking anything." }
  - { n: 4, anchor: "chips-beyond-nvidia", signal: worth, tracks: [general, build], min: 1, source: reported, number: "$800M", number_label: "General Compute's value, up from $60M in May", topic: chips, why: "More chip suppliers means Nvidia can no longer set any price it likes." }
  - { n: 5, anchor: "dev-tool-fixes", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "An agent with its own badge can be tracked and switched off without touching the person behind it.", do: "Update Claude Code to version 2.1.312 if your project has long rule files." }
  - { n: 6, anchor: "lfm3", signal: worth, tracks: [build, general, europe], min: 1, source: official, number: "1 GB", number_label: "the size of the LFM3 text model at 4-bit", topic: local, why: "A voice assistant can work offline, so what you say never leaves the room.", do: "On a Mac with Ollama, run ollama run lfm3." }
  - { n: 7, anchor: "effort-level", signal: worth, tracks: [build, general], min: 1.5, source: official, topic: research, why: "Top effort works less like a quality dial and more like a taxi meter that keeps running.", number: "83.0%", number_label: "of tasks solved by Claude Sonnet 5 when stepping up, against 76.1% at top effort" }
---

### 1. OpenAI and Anthropic say their AI disproved a famous computing rule {#eth-refuted}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>1999</b><span>the year the assumption was first published</span></div>

<p class="short"><span>The short version</span>AI models at OpenAI and Anthropic claim to have broken a basic assumption about how hard some puzzles are. Experts are checking, and nothing is confirmed yet.</p>

Some puzzles are easy to check but seem very hard to solve. Given an answer, you can check it fast. But finding one seems to take exponentially longer as the puzzle grows.

Computer scientists turned that hunch into a rule called the Exponential Time Hypothesis, or ETH. Russell Impagliazzo and Ramamohan Paturi first published it in 1999, and hundreds of papers build on it.

On Monday, OpenAI said an internal model had found a method that grows more slowly than that, which would make ETH false. The model found it on 16 October, and Lean, a program that checks proofs, confirmed it the next day, The Next Web reports. Hours after one of its mathematicians said OpenAI's work built on earlier research, Anthropic posted its own disproof, found by an internal Claude model.

The catch is that nobody has fully reviewed the claims yet. Impagliazzo, Paturi and Ryan Williams of MIT lead the review. Their role "should not be taken as certification," they write. Anthropic adds that its result says nothing about solving real puzzles faster. OpenAI is "reasonably confident" it breaks no encryption, Williams told TechCrunch.

<div class="why"><b>Why it matters</b><p>For decades, "this cannot be solved fast" was part of the ground computer science stands on. If an AI cracked that, AI is doing original research, not just helping. Williams says every computer scientist should now give a little more weight to P = NP, the field's biggest open question.</p></div>

Source: [thenextweb.com](https://thenextweb.com/news/openai-exponential-time-hypothesis-false-kakeya-yang-mills) · <span class="tag tag-reported">Reported</span> · [techcrunch.com](https://techcrunch.com/2026/10/27/frontier-ai-labs-say-their-models-refuted-the-exponential-time-hypothesis-what-does-that-mean/) · <span class="tag tag-reported">Reported</span> · [github.com/anthropics](https://github.com/anthropics/formal-math/tree/main/eth) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. Anthropic shows Claude's drug work and cuts prices for US government {#anthropic-drugs-gov}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>40%</b><span>off Claude for every level of US government</span></div>

<p class="short"><span>The short version</span>Anthropic says Claude sped up early drug research at six partner firms. It is also giving every level of US government 40% off Claude.</p>

Drug labs and governments are slow, careful buyers, and both drown in paperwork.

#### <span>1 of 2</span> Claude in the drug lab
On Tuesday, Anthropic described its work with six drug developers. At Enveda, Claude read a large stack of manufacturing papers. It caught every problem the human reviewers had found, plus seven more, and cut review time by 89%. Anthropic also bought Mithril Medicine, a one-person firm working on two rare muscle diseases.

The catch: almost all of it is at an early stage, so no drug has been tested in people. If results hold, a first trial in humans could start in late 2028 at the earliest.

#### <span>2 of 2</span> 40% off for government
US federal, state, local and tribal governments now get 40% off Claude Enterprise, Claude for Government and the API. There is no minimum spend. Anthropic estimates that the deal will save the government $1 billion.

<div class="why"><b>Why it matters</b><p>Clever demos no longer win the big contracts. AI firms now have to prove their worth in slow, careful places like a drug lab or a city hall. A low price gets them in the door.</p></div>

Source: [anthropic.com](https://www.anthropic.com/research/early-progress-drug-development) · <span class="tag tag-official">Official</span> · [anthropic.com](https://www.anthropic.com/news/expanding-partnership-gsa) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. Google's Genie 4 builds a world you can walk through, with sound {#genie-4}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Google DeepMind's Genie 4 makes a world you can move through in real time, and it now creates its own sound, music and speech.</p>

A video model makes a clip you watch. A world model makes a scene you can walk around in, like a video game that nobody coded.

Google DeepMind showed Genie 4 on Tuesday. You move with the keyboard and change the scene with text, for example the weather. It is Google's first real-time world model that makes its own audio.

The catch: only trusted testers can use it today, and Google gives no date for more. Details can also drift over long sessions.

<div class="why"><b>Why it matters</b><p>Games are what people notice first, but Google also pitches these worlds as training grounds. A robot or an agent can practice there over and over without breaking anything real.</p></div>

Source: [deepmind.google](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. OpenAI reportedly plans to buy Google's chips, as Nvidia rivals draw money {#chips-beyond-nvidia}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>$800M</b><span>General Compute's value, up from $60M in May</span></div>

<p class="short"><span>The short version</span>OpenAI plans to buy Google's AI chips, The Information reports. And a cloud firm built on chips from Nvidia's rivals has raised $100M.</p>

Almost all AI runs on Nvidia's chips, so Nvidia largely sets the price of compute. So big buyers want a second supplier.

#### <span>1 of 2</span> OpenAI and Google's TPUs
OpenAI plans to buy Google's chips, called TPUs, The Information reported on Tuesday. It cites one unnamed person, Reuters writes, and gives no terms. Reuters reported in June 2025 that OpenAI had begun renting TPUs, and deals with Anthropic have already driven demand for them.

#### <span>2 of 2</span> A cloud without Nvidia
General Compute supplies other cloud firms with servers that use chips from Cerebras, SambaNova and Positron. It raised $100M, and its value rose from $60M in May to $800M, TechCrunch reports.

<div class="why"><b>Why it matters</b><p>It is like a town with one petrol station getting a second one. The first can no longer set any price it likes, and in the long run that shapes what you pay for AI.</p></div>

Source: [investing.com (Reuters)](https://www.investing.com/news/stock-market-news/openai-plans-to-buy-googles-ai-chips-the-information-reports-4977342) · <span class="tag tag-reported">Reported</span> · [techcrunch.com](https://techcrunch.com/2026/10/27/general-compute-raises-100-million-series-a-countering-the-neocloud-disaster-narrative/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. Claude Code stops overwriting long rule files, and Copilot agents get their own login {#dev-tool-fixes}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Claude Code fixes a bug that could overwrite large CLAUDE.md files. And GitHub lets Copilot agents work under an app's own identity.</p>

#### <span>1 of 2</span> Claude Code 2.1.312
Claude Code reads a file called CLAUDE.md for your project's rules. Version 2.1.312 fixes a bug where Claude could overwrite a very large CLAUDE.md or rules file in a subfolder after seeing only its start. So it could replace rules it had never read.

<p class="todo"><b>Do this:</b> Update Claude Code to version 2.1.312 if your project has long rule files.</p>

#### <span>2 of 2</span> Copilot agents with their own login
Until now, a bot that used Copilot borrowed a person's login. In a public preview, a GitHub App can now use the Copilot SDK under its own identity. The company pays, and its spending limits apply.

<div class="why"><b>Why it matters</b><p>It is like giving a contractor a visitor's pass instead of your key card. An agent with its own badge can be tracked and switched off on its own.</p></div>

Source: [githubusercontent.com](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md) · <span class="tag tag-official">Official</span> · [github.blog](https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### Liquid AI's small LFM3 models hear, see and speak on a laptop {#lfm3}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">Europe</span><span class="track">1 min</span></p>
<div class="number"><b>1 GB</b><span>the size of the LFM3 text model at 4-bit</span></div>

<p class="short"><span>The short version</span>Liquid AI released six small open models for text, images and speech. They are built to run on your own devices, such as laptops, not in the cloud.</p>

Most voice assistants send your words to the cloud, because good models are too big for a phone. Liquid AI's LFM3 family is small enough to stay on the device.

The text model fits in about 1 GB at 4-bit. The Omni model takes text, images and sound, and can answer in speech. Liquid says the text model beats the much larger Qwen3.5-9B on long browser tasks.

The catch: the scores are Liquid's own, and the model is not meant for coding agents. Firms with more than $10 million in yearly revenue need a separate deal, VentureBeat reports. Ollama runs the models only on Macs for now.

<div class="why"><b>Why it matters</b><p>A model that hears and speaks in about 1 GB means a voice assistant can work offline. What you say never leaves the room, which matters to anyone bound by EU privacy rules.</p></div>

<p class="todo"><b>Try it:</b> On a Mac with Ollama, run <code>ollama run lfm3</code>.</p>

Source: [huggingface.co](https://huggingface.co/blog/LiquidAI/lfm3) · <span class="tag tag-official">Official</span> · [huggingface.co](https://huggingface.co/LiquidAI/LFM3-1.7B) · <span class="tag tag-official">Official</span> · [github.com/ollama](https://github.com/ollama/ollama/releases/tag/v0.40.12) · <span class="tag tag-official">Official</span> · [venturebeat.com](https://venturebeat.com/technology/liquid-ais-new-lfm3-models-put-browser-agents-voice-commands-and-image-recognition-onto-enterprise-controlled-devices) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Paper of the day

### Maximum effort often costs more without solving more {#effort-level}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>83.0%</b><span>of tasks solved by Claude Sonnet 5 when stepping up, against 76.1% at top effort</span></div>

<p class="short"><span>The short version</span>Researchers at Together AI and two US universities found that an AI model's highest effort setting can cost far more without solving more. Starting low and stepping up works better.</p>

Many AI tools let you pick an effort level. Higher effort means the model thinks longer, and you pay for every extra word. So most people assume more is safer.

The researchers tested eight models, including Claude Sonnet 5 and GPT-5.6, on math, science and coding tasks. On tasks that every level solved, the highest effort cost up to 42 times as much as the lowest. Higher effort also failed some tasks that lower effort had solved.

Their fix: start at the lowest level, and step up only when a check shows the answer is wrong. That matched or beat fixed top effort for every model.

For Claude Sonnet 5 on a terminal coding test, success rose from 76.1% to 83.0%, and the cost fell.

The catch: the paper is not peer reviewed, and stepping up needs a way to check answers.

<div class="why"><b>Why it matters</b><p>Top effort works less like a quality dial and more like a taxi meter that keeps running. For most tasks, a short ride and a check at the end is enough.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.34491) · <span class="tag tag-official">Official</span>
{: .sources}
