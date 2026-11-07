---
term: "AI memory"
title: "What is memory in an AI assistant?"
summary: "How an AI keeps notes between conversations, and why a wrong note can do more harm than no note."
date: 2026-11-07
minutes: 2
other_lang_url: /da/explained/ai-memory/
read_more:
  - { label: "Claude Docs: Memory tool", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool" }
  - { label: "Anthropic: The components of agent memory", url: "https://www.anthropic.com/research/components-of-agent-memory" }
short: |
  An AI model forgets everything when a conversation ends. Memory is a way around that: the AI writes notes to files and reads them again in the next conversation.

  The model itself does not change. It only gets better notes to read, so the notes must be true and fit the task.
---
Memory in an AI assistant means notes that the AI writes down and reads again later, so it can remember things between conversations.

An AI model does not learn from talking to you. Everything it knows about your conversation sits in its context window, the text it can see right now. When the conversation ends, that text is gone. A memory tool fixes this. The AI saves what it learns in files, such as your preferences or how far a project has come. It checks those files when a new conversation starts.

> **Think of it like this:** a doctor does not remember every patient, but she reads your file before she sees you. The file is the memory. If someone wrote the wrong thing in it, she will trust that too.

The model itself stays the same. It only gets better notes to read. That is why good memory is mostly about the notes: what is worth saving, where it is kept, and when it is out of date. Anthropic, for example, lets Claude go back over old conversations offline to fix notes that have drifted. Short, true notes help most. A large pile of old notes can fill up the context window and get in the way.

Notes can also be stretched too far. A rule that fits one task, such as "you do not need to ask first", can be wrong in another task.

**Why it matters to you:** an assistant with memory saves you from explaining the same thing again and again. But check what it has saved about you now and then, and correct or delete what is wrong.
