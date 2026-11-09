const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const quality = require('../assets/js/calidad-datos.js');
const ficha = require('../assets/js/ficha-actividad.js');

const main = [...fs.readFileSync(require('node:path').join(__dirname, '../index.html'), 'utf8').matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(m => m[1]).find(s => s.includes('const SHEET_ID'));

function setupFaltantes() {
  const nodes = new Map();
  const document = {
    createElement(tag) {
      return { tag, href: '', download: '', click() {} };
    },
    getElementById(id) {
      if (!nodes.has(id)) nodes.set(id, {
        value: (id === 'search-audit' || id === 'search-faltantes') ? '' : 'ALL',
        textContent: '',
        innerHTML: '',
        style: {},
        attributes: {},
        focus() {},
        setAttribute(key, value) { this.attributes[key] = value; },
        classList: { toggle() {}, add() {}, remove() {} }
      });
      return nodes.get(id);
    }
  };
  const context = vm.createContext({
    window: { addEventListener() {} },
    document,
    CulturaCalidad: quality,
    CulturaFicha: ficha,
    console,
    setTimeout,
    clearTimeout,
    AbortController,
    URL,
    Blob
  });
  vm.runInContext(main, context);
  vm.runInContext('renderChart = () => {}; renderStrategicDirections = () => {}; renderDoughnutWithHtmlLegend = () => {};', context);
  return { context, nodes, document };
}

test('el control de faltantes detecta municipio vacío, sin comunidad, sin población y descuadres', () => {
  const { context, nodes } = setupFaltantes();

  context.fixture = {
    actividades: [
      {
        ID_Actividad: 'ACT-01',
        Folio: 'F-001',
        Usuario_Registra: 'marce.chagoya@guanajuato.gob.mx',
        Direccion: 'Dirección General de Museos',
        Nombre_Actividad: 'Exposición Temporal',
        Clave_Proceso_Txt: 'PB3573',
        Formato: 'Presencial'
      },
      {
        ID_Actividad: 'ACT-02',
        Folio: 'F-002',
        Usuario_Registra: 'laura@guanajuato.gob.mx',
        Direccion: 'Vinculación Cultural',
        Nombre_Actividad: 'Taller de Lectura',
        Clave_Proceso_Txt: 'CP-INEXISTENTE',
        Formato: 'Presencial'
      }
    ],
    territorio: [
      { ID_Actividad: 'ACT-01', Municipio: 'Guanajuato', Nombre_Comunidad_Final: '', Cantidad: '50' },
      { ID_Actividad: 'ACT-02', Municipio: '', Nombre_Comunidad_Final: '', Cantidad: '100' }
    ],
    poblacion: [
      { ID_Actividad: 'ACT-01', Cantidad_Poblacion: '40', Cantidad_Participacion: '', Cantidad_Acceso: '' }
    ],
    alineacion: [
      { ID_Alineacion: 'PB3573', Meta: '15 exposiciones', Nombre_Meta: 'Exposiciones en Guanajuato' }
    ],
    evidencia: []
  };

  vm.runInContext(`
    rawDB.actividades = fixture.actividades;
    rawDB.territorio = fixture.territorio;
    rawDB.poblacion = fixture.poblacion;
    rawDB.alineacion = fixture.alineacion;
    rawDB.evidencia = fixture.evidencia;
    computeFaltantesAudit();
    renderFaltantesTable();
  `, context);

  const list = vm.runInContext('auditFaltantesList', context);
  assert.equal(list.length, 2);

  // ACT-01 checks
  const r1 = list.find(r => r.id === 'ACT-01');
  assert.equal(r1.usuario, 'marce.chagoya@guanajuato.gob.mx');
  assert.equal(r1.meta, '15 exposiciones');
  assert.equal(r1.nombreMeta, 'Exposiciones en Guanajuato');
  assert.equal(r1.sinCom, true);
  assert.equal(r1.descuadre, true);
  assert.equal(r1.diff, 10);
  assert.equal(r1.sinDesglose, true);

  // ACT-02 checks
  const r2 = list.find(r => r.id === 'ACT-02');
  assert.equal(r2.usuario, 'laura@guanajuato.gob.mx');
  assert.equal(r2.sinMun, true);
  assert.equal(r2.sinPob, true);
  assert.equal(r2.sinMeta, true);

  // Table rendering check
  const tableHtml = nodes.get('tbl-faltantes').innerHTML;
  assert.match(tableHtml, /ACT-01/);
  assert.match(tableHtml, /ACT-02/);
  assert.match(tableHtml, /marce\.chagoya@guanajuato\.gob\.mx/);
  assert.match(tableHtml, /laura@guanajuato\.gob\.mx/);
  assert.match(tableHtml, /Sin localidad/);
  assert.match(tableHtml, /Descuadre \+10/);
  assert.match(tableHtml, /Sin población/);
});

test('el filtro por usuario y la exportación CSV respetan el usuario seleccionado', () => {
  const { context, nodes } = setupFaltantes();

  context.fixture = {
    actividades: [
      { ID_Actividad: 'ACT-A', Folio: 'FA', Usuario_Registra: 'marce.chagoya@guanajuato.gob.mx', Nombre_Actividad: 'Actividad A' },
      { ID_Actividad: 'ACT-B', Folio: 'FB', Usuario_Registra: 'laura@guanajuato.gob.mx', Nombre_Actividad: 'Actividad B' }
    ],
    territorio: [],
    poblacion: [],
    alineacion: [],
    evidencia: []
  };

  vm.runInContext(`
    rawDB.actividades = fixture.actividades;
    rawDB.territorio = fixture.territorio;
    rawDB.poblacion = fixture.poblacion;
    rawDB.alineacion = fixture.alineacion;
    rawDB.evidencia = fixture.evidencia;
    computeFaltantesAudit();
  `, context);

  // Filter by marce only
  nodes.get('filter-faltantes-user').value = 'marce.chagoya@guanajuato.gob.mx';
  vm.runInContext('renderFaltantesTable();', context);

  const tableHtml = nodes.get('tbl-faltantes').innerHTML;
  assert.match(tableHtml, /ACT-A/);
  assert.doesNotMatch(tableHtml, /ACT-B/);

  // Test CSV Export
  let exportedData = null;
  context.Papa = {
    unparse(payload) {
      exportedData = payload;
      return 'csv-string';
    }
  };

  vm.runInContext('exportFaltantesCSV();', context);
  assert.ok(exportedData);
  assert.equal(exportedData.data.length, 1);
  assert.equal(exportedData.data[0][0], 'ACT-A');
  assert.equal(exportedData.data[0][2], 'marce.chagoya@guanajuato.gob.mx');
  assert.ok(exportedData.fields.includes('Clave_Proceso_Txt'));
  assert.ok(exportedData.fields.includes('Nombre_Meta'));
});
