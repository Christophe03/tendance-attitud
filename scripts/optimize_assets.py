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

def convert_region_to_webp(src_path: str, dst_path: str, quality: int = 90):
    """
    Converts a region JPEG to optimized WebP.
    """
    if not os.path.exists(src_path):
        print(f"Warning: source {src_path} does not exist.")
        return

    img = Image.open(src_path).convert('RGB')
    img.save(dst_path, 'WEBP', quality=quality, method=6)
    print(f"Saved: {dst_path} ({img.size}, {os.path.getsize(dst_path)} bytes)")

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

    # 2. Hero images
    hero_mapping = {
        'hero_left.jpg': 'hero/hero-left.webp',
        'hero_center.jpg': 'hero/hero-center.webp',
        'hero_right.jpg': 'hero/hero-right.webp',
    }
    for src_name, dst_rel in hero_mapping.items():
        src = os.path.join(regions_dir, src_name)
        dst = os.path.join(public_dir, dst_rel)
        convert_region_to_webp(src, dst)

    # 3. Prestations
    prestations_mapping = {
        'cat_boucles.jpg': 'prestations/boucles.webp',
        'cat_lissage.jpg': 'prestations/lissage.webp',
        'cat_crepus.jpg': 'prestations/crepus.webp',
        'cat_ondulations.jpg': 'prestations/ondulations.webp',
    }
    for src_name, dst_rel in prestations_mapping.items():
        src = os.path.join(regions_dir, src_name)
        dst = os.path.join(public_dir, dst_rel)
        convert_region_to_webp(src, dst)

    # 4. Salon
    salon_mapping = {
        'team_exterior.jpg': 'salon/team.webp',
        'salon_interior.jpg': 'salon/interior.webp',
    }
    for src_name, dst_rel in salon_mapping.items():
        src = os.path.join(regions_dir, src_name)
        dst = os.path.join(public_dir, dst_rel)
        convert_region_to_webp(src, dst)

    # 5. Instagram
    insta_mapping = {
        'insta_1.jpg': 'instagram/insta-1.webp',
        'insta_2.jpg': 'instagram/insta-2.webp',
        'insta_3.jpg': 'instagram/insta-3.webp',
    }
    for src_name, dst_rel in insta_mapping.items():
        src = os.path.join(regions_dir, src_name)
        dst = os.path.join(public_dir, dst_rel)
        convert_region_to_webp(src, dst)

    # 6. Map mockup
    map_dst = os.path.join(public_dir, 'map-mockup.webp')
    extract_map(home_mockup, map_dst)

    print("\nAll assets successfully optimized and saved into public/images/!")

if __name__ == '__main__':
    main()
