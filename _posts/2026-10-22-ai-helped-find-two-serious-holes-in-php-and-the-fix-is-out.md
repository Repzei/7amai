---
title: "AI helped find two serious holes in PHP, and the fix is out"
summary: "PHP, which runs most websites, patched two severe flaws that AI models helped find. Also: attackers chase AI keys, a new Claude API version, and Europe's compute gap."
date: 2026-10-22 07:00:00 +0200
reviewed: false
checked: true
minutes: 7
explained: { main: "coordinated-disclosure", from: 1, more: ["mixture-of-experts", "open-weight"] }
today:
  - { t: "PHP fixed two severe flaws that let attackers take over servers, and AI models helped find them.", why: "Anyone with a WordPress, Drupal or other PHP site." }
  - { t: "A poisoned LiteLLM update stole keys, and Railway says customer secrets may have been read.", why: "Developers who store AI API keys on servers or platforms." }
  - { t: "Claude's API has its first new version since 2023, and the new SDKs use it by default.", why: "Developers who build on Claude." }
  - { t: "Europe has about 5% of the world's AI compute, and Mistral plans to release Large 4's weights this month.", why: "European companies that want AI on their own servers." }
other_lang_url: /da/2026/10/22/
items:
  - { n: 1, anchor: "php2shell", signal: big, tracks: [general, build], min: 1.5, source: official, number: "70%", number_label: "of all websites run on PHP, according to Wiz" }
  - { n: 2, anchor: "ai-key-attacks", signal: big, tracks: [build], min: 1.5, source: official }
  - { n: 3, anchor: "claude-api-2026-10-21", signal: worth, tracks: [build], min: 1.5, source: official }
  - { n: 4, anchor: "europe-compute", signal: worth, tracks: [europe], min: 1.5, source: official }
  - { n: 5, anchor: "recursive-flint", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 6, anchor: "cache-engineering", signal: worth, tracks: [build], min: 1, source: official }
---

### 1. AI helped find two serious holes in PHP, and the fix is out {#php2shell}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>70%</b><span>of all websites run on PHP, according to Wiz</span></div>

<p class="short"><span>The short version</span>PHP, the language behind most websites, fixed two severe security holes on 21 October. AI models helped find them, so update now.</p>

PHP runs WordPress, Drupal and Joomla, and with them a large part of the web. So a hole in PHP itself is a hole in millions of sites at once.

On 21 October, PHP released fixes for two flaws that let an attacker run their own code on a server without logging in. They score up to 9.2 out of 10 for severity. Security firm Wiz says nearly every PHP version back to 5.4 is affected.

AI helped with much of the finding. Calif found one flaw with OpenAI's GPT-5.6 Sol, as part of OpenAI's Patch the Planet program. Wiz used Gemini 4 Argon and GPT-5.6 Sol, and showed working attacks on WordPress, Drupal and Joomla.

The release did not go to plan. The flaw IDs leaked online, and Calif published a video of a working attack by mistake. So PHP moved the release forward by a day. The US NSA advised taking sites offline if they cannot be patched, TechCrunch reports. No attacks had been reported when the fixes came out.

<div class="why"><b>Why it matters</b><p>Fitting an attack to each PHP version used to be slow, hard work. "With AI this is no longer a barrier," Wiz writes. AI is like a locksmith who works for both sides, so the time between a fix and the first attack is shrinking.</p></div>

<p class="todo"><b>Do this:</b> Update PHP to 8.5.12, 8.4.27, 8.3.36 or 8.2.35. If a web host runs your site, check that it has done so.</p>

