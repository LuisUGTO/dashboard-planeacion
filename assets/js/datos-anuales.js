/**
 * assets/js/datos-anuales.js
 * Módulo de resultados institucionales y metas trienales (2024 – 2026).
 * Fuente oficial: Informe de Resultados 2025 / Proyección 2026 (Dirección de Planeación)
 * y Registro Operativo en Vivo 2026 (Base de Datos Institucional).
 */

(function (global) {
  'use strict';

  const DatosAnuales = {
    meta: {
      titulo: 'Gestión Cultural en Guanajuato',
      subtitulo: 'Resultados Institucionales y Metas Trienales 2024 – 2026',
      periodo: '2024 – 2026',
      fuenteOficial: 'Informe de Resultados 2025 & Registro Operativo en Vivo 2026'
    },

    kpis: {
      // Impacto y Afluencia en Museos y Zonas Arqueológicas
      visitantesMuseos2025: 602389,
      visitantesMuseos2024: 490350,
      visitantesMuseos2026Live: 357986,
      crecimientoMuseosPct: 22.85,

      // Operación en vivo 2026 (Base de datos del Sistema Cultura GTO)
      actividades2026Live: 1753,
      participaciones2026Live: 1028146,
      participaciones2026Texto: '1.03 M',
      municipiosCobertura2026: 44,
      totalMunicipios: 46,

      // Red y equipamiento cultural
      museosRecintos: 12,
      salasLectura: 129,
      agrupacionesVientosMusicales: 27,
      nnajVientosMusicales: 1885,

      // Impacto transversal reportado en Informe 2025
      mujeresParticipantes: 36375,
      nnajParticipantes: 6339,
      migrantesAtendidos: 42610,
      municipiosCEPRERESO: 8
    },

    comparativoTrienal: {
      museos: {
        v2024: 490350,
        v2025: 602389,
        crecimientoPct: 22.85,
        incrementoAbsoluto: 112039
      },
      forum: {
        act2024: 70,
        act2025: 174,
        crecimientoPct: 148.57,
        asistentes2025: 67285
      },
      editorial: {
        metas2024: 12,
        metas2025: 15,
        metas2026: 6
      },
      operacion2026: {
        actividades: 1753,
        participaciones: 1028146,
        municipios: 44
      }
    },

    serieTrienal: [
      {
        anio: 2024,
        titulo: '2024 (Línea Base)',
        visitantesMuseos: 490350,
        visitantesMuseosMiles: 490.4,
        actividadesReportadas: 70, // Forum y muestras documentadas
        metasCumplidas: 12,
        destacado: '490,350 visitantes en museos de la Red Estatal y 70 actividades de gran formato en Forum.'
      },
      {
        anio: 2025,
        titulo: '2025 (Informe Oficial)',
        visitantesMuseos: 602389,
        visitantesMuseosMiles: 602.4,
        actividadesReportadas: 174, // Forum consolidado
        asistenciasForum: 67285,
        metasCumplidas: 15,
        destacado: '+22.85% de afluencia en museos (602,389 visitantes) y 174 funciones con 67,285 asistentes en Forum.'
      },
      {
        anio: 2026,
        titulo: '2026 (Operación en Vivo)',
        visitantesMuseos: 357986,
        visitantesMuseosMiles: 358.0,
        actividadesReportadas: 1753, // Actividades únicas validadas en el tablero
        participacionesValidadas: 1028146, // Asistentes comprobados
        participacionesMiles: 1028.1,
        municipiosConPresencia: 44,
        metasCumplidas: 6,
        destacado: '1,753 actividades operativas únicas en 44 municipios, con 1,028,146 asistentes verificados y 357,986 asistentes en museos.'
      }
    ],

    ambitos: [
      { nombre: 'Museos y Patrimonio Cultural', pct: 34, color: '#C084FC', colorBg: '#F3E8FF' },
      { nombre: 'Formación y Vientos Musicales', pct: 24, color: '#701A75', colorBg: '#FDF4FF' },
      { nombre: 'Artes Escénicas y Forum Cultural', pct: 18, color: '#A21CAF', colorBg: '#FAE8FF' },
      { nombre: 'Vinculación e Inclusión Social', pct: 12, color: '#F472B6', colorBg: '#FDF2F8' },
      { nombre: 'Fomento a la Lectura y Bibliotecas', pct: 8, color: '#FBCFE8', colorBg: '#FFF1F2' },
      { nombre: 'Editorial y Difusión Cultural', pct: 4, color: '#E2E8F0', colorBg: '#F8FAFC' }
    ],

    logros: [
      'Incremento de +22.85% de visitantes en museos y recintos estatales (de 490,350 a 602,389 visitantes).',
      'Crecimiento de +51% de afluencia en salas permanentes de exposiciones.',
      'Forum Cultural y Teatro del Bicentenario aumentaron su oferta de 70 a 174 actividades (+148%) con 67,285 asistentes.',
      'Consolidación de 27 agrupaciones de Vientos Musicales con 1,885 NNAJ activos en formación instrumental.',
      '36,375 mujeres y niñas beneficiadas directamente en programas de fomento y desarrollo cultural (54.1%).',
      '42,610 personas de la comunidad migrante guanajuatense atendidas en California, Texas, Georgia y Oregón.',
      'Presencia activa en CEPRERESOs en 8 municipios para personas privadas de su libertad.',
      '1,753 actividades operativas únicas validadas en vivo en 2026 con 1,028,146 asistentes comprobados en 44 municipios.'
    ],

    // Desglose de metas y proyectos por Dirección General (Informe Oficial 2024-2026)
    direccionesResumen: [
      {
        direccion: 'DIRECCIÓN GENERAL DE MUSEOS, ARTES VISUALES Y EXPOSICIONES',
        proyectos: ['PB3572', 'QC4040', 'QC3939'],
        visitantes2024: 490350,
        visitantes2025: 602389,
        variacionPct: 22.85,
        destacados: 'Incremento de 22.8% en visitantes en 2025. Crecimiento de 51% en afluencia a salas permanentes en 12 recintos.'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE FORUM CULTURAL GUANAJUATO',
        proyectos: ['PB3571'],
        recintos: ['Teatro del Bicentenario', 'Auditorio Mateo Herrera', 'Calzada de las Artes'],
        actividades2024: 70,
        actividades2025: 174,
        asistentes2025: 67285,
        destacados: 'Crecimiento de 148% en actividades con 67,285 asistentes y +40% de aumento en ocupación promedio.'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE FORMACIÓN E INVESTIGACIÓN',
        proyectos: ['PB3567', 'PB3568', 'QC4047', 'QC4049', 'QC4051', 'QC4061', 'QC4062'],
        destacados: 'CEARG, 27 agrupaciones de Vientos Musicales (1,885 NNAJ), programas PACMYC, PECDA y Encuentro de Creadores.'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE VINCULACIÓN Y DESARROLLO CULTURAL',
        proyectos: ['PB3562', 'PB3563', 'PB3564', 'QB4039', 'QC3232', 'QC4098'],
        destacados: 'Programas de inclusión en CEPRERESOs de 8 municipios, 129 salas de lectura y atención comunitaria migrante (42.6k en EUA).'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE EDITORIAL Y PUBLICACIONES',
        proyectos: ['PB3501', 'PB3573', 'QC4055', 'QC4057', 'QC4059'],
        metas2024: 12,
        metas2025: 15,
        metas2026: 6,
        destacados: 'Consolidación de Ediciones La Rana, ferias internacionales del libro (FIL Monterrey, Guadalajara) y catálogo digital.'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE PATRIMONIO CULTURAL',
        proyectos: ['PB3565', 'PB3566', 'QC4042', 'QC4043', 'QC4044', 'QC4046', 'QC4048'],
        destacados: 'Preservación activa de 5 zonas arqueológicas (Cañada de la Virgen, Peralta, Plazuelas, El Cóporo, Arroyo Seco) y centros históricos.'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE PRODUCCIÓN ARTÍSTICA',
        proyectos: ['PB3569', 'PB3570', 'PB3574', 'QC4053', 'QC4143'],
        destacados: 'Presentaciones históricas de la Banda de Música del Estado, festivales de música barroca, teatro y artes vivas.'
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DatosAnuales;
  } else {
    global.DatosAnuales = DatosAnuales;
  }
})(typeof window !== 'undefined' ? window : globalThis);
