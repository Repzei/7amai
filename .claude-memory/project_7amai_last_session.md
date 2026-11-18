---
name: 7amai-last-session
description: "7am AI HANDOFF fra seneste session - hvad blev lavet, valg Jesper traf, faldgruber, hvor vi starter. Laes lige efter 7am AI's to-do"
metadata:
  node_type: memory
  type: project
  originSessionId: b8e3a230-7b07-4e90-9530-645548d14765
  modified: 2026-11-12T20:47:25.439Z
---

# 7am AI: handoff (seneste: 18. nov. 2026, kort mail; side-session startet fra marketing)

Detaljer i [[project-7amai-todo]] (afsnit KORT MAIL UDEN SCROLL). Overskriv denne fil ved hver sessions afslutning.

## Lavet og hvorfor
- **Kort mail live** (304cf79/22f21fa testside, 0eb56ef go-live): hovedhistorien + overskrifter som links, kan læses uden at scrolle. Fordi mailen var så komplet, at ingen klikkede (8 af 104 besøg fra mailen), og målet er trafik til siden.
- fetch-mail.sh accepterer nu en kortere tekstversion (800 tegn), ellers ville afsendelsen stoppe.
- **Læsbar baggrund live** (76c5a6d): natblåt bånd i toppen, papir under (lys), neutral mørkegrå (mørk, følger systemet). Evidens tjekket (se to-do LÆSBAR BAGGRUND). Plus knap til lys/mørk i toppen (8c8cdf8) og bred top (1160 px) med lys velkomstboks (70a817e).
- **Tilmelding midt i udgaven fjernet** (dd5caea): Jesper syntes, den afbrød læsningen. Velkomst i toppen + tilmelding nederst er tilbage.
- **Solur i toppen** (360e91f): halvbue = døgnet, solen 06-18, månen 18-06, én ad gangen; står op ved sidevisning. Skjult under 540 px. Detaljer i to-do.

## Valg Jesper traf
- 18/11: variant B, "informeret uden at skulle scrolle ned". A og C for lange.
- 18/11: baggrund A (papir) med mørk tilstand der følger systemet i grå; "blå er ikke god at læse på".
- 18/11: top A (bred top, lys velkomst); B (velkomst i båndet) "lidt for meget".
- 18/11: solur: halvbuen skal blive (ikke hel cirkel), sol og måne én ad gangen (ikke samtidig), månen lodret. Endte med "perfect".

## Faldgruber
- Nye mørke farver skal i den fælles mørke blok i style.css (begge kopier), ellers virker knappen ikke for dem.
- fetch-mail.sh har en minimumslængde pr. fil: ændres mailens længde, så tjek den.
- Browser-panelet sætter requestAnimationFrame på pause, når det er skjult: solurets --s/--m kan stå tomme et øjeblik i test. Ikke en fejl.
- Ukendte sider på 7amai.com svarer 503 (ikke 404) lige nu; set 18/11, ikke undersøgt.
- Lokal test: hent den byggede /mail/ med curl og server den på localhost (127.0.0.1 afvises af browser-panelet, localhost virker).

## Hvor vi starter næste gang
1. 19/11 efter 07:00: kom mailen ud i det nye format? (Systemfanen deployet 18/11.)
2. Mål ca. 25/11 / 2/12: besøg fra "Mailen".
3. Jesper tjekker soluret om morgenen (solopgang kl. 6) og toppen på telefonen. Telefon-gimmick (fx logoets halvsol) kun hvis han beder om det.
4. Ellers som før: LinkedIn-lanceringen (Jesper), "Shipped or not?", måling ca. 25/11.
