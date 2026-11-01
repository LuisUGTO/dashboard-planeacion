# Verificación de cargas contra la base en vivo — 31/10/2026

Se confirmó acceso de lectura mediante conector a [DB_Sistema_Cultura_GTO_V1](https://docs.google.com/spreadsheets/d/1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4/edit). El usuario autoriza continuar el trabajo de carga/corrección directamente en la base y permite dejar evidencias pendientes. Esta consulta fue de diagnóstico, sin escrituras. No se probó permiso de escritura mediante una modificación artificial.

## Alcance de lectura

Metadatos de las 23 pestañas; encabezados de actividades A1:BV1, territorio A1:L1, población A1:H1 y evidencia A1:E1. Para conteos: Registro_Actividades A2:B2260, M2:Q2260 y AL2:AL2260; Registro_Territorio A2:B2252; Registro_Poblacion A2:B2295; Regitro_Evidencia A2:C1061. Se omitieron filas sin clave padre/identificador. No se leen todas las cantidades ni reglas con estos rangos, por lo que existencia de hijos **no certifica completitud, consistencia de cifras ni ausencia de duplicados**.

Se encontraron 1,470 IDs únicos de actividades. Los conteos por usuario son una fotografía de lectura, no un cierre institucional ni prueba de quién creó originalmente cada contenido.

| Frente identificado por usuario de captura | Actividades actuales | Filas de territorio vinculadas | Filas de población vinculadas | Actividades sin fila de población |
|---|---:|---:|---:|---:|
| Adriana Ugalde | 60 | 60 | 57 | 3 |
| Fátima Molinar | 77 | 78 | 3 | 74 |
| Ileana Salazar | 9 | 8 | 12 | 3 |
| Adriana Escamilla | 12 | 61 | 48 | 0 |
| Marcelina / usuario de captura registrado en la guía | 232 | 230 | 540 | 8 |
| Soraya Villegas | 292 | 292 | 277 | 15 |
| CEARG / Claudia Ramírez | 79 | 79 | 241 | 1 |
| Edith / visitantes | 6 | 6 | 7 | 0 |

Se observan además otros usuarios de la base; no se asignan a Myrna sin comprobar su identidad. Hay tres registros de un usuario de Patrimonio sin hijos territoriales ni demográficos, pero su correspondencia con Myrna no está confirmada. No se concluye que Myrna carezca de capturas por no aparecer su nombre en los títulos.

## Comparación exacta con la trazabilidad del 29/10

| Lote | IDs en trazabilidad | IDs presentes ahora | Con fila territorial | Con fila de población |
|---|---:|---:|---:|---:|
| Adriana Ugalde | 60 | 60 | 60 | 57 |
| Fátima, altas editoriales | 67 | 67 | 67 | 0 |
| Ileana, altas parciales | 8 | 8 | 8 | 6 |

Las 67 altas de Fátima no requieren repetirse: falta revisar población desde su matriz en vivo y resolver las restantes actividades apartadas. Su registro adicional respecto de los 76 informados el 29/10 es una presentación del 28/10, capturada el 30/10; no implica que el histórico esté completo. Los totales de Adriana Escamilla también superan el corte antiguo: no usar su archivo de siete IDs como inventario actual exhaustivo ni como lote nuevo.

## Orden para continuar y datos faltantes

1. **Myrna:** analizar el nuevo Excel, identificar responsable/metas y contrastarlo con lo ya capturado. No hay lote verificado de esta matriz todavía; no dar por hecho que todas sus filas sean altas.
2. **Fátima:** usar matriz en vivo para conciliar encabezados y fórmulas, revisar población de las 67 altas y el resto de actividades. No exige recibir el Excel `(20)` para acceder a la fuente. No sumar edades, sexo y grupos prioritarios como personas adicionales ni estimar datos de audios omitidos.
3. **Ileana:** ocho altas parciales comprobadas; quedan veinte filas apartadas y las dos poblaciones pendientes de ese lote. Resolver las siete aclaraciones del chat, no completar ceros por suposición.
4. **Adriana Ugalde:** lote de 60 confirmado; pendiente población mayo/junio de animación lectora y agosto de visitas; QC4098/Q3688 y otros campos del informe. Corregir mismos IDs cuando lleguen respuestas.
5. **Edith:** conciliar registros existentes, virtuales compartidos y posible solapamiento de Cañada antes de nuevas altas. Tener filas de población no resuelve la validez de sus cantidades.
6. **Adriana Escamilla:** validar metas/periodo/cantidades del Conservatorio y coincidencia del Encuentro de Orquestas; revisar estado vigente y ajustes AppSheet. Hay 12 actividades actuales con hijos, sin que eso acredite cierre.
7. **Marcelina, Soraya y CEARG:** cargas previas documentadas; revisar pendientes, coincidencias y cobertura. La verificación histórica registra 229, 292 y cinco IDs de sus lotes respectivamente; esta lectura no repitió la comparación exacta de esos Excel contra la base. Marcelina conserva diferencia de corte agosto/septiembre. La ausencia de chat CEARG no bloquea analizar su Excel.

En la siguiente carga: respaldo acotado de rangos afectados, revisión de fórmulas/validaciones, contraste de IDs/folios y lectura posterior. Las evidencias pueden quedar para después por indicación del usuario; tampoco se inventan territorio o población cuando la fuente no los respalda. No añadir filas hijas vacías únicamente para que todas las pestañas tengan un registro.
