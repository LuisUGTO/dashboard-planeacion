# Normalización de Marcelina: hoja programa ene-ago 2026

Preparación del 26 de octubre de 2026. Se utilizó el archivo actualizado de la carpeta Marcelina, sus guías de Promesas y acciones PEC y la estructura de la copia de la base proporcionada. Los archivos originales y la base en línea no se modificaron. No se utilizó la matriz 2027 para completar registros de 2026.

Se revisaron 231 filas fuente y se prepararon 229 registros nuevos. Dos posibles coincidencias con registros existentes se apartaron para evitar duplicarlos. El archivo tiene exactamente las cuatro hojas operativas y conserva su orden de columnas. **Normalizar organiza y relaciona los datos disponibles; no certifica las cifras ni completa datos que no fueron reportados.**

## Pendientes concretos antes de considerar cerrada la carga

Las tres filas siguientes conservan la clave de programa indicada en T, pero tienen la meta y su identificador sin completar. El programa escrito o la descripción no permiten seleccionar una meta sin resolver la duda. No se sustituyó una clave por otra.

| Fila de la fuente | Fila en el archivo preparado | Evento | Clave T | Programa S |
|---:|---:|---|---|---|
| 132 | 129 | Lágrimas de agua dulce ESCENAS AL VUELO | QC4140 | Ventanas al Terriorio |
| 183 | 180 | Fistas | QC4142 | Operación del sistema estatal de espacios escénicos y artes vivas |
| 230 | 227 | Arsénico y encaje | QC4140 | N/A |

- Fecha por confirmar: fuente fila 150, salida fila 147, «Presentacion en Apaseo el Grande»: la columna H indica **2025-06-22**. Se conserva 2025; no se corrigió silenciosamente a 2026.

- En 6 fechas no aparece el año; se tomó 2026 del nombre de la hoja. Filas fuente: 40, 73, 97, 98, 99, 152.
- Hay seis diferencias entre mujeres + hombres y el total informado. Se conservaron ambos valores, como se acordó, para su revisión posterior.

## Rangos para copiar

La revisión de la base local actualizada, con 605 actividades, confirmó que no hay IDs ni folios repetidos con este lote. Los encabezados, las metas seleccionadas y las relaciones con el catálogo siguen siendo compatibles. Esto comprueba identidad de claves, no ausencia de eventos duplicados por contenido.

Pegar solo valores, sin encabezados, a partir de la columna A de la primera fila realmente libre de cada hoja. Primero actividades, después territorio y después población. No volver a pegar el mismo lote ni sustituir registros existentes.

| Hoja | Rango sin encabezado | Filas |
|---|---|---:|
| Registro_Actividades | A2:BN230 | 229 |
| Registro_Territorio | A2:L230 | 229 |
| Registro_Poblacion | A2:H541 | 540 |
| Regitro_Evidencia | No copiar: solo encabezados | 0 |

Regitro_Evidencia conserva el nombre exacto de la base. Está vacía porque el concentrado no identifica archivos que puedan vincularse por actividad. Los números de Comprobante no se convirtieron en nombres de archivos. Las columnas de actividades desde BO y de territorio desde M no se incluyeron.

## Criterios de normalización

- Una fila fuente se conserva como un evento. Fecha_Inicio y Fecha_Fin toman el día de H. Temporalidad Única, una sesión y formato Presencial son criterios de preparación para esta relación de funciones con fecha, horario y sede; la fecha por sí sola no demuestra la cantidad de sesiones. Si una fila agrupa varias funciones, se debe ajustar.
- Usuario_Registra: machagoya@guanajuato.gob.mx. IDs y folios únicos comprobados contra el lote y la copia local. Fecha_Captura corresponde al momento de preparación; las secuencias horarias del folio distinguen registros del lote.
- Promesa_NC y Acciones_PEC se tradujeron con las guías numeradas de Marcelina, nunca por número de fila de la base. Las 229 actividades nuevas tienen las equivalencias de Promesa, PG y PEC informadas.
- La acción PG explícita de E determina Eje_PG, Objetivo_PG y Estrategia_PG según el catálogo y las relaciones actuales del sistema. Cuando A/B contradicen esa correspondencia, la diferencia aparece en el control por actividad. Esto requiere validación de Planeación; no se cambió el catálogo para adoptar otra versión del PG.
- La acción PEC determina línea, estrategia y meta PEC cuando la correspondencia es única. El eje transversal se toma de F (selección explícita Cooperación/Inclusión), sin sustituirlo por el texto diferente de L. Ambos textos originales se conservan en el control.
- PB3574 se relaciona con la meta 83 de actividades de artes vivas; PB3569 con la 85 de conciertos de la Banda. QC4140 se relaciona con 5 cuando se identifica Festivales en el programa o en el evento. QC4142 se relaciona con 10 de artes vivas por el programa Ventanas y las disciplinas reportadas. Estas selecciones se identifican en el control para validación del área. Se respetó la dirección de origen Producción Artística.
- La grafía «Ventamas al Tertitorio» se reconoció como variante de Ventanas al Territorio, apoyada por QC4142 y las presentaciones de música/danza; no se corrigió el archivo fuente.
- Los tres títulos vacíos se identifican como «Presentación de [artista]», usando únicamente el artista informado.
- Descripcion_Breve tiene como máximo 200 caracteres. Las anotaciones y cifras originales completas se conservan abajo.
- La fecha no identifica automáticamente una localidad. Comunidad, asentamiento y ZAP quedan vacíos cuando no hay una correspondencia explícita. Se normalizan municipios y sedes con equivalencias claras; no se presume cabecera municipal ni se considera todo un municipio como ZAP.
- Se conservan totales de AK para territorio y AA/AB para población, incluso si difieren. Los vacíos siguen vacíos y los ceros siguen siendo los ceros reportados. Público asistente se coloca en Acceso; no se agregan artistas como público ni se convierten en agentes contratados.
- Las cifras por género se guardan como Población General, sin inventar rangos de edad. La fuente combina niñez y adolescencia y no define el intervalo de jóvenes; los desgloses originales se mantienen abajo.
- Discapacidad se separa como subconjunto del mismo género cuando la cifra es válida. No se suma nuevamente sobre el total. El remanente tiene grupo prioritario vacío, porque no se informó.
- Las subdisciplinas se completan cuando la fuente identifica expresamente el tipo de agrupación o danza y hay una correspondencia única en Cat_Disciplina. De ahí se obtiene su disciplina. Música, Danza o Multidisciplina por sí solas no seleccionan una subdisciplina única. Las clasificaciones no identificadas, contratación, apoyos y otros datos desconocidos quedan vacíos.

## Posibles actividades existentes, apartadas

Estas dos filas no están en las hojas para pegar. No se modificó su registro existente ni se crearon registros hijos para ellas.

| Fila fuente | Evento | ID existente por revisar |
|---:|---|---|
| 3 | El Extraño Mundo de Jack | ACT-SCLG64192 |
| 4 | Matinata BME | ACT-SCWW82026 |

Posible coincidencia adicional pendiente de criterio entre áreas: salida 183, «2° Festival Escenautas Mujeres en el puño: Hilando la ternura, conquistando la libertad», 20/07/2026, y el registro existente ACT-SCDO40520. Los títulos y la sede son equivalentes; confirmar si se debe registrar una sola actividad o participaciones de áreas diferentes. Esta fila permanece en el lote, señalada aquí; no se eliminó ni fusionó por suposición.

## Actualización de clasificación

Se completaron 30 subdisciplinas y 1 disciplina adicional, en 31 registros. Permanecen 109 subdisciplinas y 7 disciplinas sin identificar. Los IDs, folios, cantidades, fechas y relaciones de los registros se conservaron.

## Totales de control

- Total territorial reportado en las filas preparadas: 64,607.
- Total de población preparada con las cifras disponibles: 67,363.
Estos son conteos alternativos de público: no se suman entre sí ni representan personas únicas certificadas. La diferencia proviene de datos de origen que se conservaron.

## Control por actividad

Cada apartado identifica la fila de origen, la fila preparada, el ID nuevo y las anotaciones completas. La numeración de origen corresponde a la hoja visible del archivo actualizado.

### Fuente 5 / salida 2: Concierto San Miguel de Allende

ID: ACT-SCBE33341. Folio: SC-261026-171150. Fecha: 2026-01-21.

Artista o agrupación: Banda de Música del Estado. Horario: 18:00:00. Artistas participantes reportados: 30. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Origen o alcance reportado: Estatal. Responsable reportado: Adalberto. Desglose etario original (sin redistribuir): adultas mayores 70, adultos mayores 65, jóvenes mujeres 110, jóvenes hombres 125, niñas y adolescentes 45, niños y adolescentes 65

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 1.2.3.4; F: cooperación; G: 16.1.

Cifras originales: AA: 225; AB: 255; AC: 0; AD: 0; AE: 70; AF: 65; AG: 110; AH: 125; AI: 45; AJ: 65; AK: 480; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 1.2 Fortalecer prevención del delito según la acción PG explícita 1.2.3.4 Promover una cultura de paz desde las expresiones artísticas y culturales y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 1.2.2 Fortalecimiento del tejido social según la acción PG explícita 1.2.3.4 Promover una cultura de paz desde las expresiones artísticas y culturales y el catálogo actual. Validar discrepancia.

### Fuente 6 / salida 3: Coppelia

ID: ACT-SCMZ50247. Folio: SC-261026-171151. Fecha: 2026-01-24.

Artista o agrupación: Estudio de Ballet Aurora. Horario: 17:00:00. Artistas participantes reportados: 30. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Observaciones: ARRENDAMIENTO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 12, adultos mayores 11, jóvenes mujeres 117, jóvenes hombres 66, niñas y adolescentes 24, niños y adolescentes 22

Alineación original: A: objetivo 5.4; B: estrategia: 5.4.4.1.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 153; AB: 99; AC: 0; AD: 0; AE: 12; AF: 11; AG: 117; AH: 66; AI: 24; AJ: 22; AK: 252; AL: vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.4.4.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 7 / salida 4: Matinata BME

ID: ACT-SCWM41523. Folio: SC-261026-171152. Fecha: 2026-01-25.

Artista o agrupación: Banda de Música del Estado. Horario: 12:00:00. Artistas participantes reportados: 30. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Origen o alcance reportado: Estatal. Responsable reportado: Ana Laura. Desglose etario original (sin redistribuir): adultas mayores 15, adultos mayores 15, jóvenes mujeres 58, jóvenes hombres 43, niñas y adolescentes 20, niños y adolescentes 20

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 1.2.3.4; F: cooperación; G: 16.1.

Cifras originales: AA: 95; AB: 79; AC: 2; AD: 1; AE: 15; AF: 15; AG: 58; AH: 43; AI: 20; AJ: 20; AK: 174; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 1.2 Fortalecer prevención del delito según la acción PG explícita 1.2.3.4 Promover una cultura de paz desde las expresiones artísticas y culturales y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 1.2.2 Fortalecimiento del tejido social según la acción PG explícita 1.2.3.4 Promover una cultura de paz desde las expresiones artísticas y culturales y el catálogo actual. Validar discrepancia.

### Fuente 8 / salida 5: Programa 1 Homenaje a Manuel de Falla

ID: ACT-SCGT61230. Folio: SC-261026-171153. Fecha: 2026-01-30.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 115, adultos mayores 79, jóvenes mujeres 134, jóvenes hombres 77, niñas y adolescentes 1, niños y adolescentes 3

Alineación original: A: objetivo 5.4; B: estrategia: 5.4.4.1.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 250; AB: 159; AC: 0; AD: 0; AE: 115; AF: 79; AG: 134; AH: 77; AI: 1; AJ: 3; AK: 409; AL: 409.

- Objetivo_PG: fuente objetivo 5.4; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.4.4.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 9 / salida 6: Los Músicos de la Capital

ID: ACT-SCWK37742. Folio: SC-261026-171154. Fecha: 2026-02-01.

Artista o agrupación: Ópera Guanajuato. Horario: 13:00:00. Artistas participantes reportados: 17. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: FUNCIÓN SIN COSTO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 19, adultos mayores 12, jóvenes mujeres 41, jóvenes hombres 26, niñas y adolescentes 27, niños y adolescentes 37

Alineación original: A: objetivo 5.5; B: estrategia: 5.5.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 87; AB: 75; AC: 0; AD: 0; AE: 19; AF: 12; AG: 41; AH: 26; AI: 27; AJ: 37; AK: 162; AL: 162.

- Objetivo_PG: fuente objetivo 5.5; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 10 / salida 7: Matinata BME

ID: ACT-SCVW81170. Folio: SC-261026-171155. Fecha: 2026-02-01.

Artista o agrupación: Banda de Música del Estado. Horario: 12:00:00. Artistas participantes reportados: 30. Público meta: Familiar. Eje reportado: Educación artística y profesionalización. Origen o alcance reportado: Estatal. Responsable reportado: Adalberto. Desglose etario original (sin redistribuir): adultas mayores 30, adultos mayores 35, jóvenes mujeres 22, jóvenes hombres 18, niñas y adolescentes 14, niños y adolescentes 13

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 1.2.3.4; F: cooperación; G: 16.1.

Cifras originales: AA: 66; AB: 66; AC: 0; AD: 0; AE: 30; AF: 35; AG: 22; AH: 18; AI: 14; AJ: 13; AK: 132; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 1.2 Fortalecer prevención del delito según la acción PG explícita 1.2.3.4 Promover una cultura de paz desde las expresiones artísticas y culturales y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 1.2.2 Fortalecimiento del tejido social según la acción PG explícita 1.2.3.4 Promover una cultura de paz desde las expresiones artísticas y culturales y el catálogo actual. Validar discrepancia.

### Fuente 11 / salida 8: Los Músicos de la Capital

ID: ACT-SCPN40683. Folio: SC-261026-171156. Fecha: 2026-02-01.

Artista o agrupación: Ópera Guanajuato. Horario: 18:00:00. Artistas participantes reportados: 17. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONTRATO. Honorarios reportados: $35.400,00. Desglose etario original (sin redistribuir): adultas mayores 36, adultos mayores 43, jóvenes mujeres 107, jóvenes hombres 86, niñas y adolescentes 56, niños y adolescentes 42

Alineación original: A: objetivo 5.5; B: estrategia: 5.5.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 199; AB: 173; AC: 0; AD: 2; AE: 36; AF: 43; AG: 107; AH: 86; AI: 56; AJ: 42; AK: 372; AL: 372.

- Objetivo_PG: fuente objetivo 5.5; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 12 / salida 9: Programa 2

ID: ACT-SCMN11238. Folio: SC-261026-171157. Fecha: 2026-02-06.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 128, adultos mayores 104, jóvenes mujeres 50, jóvenes hombres 75, niñas y adolescentes 4, niños y adolescentes 9

Alineación original: A: objetivo 5.5; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 192; AB: 192; AC: 10; AD: 4; AE: 128; AF: 104; AG: 50; AH: 75; AI: 4; AJ: 9; AK: 384; AL: 384.

- Objetivo_PG: fuente objetivo 5.5; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 13 / salida 10: Lava, Dora lava

ID: ACT-SCWK62730. Folio: SC-261026-171158. Fecha: 2026-02-09.

Artista o agrupación: Teatro Demediado. Horario: 10:30:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): niñas y adolescentes 44, niños y adolescentes 42

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 44; AB: 42; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: 44; AJ: 42; AK: 86; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 14 / salida 11: Lava, Dora lava

ID: ACT-SCGL78199. Folio: SC-261026-171159. Fecha: 2026-02-10.

Artista o agrupación: Teatro Demediado. Horario: 10:30:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): niñas y adolescentes 98, niños y adolescentes 91

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 98; AB: 91; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: 98; AJ: 91; AK: 189; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 15 / salida 12: Programa 3

ID: ACT-SCVG39993. Folio: SC-261026-171200. Fecha: 2026-02-13.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 134, adultos mayores 110, jóvenes mujeres 87, jóvenes hombres 72, niñas y adolescentes 1, niños y adolescentes 2

Alineación original: A: objetivo 5.4; B: estrategia: 5.4.4.1.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 222; AB: 186; AC: 0; AD: 2; AE: 134; AF: 110; AG: 87; AH: 72; AI: 1; AJ: 2; AK: 408; AL: 408.

- Objetivo_PG: fuente objetivo 5.4; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.4.4.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 16 / salida 13: Romeo y Julieta de bolsillo

ID: ACT-SCNM00903. Folio: SC-261026-171201. Fecha: 2026-02-14.

Artista o agrupación: Líquido Colectivo. Horario: 18:00:00. Artistas participantes reportados: 4. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Observaciones: CONTRATO. Honorarios reportados: $20.880,00. Desglose etario original (sin redistribuir): adultas mayores 8, adultos mayores 7, jóvenes mujeres 70, jóvenes hombres 33, niñas y adolescentes 16, niños y adolescentes 12

Alineación original: A: Objetivo 5.5; B: estrategia:5.5.1.1; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 94; AB: 52; AC: 0; AD: 0; AE: 8; AF: 7; AG: 70; AH: 33; AI: 16; AJ: 12; AK: 146; AL: 146.

- Objetivo_PG: fuente Objetivo 5.5; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia:5.5.1.1; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 17 / salida 14: 100 años de José Alfredo

ID: ACT-SCOO10213. Folio: SC-261026-171202. Fecha: 2026-02-14.

Artista o agrupación: Banda de Música del Estado y Carolina Herrera. Horario: 19:00:00. Artistas participantes reportados: 30. Público meta: Familiar. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 123, adultos mayores 71, jóvenes mujeres 225, jóvenes hombres 127, niñas y adolescentes 4, niños y adolescentes 6

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 352; AB: 204; AC: 0; AD: 0; AE: 123; AF: 71; AG: 225; AH: 127; AI: 4; AJ: 6; AK: 556; AL: 556.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 18 / salida 15: Día del ejército nacional

ID: ACT-SCEN97364. Folio: SC-261026-171203. Fecha: 2026-02-19.

Artista o agrupación: Banda de música del Estado. Horario: 08:00:00. Artistas participantes reportados: 32. Origen o alcance reportado: Estatal. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 0, jóvenes mujeres 415, jóvenes hombres 740, niñas y adolescentes 0, niños y adolescentes 0

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 415; AB: 740; AC: 0; AD: 0; AE: 0; AF: 0; AG: 415; AH: 740; AI: 0; AJ: 0; AK: 1155; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 19 / salida 16: Programa 4

ID: ACT-SCQM16766. Folio: SC-261026-171204. Fecha: 2026-02-20.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Familiar. Eje reportado: Educación artística y profesionalización. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 73, adultos mayores 52, jóvenes mujeres 119, jóvenes hombres 104, niñas y adolescentes 1, niños y adolescentes 5

Alineación original: A: objetivo 5.4; B: estrategia: 5.4.4.1.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 193; AB: 161; AC: 0; AD: 0; AE: 73; AF: 52; AG: 119; AH: 104; AI: 1; AJ: 5; AK: 354; AL: 354.

- Objetivo_PG: fuente objetivo 5.4; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.4.4.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 20 / salida 17: 100 años de José Alfredo

ID: ACT-SCCS76063. Folio: SC-261026-171205. Fecha: 2026-02-20.

