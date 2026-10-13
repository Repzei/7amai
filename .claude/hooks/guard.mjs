#!/usr/bin/env node
// Haarde regler for 7am AI-agenten (PreToolUse). Reglerne i .agent/INSTRUCTIONS.md er tekst;
// de her er kode, saa agenten ikke kan bryde dem ved en fejl. Exit 2 = blokeret, og stderr
// vises for agenten. Interne fejl blokerer IKKE (exit 0), undtagen regel 1, hvor tvivl skal
// give det sikre resultat: ingen "Reviewed by Jesper".
//
// 1. reviewed: true kun hvis Jesper har merget PR'en for issue/<dato> FOER kl. 07:00 dansk tid
//    (agenten merger tidligst kl. 7, saa en merge foer kl. 7 er Jespers godkendelse).
// 2. Agenten maa ikke merge en PR foer kl. 07:00 dansk tid.
// 3. Ingen mail med em/en dash eller tilbagevaerende {{ fra skabelonen.
// 4. Kald til Resend og workerens /broadcast kun via .agent/send-mail.mjs og .agent/broadcast.mjs.
// 5. Ingen em/en dash i filer der skrives i repoet.

import fs from 'fs'
import path from 'path'
import { execFileSync } from 'child_process'

// Tegnkoder i stedet for tegnene selv, saa denne fil ikke selv indeholder dem.
const DASHES = new RegExp('[' + String.fromCharCode(0x2013, 0x2014) + ']')
const REPO = 'Repzei/7amai'

let data
try { data = JSON.parse(fs.readFileSync(0, 'utf8')) } catch { process.exit(0) }

const tool = String(data.tool_name || '')
const input = data.tool_input || {}
const root = process.env.CLAUDE_PROJECT_DIR || data.cwd || process.cwd()

const block = (msg) => { process.stderr.write(`7am AI-regel: ${msg}\n`); process.exit(2) }
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
const copenhagen = (iso) => {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Copenhagen', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date(iso)).map(p => [p.type, p.value]))
  return { date: `${parts.year}-${parts.month}-${parts.day}`, time: `${parts.hour}:${parts.minute}` }
}

// Regel 5: em/en dash i filer.
if (tool === 'Edit' || tool === 'Write' || tool === 'MultiEdit') {
  const text = [input.content, input.new_string, ...(input.edits || []).map(e => e.new_string)].filter(Boolean).join('\n')
  const file = String(input.file_path || '')
  if (/\.(md|html|yml|yaml|txt)$/i.test(file) && DASHES.test(text)) {
    block(`em dash eller en dash i ${path.basename(file)}. Brug bindestreg, kolon eller en ny saetning.`)
  }
  process.exit(0)
}

if (tool !== 'Bash') process.exit(0)
const cmd = String(input.command || '')

// Regel 4: Resend og workerens /broadcast kun via scripts.
const MAIL_SCRIPT = /(send-mail|broadcast)\.mjs/
if (/api\.resend\.com|workers\.dev\/broadcast/i.test(cmd) && !MAIL_SCRIPT.test(cmd)) {
  block('mail sendes KUN med `node .agent/send-mail.mjs` eller `node .agent/broadcast.mjs`.')
}

// Regel 3: tjek mailen foer afsendelse.
if (MAIL_SCRIPT.test(cmd)) {
  const files = [...cmd.matchAll(/(?:"([^"]+\.(?:html|txt))"|'([^']+\.(?:html|txt))'|(\S+\.(?:html|txt)))/g)].map(m => m[1] || m[2] || m[3])
  const subject = (cmd.match(/(?:send-mail|broadcast)\.mjs\s+(?:(?:en|da)\s+)?("([^"]*)"|'([^']*)')/) || [])
  if (DASHES.test(subject[2] || subject[3] || '')) block('mailemnet indeholder em dash eller en dash.')
  for (const f of files) {
    let body
    try { body = fs.readFileSync(path.resolve(root, f), 'utf8') } catch { continue }
    if (DASHES.test(body)) block(`${f} indeholder em dash eller en dash. Ret teksten foer afsendelse.`)
    if (body.includes('{{')) block(`${f} har stadig {{pladsholdere}} fra skabelonen. Udfyld eller fjern dem foer afsendelse.`)
  }
  process.exit(0)
}

// Regel 2: ingen merge foer kl. 07:00 dansk tid.
if (/pulls\/\d+\/merge/.test(cmd) && /(-X|--method)\s*PUT/i.test(cmd)) {
  // GUARD_NOW bruges kun af testene til at simulere et tidspunkt.
  if (copenhagen(process.env.GUARD_NOW || new Date().toISOString()).time < '07:00') {
    block('agenten maa ikke merge foer kl. 07:00 dansk tid. En merge foer kl. 7 betyder "godkendt af Jesper".')
  }
}

// Regel 1: reviewed: true kraever Jespers merge foer kl. 07:00.
const isCommit = /\bgit\b[^|;&]*?\bcommit\b/.test(cmd)
const isPush = /\bgit\b[^|;&]*?\bpush\b/.test(cmd)
if (!isCommit && !isPush) process.exit(0)

let changed = []
try {
  if (isCommit) {
    // Med -a/--all er aendringerne endnu ikke staget; kig saa ogsaa paa arbejdskopien.
    const all = /\bcommit\b[^|;&]*\s-(a|am|-all)\b/.test(cmd)
    changed = git('diff', '--cached', '--name-only').split('\n')
    if (all) changed = changed.concat(git('diff', '--name-only').split('\n'))
  } else {
    let range = '@{upstream}..HEAD'
    try { git('rev-parse', '@{upstream}') } catch { range = 'origin/main..HEAD' }
    changed = git('diff', '--name-only', range).split('\n')
  }
} catch { process.exit(0) }

const reviewed = (t) => /^reviewed:\s*true\b/m.test(t)
for (const file of [...new Set(changed.map(s => s.trim()))].filter(f => /^_posts\/\d{4}-\d{2}-\d{2}-.+\.md$/.test(f))) {
  let now = '', before = ''
  try {
    now = isCommit ? fs.readFileSync(path.join(root, file), 'utf8') : git('show', `HEAD:${file}`)
    if (isCommit) { try { now += '\n' + git('show', `:${file}`) } catch {} }
  } catch { continue }
  try { before = git('show', `origin/main:${file}`) } catch {}
  if (!reviewed(now) || reviewed(before)) continue

  const date = file.slice(7, 17)
  let pr = {}
  try {
    pr = JSON.parse(execFileSync('gh', ['api', `repos/${REPO}/pulls?state=all&head=Repzei:issue/${date}`, '-q', '.[0] // {}'],
      { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], timeout: 15000 }) || '{}')
  } catch {
    block(`kunne ikke slaa PR'en for issue/${date} op, saa "reviewed: true" kan ikke bekraeftes. Behold "reviewed: false".`)
  }
  if (!pr.merged_at) block(`PR'en for issue/${date} er ikke merget. Behold "reviewed: false" i ${file}.`)
  const m = copenhagen(pr.merged_at)
  const approved = m.date < date || (m.date === date && m.time < '07:00')
  if (!approved) {
    block(`PR'en for issue/${date} blev merget ${m.date} kl. ${m.time} dansk tid, altsaa ikke af Jesper foer kl. 7. Behold "reviewed: false" i ${file}.`)
  }
}
process.exit(0)
