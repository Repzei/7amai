---
term: "Coordinated disclosure"
title: "What is coordinated disclosure?"
summary: "How security holes are kept quiet until a fix is ready, and why that matters now that AI finds more of them."
date: 2026-10-22
minutes: 2
other_lang_url: /da/explained/coordinated-disclosure/
read_more:
  - { label: "CISA: Coordinated Vulnerability Disclosure Process", url: "https://www.cisa.gov/coordinated-vulnerability-disclosure-process" }
  - { label: "CERT/SEI: The CERT Guide to Coordinated Vulnerability Disclosure", url: "https://www.sei.cmu.edu/library/the-cert-guide-to-coordinated-vulnerability-disclosure/" }
short: |
  Coordinated disclosure is the usual way to handle a security hole. The person who finds it tells the maker first, and both keep quiet until a fix is ready.

  Then the fix and the warning go out at the same time, so users can protect themselves before attackers learn the details. A leak before that day gives attackers a head start.
---
Coordinated disclosure is the process for handling a newly found security hole. The finder reports it to the maker in private, the maker builds a fix, and everyone announces it together.

The steps are simple. A researcher finds a flaw and reports it to the maker, or to a body such as the US agency CISA. The maker checks the report and builds a fix. The flaw gets an ID, called a CVE number, so everyone can refer to the same problem. Then the fix and a public warning are published at the same time.

> **Think of it like this:** you notice that a shop's back door does not lock. You tell the owner quietly, not the whole street. Once the lock is changed, the owner can tell customers what happened. Where the comparison fails: with software, millions of "shops" share the same door, so they all need the new lock on the same day.

The quiet period is the hard part. If the maker does nothing, the warning can still go out after a while. CISA, for example, may publish as early as 45 days after it first tried to reach an unresponsive maker. If details leak early, attackers get a head start while users still have no fix.

AI is putting pressure on this system. AI models now help researchers find flaws faster, so makers receive more reports. The same models can also help attackers turn a short warning into a working attack quickly.

**Why it matters to you:** when a security update arrives with a warning, the clock has already started. The details are public, so install the fix soon.
