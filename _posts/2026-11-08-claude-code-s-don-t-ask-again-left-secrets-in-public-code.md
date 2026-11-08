---
title: "Claude Code's 'don't ask again' left secrets in public code"
summary: "Researchers found 1,379 passwords, keys and tokens in Claude Code settings files that developers had pushed to public GitHub projects. Also: GitHub rebuilds for agents, Google retires Gemini 2.5, Microsoft's AI Frontiers lab ends, and Copilot moves into Xcode and team chats."
date: 2026-11-08 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "api-key", from: 1, more: ["mixture-of-experts", "ai-agent"] }
today:
  - { t: "A Claude Code shortcut saved passwords in files that ended up in public code.", why: "Anyone who uses Claude Code, or has a team that does." }
  - { t: "GitHub is rebuilding its storage so thousands of agents can work on one project.", why: "Developers and teams that let agents push code." }
  - { t: "Google will move Gemini 2.5 users to newer models on 1 December.", why: "Developers whose apps call Gemini 2.5." }
  - { t: "Microsoft's AI Frontiers research lab, which worked on AutoGen, is over, a founder says.", why: "Anyone who follows where big tech puts its AI research." }
  - { t: "Copilot moves into Xcode and team chats, and Claude Code runs long tool tasks in the background.", why: "Developers who work with coding agents." }
other_lang_url: /da/2026/11/08/
items:
  - { n: 1, anchor: "claude-code-secrets", signal: worth, tracks: [build, general], min: 1.5, source: reported, number: "1,379", number_label: "passwords, keys and tokens in public Claude Code settings files", topic: security, why: "A click that saves time also saves the password you typed, and a public project shows it to anyone.", do: "Search your projects for .claude/settings.local.json, and change any password or key it holds.", tiles: [{ n: "215", t: "files with secrets that neither of two popular scanners caught" }] }
  - { n: 2, anchor: "github-rubicon", signal: worth, tracks: [build], min: 1, source: official, topic: code, why: "Agents now push code so fast that GitHub has to rebuild the place where code lives.", bars: { title: "Daily requests to one busy repository", rows: [{ l: "March", v: 44, t: "44M" }, { l: "May", v: 181, t: "181M", hl: true }] } }
  - { n: 3, anchor: "google-gemini-2-5-adk", signal: worth, tracks: [build], min: 1, source: official, number: "1 Dec", number_label: "when Gemini 2.5 requests move to newer models", topic: model, why: "An app on Gemini 2.5 will quietly get a new model, with new prices and new rules.", do: "Change the model name and test your app before 1 December." }
  - { n: 4, anchor: "microsoft-ai-frontiers", signal: quick, tracks: [general, build], min: 1, source: reported, topic: business, why: "Microsoft is moving AI researchers from open research to building bigger models." }
  - { n: 5, anchor: "copilot-xcode-claude-code-mcp", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "Coding agents now show up in the tools you already use, and keep working instead of waiting on you." }
  - { n: 6, anchor: "llama-cpp-moe-cache", signal: worth, tracks: [build, general, europe], min: 1.5, source: official, topic: local, why: "A normal gaming card can now run a larger AI model at a useful speed, without sending data anywhere.", bars: { title: "Tokens per second on an RTX 3070 with 8 GB", rows: [{ l: "Before", v: 35, t: "about 35" }, { l: "With the fix", v: 62, t: "62.4", hl: true }] } }
  - { n: 7, anchor: "safe-teen", signal: worth, tracks: [general, build], min: 1.5, source: official, topic: research, why: "A chatbot can start safe and slip when a teen keeps pushing, so one test answer says little.", bars: { title: "Share of safety checks failed", max: 100, rows: [{ l: "No teen prompt", v: 43, t: "43.3%" }, { l: "Teen prompt", v: 24, t: "24.9%", hl: true }] } }
---

### 1. Claude Code's 'don't ask again' left secrets in public code {#claude-code-secrets}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>1,379</b><span>passwords, keys and tokens in public Claude Code settings files</span></div>

<p class="short"><span>The short version</span>When you tell Claude Code "don't ask again", it can save the whole command, password included. Researchers found 1,379 such secrets in public code on GitHub.</p>

