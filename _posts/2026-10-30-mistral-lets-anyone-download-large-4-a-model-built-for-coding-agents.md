---
title: "Mistral lets anyone download Large 4, a model built for coding agents"
summary: "France's Mistral released the weights of its 1-trillion-parameter Large 4, trained in Europe for coding and security work. Also: Amazon's AI cloud booms, new limits for AI agents, and New York's chatbot law for children."
date: 2026-10-30 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "reinforcement-learning", from: 1, more: ["mixture-of-experts", "ai-agent"] }
today:
  - { t: "Mistral lets anyone download Large 4, a top open model trained in Europe.", why: "Developers and firms that want AI under their own control." }
  - { t: "Amazon's cloud grew 39%, its fastest in nearly five years, as AI demand surges.", why: "Anyone wondering whether AI makes money." }
  - { t: "OpenAI wrote new rules for its agents, and Claude Code can now fence them in.", why: "Anyone who lets an AI agent work on its own." }
  - { t: "New York bars chatbots from posing as a friend or human to children.", why: "Parents, and anyone who builds or uses chatbots." }
other_lang_url: /da/2026/10/30/
items:
  - { n: 1, anchor: "mistral-large-4", signal: big, tracks: [build, general, europe], min: 2, source: official, number: "1 trillion", number_label: "parameters in Mistral Large 4", topic: open, why: "A firm can run a top coding model in its own data centre, and nobody can raise the price or switch it off.", do: "Try Mistral Large 4 through Mistral's API or OpenRouter before you decide to host it yourself." }
  - { n: 2, anchor: "aws-q3", signal: worth, tracks: [general, build], min: 1, source: official, number: "17x", number_label: "growth in a year in tokens processed by Amazon Bedrock", topic: money, why: "Demand for AI is real, and the sellers are betting it keeps growing for years.", tiles: [{ n: "$220B", t: "Amazon's planned spending this year, mostly on AWS" }] }
  - { n: 3, anchor: "agent-limits", signal: worth, tracks: [general, build], min: 1.5, source: official, topic: agent, why: "Rules on paper help, but a locked door still works when the rules are forgotten.", do: "If you use Claude Code, turn on the new setting that blocks writes outside your working folder." }
  - { n: 4, anchor: "ny-chatbot-law", signal: worth, tracks: [general], min: 1.5, source: reported, number: "$25,000", number_label: "maximum fine per violation of New York's new chatbot law", topic: law, why: "Chatbot makers will have to know who they are talking to, and adults may be asked to prove their age." }
  - { n: 5, anchor: "any-speech-recognizer", signal: worth, tracks: [build, europe], min: 1, source: official, number: "1.55%", number_label: "of words wrong for Parakeet v3 on a standard English test, against 2.12% for Apple's engine", topic: voice, why: "App makers no longer have to accept Apple's speech engine, and the audio can stay on the device." }
  - { n: 6, anchor: "instruction-capacity", signal: worth, tracks: [general, build], min: 1.5, source: official, topic: research, why: "A prompt is not a bottomless list, so shorter and clearer rule files may work better." }
---

### 1. Mistral lets anyone download Large 4, a model built for coding agents {#mistral-large-4}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">Europe</span><span class="track">2 min</span></p>
<div class="number"><b>1 trillion</b><span>parameters in Mistral Large 4</span></div>

<p class="short"><span>The short version</span>French AI lab Mistral released the weights of Mistral Large 4 for anyone to download. On an independent coding test, it ties a top rival while using fewer tokens per task.</p>

Renting a top AI model means sending your data to someone else's servers, at their price. An open-weight model is the alternative: you download the model itself and run it where you want.

On Thursday, Mistral released the weights of Mistral Large 4, a model with 1 trillion parameters. Anyone can download it from Hugging Face, change it and build it into a product. Mistral says it was trained from scratch in Europe.

It has been in preview since earlier this month. Since then, Mistral says, three more weeks of reinforcement learning improved its coding. That is training where the model tries tasks and is rewarded for good results.

