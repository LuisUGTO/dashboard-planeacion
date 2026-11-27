const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const quality = require('../assets/js/calidad-datos.js');
const ficha = require('../assets/js/ficha-actividad.js');
const main = [...fs.readFileSync(require('node:path').join(__dirname, '../index.html'), 'utf8').matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m => m[1]).find(s => s.includes('const SHEET_ID'));
function setup({ keepHtmlLegend = false } = {}) {
  const nodes = new Map();
  const document = { getElementById(id) {
    if (!nodes.has(id)) nodes.set(id, { value: id === 'search-audit' ? '' : 'ALL', textContent: '', innerHTML: '', style: {}, attributes: {}, focus() {}, setAttribute(key, value) { this.attributes[key] = value; }, classList: { toggle() {}, add() {}, remove() {} } });
    return nodes.get(id);
  } };
  const context = vm.createContext({ window: { addEventListener() {} }, document, CulturaCalidad: quality, CulturaFicha: ficha, console, setTimeout, clearTimeout, AbortController, URL, Blob });
  vm.runInContext(main, context);
  vm.runInContext('renderChart = () => {}; renderStrategicDirections = () => {};', context);
  if (!keepHtmlLegend) vm.runInContext('renderDoughnutWithHtmlLegend = () => {};', context);
  return { context, nodes, document };
}
const a = { ID_Actividad: 'A1', Folio: 'F1', Nombre_Actividad: 'Taller', Fecha_Inicio: '2026-01-15', Fecha_Inicio_ISO: '2026-01-15', Fecha_Fin: '2026-01-31', Direccion: 'Museos', Clave_Proceso: 1, Nombre_Meta: 'Talleres', Acciones_PG: 'Acción PG', Acciones_PEC: 'Acción PEC', Disciplina: 'Música', Subdisciplina: 'Orquestas', Nombre_Espacio: 'Museo', Total_Sesiones: 3000, Foto_Evidencia: 'foto.jpg' };
const cat = [{ ID_Alineacion: 1, Clave_Proceso: 'PB1', Direccion: 'Museos', Nombre_Meta: 'Talleres', Unidad_Medida: 'Talleres realizados', Meta_Anual: 2000 }];

test('las cinco lecturas usan exportación CSV con límites operativos y preservan texto, ceros y vacíos', async () => {
  const s = setup();
  const sheets = [
    ['Registro_Actividades', '0', 'A:BN', 66, 'ID_Actividad'],
    ['Registro_Territorio', '375614539', 'A:L', 12, 'ID_Territorio'],
    ['Registro_Poblacion', '1598177756', 'A:H', 8, 'ID_Poblacion'],
    ['Regitro_Evidencia', '219249658', 'A:E', 5, 'ID_Evidencia'],
    ['Cat_Alineacion', '923865401', 'A:R', 18, 'ID_Alineacion']
  ];
  for (const [name, gid, range, columns, id] of sheets) {
    let requested;
    s.context.fetch = async (url, options) => {
      requested = new URL(url);
      assert.equal(options.cache, 'no-store');
      assert.ok(options.signal);
      return { ok: true, text: async () => 'csv-result' };
    };
    const row = { [id]: 'TEST', Nombre_Espacio: 'Museo del Pueblo de Guanajuato', Cantidad_Participacion: '0', Cantidad_Acceso: '' };
    s.context.Papa = { parse(csv, options) {
      assert.equal(csv, 'csv-result');
      assert.equal(options.header, true);
      assert.equal(options.skipEmptyLines, true);
      assert.equal(options.transformHeader(' ID_Actividad '), 'ID_Actividad');
      options.complete({ data: [row], errors: [], meta: { fields: [id, ...Array.from({ length: columns - 1 }, (_, i) => `Campo${i}`)] } });
    } };
    s.context.sheetName = name;
    const result = await vm.runInContext('fetchSheetCSV(sheetName)', s.context);
    assert.equal(requested.pathname.endsWith('/export'), true);
    assert.equal(requested.searchParams.get('format'), 'csv');
    assert.equal(requested.searchParams.get('gid'), gid);
    assert.equal(requested.searchParams.get('range'), range);
    assert.equal(result.rows[0].Nombre_Espacio, row.Nombre_Espacio);
    assert.equal(result.rows[0].Cantidad_Participacion, '0');
    assert.equal(result.rows[0].Cantidad_Acceso, '');
  }
  let fetched = false;
  s.context.fetch = async () => { fetched = true; };
  await assert.rejects(vm.runInContext('fetchSheetCSV("Dashboard_Master")', s.context), /sin fuente operativa/);
  assert.equal(fetched, false);
});

test('un CSV con columnas históricas, errores de parseo o encabezado incorrecto no se acepta como lectura válida', async () => {
  for (const [columns, first, errors] of [[80, 'ID_Actividad', []], [66, 'Login', []], [66, 'ID_Actividad', [{ code: 'TooManyFields' }]]]) {
    const s = setup();
    let attempts = 0;
    s.context.fetch = async () => { attempts++; return { ok: true, text: async () => 'invalid-csv' }; };
    s.context.Papa = { parse(csv, options) { options.complete({ data: [], errors, meta: { fields: [first, ...Array.from({ length: columns - 1 }, (_, i) => `Campo${i}`)] } }); } };
    await assert.rejects(vm.runInContext('fetchSheetCSV("Registro_Actividades")', s.context), /CSV inválido/);
    assert.equal(attempts, 2);
    assert.equal(vm.runInContext('loadedCount', s.context), 0);
  }
});

test('el mapa reajusta sus teselas cuando cambia su contenedor sin reinicializarlo ni desplazarlo', () => {
  const s = setup();
  const callbacks = [], targets = [], invalidations = [];
  let creations = 0;
  const map = { setView() { return this; }, invalidateSize(options) { invalidations.push(options); } };
  const leaflet = { map() { creations++; return map; }, tileLayer() { return { addTo() {} }; }, layerGroup() { return { addTo() { return {}; } }; } };
  s.context.L = leaflet;
  s.context.window.L = leaflet;
  s.context.ResizeObserver = class { constructor(callback) { callbacks.push(callback); } observe(target) { targets.push(target); } };
  vm.runInContext('initLeafletMap(); initLeafletMap();', s.context);
  assert.equal(creations, 1);
  assert.equal(callbacks.length, 1);
  assert.equal(targets[0], s.document.getElementById('mapGto'));
  callbacks[0]();
  assert.equal(invalidations.length, 1);
  assert.equal(invalidations[0].pan, false);
});

test('las leyendas completas permiten varias líneas y escapan las etiquetas sin alterar cantidades', () => {
  const s = setup({ keepHtmlLegend: true });
  s.context.entries = [['Artística', 2], ['No especificado', 1], ['<img src=x onerror="alert(1)">', 1]];
  vm.runInContext('renderDoughnutWithHtmlLegend("chart-test", "legend-test", entries, ["#10B981"], false, true)', s.context);
  const html = s.nodes.get('legend-test').innerHTML;
  assert.match(html, /Artística/);
  assert.match(html, /No especificado/);
  assert.doesNotMatch(html, /\btruncate\b/);
  assert.match(html, /whitespace-normal/);
  assert.match(html, /50\.0%/);
  assert.match(html, /&lt;img/);
  assert.doesNotMatch(html, /<img/);
  vm.runInContext('renderDoughnutWithHtmlLegend("chart-test", "legend-default", entries, ["#10B981"])', s.context);
  assert.match(s.nodes.get('legend-default').innerHTML, /\btruncate\b/);
});

test('PG muestra nombres sin numeración en Matriz Estratégica y no renderiza dona PG en Inicio', () => {
  const s = setup({ keepHtmlLegend: true });
  s.context.fixture = [{ ...a, Eje_PG: '2 Igualdad', Enfoque_Actividad: 'Cultural' }, { ...a, ID_Actividad: 'A2', Eje_PG: '1 Tranquilidad', Enfoque_Actividad: 'Artística' }, { ...a, ID_Actividad: 'A3', Eje_PG: '', Enfoque_Actividad: '' }];
  s.context.cat = cat;
  s.context.renders = {};
  const origGetById = s.document.getElementById;
  s.document.getElementById = (id) => (id === 'chart-eje-dona' || id === 'legend-eje-dona') ? null : origGetById(id);
  vm.runInContext('renderChart = (id,type,data) => { renders[id] = data; }; rawDB.alineacion = cat; renderVisionGeneral(fixture, [], []); renderMatrizEstrategica(fixture, [], [], cat);', s.context);
  const charts = JSON.parse(vm.runInContext('JSON.stringify(renders)', s.context));
  assert.equal(charts['chart-eje-dona'], undefined);
  assert.deepEqual(charts['chart-mat-eje'].labels, ['Igualdad', 'Tranquilidad', 'Sin Eje']);
  assert.deepEqual(charts['chart-mat-eje'].datasets[0].data, [1, 1, 1]);
  assert.deepEqual(charts['chart-mat-enfoque'].labels, ['Cultural', 'Artística', 'No especificado']);
  assert.equal(s.context.fixture[0].Eje_PG, '2 Igualdad');
  assert.equal(vm.runInContext('formatPGDistributionLabel("5. Prosperidad")', s.context), 'Prosperidad');
  assert.equal(vm.runInContext('formatPGDistributionLabel("2.4 Objetivo")', s.context), '2.4 Objetivo');
  assert.equal(vm.runInContext('formatPGDistributionLabel("2026 Cultura")', s.context), '2026 Cultura');
  assert.match(s.nodes.get('legend-mat-enfoque').innerHTML, /No especificado/);
});

