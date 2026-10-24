# Carga de Marcelina — enero a agosto de 2026

## Antes de pegar

El archivo contiene exactamente las cuatro hojas operativas, en el orden de columnas de la base proporcionada. Solo se utilizó la hoja visible «programa ene-ago 2026». No se modificó ningún archivo fuente ni la base en línea.

Es una preparación de los datos disponibles, no una validación de la veracidad de las cifras ni de las reglas de AppSheet. Hay campos vacíos que deberán completarse posteriormente. Los datos de población se prepararon sin inventar edades.

Se revisaron 244 filas fuente: 242 actividades nuevas y 2 posibles coincidencias separadas. Hay **105 actividades sin Clave_Proceso** porque la fuente no identifica inequívocamente su meta. No se les asignó PB3574 por defecto. Al pegarlas, el tablero podrá mostrarlas sin proceso y AppSheet podría exigir completar campos al editarlas.

## Cómo copiar y pegar

1. Haz una copia de respaldo de la base productiva y, primero, una prueba con una actividad y sus registros hijos.
2. Copia solo los rangos siguientes, **sin encabezados**, y pega **solo valores** desde la columna A de la primera fila realmente libre de la hoja correspondiente. Revisa la última clave no vacía, no solo la última celda con formato.
3. Pega primero actividades, después territorio y después población. Cada lote se pega una sola vez. No reemplaces registros existentes ni pegues filas completas sobre las columnas en desuso.
4. Mantén los IDs exactamente como están: los registros hijos dependen de ellos. Revisa de nuevo que no existan en producción antes de la carga.
5. Comprueba que los conteos aumenten conforme al lote y sincroniza/revisa AppSheet. No hay una prueba de importación productiva realizada por este trabajo.

| Hoja | Rango a copiar | Registros |
| --- | --- | ---: |
| Registro_Actividades | A2:BN243 | 242 |
| Registro_Territorio | A2:L243 | 242 |
| Registro_Poblacion | A2:H567 | 566 |
| Regitro_Evidencia | No copiar: solo encabezados | 0 |

La hoja de evidencias no tiene filas: el concentrado no identifica archivos vinculables por actividad. La columna «Comprobante» contiene cifras y no se convirtió en una ruta ficticia. Tampoco se crearon evidencias vacías.

## Criterios aplicados

- Las celdas amarillas señalan campos pendientes; no son datos inferidos ni valores cero. El color no forma parte de los valores a pegar.
- Usuario_Registra: machagoya@guanajuato.gob.mx en todas las actividades nuevas, por indicación de Luis.
- IDs de actividad con formato ACT-SC + dos letras + cinco dígitos, comprobados contra la copia de la base. IDs hijos de ocho caracteres, también únicos. Folios SC-YYMMDD-HHMMSS con tiempos consecutivos del lote. Fecha_Captura corresponde a la preparación del lote, no al día del evento ni a la hora futura de pegado.
- Cada fila fuente se conserva como un registro. No se fusionaron funciones por título, fecha o sede; artistas distintos y municipios distintos pueden representar funciones legítimamente diferentes. Las tres filas sin título recibieron una etiqueta «Presentación de…» a partir del artista, sin inventar otro evento.
- Se conservaron los totales territoriales de AK y los conteos por género de AA/AB aunque difieran. Un dato vacío sigue vacío; un cero sigue siendo el cero reportado, sin afirmar que sea definitivo.
- Público asistente en Cantidad_Acceso. Cantidad_Participacion es cero solo cuando hay una cantidad de acceso informada. Los artistas no se agregaron al público, ni se interpretaron automáticamente como contratados o apoyados. Este criterio operativo de acceso debe validarse con Planeación.
- Grupo_Etario: Población General. La fuente mezcla niñas y adolescentes y no define los rangos de jóvenes. No se repartió por edades ni se calculó una población adulta residual. Los conteos etarios originales se conservaron en Descripcion_Breve y abajo para revisión.
- Cuando una cifra de discapacidad es positiva y no excede el total del mismo género, se separó como subconjunto: discapacidad más remanente equivale al total por género. El remanente tiene Grupo_Prioritario vacío (no informado), no una declaración de ausencia de otros grupos. No se sumó discapacidad otra vez sobre el total.
- Localidades, tipo de asentamiento y ZAP quedan vacíos si la fuente no los permite identificar. No se consideró que todo evento ocurriera en la cabecera municipal ni que todo municipio fuera ZAP.
- Se estandarizaron municipios y sedes con equivalencias claras del catálogo. «Teatro de la Cd. de Purísima…» se relacionó con «Teatro de la Ciudad de Purísima». No se alteraron catálogos.
- PB3574 se propuso como ID_Alineacion 83 (actividades de artes vivas); PB3569 como 85. QC4140 con programa de festivales como 5 y QC4142 con Ventanas al Territorio como 10. Son selecciones propuestas a validar; las claves contradictorias o ausentes no se completaron. En QC4140/QC4142 se conservó Producción Artística por el área de origen conocida, aunque el catálogo tenga SIN ASIGNAR.
- No se usó el número de fila del catálogo para interpretar los consecutivos internos de Marcelina. Promesa_NC y Acciones_PEC quedan vacíos cuando falta su guía. Los códigos originales se conservan en el control por actividad.
- Solo se trasladaron objetivos, estrategias y acciones del PG con coincidencia inequívoca de código en el campo de catálogo correspondiente. No se cambió una estrategia por una acción para forzar una equivalencia.
- Formato Presencial y una sesión por fila son criterios operativos propuestos a partir del registro de función con fecha/sede. Deben revisarse en registros que engloben varias sesiones o formatos.
- Las columnas de contratos, apoyos, derechos de autor y otros datos no reportados no se llenaron con ceros, «No» ni valores supuestos. Honorarios y cifras de artistas se conservaron en descripción, sin convertirlos en contratos.
- Las columnas rojas de actividades desde BO y de territorio desde M no se incluyeron. No se usó Dashboard_Master ni las hojas ocultas de Marcelina.

## Posibles registros existentes — no incluidos para pegar

Se apartaron para evitar duplicaciones. No se actualizó el registro existente ni se agregaron sus hijos. Para completar alguno, revisar primero su identidad y sus registros asociados.

| Fila fuente | Evento | ID existente a revisar |
| --- | --- | --- |
| 3 | El Extraño Mundo de Jack | ACT-SCLG64192 |
| 4 | Matinata BME | ACT-SCWW82026 |

## Totales de control

- Total territorial informado en las filas nuevas: 64,637.
- Población preparada a partir de las cifras disponibles: 67,393.
- Estos totales son fuentes alternativas del mismo público: **no deben sumarse entre sí**. Las diferencias preexistentes se conservaron por instrucción de Luis. No son personas únicas ni cifras certificadas.

## Control por actividad

La fila fuente refiere al archivo original, hoja «programa ene-ago 2026». La fila de salida corresponde a Registro_Actividades del archivo preparado. Las edades y códigos siguientes son los valores de origen, sin equivalencias inventadas.

### Fila fuente 5 · salida 2 · ACT-SCXO74853

Evento: Concierto San Miguel de Allende. Fecha preparada: 2026-01-21. Folio: SC-261023-193916.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=1.2.3.4, F=cooperación, G=16.1.

Conteos originales: AA=225, AB=255, AC=0, AD=0, AE=70, AF=65, AG=110, AH=125, AI=45, AJ=65, AK=480, AL=vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 6 · salida 3 · ACT-SCDB12898

Evento: Coppelia. Fecha preparada: 2026-01-24. Folio: SC-261023-193917.

Alineación original: A=vacío, B=vacío, D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=153, AB=99, AC=0, AD=0, AE=12, AF=11, AG=117, AH=66, AI=24, AJ=22, AK=252, AL=vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 7 · salida 4 · ACT-SCMP87660

Evento: Matinata BME. Fecha preparada: 2026-01-25. Folio: SC-261023-193918.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=1.2.3.4, F=cooperación, G=16.1.

Conteos originales: AA=95, AB=79, AC=2, AD=1, AE=15, AF=15, AG=58, AH=43, AI=20, AJ=20, AK=174, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 8 · salida 5 · ACT-SCAA68253

Evento: Programa 1 Homenaje a Manuel de Falla. Fecha preparada: 2026-01-30. Folio: SC-261023-193919.

Alineación original: A=objetivo 5.4, B=estrategia: 5.4.4.1., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=250, AB=159, AC=0, AD=0, AE=115, AF=79, AG=134, AH=77, AI=1, AJ=3, AK=409, AL=409.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 9 · salida 6 · ACT-SCZN67553

Evento: Los Músicos de la Capital. Fecha preparada: 2026-02-01. Folio: SC-261023-193920.

Alineación original: A=objetivo 5.5, B=estrategia: 5.5.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=87, AB=75, AC=0, AD=0, AE=19, AF=12, AG=41, AH=26, AI=27, AJ=37, AK=162, AL=162.

- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 10 · salida 7 · ACT-SCZW47370

Evento: Matinata BME. Fecha preparada: 2026-02-01. Folio: SC-261023-193921.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=1.2.3.4, F=cooperación, G=16.1.

Conteos originales: AA=66, AB=66, AC=0, AD=0, AE=30, AF=35, AG=22, AH=18, AI=14, AJ=13, AK=132, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 11 · salida 8 · ACT-SCZB83866

Evento: Los Músicos de la Capital. Fecha preparada: 2026-02-01. Folio: SC-261023-193922.

Alineación original: A=objetivo 5.5, B=estrategia: 5.5.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=199, AB=173, AC=0, AD=2, AE=36, AF=43, AG=107, AH=86, AI=56, AJ=42, AK=372, AL=372.

- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 12 · salida 9 · ACT-SCEY76156

Evento: Programa 2. Fecha preparada: 2026-02-06. Folio: SC-261023-193923.

Alineación original: A=objetivo 5.5, B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=192, AB=192, AC=10, AD=4, AE=128, AF=104, AG=50, AH=75, AI=4, AJ=9, AK=384, AL=384.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 13 · salida 10 · ACT-SCCD63857

Evento: Lava, Dora lava. Fecha preparada: 2026-02-09. Folio: SC-261023-193924.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=44, AB=42, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=44, AJ=42, AK=86, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 14 · salida 11 · ACT-SCWL37577

Evento: Lava, Dora lava. Fecha preparada: 2026-02-10. Folio: SC-261023-193925.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=98, AB=91, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=98, AJ=91, AK=189, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 15 · salida 12 · ACT-SCWW12467

Evento: Programa 3. Fecha preparada: 2026-02-13. Folio: SC-261023-193926.

