const { test } = require('node:test');
const assert = require('node:assert/strict');
const q = require('../assets/js/calidad-datos.js');
const activity = extra => ({ ID_Actividad: 'A1', Folio: 'F1', Nombre_Actividad: 'Taller', Fecha_Inicio: '2026-01-15', Fecha_Fin: '2026-01-15', Direccion: 'Museos', Clave_Proceso: 1, Acciones_PG: 'Acción PG', Acciones_PEC: 'Acción PEC', Disciplina: 'Música', Subdisciplina: 'Orquestas', Nombre_Espacio: 'Museo', Total_Sesiones: 1, Foto_Evidencia: 'foto.jpg', ...extra });
const t = (n, extra = {}) => ({ ID_Actividad: 'A1', Municipio: 'León', Otra_Comunidad: 'Centro', Cantidad: n, ...extra });
const p = (n, extra = {}) => ({ ID_Actividad: 'A1', Cantidad_Poblacion: n, Cantidad_Participacion: 0, Cantidad_Acceso: n, ...extra });

test('solo una marca explícita al inicio de la descripción confirma cancelación', () => {
  for (const description of ['[CANCELADA] Confirmada por el área', '  [cancelado] No se realizó']) {
    assert.equal(q.isCancelled(activity({ Descripcion_Breve: description })), true);
  }
  for (const description of ['', undefined, 'No fue cancelada', 'Se canceló otra función', 'Libro [CANCELADA]']) {
    assert.equal(q.isCancelled(activity({ Descripcion_Breve: description, Nombre_Actividad: '[CANCELADA]' })), false);
  }
});

test('las canceladas no aportan registros, actividades, sesiones o público a las series', () => {
  const active = activity();
  const cancelled = activity({ ID_Actividad: 'CANCEL', Descripcion_Breve: '[CANCELADA] Confirmada', Total_Sesiones: 10, Cantidad_Actividades: 40 });
  assert.deepEqual(q.metrics([active, cancelled]), q.metrics([active]));
  const rows = [p(5), p(900, { ID_Actividad: 'CANCEL' })];
  assert.deepEqual(q.monthlyPopulation([active, cancelled], rows, 'Cantidad_Poblacion'), q.monthlyPopulation([active], rows, 'Cantidad_Poblacion'));
  assert.deepEqual(q.metrics([cancelled]), { records: 0, activities: 0, unresolved: 0, sessions: 0, missingSessions: 0 });
});

test('la cancelación conserva trazabilidad y no pide inventar público de una actividad no realizada', () => {
  const cancelled = activity({ Descripcion_Breve: '[CANCELADA] Confirmada', Fecha_Inicio: '', Fecha_Fin: '', Acciones_PG: '', Total_Sesiones: '', Foto_Evidencia: '' });
  const alert = q.audit([cancelled], [], [], [])[0];
  assert.deepEqual(alert.categories, ['canceladas']);
  assert.equal(alert.sT, null);
  assert.equal(alert.sP, null);
  assert.match(alert.diag, /se excluye de los indicadores/);
  const withPeople = q.audit([cancelled], [t(10)], [p(10)], [])[0];
  assert.ok(withPeople.categories.includes('diferencias'));
  assert.equal(withPeople.sP, 10);
});
test('un cero válido no es un faltante; un vacío no se convierte en cero', () => {
  assert.equal(q.audit([activity()], [t(0)], [p('0')], []).length, 0);
  const a = q.audit([activity()], [t('')], [p(0)], [])[0];
  assert.equal(a.sT, null); assert.equal(a.diff, null); assert.ok(a.categories.includes('faltantes'));
  assert.ok(!a.categories.includes('diferencias'));
});

