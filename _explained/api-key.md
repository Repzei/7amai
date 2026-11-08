---
term: "API key"
title: "What is an API key?"
summary: "The secret code that lets a program use a service in your name, and why it must never sit in your code."
date: 2026-11-08
minutes: 2
other_lang_url: /da/explained/api-key/
read_more:
  - { label: "OWASP: Secrets Management Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html" }
  - { label: "Google Cloud: Manage API keys", url: "https://docs.cloud.google.com/docs/authentication/api-keys" }
short: |
  An API key is a long secret code that a program sends with each request to a service, such as an AI model or a cloud database. The service uses it to know who is asking and who pays.

  Passwords, tokens and keys are all "secrets". Whoever holds one can act in your name, so it belongs in a safe place, never in shared code.
---
An API key is a long secret code that a program sends to a service each time it asks for something. The service uses it to know which account is asking, and who gets the bill.

Apps talk to AI models, payment services and cloud databases through an API: a fixed way for programs to talk to each other. The key goes along with every call. There is no face and no login screen, only the code.

> **Think of it like this:** an API key is like the card that opens the door at work. The door does not check who you are. It only checks the card. Whoever finds the card gets in, and the visits are logged in your name.

API keys belong to a wider group that developers call "secrets": passwords, tokens, keys and logins. They share one weakness. A secret works for anyone who has a copy of it.

That is why security guides give the same advice. Keep secrets in a safe store and point to them by name, for example `$DB_URL`, instead of typing them into code or commands. Limit what each key can do. And when a key has leaked, cancel it and make a new one at once. Deleting the file is not enough, because the old copy may already be in someone else's hands.

**Why it matters to you:** if you let an AI agent run commands for you, it may see and save your secrets. Treat its settings and log files like a password file, and keep them out of anything you share.