test('las canceladas salen de las cinco vistas de ejecución y se conservan en conciliación, ficha y CSV', () => {
  const s = setup();
  const active = { ...a, Total_Sesiones: 1, Nombre_Actividad: 'Cartas al joven violinista', Fecha_Inicio: '2026-09-30', Fecha_Inicio_ISO: '2026-09-30', Fecha_Fin: '2026-09-30' };
  const cancelled = { ...active, ID_Actividad: 'CANCEL', Folio: 'FC', Descripcion_Breve: '[CANCELADA] Confirmada por el área', Fecha_Inicio: '2026-05-02', Fecha_Inicio_ISO: '2026-05-02', Fecha_Fin: '2026-05-02' };
  const fixture = { actividades: [active, cancelled], territorio: [{ ID_Territorio: 'T1', ID_Actividad: 'A1', Municipio: 'León', Cantidad: 5 }, { ID_Territorio: 'TC', ID_Actividad: 'CANCEL', Municipio: 'León', Cantidad: 900 }], poblacion: [{ ID_Poblacion: 'P1', ID_Actividad: 'A1', Cantidad_Poblacion: 5 }, { ID_Poblacion: 'PC', ID_Actividad: 'CANCEL', Cantidad_Poblacion: 900 }], evidencia: [{ ID_Evidencia: 'EC', ID_Actividad: 'CANCEL', Archivo_Evidencia: 'archivo.pdf' }], alineacion: cat };
  s.context.fixture = fixture;
  s.context.selections = [];
  for (const id of ['f-municipio', 'f-direccion', 'f-disciplina', 'f-eje', 'f-enfoque', 'f-zap']) s.document.getElementById(id).value = 'ALL';
  s.document.getElementById('f-date-start').value = '2026-01-01';
  s.document.getElementById('f-date-end').value = '2026-09-30';
  vm.runInContext(`rawDB = fixture;
    renderVisionGeneral = (a,t,p) => selections.push([a,t,p]);
    renderMatrizEstrategica = (a,p,t) => selections.push([a,t,p]);
    renderCoberturaTerritorial = (a,t) => selections.push([a,t]);
    renderPerfilPoblacion = (a,t,p,e) => selections.push([a,t,p,e]);
    renderRepositorioEvidencias = (a,t,e) => selections.push([a,t,e]);
    applyFilters();`, s.context);
  const views = JSON.parse(vm.runInContext('JSON.stringify(selections)', s.context));
  assert.equal(views.length, 5);
  for (const view of views) {
    assert.deepEqual(view[0].map(r => r.ID_Actividad), ['A1']);
    assert.ok(view.slice(1).every(rows => rows.every(r => r.ID_Actividad === 'A1')));
  }
  assert.match(s.nodes.get('btn-pop-ter').textContent, /\(5\)/);
  assert.match(s.nodes.get('btn-pop-pob').textContent, /\(5\)/);
  assert.equal(vm.runInContext('rawDB.actividades.length', s.context), 2);
  s.document.getElementById('filter-audit-kind').value = 'canceladas';
  s.document.getElementById('filter-audit-export').value = 'actividades';
  vm.runInContext('renderAuditTable()', s.context);
  const exported = JSON.parse(vm.runInContext('JSON.stringify(getAuditExportData())', s.context));
  assert.equal(exported.data.length, 1);
  assert.equal(exported.data[0][0], 'CANCEL');
  assert.match(s.nodes.get('tbl-auditoria').innerHTML, /Actividad cancelada/);
  vm.runInContext('openExpedienteModal("CANCEL")', s.context);
  assert.match(s.nodes.get('mod-body').innerHTML, /Actividad cancelada/);
  assert.match(s.nodes.get('mod-body').innerHTML, /archivo.pdf/);
});

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
test('cuenta áreas del catálogo y áreas registradas, sin contar sin asignar', () => {
  const s = setup();
  s.context.cat = [{ ...cat[0], Direccion: 'DIRECCIÓN GENERAL DE MUSEOS ' }, { ...cat[0], ID_Alineacion: 2, Direccion: 'COORDINACIÓN DE COMUNICACIÓN SOCIAL' }, { ...cat[0], ID_Alineacion: 3, Direccion: 'SIN ASIGNAR' }];
  s.context.act = [{ ...a, Direccion: 'Dirección General de Museos' }, { ...a, ID_Actividad: 'B', Direccion: 'SIN ASIGNAR' }, { ...a, ID_Actividad: 'C', Direccion: 'DIRECCIÓN DE MÚSICA' }];
  vm.runInContext('rawDB.alineacion = cat; renderMatrizEstrategica(act, [], [], cat);', s.context);
  assert.equal(s.nodes.get('kpi-mat-dir').textContent, '1/2');
});
test('la gráfica separa los acumulados sin perder los registros ni mezclar las fuentes de público', () => {
  const s = setup(); const plots = {};
  s.document.getElementById('f-date-start').value = '2026-01-01';
  s.document.getElementById('f-date-end').value = '2026-12-31';
  s.context.capturePlot = (id, type, data, options) => { plots[id] = { data, options }; };
  s.context.act = [
    { ...a, ID_Actividad: 'ACUM', Fecha_Inicio_ISO: '2026-01-01', Fecha_Fin: '2026-09-30' },
    { ...a, ID_Actividad: 'MES', Fecha_Inicio_ISO: '2026-01-01', Fecha_Fin: '2026-01-31' },
    { ...a, ID_Actividad: 'SIN_PUB', Fecha_Inicio_ISO: '2026-01-10', Fecha_Fin: '2026-01-10' }
  ];
  s.context.ter = [{ ID_Actividad: 'ACUM', Cantidad: 351071 }, { ID_Actividad: 'MES', Cantidad: 18405 }];
  s.context.pop = [{ ID_Actividad: 'ACUM', Cantidad_Poblacion: 301817 }, { ID_Actividad: 'MES', Cantidad_Poblacion: 18248 }];
  vm.runInContext('renderChart = capturePlot; updateMapMarkers = () => {}; renderVisionGeneral(act, ter, pop);', s.context);
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[0].data[0], 18405);
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[1].data[0], 3);
  const noteTer = s.nodes.get('monthly-population-note').textContent;
  assert.match(noteTer, /351,071 asistencias sin mes asignable/);
  assert.match(noteTer, /total general/);
  assert.match(noteTer, /aparte de la línea mensual/);
  assert.match(noteTer, /Por separado, 1 ficha tiene un total de público incompleto/);
  assert.equal(s.nodes.get('kpi-pop-total').textContent, '369,476');
  assert.equal(plots['chart-evolucion-mensual'].options.plugins.subtitle.display, false);
  vm.runInContext('popMode = "poblacion"; renderVisionGeneral(act, ter, pop);', s.context);
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[0].data[0], 18248);
  assert.match(s.nodes.get('monthly-population-note').textContent, /301,817 asistencias sin mes asignable/);
});

