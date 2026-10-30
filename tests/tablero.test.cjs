const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const quality = require('../assets/js/calidad-datos.js');
const ficha = require('../assets/js/ficha-actividad.js');
const main = [...fs.readFileSync(require('node:path').join(__dirname, '../index.html'), 'utf8').matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m => m[1]).find(s => s.includes('const SHEET_ID'));
function setup() {
  const nodes = new Map();
  const document = { getElementById(id) {
    if (!nodes.has(id)) nodes.set(id, { value: id === 'search-audit' ? '' : 'ALL', textContent: '', innerHTML: '', style: {}, attributes: {}, focus() {}, setAttribute(key, value) { this.attributes[key] = value; }, classList: { toggle() {}, add() {}, remove() {} } });
    return nodes.get(id);
  } };
  const context = vm.createContext({ window: { addEventListener() {} }, document, CulturaCalidad: quality, CulturaFicha: ficha, console, setTimeout, URL, Blob });
  vm.runInContext(main, context);
  vm.runInContext('renderChart = () => {}; renderDoughnutWithHtmlLegend = () => {}; renderStrategicDirections = () => {};', context);
  return { context, nodes, document };
}
const a = { ID_Actividad: 'A1', Folio: 'F1', Nombre_Actividad: 'Taller', Fecha_Inicio: '2026-01-15', Fecha_Inicio_ISO: '2026-01-15', Fecha_Fin: '2026-01-31', Direccion: 'Museos', Clave_Proceso: 1, Nombre_Meta: 'Talleres', Acciones_PG: 'Acción PG', Acciones_PEC: 'Acción PEC', Disciplina: 'Música', Subdisciplina: 'Orquestas', Nombre_Espacio: 'Museo', Total_Sesiones: 3000, Foto_Evidencia: 'foto.jpg' };
const cat = [{ ID_Alineacion: 1, Clave_Proceso: 'PB1', Direccion: 'Museos', Nombre_Meta: 'Talleres', Unidad_Medida: 'Talleres realizados', Meta_Anual: 2000 }];