Artista o agrupación: Banda de Música del Estado y Carolina Herrera. Horario: 20:00:00. Artistas participantes reportados: 30. Público meta: Familiar. Origen o alcance reportado: Estatal. Responsable reportado: Adalberto. Desglose etario original (sin redistribuir): adultas mayores 350, adultos mayores 275, jóvenes mujeres 315, jóvenes hombres 368, niñas y adolescentes 24, niños y adolescentes 21

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 689; AB: 664; AC: 0; AD: 0; AE: 350; AF: 275; AG: 315; AH: 368; AI: 24; AJ: 21; AK: 1353; AL: vacío.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 21 / salida 18: Conmemoración del día de la bandera

ID: ACT-SCXX04210. Folio: SC-261026-171206. Fecha: 2026-02-24.

Artista o agrupación: Banda de música del estado. Horario: 08:00:00. Artistas participantes reportados: 32. Eje reportado: Juventudes e infancias. Origen o alcance reportado: Estatal. Desglose etario original (sin redistribuir): adultas mayores 34, adultos mayores 30, jóvenes mujeres 45, jóvenes hombres 65, niñas y adolescentes 120, niños y adolescentes 120

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 199; AB: 215; AC: 0; AD: 0; AE: 34; AF: 30; AG: 45; AH: 65; AI: 120; AJ: 120; AK: 414; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 22 / salida 19: Vigilantes del agua en acción

ID: ACT-SCCU28465. Folio: SC-261026-171207. Fecha: 2026-02-25.

Artista o agrupación: Los Tiliches del baúl. Horario: 17:00:00. Artistas participantes reportados: 2. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $9.860,00. Desglose etario original (sin redistribuir): adultas mayores 1, adultos mayores 0, jóvenes mujeres 8, jóvenes hombres 7, niñas y adolescentes 83, niños y adolescentes 85

Alineación original: A: objetivo 1.2.; B: estrategia: 1.2.3.4; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 92; AB: 92; AC: 0; AD: 0; AE: 1; AF: 0; AG: 8; AH: 7; AI: 83; AJ: 85; AK: 184; AL: vacío.

- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 1.2.3.4; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 23 / salida 20: Vigilantes del agua en acción

ID: ACT-SCWV04407. Folio: SC-261026-171208. Fecha: 2026-02-26.

Artista o agrupación: Los Tiliches del baúl. Horario: 18:00:00. Artistas participantes reportados: 2. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $9.860,00. Desglose etario original (sin redistribuir): adultas mayores 35, adultos mayores 12, jóvenes mujeres 18, jóvenes hombres 15, niñas y adolescentes 20, niños y adolescentes 20

Alineación original: A: objetivo 1.2.; B: estrategia: 1.2.3.4; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 73; AB: 47; AC: 0; AD: 0; AE: 35; AF: 12; AG: 18; AH: 15; AI: 20; AJ: 20; AK: 120; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 1.2.3.4; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 24 / salida 21: Vigilantes del agua en acción

ID: ACT-SCJO67681. Folio: SC-261026-171209. Fecha: 2026-02-27.

Artista o agrupación: Los Tiliches del baúl. Horario: 11:00:00. Artistas participantes reportados: 2. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $9.860,00. Desglose etario original (sin redistribuir): adultos mayores 9, jóvenes mujeres 108, jóvenes hombres 72

Alineación original: A: objetivo 1.2.; B: estrategia: 1.2.3.4; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 108; AB: 81; AC: vacío; AD: vacío; AE: vacío; AF: 9; AG: 108; AH: 72; AI: vacío; AJ: vacío; AK: 189; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 1.2.3.4; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 25 / salida 22: Vigilantes del agua en acción

ID: ACT-SCGW91179. Folio: SC-261026-171210. Fecha: 2026-02-27.

Artista o agrupación: Los Tiliches del baúl. Horario: 17:00:00. Artistas participantes reportados: 2. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $9.860,00. Desglose etario original (sin redistribuir): adultas mayores 12, adultos mayores 5, jóvenes mujeres 13, jóvenes hombres 19, niñas y adolescentes 25, niños y adolescentes 36

Alineación original: A: objetivo 1.2.; B: estrategia: 1.2.3.4; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 50; AB: 60; AC: 0; AD: 0; AE: 12; AF: 5; AG: 13; AH: 19; AI: 25; AJ: 36; AK: 110; AL: vacío.

- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 1.2.3.4; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 26 / salida 23: Declaratoria de la Estudiantina de la UG como Patrimonio

ID: ACT-SCID80640. Folio: SC-261026-171211. Fecha: 2026-02-27.

Artista o agrupación: Estudiantina de la UG y Lucero. Horario: 19:00:00. Artistas participantes reportados: 30. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Nacional. Responsable reportado: Jonathan. Observaciones: COLABORACIÓN. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 125, adultos mayores 87, jóvenes mujeres 175, jóvenes hombres 118, niñas y adolescentes 7, niños y adolescentes 12

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 307; AB: 217; AC: 0; AD: 0; AE: 125; AF: 87; AG: 175; AH: 118; AI: 7; AJ: 12; AK: 524; AL: 524.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 27 / salida 24: El Lago de los Cisnes

ID: ACT-SCHD83358. Folio: SC-261026-171212. Fecha: 2026-02-28.

Artista o agrupación: Ballet de Kiev. Horario: 16:30:00. Artistas participantes reportados: 40. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Internacional. Responsable reportado: Vanessa. Observaciones: ARRENDAMIENTO. Honorarios reportados: N/A

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: vacío; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.

### Fuente 28 / salida 25: El Lago de los Cisnes

ID: ACT-SCVV75829. Folio: SC-261026-171213. Fecha: 2026-02-28.

Artista o agrupación: Ballet de Kiev. Horario: 20:00:00. Artistas participantes reportados: 40. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Internacional. Responsable reportado: Vanessa. Observaciones: ARRENDAMIENTO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 243, adultos mayores 234, jóvenes mujeres 312, jóvenes hombres 298, niñas y adolescentes 112, niños y adolescentes 52

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 667; AB: 584; AC: 0; AD: 0; AE: 243; AF: 234; AG: 312; AH: 298; AI: 112; AJ: 52; AK: 1251; AL: vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 29 / salida 26: Ensayo de Informe de la Gobernadora

ID: ACT-SCCC63144. Folio: SC-261026-171214. Fecha: 2026-03-04.

Artista o agrupación: BME. Horario: 13:00:00. Artistas participantes reportados: 32. Público meta: Familiar. Origen o alcance reportado: Estatal. Responsable reportado: Adalberto. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 0, jóvenes mujeres 20, jóvenes hombres 20, niñas y adolescentes 0, niños y adolescentes 0

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 20; AB: 20; AC: 0; AD: 0; AE: 0; AF: vacío; AG: 20; AH: 20; AI: 0; AJ: 0; AK: 40; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 30 / salida 27: Informe de la Gobernadora

ID: ACT-SCIS69956. Folio: SC-261026-171215. Fecha: 2026-03-05.

Artista o agrupación: BME. Horario: 15:00:00. Artistas participantes reportados: 32. Público meta: Familiar. Origen o alcance reportado: Estatal. Responsable reportado: Adalberto. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 600, adultos mayores 600, jóvenes mujeres 4000, jóvenes hombres 3000, niñas y adolescentes 1000, niños y adolescentes 1000

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 5720; AB: 4635; AC: 120; AD: 35; AE: 600; AF: 600; AG: 4000; AH: 3000; AI: 1000; AJ: 1000; AK: 10355; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 31 / salida 28: Oceano

ID: ACT-SCRE00032. Folio: SC-261026-171216. Fecha: 2026-03-06.

Artista o agrupación: enSEÑAteatro. Horario: 11:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $7.884,03. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 0, jóvenes mujeres 10, jóvenes hombres 9, niñas y adolescentes 74, niños y adolescentes 73

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 84; AB: 82; AC: 0; AD: 0; AE: 0; AF: 0; AG: 10; AH: 9; AI: 74; AJ: 73; AK: 166; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 32 / salida 29: Oceano

ID: ACT-SCNC46986. Folio: SC-261026-171217. Fecha: 2026-03-06.

Artista o agrupación: enSEÑAteatro. Horario: 17:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $7.884,03. Desglose etario original (sin redistribuir): adultas mayores 5, adultos mayores 10, jóvenes mujeres 10, jóvenes hombres 10, niñas y adolescentes 233, niños y adolescentes 232

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 248; AB: 252; AC: vacío; AD: vacío; AE: 5; AF: 10; AG: 10; AH: 10; AI: 233; AJ: 232; AK: 500; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 33 / salida 30: Lava, Dora lava

ID: ACT-SCXU87195. Folio: SC-261026-171218. Fecha: 2026-03-09.

Artista o agrupación: Teatro Demediado. Horario: 09:30:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 10, adultos mayores 10, jóvenes mujeres 7, jóvenes hombres 7, niñas y adolescentes 67, niños y adolescentes 87

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 84; AB: 104; AC: 0; AD: 0; AE: 10; AF: 10; AG: 7; AH: 7; AI: 67; AJ: 87; AK: 188; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 34 / salida 31: Lava, Dora lava

ID: ACT-SCXH73671. Folio: SC-261026-171219. Fecha: 2026-03-10.

Artista o agrupación: Teatro Demediado. Horario: 11:30:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 6, adultos mayores 6, jóvenes mujeres 7, jóvenes hombres 6, niñas y adolescentes 211, niños y adolescentes 171

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 236; AB: 189; AC: 12; AD: 6; AE: 6; AF: 6; AG: 7; AH: 6; AI: 211; AJ: 171; AK: 425; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 35 / salida 32: Lava, Dora lava

ID: ACT-SCVB58993. Folio: SC-261026-171220. Fecha: 2026-03-10.

Artista o agrupación: Teatro Demediado. Horario: 15:30:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 7, adultos mayores 7, jóvenes mujeres 1, niñas y adolescentes 16, niños y adolescentes 27

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 25; AB: 35; AC: 1; AD: 1; AE: 7; AF: 7; AG: 1; AH: vacío; AI: 16; AJ: 27; AK: 60; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 36 / salida 33: Lava, Dora lava

ID: ACT-SCWX28670. Folio: SC-261026-171221. Fecha: 2026-03-11.

Artista o agrupación: Teatro Demediado. Horario: 09:00:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 9, adultos mayores 8, jóvenes mujeres 8, jóvenes hombres 0, niñas y adolescentes 256, niños y adolescentes 273

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 273; AB: 281; AC: 0; AD: 0; AE: 9; AF: 8; AG: 8; AH: 0; AI: 256; AJ: 273; AK: 554; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 37 / salida 34: Lava, Dora lava

ID: ACT-SCHA08839. Folio: SC-261026-171222. Fecha: 2026-03-12.

Artista o agrupación: Teatro Demediado. Horario: 08:30:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 0, jóvenes mujeres 0, jóvenes hombres 0, niñas y adolescentes 279, niños y adolescentes 283

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 279; AB: 283; AC: 0; AD: 0; AE: 0; AF: 0; AG: 0; AH: 0; AI: 279; AJ: 283; AK: 562; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 38 / salida 35: Lava, Dora lava

ID: ACT-SCFM07970. Folio: SC-261026-171223. Fecha: 2026-03-13.

Artista o agrupación: Teatro Demediado. Horario: 09:30:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 8, adultos mayores 8, jóvenes mujeres 0, jóvenes hombres 0, niñas y adolescentes 169, niños y adolescentes 188

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 177; AB: 196; AC: 0; AD: 0; AE: 8; AF: 8; AG: 0; AH: 0; AI: 169; AJ: 188; AK: 373; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 39 / salida 36: Concurso del Himno de Guanajuato Nivel Primarias

ID: ACT-SCFY68268. Folio: SC-261026-171224. Fecha: 2026-03-12.

Artista o agrupación: N/A Coordinación de Educación Municipal. Horario: 10:00:00. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Honorarios reportados: N/A

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: vacío.

- Disciplina pendiente o valor de fuente no equivalente: None
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 40 / salida 37: Programa 6

ID: ACT-SCPU46060. Folio: SC-261026-171225. Fecha: 2026-03-13.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 112, adultos mayores 74, jóvenes mujeres 55, jóvenes hombres 38, niñas y adolescentes 0, niños y adolescentes 2

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 167; AB: 114; AC: 0; AD: 0; AE: 112; AF: 74; AG: 55; AH: 38; AI: 0; AJ: 2; AK: 281; AL: vacío.

- Año 2026 tomado del título de la hoja; fecha original sin año: viernes 13 de marzo
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 41 / salida 38: Oceano

ID: ACT-SCLX24540. Folio: SC-261026-171226. Fecha: 2026-03-13.

Artista o agrupación: enSEÑAteatro. Horario: 09:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $7.884,03. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 0, jóvenes mujeres 10, jóvenes hombres 12, niñas y adolescentes 195, niños y adolescentes 195

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 205; AB: 207; AC: 0; AD: 0; AE: 0; AF: 0; AG: 10; AH: 12; AI: 195; AJ: 195; AK: 412; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 42 / salida 39: Oceano

ID: ACT-SCXS79422. Folio: SC-261026-171227. Fecha: 2026-03-13.

Artista o agrupación: enSEÑAteatro. Horario: 11:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $7.884,03. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 0, jóvenes mujeres 7, jóvenes hombres 10, niñas y adolescentes 200, niños y adolescentes 200

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 207; AB: 210; AC: 0; AD: 0; AE: 0; AF: 0; AG: 7; AH: 10; AI: 200; AJ: 200; AK: 417; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 43 / salida 40: Oceano

ID: ACT-SCNA55273. Folio: SC-261026-171228. Fecha: 2026-03-13.

Artista o agrupación: enSEÑAteatro. Horario: 17:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $7.884,03. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 0, jóvenes mujeres 5, jóvenes hombres 6, niñas y adolescentes 100, niños y adolescentes 100

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 105; AB: 106; AC: 0; AD: 0; AE: 0; AF: 0; AG: 5; AH: 6; AI: 100; AJ: 100; AK: 211; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 44 / salida 41: Sesiones FM: Escucha musical entre mujeres

ID: ACT-SCHD27834. Folio: SC-261026-171229. Fecha: 2026-03-14.

Artista o agrupación: Dj´s Kareve y Sabrosónica. Horario: 18:00:00. Artistas participantes reportados: 4. Público meta: Jóvenes. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: Actividad 8M. Honorarios reportados: $15.776,00. Desglose etario original (sin redistribuir): adultas mayores 15, adultos mayores 12, jóvenes mujeres 250, jóvenes hombres 150, niñas y adolescentes 45, niños y adolescentes 30

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.4.3.1; F: inclusión; G: 5.

Cifras originales: AA: 310; AB: 192; AC: 0; AD: 0; AE: 15; AF: 12; AG: 250; AH: 150; AI: 45; AJ: 30; AK: 502; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 45 / salida 42: Lulú, terriblemente fabulosa

ID: ACT-SCBG61331. Folio: SC-261026-171230. Fecha: 2026-03-14.

Artista o agrupación: Malacara Teatro. Horario: 19:00:00. Artistas participantes reportados: 6. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Observaciones: Actividad 8M. Honorarios reportados: $36.500,56. Desglose etario original (sin redistribuir): adultas mayores 4, adultos mayores 2, jóvenes mujeres 119, jóvenes hombres 30, niñas y adolescentes 41, niños y adolescentes 13

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 164; AB: 45; AC: 0; AD: 0; AE: 4; AF: 2; AG: 119; AH: 30; AI: 41; AJ: 13; AK: 209; AL: 209.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 46 / salida 43: Matinata BME

ID: ACT-SCGX19362. Folio: SC-261026-171231. Fecha: 2026-03-15.

Artista o agrupación: Banda de Música del Estado. Horario: 12:00:00. Artistas participantes reportados: 32. Público meta: Familiar. Origen o alcance reportado: Estatal. Responsable reportado: Adalberto. Desglose etario original (sin redistribuir): adultas mayores 34, adultos mayores 23, jóvenes mujeres 54, jóvenes hombres 74, niñas y adolescentes 15, niños y adolescentes 18

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 103; AB: 115; AC: 0; AD: 0; AE: 34; AF: 23; AG: 54; AH: 74; AI: 15; AJ: 18; AK: 218; AL: 218.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 47 / salida 44: Concurso de la cocina del noreste

ID: ACT-SCAQ28202. Folio: SC-261026-171232. Fecha: 2026-03-15.

Artista o agrupación: Ballet Folklorico Rahatzi. Horario: 12:00:00. Artistas participantes reportados: 20. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $20.880,00. Desglose etario original (sin redistribuir): adultas mayores 16, adultos mayores 14, jóvenes mujeres 42, jóvenes hombres 28, niñas y adolescentes 56, niños y adolescentes 46

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.3.; D: 7; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 116; AB: 89; AC: 2; AD: 1; AE: 16; AF: 14; AG: 42; AH: 28; AI: 56; AJ: 46; AK: 205; AL: 205.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.3.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 48 / salida 45: Lava, Dora lava

ID: ACT-SCJS14875. Folio: SC-261026-171233. Fecha: 2026-03-18.

Artista o agrupación: Teatro Demediado. Horario: 15:00:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 4, adultos mayores 4, jóvenes mujeres 7, jóvenes hombres 5, niñas y adolescentes 71, niños y adolescentes 80

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 82; AB: 89; AC: 0; AD: 0; AE: 4; AF: 4; AG: 7; AH: 5; AI: 71; AJ: 80; AK: 171; AL: 171.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 49 / salida 46: Festival Ex Nihilo

ID: ACT-SCBG71126. Folio: SC-261026-171234. Fecha: 2026-03-18.

Artista o agrupación: ANAN. Horario: 20:00:00. Artistas participantes reportados: 2. Público meta: Adolescentes y adultos. Eje reportado: Juventudes e infancias. Programa reportado: Festivales. Origen o alcance reportado: Nacional. Responsable reportado: Ileana. Observaciones: APOYO A FESTIVAL. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 14, adultos mayores 11, jóvenes mujeres 47, jóvenes hombres 29, niñas y adolescentes 0, niños y adolescentes 2

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.3.; D: 3; E: 2.4.3.1; F: cooperación; G: 6.

Cifras originales: AA: 61; AB: 42; AC: 0; AD: 0; AE: 14; AF: 11; AG: 47; AH: 29; AI: 0; AJ: 2; AK: 103; AL: 103.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.3.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 50 / salida 47: Ciénciame un cuento. La niña que quería pesar un rayo

ID: ACT-SCRV06714. Folio: SC-261026-171235. Fecha: 2026-03-19.

Artista o agrupación: SERCA A.C.. Horario: 11:00:00. Artistas participantes reportados: 5. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Honorarios reportados: $0,00. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 0, jóvenes mujeres 25, jóvenes hombres 3, niñas y adolescentes 36, niños y adolescentes 33

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 61; AB: 36; AC: 0; AD: 0; AE: 0; AF: 0; AG: 25; AH: 3; AI: 36; AJ: 33; AK: 97; AL: 97.

- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 51 / salida 48: Presentación de Marimbas, Minas Guanajuato

ID: ACT-SCFM34492. Folio: SC-261026-171236. Fecha: 2026-03-19.

Artista o agrupación: Marimbas, Minas Guanajuato. Horario: 19:00:00. Artistas participantes reportados: 7. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Espacios escénicos. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $19.720,00. Desglose etario original (sin redistribuir): adultas mayores 12, adultos mayores 4, jóvenes mujeres 0, jóvenes hombres 0, niñas y adolescentes 169, niños y adolescentes 188

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.2; D: 7; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 181; AB: 192; AC: 0; AD: 0; AE: 12; AF: 4; AG: 0; AH: 0; AI: 169; AJ: 188; AK: 373; AL: vacío.

