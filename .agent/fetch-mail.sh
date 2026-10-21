#!/usr/bin/env bash
# Henter dagens færdige mail, som Jekyll har bygget på GitHub Pages (/mail/en/, /mail/en.txt,
# /mail/da/, /mail/da.txt), og venter, til Pages har bygget den nyeste commit på main.
# Brug: bash .agent/fetch-mail.sh <ÅÅÅÅ-MM-DD> [maks ventetid i sekunder, standard 600]
# Skriver /tmp/mail.html, /tmp/mail.txt, /tmp/mail-da.html, /tmp/mail-da.txt og emnerne
# (fra sidens <title>) i /tmp/subject.txt og /tmp/subject-da.txt.
# Exit 0 = klar til afsendelse, 1 = ikke bygget i tide eller fejl i mailen (send intet).
set -u
DATE="${1:?Brug: bash .agent/fetch-mail.sh <ÅÅÅÅ-MM-DD> [sekunder]}"
WAIT="${2:-600}"
SITE=https://7amai.com
end=$((SECONDS + WAIT))

while :; do
  git fetch -q origin main 2>/dev/null
  REV=$(git rev-parse origin/main)
  ready=1
  for L in en da; do
    suffix=""; [ "$L" = da ] && suffix="-da"
    # ?v= går uden om Pages' CDN-cache (max-age 600), ellers kan en gammel udgave komme tilbage.
    v="$(date +%s)$RANDOM"
    curl -fsS "$SITE/mail/$L/?v=$v" -o "/tmp/mail$suffix.html" || ready=0
    curl -fsS "$SITE/mail/$L.txt?v=$v" -o "/tmp/mail$suffix.txt" || ready=0
    grep -q "name=\"7amai-date\" content=\"$DATE\"" "/tmp/mail$suffix.html" 2>/dev/null || ready=0
    grep -q "name=\"7amai-revision\" content=\"$REV\"" "/tmp/mail$suffix.html" 2>/dev/null || ready=0
  done
  [ "$ready" = 1 ] && break
  if [ "$SECONDS" -ge "$end" ]; then
    echo "Mailen for $DATE er ikke bygget fra main ($REV) efter $WAIT sekunder. Tjek Pages-buildet: gh api repos/Repzei/7amai/pages/builds/latest" >&2
    exit 1
  fi
  sleep 20
done

python3 - /tmp <<'PY' || exit 1
import html, re, sys
tmp = sys.argv[1]
bad = []
for suffix in ['', '-da']:
    h = open(f'{tmp}/mail{suffix}.html', encoding='utf-8').read()
    t = open(f'{tmp}/mail{suffix}.txt', encoding='utf-8').read()
    for name, body in [(f'mail{suffix}.html', h), (f'mail{suffix}.txt', t)]:
        if '{{' in body: bad.append(f'{name}: {{{{ står tilbage')
        if chr(0x2013) in body or chr(0x2014) in body: bad.append(f'{name}: em/en dash')
        if len(body) < 2000: bad.append(f'{name}: for kort ({len(body)} tegn)')
    subject = html.unescape(re.search(r'<title>(.*?)</title>', h, re.S).group(1)).strip()
    open(f'{tmp}/subject{suffix}.txt', 'w', encoding='utf-8').write(subject)
    print(f'Emne{suffix or "-en"}: {subject}')
if bad:
    print('Mailen er ikke klar: ' + '; '.join(bad), file=sys.stderr)
    sys.exit(1)
PY
echo "Mail for $DATE klar (bygget fra $REV)."
