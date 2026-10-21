================================================================================
              PULSO Q — CONSULTORÍA EN SISTEMAS Y GESTIÓN PÚBLICA
       PROYECTO: SISTEMA INTEGRAL DE INFORMACIÓN Y PLANEACIÓN CULTURAL
               SECRETARÍA DE CULTURA — GOBIERNO DE GUANAJUATO
================================================================================

--------------------------------------------------------------------------------
ENTREGABLE 1: DIAGNÓSTICO DE INFORMACIÓN INSTITUCIONAL
--------------------------------------------------------------------------------
1. Ecosistema de Datos Actual:
   - 7 Direcciones Generales y Unidades Operativas identificadas como fuentes primarias.
   - Diagnóstico de madurez heterogénea: coexisten registros avanzados (Google Forms/Sheets)
     con captura análoga en papel/bitácoras (Zonas Arqueológicas/CAV sin conectividad) 
     y reportes narrativos cualitativos en Word/PowerPoint (Museos y Teatros).

2. Cuellos de Botella Críticos Identificados:
   - Recaptura y consolidación manual: hasta 46 archivos de Excel dispersos que deben 
     unificarse periódicamente a mano en la Dirección de Planeación.
   - Desalineación de conteo: variación detectada entre el registro territorial 
     (349,183 asistencias) vs. desglose demográfico (304,626 personas atendidas), 
     originada por 10 actividades con registro incompleto en origen.
   - Riesgo de duplicidad: conteo de accesos/asistencias repetidas contabilizadas como 
     beneficiarios únicos, distorsionando el impacto social real reportado.

--------------------------------------------------------------------------------
ENTREGABLE 2: MODELO DE INFORMACIÓN INSTITUCIONAL
--------------------------------------------------------------------------------
1. Arquitectura Relacional Normalizada:
   - Entidad Central: Registro_Actividades (Datos generales del evento, folio, responsable,
     fechas, costos e inversión contratada).
   - Entidades Satélite (Relación 1 a N con integridad de llaves del 100%):
     * Registro_Territorio: Vinculación municipal, comunidad, sede y marcaje ZAP.
     * Registro_Poblacion: Desglose por grupo etario, género y grupos prioritarios.
     * Registro_Evidencia: Trazabilidad documental (fotografía, oficios, carteleras, PPTX).

2. Gobernanza mediante 18 Catálogos Maestros Homologados:
   - Eliminación de errores tipográficos mediante listas cerradas de validación:
     * Cat_Municipio: 46 municipios oficiales con claves INEGI y coordenadas geográficas.
     * Cat_Recintos y Cat_Tipo_Espacio: Estandarización de museos, teatros y foros.
     * Cat_Disciplina y Cat_Actividades: Clasificación unívoca del quehacer cultural.
     * Cat_Alineacion: Mapeo de metas con el Programa de Gobierno 2024-2030 (Ejes de 
       Igualdad, Tranquilidad, Vocación y Prosperidad).

--------------------------------------------------------------------------------
ENTREGABLE 4: MAPA DE PROCESOS Y FLUJOS DE CAPTURA
--------------------------------------------------------------------------------
1. Flujo Operativo en 4 Fases:
   Fase 1: Captura en Origen (Unidades Operativas)
     - Interfaz simplificada en AppSheet (móvil y web) con validaciones en tiempo real.
     - Protocolo para zonas sin cobertura: bitácora estandarizada protegida para carga diferida.

   Fase 2: Procesamiento e Integridad Referencial (Motor de Datos)
     - Ingesta automática a Google Sheets normalizado (sin intervención manual de copiar/pegar).
     - Validación obligatoria: cada actividad debe cuadrar Territorialmente y Demográficamente.

   Fase 3: Inteligencia Directiva y Monitoreo (Tablero HTML)
     - Consulta en tiempo real de avance de metas institucionales, cobertura de municipios (25/46)
       y atención a Zonas de Atención Prioritaria (ZAP).

   Fase 4: Salida Ejecutiva y Rendición de Cuentas (Exportación Inmediata)
     - Generación automatizada de presentaciones ejecutivas (.pptx) en formato 16:9 
       con gráficas vectoriales y datos filtrados en un solo clic para juntas de gabinete.
================================================================================