- La fuente no tiene título. Se preparó una etiqueta descriptiva a partir del artista.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.2; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 52 / salida 49: Lava, Dora lava

ID: ACT-SCZD76778. Folio: SC-261026-171237. Fecha: 2026-03-20.

Artista o agrupación: Teatro Demediado. Horario: 10:00:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 0, jóvenes mujeres 0, jóvenes hombres 0, niñas y adolescentes 127, niños y adolescentes 111

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 127; AB: 111; AC: 0; AD: 0; AE: 0; AF: 0; AG: 0; AH: 0; AI: 127; AJ: 111; AK: 238; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 53 / salida 50: Lava, Dora lava

ID: ACT-SCZZ65213. Folio: SC-261026-171238. Fecha: 2026-03-20.

Artista o agrupación: Teatro Demediado. Horario: 15:00:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 0, jóvenes mujeres 0, jóvenes hombres 0, niñas y adolescentes 78, niños y adolescentes 72

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 78; AB: 72; AC: 0; AD: 0; AE: 0; AF: 0; AG: 0; AH: 0; AI: 78; AJ: 72; AK: 150; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 54 / salida 51: Programa 7 Feria del Libro UG

ID: ACT-SCHF87926. Folio: SC-261026-171239. Fecha: 2026-03-20.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 107, adultos mayores 79, jóvenes mujeres 85, jóvenes hombres 72, niñas y adolescentes 0, niños y adolescentes 0

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 192; AB: 151; AC: 0; AD: 0; AE: 107; AF: 79; AG: 85; AH: 72; AI: 0; AJ: 0; AK: 343; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 55 / salida 52: Festival Ex Nihilo

ID: ACT-SCIF67715. Folio: SC-261026-171240. Fecha: 2026-03-21.

Artista o agrupación: Ensamble A Tempo. Horario: 19:00:00. Artistas participantes reportados: 5. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Ileana. Observaciones: APOYO A FESTIVAL. Desglose etario original (sin redistribuir): adultas mayores 28, adultos mayores 11, jóvenes mujeres 84, jóvenes hombres 63, niñas y adolescentes 13, niños y adolescentes 13

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.3.; D: 3; E: 2.4.3.1; F: cooperación; G: 6.

Cifras originales: AA: 125; AB: 87; AC: 0; AD: 0; AE: 28; AF: 11; AG: 84; AH: 63; AI: 13; AJ: 13; AK: 212; AL: 213.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.3.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 56 / salida 53: Maratón Nacional de Teatro para Niñas, Niños y Jóvenes | ¿A dónde van l@s niñ@s?

ID: ACT-SCGA84676. Folio: SC-261026-171241. Fecha: 2026-03-21.

Artista o agrupación: Colectivo de Teatro Comunitario Soy del Puño. Horario: 18:00:00. Artistas participantes reportados: 10. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Observaciones: PAGA INBAL. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 2, adultos mayores 1, jóvenes mujeres 49, jóvenes hombres 36, niñas y adolescentes 21, niños y adolescentes 18

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 72; AB: 55; AC: 0; AD: 0; AE: 2; AF: 1; AG: 49; AH: 36; AI: 21; AJ: 18; AK: 127; AL: 127.

- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 57 / salida 54: Matinata

ID: ACT-SCUO63965. Folio: SC-261026-171242. Fecha: 2026-03-22.

Artista o agrupación: Banda de Música del Estado. Horario: 12:00:00. Artistas participantes reportados: 32. Origen o alcance reportado: Estatal. Desglose etario original (sin redistribuir): adultas mayores 11, adultos mayores 14, jóvenes mujeres 50, jóvenes hombres 71, niñas y adolescentes 28, niños y adolescentes 20

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 91; AB: 106; AC: 2; AD: 1; AE: 11; AF: 14; AG: 50; AH: 71; AI: 28; AJ: 20; AK: 195; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Diferencia conservada: mujeres 91 + hombres 106 = 197; total territorial 195.

### Fuente 58 / salida 55: Lava, Dora lava

ID: ACT-SCWT24919. Folio: SC-261026-171243. Fecha: 2026-03-23.

Artista o agrupación: Teatro Demediado. Horario: 10:00:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 13, adultos mayores 13, jóvenes mujeres 5, jóvenes hombres 4, niñas y adolescentes 60, niños y adolescentes 60

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 78; AB: 77; AC: 0; AD: 0; AE: 13; AF: 13; AG: 5; AH: 4; AI: 60; AJ: 60; AK: 155; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 59 / salida 56: Lava, Dora lava

ID: ACT-SCRO69830. Folio: SC-261026-171244. Fecha: 2026-03-23.

Artista o agrupación: Teatro Demediado. Horario: 10:00:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 4, adultos mayores 5, jóvenes mujeres 2, jóvenes hombres 2, niñas y adolescentes 7, niños y adolescentes 24

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 13; AB: 31; AC: 0; AD: 0; AE: 4; AF: 5; AG: 2; AH: 2; AI: 7; AJ: 24; AK: 44; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 60 / salida 57: Los malos hábitos

ID: ACT-SCLP99244. Folio: SC-261026-171245. Fecha: 2026-03-23.

Artista o agrupación: Eva Roballo y Valeria Oviedo. Horario: 20:00:00. Artistas participantes reportados: 4. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Internacional. Responsable reportado: Jonathan. Honorarios reportados: $34.800,00. Desglose etario original (sin redistribuir): adultas mayores 36, adultos mayores 27, jóvenes mujeres 60, jóvenes hombres 50, niñas y adolescentes 0, niños y adolescentes 0

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 96; AB: 77; AC: 0; AD: 0; AE: 36; AF: 27; AG: 60; AH: 50; AI: 0; AJ: 0; AK: 173; AL: 173.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.

### Fuente 61 / salida 58: Lava, Dora lava

ID: ACT-SCHW75777. Folio: SC-261026-171246. Fecha: 2026-03-24.

Artista o agrupación: Teatro Demediado. Horario: 10:00:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $4.000,00. Desglose etario original (sin redistribuir): adultas mayores 12, adultos mayores 13, jóvenes mujeres 3, jóvenes hombres 3, niñas y adolescentes 41, niños y adolescentes 35

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 56; AB: 51; AC: 0; AD: 0; AE: 12; AF: 13; AG: 3; AH: 3; AI: 41; AJ: 35; AK: 107; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.

### Fuente 62 / salida 59: Día de las Flores

ID: ACT-SCSM04714. Folio: SC-261026-171247. Fecha: 2026-03-26.

Artista o agrupación: Ballet Folklórico de la Universidad de Guanajuato. Horario: 19:00:00. Artistas participantes reportados: 90. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 93, adultos mayores 65, jóvenes mujeres 155, jóvenes hombres 120, niñas y adolescentes 12, niños y adolescentes 7

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 260; AB: 192; AC: 0; AD: 0; AE: 93; AF: 65; AG: 155; AH: 120; AI: 12; AJ: 7; AK: 452; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 63 / salida 60: Congreso de Notarios

ID: ACT-SCLH37151. Folio: SC-261026-171248. Fecha: 2026-03-26.

Artista o agrupación: Banda de Música del Estado. Horario: 10:00:00. Artistas participantes reportados: 32. Origen o alcance reportado: Estatal. Responsable reportado: Adalberto. Desglose etario original (sin redistribuir): adultas mayores 15, adultos mayores 19, jóvenes mujeres 25, jóvenes hombres 27, niñas y adolescentes 0, niños y adolescentes 0

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 40; AB: 46; AC: 0; AD: 0; AE: 15; AF: 19; AG: 25; AH: 27; AI: 0; AJ: 0; AK: 86; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 64 / salida 61: Viernes de Dolores

ID: ACT-SCBH42486. Folio: SC-261026-171249. Fecha: 2026-03-27.

Artista o agrupación: Banda de Música del Estado. Horario: 08:00:00. Artistas participantes reportados: 32. Origen o alcance reportado: Estatal. Responsable reportado: Adalberto. Desglose etario original (sin redistribuir): adultas mayores 125, adultos mayores 165, jóvenes mujeres 230, jóvenes hombres 245, niñas y adolescentes 87, niños y adolescentes 90

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 442; AB: 500; AC: 0; AD: 0; AE: 125; AF: 165; AG: 230; AH: 245; AI: 87; AJ: 90; AK: 942; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 65 / salida 62: 6ta Edición Festival Coroneo Sí Sabe

ID: ACT-SCRK68212. Folio: SC-261026-171250. Fecha: 2026-03-29.

Artista o agrupación: Ballet Folklorico Rahatzi. Horario: 12:00:00. Artistas participantes reportados: 20. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $18.792,00. Desglose etario original (sin redistribuir): adultas mayores 12, adultos mayores 8, jóvenes mujeres 67, jóvenes hombres 49, niñas y adolescentes 76, niños y adolescentes 63

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.3.; D: 7; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 156; AB: 122; AC: 1; AD: 2; AE: 12; AF: 8; AG: 67; AH: 49; AI: 76; AJ: 63; AK: 278; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.3.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 66 / salida 63: Día de la Primavera

ID: ACT-SCGV94241. Folio: SC-261026-171251. Fecha: 2026-03-29.

Artista o agrupación: Cronopio Teatro. Horario: 19:00:00. Artistas participantes reportados: 5. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $19.167,50. Desglose etario original (sin redistribuir): adultas mayores 10, adultos mayores 10, jóvenes mujeres 26, jóvenes hombres 30, niñas y adolescentes 11, niños y adolescentes 10

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 7; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 48; AB: 52; AC: 1; AD: 2; AE: 10; AF: 10; AG: 26; AH: 30; AI: 11; AJ: 10; AK: 100; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 67 / salida 64: Tenebrae

ID: ACT-SCPD84866. Folio: SC-261026-171252. Fecha: 2026-04-10.

Artista o agrupación: La Camerata de la Nueva España. Horario: 20:00:00. Artistas participantes reportados: 7. Público meta: Familiar. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: $18.880,00. Desglose etario original (sin redistribuir): adultas mayores 30, adultos mayores 18, jóvenes mujeres 76, jóvenes hombres 57, niñas y adolescentes 6, niños y adolescentes 2

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 112; AB: 77; AC: 0; AD: 0; AE: 30; AF: 18; AG: 76; AH: 57; AI: 6; AJ: 2; AK: 189; AL: vacío.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 68 / salida 65: NEKO el gato viajero

ID: ACT-SCFE92337. Folio: SC-261026-171253. Fecha: 2026-04-11.

Artista o agrupación: AOPAR. Horario: 18:00:00. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: Fondo Estatal para la Cultura y las Artes Guanajuato. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 102, adultos mayores 89, jóvenes mujeres 151, jóvenes hombres 136, niñas y adolescentes 192, niños y adolescentes 128

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 445; AB: 355; AC: 0; AD: 2; AE: 102; AF: 89; AG: 151; AH: 136; AI: 192; AJ: 128; AK: 800; AL: 800.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 69 / salida 66: Forjado al viento

ID: ACT-SCHR95405. Folio: SC-261026-171254. Fecha: 2026-04-12.

Artista o agrupación: Banda de Música del Estado. Horario: 13:00:00. Artistas participantes reportados: 30. Público meta: Familiar. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 9, adultos mayores 5, jóvenes mujeres 37, jóvenes hombres 29, niñas y adolescentes 18, niños y adolescentes 16

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 64; AB: 50; AC: 0; AD: 0; AE: 9; AF: 5; AG: 37; AH: 29; AI: 18; AJ: 16; AK: 114; AL: 114.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 70 / salida 67: Programa no. 8

ID: ACT-SCPN58493. Folio: SC-261026-171255. Fecha: 2026-04-17.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 84, adultos mayores 63, jóvenes mujeres 146, jóvenes hombres 132, niñas y adolescentes 0, niños y adolescentes 2

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 230; AB: 197; AC: 0; AD: 0; AE: 84; AF: 63; AG: 146; AH: 132; AI: 0; AJ: 2; AK: 427; AL: 427.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 71 / salida 68: Caballos JORNADAS DID 2026

ID: ACT-SCUI57271. Folio: SC-261026-171256. Fecha: 2026-04-18.

Artista o agrupación: Laboratorio de con-TACTO. Horario: 18:00:00. Artistas participantes reportados: 3. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: CEARG. Honorarios reportados: $18.560,00. Desglose etario original (sin redistribuir): adultas mayores 7, adultos mayores 3, jóvenes mujeres 18, jóvenes hombres 15, niñas y adolescentes 2, niños y adolescentes 3

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 27; AB: 21; AC: 0; AD: 0; AE: 7; AF: 3; AG: 18; AH: 15; AI: 2; AJ: 3; AK: 48; AL: 48.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 72 / salida 69: Juguetes de cartón JORNADAS DID 2026

ID: ACT-SCXR47386. Folio: SC-261026-171257. Fecha: 2026-04-18.

Artista o agrupación: COREDA. Horario: 19:00:00. Artistas participantes reportados: 31. Público meta: Familiar. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Honorarios reportados: $40.000,00. Desglose etario original (sin redistribuir): adultas mayores 35, adultos mayores 24, jóvenes mujeres 75, jóvenes hombres 62, niñas y adolescentes 21, niños y adolescentes 13

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 131; AB: 99; AC: 0; AD: 0; AE: 35; AF: 24; AG: 75; AH: 62; AI: 21; AJ: 13; AK: 230; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 73 / salida 70: Muestra Estatal de Academias de Ballet Clásico

ID: ACT-SCVE30233. Folio: SC-261026-171258. Fecha: 2026-04-18.

Artista o agrupación: Dir. Estela Piña. Horario: 17:00:00. Artistas participantes reportados: 180. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Vanessa. Desglose etario original (sin redistribuir): adultas mayores 34, adultos mayores 32, jóvenes mujeres 180, jóvenes hombres 100, niñas y adolescentes 83, niños y adolescentes 74

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 297; AB: 206; AC: 0; AD: 0; AE: 34; AF: 32; AG: 180; AH: 100; AI: 83; AJ: 74; AK: 503; AL: vacío.

- Año 2026 tomado del título de la hoja; fecha original sin año: sábado 18 de abril
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 74 / salida 71: Homenaje al Danzante Natividad Reina

ID: ACT-SCQY53295. Folio: SC-261026-171259. Fecha: 2026-04-19.

Artista o agrupación: Colectivo Pirules. Horario: 18:00:00. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 70, adultos mayores 40, jóvenes mujeres 45, jóvenes hombres 32, niñas y adolescentes 45, niños y adolescentes 30

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.4.3.3; F: cooperación; G: 5.

Cifras originales: AA: 165; AB: 105; AC: 5; AD: 3; AE: 70; AF: 40; AG: 45; AH: 32; AI: 45; AJ: 30; AK: 270; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 75 / salida 72: Presentación de Gallo

ID: ACT-SCKR15635. Folio: SC-261026-171300. Fecha: 2026-04-19.

Artista o agrupación: Gallo. Horario: 20:00:00. Artistas participantes reportados: 5. Público meta: Jóvenes. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $19.300,00. Desglose etario original (sin redistribuir): adultas mayores 41, adultos mayores 46, jóvenes mujeres 16, jóvenes hombres 21, niñas y adolescentes 5, niños y adolescentes 8

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.4.3.3; F: cooperación; G: 5.

Cifras originales: AA: 63; AB: 77; AC: 1; AD: 2; AE: 41; AF: 46; AG: 16; AH: 21; AI: 5; AJ: 8; AK: 140; AL: vacío.

- La fuente no tiene título. Se preparó una etiqueta descriptiva a partir del artista.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 76 / salida 73: Oceano

ID: ACT-SCYK93926. Folio: SC-261026-171301. Fecha: 2026-04-20.

Artista o agrupación: enSEÑAteatro. Horario: 09:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): jóvenes mujeres 58, jóvenes hombres 58, niñas y adolescentes 140, niños y adolescentes 137

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 198; AB: 195; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: 58; AH: 58; AI: 140; AJ: 137; AK: 393; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 77 / salida 74: Oceano

ID: ACT-SCHR97739. Folio: SC-261026-171302. Fecha: 2026-04-20.

Artista o agrupación: enSEÑAteatro. Horario: 11:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 2, adultos mayores 3, jóvenes mujeres 10, jóvenes hombres 10, niñas y adolescentes 38, niños y adolescentes 37

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 50; AB: 50; AC: vacío; AD: vacío; AE: 2; AF: 3; AG: 10; AH: 10; AI: 38; AJ: 37; AK: 100; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 78 / salida 75: El abrazo de mi luna JORNADAS DID 2026

ID: ACT-SCCW53985. Folio: SC-261026-171303. Fecha: 2026-04-22.

Artista o agrupación: Producciones Arlequín. Horario: 16:00:00. Artistas participantes reportados: 3. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: CEARG. Honorarios reportados: $9.280,00

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.

### Fuente 79 / salida 76: Bodas de Sangre JORNADAS DID 2026

ID: ACT-SCGP24769. Folio: SC-261026-171304. Fecha: 2026-04-22.

Artista o agrupación: Artefacto Flamenco. Horario: 20:00:00. Artistas participantes reportados: 22. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: $46.000,00. Desglose etario original (sin redistribuir): adultas mayores 130, adultos mayores 75, jóvenes mujeres 68, jóvenes hombres 37, niñas y adolescentes 1, niños y adolescentes 15

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 199; AB: 128; AC: 0; AD: 1; AE: 130; AF: 75; AG: 68; AH: 37; AI: 1; AJ: 15; AK: 327; AL: 327.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 80 / salida 77: Sangre Negra JORNADAS DID 2026

ID: ACT-SCGL45187. Folio: SC-261026-171305. Fecha: 2026-04-23.

Artista o agrupación: Colectivo AfroSon. Horario: 18:00:00. Artistas participantes reportados: 10. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: CEARG. Observaciones: JORNADAS DID. Honorarios reportados: $58.000,00

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: vacío; AB: vacío; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Sin cifras de población; no se creó una fila ficticia.

### Fuente 81 / salida 78: Oceano

ID: ACT-SCIJ39753. Folio: SC-261026-171306. Fecha: 2026-04-24.

Artista o agrupación: enSEÑAteatro. Horario: 09:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultos mayores 3, jóvenes mujeres 14, jóvenes hombres 13, niñas y adolescentes 57, niños y adolescentes 68

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: vacío; AB: vacío; AC: vacío; AD: vacío; AE: vacío; AF: 3; AG: 14; AH: 13; AI: 57; AJ: 68; AK: 155; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 82 / salida 79: Cihuameh JORNADAS DID 2026

ID: ACT-SCIU98249. Folio: SC-261026-171307. Fecha: 2026-04-24.

Artista o agrupación: Colectivo Arte Escena. Horario: 19:00:00. Artistas participantes reportados: 6. Público meta: Adolescentes y adultos. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Observaciones: JORNADAS DID. Honorarios reportados: $35.000,00. Desglose etario original (sin redistribuir): adultas mayores 4, adultos mayores 1, jóvenes mujeres 15, jóvenes hombres 12, niñas y adolescentes 2, niños y adolescentes 1

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 21; AB: 14; AC: 0; AD: 0; AE: 4; AF: 1; AG: 15; AH: 12; AI: 2; AJ: 1; AK: 35; AL: 35.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 83 / salida 80: Programa no. 9

ID: ACT-SCFL27345. Folio: SC-261026-171308. Fecha: 2026-04-24.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO. Honorarios reportados: N/A

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: vacío; AB: vacío; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Sin cifras de población; no se creó una fila ficticia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 84 / salida 81: Sangre Negra

