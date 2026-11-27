---
term: "API"
title: "What is an API?"
summary: "The fixed way one program asks another for something, and why AI agents use them."
date: 2026-11-27
minutes: 2
other_lang_url: /da/explained/api/
read_more:
  - { label: "MDN Web Docs: API", url: "https://developer.mozilla.org/en-US/docs/Glossary/API" }
short: |
  An API, short for application programming interface, is the way one program talks to another. It is a fixed set of requests a service accepts, and the answers it gives back.

  You use a screen and buttons. A program uses an API. When an AI assistant reads your email or books a meeting, it usually does it through the service's API.
---
An API, short for application programming interface, is a fixed set of rules for how one program can ask another for something. People use an app through its screen. Programs use it through its API.

> **Think of it like this:** an API is like the order window at a takeaway. You do not walk into the kitchen. You pick from the menu, say your order the way the window expects, and get your food back through the same hatch. The kitchen can change behind the wall, as long as the window works the same.

In practice, a program sends a short request over the internet, such as "give me the ten newest emails". It uses a format the service has described. The service checks who is asking, often with an API key, and sends back an answer the program can read. Mozilla's web documentation calls an API a "contract" between the service and the software that uses it.

Most apps you use are built on other companies' APIs. A weather app gets its forecast from one. A travel site gets prices from airlines through them. AI models are sold the same way: developers pay to send text to a model's API and get the answer back.

AI agents use APIs to act for you. To sort your inbox, an agent calls the email service's API. That is why companies such as Google now set their own rules for how agents may use them, how often, and at what price.

**Why it matters to you:** when an assistant gets access to your email, files or calendar, it goes through an API. Who controls that window decides what the assistant can see, what it can do, and what it costs.
