(function (root, factory) {
  const reviews = typeof module === 'object' && module.exports ? require('./revisiones-identidad.js') : root.CulturaRevisionesIdentidad;
  const api = factory(reviews || []);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CulturaCalidad = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (identityReviews) {
  'use strict';
  const text = value => value == null ? '' : String(value).trim();
  const norm = value => text(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const absent = value => !text(value) || /^(sin asignar|n\/?a|null|nan|no disponible|#N\/A|#.*[!?])$/i.test(text(value));
  function number(value) {
    if (typeof value === 'number') return Number.isFinite(value) ? value : null;
    let s = text(value);
    if (/^-?\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)) s = s.replace(/,/g, '');
    if (!/^-?\d+(\.\d+)?$/.test(s)) return null;
    const n = Number(s);
    return Number.isFinite(n) ? n : null;
  }
  const count = value => { const n = number(value); return n !== null && n >= 0 && Number.isInteger(n) ? n : null; };
  // Explicit, reversible marker in an operative field. Ordinary mentions of
  // cancellation (or a matching title on another date) do not change status.
  const isCancelled = activity => /^\[CANCELAD[AO]\]/i.test(text(activity.Descripcion_Breve));
  const supersededBy = activity => {
    const m = text(activity.Descripcion_Breve).match(/^\[SUSTITUIDO:(ACT-SC[A-Z]{2}\d{5})\]/);
    return m && m[1] !== text(activity.ID_Actividad) ? m[1] : '';
  };
  const isExcluded = activity => isCancelled(activity) || !!supersededBy(activity);
  function reportedTime(activity) {
    // Import descriptions carry the explicit start time. Unknown, malformed or
    // multiple times cannot establish that two otherwise matching records differ.
    const matches = [...text(activity.Descripcion_Breve).matchAll(/\bHora:\s*(\d{1,2}):(\d{2})(?::(\d{2}))?(?=\s*(?:\.|$))/gi)];
    if (matches.length !== 1) return null;
    const [, h, m, s = '0'] = matches[0];
    if (+h > 23 || +m > 59 || +s > 59) return null;
    return `${h.padStart(2, '0')}:${m}`;
  }
  function dateISO(value) {
    const s = text(value);
    let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (!m) {
      const lat = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s|$)/);
      if (lat) m = [lat[0], lat[3], lat[2], lat[1]];
    }
    if (!m) return null;
    const y = Number(m[1]), month = Number(m[2]), day = Number(m[3]);
    const d = new Date(Date.UTC(y, month - 1, day));
    if (d.getUTCFullYear() !== y || d.getUTCMonth() !== month - 1 || d.getUTCDate() !== day) return null;
    return `${m[1]}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  }
  function group(rows) {
    const result = new Map();
    rows.forEach(r => {
      const id = text(r.ID_Actividad);
      if (!result.has(id)) result.set(id, []);
      result.get(id).push(r);
    });
    return result;
  }
  function sum(rows, field) {
    const values = rows.map(r => count(r[field]));
    return rows.length && values.every(v => v !== null) ? values.reduce((s, v) => s + v, 0) : null;
  }
  function identitySnapshot(a, territories, population) {
    const fields = (r, names) => names.map(n => text(r[n]));
    const sorted = (rows, names) => rows.map(r => fields(r, names)).sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
    return JSON.stringify([text(a.ID_Actividad), text(a.Nombre_Actividad), dateISO(a.Fecha_Inicio_ISO || a.Fecha_Inicio), dateISO(a.Fecha_Fin), text(a.Nombre_Espacio || a.Especifique_Espacio), text(a.Descripcion_Breve), text(a.Total_Sesiones), sorted(territories, ['ID_Territorio','Municipio','Tipo_Asentamiento','Comunidad','Nombre_Comunidad','Otra_Comunidad','Cantidad','Cantidad_Participacion','Cantidad_Acceso']), sorted(population, ['ID_Poblacion','Grupo_Etario','Genero','Grupo_Prioritario','Cantidad_Participacion','Cantidad_Acceso','Cantidad_Poblacion'])]);
  }
  function confirmedDistinct(a, b, ters, pops) {
    const aid = text(a.ID_Actividad), bid = text(b.ID_Actividad);
    return identityReviews.some(r => Array.isArray(r.ids) && r.ids.includes(aid) && r.ids.includes(bid) && r.snapshots && r.snapshots[aid] === identitySnapshot(a, ters.get(aid) || [], pops.get(aid) || []) && r.snapshots[bid] === identitySnapshot(b, ters.get(bid) || [], pops.get(bid) || []));
  }
  function quantity(activity) {
    // A reported workshop quantity must never be guessed from Total_Sesiones.
    const explicit = count(activity.Cantidad_Actividades);
    const consolidated = /concentrad|consolidad|acumulad/.test(norm(activity.Tipo_Registro));
    const malformed = text(activity.Cantidad_Actividades) !== '' && explicit === null;
    return { value: malformed || (consolidated && (explicit === null || explicit === 0)) ? null : (explicit === null ? 1 : explicit), consolidated, explicit, malformed };
  }
  // Declaraciones documentadas por el área: una revisión aplica solo al ID,
  // periodo, cifra y texto que fueron contrastados. No acredita cada sesión.
  function sessionsReviewed(activity) {
    const confirmed = { 'ACT-SCOG94069': 1020, 'ACT-SCIN39392': 170 };
    return confirmed[text(activity.ID_Actividad)] === count(activity.Total_Sesiones)
      && dateISO(activity.Fecha_Inicio_ISO || activity.Fecha_Inicio) === '2026-03-20'
      && dateISO(activity.Fecha_Fin) === '2026-06-30'
      && text(activity.Descripcion_Breve).startsWith('Adriana Escamilla confirma el 03/11/2026 a las15:01 que las sesiones corresponden a capacitaciones del primer semestre: clases semanales por municipio multiplicadas por semanas de trabajo. Total declarado por el área; cálculo por programación, sin verificación individual de cada sesión.');
  }
  function metrics(activities) {
    const active = activities.filter(a => !isExcluded(a));
    let activitiesTotal = 0, unresolved = 0, sessions = 0, missingSessions = 0;
    active.forEach(a => {
      const q = quantity(a);
      if (q.value === null) unresolved++; else activitiesTotal += q.value;
      const n = count(a.Total_Sesiones);
      if (n === null || n === 0) missingSessions++; else sessions += n;
    });
    return { records: active.length, activities: activitiesTotal, unresolved, sessions, missingSessions };
  }
  function monthlyPopulation(activities, rows, field) {
    const linked = group(rows);
    const records = new Array(12).fill(0), people = new Array(12).fill(null);
    const missing = new Array(12).fill(0);
    let unallocatedPeople = 0, unallocatedRecords = 0, unallocatedMissing = 0;
    activities.filter(a => !isExcluded(a)).forEach(a => {
      const start = dateISO(a.Fecha_Inicio_ISO || a.Fecha_Inicio);
      const end = dateISO(a.Fecha_Fin_ISO || a.Fecha_Fin);
      const month = start ? Number(start.slice(5, 7)) - 1 : null;
      if (month !== null) records[month]++;
      const total = sum(linked.get(text(a.ID_Actividad)) || [], field);
      // An interval spanning months does not establish attendance in any one month.
      if (!start || !end || end < start || start.slice(0, 7) !== end.slice(0, 7)) {
        unallocatedRecords++;
        if (total === null) unallocatedMissing++; else unallocatedPeople += total;
      } else if (total === null) missing[month]++;
      else people[month] = (people[month] ?? 0) + total;
    });
    return { records, people, missing, unallocatedPeople, unallocatedRecords, unallocatedMissing };
  }
  function audit(activities, territory, population, evidence, catalog = []) {
    const ters = group(territory), pops = group(population), evis = group(evidence);
    const metas = new Set(catalog.map(c => text(c.ID_Alineacion)));
    const idCounts = new Map(), folios = new Map(), identities = new Map();
    activities.forEach(a => {
      const id = text(a.ID_Actividad), folio = text(a.Folio);
      idCounts.set(id, (idCounts.get(id) || 0) + 1);
      if (folio) folios.set(folio, (folios.get(folio) || 0) + 1);
      const key = [dateISO(a.Fecha_Inicio_ISO || a.Fecha_Inicio), norm(a.Nombre_Actividad), norm(a.Nombre_Espacio || a.Especifique_Espacio)].join('|');
      if (!isExcluded(a) && key.split('|').every(Boolean)) {
        if (!identities.has(key)) identities.set(key, []);
        identities.get(key).push({ id, time: reportedTime(a), activity: a });
      }
    });
    return activities.map(a => {
      const id = text(a.ID_Actividad), tr = ters.get(id) || [], pr = pops.get(id) || [];
      const st = sum(tr, 'Cantidad'), sp = sum(pr, 'Cantidad_Poblacion');
      const categories = new Set(), reasons = [];
      const add = (category, reason) => { categories.add(category); reasons.push(reason); };
      const replacement = supersededBy(a);
      if (replacement) {
        add('sustituidos', `Captura sustituida por ${replacement}: historial conservado, excluido de los indicadores de ejecución`);
        if (!idCounts.has(replacement)) add('identidad', 'No se encuentra el registro que sustituye esta captura');
        if (idCounts.get(id) > 1) add('identidad', 'ID repetido');
        if (text(a.Folio) && folios.get(text(a.Folio)) > 1) add('identidad', 'Folio repetido');
        return { id, folio: text(a.Folio), usuario: text(a.Usuario_Registra), direccion: text(a.Direccion), nombre: text(a.Nombre_Actividad), mun: [...new Set(tr.map(t => text(t.Municipio)).filter(Boolean))].join(', ') || 'Sin identificar', sT: st, sP: sp, diff: st !== null && sp !== null ? st - sp : null, categories: [...categories], diag: reasons.join(' · ') };
      }
      if (isCancelled(a)) {
        add('canceladas', 'Actividad cancelada: se conserva el historial y se excluye de los indicadores de ejecución');
        if ((st !== null && st > 0) || (sp !== null && sp > 0)) add('diferencias', 'La actividad cancelada conserva cifras de público: revisar su origen sin contarlas como ejecución');
        if (idCounts.get(id) > 1) add('identidad', 'ID repetido');
        if (text(a.Folio) && folios.get(text(a.Folio)) > 1) add('identidad', 'Folio repetido');
        return { id, folio: text(a.Folio), usuario: text(a.Usuario_Registra), direccion: text(a.Direccion), nombre: text(a.Nombre_Actividad), mun: [...new Set(tr.map(t => text(t.Municipio)).filter(Boolean))].join(', ') || 'Sin identificar', sT: st, sP: sp, diff: st !== null && sp !== null ? st - sp : null, categories: [...categories], diag: reasons.join(' · ') };
      }
      const missing = [];
      if (absent(a.Nombre_Actividad)) missing.push('nombre');
      const start = dateISO(a.Fecha_Inicio_ISO || a.Fecha_Inicio), end = dateISO(a.Fecha_Fin);
      if (!start) missing.push('fecha de inicio válida');
      if (!end) missing.push('fecha de fin válida');
      if (start && end && end < start) add('faltantes', 'La fecha de fin es anterior al inicio');
      if (absent(a.Direccion)) missing.push('dirección');
      if (absent(a.Clave_Proceso) || (metas.size && !metas.has(text(a.Clave_Proceso)))) missing.push('meta válida del catálogo');
      if (absent(a.Acciones_PG)) missing.push('acción del Programa de Gobierno');
      if (absent(a.Acciones_PEC)) missing.push('acción del Programa Estatal de Cultura');
      if (absent(a.Subdisciplina)) missing.push('subdisciplina');
      if (absent(a.Disciplina)) missing.push('disciplina');
      if (norm(a.Formato) !== 'virtual' && absent(a.Nombre_Espacio) && absent(a.Especifique_Espacio)) missing.push('sede');
      const sessions = count(a.Total_Sesiones);
      if (sessions === null || sessions === 0) missing.push('cantidad válida de sesiones');
      if (missing.length) add('faltantes', 'Completar: ' + missing.join(', '));
      const yes = value => /^(true|si|1)$/.test(norm(value));
      if (yes(a.Agentes_Con_Contrato) && count(a.Cantidad_Agentes) === null) add('faltantes', 'Contratación marcada sin cantidad de agentes');
      if (yes(a.Genera_Ingresos) && (number(a.Monto_Ingreso) === null || number(a.Monto_Ingreso) < 0)) add('faltantes', 'Ingresos marcados sin monto válido');
      if (yes(a.Registros_INDAUTOR) && absent(a.Folio_INDAUTOR)) add('faltantes', 'Registro INDAUTOR marcado sin folio');
      if (!tr.length) add('faltantes', 'Sin registro de territorio');
      else {
        if (st === null) add('faltantes', 'Territorio contiene cantidades vacías o inválidas');
        if (tr.some(r => absent(r.Municipio))) add('faltantes', 'Municipio sin identificar');
        if (norm(a.Formato) !== 'virtual' && tr.some(r => !absent(r.Municipio) && !/estatal/.test(norm(r.Municipio)) && absent(r.Comunidad) && absent(r.Nombre_Comunidad) && absent(r.Otra_Comunidad))) add('faltantes', 'Localidad sin especificar en territorio');
      }
      if (!pr.length) add('faltantes', 'Sin registro de población');
      else if (sp === null) add('faltantes', 'Población contiene cantidades vacías o inválidas');
      if (pr.some(r => count(r.Cantidad_Poblacion) > 0 && (count(r.Cantidad_Participacion) === null || count(r.Cantidad_Acceso) === null))) add('faltantes', 'Población sin desglose completo entre participación y acceso');
      if (st !== null && sp !== null && st !== sp) add('diferencias', `Territorio ${st} y población ${sp}: diferencia ${st - sp}`);
      for (const [rr, total, label] of [[tr, 'Cantidad', 'Territorio'], [pr, 'Cantidad_Poblacion', 'Población']]) {
        const inconsistent = rr.some(r => {
          const t = count(r[total]), p = count(r.Cantidad_Participacion), acc = count(r.Cantidad_Acceso);
          return t !== null && p !== null && acc !== null && p + acc !== t;
        });
        if (inconsistent) add('diferencias', `${label}: participación más acceso no coincide con su total`);
      }
      if (absent(a.Foto_Evidencia) && !(evis.get(id) || []).some(e => !absent(e.Archivo_Evidencia))) add('evidencias', 'Sin archivo de evidencia vinculado');
      const q = quantity(a);
      if (q.value === null) add('concentrados', 'Concentrado sin cantidad válida de actividades reportadas');
      if (q.explicit === 0 && !q.consolidated) add('concentrados', 'Cantidad de actividades reportada en cero: confirmar');
      if (q.consolidated && start && end && start.slice(0, 7) !== end.slice(0, 7)) add('concentrados', 'Concentrado de varios meses: requiere desglose mensual; no se distribuye automáticamente');
      if (sessions !== null && sessions >= 100 && !sessionsReviewed(a)) add('concentrados', '100 o más sesiones: confirmar que no sea cantidad de talleres; no implica un error por sí solo');
      if (sessions !== null && sessions > 1 && (sessions === st || sessions === sp)) add('concentrados', 'La cantidad de sesiones coincide con el público total: confirmar que no se hayan capturado asistentes en ese campo');
      if (/concentrad|acumulad|enero\s*(a|-)\s*septiembre/.test(norm(a.Nombre_Actividad)) && !q.consolidated) add('concentrados', 'Posible concentrado: confirmar tipo de registro y cantidad de actividades');
      if (idCounts.get(id) > 1) add('identidad', 'ID repetido');
      if (text(a.Folio) && folios.get(text(a.Folio)) > 1) add('identidad', 'Folio repetido');
      const key = [start, norm(a.Nombre_Actividad), norm(a.Nombre_Espacio || a.Especifique_Espacio)].join('|');
      const time = reportedTime(a);
      if ((identities.get(key) || []).some(other => other.id !== id && (!time || !other.time || time === other.time) && !confirmedDistinct(a, other.activity, ters, pops))) add('identidad', 'Mismo nombre, fecha y sede en otro ID sin horario distinto confirmado: revisar posible duplicado o participación de otra área');
      return { id, folio: text(a.Folio), usuario: text(a.Usuario_Registra), direccion: text(a.Direccion), nombre: text(a.Nombre_Actividad), mun: [...new Set(tr.map(t => text(t.Municipio)).filter(Boolean))].join(', ') || 'Sin identificar', sT: st, sP: sp, diff: st !== null && sp !== null ? st - sp : null, categories: [...categories], diag: reasons.join(' · ') };
    }).filter(r => r.categories.length);
  }
  return { number, count, isCancelled, supersededBy, isExcluded, dateISO, quantity, metrics, monthlyPopulation, audit };
});