ID: ACT-SCIS62407. Folio: SC-261026-171309. Fecha: 2026-04-25.

Artista o agrupación: Afroson. Horario: 20:00:00. Artistas participantes reportados: 9. Público meta: Jóvenes. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Observaciones: JORNADAS DID. Honorarios reportados: $10.921,00. Desglose etario original (sin redistribuir): adultas mayores 55, adultos mayores 92, jóvenes mujeres 76, jóvenes hombres 68, niñas y adolescentes 10, niños y adolescentes 12

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 4.

Cifras originales: AA: 141; AB: 172; AC: vacío; AD: vacío; AE: 55; AF: 92; AG: 76; AH: 68; AI: 10; AJ: 12; AK: 313; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 85 / salida 82: Latidos del corazón. Añoranzas de la infancia

ID: ACT-SCUC83261. Folio: SC-261026-171310. Fecha: 2026-04-25.

Artista o agrupación: Ballet Folklórico de la Universidad de Guanajuato. Horario: 19:00:00. Artistas participantes reportados: 92. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 140, adultos mayores 130, jóvenes mujeres 150, jóvenes hombres 170, niñas y adolescentes 170, niños y adolescentes 160

Alineación original: A: objetivo 4.4.; B: estrategia 4.4.3.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 475; AB: 475; AC: 15; AD: 15; AE: 140; AF: 130; AG: 150; AH: 170; AI: 170; AJ: 160; AK: 950; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 4.4.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 4.4.3.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 86 / salida 83: Shagadaskada

ID: ACT-SCXB57445. Folio: SC-261026-171311. Fecha: 2026-04-25.

Artista o agrupación: Cronopio Teatro. Horario: 19:00:00. Artistas participantes reportados: 5. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: Festejos Día de la Niñez. Honorarios reportados: $15.000,00. Desglose etario original (sin redistribuir): adultas mayores 13, adultos mayores 9, jóvenes mujeres 48, jóvenes hombres 31, niñas y adolescentes 20, niños y adolescentes 15

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 4.

Cifras originales: AA: 81; AB: 55; AC: 0; AD: 0; AE: 13; AF: 9; AG: 48; AH: 31; AI: 20; AJ: 15; AK: 136; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 87 / salida 84: Gala Anual Ra'i Nui JORNADAS DID 2026

ID: ACT-SCDB34994. Folio: SC-261026-171312. Fecha: 2026-04-25.

Artista o agrupación: Ra'i Nui Danzas Polinesias. Horario: 19:00:00. Artistas participantes reportados: 35. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Observaciones: Jornadas DID grupo invitado. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 27, adultos mayores 17, jóvenes mujeres 55, jóvenes hombres 32, niñas y adolescentes 19, niños y adolescentes 13

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 4.

Cifras originales: AA: 104; AB: 62; AC: 3; AD: 0; AE: 27; AF: 17; AG: 55; AH: 32; AI: 19; AJ: 13; AK: 166; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 88 / salida 85: Latidos del corazón. Añoranzas de la infancia

ID: ACT-SCTC68513. Folio: SC-261026-171313. Fecha: 2026-04-26.

Artista o agrupación: Ballet Folklórico de la Universidad de Guanajuato. Horario: 12:00:00. Artistas participantes reportados: 140. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 52, adultos mayores 45, jóvenes mujeres 124, jóvenes hombres 98, niñas y adolescentes 89, niños y adolescentes 77

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 266; AB: 221; AC: 1; AD: 1; AE: 52; AF: 45; AG: 124; AH: 98; AI: 89; AJ: 77; AK: 487; AL: 487.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 89 / salida 86: Los Músicos de la Capital

ID: ACT-SCOW82489. Folio: SC-261026-171314. Fecha: 2026-04-26.

Artista o agrupación: Ópera Guanajuato. Horario: 13:00:00. Artistas participantes reportados: 17. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Honorarios reportados: $29.000,00. Desglose etario original (sin redistribuir): adultas mayores 4, adultos mayores 4, jóvenes mujeres 19, jóvenes hombres 9, niñas y adolescentes 16, niños y adolescentes 13

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 4.

Cifras originales: AA: 39; AB: 26; AC: 0; AD: 0; AE: 4; AF: 4; AG: 19; AH: 9; AI: 16; AJ: 13; AK: 65; AL: 65.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 90 / salida 87: Jornadas por el Día Internacioal de la Danza 2026

ID: ACT-SCEG90193. Folio: SC-261026-171315. Fecha: 2026-04-29.

Artista o agrupación: Corazón Down; OAHU; Ixchel Dance Studio; Ballet Clásico de la Casa de Cultura SFR. Horario: 17:00:00. Artistas participantes reportados: 80. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: JORNADAS DID (3 grupos contratados, 1 invitado). Honorarios reportados: $78.000,00. Desglose etario original (sin redistribuir): adultas mayores 139, adultos mayores 121, jóvenes mujeres 52, jóvenes hombres 37, niñas y adolescentes 9, niños y adolescentes 15

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.2; D: 4; E: 2.2.1; F: cooperación; G: 4.

Cifras originales: AA: 201; AB: 175; AC: 1; AD: 2; AE: 139; AF: 121; AG: 52; AH: 37; AI: 9; AJ: 15; AK: 376; AL: 376.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.2; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 91 / salida 88: 194 años de la fundación de Romita

ID: ACT-SCTD81554. Folio: SC-261026-171316. Fecha: 2026-04-29.

Artista o agrupación: Flores de Marfil. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 200, adultos mayores 200, jóvenes mujeres 150, jóvenes hombres 150, niñas y adolescentes 100, niños y adolescentes 100

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.4.3.3; F: cooperación; G: 5.

Cifras originales: AA: 450; AB: 450; AC: vacío; AD: vacío; AE: 200; AF: 200; AG: 150; AH: 150; AI: 100; AJ: 100; AK: 900; AL: 900.

- Subdisciplina musical pendiente.
- Sede pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 92 / salida 89: Programa no. 10 Celebración del Día del Ñiño y la Niña

ID: ACT-SCBH18108. Folio: SC-261026-171317. Fecha: 2026-04-30.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 11:00:00. Artistas participantes reportados: 80. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 14, adultos mayores 7, jóvenes mujeres 32, jóvenes hombres 16, niñas y adolescentes 140, niños y adolescentes 85

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 186; AB: 108; AC: 0; AD: 0; AE: 14; AF: 7; AG: 32; AH: 16; AI: 140; AJ: 85; AK: 294; AL: 294.

- Subdisciplina multidisciplinaria pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 93 / salida 90: Tierra, lengua y corazón

ID: ACT-SCWS57805. Folio: SC-261026-171318. Fecha: 2026-04-30.

Artista o agrupación: Cronopio Teatro. Horario: 12:00:00. Artistas participantes reportados: 5. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 5, adultos mayores 5, jóvenes mujeres 10, jóvenes hombres 10, niñas y adolescentes 40, niños y adolescentes 50

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.4.3.3; F: cooperación; G: 4.

Cifras originales: AA: 55; AB: 65; AC: vacío; AD: vacío; AE: 5; AF: 5; AG: 10; AH: 10; AI: 40; AJ: 50; AK: 120; AL: 120.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 94 / salida 91: Programa no. 10 Celebración del Día del Ñiño y la Niña

ID: ACT-SCWW82438. Folio: SC-261026-171319. Fecha: 2026-04-30.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 19:00:00. Artistas participantes reportados: 80. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 15, adultos mayores 10, jóvenes mujeres 74, jóvenes hombres 58, niñas y adolescentes 36, niños y adolescentes 28

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 125; AB: 97; AC: 0; AD: 1; AE: 15; AF: 10; AG: 74; AH: 58; AI: 36; AJ: 28; AK: 222; AL: 222.

- Subdisciplina multidisciplinaria pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 95 / salida 92: Cúcara Títere Fue / Hechicera que cambia rostros ESCENAS AL VUELO

ID: ACT-SCCE14498. Folio: SC-261026-171320. Fecha: 2026-05-02.

Artista o agrupación: Títiri Tátara / Manos en Escena. Horario: 18:00:00. Artistas participantes reportados: 10. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Terriorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $11.600,00. Desglose etario original (sin redistribuir): adultas mayores 4, adultos mayores 5, jóvenes mujeres 18, jóvenes hombres 17, niñas y adolescentes 16, niños y adolescentes 20

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 9; E: 2.4.3.3; F: cooperación; G: 4.

Cifras originales: AA: 38; AB: 42; AC: 0; AD: 0; AE: 4; AF: 5; AG: 18; AH: 17; AI: 16; AJ: 20; AK: 80; AL: 80.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 96 / salida 93: Concierto de Jazz

ID: ACT-SCAF21446. Folio: SC-261026-171321. Fecha: 2026-05-02.

Artista o agrupación: Juan de los Reyes y su Bandototota de Jazz de Guanajuato. Horario: 19:00:00. Artistas participantes reportados: 20. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: $58.000,00. Desglose etario original (sin redistribuir): adultas mayores 76, adultos mayores 62, jóvenes mujeres 215, jóvenes hombres 189, niñas y adolescentes 48, niños y adolescentes 56

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.4.3.3; F: cooperación; G: 4.

Cifras originales: AA: 339; AB: 307; AC: 0; AD: 0; AE: 76; AF: 62; AG: 215; AH: 189; AI: 48; AJ: 56; AK: 646; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 97 / salida 94: La Bruja

ID: ACT-SCCP44615. Folio: SC-261026-171322. Fecha: 2026-05-03.

Artista o agrupación: Líquido Colectivo. Horario: 13:00:00. Artistas participantes reportados: 3. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: $23.500,00. Desglose etario original (sin redistribuir): adultas mayores 92, adultos mayores 74, jóvenes mujeres 156, jóvenes hombres 142, niñas y adolescentes 36, niños y adolescentes 28

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.4.3.3; F: cooperación; G: 4.

Cifras originales: AA: 284; AB: 244; AC: 0; AD: 0; AE: 92; AF: 74; AG: 156; AH: 142; AI: 36; AJ: 28; AK: 528; AL: 528.

- Año 2026 tomado del título de la hoja; fecha original sin año: domingo 3 de mayo
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 98 / salida 95: Lotería

ID: ACT-SCBM27426. Folio: SC-261026-171323. Fecha: 2026-05-07.

Artista o agrupación: Ballet Folklórico de la Universidad de Guanajuato. Horario: 19:00:00. Artistas participantes reportados: 90. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 43, adultos mayores 39, jóvenes mujeres 81, jóvenes hombres 58, niñas y adolescentes 7, niños y adolescentes 4

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 132; AB: 101; AC: 1; AD: 0; AE: 43; AF: 39; AG: 81; AH: 58; AI: 7; AJ: 4; AK: 233; AL: 233.

- Año 2026 tomado del título de la hoja; fecha original sin año: jueves 7 de mayo
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 99 / salida 96: Programa no. 11

ID: ACT-SCIQ51357. Folio: SC-261026-171324. Fecha: 2026-05-08.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 43, adultos mayores 31, jóvenes mujeres 103, jóvenes hombres 92, niñas y adolescentes 4, niños y adolescentes 2

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 151; AB: 125; AC: 1; AD: 0; AE: 43; AF: 31; AG: 103; AH: 92; AI: 4; AJ: 2; AK: 276; AL: 276.

- Año 2026 tomado del título de la hoja; fecha original sin año: viernes 8 de mayo
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 100 / salida 97: Sangre Negra

ID: ACT-SCKA89291. Folio: SC-261026-171325. Fecha: 2026-05-09.

Artista o agrupación: AfroSon. Horario: 19:00:00. Artistas participantes reportados: 9. Público meta: Jóvenes. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 75, adultos mayores 75, jóvenes mujeres 100, jóvenes hombres 100, niñas y adolescentes 50, niños y adolescentes 50

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.4.3.3; F: cooperación; G: 4.

Cifras originales: AA: 230; AB: 230; AC: 5; AD: 5; AE: 75; AF: 75; AG: 100; AH: 100; AI: 50; AJ: 50; AK: 460; AL: 460.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 101 / salida 98: Los hombres de la tierra

ID: ACT-SCYF91006. Folio: SC-261026-171326. Fecha: 2026-05-09.

Artista o agrupación: Dir. Viridiana Bravo. Horario: 19:00:00. Artistas participantes reportados: 10. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: $37.212.01. Desglose etario original (sin redistribuir): adultas mayores 49, adultos mayores 36, jóvenes mujeres 105, jóvenes hombres 78, niñas y adolescentes 23, niños y adolescentes 16

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.4.3.3; F: cooperación; G: 4.

Cifras originales: AA: 177; AB: 130; AC: 0; AD: 0; AE: 49; AF: 36; AG: 105; AH: 78; AI: 23; AJ: 16; AK: 307; AL: 307.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 102 / salida 99: Tierra, lengua y corazón ESCENAS AL VUELO

ID: ACT-SCKC59266. Folio: SC-261026-171327. Fecha: 2026-05-09.

Artista o agrupación: Cronopio Teatro. Horario: 18:00:00. Artistas participantes reportados: 6. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Terriorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $12.600,00. Desglose etario original (sin redistribuir): adultas mayores 6, adultos mayores 5, jóvenes mujeres 12, jóvenes hombres 12, niñas y adolescentes 12, niños y adolescentes 11

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 9; E: 2.4.3.3; F: cooperación; G: 4.

Cifras originales: AA: 30; AB: 28; AC: 0; AD: 0; AE: 6; AF: 5; AG: 12; AH: 12; AI: 12; AJ: 11; AK: 58; AL: 58.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 103 / salida 100: Réquiem SP

ID: ACT-SCED34215. Folio: SC-261026-171328. Fecha: 2026-05-12.

Artista o agrupación: Ballet de la Ciudad de Sao Paulo. Horario: 20:00:00. Artistas participantes reportados: 30. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: pendiente. Origen o alcance reportado: Internacional. Responsable reportado: Jonathan. Honorarios reportados: $998.101.40. Desglose etario original (sin redistribuir): adultas mayores 54, adultos mayores 42, jóvenes mujeres 153, jóvenes hombres 129, niñas y adolescentes 2, niños y adolescentes 4

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 9; E: 2.4.3.3; F: cooperación; G: 4.

Cifras originales: AA: 209; AB: 175; AC: 0; AD: 0; AE: 54; AF: 42; AG: 153; AH: 129; AI: 2; AJ: 4; AK: 384; AL: 384.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 104 / salida 101: Oceano

ID: ACT-SCMH85463. Folio: SC-261026-171329. Fecha: 2026-05-13.

Artista o agrupación: enSEÑAteatro. Horario: 09:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 15, adultos mayores 15, jóvenes mujeres 320, jóvenes hombres 284, niñas y adolescentes 369, niños y adolescentes 371

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 712; AB: 677; AC: 8; AD: 7; AE: 15; AF: 15; AG: 320; AH: 284; AI: 369; AJ: 371; AK: 1389; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 105 / salida 102: Oceano

ID: ACT-SCND03690. Folio: SC-261026-171330. Fecha: 2026-05-13.

Artista o agrupación: enSEÑAteatro. Horario: 11:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): jóvenes mujeres 50, jóvenes hombres 55, niñas y adolescentes 204, niños y adolescentes 185

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 254; AB: 240; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: 50; AH: 55; AI: 204; AJ: 185; AK: 494; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 106 / salida 103: Oceano

ID: ACT-SCSK32663. Folio: SC-261026-171331. Fecha: 2026-05-13.

Artista o agrupación: enSEÑAteatro. Horario: 15:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 17, adultos mayores 18, jóvenes mujeres 10, jóvenes hombres 5, niñas y adolescentes 110, niños y adolescentes 70

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 137; AB: 93; AC: vacío; AD: vacío; AE: 17; AF: 18; AG: 10; AH: 5; AI: 110; AJ: 70; AK: 230; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 107 / salida 104: Fiestas del llanito

ID: ACT-SCPL91698. Folio: SC-261026-171332. Fecha: 2026-05-15.

Artista o agrupación: Las Palomitas Serranas. Horario: 19:00:00. Artistas participantes reportados: 5. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $34.800,00. Desglose etario original (sin redistribuir): adultas mayores 65, adultos mayores 40, jóvenes mujeres 45, jóvenes hombres 15, niñas y adolescentes 20, niños y adolescentes 15

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 130; AB: 70; AC: 0; AD: 0; AE: 65; AF: 40; AG: 45; AH: 15; AI: 20; AJ: 15; AK: 200; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 108 / salida 105: Evento Tequila Corralejo

ID: ACT-SCFQ21613. Folio: SC-261026-171333. Fecha: 2026-05-15.

Artista o agrupación: Banda de Música del Estado. Horario: Pendiente. Artistas participantes reportados: 30. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: INTERCAMBIO. Honorarios reportados: N/A

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: vacío.

- Subdisciplina multidisciplinaria pendiente.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 109 / salida 106: Lava Dora Lava ESCENAS AL VUELO

ID: ACT-SCBD69014. Folio: SC-261026-171334. Fecha: 2026-05-16.

Artista o agrupación: Teatro Demediado. Horario: 18:00:00. Artistas participantes reportados: 6. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Terriorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $14.600,00. Desglose etario original (sin redistribuir): adultas mayores 8, adultos mayores 8, jóvenes mujeres 10, jóvenes hombres 8, niñas y adolescentes 11, niños y adolescentes 14

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 29; AB: 30; AC: 0; AD: 0; AE: 8; AF: 8; AG: 10; AH: 8; AI: 11; AJ: 14; AK: 59; AL: 59.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 110 / salida 107: Josefina la gallina puso un huevo en la cocina

ID: ACT-SCRI92889. Folio: SC-261026-171335. Fecha: 2026-05-17.

Artista o agrupación: Vaca 35 Teatro. Horario: 18:00:00. Artistas participantes reportados: 4. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Nacional. Responsable reportado: Elisa. Observaciones: EFI ARTES. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 7, adultos mayores 3, jóvenes mujeres 25, jóvenes hombres 19, niñas y adolescentes 12, niños y adolescentes 9

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 44; AB: 31; AC: 0; AD: 0; AE: 7; AF: 3; AG: 25; AH: 19; AI: 12; AJ: 9; AK: 75; AL: 75.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 111 / salida 108: Programa no. 12

ID: ACT-SCQB84033. Folio: SC-261026-171336. Fecha: 2026-05-22.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 112 / salida 109: Bajo esta piedra hundirás tu iglesia

ID: ACT-SCJO17369. Folio: SC-261026-171337. Fecha: 2026-05-23.

Artista o agrupación: Un Colectivo. Horario: 19:00:00. Artistas participantes reportados: 15. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: $55.320,40. Desglose etario original (sin redistribuir): adultas mayores 31, adultos mayores 23, jóvenes mujeres 128, jóvenes hombres 109, niñas y adolescentes 7, niños y adolescentes 12

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 167; AB: 145; AC: 1; AD: 1; AE: 31; AF: 23; AG: 128; AH: 109; AI: 7; AJ: 12; AK: 312; AL: 312.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 113 / salida 110: Axolotl: gran mostruo del agua ESCENAS AL VUELO

ID: ACT-SCEJ23108. Folio: SC-261026-171338. Fecha: 2026-05-23.

