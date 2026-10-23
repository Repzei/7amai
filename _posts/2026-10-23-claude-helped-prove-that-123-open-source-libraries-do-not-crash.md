---
title: "Claude helped prove that 123 open-source libraries do not crash"
summary: "Anthropic used Claude to write math proofs that widely used code cannot crash, a job that used to be far too costly. Also: agent skills become an open standard, a Claude Code security update, huge new AI rounds, and live translation in Google Meet."
date: 2026-10-23 07:00:00 +0200
reviewed: false
checked: true
minutes: 7
explained: { main: "formal-verification", from: 1, more: ["ai-agent", "open-weight"] }
today:
  - { t: "Claude wrote math proofs that 123 widely used open-source libraries cannot crash, and found hundreds of bugs on the way.", why: "Anyone whose apps rely on open-source code, which is nearly everyone." }
  - { t: "Anthropic hands Agent Skills to the Linux Foundation, and TanStack AI and Copilot open up to other models.", why: "Developers who do not want to be tied to one AI vendor." }
  - { t: "Claude Code 2.1.309 closes several holes in its sandbox.", why: "Developers who let Claude Code run commands on their machine." }
  - { t: "OpenAI is reportedly raising up to $30 billion, and DeepSeek about $15 billion.", why: "Anyone wondering how long AI prices can stay this low." }
  - { t: "Google Meet now translates speech live between any of 63 languages.", why: "Anyone who meets with people who speak another language." }
other_lang_url: /da/2026/10/23/
items:
  - { n: 1, anchor: "claude-formal-proofs", signal: big, tracks: [general, build], min: 1.5, source: official, number: "123", number_label: "open-source libraries proven not to crash" }
  - { n: 2, anchor: "open-agent-standards", signal: big, tracks: [build], min: 1.5, source: official, number: "1M", number_label: "skills published, according to Anthropic" }
  - { n: 3, anchor: "claude-code-2-1-309", signal: quick, tracks: [build], min: 1, source: official }
  - { n: 4, anchor: "ai-mega-rounds", signal: worth, tracks: [general], min: 1, source: reported }
  - { n: 5, anchor: "meet-translation", signal: worth, tracks: [general, europe], min: 1, source: official }
  - { n: 6, anchor: "minimax-m3-1-flash-weights", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 7, anchor: "naive-rag-memory", signal: worth, tracks: [build], min: 1, source: official }
---

### 1. Claude helped prove that 123 open-source libraries do not crash {#claude-formal-proofs}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>123</b><span>open-source libraries proven not to crash</span></div>

<p class="short"><span>The short version</span>Anthropic used Claude to write math proofs that 123 widely used open-source libraries cannot crash. Such proofs used to be far too costly for ordinary code.</p>

Most software is checked with tests, which only show that the code works for the inputs you tried. A formal proof shows, step by step like in math, that something holds for every possible input.

Proofs like that are rare, because they are slow and costly to write. So they are mostly used where a bug would be very dangerous, such as in secure operating systems.

On 22 October, Anthropic's Frontier Red Team and the startup Theorem showed another way. Claude wrote proofs that 123 open-source libraries never crash, for any input under 64 MB. The work took a few weeks. On the way, Claude found and fixed hundreds of bugs, some of which normal testing had missed for years.

There is a catch. In Anthropic's own words, "'Formally verified' does not mean 'bug-free.'" The proofs cover a single setup, a RISC-V chip running Linux. Most people run these libraries on other chips and system libraries, so that gap is still open.

<div class="why"><b>Why it matters</b><p>Until now, a proof was like a full structural survey of a bridge: so expensive that only a few bridges ever got one. If AI makes the survey cheap, the shared code under your apps can be checked, not just tested.</p></div>

<p class="todo"><b>Try it:</b> Anthropic published some of the proofs. Theorem released a Claude skill for verifying your own code, and offers to run the method for other open-source projects.</p>