Source: [thephp.foundation](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) · <span class="tag tag-official">Official</span> · [wiz.io](https://www.wiz.io/blog/php2shell-php-rce) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/10/21/php-armageddon-openai-googles-wiz-find-ancient-holes-panicking-the-internet/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Attackers go after the keys that pay for AI {#ai-key-attacks}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>A poisoned update of LiteLLM, a popular AI tool, stole passwords and keys. Hosting platform Railway says attackers may also have read its customers' secrets.</p>

An AI API key works like a company credit card. Whoever holds it can run up a bill or reach your data. Two attacks on 21 October went after exactly those keys.

#### <span>1 of 2</span> A poisoned LiteLLM update
LiteLLM sits between apps and AI models, so it often holds the keys to many AI providers. On 21 October, version 1.107.0 appeared on PyPI, Python's package store, with hidden code. It ran every time Python started, even if LiteLLM was never used. It collected SSH keys, cloud passwords and the AI keys stored in LiteLLM's database. PyPI pulled the release within two hours.

#### <span>2 of 2</span> Railway's customer secrets may be out
Railway, a platform for hosting apps, says someone may have read the settings where customers keep their secrets. For some secrets, the attacker may have got the decrypted values, such as API keys and database passwords. Railway thinks this is part of "a series of attacks" on platforms like itself, with AI providers as the end target. It has paused all deployments and warned those providers. Railway does not link its breach to LiteLLM.

<div class="why"><b>Why it matters</b><p>A stolen AI key pays off at once, because the owner pays for every call. Wiz saw attackers testing stolen credentials about 4.5 hours after the theft. So attackers move within hours, not days.</p></div>

<p class="todo"><b>Do this:</b> If you installed LiteLLM 1.107.0 or use Railway, rotate every key that machine or project could reach. Pin LiteLLM to 1.106.2.</p>

Source: [safedep.io](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/) · <span class="tag tag-reported">Reported</span> · [wiz.io](https://www.wiz.io/blog/litellm-compromised-steals-credentials) · <span class="tag tag-reported">Reported</span> · [blog.railway.com](https://blog.railway.com/p/security-disclosure-wednesday-october-21st) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. Claude's first new API version since 2023 drops some old settings {#claude-api-2026-10-21}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Claude's API has a new version, and the new SDKs use it by default. Upgrading can break code that sets temperature or runs behind a proxy.</p>

Every request to Claude's API carries a version date. Until now it was 2023-06-01. On 21 October, Anthropic released version 2026-10-21. New major SDK versions, such as Python 2.0.0 and TypeScript 1.0.0, send it automatically.

Two changes can bite. First, sending temperature, top_p or top_k now returns an error, even at the default value. These settings control how random the answers are. On older models such as Claude Sonnet 4.6, code that lowered temperature for steadier answers loses that effect. Second, the SDKs now send your key in the Authorization header instead of X-Api-Key. A proxy that reads the old header will stop working.

Nothing changes until you upgrade, and a request can stay on the old version.

<div class="why"><b>Why it matters</b><p>Claude 4.7 and later models already accept only the default values. So the new version is like a car maker removing a dial that was already locked in one position. Old code that still reaches for it now gets a clear error instead.</p></div>

<p class="todo"><b>Do this:</b> Before you upgrade the SDK, search your code for temperature, top_p and top_k, and check any gateway that reads X-Api-Key.</p>

Source: [platform.claude.com](https://platform.claude.com/docs/en/release-notes/overview) · <span class="tag tag-official">Official</span> · [platform.claude.com](https://platform.claude.com/docs/en/api/migration-2026-10-21) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. Europe has little AI compute, and Mistral's largest model is about to open {#europe-compute}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Europe</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Europe has about 5% of the world's AI computing power, AP reports. Mistral plans to release the weights of its huge Large 4 model at the end of October.</p>

To train and run AI you need computing power, and most of it sits in the US. That set the tone at Nvidia's conference in Berlin on 21 October.

#### <span>1 of 2</span> Nvidia in Berlin
Europe has about 5% of the world's AI computing capacity, against 75% in the US, AP reports. Nvidia's CEO Jensen Huang said the company invested $10 billion in European startups and partners in the past year.

#### <span>2 of 2</span> Mistral Large 4 trained in Europe
French lab Mistral says it trained Mistral Large 4 on 3,800 Nvidia chips in its own European data centers. The model has about 1 trillion parameters, and 49 billion of them work on each word. It is in public preview now, and Mistral plans to release the weights at the end of October. Mistral's post does not name a license.

<div class="why"><b>Why it matters</b><p>Downloadable weights are like owning the recipe instead of ordering takeaway. A European company can run the model on its own servers, so its data never has to leave for a US cloud.</p></div>

Source: [abcnews.com (AP)](https://abcnews.com/Technology/wireStory/nvidia-ceo-encourages-europes-lagging-ai-sector-offers-137443738) · <span class="tag tag-reported">Reported</span> · [mistral.ai](https://mistral.ai/news/mistral-nvidia-ai-for-industrial-engineering/) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### Flint is a free coding model built to run on your own computer {#recursive-flint}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>AI lab Recursive released Flint, an open coding model for agents. It is a 23 GB download in Ollama, and only a small part of it works on each word.</p>

Coding agents read and write a lot, so running them through a paid API adds up. A model on your own machine costs nothing per task, and your code stays private.

Flint has about 40 billion parameters, but only about 2.5 billion work on each word, so it is fast for its size. It comes under the Apache 2.0 license, and Ollama can start it inside Claude Code with one command.

Recursive reports 74.2% on SWE-bench Verified, a common coding test. Those are its own numbers, and nobody else has checked them yet.

<div class="why"><b>Why it matters</b><p>Think of a large firm where only the right specialists join each meeting. You get the knowledge of a big model at the running cost of a small one. That is why a model this size can run fast on your own machine.</p></div>

<p class="todo"><b>Try it:</b> Run <code>ollama launch claude --model flint</code> to use Flint in Claude Code.</p>

Source: [huggingface.co](https://huggingface.co/RecursiveSI/flint) · <span class="tag tag-official">Official</span> · [ollama.com](https://ollama.com/library/flint) · <span class="tag tag-official">Official</span> · [blogs.nvidia.com](https://blogs.nvidia.com/blog/local-ai-gtc-rtx-dgx-spark-station-sync/) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### Agents get cheaper when they trim their memory instead of rewriting it {#cache-engineering}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Researchers let AI agents delete old tool output straight from the model's working memory. That cut costs by 27.7% and scored slightly higher than summarizing.</p>

A model keeps a cache of what it has already read, so it does not have to read it again. But when an agent rewrites its history to make it shorter, the cache no longer matches. Then the model must read everything again, and you pay for it.

Tianyu Fu and colleagues tried another way. They let the agent drop parts of the cache directly, such as old tool responses, and keep the rest as it is. A matching serving engine, AKV, handles this behind a normal API.

Compared with summarizing once the history gets long, dropping old tool responses cut the average cost by 27.7%. Benchmark scores rose by 1.7 points. It needs their own serving engine, so it is research for now.

<div class="why"><b>Why it matters</b><p>It is like clearing old papers off your desk instead of copying all of them into a short summary. You keep your place, and you only lose what you no longer need.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.28577) · <span class="tag tag-official">Official</span>
{: .sources}
