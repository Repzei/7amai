---
title: "A shared ChatGPT link could let a stranger read your private chats"
summary: "Until last week, one shared ChatGPT link could run a stranger's code in your account. OpenAI has fixed it. Also: Apple picks Alibaba's Qwen for China, OpenAI lowers its funding goal, abuse on Europe's data-centre sites, and deadlines for developers."
date: 2026-11-01 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "cross-site-scripting", from: 1, more: ["ai-agent", "token"] }
today:
  - { t: "A shared ChatGPT link could let a stranger read your private chats. It is fixed.", why: "Anyone who uses ChatGPT or opens shared chats." }
  - { t: "Apple will use Alibaba's Qwen for Siri and its AI tools in China.", why: "Anyone curious who builds the AI in their phone." }
  - { t: "OpenAI cut its funding goal from $30B to $20B after a cool response.", why: "Anyone wondering who pays for the AI boom." }
  - { t: "Reporters found unpaid overtime and accidents on Europe's data-centre building sites.", why: "Anyone who cares how AI gets built, close to home." }
  - { t: "OpenAI shuts Agent Builder on 30 November, and Claude Code adds effort control.", why: "Developers on OpenAI's tools or Claude Code." }
other_lang_url: /da/2026/11/01/
items:
  - { n: 1, anchor: "chatgpt-shared-link-takeover", signal: big, tracks: [general, build], min: 1.5, source: official, number: "$5,000", number_label: "bug bounty OpenAI paid for the flaw", topic: security, why: "Opening one link was enough, so the danger came from trust, not from careless clicking.", steps: { title: "How the attack worked", list: ["The attacker shares a chat with a graph", "The victim opens the link and the preview", "Hidden code runs in the victim's account", "It reads a private chat and sends a piece out"] } }
  - { n: 2, anchor: "apple-qwen-china", signal: worth, tracks: [general], min: 1, source: reported, number: "4 November", number_label: "Qwen testing starts in Apple's iOS developer beta", topic: business, why: "The iPhone is the same everywhere, but the AI inside now depends on where you live." }
  - { n: 3, anchor: "openai-funding-target", signal: worth, tracks: [general], min: 1, source: reported, topic: money, why: "When money gets harder to raise, AI labs feel more pressure to earn it from the people who use them.", bars: { title: "OpenAI's funding target", rows: [{ l: "Before", v: 30, t: "$30B" }, { l: "Now", v: 20, t: "$20B", hl: true }] } }
  - { n: 4, anchor: "data-centre-workers", signal: worth, tracks: [europe, general], min: 1.5, source: reported, number: "€100B", number_label: "of data-centre investment the industry expects in Europe by 2030", topic: business, why: "The name on a data centre is often not the firm that pays the people who built it." }
  - { n: 5, anchor: "developer-deadlines", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "Old tools stop on a set date, so the cheap fix is the one made before it.", do: "If you use OpenAI's Agent Builder, Evals or Prompts API, move before 30 November." }
  - { n: 6, anchor: "minicpm-ocr", signal: worth, tracks: [build, europe], min: 1, source: official, number: "1.3B", number_label: "parameters in OpenBMB's open document reader", topic: local, why: "Private paperwork can be made searchable without sending it to a cloud service." }
  - { n: 7, anchor: "mcp-vs-cli", signal: worth, tracks: [build], min: 1, source: official, number: "94.3%", number_label: "of 2,004 paired runs took clearly different paths", topic: research, why: "How you hand tools to an agent is part of the design, not a detail." }
---

### 1. A shared ChatGPT link could let a stranger read your private chats {#chatgpt-shared-link-takeover}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>$5,000</b><span>bug bounty OpenAI paid for the flaw</span></div>

<p class="short"><span>The short version</span>Until last week, opening one shared ChatGPT link could run a stranger's code in your account and read your private chats. OpenAI has fixed it, and you do not need to do anything.</p>

Sharing a ChatGPT chat feels harmless. You send a link, and the other person sees a copy.

Researchers at the security firm Parameter found that a link could do much more. They built a shared chat with a graph and a small HTML preview. When a victim opened it and clicked Preview once, their code ran inside the victim's own ChatGPT session.

