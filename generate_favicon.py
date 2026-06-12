import os
from PIL import Image, ImageDraw, ImageFont

# Create a 512x512 transparent image
size = 512
img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Try to load Courier New Bold
font_path = "C:\\Windows\\Fonts\\courbd.ttf"
if not os.path.exists(font_path):
    font_path = "courbd.ttf" # fallback to current dir or default

try:
    # Use large font size for high quality
    font = ImageFont.truetype(font_path, 380)
except IOError:
    # Fallback to system monospace font if Courier is missing
    try:
        font = ImageFont.truetype("lucon.ttf", 380) # Lucida Console
    except IOError:
        font = ImageFont.load_default()

# Draw left brace
draw.text((25, 25), "{", fill="#000000", font=font)

# Draw right brace
draw.text((345, 25), "}", fill="#000000", font=font)

# Draw the eye icon in the middle (center is 256, 256)
# Draw outer eye ring (ellipse)
# Left = 160, Top = 200, Right = 352, Bottom = 312
draw.ellipse([160, 200, 352, 312], outline="#000000", width=20)

# Draw the pupil (solid circle) at center
# Left = 226, Top = 226, Right = 286, Bottom = 286
draw.ellipse([226, 226, 286, 286], fill="#000000")

# Ensure public directory exists
public_dir = "public"
os.makedirs(public_dir, exist_ok=True)

# Save high-resolution PNG
img.save(os.path.join(public_dir, "favicon.png"), "PNG")

# Save multisize ICO
# Sizes: 16x16, 32x32, 48x48, 128x128
ico_sizes = [(16, 16), (32, 32), (48, 48), (128, 128)]
ico_imgs = []
for s in ico_sizes:
    ico_imgs.append(img.resize(s, Image.Resampling.LANCZOS))
    
ico_imgs[0].save(
    os.path.join(public_dir, "favicon.ico"),
    format="ICO",
    sizes=ico_sizes,
    append_images=ico_imgs[1:]
)

# Apple Touch Icon: 180x180 with white background (iOS standard)
apple_img = Image.new("RGBA", (180, 180), (255, 255, 255, 255))
resized = img.resize((130, 130), Image.Resampling.LANCZOS)
# Center the transparent icon inside the white square
apple_img.paste(resized, (25, 25), resized)
apple_img.convert("RGB").save(os.path.join(public_dir, "apple-touch-icon.png"), "PNG")

print("Favicons generated successfully!")
