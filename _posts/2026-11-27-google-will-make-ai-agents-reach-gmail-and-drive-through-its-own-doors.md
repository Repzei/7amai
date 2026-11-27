---
title: "Google will make AI agents reach Gmail and Drive through its own doors"
summary: "Google's new terms say AI agents must use its own MCP servers to reach Gmail, Drive and Calendar, and agents that skip them get a small quota from 1 February 2027. Also: Nvidia pauses servers to Southeast Asia, ChatGPT gets one shared limit, prompts that may have gone to ByteDance, llama.cpp 1.1, and bias tests that miss refusals."
date: 2026-11-27 07:00:00 +0100
reviewed: false
checked: false
control: pending
minutes: 7
explained: { main: "api", from: 1, more: ["mcp", "zero-data-retention"] }
today:
  - { t: "Google's new terms make AI agents use its MCP servers for Gmail and Drive.", why: "Anyone who builds or uses an agent that reads email." }
  - { t: "Nvidia reportedly paused servers to four Southeast Asian countries, and S&P may cut its rating.", why: "Anyone who rents AI computing power." }
  - { t: "ChatGPT will count chat and agent work against one shared limit.", why: "Heavy users on Plus, Pro and Business plans." }
  - { t: "A researcher says some OpenRouter hosts passed DeepSeek prompts to ByteDance.", why: "Anyone who sends private data to open models." }
other_lang_url: /da/2026/11/27/
items:
  - { n: 1, anchor: "workspace-agents-mcp", signal: big, tracks: [build, general], min: 2, source: official, number: "1 February 2027", number_label: "when agents that skip Google's MCP servers get a small quota", topic: agent, why: "Agents get their own metered entrance to your inbox, so Google can see them, count them and charge for them.", do: "If your tool lets an agent read Gmail, Drive or Calendar, move it to Google's MCP servers before 1 February 2027.", steps: { title: "What changes for an agent", list: ["It must reach Workspace through Google's MCP servers", "Free use stops at 5,000 requests a day", "From 1 February 2027, direct API calls get the small quota", "Paid MCP use for Gmail, Calendar and Drive is billed from 1 April 2027"] } }
  - { n: 2, anchor: "nvidia-southeast-asia-sp", signal: worth, tracks: [general], min: 1.5, source: reported, number: "24%", number_label: "of China's AI computing power, from data centers like these", topic: chips, why: "Rules about who may use a chip now decide where AI computing power can be built, and that reaches the price of renting it." }
  - { n: 3, anchor: "chatgpt-shared-limit", signal: worth, tracks: [general], min: 1, source: official, topic: price, why: "Chats and agent tasks now draw from one pot, so heavy agent use can leave less room for chatting." }
  - { n: 4, anchor: "openrouter-ark-routing", signal: worth, tracks: [build, general, europe], min: 1.5, source: official, number: "16", number_label: "Novita endpoints removed from OpenRouter", topic: security, why: "Your prompt can pass through companies you never chose, and a privacy label only holds if every one of them keeps it." }
  - { n: 5, anchor: "llama-cpp-1-1", signal: worth, tracks: [build, europe], min: 1.5, source: official, topic: local, why: "Talking to a model on your own machine now takes one free program, not a stack of tools.", do: "Update to llama.cpp 1.1 and try the new Llama Chat page." }
  - { n: 6, anchor: "refusal-not-scored", signal: worth, tracks: [build, general], min: 1.5, source: official, number: "2.15 times", number_label: "as many refusals for prompts about North Koreans as about Americans", topic: research, why: "A refusal is also an answer, and a bias test that throws refusals away cannot see who gets turned away." }
---

### 1. Google will make AI agents reach Gmail and Drive through its own doors {#workspace-agents-mcp}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">2 min</span></p>
<div class="number"><b>1 February 2027</b><span>when agents that skip Google's MCP servers get a small quota</span></div>

<p class="short"><span>The short version</span>Google's new terms say AI agents must use its own MCP servers to reach Gmail, Drive and other Workspace apps. From 1 February 2027, agents that call Google's normal APIs directly get only a small free quota.</p>

AI assistants that sort your email or find a file in Drive often use Google's APIs (see Explained below). Every other app uses the same entrances, so Google could not easily tell an agent from a calendar app.