Alineación original: A=objetivo 5.4, B=estrategia: 5.4.4.1., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=222, AB=186, AC=0, AD=2, AE=134, AF=110, AG=87, AH=72, AI=1, AJ=2, AK=408, AL=408.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 16 · salida 13 · ACT-SCFI71141

Evento: Reunión Estatal de Cultura 2026. Fecha preparada: 2026-02-13. Folio: SC-261023-193927.

Alineación original: A=n/a, B=vacío, D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Disciplina pendiente o valor de fuente no equivalente: None
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 17 · salida 14 · ACT-SCTG93296

Evento: Romeo y Julieta de bolsillo. Fecha preparada: 2026-02-14. Folio: SC-261023-193928.

Alineación original: A=Objetivo 5.5, B=estrategia:5.5.1.1, D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=94, AB=52, AC=0, AD=0, AE=8, AF=7, AG=70, AH=33, AI=16, AJ=12, AK=146, AL=146.

- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 18 · salida 15 · ACT-SCKU55555

Evento: 100 años de José Alfredo. Fecha preparada: 2026-02-14. Folio: SC-261023-193929.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=352, AB=204, AC=0, AD=0, AE=123, AF=71, AG=225, AH=127, AI=4, AJ=6, AK=556, AL=556.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 19 · salida 16 · ACT-SCPY45595

Evento: Día del ejército nacional. Fecha preparada: 2026-02-19. Folio: SC-261023-193930.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=415, AB=740, AC=0, AD=0, AE=0, AF=0, AG=415, AH=740, AI=0, AJ=0, AK=1155, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 20 · salida 17 · ACT-SCRI08649

Evento: Programa 4. Fecha preparada: 2026-02-20. Folio: SC-261023-193931.

Alineación original: A=objetivo 5.4, B=estrategia: 5.4.4.1., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=193, AB=161, AC=0, AD=0, AE=73, AF=52, AG=119, AH=104, AI=1, AJ=5, AK=354, AL=354.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 21 · salida 18 · ACT-SCEX27983

Evento: 100 años de José Alfredo. Fecha preparada: 2026-02-20. Folio: SC-261023-193932.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=689, AB=664, AC=0, AD=0, AE=350, AF=275, AG=315, AH=368, AI=24, AJ=21, AK=1353, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 22 · salida 19 · ACT-SCSN53019

Evento: Conmemoración del día de la bandera. Fecha preparada: 2026-02-24. Folio: SC-261023-193933.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=199, AB=215, AC=0, AD=0, AE=34, AF=30, AG=45, AH=65, AI=120, AJ=120, AK=414, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 23 · salida 20 · ACT-SCVR15453

Evento: Vigilantes del agua en acción. Fecha preparada: 2026-02-25. Folio: SC-261023-193934.

Alineación original: A=objetivo 1.2., B=estrategia: 1.2.3.4, D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=92, AB=92, AC=0, AD=0, AE=1, AF=0, AG=8, AH=7, AI=83, AJ=85, AK=184, AL=vacío.

- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 24 · salida 21 · ACT-SCMK91517

Evento: Vigilantes del agua en acción. Fecha preparada: 2026-02-26. Folio: SC-261023-193935.

Alineación original: A=objetivo 1.2., B=estrategia: 1.2.3.4, D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=73, AB=47, AC=0, AD=0, AE=35, AF=12, AG=18, AH=15, AI=20, AJ=20, AK=120, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 25 · salida 22 · ACT-SCFQ76013

Evento: Vigilantes del agua en acción. Fecha preparada: 2026-02-27. Folio: SC-261023-193936.

Alineación original: A=objetivo 1.2., B=estrategia: 1.2.3.4, D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=108, AB=81, AC=vacío, AD=vacío, AE=vacío, AF=9, AG=108, AH=72, AI=vacío, AJ=vacío, AK=189, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 26 · salida 23 · ACT-SCEH13895

Evento: Vigilantes del agua en acción. Fecha preparada: 2026-02-27. Folio: SC-261023-193937.

Alineación original: A=objetivo 1.2., B=estrategia: 1.2.3.4, D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=50, AB=60, AC=0, AD=0, AE=12, AF=5, AG=13, AH=19, AI=25, AJ=36, AK=110, AL=vacío.

- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 27 · salida 24 · ACT-SCRD03850

Evento: Declaratoria de la Estudiantina de la UG como Patrimonio. Fecha preparada: 2026-02-27. Folio: SC-261023-193938.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=307, AB=217, AC=0, AD=0, AE=125, AF=87, AG=175, AH=118, AI=7, AJ=12, AK=524, AL=524.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 28 · salida 25 · ACT-SCLP78689

Evento: El Lago de los Cisnes. Fecha preparada: 2026-02-28. Folio: SC-261023-193939.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=8, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=vacío, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 29 · salida 26 · ACT-SCVT82145

Evento: El Lago de los Cisnes. Fecha preparada: 2026-02-28. Folio: SC-261023-193940.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=8, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=667, AB=584, AC=0, AD=0, AE=243, AF=234, AG=312, AH=298, AI=112, AJ=52, AK=1251, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 30 · salida 27 · ACT-SCWR79244

Evento: Ensayo de Informe de la Gobernadora. Fecha preparada: 2026-03-04. Folio: SC-261023-193941.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=20, AB=20, AC=0, AD=0, AE=0, AF=vacío, AG=20, AH=20, AI=0, AJ=0, AK=40, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 31 · salida 28 · ACT-SCLB57851

Evento: Informe de la Gobernadora. Fecha preparada: 2026-03-05. Folio: SC-261023-193942.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=5720, AB=4635, AC=120, AD=35, AE=600, AF=600, AG=4000, AH=3000, AI=1000, AJ=1000, AK=10355, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 32 · salida 29 · ACT-SCHN86597

Evento: Oceano. Fecha preparada: 2026-03-06. Folio: SC-261023-193943.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=84, AB=82, AC=0, AD=0, AE=0, AF=0, AG=10, AH=9, AI=74, AJ=73, AK=166, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 33 · salida 30 · ACT-SCVG59500

Evento: Oceano. Fecha preparada: 2026-03-06. Folio: SC-261023-193944.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=248, AB=252, AC=vacío, AD=vacío, AE=5, AF=10, AG=10, AH=10, AI=233, AJ=232, AK=500, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 34 · salida 31 · ACT-SCTU16108

Evento: Lava, Dora lava. Fecha preparada: 2026-03-09. Folio: SC-261023-193945.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=84, AB=104, AC=0, AD=0, AE=10, AF=10, AG=7, AH=7, AI=67, AJ=87, AK=188, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 35 · salida 32 · ACT-SCSJ60434

Evento: Lava, Dora lava. Fecha preparada: 2026-03-10. Folio: SC-261023-193946.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=236, AB=189, AC=12, AD=6, AE=6, AF=6, AG=7, AH=6, AI=211, AJ=171, AK=425, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 36 · salida 33 · ACT-SCYH79239

Evento: Lava, Dora lava. Fecha preparada: 2026-03-10. Folio: SC-261023-193947.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=25, AB=35, AC=1, AD=1, AE=7, AF=7, AG=1, AH=vacío, AI=16, AJ=27, AK=60, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 37 · salida 34 · ACT-SCCP20678

Evento: Lava, Dora lava. Fecha preparada: 2026-03-11. Folio: SC-261023-193948.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=273, AB=281, AC=0, AD=0, AE=9, AF=8, AG=8, AH=0, AI=256, AJ=273, AK=554, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 38 · salida 35 · ACT-SCUL80223

Evento: Lava, Dora lava. Fecha preparada: 2026-03-12. Folio: SC-261023-193949.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=279, AB=283, AC=0, AD=0, AE=0, AF=0, AG=0, AH=0, AI=279, AJ=283, AK=562, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 39 · salida 36 · ACT-SCQK07307

Evento: Lava, Dora lava. Fecha preparada: 2026-03-13. Folio: SC-261023-193950.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=177, AB=196, AC=0, AD=0, AE=8, AF=8, AG=0, AH=0, AI=169, AJ=188, AK=373, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 40 · salida 37 · ACT-SCCZ85248

Evento: Concurso del Himno de Guanajuato Nivel Primarias. Fecha preparada: 2026-03-12. Folio: SC-261023-193951.

Alineación original: A=n/a, B=vacío, D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Disciplina pendiente o valor de fuente no equivalente: None
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 41 · salida 38 · ACT-SCKH07514

Evento: Programa 6. Fecha preparada: 2026-03-13. Folio: SC-261023-193952.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=167, AB=114, AC=0, AD=0, AE=112, AF=74, AG=55, AH=38, AI=0, AJ=2, AK=281, AL=vacío.

- Año 2026 tomado del título de la hoja; fecha original sin año: viernes 13 de marzo
- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 42 · salida 39 · ACT-SCSO73776

Evento: Oceano. Fecha preparada: 2026-03-13. Folio: SC-261023-193953.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=205, AB=207, AC=0, AD=0, AE=0, AF=0, AG=10, AH=12, AI=195, AJ=195, AK=412, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 43 · salida 40 · ACT-SCGB98183

Evento: Oceano. Fecha preparada: 2026-03-13. Folio: SC-261023-193954.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=207, AB=210, AC=0, AD=0, AE=0, AF=0, AG=7, AH=10, AI=200, AJ=200, AK=417, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 44 · salida 41 · ACT-SCMG85750

Evento: Oceano. Fecha preparada: 2026-03-13. Folio: SC-261023-193955.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=105, AB=106, AC=0, AD=0, AE=0, AF=0, AG=5, AH=6, AI=100, AJ=100, AK=211, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 45 · salida 42 · ACT-SCWJ01673

Evento: Sesiones FM: Escucha musical entre mujeres. Fecha preparada: 2026-03-14. Folio: SC-261023-193956.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=310, AB=192, AC=0, AD=0, AE=15, AF=12, AG=250, AH=150, AI=45, AJ=30, AK=502, AL=vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 46 · salida 43 · ACT-SCZR88182

Evento: Lulú, terriblemente fabulosa. Fecha preparada: 2026-03-14. Folio: SC-261023-193957.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=164, AB=45, AC=0, AD=0, AE=4, AF=2, AG=119, AH=30, AI=41, AJ=13, AK=209, AL=209.

- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 47 · salida 44 · ACT-SCKH11277

Evento: Matinata BME. Fecha preparada: 2026-03-15. Folio: SC-261023-193958.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=103, AB=115, AC=0, AD=0, AE=34, AF=23, AG=54, AH=74, AI=15, AJ=18, AK=218, AL=218.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 48 · salida 45 · ACT-SCHV57703

