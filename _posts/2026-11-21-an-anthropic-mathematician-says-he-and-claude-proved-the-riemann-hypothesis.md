---
title: "An Anthropic mathematician says he and Claude proved the Riemann hypothesis"
summary: "Levent Alpöge says he and Claude proved the Riemann hypothesis, and the proof is written so computers can check it. Also: Signal blocks phone AI agents from reading chats, OpenAI's agents hunt ChatGPT slowdowns, Copilot gets eight new connectors, and an agent memory that keeps everything."
date: 2026-11-21 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "riemann-hypothesis", from: 1, more: ["formal-verification", "context-window"] }
today:
  - { t: "A mathematician at Anthropic says he and Claude proved the Riemann hypothesis.", why: "Anyone curious where AI in science is heading." }
  - { t: "Signal now blocks AI agents on phones from reading your chats.", why: "Anyone who uses Signal or a phone assistant." }
  - { t: "OpenAI's agents diagnose ChatGPT slowdowns, and its models face a chemistry test.", why: "Teams thinking of handing expert work to AI." }
  - { t: "GitHub Copilot gets eight new connectors, including Supabase and Box.", why: "Developers who use Copilot." }
other_lang_url: /da/2026/11/21/
items:
  - { n: 1, anchor: "riemann-hypothesis-claim", signal: big, tracks: [general], min: 2, source: official, number: "1859", number_label: "the year Riemann posed the problem", topic: research, why: "A computer may confirm a famous proof before any person understands it." }
  - { n: 2, anchor: "signal-blocks-ai-agents", signal: big, tracks: [general, europe], min: 1.5, source: official, topic: security, why: "Encryption protects a message on the way, but an agent reading your screen sees it after it arrives.", do: "If you use Signal on a Mac, add Signal to Excluded Apps under System Settings, Siri." }
  - { n: 3, anchor: "openai-performance-factory-medchembench", signal: worth, tracks: [build, general], min: 1.5, source: official, number: "70%", number_label: "of 100 checked diagnoses by OpenAI's agents were right", topic: agent, why: "AI is good at the first draft of expert work, but a person still checks it." }
  - { n: 4, anchor: "copilot-new-connectors", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "Copilot can look things up in your team's tools, but you decide which ones it gets.", do: "If you run Copilot Business, decide which of the new connectors to allow." }
  - { n: 5, anchor: "inkling-2-mini", signal: worth, tracks: [build, europe], min: 1.5, source: official, number: "32 GB", number_label: "of memory on a Mac with an Apple chip is enough", topic: local, why: "A coding agent on your own laptop keeps your code at home, but it still needs a sandbox.", do: "If you try it with an agent, run it in a folder where deleted files do no harm." }
  - { n: 6, anchor: "grepmem-agent-memory", signal: worth, tracks: [build, general], min: 1, source: official, number: "95-97%", number_label: "of recall questions right, against at most 21% for summaries", topic: research, why: "Keeping the full history and searching it beats summarizing and forgetting." }
---

### 1. An Anthropic mathematician says he and Claude proved the Riemann hypothesis {#riemann-hypothesis-claim}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">2 min</span></p>
<div class="number"><b>1859</b><span>the year Riemann posed the problem</span></div>

<p class="short"><span>The short version</span>Levent Alpöge, a mathematician who works at Anthropic, says he and Claude proved the Riemann hypothesis. The proof is written so a computer can check it, but no person can follow it yet.</p>

The Riemann hypothesis is one of the most famous open problems in math. Bernhard Riemann posed it in 1859, and it is about how prime numbers are spread out (see Explained below). It is one of the Millennium Prize problems, and nobody has proved it.

In an essay posted this week, Alpöge says he found a proof "working with Claude". Near the end, he writes, Claude "far outpaced" him. He says the method also covers a broader version, the Generalized Riemann hypothesis.

He did not publish a normal paper. He released the proof in Lean, a language where a computer checks every step. Several mathematicians, including MIT's Andrew Sutherland, say the files compile, TechCrunch reports. So the computer accepted the steps.