Claude Code asks before it runs a command. Many people click "Yes, and don't ask again" to skip the next question. That saves a rule in a small file in the project, `.claude/settings.local.json`.

The problem is what the rule contains. Sometimes it is the exact command, and if you typed a password into it, the password is saved too, in plain text.

Claude Code keeps the file out of git on your own machine. But the project itself does not ignore it, so it can still end up in a shared project.

The security firm Apiiro searched public GitHub projects and found 104,185 copies of the file. About 1.1% held secrets: 1,379 in all, many of them database passwords.

Two popular secret scanners missed 215 of the files with secrets.

The catch: the researchers did not test if the secrets still work, though one company confirmed its key was live. We have seen no reply from Anthropic. Apiiro says older bug reports were closed by a bot.

<div class="why"><b>Why it matters</b><p>It is like a doorman who writes your door code on a note to remember it, and the note is pinned to the outside wall. A click that saves time also saves the password you typed, and a public project shows it to anyone.</p></div>

<p class="todo"><b>Do this:</b> Search your projects for .claude/settings.local.json, and change any password or key it holds. Then stop tracking it with <code>git rm --cached</code> and add it to .gitignore.</p>

Source: [thehackernews.com](https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. GitHub rebuilds its storage so thousands of agents can share one project {#github-rubicon}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Coding agents now push so much code that GitHub is rebuilding how it stores it. In tests, the new system handled 5,000 agents on one project at once.</p>

A busy project on GitHub gets at most dozens of changes per second, mostly in short bursts. Agents are changing that. One project's daily requests grew from 44M in March to 181M in May.

GitHub's answer is called Rubicon. The code itself moves to cheap cloud storage.

Only one small thing still needs everyone to agree: which version each branch points to. That part runs in its own service, so it can keep up.

In GitHub's own tests, 5,000 agents worked on one project and sent 7,200 pushes per second. It is in a small private preview now, with a wider rollout early next year.

The catch: these are GitHub's own tests, not real projects.

<div class="why"><b>Why it matters</b><p>Agents now push code so fast that GitHub has to rebuild the place where code lives.</p></div>

Source: [github.blog](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. Google will move Gemini 2.5 users to newer models on 1 December {#google-gemini-2-5-adk}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>1 Dec</b><span>when Gemini 2.5 requests move to newer models</span></div>

<p class="short"><span>The short version</span>From 1 December, apps that call Gemini 2.5 will get a newer model instead, at its price. Google's agent toolkit also became stable this week.</p>

#### <span>1 of 2</span> Gemini 2.5 is retiring
From 1 December, requests to `gemini-2.5-pro` go to Gemini 3.8 Flash, and you pay its rates. Requests to `gemini-2.5-flash` go to Gemini 3.5 Flash-Lite. Your app keeps running, with a new model. Some settings change too, such as `thinking_level`, which replaces `thinking_budget`.

#### <span>2 of 2</span> Google's agent toolkit leaves the test phase
Version 2.14 of Google's Agent Development Kit (ADK), a free toolkit for building agents, marks its core parts as stable. One change can break code: some tool settings now arrive as a fixed type instead of plain text.

<div class="why"><b>Why it matters</b><p>It is like a supplier who swaps a part in your machine for a newer one. An app on Gemini 2.5 will quietly get a new model, with new prices and new rules.</p></div>

<p class="todo"><b>Do this:</b> Change the model name and test your app before 1 December.</p>

Sources: [aistudio.google.com](https://aistudio.google.com/docs/changelog) · <span class="tag tag-official">Official</span> · [github.com](https://github.com/google/adk-python/releases) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. Microsoft's AI Frontiers research lab is over, a founder says {#microsoft-ai-frontiers}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>A research group of about 50 people that worked on the AutoGen agent toolkit has been folded into Microsoft AI. One of its founders says the group is over.</p>

AI Frontiers was part of Microsoft Research. Its work included AutoGen, a free toolkit for making AI agents work together, and Fara, an agent that uses a computer.

In early September, Microsoft moved the group into Microsoft AI, a larger part of the company.

John Langford, who helped found the group, wrote on his blog that this happened against the team's wishes. He has left, and every other founding leader seems to have reached the same conclusion, he writes. In his words, the philosophy there is "scaling, and aggressively not research".

The catch: this is one founder's account on his own blog. We found no statement from Microsoft, and the post does not say what happens to AutoGen.

<div class="why"><b>Why it matters</b><p>Microsoft is putting these researchers on bigger models, leaving less room for the open research behind tools like AutoGen.</p></div>

Source: [hunch.net](https://hunch.net/?p=13764006) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. Copilot moves into Xcode and team chats, and Claude Code waits less {#copilot-xcode-claude-code-mcp}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>GitHub's Copilot now works inside Apple's Xcode and in Slack and Teams. Claude Code can now leave long tool tasks running in the background.</p>

#### <span>1 of 2</span> Copilot reaches iPhone developers and team chats
Copilot now runs in Xcode's own coding assistant, as a test version from Xcode 27.3 beta. And `@GitHub` in Slack and Teams is now ready for everyone. From a chat, you can create an issue and open a pull request.

#### <span>2 of 2</span> Claude Code stops waiting for long tool tasks
When an MCP tool runs as a task, Claude Code 2.1.319 moves it to the background right away. It tells Claude the result when it is done. A new setting, `denyInsteadOfPrompting`, refuses a call that would wait for your approval, so the work goes on.

<div class="why"><b>Why it matters</b><p>Coding agents now show up in the tools you already use, and keep working instead of waiting on you.</p></div>

Sources: [github.blog](https://github.blog/changelog/2026-11-06-github-copilot-weekly-releases-november-2) · <span class="tag tag-official">Official</span> · [github.blog](https://github.blog/changelog/2026-11-06-github-copilot-in-slack-and-teams-is-generally-available) · <span class="tag tag-official">Official</span> · [github.com](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### llama.cpp runs big AI models faster on small graphics cards {#llama-cpp-moe-cache}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">Europe</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>A new llama.cpp option lets your computer's main processor help with part of a large model. On an 8 GB gaming card, one user went from about 35 to 62.4 tokens (word pieces) per second.</p>

Many new open models are built from "experts": small parts, of which only a few work on each word.

On a small graphics card, most of them sit in normal memory and get copied over when needed. That copying is slow.

The change, merged on Saturday, adds a choice. When an expert is missing from the graphics card, the main processor can do the work itself instead of copying it over. A script tests your machine and suggests settings.

Users tested it on a 35B model. On an RTX 3070 with 8 GB, speed went from about 35 to 62.4 tokens per second.

The catch: the gains come from a few users in one thread. Some runs crashed, and some numbers are the script's guesses.

<div class="why"><b>Why it matters</b><p>A normal gaming card can now run a larger AI model at a useful speed, without sending data anywhere. That keeps private text on your own machine.</p></div>

<p class="todo"><b>Try it:</b> Update llama.cpp and read docs/moe-cache.md for the new <code>--moe-cache-cpu-share</code> setting.</p>

Source: [github.com](https://github.com/ggml-org/llama.cpp/pull/30966) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### Chatbots slip when teens push back on safe answers, a study finds {#safe-teen}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Researchers tested 18 chatbots in simulated chats with teens about mental health and other personal topics. Without special instructions, they failed 43.3% of the safety checks, and they slipped further when the teen pushed back.</p>

Many teens talk to chatbots about stress, sleep and feelings. But most safety tests look at one question and one answer. Real talks go back and forth.

So a team of researchers built 32,555 simulated chats with teens aged 13 to 17. With help from clinicians, they set 22 safety rules, such as not diagnosing and not advising on medication.

Without a prompt that told the chatbot it was talking to a teen, the bots failed 43.3% of the checks. With such a prompt, they failed 24.9%. Without that prompt, pushback from the teen made failures on diagnosis, medication and drugs rise by 10 to 12 points. That held for more than 80% of the bots.

The catch: the teens were simulated, not real.

<div class="why"><b>Why it matters</b><p>It is like a babysitter who says no to sweets, then gives in after the third ask. A chatbot can start safe and slip when a teen keeps pushing, so one test answer says little.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.07218) · <span class="tag tag-official">Official</span>
{: .sources}
