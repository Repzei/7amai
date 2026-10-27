#!/usr/bin/env python3
"""Delingsbillede (og:image) til én udgave: 1200x630 PNG, under 1 MB.

Brug: python3 .agent/og-image.py _posts/<dato>-<slug>.md _da/<dato>-<slug>.md
Skriver assets/og/<dato>.png (engelsk) og assets/og/da/<dato>.png (dansk). _layouts/default.html
bruger billedet på udgavesiden, når filen findes; ellers assets/og.png.

Variant B: lead-historiens nøgletal (items, n: 1) stort, nøgletallets forklaring og overskriften.
Variant A (lead-historien har intet nøgletal): overskriften stort og solen på horisontstregen.
Al tekst kommer fra udgavens egen front matter; scriptet skriver aldrig noget nyt.
Kræver Pillow. Skrifterne ligger i .agent/fonts (OFL).
"""
import os
import re
import sys
from datetime import date

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
SKY, INK, SUN, SUN_INK, MIST = '#EEF3FA', '#0E1A33', '#FF8A2A', '#B4500A', '#55627A'
PAD = 80
LINE_Y = H - 64 - 10  # horisontstregen: 10 px høj, 64 px fra bunden (som assets/og.png)
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
FONTS = os.path.join(ROOT, '.agent', 'fonts')
DAYS = {'en': ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'], 'da': ['MAN', 'TIR', 'ONS', 'TOR', 'FRE', 'LØR', 'SØN']}
MONTHS = {'en': ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          'da': ['JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC']}


def grotesk(size, weight):
    f = ImageFont.truetype(os.path.join(FONTS, 'SchibstedGrotesk.ttf'), size)
    f.set_variation_by_axes([weight])
    return f


def newsreader(size):
    f = ImageFont.truetype(os.path.join(FONTS, 'Newsreader.ttf'), size)
    f.set_variation_by_axes([400, min(72, max(6, size))])
    return f


def yaml_str(front, key, text=None):
    """Værdien af key: "..." (YAML med dobbelte anførselstegn) i front eller i en items-linje."""
    m = re.search(r'(?:^|[\s{,])' + key + r':\s*"((?:[^"\\]|\\.)*)"', text if text is not None else front, re.M)
    return m.group(1).replace('\\"', '"').replace('\\\\', '\\') if m else ''


def read_issue(path):
    text = open(path, encoding='utf-8').read()
    front = re.match(r'---\n(.*?)\n---\n', text, re.S).group(1)
    lead = re.search(r'(?m)^\s*- \{\s*n:\s*1\s*,.*$', front)
    lead = lead.group(0) if lead else ''
    minutes = re.search(r'(?m)^minutes:\s*([\d.]+)', front)
    day = date.fromisoformat(re.search(r'(\d{4}-\d{2}-\d{2})', os.path.basename(path)).group(1))
    return {
        'title': yaml_str(front, 'title'),
        'number': yaml_str(front, 'number', lead),
        'label': yaml_str(front, 'number_label', lead),
        'minutes': minutes.group(1).rstrip('0').rstrip('.') if minutes and '.' in minutes.group(1) else (minutes.group(1) if minutes else ''),
        'day': day,
    }


def wrap(text, font, width):
    """Ombryder ved mellemrum. Et ord, der er bredere end width, giver None (skalér ned)."""
    lines, line = [], ''
    for word in text.split():
        trial = (line + ' ' + word).strip()
        if font.getlength(trial) <= width:
            line = trial
        elif not line or font.getlength(word) > width:
            return None
        else:
            lines.append(line)
            line = word
    lines.append(line)
    return lines


def fit(text, make_font, sizes, width, max_lines):
    """Største skriftstørrelse, hvor teksten kan stå på højst max_lines linjer uden at beskære ord."""
    for size in sizes:
        font = make_font(size)
        lines = wrap(text, font, width)
        if lines and len(lines) <= max_lines:
            return font, size, lines
    font = make_font(sizes[-1])
    return font, sizes[-1], wrap(text, font, width) or [text]


def spaced(draw, xy, text, font, fill, spacing, anchor_right=False):
    """Tekst med ekstra bogstavafstand (Pillow har ingen letter-spacing)."""
    widths = [font.getlength(c) for c in text]
    total = sum(widths) + spacing * (len(text) - 1)
    x, y = xy
    if anchor_right:
        x -= total
    for c, w in zip(text, widths):
        draw.text((x, y), c, font=font, fill=fill)
        x += w + spacing


def render(issue, lang, out):
    img = Image.new('RGB', (W, H), SKY)
    d = ImageDraw.Draw(img)
    d.text((PAD, 56), '7am AI', font=grotesk(44, 800), fill=INK)
    meta = f'{DAYS[lang][issue["day"].weekday()]} {issue["day"].day} {MONTHS[lang][issue["day"].month - 1]}'
    if issue['minutes']:
        meta += f' · {issue["minutes"].replace(".", ",") if lang == "da" else issue["minutes"]} MIN'
    spaced(d, (W - PAD, 68), meta, grotesk(26, 700), SUN_INK, 3, anchor_right=True)
    d.rectangle((0, LINE_Y, W, LINE_Y + 10), fill=INK)
    text_w = W - 2 * PAD

    if issue['number']:
        y = 150
        nf, ns, nl = fit(issue['number'], lambda s: grotesk(s, 800), range(150, 59, -6), text_w, 1)
        d.text((PAD - 4, y), nl[0], font=nf, fill=SUN, anchor='lt')
        y += int(ns * 1.0) + 18
        if issue['label']:
            lf, ls, ll = fit(issue['label'], newsreader, range(40, 25, -2), text_w, 2)
            for line in ll:
                d.text((PAD, y), line, font=lf, fill=MIST, anchor='lt')
                y += int(ls * 1.25)
            y += 22
        room = LINE_Y - 36 - y
        tf, ts, tl = fit(issue['title'], lambda s: grotesk(s, 600), range(48, 25, -2), text_w, 3)
        while len(tl) * ts * 1.2 > room and ts > 26:
            tf, ts, tl = fit(issue['title'], lambda s: grotesk(s, 600), range(ts - 2, 25, -2), text_w, 3)
        for line in tl:
            d.text((PAD, y), line, font=tf, fill=INK, anchor='lt')
            y += int(ts * 1.2)
    else:
        sun_w = 180
        d.pieslice((W - 120 - sun_w, LINE_Y - sun_w // 2, W - 120, LINE_Y + sun_w // 2), 180, 360, fill=SUN)
        width = W - PAD - 120 - sun_w - 40
        tf, ts, tl = fit(issue['title'], lambda s: grotesk(s, 800), range(84, 39, -4), width, 4)
        block = len(tl) * int(ts * 1.1)
        y = 150 + max(0, (LINE_Y - 40 - 150 - block) // 2)
        for line in tl:
            d.text((PAD - 2, y), line, font=tf, fill=INK, anchor='lt')
            y += int(ts * 1.1)

    os.makedirs(os.path.dirname(out), exist_ok=True)
    img.save(out, optimize=True)
    size = os.path.getsize(out)
    if size >= 1_000_000:
        sys.exit(f'{out}: {size} bytes, skal være under 1 MB')
    print(f'{out}: {"B" if issue["number"] else "A"}, {size} bytes')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    for path in sys.argv[1:]:
        norm = path.replace('\\', '/')
        lang = 'da' if '/_da/' in '/' + norm else 'en'
        issue = read_issue(path)
        name = issue['day'].isoformat() + '.png'
        render(issue, lang, os.path.join(ROOT, 'assets', 'og', *(['da'] if lang == 'da' else []), name))