Evento: Concurso de la cocina del noreste. Fecha preparada: 2026-03-15. Folio: SC-261023-193959.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=116, AB=89, AC=2, AD=1, AE=16, AF=14, AG=42, AH=28, AI=56, AJ=46, AK=205, AL=205.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 49 · salida 46 · ACT-SCUA16636

Evento: Lava, Dora lava. Fecha preparada: 2026-03-18. Folio: SC-261023-194000.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=82, AB=89, AC=0, AD=0, AE=4, AF=4, AG=7, AH=5, AI=71, AJ=80, AK=171, AL=171.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 50 · salida 47 · ACT-SCVQ52653

Evento: Festival Ex Nihilo. Fecha preparada: 2026-03-18. Folio: SC-261023-194001.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=61, AB=42, AC=0, AD=0, AE=14, AF=11, AG=47, AH=29, AI=0, AJ=2, AK=103, AL=103.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 51 · salida 48 · ACT-SCON08270

Evento: Ciénciame un cuento. La niña que quería pesar un rayo. Fecha preparada: 2026-03-19. Folio: SC-261023-194002.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=61, AB=36, AC=0, AD=0, AE=0, AF=0, AG=25, AH=3, AI=36, AJ=33, AK=97, AL=97.

- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 52 · salida 49 · ACT-SCOM90333

Evento: Presentación de Marimbas, Minas Guanajuato. Fecha preparada: 2026-03-19. Folio: SC-261023-194003.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3.2, D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=181, AB=192, AC=0, AD=0, AE=12, AF=4, AG=0, AH=0, AI=169, AJ=188, AK=373, AL=vacío.

- La fuente no tiene título. Se preparó una etiqueta descriptiva a partir del artista.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 53 · salida 50 · ACT-SCEK96227

Evento: Lava, Dora lava. Fecha preparada: 2026-03-20. Folio: SC-261023-194004.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=127, AB=111, AC=0, AD=0, AE=0, AF=0, AG=0, AH=0, AI=127, AJ=111, AK=238, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 54 · salida 51 · ACT-SCGV34875

Evento: Lava, Dora lava. Fecha preparada: 2026-03-20. Folio: SC-261023-194005.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=78, AB=72, AC=0, AD=0, AE=0, AF=0, AG=0, AH=0, AI=78, AJ=72, AK=150, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 55 · salida 52 · ACT-SCVQ24225

Evento: Programa 7 Feria del Libro UG. Fecha preparada: 2026-03-20. Folio: SC-261023-194006.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=192, AB=151, AC=0, AD=0, AE=107, AF=79, AG=85, AH=72, AI=0, AJ=0, AK=343, AL=vacío.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 56 · salida 53 · ACT-SCLB45337

Evento: Festival Ex Nihilo. Fecha preparada: 2026-03-21. Folio: SC-261023-194007.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=125, AB=87, AC=0, AD=0, AE=28, AF=11, AG=84, AH=63, AI=13, AJ=13, AK=212, AL=213.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 57 · salida 54 · ACT-SCTO38948

Evento: Maratón Nacional de Teatro para Niñas, Niños y Jóvenes | ¿A dónde van l@s niñ@s?. Fecha preparada: 2026-03-21. Folio: SC-261023-194008.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=72, AB=55, AC=0, AD=0, AE=2, AF=1, AG=49, AH=36, AI=21, AJ=18, AK=127, AL=127.

- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 58 · salida 55 · ACT-SCHH84967

Evento: Matinata. Fecha preparada: 2026-03-22. Folio: SC-261023-194009.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=91, AB=106, AC=2, AD=1, AE=11, AF=14, AG=50, AH=71, AI=28, AJ=20, AK=195, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Diferencia conservada: mujeres 91 + hombres 106 = 197; total territorial 195.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 59 · salida 56 · ACT-SCCE07510

Evento: Lava, Dora lava. Fecha preparada: 2026-03-23. Folio: SC-261023-194010.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=78, AB=77, AC=0, AD=0, AE=13, AF=13, AG=5, AH=4, AI=60, AJ=60, AK=155, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 60 · salida 57 · ACT-SCVJ22596

Evento: Lava, Dora lava. Fecha preparada: 2026-03-23. Folio: SC-261023-194011.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=13, AB=31, AC=0, AD=0, AE=4, AF=5, AG=2, AH=2, AI=7, AJ=24, AK=44, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 61 · salida 58 · ACT-SCHA82778

Evento: Los malos hábitos. Fecha preparada: 2026-03-23. Folio: SC-261023-194012.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=96, AB=77, AC=0, AD=0, AE=36, AF=27, AG=60, AH=50, AI=0, AJ=0, AK=173, AL=173.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 62 · salida 59 · ACT-SCWT90617

Evento: Lava, Dora lava. Fecha preparada: 2026-03-24. Folio: SC-261023-194013.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=56, AB=51, AC=0, AD=0, AE=12, AF=13, AG=3, AH=3, AI=41, AJ=35, AK=107, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 63 · salida 60 · ACT-SCGF86430

Evento: Día de las Flores. Fecha preparada: 2026-03-26. Folio: SC-261023-194014.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=260, AB=192, AC=0, AD=0, AE=93, AF=65, AG=155, AH=120, AI=12, AJ=7, AK=452, AL=vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 64 · salida 61 · ACT-SCTC84542

Evento: Congreso de Notarios. Fecha preparada: 2026-03-26. Folio: SC-261023-194015.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=40, AB=46, AC=0, AD=0, AE=15, AF=19, AG=25, AH=27, AI=0, AJ=0, AK=86, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 65 · salida 62 · ACT-SCKP62997

Evento: Viernes de Dolores. Fecha preparada: 2026-03-27. Folio: SC-261023-194016.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=442, AB=500, AC=0, AD=0, AE=125, AF=165, AG=230, AH=245, AI=87, AJ=90, AK=942, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 66 · salida 63 · ACT-SCDZ11238

Evento: 6ta Edición Festival Coroneo Sí Sabe. Fecha preparada: 2026-03-29. Folio: SC-261023-194017.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=156, AB=122, AC=1, AD=2, AE=12, AF=8, AG=67, AH=49, AI=76, AJ=63, AK=278, AL=vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 67 · salida 64 · ACT-SCIY26220

Evento: Día de la Primavera. Fecha preparada: 2026-03-29. Folio: SC-261023-194018.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=48, AB=52, AC=1, AD=2, AE=10, AF=10, AG=26, AH=30, AI=11, AJ=10, AK=100, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 68 · salida 65 · ACT-SCJQ99865

Evento: Tenebrae. Fecha preparada: 2026-04-10. Folio: SC-261023-194019.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=112, AB=77, AC=0, AD=0, AE=30, AF=18, AG=76, AH=57, AI=6, AJ=2, AK=189, AL=vacío.

- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 69 · salida 66 · ACT-SCKA00659

Evento: NEKO el gato viajero. Fecha preparada: 2026-04-11. Folio: SC-261023-194020.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=445, AB=355, AC=0, AD=2, AE=102, AF=89, AG=151, AH=136, AI=192, AJ=128, AK=800, AL=800.

- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 70 · salida 67 · ACT-SCFR82984

Evento: Forjado al viento. Fecha preparada: 2026-04-12. Folio: SC-261023-194021.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=64, AB=50, AC=0, AD=0, AE=9, AF=5, AG=37, AH=29, AI=18, AJ=16, AK=114, AL=114.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 71 · salida 68 · ACT-SCCF29750

Evento: Programa no. 8. Fecha preparada: 2026-04-17. Folio: SC-261023-194022.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=230, AB=197, AC=0, AD=0, AE=84, AF=63, AG=146, AH=132, AI=0, AJ=2, AK=427, AL=427.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 72 · salida 69 · ACT-SCAH54529

Evento: Caballos JORNADAS DID 2026. Fecha preparada: 2026-04-18. Folio: SC-261023-194023.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=27, AB=21, AC=0, AD=0, AE=7, AF=3, AG=18, AH=15, AI=2, AJ=3, AK=48, AL=48.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 73 · salida 70 · ACT-SCVB73340

Evento: Juguetes de cartón JORNADAS DID 2026. Fecha preparada: 2026-04-18. Folio: SC-261023-194024.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=131, AB=99, AC=0, AD=0, AE=35, AF=24, AG=75, AH=62, AI=21, AJ=13, AK=230, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 74 · salida 71 · ACT-SCFN49196

Evento: Muestra Estatal de Academias de Ballet Clásico. Fecha preparada: 2026-04-18. Folio: SC-261023-194025.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=297, AB=206, AC=0, AD=0, AE=34, AF=32, AG=180, AH=100, AI=83, AJ=74, AK=503, AL=vacío.

- Año 2026 tomado del título de la hoja; fecha original sin año: sábado 18 de abril
- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 75 · salida 72 · ACT-SCUP85592

Evento: Homenaje al Danzante Natividad Reina. Fecha preparada: 2026-04-19. Folio: SC-261023-194026.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=165, AB=105, AC=5, AD=3, AE=70, AF=40, AG=45, AH=32, AI=45, AJ=30, AK=270, AL=vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 76 · salida 73 · ACT-SCUU38408

Evento: Presentación de Gallo. Fecha preparada: 2026-04-19. Folio: SC-261023-194027.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=63, AB=77, AC=1, AD=2, AE=41, AF=46, AG=16, AH=21, AI=5, AJ=8, AK=140, AL=vacío.

- La fuente no tiene título. Se preparó una etiqueta descriptiva a partir del artista.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 77 · salida 74 · ACT-SCOA08591

Evento: Oceano. Fecha preparada: 2026-04-20. Folio: SC-261023-194028.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=198, AB=195, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=58, AH=58, AI=140, AJ=137, AK=393, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 78 · salida 75 · ACT-SCRK96039

Evento: Oceano. Fecha preparada: 2026-04-20. Folio: SC-261023-194029.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=50, AB=50, AC=vacío, AD=vacío, AE=2, AF=3, AG=10, AH=10, AI=38, AJ=37, AK=100, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 79 · salida 76 · ACT-SCKU10186

Evento: El abrazo de mi luna JORNADAS DID 2026. Fecha preparada: 2026-04-22. Folio: SC-261023-194030.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 80 · salida 77 · ACT-SCKE77129

Evento: Bodas de Sangre JORNADAS DID 2026. Fecha preparada: 2026-04-22. Folio: SC-261023-194031.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=199, AB=128, AC=0, AD=1, AE=130, AF=75, AG=68, AH=37, AI=1, AJ=15, AK=327, AL=327.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 81 · salida 78 · ACT-SCDA74291

Evento: Sangre Negra JORNADAS DID 2026. Fecha preparada: 2026-04-23. Folio: SC-261023-194032.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=vacío, AB=vacío, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Sin cifras de población; no se creó una fila ficticia.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 82 · salida 79 · ACT-SCMB30060

