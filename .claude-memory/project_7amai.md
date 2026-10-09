---
name: project-7amai
description: 7am AI - Jespers daglige danske AI-nyhedsbrev (prototype, live 2026-10-09 på 7amai.com): formål, beslutninger, status og roadmap mod offentligt nyhedsbrev
metadata:
  type: project
---

# 7am AI (startet 2026-10-08, live 2026-10-09)

Dagligt AI-nyhedsoverblik, klar før kl. 7 på hverdage: en udgave på https://7amai.com og en kort mail til Jesper med links til hvert punkt. Skrives af en Claude cloud-routine. Teknik og drift: [[project-7amai-infra]]. Faldgruber: [[feedback-7amai-lessons]].

**Why:** Jesper vil hurtigt kunne læse og følge op på AI-nyt (modeller/priser, udviklerværktøjer, lokale modeller og hardware, apps/forretning, regulering/EU). Mulig fremtidig offentlig niche: et dansk AI-nyhedsbrev har langt mindre konkurrence end de engelske (The Rundown, TLDR AI, Ben's Bites).

**How to apply:** Byg altid, så det kan åbnes for andre senere uden ombygning (sprog, tilmelding, branding), men lav ikke det offentlige før Jesper beslutter det.

## Låste beslutninger (Jesper, 2026-10-08/09)
- Navn: **7am AI**, domæne **7amai.com** (internationalt navn, forståeligt på alle sprog). 7amai.dk ikke nødvendigt nu. 7amai.store kun hvis gratis og med auto-fornyelse slået fra; merch hører under 7amai.com/shop senere.
- Prototype til Jesper selv nu, offentligt senere. Siden har `noindex` indtil da.
- Dansk først, engelsk (`/en/`) når det skal ud.
- Hverdage, 5-10 punkter, faste sektioner: Modeller og priser · Udviklerværktøjer · Lokale modeller og hardware · Apps og forretning · Regulering og EU · Værd at prøve · Opfølgning. "Betyder for dig"-linje kun ved reel konsekvens. Hellere kort end fyld.
- Kører på Jespers abonnement (cloud-routine), ikke på Anthropic API-saldoen som AI-coachen i Gainfully bruger.
- Afsender `brief@7amai.com` via Resend (ikke gainfully.app).

## Status
- [x] Side, agent, routine, mail og domæne + HTTPS virker (første mail 2026-10-09).
- [x] Hukommelse virker: udgave 2 fulgte op på og rettede et punkt fra udgave 1.
- [ ] Følg de første 1-2 ugers udgaver: kvalitet, længde, kilder, om "Betyder for dig" rammer.

## Roadmap når det skal være offentligt (ikke besluttet endnu)
1. Fjern `noindex` i `_layouts/default.html`.
2. Engelsk version (`/en/`, egen `_posts`-mappe eller `lang`-felt, egen mail).
3. Tilmelding med dobbelt opt-in + afmeldingslink i hver mail (Resend Audiences/Broadcasts) + privatlivspolitik (GDPR).
4. Kvalitetskontrol før udsendelse til andre (fejl i AI-skrevet indhold koster tillid).
5. Først derefter: markedsføring, sponsorer (kræver typisk et par tusinde aktive læsere), evt. merch.
