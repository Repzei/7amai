# Tegner emne-ikonerne til mailen (assets/mail-icons/<topic>.png): SVG -> én side -> headless Edge
# -> beskåret PNG pr. ikon. PNG, fordi Gmail ikke viser SVG. Nyt emne: tilføj det her, i
# _data/i18n.yml (topics, begge sprog) og i STYLE.md "Mailen".
# Kør fra repoets rod (Windows, kræver Pillow): python .agent/mail-icons.py assets/mail-icons
import subprocess, sys, os
from PIL import Image
ICONS = {
 'security': '<path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"/>',
 'price': '<path d="M20 12l-8 8-9-9V4h7l10 8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
 'money': '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 10v4M18 10v4"/>',
 'chips': '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
 'voice': '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
 'research': '<path d="M14 3H6v18h12V7l-4-4z"/><path d="M9 14l2 2 4-4"/>',
 'model': '<path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><path d="M3 7l9 5 9-5M12 12v10"/>',
 'code': '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
 'agent': '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4M9 13v2M15 13v2"/><circle cx="12" cy="3" r="1"/>',
 'law': '<path d="M12 3v18M6 21h12M5 7h14M5 7l-3 7a3 3 0 0 0 6 0l-3-7M19 7l-3 7a3 3 0 0 0 6 0l-3-7"/>',
 'open': '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="7" r="2"/><path d="M6 7v10M18 9c0 5-12 3-12 8"/>',
 'local': '<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 19h20"/>',
 'business': '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
 'image': '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 17l-5-5-9 8"/>',
 'news': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>',
}
S = 120  # 3x af de 40 px, mailen viser
out = sys.argv[1]
tmp = __import__('tempfile').mkdtemp()
cells = ''.join(
  f'<div style="width:{S}px;height:{S}px;"><svg width="{S}" height="{S}" viewBox="0 0 40 40">'
  f'<rect width="40" height="40" rx="12" fill="#FFF4EA"/>'
  f'<g transform="translate(9 9)" fill="none" stroke="#B4500A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{svg}</g></svg></div>'
  for svg in ICONS.values())
page = f'<!doctype html><html><body style="margin:0;background:transparent;display:flex;">{cells}</body></html>'
open(os.path.join(tmp, 'icons.html'), 'w', encoding='utf-8').write(page)
W = S * len(ICONS)
edge = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
subprocess.run([edge, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--default-background-color=00000000',
  f'--window-size={W},{S}', f'--screenshot={os.path.join(tmp, 'sheet.png')}', __import__('pathlib').Path(os.path.join(tmp, 'icons.html')).resolve().as_uri()], check=True, timeout=60)
sheet = Image.open(os.path.join(tmp, 'sheet.png')).convert('RGBA')
print(sheet.size)
os.makedirs(out, exist_ok=True)
for i, name in enumerate(ICONS):
  sheet.crop((i * S, 0, (i + 1) * S, S)).save(os.path.join(out, f'{name}.png'), optimize=True)
print('ok', len(ICONS))
