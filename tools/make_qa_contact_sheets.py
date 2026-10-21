from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
QA = ROOT / "tmp"

for folder in sorted(QA.glob("qa-*")):
    pages = sorted(folder.glob("page-*.png"), key=lambda p: int(p.stem.split("-")[-1]))
    if not pages:
        continue
    outdir = QA / "contact-sheets"
    outdir.mkdir(parents=True, exist_ok=True)
    for start in range(0, len(pages), 4):
        sheet = Image.new("RGB", (1320, 1720), "#d8dde2")
        draw = ImageDraw.Draw(sheet)
        draw.text((24, 12), f"{folder.name} — páginas {start + 1} a {min(start + 4, len(pages))}", fill="#111111")
        for offset, path in enumerate(pages[start:start + 4]):
            image = Image.open(path).convert("RGB")
            image.thumbnail((620, 790))
            x = 20 + (offset % 2) * 650 + (620 - image.width) // 2
            y = 45 + (offset // 2) * 830
            sheet.paste(image, (x, y))
            draw.text((x, y + image.height + 4), f"Página {start + offset + 1}", fill="#111111")
        output = outdir / f"{folder.name}-{start // 4 + 1:02d}.jpg"
        sheet.save(output, quality=88)
        print(output)
