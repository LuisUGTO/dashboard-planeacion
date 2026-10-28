# Conciliación de Adriana Escamilla en formato de la base

Este Excel es una copia para revisar los siete IDs del CSV compartido, obtenida de la base conectada durante la revisión. Tiene 7 filas en Registro_Actividades, 13 en Registro_Territorio, 8 en Registro_Poblacion y ninguna evidencia vinculada para esos IDs. Cada hoja conserva las columnas vigentes y su orden en la base (A:BN, A:L, A:H y A:E).

**No es un lote de altas nuevas.** No se generaron IDs ni folios, no se cambiaron cifras y no se añadieron filas de población o evidencia donde no existían. Para corregir, localizar el mismo ID en la base y actualizar solo sus celdas. No pegar estas filas al final como si fueran nuevas; las filas filtradas pueden estar separadas en la base.

Los bloques antiguos posteriores a las columnas vigentes no se exportan. Las columnas de diagnóstico no se mezclan dentro de las cuatro hojas operativas. Cualquier corrección se debe contrastar de nuevo con la base actual porque otros usuarios pueden seguir capturando.

## Alertas del CSV original

| ID existente | Actividad | Qué revisar |
|---|---|---|
| ACT-SCLE86988 | Presentación en Conmemoración a pacientes Oncológicas, mamás de Oncopedriatría, Embarazas, Lactantes y otras especialidades | Localidad sin especificar en territorio · Territorio 235 y población 5: diferencia 230 · Sin archivo de evidencia vinculado |
| ACT-SCOG94069 | Formación musical a NNAJ de Bandas, Orquestas y Camerata del Programa Vientos Musicales para la Gente | Completar: sede · Localidad sin especificar en territorio · Territorio 115 y población 9: diferencia 106 · Sin archivo de evidencia vinculado · 100 o más sesiones: confirmar que no sea cantidad de talleres; no implica un error por sí solo |
| ACT-SCIN39392 | Formación musical a NNAJ en Ensambles Corales del Programa Vientos Musicales para la Gente | Completar: sede · Sin registro de población · Sin archivo de evidencia vinculado · 100 o más sesiones: confirmar que no sea cantidad de talleres; no implica un error por sí solo |
| ACT-SCZR98192 | Presentación del Encuentro de Orquestas | Completar: sede · Localidad sin especificar en territorio · Sin registro de población · Sin archivo de evidencia vinculado |
| ACT-SCLJ26393 | Presentaciones musicales de cierre primer semestre - meta 1 | Sin registro de población · Sin archivo de evidencia vinculado |
| ACT-SCDB29664 | Presentaciones musicales de cierre primer semestre - meta 2 | Sin registro de población · Sin archivo de evidencia vinculado |
| ACT-SCPP14762 | Concierto en la presentación del programa del 54 Festival Internacional Cervantino | Población sin desglose completo entre participación y acceso · Sin archivo de evidencia vinculado |

## Encuentro de Orquestas

- ACT-SCZR98192, de Adriana Escamilla: 20–21 de junio de 2026, QC4047, con Academia Renacimiento y Trinitate Philarmonia / Teatro Juárez como sede reportada.
- ACT-SCDZ64261, de machagoya@guanajuato.gob.mx: Encuentro de Orquestas Cedro UP y Vientos Musicales, 21 de junio de 2026, Teatro Juárez, PB3574.

Hay una posible coincidencia del 21 de junio, pero el primer registro comprende un periodo y sedes más amplios. Confirmar qué actividad y público corresponden al 20 y cuáles al 21; la misma función y asistentes no deben sumarse dos veces solo por tener otra área o meta. No se borró ni fusionó ninguno de los dos registros.

## Conservatorio

El esquema mensual por meta permite conservar cantidades de capacitaciones, audiciones y conciertos, con sesiones separadas cuando existan. Antes de capturar concentrados, falta habilitar y validar los campos Tipo_Registro y Cantidad_Actividades en la base/AppSheet y acordar el periodo que corresponde al apoyo. No se encontraron menciones al Conservatorio en los nombres del catálogo de alineación consultado; hay que validar cuáles son sus tres metas antes de asignar una por semejanza.

Fuera del estado y Fuera del país sí están en el catálogo actual de municipios. No se comprobó en esta tarea la sincronización de cada dispositivo con AppSheet.

## Cambios locales del exportador

El tablero permite escoger Actividades, Territorio, Población, Evidencias o el resumen de alertas. La descarga aplica los filtros de usuario, búsqueda, periodo y tipo de alerta; los hijos se toman completos para los IDs seleccionados. Se conservan valores originales de la fuente y no se exporta Fecha_Inicio_ISO ni otras columnas de cálculo visual. CSV en UTF-8 con marca para Excel. Si no hay hijos en una hoja, se informa y se deshabilita su descarga; no se inventan filas.

Validado con 17 pruebas y con una descarga real de Actividades en el navegador: 66 columnas, siete filas y los siete IDs del archivo revisado. La modificación del tablero está local, pendiente de publicación. No se modificó la base en línea.