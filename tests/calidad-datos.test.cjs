const { test } = require('node:test');
const assert = require('node:assert/strict');
const q = require('../assets/js/calidad-datos.js');
const activity = extra => ({ ID_Actividad: 'A1', Folio: 'F1', Nombre_Actividad: 'Taller', Fecha_Inicio: '2026-01-15', Fecha_Fin: '2026-01-15', Direccion: 'Museos', Clave_Proceso: 1, Acciones_PG: 'Acción PG', Acciones_PEC: 'Acción PEC', Disciplina: 'Música', Subdisciplina: 'Orquestas', Nombre_Espacio: 'Museo', Total_Sesiones: 1, Foto_Evidencia: 'foto.jpg', ...extra });
const t = (n, extra = {}) => ({ ID_Actividad: 'A1', Municipio: 'León', Otra_Comunidad: 'Centro', Cantidad: n, ...extra });
const p = (n, extra = {}) => ({ ID_Actividad: 'A1', Cantidad_Poblacion: n, Cantidad_Participacion: 0, Cantidad_Acceso: n, ...extra });
test('un cero válido no es un faltante; un vacío no se convierte en cero', () => {
  assert.equal(q.audit([activity()], [t(0)], [p('0')], []).length, 0);
  const a = q.audit([activity()], [t('')], [p(0)], [])[0];
  assert.equal(a.sT, null); assert.equal(a.diff, null); assert.ok(a.categories.includes('faltantes'));
  assert.ok(!a.categories.includes('diferencias'));
});
test('suma todas las localidades antes de comparar una actividad', () => {
  assert.equal(q.audit([activity()], [t(20), t(30, { Municipio: 'Silao' })], [p(50)], []).length, 0);
  assert.equal(q.audit([activity()], [t(20), t(30)], [p(40)], [])[0].diff, 10);
});
test('cantidades negativas, errores y sumas parciales no parecen conciliadas', () => {
  for (const value of ['#ERROR!', -1, null, 'personas']) {
    const a = q.audit([activity()], [t(10), t(value)], [p(10)], [])[0];
    assert.equal(a.diff, null); assert.ok(a.categories.includes('faltantes'));
  }
});
test('participación y acceso se verifican sin sumar otra vez el total', () => {
  const a = q.audit([activity()], [t(50, { Cantidad_Participacion: 20, Cantidad_Acceso: 20 })], [p(50)], [])[0];
  assert.ok(a.categories.includes('diferencias'));
  assert.equal(a.sT, 50);
});
test('una fila vacía de evidencia no cuenta como respaldo', () => {
  assert.ok(q.audit([activity({ Foto_Evidencia: '' })], [t(0)], [p(0)], [{ ID_Actividad: 'A1', Archivo_Evidencia: '' }])[0].categories.includes('evidencias'));
  assert.equal(q.audit([activity({ Foto_Evidencia: '' })], [t(0)], [p(0)], [{ ID_Actividad: 'A1', Archivo_Evidencia: 'file.pdf' }]).length, 0);
});
test('mil talleres y sesiones son cantidades independientes', () => {
  const a = activity({ Tipo_Registro: 'Concentrado mensual', Cantidad_Actividades: 1000, Total_Sesiones: 3000 });
  assert.deepEqual(q.metrics([a]), { records: 1, activities: 1000, unresolved: 0, sessions: 3000, missingSessions: 0 });
  assert.equal(q.quantity(activity({ Total_Sesiones: 1000 })).value, 1);
  assert.equal(q.quantity(activity({ Tipo_Registro: 'Concentrado mensual' })).value, null);
  assert.equal(q.quantity(activity({ Cantidad_Actividades: 'desconocido' })).value, null);
});
test('revisa concentrados multimes sin inventar un reparto mensual', () => {
  const a = activity({ Tipo_Registro: 'Concentrado histórico', Cantidad_Actividades: 1000, Fecha_Fin: '2026-09-30' });
  assert.ok(q.audit([a], [t(0)], [p(0)], [])[0].diag.includes('desglose mensual'));
});
test('clasificación y fechas inválidas generan pendientes específicos', () => {
  const a = q.audit([activity({ Subdisciplina: '', Fecha_Inicio: '2026-02-30' })], [t(0)], [p(0)], [])[0];
  assert.ok(a.diag.includes('subdisciplina')); assert.ok(a.diag.includes('inicio válida'));
});
test('un ID distinto no elimina la posible duplicación del evento', () => {
  const rows = q.audit([activity(), activity({ ID_Actividad: 'A2', Folio: 'F2' })], [t(0), t(0, { ID_Actividad: 'A2' })], [p(0), p(0, { ID_Actividad: 'A2' })], []);
  assert.equal(rows.length, 2); assert.ok(rows.every(r => r.categories.includes('identidad')));
});
test('sesiones iguales al total de asistentes requieren confirmar el significado', () => {
  const a = q.audit([activity({ Total_Sesiones: 69395 })], [t(69395)], [p(69395)], [])[0];
  assert.ok(a.diag.includes('asistentes en ese campo'));
  assert.ok(!a.categories.includes('diferencias'));
});
