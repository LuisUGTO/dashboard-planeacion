# CEARG: instrucciones para la carga parcial

Responsable: **claudia.ramirezm@guanajuato.gob.mx**. Preparación: 2026-10-26T20:48:33-06:00.

## Alcance

El Excel contiene exactamente las cuatro hojas de la base, con sus columnas originales en el mismo orden. Se prepararon **5 altas nuevas**, **5 registros de territorio** y **13 filas de población**. Regitro_Evidencia solo tiene encabezados porque la fuente no aporta archivos o enlaces. Se apartaron **70 filas**: 38 con coincidencias o posibles relaciones con registros actuales y 32 que requieren aclaración. No se modificaron actividades existentes.

La consulta de la base en línea encontró 1,126 actividades. Se comprobó que los 23 IDs generados y los cinco folios no coincidan con los de esa lectura, la copia local ni las cargas de Marcelina y Soraya ya preparadas. Esta comprobación corresponde al momento de la consulta, no reserva esos valores dentro de AppSheet.

## Cómo usar las cuatro hojas

1. Guardar una copia de seguridad de la base antes de pegar.
2. En Registro_Actividades, copiar únicamente A2:BN6 y pegar como valores debajo del último registro ocupado de la hoja del mismo nombre.
3. En Registro_Territorio, copiar A2:L6.
4. En Registro_Poblacion, copiar A2:H14.
5. Regitro_Evidencia queda sin filas: no copiar encabezados ni crear filas vacías.
6. No sobrescribir registros existentes ni pegar este mismo lote dos veces. Los IDs de las tres hojas deben conservarse juntos.

## Qué queda pendiente incluso en este lote

- El catálogo actual no tiene acciones PG, PEC ni Promesa para las metas PB3567/PB3568 usadas aquí. Se conservan vacías, resaltadas cuando corresponde. Planeación debe indicar esas selecciones.
- La charla de FEBRERO 11 no tiene una subdisciplina identificable. La propuesta Gestión cultural / Cultura comunitaria para la conferencia debe confirmarse.
- El concurso de Alfarería conserva su meta de concursos y 57 personas atendidas. Tipo_Actividad/Actividad y el reparto participación/acceso quedan vacíos: no se convirtió el total de nueve ganadores en participantes ni se eligió una ceremonia de premiación por conveniencia.
- Los grupos prioritarios, ingresos, contratos, apoyos, tipo de asentamiento y ZAP no están informados y no se contestaron con falsos ceros o “No”.
- Una sesión por cada evento de un solo día es el criterio operativo de esta preparación, no una cantidad informada en la columna No. Si hubo varias funciones, Claudia debe corregir ese dato.
- Los dos espectáculos tienen obras de nombre parecido en Producción Artística, pero en fechas y sedes distintas. Se conservaron como eventos diferentes, con la comparación detallada abajo.

Este archivo es una primera carga parcial con faltantes explícitos; no representa todo CEARG ni certifica que todas las preguntas de AppSheet estén completas. No se ejecutó una importación en producción ni una validación del formulario de AppSheet.

## Altas preparadas

| Fila en Excel | Origen | Actividad | ID nuevo | Folio |
|---:|---|---|---|---|
| 2 | FEBRERO 11 | Charla "Prácticas documentales y escenarios críticos” | ACT-SCQB78176 | SC-261026-204833 |
| 3 | FEBRERO 12 | Presentación artística"Bajo esta piedra Hundirás tu Iglesia" | ACT-SCEZ98681 | SC-261026-204834 |
| 4 | MARZO 12 | Conferencia magistral: La participación en la vida cultural, un derecho humano que le da sentido al desarrollo, desde nuestra diversidad creativa | ACT-SCRP19963 | SC-261026-204835 |
| 5 | MARZO 15 | Pesentación artística "Los malos Hábitos" | ACT-SCZO04190 | SC-261026-204836 |
| 6 | SEPTIEMBRE 12 | XXXVI Concurso-Venta-Exposición Alfarería | ACT-SCEM45304 | SC-261026-204837 |

Total de control: 381 atenciones, tanto en territorio como en población. Son dos formas de contabilizar el mismo conjunto; no sumar ambos totales ni interpretarlos como personas únicas entre actividades.

## Anotaciones por alta

### FEBRERO 11: Charla "Prácticas documentales y escenarios críticos”

ID: ACT-SCQB78176. Fila de salida: 2.

