---
title: "Anthropic marks Claude's text and shows how to prove which AI answered"
summary: "Text from three older Claude models now carries a hidden watermark, and Anthropic shared a free tool that proves which model wrote an answer. Also: Postman quietly changed developers' coding agents, Apple rates AI companions 18+, and Fal's value doubles."
date: 2026-11-04 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "ai-watermark", from: 1, more: ["context-window", "word-error-rate"] }
today:
  - { t: "Anthropic now watermarks text from older Claude models and shares a tool to prove which model answered.", why: "Anyone who uses Claude to write, and anyone who must check who wrote something." }
  - { t: "Postman's desktop app quietly installed plugins that change how coding agents behave.", why: "Developers who use Postman next to Claude Code, Codex or Copilot." }
  - { t: "Apple will rate apps with romantic AI companions 18+.", why: "Parents, and anyone who builds a chat or companion app." }
  - { t: "Fal, which runs AI video and image models for other firms, doubles its value to $16B.", why: "Anyone following where the AI money goes." }
other_lang_url: /da/2026/11/04/
items:
  - { n: 1, anchor: "anthropic-provenance", signal: big, tracks: [general, europe, build], min: 2, source: official, topic: law, why: "Soon you can ask where a text or an answer came from, instead of having to guess.", steps: { title: "Two ways to show where AI output came from", list: ["Watermark: Claude's word choices carry a hidden pattern", "Proof: a file shows which model gave the answer", "Both can be checked without seeing the model"] } }
  - { n: 2, anchor: "postman-agent-plugins", signal: worth, tracks: [build], min: 1.5, source: official, topic: security, why: "An app that edits your agent's settings can change what the agent does, without you noticing.", do: "Search your agent settings for Postman entries, and remove what you did not choose." }
  - { n: 3, anchor: "apple-companion-18", signal: worth, tracks: [general, build], min: 1, source: official, number: "18+", number_label: "minimum age rating for apps with a romantic or sexual AI companion", topic: law, why: "The age limit no longer depends on each app, because Apple now sets a floor for all of them.", do: "App makers: answer Apple's two new age questions from 16 November." }
  - { n: 4, anchor: "fal-16b", signal: quick, tracks: [general], min: 1, source: reported, topic: money, why: "The money is moving from making AI models to running them for others.", bars: { title: "Fal's value", max: 16, rows: [{ l: "April", v: 8, t: "$8B" }, { l: "Now", v: 16, t: "$16B", hl: true }] } }
  - { n: 5, anchor: "nemotron-transcribe-local", signal: worth, tracks: [build], min: 1, source: official, topic: voice, why: "Meeting notes with speaker names no longer need to leave your building.", number: "40", number_label: "languages NVIDIA's speech model can now transcribe offline in llama.cpp" }
  - { n: 6, anchor: "memento", signal: worth, tracks: [general, build], min: 1.5, source: official, topic: research, why: "A small model that takes good notes can beat a big one that tries to remember everything.", number: "67.8%", number_label: "right answers on whole books for the small model with notes, up from 36.9%", tiles: [{ n: "13.1%", t: "for a GPT-5.5 agent in the same test" }] }
---

### 1. Anthropic marks Claude's text and shows how to prove which AI answered {#anthropic-provenance}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">Europe</span><span class="track">Build</span><span class="track">2 min</span></p>

<p class="short"><span>The short version</span>Text from three older Claude models now carries a hidden watermark. And Anthropic shared a free tool that proves which model wrote an answer.</p>

Was this text written by AI? And did the AI you paid for really answer, or a cheaper one? Today you mostly have to guess. Anthropic took a step on both questions this week.

#### <span>1 of 2</span> A hidden mark in older Claude models
Since August, new Claude models have added a hidden watermark to the text they write. Anthropic does this to meet its promises under the EU AI Act. On Tuesday, it said text from Claude Mythos 5, Opus 4.7 and Sonnet 4.6 now carries the mark too.

You cannot see it. When Claude picks between words that fit equally well, a secret key steers the choice. Someone with the key can later spot the pattern. For now, only some groups can use the checker, such as regulators, media, researchers and schools.

The catch: the mark is weak in short texts. It also fades when someone rewrites every word, and a missing mark does not prove a human wrote the text.

#### <span>2 of 2</span> A proof of which model answered
On Monday, Anthropic and researchers from EPFL in Switzerland and MIT released FlashProve, free to use. It attaches a proof to an answer, which shows the answer came from a specific model. Anyone can check it without seeing the model's secret weights. On an ordinary processor, the check takes about 17 seconds.

The catch: it is a prototype. Making the proof takes about 72 times the computing time of a normal answer. And it only works for short conversations of 1,024 tokens.

<div class="why"><b>Why it matters</b><p>It is like a seal on a letter. The watermark says Claude was involved, and the proof says exactly which model answered. Soon you can ask where a text or an answer came from, instead of having to guess.</p></div>