Artista o agrupación: Teatro Andante. Horario: 18:00:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Terriorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $12.600,00. Desglose etario original (sin redistribuir): adultas mayores 10, adultos mayores 9, jóvenes mujeres 25, jóvenes hombres 26, niñas y adolescentes 150, niños y adolescentes 80

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 186; AB: 116; AC: 1; AD: 1; AE: 10; AF: 9; AG: 25; AH: 26; AI: 150; AJ: 80; AK: 302; AL: 302.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 114 / salida 111: Ciudad Nube

ID: ACT-SCAL52723. Folio: SC-261026-171339. Fecha: 2026-05-24.

Artista o agrupación: Patáfora Teatro. Horario: 18:00:00. Artistas participantes reportados: 7. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Nacional. Responsable reportado: Elisa. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 17, adultos mayores 13, jóvenes mujeres 58, jóvenes hombres 43, niñas y adolescentes 35, niños y adolescentes 27

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 110; AB: 84; AC: 0; AD: 1; AE: 17; AF: 13; AG: 58; AH: 43; AI: 35; AJ: 27; AK: 194; AL: vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 115 / salida 112: Oceano

ID: ACT-SCFS59836. Folio: SC-261026-171340. Fecha: 2026-05-24.

Artista o agrupación: enSEÑAteatro. Horario: 17:00:00. Artistas participantes reportados: 16. Público meta: Escolar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 10, adultos mayores 16, jóvenes mujeres 10, jóvenes hombres 8, niñas y adolescentes 143, niños y adolescentes 109

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 163; AB: 133; AC: vacío; AD: vacío; AE: 10; AF: 16; AG: 10; AH: 8; AI: 143; AJ: 109; AK: 296; AL: vacío.

- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 116 / salida 113: Oceano

ID: ACT-SCXX55925. Folio: SC-261026-171341. Fecha: 2026-05-25.

Artista o agrupación: enSEÑAteatro. Horario: 09:00:00. Artistas participantes reportados: 16. Público meta: Escolar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 29, adultos mayores 30, jóvenes mujeres 30, jóvenes hombres 29, niñas y adolescentes 78, niños y adolescentes 81

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 137; AB: 140; AC: vacío; AD: vacío; AE: 29; AF: 30; AG: 30; AH: 29; AI: 78; AJ: 81; AK: 277; AL: vacío.

- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 117 / salida 114: Oceano

ID: ACT-SCZL07793. Folio: SC-261026-171342. Fecha: 2026-05-25.

Artista o agrupación: enSEÑAteatro. Horario: 11:00:00. Artistas participantes reportados: 16. Público meta: Escolar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 28, adultos mayores 30, jóvenes mujeres 27, jóvenes hombres 25, niñas y adolescentes 105, niños y adolescentes 80

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 160; AB: 135; AC: vacío; AD: vacío; AE: 28; AF: 30; AG: 27; AH: 25; AI: 105; AJ: 80; AK: 295; AL: vacío.

- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 118 / salida 115: Oceano

ID: ACT-SCQO55097. Folio: SC-261026-171343. Fecha: 2026-05-25.

Artista o agrupación: enSEÑAteatro. Horario: 15:00:00. Artistas participantes reportados: 16. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 16, adultos mayores 15, niñas y adolescentes 190, niños y adolescentes 206

Alineación original: A: objetivo 2.4; B: estrategia: 2.4.3.1.; D: 4; E: 2.4.3.1; F: inclusión; G: 16.1.

Cifras originales: AA: 206; AB: 221; AC: vacío; AD: vacío; AE: 16; AF: 15; AG: vacío; AH: vacío; AI: 190; AJ: 206; AK: 427; AL: vacío.

- Estrategia_PG: fuente estrategia: 2.4.3.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.1 Impulsar el desarrollo artístico y cultural entre infancias y juventudes y el catálogo actual. Validar discrepancia.

### Fuente 119 / salida 116: ChimalmAnimales

ID: ACT-SCCQ44193. Folio: SC-261026-171344. Fecha: 2026-05-27.

Artista o agrupación: Ensamble Chimalma. Horario: 18:00:00. Artistas participantes reportados: 4. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 6, adultos mayores 4, jóvenes mujeres 35, jóvenes hombres 28, niñas y adolescentes 23, niños y adolescentes 16

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 64; AB: 48; AC: 0; AD: 0; AE: 6; AF: 4; AG: 35; AH: 28; AI: 23; AJ: 16; AK: 112; AL: 112.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 120 / salida 117: Programa no. 13

ID: ACT-SCXH04524. Folio: SC-261026-171345. Fecha: 2026-05-29.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 28, adultos mayores 17, jóvenes mujeres 121, jóvenes hombres 103, niñas y adolescentes 4, niños y adolescentes 1

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 155; AB: 123; AC: 2; AD: 2; AE: 28; AF: 17; AG: 121; AH: 103; AI: 4; AJ: 1; AK: 278; AL: 278.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 121 / salida 118: 14.º Encuentro de Cocina Tradicional

ID: ACT-SCFT93131. Folio: SC-261026-171346. Fecha: 2026-05-30.

Artista o agrupación: Trio Guanacteco. Horario: 16:00:00. Artistas participantes reportados: 10. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Estatal. Responsable reportado: Ileana

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 122 / salida 119: 14.º Encuentro de Cocina Tradicional

ID: ACT-SCNZ66851. Folio: SC-261026-171347. Fecha: 2026-05-30.

Artista o agrupación: Flor de Autonomía. Horario: 16:00:00. Artistas participantes reportados: 10. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Estatal. Responsable reportado: Ileana

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 123 / salida 120: Presentación de Ballet México de Colores

ID: ACT-SCUH39063. Folio: SC-261026-171348. Fecha: 2026-05-30.

Artista o agrupación: Ballet México de Colores. Horario: 18:00:00. Artistas participantes reportados: 30. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Nacional. Responsable reportado: Marce. Honorarios reportados: $40.600,00. Desglose etario original (sin redistribuir): adultas mayores 10, adultos mayores 15, jóvenes mujeres 60, jóvenes hombres 70, niñas y adolescentes 10, niños y adolescentes 9

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 80; AB: 94; AC: vacío; AD: vacío; AE: 10; AF: 15; AG: 60; AH: 70; AI: 10; AJ: 9; AK: 174; AL: vacío.

- La fuente no tiene título. Se preparó una etiqueta descriptiva a partir del artista.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Sede pendiente.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 124 / salida 121: El Ogrito ESCENAS AL VUELO

ID: ACT-SCNY07070. Folio: SC-261026-171349. Fecha: 2026-05-30.

Artista o agrupación: SERCA Teatro. Horario: 19:00:00. Artistas participantes reportados: 4. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Terriorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $12.600,00. Desglose etario original (sin redistribuir): adultas mayores 5, adultos mayores 6, jóvenes mujeres 24, jóvenes hombres 27, niñas y adolescentes 55, niños y adolescentes 45

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 84; AB: 78; AC: 0; AD: 0; AE: 5; AF: 6; AG: 24; AH: 27; AI: 55; AJ: 45; AK: 162; AL: 162.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 125 / salida 122: Programa no. 14

ID: ACT-SCDV45811. Folio: SC-261026-171350. Fecha: 2026-06-05.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 126 / salida 123: Nxuni ESCENAS AL VUELO

ID: ACT-SCYS27073. Folio: SC-261026-171351. Fecha: 2026-06-06.

Artista o agrupación: El Bailar del Mío Cid. Horario: 18:00:00. Artistas participantes reportados: 2. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Terriorio. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $12.600,00. Desglose etario original (sin redistribuir): adultas mayores 1, adultos mayores 1, jóvenes mujeres 8, jóvenes hombres 5, niñas y adolescentes 1, niños y adolescentes 3

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 10; AB: 9; AC: 0; AD: 0; AE: 1; AF: 1; AG: 8; AH: 5; AI: 1; AJ: 3; AK: 19; AL: 19.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 127 / salida 124: Sexto Festival Nacional de Danza "Guanajuato Tradiciones de mi Tierra"

ID: ACT-SCHH22868. Folio: SC-261026-171352. Fecha: 2026-06-06.

Artista o agrupación: Ballet Folklorico Costumbres y Tradiciones de Tlaxcala. Horario: 18:00:00. Artistas participantes reportados: 40. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventanas al Terriorio. Origen o alcance reportado: Nacional. Responsable reportado: Marce. Honorarios reportados: $15.000,00. Desglose etario original (sin redistribuir): adultas mayores 18, adultos mayores 20, jóvenes mujeres 20, jóvenes hombres 20, niñas y adolescentes 16, niños y adolescentes 18

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 54; AB: 58; AC: vacío; AD: vacío; AE: 18; AF: 20; AG: 20; AH: 20; AI: 16; AJ: 18; AK: 112; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 128 / salida 125: Sexto Festival Nacional de Danza "Guanajuato Tradiciones de mi Tierra"

ID: ACT-SCWJ22047. Folio: SC-261026-171353. Fecha: 2026-06-06.

Artista o agrupación: Compañía México en Trande, del estado de Hidalgo. Horario: 19:00:00. Artistas participantes reportados: 40. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventanas al Terriorio. Origen o alcance reportado: Nacional. Responsable reportado: Marce. Honorarios reportados: $15.000,00. Desglose etario original (sin redistribuir): adultas mayores 20, adultos mayores 20, jóvenes mujeres 34, jóvenes hombres 30, niñas y adolescentes 12, niños y adolescentes 10

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 67; AB: 62; AC: 1; AD: 2; AE: 20; AF: 20; AG: 34; AH: 30; AI: 12; AJ: 10; AK: 129; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 129 / salida 126: Sexto Festival Nacional de Danza "Guanajuato Tradiciones de mi Tierra"

ID: ACT-SCNH31908. Folio: SC-261026-171354. Fecha: 2026-06-06.

Artista o agrupación: Ballet Folklorico Cutzi de Yurécuaro. Horario: 19:00:00. Artistas participantes reportados: 40. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventanas al Terriorio. Origen o alcance reportado: Nacional. Responsable reportado: Marce. Honorarios reportados: $15.000,00. Desglose etario original (sin redistribuir): adultas mayores 13, adultos mayores 30, jóvenes mujeres 25, jóvenes hombres 25, niñas y adolescentes 12, niños y adolescentes 13

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 51; AB: 69; AC: 1; AD: 1; AE: 13; AF: 30; AG: 25; AH: 25; AI: 12; AJ: 13; AK: 120; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 130 / salida 127: Teatro del Pueblo

ID: ACT-SCUR04549. Folio: SC-261026-171355. Fecha: 2026-06-11.

Artista o agrupación: AfroSon. Horario: 22:00:00. Artistas participantes reportados: 10. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 86, adultos mayores 51, jóvenes mujeres 67, jóvenes hombres 42, niñas y adolescentes 61, niños y adolescentes 39

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 214; AB: 134; AC: 0; AD: 2; AE: 86; AF: 51; AG: 67; AH: 42; AI: 61; AJ: 39; AK: 348; AL: vacío.

- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 131 / salida 128: Programa no. 15

ID: ACT-SCPO81154. Folio: SC-261026-171356. Fecha: 2026-06-12.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 32, adultos mayores 27, jóvenes mujeres 122, jóvenes hombres 108, niñas y adolescentes 1, niños y adolescentes 2

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 159; AB: 139; AC: 4; AD: 2; AE: 32; AF: 27; AG: 122; AH: 108; AI: 1; AJ: 2; AK: 298; AL: 298.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 132 / salida 129: Lágrimas de agua dulce ESCENAS AL VUELO

ID: ACT-SCSU78291. Folio: SC-261026-171357. Fecha: 2026-06-13.

Artista o agrupación: Metztli Producciones. Horario: 13:00:00. Artistas participantes reportados: 5. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Terriorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $13.100,00. Desglose etario original (sin redistribuir): adultas mayores 15, adultos mayores 19, jóvenes mujeres 36, jóvenes hombres 30, niñas y adolescentes 40, niños y adolescentes 35

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 98; AB: 92; AC: 7; AD: 8; AE: 15; AF: 19; AG: 36; AH: 30; AI: 40; AJ: 35; AK: 190; AL: 190.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 133 / salida 130: El mundo de la imaginación de Francisco Gabilondo Soler

ID: ACT-SCMU14231. Folio: SC-261026-171358. Fecha: 2026-06-14.

Artista o agrupación: Banda de Música del Estado. Horario: 13:00:00. Artistas participantes reportados: 36. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: Servicio Integral. Desglose etario original (sin redistribuir): adultas mayores 68, adultos mayores 46, jóvenes mujeres 137, jóvenes hombres 129, niñas y adolescentes 37, niños y adolescentes 29

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 242; AB: 204; AC: 0; AD: 0; AE: 68; AF: 46; AG: 137; AH: 129; AI: 37; AJ: 29; AK: 446; AL: 446.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 134 / salida 131: Tianguis cultural / Melquiades

ID: ACT-SCNA47081. Folio: SC-261026-171359. Fecha: 2026-06-14.

Artista o agrupación: Flor de Autonomía. Horario: 18:00:00. Artistas participantes reportados: 5. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventamas al Tertitorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $49.309,00. Desglose etario original (sin redistribuir): adultas mayores 50, adultos mayores 50, jóvenes mujeres 50, jóvenes hombres 50, niñas y adolescentes 15, niños y adolescentes 15

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 117; AB: 117; AC: 2; AD: 2; AE: 50; AF: 50; AG: 50; AH: 50; AI: 15; AJ: 15; AK: 234; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 135 / salida 132: Tianguis cultural / Melquiades

ID: ACT-SCDG65803. Folio: SC-261026-171400. Fecha: 2026-06-14.

Artista o agrupación: Danza New Army de Silao. Horario: 14:00:00. Artistas participantes reportados: 18. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventamas al Tertitorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Observaciones: 919. Honorarios reportados: $391.158,86. Desglose etario original (sin redistribuir): adultas mayores 30, adultos mayores 20, jóvenes mujeres 10, jóvenes hombres 10, niñas y adolescentes 5, niños y adolescentes 5

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 47; AB: 36; AC: 2; AD: 1; AE: 30; AF: 20; AG: 10; AH: 10; AI: 5; AJ: 5; AK: 83; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 136 / salida 133: Tianguis cultural / Melquiades

ID: ACT-SCDA20719. Folio: SC-261026-171401. Fecha: 2026-06-14.

Artista o agrupación: Cantante de San Felipe. Horario: 14:30:00. Artistas participantes reportados: 1. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventamas al Tertitorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 15, adultos mayores 10, jóvenes mujeres 10, jóvenes hombres 10, niñas y adolescentes 5, niños y adolescentes 5

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 30; AB: 25; AC: vacío; AD: vacío; AE: 15; AF: 10; AG: 10; AH: 10; AI: 5; AJ: 5; AK: 55; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 137 / salida 134: Tianguis cultural / Melquiades

ID: ACT-SCUS83687. Folio: SC-261026-171402. Fecha: 2026-06-14.

Artista o agrupación: Los Petirrojos. Horario: 15:00:00. Artistas participantes reportados: 2. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventamas al Tertitorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 30, adultos mayores 20, jóvenes mujeres 17, jóvenes hombres 20, niñas y adolescentes 10, niños y adolescentes 10

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 57; AB: 50; AC: vacío; AD: vacío; AE: 30; AF: 20; AG: 17; AH: 20; AI: 10; AJ: 10; AK: 107; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 138 / salida 135: Tianguis cultural / Melquiades

ID: ACT-SCRB79793. Folio: SC-261026-171403. Fecha: 2026-06-14.

Artista o agrupación: Ballet Folklorico Acamapichtli. Horario: 15:30:00. Artistas participantes reportados: 30. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventamas al Tertitorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 50, adultos mayores 50, jóvenes mujeres 50, jóvenes hombres 50, niñas y adolescentes 10, niños y adolescentes 10

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 110; AB: 110; AC: vacío; AD: vacío; AE: 50; AF: 50; AG: 50; AH: 50; AI: 10; AJ: 10; AK: 220; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 139 / salida 136: Tianguis cultural / Melquiades

ID: ACT-SCQR10269. Folio: SC-261026-171404. Fecha: 2026-06-14.

Artista o agrupación: Ballet Folklorico Netotilistli. Horario: 17:30:00. Artistas participantes reportados: 30. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventamas al Tertitorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Desglose etario original (sin redistribuir): adultas mayores 50, adultos mayores 50, jóvenes mujeres 50, jóvenes hombres 50, niñas y adolescentes 10, niños y adolescentes 10

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 110; AB: 110; AC: vacío; AD: vacío; AE: 50; AF: 50; AG: 50; AH: 50; AI: 10; AJ: 10; AK: 220; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 140 / salida 137: ChimalmAnimales

ID: ACT-SCEN99536. Folio: SC-261026-171405. Fecha: 2026-06-16.

Artista o agrupación: Ensamble Chimalma. Horario: 18:00:00. Artistas participantes reportados: 4. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Observaciones: APOYO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 6, adultos mayores 5, jóvenes mujeres 15, jóvenes hombres 11, niñas y adolescentes 14, niños y adolescentes 21

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 35; AB: 37; AC: 0; AD: 0; AE: 6; AF: 5; AG: 15; AH: 11; AI: 14; AJ: 21; AK: 72; AL: 72.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 141 / salida 138: BME / Cereso, Puentecillas

ID: ACT-SCML05482. Folio: SC-261026-171406. Fecha: 2026-06-18.

Artista o agrupación: Banda de Musica del Estado. Horario: 11:00:00. Artistas participantes reportados: 35. Público meta: Adultos. Eje reportado: Equidad, diversidad e inclusión. Origen o alcance reportado: Estatal. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 524

Alineación original: A: objetivo 1.1; B: estrategia: 1.1.6.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: vacío; AB: 524; AC: vacío; AD: vacío; AE: 524; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.1; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 1.1.6.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.

### Fuente 142 / salida 139: Programa no. 16

ID: ACT-SCWG49909. Folio: SC-261026-171407. Fecha: 2026-06-19.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 57, adultos mayores 49, jóvenes mujeres 102, jóvenes hombres 93, niñas y adolescentes 4, niños y adolescentes 3

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 163; AB: 145; AC: 0; AD: 0; AE: 57; AF: 49; AG: 102; AH: 93; AI: 4; AJ: 3; AK: 308; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 143 / salida 140: Festejo Día del Padre

ID: ACT-SCMQ99836. Folio: SC-261026-171408. Fecha: 2026-06-19.

Artista o agrupación: Ópera Guanajuato. Horario: 18:00:00. Artistas participantes reportados: 12. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Nacional. Responsable reportado: Marce. Honorarios reportados: $32.000,00

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: vacío.

- Sede pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 144 / salida 141: NOVA

ID: ACT-SCFQ87564. Folio: SC-261026-171409. Fecha: 2026-06-19.

Artista o agrupación: Loaiza Corpóreo. Horario: 19:00:00. Artistas participantes reportados: 5. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Nacional. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 6, adultos mayores 4, jóvenes mujeres 23, jóvenes hombres 17, niñas y adolescentes 0, niños y adolescentes 0

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 29; AB: 21; AC: 0; AD: 0; AE: 6; AF: 4; AG: 23; AH: 17; AI: 0; AJ: 0; AK: 50; AL: 50.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 145 / salida 142: El Barco ESCENAS AL VUELO

ID: ACT-SCCH86928. Folio: SC-261026-171410. Fecha: 2026-06-20.

