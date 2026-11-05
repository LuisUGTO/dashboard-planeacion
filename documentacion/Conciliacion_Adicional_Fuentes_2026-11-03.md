# Conciliación adicional con fuentes existentes — 03/11/2026

**Estado: aplicada y verificada en la DB.** Autorización de Luis: resolver discrepancias y coincidencias con la información disponible, sin otra solicitud al equipo. No se borraron ni fusionaron por similitud; no se cambiaron los detectores para reducir artificialmente los contadores. Sin modificaciones de código, commit, push o publicación.

## Resultado comparable

| Indicador | Antes de esta operación | Después |
|---|---:|---:|
| Cifras discrepantes | 72 | 54 |
| Posible duplicación | 286 | 284 |
| Revisar cantidades | 67 | 66 |
| Registros con alertas o historial | 1380 | 1378 |

Se resolvieron **18 discrepancias**, sin introducir nuevas discrepancias según el auditor actual. El contador general no baja en la misma proporción: un registro puede conservar faltantes, evidencia o historial. Las tarjetas se solapan y no deben sumarse.

Al aplicar únicamente inicio enero–septiembre, conservando los inicios desconocidos como hace el tablero: discrepancias **67→49**, coincidencias **284→282**. No comparar estos números con una pantalla filtrada a todo 2026 o con otros filtros.

## Doce registros de formación

Se contrastaron los totales de Personas atendidas y de concluyentes, los desgloses por sexo, el personal docente expresamente identificado en la matriz CEARG y la participación ya declarada en territorio. Se aceptaron solo correspondencias inequívocas. La población anterior correspondía al alumnado y omitía docentes ya incluidos en territorio.

Se preservaron IDs, edades, género y cantidades existentes del alumnado. Se añadieron docentes con cantidad respaldada y Población General/género no informado; no se dedujo género de sus nombres. En cuatro casos la fuente distingue atendidos y concluyentes: se añadieron las diferencias explícitas por sexo como Población General, sin inventar edad.

El criterio final de roles es el de la documentación nativa de AppSheet, p.106: tomar un taller es participación activa. Alumnado y docentes de estos doce procesos quedan en participación; acceso0. No se conserva como criterio final el reparto territorial previo que colocaba al alumnado en acceso. La normalización intermedia y su corrección están respaldadas de forma privada.

| ID | Fuente CEARG (pestaña/fila) | Alumnado atendido | Docentes reportados | Total conciliado |
|---|---|---:|---:|---:|
| ACT-SCSA90746 | JUNIO!fila 8 | 7 | 2 | 9 |
| ACT-SCJW46062 | ABRIL!fila 12 | 19 | 1 | 20 |
| ACT-SCHO27779 | ABRIL!fila 13 | 12 | 1 | 13 |
| ACT-SCSU96183 | JUNIO!fila 7 | 6 | 1 | 7 |
| ACT-SCTS87185 | FEBRERO!fila 7 | 29 | 1 | 30 |
| ACT-SCRS96271 | ABRIL!fila 7 | 26 | 1 | 27 |
| ACT-SCEV04930 | SEPTIEMBRE!fila 9 | 15 | 1 | 16 |
| ACT-SCFX97585 | SEPTIEMBRE!fila 10 | 14 | 5 | 19 |
| ACT-SCWB12949 | MARZO!fila 10 | 16 | 3 | 19 |
| ACT-SCPE79917 | MARZO!fila 8 | 18 | 1 | 19 |
| ACT-SCLV97219 | ABRIL!fila 11 | 16 | 2 | 18 |
| ACT-SCJU55686 | SEPTIEMBRE!fila 15 | 18 | 1 | 19 |

Fuentes: matriz Actividades Enero-Septiembre CEARG.xlsx y campos operativos vigentes. No se importaron cantidades de talleres desde sesiones, ni se usaron columnas retiradas.

## Cinco totales globales repetidos por grupo

La DB tenía el total completo del evento en cada fila demográfica. Se comprobó el patrón exacto: total de fila=total territorial y acceso de fila=total global menos participación individual. La documentación nativa pp.107–108 y119 describe esas fórmulas; el acceso no es una medición independiente en ese patrón.

