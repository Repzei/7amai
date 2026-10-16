#!/usr/bin/env python3
"""Læsbarhedstjek for en 7am AI-udgave (STYLE.md). Ingen pakker.

Brug: python3 .agent/readability.py _posts/<dato>-<slug>.md [_da/<dato>-<slug>.md ...]
Måler kun brødtekst (ikke front matter, meta-linjer, kildelinjer eller HTML). Virker også på
biblioteksfiler i _explained/ (der tjekkes læsetiden ikke). Exit 0 = OK, 1 = noget skal rettes.
"""
import re
import sys

WPM = 230
MAX_AVG = 16
MAX_SENTENCE = 25
MIN_CORE_MIN, MAX_CORE_MIN = 5.0, 7.5  # 7,5 rundes ned til 7 i front matter

SENTENCE_END = re.compile(r'(?<=[.!?])\s+(?=[A-ZÆØÅ0-9"“(\[])')
PASSIVE_EN = re.compile(r'\b(?:is|are|was|were|be|been|being)\s+(?:\w+ly\s+)?\w+(?:ed|en)\b', re.I)


def body_blocks(text):
    text = re.sub(r'\A---\n.*?\n---\n', '', text, flags=re.S)
    core, _, bonus = text.partition('\n***\n')
    return core, bonus


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


def check(path):
    text = open(path, encoding='utf-8').read()
    norm = path.replace('\\', '/')
    danish = '/_da/' in norm or '_explained/da/' in norm
    explainer = '_explained/' in norm
    core, bonus = body_blocks(text)
    core_h, core_p = clean(core)
    _, bonus_p = clean(bonus)

    sentences = [s for p in core_p + bonus_p for s in SENTENCE_END.split(p) if words(s)]
    lengths = [len(words(s)) for s in sentences]
    core_words = sum(len(words(x)) for x in core_h + core_p)
    bonus_words = sum(len(words(x)) for x in bonus_p)
    core_min = core_words / WPM
    avg = sum(lengths) / len(lengths) if lengths else 0
    long_ones = [s for s in sentences if len(words(s)) > MAX_SENTENCE]
    heavy_paras = [p for p in core_p + bonus_p if len([s for s in SENTENCE_END.split(p) if words(s)]) > 3]
    passive = 0 if danish else sum(len(PASSIVE_EN.findall(p)) for p in core_p + bonus_p)

    problems, notes = [], []
    if avg > MAX_AVG:
        problems.append(f'gennemsnitlig sætningslængde {avg:.1f} ord (højst {MAX_AVG})')
    for s in long_ones:
        problems.append(f'sætning på {len(words(s))} ord (højst {MAX_SENTENCE}): "{s[:90]}..."')
    if not explainer and not MIN_CORE_MIN <= core_min <= MAX_CORE_MIN:
        problems.append(f'kernens læsetid {core_min:.1f} min (skal være {MIN_CORE_MIN:.0f}-7)')
    if '!' in ' '.join(core_p + bonus_p):
        problems.append('udråbstegn i teksten')
    for p in heavy_paras:
        notes.append(f'afsnit med mere end 3 sætninger: "{p[:70]}..."')
    if passive > 3:
        notes.append(f'{passive} mulige passive konstruktioner (foretræk aktiv form)')

    print(f'== {path}')
    extra = f' | efter ***: {bonus_words} ord' if bonus_words else ''
    label = 'tekst' if explainer else 'kerne'
    print(f'   {label}: {core_words} ord = {core_min:.1f} min{extra}')
    print(f'   sætninger: {len(lengths)}, gennemsnit {avg:.1f} ord, længste {max(lengths) if lengths else 0} ord')
    for n in notes:
        print(f'   bemærk: {n}')
    for p in problems:
        print(f'   RET: {p}')
    print('   OK' if not problems else f'   {len(problems)} ting skal rettes')
    return not problems


if __name__ == '__main__':
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    results = [check(p) for p in sys.argv[1:]]
    sys.exit(0 if all(results) else 1)
