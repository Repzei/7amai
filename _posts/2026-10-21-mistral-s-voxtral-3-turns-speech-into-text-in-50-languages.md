---
title: "Mistral's Voxtral 3 turns speech into text in 50 languages"
summary: "A European lab now sells cheap transcription in every official EU language. Also: TorchTPU and DeepInfer loosen NVIDIA's grip, Anthropic adds user profiles, ChatGPT gets chat locks, and TypeScript in Rust."
date: 2026-10-21 07:00:00 +0200
reviewed: false
checked: false
minutes: 7
explained: { main: "word-error-rate", from: 1, more: ["mixture-of-experts", "context-window"] }
today:
  - { t: "Mistral's Voxtral 3 transcribes 50 languages, including all 24 official EU languages, from $0.0035 a minute.", why: "Anyone who turns meetings, calls or interviews into text." }
  - { t: "Google open-sources TorchTPU, and DeepSeek shares the software that runs its own models.", why: "Teams that want to run AI without depending on NVIDIA." }
  - { t: "Anthropic lets platforms tag each end customer, and pitches a law to halt dangerous models.", why: "Apps that resell Claude, and anyone following AI rules." }
  - { t: "ChatGPT can lock chats behind a PIN or Face ID, and OpenAI buys a drug-trial agent startup.", why: "Anyone who shares a phone or laptop, and pharma teams." }
  - { t: "Cloudflare and partners port the TypeScript compiler to Rust, up to 8 times faster.", why: "Web developers who wait on slow type checks." }
other_lang_url: /da/2026/10/21/
items:
  - { n: 1, anchor: "voxtral-3", signal: big, tracks: [europe, build, general], min: 1.5, source: official, number: "$0.0035", number_label: "per minute of transcribed audio (Voxtral Mini Transcribe 3)" }
  - { n: 2, anchor: "beyond-nvidia-software", signal: worth, tracks: [build], min: 1.5, source: official }
  - { n: 3, anchor: "anthropic-profiles-bill", signal: worth, tracks: [build, general], min: 1.5, source: official }
  - { n: 4, anchor: "openai-lock-orchestra", signal: worth, tracks: [general, europe], min: 1.5, source: reported }
  - { n: 5, anchor: "tsrs", signal: quick, tracks: [build], min: 1, source: official }
  - { n: 6, anchor: "pytorch-2-15-mac", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 7, anchor: "compaction-later-questions", signal: worth, tracks: [build], min: 1, source: official }
---

### 1. Mistral's Voxtral 3 turns speech into text in 50 languages {#voxtral-3}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Europe</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>$0.0035</b><span>per minute of transcribed audio (Voxtral Mini Transcribe 3)</span></div>

<p class="short"><span>The short version</span>French lab Mistral released Voxtral 3, a family of speech models. It transcribes all 24 official EU languages, makes far fewer mistakes than Whisper, and costs fractions of a cent per minute.</p>

Speech to text turns meetings into notes and interviews into quotes. But every wrong word means someone has to fix the text by hand, so the error rate decides how useful it is.

Mistral has now launched Voxtral 3. Its transcription models now cover 50 languages, including all 24 official EU languages. The family also includes live transcription, a text-to-speech voice and a voice agent API.

On a standard test in 45 languages, its larger model gets about 4 words wrong in 100. OpenAI's free Whisper model gets 16 wrong. The small model costs $0.0035 per minute.

Mistral offers it through a European endpoint as well as US and global ones.

There is a catch. These are Mistral's own charts, and they show some paid rivals close behind or level. The page also does not say whether anyone can download the models.

<div class="why"><b>Why it matters</b><p>Whisper is like a free typist who needs a lot of correcting. Voxtral is a better typist for a small fee, based in Europe. For a Danish clinic or law firm, that is the gap between notes you fix and notes you file.</p></div>

<p class="todo"><b>Try it:</b> Mistral's API has Voxtral 3 today. Test it on a recording in your own language before you switch.</p>

