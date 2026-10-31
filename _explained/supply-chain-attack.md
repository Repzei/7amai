---
term: "Supply chain attack"
title: "What is a supply chain attack?"
summary: "Why attackers hide malware in software you already trust, and what you can do about it."
date: 2026-10-31
minutes: 2
other_lang_url: /da/explained/supply-chain-attack/
read_more:
  - { label: "CISA and NIST: Defending against software supply chain attacks", url: "https://www.cisa.gov/sites/default/files/publications/defending_against_software_supply_chain_attacks_508_1.pdf" }
  - { label: "Visual Studio Code: Extension runtime security", url: "https://code.visualstudio.com/docs/configure/extensions/extension-runtime-security" }
short: |
  A supply chain attack hides malicious code in software before it reaches you. The attacker does not break into your computer directly. They tamper with something you already trust, like an update or an add-on.

  Because the software comes from a familiar place, you install it without a second thought. Everyone who gets that version is hit at once.
---
A supply chain attack hides malicious code in software on its way to you. The attacker does not break into your computer. Instead, they tamper with the software before it reaches you, so you install it yourself.

> **Think of it like this:** a parcel from your usual shop is opened on the way, something is slipped inside, and it is sealed again. You open it without worry, because you know the sender.

The US security agency CISA and the standards body NIST describe how it works. An attacker gets into a software maker's systems and changes the software before it goes out. The poisoned software then attacks the customer's data or computer. It can happen to a new program, but also to a routine update or patch.

CISA names three common ways in. Attackers hijack updates, so a normal update carries the malware. They break code signing, the digital seal that shows who made a program. Or they slip bad code into open-source code that many programs use. A shop for add-ons can be a way in too, if attackers manage to publish a tampered version under a trusted name.

That is what makes the attack so effective. Everyone who installs that version is hit at once, and the usual advice, "only install things from trusted sources", does not help. The source was trusted.

Add-ons for code editors are an example. Microsoft says an extension in its editor, VS Code, has the same rights as the editor itself. It can read and write your files and reach the internet.

**Why it matters to you:** install fewer add-ons, keep track of what you have, and act fast when a shop warns about a bad version. Removing the software is not always enough, because the malware may have left something behind.
