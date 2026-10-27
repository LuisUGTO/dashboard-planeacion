const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const quality = require('../assets/js/calidad-datos.js');
const main = [...fs.readFileSync(require('node:path').join(__dirname, '../index.html'), 'utf8').matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m => m[1]).find(s => s.includes('const SHEET_ID'));
function setup() {
  const nodes = new Map();
  const document = { getElementById(id) {
    if (!nodes.has(id)) nodes.set(id, { value: id === 'search-audit' ? '' : 'ALL', textContent: '', innerHTML: '', style: {}, attributes: {}, setAttribute(key, value) { this.attributes[key] = value; }, classList: { toggle() {}, add() {}, remove() {} } });
    return nodes.get(id);
  } };
  const context = vm.createContext({ window: { addEventListener() {} }, document, CulturaCalidad: quality, console, setTimeout, URL, Blob });
  vm.runInContext(main, context);
  vm.runInContext('renderChart = () => {}; renderDoughnutWithHtmlLegend = () => {}; renderStrategicDirections = () => {};', context);
  return { context, nodes, document };
}
const a = { ID_Actividad: 'A1', Folio: 'F1', Nombre_Actividad: 'Taller', Fecha_Inicio: '2026-01-15', Fecha_Inicio_ISO: '2026-01-15', Fecha_Fin: '2026-01-31', Direccion: 'Museos', Clave_Proceso: 1, Nombre_Meta: 'Talleres', Acciones_PG: 'Acción PG', Acciones_PEC: 'Acción PEC', Disciplina: 'Música', Subdisciplina: 'Orquestas', Nombre_Espacio: 'Museo', Total_Sesiones: 3000, Foto_Evidencia: 'foto.jpg' };
const cat = [{ ID_Alineacion: 1, Clave_Proceso: 'PB1', Direccion: 'Museos', Nombre_Meta: 'Talleres', Unidad_Medida: 'Talleres realizados', Meta_Anual: 2000 }];
test('la matriz usa talleres reportados y no sesiones para el cumplimiento', () => {
  const s = setup(); s.context.act = [{ ...a, Tipo_Registro: 'Concentrado mensual', Cantidad_Actividades: 1000 }]; s.context.cat = cat;
  vm.runInContext('rawDB.alineacion = cat; renderMatrizEstrategica(act, [], [], cat);', s.context);
  const result = JSON.parse(vm.runInContext('JSON.stringify(cachedMetasCatalogoRows)', s.context))[0];
  assert.equal(result.actCount, 1); assert.equal(result.realizado, 1000); assert.equal(result.pct, 50);
  assert.match(s.nodes.get('lbl-avance-meta-global').textContent, /50.0%/);
});

test('CSV y tarjetas respetan usuario, búsqueda y alerta incluso con más de 250 resultados', () => {
  const s = setup(); let exported; let download;
  s.context.Papa = { unparse(rows, options) { exported = rows; assert.equal(options.escapeFormulae, true); return 'csv'; } };
  s.context.URL = { createObjectURL() { return 'blob:test'; }, revokeObjectURL() {} };
  s.document.createElement = () => ({ click() { download = this.download; } });
  s.context.fixture = Array.from({ length: 260 }, (_, i) => ({ id: 'A'+i, folio: 'F'+i, usuario: ' IYSALAZARH@guanajuato.gob.mx ', nombre: 'Taller música', direccion: 'Área', mun: 'León', sT: 1, sP: 2, diff: -1, categories: ['diferencias', 'evidencias'], diag: 'Revisar' }));
  s.context.fixture.push({ ...s.context.fixture[0], id: 'OTRO', usuario: 'otra@guanajuato.gob.mx' }, { ...s.context.fixture[0], id: 'SIN_DIF', categories: ['evidencias'] });
  s.document.getElementById('filter-audit-user').value = 'iysalazarh@guanajuato.gob.mx';
  s.document.getElementById('search-audit').value = 'música';
  vm.runInContext('auditList = fixture; toggleAuditKind("diferencias"); exportAuditCSV();', s.context);
  assert.equal(exported.length, 260);
  assert.ok(exported.every(r => r.ID_Actividad !== 'OTRO' && r.ID_Actividad !== 'SIN_DIF'));
  assert.match(download, /iysalazarh_guanajuato.gob.mx_diferencias/);
  assert.equal(s.nodes.get('audit-count-evidencias').textContent, '261');
  assert.equal(s.nodes.get('audit-card-diferencias').attributes['aria-pressed'], 'true');
  assert.match(s.nodes.get('audit-visible-count').textContent, /250 de 260/);
  vm.runInContext('toggleAuditKind("diferencias")', s.context);
  assert.equal(s.nodes.get('filter-audit-kind').value, 'ALL');
  assert.equal(s.nodes.get('filter-audit-user').value, 'iysalazarh@guanajuato.gob.mx');
  assert.equal(vm.runInContext('filteredAuditRows().length', s.context), 261);
  exported = undefined;
  s.document.getElementById('search-audit').value = 'sin coincidencias';
  vm.runInContext('renderAuditTable(); exportAuditCSV();', s.context);
  assert.equal(exported, undefined);
  assert.equal(s.nodes.get('btn-export-audit').disabled, true);
});

