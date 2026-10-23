import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

SRC_PATH = "/Users/shresta/.gemini/antigravity/brain/750283d9-dc90-4b08-9cc0-70ca77396bf5/.user_uploaded/media_1792769463003_59983925.jpg"
LOGO_DIR = "/Users/shresta/Menaka/public/assets/logo"
os.makedirs(LOGO_DIR, exist_ok=True)

im = Image.open(SRC_PATH).convert("RGBA")
w, h = im.size
arr = np.array(im, dtype=np.float32)

# 1. Background color estimation from edge borders
edges = np.concatenate([
    arr[:50, :, :3].reshape(-1, 3),
    arr[-50:, :, :3].reshape(-1, 3),
    arr[:, :50, :3].reshape(-1, 3),
    arr[:, -50:, :3].reshape(-1, 3),
])
bg_color = np.median(edges, axis=0) # ~ [84, 52, 63]
print("Estimated BG Color:", bg_color)

# 2. Calculate distance from background to isolate the gold artwork
rgb = arr[:, :, :3]
diff = np.linalg.norm(rgb - bg_color, axis=-1)

# Pure background has diff near 0. Gold artwork has diff > 50, reaching up to 180.
# Smooth sigmoid / linear ramp for anti-aliased alpha
alpha_low = 15.0
alpha_high = 65.0
alpha = np.clip((diff - alpha_low) / (alpha_high - alpha_low), 0.0, 1.0) * 255.0

# 3. Enhance gold color vibrancy slightly for luxury sheen
# When de-blending background, reconstruct pure foreground color:
# observed = alpha * fg + (1 - alpha) * bg => fg = (observed - (1 - a_norm)*bg) / a_norm
a_norm = np.clip(alpha / 255.0, 0.001, 1.0)[:, :, np.newaxis]
reconstructed_fg = (rgb - (1.0 - a_norm) * bg_color) / a_norm
reconstructed_fg = np.clip(reconstructed_fg, 0.0, 255.0)

# Build pristine transparent image
transparent_arr = np.zeros((h, w, 4), dtype=np.uint8)
transparent_arr[:, :, :3] = reconstructed_fg.astype(np.uint8)
transparent_arr[:, :, 3] = alpha.astype(np.uint8)

transparent_img = Image.fromarray(transparent_arr, "RGBA")
transparent_path = os.path.join(LOGO_DIR, "logo-transparent.png")
transparent_img.save(transparent_path, "PNG")
print(f"Saved {transparent_path}")

# 4. Save uplifted square version (clean denoiser applied to bg)
# Re-composite over pristine solid brand burgundy background [#54343F]
uplifted_sq = Image.new("RGBA", (w, h), (84, 52, 63, 255))
uplifted_sq.paste(transparent_img, (0, 0), transparent_img)
sq_path = os.path.join(LOGO_DIR, "logo-square.png")
uplifted_sq.save(sq_path, "PNG")
print(f"Saved {sq_path}")

# 5. Create the signature circular emblem for avatar / navbar / footer
# Diameter 960 inside 1024x1024 canvas with subtle antique gold rim
circle_size = 960
circle_mask = Image.new("L", (w, h), 0)
from PIL import ImageDraw
draw = ImageDraw.Draw(circle_mask)
cx, cy = w // 2, h // 2
r = circle_size // 2
draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=255)

# Outer circular seal with subtle gold border
circular_logo = Image.new("RGBA", (w, h), (0, 0, 0, 0))
# Solid background circle
bg_circle = Image.new("RGBA", (w, h), (84, 52, 63, 255))
circular_logo.paste(bg_circle, (0, 0), circle_mask)

# Draw gold rim
rim_draw = ImageDraw.Draw(circular_logo)
rim_draw.ellipse((cx - r, cy - r, cx + r, cy + r), outline=(217, 178, 139, 255), width=6)
rim_draw.ellipse((cx - r + 14, cy - r + 14, cx + r - 14, cy + r - 14), outline=(217, 178, 139, 120), width=2)

# Paste transparent logo on top
circular_logo.paste(transparent_img, (0, 0), transparent_img)

# Crop tight to the circle with 16px padding
cropped_circle = circular_logo.crop((cx - r - 4, cy - r - 4, cx + r + 4, cy + r + 4))
circle_final_path = os.path.join(LOGO_DIR, "logo.png")
cropped_circle.save(circle_final_path, "PNG")
print(f"Saved {circle_final_path} (size: {cropped_circle.size})")

# Also copy to public/assets/logo.png for backward compatibility
compat_path = "/Users/shresta/Menaka/public/assets/logo.png"
cropped_circle.save(compat_path, "PNG")

print("All logo variants uplifted successfully!")
