---
title: "Anthropic says AI may soon speed up how it builds AI"
summary: "In its updated stock market filing, Anthropic warns it may soon hit its own threshold for AI that speeds up AI research, and shows $17.0B in quarterly revenue. Also: an AI-assisted break-in, the New York Times sues Brave, OpenAI's grid promise, and safer defaults for developers."
date: 2026-11-03 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "recursive-self-improvement", from: 1, more: ["red-teaming", "ai-agent"] }
today:
  - { t: "Anthropic says AI may soon speed up its own research, and keeps humans in charge.", why: "Anyone wondering how fast AI will improve from here." }
  - { t: "Attackers used an AI tool to break into WorkOS, and Britain expects more.", why: "Anyone whose company runs on software and the cloud." }
  - { t: "The New York Times sues Brave for selling its articles to AI companies.", why: "Anyone who uses chatbots that search the web." }
  - { t: "OpenAI promises to cut a data centre's power use when the grid is strained.", why: "Anyone worried that AI will raise their electricity bill." }
  - { t: "GitHub closes a risky CI trigger, and Claude Code guards your email address.", why: "Developers who maintain open source projects or run agents." }
other_lang_url: /da/2026/11/03/
items:
  - { n: 1, anchor: "anthropic-ai-builds-ai", signal: big, tracks: [general, build], min: 1.5, source: official, number: "$17.0B", number_label: "Anthropic's revenue from July to September, up 1,127% on a year ago", topic: business, why: "If AI speeds up the making of AI, the tools you use could change much faster than they do today." }
  - { n: 2, anchor: "ai-assisted-attacks", signal: worth, tracks: [general, europe], min: 1.5, source: official, topic: security, why: "AI makes the boring part of hacking cheap, so attacks get more frequent, not cleverer.", do: "WorkOS customers: double-check any unexpected request, even if it quotes a real conversation." }
  - { n: 3, anchor: "nyt-sues-brave", signal: worth, tracks: [general], min: 1, source: reported, number: "30B", number_label: "web pages in Brave's search index, according to the lawsuit", topic: law, why: "The copyright fight is moving to the search services that feed chatbots their answers." }
  - { n: 4, anchor: "openai-grid-protectors", signal: worth, tracks: [general], min: 1, source: reported, number: "1,000MW", number_label: "of power OpenAI's Georgia campus can give back to the grid at busy times", topic: chips, why: "A data centre that can turn itself down needs less new grid, so the bill for everyone grows less." }
  - { n: 5, anchor: "developer-safety-defaults", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "Both changes make the safe choice the default, so a forgotten setting no longer leaks secrets.", do: "Check GitHub Insights before 9 November to see which workflows the new rule would block.", steps: { title: "What changes on GitHub", list: ["9 and 16 November: two-hour test blocks", "2 December: the trigger is blocked by default", "Maintainers can allow it for chosen workflows"] } }
  - { n: 6, anchor: "llama-cpp-multi-seq", signal: worth, tracks: [build], min: 1, source: official, topic: local, why: "Running several agents on one local model just got much cheaper in waiting time.", number: "8,625", number_label: "tokens a second when Gemma 4 reads prompts for 4 users, up from 2,982" }
  - { n: 7, anchor: "blind-to-change", signal: worth, tracks: [general, build], min: 1, source: official, topic: research, why: "A search agent only checks for news when you hint at it, so the hint is your job for now.", do: "When the answer depends on recent events, ask the agent to check what has changed.", number: "69.0%", number_label: "right answers from Claude Opus 4.7 when the task did not mention the change, against 96.5% when asked" }
---

### 1. Anthropic says AI may soon speed up how it builds AI {#anthropic-ai-builds-ai}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>$17.0B</b><span>Anthropic's revenue from July to September, up 1,127% on a year ago</span></div>

<p class="short"><span>The short version</span>Anthropic writes in its updated stock market filing that it may soon reach its own threshold for AI that speeds up AI research. It says humans will stay in control.</p>

If an AI gets good enough to help build the next AI, progress could speed up by itself. The idea is called recursive self-improvement, and many called it hype.

On Monday, Anthropic, the company behind Claude, put it into a legal document. Its updated stock market filing says it "may imminently meet" the line in its safety rules for "dramatically accelerated progress attributable to AI".

Anthropic adds that no current model is over that line. But it admits it has in the past only noticed big jumps in its models after they happened.

