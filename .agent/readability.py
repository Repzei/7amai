#!/usr/bin/env python3
"""Læsbarhed og læsetid for 7am AI (STYLE.md). Ingen pakker.

Brug:
  python3 .agent/readability.py <filer>          tjek (exit 0 = OK, 1 = noget skal rettes)
  python3 .agent/readability.py --fix <filer>    skriv korrekte læsetider i filerne, og tjek

Filer: udgaver (_posts/, _da/) og biblioteksfiler (_explained/, _explained/da/).
Måler kun brødtekst (ikke front matter, meta-linjer, kildelinjer eller HTML).

Læsetid er et løfte til læseren, så den regnes forsigtigt: 200 ord pr. minut (lidt under
gennemsnittet for faglitteratur, fordi teksten har tal og fagudtryk, og mange læser på deres
andetsprog) og rundes altid OP. Kernen = alt før en evt. `***`; Explained tæller ikke med.
"""
import math
import re
import sys

WPM = 200
MAX_AVG = 16
MAX_SENTENCE = 25
MIN_CORE, MAX_CORE = 5, 7  # hele minutter, rundet op

SENTENCE_END = re.compile(r'(?<=[.!?])\s+(?=[A-ZÆØÅ0-9"“(\[])')
PASSIVE_EN = re.compile(r'\b(?:is|are|was|were|be|been|being)\s+(?:\w+ly\s+)?\w+(?:ed|en)\b', re.I)
FRONT = re.compile(r'\A(---\n.*?\n---\n)', re.S)
TRACK_MIN = re.compile(r'(<span class="track">)([^<]*?min)(</span>)')


def split_front(text):
    m = FRONT.match(text)
    return (m.group(1), text[m.end():]) if m else ('', text)


def clean(block):
    """Returnerer (overskrifter, afsnit) som ren tekst."""
    headings, paragraphs = [], []
    for raw in re.split(r'\n\s*\n', block):
        lines = [l for l in raw.strip().splitlines()
                 if l.strip()
                 and not l.lstrip().startswith(('<p class="item-meta"', '<div class="number"', '{:'))
                 and not re.match(r'\s*(Source|Sources|Kilde|Kilder|Docs|Dokumentation):', l)]
        if not lines:
            continue
        chunk = ' '.join(lines)
        chunk = re.sub(r'\{#[^}]*\}', '', chunk)
        chunk = re.sub(r'<[^>]+>', ' ', chunk)
        chunk = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', chunk)
        chunk = re.sub(r'[`*_>]', '', chunk).strip()
        chunk = re.sub(r'^-\s+', '', chunk)
        if not chunk:
            continue
        if raw.lstrip().startswith('#'):
            headings.append(chunk.lstrip('# ').strip())
        else:
            paragraphs.append(chunk)
    return headings, paragraphs


def words(s):
    return re.findall(r"[\wÆØÅæøå$€%][\w'’.,%$€-]*", s)


def count(block):
    h, p = clean(block)
    return sum(len(words(x)) for x in h + p)


def half_up(n_words):
    """Læsetid for én historie: rundet op til nærmeste halve minut, mindst ½."""
    return max(0.5, math.ceil(n_words / WPM * 2) / 2)


def label(m):
    whole, half = int(m), (m % 1) >= 0.5
    if whole == 0:
        return '½ min'
    return f'{whole}{"½" if half else ""} min'


def stories(core):
    """[(anker, tekst)] for hver ###-historie i kernen."""
    parts = re.split(r'(?m)^(?=### )', core)
    out = []
    for part in parts:
        if not part.startswith('### '):
            continue
        a = re.search(r'\{#([^}]+)\}', part.splitlines()[0])
        out.append((a.group(1) if a else None, part))
    return out