Evento: Oceano. Fecha preparada: 2026-04-24. Folio: SC-261023-194033.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=vacío, AB=vacío, AC=vacío, AD=vacío, AE=vacío, AF=3, AG=14, AH=13, AI=57, AJ=68, AK=155, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 83 · salida 80 · ACT-SCWK17074

Evento: Cihuameh JORNADAS DID 2026. Fecha preparada: 2026-04-24. Folio: SC-261023-194034.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=21, AB=14, AC=0, AD=0, AE=4, AF=1, AG=15, AH=12, AI=2, AJ=1, AK=35, AL=35.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 84 · salida 81 · ACT-SCUK37973

Evento: Programa no. 9. Fecha preparada: 2026-04-24. Folio: SC-261023-194035.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=vacío, AB=vacío, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Sin cifras de población; no se creó una fila ficticia.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 85 · salida 82 · ACT-SCQJ21225

Evento: Sangre Negra. Fecha preparada: 2026-04-25. Folio: SC-261023-194036.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=141, AB=172, AC=vacío, AD=vacío, AE=55, AF=92, AG=76, AH=68, AI=10, AJ=12, AK=313, AL=vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 86 · salida 83 · ACT-SCQK60449

Evento: Latidos del corazón. Añoranzas de la infancia. Fecha preparada: 2026-04-25. Folio: SC-261023-194037.

Alineación original: A=objetivo 4.4., B=estrategia 4.4.3., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=475, AB=475, AC=15, AD=15, AE=140, AF=130, AG=150, AH=170, AI=170, AJ=160, AK=950, AL=vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 87 · salida 84 · ACT-SCKK97813

Evento: Shagadaskada. Fecha preparada: 2026-04-25. Folio: SC-261023-194038.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=81, AB=55, AC=0, AD=0, AE=13, AF=9, AG=48, AH=31, AI=20, AJ=15, AK=136, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 88 · salida 85 · ACT-SCML88901

Evento: Gala Anual Ra'i Nui JORNADAS DID 2026. Fecha preparada: 2026-04-25. Folio: SC-261023-194039.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=104, AB=62, AC=3, AD=0, AE=27, AF=17, AG=55, AH=32, AI=19, AJ=13, AK=166, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 89 · salida 86 · ACT-SCLT29408

Evento: Latidos del corazón. Añoranzas de la infancia. Fecha preparada: 2026-04-26. Folio: SC-261023-194040.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=266, AB=221, AC=1, AD=1, AE=52, AF=45, AG=124, AH=98, AI=89, AJ=77, AK=487, AL=487.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 90 · salida 87 · ACT-SCZP23964

Evento: Los Músicos de la Capital. Fecha preparada: 2026-04-26. Folio: SC-261023-194041.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=39, AB=26, AC=0, AD=0, AE=4, AF=4, AG=19, AH=9, AI=16, AJ=13, AK=65, AL=65.

- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 91 · salida 88 · ACT-SCGG13705

Evento: Jornadas por el Día Internacioal de la Danza 2026. Fecha preparada: 2026-04-29. Folio: SC-261023-194042.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3.2, D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=201, AB=175, AC=1, AD=2, AE=139, AF=121, AG=52, AH=37, AI=9, AJ=15, AK=376, AL=376.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 92 · salida 89 · ACT-SCSW59749

Evento: 194 años de la fundación de Romita. Fecha preparada: 2026-04-29. Folio: SC-261023-194043.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=450, AB=450, AC=vacío, AD=vacío, AE=200, AF=200, AG=150, AH=150, AI=100, AJ=100, AK=900, AL=900.

- Subdisciplina musical pendiente.
- Sede pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 93 · salida 90 · ACT-SCKM20130

Evento: Programa no. 10 Celebración del Día del Ñiño y la Niña. Fecha preparada: 2026-04-30. Folio: SC-261023-194044.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=186, AB=108, AC=0, AD=0, AE=14, AF=7, AG=32, AH=16, AI=140, AJ=85, AK=294, AL=294.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina multidisciplinaria pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 94 · salida 91 · ACT-SCIQ41129

Evento: Tierra, lengua y corazón. Fecha preparada: 2026-04-30. Folio: SC-261023-194045.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=55, AB=65, AC=vacío, AD=vacío, AE=5, AF=5, AG=10, AH=10, AI=40, AJ=50, AK=120, AL=120.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 95 · salida 92 · ACT-SCBW41326

Evento: Programa no. 10 Celebración del Día del Ñiño y la Niña. Fecha preparada: 2026-04-30. Folio: SC-261023-194046.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=125, AB=97, AC=0, AD=1, AE=15, AF=10, AG=74, AH=58, AI=36, AJ=28, AK=222, AL=222.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina multidisciplinaria pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 96 · salida 93 · ACT-SCAJ77909

Evento: Cúcara Títere Fue / Hechicera que cambia rostros ESCENAS AL VUELO. Fecha preparada: 2026-05-02. Folio: SC-261023-194047.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=38, AB=42, AC=0, AD=0, AE=4, AF=5, AG=18, AH=17, AI=16, AJ=20, AK=80, AL=80.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 97 · salida 94 · ACT-SCLZ40495

Evento: Concierto de Jazz. Fecha preparada: 2026-05-02. Folio: SC-261023-194048.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=339, AB=307, AC=0, AD=0, AE=76, AF=62, AG=215, AH=189, AI=48, AJ=56, AK=646, AL=vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 98 · salida 95 · ACT-SCMR63747

Evento: La Bruja. Fecha preparada: 2026-05-03. Folio: SC-261023-194049.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=284, AB=244, AC=0, AD=0, AE=92, AF=74, AG=156, AH=142, AI=36, AJ=28, AK=528, AL=528.

- Año 2026 tomado del título de la hoja; fecha original sin año: domingo 3 de mayo
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 99 · salida 96 · ACT-SCDF97905

Evento: Lotería. Fecha preparada: 2026-05-07. Folio: SC-261023-194050.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=132, AB=101, AC=1, AD=0, AE=43, AF=39, AG=81, AH=58, AI=7, AJ=4, AK=233, AL=233.

- Año 2026 tomado del título de la hoja; fecha original sin año: jueves 7 de mayo
- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 100 · salida 97 · ACT-SCVR40231

Evento: Programa no. 11. Fecha preparada: 2026-05-08. Folio: SC-261023-194051.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=151, AB=125, AC=1, AD=0, AE=43, AF=31, AG=103, AH=92, AI=4, AJ=2, AK=276, AL=276.

- Año 2026 tomado del título de la hoja; fecha original sin año: viernes 8 de mayo
- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 101 · salida 98 · ACT-SCIE65752

Evento: Sangre Negra. Fecha preparada: 2026-05-09. Folio: SC-261023-194052.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=230, AB=230, AC=5, AD=5, AE=75, AF=75, AG=100, AH=100, AI=50, AJ=50, AK=460, AL=460.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 102 · salida 99 · ACT-SCLH38481

Evento: Los hombres de la tierra. Fecha preparada: 2026-05-09. Folio: SC-261023-194053.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=177, AB=130, AC=0, AD=0, AE=49, AF=36, AG=105, AH=78, AI=23, AJ=16, AK=307, AL=307.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 103 · salida 100 · ACT-SCGO27476

Evento: Tierra, lengua y corazón ESCENAS AL VUELO. Fecha preparada: 2026-05-09. Folio: SC-261023-194054.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=30, AB=28, AC=0, AD=0, AE=6, AF=5, AG=12, AH=12, AI=12, AJ=11, AK=58, AL=58.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 104 · salida 101 · ACT-SCEU45859

Evento: Réquiem SP. Fecha preparada: 2026-05-12. Folio: SC-261023-194055.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=209, AB=175, AC=0, AD=0, AE=54, AF=42, AG=153, AH=129, AI=2, AJ=4, AK=384, AL=384.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 105 · salida 102 · ACT-SCEV15122

Evento: Oceano. Fecha preparada: 2026-05-13. Folio: SC-261023-194056.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=712, AB=677, AC=8, AD=7, AE=15, AF=15, AG=320, AH=284, AI=369, AJ=371, AK=1389, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 106 · salida 103 · ACT-SCOZ35109

Evento: Oceano. Fecha preparada: 2026-05-13. Folio: SC-261023-194057.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=254, AB=240, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=50, AH=55, AI=204, AJ=185, AK=494, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 107 · salida 104 · ACT-SCCZ35714

Evento: Oceano. Fecha preparada: 2026-05-13. Folio: SC-261023-194058.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=137, AB=93, AC=vacío, AD=vacío, AE=17, AF=18, AG=10, AH=5, AI=110, AJ=70, AK=230, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 108 · salida 105 · ACT-SCMJ06845

Evento: Fiestas del llanito. Fecha preparada: 2026-05-15. Folio: SC-261023-194059.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=130, AB=70, AC=0, AD=0, AE=65, AF=40, AG=45, AH=15, AI=20, AJ=15, AK=200, AL=vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 109 · salida 106 · ACT-SCFQ10661

Evento: Evento Tequila Corralejo. Fecha preparada: 2026-05-15. Folio: SC-261023-194100.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina multidisciplinaria pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 110 · salida 107 · ACT-SCWT40315

Evento: Lava Dora Lava ESCENAS AL VUELO. Fecha preparada: 2026-05-16. Folio: SC-261023-194101.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=29, AB=30, AC=0, AD=0, AE=8, AF=8, AG=10, AH=8, AI=11, AJ=14, AK=59, AL=59.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 111 · salida 108 · ACT-SCPT32395

Evento: Josefina la gallina puso un huevo en la cocina. Fecha preparada: 2026-05-17. Folio: SC-261023-194102.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=44, AB=31, AC=0, AD=0, AE=7, AF=3, AG=25, AH=19, AI=12, AJ=9, AK=75, AL=75.

- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 112 · salida 109 · ACT-SCIE40206

Evento: Programa no. 12. Fecha preparada: 2026-05-22. Folio: SC-261023-194103.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 113 · salida 110 · ACT-SCNN83063

Evento: Bajo esta piedra hundirás tu iglesia. Fecha preparada: 2026-05-23. Folio: SC-261023-194104.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=167, AB=145, AC=1, AD=1, AE=31, AF=23, AG=128, AH=109, AI=7, AJ=12, AK=312, AL=312.

- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 114 · salida 111 · ACT-SCAC53117

Evento: Axolotl: gran mostruo del agua ESCENAS AL VUELO. Fecha preparada: 2026-05-23. Folio: SC-261023-194105.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=186, AB=116, AC=1, AD=1, AE=10, AF=9, AG=25, AH=26, AI=150, AJ=80, AK=302, AL=302.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 115 · salida 112 · ACT-SCTA77546

