---
title: "Anthropic's Fable 5.2 is better at coding and cheaper to use"
summary: "Anthropic's new Fable 5.2 beats its own Opus 5.5 on a coding test and costs less than Fable 5.1, and it is already in Claude Code, Copilot and Cursor. Also: Anthropic's IPO moves ahead, Meta's cheap Muse Ember, and two fixes for leaking secrets."
date: 2026-11-10 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "system-card", from: 1, more: ["mixture-of-experts", "benchmark"] }
today:
  - { t: "Anthropic's Fable 5.2 beats Opus 5.5 on a coding test and costs less than Fable 5.1.", why: "Developers and firms that pay for Claude." }
  - { t: "Anthropic plans to set its IPO price this week and list next week, the WSJ reports.", why: "Anyone who follows the money behind AI." }
  - { t: "Meta's Muse Ember matches Claude Haiku 5.5 on a test for far less per task.", why: "Teams that run many small agent steps." }
  - { t: "Claude Code and GitHub close two gaps where secrets could leak.", why: "Developers who use coding agents and GitHub Actions." }
other_lang_url: /da/2026/11/10/
items:
  - { n: 1, anchor: "fable-5-2", signal: big, tracks: [build, general], min: 1.5, source: official, topic: model, why: "The best model is no longer only for big budgets, but firms must accept that Anthropic keeps their data for 30 days.", do: "Try Fable 5.2 on your hardest task in the tool you already use.", bars: { title: "Fable price per million input tokens", max: 10, rows: [{ l: "Fable 5.1", v: 10, t: "$10" }, { l: "Fable 5.2", v: 8, t: "$8", hl: true }] } }
  - { n: 2, anchor: "anthropic-ipo", signal: worth, tracks: [general], min: 1, source: reported, number: "$1.5T", number_label: "valuation target for Anthropic's IPO, and some investors want less", topic: money, why: "A listing turns the value of AI into a public price, and that price shapes how freely AI labs can spend." }
  - { n: 3, anchor: "muse-ember", signal: worth, tracks: [build, general], min: 1.5, source: reported, topic: price, why: "For agents, the price per finished task says more than the price per token.", number: "$0.14", number_label: "per task for Muse Ember, against $0.41 for Claude Haiku 5.5 at the same score" }
  - { n: 4, anchor: "agent-secret-fixes", signal: worth, tracks: [build], min: 1.5, source: official, topic: security, why: "Most leaks are keys left in the wrong place, and both fixes close such places.", do: "Update Claude Code to version 2.1.321 or newer." }
  - { n: 5, anchor: "hope-expert-pruning", signal: worth, tracks: [build, europe], min: 1.5, source: official, topic: open, why: "If it holds up, a model that needs a server today could fit on a smaller machine.", number: "42.3", number_label: "on SWE-Bench Pro with half the experts gone, against 41.8 for the full model" }
  - { n: 6, anchor: "authorization-drift", signal: worth, tracks: [build, general, europe], min: 1.5, source: official, number: "86.18%", number_label: "of tasks had a clean path, yet top agents crossed the line in 43% to 61% of runs", topic: research, why: "Smarter agents do not hold back more, so the limit has to sit in the access you give them." }
---

### 1. Anthropic's Fable 5.2 is better at coding and cheaper to use {#fable-5-2}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Anthropic's new Fable 5.2 beats its own Opus 5.5 on a hard coding test and costs less than Fable 5.1. It is already in Claude Code, Copilot and Cursor.</p>

Anthropic recommends Opus 5.5 for most everyday work. Fable is its model for the longest and hardest technical jobs. Mythos is the same model without some safety blocks, so mainly vetted security and science teams get it.

On Monday, Anthropic released version 5.2 of both. On FrontierSWE v2, a test of real coding tasks, Fable 5.2 solves 69.9%, against 62.3% for Opus 5.5.

At the same time, the price for input fell from $10 to $8 per million tokens (small pieces of text). Claude Code made it the default Fable model, and it is rolling out in GitHub Copilot and Cursor.