test('desgloses mensuales en Inicio separan métricas digitales y responden a filtros de municipio y mes', () => {
  const s = setup();
  const plots = {};
  const zaAct = { ...a, ID_Actividad: 'ACT-SCQZ00697', Clave_Proceso: 13, Clave_Proceso_Txt: 'QC4042', Nombre_Espacio: 'Zona Arqueológica Cañada de la Virgen', Fecha_Inicio: '01/01/2026', Fecha_Inicio_ISO: '2026-01-01', Fecha_Fin: '30/09/2026', Cantidad_Actividades: 1, Total_Sesiones: 1 };
  const otherAcum = { ...a, ID_Actividad: 'OTRO-ACUM', Fecha_Inicio: '01/02/2026', Fecha_Inicio_ISO: '2026-02-01', Fecha_Fin: '31/03/2026', Cantidad_Actividades: 1, Total_Sesiones: 1 };
  const julAct = { ...a, ID_Actividad: 'MES-JUL', Fecha_Inicio: '10/07/2026', Fecha_Inicio_ISO: '2026-07-10', Fecha_Fin: '10/07/2026', Cantidad_Actividades: 1, Total_Sesiones: 1 };
  s.context._fixture = {
    actividades: [zaAct, otherAcum, julAct],
    territorio: [
      { ID_Territorio: 'T1', ID_Actividad: 'ACT-SCQZ00697', Municipio: 'San Miguel de Allende', Cantidad: 69395, Cantidad_Participacion: 69395, Cantidad_Acceso: 0 },
      { ID_Territorio: 'T2', ID_Actividad: 'OTRO-ACUM', Municipio: 'León', Cantidad: 1000, Cantidad_Participacion: 1000, Cantidad_Acceso: 0 },
      { ID_Territorio: 'T3', ID_Actividad: 'MES-JUL', Municipio: 'San Miguel de Allende', Cantidad: 500, Cantidad_Participacion: 500, Cantidad_Acceso: 0 }
    ],
    poblacion: [
      { ID_Poblacion: 'P1', ID_Actividad: 'ACT-SCQZ00697', Cantidad_Poblacion: 69395, Cantidad_Participacion: 69395, Cantidad_Acceso: 0 },
      { ID_Poblacion: 'P2', ID_Actividad: 'OTRO-ACUM', Cantidad_Poblacion: 1000, Cantidad_Participacion: 1000, Cantidad_Acceso: 0 },
      { ID_Poblacion: 'P3', ID_Actividad: 'MES-JUL', Cantidad_Poblacion: 500, Cantidad_Participacion: 500, Cantidad_Acceso: 0 }
    ],
    evidencia: [],
    alineacion: [{ ID_Alineacion: 13, Clave_Proceso: 'QC4042', Direccion: 'PATRIMONIO CULTURAL', Meta: 'Cañada', Nombre_Meta: 'Atención', Meta_Anual: 105000 }]
  };
  s.document.getElementById('f-date-start').value = '2026-01-01';
  s.document.getElementById('f-date-end').value = '2026-12-31';
  s.context.capturePlot = (id, type, data, options) => { plots[id] = { data, options }; };
  vm.runInContext(`
    rawDB = _fixture;
    renderChart = capturePlot;
    updateMapMarkers = () => {};
    renderMatrizEstrategica = () => {};
    renderCoberturaTerritorial = () => {};
    renderPerfilPoblacion = () => {};
    renderRepositorioEvidencias = () => {};
    applyFilters();
  `, s.context);

  // Corte completo: 7,341 de Cañada entran en Ene-Sep + 500 de MES-JUL en julio = 2,195; 63,054 sin mes (62,054 digitales + 1,000 otros); total = 70,895
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[0].data[0], 1587);
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[0].data[6], 2195);
  assert.equal(s.nodes.get('kpi-pop-total').textContent, '70,895');
  assert.equal(s.nodes.get('kpi-act-total').textContent, '3');
  const noteAll = s.nodes.get('monthly-population-note').textContent;
  assert.match(noteAll, /63,054 asistencias sin mes asignable/);
  assert.match(noteAll, /62,054 métricas digitales de Zonas Arqueológicas y 1,000 en otros acumulados/);

  // Filtro por municipio: San Miguel de Allende conserva Cañada + MES-JUL (total = 69,895; sin mes = 62,054 digitales)
  s.document.getElementById('f-municipio').value = 'San Miguel de Allende';
  vm.runInContext('applyFilters()', s.context);
  assert.equal(s.nodes.get('kpi-pop-total').textContent, '69,895');
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[0].data[6], 2195);
  assert.match(s.nodes.get('monthly-population-note').textContent, /62,054 asistencias sin mes asignable.*correspondientes a métricas digitales de Zonas Arqueológicas/);

  // Filtro por mes: Julio deja solo MES-JUL (500 en julio, 0 sin mes)
  s.document.getElementById('f-municipio').value = 'ALL';
  s.document.getElementById('f-mes').value = '07';
  vm.runInContext('applyFilters()', s.context);
  assert.equal(s.nodes.get('kpi-pop-total').textContent, '500');
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[0].data[6], 500);
  assert.match(s.nodes.get('monthly-population-note').textContent, /Todas las asistencias con periodo contenido en un mes aparecen en la línea mensual/);

  // Filtro por mes: Enero deja solo ACT-SCQZ00697 (total = 69,395; julio presencial Cañada = 1,695; digitales = 62,054)
  s.document.getElementById('f-mes').value = '01';
  vm.runInContext('applyFilters()', s.context);
  assert.equal(s.nodes.get('kpi-pop-total').textContent, '69,395');
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[0].data[0], 1587);
  assert.equal(plots['chart-evolucion-mensual'].data.datasets[0].data[6], 1695);
  assert.match(s.nodes.get('monthly-population-note').textContent, /62,054 asistencias sin mes asignable/);
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
  assert.deepEqual(result.data,[['T1','A1','León','0','F1','adriana@ejemplo.mx','','Taller'],['T2','A1','Guanajuato','','F1','adriana@ejemplo.mx','','Taller']]);
  assert.deepEqual(result.fields.slice(-4), ['Folio_Actividad_Consulta','Usuario_Responsable_Consulta','Direccion_Consulta','Nombre_Actividad_Consulta']);
  assert.ok(!result.fields.includes('Que_Revisar'));
  s.document.getElementById('filter-audit-export').value='evidencia';
  assert.deepEqual(data().data,[['E1','A1','archivo.pdf','F1','adriana@ejemplo.mx','','Taller']]);
  s.document.getElementById('filter-audit-user').value='ALL';
  assert.deepEqual(data().data[0].slice(-4),['','','','']);
  s.document.getElementById('filter-audit-user').value='adriana@ejemplo.mx';
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

