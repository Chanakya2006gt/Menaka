import glob
import os
from PIL import Image

ARTIFACT_DIR = "/Users/shresta/.gemini/antigravity/brain/750283d9-dc90-4b08-9cc0-70ca77396bf5"
PUBLIC_DIR = "/Users/shresta/Menaka/public/assets"

def get_latest(prefix):
    files = glob.glob(os.path.join(ARTIFACT_DIR, f"{prefix}_*.jpg"))
    if not files:
        files = glob.glob(os.path.join(ARTIFACT_DIR, f"{prefix}*.jpg"))
    if not files:
        return None
    files.sort(key=os.path.getmtime)
    return files[-1]

mapping = {
    "hero": "hero.png",
    "diamond_emerald_choker": "products/diamond-emerald-choker.png",
    "royal_diamond_vaddanam": "products/royal-diamond-vaddanam.png",
    "diamond_kada_bangle": "products/diamond-kada-bangle.png",
    "temple_peacock_necklace": "products/temple-peacock-necklace.png",
    "temple_lakshmi_haram": "products/temple-lakshmi-haram.png",
    "temple_sculpted_jhumkas": "products/temple-sculpted-jhumkas.png",
    "temple_bridal_long_haram": "products/temple-bridal-long-haram.png",
    "emerald_grandeur_choker": "products/emerald-grandeur-choker.png",
    "diamond_emerald_haram": "products/diamond-emerald-haram.png",
}

print("Syncing generated assets...")
for prefix, rel_dest in mapping.items():
    src = get_latest(prefix)
    if src:
        dest = os.path.join(PUBLIC_DIR, rel_dest)
        im = Image.open(src)
        im.save(dest, quality=95)
        print(f"Copied {prefix} -> {rel_dest} (size: {im.size})")
    else:
        print(f"Waiting for {prefix}...")

# Also generate crisp 6 category icons from corresponding high-res master pieces
cat_sources = {
    "gold": "products/temple-peacock-necklace.png",
    "diamond": "products/diamond-emerald-choker.png",
    "bridal": "products/temple-lakshmi-haram.png",
    "vaddanam": "products/royal-diamond-vaddanam.png",
    "earrings": "products/temple-sculpted-jhumkas.png",
    "bangles": "products/diamond-kada-bangle.png",
}

for cat, prod_rel in cat_sources.items():
    prod_path = os.path.join(PUBLIC_DIR, prod_rel)
    if os.path.exists(prod_path):
        im = Image.open(prod_path)
        # Center square crop
        w, h = im.size
        min_dim = min(w, h)
        left = (w - min_dim) // 2
        top = (h - min_dim) // 2
        cropped = im.crop((left, top, left + min_dim, top + min_dim)).resize((400, 400), Image.Resampling.LANCZOS)
        cat_dest = os.path.join(PUBLIC_DIR, f"categories/{cat}.png")
        cropped.save(cat_dest, quality=95)
        print(f"Generated category icon: {cat}.png")

print("Asset processing complete!")