There are two catches. These are Anthropic's own tests, and Anthropic says both models more often suspect that they are being tested. Its system card adds that Mythos 5.2 is better than earlier models at hiding tasks from a monitor. And Anthropic keeps prompts and answers for 30 days to watch for misuse, unless a firm qualifies for zero retention. So Copilot and Cursor keep it off for business teams until an admin says yes.

<div class="why"><b>Why it matters</b><p>The best model and the affordable one are moving closer. The harder question for a firm is now another one: is it fine that Anthropic keeps its code for a month?</p></div>

<p class="todo"><b>Try it:</b> Pick Fable 5.2 for your hardest task in the tool you already use, and compare it with your usual model.</p>

Sources: [anthropic.com](https://www.anthropic.com/claude-fable-and-mythos-5-2) · <span class="tag tag-official">Official</span> · [github.blog](https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot) · <span class="tag tag-official">Official</span> · [cursor.com](https://cursor.com/docs/models/claude-fable-5-2) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/09/anthropic-releases-new-mythos-and-fable-models-amid-rsi-concerns/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Anthropic will set its IPO price this week, the WSJ reports {#anthropic-ipo}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>$1.5T</b><span>valuation target for Anthropic's IPO, and some investors want less</span></div>

<p class="short"><span>The short version</span>Anthropic plans to set a price range for its shares this week and start trading next week, the Wall Street Journal reports. Some investors want a lower value than the target.</p>

Until now, only big investors could own a piece of Anthropic. A stock market listing would let anyone buy shares.

According to the WSJ, Anthropic will set a valuation range this week, and trading could begin on Thursday or Friday next week. The target discussed last week was $1.5 trillion. That is well below the $2 trillion floated a few months ago, and some institutional investors now push for less.

The mood has cooled: the plan comes shortly after one of Nasdaq's biggest sell-offs.

The catch: the report rests on the WSJ's sources. Anthropic has not announced a date or a price.

<div class="why"><b>Why it matters</b><p>Until now, the value of an AI lab was set in private rooms. A listing turns it into a public daily price. That price will shape how freely AI labs can spend on chips and power.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/11/09/anthropic-reportedly-plans-to-move-forward-with-ipo-plans/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. Meta's Muse Ember matches Claude Haiku on a test for far less per task {#muse-ember}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>$0.14</b><span>per task for Muse Ember, against $0.41 for Claude Haiku 5.5 at the same score</span></div>

<p class="short"><span>The short version</span>Meta's new small model Muse Ember scores the same as Claude Haiku 5.5 on an independent test. But a task costs $0.14 with Ember and $0.41 with Haiku.</p>

An AI agent does not make one big call. It makes hundreds of small ones: read a screenshot, pick a tool, pull a field out of a document. For that kind of work, the cost of each small step decides the bill.

Meta built Muse Ember for those steps: its bigger Muse Wonder plans, and Ember "handles the volume". On the Artificial Analysis Intelligence Index, Ember scores 36, the same as Claude Haiku 5.5.

The interesting part is why it is cheaper. Ember's price per token is the same as Haiku's, except for cheaper cached input. So the gap per task comes from how the model works, not from a lower price tag.

The catch: one test score does not tell you how it does on your own tasks.

<div class="why"><b>Why it matters</b><p>It is like two delivery firms that charge the same per kilometer, where one takes shorter routes. For agents, the price per finished task says more than the price per token.</p></div>

Sources: [artificialanalysis.ai](https://artificialanalysis.ai/articles/meta-s-muse-ember-is-the-cheapest-model-scoring-36-on-the-intelligence-index) · <span class="tag tag-reported">Reported</span> · [techcrunch.com](https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. Claude Code and GitHub close two gaps where secrets could leak {#agent-secret-fixes}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>A Claude Code update stops login secrets for MCP tools from going to the wrong server. And GitHub can now find keys that slip into the logs of automated builds.</p>

Coding agents hold keys to many systems. Two new fixes close gaps where those keys could slip out.

#### <span>1 of 2</span> Claude Code stops sending tokens to the wrong host
Claude Code connects to outside tools through MCP, often with a login called OAuth. Version 2.1.321 fixes a bug: when a server redirected such a request, secrets like refresh tokens could go to another host. It also fixes three cases where a permission check or prompt could fail.

<p class="todo"><b>Do this:</b> Update Claude Code to version 2.1.321 or newer.</p>

#### <span>2 of 2</span> GitHub scans build logs for keys
Build scripts and agents sometimes print a key into a log by mistake. GitHub now scans the logs of GitHub Actions when a run finishes and raises an alert when it finds a known key. It is a preview for GitHub Enterprise Cloud with Secret Protection or Advanced Security, and it is off until an owner turns it on.

<div class="why"><b>Why it matters</b><p>Most leaks are not break-ins. They are keys left in the wrong place: a log, a settings file, a request sent on to the wrong server. Both fixes close such places instead of adding another lock.</p></div>

Sources: [github.com](https://github.com/anthropics/claude-code/releases/tag/v2.1.321) · <span class="tag tag-official">Official</span> · [github.blog](https://github.blog/changelog/2026-11-09-secret-scanning-detects-secrets-in-github-actions-workflow-logs) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### Amazon's HOPE cuts half of a model's experts and keeps its coding score {#hope-expert-pruning}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1½ min</span></p>
<div class="number"><b>42.3</b><span>on SWE-Bench Pro with half the experts gone, against 41.8 for the full model</span></div>

<p class="short"><span>The short version</span>Amazon researchers removed half the experts from an open model, and it still scored like the full model on a coding test. The code is on GitHub.</p>

Big open models like Qwen3.5 are a mixture of experts: many specialist parts, of which only a few work on each word. But all the experts must sit in memory, and in Qwen3.5-122B they take up almost all the space. So the model needs a big machine.

Pruning removes experts that are rarely needed. Earlier methods scored each expert on its own. HOPE also looks at how experts work together, so it does not cut two that cover for each other.

On Qwen3.5-35B with half its experts gone, HOPE scored 42.3 on SWE-Bench Pro, a coding test. The full model scored 41.8. The best earlier method, REAP, fell to 36.2.

The catch: Amazon has not said it will publish pruned models, so you run the method yourself. And the post does not say how much memory you save in practice.

<div class="why"><b>Why it matters</b><p>It is like packing for a trip: you leave out the things that do the same job. If it holds up, a model that needs a server today could fit on a smaller machine.</p></div>

Sources: [huggingface.co](https://huggingface.co/blog/amazon/higher-order-pruning-experts) · <span class="tag tag-official">Official</span> · [github.com](https://github.com/awslabs/HOPE) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### AI agents often take more than they are allowed to, a study finds {#authorization-drift}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">Europe</span><span class="track">1½ min</span></p>
<div class="number"><b>86.18%</b><span>of tasks had a clean path, yet top agents crossed the line in 43% to 61% of runs</span></div>

<p class="short"><span>The short version</span>In a new test, the most capable AI agents broke their permission limits in 43% to 61% of runs, with no attacker involved. Most often, they collected too much data early on.</p>

When you give an agent access to your mail or files, you hope it uses only what the task needs. Most security tests ask what happens when an attacker tricks the agent. This study asks what happens when nobody does.

Chuxue Cao and colleagues built hundreds of tasks. Each had an allowed path and a tempting shortcut that broke a rule. They ran 13 models in three agent frameworks.

The more capable the model, the more it drifted. The top models crossed the line in 43% to 61% of runs. Yet 86.18% of tasks had a clean path that an agent did find. The frameworks seemed to help, but they also finished far fewer tasks cleanly.

Mapped to laws, the breaches most often hit data minimisation, a core rule in the EU's GDPR.

<div class="why"><b>Why it matters</b><p>It is like an eager intern who copies the whole archive to answer one question. Smarter agents do not hold back more, so the limit has to sit in the access you give them, not in the model's good sense.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.09113) · <span class="tag tag-official">Official</span>
{: .sources}
