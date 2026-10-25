---
title: "OpenAI's Codex found a serious hole in Node.js, and the fix is out"
summary: "An AI security tool found a flaw in the code that unpacks web traffic in Node.js and Python. Also: two chatbots pick opposite sides in US races, the UK's AI security money, Sweden blocks ChatGPT and Claude, and what a coding agent's harness really buys."
date: 2026-10-25 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "cve", from: 1, more: ["token", "ai-agent"] }
today:
  - { t: "OpenAI's Codex Security found a flaw that can let attackers run code via Node.js and Python apps. Fixes are out.", why: "Anyone who runs Node.js or Python on a server." }
  - { t: "Forced to name one candidate, Grok picked Republicans and GPT picked Democrats in nearly 500 US races.", why: "Anyone building on these models, or asking them about politics." }
  - { t: "The UK sets out about £600m for AI security, including a £100m lab that watches for biological threats.", why: "Anyone following how Europe spends on AI safety." }
  - { t: "Sweden's Government Offices block ChatGPT and Claude on work computers from Monday, and point staff to Copilot.", why: "Public sector workers and IT teams in the Nordics." }
  - { t: "Cursor's agents can now click through desktop apps, and a study finds a heavier harness mostly raises the bill.", why: "Developers who pay for coding agents." }
other_lang_url: /da/2026/10/25/
items:
  - { n: 1, anchor: "node2shell", signal: big, tracks: [build, general], min: 1.5, source: official, number: "9.2", number_label: "out of 10 on the CVSS severity scale" }
  - { n: 2, anchor: "ai-ballot", signal: worth, tracks: [general], min: 1, source: reported, number: "97%", number_label: "of GPT's picks were Democrats" }
  - { n: 3, anchor: "uk-ai-security", signal: worth, tracks: [europe, general], min: 1, source: reported, number: "£100m", number_label: "for an AI lab that watches for biological threats" }
  - { n: 4, anchor: "sweden-blocks-chatbots", signal: quick, tracks: [europe, general], min: 1, source: reported }
  - { n: 5, anchor: "coding-agent-harness", signal: worth, tracks: [build], min: 1.5, source: official }
  - { n: 6, anchor: "ollama-speech", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 7, anchor: "agent-mosaic", signal: worth, tracks: [build, europe], min: 1, source: official }
---

### 1. OpenAI's Codex found a serious hole in Node.js, and the fix is out {#node2shell}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>9.2</b><span>out of 10 on the CVSS severity scale</span></div>

<p class="short"><span>The short version</span>An AI security tool from OpenAI found a flaw in Brotli, the code that unpacks compressed web traffic. It hits Node.js, Python and more, and the fixes are out.</p>

Most web traffic is squeezed to make it smaller. Brotli is one of the formats that do the squeezing. Your server or app unpacks it without you noticing, so a flaw there sits in a lot of places.

On 21 October, Node.js fixed ten security holes. The worst is in its built-in Brotli decoder. A crafted stream can corrupt memory, and that can crash the app, leak data or let an attacker run code. Node.js credits the find to OpenAI Codex Security, OpenAI's AI tool for finding bugs.

The same flaw sits in Google's Brotli library itself. So it also reaches Python, where requests and aiohttp use Brotli automatically when it is installed. The Brotli package alone has about 82.8 million downloads a month, the security firm Aikido says. Bun, Envoy and curl are affected too.

Here is the catch. According to Aikido, the bug was fixed in Brotli's code in February. Nobody saw it as a security problem, so no release carried the fix until now. Aikido also warns that tools like pip-audit and Dependabot did not flag the Python packages yet.

<div class="why"><b>Why it matters</b><p>It is like a recall for a part that sits inside many different cars. You may never have chosen Brotli, but your app probably uses it. And this week it was AI tools that found holes like this, first in PHP and now here.</p></div>

<p class="todo"><b>Do this:</b> Update Node.js to 22.23.4, 24.22.1 or 26.12.1. In Python, run <code>pip install -U brotli brotlicffi</code> to get Brotli 1.2.1. Update Bun to 1.4.4.</p>