Evento: Ciudad Nube. Fecha preparada: 2026-05-24. Folio: SC-261023-194106.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=110, AB=84, AC=0, AD=1, AE=17, AF=13, AG=58, AH=43, AI=35, AJ=27, AK=194, AL=vacío.

- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 116 · salida 113 · ACT-SCCI80636

Evento: Oceano. Fecha preparada: 2026-05-24. Folio: SC-261023-194107.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=163, AB=133, AC=vacío, AD=vacío, AE=10, AF=16, AG=10, AH=8, AI=143, AJ=109, AK=296, AL=vacío.

- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 117 · salida 114 · ACT-SCPT78196

Evento: Oceano. Fecha preparada: 2026-05-25. Folio: SC-261023-194108.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=137, AB=140, AC=vacío, AD=vacío, AE=29, AF=30, AG=30, AH=29, AI=78, AJ=81, AK=277, AL=vacío.

- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 118 · salida 115 · ACT-SCWI88961

Evento: Oceano. Fecha preparada: 2026-05-25. Folio: SC-261023-194109.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=160, AB=135, AC=vacío, AD=vacío, AE=28, AF=30, AG=27, AH=25, AI=105, AJ=80, AK=295, AL=vacío.

- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 119 · salida 116 · ACT-SCCB54879

Evento: Oceano. Fecha preparada: 2026-05-25. Folio: SC-261023-194110.

Alineación original: A=objetivo 2.4, B=estrategia: 2.4.3.1., D=4, E=2.4.3.1, F=inclusión, G=16.1.

Conteos originales: AA=206, AB=221, AC=vacío, AD=vacío, AE=16, AF=15, AG=vacío, AH=vacío, AI=190, AJ=206, AK=427, AL=vacío.

- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 120 · salida 117 · ACT-SCQG21724

Evento: ChimalmAnimales. Fecha preparada: 2026-05-27. Folio: SC-261023-194111.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=64, AB=48, AC=0, AD=0, AE=6, AF=4, AG=35, AH=28, AI=23, AJ=16, AK=112, AL=112.

- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 121 · salida 118 · ACT-SCNQ91603

Evento: Programa no. 13. Fecha preparada: 2026-05-29. Folio: SC-261023-194112.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=155, AB=123, AC=2, AD=2, AE=28, AF=17, AG=121, AH=103, AI=4, AJ=1, AK=278, AL=278.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 122 · salida 119 · ACT-SCKI18457

Evento: 14.º Encuentro de Cocina Tradicional. Fecha preparada: 2026-05-30. Folio: SC-261023-194113.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 123 · salida 120 · ACT-SCGD68045

Evento: 14.º Encuentro de Cocina Tradicional. Fecha preparada: 2026-05-30. Folio: SC-261023-194114.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 124 · salida 121 · ACT-SCBT97489

Evento: Presentación de Ballet México de Colores. Fecha preparada: 2026-05-30. Folio: SC-261023-194115.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=80, AB=94, AC=vacío, AD=vacío, AE=10, AF=15, AG=60, AH=70, AI=10, AJ=9, AK=174, AL=vacío.

- La fuente no tiene título. Se preparó una etiqueta descriptiva a partir del artista.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Sede pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 125 · salida 122 · ACT-SCGR30558

Evento: El Ogrito ESCENAS AL VUELO. Fecha preparada: 2026-05-30. Folio: SC-261023-194116.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=84, AB=78, AC=0, AD=0, AE=5, AF=6, AG=24, AH=27, AI=55, AJ=45, AK=162, AL=162.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 126 · salida 123 · ACT-SCRI75069

Evento: Programa no. 14. Fecha preparada: 2026-06-05. Folio: SC-261023-194117.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 127 · salida 124 · ACT-SCYB87329

Evento: Nxuni ESCENAS AL VUELO. Fecha preparada: 2026-06-06. Folio: SC-261023-194118.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=10, AB=9, AC=0, AD=0, AE=1, AF=1, AG=8, AH=5, AI=1, AJ=3, AK=19, AL=19.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 128 · salida 125 · ACT-SCXZ34032

Evento: Sexto Festival Nacional de Danza "Guanajuato Tradiciones de mi Tierra". Fecha preparada: 2026-06-06. Folio: SC-261023-194119.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=54, AB=58, AC=vacío, AD=vacío, AE=18, AF=20, AG=20, AH=20, AI=16, AJ=18, AK=112, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 129 · salida 126 · ACT-SCYU01348

Evento: Sexto Festival Nacional de Danza "Guanajuato Tradiciones de mi Tierra". Fecha preparada: 2026-06-06. Folio: SC-261023-194120.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=67, AB=62, AC=1, AD=2, AE=20, AF=20, AG=34, AH=30, AI=12, AJ=10, AK=129, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 130 · salida 127 · ACT-SCCH88217

Evento: Sexto Festival Nacional de Danza "Guanajuato Tradiciones de mi Tierra". Fecha preparada: 2026-06-06. Folio: SC-261023-194121.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=51, AB=69, AC=1, AD=1, AE=13, AF=30, AG=25, AH=25, AI=12, AJ=13, AK=120, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 131 · salida 128 · ACT-SCPB64760

Evento: Teatro del Pueblo. Fecha preparada: 2026-06-11. Folio: SC-261023-194122.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=214, AB=134, AC=0, AD=2, AE=86, AF=51, AG=67, AH=42, AI=61, AJ=39, AK=348, AL=vacío.

- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 132 · salida 129 · ACT-SCIB68332

Evento: Programa no. 15. Fecha preparada: 2026-06-12. Folio: SC-261023-194123.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=159, AB=139, AC=4, AD=2, AE=32, AF=27, AG=122, AH=108, AI=1, AJ=2, AK=298, AL=298.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 133 · salida 130 · ACT-SCOZ49702

Evento: Lágrimas de agua dulce ESCENAS AL VUELO. Fecha preparada: 2026-06-13. Folio: SC-261023-194124.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=98, AB=92, AC=7, AD=8, AE=15, AF=19, AG=36, AH=30, AI=40, AJ=35, AK=190, AL=190.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 134 · salida 131 · ACT-SCNI90044

Evento: El mundo de la imaginación de Francisco Gabilondo Soler. Fecha preparada: 2026-06-14. Folio: SC-261023-194125.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=242, AB=204, AC=0, AD=0, AE=68, AF=46, AG=137, AH=129, AI=37, AJ=29, AK=446, AL=446.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 135 · salida 132 · ACT-SCNF71559

Evento: Tianguis cultural / Melquiades. Fecha preparada: 2026-06-14. Folio: SC-261023-194126.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=117, AB=117, AC=2, AD=2, AE=50, AF=50, AG=50, AH=50, AI=15, AJ=15, AK=234, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 136 · salida 133 · ACT-SCKG45475

Evento: Tianguis cultural / Melquiades. Fecha preparada: 2026-06-14. Folio: SC-261023-194127.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=47, AB=36, AC=2, AD=1, AE=30, AF=20, AG=10, AH=10, AI=5, AJ=5, AK=83, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 137 · salida 134 · ACT-SCQW91759

Evento: Tianguis cultural / Melquiades. Fecha preparada: 2026-06-14. Folio: SC-261023-194128.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=30, AB=25, AC=vacío, AD=vacío, AE=15, AF=10, AG=10, AH=10, AI=5, AJ=5, AK=55, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 138 · salida 135 · ACT-SCTZ57563

Evento: Tianguis cultural / Melquiades. Fecha preparada: 2026-06-14. Folio: SC-261023-194129.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=57, AB=50, AC=vacío, AD=vacío, AE=30, AF=20, AG=17, AH=20, AI=10, AJ=10, AK=107, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 139 · salida 136 · ACT-SCPD60196

Evento: Tianguis cultural / Melquiades. Fecha preparada: 2026-06-14. Folio: SC-261023-194130.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=110, AB=110, AC=vacío, AD=vacío, AE=50, AF=50, AG=50, AH=50, AI=10, AJ=10, AK=220, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 140 · salida 137 · ACT-SCZT84684

Evento: Tianguis cultural / Melquiades. Fecha preparada: 2026-06-14. Folio: SC-261023-194131.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=110, AB=110, AC=vacío, AD=vacío, AE=50, AF=50, AG=50, AH=50, AI=10, AJ=10, AK=220, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 141 · salida 138 · ACT-SCPJ94419

Evento: ChimalmAnimales. Fecha preparada: 2026-06-16. Folio: SC-261023-194132.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=35, AB=37, AC=0, AD=0, AE=6, AF=5, AG=15, AH=11, AI=14, AJ=21, AK=72, AL=72.

- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 142 · salida 139 · ACT-SCYJ30745

Evento: BME / Cereso, Puentecillas. Fecha preparada: 2026-06-18. Folio: SC-261023-194133.

Alineación original: A=objetivo 1.1, B=estrategia: 1.1.6.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=vacío, AB=524, AC=vacío, AD=vacío, AE=524, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 143 · salida 140 · ACT-SCFX13946

Evento: Programa no. 16. Fecha preparada: 2026-06-19. Folio: SC-261023-194134.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=163, AB=145, AC=0, AD=0, AE=57, AF=49, AG=102, AH=93, AI=4, AJ=3, AK=308, AL=vacío.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 144 · salida 141 · ACT-SCPU33710

Evento: Festejo Día del Padre. Fecha preparada: 2026-06-19. Folio: SC-261023-194135.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Sede pendiente.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 145 · salida 142 · ACT-SCNJ72509

Evento: NOVA. Fecha preparada: 2026-06-19. Folio: SC-261023-194136.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=29, AB=21, AC=0, AD=0, AE=6, AF=4, AG=23, AH=17, AI=0, AJ=0, AK=50, AL=50.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 146 · salida 143 · ACT-SCJP10512

Evento: El Barco ESCENAS AL VUELO. Fecha preparada: 2026-06-20. Folio: SC-261023-194137.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=85, AB=78, AC=0, AD=0, AE=6, AF=8, AG=16, AH=13, AI=63, AJ=57, AK=163, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Sede pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 147 · salida 144 · ACT-SCUE49987

Evento: Contratiempo. Fecha preparada: 2026-06-20. Folio: SC-261023-194138.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=38, AB=29, AC=0, AD=0, AE=5, AF=3, AG=26, AH=22, AI=7, AJ=4, AK=67, AL=vacío.

- Subdisciplina multidisciplinaria pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 148 · salida 145 · ACT-SCLT37305