Artista o agrupación: Títiri Tátara. Horario: 11:00:00. Artistas participantes reportados: 2. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Terriorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $11.600,00. Desglose etario original (sin redistribuir): adultas mayores 6, adultos mayores 8, jóvenes mujeres 16, jóvenes hombres 13, niñas y adolescentes 63, niños y adolescentes 57

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 85; AB: 78; AC: 0; AD: 0; AE: 6; AF: 8; AG: 16; AH: 13; AI: 63; AJ: 57; AK: 163; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Sede pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 146 / salida 143: Contratiempo

ID: ACT-SCDW98202. Folio: SC-261026-171411. Fecha: 2026-06-20.

Artista o agrupación: Claudia Gumte. Horario: 18:00:00. Artistas participantes reportados: 3. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Honorarios reportados: $0,00. Desglose etario original (sin redistribuir): adultas mayores 5, adultos mayores 3, jóvenes mujeres 26, jóvenes hombres 22, niñas y adolescentes 7, niños y adolescentes 4

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 38; AB: 29; AC: 0; AD: 0; AE: 5; AF: 3; AG: 26; AH: 22; AI: 7; AJ: 4; AK: 67; AL: vacío.

- Subdisciplina multidisciplinaria pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 147 / salida 144: El mundo de la imaginación de Francisco Gabilondo Soler

ID: ACT-SCYO58287. Folio: SC-261026-171412. Fecha: 2026-06-20.

Artista o agrupación: Banda de Música del Estado. Horario: 18:00:00. Eje reportado: Juventudes e infancias. Origen o alcance reportado: Estatal. Desglose etario original (sin redistribuir): adultas mayores 32, jóvenes mujeres 25, jóvenes hombres 25, niñas y adolescentes 22, niños y adolescentes 22

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 104; AB: 74; AC: 0; AD: 0; AE: 32; AF: vacío; AG: 25; AH: 25; AI: 22; AJ: 22; AK: 340; AL: vacío.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Diferencia conservada: mujeres 104 + hombres 74 = 178; total territorial 340.

### Fuente 148 / salida 145: De Versalles a Venecia: arias de bravura, venganza y amor

ID: ACT-SCRF35473. Folio: SC-261026-171413. Fecha: 2026-06-20.

Artista o agrupación: Ópera Guanajuato. Horario: 19:00:00. Artistas participantes reportados: 9. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: $30.000,00. Desglose etario original (sin redistribuir): adultas mayores 28, adultos mayores 41, jóvenes mujeres 73, jóvenes hombres 90, niñas y adolescentes 3, niños y adolescentes 7

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 104; AB: 138; AC: 0; AD: 0; AE: 28; AF: 41; AG: 73; AH: 90; AI: 3; AJ: 7; AK: 242; AL: 242.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 149 / salida 146: Encuentro de Orquestas Cedro UP y Vientos Musicales

ID: ACT-SCDZ64261. Folio: SC-261026-171414. Fecha: 2026-06-21.

Artista o agrupación: Orquesta de Cedro y Vientos Musicales. Horario: 13:00:00. Artistas participantes reportados: 50. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: APOYO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 76, adultos mayores 60, jóvenes mujeres 204, jóvenes hombres 177, niñas y adolescentes 13, niños y adolescentes 17

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 293; AB: 254; AC: 0; AD: 0; AE: 76; AF: 60; AG: 204; AH: 177; AI: 13; AJ: 17; AK: 547; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 150 / salida 147: Presentacion en Apaseo el Grande

ID: ACT-SCOC82619. Folio: SC-261026-171415. Fecha: 2025-06-22.

Artista o agrupación: Banda de Musica del Estado. Horario: 18:00:00. Artistas participantes reportados: 35. Público meta: Familiar. Eje reportado: Juventudes e infancias. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 25, adultos mayores 10, jóvenes mujeres 10, jóvenes hombres 8, niñas y adolescentes 10, niños y adolescentes 5

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 35; AB: 40; AC: 0; AD: 0; AE: 25; AF: 10; AG: 10; AH: 8; AI: 10; AJ: 5; AK: 138; AL: vacío.

- Se conserva el año explícito de la fuente: 2025-06-22; confirmar antes de usar en informes de 2026.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Diferencia conservada: mujeres 35 + hombres 40 = 75; total territorial 138.

### Fuente 151 / salida 148: Nostalgia Latinoamericana

ID: ACT-SCLB91123. Folio: SC-261026-171416. Fecha: 2026-06-25.

Artista o agrupación: Coro y Estudiantina Femenil de la UG. Horario: 19:00:00. Artistas participantes reportados: 30. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 19, adultos mayores 13, jóvenes mujeres 64, jóvenes hombres 56, niñas y adolescentes 2, niños y adolescentes 1

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 85; AB: 70; AC: 0; AD: 0; AE: 19; AF: 13; AG: 64; AH: 56; AI: 2; AJ: 1; AK: 155; AL: 155.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 152 / salida 149: Grandiosa

ID: ACT-SCBH01307. Folio: SC-261026-171417. Fecha: 2026-06-26.

Artista o agrupación: Dirección y Performance: Alejandro Chávez Flores y Marco Ignacio Orellana. Horario: 19:00:00. Artistas participantes reportados: 2. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Origen o alcance reportado: Internacional. Responsable reportado: Jonathan. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 9, adultos mayores 15, jóvenes mujeres 99, jóvenes hombres 86, niñas y adolescentes 23, niños y adolescentes 12

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 131; AB: 113; AC: 0; AD: 0; AE: 9; AF: 15; AG: 99; AH: 86; AI: 23; AJ: 12; AK: 244; AL: vacío.

- Año 2026 tomado del título de la hoja; fecha original sin año: viernes 26 de junio
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 153 / salida 150: TAUSV Las calcetas de mi padre

ID: ACT-SCPP23752. Folio: SC-261026-171418. Fecha: 2026-06-26.

Artista o agrupación: Me dijo, le dijo, le dije. Horario: 19:00:00. Artistas participantes reportados: 3. Público meta: Adolescentes y adultos. Programa reportado: Festivales. Origen o alcance reportado: Nacional. Responsable reportado: Elisa. Observaciones: XXI FESTIVAL DE MONÓLOGOS, TEATRO A UNA SOLA VOZ. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 20, adultos mayores 17, jóvenes mujeres 85, jóvenes hombres 65, niñas y adolescentes 10, niños y adolescentes 8

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 115; AB: 90; AC: 0; AD: 0; AE: 20; AF: 17; AG: 85; AH: 65; AI: 10; AJ: 8; AK: 205; AL: 205.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 154 / salida 151: TAUSV Metalero

ID: ACT-SCAV14272. Folio: SC-261026-171419. Fecha: 2026-06-27.

Artista o agrupación: Percha Teatro. Horario: 18:00:00. Artistas participantes reportados: 3. Público meta: Adolescentes y adultos. Programa reportado: Festivales. Origen o alcance reportado: Nacional. Responsable reportado: Elisa. Observaciones: XXI FESTIVAL DE MONÓLOGOS, TEATRO A UNA SOLA VOZ. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 7, adultos mayores 3, jóvenes mujeres 11, jóvenes hombres 6, niñas y adolescentes 2, niños y adolescentes 3

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 20; AB: 12; AC: 0; AD: 0; AE: 7; AF: 3; AG: 11; AH: 6; AI: 2; AJ: 3; AK: 32; AL: 32.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 155 / salida 152: Alas de Mariposa ESCENAS AL VUELO

ID: ACT-SCBQ35251. Folio: SC-261026-171420. Fecha: 2026-06-27.

Artista o agrupación: Teatro Kalipatos. Horario: 11:30:00. Artistas participantes reportados: 3. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Territorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $12.600,00

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Sede pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 156 / salida 153: El mundo de gabilondo Soler

ID: ACT-SCWW96495. Folio: SC-261026-171421. Fecha: 2026-06-28.

Artista o agrupación: Banda de Música del Estado. Horario: 17:00:00. Artistas participantes reportados: 36. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Desglose etario original (sin redistribuir): adultas mayores 32, adultos mayores 27, jóvenes mujeres 184, jóvenes hombres 121, niñas y adolescentes 94, niños y adolescentes 62

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 310; AB: 213; AC: 0; AD: 3; AE: 32; AF: 27; AG: 184; AH: 121; AI: 94; AJ: 62; AK: 523; AL: 523.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 157 / salida 154: TAUSV Riñón, una comedia enferma

ID: ACT-SCTQ25637. Folio: SC-261026-171422. Fecha: 2026-06-28.

Artista o agrupación: Vanessa Nieto / FLOP Producciones / Las Gramelots. Horario: 18:00:00. Artistas participantes reportados: 2. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Festivales. Origen o alcance reportado: Nacional. Responsable reportado: Elisa. Observaciones: XXI FESTIVAL DE MONÓLOGOS, TEATRO A UNA SOLA VOZ. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 22, adultos mayores 13, jóvenes mujeres 33, jóvenes hombres 21, niñas y adolescentes 13, niños y adolescentes 9

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 68; AB: 44; AC: 0; AD: 1; AE: 22; AF: 13; AG: 33; AH: 21; AI: 13; AJ: 9; AK: 112; AL: 112.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 158 / salida 155: TAUSV Malandrito

ID: ACT-SCUD70946. Folio: SC-261026-171423. Fecha: 2026-06-29.

Artista o agrupación: Teatro Después. Horario: 19:00:00. Artistas participantes reportados: 3. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Festivales. Origen o alcance reportado: Nacional. Responsable reportado: Elisa. Observaciones: XXI FESTIVAL DE MONÓLOGOS, TEATRO A UNA SOLA VOZ. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 14, adultos mayores 7, jóvenes mujeres 46, jóvenes hombres 30, niñas y adolescentes 3, niños y adolescentes 1

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 63; AB: 38; AC: 0; AD: 0; AE: 14; AF: 7; AG: 46; AH: 30; AI: 3; AJ: 1; AK: 101; AL: 101.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 159 / salida 156: TAUSV Yo pensé que era especial

ID: ACT-SCWF62150. Folio: SC-261026-171424. Fecha: 2026-06-30.

Artista o agrupación: Rocío Leal. Horario: 19:00:00. Artistas participantes reportados: 3. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Festivales. Origen o alcance reportado: Nacional. Responsable reportado: Elisa. Observaciones: XXI FESTIVAL DE MONÓLOGOS, TEATRO A UNA SOLA VOZ. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 5, adultos mayores 7, jóvenes mujeres 36, jóvenes hombres 10, niñas y adolescentes 2, niños y adolescentes 1

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 43; AB: 18; AC: 0; AD: 0; AE: 5; AF: 7; AG: 36; AH: 10; AI: 2; AJ: 1; AK: 61; AL: 61.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 160 / salida 157: Sangre Negra

ID: ACT-SCLQ79045. Folio: SC-261026-171425. Fecha: 2026-06-30.

Artista o agrupación: Afroson. Horario: 20:00:00. Artistas participantes reportados: 9. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 5, adultos mayores 6, jóvenes mujeres 100, jóvenes hombres 80, niñas y adolescentes 6, niños y adolescentes 7

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 111; AB: 93; AC: 0; AD: 0; AE: 5; AF: 6; AG: 100; AH: 80; AI: 6; AJ: 7; AK: 204; AL: vacío.

- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 161 / salida 158: TAUSV Vértebra

ID: ACT-SCXR78434. Folio: SC-261026-171426. Fecha: 2026-07-01.

Artista o agrupación: Proyecto Granguiñol Psicotrónico. Horario: 19:00:00. Artistas participantes reportados: 3. Público meta: Adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Festivales. Origen o alcance reportado: Nacional. Responsable reportado: Elisa. Observaciones: XXI FESTIVAL DE MONÓLOGOS, TEATRO A UNA SOLA VOZ. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 18, adultos mayores 12, jóvenes mujeres 33, jóvenes hombres 31, niñas y adolescentes 0, niños y adolescentes 0

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 51; AB: 43; AC: 0; AD: 0; AE: 18; AF: 12; AG: 33; AH: 31; AI: 0; AJ: 0; AK: 94; AL: 94.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 162 / salida 159: TAUSV Me cargo en mis muertos

ID: ACT-SCEC37280. Folio: SC-261026-171427. Fecha: 2026-07-02.

Artista o agrupación: Al Son de Teatro. Horario: 19:00:00. Artistas participantes reportados: 3. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Festivales. Origen o alcance reportado: Nacional. Responsable reportado: Elisa. Observaciones: XXI FESTIVAL DE MONÓLOGOS, TEATRO A UNA SOLA VOZ. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 8, adultos mayores 2, jóvenes mujeres 41, jóvenes hombres 38, niñas y adolescentes 3, niños y adolescentes 2

Alineación original: A: objetivo 2.4.; B: estrategia 2.4.3.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 52; AB: 42; AC: 0; AD: 0; AE: 8; AF: 2; AG: 41; AH: 38; AI: 3; AJ: 2; AK: 94; AL: 94.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 2.4.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 2.4.3.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 163 / salida 160: Acto de Clausura Académica Instituto M Goretti

ID: ACT-SCDE32414. Folio: SC-261026-171428. Fecha: 2026-07-02.

Artista o agrupación: ARRENDAMIENTO. Horario: 09:30:00. Programa reportado: N/A. Observaciones: ARRENDAMIENTO

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Disciplina pendiente o valor de fuente no equivalente: None
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.

### Fuente 164 / salida 161: Acto académico SABES Centro

ID: ACT-SCUO57314. Folio: SC-261026-171429. Fecha: 2026-07-03.

Artista o agrupación: ARRENDAMIENTO. Horario: 10:00:00. Programa reportado: N/A. Observaciones: ARRENDAMIENTO

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Disciplina pendiente o valor de fuente no equivalente: None
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.

### Fuente 165 / salida 162: Identidad Mexicana

ID: ACT-SCNO44484. Folio: SC-261026-171430. Fecha: 2026-07-03.

Artista o agrupación: Ballet Folklórico de la Universidad de Guanajuato. Horario: 19:00:00. Artistas participantes reportados: 70. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: N/A

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 166 / salida 163: Concierto Vientos Musicales

ID: ACT-SCJI35457. Folio: SC-261026-171431. Fecha: 2026-07-04.

Artista o agrupación: Vientos Musicales de la Gente. Horario: 18:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 52, adultos mayores 33, jóvenes mujeres 78, jóvenes hombres 52, niñas y adolescentes 24, niños y adolescentes 20

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 156; AB: 105; AC: 2; AD: 0; AE: 52; AF: 33; AG: 78; AH: 52; AI: 24; AJ: 20; AK: 261; AL: 261.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 167 / salida 164: Un viaje al interior. De Pluma Blanca ESCENAS AL VUELO

ID: ACT-SCLP09778. Folio: SC-261026-171432. Fecha: 2026-07-04.

Artista o agrupación: Factotum Escena. Horario: 18:00:00. Artistas participantes reportados: 3. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Territorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $12.600,00

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.

### Fuente 168 / salida 165: El lago de los cisnes

ID: ACT-SCNU29961. Folio: SC-261026-171433. Fecha: 2026-07-04.

Artista o agrupación: Elite Ballet Studio. Horario: 18:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ARRENDAMIENTO. Honorarios reportados: N/A

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.

### Fuente 169 / salida 166: Fiestas patronales

ID: ACT-SCHJ20823. Folio: SC-261026-171434. Fecha: 2026-07-05.

Artista o agrupación: Banda Aguilas. Horario: 13:00:00. Artistas participantes reportados: 18. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $38.280,00. Desglose etario original (sin redistribuir): adultas mayores 101, adultos mayores 209, jóvenes mujeres 152, jóvenes hombres 134, niñas y adolescentes 98, niños y adolescentes 56

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 362; AB: 406; AC: 11; AD: 7; AE: 101; AF: 209; AG: 152; AH: 134; AI: 98; AJ: 56; AK: 768; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 170 / salida 167: Fiesta comunidad

ID: ACT-SCXA98253. Folio: SC-261026-171435. Fecha: 2026-07-05.

Artista o agrupación: Compañía de Danza de San José Iturbide. Horario: 19:00:00. Artistas participantes reportados: 35. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del Sistema Estatal de Espacios Escénicos y Artes Vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $22.750,00. Desglose etario original (sin redistribuir): adultas mayores 70, adultos mayores 55, jóvenes mujeres 75, jóvenes hombres 53, niñas y adolescentes 25, niños y adolescentes 20

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 171; AB: 129; AC: 1; AD: 1; AE: 70; AF: 55; AG: 75; AH: 53; AI: 25; AJ: 20; AK: 300; AL: vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 171 / salida 168: Acto Académico Primaria Moisés Saenz

ID: ACT-SCUD50103. Folio: SC-261026-171436. Fecha: 2026-07-10.

Artista o agrupación: ARRENDAMIENTO. Horario: 10:30:00. Programa reportado: N/A. Responsable reportado: Jonathan. Observaciones: ARRENDAMIENTO

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: vacío.

- Disciplina pendiente o valor de fuente no equivalente: None
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 172 / salida 169: Un viaje con ritmo ESCENAS AL VUELO

ID: ACT-SCMM42665. Folio: SC-261026-171437. Fecha: 2026-07-11.

Artista o agrupación: Pingüicas a Gogo. Horario: 17:00:00. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Territorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $12.600,00

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 173 / salida 170: Cantata del Café FESTIVAL BACH

ID: ACT-SCYT15181. Folio: SC-261026-171438. Fecha: 2026-07-11.

Artista o agrupación: Dir. invitado y clavecinista Raúl Moncada. Horario: 19:00:00. Artistas participantes reportados: 6. Público meta: Adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Martha. Desglose etario original (sin redistribuir): adultas mayores 24, adultos mayores 16, jóvenes mujeres 32, jóvenes hombres 17, niñas y adolescentes 1, niños y adolescentes 0

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 57; AB: 33; AC: 0; AD: 0; AE: 24; AF: 16; AG: 32; AH: 17; AI: 1; AJ: 0; AK: 90; AL: 90.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 174 / salida 171: Michael Jackson. King of Pop

ID: ACT-SCXY00654. Folio: SC-261026-171439. Fecha: 2026-07-11.

Artista o agrupación: Escuela de Danza I Motion. Horario: 18:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Observaciones: ARRENDAMIENTO

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.

### Fuente 175 / salida 172: Cantatas Clausura FESTIVAL BACH

ID: ACT-SCYP51812. Folio: SC-261026-171440. Fecha: 2026-07-12.

Artista o agrupación: Dir. invitado Horacio Franco. Horario: 13:00:00. Artistas participantes reportados: 5. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Festivales. Origen o alcance reportado: Nacional. Responsable reportado: Martha. Desglose etario original (sin redistribuir): adultas mayores 111, adultos mayores 63, jóvenes mujeres 81, jóvenes hombres 94, niñas y adolescentes 4, niños y adolescentes 7

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 197; AB: 164; AC: 1; AD: 0; AE: 111; AF: 63; AG: 81; AH: 94; AI: 4; AJ: 7; AK: 164; AL: 164.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Diferencia conservada: mujeres 197 + hombres 164 = 361; total territorial 164.

### Fuente 176 / salida 173: José El Soñador

ID: ACT-SCVG93690. Folio: SC-261026-171441. Fecha: 2026-07-12.

Artista o agrupación: Salterrae Luxmundi Santísima. Horario: 18:00:00. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Observaciones: ARRENDAMIENTO

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.

### Fuente 177 / salida 174: Apertura de la Presa de la Olla

ID: ACT-SCPD08021. Folio: SC-261026-171442. Fecha: 2026-07-13.