Source: [anthropic.com](https://www.anthropic.com/research/formal-verification) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. Agent tools get less tied to one company {#open-agent-standards}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>1M</b><span>skills published, according to Anthropic</span></div>

<p class="short"><span>The short version</span>Anthropic gave its Agent Skills format to a Linux Foundation group, and two big tools now let you mix models and skills more freely.</p>

A skill is a folder of instructions that teaches an AI agent a task, such as filling in a report template. If each vendor had its own format, you would rewrite your skills every time you switched.

#### <span>1 of 3</span> Agent Skills moves to the Linux Foundation
On 22 October, Anthropic gave the Agent Skills standard to the Agentic AI Foundation, part of the Linux Foundation. The same group already looks after MCP, the way agents connect to other tools. Engineers from Anthropic, Google and OpenAI will maintain the standard. Anthropic says more than 70 agent platforms use it, including ChatGPT, Cursor and GitHub Copilot.

#### <span>2 of 3</span> TanStack AI 1.0 brings skills to any model
TanStack AI, an open toolkit for building AI apps in TypeScript, reached version 1.0 on 23 October. Any model that can call tools can now load skills in the same format. It works with 23 model providers.

#### <span>3 of 3</span> Copilot in Visual Studio takes your own model
GitHub's Copilot in Visual Studio now lets you plug in models from OpenAI, Anthropic, Microsoft Foundry or Ollama. It works without a GitHub login. The feature is still in preview.

<div class="why"><b>Why it matters</b><p>It is like the shift to one charging plug for phones. Once the format is shared, the skills you write keep working when you change model, tool or vendor.</p></div>

Source: [anthropic.com](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) · <span class="tag tag-official">Official</span> · [tanstack.com](https://tanstack.com/blog/tanstack-ai-1-0) · <span class="tag tag-official">Official</span> · [github.blog](https://github.blog/changelog/2026-10-22-github-copilot-in-visual-studio-september-update-2) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. Claude Code 2.1.309 closes several holes in its sandbox {#claude-code-2-1-309}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>The new Claude Code version fixes several ways that commands could slip past its safety limits. Update if you rely on the sandbox.</p>

Claude Code can run commands on your computer. Its sandbox is the fence that keeps those commands away from files they should not touch.

Version 2.1.309 mends several gaps in that fence. On Mac and Linux, the shell's startup files ran outside the sandbox before each command. Sandboxed commands could also change the MCP settings file. And on Windows, safety hooks written for PowerShell let commands through when they should have blocked them.

The changelog does not say whether anyone used these gaps.

<div class="why"><b>Why it matters</b><p>A sandbox is only as strong as its weakest gate. These fixes close gates that most users never knew were there.</p></div>

<p class="todo"><b>Do this:</b> Run <code>claude update</code> and check that <code>claude --version</code> shows 2.1.309 or later.</p>

Source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. OpenAI and DeepSeek are reportedly raising huge new rounds {#ai-mega-rounds}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>OpenAI is reportedly raising up to $30 billion at a $1.25 trillion valuation. DeepSeek is reportedly raising about $15 billion.</p>

Training and running AI takes huge numbers of costly chips, and much of that is paid for by investors. Two reports on 22 October show how much money is still flowing in.

#### <span>1 of 2</span> OpenAI at $1.25 trillion
CNBC reports that OpenAI is raising up to $30 billion at a $1.25 trillion valuation before the new money. Coatue and investors in the UAE lead, TechCrunch writes. In March, OpenAI was valued at $852 billion. The terms are not final, and OpenAI did not comment.

#### <span>2 of 2</span> DeepSeek after the US ban
Bloomberg reports that DeepSeek is raising about $15 billion, with battery maker CATL and Tencent as possible investors. It comes two days after the US ordered its civilian agencies to remove DeepSeek. DeepSeek did not reply right away.

<div class="why"><b>Why it matters</b><p>Money like this pays for the chips behind the AI you use every day. A lab that raises $15 billion two days after a US ban is not going away. So the race between US and Chinese models stays close.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/10/22/openai-working-on-new-30b-raise-at-1-25t-valuation-ahead-of-ipo/) · <span class="tag tag-reported">Reported</span> · [techcrunch.com](https://techcrunch.com/2026/10/22/deepseek-reportedly-raises-15b-days-after-us-restrictions/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. Google Meet now translates speech live between 63 languages {#meet-translation}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Google Meet can now translate what people say, live, between any of 63 languages. It also notices by itself which language is being spoken.</p>

Meetings across borders often fall back on English, so the people who speak it best do most of the talking. Live translation lets everyone speak their own language.

On 22 October, Google expanded speech translation in Meet to 63 languages. Each listener hears the meeting in their chosen language, and Meet detects the spoken language by itself. Google says it does not store your voice or train on it.

The catch is the price. The person who sets up the meeting needs a paid plan, such as Google AI Pro. On the cheaper plans, it stops after 90 minutes per meeting.

<div class="why"><b>Why it matters</b><p>It is like having an interpreter in every meeting, for the price of a subscription. For teams spread across Europe, that changes who gets to speak up.</p></div>

Source: [workspaceupdates.googleblog.com](https://workspaceupdates.googleblog.com/2026/10/real-time-speech-translation-in-google-Meet-expands-to-63-languages-with-automatic-language-detection.html) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### MiniMax releases the weights of its cheap agent model {#minimax-m3-1-flash-weights}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>MiniMax kept its promise and put the M3.1 Flash weights on Hugging Face. Companies can now run the model on their own servers.</p>

On 20 October we wrote that MiniMax's new Flash model runs agent tasks for about 22 cents, and that the weights would come later. They are now on Hugging Face.

MiniMax says the model has about 428 billion parameters, but only 23 billion work on each word, so it runs faster than its size suggests. It reads up to 1 million tokens at once. MiniMax suggests serving it with vLLM or SGLang, and the page links to smaller versions for llama.cpp and Ollama.

There are two catches. It comes under MiniMax's own license, not a standard open license, so read the terms before commercial use. And at 428 billion parameters, it is far too big for a normal PC.

<div class="why"><b>Why it matters</b><p>Before, you could only rent this model through MiniMax's API. Now a company can run it in its own data center, so its data never has to leave the building.</p></div>

Source: [huggingface.co](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### Plain search beats complex memory systems for chat agents {#naive-rag-memory}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Researchers found that simply searching old conversations works better than the clever memory systems built for AI agents, in six of seven tests.</p>

An agent that talks with you for weeks needs to remember what you said. Many teams build complex memory systems that summarize old chats or sort facts into structures.

Zhengye Bao and colleagues tested a much simpler method. They kept the raw conversation and, for each question, searched it for the most relevant parts. This is called RAG (retrieval-augmented generation): the model looks up the right pages before it answers.

The simple method came first in six of seven test settings, across four memory benchmarks. It beat the best complex system by up to 5.5 points. The reason, the authors say, is that the raw text keeps more of the evidence an answer needs.

<div class="why"><b>Why it matters</b><p>It is like keeping the original receipts instead of a neat summary of your spending. When a question comes up that you did not expect, the receipts still have the answer.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.30755) · <span class="tag tag-official">Official</span>
{: .sources}
