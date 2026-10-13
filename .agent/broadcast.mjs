#!/usr/bin/env node
// Sender dagens udgave til alle tilmeldte i et segment via workerens /broadcast (som selv
// tilføjer Resends afmeldingslink). Brug: node .agent/broadcast.mjs <en|da> "<emne>" <mail.html> <mail.txt>
// Agenten har ikke Resend-nøglen med fuld adgang: BROADCAST_TOKEN er en network secret for
// workerens host, så proxyen sætter Authorization-headeren på. BROADCAST_TOKEN i miljøet bruges kun lokalt.
// curl i stedet for fetch af samme grund som i send-mail.mjs (fetch går uden om proxyen).
// Exit 0 = sendt, 3 = ikke autoriseret (token mangler: brug send-mail.mjs som fallback), 1 = anden fejl.

import fs from 'fs'
import os from 'os'
import path from 'path'
import { execFileSync } from 'child_process'

const ENDPOINT = 'https://7amai-signup.jesperkhl.workers.dev/broadcast'
const [lang, subject, htmlPath, textPath] = process.argv.slice(2)

if (!['en', 'da'].includes(lang) || !subject || !htmlPath || !textPath) {
  console.error('Brug: node .agent/broadcast.mjs <en|da> "<emne>" <mail.html> <mail.txt>')
  process.exit(1)
}

const payloadPath = path.join(os.tmpdir(), `broadcast-${process.pid}.json`)
fs.writeFileSync(payloadPath, JSON.stringify({
  lang,
  subject,
  name: `${subject} (${lang})`,
  html: fs.readFileSync(htmlPath, 'utf-8'),
  text: fs.readFileSync(textPath, 'utf-8'),
}))

const args = [
  '-sS', '-X', 'POST', ENDPOINT,
  '-H', 'Content-Type: application/json',
  '--data-binary', `@${payloadPath}`,
  '-w', '\n%{http_code}',
]
if (process.env.BROADCAST_TOKEN) args.push('-H', `Authorization: Bearer ${process.env.BROADCAST_TOKEN}`)

let out
try {
  out = execFileSync('curl', args, { encoding: 'utf-8' })
} catch (e) {
  console.error(`curl fejlede: ${e.message}`)
  process.exit(1)
} finally {
  fs.rmSync(payloadPath, { force: true })
}

const lines = out.trimEnd().split('\n')
const status = Number(lines.pop())
const body = lines.join('\n')
if (status === 401) {
  console.error('Ikke autoriseret (401): BROADCAST_TOKEN mangler som network secret. Send til redaktøren med send-mail.mjs i stedet.')
  process.exit(3)
}
if (status < 200 || status >= 300) {
  console.error(`Broadcast fejlede (${status}): ${body.slice(0, 300)}`)
  process.exit(1)
}
console.log(`Sendt til segment ${lang}: ${body.slice(0, 200)}`)
