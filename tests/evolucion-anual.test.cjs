const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const annual = require('../assets/js/datos-anuales.js');

test('Evolución Anual cruza los cuatro filtros y mantiene separados los alcances', () => {
  const html = readFileSync('index.html', 'utf8');
  const start = html.indexOf('    function renderVistaAnual()');
  const end = html.indexOf('    function switchTab(', start);
  const elements = new Map();
  const element = id => {
    if (!elements.has(id)) elements.set(id, {
      value: '', options: [], classList: { toggle() {} },
      replaceChildren(option) { this.options = [option]; this.value = option.value; },
      add(option) { this.options.push(option); }
    });
    return elements.get(id);
  };
  const norm = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  let chart;
  const context = {
    window: { DatosAnuales: annual }, document: { getElementById: element },
    Option: function Option(label, value) { this.label = label; this.value = value; },
    cleanStr: value => String(value ?? '').trim(), normalizeMunicipioName: norm, isMunicipioGTO: () => true,
    formatShortDireccion: value => value, getCanonicalDirection: value => value,
    toNum: Number, fmtInt: String, CulturaCalidad: { isExcluded: row => row.excluded },
    rawDB: {
      alineacion: [],
      actividades: [
        { ID_Actividad: 'A', Fecha_Inicio_ISO: '2026-01-01', Direccion: 'Editorial y Publicaciones', Clave_Proceso_Txt: 'PB35732600' },
        { ID_Actividad: 'B', Fecha_Inicio_ISO: '2024-01-01', Direccion: 'Editorial y Publicaciones' },
        { ID_Actividad: 'C', Fecha_Inicio_ISO: '2026-01-01', Direccion: 'Editorial y Publicaciones', excluded: true }
      ],
      territorio: [
        { ID_Actividad: 'A', Municipio: 'León', Cantidad: '10' },
        { ID_Actividad: 'A', Municipio: 'Guanajuato', Cantidad: '20' },
        { ID_Actividad: 'B', Municipio: 'León', Cantidad: '999' },
        { ID_Actividad: 'C', Municipio: 'León', Cantidad: '999' }
      ]
    },
    renderChart: (_id, _type, data) => { chart = data; }
  };
  const render = (year, area = '', program = '', municipality = '') => {
    for (const [id, value] of Object.entries({
      'select-filtro-anio': year, 'annual-area': area, 'annual-program': program, 'annual-municipality': municipality
    })) element(id).value = value;
    runInNewContext(html.slice(start, end) + '\nrenderVistaAnual()', context);
    return element('annual-results').innerHTML;
  };
  assert.match(render('2024'), /490350/);
  assert.equal(chart.labels.join(), '2024');
  assert.match(render('2024', '', '', 'León'), /Sin datos documentados/);
  const museums = render('2025', 'Museos y Artes Visuales', '', 'León');
  assert.match(museums, /293156/);
  assert.doesNotMatch(museums, /602389|933/);
  const academic = render('2025', '', 'QC4049');
  assert.match(academic, />185</);
  assert.doesNotMatch(academic, /1120|602389/);
  const live = render('2026', 'Editorial y Publicaciones', 'PB3573', 'León');
  assert.match(live, /Fichas capturadas/);
  assert.match(live, />10</);
  assert.doesNotMatch(live, />30<|999|Presentaciones editoriales/);
  assert.match(render('2026', 'Editorial y Publicaciones', 'PB3573'), />32<.*>30</);
});