Se conservaron las cantidades individuales de participación y sus categorías originales. Se corrigió cada total de fila a esa participación; el acceso residual global se conservó por separado como Población General, sin repartirlo por edades o género. Donde territorio no tenía participación, se completó con la suma de participaciones detalladas existentes y se recalculó el complemento.

| Actividad / ID | Suma demográfica anterior | Total correcto conservado | Participación | Acceso |
|---|---:|---:|---:|---:|
| Cocina del Noreste / ACT-SCWH81648 | 1512 | 252 | 84 | 168 |
| Máscaras de La Judea / ACT-SCES26665 | 168 | 42 | 18 | 24 |
| Coloquio, pastorela y torito / ACT-SCPI11207 | 14 | 7 | 6 | 1 |
| Máscaras tradicionales de patol / ACT-SCFU79713 | 55 | 11 | 11 | 0 |
| Dulces Regionales / ACT-SCPP90088 | 150 | 25 | 25 | 0 |

No se dividieron totales proporcionalmente ni se borraron filas de población. Se corrigió la repetición aritmética conservando los IDs y las participaciones capturadas.

## Soraya: fechas de septiembre y evento confirmado

**Corrección del informe anterior:** las respuestas21,24 y25 estaban indebidamente apartadas como octubre. Sus inicios son24,26 y25 de septiembre. Se incorporaron:
- Dibujo/Bernardo Gómez Pimienta: población general353, ya confirmada en territorio. Su fecha final anterior al inicio sigue pendiente; no se inventó otra fecha.
- Visita libre: total5 y población general5. No se inventó municipio.
- Viernes libre de clases: total15 y participación15; acceso residual0. Esta era la discrepancia número18 resuelta.

Respuesta154, MISMA: inauguración Manuel Álvarez Bravo del30/04 con40 asistentes. Se conservó ACT-SCVU78547 (captura de exposición/meta91) y se marcó ACT-SCUZ80082 como sustituida mediante referencia explícita. Se conservaron las metas originales y todos los hijos del historial; no se reclasificó la segunda captura ni se volvió a sumar público. La coincidencia queda resuelta por la confirmación del área, no por el nombre similar.

## Verificación y límites

- Lectura posterior de rangos operativos; **cero valores inesperados** frente al plan y las correcciones finales.
- Metadatos presentes en166 celdas comparados: formatos, validaciones y chips sin diferencias; se revisaron218 posiciones afectadas.
- **24 poblaciones nuevas**, A2472:H2495. Sin altas de actividades ni territorio en esta operación.
- IDs originales conservados, sin claves duplicadas nuevas ni nuevos hijos huérfanos.
- **42 pruebas pasaron**: node --test tests/calidad-datos.test.cjs tests/tablero.test.cjs tests/ficha-actividad.test.cjs.
- No se verificó visualmente el contador remoto ni se alteró AppSheet. La documentación de fórmulas consultada es la disponible del21/10; las correcciones actuales se comprobaron directamente en la DB.
- Respaldos, lecturas nativas y planes en respaldo/privado_cargas_2026-11-03, excluidos de Git. Sin datos personales nuevos en este informe.
- No se leyeron ni escribieron BO+ de actividades, M+ de territorio ni Dashboard_Master.

## Casos que permanecen abiertos

Quedan54 diferencias en el conjunto completo: fuentes con totales/desgloses incompatibles, atendidos frente a concluyentes que no permiten una correspondencia segura, y registros sin respaldo suficiente. No se escogió el mayor o menor por conveniencia.

Las284 coincidencias restantes no son284 duplicados demostrados. Predominan nombres genéricos de visitas con mismo día/sede y sin horario o grupo identificable. Algunas respuestas dicen diferentes fechas, pero el archivo repite la misma fecha; esa contradicción se conserva. No se borró ni excluyó una visita por semejanza o por tener un público distinto.

No se certifica completitud global. El modelo de los60 concentrados mensuales y la separación de alcance digital/presencial de Edith siguen pendientes, fuera de las correcciones inequívocas aquí aplicadas. No se envió ninguna solicitud al equipo.

