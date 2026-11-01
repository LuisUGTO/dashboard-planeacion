# Trabajo posible sin consultar a las áreas — 01/11/2026

**Resultado posterior, con autorización expresa de Luis:** las dos candidatas de Marcelina ya fueron cargadas y verificadas; se repuso un territorio de Soraya, se corrigieron 18 celdas numéricas y cinco sesiones erróneas de Edith. Se completó el inventario de 23 libros sin contactar al equipo. Consultar [resultado ejecutado](Resultado_Cargas_y_Pendientes_2026-11-01.md). El texto siguiente conserva la fase de diagnóstico previa y no expresa el estado final de esas acciones.

El usuario solicita avanzar sin contactar a Marce/equipo hasta el martes 03/11. No se programaron ni enviaron mensajes. Se mantiene corte enero–septiembre 2026, actividades A:BN, territorio A:L y Dashboard_Master fuera de uso. Este diagnóstico no realiza escrituras externas.

## Prioridad 1: septiembre de Marcelina

Se inspeccionaron las hojas del Excel `archivos_base/Marcelina/resumen mio, DGPA.xlsx`. La hoja principal `programa ene-ago 2026` no contiene fechas de septiembre; **sí hay diez funciones de septiembre en `julio - sep`, filas 86:95, repetidas en `Hoja3`, filas 3:12**. Sus fechas van del 2 al 15/09. No sumar ambos bloques ni dar por probado septiembre completo, especialmente la segunda mitad del mes.

La comparación inicial con los registros actuales no encontró coincidencias de título normalizado y fecha exacta para esas diez funciones. Esto es un filtro de candidatas, no prueba de ausencia de duplicaciones: comprobar variantes de título, horario, sede, artista y periodos/agrupaciones antes de altas. La DB sigue capturándose; relectura inmediata antes de escribir.

| Función | Fecha | Información disponible | Tratamiento siguiente |
|---|---|---|---|
| Un viaje con ritmo, ESCENAS AL VUELO | 04/09 | QC4142; 335 mujeres + 273 hombres = 608; sede y municipio | Candidata prioritaria: revisar meta concreta, identidad y demás criterios; no asignar edades por sexo desde grupos ambiguos |
| Viva la Ópera | 05/09 | PB3574; 76 mujeres + 42 hombres = 118; sede y municipio | Candidata prioritaria: revisar meta concreta y posibles capturas con variantes |
| El Ogrito, ESCENAS AL VUELO | 04/09 | QC4142, población cero y sin desglose de edades | Revisar si el cero es pendiente; no certificar ausencia de público |
| Otras siete funciones | 02–15/09 | Clave ausente o N/A | Comparar contenido con metas vigentes; no asignar por simple pertenencia a DGPA |

La hoja Hoja3 contiene también programación de octubre–diciembre, fuera del corte. No copiar todas sus filas. Ya no es necesario pedir a Marcelina que vuelva a enviar el bloque 2–15/09 que está aquí; si hace falta una versión definitiva o la segunda mitad de septiembre, pedirlo de manera específica después de revisar lo existente.

## Prioridad 2: Fátima

Se volvió a leer la matriz en vivo, `Actividades 2026!A1:AP220`, con contenido hasta fila 207, y el inventario vigente de actividades de la DB. La clasificación previa de 131 filas apartadas sigue siendo punto de partida, no número de altas faltantes: 30 con posible cobertura en ciclos existentes, 47 con meta a confirmar (presentación/feria/encuentro), 18 de otros tipos, 15 talleres, dos sin cantidad, tres con fecha textual y 16 fuera del corte. Algunas dudas de fecha textual se pueden normalizar sin consultar, pero no resuelven tipo/meta o solapamiento.

Ejemplos: Crónicas de la tierra llana II sigue sin cantidad en T111; Pudiera estar sigue sin cantidad en T116 y sin sede. La fecha de ¿Cómo escapar de un bucle temporal? (fila 167) tiene un error de escritura inequívoco de septiembre, pero el tipo es lectura en voz alta; no convertirla automáticamente en presentación editorial ni cargarla como otra actividad si ya está comprendida en una captura agrupada.

Continuar comparación por evento/fecha/sede/ciclo contra lo existente, preparar solo altas con correspondencia defendible y separar correcciones de nuevas filas. Las 53 actividades completadas el 31/10 no se vuelven a importar. No resolver los catorce públicos apartados mediante sumas de edades, ceros supuestos o reparto inventado.

## Prioridad 3: alineación y control de DB

- Usar matriz 2026 de Marce para preparar correspondencias de clave–meta–unidad. No sustituir el catálogo en bloque: existen coincidencias ambiguas y cifras distintas con antecedentes de corrección.
- Inventariar vacíos, referencias sin padre y posibles duplicados por ID/folio/contenido. Corregir únicamente casos respaldados por la fuente y conservar trazabilidad. No borrar/fusionar para reducir alertas.
- Las claves QC4098/Q3688, las tres metas del Conservatorio y los avances ejecutados de Myrna siguen pendientes. No fabricar nuevas metas ni cantidades para habilitar una carga.
- El modelo de concentrados depende históricamente de BU/BV, que el usuario dejó fuera de uso. Resolver su representación antes de nuevos concentrados; no usar sesiones como cantidad de actividades.

## Trabajo paralelo que no depende de respuestas

Se puede preparar una propuesta de la nueva sección DGPA 2025/2026 a partir del PPTX confirmado y de las matrices de referencia, sin modificar el sitio o la DB todavía. Diferenciar diseño de la sección de indicadores calculables con datos operativos. La versión 2027 no se usa para completar 2026.

Resultado de este diagnóstico: hay material para continuar preparación y comprobaciones sin molestar al equipo, especialmente las funciones de septiembre de Marcelina. No se ejecutaron altas, correcciones productivas, cambios de catálogo o eliminaciones en esta revisión. La siguiente carga necesitará respaldo acotado, lectura de fórmulas/validaciones y verificación posterior, igual que la actualización de Fátima.
