const { test } = require('node:test');
const assert = require('node:assert/strict');
const q = require('../assets/js/calidad-datos.js');
const ficha = require('../assets/js/ficha-actividad.js');
const activity = { ID_Actividad: 'A1', Folio: 'F1', Nombre_Actividad: 'Curso', Fecha_Inicio: '2026-06-18', Fecha_Fin: '2026-06-22', Fecha_Captura: '28/10/2026 10:32:00', Usuario_Registra: 'captura@ejemplo.mx', Direccion: 'Patrimonio', Clave_Proceso: 63, Clave_Proceso_Txt: 'PB3565', Total_Sesiones: 4, Disciplina: 'Patrimonio cultural', Subdisciplina: 'Patrimonio arquitectónico', Tipo_Actividad: 'Curso', Acciones_PG: 'Acción específica PG', Acciones_PEC: 'Acción PEC', Nombre_Espacio: 'Recinto nombrado', Tipo_Espacio: 'Espacio a Cargo de la Secretaría', Especifique_Espacio: 'Sala de capacitación', Foto_Evidencia: 'foto.jpg' };
function render(a = activity, territory = [], population = [], evidence = [], evidenceUrl = p => 'https://drive.google.com/drive/search?q=' + encodeURIComponent(p)) {
  return ficha.render({ activity: a, territory, population, evidence, review: q.audit([a], territory, population, evidence, [{ ID_Alineacion: 63 }])[0] || null, evidenceUrl });
}
const t = (n, extra = {}) => ({ ID_Territorio: 'T1', ID_Actividad: 'A1', Municipio: 'León', Cantidad: n, ...extra });
const p = (n, extra = {}) => ({ ID_Poblacion: 'P1', ID_Actividad: 'A1', Cantidad_Poblacion: n, Cantidad_Participacion: 0, Cantidad_Acceso: n, ...extra });

test('muestra los cinco campos pedidos, captura y periodo, separando sede, tipo y detalle', () => {
  const html = render();
  for (const v of ['PB3565', 'Patrimonio arquitectónico', 'Total de sesiones', '>4</dd>', 'Acción específica PG', 'Recinto nombrado', 'Espacio a Cargo de la Secretaría', 'Sala de capacitación', 'captura@ejemplo.mx', '18/06/2026', '22/06/2026', '28/10/2026 · 10:32']) assert.ok(html.includes(v), v);
});

test('ausencia, cero e importes parciales no se confunden', () => {
  let html = render({ ...activity, Total_Sesiones: '' });
  assert.match(html, /Sin registros territoriales vinculados/);
  assert.match(html, /Sin registros demográficos vinculados/);
  assert.match(html, /No comparable/);
  assert.match(html, /Total de sesiones[\s\S]*?Sin dato válido/);
  html = render({ ...activity, Total_Sesiones: 0 }, [t('0')], [p(0)]);
  assert.match(html, /Total territorial<\/p><p[^>]*>0<\/p>/);
  assert.match(html, /Total demográfico<\/p><p[^>]*>0<\/p>/);
  assert.match(html, /Total de sesiones<\/dt><dd[^>]*>0<\/dd>/);
  assert.doesNotMatch(html, /No comparable/);
  for (const bad of ['', -1, 'N/A', '#ERROR!']) {
    html = render(activity, [t(10), t(bad, { ID_Territorio: 'T2' })], [p(10)]);
    assert.match(html, /Total territorial<\/p><p[^>]*>Sin dato completo/);
    assert.match(html, /No comparable/);
  }
});

test('la diferencia usa todos los totales y no suma participación y acceso como público adicional', () => {
  const html = render(activity, [t(20), t(30)], [p(40, { Cantidad_Participacion: 15, Cantidad_Acceso: 25 })]);
  assert.match(html, /Total territorial<\/p><p[^>]*>50<\/p>/);
  assert.match(html, /Total demográfico<\/p><p[^>]*>40<\/p>/);
  assert.match(html, /Diferencia<\/p><p[^>]*>\+10<\/p>/);
  assert.match(html, /Territorio 50 y población 40/);
});

test('el detalle permite localizar cada fila y conserva ceros y respuestas No', () => {
  const html = render(activity, [t(0, { Otra_Comunidad: 'Comunidad original', ZAP_Nuevo_Comienzo: false, ZAP_SSyP: '', Cantidad_Participacion: 0, Cantidad_Acceso: 0 })], [p(0, { Grupo_Prioritario: 'Pueblos indígenas', Grupo_Etario: 'Población General', Genero: 'Mujer' })]);
  for (const label of ['T1', 'P1', 'Comunidad original', 'ZAP Nuevo Comienzo', 'ZAP SSyP', '>No</td>', 'Pueblos indígenas', 'Participación', 'Acceso']) assert.ok(html.includes(label), label);
  assert.doesNotMatch(html, /Cabecera Municipal/);
});

test('una fila vacía de evidencia no cuenta como archivo; la foto sí y no se duplica', () => {
  const blank = { ID_Actividad: 'A1', ID_Evidencia: 'E1', Archivo_Evidencia: '' };
  let html = render({ ...activity, Foto_Evidencia: '' }, [], [], [blank]);
  assert.match(html, /Evidencias · 0 archivos/);
  assert.match(html, /falta adjuntar un archivo/);
  assert.doesNotMatch(html, /Abrir en Drive/);
  html = render(activity, [], [], [blank]);
  assert.match(html, /Evidencias · 1 archivo/);
  assert.match(html, /Foto en el registro de la actividad/);
  html = render(activity, [], [], [{ ...blank, Archivo_Evidencia: 'foto.jpg' }]);
  assert.match(html, /Evidencias · 1 archivo/);
  assert.equal((html.match(/Abrir en Drive/g) || []).length, 1);
});

test('los valores de las cuatro hojas no se convierten en HTML ni enlaces ejecutables', () => {
  const attack = '<img src=x onerror="alert(1)">';
  const html = render({ ...activity, Acciones_PG: attack, Especifique_Espacio: attack, Usuario_Registra: attack, Descripcion_Breve: attack }, [t(1, { Municipio: attack })], [p(1, { Grupo_Prioritario: attack })], [{ ID_Evidencia: attack, Archivo_Evidencia: 'https://ejemplo.mx/doc?a=1&b=2', Descripcion: attack }]);
  assert.ok(html.includes('&lt;img'));
  assert.doesNotMatch(html, /<img/);
  assert.ok(html.includes('a=1%26b%3D2') || html.includes('a%3D1%26b%3D2'));
  const noLink = render(activity, [], [], [], () => 'javascript:alert(1)');
  assert.doesNotMatch(noLink, /href="javascript:/);
});

test('actividades y sesiones mantienen sus cantidades independientes sin inventar las ausentes', () => {
  const html = render({ ...activity, Tipo_Registro: 'Concentrado mensual', Cantidad_Actividades: 1000, Total_Sesiones: '' });
  assert.match(html, /Cantidad de actividades reportada<\/dt><dd[^>]*>1,000<\/dd>/);
  assert.match(html, /Total de sesiones<\/dt><dd[^>]*><span[^>]*>Sin dato válido/);
  assert.match(html, /cantidad válida de sesiones/);
});
