from pathlib import Path
import re
import shutil

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "entregables" / "fuentes" / "Entregable_1_Diagnostico_Informacion_Institucional.html"
PDF = ROOT / "entregables" / "pdf" / "Entregable_1_Diagnostico_Informacion_Institucional.pdf"
BACKUP = ROOT / "respaldo"


def between(text, start, end):
    a = text.index(start)
    b = text.index(end, a)
    return text[a:b]


def clean(value):
    return (value.replace("Regitro_Evidencia", "Registro_Evidencia")
                 .replace("Regitro_Evidencia_Files_", "Registro_Evidencia_Files_")
                 .replace("Servicio Contractual:", "Servicio:")
                 .replace("Objeto del Contrato:", "Objeto del Servicio:")
                 .replace("Sustento Contractual:", "Alcance del Entregable:")
                 .replace("Cédula de Control Técnico, Contractual y Fiscal del Entregable", "Cédula de control técnico del entregable")
                 .replace("Recibe y Valida a Satisfacción", "Recibe para Revisión y Validación")
                 .replace("permitiendo auditar en tiempo real", "permitiendo revisar")
                 .replace("Visualización en tiempo real", "Visualización conectada al padrón de")
                 .replace("Visualización conectada al padrón de de", "Visualización conectada al padrón de")
                 .replace("opera ya en tiempo real dentro de", "se consulta actualmente en")
                 .replace("habilitación de sedes foráneas nacionales (ej. ferias nacionales en <em>Ciudad de México</em>) en <span class=\"mono\">Cat_Municipio</span>", "registro de sedes foráneas nacionales (por ejemplo, ferias en <em>Ciudad de México</em>) en un catálogo independiente de ubicaciones externas")
                 .replace("habilitación de sedes foráneas (ej. ferias nacionales en <em>Ciudad de México</em>) en <span class=\"mono\">Cat_Municipio</span>", "registro de sedes foráneas nacionales (por ejemplo, ferias en <em>Ciudad de México</em>) en un catálogo independiente de ubicaciones externas")
                 .replace("bajo la categoría controlada \"Dato global\", eliminando el descuadre de +49,254 registros", "bajo la categoría controlada \"Dato global\", conservando el total y marcando expresamente que el desglose demográfico no está disponible")
                 .replace('assets/captura-tablero-vista-general.png', '../../assets/capturas/captura-tablero-vista-general.png')
                 .replace('assets/captura-mapa-46-municipios.png', '../../assets/capturas/captura-mapa-46-municipios.png')
                 .replace('assets/captura-conciliacion-operativa.png', '../../assets/capturas/captura-conciliacion-operativa.png'))


BACKUP.mkdir(exist_ok=True)
backup_html = BACKUP / "Entregable_1_Diagnostico_Informacion_Institucional_original.html"
backup_pdf = BACKUP / "Entregable_1_Diagnostico_Informacion_Institucional_original.pdf"
if not backup_html.exists():
    shutil.copy2(SOURCE, backup_html)
if PDF.exists() and not backup_pdf.exists():
    shutil.copy2(PDF, backup_pdf)
original = backup_html.read_text(encoding="utf-8")

control = re.search(r'<table class="control-table">.*?</table>', original, re.S).group(0)
matrix = between(original, '<!-- SECCIÓN 2:', '<!-- SECCIÓN 3:')
audit = between(original, '<!-- SECCIÓN 3:', '<!-- SECCIÓN 4:')
general = between(original, '<!-- SECCIÓN 4:', '<!-- SECCIÓN 5:')
areas = between(original, '<!-- SECCIÓN 5:', '<!-- 5. BLOQUE')
signature = re.search(r'<table class="signature-table">.*?</table>', original, re.S).group(0)

