from pathlib import Path
import shutil

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
BACKUP = ROOT / "respaldo"
BACKUP.mkdir(exist_ok=True)

PAIRS = [
    (
        ROOT / "assets" / "capturas" / "captura-tablero-vista-general.png",
        Path(r"C:\Users\luisa\.codex\generated_images\01a157b5-4b5c-7dc2-a3d8-393848e44b3f\exec-fce3a20b-bdf7-40f0-8a84-8fdb4362aed1.png"),
    ),
    (
        ROOT / "assets" / "capturas" / "captura-mapa-46-municipios.png",
        Path(r"C:\Users\luisa\.codex\generated_images\01a157b5-4b5c-7dc2-a3d8-393848e44b3f\exec-5409fdcd-ff39-43d5-93fc-64366ff99327.png"),
    ),
]

for target, edited in PAIRS:
    backup = BACKUP / f"{target.stem}_sin_sello{target.suffix}"
    if not backup.exists():
        shutil.copy2(target, backup)
    base = Image.open(target).convert("RGBA")
    generated = Image.open(edited).convert("RGBA").resize(base.size, Image.Resampling.LANCZOS)

    # Use only the image-generation result inside the existing emblem placeholder.
    # This preserves every dashboard pixel, number and label outside the seal.
    mask = Image.new("L", base.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((17, 29, 75, 88), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(0.6))
    base.paste(generated, (0, 0), mask)
    base.convert("RGB").save(target, quality=98)
    print(target)