test('el usuario seleccionado no se pierde cuando no aparece en una actualización', () => {
  const s = setup();
  s.document.getElementById('filter-audit-user').value = 'iysalazarh@guanajuato.gob.mx';
  s.context.fixture = [{ Usuario_Registra: 'otra@guanajuato.gob.mx' }];
  vm.runInContext('rawDB.actividades = fixture; populateAuditUsers();', s.context);
  assert.equal(s.nodes.get('filter-audit-user').value, 'iysalazarh@guanajuato.gob.mx');
  assert.match(s.nodes.get('filter-audit-user').innerHTML, /iysalazarh@guanajuato.gob.mx/);
});
test('un concentrado sin cantidad no produce cero ni un porcentaje ficticio', () => {
  const s = setup(); s.context.act = [{ ...a, Tipo_Registro: 'Concentrado mensual' }]; s.context.cat = cat;
  vm.runInContext('rawDB.alineacion = cat; renderMatrizEstrategica(act, [], [], cat);', s.context);
  const result = JSON.parse(vm.runInContext('JSON.stringify(cachedMetasCatalogoRows)', s.context))[0];
  assert.equal(result.realizado, null); assert.equal(result.pct, null);
  assert.match(s.nodes.get('kpi-mat-cumplimiento').textContent, /Por confirmar/);
  assert.ok(!s.nodes.get('tbl-metas-avance').innerHTML.includes('NaN'));
});
test('el filtro municipal compara toda la actividad, no una fracción del territorio', () => {
  const s = setup(); const doc = s.document;
  ['f-direccion', 'f-disciplina', 'f-eje', 'f-enfoque', 'f-zap', 'filter-audit-kind'].forEach(id => doc.getElementById(id).value = 'ALL');
  doc.getElementById('f-date-start').value = '2026-01-01'; doc.getElementById('f-date-end').value = '2026-12-31'; doc.getElementById('f-municipio').value = 'León'; doc.getElementById('search-audit').value = '';
  s.context.fixture = { actividades: [{ ...a, Total_Sesiones: 1 }], territorio: [{ ID_Actividad: 'A1', Municipio: 'León', Otra_Comunidad: 'Centro', Cantidad: 20 }, { ID_Actividad: 'A1', Municipio: 'Silao', Otra_Comunidad: 'Centro', Cantidad: 30 }], poblacion: [{ ID_Actividad: 'A1', Cantidad_Poblacion: 50, Cantidad_Participacion: 0, Cantidad_Acceso: 50 }], evidencia: [], alineacion: cat };
  vm.runInContext('rawDB = fixture; renderVisionGeneral = () => {}; renderMatrizEstrategica = () => {}; renderCoberturaTerritorial = () => {}; renderPerfilPoblacion = () => {}; renderRepositorioEvidencias = () => {}; applyFilters();', s.context);
  assert.equal(vm.runInContext('auditList.length', s.context), 0);
});
