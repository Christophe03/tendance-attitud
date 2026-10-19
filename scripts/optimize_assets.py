import os
import sys
from PIL import Image, ImageDraw

def create_directory(path: str):
    os.makedirs(path, exist_ok=True)

def extract_logo(home_path: str, output_path: str):
    """
    Extracts the circular logo badge from the header of Home.png
    and applies an antialiased circular mask for a clean transparent PNG.
    """
    if not os.path.exists(home_path):
        print(f"Warning: {home_path} not found.")
        return

    home = Image.open(home_path).convert('RGBA')
    # Header logo is centered at (682, 109), size 160x160 -> box (602, 29, 762, 189)
    logo_box = (602, 29, 762, 189)
    logo_crop = home.crop(logo_box)
    w, h = logo_crop.size

    # Create 4x supersampled circular mask for clean antialiased edge
    mask_scale = 4
    mask = Image.new('L', (w * mask_scale, h * mask_scale), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, w * mask_scale, h * mask_scale), fill=255)
    mask = mask.resize((w, h), Image.Resampling.LANCZOS)

    logo_rgba = logo_crop.copy()
    logo_rgba.putalpha(mask)
    logo_rgba.save(output_path, 'PNG', optimize=True)
    print(f"Saved: {output_path} ({logo_rgba.size}, {os.path.getsize(output_path)} bytes)")

def extract_map(home_path: str, output_path: str):
    """
    Extracts the map card mockup from Home.png and saves as clean WebP.
    """
    if not os.path.exists(home_path):
        print(f"Warning: {home_path} not found.")
        return

    home = Image.open(home_path).convert('RGBA')
    # Map coordinates: x=(798, 1288), y=(4339, 4952)
    map_box = (798, 4339, 1288, 4952)
    map_crop = home.crop(map_box)
    w, h = map_crop.size

    # Rounded rectangle mask with 24px radius
    radius = 24
    scale = 4
    mask = Image.new('L', (w * scale, h * scale), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, w * scale, h * scale), radius=radius * scale, fill=255)
    mask = mask.resize((w, h), Image.Resampling.LANCZOS)

    map_crop.putalpha(mask)
    map_crop.save(output_path, 'WEBP', quality=90)
    print(f"Saved: {output_path} ({map_crop.size}, {os.path.getsize(output_path)} bytes)")

def extract_region_to_webp(
    home_img: Image.Image,
    box: tuple,
    dst_path: str,
    temp_source_path: str = None,
    quality: int = 90
):
    """
    Saves an optimized WebP image either from temp_source_path (if present)
    or by cropping directly from Home.png (standalone fallback).
    """
    if temp_source_path and os.path.exists(temp_source_path):
        img = Image.open(temp_source_path).convert('RGB')
    elif home_img is not None:
        img = home_img.crop(box).convert('RGB')
    else:
        print(f"Warning: Cannot generate {dst_path}, neither source nor mockup available.")
        return

    img.save(dst_path, 'WEBP', quality=quality, method=6)
    print(f"Saved: {dst_path} ({img.size}, {os.path.getsize(dst_path)} bytes)")

# Exact bounding boxes in maquettes/Home.png (width=1366, height=5798)
MOCKUP_REGIONS = {
    # 2. Hero triptych
    'hero_left': {
        'box': (10, 105, 450, 650),
        'temp_name': 'hero_left.jpg',
        'dst_rel': 'hero/hero-left.webp',
    },
    'hero_center': {
        'box': (455, 105, 910, 650),
        'temp_name': 'hero_center.jpg',
        'dst_rel': 'hero/hero-center.webp',
    },
    'hero_right': {
        'box': (915, 105, 1355, 650),
        'temp_name': 'hero_right.jpg',
        'dst_rel': 'hero/hero-right.webp',
    },
    # 3. Prestations
    'cat_boucles': {
        'box': (165, 1260, 395, 1490),
        'temp_name': 'cat_boucles.jpg',
        'dst_rel': 'prestations/boucles.webp',
    },
    'cat_lissage': {
        'box': (430, 1260, 660, 1490),
        'temp_name': 'cat_lissage.jpg',
        'dst_rel': 'prestations/lissage.webp',
    },
    'cat_crepus': {
        'box': (700, 1260, 930, 1490),
        'temp_name': 'cat_crepus.jpg',
        'dst_rel': 'prestations/crepus.webp',
    },
    'cat_ondulations': {
        'box': (970, 1260, 1200, 1490),
        'temp_name': 'cat_ondulations.jpg',
        'dst_rel': 'prestations/ondulations.webp',
    },
    # 4. Salon
    'team_exterior': {
        'box': (680, 2370, 1315, 3010),
        'temp_name': 'team_exterior.jpg',
        'dst_rel': 'salon/team.webp',
    },
    'salon_interior': {
        'box': (450, 2740, 875, 3020),
        'temp_name': 'salon_interior.jpg',
        'dst_rel': 'salon/interior.webp',
    },
    # 5. Instagram
    'insta_1': {
        'box': (60, 3290, 455, 3700),
        'temp_name': 'insta_1.jpg',
        'dst_rel': 'instagram/insta-1.webp',
    },
    'insta_2': {
        'box': (485, 3290, 880, 3700),
        'temp_name': 'insta_2.jpg',
        'dst_rel': 'instagram/insta-2.webp',
    },
    'insta_3': {
        'box': (910, 3290, 1305, 3700),
        'temp_name': 'insta_3.jpg',
        'dst_rel': 'instagram/insta-3.webp',
    },
}

def main():
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    home_mockup = os.path.join(base_dir, 'maquettes', 'Home.png')
    regions_dir = os.path.join(base_dir, 'temp_thumbs', 'regions')
    public_dir = os.path.join(base_dir, 'public', 'images')

    # Ensure directories
    for sub in ['', 'hero', 'prestations', 'salon', 'instagram']:
        create_directory(os.path.join(public_dir, sub))

    # 1. Logo
    logo_dst = os.path.join(public_dir, 'logo.png')
    extract_logo(home_mockup, logo_dst)

    # Preload Home mockup if available for direct crop fallback
    home_img = None
    if os.path.exists(home_mockup):
        home_img = Image.open(home_mockup)

    # 2-5. Hero, Prestations, Salon, and Instagram images
    for key, info in MOCKUP_REGIONS.items():
        temp_src = os.path.join(regions_dir, info['temp_name']) if os.path.exists(regions_dir) else None
        dst = os.path.join(public_dir, info['dst_rel'])
        extract_region_to_webp(home_img, info['box'], dst, temp_src)

    # 6. Map mockup
    map_dst = os.path.join(public_dir, 'map-mockup.webp')
    extract_map(home_mockup, map_dst)

    print("\nAll assets successfully optimized and saved into public/images/!")

if __name__ == '__main__':
    main()
