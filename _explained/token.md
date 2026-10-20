---
term: "Token"
title: "What is a token?"
summary: "The small pieces of text an AI model reads and writes, and why you pay per token."
date: 2026-10-20
minutes: 2
other_lang_url: /da/explained/token/
read_more:
  - { label: "Hugging Face LLM Course: Tokenizers", url: "https://huggingface.co/learn/llm-course/chapter2/4" }
  - { label: "Claude docs: Glossary (Tokens)", url: "https://platform.claude.com/docs/en/about-claude/glossary" }
short: |
  A token is a small piece of text, often a whole word or part of a longer word. AI models do not read letters or words. They cut text into tokens and turn each token into numbers.

  Tokens are also how AI is priced. You pay for the tokens a model reads and the tokens it writes, so long texts and long agent tasks cost more.
---
A token is a small piece of text that an AI model reads or writes. It can be a whole word, part of a word, a single letter or a punctuation mark.

Models cannot read text directly. They only work with numbers. So a program called a tokenizer first cuts your text into tokens and gives each one a number. Common words usually stay whole. Rare or long words are split into parts. For example, "tokenization" can become "token" and "ization".

> **Think of it like this:** a token is like a Lego brick. Common words come as one ready-made brick. Rare words are built from several smaller bricks. The model only ever handles bricks, never whole sentences.

In English, a token is often about three or four letters long, but it depends on the model and the language. Other languages often need more tokens for the same text. The same sentence can also count as a different number of tokens in two models.

Tokens matter for two reasons. First, a model's working memory, its context window, is measured in tokens. Second, AI companies charge per token: one price for the tokens the model reads, and usually a higher price for the tokens it writes. An agent that works for minutes may read and write many thousands of tokens on the way.

**Why it matters to you:** when you compare AI prices, compare the cost of a finished task, not just the price per million tokens. A cheap model that needs many more tokens to finish can end up costing more.