Evento: El mundo de la imaginación de Francisco Gabilondo Soler. Fecha preparada: 2026-06-20. Folio: SC-261023-194139.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=104, AB=74, AC=0, AD=0, AE=32, AF=vacío, AG=25, AH=25, AI=22, AJ=22, AK=340, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Diferencia conservada: mujeres 104 + hombres 74 = 178; total territorial 340.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 149 · salida 146 · ACT-SCSL38628

Evento: De Versalles a Venecia: arias de bravura, venganza y amor. Fecha preparada: 2026-06-20. Folio: SC-261023-194140.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=104, AB=138, AC=0, AD=0, AE=28, AF=41, AG=73, AH=90, AI=3, AJ=7, AK=242, AL=242.

- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 150 · salida 147 · ACT-SCKC61180

Evento: Encuentro de Orquestas Cedro UP y Vientos Musicales. Fecha preparada: 2026-06-21. Folio: SC-261023-194141.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=293, AB=254, AC=0, AD=0, AE=76, AF=60, AG=204, AH=177, AI=13, AJ=17, AK=547, AL=vacío.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 151 · salida 148 · ACT-SCNN12179

Evento: Presentacion en Apaseo el Grande. Fecha preparada: 2025-06-22. Folio: SC-261023-194142.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=35, AB=40, AC=0, AD=0, AE=25, AF=10, AG=10, AH=8, AI=10, AJ=5, AK=138, AL=vacío.

- Se conserva el año explícito de la fuente: 2025-06-22; confirmar antes de usar en informes de 2026.
- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Diferencia conservada: mujeres 35 + hombres 40 = 75; total territorial 138.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 152 · salida 149 · ACT-SCQH30904

Evento: Nostalgia Latinoamericana. Fecha preparada: 2026-06-25. Folio: SC-261023-194143.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=85, AB=70, AC=0, AD=0, AE=19, AF=13, AG=64, AH=56, AI=2, AJ=1, AK=155, AL=155.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 153 · salida 150 · ACT-SCEJ77507

Evento: Metamorfosis del Alma. Fecha preparada: 2026-06-25. Folio: SC-261023-194144.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=16, AB=14, AC=0, AD=0, AE=0, AF=0, AG=11, AH=12, AI=5, AJ=2, AK=30, AL=30.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Disciplina pendiente o valor de fuente no equivalente: Conferencia
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 154 · salida 151 · ACT-SCZK80371

Evento: Acto de fin de cursos SABES. Fecha preparada: 2026-06-26. Folio: SC-261023-194145.

Alineación original: A=n/a, B=vacío, D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Año 2026 tomado del título de la hoja; fecha original sin año: viernes 26 de junio
- Municipio completado por el nombre explícito de la sede en Purísima.
- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Disciplina pendiente o valor de fuente no equivalente: None
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 155 · salida 152 · ACT-SCJO92541

Evento: Grandiosa. Fecha preparada: 2026-06-26. Folio: SC-261023-194146.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=131, AB=113, AC=0, AD=0, AE=9, AF=15, AG=99, AH=86, AI=23, AJ=12, AK=244, AL=vacío.

- Año 2026 tomado del título de la hoja; fecha original sin año: viernes 26 de junio
- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 156 · salida 153 · ACT-SCEV10262

Evento: TAUSV Las calcetas de mi padre. Fecha preparada: 2026-06-26. Folio: SC-261023-194147.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=115, AB=90, AC=0, AD=0, AE=20, AF=17, AG=85, AH=65, AI=10, AJ=8, AK=205, AL=205.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 157 · salida 154 · ACT-SCYB83758

Evento: TAUSV Metalero. Fecha preparada: 2026-06-27. Folio: SC-261023-194148.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=20, AB=12, AC=0, AD=0, AE=7, AF=3, AG=11, AH=6, AI=2, AJ=3, AK=32, AL=32.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 158 · salida 155 · ACT-SCYT50530

Evento: Alas de Mariposa ESCENAS AL VUELO. Fecha preparada: 2026-06-27. Folio: SC-261023-194149.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Sede pendiente.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 159 · salida 156 · ACT-SCJO26261

Evento: El mundo de gabilondo Soler. Fecha preparada: 2026-06-28. Folio: SC-261023-194150.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=310, AB=213, AC=0, AD=3, AE=32, AF=27, AG=184, AH=121, AI=94, AJ=62, AK=523, AL=523.

- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 160 · salida 157 · ACT-SCLM55920

Evento: TAUSV Riñón, una comedia enferma. Fecha preparada: 2026-06-28. Folio: SC-261023-194151.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=68, AB=44, AC=0, AD=1, AE=22, AF=13, AG=33, AH=21, AI=13, AJ=9, AK=112, AL=112.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 161 · salida 158 · ACT-SCXT86726

Evento: TAUSV Malandrito. Fecha preparada: 2026-06-29. Folio: SC-261023-194152.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=63, AB=38, AC=0, AD=0, AE=14, AF=7, AG=46, AH=30, AI=3, AJ=1, AK=101, AL=101.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 162 · salida 159 · ACT-SCQB67230

Evento: TAUSV Yo pensé que era especial. Fecha preparada: 2026-06-30. Folio: SC-261023-194153.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=43, AB=18, AC=0, AD=0, AE=5, AF=7, AG=36, AH=10, AI=2, AJ=1, AK=61, AL=61.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 163 · salida 160 · ACT-SCLZ18716

Evento: Sangre Negra. Fecha preparada: 2026-06-30. Folio: SC-261023-194154.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=111, AB=93, AC=0, AD=0, AE=5, AF=6, AG=100, AH=80, AI=6, AJ=7, AK=204, AL=vacío.

- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 164 · salida 161 · ACT-SCEZ70102

Evento: TAUSV Vértebra. Fecha preparada: 2026-07-01. Folio: SC-261023-194155.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=51, AB=43, AC=0, AD=0, AE=18, AF=12, AG=33, AH=31, AI=0, AJ=0, AK=94, AL=94.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 165 · salida 162 · ACT-SCPH59828

Evento: TAUSV Me cargo en mis muertos. Fecha preparada: 2026-07-02. Folio: SC-261023-194156.

Alineación original: A=objetivo 2.4., B=estrategia 2.4.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=52, AB=42, AC=0, AD=0, AE=8, AF=2, AG=41, AH=38, AI=3, AJ=2, AK=94, AL=94.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 166 · salida 163 · ACT-SCNQ11503

Evento: Acto de Clausura Académica Instituto M Goretti. Fecha preparada: 2026-07-02. Folio: SC-261023-194157.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Disciplina pendiente o valor de fuente no equivalente: None
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 167 · salida 164 · ACT-SCYJ46218

Evento: Acto académico SABES Centro. Fecha preparada: 2026-07-03. Folio: SC-261023-194158.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Disciplina pendiente o valor de fuente no equivalente: None
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 168 · salida 165 · ACT-SCRU46252

Evento: Identidad Mexicana. Fecha preparada: 2026-07-03. Folio: SC-261023-194159.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 169 · salida 166 · ACT-SCSB72450

Evento: Concierto Vientos Musicales. Fecha preparada: 2026-07-04. Folio: SC-261023-194200.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=156, AB=105, AC=2, AD=0, AE=52, AF=33, AG=78, AH=52, AI=24, AJ=20, AK=261, AL=261.

- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 170 · salida 167 · ACT-SCFE51557

Evento: Un viaje al interior. De Pluma Blanca ESCENAS AL VUELO. Fecha preparada: 2026-07-04. Folio: SC-261023-194201.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 171 · salida 168 · ACT-SCMJ96878

Evento: El lago de los cisnes. Fecha preparada: 2026-07-04. Folio: SC-261023-194202.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 172 · salida 169 · ACT-SCBF27324

Evento: Fiestas patronales. Fecha preparada: 2026-07-05. Folio: SC-261023-194203.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=362, AB=406, AC=11, AD=7, AE=101, AF=209, AG=152, AH=134, AI=98, AJ=56, AK=768, AL=vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 173 · salida 170 · ACT-SCEY50034

Evento: Fiesta comunidad. Fecha preparada: 2026-07-05. Folio: SC-261023-194204.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=171, AB=129, AC=1, AD=1, AE=70, AF=55, AG=75, AH=53, AI=25, AJ=20, AK=300, AL=vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 174 · salida 171 · ACT-SCPV80140

Evento: Acto Académico Primaria Moisés Saenz. Fecha preparada: 2026-07-10. Folio: SC-261023-194205.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Disciplina pendiente o valor de fuente no equivalente: None
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 175 · salida 172 · ACT-SCLA33272

Evento: Un viaje con ritmo ESCENAS AL VUELO. Fecha preparada: 2026-07-11. Folio: SC-261023-194206.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 176 · salida 173 · ACT-SCKU24624

Evento: Cantata del Café FESTIVAL BACH. Fecha preparada: 2026-07-11. Folio: SC-261023-194207.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=57, AB=33, AC=0, AD=0, AE=24, AF=16, AG=32, AH=17, AI=1, AJ=0, AK=90, AL=90.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 177 · salida 174 · ACT-SCZH50082

Evento: Michael Jackson. King of Pop. Fecha preparada: 2026-07-11. Folio: SC-261023-194208.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 178 · salida 175 · ACT-SCNU47891

Evento: Cantatas Clausura FESTIVAL BACH. Fecha preparada: 2026-07-12. Folio: SC-261023-194209.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=197, AB=164, AC=1, AD=0, AE=111, AF=63, AG=81, AH=94, AI=4, AJ=7, AK=164, AL=164.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Diferencia conservada: mujeres 197 + hombres 164 = 361; total territorial 164.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 179 · salida 176 · ACT-SCKP82327

Evento: José El Soñador. Fecha preparada: 2026-07-12. Folio: SC-261023-194210.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 180 · salida 177 · ACT-SCNW26121

Evento: Apertura de la Presa de la Olla. Fecha preparada: 2026-07-13. Folio: SC-261023-194211.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=1100, AB=890, AC=0, AD=0, AE=200, AF=200, AG=250, AH=300, AI=180, AJ=150, AK=0, AL=3270.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Diferencia conservada: mujeres 1100 + hombres 890 = 1990; total territorial 0.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 181 · salida 178 · ACT-SCXJ25616

Evento: Concierto de Verano 2026. Fecha preparada: 2026-07-15. Folio: SC-261023-194212.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.2.2., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=304, AB=203, AC=2, AD=0, AE=43, AF=33, AG=157, AH=174, AI=102, AJ=46, AK=507, AL=507.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 182 · salida 179 · ACT-SCSO32310

Evento: El Diario de Un Loco. Fecha preparada: 2026-07-16. Folio: SC-261023-194213.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=vacío, AB=vacío, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Sin cifras de población; no se creó una fila ficticia.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 183 · salida 180 · ACT-SCHN44865

