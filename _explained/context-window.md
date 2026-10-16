---
term: "Context window"
title: "What is a context window?"
summary: "How much a model can read at once, and why it runs out."
date: 2026-10-16
minutes: 2
other_lang_url: /da/explained/context-window/
read_more:
  - { label: "Anthropic docs: Context windows", url: "https://docs.anthropic.com/en/docs/build-with-claude/context-windows" }
short: |
  The context window is how much text a model can look at in one go: your question, the documents you paste in and its own answer. It is measured in tokens, roughly three quarters of a word each.

  Anything outside the window the model simply cannot see. That is why long chats get summarised before they run out of room.
---
The context window is how much text a model can look at in one go. It includes your question, any documents you paste in, the conversation so far and the model's own answer.

It is measured in tokens. A token is a small piece of text, roughly three quarters of an English word. A window of 1 million tokens holds about 750,000 words, or several thick books.

> **Think of it like this:** the context window is the model's desk. Everything on the desk it can read and use. Anything that does not fit on the desk is out of sight.

When a conversation gets longer than the window, something has to go. Tools like Claude Code and ChatGPT summarise older parts of the chat to make room. That is why a model can "forget" details from early in a long session.

A bigger window is not automatically better. Long inputs cost more, because you pay per token. Models can also be less precise about details buried in the middle of a very long text.

**Why it matters to you:** for big documents or codebases, check the window size. For everyday questions, a shorter and well-chosen context often gives better and cheaper answers.