- Se prepara una actividad y una sesión por evento de un solo día; la columna No. no se utilizó como cantidad.
- Subdisciplina de la charla pendiente: Artes escénicas no determina un subtipo único.
- PG, PEC y Promesa permanecen vacíos donde el propio catálogo no los tiene; no se inventaron acciones.
- Sin evidencia en la fuente: no se creó un registro vacío. Contratos, ingresos, apoyos, grupos prioritarios y ZAP no reportados permanecen sin respuesta.

### FEBRERO 12: Presentación artística"Bajo esta piedra Hundirás tu Iglesia"

ID: ACT-SCEZ98681. Fila de salida: 3.

- Se prepara una actividad y una sesión por evento de un solo día; la columna No. no se utilizó como cantidad.
- PG, PEC y Promesa permanecen vacíos donde el propio catálogo no los tiene; no se inventaron acciones.
- Sin evidencia en la fuente: no se creó un registro vacío. Contratos, ingresos, apoyos, grupos prioritarios y ZAP no reportados permanecen sin respuesta.

### MARZO 12: Conferencia magistral: La participación en la vida cultural, un derecho humano que le da sentido al desarrollo, desde nuestra diversidad creativa

ID: ACT-SCRP19963. Fila de salida: 4.

- Se prepara una actividad y una sesión por evento de un solo día; la columna No. no se utilizó como cantidad.
- Año 2026 tomado del reporte de marzo; subdisciplina Gestión cultural / Cultura comunitaria propuesta por el tema de derechos culturales. Confirmar con Claudia.
- PG, PEC y Promesa permanecen vacíos donde el propio catálogo no los tiene; no se inventaron acciones.
- Sin evidencia en la fuente: no se creó un registro vacío. Contratos, ingresos, apoyos, grupos prioritarios y ZAP no reportados permanecen sin respuesta.

### MARZO 15: Pesentación artística "Los malos Hábitos"

ID: ACT-SCZO04190. Fila de salida: 5.

- Se prepara una actividad y una sesión por evento de un solo día; la columna No. no se utilizó como cantidad.
- PG, PEC y Promesa permanecen vacíos donde el propio catálogo no los tiene; no se inventaron acciones.
- Sin evidencia en la fuente: no se creó un registro vacío. Contratos, ingresos, apoyos, grupos prioritarios y ZAP no reportados permanecen sin respuesta.
- Subdisciplina del espectáculo Los malos Hábitos pendiente: la fuente solo indica Artes escénicas.

### SEPTIEMBRE 12: XXXVI Concurso-Venta-Exposición Alfarería

ID: ACT-SCEM45304. Fila de salida: 6.

- Se prepara una actividad y una sesión por evento de un solo día; la columna No. no se utilizó como cantidad.
- Tipo_Actividad/Actividad quedan vacíos: el catálogo no contiene una opción equivalente inequívoca a Concurso-Venta-Exposición; no se convirtió en ceremonia de premiación.
- Se conservan 57 atendidos (24 mujeres, 33 hombres) como Población General; las edades suman 55 y no se repartió el faltante de dos personas. Participación/acceso pendientes; no se usaron los nueve ganadores como total de participantes.
- Sede conservada en Especifique_Espacio; Tipo_Espacio pendiente de validar.
- PG, PEC y Promesa permanecen vacíos donde el propio catálogo no los tiene; no se inventaron acciones.
- Sin evidencia en la fuente: no se creó un registro vacío. Contratos, ingresos, apoyos, grupos prioritarios y ZAP no reportados permanecen sin respuesta.

La presentación Bajo esta piedra Hundirás tu Iglesia de CEARG es del 7 de febrero en Salamanca; el registro ACT-SCJO17369 es del 23 de mayo en Teatro Juárez. Los malos Hábitos de CEARG es del 27 de marzo en Salamanca; ACT-SCLP99244 es del 23 de marzo en Teatro Juárez. Un mismo título de obra no implica una misma función.

## Qué debe aclarar Claudia para completar el resto

1. Si las filas repetidas son grupos/sesiones diferentes o avances acumulados; en particular Brotes, El Callejón, Encuentro estatal y los pares señalados en la revisión.
2. Fechas contradictorias: el final en 2027; mayo/junio del diplomado; fechas de septiembre que Excel guarda en febrero, marzo o abril.
3. Qué meta específica corresponde a PADID, Federal, E071, Convenio, sin recurso y los campos vacíos; Planeación debe completar PG/PEC ausentes del catálogo.
4. Si edades y cifras por sexo corresponden a atendidos, quienes concluyen o ganadores; confirmar sesiones efectivas.
5. Municipio de la presentación Creatividades locales (la ciudad dice León, pero sede y domicilio corresponden a Purísima), títulos de JUNIO 20–21 y si JULIO está pendiente.
6. Evidencias disponibles y clasificación de la firma de convenios PECDA.