Artista o agrupación: Banda de Musica del Estado. Horario: 13:00:00. Artistas participantes reportados: 35. Público meta: Familiar. Origen o alcance reportado: Estatal. Desglose etario original (sin redistribuir): adultas mayores 200, adultos mayores 200, jóvenes mujeres 250, jóvenes hombres 300, niñas y adolescentes 180, niños y adolescentes 150

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 1100; AB: 890; AC: 0; AD: 0; AE: 200; AF: 200; AG: 250; AH: 300; AI: 180; AJ: 150; AK: 0; AL: 3270.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Diferencia conservada: mujeres 1100 + hombres 890 = 1990; total territorial 0.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 178 / salida 175: Concierto de Verano 2026

ID: ACT-SCFC42071. Folio: SC-261026-171443. Fecha: 2026-07-15.

Artista o agrupación: Voces Infantiles del MIQ. Horario: 19:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 43, adultos mayores 33, jóvenes mujeres 157, jóvenes hombres 174, niñas y adolescentes 102, niños y adolescentes 46

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 304; AB: 203; AC: 2; AD: 0; AE: 43; AF: 33; AG: 157; AH: 174; AI: 102; AJ: 46; AK: 507; AL: 507.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 179 / salida 176: El Diario de Un Loco

ID: ACT-SCAM69927. Folio: SC-261026-171444. Fecha: 2026-07-16.

Artista o agrupación: Third Call Entertainment. Horario: 20:00:00. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Nacional. Responsable reportado: Elisa. Observaciones: ARRENDAMIENTO

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: vacío; AB: vacío; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Sin cifras de población; no se creó una fila ficticia.

### Fuente 180 / salida 177: Fiestas patronales

ID: ACT-SCKE91577. Folio: SC-261026-171445. Fecha: 2026-07-16.

Artista o agrupación: Flor de Marfil. Horario: 20:00:00. Artistas participantes reportados: 5. Público meta: Jóvenes. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Operación del sistema estatal de espacios escénicos y artes vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $36.192,00. Desglose etario original (sin redistribuir): adultas mayores 22, adultos mayores 15, jóvenes mujeres 59, jóvenes hombres 43, niñas y adolescentes 47, niños y adolescentes 38

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 134; AB: 99; AC: 6; AD: 3; AE: 22; AF: 15; AG: 59; AH: 43; AI: 47; AJ: 38; AK: 233; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 181 / salida 178: Espejos de agua

ID: ACT-SCCW57575. Folio: SC-261026-171446. Fecha: 2026-07-17.

Artista o agrupación: Laboratorio de con-TACTO. Horario: 19:00:00. Artistas participantes reportados: 4. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del sistema estatal de espacios escénicos y artes vivas. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: $42.800,00. Desglose etario original (sin redistribuir): adultas mayores 35, adultos mayores 26, jóvenes mujeres 76, jóvenes hombres 68, niñas y adolescentes 9, niños y adolescentes 6

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 122; AB: 101; AC: 2; AD: 1; AE: 35; AF: 26; AG: 76; AH: 68; AI: 9; AJ: 6; AK: 223; AL: 223.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 182 / salida 179: Hechicera que cambia los rostros ESCENAS A VUELO

ID: ACT-SCHM08845. Folio: SC-261026-171447. Fecha: 2026-07-18.

Artista o agrupación: Manos en Escena. Horario: 17:00:00. Artistas participantes reportados: 6. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Ventana al Territorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $16.920,00

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: vacío; AB: vacío; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Sin cifras de población; no se creó una fila ficticia.

### Fuente 183 / salida 180: Fistas

ID: ACT-SCKS18108. Folio: SC-261026-171448. Fecha: 2026-07-18.

Artista o agrupación: Mujeres Serranas. Horario: 20:00:00. Artistas participantes reportados: 4. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del sistema estatal de espacios escénicos y artes vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $10.266,00. Desglose etario original (sin redistribuir): adultas mayores 50, adultos mayores 54, jóvenes mujeres 43, jóvenes hombres 30, niñas y adolescentes 11, niños y adolescentes 10

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 105; AB: 95; AC: 1; AD: 1; AE: 50; AF: 54; AG: 43; AH: 30; AI: 11; AJ: 10; AK: 200; AL: vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 184 / salida 181: Aniversario del Teatro de la Ciudad de Purísima del Rincón

ID: ACT-SCMM89627. Folio: SC-261026-171449. Fecha: 2026-07-18.

Artista o agrupación: Juan de los Reyes y su Bandototota de Jazz de Guanajuato Orquesta. Horario: 19:00:00. Artistas participantes reportados: 19. Público meta: Adolescentes y adultos. Eje reportado: Juventudes e infancias. Programa reportado: operación del sistema estatal de espacios escénicos y artes vivas. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Honorarios reportados: $58.000,00. Desglose etario original (sin redistribuir): adultas mayores 12, adultos mayores 9, jóvenes mujeres 67, jóvenes hombres 52, niñas y adolescentes 31, niños y adolescentes 22

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 110; AB: 83; AC: 0; AD: 0; AE: 12; AF: 9; AG: 67; AH: 52; AI: 31; AJ: 22; AK: 193; AL: 193.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 185 / salida 182: Festival del Mango

ID: ACT-SCYQ82180. Folio: SC-261026-171450. Fecha: 2026-07-19.

Artista o agrupación: Banda de Musica del Estado. Horario: 14:00:00. Artistas participantes reportados: 35. Público meta: Familiar. Origen o alcance reportado: Estatal. Responsable reportado: Ana. Desglose etario original (sin redistribuir): adultas mayores 50, adultos mayores 60, jóvenes mujeres 40, jóvenes hombres 30, niñas y adolescentes 30, niños y adolescentes 20

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 280; AB: 190; AC: 0; AD: 0; AE: 50; AF: 60; AG: 40; AH: 30; AI: 30; AJ: 20; AK: vacío; AL: 700.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.

### Fuente 186 / salida 183: 2° Festival Escenautas Mujeres en el puño: Hilando la ternura, conquistando la libertad

ID: ACT-SCIH43410. Folio: SC-261026-171451. Fecha: 2026-07-20.

Artista o agrupación: Soy del Puño. Colectivo de Teatro Comunitario. Horario: 17:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 5, adultos mayores 1, jóvenes mujeres 25, jóvenes hombres 16, niñas y adolescentes 13, niños y adolescentes 9

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 43; AB: 26; AC: 0; AD: 0; AE: 5; AF: 1; AG: 25; AH: 16; AI: 13; AJ: 9; AK: 69; AL: 69.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 187 / salida 184: 2° Festival Escenautas Miedo come todo... sueños al vuelo

ID: ACT-SCRO87772. Folio: SC-261026-171452. Fecha: 2026-07-20.

Artista o agrupación: Flores TeatroDanza. Horario: 19:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 6, adultos mayores 3, jóvenes mujeres 51, jóvenes hombres 50, niñas y adolescentes 39, niños y adolescentes 26

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 96; AB: 79; AC: 0; AD: 0; AE: 6; AF: 3; AG: 51; AH: 50; AI: 39; AJ: 26; AK: 175; AL: 175.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 188 / salida 185: 2° Festival Escenautas La vaca que se creía mariposa

ID: ACT-SCPA71056. Folio: SC-261026-171453. Fecha: 2026-07-21.

Artista o agrupación: Demediado Teatro. Horario: 17:00:00. Artistas participantes reportados: 3. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 14, adultos mayores 8, jóvenes mujeres 32, jóvenes hombres 22, niñas y adolescentes 39, niños y adolescentes 31

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 85; AB: 61; AC: 0; AD: 0; AE: 14; AF: 8; AG: 32; AH: 22; AI: 39; AJ: 31; AK: 146; AL: 146.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 189 / salida 186: 2° Festival Escenautas El planeta Bumara: Una aventura interespacial

ID: ACT-SCKO96345. Folio: SC-261026-171454. Fecha: 2026-07-21.

Artista o agrupación: Producciones Arlequín. Horario: 19:00:00. Artistas participantes reportados: 3. Público meta: Familiar. Eje reportado: Juventudes e infancias. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 11, adultos mayores 9, jóvenes mujeres 52, jóvenes hombres 42, niñas y adolescentes 46, niños y adolescentes 37

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 109; AB: 88; AC: 0; AD: 0; AE: 11; AF: 9; AG: 52; AH: 42; AI: 46; AJ: 37; AK: 197; AL: 197.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 190 / salida 187: 2° Festival Escenautas Rin rin, las niñas también vuelan

ID: ACT-SCBY88246. Folio: SC-261026-171455. Fecha: 2026-07-22.

Artista o agrupación: Teatro Andante. Horario: 17:00:00. Artistas participantes reportados: 5. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 14, adultos mayores 6, jóvenes mujeres 27, jóvenes hombres 17, niñas y adolescentes 48, niños y adolescentes 37

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 90; AB: 61; AC: 1; AD: 1; AE: 14; AF: 6; AG: 27; AH: 17; AI: 48; AJ: 37; AK: 151; AL: 151.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 191 / salida 188: 2° Festival Escenautas Romeo y Julieta de Bolsillo

ID: ACT-SCFX23092. Folio: SC-261026-171456. Fecha: 2026-07-22.

Artista o agrupación: Líquido Colectivo. Horario: 19:00:00. Artistas participantes reportados: 4. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 13, adultos mayores 9, jóvenes mujeres 87, jóvenes hombres 58, niñas y adolescentes 51, niños y adolescentes 37

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 151; AB: 105; AC: 0; AD: 1; AE: 13; AF: 9; AG: 87; AH: 58; AI: 51; AJ: 37; AK: 256; AL: 256.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 192 / salida 189: 2° Festival Escenautas Tierra, lengua y corazón

ID: ACT-SCPI17433. Folio: SC-261026-171457. Fecha: 2026-07-23.

Artista o agrupación: Cronopio Teatro. Horario: 17:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 19, adultos mayores 14, jóvenes mujeres 48, jóvenes hombres 32, niñas y adolescentes 37, niños y adolescentes 26

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 104; AB: 72; AC: 0; AD: 0; AE: 19; AF: 14; AG: 48; AH: 32; AI: 37; AJ: 26; AK: 176; AL: 176.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 193 / salida 190: 2° Festival Escenautas Lumbri... una historia de amor

ID: ACT-SCEA76467. Folio: SC-261026-171458. Fecha: 2026-07-23.

Artista o agrupación: Bufones a la mar. Horario: 19:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 8, adultos mayores 12, jóvenes mujeres 71, jóvenes hombres 55, niñas y adolescentes 52, niños y adolescentes 40

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 131; AB: 107; AC: 0; AD: 0; AE: 8; AF: 12; AG: 71; AH: 55; AI: 52; AJ: 40; AK: 238; AL: 238.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 194 / salida 191: Fiestas patronales

ID: ACT-SCKW71636. Folio: SC-261026-171459. Fecha: 2026-07-23.

Artista o agrupación: Ballet Folklorico Xidoo. Horario: 19:00:00. Artistas participantes reportados: 30. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del sistema estatal de espacios escénicos y Artes vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $28.365,00. Desglose etario original (sin redistribuir): adultas mayores 115, adultos mayores 115, jóvenes mujeres 45, jóvenes hombres 45, niñas y adolescentes 40, niños y adolescentes 40

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 200; AB: 200; AC: 0; AD: 0; AE: 115; AF: 115; AG: 45; AH: 45; AI: 40; AJ: 40; AK: 400; AL: 400.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 195 / salida 192: 2° Festival Escenautas Caballos

ID: ACT-SCXU12640. Folio: SC-261026-171500. Fecha: 2026-07-24.

Artista o agrupación: Laboratorio de con-TACTO. Horario: 19:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 9, adultos mayores 5, jóvenes mujeres 57, jóvenes hombres 42, niñas y adolescentes 44, niños y adolescentes 30

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 110; AB: 77; AC: 0; AD: 0; AE: 9; AF: 5; AG: 57; AH: 42; AI: 44; AJ: 30; AK: 187; AL: 187.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 196 / salida 193: GIFF

ID: ACT-SCJP56717. Folio: SC-261026-171501. Fecha: 2026-07-24.

Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Internacional. Observaciones: CONVENIO

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.3.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: 0.

- Subdisciplina multidisciplinaria pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.3.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 197 / salida 194: GIFF

ID: ACT-SCFU02245. Folio: SC-261026-171502. Fecha: 2026-07-25.

Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Internacional. Observaciones: CONVENIO

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.3.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: 0.

- Subdisciplina multidisciplinaria pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.3.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 198 / salida 195: ¡Ay Mamita! ESCENAS AL VUELO

ID: ACT-SCZM32807. Folio: SC-261026-171503. Fecha: 2026-07-25.

Artista o agrupación: Moebius Teatro. Horario: 18:00:00. Artistas participantes reportados: 2. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Ventanas al Territorio. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: ESCENAS AL VUELO. Honorarios reportados: $14.600,00

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: 0.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 199 / salida 196: 2° Festival Escenautas La historia de las cosas

ID: ACT-SCGA68180. Folio: SC-261026-171504. Fecha: 2026-07-25.

Artista o agrupación: Teatro en espiral. Horario: 13:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 6, adultos mayores 4, jóvenes mujeres 42, jóvenes hombres 31, niñas y adolescentes 25, niños y adolescentes 17

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 73; AB: 53; AC: 0; AD: 1; AE: 6; AF: 4; AG: 42; AH: 31; AI: 25; AJ: 17; AK: 126; AL: 126.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 200 / salida 197: 2° Festival Escenautas Contramolinos

ID: ACT-SCQN09687. Folio: SC-261026-171505. Fecha: 2026-07-25.

Artista o agrupación: Ojo Negro. Horario: 17:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 18, adultos mayores 12, jóvenes mujeres 43, jóvenes hombres 28, niñas y adolescentes 48, niños y adolescentes 33

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 109; AB: 74; AC: 0; AD: 1; AE: 18; AF: 12; AG: 43; AH: 28; AI: 48; AJ: 33; AK: 183; AL: 183.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 201 / salida 198: Huateque cultural

ID: ACT-SCZM13538. Folio: SC-261026-171506. Fecha: 2026-07-25.

Artista o agrupación: Escenario móvil Melquiades, con participación de varios grupos de las casas de cultura de: Tarandacuao, Jerecuaro, A. el Alto, A. el Grande, Tarimoro y Coroneo.. hacen cierre con un grupo de Queretaro Rojo Tabaco. Horario: 12:00 a 02:30 am. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventanas al territorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $164.482,00. Desglose etario original (sin redistribuir): adultas mayores 203, adultos mayores 210, jóvenes mujeres 200, jóvenes hombres 200, niñas y adolescentes 100, niños y adolescentes 100

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 13; E: 2.4.3.3.; F: cooperación; G: 14.

Cifras originales: AA: 507; AB: 515; AC: 4; AD: 5; AE: 203; AF: 210; AG: 200; AH: 200; AI: 100; AJ: 100; AK: 1022; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 202 / salida 199: Festival del Borrego

ID: ACT-SCWU15449. Folio: SC-261026-171507. Fecha: 2026-07-26.

Artista o agrupación: Escenario móvil Melquiades. Horario: 11:00 a 18:00. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventanas al territorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $0,00. Desglose etario original (sin redistribuir): adultas mayores 70, adultos mayores 50, jóvenes mujeres 52, jóvenes hombres 42, niñas y adolescentes 70, niños y adolescentes 70

Alineación original: A: objetivo 1.2.; B: estrategia 1.2.3.4.; D: 13; E: 2.4.3.3.; F: cooperación; G: 14.

Cifras originales: AA: 197; AB: 167; AC: 5; AD: 5; AE: 70; AF: 50; AG: 52; AH: 42; AI: 70; AJ: 70; AK: 364; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 1.2.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 1.2.3.4.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 203 / salida 200: GIFF

ID: ACT-SCCS95461. Folio: SC-261026-171508. Fecha: 2026-07-26.

Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Estatal. Observaciones: CONVENIO

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.3.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Subdisciplina multidisciplinaria pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.3.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.

### Fuente 204 / salida 201: 2° Festival Escenautas Kupúrima

ID: ACT-SCHU18365. Folio: SC-261026-171509. Fecha: 2026-07-26.

Artista o agrupación: Gitanas Teatro. Horario: 13:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Programa reportado: Festivales. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 4, adultos mayores 1, jóvenes mujeres 26, jóvenes hombres 18, niñas y adolescentes 12, niños y adolescentes 8

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 42; AB: 27; AC: 0; AD: 0; AE: 4; AF: 1; AG: 26; AH: 18; AI: 12; AJ: 8; AK: 69; AL: 69.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 205 / salida 202: 2° Festival Escenautas Neko, el gato viajero

ID: ACT-SCMR91715. Folio: SC-261026-171510. Fecha: 2026-07-26.

Artista o agrupación: AOPARescena. Horario: 15:00:00. Público meta: Familiar. Eje reportado: Juventudes e infancias. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Desglose etario original (sin redistribuir): adultas mayores 9, adultos mayores 5, jóvenes mujeres 46, jóvenes hombres 31, niñas y adolescentes 43, niños y adolescentes 28

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 98; AB: 65; AC: 0; AD: 1; AE: 9; AF: 5; AG: 46; AH: 31; AI: 43; AJ: 28; AK: 163; AL: 163.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 206 / salida 203: GIFF

ID: ACT-SCLV36964. Folio: SC-261026-171511. Fecha: 2026-07-27.

Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Estatal. Observaciones: CONVENIO

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.3.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: vacío; AB: vacío; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: vacío; AL: vacío.

- Subdisciplina multidisciplinaria pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.3.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Sin cifras de población; no se creó una fila ficticia.

### Fuente 207 / salida 204: Curso de verano

ID: ACT-SCWQ58288. Folio: SC-261026-171512. Fecha: 2026-07-31.

Artista o agrupación: Tlacuache Titeres. Horario: 11:00:00. Artistas participantes reportados: 3. Público meta: Infancias. Eje reportado: Juventudes e infancias. Programa reportado: Operación del sistema estatal de espacios escénicos y Artes vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $15.660,00. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 1, jóvenes mujeres 16, jóvenes hombres 13, niñas y adolescentes 50, niños y adolescentes 48

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 66; AB: 62; AC: 0; AD: 0; AE: 0; AF: 1; AG: 16; AH: 13; AI: 50; AJ: 48; AK: 128; AL: 128.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 208 / salida 205: Espejos de agua

ID: ACT-SCOE39019. Folio: SC-261026-171513. Fecha: 2026-08-01.

Artista o agrupación: Laboratorio de con-TACTO. Horario: 18:00:00. Artistas participantes reportados: 4. Público meta: Adolescentes y adultos. Origen o alcance reportado: Estatal. Responsable reportado: Elisa. Honorarios reportados: $50.000,00. Desglose etario original (sin redistribuir): adultas mayores 4, adultos mayores 3, jóvenes mujeres 46, jóvenes hombres 23, niñas y adolescentes 5, niños y adolescentes 3

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 55; AB: 29; AC: 0; AD: 0; AE: 4; AF: 3; AG: 46; AH: 23; AI: 5; AJ: 3; AK: 84; AL: 84.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 209 / salida 206: Valentina y Miguelito

ID: ACT-SCFF24332. Folio: SC-261026-171514. Fecha: 2026-08-06.