Evento: Fiestas patronales. Fecha preparada: 2026-07-16. Folio: SC-261023-194214.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=134, AB=99, AC=6, AD=3, AE=22, AF=15, AG=59, AH=43, AI=47, AJ=38, AK=233, AL=vacío.

- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 184 · salida 181 · ACT-SCMI36088

Evento: Espejos de agua. Fecha preparada: 2026-07-17. Folio: SC-261023-194215.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=122, AB=101, AC=2, AD=1, AE=35, AF=26, AG=76, AH=68, AI=9, AJ=6, AK=223, AL=223.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 185 · salida 182 · ACT-SCLC02852

Evento: Hechicera que cambia los rostros ESCENAS A VUELO. Fecha preparada: 2026-07-18. Folio: SC-261023-194216.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=vacío, AB=vacío, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Sin cifras de población; no se creó una fila ficticia.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 186 · salida 183 · ACT-SCSW82440

Evento: Fistas. Fecha preparada: 2026-07-18. Folio: SC-261023-194217.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=105, AB=95, AC=1, AD=1, AE=50, AF=54, AG=43, AH=30, AI=11, AJ=10, AK=200, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 187 · salida 184 · ACT-SCSF46060

Evento: Aniversario del Teatro de la Ciudad de Purísima del Rincón. Fecha preparada: 2026-07-18. Folio: SC-261023-194218.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=110, AB=83, AC=0, AD=0, AE=12, AF=9, AG=67, AH=52, AI=31, AJ=22, AK=193, AL=193.

- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 188 · salida 185 · ACT-SCPF64184

Evento: Festival del Mango. Fecha preparada: 2026-07-19. Folio: SC-261023-194219.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=280, AB=190, AC=0, AD=0, AE=50, AF=60, AG=40, AH=30, AI=30, AJ=20, AK=vacío, AL=700.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 189 · salida 186 · ACT-SCAO27471

Evento: 2° Festival Escenautas Mujeres en el puño: Hilando la ternura, conquistando la libertad. Fecha preparada: 2026-07-20. Folio: SC-261023-194220.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=43, AB=26, AC=0, AD=0, AE=5, AF=1, AG=25, AH=16, AI=13, AJ=9, AK=69, AL=69.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 190 · salida 187 · ACT-SCTL44080

Evento: 2° Festival Escenautas Miedo come todo... sueños al vuelo. Fecha preparada: 2026-07-20. Folio: SC-261023-194221.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=96, AB=79, AC=0, AD=0, AE=6, AF=3, AG=51, AH=50, AI=39, AJ=26, AK=175, AL=175.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 191 · salida 188 · ACT-SCPN57557

Evento: 2° Festival Escenautas La vaca que se creía mariposa. Fecha preparada: 2026-07-21. Folio: SC-261023-194222.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=85, AB=61, AC=0, AD=0, AE=14, AF=8, AG=32, AH=22, AI=39, AJ=31, AK=146, AL=146.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 192 · salida 189 · ACT-SCMD47592

Evento: 2° Festival Escenautas El planeta Bumara: Una aventura interespacial. Fecha preparada: 2026-07-21. Folio: SC-261023-194223.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=109, AB=88, AC=0, AD=0, AE=11, AF=9, AG=52, AH=42, AI=46, AJ=37, AK=197, AL=197.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 193 · salida 190 · ACT-SCCO66477

Evento: 2° Festival Escenautas Rin rin, las niñas también vuelan. Fecha preparada: 2026-07-22. Folio: SC-261023-194224.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=90, AB=61, AC=1, AD=1, AE=14, AF=6, AG=27, AH=17, AI=48, AJ=37, AK=151, AL=151.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 194 · salida 191 · ACT-SCAZ03384

Evento: 2° Festival Escenautas Romeo y Julieta de Bolsillo. Fecha preparada: 2026-07-22. Folio: SC-261023-194225.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=151, AB=105, AC=0, AD=1, AE=13, AF=9, AG=87, AH=58, AI=51, AJ=37, AK=256, AL=256.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 195 · salida 192 · ACT-SCQK36231

Evento: 2° Festival Escenautas Tierra, lengua y corazón. Fecha preparada: 2026-07-23. Folio: SC-261023-194226.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=104, AB=72, AC=0, AD=0, AE=19, AF=14, AG=48, AH=32, AI=37, AJ=26, AK=176, AL=176.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 196 · salida 193 · ACT-SCDI72299

Evento: 2° Festival Escenautas Lumbri... una historia de amor. Fecha preparada: 2026-07-23. Folio: SC-261023-194227.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=131, AB=107, AC=0, AD=0, AE=8, AF=12, AG=71, AH=55, AI=52, AJ=40, AK=238, AL=238.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 197 · salida 194 · ACT-SCLE82501

Evento: Fiestas patronales. Fecha preparada: 2026-07-23. Folio: SC-261023-194228.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=200, AB=200, AC=0, AD=0, AE=115, AF=115, AG=45, AH=45, AI=40, AJ=40, AK=400, AL=400.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 198 · salida 195 · ACT-SCAU57472

Evento: 2° Festival Escenautas Caballos. Fecha preparada: 2026-07-24. Folio: SC-261023-194229.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=110, AB=77, AC=0, AD=0, AE=9, AF=5, AG=57, AH=42, AI=44, AJ=30, AK=187, AL=187.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 199 · salida 196 · ACT-SCDR71698

Evento: GIFF. Fecha preparada: 2026-07-24. Folio: SC-261023-194230.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.3., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=0.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina multidisciplinaria pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 200 · salida 197 · ACT-SCEG81165

Evento: GIFF. Fecha preparada: 2026-07-25. Folio: SC-261023-194231.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.3., D=13, E=2.4.3.3., F=cooperación, G=12.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=0.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina multidisciplinaria pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 201 · salida 198 · ACT-SCSU57000

Evento: ¡Ay Mamita! ESCENAS AL VUELO. Fecha preparada: 2026-07-25. Folio: SC-261023-194232.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=0.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 202 · salida 199 · ACT-SCMC85731

Evento: 2° Festival Escenautas La historia de las cosas. Fecha preparada: 2026-07-25. Folio: SC-261023-194233.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=73, AB=53, AC=0, AD=1, AE=6, AF=4, AG=42, AH=31, AI=25, AJ=17, AK=126, AL=126.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 203 · salida 200 · ACT-SCXU96778

Evento: 2° Festival Escenautas Contramolinos. Fecha preparada: 2026-07-25. Folio: SC-261023-194234.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=109, AB=74, AC=0, AD=1, AE=18, AF=12, AG=43, AH=28, AI=48, AJ=33, AK=183, AL=183.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 204 · salida 201 · ACT-SCLX85185

Evento: Huateque cultural. Fecha preparada: 2026-07-25. Folio: SC-261023-194235.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=507, AB=515, AC=4, AD=5, AE=203, AF=210, AG=200, AH=200, AI=100, AJ=100, AK=1022, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 205 · salida 202 · ACT-SCNP60632

Evento: Festival del Borrego. Fecha preparada: 2026-07-26. Folio: SC-261023-194236.

Alineación original: A=objetivo 1.2., B=estrategia 1.2.3.4., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=197, AB=167, AC=5, AD=5, AE=70, AF=50, AG=52, AH=42, AI=70, AJ=70, AK=364, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 206 · salida 203 · ACT-SCSD90280

Evento: GIFF. Fecha preparada: 2026-07-26. Folio: SC-261023-194237.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina multidisciplinaria pendiente.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 207 · salida 204 · ACT-SCTC85153

Evento: 2° Festival Escenautas Kupúrima. Fecha preparada: 2026-07-26. Folio: SC-261023-194238.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=42, AB=27, AC=0, AD=0, AE=4, AF=1, AG=26, AH=18, AI=12, AJ=8, AK=69, AL=69.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 208 · salida 205 · ACT-SCKC38903

Evento: 2° Festival Escenautas Neko, el gato viajero. Fecha preparada: 2026-07-26. Folio: SC-261023-194239.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=98, AB=65, AC=0, AD=1, AE=9, AF=5, AG=46, AH=31, AI=43, AJ=28, AK=163, AL=163.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 209 · salida 206 · ACT-SCJF58331

Evento: GIFF. Fecha preparada: 2026-07-27. Folio: SC-261023-194240.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=vacío, AB=vacío, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=vacío, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina multidisciplinaria pendiente.
- Total territorial vacío en la fuente; se conserva vacío, no cero.
- Sin cifras de población; no se creó una fila ficticia.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 210 · salida 207 · ACT-SCIX53058

Evento: Curso de verano. Fecha preparada: 2026-07-31. Folio: SC-261023-194241.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=66, AB=62, AC=0, AD=0, AE=0, AF=1, AG=16, AH=13, AI=50, AJ=48, AK=128, AL=128.

- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 211 · salida 208 · ACT-SCOI69971

Evento: Espejos de agua. Fecha preparada: 2026-08-01. Folio: SC-261023-194242.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=55, AB=29, AC=0, AD=0, AE=4, AF=3, AG=46, AH=23, AI=5, AJ=3, AK=84, AL=84.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 212 · salida 209 · ACT-SCZG32643

Evento: Valentina y Miguelito. Fecha preparada: 2026-08-06. Folio: SC-261023-194243.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=32, AB=16, AC=0, AD=0, AE=2, AF=0, AG=10, AH=6, AI=20, AJ=10, AK=48, AL=48.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Disciplina pendiente o valor de fuente no equivalente: None
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 213 · salida 210 · ACT-SCVD78190

Evento: La Prudencia. Fecha preparada: 2026-08-06. Folio: SC-261023-194244.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=42, AB=34, AC=0, AD=0, AE=10, AF=2, AG=12, AH=12, AI=20, AJ=20, AK=76, AL=76.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Disciplina pendiente o valor de fuente no equivalente: None
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 214 · salida 211 · ACT-SCSP67127

Evento: Acassusso. Fecha preparada: 2026-08-06. Folio: SC-261023-194245.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.3.3., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=65, AB=32, AC=0, AD=0, AE=35, AF=10, AG=30, AH=20, AI=0, AJ=2, AK=97, AL=97.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Disciplina pendiente o valor de fuente no equivalente: None
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 215 · salida 212 · ACT-SCZA35544

Evento: Asistencia a San Miguel de Allende. Fecha preparada: 2026-08-07. Folio: SC-261023-194246.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=120, AB=140, AC=2, AD=0, AE=0, AF=0, AG=70, AH=80, AI=30, AJ=20, AK=462, AL=462.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Diferencia conservada: mujeres 120 + hombres 140 = 260; total territorial 462.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 216 · salida 213 · ACT-SCGB59410