test('la cobertura reconoce solo los 46 municipios y conserva categorías externas fuera del denominador', () => {
  const s = setup();
  assert.equal(vm.runInContext('MUNICIPIOS_GTO.size', s.context), 46);
  s.context.names = ['Fuera del estado', 'Fuera del país', 'Ciudad de México', 'Cobertura estatal', 'Sin municipio', 'Municipio inexistente', '', null];
  assert.equal(vm.runInContext('names.some(isMunicipioGTO)', s.context), false);
  assert.equal(vm.runInContext('isMunicipioGTO("  LEON  ") && isMunicipioGTO("Pueblonuevo") && isMunicipioGTO("San   José Iturbide")', s.context), true);
  s.context.fixture = JSON.parse(vm.runInContext('JSON.stringify([...MUNICIPIOS_GTO].map(Municipio => ({Municipio, Cantidad: 1})))', s.context));
  s.context.fixture.push(...['Fuera del estado', 'Fuera del país', 'Ciudad de México', 'Cobertura estatal'].map(Municipio => ({Municipio, Cantidad: 10})), { Municipio: 'LEÓN', Cantidad: 1 }, { Municipio: 'Pueblonuevo', Cantidad: 1 });
  s.document.getElementById('search-comunidad').value = '';
  vm.runInContext('renderCoberturaTerritorial([], fixture);', s.context);
  assert.equal(s.nodes.get('kpi-ter-mun').textContent, '46');
  assert.equal(s.nodes.get('kpi-ter-pop').textContent, '88');
  vm.runInContext('updateMapMarkers = () => {}; renderVisionGeneral([], fixture, []);', s.context);
  assert.equal(s.nodes.get('kpi-mun-ratio').textContent, '46/46');
  assert.equal(s.nodes.get('kpi-mun-pct').textContent, '100.0%');
  assert.match(s.nodes.get('kpi-mun-foraneo').textContent, /Fuera del país/);
  assert.doesNotMatch(s.nodes.get('kpi-mun-foraneo').textContent, /sede nacional/);
});
test('la matriz usa talleres reportados y no sesiones para el cumplimiento', () => {
  const s = setup(); s.context.act = [{ ...a, Tipo_Registro: 'Concentrado mensual', Cantidad_Actividades: 1000 }]; s.context.cat = cat;
  vm.runInContext('rawDB.alineacion = cat; renderMatrizEstrategica(act, [], [], cat);', s.context);
  const result = JSON.parse(vm.runInContext('JSON.stringify(cachedMetasCatalogoRows)', s.context))[0];
  assert.equal(result.actCount, 1); assert.equal(result.realizado, 1000); assert.equal(result.pct, 50);
  assert.match(s.nodes.get('lbl-avance-meta-global').textContent, /50.0%/);
});
test('la gráfica separa los acumulados sin perder los registros ni mezclar las fuentes de público', () => {
  const s = setup(); const plots = {};
  s.context.capturePlot = (id, type, data, options) => { plots[id] = { data, options }; };
  s.context.act = [{ ...a, ID_Actividad: 'ACUM', Fecha_Inicio_ISO: '2026-01-01', Fecha_Fin: '2026-09-30' }, { ...a, ID_Actividad: 'MES', Fecha_Inicio_ISO: '2026-01-01', Fecha_Fin: '2026-01-31' }];
  s.context.ter = [{ ID_Actividad: 'ACUM', Cantidad: 351071 }, { ID_Actividad: 'MES', Cantidad: 18405 }];
  s.context.pop = [{ ID_Actividad: 'ACUM', Cantidad_Poblacion: 301817 }, { ID_Actividad: 'MES', Cantidad_Poblacion: 18248 }];
  vm.runInContext('renderChart = capturePlot; updateMapMarkers = () => {}; renderVisionGeneral(act, ter, pop);', s.context);
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[0].data[0], 18405);
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[1].data[0], 2);
  assert.match(s.nodes.get('monthly-population-note').textContent, /351,071/);
  assert.equal(s.nodes.get('kpi-pop-total').textContent, '369,476');
  assert.match(plots['chart-evolucion-mensual'].options.plugins.subtitle.text, /351,071/);
  vm.runInContext('popMode = "poblacion"; renderVisionGeneral(act, ter, pop);', s.context);
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[0].data[0], 18248);
  assert.match(s.nodes.get('monthly-population-note').textContent, /301,817/);
});