Source: [mistral.ai](https://mistral.ai/news/voxtral-3/) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. Two open releases make it easier to run AI without NVIDIA {#beyond-nvidia-software}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Google made TorchTPU open source, so PyTorch code can run on its chips. DeepSeek shared the software that serves its own models, and it runs on Huawei chips too.</p>

Most AI software is written for NVIDIA's chips, so switching to cheaper chips takes real work. Two releases on 20 October make it easier.

#### <span>1 of 2</span> Google opens up TorchTPU
PyTorch is the toolkit most AI models are built with. Google built TorchTPU with Meta's PyTorch team, so PyTorch code can run on Google's own TPU chips with "minimal code changes". In Hugging Face's Transformers library, you pick the TPU with a single setting.

#### <span>2 of 2</span> DeepSeek shares its serving engine
DeepSeek released DeepInfer, the software that runs its models in production, under the free Apache 2.0 license. It works on NVIDIA's latest data centre chips and on Huawei's Ascend 950. For now it only runs one model, DeepSeek-V4.1-Flash, and some production parts are left out, such as a memory cache.

<div class="why"><b>Why it matters</b><p>Chips are like electrical sockets: a plug that fits only one socket ties you to one supplier. Both releases are adapters. More adapters make it harder for one chipmaker to set the price.</p></div>

Source: [cloud.google.com](https://cloud.google.com/blog/topics/ai-infrastructure/torchtpu-is-now-open-source-run-native-pytorch-on-tpus) · <span class="tag tag-official">Official</span> · [github.com](https://github.com/deepseek-ai/DeepInfer) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. Anthropic adds user profiles to its API and pitches a safety law {#anthropic-profiles-bill}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Apps that resell Claude can now tell Anthropic which customer each request is for. Separately, Anthropic is showing Congress a draft law to stop a dangerous model's release.</p>

#### <span>1 of 2</span> One bad customer no longer has to sink a whole app
Many apps run on Claude behind the scenes. If one of their users broke Anthropic's rules, enforcement could hit the whole app. With user profiles, launched on 20 October, a platform tags each request with its end customer. Then a ban can hit that one customer instead.

#### <span>2 of 2</span> A draft law with a court as the brake
Anthropic has shown lawmakers a draft bill, TechCrunch reports. Independent testers would check new models. If they find an imminent risk of over 50 deaths or $1 billion in damage, they have 72 hours to tell the Commerce Department. Only a judge could then halt the release. Anthropic confirmed the draft to Politico. So far it is only a draft.

<div class="why"><b>Why it matters</b><p>User profiles are like a landlord who can evict one noisy tenant instead of closing the building. The bill tries the same thing for whole models: a narrow brake, used by a court, only for a disaster.</p></div>

<p class="todo"><b>Do this:</b> If you resell Claude to your own customers, add user profiles to your API calls.</p>

Source: [platform.claude.com](https://platform.claude.com/docs/en/release-notes/overview) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/10/20/anthropic-pitches-ai-safety-bill-that-may-block-a-model-if-50-people-could-be-killed/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. ChatGPT can lock your chats, and OpenAI buys a drug-trial agent startup {#openai-lock-orchestra}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Europe</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>ChatGPT now hides chosen chats behind a PIN or Face ID. OpenAI also bought Orchestra Bio to add AI agents to its tools for drug companies.</p>

#### <span>1 of 2</span> Locked chats stay private on a shared screen
Many people ask ChatGPT about health or money, then hand their phone to someone. From 20 October, you can lock a chat with a four-digit PIN or Face ID, TechCrunch reports. It works on most plans, from Free to Enterprise.

The lock is a curtain, not a safe. It adds no extra encryption, and it does not change what OpenAI keeps or trains on. If you reset the PIN, all locked chats are deleted for good.

#### <span>2 of 2</span> OpenAI moves deeper into drug development
OpenAI bought Orchestra Bio, which builds agents that track budgets and fix scheduling problems in drug trials. The team joins Rosalind, OpenAI's tools for life science. TechCrunch says Moderna and Denmark's Novo Nordisk already use Rosalind. The price was not disclosed.

<div class="why"><b>Why it matters</b><p>Both moves show where chatbots are heading: into the private and the serious parts of life. The lock keeps a nosy friend out, not a hacker. The most sensitive things still do not belong in a chat.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/10/20/chatgpt-now-lets-you-lock-your-chats) · <span class="tag tag-reported">Reported</span> · [techcrunch.com](https://techcrunch.com/2026/10/20/openai-acquires-startup-orchestra-bio%e2%81%a0-to-beef-up-its-biotech-business/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. The TypeScript compiler gets a Rust port that runs up to 8 times faster {#tsrs}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Cloudflare and partners released tsrs, an experimental TypeScript compiler written in Rust. They say it is up to 8 times faster than TypeScript 7.0.</p>

In big web projects, checking for type errors can be slow. On 20 October, Cloudflare, VoidZero and Owner.com's Max Schwenk released tsrs. It is a Rust port of the TypeScript compiler, built with the TypeScript team, which keeps control of the language.

The team says tsrs is up to 8 times faster than TypeScript 7.0 and uses about 70% less memory. Cloudflare also writes that frontier AI models can now do ports like this almost on their own in days. It is still experimental, and some output differs from the original.

<div class="why"><b>Why it matters</b><p>If AI can do a port like this in days, the tools developers wait on every day can get faster much sooner.</p></div>

<p class="todo"><b>Try it:</b> Run <code>npx tsrs</code> on a project and compare the time with your usual check.</p>

Source: [blog.cloudflare.com](https://blog.cloudflare.com/typescript-rust-port/) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### PyTorch 2.15 runs mixture-of-experts models up to 6.5 times faster on Macs {#pytorch-2-15-mac}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>The next PyTorch makes Apple Silicon Macs much faster at running many open models locally. It is a test release for now.</p>

Many new open models are mixtures of experts: they only use a small part of themselves for each word. On a Mac, PyTorch handled them badly, so they ran slowly.

Hugging Face's PyTorch team says version 2.15 fixes that. Such models now write their answers 5 to 6.5 times faster than in 2.14. On an M3 Ultra, Qwen3.6-35B-A3B went from 9 to 61 tokens per second.

It is a test version for now, and it needs macOS 15 or newer.

<div class="why"><b>Why it matters</b><p>Nine tokens per second is like waiting for someone to type. Sixty is faster than you can read. That gap decides whether a private model on your own Mac feels usable at all.</p></div>

Source: [huggingface.co](https://huggingface.co/blog/mps-pytorch-2-15) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### Shrinking an agent's memory is often tested on the wrong question {#compaction-later-questions}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Ways of trimming a long conversation look good on the question at hand. On the questions that come later, many do no better than deleting sentences at random.</p>

Coding agents run out of room in long sessions. So they compact: they shrink the history and keep what seems important. But what seems important now may not be what you ask about next.

A team led by Junwei Yao tested this. Keeping only the sentences needed for the current question raised accuracy on that question by 11.4 points, at a quarter of the text. On later questions, no such method did measurably better than random deletion. A tool that ignores the question, LLMLingua-2, beat random deletion on later questions in one test.

On agent tasks, where later steps needed exact names and IDs, the result flipped again.

<div class="why"><b>Why it matters</b><p>It is like packing for a trip by only thinking about the first day. The authors' point is simple: test compaction on what comes next, not on what you just asked.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.27301) · <span class="tag tag-official">Official</span>
{: .sources}
