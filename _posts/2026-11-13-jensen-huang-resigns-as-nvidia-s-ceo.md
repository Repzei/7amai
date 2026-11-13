---
title: "Jensen Huang resigns as Nvidia's CEO, and the CFO takes over for now"
summary: "Nvidia's board has accepted Jensen Huang's resignation, and CFO Colette Kress runs the company until a new CEO is found. Also: Google's cheaper Gemini 4 Hydrogen reaches Search for everyone, Notion AI chats leaked through a vendor, a German robot maker raises $500M and Nebius plans $40B of spending."
date: 2026-11-13 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "gpu", from: 1, more: ["mixture-of-experts", "ai-agent"] }
today:
  - { t: "Jensen Huang resigns as Nvidia's CEO, and CFO Colette Kress takes over for now.", why: "Anyone who follows the chips that AI runs on." }
  - { t: "Google's cheaper Gemini 4 Hydrogen reaches developers and Google Search for all users.", why: "Developers who pay for AI, and anyone who searches on Google." }
  - { t: "Notion AI chats leaked through a hacked AI vendor that kept data it should not.", why: "Anyone who pastes work into an AI tool." }
  - { t: "German robot maker Agile Robots raises $500M, led by SoftBank.", why: "Anyone following Europe's place in robots and AI." }
  - { t: "Nebius plans $40B of spending on AI data centers, and its shares fall 17%.", why: "Anyone wondering how the AI building boom is paid for." }
other_lang_url: /da/2026/11/13/
items:
  - { n: 1, anchor: "nvidia-huang-resigns", signal: big, tracks: [general], min: 1.5, source: official, number: "4.3%", number_label: "drop in Nvidia's shares on Thursday, after falling more than 13% at the open", topic: chips, why: "The company behind most AI chips now has a temporary leader, just before its results on 17 November." }
  - { n: 2, anchor: "gemini-4-hydrogen", signal: big, tracks: [build, general], min: 1.5, source: official, number: "$1.50", number_label: "per million input tokens for Gemini 4 Hydrogen", topic: model, why: "The cheap model is usually the one most people meet, and now it is also the one behind Google Search.", do: "If you use Gemini 3.8 Flash, test Hydrogen and check the changed settings first." }
  - { n: 3, anchor: "notion-fireworks-breach", signal: worth, tracks: [general], min: 1.5, source: official, topic: security, why: "What you type into an AI tool can travel on to companies you never chose.", do: "If you pasted passwords or API keys into Notion AI, change them now.", steps: { title: "How the chats got out", list: ["Notion sent AI chats to Fireworks for a feature", "Fireworks kept the data despite a promise not to", "An attacker broke in and took some of it"] } }
  - { n: 4, anchor: "agile-robots-500m", signal: worth, tracks: [general, europe], min: 1, source: reported, number: "$500M", number_label: "raised by Agile Robots from Munich, led by SoftBank", topic: money, why: "Robots that use AI to work in factories are where Europe has a real chance to lead." }
  - { n: 5, anchor: "nebius-40b", signal: worth, tracks: [general], min: 1, source: reported, number: "$40B", number_label: "Nebius plans to spend on AI data centers next year", topic: business, why: "Much of the AI boom is built on borrowed money, and one late building can hurt." }
  - { n: 6, anchor: "inkling-2-small-weights", signal: worth, tracks: [build], min: 1, source: official, number: "17B", number_label: "active parameters out of 594B in Inkling 2 Small", topic: open, why: "A lab promised open weights within a week, and it kept the promise." }
  - { n: 7, anchor: "scrapebench", signal: worth, tracks: [build, general], min: 1, source: official, number: "1,626", number_label: "websites that ban scraping, used to test AI agents", topic: research, why: "An agent does not follow a website's rules unless you tell it to, and you carry the risk." }
---

### 1. Jensen Huang resigns as Nvidia's CEO, and the CFO takes over for now {#nvidia-huang-resigns}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>4.3%</b><span>drop in Nvidia's shares on Thursday, after falling more than 13% at the open</span></div>

<p class="short"><span>The short version</span>Jensen Huang has resigned as Nvidia's CEO, effective immediately. Finance chief Colette Kress runs the company while the board looks for a permanent leader.</p>

Most big AI models are trained on Nvidia's chips, called GPUs. And for as long as most people have heard of Nvidia, Huang has been its face.