No hace falta información de Ileana para preparar CEARG: son expedientes separados.

## Filas apartadas: no están en el Excel para pegar

| Origen | Actividad | Situación | Qué revisar | IDs candidatos |
|---|---|---|---|---|
| ENERO 7 | Muestra de proyectos del Taller de Creación Sonora Experimental | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| FEBRERO 7 | Diseño de postulaciones para becas de creación artística y cultural | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCTS87185 |
| FEBRERO 8 | Diseño de postulaciones para becas de creación artística y cultural | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCTS87185 |
| FEBRERO 9 | Taller la niña y la ciencia | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCVU63289 |
| FEBRERO 10 | Taller la niña y la ciencia | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCVU63289 |
| FEBRERO 13 | Inauguración Exposición "Travesía Gráfica. Obra de Gilberto Guerrero" | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCWD89991 |
| MARZO 7 | Cartografía de Archivos Vivos | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCBC66974 |
| MARZO 8 | Taller de Introducción a la interdisciplina | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCPE79917 |
| MARZO 9 | “Ciénciame un cuento”, | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCRV06714 |
| MARZO 10 | ENCLAVE 2026. Poéticas de Origen Futuro Taller de Códigos Poéticos Expandidos | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCWB12949 |
| MARZO 11 | Proyección de XV Aniversario de Cine Colectivo Taller de Códigos Poéticos Expandidos | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| MARZO 13 | Presentación editorial: Presentación del libro Creatividades locales, editado por UNESCO | Aclaración | La ciudad dice León, pero la sede y domicilio corresponden a Purísima. Confirmar municipio y si comparte público con la conferencia de MARZO 12. | — |
| MARZO 14 | Una discusión marital | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| ABRIL 7 | Taller Diversidad cultural en las políticas culturales municipales | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCRS96271, ACT-SCBW36284, ACT-SCKS34336, ACT-SCHC75119 |
| ABRIL 8 | Taller Diversidad cultural en las políticas culturales municipales | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCRS96271, ACT-SCBW36284, ACT-SCKS34336, ACT-SCHC75119 |
| ABRIL 9 | Taller Diversidad cultural en las políticas culturales municipales | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCRS96271, ACT-SCBW36284, ACT-SCKS34336, ACT-SCHC75119 |
| ABRIL 10 | Taller Diversidad cultural en las políticas culturales municipales | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCRS96271, ACT-SCBW36284, ACT-SCKS34336, ACT-SCHC75119 |
| ABRIL 11 | Metodologia de procesos creativos | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCLV97219 |
| ABRIL 12 | Taller avanzado de grabado en metal FIC | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCJW46062 |
| ABRIL 13 | Taller de gráfica experimental a través de la estampación y transferencia botánica | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCHO27779 |
| ABRIL 14 | "Voces pequeñas, derechos grandes. Taller de herramientas de autocuidado para la infancia" | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| ABRIL 15 | "Voces pequeñas, derechos grandes. Taller de herramientas de autocuidado para la infancia" | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| ABRIL 16 | "Voces pequeñas, derechos grandes. Taller de herramientas de autocuidado para la infancia" | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| ABRIL 17 | "Voces pequeñas, derechos grandes. Taller de herramientas de autocuidado para la infancia" | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| ABRIL 18 | "Voces pequeñas, derechos grandes. Taller de herramientas de autocuidado para la infancia" | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| ABRIL 19 | El Gran Delirio de Anacleto y Cascarrabias | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| ABRIL 20 | Cleo, La Brujita | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| ABRIL 21 | Cleo, La Brujita | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| ABRIL 22 | GoGoTeens | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| ABRIL 23 | El Gran Delirio de Anacleto y Cascarrabias | Aclaración | Confirmar meta específica cuando el presupuesto dice PADID/Federal/E071/sin recurso o está vacío; además revisar sesiones, fechas y posibles repeticiones según el informe. | — |
| MAYO 7 | Taller de Producción Audiovisual | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCTP93796 |
| MAYO 8 | Taller de Modelado 3D en Blender | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCCL28269 |
| MAYO 9 | Exposición "La Fortaleza. MarisolGuerrero" | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCJU79713 |
| MAYO 10 | Exposición "De lo invisible a lo visible. Cartografía de la memoria histórica afrodescendiente en guanajuato" | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCTH89398 |
| JUNIO 7 | Taller de metodologías del grabado para la inclusión | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCSU96183 |
| JUNIO 8 | Taller -laboratorio: Teatro abierto, nuevas narrativas, territorios expresivos y estrategias de producción | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCSA90746 |
| JUNIO 9 | Diplomado en danza clásica El Callejón: Programa de formación dancística y creación escénica | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCKE58665 |
| JUNIO 10 | Taller " La cuerpa. Actividades sensoriales y sensibles" | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCJH52543 |
| JUNIO 11 | Taller "Escritura poética. Genealogias de lo familiar" | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCRN10556 |
| JUNIO 12 | Taller El cerebro positrónico de Asimov, ciencia ficción para infancias y adolescencias | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCSA27668 |
| JUNIO 13 | Brotes: Talleres artísticos para primera infancia | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCJQ99794 |
| JUNIO 14 | Brotes: Talleres artísticos para primera infancia | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCJQ99794 |
| JUNIO 15 | Brotes: Talleres artísticos para primera infancia | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCJQ99794 |
| JUNIO 16 | Brotes: Talleres artísticos para primera infancia | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCJQ99794 |
| JUNIO 17 | 6o. Concurso Nacional de Literatura Infantil | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCZN45583 |
| JUNIO 18 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| JUNIO 19 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| JUNIO 22 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| JUNIO 23 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| JUNIO 24 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| JUNIO 25 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| JUNIO 26 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| JUNIO 27 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| JUNIO 28 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| JUNIO 29 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| JUNIO 30 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| JUNIO 31 | Encuentro estatal de saberes locales | Aclaración | Aclarar si son grupos/sesiones del Encuentro estatal y si las cifras se repiten o acumulan; confirmar fecha. | — |
| AGOSTO 7 | Diplomado en danza contemporánea: Ejes de Creación escénica y multidisciplinaria | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCIR74848 |
| AGOSTO 8 | Diplomado en danza clásica El Callejón: Programa de formación dancística y creación escénica | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCKE58665 |
| AGOSTO 9 | Taller de creación de literatura para adolescentes | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCWJ23456 |
| SEPTIEMBRE 7 | Presentación Editorial "Sombras y Susurros" | Aclaración | Fecha almacenada en Excel no coincide con el mes de la pestaña: confirmar día y mes. | — |
| SEPTIEMBRE 8 | Taller de "Certificación de Mujeres al Frente" | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCPD16906 |
| SEPTIEMBRE 9 | Taller de Mezzotinta a color | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCEV04930 |
| SEPTIEMBRE 10 | Diplomado Pedagogías de lo corporal: Saberes locales; Cuerpo y Aprendizaje intuitivo | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCFX97585 |
| SEPTIEMBRE 11 | XXXVIII Concurso Regional Artesanía del Pan Tradicional y Ritual | Aclaración | Fecha almacenada en Excel no coincide con el mes de la pestaña: confirmar día y mes. | — |
| SEPTIEMBRE 13 | Congreso Estatal de Teatro | Aclaración | Confirmar meta artística/académica del congreso, número de sesiones y población sin edades. | — |
| SEPTIEMBRE 14 | FIRMA DE CONVENIOS POR BENEFICIARIOS | Aclaración | Firma de convenios PECDA: confirmar si registra un trámite o apoyos otorgados y el territorio de los beneficiarios. | — |
| SEPTIEMBRE 15 | Taller de Inteligencia Artificial, datos y cuerpo | Revisar existente | Coincidencia con actividad existente: revisar usando su ID; no crear otra alta automáticamente. | ACT-SCJU55686 |
| JUNIO 20 | Sin título | Aclaración | No hay título: confirmar si pertenece al Encuentro estatal y su programa. | — |
| JUNIO 21 | Sin título | Aclaración | No hay título: confirmar si pertenece al Encuentro estatal y su programa. | — |

## Fuentes y verificación

- Actividades Enero-Septiembre CEARG.xlsx, hojas ENERO a SEPTIEMBRE, filas 7 en adelante, columnas A:AI.
- Base en línea: Registro_Actividades A1:AN1130, claves de las otras tres hojas operativas y Cat_Alineacion A1:R110. Las cuatro cabeceras activas se contrastaron con la copia local.
- DB_Sistema_Cultura_GTO_V1.xlsx, para los catálogos y el orden de las 66/12/8/5 columnas activas.
- Verificado: cada celda exportada, fechas de Excel, tipos numéricos, nombres de hojas, encabezados, relaciones padre/hijo, totales y conservación del original.
