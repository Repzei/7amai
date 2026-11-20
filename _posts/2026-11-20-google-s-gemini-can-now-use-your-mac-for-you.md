---
title: "Google's Gemini can now use your Mac for you"
summary: "Google's Gemini app can now click and type in your Mac apps in a background window, in the US. Also: Meta's Muse agent showed people other users' data, AI bug reports slowed PostgreSQL, Anthropic's first trading day and GitHub lets agents wait instead of asking."
date: 2026-11-20 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "computer-use", from: 1, more: ["ai-agent", "mixture-of-experts"] }
today:
  - { t: "Google's Gemini app can now use your Mac's apps for you, in the US.", why: "Mac users who pay for Google AI." }
  - { t: "Meta's Muse agent showed staff other people's messages and bank balances, Reuters reports.", why: "Anyone who gives an AI agent access to their apps." }
  - { t: "AI bug reports slowed PostgreSQL 19, and an AI-built curl copy lacks 200 fixes.", why: "Developers who rely on open source." }
  - { t: "Anthropic's shares closed their first day at $97.17, above the $83 price.", why: "Anyone following what AI labs are worth." }
  - { t: "GitHub's command line lets coding agents wait for pull request events.", why: "Developers who run coding agents." }
other_lang_url: /da/2026/11/20/
items:
  - { n: 1, anchor: "gemini-mac-computer-use", signal: big, tracks: [build, general], min: 2, source: official, topic: agent, why: "An agent that can use any app does not need each app to build a special connection for it.", do: "If you try it, give Gemini access only to the apps the task needs.", steps: { title: "How Gemini uses your Mac", list: ["You describe the task", "Gemini works in a background window", "You watch and approve key steps"] } }
  - { n: 2, anchor: "meta-muse-mixups", signal: worth, tracks: [general], min: 1, source: reported, topic: security, why: "An agent that reads all your apps can also mix up whose data is whose.", do: "Before you connect an agent to your bank or chat apps, check which access you can turn off." }
  - { n: 3, anchor: "ai-bugs-open-source", signal: worth, tracks: [build, general], min: 1.5, source: official, number: "200", number_label: "bug fixes curl made in three weeks, missing from an AI-built copy", topic: code, why: "AI makes finding bugs and writing code cheap, but people still have to review and maintain it." }
  - { n: 4, anchor: "anthropic-first-trading-day", signal: worth, tracks: [general], min: 1, source: reported, number: "$97.17", number_label: "closing price on day one, after a first trade at $111.50", topic: money, why: "The price now moves every day, so the market's mood about AI shows in public." }
  - { n: 5, anchor: "gh-event-listen", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "Waiting for a signal is cheaper than asking again and again, for agents too.", do: "If you are in the preview, update gh to v2.105.0 and try gh event listen." }
  - { n: 6, anchor: "tencent-hy4-flash", signal: worth, tracks: [build, europe], min: 1, source: official, number: "12B", number_label: "active parameters per word, out of 220B in total", topic: open, why: "Big open models keep getting cheaper to run, so you can host them yourself." }
  - { n: 7, anchor: "new-research-sound-old", signal: worth, tracks: [general], min: 1, source: official, number: "8%", number_label: "of answers said plainly that a question was still open", topic: research, why: "When you ask AI if an idea is new, it may say no even when it knows the answer is yes.", bars: { title: "Answers that said plainly a question was open", max: 100, rows: [{ l: "Normal", v: 8, t: "8%" }, { l: "Fixed method", v: 95, t: "95%", hl: true }] } }
---

### 1. Google's Gemini can now use your Mac for you {#gemini-mac-computer-use}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">2 min</span></p>

<p class="short"><span>The short version</span>Google's Gemini app for Mac can now click, type and move between your apps to finish a task, in a window of its own. It is for paying users in the US first.</p>

#### <span>1 of 2</span> An agent that works beside you
Most AI chats can only tell you what to do. You still click through the forms yourself.

Now Gemini on the Mac can do the clicking. Google calls it computer use (see Explained below). You describe a task, like filling in shipping quotes from a stack of PDFs. Gemini then works in a separate window, so your own screen stays free.

You see each step live, and you approve key actions before they happen.

