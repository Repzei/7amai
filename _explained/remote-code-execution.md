---
term: "Remote code execution"
title: "What is remote code execution?"
summary: "The worst kind of security hole: a stranger runs their own code on your computer, from far away."
date: 2026-11-18
minutes: 2
other_lang_url: /da/explained/remote-code-execution/
read_more:
  - { label: "MITRE CWE-787: Out-of-bounds Write", url: "https://cwe.mitre.org/data/definitions/787.html" }
  - { label: "OWASP: Buffer Overflow", url: "https://community.owasp.org/vulnerabilities/Buffer_Overflow" }
short: |
  Remote code execution, or RCE, means an attacker can make a computer run their own code without sitting in front of it. Often they only need to send it some data.

  It is the most serious kind of hole, because whoever runs code on a server can usually read its data, change it or use it to attack more systems.
---
Remote code execution, often shortened to RCE, means that someone far away can make your computer run their own code. They do not need your password or a seat at your desk. Often it is enough to send the right data to a program that is open to the internet.

> **Think of it like this:** a program is like a clerk who follows a list of instructions. Normally you can only hand the clerk forms to fill in. An RCE hole is a trick that makes the clerk read your form as a new instruction, and then do whatever it says.

A common cause is a program that writes data past the end of the memory it set aside. The security catalog CWE calls this an out-of-bounds write. If an attacker controls what spills over, they can sometimes change the program's own instructions and make it run unexpected code.

Programs in languages like Java and Python are immune to this kind of spill, the security group OWASP explains. But there is one exception: the engine that runs the language. It is often written in faster, less protected code, so a bug there can still open the door.

A hole that needs no login is called unauthenticated or pre-auth. That is the worst case, because anyone who can reach the server can try.

**Why it matters to you:** when a security notice says "remote code execution", treat it as urgent. Find out if you run the affected software, and update it first, before the smaller fixes.
