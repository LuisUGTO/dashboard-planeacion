# Respuestas de Edith — 03/11/2026

**Estado: revisado y aclaraciones aplicadas; sin nuevas actividades ni cambios numéricos.** Luis informó la recepción del archivo contestado. Se preservaron sus fuentes y los seis IDs existentes. No equivale a información conciliada al 100%.

Fuente: `Respuestas_Edith_2026-11-01_contestado.xlsx`, Pendientes filas 7:13. SHA-256 `f4edc6134f071bf121db2d005ffe1f61ab671aaa133b2eb5c78f9fc36c404dfc`. Las siete respuestas dicen Atendido; se revisó su contenido, sin convertir ese estado en certificación de cifras o cierre automático.

## Información recuperada

Las cinco respuestas por sitio contienen los nueve meses: **45 desgloses mensuales**, distinguiendo presencial y una cifra denominada virtual. Ya no es necesario pedirle de nuevo toda la tabla mensual. El original no se modificó y no se trasladaron visitantes a sesiones. Los cinco campos Total_Sesiones vacíos desde el 01/11 permanecen así: la respuesta no aporta sesiones reales.

| Sitio | Presencial, suma enero–septiembre | Digital, suma mensual transcrita | Digital, cierre escrito | Total combinado escrito |
|---|---:|---:|---:|---:|
| Cañada de la Virgen | 7341 | 62054 | 62052 | 69395 |
| El Cóporo | 3783 | 53869 | 53869 | 57652 |
| Plazuelas | 6072 | 62314 | 62313 | 68385 |
| Peralta | 7816 | 53546 | 53546 | 61362 |
| Arroyo Seco | 1649 | 43163 | 43163 | 44812 |

Los presenciales mensuales suman **26661 asistencias reportadas**, sin afirmar personas únicas. Cañada en abril declara expresamente ausencia de atención presencial por cierre, por eso se identifica cero presencial en ese mes; no se dedujo de un vacío. Los demás meses se transcriben de sus cifras explícitas.

## Dos diferencias puntuales que siguen abiertas

1. **Cañada:** los nueve datos digitales suman **62054**, pero el cierre dice **62052**. Los presenciales 7341 más la suma digital mensual dan 69395, coincidente con el total combinado escrito y la DB. No imponer 62054 como corrección oficial de la frase anual sin confirmar.
2. **Plazuelas, mayo:** **397 + 7919 = 8316**, frente al total escrito **8315**. La suma digital mensual da 62314 y el cierre 62313. No decidir por intuición si debe corregirse el presencial, digital o total.

Los otros tres sitios tienen sumas mensuales concordantes con sus cierres escritos. Los cinco totales combinados ya estaban en la DB; volver a cargarlos como filas nuevas duplicaría los concentrados.

## Qué significa lo virtual

Edith aclara que, después de la baja de la página exclusiva y ante la falta de recorridos virtuales, se están considerando **alcance, comentarios y reacciones en redes de publicaciones de las zonas**. Dice que se reportan por las cinco zonas/Q y el total en un P. Esto aclara el origen, pero no acredita personas atendidas, visitantes únicos ni que alcance, comentarios y reacciones sean cantidades aditivas entre sí o entre zonas.

Persisten cifras iguales en varios sitios/meses, por ejemplo 4624 en enero para las cinco zonas. No repartirlas, deduplicarlas por coincidencia ni sumarlas como personas sin precisar el alcance de medición. La corrección requiere separar atención presencial de métricas digitales en la representación operativa y los indicadores. No hay columna aprobada de métricas digitales dentro de A:BN; no utilizar columnas históricas ni esconder el alcance dentro de población o territorio como si fueran personas. Este diseño debe resolverse antes de una nueva carga dependiente de la distinción.

## Captura anterior de Cañada

La respuesta identifica **ACT-SCBV52724**, enero–junio, como un ejercicio de alimentación de la plataforma, sustituido por **ACT-SCQZ00697**, enero–septiembre, y propone retirarlo. Queda **confirmado el solapamiento**, antes solo sospechado.

No se ejecutó la eliminación sugerida en el adjunto: se trata como una aclaración de origen y no como autorización directa del usuario para borrar datos. Se conservan ID, folio, territorio y las dos poblaciones históricas. Se agregó la aclaración en N331. **La anotación por sí sola no excluye automáticamente del tablero ese registro ni sus cifras**; queda pendiente implementar una exclusión reversible de registro sustituido o acordar su retiro con trazabilidad. No marcarlo como actividad cancelada: la atención real no se canceló, la captura fue repetida.

## Escritura y comprobación

Se actualizaron exclusivamente las descripciones **N331, N604:N605 y N607:N609** de Registro_Actividades, incorporando procedencia, cifras presenciales reportadas, naturaleza de la métrica digital, dos diferencias y solapamiento confirmado. Se conserva la descripción anterior completa dentro de cada texto. No cambian cantidades, fechas, sesiones, territorios, población, evidencia, catálogos o esquema de AppSheet. No hubo altas de actividades ni eliminación de registros.

Lectura previa de metadatos, respaldo privado, inspección de fórmulas/validaciones/chips y relectura inmediata antes de escribir; seis actualizaciones con máscara exclusiva userEnteredValue. Lectura nativa posterior de celdas y vecinas: **cero diferencias fuera del plan en formato, validación, chips o valores**. Relectura completa operativa de actividades A:BN, territorio A:L y población A:H: únicamente las seis descripciones previstas cambian. Se respetan los límites y Dashboard_Master inutilizada.

Respaldos excluidos de Git: `respaldo/privado_cargas_2026-11-03/edith_respuestas_before.json` y `edith_respuestas_after.json`; control por respuesta en esta carpeta. Sin cambios de código, pruebas de lógica, mensajes, commits, push o publicación. Revisión visual no realizada; comprobación de datos y estructura por API nativa. El contador de conciliación no debe darse por reducido por estas anotaciones.

## Seguimiento sencillo

No pedirle rehacer su archivo. Solo precisar las dos diferencias anteriores y, para el componente digital, si el mismo alcance se reporta en varias zonas y si puede separar alcance, comentarios y reacciones. La representación de métricas y la exclusión con trazabilidad de la captura sustituida corresponden al trabajo interno.