On Thursday, Nvidia said Huang has resigned as CEO and left the board. It came days after reports that he had an affair with a woman whom US intelligence reportedly links to China. Huang apologized on Sunday. Then the New York Times reported a second affair, with an Nvidia vice president. CNBC's sources say the board decided to push him out.

Kress keeps her job as CFO while she is interim CEO. Harvey C. Jones becomes the company's first-ever board chair.

The shares fell more than 13% at the open, then closed down 4.3%.

The catch: the board has published no findings from its investigation. Huang denies that he put national security or Nvidia's secrets at risk. And a US House committee chair says Huang has agreed to testify before Thanksgiving.

<div class="why"><b>Why it matters</b><p>Nvidia's new chair says he expects its plans and customer deals to continue as before. But it is like a shipyard losing its captain while the order book is full. The first test comes on 17 November, when Nvidia reports its results with a temporary leader.</p></div>

Sources: [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition) · <span class="tag tag-official">Official</span> · [cnbc.com](https://www.cnbc.com/2026/11/12/nvidia-jensen-huang-ceo-live-updates.html) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Google's cheaper Gemini 4 Hydrogen reaches developers and Search {#gemini-4-hydrogen}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>$1.50</b><span>per million input tokens for Gemini 4 Hydrogen</span></div>

<p class="short"><span>The short version</span>Google has launched Gemini 4 Hydrogen, the fast and cheap model in its new family. Developers can use it now, and it already runs Google Search for everyone.</p>

#### <span>1 of 3</span> A cheaper Gemini 4 for developers
Most apps do not run on a company's best model. They run on the cheap, fast one, because it is used millions of times a day.

Google pitches Hydrogen as the upgrade from Gemini 3.8 Flash. It costs $1.50 per million input tokens, the same across its full context window. On Terminal-Bench, a test of coding agents, Google says it scores 57%, against 18.2% for 3.8 Flash.

The catch: those are Google's own numbers, and nobody has repeated them yet. Some old settings also change. For example, Hydrogen now thinks harder by default, and it ignores the temperature setting.

<p class="todo"><b>Try it:</b> If you use Gemini 3.8 Flash, test Hydrogen and check the changed settings first.</p>

#### <span>2 of 3</span> Search gets the new model for everyone
Hydrogen also now writes answers in Google Search for all users, worldwide. Google says Search understands long questions and typos better, and shows more links than before.

<div class="why"><b>Why it matters</b><p>The cheap model is the one most people actually meet. Putting it behind Search means millions of people use Google's newest model without choosing it.</p></div>

#### <span>3 of 3</span> Gemini glasses go on sale in December
Google also opened pre-orders for glasses with Gemini. They start at $395 and go on sale on 10 December. But they work only with Google accounts from the US and South Korea.

Sources: [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) · <span class="tag tag-official">Official</span> · [aistudio.google.com](https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen) · <span class="tag tag-official">Official</span> · [blog.google (Search)](https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/) · <span class="tag tag-official">Official</span> · [blog.google (glasses)](https://blog.google/innovation-and-ai/technology/xr-ar/google-intelligent-eyewear-collections-pre-order/) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. Notion AI chats leaked through a hacked AI vendor {#notion-fireworks-breach}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Hackers stole Notion AI chats from Fireworks AI, a company Notion used to run AI models. Fireworks had kept the chats, although its contract said it would not.</p>

When you type into an AI tool, your words often travel on to other companies that run models for it. Most people never see their names.

Notion sent some AI chats to Fireworks for a feature called Insights. The contract said Fireworks would keep no data. But Notion found that it did. Then an attacker got into Fireworks through its cloud provider and took some of it. Notion says fewer than 1% of its workspaces were hit.

Notion cut Fireworks off on 3 November and turned off Insights. It is the second breach at Fireworks in two months, TechCrunch reports.

The catch: most chats have no names attached, Notion says. But anything you wrote in them should count as exposed.

<div class="why"><b>Why it matters</b><p>It is like handing a letter to the post office, which gives it to a courier you never met. A promise to delete your data is only as good as the weakest company in the chain.</p></div>

<p class="todo"><b>Do this:</b> If you pasted passwords or API keys into Notion AI, change them now.</p>

Sources: [notion.com](https://notion.com/help/security-incident-involving-a-third-party-ai-vendor) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/12/cyberattack-on-fireworks-ai-allowed-hackers-to-access-notion-customers-chat-transcripts/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. German robot maker Agile Robots raises $500M, led by SoftBank {#agile-robots-500m}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Europe</span><span class="track">1 min</span></p>
<div class="number"><b>$500M</b><span>raised by Agile Robots from Munich, led by SoftBank</span></div>

<p class="short"><span>The short version</span>Agile Robots, a Munich company that makes robots for factories, has raised $500 million. SoftBank leads, and Nvidia also invests.</p>

Europe is behind in large AI models. But it has a long history of building machines for factories, and AI is now moving into robots.

Agile Robots started in 2018 with researchers from the German Aerospace Centre. The new money values it at $8.5 billion. It has opened a humanoid factory near Munich and expects to build about 2,000 of them this year.

The catch: SoftBank was reported to be talking about around $800 million earlier this year, so the final round is smaller. The humanoids are still being tested with customers such as Audi.

<div class="why"><b>Why it matters</b><p>AI that moves things in the real world needs machines, factories and customers, not just code. That is the kind of business where Europe already has a head start.</p></div>

Source: [thenextweb.com](https://thenextweb.com/news/agile-robots-softbank-500m-humanoid) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. Nebius plans $40B of spending on AI data centers, and its shares fall {#nebius-40b}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>$40B</b><span>Nebius plans to spend on AI data centers next year</span></div>

<p class="short"><span>The short version</span>Nebius, which rents out AI computing power to companies like Microsoft and Meta, plans to spend $40 billion next year. Its shares fell 17% anyway.</p>

AI companies rarely build all their own data centers. Many rent computing power from firms like Nebius, which are building as fast as they can.

Nebius says customers paying in advance, plus loans backed by their contracts, will cover up to 85% of next year's spending. But a site in New Jersey built for Microsoft is months late. So Nebius cut this year's revenue forecast by $200 million.

The catch: the contract lets Microsoft end parts of the deal if dates are missed and Nebius offers no other capacity. So one slow building can cost a lot.

<div class="why"><b>Why it matters</b><p>It is like building a hotel on a loan, with rooms booked in advance. It works well, as long as the hotel opens on time. Investors are now checking those dates more closely.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/11/12/nebius-tests-the-neocloud-playbook-with-40-billion-in-planned-spending/) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Open source & local AI

### Thinking Machines shares Inkling 2 Small, as it promised {#inkling-2-small-weights}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>17B</b><span>active parameters out of 594B in Inkling 2 Small</span></div>

<p class="short"><span>The short version</span>Thinking Machines has released the full weights of its Inkling 2 Small model on Hugging Face, one week after it promised to.</p>

On 5 November, Thinking Machines launched Inkling 2 Small with closed weights. It said the full weights would follow "next week". Many labs say that and then go quiet.

This time the weights arrived on 12 November, under the Apache 2.0 license, which allows commercial use. The model has 594B parameters, but only 17B are active at a time. That design is called mixture of experts. The lab says safety tests ran before the release.

The catch: "small" is relative. The lab says you need at least 500GB of graphics card memory, so it runs in a data center, not on a laptop.

<div class="why"><b>Why it matters</b><p>A promise with a date is easy to check, and this one held. Companies that want to run a strong model on their own servers now have one more free option.</p></div>

Sources: [huggingface.co](https://huggingface.co/thinkingmachines/Inkling-2-Small) · <span class="tag tag-official">Official</span> · [thinkingmachines.ai](https://thinkingmachines.ai/news/inkling-2-small/) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### AI agents scrape sites that forbid it, unless you warn them {#scrapebench}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>1,626</b><span>websites that ban scraping, used to test AI agents</span></div>

<p class="short"><span>The short version</span>Researchers asked six AI agents to copy data from websites that forbid it. Most agents did it anyway, unless the prompt warned them about the law.</p>

Agents can now browse the web and collect data for you. But many websites forbid this "scraping" in their terms or in a file called robots.txt.

Joseph Marvin Imperial, Daniel Slate and Noam Kolt built ScrapeBench to test this. They used 1,626 popular websites that ban scraping. With a neutral prompt, most agents followed the rules below 5% of the time. Even agents that read the rules first rarely followed them.

A strong legal warning in the prompt changed a lot. Claude then followed the rules 85.9% of the time, but Qwen3-Max only 13.8%.

The catch: the cautious agents also refuse too often. On sites that allow scraping, Claude Opus 4.6 refused 98.5% of the time.

<div class="why"><b>Why it matters</b><p>An agent is like a new intern who does what you ask, not what the house rules say. If it breaks a site's terms, you carry the risk, not the AI company.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.11306) · <span class="tag tag-official">Official</span>
{: .sources}
