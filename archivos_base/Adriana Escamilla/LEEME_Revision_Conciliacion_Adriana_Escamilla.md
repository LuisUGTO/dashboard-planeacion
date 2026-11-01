# Conciliación de Adriana Escamilla en formato de la base

## Seguimiento recuperado de WhatsApp — 31/10/2026

Se leyeron `chat.txt` y `chat.md` (mensajes del 1 al 29/10). Se conserva solo el contenido técnico; las exportaciones completas se eliminan por instrucción del usuario. No hubo lectura ni escritura de producción en este contraste.

- El 7/10 Luis comunicó haber agregado Centro de las Artes de Guanajuato y selección múltiple de espacios; son cambios históricos comunicados, no configuración AppSheet comprobada hoy. La solicitud de incluir Capacitación y otros ajustes de municipios requiere verificar la configuración real, sin inferir su implementación individual de una respuesta genérica.
- El 27/10 Adriana confirmó que del Conservatorio de Música de Celaya es enlace y no dispone de sesiones. Se acordaron concentrados por meta y mes para capacitaciones, audiciones y conciertos, con asistentes y cantidad realizada separados de sesiones. Los ejemplos de tres capacitaciones/diez audiciones no son cifras autorizadas para cargar. Siguen pendientes las tres metas oficiales y el periodo atribuible al apoyo recibido a mediados de año.
- El campo de cantidad ya consta como añadido a Sheets en el informe de Adriana Ugalde del 29/10; verificar su reconocimiento/formulario en AppSheet antes de capturar. Esto actualiza la condición histórica descrita más abajo, sin resolver las metas del Conservatorio.
- Sigue sin resolverse en el chat la coincidencia entre Encuentro de Orquestas del 20–21/06 y el registro PB3574 del 21/06 en Teatro Juárez. Distinguir funciones y públicos; no borrar/fusionar por compartir nombre.
- El 29/10 se acordó conservar el desglose general por edad/género ya capturado, siempre que represente el mismo periodo y actividades. Ese desglose corresponde al total de la actividad y **no identifica población por municipio**; hacerlo requiere ajuste de modelo/formulario.
- Para el folio **SC-261007-060154**, Adriana solicitó retirar **Apaseo el Grande y Cuerámaro**. Tras una discrepancia inicial y capturas omitidas, Luis comunicó el 29/10 a las 15:56 que retiró Apaseo el Grande y a las 20:21 que también retiró Cuerámaro. Registrar como corrección histórica comunicada; comprobar folio/IDs e hijos vigentes antes de otra intervención. No repetir eliminaciones sin revisar. Las imágenes omitidas no permiten reconstruir qué fila cambió.
- La consulta de Drive fue un mensaje al chat equivocado, según aclaró Adriana; no constituye una solicitud de compartir carpetas de este proyecto.

## Revisión original del 27/10

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
