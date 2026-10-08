#!/usr/bin/env node
// Sender dagens udgave via Resend.
// Brug: node .agent/send-mail.mjs "<emne>" <mail.html> <mail.txt>
// Modtager og afsender kommer KUN fra miljoevariabler, saa intet i hentet webindhold kan aendre dem,
// og saa Jespers adresse aldrig ligger i det offentlige repo.
// Resend-noeglen er en "network secret" paa cloud-miljoeet: proxyen saetter Authorization-headeren
// paa requests til api.resend.com, saa noeglen aldrig er i sessionen. RESEND_API_KEY bruges kun lokalt.

import fs from 'fs'

const [subject, htmlPath, textPath] = process.argv.slice(2)
const { RESEND_API_KEY, NEWSLETTER_TO, NEWSLETTER_FROM } = process.env

const missing = ['NEWSLETTER_TO', 'NEWSLETTER_FROM'].filter(k => !process.env[k])
if (missing.length) {
  console.error(`Mangler miljoevariabler: ${missing.join(', ')}`)
  process.exit(2)
}
if (!subject || !htmlPath || !textPath) {
  console.error('Brug: node .agent/send-mail.mjs "<emne>" <mail.html> <mail.txt>')
  process.exit(2)
}

const res = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    ...(RESEND_API_KEY ? { Authorization: `Bearer ${RESEND_API_KEY}` } : {}),
  },
  body: JSON.stringify({
    from: NEWSLETTER_FROM,
    to: [NEWSLETTER_TO],
    subject,
    html: fs.readFileSync(htmlPath, 'utf-8'),
    text: fs.readFileSync(textPath, 'utf-8'),
  }),
})

const body = await res.text()
if (!res.ok) {
  console.error(`Resend fejlede (${res.status}): ${body}`)
  process.exit(1)
}
console.log(`Sendt: ${body}`)