general = general.replace(
    '<h2 class="section-heading">3. Diagnóstico General del Estado de los Datos y Viabilidad de Indicadores</h2>',
    '<div class="part-title">Diagnóstico general</div>\n<h2 class="section-heading">1. Diagnóstico del estado de los datos</h2>'
)
general = general.replace(
    '<h4 class="sub-block-title">3.1 Los Tres Nudos Críticos Transversales del Estado Actual</h4>',
    '<h3 class="topic-heading">Tres nudos críticos transversales</h3>'
)
general = general.replace(
    '<h4 class="sub-block-title">3.2 Análisis de Viabilidad por Indicador Estratégico (Indicadores 11, 1, 13, 8 y 9)</h4>',
    '<h2 class="section-heading">2. Análisis de viabilidad por indicador</h2>'
)
general += '''
<h2 class="section-heading">3. Identificación de barreras estructurales</h2>
<p>El diagnóstico identifica cuatro barreras que condicionan la automatización y la confiabilidad de los reportes institucionales:</p>
<ol class="numbered-list">
  <li><strong>Normalización de datos.</strong> Las variaciones en nombres de municipios, recintos, programas, disciplinas y procesos impiden agrupar la información de manera estable. La captura debe operar con catálogos institucionales controlados.</li>
  <li><strong>Infraestructura tecnológica limitada.</strong> Las zonas arqueológicas, los Centros de Atención a Visitantes y algunas sedes formativas requieren captura desconectada y sincronización posterior.</li>
  <li><strong>Gobernanza y responsabilidad del dato.</strong> La edición simultánea de hojas, las fórmulas modificables y la ausencia de responsables explícitos reducen la trazabilidad. Cada fuente necesita propietario, enlace de captura, calendario y regla de cierre.</li>
  <li><strong>Cultura del dato y capacitación.</strong> Parte del reporte se produce como narrativa administrativa. Para alimentar indicadores, las cifras deben originarse en campos estructurados, con reglas de validación y distinción entre sesiones, asistencias y personas únicas.</li>
</ol>
'''

areas = areas.replace(
    '<h2 class="section-heading">4. Diagnóstico Específico y Solución de Sistematización por las 8 Unidades Generadoras</h2>',
    '<div class="part-title">Diagnóstico por área</div>\n<p class="part-intro">Cada apartado conserva la secuencia de análisis utilizada en el diagnóstico institucional: función del área, estado actual, barrera, impacto técnico y recomendaciones de sistematización.</p>'
)
areas = re.sub(r'<h3 class="area-heading">4\.\d+\s+', '<h2 class="area-heading">', areas)
areas = areas.replace('</h3>', '</h2>')

matrix = matrix.replace(
    '<h2 class="section-heading">1. Matriz Maestra de Control: Fuentes, Bases de Datos, Responsables, Variables, Duplicidades y Vacíos</h2>',
    '<div class="part-title">Anexos técnicos</div>\n<h2 class="section-heading">Anexo A. Matriz maestra de fuentes, responsables, variables, duplicidades y vacíos</h2>'
)
matrix = matrix.replace(
    'En cumplimiento estricto al numeral 1 de los Entregables Principales del Contrato,',
    'Conforme al alcance del Entregable 1 establecido en la propuesta técnica,'
)

audit = audit.replace(
    '<h2 class="section-heading">2. Auditoría Forense del Padrón Real (DB_Sistema_Cultura_GTO_V1) y Evidencia Visual del Sistema</h2>',
    '<h2 class="section-heading">Anexo B. Auditoría de calidad e integridad de la base institucional</h2>'
)
audit = re.sub(
    r'<tr>\s*<td colspan="2">\s*<img src="assets/captura-conciliacion-operativa\.png".*?</tr>',
    '', audit, flags=re.S
)

method = '''
<h2 class="section-heading">Anexo C. Nota metodológica y límites del diagnóstico</h2>
<table class="data-table method-table"><tbody>
  <tr><th>Fecha de corte</th><td>19 de octubre de 2026.</td></tr>
  <tr><th>Fuentes principales</th><td>Matriz de información de las ocho unidades generadoras, archivos y registros reportados por las áreas, y la base <span class="mono">DB_Sistema_Cultura_GTO_V1</span>.</td></tr>
  <tr><th>Procedimiento</th><td>Inventario de fuentes; revisión de formatos, responsables y periodicidad; análisis de duplicidades y vacíos; y pruebas de unicidad, completitud e integridad referencial sobre las tablas disponibles.</td></tr>
  <tr><th>Alcance</th><td>El análisis acredita la estructura y consistencia de los insumos revisados a la fecha de corte. No constituye auditoría forense, dictamen contable ni validación independiente de la ocurrencia material de cada actividad.</td></tr>
  <tr><th>Tratamiento de datos globales</th><td>Cuando un evento masivo no dispone de desglose demográfico, el total se conserva como <em>Dato global</em>. Ese registro cuadra el volumen general, pero debe identificarse como información demográfica no disponible.</td></tr>
  <tr><th>Estado de implementación</th><td>Las funciones descritas como operativas corresponden a los componentes y evidencias entregados para revisión. Su adopción institucional, permisos y calendario de uso requieren validación de la Dirección de Planeación.</td></tr>
</tbody></table>
'''

