(() => {
  'use strict';

  const museo = 'Museos y Artes Visuales';
  const forum = 'Forum Cultural';
  const editorial = 'Editorial y Publicaciones';
  const historical = [];
  function add(area, program, metric, values, source, municipality = '') {
    values.forEach((value, index) => {
      if (value !== null) historical.push({ year: 2024 + index, area, program, metric, value, source, municipality });
    });
  }

  add(museo, '', 'Visitas a exposiciones', [490350, 602389], 'Informe 2025 · Numeralia total de visitantes');
  add(museo, '', 'Visitas a exposiciones', [null, 12990], 'Informe 2025 · Visitantes por municipio', 'Silao');
  add(museo, '', 'Visitas a exposiciones', [null, 18013], 'Informe 2025 · Visitantes por municipio', 'Purísima del Rincón');
  add(museo, '', 'Visitas a exposiciones', [null, 278230], 'Informe 2025 · Visitantes por municipio', 'Guanajuato');
  add(museo, '', 'Visitas a exposiciones', [null, 293156], 'Informe 2025 · Visitantes por municipio', 'León');
  const museumProjectSource = 'Informe 2025 · Indicadores PB3503 y continuidad PB3572';
  for (const [metric, values] of [
    ['Presentaciones culturales de museos', [22, 19, 10]],
    ['Talleres para niñas, niños y jóvenes en museos', [171, 221, 7]],
    ['Exposiciones realizadas en museos', [161, 40, 16]],
    ['Eventos culturales reportados por museos', [427, 1039, 1255]]
  ]) {
    values.forEach((value, index) => {
      add(museo, index === 2 ? 'PB3572' : 'PB3503', metric,
        values.map((_, yearIndex) => yearIndex === index ? value : null), museumProjectSource);
    });
  }
  const forumSource = 'Informe 2025 · Comparativa anual, Forum sin MAHG + Teatro; 2025 cotejado con AE3037';
  add(forum, '', 'Actividades de Forum y Teatro', [136, 174], forumSource);
  add(forum, '', 'Asistencias a Forum y Teatro', [62619, 67285], forumSource);
  add(editorial, '', 'Metas editoriales programadas', [12, 15, 6], 'Informe 2025 · Resumen Editorial');
  add(editorial, 'PB3501', 'Ferias editoriales con participación', [6, 8], 'Informe 2025 · Indicadores PB3501–PB3573');
  add(editorial, 'PB3573', 'Ferias editoriales con participación', [null, null, 2], 'Informe 2025 · Indicadores PB3501–PB3573');
  add(editorial, 'PB3501', 'Actividades de promoción editorial', [72, 45], 'Informe 2025 · Indicadores PB3501–PB3573');
  add(editorial, 'PB3573', 'Presentaciones editoriales', [null, null, 32], 'Informe 2025 · Indicadores PB3501–PB3573');

  const academicSource = 'Anexo Académico 2025 · Academico, columnas C–E';
  const academicArea = 'DIRECCIÓN GENERAL DE FORMACIÓN E INVESTIGACIÓN';
  for (const [code, courses, attendance] of [['', 47, 1120], ['PB3520', 37, 935], ['QC4049', 10, 185]]) {
    add(academicArea, code, 'Cursos y acciones de Coordinación Académica', [null, courses], academicSource);
    add(academicArea, code, 'Participaciones de Coordinación Académica', [null, attendance], academicSource);
  }

  const editorialTerritory = [
    ["Acámbaro", 1, 14],
    ["Apaseo el Alto", 1, 5],
    ["Apaseo el Grande", 1, 8],
    ["Atarjea", 1, 30],
    ["Celaya", 3, 31],
    ["Dr. Mora", 1, 22],
    ["Guanajuato", 11, 281],
    ["Irapuato", 8, 204],
    ["León", 47, 933],
    ["Manuel Doblado", 1, 8],
    ["Pénjamo", 1, 11],
    ["Purísima del Rincón", 1, 41],
    ["Romita", 1, 4],
    ["San Felipe", 1, 30],
    ["Silao", 1, 17],
    ["Tierra Blanca", 1, 22],
    ["Uriangato", 1, 6]
  ];
  const territorySource = 'Informe 2025 · Territorialidad editorial, municipios de Guanajuato';
  for (const [municipality, activities, attendance] of editorialTerritory) {
    add(editorial, '', 'Actividades editoriales en Guanajuato', [null, activities], territorySource, municipality);
    add(editorial, '', 'Asistencias editoriales en Guanajuato', [null, attendance], territorySource, municipality);
  }
  add(editorial, '', 'Actividades editoriales en Guanajuato', [null, editorialTerritory.reduce((sum, row) => sum + row[1], 0)], territorySource);
  add(editorial, '', 'Asistencias editoriales en Guanajuato', [null, editorialTerritory.reduce((sum, row) => sum + row[2], 0)], territorySource);

  function selectHistorical({ year, area, program, municipality }, normalize) {
    return historical.filter(row =>
      (year === 'todos' || String(row.year) === year) &&
      (!area || row.area === area) &&
      (!program || row.program === program) &&
      (program || !row.program || !historical.some(total =>
        !total.program && total.year === row.year && total.area === row.area &&
        total.metric === row.metric && total.municipality === row.municipality)) &&
      (municipality ? normalize(row.municipality) === normalize(municipality) : !row.municipality)
    );
  }

  const api = { historical, selectHistorical };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else window.DatosAnuales = api;
})();