def analyse(path, fix):
    text = open(path, encoding='utf-8').read()
    norm = path.replace('\\', '/')
    danish = '/_da/' in norm or '_explained/da/' in norm
    explainer = '_explained/' in norm
    front, body = split_front(text)
    core, _, after = body.partition('\n***\n')

    problems, notes, fixes = [], [], []
    core_words = count(core)
    new_front, new_core = front, core

    if explainer:
        want = max(1, math.ceil(core_words / WPM))
        have = re.search(r'(?m)^minutes:\s*([\d.]+)', front)
        if not have or float(have.group(1)) != want:
            if fix:
                new_front = re.sub(r'(?m)^minutes:.*$', f'minutes: {want}', front) if have else front.replace('\n---\n', f'\nminutes: {want}\n---\n', 1)
                fixes.append(f'minutes -> {want}')
            else:
                problems.append(f'minutes i front matter skal være {want} (kør med --fix)')
    else:
        want = math.ceil(core_words / WPM)
        have = re.search(r'(?m)^minutes:\s*([\d.]+)', front)
        if not have or float(have.group(1)) != want:
            if fix:
                new_front = re.sub(r'(?m)^minutes:.*$', f'minutes: {want}', new_front)
                fixes.append(f'minutes -> {want}')
            else:
                problems.append(f'minutes i front matter skal være {want} (kør med --fix)')
        if not MIN_CORE <= want <= MAX_CORE:
            problems.append(f'kernens læsetid er {want} min (skal være {MIN_CORE}-{MAX_CORE}; {core_words} ord ved {WPM} ord/min)')
        for anchor, part in stories(core):
            m = half_up(count(part))
            meta = TRACK_MIN.findall(part)
            shown = meta[-1][1] if meta else None
            item = re.search(r'(?m)^.*anchor:\s*"' + re.escape(anchor or '') + r'".*$', new_front) if anchor else None
            item_min = re.search(r'\bmin:\s*([\d.]+)', item.group(0)) if item else None
            ok_meta = shown == label(m)
            ok_item = item_min is not None and float(item_min.group(1)) == m
            if ok_meta and ok_item:
                continue
            if fix:
                if meta:
                    last = list(TRACK_MIN.finditer(part))[-1]
                    fixed = part[:last.start()] + last.group(1) + label(m) + last.group(3) + part[last.end():]
                    new_core = new_core.replace(part, fixed, 1)
                if item and item_min:
                    line = item.group(0)
                    new_front = new_front.replace(line, re.sub(r'\bmin:\s*[\d.]+', f'min: {m:g}', line), 1)
                fixes.append(f'#{anchor}: {label(m)}')
            else:
                problems.append(f'læsetid for #{anchor} skal være {label(m)} (står: {shown}, items: {item_min.group(1) if item_min else "mangler"}; kør med --fix)')

    if fix and fixes:
        rebuilt = new_front + new_core + (('\n***\n' + after) if after else '')
        open(path, 'w', encoding='utf-8', newline='\n').write(rebuilt)

    _, paras = clean(core + '\n\n' + after)
    sentences = [s for p in paras for s in SENTENCE_END.split(p) if words(s)]
    lengths = [len(words(s)) for s in sentences]
    avg = sum(lengths) / len(lengths) if lengths else 0
    if avg > MAX_AVG:
        problems.append(f'gennemsnitlig sætningslængde {avg:.1f} ord (højst {MAX_AVG})')
    for s in sentences:
        if len(words(s)) > MAX_SENTENCE:
            problems.append(f'sætning på {len(words(s))} ord (højst {MAX_SENTENCE}): "{s[:90]}..."')
    if '!' in ' '.join(paras):
        problems.append('udråbstegn i teksten')
    for p in paras:
        if len([s for s in SENTENCE_END.split(p) if words(s)]) > 3:
            notes.append(f'afsnit med mere end 3 sætninger: "{p[:70]}..."')
    passive = 0 if danish else sum(len(PASSIVE_EN.findall(p)) for p in paras)
    if passive > 3:
        notes.append(f'{passive} mulige passive konstruktioner (foretræk aktiv form)')

    print(f'== {path}')
    print(f'   {"tekst" if explainer else "kerne"}: {core_words} ord = {math.ceil(core_words / WPM)} min (ved {WPM} ord/min, rundet op)')
    print(f'   sætninger: {len(lengths)}, gennemsnit {avg:.1f} ord, længste {max(lengths) if lengths else 0} ord')
    for f in fixes:
        print(f'   skrevet: {f}')
    for n in notes:
        print(f'   bemærk: {n}')
    for p in problems:
        print(f'   RET: {p}')
    print('   OK' if not problems else f'   {len(problems)} ting skal rettes')
    return not problems


if __name__ == '__main__':
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    args = sys.argv[1:]
    fix = '--fix' in args
    files = [a for a in args if a != '--fix']
    if not files:
        print(__doc__)
        sys.exit(1)
    results = [analyse(p, fix) for p in files]
    sys.exit(0 if all(results) else 1)