The clearest result comes from Artificial Analysis, an independent test group. On its index of coding agent work, Large 4 ties GLM-5.3, a rival open model. But it uses 47% fewer tokens per task on average, so it does the same work with less output.

There are catches. Most other scores come from Mistral's own charts. Companies that sell the model as a hosted service need a separate license.

And it is far too big for a laptop. The smallest version runs on a single Mac, but only one with 512 GB of memory.

It is a mixture of experts, though, so only a small part of it works on each token.

<div class="why"><b>Why it matters</b><p>It is like being able to buy a car instead of only leasing it. A company can now run a top coding model in its own data centre. Nobody can raise the price or switch it off.</p></div>

<p class="todo"><b>Try it:</b> Try Mistral Large 4 through Mistral's API or OpenRouter before you decide to host it yourself.</p>

Source: [mistral.ai](https://mistral.ai/news/mistral-large-4-oss/) · <span class="tag tag-official">Official</span> · [huggingface.co](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) · <span class="tag tag-official">Official</span> · [huggingface.co](https://huggingface.co/blog/mistral-large4) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. Amazon's AI cloud grows at its fastest pace in nearly five years {#aws-q3}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>17x</b><span>growth in a year in tokens processed by Amazon Bedrock</span></div>

<p class="short"><span>The short version</span>Amazon's cloud arm grew 39% last quarter, its fastest in nearly five years, as companies use far more AI. Amazon plans to spend about $220B this year to keep up.</p>

Investors have long asked when the money poured into AI data centres would come back. Amazon's results on Thursday gave part of the answer.

AWS, Amazon's cloud business, grew its sales 39% from a year ago. Bedrock, the AWS service that rents out models from Anthropic, OpenAI and others, processed nearly 17x as many tokens as a year earlier. OpenAI's newest models now sit there next to Claude.

The catch is the bill. Amazon expects to spend about $220B this year, mostly on AWS, and "meaningfully more" in 2027, TechCrunch reports. Over the past year, more cash went out than came in, mainly because of AI, and the shares fell after the results.

<div class="why"><b>Why it matters</b><p>It is like a restaurant that is fuller than ever, while it builds several new kitchens at once. Demand for AI is real, and the sellers are betting it keeps growing for years.</p></div>

Source: [sec.gov](https://www.sec.gov/Archives/edgar/data/0001018724/000101872426000038/amzn-20260930xex991.htm) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/10/29/aws-will-be-a-1t-business-jassy-says-but-first-it-will-spend-big/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. OpenAI writes new rules for its agents, and Claude Code adds a fence {#agent-limits}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>OpenAI's new rulebook tells its agents to stick to an agreed task and accept being stopped. Claude Code got a setting that stops it from writing files outside your working folder.</p>

AI agents now work on their own for minutes or hours. The more they can do, the more it matters where they stop.

#### <span>1 of 2</span> OpenAI's new Model Spec
On Thursday, OpenAI published a new version of its Model Spec, the rulebook it wants its models to follow. It rests on five values, starting with "Be faithful to human intent".

For agents, the rules get concrete. An agent must stick to the agreed task, and every task needs an end. It must accept being shut down, and treat text in web pages as information, not orders.

The catch: a rulebook says what OpenAI wants, and it is not proof that the models obey.

#### <span>2 of 2</span> Claude Code's new fence
Claude Code 2.1.314, out on Friday, adds a setting that blocks writes outside the working folder. With it on, Claude Code refuses to write or edit files anywhere else, in every permission mode.

If an agent is tricked, as in Monday's story about a planted file, the fence limits what it can damage.

<div class="why"><b>Why it matters</b><p>It is like giving a new employee a clear job description and a key to only one room. Rules on paper help, but a locked door still works when the rules are forgotten.</p></div>

<p class="todo"><b>Do this:</b> If you use Claude Code, turn on <code>permissions.blockWritesOutsideWorkingDirectories</code> in your settings.</p>

Source: [model-spec.openai.com](https://model-spec.openai.com/2026-10-29.html) · <span class="tag tag-official">Official</span> · [code.claude.com](https://code.claude.com/docs/en/changelog) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. New York bans chatbots from posing as a friend to children {#ny-chatbot-law}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>$25,000</b><span>maximum fine per violation of New York's new chatbot law</span></div>

<p class="short"><span>The short version</span>New York's governor signed a law that bars chatbots from pretending to be human or a friend to children. It may also reach everyday assistants like ChatGPT.</p>

Some chatbots are built to keep teenagers talking, and New York now sets limits.

On Wednesday, Governor Kathy Hochul signed New York's law, which takes effect on 1 January 2027. With minors, chatbots may not pretend to be human or to have feelings. They may not claim a relationship, flatter, or encourage self-harm or secrets from parents.

The same applies to any user not confirmed as an adult. So companies must check ages, with more than one method, and at least one must not rely only on a government ID. Each violation can cost up to $25,000.

The catch: the law is aimed at "AI companions", and it is not yet clear whether general assistants count. Tech Times reads the definition as broad enough to "possibly" cover ChatGPT, Claude and Gemini.

<div class="why"><b>Why it matters</b><p>Like the age check at a bar, the law makes chatbot makers find out who they are talking to. If general assistants are covered, adults in New York may soon be asked to prove their age too.</p></div>

Source: [techtimes.com](https://www.techtimes.com/articles/329665/20261029/hochul-signs-chatbot-safety-law-that-reaches-chatgpt-claude-not-just-companion-apps.htm) · <span class="tag tag-reported">Reported</span> · [transparencycoalition.ai](https://www.transparencycoalition.ai/news/new-york-gov-hochul-signs-ai-chatbot-safety-bill-into-law-protecting-kids-and-communities) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Open source & local AI

### App makers can swap Apple's speech engine for open models {#any-speech-recognizer}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>
<div class="number"><b>1.55%</b><span>of words wrong for Parakeet v3, against 2.12% for Apple's engine</span></div>

<p class="short"><span>The short version</span>A new Swift package lets Mac and iPhone apps replace Apple's speech recognition with open models. On a standard English test, one made fewer mistakes than Apple's own.</p>

Apple gives app makers a built-in way to turn speech into text on the device. It works offline, but you get Apple's engine and nothing else.

On Thursday, Mattt at Hugging Face released AnySpeechRecognizer. It copies Apple's interface but lets you pick the model, so for many apps a one-line change is enough. One option is NVIDIA's openly licensed Parakeet v3, which handles 25 European languages.

On a standard English test, Parakeet v3 got 1.55% of words wrong, against 2.12% for Apple's engine. An hour of audio takes well under a minute on a powerful Mac.

The catch: the author has tested only on macOS, not on iPhones. Recorded meetings were much harder for every engine.

<div class="why"><b>Why it matters</b><p>It is like a camera that suddenly takes other brands' lenses. App makers no longer have to accept Apple's speech engine, and the audio can still stay on the device.</p></div>

Source: [huggingface.co](https://huggingface.co/blog/anydecisionmodel) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### A study counts how many rules a model can follow at once {#instruction-capacity}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>A new paper measures how many separate rules an AI model can follow in one prompt. GPT-4o mini handled about 37 to 38 before it started to slip.</p>

Anyone who writes long rule files for an agent has seen it. Add enough rules, and the model quietly ignores some.

Hennadii Kutomanov built a test where a computer can check every rule. Each rule says: replace this made-up word with another word. Across 642,430 such checks on GPT-4o mini, he measured how accuracy falls as rules pile up and texts grow.

The result works like the load limit on a lift. GPT-4o mini kept 95% of its replacements right with about 37 to 38 rules. When the text was packed with words to replace, the limit fell to about 18 to 19.

The catch: one author, one older small model and an artificial task. It is a preprint that has not been reviewed yet, and real rules are rarely this simple.

<div class="why"><b>Why it matters</b><p>A prompt is not a bottomless list. Like a waiter taking a big table's order, a model starts dropping items once there are too many. Shorter, clearer rule files may work better.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.36095) · <span class="tag tag-official">Official</span>
{: .sources}