The catch: a computer check shows that each step follows, but not why. It will be a while before mathematicians have a handle on the proof, TechCrunch writes. And nobody, Alpöge included, can yet explain the proof in human terms. He says a detailed version he made ran past 250,000 pages, far too long to read, and he promises a readable one.

The same day, Stanford's Ravi Vakil posted an all-human draft proof of the broader version by Alessandro Masullo. About eight hours later, Vakil added that people using AI models had reported problems in it. Vakil makes no claim that it is correct.

A note from us: 7am AI is written with Claude, and Alpöge works for Anthropic. So we treat this as a claim until others have checked it.

<div class="why"><b>Why it matters</b><p>Until now, a proof counted when enough experts understood it. Here a computer may confirm a proof before any person does. It is like a key that opens the lock: you know it works, but not yet why it is shaped that way.</p></div>

Sources: [alpo.ge](https://alpo.ge/remark.pdf) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/20/ai-claimed-a-solution-to-the-167-year-old-riemann-hypothesis-and-a-human-did-too/) · <span class="tag tag-reported">Reported</span> · [math216.wordpress.com](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) · <span class="tag tag-reported">Reported</span> · [claymath.org](https://www.claymath.org/millennium/riemann-hypothesis/) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. Signal now blocks AI agents on phones from reading your chats {#signal-blocks-ai-agents}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">Europe</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Signal's apps now stop AI assistants built into iPhones and Android phones from reading your messages on screen. You can turn it off, but Signal warns against it.</p>

AI agents that read your screen are now built into phones.

On Friday, Signal said it is restricting these agents. On iOS 27, Signal blocks screenshots inside the app, with a setting called "Block Siri AI". On Android, it turns on its screen security when it detects an AI assistant reading the screen. Signal names Gemini, Siri and Meta's Muse.

You can switch the protection off in settings. But Signal warns that this may expose your messages, and your contacts' messages, to the agents.

The catch: Signal says the fix is incomplete. Agents may reach app data in other ways, such as through files. On the Mac it cannot reliably block screenshots, and on Android it only works where it can detect the assistant. So Signal asks Apple, Google and Microsoft for a simple way for apps to opt out.

<div class="why"><b>Why it matters</b><p>Encryption protects a message on its way to you. But an agent that reads your screen sees it after it arrives. It is like a sealed letter that a helper reads over your shoulder: the envelope was safe, the room was not.</p></div>

<p class="todo"><b>Do this:</b> If you use Signal on a Mac, add Signal to Excluded Apps under System Settings, Siri.</p>

Sources: [signal.org](https://signal.org/blog/protecting-your-privacy/) · <span class="tag tag-official">Official</span> · [theregister.com](https://www.theregister.com/security/2026/11/20/signal-slams-door-on-prying-ai-agents-to-protect-privacy/5311466) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. OpenAI shows agents that diagnose ChatGPT slowdowns, and a chemistry test {#openai-performance-factory-medchembench}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>70%</b><span>of 100 checked diagnoses by OpenAI's agents were right</span></div>

<p class="short"><span>The short version</span>OpenAI explained how its coding agents find out why ChatGPT gets slow. It also published a test of how well its models reason about medicines.</p>

#### <span>1 of 2</span> Agents that hunt for slowdowns
When a big service gets slower, engineers can spend hours in the logs. OpenAI now hands that first round to Codex, its coding agent. When an alert fires, an agent investigates and suggests a fix. A second agent then tries to prove the first one wrong, and an engineer decides what ships.

In just over three months, it ran more than 1,700 investigations. When engineers checked 100 of its diagnoses, 70% were right. OpenAI says fixes are harder than diagnoses, and the slow part may now be waiting for an engineer to review them.

#### <span>2 of 2</span> A test of medicine chemistry
MedChemBench asks models to reason about molecules, as drug chemists do. On this test of its own, OpenAI's GPT-6.2 Astra got 84.5% of the points at its highest reasoning setting. The older GPT-6 Astra was best at working out molecule structures, but picking compounds was harder for it.

The models may have seen the source papers before, and the test says nothing about finding new drugs.

<div class="why"><b>Why it matters</b><p>Both show the same pattern. AI is now good at the first draft of expert work, like a sharp junior colleague. But someone senior still has to check it before it counts.</p></div>

Sources: [openai.com (Performance Factory)](https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast/) · <span class="tag tag-official">Official</span> · [openai.com (MedChemBench)](https://openai.com/index/introducing-medchembench/) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. GitHub Copilot can now reach Supabase, Box and six more services {#copilot-new-connectors}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>GitHub added eight new connectors to Copilot. So it can look things up in tools like Supabase, Buildkite and Calendly while it works.</p>

Connectors use MCP, a shared standard that lets AI tools talk to other services. Copilot already had more than 25 of them, such as Slack, Figma and Sentry. The new ones are Box, Buildkite, Calendly, ClickUp, Mixpanel, Supabase, Webflow and Wix.

You can ask why a Buildkite build failed and fix the code in the same session. Or Copilot can check a Supabase database before it writes a change to it.

They are in public preview on all Copilot plans. On Business and Enterprise, an admin must first turn on "Editor preview features".

<div class="why"><b>Why it matters</b><p>It is like giving a new colleague logins to the team's tools. They stop asking you to look things up, but you decide which doors they get.</p></div>

<p class="todo"><b>Do this:</b> If you run Copilot Business, decide which of the new connectors to allow.</p>

Source: [github.blog](https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### Thinking Machines releases Inkling 2 Mini, a coding model for a laptop {#inkling-2-mini}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1½ min</span></p>
<div class="number"><b>32 GB</b><span>of memory on a Mac with an Apple chip is enough</span></div>

<p class="short"><span>The short version</span>Thinking Machines put Inkling 2 Mini on Hugging Face under the Apache 2.0 license. It runs on a Mac with 32 GB of memory and does well on coding tests.</p>

Last week the lab released the weights of Inkling 2 Small, as it had promised. Now comes a smaller sibling. Mini has 26.4B parameters, the learned numbers inside a model, but only 3.4B of them work on each word. Its middle layers also run three times, so it thinks longer without getting bigger.

On SWE-bench Verified, a coding test, it scores 79.2%, a little above Qwen's model of a similar size. Those are Thinking Machines' own numbers.

The catch: the model card is unusually frank. Mini states wrong facts with confidence more often than bigger models. It can get stuck in loops when debugging, and it may delete or overwrite files without asking.

<div class="why"><b>Why it matters</b><p>A coding agent on your own laptop keeps your code at home. But a model that may delete files needs a fenced-off workspace, like a new hire who starts on a test system.</p></div>

<p class="todo"><b>Try it:</b> If you try it with an agent, run it in a folder where deleted files do no harm.</p>

Source: [huggingface.co](https://huggingface.co/thinkingmachines/Inkling-2-Mini) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### AI agents remember better when they keep everything and search it {#grepmem-agent-memory}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>95-97%</b><span>of recall questions right, against at most 21% for summaries</span></div>

<p class="short"><span>The short version</span>An AI agent remembers far better if it keeps its whole history as text and searches it, a new paper finds. Summaries lose too much.</p>

Long tasks overflow an agent's context window, its working memory (see Explained below). The usual fix is to summarize old steps or drop them. But a summary loses details the agent may need later.

Ziyan Yang, Taiwei Shi and Jieyu Zhao tried something simpler, called GrepMem. The agent writes everything to a plain text log. When it needs something, it searches the log for matching words. There is no database and no extra model. They trained an open model, Qwen3.5-9B, to work this way.

On a recall test called ContextBench, it got 95-97% of the questions right. Methods that summarize or drop history got at most 21%.

The catch: these are the authors' own tests with one 9B model, and others have not checked them yet.

<div class="why"><b>Why it matters</b><p>It is like keeping a full diary instead of a weekly summary. You can always look up exactly what happened. For agents, the simplest memory may also be the best.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.25123) · <span class="tag tag-official">Official</span>
{: .sources}