Evento: Charlie y la fábrica de chocolates. Fecha preparada: 2026-08-08. Folio: SC-261023-194247.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=139, AB=100, AC=0, AD=0, AE=41, AF=27, AG=73, AH=56, AI=25, AJ=17, AK=239, AL=239.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 217 · salida 214 · ACT-SCUS26885

Evento: Fiestas patronales. Fecha preparada: 2026-08-08. Folio: SC-261023-194248.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=145, AB=85, AC=0, AD=0, AE=70, AF=40, AG=50, AH=25, AI=25, AJ=20, AK=230, AL=vacío.

- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 218 · salida 215 · ACT-SCGG84865

Evento: Festival Trombontepec. Fecha preparada: 2026-08-10. Folio: SC-261023-194249.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=215, AB=155, AC=2, AD=3, AE=53, AF=24, AG=139, AH=94, AI=21, AJ=34, AK=370, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 219 · salida 216 · ACT-SCXJ49543

Evento: Festival Trombontepec. Fecha preparada: 2026-08-11. Folio: SC-261023-194250.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=229, AB=180, AC=vacío, AD=vacío, AE=112, AF=93, AG=93, AH=71, AI=24, AJ=16, AK=409, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 220 · salida 217 · ACT-SCCO71233

Evento: 8 EET Neko, el gato viajero. Fecha preparada: 2026-08-12. Folio: SC-261023-194251.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2. , D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 221 · salida 218 · ACT-SCDG18311

Evento: 8 EET La casa de empeños. Fecha preparada: 2026-08-12. Folio: SC-261023-194252.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2. , D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 222 · salida 219 · ACT-SCFB08821

Evento: 8 EET Kupúrima. Fecha preparada: 2026-08-13. Folio: SC-261023-194253.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2. , D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 223 · salida 220 · ACT-SCAJ88533

Evento: 8 EET 2 Freak Show. Fecha preparada: 2026-08-13. Folio: SC-261023-194254.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2. , D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 224 · salida 221 · ACT-SCSE75908

Evento: 8 EET La Leyenda del Torito. Fecha preparada: 2026-08-14. Folio: SC-261023-194255.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2. , D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 225 · salida 222 · ACT-SCCL02050

Evento: 8 EET Bajo esta piedra hundirás tu iglesia. Fecha preparada: 2026-08-14. Folio: SC-261023-194256.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2. , D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 226 · salida 223 · ACT-SCRT92771

Evento: Flashmob Festival Trombontepec. Fecha preparada: 2026-08-14. Folio: SC-261023-194257.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=58, AB=69, AC=vacío, AD=vacío, AE=6, AF=10, AG=45, AH=50, AI=7, AJ=9, AK=127, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 227 · salida 224 · ACT-SCDI05070

Evento: Programa no. 1 Apertura de temporada. Fecha preparada: 2026-08-14. Folio: SC-261023-194258.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=241, AB=166, AC=vacío, AD=vacío, AE=136, AF=91, AG=104, AH=72, AI=1, AJ=3, AK=407, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 228 · salida 225 · ACT-SCTB90098

Evento: 8 EET Los Músicos de la Capital. Fecha preparada: 2026-08-15. Folio: SC-261023-194259.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2. , D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 229 · salida 226 · ACT-SCFN94863

Evento: 8 EET Trans-Arte. Fecha preparada: 2026-08-15. Folio: SC-261023-194300.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2. , D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 230 · salida 227 · ACT-SCOX83995

Evento: Feria Municipal. Fecha preparada: 2026-08-15. Folio: SC-261023-194301.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=533, AB=451, AC=4, AD=3, AE=102, AF=87, AG=315, AH=278, AI=112, AJ=83, AK=984, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina de danza pendiente; no se eligió un estilo por el título.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 231 · salida 228 · ACT-SCDH96945

Evento: 8 EET El sueño de Macario. Fecha preparada: 2026-08-16. Folio: SC-261023-194302.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2. , D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 232 · salida 229 · ACT-SCVH51580

Evento: 8 EET Kizuna. Fecha preparada: 2026-08-16. Folio: SC-261023-194303.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2. , D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 233 · salida 230 · ACT-SCCD60632

Evento: Matinata Jardin Union. Fecha preparada: 2026-08-16. Folio: SC-261023-194304.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=25, AB=17, AC=0, AD=3, AE=15, AF=5, AG=10, AH=0, AI=0, AJ=9, AK=42, AL=126.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 234 · salida 231 · ACT-SCPO48406

Evento: Feria Municipal. Fecha preparada: 2026-08-19. Folio: SC-261023-194305.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=271, AB=229, AC=2, AD=3, AE=72, AF=59, AG=119, AH=108, AI=78, AJ=59, AK=500, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina multidisciplinaria pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 235 · salida 232 · ACT-SCPU75224

Evento: Feria de la Granada y la Pitaya. Fecha preparada: 2026-08-21. Folio: SC-261023-194306.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=0, AB=0, AC=vacío, AD=vacío, AE=vacío, AF=vacío, AG=vacío, AH=vacío, AI=vacío, AJ=vacío, AK=0, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Total reportado en cero; confirmar si es dato definitivo o pendiente.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 236 · salida 233 · ACT-SCDZ28994

Evento: Programa no. 2. Fecha preparada: 2026-08-21. Folio: SC-261023-194307.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=260, AB=192, AC=0, AD=0, AE=127, AF=86, AG=130, AH=101, AI=3, AJ=5, AK=452, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 237 · salida 234 · ACT-SCYL60448

Evento: Matinata Jardin Union. Fecha preparada: 2026-08-23. Folio: SC-261023-194308.

Alineación original: A=objetivo 5.4, B=estrategia 5.4.4., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=24, AB=30, AC=0, AD=0, AE=10, AF=15, AG=9, AH=9, AI=5, AJ=6, AK=54, AL=162.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Disciplina pendiente o valor de fuente no equivalente: None
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 238 · salida 235 · ACT-SCCL91768

Evento: XXI FESTIVAL INTERNACIONAL CALLEJÓN DEL RUIDO. Fecha preparada: 2026-08-24. Folio: SC-261023-194309.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=46, AB=32, AC=0, AD=0, AE=7, AF=6, AG=16, AH=11, AI=23, AJ=15, AK=78, AL=78.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 239 · salida 236 · ACT-SCGI53101

Evento: XXI FESTIVAL INTERNACIONAL CALLEJÓN DEL RUIDO. Fecha preparada: 2026-08-25. Folio: SC-261023-194310.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=17, AB=27, AC=0, AD=0, AE=1, AF=1, AG=15, AH=24, AI=1, AJ=2, AK=44, AL=44.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 240 · salida 237 · ACT-SCYS44671

Evento: XXI FESTIVAL INTERNACIONAL CALLEJÓN DEL RUIDO. Fecha preparada: 2026-08-26. Folio: SC-261023-194311.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=10, AB=18, AC=0, AD=0, AE=0, AF=1, AG=10, AH=15, AI=0, AJ=2, AK=28, AL=28.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 241 · salida 238 · ACT-SCOQ21993

Evento: Arsénico y encaje. Fecha preparada: 2026-08-26. Folio: SC-261023-194312.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=83, AB=43, AC=0, AD=0, AE=34, AF=12, AG=49, AH=31, AI=0, AJ=0, AK=126, AL=126.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 242 · salida 239 · ACT-SCGK94178

Evento: Feria Municipal. Fecha preparada: 2026-08-26. Folio: SC-261023-194313.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=193, AB=172, AC=2, AD=1, AE=28, AF=31, AG=112, AH=92, AI=51, AJ=48, AK=365, AL=vacío.

- Meta propuesta por programa de festivales/artes vivas; validar selección. Dirección conservada como Producción Artística, no SIN ASIGNAR del catálogo.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 243 · salida 240 · ACT-SCYV40460

Evento: Arsénico y encaje. Fecha preparada: 2026-08-27. Folio: SC-261023-194314.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=109, AB=80, AC=0, AD=0, AE=51, AF=34, AG=55, AH=44, AI=3, AJ=2, AK=189, AL=189.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 244 · salida 241 · ACT-SCNR87693

Evento: XXI FESTIVAL INTERNACIONAL CALLEJÓN DEL RUIDO. Fecha preparada: 2026-08-27. Folio: SC-261023-194315.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=9, E=2.2.1, F=inclusión, G=5.

Conteos originales: AA=30, AB=23, AC=0, AD=0, AE=2, AF=3, AG=28, AH=19, AI=0, AJ=1, AK=53, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Promesa_NC y/o Acciones_PEC pendientes de la guía de códigos internos. Números originales preservados en el control.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 245 · salida 242 · ACT-SCHE97171

Evento: XXI FESTIVAL INTERNACIONAL CALLEJÓN DEL RUIDO. Fecha preparada: 2026-08-28. Folio: SC-261023-194316.

Alineación original: A=objetivo 5.5., B=estrategia: 5.5.2.2., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=213, AB=109, AC=0, AD=0, AE=56, AF=40, AG=153, AH=66, AI=4, AJ=3, AK=322, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

### Fila fuente 246 · salida 243 · ACT-SCKZ17362

Evento: Ars Memoriae. Fecha preparada: 2026-08-29. Folio: SC-261023-194317.

Alineación original: A=objetivo 5.5., B=estrategia 5.5.1., D=vacío, E=vacío, F=vacío, G=vacío.

Conteos originales: AA=37, AB=26, AC=0, AD=0, AE=26, AF=17, AG=10, AH=7, AI=1, AJ=2, AK=63, AL=vacío.

- Clave de proceso / meta pendiente de confirmar; no se asignó una clave por defecto.
- Subdisciplina musical pendiente.
- Tipo de espacio pendiente para sede no equivalente al catálogo.
- Población cargada como Población General: rangos de edad de origen no confirmados. Desglose original conservado en descripción y control.
- Público asistente colocado en Acceso; artistas no se sumaron como público ni como agentes contratados. Validar criterio operativo.

## Fuentes y trazabilidad

- Fuente: resumen mio, DGPA.xlsx, hoja programa ene-ago 2026, filas 3–246.
- Estructura y catálogos: DB_Sistema_Cultura_GTO_V1.xlsx, copia proporcionada el 23 de octubre de 2026.
- Preparación local: 2026-10-23T19:39:16-06:00.
- No se validaron reglas Required_If, automatizaciones ni permisos de la instancia productiva de AppSheet.

- SHA-256 resumen mio, DGPA.xlsx: b55d8aab947674789a03eea1d6a21bb3206f9379e702b64c4ef4dbb8ee955769
- SHA-256 DB_Sistema_Cultura_GTO_V1.xlsx: 7a9f2e40798b04bf9ee8066c661caefc811b7372481f260560461864dc18dbf9