test('una captura sustituida explícitamente conserva cifras y referencia sin aportar ejecución', () => {
  const replacement = activity({ ID_Actividad: 'ACT-SCQZ00697' });
  const old = activity({ ID_Actividad: 'ACT-SCBV52724', Folio: 'OLD', Descripcion_Breve: '[SUSTITUIDO:ACT-SCQZ00697] Ejercicio confirmado por el área', Total_Sesiones: 9 });
  assert.equal(q.supersededBy(old), replacement.ID_Actividad);
  assert.equal(q.isCancelled(old), false);
  assert.deepEqual(q.metrics([replacement, old]), q.metrics([replacement]));
  const tr = [t(49465, { ID_Actividad: old.ID_Actividad }), t(5, { ID_Actividad: replacement.ID_Actividad })];
  assert.deepEqual(q.monthlyPopulation([replacement, old], tr, 'Cantidad'), q.monthlyPopulation([replacement], tr, 'Cantidad'));
  const row = q.audit([replacement, old], tr, [p(211, { ID_Actividad: old.ID_Actividad })], []).find(r => r.id === old.ID_Actividad);
  assert.deepEqual(row.categories, ['sustituidos']);
  assert.equal(row.sT, 49465);
  assert.equal(row.sP, 211);
  assert.match(row.diag, /ACT-SCQZ00697/);
  for (const desc of ['Sustituido por otro registro', 'Ejemplo [SUSTITUIDO:ACT-SCQZ00697]', '[SUSTITUIDO:otro]', '[SUSTITUIDO:ACT-SCBV52724]']) assert.equal(q.isExcluded({ ...old, Descripcion_Breve: desc }), false);
  assert.ok(q.audit([old], tr, [], [])[0].diag.includes('No se encuentra'));
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

test('una revisión por par solo aplica a datos cotejados y no cubre terceros', () => {
  const reviewed = require('../assets/js/revisiones-identidad.js')[0];
  const territoryFields = ['ID_Territorio','Municipio','Tipo_Asentamiento','Comunidad','Nombre_Comunidad','Otra_Comunidad','Cantidad','Cantidad_Participacion','Cantidad_Acceso'];
  const populationFields = ['ID_Poblacion','Grupo_Etario','Genero','Grupo_Prioritario','Cantidad_Participacion','Cantidad_Acceso','Cantidad_Poblacion'];
  const activities = [], territories = [], population = [];
  for (const id of reviewed.ids) {
    const [key, name, start, end, site, desc, sessions, tr, po] = JSON.parse(reviewed.snapshots[id]);
    activities.push(activity({ ID_Actividad: key, Folio: 'F-' + key, Nombre_Actividad: name, Fecha_Inicio: start, Fecha_Fin: end, Nombre_Espacio: site, Descripcion_Breve: desc, Total_Sesiones: sessions }));
    for (const values of tr) territories.push({ ID_Actividad: id, ...Object.fromEntries(territoryFields.map((f, i) => [f, values[i]])) });
    for (const values of po) population.push({ ID_Actividad: id, ...Object.fromEntries(populationFields.map((f, i) => [f, values[i]])) });
  }
  const flagged = (acts, tr, po) => q.audit(acts, tr, po, []).filter(r => r.categories.includes('identidad')).map(r => r.id);
  assert.deepEqual(flagged(activities, territories, population), []);
  const changed = territories.map((r, i) => i === 0 ? { ...r, Cantidad: String(Number(r.Cantidad) + 1) } : r);
  assert.equal(flagged(activities, changed, population).length, 2);
  assert.equal(flagged(activities, territories, population.map((r, i) => i === 0 ? { ...r, Genero: 'Otro' } : r)).length, 2);
  assert.equal(flagged([activities[0], { ...activities[1], Fecha_Fin: '2026-12-30' }], territories, population).length, 2);
  const third = { ...activities[0], ID_Actividad: 'TERCERO', Folio: 'F-TERCERO' };
  assert.equal(flagged([...activities, third], territories, population).length, 3);
  assert.equal(flagged([activities[0], { ...activities[1], Folio: activities[0].Folio }], territories, population).length, 2);
});
test('sesiones iguales al total de asistentes requieren confirmar el significado', () => {
  const a = q.audit([activity({ Total_Sesiones: 69395 })], [t(69395)], [p(69395)], [])[0];
  assert.ok(a.diag.includes('asistentes en ese campo'));
  assert.ok(!a.categories.includes('diferencias'));
});

test('dos declaraciones revisadas solo aplican a su ID, periodo, cantidad y fundamento', () => {
  const description = 'Adriana Escamilla confirma el 03/11/2026 a las15:01 que las sesiones corresponden a capacitaciones del primer semestre: clases semanales por municipio multiplicadas por semanas de trabajo. Total declarado por el área; cálculo por programación, sin verificación individual de cada sesión.';
  for (const [id, count] of [['ACT-SCOG94069', 1020], ['ACT-SCIN39392', 170]]) {
    const a = activity({ ID_Actividad: id, Total_Sesiones: count, Fecha_Inicio: '2026-03-20', Fecha_Fin: '2026-06-30', Descripcion_Breve: description });
    const flag = x => q.audit([x], [t(5, { ID_Actividad: x.ID_Actividad })], [p(5, { ID_Actividad: x.ID_Actividad })], []).some(r => r.diag.includes('100 o más sesiones'));
    assert.equal(flag(a), false);
    for (const change of [{ ID_Actividad: 'OTRO' }, { Total_Sesiones: count + 1 }, { Fecha_Fin: '2026-07-01' }, { Descripcion_Breve: 'Sin confirmación' }]) assert.equal(flag({ ...a, ...change }), true);
    const equal = q.audit([a], [t(count, { ID_Actividad: id })], [p(count, { ID_Actividad: id })], [])[0];
    assert.match(equal.diag, /asistentes en ese campo/);
  }
});

test('funciones con horas explícitas distintas conservan ambos registros sin alerta de coincidencia', () => {
  const a = activity({ Descripcion_Breve: 'Artista: Grupo. Hora: 13:00:00. Nota: convenio' });
  const b = activity({ ID_Actividad: 'A2', Folio: 'F2', Descripcion_Breve: 'Artista: Grupo. Hora: 18:00:00' });
  const result = q.audit([a, b], [], [], []);
  assert.equal(result.length, 2);
  assert.ok(result.every(r => !r.categories.includes('identidad')));
  assert.equal(q.metrics([a, b]).records, 2);
});

test('horario igual, faltante, inválido o ambiguo mantiene la revisión de coincidencias', () => {
  for (const description of ['Hora: 13:00', '', 'Hora: 25:00:00', 'Hora: 13:70', 'Hora: 09:00. Hora: 18:00.', 'Hora: 18:00 pm']) {
    const rows = q.audit([activity({ Descripcion_Breve: 'Hora: 13:00:00' }), activity({ ID_Actividad: 'A2', Folio: 'F2', Descripcion_Breve: description })], [], [], []);
    assert.ok(rows.every(r => r.categories.includes('identidad')), description);
  }
});

test('el horario distingue pares dentro de grupos y no oculta IDs o folios repetidos', () => {
  const rows = q.audit([activity({ Descripcion_Breve: 'Hora: 13:00' }), activity({ ID_Actividad: 'A2', Folio: 'F2', Descripcion_Breve: 'Hora: 18:00' }), activity({ ID_Actividad: 'A3', Folio: 'F3', Descripcion_Breve: 'Hora: 18:00:00' })], [], [], []);
  assert.ok(!rows.find(r => r.id === 'A1').categories.includes('identidad'));
  assert.ok(rows.filter(r => r.id !== 'A1').every(r => r.categories.includes('identidad')));
  const repeated = q.audit([activity({ Descripcion_Breve: 'Hora: 13:00' }), activity({ Descripcion_Breve: 'Hora: 18:00' })], [], [], []);
  assert.ok(repeated.every(r => r.diag.includes('ID repetido') && r.diag.includes('Folio repetido')));
});
test('el público acumulado de enero a septiembre no se presenta como público de enero', () => {
  const acts = [activity({ ID_Actividad: 'ACUM', Fecha_Inicio: '2026-01-01', Fecha_Fin: '2026-09-30' }), activity({ ID_Actividad: 'ENE', Fecha_Inicio: '2026-01-01', Fecha_Fin: '2026-01-31' }), activity({ ID_Actividad: 'FEB', Fecha_Inicio: '2026-02-01', Fecha_Fin: '2026-02-28' })];
  const result = q.monthlyPopulation(acts, [t(351071, { ID_Actividad: 'ACUM' }), t(16903, { ID_Actividad: 'ENE' }), t(8209, { ID_Actividad: 'FEB' })], 'Cantidad');
  assert.deepEqual(result.records.slice(0, 2), [2, 1]);
  assert.deepEqual(result.people.slice(0, 3), [16903, 8209, null]);
  assert.equal(result.unallocatedPeople, 351071); assert.equal(result.unallocatedRecords, 1);
  assert.equal(result.people.reduce((s, n) => s + (n ?? 0), 0) + result.unallocatedPeople, 376183);
});
test('la serie mensual distingue un cero declarado de población ausente o parcial', () => {
  const acts = ['CERO', 'FALTA', 'PARCIAL', 'SIN_FIN', 'CRUZA_ANIO'].map(ID_Actividad => activity({ ID_Actividad }));
  acts[3].Fecha_Fin = ''; acts[4].Fecha_Fin = '2027-01-15';
  const rows = [p(0, { ID_Actividad: 'CERO' }), p(9, { ID_Actividad: 'PARCIAL' }), p('', { ID_Actividad: 'PARCIAL' }), p(10, { ID_Actividad: 'SIN_FIN' }), p(20, { ID_Actividad: 'CRUZA_ANIO' })];
  const result = q.monthlyPopulation(acts, rows, 'Cantidad_Poblacion');
  assert.equal(result.people[0], 0); assert.equal(result.people[1], null); assert.equal(result.missing[0], 2);
  assert.equal(result.unallocatedPeople, 30); assert.equal(result.unallocatedRecords, 2);
  assert.equal(q.monthlyPopulation([acts[1]], [], 'Cantidad_Poblacion').people[0], null);
});