control, matrix, audit, general, areas, signature = map(clean, (control, matrix, audit, general, areas, signature))
areas = areas.replace(
    'bajo la categoría controlada <span class="mono">"Dato global"</span>, eliminando el descuadre de +49,254 registros',
    'bajo la categoría controlada <span class="mono">"Dato global"</span>, conservando el total y marcando expresamente que el desglose demográfico no está disponible'
)
areas = areas.replace(
    '<li>\n          <strong>C. Integridad de los padrones de beneficiarios (Indicador 1):</strong>',
    '<li class="safe-page-break">\n          <strong>C. Integridad de los padrones de beneficiarios (Indicador 1):</strong>'
)
signature = '<div class="part-title">Constancia de entrega para revisión</div><p>La firma de recepción acredita la entrega documental para su revisión. La validación técnica y la aceptación del entregable se formalizarán por la instancia competente.</p>' + signature

css = '''
* { box-sizing: border-box; }
html { background: #eef1f4; }
body { margin: 0; color: #222; font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif; font-size: 10.8pt; line-height: 1.52; background: white; }
.toolbar-no-print { padding: 10px 18px; background: #004B87; color: white; font-size: 9pt; display: flex; justify-content: space-between; }
.toolbar-no-print button { background: white; border: 0; padding: 6px 12px; font-weight: 700; }
.document { max-width: 216mm; margin: 0 auto; background: white; }
.page { padding: 18mm 20mm; }
.cover { min-height: 279mm; display: flex; flex-direction: column; justify-content: space-between; page-break-after: always; }
.cover-logos { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #004B87; padding-bottom: 10mm; }
.cover-logos img:first-child { height: 25mm; }
.cover-logos img:last-child { height: 18mm; }
.cover-title { margin: 34mm 0 0; }
.cover-kicker { color: #546a7b; font-size: 10pt; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.cover h1 { color: #004B87; font-size: 27pt; line-height: 1.12; margin: 6mm 0 5mm; max-width: 165mm; }
.cover-subtitle { font-size: 14pt; color: #3f4f5b; max-width: 155mm; }
.cover-meta { border-top: 1px solid #94a3ad; padding-top: 6mm; color: #425466; display: grid; grid-template-columns: 1fr 1fr; gap: 3mm 12mm; font-size: 9.5pt; }
.cover-meta strong { color: #172b3a; }
.frontmatter, .factsheet { page-break-after: always; min-height: 279mm; }
.frontmatter h2, .part-title { color: #004B87; font-size: 22pt; line-height: 1.15; margin: 0 0 8mm; font-weight: 700; }
.factsheet h2 { color: #004B87; font-size: 22pt; margin: 0 0 10mm; }
.toc { margin: 8mm 0 12mm; padding-left: 6mm; }
.toc li { margin: 2.5mm 0; }
.control-table, .data-table, .figure-grid, .signature-table { width: 100%; border-collapse: collapse; }
.control-table { font-size: 8.8pt; margin-top: 8mm; }
.control-table td, .control-table th, .data-table td, .data-table th { border: 1px solid #cfd6dc; padding: 2.2mm 2.5mm; vertical-align: top; }
.control-table th, .data-table th { background: #C8D8EB; color: #004B87; text-align: left; font-weight: 700; }
.section-banner { background: #004B87 !important; color: white !important; text-transform: uppercase; letter-spacing: .04em; }
.content { padding: 16mm 20mm 18mm; }
.part-title { page-break-before: always; padding-top: 2mm; border-bottom: 2px solid #004B87; padding-bottom: 5mm; }
.part-intro { font-size: 11.5pt; color: #485965; margin-bottom: 10mm; }
h2.section-heading { color: #004B87; font-size: 16pt; line-height: 1.25; margin: 10mm 0 4mm; page-break-after: avoid; }
h2.area-heading { color: #004B87; font-size: 17pt; line-height: 1.22; margin: 0 0 7mm; border-bottom: 1px solid #69B3E7; padding-bottom: 3mm; page-break-after: avoid; }
h3.topic-heading, h4.sub-block-title { color: #273f52; font-size: 12.5pt; margin: 6mm 0 3mm; page-break-after: avoid; }
p { margin: 0 0 4mm; text-align: justify; }
ul.clean-list, ul.clean-sublist, ol.numbered-list { margin: 2mm 0 5mm 7mm; padding-left: 5mm; }
li { margin-bottom: 2.5mm; text-align: justify; }
.area-block { page-break-before: always; }
.part-intro + .area-block { page-break-before: auto; }
.safe-page-break { page-break-before: always; }
.mono { font-family: Consolas, 'Courier New', monospace; font-size: .9em; }
table.data-table { font-size: 8.1pt; margin: 4mm 0 7mm; }
table.data-table thead { display: table-header-group; }
table.data-table tr { page-break-inside: avoid; }
table.data-table th { background: #004B87; color: white; }
table.data-table tbody tr:nth-child(even) { background: #f6f8fa; }
.figure-grid { margin: 6mm 0; }
.figure-grid td { width: 50%; vertical-align: top; padding: 2mm; border: 1px solid #d8dde2; }
.figure-img { width: 100%; height: auto; display: block; }
.figure-caption { font-size: 8.2pt; color: #3f4f5b; margin-top: 2mm; text-align: left; }
.method-table th { width: 27%; background: #C8D8EB !important; color: #004B87 !important; }
.signature-table { margin-top: 12mm; page-break-inside: avoid; font-size: 9pt; }
.signature-table th { background: #004B87; color: white; padding: 3mm; width: 50%; }
.signature-table td { border: 1px solid #cfd6dc; text-align: center; padding: 3mm 5mm; }
.sig-blank-space { height: 24mm; }
.sig-line { border-top: 1px solid #222; padding-top: 2mm; }
.sig-name { font-weight: 700; text-transform: uppercase; }
.sig-role { margin-top: 1mm; color: #425466; }
.running-footer { position: fixed; left: 20mm; right: 20mm; bottom: 7mm; border-top: 1px solid #91a0ab; padding-top: 2mm; font-size: 7.5pt; color: #5a6974; display: flex; justify-content: space-between; }
.running-header { display: none; }
@page { size: Letter portrait; margin: 26mm 0 17mm; }
@page:first { margin-top: 0; }
@media print {
  html, body { background: white; }
  .toolbar-no-print { display: none !important; }
  .document { max-width: none; }
  .page { padding: 0 20mm; }
  .content { padding: 0 20mm; }
  .cover { min-height: 262mm; padding-top: 18mm; }
  .frontmatter, .factsheet { min-height: 234mm; }
  .running-header, .running-footer { display: none !important; }
  a { color: inherit; }
}
'''

