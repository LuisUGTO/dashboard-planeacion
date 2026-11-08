/**
 * assets/js/datos-anuales.js
 * Módulo de datos históricos y comparativas plurianuales (2019 - 2026).
 * Fuente: Maqueta ejecutiva Dirección de Planeación / Informe de Resultados Plurianual.
 */

(function (global) {
  'use strict';

  const DatosAnuales = {
    meta: {
      titulo: 'Gestión Cultural en Guanajuato',
      subtitulo: 'Dashboard de resultados y evolución 2019 – 2026',
      periodo: '2019 - 2026'
    },

    kpis: {
      actividadesRealizadas: 56328,
      participacionesAsistencias: '3.9 M',
      participacionesNum: 3903000,
      municipiosCobertura: 46,
      totalMunicipios: 46,
      museosRecintos: 12,
      salasLectura: 129,
      agrupacionesVientosMusicales: 27,
      nnajVientosMusicales: 1885,
      crecimientoActividadesPct: 178
    },

    comparativo2019vs2026: {
      actividades: {
        v2019: 3512,
        v2026: 10766,
        crecimientoPct: 206
      },
      participaciones: {
        v2019: '1.2 M',
        v2019Num: 1164000,
        v2026: '3.9 M',
        v2026Num: 3903000,
        crecimientoPct: 225
      }
    },

    serieAnual: [
      { anio: 2019, actividades: 3512, participacionesMiles: 1164, participaciones: 1164000 },
      { anio: 2020, actividades: 2986, participacionesMiles: 982,  participaciones: 982000 },
      { anio: 2021, actividades: 4108, participacionesMiles: 1439, participaciones: 1439000 },
      { anio: 2022, actividades: 5743, participacionesMiles: 1983, participaciones: 1983000 },
      { anio: 2023, actividades: 7102, participacionesMiles: 2476, participaciones: 2476000 },
      { anio: 2024, actividades: 8321, participacionesMiles: 2988, participaciones: 2988000 },
      { anio: 2025, actividades: 9790, participacionesMiles: 3456, participaciones: 3456000 },
      { anio: 2026, actividades: 10766, participacionesMiles: 3903, participaciones: 3903000 }
    ],

    ambitos: [
      { nombre: 'Formación y educación artística', pct: 28, color: '#701A75', colorBg: '#FDF4FF' },
      { nombre: 'Creación y circulación', pct: 24, color: '#A21CAF', colorBg: '#FAE8FF' },
      { nombre: 'Patrimonio y memoria', pct: 17, color: '#C084FC', colorBg: '#F3E8FF' },
      { nombre: 'Participación y mediación', pct: 16, color: '#F472B6', colorBg: '#FDF2F8' },
      { nombre: 'Lectura y bibliotecas', pct: 12, color: '#FBCFE8', colorBg: '#FFF1F2' },
      { nombre: 'Economía creativa', pct: 3, color: '#E2E8F0', colorBg: '#F8FAFC' }
    ],

    logros: [
      '+56 mil actividades culturales realizadas.',
      'Crecimiento de 178% en actividades (2019–2026).',
      'Cobertura total del estado (46 municipios).',
      'Consolidación de 12 museos y 129 salas de lectura.',
      '27 agrupaciones de Vientos Musicales (1,885 NNAJ).',
      '3.9 millones de participaciones acumuladas en el periodo.'
    ],

    // Desglose de metas institucionales por Dirección General (Informe de Resultados 2024-2026)
    direccionesResumen: [
      {
        direccion: 'DIRECCIÓN GENERAL DE MUSEOS, ARTES VISUALES Y EXPOSICIONES',
        proyectos: ['PB3572', 'QC4040', 'QC3939'],
        visitantes2024: 490350,
        visitantes2025: 602389,
        variacionPct: 22.85,
        destacados: 'Incremento de 22.8% en visitantes en 2025. Crecimiento de 51% en salas permanentes.'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE EDITORIAL Y PUBLICACIONES',
        proyectos: ['PB3501', 'PB3573', 'QC4055', 'QC4057', 'QC4059'],
        metas2024: 12,
        metas2025: 15,
        metas2026: 6,
        destacados: 'Priorización de circulación del libro, ferias internacionales y librería digital.'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE PRODUCCIÓN ARTÍSTICA',
        proyectos: ['PB3569', 'PB3570', 'PB3574', 'QC4053', 'QC4143'],
        destacados: 'Fortalecimiento de la Banda de Música del Estado, festivales de música barroca y artes vivas.'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE FORUM',
        proyectos: ['PB3571'],
        recintos: ['Teatro del Bicentenario', 'Auditorio Mateo Herrera', 'Calzada de las Artes'],
        destacados: 'Ópera, música de cámara, convocatorias de artes escénicas y programas de inclusión comunitaria.'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE VINCULACIÓN Y DESARROLLO CULTURAL',
        proyectos: ['PB3562', 'PB3563', 'PB3564', 'QB4039', 'QC3232', 'QC4098'],
        destacados: 'Atención a personas privadas de su libertad (CEPRERESOs), bibliotecas públicas y lazos creativos.'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE FORMACIÓN E INVESTIGACIÓN',
        proyectos: ['PB3567', 'PB3568', 'QC4047', 'QC4049', 'QC4051', 'QC4061', 'QC4062'],
        destacados: 'CEARG, 27 agrupaciones de Vientos Musicales, PACMYC, PECDA y Encuentro de Creadores.'
      },
      {
        direccion: 'DIRECCIÓN GENERAL DE PATRIMONIO CULTURAL',
        proyectos: ['PB3565', 'PB3566', 'QC4042', 'QC4043', 'QC4044', 'QC4046', 'QC4048'],
        destacados: 'Preservación de zonas arqueológicas (Cañada de la Virgen, Peralta, Plazuelas) y centros históricos.'
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DatosAnuales;
  } else {
    global.DatosAnuales = DatosAnuales;
  }
})(typeof window !== 'undefined' ? window : globalThis);
