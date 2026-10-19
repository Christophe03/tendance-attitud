import os
from PIL import Image, ImageOps
import pillow_heif

pillow_heif.register_heif_opener()

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
PHOTOS_DIR = os.path.join(BASE_DIR, 'public', 'images', 'photos')
IMAGES_DIR = os.path.join(BASE_DIR, 'public', 'images')

ASSET_MAP = {
    # Hero triptych (aspect ~ 8:11, target: 800x1100)
    'hero/hero-left': {'src': '6.jpeg', 'size': (800, 1100), 'crop_type': 'center'},
    'hero/hero-center': {'src': '17.HEIC', 'size': (800, 1100), 'crop_type': 'center'},
    'hero/hero-right': {'src': '28.jpg', 'size': (800, 1100), 'crop_type': 'center'},

    # Prestations circular categories (1:1 square, target: 600x600)
    'prestations/boucles': {'src': '40.jpg', 'size': (600, 600), 'crop_type': 'square'},
    'prestations/lissage': {'src': '3.HEIC', 'size': (600, 600), 'crop_type': 'square'},
    'prestations/crepus': {'src': '22.HEIC', 'size': (600, 600), 'crop_type': 'square'},
    'prestations/ondulations': {'src': '2.jpeg', 'size': (600, 600), 'crop_type': 'square'},

    # About / Salon (team: 900x1125, interior: 800x533)
    'salon/team': {'src': '19.HEIC', 'size': (900, 1125), 'crop_type': 'center'},
    'salon/interior': {'src': '23.HEIC', 'size': (800, 600), 'crop_type': 'center'},

    # Instagram feed (square: 600x600)
    'instagram/insta-1': {'src': '27.jpg', 'size': (600, 600), 'crop_type': 'square'},
    'instagram/insta-2': {'src': '34.JPG', 'size': (600, 600), 'crop_type': 'square'},
    'instagram/insta-3': {'src': '31.jpg', 'size': (600, 600), 'crop_type': 'square'},
}

def process_image(src_filename, target_size, crop_type='center'):
    src_path = os.path.join(PHOTOS_DIR, src_filename)
    if not os.path.exists(src_path):
        raise FileNotFoundError(f"Missing source photo: {src_path}")

    with Image.open(src_path) as im:
        # Crucial: orient correctly with EXIF tags
        im = ImageOps.exif_transpose(im)
        im = im.convert('RGB')
        
        tw, th = target_size
        target_ratio = tw / th
        orig_w, orig_h = im.size
        orig_ratio = orig_w / orig_h

        if crop_type == 'square':
            side = min(orig_w, orig_h)
            left = (orig_w - side) // 2
            top = (orig_h - side) // 3  # slightly higher for hair focus
            box = (left, top, left + side, top + side)
            cropped = im.crop(box)
        else:
            if orig_ratio > target_ratio:
                # Image is wider than needed -> crop horizontal sides
                new_w = int(orig_h * target_ratio)
                left = (orig_w - new_w) // 2
                box = (left, 0, left + new_w, orig_h)
            else:
                # Image is taller than needed -> crop top/bottom
                new_h = int(orig_w / target_ratio)
                top = int((orig_h - new_h) * 0.25)  # slight bias to top for head/hair
                top = max(0, min(top, orig_h - new_h))
                box = (0, top, orig_w, top + new_h)
            cropped = im.crop(box)

        resized = cropped.resize((tw, th), Image.Resampling.LANCZOS)
        return resized

def main():
    print("Generating High-Resolution WebP Assets from public/images/photos/...")
    for rel_key, cfg in ASSET_MAP.items():
        img = process_image(cfg['src'], cfg['size'], cfg['crop_type'])
        
        # Save both original name and -v2 name for cache-busting
        dir_name = os.path.dirname(os.path.join(IMAGES_DIR, rel_key))
        os.makedirs(dir_name, exist_ok=True)
        
        out_v1 = os.path.join(IMAGES_DIR, f"{rel_key}.webp")
        out_v2 = os.path.join(IMAGES_DIR, f"{rel_key}-v2.webp")
        
        img.save(out_v1, 'WEBP', quality=92, method=6)
        img.save(out_v2, 'WEBP', quality=92, method=6)
        
        print(f"Generated: {rel_key}.webp & {rel_key}-v2.webp ({img.size}) from {cfg['src']}")

    print("\nAll HD assets successfully generated!")

if __name__ == '__main__':
    main()