That changed on Tuesday. Google added an "AI Tools Addendum" to its Workspace terms. A tool that "is or is driven by an AI Agent" must use a Google MCP server, and it must not hide what it is. MCP is the standard way for an assistant to use outside tools. Google's MCP servers for Gmail, Drive, Docs, Sheets, Calendar and other apps are now generally available.

There is a meter attached. The free tier allows 5,000 requests a day, per project and per app. From 1 February 2027, agents that call the normal APIs directly are held to that free quota. From 1 April 2027, paid MCP use for Gmail, Calendar and Drive is billed from the first request.

Builders also may not train models on your data, or keep it after you remove the tool.

The catch: Google decides what counts as an agent. And on paid plans, agents pay from the first request, while ordinary apps get large free daily allowances.

<div class="why"><b>Why it matters</b><p>Think of an office building that gives delivery robots their own door with a counter. Visitors are safer, because the guard sees every robot. But the owner also gets to count each visit and send the bill.</p></div>

<p class="todo"><b>Do this:</b> If your tool lets an agent read Gmail, Drive or Calendar, move it to Google's MCP servers before 1 February 2027.</p>

Sources: [workspace.google.com](https://workspace.google.com/terms/ai-tools) · <span class="tag tag-official">Official</span> · [developers.google.com (quotas)](https://developers.google.com/workspace/tools-safety) · <span class="tag tag-official">Official</span> · [developers.google.com (Gmail)](https://developers.google.com/workspace/gmail/api/guides/quotas) · <span class="tag tag-official">Official</span> · [techstackups.com](https://techstackups.com/articles/google-workspace-ai-agents-mcp/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Nvidia reportedly pauses servers to Southeast Asia, and S&P may cut its rating {#nvidia-southeast-asia-sp}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>24%</b><span>of China's AI computing power, from data centers like these</span></div>

<p class="short"><span>The short version</span>Nvidia has told partners to pause server shipments to four Southeast Asian countries, the Wall Street Journal reports. Separately, S&P is weighing a cut to Nvidia's credit rating.</p>

On Tuesday we wrote that Jensen Huang was back as Nvidia's chief. Since then, two more problems have surfaced.

#### <span>1 of 2</span> A pause for four countries
Nvidia told partners such as Dell and Super Micro to stop server shipments to Malaysia, Singapore, Thailand and Indonesia. It is checking whether its partners there follow US export rules. No end date was given.

The reason is a loophole. Chinese firms reportedly used Nvidia chips from data centers in these countries over the internet. The think tank Institute for Progress estimates that such data centers supply 24% of China's AI computing power. The US closed the loophole earlier this month.

#### <span>2 of 2</span> A possible lower rating
S&P is reviewing Nvidia's credit rating, which could drop from AA to AA-. It cites "weak executive oversight and lack of succession planning" after Huang's exit and return. Nvidia has promised to guarantee 25% of the loans in a large financing plan for AI data centers.

The catch: both reports come through TechCrunch, and Nvidia did not comment on the pause.

<div class="why"><b>Why it matters</b><p>A chip is only useful where it is allowed to run. Export rules now decide where AI data centers get built, and a weaker Nvidia guarantee makes the loans behind them dearer. Both end up in what it costs to rent AI computing power.</p></div>

Sources: [techcrunch.com (pause)](https://techcrunch.com/2026/11/26/nvidia-hits-pause-on-chip-shipments-to-southeast-asia/) · <span class="tag tag-reported">Reported</span> · [techcrunch.com (S&P)](https://techcrunch.com/2026/11/25/sp-considers-nvidia-credit-downgrade-over-governance-and-key-man-risks/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. ChatGPT will count chat and agent work against one shared limit {#chatgpt-shared-limit}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>OpenAI is merging chat and Work, its tools for bigger tasks, in ChatGPT. Both will draw from one shared allowance, and a few of the heaviest users may hit the limit sooner.</p>

A paid ChatGPT plan has limits, but most people never see them. That may change for some.

OpenAI's help page says the allowance will be shared across ChatGPT and Codex, its coding agent, on the Plus, Pro and Business plans. It starts in December, and a small group of Pro users has it already. Chats with the Instant model will not count.

OpenAI says most users will not see more frequent resets. But "a small fraction of its heaviest users may hit their limits sooner," a spokesperson told TechCrunch. Some subscribers worry they will get less use of the stronger reasoning models for the same price. Anthropic made a similar merger in September.

<div class="why"><b>Why it matters</b><p>One shared meter is like a family sharing one phone data plan: the one who streams video decides how much is left for the rest. Here, long agent tasks and quick chats draw from the same pot.</p></div>

Sources: [help.openai.com](https://help.openai.com/en/articles/20001625) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/25/openai-says-heavy-chatgpt-users-may-hit-limits-sooner-as-it-merges-chat-and-work/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. A researcher says some OpenRouter hosts passed DeepSeek prompts to ByteDance {#openrouter-ark-routing}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">Europe</span><span class="track">1½ min</span></p>
<div class="number"><b>16</b><span>Novita endpoints removed from OpenRouter</span></div>

<p class="short"><span>The short version</span>A researcher found signs that three firms hosting DeepSeek models on OpenRouter sent some requests on to ByteDance's own AI service. None of the firms has confirmed it.</p>

Last Sunday we wrote that prompts leaked from AI hosting firms. OpenRouter, which passes your prompt to one of many hosts, dropped several. Now a researcher has followed the trail further.

The researcher behind kendell.dev sent test requests to every OpenRouter host of a DeepSeek model. At Novita, StreamLake and Ant Digital, the replies carried ID formats used by ByteDance's service. Images in the prompts were fetched from ByteDance's cloud in Singapore and Beijing. The probe data is public on GitHub.

The hosts already had trouble. OpenRouter removed Ant Digital's zero-data-retention label (see Explained below) on 22 November. Novita called an earlier forwarding problem a "routing configuration issue", and 16 of its endpoints have since been removed.

The catch: the evidence is indirect, routes change, and the researcher got a grant from OpenRouter.

<div class="why"><b>Why it matters</b><p>Ordering an open model through a router is like booking a taxi in an app. You picked the company, but you may not know who is driving. A privacy promise only holds if every firm in the chain keeps it.</p></div>

Sources: [kendell.dev](https://kendell.dev/blog/arkwrapper/) · <span class="tag tag-official">Official</span> · [github.com](https://github.com/KTibow/the-ark-of-deepseek-v4.1-flash/releases/tag/probe-44960395726) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### llama.cpp 1.1 adds a voice chat app and a public speed board for AMD {#llama-cpp-1-1}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>llama.cpp, the free engine behind many local AI apps, now has a chat page you can talk to. Its makers also launched a dashboard that tracks its speed on AMD chips.</p>

Version 1.1.0 came out on Thursday. Its built-in web page is now called Llama Chat. You can speak to it, and it shows live transcripts. When a model works as an agent, the steps appear grouped together. It also adds new models, several of them for voice.

The same day, the team launched a public dashboard on Hugging Face. Each week it tests speed on two AMD Radeon chips. It measures how fast a model reads 512 tokens (word pieces) of input and writes 128.

The catch: the dashboard covers only two AMD chips, and developers using the old batch interface must update their code.

<div class="why"><b>Why it matters</b><p>Talking to a model on your own machine now takes one free program, not a stack of tools. And AMD buyers get measured numbers instead of forum guesses.</p></div>

<p class="todo"><b>Try it:</b> Update to llama.cpp 1.1 and try the new Llama Chat page.</p>

Sources: [github.com](https://github.com/ggml-org/llama.cpp/releases/tag/v1.1.0) · <span class="tag tag-official">Official</span> · [huggingface.co](https://huggingface.co/blog/ggml-org/llamacpp-amd-bench) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### Bias tests miss it when a model simply refuses some groups {#refusal-not-scored}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>2.15 times</b><span>as many refusals for prompts about North Koreans as about Americans</span></div>

<p class="short"><span>The short version</span>Tools that check AI models for bias only score what the model writes. A new paper shows they miss it when a model refuses to answer about some groups more than others.</p>

Before a model is released, testers often check its answers for bias. An early step is often to drop the refusals, because there is nothing to score.

Afifah Kashif, Malak Sadek, Jin Huang and Hatice Gunes asked what that hides. They ran seven bias tools on two sets of 360 answers from three models. Three tools count loaded words, and four use another AI model as judge.

One model refused prompts about North Koreans 2.15 times as often as prompts about Americans. None of the seven tools caught it. One word list seemed to, but only because the "can" in "I can't" matched an entry.

The catch: the study is small, and it is a preprint.

<div class="why"><b>Why it matters</b><p>It is like a restaurant inspector who rates every dish served, but never notices that some guests are turned away at the door. A refusal is also an answer, and a test that throws it away cannot see who gets left out.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.33690) · <span class="tag tag-official">Official</span>
{: .sources}
