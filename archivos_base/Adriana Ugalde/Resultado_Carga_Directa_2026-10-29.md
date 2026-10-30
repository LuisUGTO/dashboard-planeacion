# Resultado de la actualización directa — Adriana Ugalde

Fecha: 29 de octubre de 2026. Corte: enero–septiembre de 2026.

Base actualizada: [Google Sheets](https://docs.google.com/spreadsheets/d/1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4/edit). Responsable: augalde@guanajuato.gob.mx.

## Qué quedó cargado

- Se corrigieron los cinco registros existentes conservando sus IDs y folios y se añadieron 55 registros: ahora hay **60 concentrados mensuales**, correspondientes a 13 metas.
- Cada mes conserva la cantidad y población de su propia fuente; no se repartieron totales en partes iguales ni se inventaron días de realización. Las fechas inicial y final delimitan el mes del concentrado.
- Se agregaron 60 registros de territorio con **Cobertura estatal**, sin inventar distribución en los 46 municipios.
- Se añadieron 53 filas de población y se revisaron cuatro existentes. Solo se modificó el registro de danza: abril queda en 88 y agosto en 248, según la matriz.
- La población se registra como **Población General / Dato global**, sin inventar edad ni género. Participación y acceso quedan pendientes cuando no existe su desglose.
- Las cantidades de talleres, visitas, apoyos, etcétera se guardaron en **Cantidad_Actividades**; **Total_Sesiones** permanece vacío cuando la fuente no separa sesiones. Los agentes no se repitieron artificialmente cada mes.

## Cambios de catálogo y estructura

- Se añadieron al final de Registro_Actividades las columnas BU **Tipo_Registro** y BV **Cantidad_Actividades**, conservando las columnas anteriores.
- Se añadió **Cobertura estatal** al catálogo de municipios y la pareja **Multidisciplinario / Multidisciplinario** al de disciplinas. Esta cobertura no se cuenta como uno de los 46 municipios.
- Se actualizaron 121 celdas de las metas 50–62 del catálogo con alineación, relaciones de catálogo y metas anuales respaldadas por las matrices. No se asignó un eje transversal sin confirmación.

## Resumen por meta

La cantidad es la unidad reportada de cada meta; no debe interpretarse toda como talleres, sesiones o eventos únicos.

| ID de meta | Meta | Meses con avance cargados | Cantidad reportada | Unidad |
|---|---|---|---:|---|
| 50 | Cursos y talleres para promotores culturales e instructores de casas de la cultura | 2, 3, 4, 5, 6, 7, 8, 9 | 102 | Cursos y talleres realizados |
| 51 | Talleres de educación artística y cultural no formales impartidos en casas de cultura y salones culturales | 1, 2, 3, 4, 5, 6, 7, 8, 9 | 4,194 | Talleres realizados |
| 52 | Cursos y talleres de formación lectora para bibliotecarios, niños narradores y escritores, padres de familia y promotores de lectura | 2, 3, 5, 6, 7, 8 | 71 | Cursos y talleres realizados |
| 53 | Talleres de seguimiento a la implementación del programa curricular para la asignatura de artes en la educación básica | 9 | 3 | Talleres realizados |
| 54 | Capacitaciones en danza folclórica dirigido a directores, maestros y ejecutantes del estado de Guanajuato | 4, 8 | 2 | Capacitaciones realizadas |
| 55 | Apoyos especiales a organismos culturales municipales | 3, 4, 5, 7 | 72 | Apoyos otorgados |
| 56 | Actividades colaborativas de la red de identidad cultura y memoria | 1, 2, 3, 4, 5, 6, 7, 8, 9 | 437 | Acciones realizadas |
| 57 | Visitas escolares a zonas arqueológicas y recintos culturales del estado para impulsar aprendizajes significativos en alumnos de educación básica | 8 | 20 | Visitas realizadas |
| 58 | Actividades de promoción y animación lectora para público en general | 2, 3, 4, 5, 6, 7, 8 | 2,615 | Actividades realizadas |
| 59 | Encuentros y capacitaciones del personal bibliotecario incorporado a la red estatal de bibliotecas públicas del estado de Guanajuato | 2, 4, 5, 6, 7, 8 | 18 | Encuentros y capacitaciones realizadas |
| 60 | Proyectos culturales interinstitucionales y comunitarios dirigidos a públicos vulnerables | 6 | 1 | Proyectos realizados |
| 62 | Encuentros de lectores y círculos de lectura para usuarios de la red estatal de bibliotecas públicas | 2, 3, 5, 6, 7, 8 | 50 | Encuentros y círculos realizados |

## Pendientes que continúan visibles

1. **Animación lectora, mayo:** no se incorporó como definitivo el dato de dos beneficiarios que Adriana pidió revisar.
2. **Animación lectora, junio:** se apartó la población por el posible arrastre de mayo; hace falta confirmar la cifra que corresponde a cada mes.
3. **Visitas escolares, agosto:** se cargaron las 20 visitas; la población sigue pendiente de listas de asistencia. El cero anterior no se trató como ausencia confirmada de público.
4. **QC4098:** diez avances de julio/septiembre se mantienen fuera de la carga porque la plantilla también menciona Q3688. Confirmar la clave oficial y la meta antes de agregarlos.
5. Completar sesiones, agentes culturales, sedes, evidencias y ejes transversales cuando el área disponga del dato. No se sustituyeron por ceros o selecciones arbitrarias.

## Verificación

Se verificaron 4,960 celdas de registros mediante lectura posterior del Sheet y también la escritura de los catálogos. Se comprobó que se conservaron las filas preexistentes y sus relaciones, incluso donde fue necesario insertar filas antes del final de población.

En el dashboard público, al seleccionar augalde@guanajuato.gob.mx, se observan **60 registros con alertas**, **0 cifras discrepantes**, **0 alertas de cantidades** y **0 alertas de posible duplicación**. Los 60 siguen con datos por completar y sin evidencia vinculada. Esto no certifica que toda la información esté completa; las diferencias no son comparables en las cifras de población pendientes.

Los totales de conciliación no tienen por qué bajar al incorporar registros mensuales que aún carecen de información. La finalidad es reflejar los pendientes reales.

Las dos nuevas columnas ya existen en Google Sheets y el dashboard las lee. **No se ha regenerado ni modificado el esquema de AppSheet**; será necesario revisar allí su reconocimiento y las reglas de campos obligatorios para futuras ediciones desde formularios.

Se guardó el respaldo previo en esta misma carpeta. El archivo JSON de trazabilidad conserva la fuente, el mes y los IDs de cada registro.
