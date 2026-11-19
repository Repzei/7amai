---
term: "Prompt caching"
title: "What is prompt caching?"
summary: "Why an AI model can read the same text again for a fraction of the price."
date: 2026-11-19
minutes: 2
other_lang_url: /da/explained/prompt-caching/
read_more:
  - { label: "Anthropic docs: Prompt caching", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-caching" }
  - { label: "Google AI Studio docs: Context caching", url: "https://aistudio.google.com/docs/caching" }
short: |
  When you send text to an AI model, you pay for every token it reads. Prompt caching lets the model save its work on the start of a prompt, so the next request that starts the same way can reuse it.

  The reused part costs much less, often a tenth of the normal price or less. It only works if the start of the prompt is exactly the same.
---
Prompt caching means an AI model saves its work on the first part of a prompt. Then it does not have to do it again.

Every time you send a request to a model, it reads everything you send: the instructions, the documents, the whole chat so far. You pay for each token, the small pieces of text the model reads. In a long chat, most of that text is the same from one request to the next. The same goes for an agent that works on one project for an hour.

> **Think of it like this:** a teacher grading a stack of exams with the same first page. Instead of reading page one again for every exam, the teacher remembers it and starts on page two. The work on page one is done once.

That is what caching does. The provider keeps the model's work on the start of the prompt for a short time. When the next request starts with exactly the same text, the model picks up from there. Anthropic charges a tenth of the normal input price for most models when it reads from the cache. Google turns caching on by default for its newer Gemini models.

There are rules. The cached part must be exactly the same, down to the last character, and it must come first. Change one word early in the prompt, and the rest has to be read again. The cache also expires: at Anthropic, after 5 minutes by default, unless it is used again. The answer you get is the same as without caching. Only the price and the speed change.

**Why it matters to you:** for apps and agents that send the same long instructions again and again, caching can cut the bill a lot. When you compare model prices, look at the price for cached input too. For long agent jobs, it can matter more than the normal price.