Source: [platform.claude.com](https://platform.claude.com/docs/en/release-notes/overview) · <span class="tag tag-official">Official</span> · [support.claude.com](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content) · <span class="tag tag-official">Official</span> · [anthropic.com](https://www.anthropic.com/news/claude-text-watermark) · <span class="tag tag-official">Official</span> · [anthropic.com](https://www.anthropic.com/research/provable-inference) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. Postman's app quietly changed how developers' coding agents behave {#postman-agent-plugins}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Postman, a popular tool for testing APIs, installed plugins for Claude Code and Codex without asking. One of them told the agents to use Postman's own skill.</p>

A coding agent follows the instructions in its settings files. So whoever can edit those files can change what the agent does.

On 25 October, a developer reported that Postman 12.33.4 had done just that on a Mac. On launch, the app installed the Postman command line tool and plugins for Claude Code and Codex. It also added a hook that runs when an agent starts. The hook told the agent to load Postman's skill for any "non-trivial" API work. In Codex, the installer even approved its own hook. Since then, others have reported the same after an automatic update, some also in Copilot's settings.

The catch: the reporter does not claim that any data was stolen. A reply that speaks for Postman says the plugins come bundled because users struggled to install them. It promises to "make the opt-in clearer, especially for existing users".

<div class="why"><b>Why it matters</b><p>It is like a shop that slips its own flyer into your assistant's to-do list. Nothing is stolen, but your helper now works a little for someone else. An app that edits your agent's settings can change what the agent does, without you noticing.</p></div>

<p class="todo"><b>Do this:</b> Search your agent settings (such as `~/.claude/settings.json` and `~/.codex/config.toml`) for Postman entries, and remove what you did not choose.</p>

Source: [github.com](https://github.com/postmanlabs/postman-app-support/issues/14370) · <span class="tag tag-official">Official</span> · [learning.postman.com](https://learning.postman.com/docs/postman-plugin/install/detected-agents) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. Apple will rate apps with romantic AI companions 18+ {#apple-companion-18}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>18+</b><span>minimum age rating for apps with a romantic or sexual AI companion</span></div>

<p class="short"><span>The short version</span>Apple will give apps an 18+ rating if they offer a virtual companion with romantic or sexual content. Dating apps get the same rule.</p>

AI companion apps such as Character.AI and Replika let people chat with an AI friend or partner. Many of them are aimed at young people, TechCrunch notes.

On Monday, Apple told developers about two new questions in the App Store's age rating form. One asks whether the app has a virtual companion that "engages a user in sexual or romantic content". If so, the app gets a rating of at least 18+. The other asks whether the app shares your location with other people. The questions appear on 16 November, and all apps must answer them by 12 January 2027.

The catch: an app's own answer decides the rating, so it only works if developers answer honestly.

<div class="why"><b>Why it matters</b><p>Until now, each app chose its own age limit. Now Apple sets a floor that every app with such a companion must meet, so the rule no longer depends on each company's goodwill.</p></div>

<p class="todo"><b>Do this:</b> App makers: answer Apple's two new age questions from 16 November.</p>

Source: [developer.apple.com](https://developer.apple.com/news/?id=yxkh08us) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/03/apple-restricts-dating-apps-and-ai-companions-to-users-18-and-up/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. Fal, which runs AI models for other firms, doubles its value to $16B {#fal-16b}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Fal runs AI video, image and audio models for other companies. Investors now value it at $16B, twice as much as in April.</p>

Most AI money goes to the labs that build models. But someone also has to run those models every time a user makes a picture or a video.

That is Fal's business. It hosts models, many of them open source, and charges customers to use them. This week, Fal said it had raised $1.3B, led by Bessemer, with Nvidia also investing. Bloomberg reports that the round values Fal at $16B, up from $8B in April.

The catch: running models costs a lot of computing power. Rivals like Baseten and Modal are growing fast too. But the high cost of computing keeps the profit on each sale thin for such firms, TechCrunch reports.

<div class="why"><b>Why it matters</b><p>In a gold rush, the people who sell shovels often do well. The money is moving from making AI models to running them for others.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/11/03/ai-inference-startup-fal-doubles-its-valuation-to-16b-as-demand-surges/) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Open source & local AI

### llama.cpp can now turn meetings into text with names, offline {#nemotron-transcribe-local}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>40</b><span>languages NVIDIA's speech model can now transcribe offline in llama.cpp</span></div>

<p class="short"><span>The short version</span>llama.cpp, the free engine behind many local AI apps, now runs NVIDIA's new speech model. It writes out recordings in 40 languages and says who is speaking.</p>

Most meeting notes made by AI are written in someone else's cloud. For a company that must keep its data in-house, that can rule them out.

On 3 November, llama.cpp added support for NVIDIA's Nemotron 3.5 Transcribe. It runs offline on your own machine and can label each speaker. A smaller, compressed version made almost no extra mistakes. On a standard test, it got about 1 word in 100 wrong, the same as the full model. Long recordings are read in 40-second pieces.

The catch: it is a large model, so you need a strong computer. It also has no word timestamps or live transcription yet.

<div class="why"><b>Why it matters</b><p>Think of a court reporter who comes to your office instead of taking the tapes home. Meeting notes with speaker names no longer need to leave your building.</p></div>

Source: [github.com](https://github.com/ggml-org/llama.cpp/pull/31471) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### A small model that takes notes beats GPT-5.5 at reading whole books {#memento}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>

<div class="number"><b>67.8%</b><span>right answers on whole books for the small model with notes, up from 36.9%</span></div>

<p class="short"><span>The short version</span>Researchers taught a small model to read a whole book in pieces and keep a short note. It answered far more questions right than GPT-5.5 in the same test.</p>

An AI can only hold so much text at once. So an agent that reads a long book must forget most of it along the way. The trick is to keep the right notes.

Four researchers trained Qwen3-8B, a small open model, to do just that. Their system, MEMENTO, reads books of up to 2.5M tokens. But it never holds more than 20K at a time. When its memory fills up, it writes itself a note and starts fresh. The small model's score on questions about books rose from 36.9% to 67.8%. A GPT-5.5 agent in the same setup got just 13.1%. MEMENTO even beat reading the whole book at once, which scored 56.7%.

The catch: it is a preprint, and the tests are about books, not code or chat.

<div class="why"><b>Why it matters</b><p>It is like a student with good notes beating one who tries to memorise the whole textbook. A small model that takes good notes can beat a big one that tries to remember everything.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.00244) · <span class="tag tag-official">Official</span>
{: .sources}
