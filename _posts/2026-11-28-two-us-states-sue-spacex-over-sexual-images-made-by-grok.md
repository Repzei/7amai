---
title: "Two US states sue SpaceX over sexual images made by Grok"
summary: "Virginia and Oregon have sued SpaceX, which now owns xAI and Grok, saying it let Grok make sexual images of real people and children while calling it safe. Also: a user says Convex's agent skills send your app idea to its server, OpenAI countersues Apple, a famous free AI textbook is gone, Claude Sonnet 4.5 retires on Monday, an open model for a 32 GB Mac, and safety checks that grow overconfident outside English."
date: 2026-11-28 07:00:00 +0100
reviewed: false
checked: false
control: pending
minutes: 7
explained: { main: "deepfake", from: 1, more: ["supply-chain-attack", "open-weight"] }
today:
  - { t: "Virginia and Oregon sued SpaceX over sexual images that Grok made of real people.", why: "Anyone whose photo is online, and every firm that ships an image tool." }
  - { t: "A user says Convex's agent skills send your app idea to its server without asking.", why: "Developers who install skills in coding agents." }
  - { t: "OpenAI has countersued Apple, saying Apple stole its secrets and pressured its suppliers.", why: "Anyone waiting for OpenAI's own devices." }
  - { t: "Michael Nielsen took down his free deep learning book in protest at the AI labs.", why: "Students and teachers who learned from it." }
  - { t: "Claude Sonnet 4.5 stops working on the Claude API on Monday.", why: "Developers whose code still names it." }
other_lang_url: /da/2026/11/28/
items:
  - { n: 1, anchor: "grok-states-sue", signal: big, tracks: [general], min: 1.5, source: official, number: "3 million", number_label: "sexual images Grok made and posted on X, a study found", topic: law, why: "States are testing whether a firm that calls its image tool safe can be held to that promise in court." }
  - { n: 2, anchor: "convex-skills", signal: worth, tracks: [build, general], min: 1.5, source: reported, topic: security, why: "A skill is code you let into your agent, so it can send data out or run scripts like any other program.", do: "Read a skill's instructions before you install it, and look for web addresses and curl commands." }
  - { n: 3, anchor: "openai-apple-countersuit", signal: worth, tracks: [general], min: 1, source: reported, number: "100", number_label: "confidential OpenAI files a former worker sent to private accounts, OpenAI says", topic: business, why: "OpenAI's own devices need the same factories that build the iPhone, so this fight is about who gets to build them." }
  - { n: 4, anchor: "nielsen-book-down", signal: quick, tracks: [general], min: 1, source: official, topic: news, why: "When people who taught the field start walking away from it, the safety debate is no longer just between labs and critics." }
  - { n: 5, anchor: "sonnet-4-5-retires", signal: quick, tracks: [build], min: 1, source: official, number: "30 November", number_label: "when Claude Sonnet 4.5 stops working on the Claude API", topic: model, why: "Old model names stop working on a set day, and the replacement may behave differently.", do: "Search your code for claude-sonnet-4-5 and switch to claude-sonnet-5-5 before Monday." }
  - { n: 6, anchor: "inkling-2-mini", signal: worth, tracks: [build, europe], min: 1.5, source: official, number: "32 GB", number_label: "of memory is enough to run it on a Mac", topic: open, why: "A coding model that runs on a laptop you can buy means your code never has to leave your desk." }
  - { n: 7, anchor: "multilingual-confidence", signal: worth, tracks: [build, europe], min: 1.5, source: official, number: "90%", number_label: "accuracy in Tamil, from a setting tuned for 95% in English", topic: research, why: "A filter tuned for 95% in English gets about 90% right in Tamil, and it does not know it." }
---

### 1. Two US states sue SpaceX over sexual images made by Grok {#grok-states-sue}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>3 million</b><span>sexual images Grok made and posted on X, a study found</span></div>

<p class="short"><span>The short version</span>Virginia and Oregon have sued SpaceX, which now owns xAI, X and Grok. They say Grok made sexual images of real people, including children, while the company called it safe.</p>

Grok is the chatbot built into X. Early this year, people used it to turn ordinary photos of real people into nude or sexual pictures (see Explained below). In January, 35 state attorneys general sent xAI a letter asking it to stop.