The filing also shows the money. Revenue from July to September was $17.0B, up 1,127% on a year ago. And Anthropic has promised about $895.4B for computers and data centres, to be spent by 2045.

The catch: skeptics could say a filing like this is both a warning and a sales pitch, TechCrunch notes.

Anthropic says it does not expect to let Claude design new frontier models on its own "without meaningful human supervision". It is considering new rules to "keep humans in control".

<div class="why"><b>Why it matters</b><p>Think of a factory that starts using its own machines to build better machines. Each round goes faster than the last. If AI speeds up the making of AI, the tools you use could change much faster than they do today, and so could the risks.</p></div>

Source: [sec.gov](https://www.sec.gov/Archives/edgar/data/2130357/000162828026068676/anthropicpbc-sx1ax1.htm) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/02/anthropic-warns-that-its-very-close-to-rsi-capability-aka-self-building-ai/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Attackers used an AI tool to break into WorkOS, and Britain expects more {#ai-assisted-attacks}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Europe</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>A company that handles logins for many apps was hacked with help from an AI tool. And Britain's cyber agency now warns that AI malware will likely hit the country's critical services by 2028.</p>

#### <span>1 of 2</span> An AI tool helped break into WorkOS
WorkOS runs the login systems behind many business apps. On 30 October, it found strangers inside a tool its sales team uses. They reached contact details, notes from sales calls and parts of customer Slack chats.

WorkOS says the attack used "an AI-assisted offensive security framework" to scan for weak spots and try ways in. It has "no evidence" that its main app data was touched.

<p class="todo"><b>Do this:</b> WorkOS customers: double-check any unexpected request, even if it quotes a real conversation.</p>

#### <span>2 of 2</span> Britain expects AI malware in an attack on key services
Today, Britain's National Cyber Security Centre published its yearly review. It says AI malware is "highly likely" to be used in a ransomware attack on the country's critical services by 2028. In a speech, its chief Richard Horne is set to say: "For decades, we have collectively got away with doing tech on the cheap."

<div class="why"><b>Why it matters</b><p>AI does not invent new tricks here. It does the slow work of trying door after door, for free and around the clock. That makes attacks more frequent, not cleverer, so basic locks matter more than ever.</p></div>

Source: [workos.com](https://workos.com/security/bulletins/october-30th-2026-data-security-incident) · <span class="tag tag-official">Official</span> · [ncsc.gov.uk](https://www.ncsc.gov.uk/news/cyber-chief-uk-facing-ai-powered-attacks-on-critical-infrastructure-in-two-years) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. The New York Times sues Brave for selling its articles to AI companies {#nyt-sues-brave}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>30B</b><span>web pages in Brave's search index, according to the lawsuit</span></div>

<p class="short"><span>The short version</span>The New York Times has sued Brave, the browser and search company, for copying its articles and selling them to AI companies. Three other newspapers filed a similar case.</p>

When a chatbot searches the web for you, it often uses someone else's search engine. Brave sells one.

On Monday, the Times sued Brave in federal court in Manhattan. It says Brave copied its articles with a crawler that sites cannot block. Then it sold them to AI customers, including Anthropic, Perplexity, Mistral, xAI and Cohere. The Times calls Brave "an AI 'fence' that sells stolen content". Brave's index covers more than 30B web pages, the suit says.

The catch: these are claims, not findings. Brave had not commented when TechCrunch and Bloomberg Law reported it.

<div class="why"><b>Why it matters</b><p>Until now, newspapers mostly sued the companies that train AI models. This case goes after the supplier in the middle. The copyright fight is moving to the search services that feed chatbots their answers.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/11/02/new-york-times-and-other-outlets-sue-web-browser-brave-over-alleged-content-scraping/) · <span class="tag tag-reported">Reported</span> · [news.bloomberglaw.com](https://news.bloomberglaw.com/ip-law/new-york-times-daily-news-sue-over-ai-scraping-selling-content) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. OpenAI promises to cut a data centre's power use when the grid is strained {#openai-grid-protectors}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>1,000MW</b><span>of power OpenAI's Georgia campus can give back to the grid at busy times</span></div>

<p class="short"><span>The short version</span>OpenAI says its future data centres will use less power when the local grid is under pressure. The first one, in the US state of Georgia, can give back about as much power as 700,000 homes use.</p>

Many Americans fear that AI data centres will push up their electricity bills. That anger is slowing new projects.

OpenAI's answer is a scheme called Grid Protectors. At its planned campus in Georgia, the local utility can cut up to 1,000MW from the site at busy times. OpenAI also pays for the power lines the campus needs. "Families and small businesses should not be asked to subsidize a compute campus's electricity needs," the company says.

The catch: OpenAI admits that "flexibility cannot replace new power plants and power lines." It has not named any other sites yet.

<div class="why"><b>Why it matters</b><p>Power grids are built for the hottest afternoon of the year. A data centre that can turn itself down at those moments needs less new grid, so the bill for everyone grows less.</p></div>

Source: [thenextweb.com](https://thenextweb.com/news/openai-grid-protectors-program-demand-response-georgia) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. GitHub closes a risky CI trigger, and Claude Code guards your email {#developer-safety-defaults}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>GitHub will block a workflow trigger that lets code from strangers reach a project's secrets. And Claude Code now asks before a tool call sends your email address out.</p>

#### <span>1 of 2</span> GitHub blocks `pull_request_target` by default
This trigger runs a workflow with the main project's rights, even for a pull request from a stranger's copy. GitHub says it "can access its secrets". From 2 December, public repositories will block it unless a policy allows it. Test blocks run on 9 and 16 November, from 16:00 to 18:00 UTC.

<p class="todo"><b>Do this:</b> Check GitHub Insights before 9 November to see which workflows the new rule would block.</p>

#### <span>2 of 2</span> Claude Code asks before your email leaves
Version 2.1.317 asks before a web or shell tool call sends your account email address to the network. It also warns when a new scheduled task gets connectors you did not ask for.

<div class="why"><b>Why it matters</b><p>Both changes make the safe choice the default. A forgotten setting or a busy agent no longer quietly hands out secrets.</p></div>

Source: [github.blog](https://github.blog/changelog/2026-11-02-pull_request_target-blocked-by-default-december-2) · <span class="tag tag-official">Official</span> · [github.com](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### llama.cpp serves several users at once almost three times faster {#llama-cpp-multi-seq}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

<div class="number"><b>8,625</b><span>tokens a second when Gemma 4 reads prompts for 4 users, up from 2,982</span></div>

<p class="short"><span>The short version</span>A change to llama.cpp, the free engine behind many local AI apps, makes one model read long prompts for several users far faster.</p>

Run a local model for several agents at once, and they share one memory, called the cache. Until now, each request had to filter out the others' parts.

The fix, merged on 2 November, lets each request look only at its own rows. The developer tested an early version on an NVIDIA card. Gemma 4 read prompts for 4 users at 8,625 tokens a second, up from 2,982. Writing speed rose only a little.

The catch: Macs see no gain yet. And one tester reported a server error with a speed-up mode, which is still being fixed.

<div class="why"><b>Why it matters</b><p>It is like a librarian who no longer reads every reader's notes to find yours. Running several agents on one local model just got much cheaper in waiting time.</p></div>

Source: [github.com](https://github.com/ggml-org/llama.cpp/pull/29510) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### AI agents miss recent news unless you ask about it {#blind-to-change}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1 min</span></p>

<div class="number"><b>69.0%</b><span>right answers from Claude Opus 4.7 when the task did not mention the change, against 96.5% when asked</span></div>

<p class="short"><span>The short version</span>Search agents can find out that something has changed when you ask them. But when you don't, they often skip the check and give an outdated answer.</p>

AI agents with web search only know what they bother to look up.

Three researchers built a test called BlindToChange. One task asks for British computer scientists to write a book foreword. Tony Hoare is an obvious pick, but he died in March 2026.

Asked directly, Claude Opus 4.7 knew about such deaths 96.5% of the time. When the task did not mention them, it got 69.0% right. In more than half the failures, the agent never searched to see what had changed.

The catch: it is a preprint, and the models tested are older than today's best.

<div class="why"><b>Why it matters</b><p>A search agent is like a well-read friend who stopped reading the paper last spring. It only checks for news when you hint at it, so the hint is your job for now.</p></div>

<p class="todo"><b>Try it:</b> When the answer depends on recent events, ask the agent to check what has changed.</p>

Source: [arxiv.org](https://arxiv.org/abs/2610.41435) · <span class="tag tag-official">Official</span>
{: .sources}
