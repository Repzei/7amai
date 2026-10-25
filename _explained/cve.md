---
term: "CVE"
title: "What is a CVE?"
summary: "The shared ID number every known security hole gets, and what the score next to it means."
date: 2026-10-25
minutes: 2
other_lang_url: /da/explained/cve/
read_more:
  - { label: "CVE Program (cve.org)", url: "https://www.cve.org/" }
  - { label: "FIRST: CVSS v4.0 User Guide", url: "https://www.first.org/cvss/v4.0/user-guide" }
short: |
  A CVE is a shared ID for a known security hole, like CVE-2026-111497. It lets everyone talk about the same flaw without confusion.

  Next to it you often see a CVSS score from 0 to 10. It says how severe the hole is, not how likely you are to be hit.
---
A CVE is a public ID number for a known security hole in software. The letters stand for Common Vulnerabilities and Exposures. The program started in 1999, and its mission is to identify, define and catalog publicly disclosed vulnerabilities.

Each ID has the same shape: CVE, the year, and a number. The Brotli flaw in this week's news is CVE-2026-111497. Organisations called CNAs, such as large software makers and security firms, hand out the IDs. The US non-profit MITRE runs the program, with backing from the US cyber agency CISA.

> **Think of it like this:** a CVE is like a case number at a hospital. Two doctors may describe a patient in different words, but the case number makes sure they talk about the same person.

A CVE says what is broken, not how bad it is. That is the job of CVSS, a separate scoring system run by the security group FIRST. It gives a score from 0 to 10. A score from 7.0 is High, and from 9.0 it is Critical.

The score has a limit, and FIRST says so itself. It measures how severe a hole is in general, not the risk to you. A critical hole in a feature you never use matters less than a medium one in your login page.

**Why it matters to you:** when a security notice names a CVE, search for that ID. You will see at once whether your tools are affected. Then use the score to decide what to patch first, together with what you actually run.
