---
title: "Versine lets AI assistants send money with your approval"
summary: "A startup called Versine lets you pay people by asking your AI assistant. Every payment needs your passkey, or a cap you set in advance. Also: Tidal deletes songs made fully by AI, Anthropic's shares slip under their sale price, hobby searches find planet candidates, and an open image model fixes its own text."
date: 2026-11-25 07:00:00 +0100
reviewed: false
checked: false
control: pending
minutes: 7
explained: { main: "mcp", from: 1, more: ["ai-agent", "open-weight"] }
today:
  - { t: "Versine lets an AI assistant send money for you, within limits you set.", why: "Anyone thinking of letting an assistant pay for things." }
  - { t: "Tidal will delete songs made fully by AI from 9 December.", why: "Anyone who streams music or uploads it." }
  - { t: "Anthropic's shares fell under their sale price, while Sierra doubled its value.", why: "Anyone watching how investors judge AI companies." }
  - { t: "Two people used OpenAI's coding tools to flag possible new planets.", why: "Anyone curious what AI tools do in real science." }
  - { t: "SenseTime released an open image model that fixes its own pictures.", why: "Designers and developers who make images with AI." }
other_lang_url: /da/2026/11/25/
items:
  - { n: 1, anchor: "versine-chat-payments", signal: worth, tracks: [build, general], min: 1.5, source: official, topic: agent, why: "An assistant that can pay is useful, but money you cannot claw back needs hard limits in front of it.", steps: { title: "How a Versine payment works", list: ["You ask your assistant to pay someone", "Versine sends a request to its app", "You approve it with your passkey", "The money moves and cannot be reversed"] } }
  - { n: 2, anchor: "tidal-ai-tracks", signal: worth, tracks: [general], min: 1, source: reported, number: "43%", number_label: "of uploads to Tidal in 90 days were made fully by AI", topic: news, why: "When almost half of new uploads come from AI, a music service has to decide what it is for." }
  - { n: 3, anchor: "ai-share-prices", signal: worth, tracks: [general], min: 1, source: reported, number: "$76", number_label: "Anthropic's low on Tuesday, under its $83 sale price", topic: money, why: "Investors still pay up for AI firms with business customers, but no longer for every AI share.", bars: { title: "Anthropic's share price", max: 110, rows: [{ l: "Sold at", v: 83, t: "$83" }, { l: "Tuesday low", v: 76, t: "$76", hl: true }] } }
  - { n: 4, anchor: "openai-exoplanets", signal: quick, tracks: [general], min: 1, source: official, number: "19 million", number_label: "stars searched in one of the two hobby projects", topic: research, why: "Work that needed a research group can now be done by one person with public data." }
  - { n: 5, anchor: "sensenova-u1-6", signal: quick, tracks: [build], min: 1, source: official, number: "92.28", number_label: "points on a text-in-images test, up from 86.04 in one pass", topic: image, why: "A model that checks its own picture catches the broken text before you have to." }
  - { n: 6, anchor: "songe-local-training", signal: worth, tracks: [build, europe], min: 1.5, source: official, topic: local, why: "A local model that learns from your corrections gets more useful, and nothing leaves your machine.", do: "If you run a local model with a coding agent, try Songe and start with a Quick Dream." }
  - { n: 7, anchor: "muted-distillation", signal: worth, tracks: [build], min: 1, source: official, number: "57%", number_label: "fewer words written per task in the researchers' test", topic: research, why: "Small agents get cheaper when their teacher grades what they did, not how they thought." }
---

### 1. Versine lets AI assistants send money with your approval {#versine-chat-payments}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>A startup called Versine lets you pay people by asking your AI assistant. Every payment needs your fingerprint or face, unless you set a cap in advance.</p>

Assistants can book, search and write for you. Paying has stayed off limits, because a wrong payment is hard to undo. Versine, which launched on Tuesday, is one answer.

It connects through MCP (see Explained below), the standard that lets an assistant use outside services. You ask ChatGPT, Claude or Gemini to send money, and Versine sends a request to its own app. You approve it there with your passkey, so the phone signs the payment you see on screen.