Source: [nodejs.org](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases) · <span class="tag tag-official">Official</span> · [aikido.dev](https://www.aikido.dev/blog/python-packages-vulnerable-node2shell-brotli-cve-2026-111497) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Forced to pick, Grok chose Republicans and GPT chose Democrats {#ai-ballot}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>97%</b><span>of GPT's picks were Democrats</span></div>

<p class="short"><span>The short version</span>Researchers asked two AI models who to vote for in nearly 500 US races. The models leaned hard in opposite directions.</p>

The US midterms are on 3 November. Chat apps refuse to tell you how to vote, but the same models can be reached through their developer APIs.

That is what Convovo, a studio led by Cornell professor Tapan Parikh, did. It forced GPT-6.1 Sol and Grok 4.7 to name one candidate per race, with web search on. Grok picked the Republican in 92% of answers, and GPT picked the Democrat in 97%, TechCrunch reports. The two agreed in less than 10% of races.

The sources differed too. Grok cited X in 41% of answers. Each Grok request also carried about 1,240 tokens of text the researchers did not write and could not see.

The catch: OpenAI says a forced question through the API is not what ChatGPT users see.

<div class="why"><b>Why it matters</b><p>An app built on a model inherits its leanings, like a shop that inherits a supplier's labels. If you build on these APIs, you also get hidden instructions you did not write.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/10/24/forced-to-pick-groks-ai-model-chooses-republicans-openais-picks-democrats/) · <span class="tag tag-reported">Reported</span> · [convovo.ai](https://convovo.ai/ballot/) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. The UK puts about £600m into AI security {#uk-ai-security}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Europe</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>£100m</b><span>for an AI lab that watches for biological threats</span></div>

<p class="short"><span>The short version</span>The UK government set out about £600m to protect against threats from AI. The biggest new piece is a lab that uses AI to spot biological threats.</p>

The EU mostly regulates AI with rules. The UK is betting more on testing and defence.

On Saturday, the government set out the package, Reuters reports. It includes £100m for an AI Biosecurity Lab and an extra £120m for the AI Security Institute, which tests new models. Another £130m goes to cyber defence for critical infrastructure. OpenAI and Anthropic will add up to £200m in model credits for the biosecurity work.

AI minister Kanishka Narayan wants the lab to become a major global institution. The catch is that the money is a plan for now. Reuters does not say when it will be spent.

<div class="why"><b>Why it matters</b><p>The same AI that helps design medicine can help design harm. The UK is paying for the smoke detector, not just writing the fire code.</p></div>

Source: [timeslive.co.za (Reuters)](https://www.timeslive.co.za/news/sci-tech/2026-10-24-uk-government-sets-out-600m-of-ai-security-funding/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. Sweden's Government Offices block ChatGPT and Claude from Monday {#sweden-blocks-chatbots}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Europe</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Staff at Sweden's Government Offices lose access to ChatGPT and Claude in the browser on 26 October. They are pointed to Microsoft's Copilot instead.</p>

Many public offices let staff try chatbots first and set rules later. Sweden is now tightening the rules.

The Government Offices told SVT that the web versions of ChatGPT and Claude will no longer work on staff computers. Copilot is approved, because the office reviewed it and raised its security. Staff can still reach both models through a platform called Intric. The Tax Agency and the National Board of Institutional Care already block AI services, and the Enforcement Authority is considering it.

The office did not say why ChatGPT and Claude were blocked.

<div class="why"><b>Why it matters</b><p>For a government, the question is less "which AI is best" and more "which one do we have a contract with". That favours the vendor already in the office, which here is Microsoft.</p></div>

Source: [svt.se](https://www.svt.se/nyheter/inrikes/ai-tjanster-sparras-pa-regeringskansliet) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. Coding agents get new hands, and a study checks what the extras buy {#coding-agent-harness}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Cursor's agents can now click through desktop apps. Meanwhile, a study finds that a heavier agent setup mostly changes the bill, not the result.</p>

A coding agent is more than a model. The setup around it, called the harness, decides which tools it gets and what it reads first.

#### <span>1 of 2</span> Cursor's agents can use the screen
Cursor's new Computer Use lets an agent see the screen, click and type in desktop apps, including the iOS Simulator. So it can build an app and then test the change itself. You pick it from the @ menu in an agent chat.

#### <span>2 of 2</span> A heavier harness costs more, not better
Two researchers at Shandong University ran the same models through Claude Code, OpenCode and the tiny mini-SWE-agent. Claude Code and mini-SWE-agent scored within 5 points of each other. But with the same model, cost per task varied up to 3 times. The reason is the long set of instructions a harness sends with every step.

<div class="why"><b>Why it matters</b><p>New abilities like screen control are real gains. But the instructions a harness repeats on every step work like a delivery fee added to each order.</p></div>

Source: [cursor.com](https://cursor.com/docs/cloud-agent/self-hosted/computer-use) · <span class="tag tag-official">Official</span> · [flaviocopes.com](https://flaviocopes.com/cursor-computer-use/) · <span class="tag tag-reported">Reported</span> · [arxiv.org](https://arxiv.org/abs/2610.04433) · <span class="tag tag-official">Official</span> · [venturebeat.com](https://venturebeat.com/orchestration/a-coding-agents-harness-can-triple-its-cost-without-making-it-more-accurate-study-finds) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Open source & local AI

### Ollama can now read answers aloud on your own computer {#ollama-speech}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Ollama 0.40.11 adds a small speech model, so a local AI can talk back without any cloud service.</p>

Most voice assistants send your words to a server and back. Ollama now does the speaking part on your own machine.

The release adds Phonon, built on a tiny 31-million-parameter English voice model from Gradium. It can read a chat model's reply aloud while it is still being written. Apps that already use OpenAI's speech API can point to Ollama instead. The same release adds d3, open models from 2B to 27B that answer yes or no, or pick a category, instead of chatting.

The catch: Phonon comes with English voices only, and the page names no license.

<div class="why"><b>Why it matters</b><p>Text, thinking and voice can now all stay on one laptop. That is the simplest way to keep a private conversation private.</p></div>

<p class="todo"><b>Try it:</b> <code>ollama run phonon "Hello from Ollama."</code></p>

Source: [github.com/ollama](https://github.com/ollama/ollama/releases/tag/v0.40.11) · <span class="tag tag-official">Official</span> · [docs.ollama.com](https://docs.ollama.com/capabilities/speech) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### AI agents can piece together secrets from files they are allowed to read {#agent-mosaic}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>An agent may read each document it opens, but combining them can reveal something nobody should see.</p>

Companies protect files one by one. If you may read a file, an agent working for you may read it too. The researchers call the gap the "mosaic effect": harmless pieces that add up to a secret.

Daniel Ruiz, Luca Luceri and Emilio Ferrara tested this on AI agents. They built 30 cases from security, medicine and the military, and collected over 12,000 answers. Even with harmless questions, the best model gave away a forbidden conclusion in 7% of answers. Live agent tools leaked more. Some refusals still gave away the answer.

Clear labels and rules helped. But even with them, a third of the simulated answers were still unsafe.

<div class="why"><b>Why it matters</b><p>Access rights decide what an agent may read, not what it may conclude. For companies with personal data, that is a new kind of leak to plan for.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.30418) · <span class="tag tag-official">Official</span>
{: .sources}
