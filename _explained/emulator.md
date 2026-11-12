---
term: "Emulator"
title: "What is an emulator?"
summary: "A program that copies a phone, a computer or a cloud service, so you can test on the copy instead of the real thing."
date: 2026-11-12
minutes: 2
other_lang_url: /da/explained/emulator/
read_more:
  - { label: "Android Developers: Run apps on the Android Emulator", url: "https://developer.android.com/studio/run/emulator" }
  - { label: "AWS Emulator on GitHub", url: "https://github.com/aws/aws-emulator" }
short: |
  An emulator is a program that pretends to be something else: a phone, a game console or a cloud service. Your code talks to the copy as if it were the real thing.

  Developers use emulators to test without the cost or risk of the real system. The copy is never perfect, so final checks still happen on the real thing.
---
An emulator is a program that pretends to be another device or service. Your code cannot tell the difference, so you can test on the copy instead of the real thing.

Google's Android Emulator is a well-known example. It runs a virtual Android phone on your computer. You can test an app on many phone models and Android versions without owning any of them. You can even fake incoming calls, a new location or a slow network.

> **Think of it like this:** a flight simulator. A pilot in training can practice a storm landing a hundred times. Nothing breaks, and nobody pays for fuel. But the simulator is only as good as its copy of the real plane.

That last part is the catch. An emulator copies how the real system behaves, but rarely all of it. AWS Emulator, a local copy of Amazon's cloud, says plainly that it is for building and testing, not for real work. Its project keeps a list of things that do not work yet. So a test that passes on the copy can still fail on the real thing.

Emulators have become more important with AI coding agents. An agent works best when it can try something, see the result and try again. If every try costs money or touches real customer data, a human has to watch. A free, safe copy lets the agent check its own work.

**Why it matters to you:** emulators make testing cheaper and safer, for people and for AI agents. When an agent says it tested its code, check whether it ran against the real system or a copy, and how close the copy is.
