---
term: "Emulator"
title: "Hvad er en emulator?"
summary: "Et program, der efterligner en telefon, en computer eller en cloudtjeneste, så du kan teste på kopien i stedet for det rigtige system."
date: 2026-11-12
minutes: 2
other_lang_url: /explained/emulator/
read_more:
  - { label: "Android Developers: Run apps on the Android Emulator (engelsk)", url: "https://developer.android.com/studio/run/emulator" }
  - { label: "AWS Emulator på GitHub (engelsk)", url: "https://github.com/aws/aws-emulator" }
short: |
  En emulator er et program, der lader som om, det er noget andet: en telefon, en spillekonsol eller en cloudtjeneste. Din kode taler med kopien, som om den var den rigtige.

  Udviklere bruger emulatorer til at teste uden at betale for eller risikere det rigtige system. Kopien er aldrig perfekt, så den sidste kontrol sker stadig på det rigtige.
---
En emulator er et program, der lader som om, det er en anden enhed eller tjeneste. Din kode kan ikke se forskel, så du kan teste på kopien i stedet for det rigtige system.

Googles Android Emulator er et kendt eksempel. Den kører en virtuel Android-telefon på din computer. Du kan teste en app på mange telefonmodeller og Android-versioner uden at eje nogen af dem. Du kan endda lade som om, der kommer et opkald, at telefonen er et andet sted, eller at nettet er langsomt.

> **Tænk på det sådan her:** en flysimulator. En pilot under uddannelse kan øve en landing i storm hundrede gange. Intet går i stykker, og ingen betaler for brændstof. Men simulatoren er kun så god som dens kopi af det rigtige fly.

Det sidste er fangsten. En emulator efterligner, hvordan det rigtige system opfører sig, men sjældent det hele. AWS Emulator, en lokal kopi af Amazons cloud, siger ligeud, at den er til at bygge og teste, ikke til rigtigt arbejde. Projektet har en liste over ting, der ikke virker endnu. Så en test, der består på kopien, kan stadig fejle på det rigtige system.

Emulatorer er blevet vigtigere med AI-kodeagenter. En agent arbejder bedst, når den kan prøve noget, se resultatet og prøve igen. Koster hvert forsøg penge eller rører rigtige kundedata, må et menneske holde øje. En gratis og sikker kopi lader agenten tjekke sit eget arbejde.

**Hvad betyder det for dig:** emulatorer gør test billigere og sikrere, for mennesker og for AI-agenter. Siger en agent, at den har testet sin kode, så spørg: mod det rigtige system eller mod en kopi? Og hvor god er kopien?