test('CSV y tarjetas respetan usuario, búsqueda y alerta incluso con más de 250 resultados', () => {
  const s = setup(); let exported; let download;
  s.context.Papa = { unparse(payload, options) { exported = payload.data.map(row => Object.fromEntries(payload.fields.map((h,i) => [h,row[i]]))); assert.equal(options.escapeFormulae, true); return 'csv'; } };
  s.context.URL = { createObjectURL() { return 'blob:test'; }, revokeObjectURL() {} };
  s.document.createElement = () => ({ click() { download = this.download; } });
  s.context.fixture = Array.from({ length: 260 }, (_, i) => ({ id: 'A'+i, folio: 'F'+i, usuario: ' IYSALAZARH@guanajuato.gob.mx ', nombre: 'Taller música', direccion: 'Área', mun: 'León', sT: 1, sP: 2, diff: -1, categories: ['diferencias', 'evidencias'], diag: 'Revisar' }));
  s.context.fixture.push({ ...s.context.fixture[0], id: 'OTRO', usuario: 'otra@guanajuato.gob.mx' }, { ...s.context.fixture[0], id: 'SIN_DIF', categories: ['evidencias'] });
  s.document.getElementById('filter-audit-user').value = 'iysalazarh@guanajuato.gob.mx';
  s.document.getElementById('filter-audit-export').value = 'resumen';
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

test('la descarga para corregir mantiene orden, IDs y valores de cada hoja sin columnas del resumen', () => {
  const s = setup();
  s.context.source = {
    actividades: { fields: ['ID_Actividad','Folio','Usuario_Registra','Fecha_Inicio','Total_Sesiones','Nombre_Actividad'], rows: [
      { ID_Actividad:'A1', Folio:'F1', Usuario_Registra:'adriana@ejemplo.mx', Fecha_Inicio:'09/02/2026',Total_Sesiones:'0',Nombre_Actividad:'Taller' },
      { ID_Actividad:'OTRO',Folio:'F2',Usuario_Registra:'otra@ejemplo.mx' },
      { ID_Actividad:'A1',Folio:'COLISION',Usuario_Registra:'otra@ejemplo.mx' }
    ] },
    territorio: { fields:['ID_Territorio','ID_Actividad','Municipio','Cantidad'],rows:[
      { ID_Territorio:'T1',ID_Actividad:'A1',Municipio:'León',Cantidad:'0' },
      { ID_Territorio:'T2',ID_Actividad:'A1',Municipio:'Guanajuato',Cantidad:'' },
      { ID_Territorio:'T3',ID_Actividad:'OTRO',Municipio:'León',Cantidad:'99' }
    ] },
    poblacion: { fields:['ID_Poblacion','ID_Actividad','Cantidad_Poblacion'],rows:[] },
    evidencia: { fields:['ID_Evidencia','ID_Actividad','Archivo_Evidencia'],rows:[{ID_Evidencia:'E1',ID_Actividad:'A1',Archivo_Evidencia:'archivo.pdf'}] }
  };
  s.context.alerts=[{id:'A1',usuario:'adriana@ejemplo.mx',categories:['faltantes'],nombre:'Taller'}];
  s.document.getElementById('filter-audit-user').value='adriana@ejemplo.mx';
  s.document.getElementById('filter-audit-kind').value='faltantes';
  s.document.getElementById('filter-audit-export').value='actividades';
  vm.runInContext('exportDB=source; auditList=alerts;',s.context);
  const data=()=>JSON.parse(vm.runInContext('JSON.stringify(getAuditExportData())',s.context));
  let result=data();
  assert.deepEqual(result.fields,s.context.source.actividades.fields);
  assert.deepEqual(result.data,[['A1','F1','adriana@ejemplo.mx','09/02/2026','0','Taller']]);
  s.document.getElementById('filter-audit-export').value='territorio';
  result=data();
  assert.deepEqual(result.data,[['T1','A1','León','0'],['T2','A1','Guanajuato','']]);
  assert.ok(!result.fields.includes('Que_Revisar'));
  s.document.getElementById('filter-audit-export').value='evidencia';
  assert.deepEqual(data().data,[['E1','A1','archivo.pdf']]);
  s.document.getElementById('filter-audit-export').value='poblacion';
  vm.runInContext('renderAuditTable()',s.context);
  assert.equal(data().data.length,0);
  assert.equal(s.nodes.get('btn-export-audit').disabled,true);
  assert.match(s.nodes.get('audit-visible-count').textContent,/No hay registros existentes/);
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

test('la ficha conserva todos los hijos y detecta duplicación fuera del filtro activo', () => {
  const s = setup();
  s.context.fixture = { actividades: [{ ...a, Total_Sesiones: 1, Clave_Proceso_Txt: 'PB1' }, { ...a, ID_Actividad: 'A2', Folio: 'F2', Total_Sesiones: 1 }], territorio: [{ ID_Territorio: 'T1', ID_Actividad: 'A1', Municipio: 'León', Cantidad: 20 }, { ID_Territorio: 'T2', ID_Actividad: 'A1', Municipio: 'Silao', Cantidad: 30 }], poblacion: [{ ID_Poblacion: 'P1', ID_Actividad: 'A1', Cantidad_Poblacion: 50, Cantidad_Participacion: 0, Cantidad_Acceso: 50 }], evidencia: [], alineacion: cat };
  s.document.getElementById('f-municipio').value = 'León';
  vm.runInContext('rawDB = fixture; auditList = []; openExpedienteModal("A1");', s.context);
  const html = s.nodes.get('mod-body').innerHTML;
  assert.match(html, /Silao/); assert.match(html, /T2/);
  assert.match(html, /Mismo nombre, fecha y sede/);
  assert.match(html, /Total territorial[\s\S]*?>50<\/p>/);
  assert.match(html, /Diferencia[\s\S]*?>0<\/p>/);
  assert.equal(s.nodes.get('mod-id').textContent, 'A1 • Folio: F1');
  assert.equal(s.nodes.get('mod-body').scrollTop, 0);
});
