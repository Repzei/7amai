---
term: "Computer use"
title: "What is computer use?"
summary: "How an AI can work your apps by looking at the screen, and why that needs a short leash."
date: 2026-11-20
minutes: 2
other_lang_url: /da/explained/computer-use/
read_more:
  - { label: "Google AI Studio docs: Computer use", url: "https://aistudio.google.com/docs/computer-use" }
  - { label: "Anthropic docs: Computer use tool", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool" }
short: |
  Computer use means an AI model works a computer the way a person does. It looks at a screenshot, decides where to click or what to type, and then looks again to see what happened.

  That way it can use almost any app, even one with no special connection for AI. The price is that it can also click the wrong thing, so you approve the important steps.
---
Computer use means an AI model operates a computer through the screen, the way a person does. It sees, clicks and types instead of talking to an app through a special connection.

Most AI tools can only work with apps that were built for them. A program has to offer an API, a fixed way for software to talk to it. Many programs do not have one. Computer use gets around that.

> **Think of it like this:** a new colleague sits at your desk. They cannot read the program's code. They look at the screen, move the mouse and type, just like you, and check after each step that it worked.

It works as a loop. The app takes a screenshot and sends it to the model with the task. The model answers with one action, such as "click here" or "type this". The app does it, takes a new screenshot and sends it back. That repeats until the task is done.

Because the model reads the screen, it also reads whatever is on it. A web page can hide text that tries to give the agent new orders. That is called prompt injection. Google's and Anthropic's guides give the same advice. Run the agent in a closed-off space, and keep passwords and payment details away from it. Let a person approve steps that matter, like buying, sending or deleting.

It is also slower than an API. Each step needs a new picture and a new answer.

**Why it matters to you:** computer use lets an AI do the boring clicking in apps you already have. But it acts as you, so give it only the apps the task needs, and watch the first few runs.
