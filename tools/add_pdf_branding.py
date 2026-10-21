from io import BytesIO
from pathlib import Path
import argparse

from pypdf import PdfReader, PdfWriter
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
LOGO = ROOT / "assets" / "identidad" / "Logo.png"
MM = 72 / 25.4


def overlay_for_page(page_number: int, deliverable: str):
    stream = BytesIO()
    pdf = canvas.Canvas(stream, pagesize=letter)
    width, height = letter
    navy = HexColor("#004B87")
    light_blue = HexColor("#69B3E7")
    gray = HexColor("#63666A")

    if page_number > 1:
        logo_height = 17.5 * MM
        logo_width = logo_height * 576 / 489
        x = 20 * MM
        y = height - 5 * MM - logo_height
        pdf.drawImage(ImageReader(str(LOGO)), x, y, width=logo_width, height=logo_height, mask="auto")
        pdf.setFillColor(navy)
        pdf.setFont("Helvetica-Bold", 7.5)
        pdf.drawString(x + logo_width + 3 * MM, height - 13.5 * MM, "SECRETARÍA DE CULTURA")
        pdf.setFont("Helvetica-Bold", 9)
        pdf.drawRightString(width - 20 * MM, height - 13.5 * MM, "Dirección de Planeación")
        pdf.setStrokeColor(light_blue)
        pdf.setLineWidth(0.7)
        pdf.line(20 * MM, height - 23 * MM, width - 20 * MM, height - 23 * MM)

    pdf.setStrokeColor(HexColor("#97999B"))
    pdf.setLineWidth(0.5)
    pdf.line(20 * MM, 12 * MM, width - 20 * MM, 12 * MM)
    pdf.setFillColor(gray)
    pdf.setFont("Helvetica", 7.2)
    pdf.drawString(20 * MM, 7 * MM, "Secretaría de Cultura del Estado de Guanajuato · Dirección de Planeación")
    pdf.drawRightString(width - 20 * MM, 7 * MM, f"Entregable {deliverable} · PULSO Q")
    pdf.save()
    stream.seek(0)
    return PdfReader(stream).pages[0]


def main():
    parser = argparse.ArgumentParser(description="Añade encabezado y pie institucionales a un entregable.")
    parser.add_argument("input_pdf", type=Path)
    parser.add_argument("output_pdf", type=Path)
    parser.add_argument("--deliverable", default="1", choices=("1", "2", "4"))
    args = parser.parse_args()

    reader = PdfReader(str(args.input_pdf))
    writer = PdfWriter()
    for number, page in enumerate(reader.pages, 1):
        page.merge_page(overlay_for_page(number, args.deliverable), over=True)
        writer.add_page(page)
    args.output_pdf.parent.mkdir(parents=True, exist_ok=True)
    with args.output_pdf.open("wb") as handle:
        writer.write(handle)
    print(args.output_pdf)


if __name__ == "__main__":
    main()