It is rolling out in English in the US, for people on Google AI Plus, Pro or Ultra. You need a Mac with an Apple chip and macOS 15 or later.

Apple may follow: it appears to be working on its own agent that uses your Mac, Bloomberg reports, based on a job listing.

The catch: an agent that can click anything can also click the wrong thing. Google says you choose which apps it can open.

#### <span>2 of 2</span> Agents that load tools only when needed
For developers, Google added Tool Retrieval to its Gemini API. An agent with hundreds of tools no longer reads all their instructions on every request. It loads only the tool it needs, so requests stay shorter. It is a free preview.

<div class="why"><b>Why it matters</b><p>Until now, an AI could only use apps that had built a special connection for it. An agent that sees the screen is like a new colleague who uses the same programs you do. Any app works, but you have to watch what it does at first.</p></div>

<p class="todo"><b>Try it:</b> If you try it, give Gemini access only to the apps the task needs.</p>

Sources: [blog.google (Mac)](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/) · <span class="tag tag-official">Official</span> · [blog.google (Tool Retrieval)](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/) · <span class="tag tag-official">Official</span> · [techcrunch.com (Apple)](https://techcrunch.com/2026/11/19/apple-may-be-developing-its-own-ai-agent-that-runs-your-mac/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Meta's Muse agent showed staff other people's private data, Reuters reports {#meta-muse-mixups}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Meta staff say Muse, Meta's personal AI agent, mixed up conversations and showed them data that was not theirs, Reuters reports.</p>

Personal agents are useful because they can read your mail, chats and bank. That also makes a mistake costly.

Muse launched in September. Employees testing it saw requests they never made and bank balances that were not theirs. In one chat about the weather, Muse suddenly listed two bank balances.

Another employee got a reminder about a Signal message, although she says she never gave it access to other apps. She called it "an extreme privacy violation."

Meta says staff use other versions of Muse than the public.

The catch: the report is based on internal posts, and it is not clear whether public users were hit.

<div class="why"><b>Why it matters</b><p>An agent that reads all your apps is like an assistant with keys to every drawer. If it mixes up whose drawer is whose, private things end up in the wrong hands.</p></div>

<p class="todo"><b>Do this:</b> Before you connect an agent to your bank or chat apps, check which access you can turn off.</p>

Source: [techcrunch.com](https://techcrunch.com/2026/11/19/metas-ai-agent-muse-is-mixing-up-conversations-and-exposing-private-data-report-says/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. AI bug reports slowed PostgreSQL, and an AI-built curl copy lacks 200 fixes {#ai-bugs-open-source}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>200</b><span>bug fixes curl made in three weeks, missing from an AI-built copy</span></div>

<p class="short"><span>The short version</span>PostgreSQL 19 came out late, partly because AI tools found so many bugs. And curl's Daniel Stenberg says AI rewrites miss the fixes that people keep making.</p>

Yesterday we wrote that AI found old holes in NGINX and Ruby. Here is the other side: the people who must fix them.

PostgreSQL, one of the most used databases, released version 19 on Thursday. In October, core developer Robert Haas wrote that it was late, mainly because of AI. AI makes old bugs much easier to find, so reviewers spent their time on fixes.

Meanwhile, AI agents rewrote curl, a tool that moves data for countless programs, in the Rust language. That project says it cost $8,600. But curl's Daniel Stenberg notes that curl itself made a little over 200 bug fixes in the same three weeks.

None of them are in the copy.

The popular site RegExr even went offline, saying its old code cannot stand up to AI-driven hacking yet.

<div class="why"><b>Why it matters</b><p>AI made two things cheap: finding bugs and writing code. Reviewing and maintaining code is still slow human work. It is like a factory that suddenly gets ten times more orders, but has the same number of people checking quality.</p></div>

Sources: [postgresql.org](https://www.postgresql.org/about/news/postgresql-19-released-3449/) · <span class="tag tag-official">Official</span> · [rhaas.blogspot.com](https://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html) · <span class="tag tag-official">Official</span> · [daniel.haxx.se](https://daniel.haxx.se/blog/2026/11/17/actual-curl-rewrites-in-rust/) · <span class="tag tag-official">Official</span> · [regexr.com](https://regexr.com/) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. Anthropic's shares closed their first day at $97.17, above the $83 price {#anthropic-first-trading-day}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>$97.17</b><span>closing price on day one, after a first trade at $111.50</span></div>

<p class="short"><span>The short version</span>Anthropic's shares started trading on Nasdaq on Thursday. They jumped, fell back and closed above the price new owners paid.</p>

Yesterday we wrote that Anthropic, the maker of Claude, sold its shares at $83 each. On Thursday the public could trade them for the first time.

The first trade came at $111.50, more than two hours after the market opened, Stock Titan reports. Then the price fell back. It closed at $97.17, and dropped a little more after hours.

A note from us: 7am AI is written with Claude, so we give Anthropic no more room than any other company.

The catch: one day says little about the long run.

<div class="why"><b>Why it matters</b><p>Until now, nobody saw what the market thought of an AI lab from day to day. Now the price is like a public thermometer for AI: you can watch the mood rise and fall.</p></div>

Sources: [stocktitan.net](https://www.stocktitan.net/articles/anthropic-ipo-live-ant-first-trading-day-2026) · <span class="tag tag-reported">Reported</span> · [techcrunch.com](https://techcrunch.com/2026/11/19/anthropic-hits-nasdaq-exchanges-at-110-27-above-ipo-price/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. GitHub's command line lets coding agents wait instead of asking again {#gh-event-listen}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>GitHub's command line tool can now wait for a pull request to change, so agents no longer have to check again and again.</p>

A coding agent that opens a pull request must wait for reviews and tests. Often it asks GitHub every few seconds if anything changed.

The new command gh event listen turns that around. GitHub sends a message when a review arrives, a test run ends or a merge conflict appears.

It needs gh v2.105.0, and the event service behind it is a preview with a waitlist.

<div class="why"><b>Why it matters</b><p>It is the difference between a child asking "are we there yet" every minute and a driver who says when you arrive. Fewer questions mean less wasted cost.</p></div>

<p class="todo"><b>Try it:</b> If you are in the preview, update gh to v2.105.0 and try gh event listen.</p>

Source: [github.blog](https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### Tencent shares Hy4 flash, a large open model that is cheap to run {#tencent-hy4-flash}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>
<div class="number"><b>12B</b><span>active parameters per word, out of 220B in total</span></div>

<p class="short"><span>The short version</span>Tencent has put Hy4 flash on Hugging Face. It is a big model that reads text and images, but it uses only a small part of itself for each word.</p>

Large models are expensive to run because so much of them works at once. Hy4 flash avoids that. It has 220B parameters, but only about 12B work on each word (see Explained below).

On Tencent's own work test, a task costs about an eighth of what DeepSeek's Flash model costs. Tencent ran that test itself.

The catch: this is not a laptop model, and Tencent's examples use a server with many GPUs. Very large services need a separate license, but the EU is not excluded.

<div class="why"><b>Why it matters</b><p>It is like a big hospital where only the right specialists see each patient. You get the knowledge of the whole building, but pay for a few doctors. So a company can run a strong model on its own servers.</p></div>

Source: [huggingface.co](https://huggingface.co/tencent/Hy4-flash) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### AI often says your research idea is old, even when it knows it is new {#new-research-sound-old}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>8%</b><span>of answers said plainly that a question was still open</span></div>

<p class="short"><span>The short version</span>A new paper finds that AI models make open research questions sound already studied, even when a direct check shows they know better.</p>

Many people ask AI whether an idea has been done before. Guy Zyskind tested how honest the answer is. He took questions from newly accepted papers, so nobody had answered them before.

Asked directly, OpenAI's GPT-6-Astra judged 98% of them unstudied. But in normal answers, it said so plainly only 8% of the time.

It made the field sound further along than it was, and all the top systems he tested did the same. A fixed method that checks each cited paper on its own raised Astra's clear answers to 95%.

The catch: it is one author's study, and nobody else has repeated it yet.

<div class="why"><b>Why it matters</b><p>It is like a friend who knows your idea is new. Still, the friend says that someone surely did it already. If you use AI to check an idea, ask it directly whether the question is still open.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.23546) · <span class="tag tag-official">Official</span>
{: .sources}
