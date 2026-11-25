---
term: "MCP"
title: "What is MCP?"
summary: "The standard that lets an AI assistant use your files, tools and services."
date: 2026-11-25
minutes: 2
other_lang_url: /da/explained/mcp/
read_more:
  - { label: "Model Context Protocol: What is MCP?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }
short: |
  MCP, short for Model Context Protocol, is an open standard for connecting an AI assistant to things outside the chat: your files, a database, a search tool, a payment service.

  Without it, every assistant needs its own custom connection to every service. With it, a service is built once and works in any assistant that speaks MCP.
---
An AI model on its own can only read what you type and write an answer back. MCP is the standard that lets it reach further. It can open a file, look something up, send a message or start a job.

> **Think of it like this:** MCP is a USB-C port for AI assistants. A hard drive maker does not build one plug per laptop brand. It builds one port, and every laptop with that port can use the drive. The protocol's own documentation uses this comparison.

In practice there are two sides. A service, called an MCP server, describes what it can do. The assistant, called the client, reads that list. It may then call an action when that helps your request. Claude, ChatGPT and editors such as VS Code and Cursor all support it, so one server works in all of them.

The protocol started at Anthropic in November 2024 and is now an open standard with many contributors.

What MCP does not decide is how careful the service is. The standard says how to describe an action and how to call it. Whether the action asks you first, and how much it may do, is up to whoever built the server. That is why a payment service built on MCP still needs its own approvals and limits.

**Why it matters to you:** When an assistant can read your calendar, your files or your bank balance, an MCP server is usually behind it. It is worth knowing what each connected server may do. The assistant can use it the moment your request seems to call for it.
