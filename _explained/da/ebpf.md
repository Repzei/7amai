---
term: "eBPF"
title: "Hvad er eBPF?"
summary: "Hvordan små, kontrollerede programmer kan ændre, hvad Linux gør, mens det kører, uden genstart."
date: 2026-11-24
minutes: 2
other_lang_url: /explained/ebpf/
read_more:
  - { label: "ebpf.io: What is eBPF?", url: "https://ebpf.io/what-is-ebpf/" }
short: |
  eBPF er en teknologi i Linux, der lader små programmer køre inde i styresystemets kerne. Du kan tilføje ny adfærd, mens computeren kører, uden at ændre kernen eller genstarte.

  Før et program må køre, tjekker en kontrol, der hedder verifieren, at det ikke kan få systemet til at gå ned eller sidde fast i en uendelig løkke. Derfor bruges eBPF til sikkerhed, netværk og overvågning.
---
eBPF er en teknologi i Linux, der kører små programmer inde i kernen, styresystemets inderste del. Den lader dig tilføje ny adfærd til et kørende system uden at ændre kernens egen kode.

Før eBPF betød den slags én af to ting. Enten ventede man i årevis på en ændring i den officielle kerne. Eller man skrev et kernemodul, og det er risikabelt, fordi én fejl kan ødelægge kernen.

> **Tænk på det sådan her:** kernen er et travlt fabriksgulv, hvor kun betroede folk må arbejde. Med eBPF kan du sende en lille robot ind med en fast opgave. En vagt ved døren tjekker hver robot først. Kan den sætte sig fast eller røre den forkerte maskine, kommer den ikke ind.

Sådan virker det. Et eBPF-program bliver koblet til en krog, et sted hvor noget sker, fx når et program åbner en fil, eller en netværkspakke kommer ind. Når det sker, kører programmet. Det kan tælle, logge, tillade eller blokere det, der sker.

Vagten hedder verifieren. Den tjekker, at programmet har lov til at blive indlæst, altid bliver færdigt og kun læser den hukommelse, det må. Bagefter bliver programmet lavet om til hurtig maskinkode, så det kører næsten lige så hurtigt som kernen selv.

De fleste skriver aldrig selv eBPF. De bruger det gennem værktøjer til netværk, overvågning og sikkerhed i datacentre og skyen.

**Hvad betyder det for dig:** eBPF er én måde, sikkerhedsværktøjer kan ændre, hvad en kørende server gør, uden genstart. Det gør det muligt at blokere et kendt hul på et kørende system, mens den rigtige rettelse bliver testet.