You can also hand over some of that control. Each assistant can get a cap, such as $30 it may send without asking. Trusted people can be paid without approval, within a weekly limit.

There are real catches. The founders say payments are final by design, so there is no dispute button if an assistant is tricked. It is only for US residents over 18, and the company says it is not a bank.

<div class="why"><b>Why it matters</b><p>Giving an assistant a budget is like handing a teenager a prepaid card instead of your wallet. It only works if the card has a limit. That limit is the part worth reading before you connect anything.</p></div>

Sources: [versine.com](https://versine.com) · <span class="tag tag-official">Official</span> · [news.ycombinator.com](https://news.ycombinator.com/item?id=50634426) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. Tidal will delete songs made fully by AI, starting 9 December {#tidal-ai-tracks}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>43%</b><span>of uploads to Tidal in 90 days were made fully by AI</span></div>

<p class="short"><span>The short version</span>Tidal says it will remove tracks made entirely by AI from 9 December. It expects to delete more than 29 million songs by the end of the year.</p>

In June, Tidal stopped paying royalties on fully AI-made songs and tagged them. That did not slow the flood. Robert Anderson, who leads Tidal Music, says more than 43% of uploads in the past 90 days were made fully by AI, TechCrunch reports.

So Tidal is going further and deleting them. By its own count, about 27 million such tracks sit in the catalogue. That is 6.3% of it, and 96% of them have never been streamed once. Songs made with AI help can stay.

The catch: Tidal announced this on social media, not in a policy document. It has not said how it decides that a track is fully AI-made. That line is where every argument will sit.

<div class="why"><b>Why it matters</b><p>Streaming services pay out of one pot, so every uploaded track takes a slice. If almost half of new uploads are machine-made and nobody plays them, the service has to decide whether it is a library or a warehouse.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/11/24/tidal-to-ban-and-remove-millions-of-ai-generated-tracks-as-ai-slop-inundates-music-streaming/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. Anthropic's shares fell under their sale price, while Sierra doubled to $30B {#ai-share-prices}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Anthropic's shares traded as low as $76 on Tuesday, below the $83 they were sold at. The same week, the agent startup Sierra raised money at twice its old value.</p>

Anthropic listed on Nasdaq last week at $83 a share, and closed its first day at $97.17, as we wrote on 20 November. By midday Tuesday it was down to $76, nearly 12% below Monday's close, TechCrunch reports. Nvidia fell more than 7% the same morning, giving back part of Monday's jump after Jensen Huang returned as chief executive.

A share below its sale price matters, because banks normally price an offering under what they expect.

Private money looks different. On Monday, Sierra, which builds customer-service agents, raised $1.75B at a $30B value, double its price six months ago. Sierra says its yearly revenue rate doubled to $400M in five months.

<div class="why"><b>Why it matters</b><p>Two markets are judging AI with different yardsticks. Public investors ask what a company earns now. Private ones still pay for growth, as long as paying business customers stand behind it.</p></div>

Sources: [techcrunch.com (Anthropic)](https://techcrunch.com/2026/11/24/anthropic-shares-fall-below-ipo-price-a-worrying-sign-for-ai-startups/) · <span class="tag tag-reported">Reported</span> · [techcrunch.com (Sierra)](https://techcrunch.com/2026/11/23/sierra-doubles-valuation-to-30b-within-six-months-as-demand-for-ai-in-cx-takes-off/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. Two hobby searches used OpenAI's tools to flag possible new planets {#openai-exoplanets}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>19 million</b><span>stars searched in one of the two hobby projects</span></div>

<p class="short"><span>The short version</span>Two people used OpenAI's coding tools to search public telescope data for planets. Astronomers are now checking their candidates, and none are confirmed planets.</p>

A planet passing in front of its star dims the light a little, every orbit. Finding that pattern is a software problem, which suits a coding tool.

OpenAI says one of its engineers, Kevin Bond, used Codex to read published methods and build a search. He ran it over about 100,000 stars from the Kepler telescope. It flagged two new candidates, with dips every 13.8 and 4.8 days.

Ethan Byrd, who runs the startup Primitive, searched about 19 million stars. He got 49 candidates, and one is now with NASA researchers.

The catch: candidates are not planets. Two stars crossing each other can make the same dip, and confirming one can take years. A SETI astronomer ran his own search, and found two of Bond's signals.

<div class="why"><b>Why it matters</b><p>The data was public for years. What changed is the work in front of it. Reading the research and writing the code is no longer a job for a group.</p></div>

Source: [openai.com](https://openai.com/index/searching-for-distant-planets-with-astra/) · <span class="tag tag-official">Official</span>
{: .sources}

### 5. SenseTime's open image model checks its own pictures and fixes the text {#sensenova-u1-6}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>92.28</b><span>points on a text-in-images test, up from 86.04 in one pass</span></div>

<p class="short"><span>The short version</span>SenseTime released SenseNova U1.6, an 8B open-weight image model. It draws a picture, compares it to your prompt, and then produces a corrected version.</p>

AI pictures still get text wrong. Letters go missing on a poster, and a chart gets the wrong labels. Usually you spot it and ask again.

U1.6, released on Tuesday, does that step itself. It drafts the image, reads it back against the prompt, and draws a corrected version. On SenseTime's own test of dense infographics, that lifts the score from 86.04 to 92.28 points of 100.

The weights are on Hugging Face and the code on GitHub under Apache 2.0, with ComfyUI support. SenseTime says it needs about 24 GB of graphics memory.

The catch: the numbers are SenseTime's own, and the test was built for infographics.

<div class="why"><b>Why it matters</b><p>It is like a printer that checks the page and prints it again. The looking and asking again moves into the model.</p></div>

Sources: [sensetime.com](https://www.sensetime.com/cn/news/sensenova-u1-6-open-source-20261124-1152) · <span class="tag tag-official">Official</span> · [github.com](https://github.com/OpenSenseNova/SenseNova-U1) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### Songe trains your local model on your own corrections while the machine idles {#songe-local-training}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Songe is a free tool that sits between your coding agent and your local model. It writes down your corrections and trains the model on them while you are away.</p>

A local model does not remember that you told it yesterday to stop writing comments. Each session starts over.

Songe, which reached the Hacker News front page on Tuesday, records what happens after each step: tool errors, failed commands, and your corrections.

It then has two modes. A "Quick Dream" takes minutes and adds your preferences to the model's instructions. A "Deep Dream" takes an hour or more, and trains a small add-on from practice tasks it writes itself.

A new version is only used if it beats the old one on your own conversations, and one click rolls it back. The project says nothing leaves your machine.

The catch: it is early, with 713 stars and no releases yet. Training needs a graphics card or Apple Silicon.

<div class="why"><b>Why it matters</b><p>It is the difference between a new temp worker every morning and one who remembers how you like things done. Your corrections stop being lost work.</p></div>

<p class="todo"><b>Try it:</b> If you run a local model with a coding agent, try Songe and start with a Quick Dream, which you can undo.</p>

Source: [github.com](https://github.com/sous-labs/songe) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### An agent wrote 57% fewer words when its teacher stopped reading its thinking {#muted-distillation}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>57%</b><span>fewer words written per task in the researchers' test</span></div>

<p class="short"><span>The short version</span>Researchers found that a small agent trained by a bigger model gets steadily more long-winded. Hiding its thinking from the teacher fixes that.</p>

Small models are often trained by watching a big one and being corrected as they work. The problem the authors describe is that the student's reasoning then grows longer and longer, which costs money on every task.

Yuwei Zhang and six colleagues point at the correcting itself. The teacher sees the student's thinking and grades that too, so the student learns to produce more of it. Their change, muted distillation, hides the thinking, so the teacher grades only the actions.

On a test of office tasks, the trained agent wrote 57% fewer words per task at the same accuracy. On a spreadsheet test it wrote 53% fewer, and got 4.8 points better at first-try answers.

The catch: the page marks it as ongoing work, nobody outside has checked it, and both tests are benchmarks.

<div class="why"><b>Why it matters</b><p>Every word an agent writes is on the bill. If a teacher grades the result instead of the mumbling, the same work gets cheaper without the agent getting worse.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.28445) · <span class="tag tag-official">Official</span>
{: .sources}