Artista o agrupación: Estudiantes XV Generación UDL. Horario: 13:00:00. Público meta: Adolescentes y adultos. Programa reportado: N/A. Responsable reportado: Elisa. Honorarios reportados: $0,00. Desglose etario original (sin redistribuir): adultas mayores 2, adultos mayores 0, jóvenes mujeres 10, jóvenes hombres 6, niñas y adolescentes 20, niños y adolescentes 10

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.3.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 32; AB: 16; AC: 0; AD: 0; AE: 2; AF: 0; AG: 10; AH: 6; AI: 20; AJ: 10; AK: 48; AL: 48.

- Disciplina pendiente o valor de fuente no equivalente: None
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.3.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 210 / salida 207: La Prudencia

ID: ACT-SCEW97517. Folio: SC-261026-171515. Fecha: 2026-08-06.

Artista o agrupación: Estudiantes XV Generación UDL. Horario: 16:00:00. Público meta: Adolescentes y adultos. Programa reportado: N/A. Responsable reportado: Elisa. Honorarios reportados: $0,00. Desglose etario original (sin redistribuir): adultas mayores 10, adultos mayores 2, jóvenes mujeres 12, jóvenes hombres 12, niñas y adolescentes 20, niños y adolescentes 20

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.3.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 42; AB: 34; AC: 0; AD: 0; AE: 10; AF: 2; AG: 12; AH: 12; AI: 20; AJ: 20; AK: 76; AL: 76.

- Disciplina pendiente o valor de fuente no equivalente: None
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.3.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 211 / salida 208: Acassusso

ID: ACT-SCCA50664. Folio: SC-261026-171516. Fecha: 2026-08-06.

Artista o agrupación: Estudiantes XV Generación UDL. Horario: 18:00:00. Público meta: Adolescentes y adultos. Programa reportado: N/A. Responsable reportado: Elisa. Honorarios reportados: $0,00. Desglose etario original (sin redistribuir): adultas mayores 35, adultos mayores 10, jóvenes mujeres 30, jóvenes hombres 20, niñas y adolescentes 0, niños y adolescentes 2

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.3.3.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 65; AB: 32; AC: 0; AD: 0; AE: 35; AF: 10; AG: 30; AH: 20; AI: 0; AJ: 2; AK: 97; AL: 97.

- Disciplina pendiente o valor de fuente no equivalente: None
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.3.3.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 212 / salida 209: Asistencia a San Miguel de Allende

ID: ACT-SCQX11642. Folio: SC-261026-171517. Fecha: 2026-08-07.

Artista o agrupación: Banda de Musica del Estado. Horario: 18:00:00. Artistas participantes reportados: 35. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Ana. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 0, jóvenes mujeres 70, jóvenes hombres 80, niñas y adolescentes 30, niños y adolescentes 20

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 120; AB: 140; AC: 2; AD: 0; AE: 0; AF: 0; AG: 70; AH: 80; AI: 30; AJ: 20; AK: 462; AL: 462.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Diferencia conservada: mujeres 120 + hombres 140 = 260; total territorial 462.

### Fuente 213 / salida 210: Charlie y la fábrica de chocolates

ID: ACT-SCFJ06404. Folio: SC-261026-171518. Fecha: 2026-08-08.

Artista o agrupación: Ópera Guanajuato. Horario: 12:00:00. Artistas participantes reportados: 20. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: APOYO. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 41, adultos mayores 27, jóvenes mujeres 73, jóvenes hombres 56, niñas y adolescentes 25, niños y adolescentes 17

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 139; AB: 100; AC: 0; AD: 0; AE: 41; AF: 27; AG: 73; AH: 56; AI: 25; AJ: 17; AK: 239; AL: 239.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 214 / salida 211: Fiestas patronales

ID: ACT-SCLN11543. Folio: SC-261026-171519. Fecha: 2026-08-08.

Artista o agrupación: Cia de Danza de San José Iturbide. Horario: 18:00:00. Artistas participantes reportados: 30. Público meta: Jóvenes. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Operación del sistema estatal de espacios escénicos y Artes vivas. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $22.750,00. Desglose etario original (sin redistribuir): adultas mayores 70, adultos mayores 40, jóvenes mujeres 50, jóvenes hombres 25, niñas y adolescentes 25, niños y adolescentes 20

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 145; AB: 85; AC: 0; AD: 0; AE: 70; AF: 40; AG: 50; AH: 25; AI: 25; AJ: 20; AK: 230; AL: vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 215 / salida 212: Festival Trombontepec

ID: ACT-SCZD10247. Folio: SC-261026-171520. Fecha: 2026-08-10.

Artista o agrupación: Trombontepec. Horario: 20:00:00. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Nacional. Desglose etario original (sin redistribuir): adultas mayores 53, adultos mayores 24, jóvenes mujeres 139, jóvenes hombres 94, niñas y adolescentes 21, niños y adolescentes 34

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 215; AB: 155; AC: 2; AD: 3; AE: 53; AF: 24; AG: 139; AH: 94; AI: 21; AJ: 34; AK: 370; AL: vacío.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 216 / salida 213: Festival Trombontepec

ID: ACT-SCBW26144. Folio: SC-261026-171521. Fecha: 2026-08-11.

Artista o agrupación: Trombontepec y BME. Horario: 20:00:00. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Nacional. Desglose etario original (sin redistribuir): adultas mayores 112, adultos mayores 93, jóvenes mujeres 93, jóvenes hombres 71, niñas y adolescentes 24, niños y adolescentes 16

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 229; AB: 180; AC: vacío; AD: vacío; AE: 112; AF: 93; AG: 93; AH: 71; AI: 24; AJ: 16; AK: 409; AL: vacío.

- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 217 / salida 214: Flashmob Festival Trombontepec

ID: ACT-SCLA87587. Folio: SC-261026-171522. Fecha: 2026-08-14.

Artista o agrupación: Trombontepec. Horario: 18:00:00. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Nacional. Desglose etario original (sin redistribuir): adultas mayores 6, adultos mayores 10, jóvenes mujeres 45, jóvenes hombres 50, niñas y adolescentes 7, niños y adolescentes 9

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 58; AB: 69; AC: vacío; AD: vacío; AE: 6; AF: 10; AG: 45; AH: 50; AI: 7; AJ: 9; AK: 127; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 218 / salida 215: Programa no. 1 Apertura de temporada

ID: ACT-SCTQ35868. Folio: SC-261026-171523. Fecha: 2026-08-14.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Desglose etario original (sin redistribuir): adultas mayores 136, adultos mayores 91, jóvenes mujeres 104, jóvenes hombres 72, niñas y adolescentes 1, niños y adolescentes 3

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 241; AB: 166; AC: vacío; AD: vacío; AE: 136; AF: 91; AG: 104; AH: 72; AI: 1; AJ: 3; AK: 407; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 219 / salida 216: Feria Municipal

ID: ACT-SCSJ47839. Folio: SC-261026-171524. Fecha: 2026-08-15.

Artista o agrupación: Ballet Folklorico Tlen Touaxca. Horario: 15:30:00. Artistas participantes reportados: 38. Público meta: Familiar. Eje reportado: Cooperación y sostenibilidad. Programa reportado: Ventanas al Territorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $24.940,00. Desglose etario original (sin redistribuir): adultas mayores 102, adultos mayores 87, jóvenes mujeres 315, jóvenes hombres 278, niñas y adolescentes 112, niños y adolescentes 83

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 533; AB: 451; AC: 4; AD: 3; AE: 102; AF: 87; AG: 315; AH: 278; AI: 112; AJ: 83; AK: 984; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Artes escénicas', 'Subdisciplina': 'Danza folklórica'}. La fuente identifica explícitamente danza o ballet folklórico.

### Fuente 220 / salida 217: Matinata Jardin Union

ID: ACT-SCKY24762. Folio: SC-261026-171525. Fecha: 2026-08-16.

Artista o agrupación: Banda de Musica del estado. Horario: 12:00:00. Artistas participantes reportados: 35. Eje reportado: Juventudes e infancias. Origen o alcance reportado: Estatal. Responsable reportado: Ana. Desglose etario original (sin redistribuir): adultas mayores 15, adultos mayores 5, jóvenes mujeres 10, jóvenes hombres 0, niñas y adolescentes 0, niños y adolescentes 9

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 25; AB: 17; AC: 0; AD: 3; AE: 15; AF: 5; AG: 10; AH: 0; AI: 0; AJ: 9; AK: 42; AL: 126.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 221 / salida 218: Feria Municipal

ID: ACT-SCKE42582. Folio: SC-261026-171526. Fecha: 2026-08-19.

Artista o agrupación: Colectivo Afro Son. Horario: 20:00:00. Artistas participantes reportados: 9. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Ventanas al Territorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $73.544,00. Desglose etario original (sin redistribuir): adultas mayores 72, adultos mayores 59, jóvenes mujeres 119, jóvenes hombres 108, niñas y adolescentes 78, niños y adolescentes 59

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 271; AB: 229; AC: 2; AD: 3; AE: 72; AF: 59; AG: 119; AH: 108; AI: 78; AJ: 59; AK: 500; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 222 / salida 219: Feria de la Granada y la Pitaya

ID: ACT-SCZW04663. Folio: SC-261026-171527. Fecha: 2026-08-21.

Artista o agrupación: Flor de Marfil. Horario: 16:30:00. Artistas participantes reportados: 6. Público meta: Familiar. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Ventanas al Territorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 0; AB: 0; AC: vacío; AD: vacío; AE: vacío; AF: vacío; AG: vacío; AH: vacío; AI: vacío; AJ: vacío; AK: 0; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.

### Fuente 223 / salida 220: Programa no. 2

ID: ACT-SCWQ34721. Folio: SC-261026-171528. Fecha: 2026-08-21.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 127, adultos mayores 86, jóvenes mujeres 130, jóvenes hombres 101, niñas y adolescentes 3, niños y adolescentes 5

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 260; AB: 192; AC: 0; AD: 0; AE: 127; AF: 86; AG: 130; AH: 101; AI: 3; AJ: 5; AK: 452; AL: vacío.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 224 / salida 221: Matinata Jardin Union

ID: ACT-SCXD75308. Folio: SC-261026-171529. Fecha: 2026-08-23.

Artista o agrupación: Banda de Musica del Estado. Horario: 12:00:00. Artistas participantes reportados: 35. Eje reportado: Juventudes e infancias. Responsable reportado: Ana. Desglose etario original (sin redistribuir): adultas mayores 10, adultos mayores 15, jóvenes mujeres 9, jóvenes hombres 9, niñas y adolescentes 5, niños y adolescentes 6

Alineación original: A: objetivo 5.4; B: estrategia 5.4.4.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 24; AB: 30; AC: 0; AD: 0; AE: 10; AF: 15; AG: 9; AH: 9; AI: 5; AJ: 6; AK: 54; AL: 162.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.4; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.4.4.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': None}. La agrupación se identifica como Banda de Música; no se presume que sea banda sinfónica.

### Fuente 225 / salida 222: XXI FESTIVAL INTERNACIONAL CALLEJÓN DEL RUIDO

ID: ACT-SCWN91888. Folio: SC-261026-171530. Fecha: 2026-08-24.

Artista o agrupación: Cuarteto Mooti+Andrés Peredo+Mario Ortiz. Horario: 19:00:00. Artistas participantes reportados: 6. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Honorarios reportados: $34.800,00. Desglose etario original (sin redistribuir): adultas mayores 7, adultos mayores 6, jóvenes mujeres 16, jóvenes hombres 11, niñas y adolescentes 23, niños y adolescentes 15

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 46; AB: 32; AC: 0; AD: 0; AE: 7; AF: 6; AG: 16; AH: 11; AI: 23; AJ: 15; AK: 78; AL: 78.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 226 / salida 223: XXI FESTIVAL INTERNACIONAL CALLEJÓN DEL RUIDO

ID: ACT-SCYQ62535. Folio: SC-261026-171531. Fecha: 2026-08-25.

Artista o agrupación: Laura Gracia. Horario: 19:00:00. Artistas participantes reportados: 1. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Nacional. Responsable reportado: Jonathan. Honorarios reportados: $11.600,00. Desglose etario original (sin redistribuir): adultas mayores 1, adultos mayores 1, jóvenes mujeres 15, jóvenes hombres 24, niñas y adolescentes 1, niños y adolescentes 2

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 17; AB: 27; AC: 0; AD: 0; AE: 1; AF: 1; AG: 15; AH: 24; AI: 1; AJ: 2; AK: 44; AL: 44.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 227 / salida 224: XXI FESTIVAL INTERNACIONAL CALLEJÓN DEL RUIDO

ID: ACT-SCVA57617. Folio: SC-261026-171532. Fecha: 2026-08-26.

Artista o agrupación: Messingvinnder+Rodrigo Mata+ Néstor Páramo. Horario: 19:00:00. Artistas participantes reportados: 3. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Nacional. Responsable reportado: Jonathan. Honorarios reportados: $23.200,00. Desglose etario original (sin redistribuir): adultas mayores 0, adultos mayores 1, jóvenes mujeres 10, jóvenes hombres 15, niñas y adolescentes 0, niños y adolescentes 2

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 10; AB: 18; AC: 0; AD: 0; AE: 0; AF: 1; AG: 10; AH: 15; AI: 0; AJ: 2; AK: 28; AL: 28.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 228 / salida 225: Arsénico y encaje

ID: ACT-SCTJ75644. Folio: SC-261026-171533. Fecha: 2026-08-26.

Artista o agrupación: Teatro Universitario de la UG. Horario: 19:00:00. Artistas participantes reportados: 20. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 34, adultos mayores 12, jóvenes mujeres 49, jóvenes hombres 31, niñas y adolescentes 0, niños y adolescentes 0

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 83; AB: 43; AC: 0; AD: 0; AE: 34; AF: 12; AG: 49; AH: 31; AI: 0; AJ: 0; AK: 126; AL: 126.

- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 229 / salida 226: Feria Municipal

ID: ACT-SCXF01974. Folio: SC-261026-171534. Fecha: 2026-08-26.

Artista o agrupación: Anticuario Teatro. Horario: 19:00:00. Artistas participantes reportados: 12. Público meta: Adolescentes y adultos. Eje reportado: Equidad, diversidad e inclusión. Programa reportado: Ventanas al Territorio. Origen o alcance reportado: Estatal. Responsable reportado: Marce. Honorarios reportados: $29.800,00. Desglose etario original (sin redistribuir): adultas mayores 28, adultos mayores 31, jóvenes mujeres 112, jóvenes hombres 92, niñas y adolescentes 51, niños y adolescentes 48

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 4; E: 2.2.1; F: cooperación; G: 5.

Cifras originales: AA: 193; AB: 172; AC: 2; AD: 1; AE: 28; AF: 31; AG: 112; AH: 92; AI: 51; AJ: 48; AK: 365; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 230 / salida 227: Arsénico y encaje

ID: ACT-SCYU08771. Folio: SC-261026-171535. Fecha: 2026-08-27.

Artista o agrupación: Teatro Universitario de la UG. Horario: 19:00:00. Artistas participantes reportados: 20. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 51, adultos mayores 34, jóvenes mujeres 55, jóvenes hombres 44, niñas y adolescentes 3, niños y adolescentes 2

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 13; E: 2.4.3.3.; F: cooperación; G: 12.

Cifras originales: AA: 109; AB: 80; AC: 0; AD: 0; AE: 51; AF: 34; AG: 55; AH: 44; AI: 3; AJ: 2; AK: 189; AL: 189.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.4 Reducir brechas de desigualdad según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.4.3 Descentralización de la oferta cultural según la acción PG explícita 2.4.3.3 Incidir en el involucramiento de las personas con el ecosistema cultural y el catálogo actual. Validar discrepancia.

### Fuente 231 / salida 228: XXI FESTIVAL INTERNACIONAL CALLEJÓN DEL RUIDO

ID: ACT-SCUK56289. Folio: SC-261026-171536. Fecha: 2026-08-27.

Artista o agrupación: Banda de Música del Estado. Horario: 20:00:00. Artistas participantes reportados: 30. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: Solo pagamos Logística Integral. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 2, adultos mayores 3, jóvenes mujeres 28, jóvenes hombres 19, niñas y adolescentes 0, niños y adolescentes 1

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 30; AB: 23; AC: 0; AD: 0; AE: 2; AF: 3; AG: 28; AH: 19; AI: 0; AJ: 1; AK: 53; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Subdisciplina musical pendiente.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

### Fuente 232 / salida 229: XXI FESTIVAL INTERNACIONAL CALLEJÓN DEL RUIDO

ID: ACT-SCAQ03662. Folio: SC-261026-171537. Fecha: 2026-08-28.

Artista o agrupación: Orquesta Sinfónica de la Universidad de Guanajuato. Horario: 20:00:00. Artistas participantes reportados: 80. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Programa reportado: N/A. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: CONVENIO UG. Honorarios reportados: N/A. Desglose etario original (sin redistribuir): adultas mayores 56, adultos mayores 40, jóvenes mujeres 153, jóvenes hombres 66, niñas y adolescentes 4, niños y adolescentes 3

Alineación original: A: objetivo 5.5.; B: estrategia: 5.5.2.2.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 213; AB: 109; AC: 0; AD: 0; AE: 56; AF: 40; AG: 153; AH: 66; AI: 4; AJ: 3; AK: 322; AL: vacío.

- Meta relacionada con festivales/artes vivas por clave, programa y disciplina reportados; validar. Dirección de origen conservada como Producción Artística aunque el catálogo diga SIN ASIGNAR.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia: 5.5.2.2.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Clasificación completada: {'Disciplina': 'Música', 'Subdisciplina': 'Orquestas'}. La agrupación reportada se identifica explícitamente como orquesta.

### Fuente 233 / salida 230: Ars Memoriae

ID: ACT-SCWN79482. Folio: SC-261026-171538. Fecha: 2026-08-29.

Artista o agrupación: Vladimir Ibarra. Horario: 19:00:00. Artistas participantes reportados: 1. Público meta: Adolescentes y adultos. Eje reportado: Cooperación y sostenibilidad. Origen o alcance reportado: Estatal. Responsable reportado: Jonathan. Observaciones: Temporada de Música. Desglose etario original (sin redistribuir): adultas mayores 26, adultos mayores 17, jóvenes mujeres 10, jóvenes hombres 7, niñas y adolescentes 1, niños y adolescentes 2

Alineación original: A: objetivo 5.5.; B: estrategia 5.5.1.; D: 9; E: 2.2.1; F: inclusión; G: 5.

Cifras originales: AA: 37; AB: 26; AC: 0; AD: 0; AE: 26; AF: 17; AG: 10; AH: 7; AI: 1; AJ: 2; AK: 63; AL: vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Objetivo_PG: fuente objetivo 5.5.; preparado 2.2 Fortalecer cohesión social según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.
- Estrategia_PG: fuente estrategia 5.5.1.; preparado 2.2.1 Participación social comunitaria según la acción PG explícita 2.2.1 Participación social comunitaria y el catálogo actual. Validar discrepancia.

## Fuentes

- Archivo actualizado de Marcelina, hoja programa ene-ago 2026, filas 3–233. No se incorporaron las hojas ocultas ni septiembre.
- Guías de Marcelina: Promesa nvo com..pdf y Accion prog. est..pdf.
- Estructura y catálogos de DB_Sistema_Cultura_GTO_V1.xlsx, copia local proporcionada.
- Verificado: encabezados, cada valor exportado, fechas como fechas de Excel, IDs/folios únicos frente a la copia local, relaciones padre/hijo y conservación de cantidades. No se ejecutó una importación ni una validación de reglas de AppSheet en producción.