From there, the code could act as the victim. In the test, it listed the victim's recent chats, opened a private one and sent a piece of it to an outside server. In effect, the researchers say, they could take over the account.

The trick was a chain of small gaps. A maths library used for graphs accepted messages without checking the sender, so the preview could slip code into the page.

Parameter reported it on 18 October. OpenAI raised its severity from P2 to P1 and confirmed the fix on 26 October. It paid a $5,000 bounty, which Simon Willison calls "a bit cheap for a vulnerability this serious."

The catch: the researchers report no sign that anyone used it before the fix.

<div class="why"><b>Why it matters</b><p>This is cross-site scripting: outside code runs as if it were part of the site, so it gets your login too. It is like a letter that, once opened, can sign cheques in your name. Opening one link was enough, so the danger came from trust, not from careless clicking.</p></div>

Source: [parameter.ai](https://www.parameter.ai/labs/we-found-a-gap-at-openai) · <span class="tag tag-official">Official</span> · [simonwillison.net](https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Apple will use Alibaba's Qwen for Siri and its AI tools in China {#apple-qwen-china}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>4 November</b><span>Qwen testing starts in Apple's iOS developer beta</span></div>

<p class="short"><span>The short version</span>Alibaba says its Qwen models will run Siri and Apple's other AI features for iPhone users in China. Testing starts on 4 November.</p>

In China, AI services must be filed with the regulator. Apple Intelligence, Apple's set of AI features, passed that step in July.

On Saturday, Alibaba said Qwen will power Siri, Writing Tools and Visual Intelligence for users in China. Testing starts in the iOS developer beta on 4 November. The full rollout follows with iOS 27.3 in December, according to Alibaba.

Users choose whether to switch it on and what to share. Alibaba says it will not train its models on their requests or answers.

The catch: the news comes from Alibaba, through China's state news agency Xinhua. The report quotes no one from Apple and gives no price for the deal.

<div class="why"><b>Why it matters</b><p>It is like a car maker that fits a different engine in each country. The iPhone is the same everywhere, but the AI inside now depends on where you live.</p></div>

Source: [news.cgtn.com](https://news.cgtn.com/news/2026-10-31/Alibaba-s-Qwen-to-integrate-into-Apple-Intelligence-in-landmark-deal-1RHilSeJsbK/p.html) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. OpenAI cuts its funding goal to $20B after a cool response {#openai-funding-target}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>OpenAI has lowered the target for its new funding round from $30B to $20B, the Financial Times reports. Some big investors were lukewarm.</p>

Yesterday we wrote that investors balk at AI's bills. Now that mood has reached the biggest AI lab.

OpenAI had aimed to raise $30B. The goal is now $20B, says the Financial Times. So far $11B is secured, and some large investors were "tepid", says the Wall Street Journal.

Investors from the United Arab Emirates lead the round, and a later offer to wealthy individuals could lift it to the goal.

The catch: $20B is still a huge sum. And the timing was poor, TechCrunch writes, because tech shares fell on fears about AI spending.

<div class="why"><b>Why it matters</b><p>It is like a house sale where the bids come in under the asking price. Nothing is broken, but the seller has less power to set the terms. When money gets harder to raise, AI labs feel more pressure to earn it from the people who use them.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/10/31/openai-reportedly-lowers-funding-target-for-new-round/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. Reporters find abuse on Europe's data-centre building sites {#data-centre-workers}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Europe</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>€100B</b><span>of data-centre investment the industry expects in Europe by 2030</span></div>

<p class="short"><span>The short version</span>Reporters in eight countries found unpaid overtime, poor housing and serious accidents on sites building data centres for Google, Microsoft and Amazon. One trail leads to Denmark.</p>

AI runs in data centres, and the industry expects €100B of investment in Europe by 2030. Investigate Europe looked at the people who do the building.

With partners such as the Guardian and Le Monde, it found weeks of up to 60 hours without overtime pay. Workers described rats in their housing, and one at a Microsoft site near Gävle in Sweden had tuberculosis. In Belgium, an electrician at a Google site was badly burned by an electric blast.

Witnesses say about 40 men moved from Gävle to Microsoft's site in Høje Taastrup in May. The Danish union 3F has not managed to reach them.

The catch: the companies deny wrongdoing or point to their rules for suppliers. Most problems sit with subcontractors several links down the chain.

<div class="why"><b>Why it matters</b><p>It is like hiring one builder who hires ten others. The name on a data centre is often not the firm that pays the people who built it. The EU plans a law, the Quality Jobs Act, that would make firms share responsibility down the chain.</p></div>

Source: [techpolicy.press](https://www.techpolicy.press/electrocutions-intimidation-and-wage-theft-haunt-europes-data-center-workers/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. OpenAI shuts Agent Builder on 30 November, and Claude Code adds effort control {#developer-deadlines}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Developers on OpenAI's Agent Builder, Evals or Prompts API have until 30 November to move. Claude Code also got a setting that can make helper agents cheaper.</p>

#### <span>1 of 2</span> OpenAI's tools reach their end date
Since 31 October, existing OpenAI Evals can only be read. On 30 November, Evals, the Prompts API and Agent Builder shut down. For Agent Builder, OpenAI points to its Agents SDK or ChatGPT Workspace Agents. On 11 December, older models such as gpt-5 and o3 follow.

#### <span>2 of 2</span> Claude Code lets helper agents think less
Claude Code 2.1.316 adds a setting that lets sub-agents run at a lower effort level than the main session. So small helper tasks can cost less.

<div class="why"><b>Why it matters</b><p>It is like a lease that ends: the office works until the day it does not. Old tools stop on a set date, so the cheap fix is the one made before it.</p></div>

<p class="todo"><b>Do this:</b> If you use OpenAI's Agent Builder, Evals or Prompts API, move before 30 November.</p>

Source: [developers.openai.com](https://developers.openai.com/api/docs/deprecations) · <span class="tag tag-official">Official</span> · [github.com](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### A small open model turns scanned documents into clean text on your own machine {#minicpm-ocr}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>
<div class="number"><b>1.3B</b><span>parameters in OpenBMB's open document reader</span></div>

<p class="short"><span>The short version</span>OpenBMB released MiniCPM-OCR 1.0, a small open model that reads scans and PDFs, tables and formulas included. It runs in Ollama and llama.cpp.</p>

Scanned invoices and contracts are hard to search. But sending them to a cloud service means handing over private documents.

MiniCPM-OCR reads a page in order and writes it out as Markdown, with tables and formulas kept. At about 1.3B parameters it is small for a model that reads images, and the weights are free to use under the Apache 2.0 licence.

The catch: the scores come from OpenBMB's own page, not an outside test. Baidu released a free OCR model too, as we wrote on 27 October, and we found no independent comparison of the two.

<div class="why"><b>Why it matters</b><p>It is like a scanner that also types the page out for you, without the page leaving the office. Private paperwork can be made searchable without sending it to a cloud service.</p></div>

Source: [huggingface.co](https://huggingface.co/openbmb/MiniCPM-OCR-1.0) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### The same tools in a different format change how AI agents work {#mcp-vs-cli}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>94.3%</b><span>of 2,004 paired runs took clearly different paths</span></div>

<p class="short"><span>The short version</span>Researchers gave AI agents the same tools twice, once through MCP and once as command-line commands. The format alone changed how well and how cheaply they solved tasks.</p>

AI agents use tools to search files, run code and call services. Developers can offer them through MCP, a standard for plugging tools into AI models, or as plain commands.

Many assume the format does not matter. Zhenning Shi and colleagues tested that, building both formats from one shared description.

Across six models and three test environments, it mattered. In 94.3% of 2,004 paired runs, the agent took clearly different paths depending on the format. Small differences early on grew in later steps.

Their fix, DART, keeps the agent's decisions and repairs only format details. It raised scores in all six settings.

The catch: it is a preprint, tested in three environments, so real products may behave differently.

<div class="why"><b>Why it matters</b><p>It is like giving a cook the same recipe in grams and in cups: the same dish on paper, a different one on the plate. How you hand tools to an agent is part of the design, not a detail.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.34298) · <span class="tag tag-official">Official</span>
{: .sources}
