import os, glob
from PIL import Image
import pillow_heif

pillow_heif.register_heif_opener()
os.makedirs('public/thumbs', exist_ok=True)

files = sorted(glob.glob('public/images/photos/*.*'))
html = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '  <meta charset="utf-8">',
    '  <title>Galerie Photos Salon Tendance Attitud</title>',
    '  <style>',
    '    body { background: #162013; color: #FAF7F2; font-family: sans-serif; padding: 20px; }',
    '    h1 { color: #E5C368; }',
    '    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }',
    '    .card { background: #23301F; border-radius: 12px; padding: 10px; text-align: center; border: 1px solid rgba(229,195,104,0.2); }',
    '    img { width: 100%; height: 200px; object-fit: cover; border-radius: 8px; }',
    '    .name { margin-top: 8px; font-weight: bold; color: #E5C368; }',
    '  </style>',
    '</head>',
    '<body>',
    '  <h1>Galerie des 42 Photos Originales</h1>',
    '  <div class="grid">'
]

for f in files:
    name = os.path.basename(f)
    num = os.path.splitext(name)[0]
    thumb_path = f'public/thumbs/{num}.jpg'
    try:
        with Image.open(f) as img:
            img = img.convert('RGB')
            img.thumbnail((350, 350))
            img.save(thumb_path, 'JPEG', quality=85)
        html.append(f'    <div class="card"><img src="/thumbs/{num}.jpg"><div class="name">{name}</div></div>')
    except Exception as e:
        print(f'{name}: {e}')

html.append('  </div>')
html.append('</body>')
html.append('</html>')

with open('public/gallery.html', 'w', encoding='utf-8') as out:
    out.write('\n'.join(html))

print('Gallery generated successfully at public/gallery.html')
