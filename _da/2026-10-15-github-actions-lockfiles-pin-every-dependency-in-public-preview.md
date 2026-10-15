---
title: "GitHub Actions får lockfiles, der låser alle afhængigheder, i public preview"
summary: "GitHub tilføjer en lockfile til Actions-workflows, så et flyttet tag ikke kan ændre, hvad der kører. Desuden: HydraFusion får en Max-udgave. En stille dag."
date: 2026-10-15 07:00:00 +0200
reviewed: false
checked: false
minutes: 1.5
other_lang_url: /2026/10/15/
items:
  - { n: 1, anchor: "actions-lockfiles", signal: worth, tracks: [build], min: 1, source: official }
  - { n: 2, anchor: "hydrafusion-max", signal: quick, tracks: [build], min: 0.5, source: official }
---

### 1. Lockfiles til GitHub Actions-workflows er i public preview {#actions-lockfiles}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>

Meldt ud den 14. oktober. Tags og branches kan flytte sig, efter du har gennemgået en workflow, så en senere kørsel kan udføre anden kode. En ny lockfile, `.github/workflows/actions.lock`, låser actions, deres underafhængigheder og genbrugelige workflows til præcise commits. Du laver den med `gh actions-lock`-udvidelsen til GitHub CLI og tager workflows med ét ad gangen. Når en workflow er med, skal hver afhængighed have en post i lockfilen. Dependabots versionsopdateringer opdaterer de tilhørende poster i samme pull request. Administratorer kan slå politikken "Require lockfile" til, og CI kan tjekke, at filen er opdateret. Den findes på Free, Team og Enterprise Cloud. En lås gør ikke en afhængighed sikker: GitHub råder til at gennemgå afhængigheder, før du låser dem.

> **Hvad betyder det:** Prøv den på én ukritisk workflow først. Gennemgå det, du låser, og tilføj CI-tjekket, så filen ikke kommer ud af takt.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. Copilots HydraFusion får en Max-udgave og en ny modelpulje {#hydrafusion-max}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">½ min</span></p>

HydraFusion er GitHubs research preview, der sætter flere modeller sammen pr. opgave. Den 14. oktober opdaterede GitHub puljen til Claude Opus 5.5, GPT-6 Astra, GPT-6.1 Sol og GPT-6 Luna og tilføjede HydraFusion Max til sværere opgaver med mere ræsonnering. Udkast kører nu med medium indsats og gennemgang med høj. Den virker i VS Code, Copilot-appen og Copilot CLI på Pro, Pro+, Business og Enterprise, med preview-funktioner slået til og under organisationens modelpolitik. Indlægget oplyser hverken priser eller benchmarktal.

> **Hvad betyder det:** Prøv den kun, hvis du er tryg ved preview-funktioner, og hold øje med forbruget, da GitHub ikke oplyser omkostninger.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option) · <span class="tag tag-official">Officiel</span>
{: .sources}
