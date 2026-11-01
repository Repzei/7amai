---
term: "Cross-site scripting (XSS)"
title: "What is cross-site scripting?"
summary: "How a stranger's code can end up running inside a website you trust, and why that is so dangerous."
date: 2026-11-01
minutes: 2
other_lang_url: /da/explained/cross-site-scripting/
read_more:
  - { label: "MDN Web Docs: Cross-site scripting (XSS)", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS" }
short: |
  Cross-site scripting, or XSS, is an attack where a stranger gets a website to run their code as if it were part of the site. It happens when a site takes text from outside and puts it into a page without making it safe first.

  Because the code runs inside the site, it can do what you can do there: read your data and act in your name.
---
Cross-site scripting, often shortened to XSS, is an attack. A stranger gets a website to run their code as if it were part of the site.

Your browser keeps websites apart. A page from one site is not allowed to read your data on another site. XSS gets around that rule, because the stranger's code does not come from outside. It runs inside the trusted site itself.

> **Think of it like this:** a company lets anyone pin notes on its notice board. One note is written to look like an order from the boss, and staff follow it. Nobody broke in. The note was simply put where orders are trusted.

It works when a site does two things. It accepts text that someone else could have written, such as a comment, a link or a search. And it puts that text into a page without making it safe first. If the text contains code, the browser runs it.

Once it runs, the code can do anything the site's own code can do. It can read what is on the page and send requests with your login, so it can act in your name. That is why a single link or a single comment can be enough.

Websites defend themselves in a few ways. They turn special characters into plain text, so code is shown instead of run. They clean any HTML they must allow, using a tested library. And they set a strict list of which scripts the browser may run, which acts as a backup if something slips through.

**Why it matters to you:** AI chat apps now show graphs, previews and small apps inside the chat. Each of those is a place where outside text meets a page, so each is a possible way in. The fixes happen on the company's side, but it is a good reason to be careful with links, even ones that look ordinary.