test('las capturas sustituidas salen de las cinco vistas pero conservan su ficha y CSV histórico', () => {
  const s = setup();
  const active = { ...a, ID_Actividad: 'ACT-SCQZ00697', Total_Sesiones: 1 };
  const old = { ...active, ID_Actividad: 'ACT-SCBV52724', Folio: 'OLD', Descripcion_Breve: '[SUSTITUIDO:ACT-SCQZ00697] Ejercicio confirmado', Total_Sesiones: 9 };
  s.context.fixture = { actividades: [active, old], territorio: [{ ID_Actividad: active.ID_Actividad, Municipio: 'León', Otra_Comunidad: 'Centro', Cantidad: 5 }, { ID_Actividad: old.ID_Actividad, Municipio: 'León', Cantidad: 49465 }], poblacion: [{ ID_Actividad: active.ID_Actividad, Cantidad_Poblacion: 5, Cantidad_Participacion: 0, Cantidad_Acceso: 5 }, { ID_Actividad: old.ID_Actividad, Cantidad_Poblacion: 211 }], evidencia: [], alineacion: cat };
  s.context.selections = [];
  for (const id of ['f-municipio','f-direccion','f-disciplina','f-eje','f-enfoque','f-zap']) s.document.getElementById(id).value = 'ALL';
  s.document.getElementById('f-date-start').value = '2026-01-01';
  s.document.getElementById('f-date-end').value = '2026-09-30';
  vm.runInContext(`rawDB=fixture;
    renderVisionGeneral=(a,t,p)=>selections.push([a,t,p]);
    renderMatrizEstrategica=(a,p,t)=>selections.push([a,t,p]);
    renderCoberturaTerritorial=(a,t)=>selections.push([a,t]);
    renderPerfilPoblacion=(a,t,p,e)=>selections.push([a,t,p,e]);
    renderRepositorioEvidencias=(a,t,e)=>selections.push([a,t,e]);
    applyFilters();`,s.context);
  const selections=JSON.parse(vm.runInContext('JSON.stringify(selections)',s.context));
  assert.equal(selections.length,5);
  for(const view of selections) for(const rows of view) assert.ok(rows.every(row=>row.ID_Actividad===active.ID_Actividad));
  assert.equal(vm.runInContext('rawDB.actividades.length',s.context),2);
  s.document.getElementById('filter-audit-kind').value='sustituidos';
  s.document.getElementById('filter-audit-export').value='actividades';
  const exported=JSON.parse(vm.runInContext('JSON.stringify(getAuditExportData())',s.context));
  assert.equal(exported.data.length,1);
  assert.equal(exported.data[0][0],old.ID_Actividad);
  vm.runInContext('openExpedienteModal("ACT-SCBV52724")',s.context);
  assert.match(s.nodes.get('mod-body').innerHTML,/Captura sustituida/);
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

test('buildRegistroWorkbook omite actividades sustituidas y canceladas y sus filas hijas', () => {
  const s = setup();
  const sheets = {};
  s.context.ExcelJS = {
    Workbook: class {
      addWorksheet(name) {
        const ws = { name, tables: [], cols: {}, addTable(t) { this.tables.push(t); }, getColumn(i) { return (this.cols[i] = this.cols[i] || {}); } };
        sheets[name] = ws;
        return ws;
      }
    }
  };
  s.context.sources = {
    actividades: { fields: ['ID_Actividad', 'Folio', 'Usuario_Registra', 'Direccion', 'Nombre_Actividad', 'Descripcion_Breve', 'Fecha_Inicio', 'Clave_Proceso', 'Clave_Proceso_Txt'], rows: [
      { ID_Actividad: 'ACT-SCAA12345', Folio: 'F1', Usuario_Registra: 'u@g.mx', Direccion: 'Museos', Nombre_Actividad: 'Vigente', Descripcion_Breve: 'Activa', Fecha_Inicio: '10/05/2026', Clave_Proceso: '92', Clave_Proceso_Txt: 'PB3572' },
      { ID_Actividad: 'ACT-SCBB67890', Folio: 'F2', Usuario_Registra: 'u@g.mx', Direccion: 'Museos', Nombre_Actividad: 'Sustituida', Descripcion_Breve: '[SUSTITUIDO:ACT-SCAA12345] vieja', Fecha_Inicio: '10/05/2026', Clave_Proceso: '92', Clave_Proceso_Txt: 'PB3572' },
      { ID_Actividad: 'ACT-SCCC11111', Folio: 'F3', Usuario_Registra: 'u@g.mx', Direccion: 'Museos', Nombre_Actividad: 'Cancelada', Descripcion_Breve: '[CANCELADA] no se hizo', Fecha_Inicio: '10/05/2026', Clave_Proceso: '92', Clave_Proceso_Txt: 'PB3572' }
    ] },
    territorio: { fields: ['ID_Territorio', 'ID_Actividad', 'Municipio', 'Cantidad'], rows: [
      { ID_Territorio: 'T1', ID_Actividad: 'ACT-SCAA12345', Municipio: 'León', Cantidad: '10' },
      { ID_Territorio: 'T2', ID_Actividad: 'ACT-SCBB67890', Municipio: 'León', Cantidad: '99' },
      { ID_Territorio: 'T3', ID_Actividad: 'ACT-SCCC11111', Municipio: 'León', Cantidad: '50' }
    ] },
    poblacion: { fields: ['ID_Poblacion', 'ID_Actividad', 'Cantidad_Poblacion'], rows: [
      { ID_Poblacion: 'P1', ID_Actividad: 'ACT-SCAA12345', Cantidad_Poblacion: '10' },
      { ID_Poblacion: 'P2', ID_Actividad: 'ACT-SCBB67890', Cantidad_Poblacion: '99' }
    ] },
    evidencia: { fields: ['ID_Evidencia', 'ID_Actividad', 'Archivo_Evidencia'], rows: [
      { ID_Evidencia: 'E1', ID_Actividad: 'ACT-SCAA12345', Archivo_Evidencia: 'ok.pdf' },
      { ID_Evidencia: 'E2', ID_Actividad: 'ACT-SCBB67890', Archivo_Evidencia: 'old.pdf' }
    ] }
  };
  vm.runInContext('buildRegistroWorkbook(sources, "ALL")', s.context);
  assert.deepEqual(sheets.Registro_Actividades.tables[0].rows.map(r => r[0]), ['ACT-SCAA12345']);
  assert.deepEqual(sheets.Registro_Territorio.tables[0].rows.map(r => r[0]), ['T1']);
  assert.deepEqual(sheets.Registro_Poblacion.tables[0].rows.map(r => r[0]), ['P1']);
  assert.deepEqual(sheets.Regitro_Evidencia.tables[0].rows.map(r => r[0]), ['E1']);
});

test('buildRegistroWorkbook calcula Cantidad_Actividades desde A:BN según CulturaCalidad.quantity', () => {
  const s = setup();
  const sheets = {};
  s.context.ExcelJS = {
    Workbook: class {
      addWorksheet(name) {
        const ws = { name, tables: [], cols: {}, addTable(t) { this.tables.push(t); }, getColumn(i) { return (this.cols[i] = this.cols[i] || {}); } };
        sheets[name] = ws;
        return ws;
      }
    }
  };
  s.context.sources = {
    actividades: { fields: ['ID_Actividad', 'Folio', 'Usuario_Registra', 'Direccion', 'Nombre_Actividad', 'Descripcion_Breve', 'Fecha_Inicio', 'Tipo_Registro'], rows: [
      { ID_Actividad: 'ACT-1', Folio: 'F1', Usuario_Registra: 'u@g.mx', Direccion: 'Museos', Nombre_Actividad: 'Individual', Descripcion_Breve: 'Taller regular', Fecha_Inicio: '10/05/2026', Tipo_Registro: 'Actividad individual' },
      { ID_Actividad: 'ACT-2', Folio: 'F2', Usuario_Registra: 'u@g.mx', Direccion: 'Museos', Nombre_Actividad: 'Concentrado numérico', Descripcion_Breve: 'Avance mensual: 14 Visitas guiadas.', Fecha_Inicio: '10/05/2026', Tipo_Registro: 'Concentrado mensual' },
      { ID_Actividad: 'ACT-3', Folio: 'F3', Usuario_Registra: 'u@g.mx', Direccion: 'Museos', Nombre_Actividad: 'Concentrado pendiente', Descripcion_Breve: 'Sin cifra declarada', Fecha_Inicio: '10/05/2026', Tipo_Registro: 'Concentrado mensual' }
    ] },
    territorio: { fields: ['ID_Territorio', 'ID_Actividad', 'Municipio', 'Cantidad'], rows: [] },
    poblacion: { fields: ['ID_Poblacion', 'ID_Actividad', 'Cantidad_Poblacion'], rows: [] },
    evidencia: { fields: ['ID_Evidencia', 'ID_Actividad', 'Archivo_Evidencia'], rows: [] }
  };
  vm.runInContext('buildRegistroWorkbook(sources, "ALL")', s.context);
  const cols = sheets.Registro_Actividades.tables[0].columns.map(c => c.name);
  const qtyIdx = cols.indexOf('Cantidad_Actividades');
  assert.ok(qtyIdx >= 0);
  const qtys = sheets.Registro_Actividades.tables[0].rows.map(r => r[qtyIdx]);
  assert.deepEqual(qtys, [1, 14, null]);
});

test('renderRepositorioEvidencias excluye archivos vacíos y coincide con Conciliación en actividades sin evidencia', () => {
  const s = setup();
  s.context.acts = [
    { ...a, ID_Actividad: 'CON_ARCH', Foto_Evidencia: '' },
    { ...a, ID_Actividad: 'CON_FOTO', Foto_Evidencia: 'foto.jpg' },
    { ...a, ID_Actividad: 'VACIO', Foto_Evidencia: '' }
  ];
  s.context.ters = [];
  s.context.evis = [
    { ID_Evidencia: 'E1', ID_Actividad: 'CON_ARCH', Archivo_Evidencia: 'evidencia.pdf', Tipo_Evidencia: 'PDF' },
    { ID_Evidencia: 'E2', ID_Actividad: 'VACIO', Archivo_Evidencia: '', Tipo_Evidencia: 'PDF' }
  ];
  vm.runInContext('renderRepositorioEvidencias(acts, ters, evis);', s.context);
  assert.equal(s.nodes.get('kpi-evi-total').textContent, '1');
  assert.equal(s.nodes.get('kpi-evi-cov-ratio').textContent, '2/3');
  assert.match(s.nodes.get('kpi-evi-missing').textContent, /^1 actividades sin evidencia/);
  const missingIds = JSON.parse(vm.runInContext('JSON.stringify(cachedMissingActsList.map(x => x.idAct))', s.context));
  assert.deepEqual(missingIds, ['VACIO']);
});

test('filtros canonizan municipios, corrigen mojibake de eje y enfoque y formatean fecha local', () => {
  const s = setup();
  s.context.fixture = {
    actividades: [
      { ...a, ID_Actividad: 'A1', Eje_PG: '4 Vocaci\uFFFDn', Enfoque_Actividad: 'Art\uFFFDstica', Total_Sesiones: 1 },
      { ...a, ID_Actividad: 'A2', Eje_PG: '4 Vocación', Enfoque_Actividad: 'Artística', Total_Sesiones: 1 }
    ],
    territorio: [
      { ID_Territorio: 'T1', ID_Actividad: 'A1', Municipio: 'Silao', Cantidad: 10 },
      { ID_Territorio: 'T2', ID_Actividad: 'A2', Municipio: 'Silao de la Victoria', Cantidad: 20 }
    ],
    poblacion: [],
    evidencia: [],
    alineacion: cat
  };
  s.document.getElementById('f-date-start').value = '2026-01-01';
  s.document.getElementById('f-date-end').value = '2026-12-31';
  s.document.getElementById('f-municipio').value = 'Silao de la Victoria';
  s.document.getElementById('f-eje').value = '4 Vocación';
  s.document.getElementById('f-enfoque').value = 'Artística';
  vm.runInContext(`rawDB = fixture;
    renderVisionGeneral = () => {}; renderMatrizEstrategica = () => {};
    renderCoberturaTerritorial = () => {}; renderPerfilPoblacion = () => {};
    renderRepositorioEvidencias = () => {}; applyFilters();`, s.context);
  const ids = JSON.parse(vm.runInContext('JSON.stringify([...filteredActIds])', s.context));
  assert.deepEqual(ids, ['A1', 'A2']);
  assert.equal(vm.runInContext('getCanonicalMunicipioLabel("Dolores Hidalgo")', s.context), 'Dolores Hidalgo Cuna de la Independencia Nacional');
  assert.equal(vm.runInContext('getLocalDateStamp(new Date(2026, 10, 25, 22, 30, 0))', s.context), '20261125');
});

test('grupos prioritarios excluye Público general, usa barras horizontales con iconos y eje X compacto', () => {
  const s = setup();
  const captured = {};
  s.context.renderChart = (id, type, data, options, plugins) => { captured[id] = { type, data, options, plugins }; };
  assert.equal(vm.runInContext('isPriorityGroup("Público general")', s.context), false);
  assert.equal(vm.runInContext('isPriorityGroup("Ninguno (Población General)")', s.context), false);
  assert.equal(vm.runInContext('isPriorityGroup("")', s.context), false);
  assert.equal(vm.runInContext('isPriorityGroup("NNA (Niñas, Niños y Adolescentes)")', s.context), true);
  assert.equal(vm.runInContext('formatAxisCompact(0)', s.context), '0');
  assert.equal(vm.runInContext('formatAxisCompact(950)', s.context), '950');
  assert.equal(vm.runInContext('formatAxisCompact(20000)', s.context), '20k');
  assert.equal(vm.runInContext('formatAxisCompact(719000)', s.context), '719k');
  assert.equal(vm.runInContext('formatAxisCompact(1200000)', s.context), '1.2M');

  s.context.acts = [a];
  s.context.ters = [{ ID_Actividad: 'A1', Municipio: 'León', Cantidad: 31000 }];
  s.context.pobs = [
    { ID_Actividad: 'A1', Grupo_Etario: 'Población General', Genero: 'Dato global', Grupo_Prioritario: 'Público general', Cantidad_Participacion: 0, Cantidad_Acceso: 20000, Cantidad_Poblacion: 20000 },
    { ID_Actividad: 'A1', Grupo_Etario: 'Niñas y Niños (6 a 12 años)', Genero: 'Mujeres', Grupo_Prioritario: 'NNA (Niñas, Niños y Adolescentes)', Cantidad_Participacion: 10000, Cantidad_Acceso: 0, Cantidad_Poblacion: 10000 },
    { ID_Actividad: 'A1', Grupo_Etario: 'Adultos (30 a 59 años)', Genero: 'Hombres', Grupo_Prioritario: 'Personas Migrantes', Cantidad_Participacion: 1000, Cantidad_Acceso: 0, Cantidad_Poblacion: 1000 }
  ];
  vm.runInContext('renderPerfilPoblacion(acts, ters, pobs, []);', s.context);

  assert.equal(s.nodes.get('kpi-pob-prio').textContent, '11,000');
  const prio = captured['chart-pob-prioritario'];
  assert.equal(prio.options.indexAxis, 'y');
  assert.deepEqual(JSON.parse(JSON.stringify(prio.data.labels)), ['Niñas, Niños y Adolesc.', 'Personas Migrantes']);
  assert.deepEqual(JSON.parse(JSON.stringify(prio.data.datasets[0].data)), [10000, 1000]);
  assert.equal(prio.data.datasets[0].minBarLength, 6);
  assert.equal(prio.options.scales.x.ticks.maxRotation, 0);
  assert.equal(prio.plugins.length, 1);
  assert.equal(prio.plugins[0].id, 'priorityIconsBadge');

  const etario = captured['chart-pob-etario'];
  assert.equal(etario.options.scales.x.ticks.maxRotation, 0);
  const stack = captured['chart-pob-enfoque-stack'];
  assert.equal(stack.options.scales.x.ticks.maxRotation, 0);
});

test('renderHomeMetasProgress resume direcciones y cambia a procesos al filtrar dirección sin mezclar unidades', () => {
  const s = setup();
  const catRows = [
    { ID_Alineacion: 1, Clave_Proceso: 'PB3572', Direccion: 'DIRECCIÓN GENERAL DE MUSEOS, ARTES VISUALES Y EXPOSICIONES', Nombre_Meta: 'Talleres en museos', Unidad_Medida: 'Talleres realizados', Meta_Anual: 100 },
    { ID_Alineacion: 2, Clave_Proceso: 'QC4047', Direccion: 'DIRECCIÓN GENERAL DE MUSEOS, ARTES VISUALES Y EXPOSICIONES', Nombre_Meta: 'Asistentes museos', Unidad_Medida: 'Personas atendidas', Meta_Anual: 500 },
    { ID_Alineacion: 3, Clave_Proceso: 'PB3573', Direccion: 'DIRECCIÓN GENERAL DE EDITORIAL Y PUBLICACIONES', Nombre_Meta: 'Ferias del libro', Unidad_Medida: 'Ferias realizadas', Meta_Anual: 4 }
  ];
  const acts = [
    { ...a, ID_Actividad: 'A1', Direccion: 'Museos', Clave_Proceso: 1, Descripcion_Breve: 'Avance mensual: 50 Talleres' },
    { ...a, ID_Actividad: 'A2', Direccion: 'Editorial', Clave_Proceso: 3 }
  ];
  s.context.catRows = catRows;
  s.context.acts = acts;
  s.document.getElementById('f-direccion').value = 'ALL';
  vm.runInContext('rawDB.alineacion = catRows; renderMatrizEstrategica(acts, [], [], catRows);', s.context);

  const summaryAll = s.nodes.get('home-metas-summary').innerHTML;
  const gridAll = s.nodes.get('home-metas-grid').innerHTML;
  assert.match(summaryAll, /0 cumplidas/);
  assert.match(summaryAll, /2 en avance/);
  assert.match(summaryAll, /1 sin registro/);
  assert.match(gridAll, /DG Museos y Artes Visuales/);
  assert.match(gridAll, /50 \/ 100 act\./);
  assert.match(gridAll, /DG Editorial y Publicaciones/);
  assert.match(gridAll, /1 \/ 4 act\./);

  s.document.getElementById('f-direccion').value = 'DIRECCIÓN GENERAL DE MUSEOS, ARTES VISUALES Y EXPOSICIONES';
  vm.runInContext('renderMatrizEstrategica(acts, [], [], catRows.slice(0, 2));', s.context);
  assert.match(s.nodes.get('home-metas-title').textContent, /Avance por Proceso/);
  const gridDir = s.nodes.get('home-metas-grid').innerHTML;
  assert.match(gridDir, /PB3572 · Talleres en museos/);
  assert.match(gridDir, /QC4047 · Asistentes museos/);
  assert.ok(!gridDir.includes('NaN'));
});

test('Checklist Inicio: filtros de mes, fechas, subsecretarías, proceso, meta, eje oculto y KPIs', () => {
  const s = setup();
  // Agregar soporte básico de select/options para verificar populateFilterDropdowns y #f-meta/#f-proceso
  s.document.createElement = () => ({ value: '', textContent: '', title: '' });
  const selectIds = ['f-municipio', 'f-direccion', 'f-proceso', 'f-meta', 'f-disciplina', 'f-eje', 'f-enfoque', 'f-mes', 'f-zap'];
  for (const id of selectIds) {
    const el = s.document.getElementById(id);
    el.children = [];
    el.appendChild = (opt) => el.children.push(opt);
    Object.defineProperty(el, 'innerHTML', {
      get() { return this._html || ''; },
      set(v) { this._html = v; this.children = []; }
    });
  }

  const catRows = [
    { ID_Alineacion: 10, Clave_Proceso: 'PB3571', Meta: 'Fortalecimiento Artístico', Nombre_Meta: 'Conciertos didácticos', Direccion: 'SUBSECRETARÍA DE DESARROLLO Y PROMOCIÓN ARTÍSTICA Y CULTURAL', Eje_PG: 'Cultura', Unidad_Medida: 'Actividades realizadas', Meta_Anual: 10 },
    { ID_Alineacion: 47, Clave_Proceso: 'PB3575', Meta: 'Desarrollo Comunitario', Nombre_Meta: 'Talleres comunitarios', Direccion: 'SUBSECRETARÍA DE DESARROLLO COMUNITARIO Y PROMOCIÓN PATRIMONIAL', Eje_PG: 'Bienestar', Unidad_Medida: 'Actividades realizadas', Meta_Anual: 20 },
    { ID_Alineacion: 63, Clave_Proceso: 'PB3565', Meta: 'Conservación del Patrimonio', Nombre_Meta: 'Cursos de conservación', Direccion: 'DIRECCIÓN GENERAL DE PATRIMONIO CULTURAL', Eje_PG: 'Patrimonio', Unidad_Medida: 'Cursos', Meta_Anual: 5 }
  ];
  const acts = [
    { ID_Actividad: 'A-JAN', Nombre_Actividad: 'Concierto Enero', Fecha_Inicio: '2026-01-10', Fecha_Inicio_ISO: '2026-01-10', Direccion: 'Subsecretaría de Desarrollo y Promoción Artística y Cultural', Clave_Proceso: 10, Clave_Proceso_Txt: 'PB3571', Tipo_Actividad: 'Concierto', Eje_PG: 'Cultura', Disciplina: 'Música', Enfoque_Actividad: 'Artístico', Cantidad_Actividades: 2, Total_Sesiones: 2, Total_Poblacion: 100 },
    { ID_Actividad: 'A-MAR-OUT', Nombre_Actividad: 'Taller Marzo Fuera', Fecha_Inicio: '2026-03-05', Fecha_Inicio_ISO: '2026-03-05', Direccion: 'Subsecretaría de Desarrollo Comunitario y Promoción Patrimonial', Clave_Proceso: 47, Clave_Proceso_Txt: 'PB3575', Tipo_Actividad: 'Convocatoria pública', Eje_PG: 'Bienestar', Disciplina: 'Artes visuales', Enfoque_Actividad: 'Comunitario', Cantidad_Actividades: 1, Total_Sesiones: 3, Total_Poblacion: 40 },
    { ID_Actividad: 'A-MAR-IN', Nombre_Actividad: 'Curso Marzo Dentro', Fecha_Inicio: '2026-03-20', Fecha_Inicio_ISO: '2026-03-20', Direccion: 'Patrimonio Cultural', Clave_Proceso: 63, Clave_Proceso_Txt: 'PB3565', Tipo_Actividad: 'Taller', Eje_PG: 'Bienestar', Disciplina: 'Patrimonio', Enfoque_Actividad: 'Patrimonial', Cantidad_Actividades: 3, Total_Sesiones: 6, Total_Poblacion: 60 }
  ];
  const ters = [
    { ID_Territorio: 'T1', ID_Actividad: 'A-JAN', Municipio: 'León', Cantidad: 100, Cantidad_Participacion: 60, Cantidad_Acceso: 40 },
    { ID_Territorio: 'T2', ID_Actividad: 'A-MAR-OUT', Municipio: 'Irapuato', Cantidad: 40, Cantidad_Participacion: 40, Cantidad_Acceso: 0 },
    { ID_Territorio: 'T3', ID_Actividad: 'A-MAR-IN', Municipio: 'Guanajuato', Cantidad: 60, Cantidad_Participacion: 60, Cantidad_Acceso: 0 }
  ];
  const pobs = [
    { ID_Poblacion: 'P1', ID_Actividad: 'A-JAN', Grupo_Prioritario: 'Público general', Cantidad_Poblacion: 70 },
    { ID_Poblacion: 'P2', ID_Actividad: 'A-JAN', Grupo_Prioritario: 'Infancias (Niñas, Niños y Adolescentes)', Cantidad_Poblacion: 30 },
    { ID_Poblacion: 'P3', ID_Actividad: 'A-MAR-OUT', Grupo_Prioritario: 'Jóvenes en riesgo', Cantidad_Poblacion: 40 }
  ];

  s.context._fixture = { actividades: acts, territorio: ters, poblacion: pobs, evidencia: [], alineacion: catRows };
  vm.runInContext(`
    rawDB = _fixture;
    renderMatrizEstrategica = () => {};
    renderCoberturaTerritorial = () => {};
    renderPerfilPoblacion = () => {};
    renderRepositorioEvidencias = () => {};
    updateMapMarkers = () => {};
    renderAuditDashboard = () => {};
    renderVistaAnual = () => {};
    renderChart = () => {};
    populateFilterDropdowns();
  `, s.context);

  // 1. Dos subsecretarías distintas y resolución por Cat_Alineacion
  const dirOpts = s.nodes.get('f-direccion').children.map(o => o.value);
  assert.ok(dirOpts.includes('SUBSECRETARÍA DE DESARROLLO Y PROMOCIÓN ARTÍSTICA Y CULTURAL'));
  assert.ok(dirOpts.includes('SUBSECRETARÍA DE DESARROLLO COMUNITARIO Y PROMOCIÓN PATRIMONIAL'));
  assert.equal(
    vm.runInContext("getCanonicalDirection('Subsecretaría sin etiqueta', 47, 'PB3575', rawDB.alineacion)", s.context),
    'SUBSECRETARÍA DE DESARROLLO COMUNITARIO Y PROMOCIÓN PATRIMONIAL'
  );

  // 2. Proceso con nombre completo y Meta dependiente que se limpia si cambia el proceso
  const procLabels = s.nodes.get('f-proceso').children.map(o => `${o.value}|${o.textContent}`);
  assert.ok(procLabels.includes('PB3575|PB3575 — Desarrollo Comunitario'));
  const metaLabels = s.nodes.get('f-meta').children.map(o => `${o.value}|${o.textContent}`);
  assert.ok(metaLabels.includes('47|#47 · Talleres comunitarios'));

  s.document.getElementById('f-date-start').value = '2026-03-10';
  s.document.getElementById('f-date-end').value = '2026-03-31';
  s.document.getElementById('f-mes').value = '03';
  vm.runInContext('applyFilters()', s.context);
  // Intersección mes=03 + 2026-03-10..31 deja solo A-MAR-IN
  assert.deepEqual(vm.runInContext('[...filteredActIds].join(",")', s.context), 'A-MAR-IN');
  // Quitar mes conserva el rango de fechas
  s.document.getElementById('f-mes').value = 'ALL';
  vm.runInContext('applyFilters()', s.context);
  assert.equal(s.document.getElementById('f-date-start').value, '2026-03-10');
  assert.equal(s.document.getElementById('f-date-end').value, '2026-03-31');
  assert.deepEqual(vm.runInContext('[...filteredActIds].join(",")', s.context), 'A-MAR-IN');

  // Cambio de proceso limpia #f-meta incompatible
  s.document.getElementById('f-date-start').value = '2026-01-01';
  s.document.getElementById('f-date-end').value = '2026-12-31';
  s.document.getElementById('f-proceso').value = 'PB3575';
  s.document.getElementById('f-meta').value = '47';
  vm.runInContext('applyFilters()', s.context);
  assert.equal(s.document.getElementById('f-meta').value, '47');
  s.document.getElementById('f-proceso').value = 'PB3565';
  vm.runInContext('applyFilters()', s.context);
  assert.equal(s.document.getElementById('f-meta').value, 'ALL');
  assert.equal(vm.runInContext('[...filteredActIds].join(",")', s.context), 'A-MAR-IN');

  // 3. Eje PG oculto en Inicio y activo en otras vistas
  s.document.getElementById('f-proceso').value = 'ALL';
  vm.runInContext("switchTab('tab-matriz')", s.context);
  s.document.getElementById('f-eje').value = 'Bienestar';
  vm.runInContext('applyFilters()', s.context);
  assert.equal(vm.runInContext('[...filteredActIds].sort().join(",")', s.context), 'A-MAR-IN,A-MAR-OUT');
  let ejeHidden = false;
  s.nodes.get('filter-wrap-eje').classList = { toggle(cls, force) { if (cls === 'hidden') ejeHidden = !!force; } };
  vm.runInContext("switchTab('tab-vision')", s.context);
  assert.equal(ejeHidden, true);
  assert.equal(s.document.getElementById('f-eje').value, 'ALL');
  assert.equal(vm.runInContext('filteredActIds.size', s.context), 3);

  // 4. KPIs de Inicio (Programas, Convocatorias, Actividades, Personas, Grupos prioritarios sin Público general, Municipios)
  assert.equal(s.nodes.get('kpi-prog-total').textContent, '3/3');
  assert.equal(s.nodes.get('kpi-conv-total').textContent, '1');
  assert.equal(s.nodes.get('kpi-act-total').textContent, '6');
  assert.equal(s.nodes.get('kpi-fichas-total').textContent, '3');
  assert.equal(s.nodes.get('kpi-sesiones-total').textContent, '11');
  assert.equal(s.nodes.get('kpi-pop-total').textContent, '200');
  assert.equal(s.nodes.get('kpi-home-prio').textContent, '70'); // 30 + 40 (excluye 70 de Público general)
  assert.equal(s.nodes.get('kpi-mun-ratio').textContent, '3/46');

  // 5. Selección sin resultados y Borrar filtros
  s.document.getElementById('f-municipio').value = 'Xichú';
  vm.runInContext('applyFilters()', s.context);
  assert.equal(s.nodes.get('kpi-act-total').textContent, '0');
  assert.equal(s.nodes.get('kpi-pop-total').textContent, '0');
  assert.equal(s.nodes.get('kpi-home-prio').textContent, '0');
  assert.equal(s.nodes.get('kpi-mun-ratio').textContent, '0/46');
  assert.ok(!s.nodes.get('kpi-mun-pct').textContent.includes('NaN'));

  vm.runInContext('resetFilters()', s.context);
  assert.equal(s.document.getElementById('f-mes').value, 'ALL');
  assert.equal(s.document.getElementById('f-municipio').value, 'ALL');
  assert.equal(vm.runInContext('filteredActIds.size', s.context), 3);
});

test('Checklist Inicio: mapa con rangos fijos 0..101+, deduplicación por municipio y cobertura ZAP/Localidades', () => {
  const s = setup();
  const tiers = JSON.parse(vm.runInContext('JSON.stringify([0, 1, 25, 26, 50, 51, 100, 101].map(n => getHomeMapActivityTier(n).label))', s.context));
  assert.deepEqual(tiers, ['Sin dato o actividad', 'Baja', 'Baja', 'Media', 'Media', 'Alta', 'Alta', 'Muy Alta']);

  const acts = [
    { ID_Actividad: 'ACT-M1', Cantidad_Actividades: 1 },
    { ID_Actividad: 'ACT-MULTI', Cantidad_Actividades: 4 },
    { ID_Actividad: 'ACT-Z1', Cantidad_Actividades: 1 },
    { ID_Actividad: 'ACT-Z2', Cantidad_Actividades: 2 }
  ];
  const ters = [
    // Dos filas de la misma actividad en Moroleón: no debe duplicar la actividad
    { ID_Actividad: 'ACT-M1', Municipio: 'Moroleón', Comunidad: '101', Nombre_Comunidad: 'Centro', Cantidad: 30, ZAP_Nuevo_Comienzo: 'Si', ZAP_SSyP: 'Si' },
    { ID_Actividad: 'ACT-M1', Municipio: 'Moroleón', Comunidad: '102', Nombre_Comunidad: 'Quiahuyo', Cantidad: 40, ZAP_Nuevo_Comienzo: 'Si', ZAP_SSyP: 'No' },
    // Concentrado multi-municipio sin reparto: no atribuye 4 actividades a cada municipio
    { ID_Actividad: 'ACT-MULTI', Municipio: 'León', Cantidad: 100, ZAP_Nuevo_Comienzo: 'No', ZAP_SSyP: 'No' },
    { ID_Actividad: 'ACT-MULTI', Municipio: 'Silao de la Victoria', Cantidad: 50, ZAP_Nuevo_Comienzo: 'No', ZAP_SSyP: 'No' },
    // Fila con bandera Si pero sin clave territorial ni localidad verificable (solo edificio en ZAP_SSyP)
    { ID_Actividad: 'ACT-Z1', Municipio: 'Guanajuato', Comunidad: '', Nombre_Comunidad: '', Otra_Comunidad: '', Cantidad: 27, ZAP_Nuevo_Comienzo: 'Si', ZAP_SSyP: 'Teatro Juárez' }
  ];

  s.context.acts = acts;
  s.context.ters = ters;
  const mapSummary = vm.runInContext('summarizeHomeMapByMunicipio(acts, ters)', s.context);
  assert.equal(mapSummary.byMunActs.get('moroleon'), 1);
  assert.equal(mapSummary.byMunPop.get('moroleon'), 70);
  assert.equal(mapSummary.unallocatedMultiMun.records, 1);
  assert.equal(mapSummary.unallocatedMultiMun.activities, 4);
  assert.equal(mapSummary.presenceOnlyMuns.has('leon'), true);
  assert.equal(mapSummary.byMunActs.get('leon') || 0, 0);

  const cov = JSON.parse(vm.runInContext('JSON.stringify(summarizeHomeTerritoryCoverage(acts, ters))', s.context));
  // ZAP NC tiene claves 101 y 102; ZAP SS tiene clave 101 (traslape); ACT-Z1 no tiene clave verificable; 'Teatro Juárez' tampoco cuenta como Si
  assert.equal(cov.totalZapUnique, 2);
  assert.equal(cov.totalLocalidadesUnique, 2);
  assert.deepEqual(cov.rows, [
    { label: 'ZAP Nuevo Comienzo', personas: 97, actividades: 2, totalZonas: 2 },
    { label: 'ZAP Seguridad Pública', personas: 30, actividades: 1, totalZonas: 1 },
    { label: 'Localidades', personas: 70, actividades: 1, totalZonas: 2 }
  ]);
});

test('Matriz Estratégica: no recae al catálogo completo cuando filtro dirección+proceso queda vacío (caso QC4142)', () => {
  const s = setup();
  const catRows = [
    { ID_Alineacion: 10, Clave_Proceso: 'QC4142', Direccion: 'SUBSECRETARÍA DE DESARROLLO Y PROMOCIÓN ARTÍSTICA Y CULTURAL', Nombre_Meta: 'Programa de artes vivas', Unidad_Medida: 'Presentaciones realizadas', Meta_Anual: 104 },
    { ID_Alineacion: 88, Clave_Proceso: 'PB3573', Direccion: 'DIRECCIÓN GENERAL DE EDITORIAL Y PUBLICACIONES', Nombre_Meta: 'Presentaciones editoriales', Unidad_Medida: 'Presentaciones', Meta_Anual: 92 }
  ];
  const acts = [
    { ...a, ID_Actividad: 'A-PA', Clave_Proceso: 10, Clave_Proceso_Txt: 'QC4142', Direccion: 'DIRECCIÓN GENERAL DE PRODUCCIÓN ARTÍSTICA', Nombre_Meta: 'Programa de artes vivas' },
    { ...a, ID_Actividad: 'A-SUB', Clave_Proceso: 10, Clave_Proceso_Txt: 'QC4142', Direccion: 'SUBSECRETARÍA DE DESARROLLO Y PROMOCIÓN ARTÍSTICA Y CULTURAL', Nombre_Meta: 'Programa de artes vivas' },
    { ...a, ID_Actividad: 'A-ED', Clave_Proceso: 88, Clave_Proceso_Txt: 'PB3573', Direccion: 'DIRECCIÓN GENERAL DE EDITORIAL Y PUBLICACIONES', Nombre_Meta: 'Presentaciones editoriales' }
  ];
  s.context._fixture = { actividades: acts, territorio: [], poblacion: [], evidencia: [], alineacion: catRows };
  s.document.getElementById('f-date-start').value = '2026-01-01';
  s.document.getElementById('f-date-end').value = '2026-12-31';
  vm.runInContext('rawDB = _fixture; updateMapMarkers = () => {}; renderVisionGeneral = () => {}; renderCoberturaTerritorial = () => {}; renderPerfilPoblacion = () => {}; renderRepositorioEvidencias = () => {};', s.context);

  // Solo QC4142: 1 meta en catálogo, suma 2 actividades (1 Producción + 1 Subsecretaría)
  s.document.getElementById('f-proceso').value = 'QC4142';
  s.document.getElementById('f-direccion').value = 'ALL';
  vm.runInContext('applyFilters();', s.context);
  assert.equal(vm.runInContext('cachedMetasCatalogoRows.length', s.context), 1);
  assert.equal(vm.runInContext('cachedMetasCatalogoRows[0].realizado', s.context), 2);
  assert.equal(s.nodes.get('kpi-mat-metas').textContent, '1/1');

  // QC4142 + Producción Artística: catálogo filtrado vacío (0 metas), NO debe mostrar PB3573 ni 2 metas
  s.document.getElementById('f-direccion').value = 'DIRECCIÓN GENERAL DE PRODUCCIÓN ARTÍSTICA';
  vm.runInContext('applyFilters();', s.context);
  assert.equal(vm.runInContext('cachedMetasCatalogoRows.length', s.context), 0);
  assert.equal(s.nodes.get('kpi-mat-metas').textContent, '0/0');
  assert.equal(s.nodes.get('kpi-mat-act').textContent, '1');
  assert.match(s.nodes.get('tbl-metas-avance').innerHTML, /No hay metas del catálogo que correspondan a la combinación de filtros activa/);
  assert.doesNotMatch(s.nodes.get('tbl-metas-avance').innerHTML, /PB3573/);
});

test('Matriz Estratégica: validación estricta de m² usa solo esquema vigente, conserva 0 expreso y rechaza texto inválido', () => {
  const s = setup();
  assert.equal(vm.runInContext("toNum('769,12')", s.context), 769.12);
  assert.equal(vm.runInContext("toNum('1,478')", s.context), 1478);

  // parseDocumentedAreaM2 y getDocumentedAreaValue solo aceptan cifras puras respaldadas y nunca leen campos fuera de esquema
  const invalidCases = ['', '   ', null, undefined, false, true, 'Pendiente', 'N/A', 'n/a', '23 actas', '-5', -1, '12m2', '769,12 m2'];
  for (const raw of invalidCases) {
    assert.equal(vm.runInContext(`parseDocumentedAreaM2(${JSON.stringify(raw)})`, s.context), null, `rechaza ${String(raw)}`);
  }
  assert.equal(vm.runInContext("parseDocumentedAreaM2(0)", s.context), 0);
  assert.equal(vm.runInContext("parseDocumentedAreaM2('0')", s.context), 0);
  assert.equal(vm.runInContext("parseDocumentedAreaM2('0,00')", s.context), 0);
  assert.equal(vm.runInContext("parseDocumentedAreaM2('769,12')", s.context), 769.12);
  assert.equal(vm.runInContext("parseDocumentedAreaM2('1,478')", s.context), 1478);

  // Ignora propiedad inexistente en Cat_Alineacion!A:R como Realizado_M2_Verificado
  assert.equal(vm.runInContext("getDocumentedAreaValue({ ID_Alineacion: 39, Realizado_M2_Verificado: 1200 })", s.context), null);
  assert.equal(vm.runInContext("getDocumentedAreaValue({ ID_Alineacion: 43 }, { 43: 'Pendiente' })", s.context), null);
  assert.equal(vm.runInContext("getDocumentedAreaValue({ ID_Alineacion: 43 }, { 43: 'N/A' })", s.context), null);
  assert.equal(vm.runInContext("getDocumentedAreaValue({ ID_Alineacion: 43 }, { 43: '23 actas' })", s.context), null);
  assert.equal(vm.runInContext("getDocumentedAreaValue({ ID_Alineacion: 43 }, { 43: '' })", s.context), null);
  assert.equal(vm.runInContext("getDocumentedAreaValue({ ID_Alineacion: 43 }, { 43: 0 })", s.context), 0);
  assert.equal(vm.runInContext("getDocumentedAreaValue({ ID_Alineacion: 43 }, { 43: '769,12' })", s.context), 769.12);

  const catRows = [
    { ID_Alineacion: 39, Clave_Proceso: 'QA4095', Direccion: 'DIRECCIÓN GENERAL DE PATRIMONIO CULTURAL', Nombre_Meta: 'Teatro Juárez', Unidad_Medida: 'Metros cuadrados', Meta_Anual: '1478' },
    { ID_Alineacion: 43, Clave_Proceso: 'QB4208', Direccion: 'DIRECCIÓN GENERAL DE PATRIMONIO CULTURAL', Nombre_Meta: 'Catedral León', Unidad_Medida: 'Metros cuadrados', Meta_Anual: '769,12' },
    { ID_Alineacion: 97, Clave_Proceso: 'QX0097', Direccion: 'DIRECCIÓN GENERAL DE PATRIMONIO CULTURAL', Nombre_Meta: 'Texto mixto 23 actas', Unidad_Medida: 'Metros cuadrados', Meta_Anual: '100' },
    { ID_Alineacion: 98, Clave_Proceso: 'QX0098', Direccion: 'DIRECCIÓN GENERAL DE PATRIMONIO CULTURAL', Nombre_Meta: 'Texto Pendiente', Unidad_Medida: 'Metros cuadrados', Meta_Anual: '100' },
    { ID_Alineacion: 99, Clave_Proceso: 'QX0099', Direccion: 'DIRECCIÓN GENERAL DE PATRIMONIO CULTURAL', Nombre_Meta: 'Con cero verificado', Unidad_Medida: 'Metros cuadrados', Meta_Anual: '100' }
  ];
  s.context.catRows = catRows;
  vm.runInContext(`
    DOCUMENTED_AREA_M2[97] = '23 actas';
    DOCUMENTED_AREA_M2[98] = 'Pendiente';
    DOCUMENTED_AREA_M2[99] = 0;
    rawDB.alineacion = catRows;
    renderMatrizEstrategica([], [], [], catRows);
  `, s.context);
  const rows = JSON.parse(vm.runInContext('JSON.stringify(cachedMetasCatalogoRows)', s.context));
  for (const idx of [0, 1, 2, 3]) {
    assert.equal(rows[idx].missingAreaMeasurement, true);
    assert.equal(rows[idx].realizado, null);
    assert.equal(rows[idx].pct, null);
  }
  assert.equal(rows[1].metaAnual, 769.12);
  assert.equal(rows[4].missingAreaMeasurement, false);
  assert.equal(rows[4].realizado, 0);
  assert.equal(rows[4].pct, 0);

  const tblHtml = s.nodes.get('tbl-metas-avance').innerHTML;
  assert.match(tblHtml, /1,478/);
  assert.match(tblHtml, /769\.12/);
  assert.match(tblHtml, /Sin dato verificado/);
  assert.match(tblHtml, />—</);
  assert.match(tblHtml, />0\.0%</);
});

test('Matriz Estratégica QC4142: distingue dirección ejecutora vs responsable de meta y prueba las 2 fichas de Dirección de Música', () => {
  const s = setup();
  const buildFixture = (catDir) => ({
    alineacion: [
      { ID_Alineacion: 8, Clave_Proceso: 'QC4142', Direccion: catDir, Nombre_Meta: 'Programa literario', Unidad_Medida: 'Eventos realizados', Meta_Anual: 50 },
      { ID_Alineacion: 9, Clave_Proceso: 'QC4142', Direccion: catDir, Nombre_Meta: 'Programa expositivo', Unidad_Medida: 'Exposiciones realizadas', Meta_Anual: 40 },
      { ID_Alineacion: 10, Clave_Proceso: 'QC4142', Direccion: catDir, Nombre_Meta: 'Programa de artes vivas', Unidad_Medida: 'Presentaciones realizadas', Meta_Anual: 104 }
    ],
    actividades: [
      ...Array.from({ length: 31 }, (_, i) => ({ ...a, ID_Actividad: `ACT-PA-${i + 1}`, Clave_Proceso: 10, Clave_Proceso_Txt: 'QC4142', Direccion: 'DIRECCIÓN GENERAL DE PRODUCCIÓN ARTÍSTICA', Nombre_Meta: 'Programa de artes vivas' })),
      { ...a, ID_Actividad: 'ACT-SCCF54781', Clave_Proceso: 10, Clave_Proceso_Txt: 'QC4142', Direccion: 'DIRECCIÓN DE MÚSICA', Nombre_Meta: 'Programa de artes vivas' },
      { ...a, ID_Actividad: 'ACT-SCIH64446', Clave_Proceso: 10, Clave_Proceso_Txt: 'QC4142', Direccion: 'DIRECCIÓN DE MÚSICA', Nombre_Meta: 'Programa de artes vivas' },
      { ...a, ID_Actividad: 'ACT-SCDW90018', Clave_Proceso: 10, Clave_Proceso_Txt: 'QC4142', Direccion: 'SUBSECRETARÍA DE DESARROLLO Y PROMOCIÓN ARTÍSTICA Y CULTURAL', Nombre_Meta: 'Programa de artes vivas' },
      { ...a, ID_Actividad: 'ACT-SCNU71129', Clave_Proceso: 8, Clave_Proceso_Txt: 'QC4142', Direccion: 'DIRECCIÓN GENERAL DE FORMACIÓN E INVESTIGACIÓN', Nombre_Meta: 'Programa literario' }
    ],
    territorio: [],
    poblacion: [],
    evidencia: []
  });

  s.document.getElementById('f-date-start').value = '2026-01-01';
  s.document.getElementById('f-date-end').value = '2026-12-31';
  vm.runInContext('updateMapMarkers = () => {}; renderVisionGeneral = () => {}; renderCoberturaTerritorial = () => {}; renderPerfilPoblacion = () => {}; renderRepositorioEvidencias = () => {};', s.context);

  // ANTES (IDs 8-10 atribuidos en catálogo a Subsecretaría)
  s.context._fixture = buildFixture('SUBSECRETARÍA DE DESARROLLO Y PROMOCIÓN ARTÍSTICA Y CULTURAL');
  s.document.getElementById('f-proceso').value = 'QC4142';
  s.document.getElementById('f-direccion').value = 'ALL';
  vm.runInContext('rawDB = _fixture; applyFilters();', s.context);
  let meta10 = JSON.parse(vm.runInContext("JSON.stringify(cachedMetasCatalogoRows.find(m => m.idAlin === '10'))", s.context));
  assert.equal(meta10.realizado, 34);

  s.document.getElementById('f-direccion').value = 'DIRECCIÓN GENERAL DE PRODUCCIÓN ARTÍSTICA';
  vm.runInContext('applyFilters();', s.context);
  assert.equal(vm.runInContext('cachedMetasCatalogoRows.length', s.context), 0);
  assert.equal(s.nodes.get('kpi-mat-act').textContent, '31');
  assert.equal(vm.runInContext("filteredActIds.has('ACT-SCCF54781') || filteredActIds.has('ACT-SCIH64446')", s.context), false);

  s.document.getElementById('f-direccion').value = 'SUBSECRETARÍA DE DESARROLLO Y PROMOCIÓN ARTÍSTICA Y CULTURAL';
  vm.runInContext('applyFilters();', s.context);
  meta10 = JSON.parse(vm.runInContext("JSON.stringify(cachedMetasCatalogoRows.find(m => m.idAlin === '10'))", s.context));
  assert.equal(meta10.realizado, 3);
  assert.equal(vm.runInContext("filteredActIds.has('ACT-SCCF54781') && filteredActIds.has('ACT-SCIH64446') && filteredActIds.has('ACT-SCDW90018')", s.context), true);

  // DESPUÉS (ajuste UTAPE IDs 8-10 -> Producción Artística, conservando Direccion intacta en Registro_Actividades)
  s.context._fixture = buildFixture('DIRECCIÓN GENERAL DE PRODUCCIÓN ARTÍSTICA');
  s.document.getElementById('f-direccion').value = 'ALL';
  vm.runInContext('rawDB = _fixture; applyFilters();', s.context);
  meta10 = JSON.parse(vm.runInContext("JSON.stringify(cachedMetasCatalogoRows.find(m => m.idAlin === '10'))", s.context));
  const meta8 = JSON.parse(vm.runInContext("JSON.stringify(cachedMetasCatalogoRows.find(m => m.idAlin === '8'))", s.context));
  assert.equal(meta10.realizado, 34);
  assert.equal(meta8.realizado, 1);

  s.document.getElementById('f-direccion').value = 'DIRECCIÓN GENERAL DE PRODUCCIÓN ARTÍSTICA';
  vm.runInContext('applyFilters();', s.context);
  assert.equal(vm.runInContext('cachedMetasCatalogoRows.length', s.context), 3);
  meta10 = JSON.parse(vm.runInContext("JSON.stringify(cachedMetasCatalogoRows.find(m => m.idAlin === '10'))", s.context));
  assert.equal(meta10.realizado, 33);
  assert.equal(vm.runInContext("filteredActIds.has('ACT-SCCF54781') && filteredActIds.has('ACT-SCIH64446')", s.context), true);
  assert.equal(vm.runInContext("filteredActIds.has('ACT-SCDW90018')", s.context), false);

  s.document.getElementById('f-direccion').value = 'SUBSECRETARÍA DE DESARROLLO Y PROMOCIÓN ARTÍSTICA Y CULTURAL';
  vm.runInContext('applyFilters();', s.context);
  assert.equal(vm.runInContext('cachedMetasCatalogoRows.length', s.context), 0);
  assert.equal(s.nodes.get('kpi-mat-act').textContent, '1');
  assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify([...filteredActIds])', s.context)), ['ACT-SCDW90018']);
});

test('Camino Real ID 17: marcador reversible excluye ACT-SCMY88002 del cómputo de la meta sin perder ficha, folio ni 41 asistencias', () => {
  const s = setup();
  const cat17 = [{ ID_Alineacion: 17, Clave_Proceso: 'QC4044', Direccion: 'DIRECCIÓN GENERAL DE PATRIMONIO CULTURAL', Nombre_Meta: 'Cerro de los Remedios', Unidad_Medida: 'Intervenciones realizadas', Meta_Anual: 2 }];
  const baseActs = [
    { ...a, ID_Actividad: 'ACT-SCMY88002', Folio: 'SC-261106-140002', Direccion: 'DIRECCIÓN GENERAL DE PATRIMONIO CULTURAL', Clave_Proceso: 17, Clave_Proceso_Txt: 'QC4044', Nombre_Meta: 'Cerro de los Remedios', Descripcion_Breve: 'Reunión de coordinación Camino Real' },
    { ...a, ID_Actividad: 'ACT-SCEDQ-F078DD3', Folio: 'FOL-EDQ-17-03', Direccion: 'DIRECCIÓN GENERAL DE PATRIMONIO CULTURAL', Clave_Proceso: 17, Clave_Proceso_Txt: 'QC4044', Nombre_Meta: 'Cerro de los Remedios', Tipo_Registro: 'Concentrado', Descripcion_Breve: 'Concentrado ene-oct 2026: 2 acciones de preservación.' }
  ];
  const ters = [
    { ID_Actividad: 'ACT-SCMY88002', Municipio: 'Comonfort', Cantidad: 41 },
    { ID_Actividad: 'ACT-SCEDQ-F078DD3', Municipio: 'Comonfort', Cantidad: 10 }
  ];
  const pobs = [
    { ID_Actividad: 'ACT-SCMY88002', Cantidad_Poblacion: 41 },
    { ID_Actividad: 'ACT-SCEDQ-F078DD3', Cantidad_Poblacion: 10 }
  ];

  // Antes: 3/2 (150.0%)
  s.context._cat17 = cat17;
  s.context._actsBefore = baseActs;
  s.context._ters = ters;
  s.context._pobs = pobs;
  vm.runInContext('rawDB.alineacion = _cat17; renderMatrizEstrategica(_actsBefore, _pobs, _ters, _cat17);', s.context);
  let m17 = JSON.parse(vm.runInContext('JSON.stringify(cachedMetasCatalogoRows[0])', s.context));
  assert.equal(m17.realizado, 3);
  assert.equal(m17.pct, 150);

  // Después con [NO_COMPUTA_META:17]: pasa a 2/2 (100.0%) conservando las 2 fichas y 51 asistencias en el universo activo
  s.context._actsAfter = [
    { ...baseActs[0], Descripcion_Breve: '[NO_COMPUTA_META:17] ' + baseActs[0].Descripcion_Breve },
    baseActs[1]
  ];
  vm.runInContext('renderMatrizEstrategica(_actsAfter, _pobs, _ters, _cat17);', s.context);
  m17 = JSON.parse(vm.runInContext('JSON.stringify(cachedMetasCatalogoRows[0])', s.context));
  assert.equal(m17.realizado, 2);
  assert.equal(m17.metaAnual, 2);
  assert.equal(m17.pct, 100);
  assert.equal(s.nodes.get('kpi-mat-act').textContent, '3');
});