cover = '''
<section class="page cover">
  <div>
    <div class="cover-logos"><img src="../../assets/identidad/Logo.png" alt="Gobierno del Estado de Guanajuato"><img src="../../assets/identidad/pulso-q-logo.png" alt="PULSO Q"></div>
    <div class="cover-title">
      <div class="cover-kicker">Secretaría de Cultura del Estado de Guanajuato</div>
      <h1>Diagnóstico de información institucional</h1>
      <div class="cover-subtitle">Entregable 1 del servicio de sistematización de información institucional y diseño funcional del Sistema de Información Cultural</div>
    </div>
  </div>
  <div class="cover-meta">
    <div><strong>Área destinataria</strong><br>Dirección de Planeación</div>
    <div><strong>Prestador</strong><br>Luis Angel Durán Alvarez · PULSO Q</div>
    <div><strong>Base analizada</strong><br><span class="mono">DB_Sistema_Cultura_GTO_V1</span></div>
    <div><strong>Fecha de emisión</strong><br>19 de octubre de 2026</div>
  </div>
</section>
'''

frontmatter = f'''
<section class="page frontmatter">
  <h2>Contenido</h2>
  <ol class="toc">
    <li>Diagnóstico general<ol><li>Diagnóstico del estado de los datos</li><li>Análisis de viabilidad por indicador</li><li>Identificación de barreras estructurales</li></ol></li>
    <li>Diagnóstico por área<ol><li>Coordinación de Desarrollo Cultural Municipal</li><li>Coordinación de Vinculación y Redes Culturales</li><li>Dirección General de Patrimonio Cultural</li><li>Dirección General de Museos Artes Visuales y Exposiciones</li><li>Dirección General de Producción Artística</li><li>Dirección General del Forum Cultural Guanajuato</li><li>Dirección General Editorial y de Publicaciones</li><li>Dirección General de Formación e Investigación</li></ol></li>
    <li>Anexos técnicos</li>
  </ol>
</section>
<section class="page factsheet"><h2>Ficha técnica del entregable</h2>{control}</section>
'''

html = f'''<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Entregable 1 Diagnóstico de Información Institucional</title><style>{css}</style></head>
<body><div class="toolbar-no-print"><span>Entregable 1 · Diagnóstico de información institucional</span><button onclick="window.print()">Exportar PDF</button></div>
<main class="document">{cover}{frontmatter}<div class="content">{general}{areas}{matrix}{audit}{method}{signature}</div><div class="running-header"><div class="header-brand"><img src="../../assets/identidad/Logo.png" alt="Gobierno del Estado de Guanajuato"><span class="dependency">Secretaría de Cultura</span></div><span class="area">Dirección de Planeación</span></div><div class="running-footer"><span>Secretaría de Cultura del Estado de Guanajuato · Dirección de Planeación</span><span>Entregable 1 · PULSO Q</span></div></main></body></html>'''

SOURCE.write_text(html, encoding="utf-8")
print(SOURCE)