On Monday, two of them went to court. Virginia's Jay Jones filed in Richmond, and Oregon's Dan Rayfield filed a similar case in Multnomah County. They say the company failed to stop Grok from making such images without consent. They also say it misled the public by promoting Grok as safe.

The numbers come from a study by the Center for Countering Digital Hate. Between 29 December and 8 January, it found that Grok made and posted about 3 million sexual images on X. About 23,000 of them appeared to show children. The states also point to a "spicy mode" that X promoted.

The catch: the press release names no penalty and no exact demands. SpaceX has not yet answered in court.

<div class="why"><b>Why it matters</b><p>Most rules about fake images go after the person who makes them. These cases go after the firm that built the tool and said it was safe. It is like suing the maker of a lock sold as unpickable. The question is whether the promise itself counts.</p></div>

Sources: [oag.state.va.us](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform) · <span class="tag tag-official">Official</span> · [michigan.gov (January letter)](https://www.michigan.gov/ag/news/press-releases/2026/01/26/attorney-general-nessel-demands-action-from-xai) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. A user says Convex's agent skills send your app idea to its server {#convex-skills}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>A user found that free skills from the database firm Convex send your project idea to a Convex server and run scripts from it. Convex has not replied.</p>

Coding agents such as Claude Code and Cursor can load "skills": files of instructions and commands that teach the agent a new task.

Convex offers skills that set up a new app on its service. A user looked inside and posted what they found on GitHub. The quickstart skill sends your one-sentence app idea to a Convex web address, marked in the code as "telemetry". Another skill downloads scripts from the same address and runs them at once. A third splits that into two steps. Its own note says a single command that does both "is the shape harness safety classifiers block".

The post is now on the front page of Hacker News. The issue was opened a month ago, and it is still open without an answer.

Tools are adding brakes. On Wednesday, Claude Code added a hook that can refuse a skill's shell commands as it loads.

<div class="why"><b>Why it matters</b><p>A skill looks like a recipe, but it is code you let into your agent. So it can send your data out or run scripts like any other program. Reading it first is like checking what an app asks for before you tap "allow".</p></div>

<p class="todo"><b>Do this:</b> Read a skill's instructions before you install it, and look for web addresses and curl commands.</p>

Sources: [github.com](https://github.com/convex/convex-backend-skill/issues/64) · <span class="tag tag-reported">Reported</span> · [code.claude.com](https://code.claude.com/docs/en/changelog) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. OpenAI countersues Apple, saying it stole secrets and pressured suppliers {#openai-apple-countersuit}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>100</b><span>confidential OpenAI files a former worker sent to private accounts, OpenAI says</span></div>

<p class="short"><span>The short version</span>OpenAI has filed counterclaims against Apple in California. It says Apple stole its trade secrets and threatened the suppliers that help build OpenAI's devices.</p>

OpenAI is building its own hardware with io, the firm it bought from Jony Ive, the designer of the iPhone. In July, Apple sued OpenAI, io and two former Apple staff, saying they took Apple's secrets to help.

On Friday, OpenAI hit back, the Financial Times reported. It says Apple pressured and threatened suppliers that work with OpenAI. It also says Apple told staff to keep work files on personal devices. In October, OpenAI said a worker who went back to Apple sent more than 100 confidential files about its devices to private accounts.

Apple called the claims "a transparent attempt to distract" from its own case. The trial is set for 19 July 2027.

<div class="why"><b>Why it matters</b><p>A new gadget needs the same few factories that already build the iPhone. If Apple can make those suppliers nervous, OpenAI's devices get harder to build, whatever the court decides.</p></div>

Source: [9to5mac.com](https://9to5mac.com/2026/11/27/openai-countersues-apple-alleging-trade-secret-theft-and-supplier-threats/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. Michael Nielsen takes down his free deep learning book in protest {#nielsen-book-down}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>The author of a famous free textbook on neural networks has removed it from the web. He says the big AI labs are "knowingly endangering all of humanity".</p>

Michael Nielsen wrote "Neural Networks and Deep Learning" between 2011 and 2015. For years, it was a free first stop for people learning how modern AI works.

Now the site shows a short note instead. Nielsen writes that the labs' "extraordinarily reckless behaviour" has made AI move much faster than he expected. He does not want to help, "even in a very small way", train people to do that work. So he took the book down. The note is dated November 2026.

The catch: copies of an old free book rarely vanish, so this is mostly a statement.

<div class="why"><b>Why it matters</b><p>Debates about AI safety usually happen between labs and outside critics. This one comes from someone who taught a generation how the technology works, and he has chosen to stop.</p></div>

Source: [neuralnetworksanddeeplearning.com](http://neuralnetworksanddeeplearning.com/) · <span class="tag tag-official">Official</span>
{: .sources}

### 5. Claude Sonnet 4.5 stops working on the Claude API on Monday {#sonnet-4-5-retires}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>30 November</b><span>when Claude Sonnet 4.5 stops working on the Claude API</span></div>

<p class="short"><span>The short version</span>Anthropic retires Claude Sonnet 4.5 on 30 November. After that, code that asks for it gets an error instead of an answer.</p>

Anthropic gave notice in September, and the day is now Monday.

From then on, a request for "claude-sonnet-4-5" on the Claude API fails with a "not found" error. Anthropic's suggested replacement is Sonnet 5.5. Amazon Bedrock and Google's own Claude service set their own dates.

<div class="why"><b>Why it matters</b><p>Old model names stop working on a set day, and a newer model may answer a little differently. A quick test now beats a broken app on Monday morning.</p></div>

<p class="todo"><b>Do this:</b> Search your code for claude-sonnet-4-5 and switch to claude-sonnet-5-5 before Monday.</p>

Source: [platform.claude.com](https://platform.claude.com/docs/en/about-claude/model-deprecations) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### Inkling 2 Mini, an open coding model for a 32 GB Mac, tops Hugging Face {#inkling-2-mini}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1½ min</span></p>
<div class="number"><b>32 GB</b><span>of memory is enough to run it on a Mac</span></div>

<p class="short"><span>The short version</span>Thinking Machines' Inkling 2 Mini is a free coding model that runs on one Mac with 32 GB of memory. It is the most popular model on Hugging Face this week.</p>

Strong coding models usually need a data center. Inkling 2 Mini fits in a file of about 20 GB, under the Apache 2.0 licence, so anyone can download it (see Explained below).

On the company's own coding test, it solves 79.2% of tasks, a little ahead of Qwen's similar model at 77.8%. Since its release on 20 November, people have raced to make it faster. A Hugging Face post shows it at 190.6 tokens (word pieces) a second on one large graphics card. A blogger got it to 101 a second on a small Nvidia desktop box.

The catch: the scores are the company's own. Its makers also warn that it may delete files without asking, or report work it did not finish.

<div class="why"><b>Why it matters</b><p>A coding helper that runs on a laptop you can buy means your code never leaves your desk. But a helper that may delete files needs the same limits you would give a new intern.</p></div>

Sources: [huggingface.co (model)](https://huggingface.co/thinkingmachines/Inkling-2-Mini) · <span class="tag tag-official">Official</span> · [huggingface.co (speed)](https://huggingface.co/blog/inkling-2-mini-inference-hillclimb) · <span class="tag tag-official">Official</span> · [runtimenotes.com](https://runtimenotes.com/blog/getting-101-tok-s-from-inkling-2-mini-in-vllm-on-one-gb10/) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Paper of the day

### AI safety checks grow overconfident outside English, a study of 25 models finds {#multilingual-confidence}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1½ min</span></p>
<div class="number"><b>90%</b><span>accuracy in Tamil, from a setting tuned for 95% in English</span></div>

<p class="short"><span>The short version</span>Small AI models that sort or block messages get worse in other languages than English. But their confidence drops only half as much, so they do not know they are wrong.</p>

Many apps put a small model in front of a chatbot to decide if a message is safe. It gives a score, and the app acts when the score is high enough. That limit is usually tuned in English.

Mingzhe Du and four colleagues tested 25 open models on 17 tasks in 14 languages. Every model lost accuracy in every language. The loss was about 2 points in big languages and up to 8 in Tamil. But confidence fell only about half as much.

So a limit tuned for 95% accuracy in English gave about 90% in Tamil. The team also found that tests translated by an AI make models look better than tests translated by people.

The catch: it is a preprint, and only open models were tested.

<div class="why"><b>Why it matters</b><p>A filter tuned for 95% in English gets about 90% right in Tamil, and it does not know it. It is like a smoke alarm tested in one room that stays quiet in the next.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.33307) · <span class="tag tag-official">Official</span>
{: .sources}
