(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./calidad-datos.js'));
  else root.CulturaFicha = factory(root.CulturaCalidad);
})(typeof globalThis !== 'undefined' ? globalThis : this, function (quality) {
  'use strict';
  const text = value => value == null ? '' : String(value).replace(/\u00a0/g, ' ').trim();
  const escape = value => text(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const unavailable = value => !text(value) || /^(sin asignar|null|nan|n\/?a|no disponible|#N\/A|#.*[!?])$/i.test(text(value));
  const value = (v, fallback = 'Sin informar') => unavailable(v) ? `<span class="text-slate-500 font-normal">${fallback}</span>` : escape(v);
  const integer = n => n.toLocaleString('es-MX');
  const count = v => quality.count(v) === null ? '<span class="text-slate-500 font-normal">Sin dato válido</span>' : integer(quality.count(v));
  const sum = (rows, field) => rows.length && rows.every(r => quality.count(r[field]) !== null) ? rows.reduce((n, r) => n + quality.count(r[field]), 0) : null;
  const yesNo = v => /^(true|si|sí|1)$/i.test(text(v)) ? 'Sí' : /^(false|no|0)$/i.test(text(v)) ? 'No' : v;
  function date(value, withTime = false) {
    const iso = quality.dateISO(value);
    if (!iso) return '<span class="text-slate-500 font-normal">Sin fecha válida</span>';
    const time = text(value).match(/[T\s](\d{1,2}:\d{2})(?::\d{2})?/);
    return iso.split('-').reverse().join('/') + (withTime && time ? ' · ' + escape(time[1]) : '');
  }
  function field(label, content, wide = false) {
    return `<div class="min-w-0 ${wide ? 'md:col-span-3' : ''}"><dt class="text-slate-500 font-bold text-[11px] mb-1">${label}</dt><dd class="text-slate-800 font-semibold break-words whitespace-pre-line">${content}</dd></div>`;
  }
  function stat(label, n, tone = 'text-gto-blue', note = '') {
    return `<div class="rounded-xl border border-slate-200 bg-white p-3 min-w-0"><p class="text-[11px] text-slate-500 font-bold">${label}</p><p class="mt-1 text-lg font-extrabold ${tone}">${n}</p>${note ? `<p class="mt-1 text-[11px] text-slate-500">${note}</p>` : ''}</div>`;
  }
  function table(headers, rows, empty) {
    if (!rows.length) return `<p class="text-slate-500 py-2">${empty}</p>`;
    return `<div class="overflow-x-auto rounded-lg border border-slate-200"><table class="w-full text-xs text-left"><thead class="bg-slate-100 text-slate-600"><tr>${headers.map(h => `<th class="p-2.5 font-bold whitespace-nowrap">${h}</th>`).join('')}</tr></thead><tbody class="divide-y divide-slate-200">${rows.map(row => `<tr class="align-top">${row.map(cell => `<td class="p-2.5 min-w-[100px]">${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  const money = v => quality.number(v) === null ? value(v) : '$' + quality.number(v).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function detail(title, body, open = false) {
    return `<details ${open ? 'open' : ''} class="rounded-xl border border-slate-200 bg-white p-3 sm:p-4"><summary class="cursor-pointer font-bold text-gto-blue py-1">${title}</summary><div class="mt-3">${body}</div></details>`;
  }
  function render({ activity: a, territory = [], population = [], evidence = [], review = null, evidenceUrl }) {
    const st = sum(territory, 'Cantidad'), sp = sum(population, 'Cantidad_Poblacion');
    const diff = st !== null && sp !== null ? st - sp : null;
    const categories = { diferencias: 'Cifras discrepantes', faltantes: 'Datos por completar', evidencias: 'Sin evidencia', concentrados: 'Revisar cantidades', identidad: 'Posible duplicación' };
    const reasons = review ? review.diag.split(' · ').filter(Boolean) : [];
    const badges = review ? review.categories.map(k => `<span class="inline-block px-2 py-1 rounded-full text-[11px] font-bold ${k === 'diferencias' || k === 'identidad' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-900'}">${categories[k] || escape(k)}</span>`).join(' ') : '';
    const files = evidence.filter(e => !unavailable(e.Archivo_Evidencia));
    const photo = !unavailable(a.Foto_Evidencia) && !files.some(e => text(e.Archivo_Evidencia) === text(a.Foto_Evidencia));
    const fileCount = files.length + (photo ? 1 : 0);
    const start = quality.dateISO(a.Fecha_Inicio_ISO) ? a.Fecha_Inicio_ISO : a.Fecha_Inicio;
    let html = `<section aria-label="Revisión de la información" class="rounded-xl border ${review ? 'border-amber-200 bg-amber-50/60' : 'border-teal-200 bg-teal-50/50'} p-3 sm:p-4">
      <h4 class="font-bold text-gto-blue">Revisión de la información</h4>
      ${review ? `<div class="flex flex-wrap gap-1.5 mt-2">${badges}</div><ul class="list-disc pl-5 mt-3 space-y-1.5 text-slate-700">${reasons.map(r => `<li>${escape(r)}</li>`).join('')}</ul>` : '<p class="text-teal-800 mt-2">Sin alertas detectadas por las reglas de conciliación.</p>'}
      <p class="text-[11px] text-slate-500 mt-3">Revisión automática de los datos disponibles; los posibles duplicados y el significado de las cantidades requieren confirmación del área.</p>
    </section>
    <section aria-label="Comparación de población">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        ${stat('Total territorial', st === null ? 'Sin dato completo' : integer(st), 'text-gto-blue', `${territory.length} ${territory.length === 1 ? 'registro vinculado' : 'registros vinculados'}`)}
        ${stat('Total demográfico', sp === null ? 'Sin dato completo' : integer(sp), 'text-gto-blue', `${population.length} ${population.length === 1 ? 'registro vinculado' : 'registros vinculados'}`)}
        ${stat('Diferencia', diff === null ? 'No comparable' : (diff > 0 ? '+' : '') + integer(diff), diff ? 'text-rose-700' : 'text-slate-700', 'Territorio menos población')}
        ${stat('Archivos vinculados', integer(fileCount), 'text-gto-blue', 'Evidencias y foto de la actividad')}
      </div>
      <p class="text-[11px] text-slate-500 mt-2">Se comparan todos los registros vinculados a esta actividad. Los totales territorial y demográfico describen a la misma población: no deben sumarse entre sí. Una cifra ausente o inválida no se convierte en cero.</p>
    </section>
    <section aria-label="Datos de la actividad" class="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200">
      <dl class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${field('Dirección general', value(a.Direccion))}
        ${field('Usuario registrado', value(a.Usuario_Registra))}
        ${field('Fecha de captura', date(a.Fecha_Captura, true))}
        ${field('Fecha de inicio', date(start))}
        ${field('Fecha de fin', date(a.Fecha_Fin))}
        ${field('Total de sesiones', count(a.Total_Sesiones))}
        ${field('Disciplina', value(a.Disciplina))}
        ${field('Subdisciplina', value(a.Subdisciplina))}
        ${field('Tipo de actividad', value(a.Tipo_Actividad))}
        ${field('Actividad', value(a.Actividad))}
        ${field('Modalidad', value(a.Formato))}
        ${field('Temporalidad', value(a.Temporalidad))}
        ${field('Clave de proceso', value(a.Clave_Proceso_Txt))}
        ${field('ID de alineación', value(a.Clave_Proceso))}
        ${field('Unidad de medida', value(a.Unidad_Medida))}
        ${field('Meta', value(a.Nombre_Meta), true)}
        ${field('Sede / recinto', value(a.Nombre_Espacio))}
        ${field('Tipo de espacio', value(a.Tipo_Espacio))}
        ${field('Espacio especificado', value(a.Especifique_Espacio))}
        ${field('Acciones PG · Programa de Gobierno', value(a.Acciones_PG), true)}
        ${!unavailable(a.Tipo_Registro) || !unavailable(a.Cantidad_Actividades) ? field('Tipo de registro', value(a.Tipo_Registro)) + field('Cantidad de actividades reportada', count(a.Cantidad_Actividades)) : ''}
      </dl>
    </section>`;
    if (!unavailable(a.Descripcion_Breve)) html += `<section><h4 class="font-bold text-gto-blue mb-2">Descripción de la actividad</h4><p class="text-slate-700 bg-white p-3 rounded-xl border border-slate-200 leading-relaxed whitespace-pre-line break-words">${escape(a.Descripcion_Breve)}</p></section>`;

    html += detail(`Cobertura territorial · ${territory.length} ${territory.length === 1 ? 'registro vinculado' : 'registros vinculados'}`, table(
      ['ID de territorio', 'Municipio', 'Comunidad / localidad', 'Tipo de asentamiento', 'ZAP Nuevo Comienzo', 'ZAP SSyP', 'Total de personas', 'Participación', 'Acceso'],
      territory.map(t => [value(t.ID_Territorio), value(t.Municipio), value(t.Nombre_Comunidad_Final || t.Nombre_Comunidad || t.Otra_Comunidad, 'Localidad sin informar'), value(t.Tipo_Asentamiento), value(yesNo(t.ZAP_Nuevo_Comienzo)), value(yesNo(t.ZAP_SSyP)), count(t.Cantidad), count(t.Cantidad_Participacion), count(t.Cantidad_Acceso)]),
      'Sin registros territoriales vinculados.'
    ), true);
    html += detail(`Desglose demográfico · ${population.length} ${population.length === 1 ? 'registro vinculado' : 'registros vinculados'}`, table(
      ['ID de población', 'Grupo etario', 'Género', 'Grupo prioritario', 'Total de personas', 'Participación', 'Acceso'],
      population.map(p => [value(p.ID_Poblacion), value(p.Grupo_Etario), value(p.Genero), value(p.Grupo_Prioritario), count(p.Cantidad_Poblacion), count(p.Cantidad_Participacion), count(p.Cantidad_Acceso)]),
      'Sin registros demográficos vinculados.'
    ), true);
    const alignment = [['Área', a.Area], ['Meta / programa', a.Meta], ['Meta anual', a.Meta_Anual], ['Promesa Nuevo Comienzo', a.Promesa_NC], ['Eje PG', a.Eje_PG], ['Objetivo PG', a.Objetivo_PG], ['Estrategia PG', a.Estrategia_PG], ['Eje transversal PEC', a.Eje_Tranversal_PEC], ['Línea PEC', a.Linea_PEC], ['Estrategia PEC', a.Estrategia_PEC], ['Acciones PEC', a.Acciones_PEC], ['Metas PEC', a.Metas_PEC]];
    html += detail('Alineación y planeación', `<dl class="grid grid-cols-1 md:grid-cols-3 gap-4">${alignment.map(([label, v]) => field(label, value(v), true)).join('')}</dl>`);
    const additional = [['Agentes con contrato', yesNo(a.Agentes_Con_Contrato)], ['Cantidad de agentes', a.Cantidad_Agentes], ['Tipo de agente apoyado', a.Tipo_Agente_Apoyado], ['Cantidad de agentes apoyados', a.Cantidad_Agente_Apoyado], ['Nombre del agente', a.Nombre_Agente], ['Con apoyo', yesNo(a.Con_Apoyo)], ['Tipo de apoyo', a.Tipo_Apoyo], ['Vinculación con actores', yesNo(a.Vinculacion_Actores)], ['Tipo de vinculación', a.Tipo_Vinculacion], ['Genera ingresos', yesNo(a.Genera_Ingresos)], ['Registro INDAUTOR', yesNo(a.Registros_INDAUTOR)], ['Folio INDAUTOR', a.Folio_INDAUTOR]];
    const financial = [['Monto de ingreso', a.Monto_Ingreso], ['Monto total contratado', a.Monto_Total_Contratado]];
    if ([...additional, ...financial].some(([, v]) => !unavailable(v))) html += detail('Agentes, apoyos y otros datos reportados', `<dl class="grid grid-cols-1 md:grid-cols-3 gap-4">${additional.filter(([, v]) => !unavailable(v)).map(([label, v]) => field(label, value(v))).join('')}${financial.filter(([, v]) => !unavailable(v)).map(([label, v]) => field(label, money(v))).join('')}</dl>`);

    const renderFile = (path, label, description, id) => {
      const target = evidenceUrl ? text(evidenceUrl(path)) : '';
      const link = /^https?:\/\//i.test(target) ? `<a href="${escape(target)}" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-gto-blue hover:bg-gto-dark text-white font-bold px-3 py-2 rounded-lg text-xs">Abrir en Drive</a>` : '<span class="text-slate-500">Sin enlace disponible</span>';
      return `<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg bg-teal-50/70 border border-teal-200"><div class="min-w-0"><p class="font-bold text-teal-900 break-all">${escape(text(path).split('/').pop() || path)}</p><p class="text-[11px] text-teal-800 mt-1 break-words">${escape(label)}${text(description) ? ' · ' + escape(description) : ''}</p>${id ? `<p class="text-[11px] font-mono text-slate-500 mt-1">${escape(id)}</p>` : ''}</div>${link}</div>`;
    };
    const evidenceHtml = evidence.map(e => unavailable(e.Archivo_Evidencia)
      ? `<div class="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">Registro de evidencia ${escape(e.ID_Evidencia) || 'sin ID'}: falta adjuntar un archivo.${text(e.Descripcion) ? `<p class="mt-1">${escape(e.Descripcion)}</p>` : ''}</div>`
      : renderFile(e.Archivo_Evidencia, text(e.Tipo_Evidencia) || 'Archivo', e.Descripcion, e.ID_Evidencia)).join('');
    html += detail(`Evidencias · ${fileCount} ${fileCount === 1 ? 'archivo vinculado' : 'archivos vinculados'}`, `<div class="space-y-2">${evidenceHtml}${photo ? renderFile(a.Foto_Evidencia, 'Foto en el registro de la actividad', '', '') : ''}${!fileCount && !evidence.length ? '<p class="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">Esta actividad aún no cuenta con archivos vinculados en el sistema.</p>' : ''}</div>`, true);
    return html;
  }
  return { render };
});
