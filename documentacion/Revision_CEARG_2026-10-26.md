# Revisión de CEARG para preparar la normalización

Fecha de revisión: 26 de octubre de 2026.

Responsable confirmado por Luis para los nuevos registros de CEARG: **claudia.ramirezm@guanajuato.gob.mx**. Esta confirmación no cambia la autoría de los registros ya existentes.

Actualización de preparación: se generó un primer lote parcial de 5 actividades nuevas, 5 filas territoriales y 13 de población en `outputs/01a157b5-4b5c-7dc2-a3d8-393848e44b3f/normalizacion_cearg_2026-10-26/`. La cuarta pestaña, Regitro_Evidencia, contiene solo encabezados. El control de carga de esa carpeta incorpora una consulta posterior de la base en línea (1,126 actividades) y aparta 38 filas con posibles coincidencias y 32 con dudas. Los conteos de la revisión inicial de abajo corresponden a la copia local de 605 actividades. El lote mantiene faltantes explícitos y no equivale a toda la carga de CEARG.

## Conclusión

Sí se puede preparar una normalización preliminar. El archivo contiene información útil de nombres, instructores, sedes, fechas, disciplinas y población por sexo. Antes de producir una carga definitiva hay que separar actividades ya registradas, reportes repetidos y pendientes de aclaración. No se modificó el Excel original ni la base de datos.

## Qué contiene el archivo

`archivos_base/CEARG/Actividades Enero-Septiembre CEARG.xlsx` tiene nueve pestañas visibles, de ENERO a SEPTIEMBRE. JULIO solo contiene la plantilla, sin actividades; confirmar si no hubo actividades o falta el reporte. Algunos encabezados conservan otro mes o el año 2025: no se usaron como prueba de la fecha del evento.

| Pestaña | Filas de datos |
|---|---:|
| ENERO | 1 |
| FEBRERO | 7 |
| MARZO | 9 |
| ABRIL | 17 |
| MAYO | 4 |
| JUNIO | 25 |
| JULIO | 0 |
| AGOSTO | 3 |
| SEPTIEMBRE | 9 |
| Total | 75 |

Hay **73 filas con título y dos sin título**. Entre las tituladas se identificaron 47 nombres distintos al normalizar mayúsculas, tildes y puntuación. Ni 75 filas ni 47 nombres equivalen automáticamente al número de actividades: un taller puede repetirse por sesión, grupo, sede, periodo o avance.

Se expandió únicamente la información de celdas que realmente están combinadas en el Excel. No se copiaron títulos hacia abajo sobre celdas vacías no combinadas.

## Actividades que podrían estar ya registradas

La copia local `archivos_base/DB_Sistema_Cultura_GTO_V1.xlsx` contiene 605 registros de actividades. En el cruce:

- 34 filas de CEARG tienen un nombre igual al de alguna actividad de la base, tras normalizar mayúsculas, tildes y puntuación.
- Otras dos filas tienen un nombre parecido, con un posible registro relacionado.
- Esas coincidencias remiten a 30 IDs distintos de la base. Los registros encontrados están a nombre de `claudia.ramirezm@guanajuato.gob.mx`.
- 37 filas con título no tuvieron coincidencia con la regla de nombres aplicada. Son candidatas a revisión, no 37 altas nuevas confirmadas.
- Las dos filas sin título se mantienen pendientes de identificar.

Una coincidencia de nombre no prueba que las filas deban fusionarse. Comparar fechas, grupo, sede, cantidades y si el reporte es acumulado o de sesiones distintas. Tampoco se debe copiar automáticamente la clasificación o las sesiones de la base: algunos valores requieren revisión. Antes de generar IDs y folios de la carga final, contrastar con una copia actualizada de la base; esta revisión no certifica el estado de las altas posteriores a la copia local.

## Dudas concretas que sí afectan la carga

### 1. Repeticiones y qué representa cada renglón

Hay cinco grupos de coincidencias internas por nombre, instructor, fechas y total por sexo. Requieren confirmar si son duplicados, grupos diferentes o reportes de avance:

| Referencias | Actividad |
|---|---|
| FEBRERO 7 y 8 | Diseño de postulaciones para becas de creación artística y cultural |
| ABRIL 19 y 23 | El Gran Delirio de Anacleto y Cascarrabias |
| ABRIL 20 y 21 | Cleo, La Brujita |
| JUNIO 9 y AGOSTO 8 | Diplomado en danza clásica El Callejón |
| JUNIO 25 y 26 | Encuentro estatal de saberes locales, Sebastián Ruelas |

Otras filas comparten nombre y fecha con cantidades diferentes, por ejemplo La niña y la ciencia, Brotes y Encuentro estatal de saberes locales. Pueden corresponder a diferentes grupos. No se eliminaron ni sumaron por intuición.

La columna A se titula “No.” y presenta numeración de renglones; no debe convertirse en Total_Sesiones. No hay una columna inequívoca de sesiones efectivamente realizadas. Un intervalo de fechas tampoco determina cuántas sesiones hubo.

### 2. Fechas a confirmar

- **ABRIL, L14:** indica `4/13/2027` como término de un taller que inicia `4/13/2026`. La nota describe una actividad del 13 de abril. Confirmar la fecha final; no corregir el año automáticamente.
- **JUNIO K9 y AGOSTO K8, El Callejón:** Excel almacena 6 de mayo de 2026, pero la observación dice que inició el viernes 5 de junio. La base local contiene 5 de junio. Hay evidencia para proponer esa corrección, pero debe confirmarse.
- **SEPTIEMBRE K7, K8 y K11:** Excel almacena respectivamente 9 de marzo, 9 de febrero y 9 de abril. Confirmar si son esas fechas o 3, 2 y 4 de septiembre. La pestaña no basta para intercambiar día y mes.
- **AGOSTO K9, taller de literatura:** el archivo almacena 5 de abril, mientras la actividad de nombre igual en la base inicia el 4 de mayo. Confirmar.
- **ABRIL L19:L23:** cinco filas sin fecha final. Una presentación de un solo día permite proponer fin igual a inicio, pero falta confirmar si fue así.
- Los días 18 y 25 en **MARZO K9:L9**, y las fechas escritas sin año, pueden interpretarse con el contexto de 2026 y el mes del reporte; deben quedar identificados como interpretación contextual y comprobarse con el responsable.

### 3. Personas atendidas, personas que concluyen y edades

Los encabezados distinguen dos medidas:

- M:O: personas atendidas, total y sexo.
- P:R: personas que concluyen o ganadores, total y sexo.

No sumarlas entre sí. Tampoco usar la resta entre atendidos y quienes concluyen como si fuera población de acceso. Participación/acceso se debe determinar por el tipo real de actividad, no por la deserción del taller.

Entre las 73 filas tituladas:

- 48 tienen edades que suman el total atendido.
- Nueve tienen edades que suman quienes concluyeron, pero no el total atendido: MARZO 8 y 10; ABRIL 11; MAYO 7 y 8; JUNIO 12 y 15; AGOSTO 9; SEPTIEMBRE 15. Ejemplo: MARZO 8 reporta 18 atendidos, 15 que concluyen y edades para 15.
- 15 no tienen desglose numérico de edad.
- SEPTIEMBRE 12 reporta 57 personas atendidas y edades que suman 55.
- JUNIO 17 reporta 182 personas sin desglose por sexo.
- JUNIO 25 y 26 reportan 17 que concluyen, pero sus columnas Q y R suman 27.

Estos conteos se refieren a las filas del reporte, antes de resolver duplicaciones. No son conteos definitivos de actividades con errores.

El formato original usa menores de 12 y adolescentes de 12 a 17. El catálogo del sistema separa 0–5, 6–12 y 13–17: no hay una conversión exacta para los grupos de menores sin más información. Los grupos de 18 años en adelante sí tienen cortes compatibles. Como alternativa para no exigir una nueva captura completa, se puede conservar la población por sexo en “Población General” y registrar el desglose de edad solo cuando sea compatible y completo, previa validación del criterio.

### 4. Alineación y clasificación

La dirección del encabezado es Formación e Investigación, y el recinto Centro de las Artes de Guanajuato existe en Cat_Recintos. Esto permite estandarizar la escritura y recuperar su tipo de espacio.

La base tiene metas para PB3567, PB3568, QC4049 y QC4061, pero varias metas comparten una misma clave general. PB3567 no determina una sola meta: hay que distinguir talleres, gestión cultural, exposiciones, presentaciones, iniciación artística y laboratorios.

En la matriz 2026, las terminaciones de QC4049 distinguen:

| Clave completa | Finalidad | ID de alineación correspondiente en la copia local |
|---|---|---:|
| QC4049.2602 | Programa académico | 29 |
| QC4049.2603 | Programa artístico | 30 |
| QC4049.2604 | Programa expositivo | 31 |

El archivo mezcla variantes como E071QC4049.26.02 y QC40492604, que se pueden estandarizar conservando el original. Sin embargo, no basta con transformar el texto: JUNIO 10 y 11 son talleres con clave terminada en 2604 (expositiva), y El Callejón aparece con terminación 2603 aunque se describe como diplomado. Confirmar si la clave expresa financiamiento o la meta a la que realmente debe abonar la actividad.

“PADID”, “Convenio”, “Federal”, “E071”, “sin recurso”, “No se utilizó recurso”, cero o una colaboración no identifican por sí solos la meta específica. No convertirlos en claves inventadas ni elegir una fila de catálogo al azar.

Las filas de PB3567 y PB3568 del catálogo revisado no tienen Acciones_PG ni Acciones_PEC; las de QC4049 y QC4061 tienen PEC, pero no PG. Es una carencia del catálogo utilizado: esas acciones no se pueden recuperar por una cascada que esté vacía. Solicitar criterio de alineación institucional a Planeación para los campos que exijan completar.

“Gráfica” puede proponerse como Grabado / Artes visuales y “Teatro” como Teatro / Artes escénicas cuando el contenido lo respalda. Etiquetas amplias como arte sonoro y multimedia, artes vivas o gestión cultural requieren revisar la subdisciplina; Gestión cultural aparece bajo más de una disciplina en el catálogo. No replicar una clasificación previa solo porque ya existe en la base.

### 5. Territorio, modalidad y evidencias

- Salamanca y CEARG aparecen de forma clara en gran parte de las actividades presenciales. Conservar la sede real; contrastar localidad y zona prioritaria con los catálogos cuando haya correspondencia única.
- La columna AF contiene listas de lugares de procedencia, incluso CDMX y Argentina. No distribuir asistentes entre esos lugares ni convertirlos en sedes de realización si no hay desglose y definición explícitos.
- Estándares de formato: en línea → Virtual; semipresencial → propuesta de Híbrido. Revisar AGOSTO 7: la columna indica Presencial y la nota menciona inicio virtual.
- No hay enlaces o archivos de evidencia adjuntos en las columnas revisadas. Las notas descriptivas no son un archivo de evidencia.
- Firma de convenios por beneficiarios de PECDA (SEPTIEMBRE 14) requiere distinguir trámite, apoyo otorgado y actividad cultural para no contabilizar una firma como taller por la etiqueta Formación.

## Qué pedir al responsable

1. Confirmar si las filas repetidas son grupos/sesiones distintos o reportes acumulados; aclarar especialmente los cinco pares señalados.
2. Confirmar las fechas observadas y completar nombre/programa de JUNIO 20 y 21.
3. Indicar las sesiones efectivamente realizadas por taller o diplomado y si los asistentes reportados son personas únicas o asistencias acumuladas.
4. Aclarar si el desglose por edades corresponde a atendidos o a quienes concluyeron, y cómo resolver los casos que no cuadran.
5. Confirmar la meta de registros con clave ambigua, sin clave o con contradicción entre código y actividad. Planeación debe indicar PG/PEC faltantes en el catálogo.
6. Confirmar si JULIO está pendiente o no tuvo actividades y compartir evidencias disponibles. El correo responsable de los nuevos registros ya fue confirmado: claudia.ramirezm@guanajuato.gob.mx.

## Preparación recomendada

Preparar tres grupos: coincidencias para revisar y, si procede, actualizar conservando sus IDs; candidatas a alta nueva, sujetas a depuración; pendientes de aclaración. No asignar un ID nuevo a una actividad que ya exista. Conservar hoja y fila de origen en el control de normalización.

No está listo para pegar las 75 filas como actividades nuevas. Sí está listo para iniciar una preparación controlada con este inventario y resolver un conjunto concreto de aclaraciones.

## Control por fila

Las coincidencias de esta tabla son por nombre y se deben validar; “sin coincidencia” no garantiza que la actividad no exista con otro título.

| Origen | Nombre | Resultado | IDs candidatos en la copia local |
|---|---|---|---|
| ENERO 7 | Muestra de proyectos del Taller de Creación Sonora Experimental | Sin coincidencia por nombre | — |
| FEBRERO 7 | Diseño de postulaciones para becas de creación artística y cultural | Nombre parecido | ACT-SCTS87185 |
| FEBRERO 8 | Diseño de postulaciones para becas de creación artística y cultural | Nombre parecido | ACT-SCTS87185 |
| FEBRERO 9 | Taller la niña y la ciencia | Nombre coincidente | ACT-SCVU63289 |
| FEBRERO 10 | Taller la niña y la ciencia | Nombre coincidente | ACT-SCVU63289 |
| FEBRERO 11 | Charla "Prácticas documentales y escenarios críticos” | Sin coincidencia por nombre | — |
| FEBRERO 12 | Presentación artística"Bajo esta piedra Hundirás tu Iglesia" | Sin coincidencia por nombre | — |
| FEBRERO 13 | Inauguración Exposición "Travesía Gráfica. Obra de Gilberto Guerrero" | Sin coincidencia por nombre | — |
| MARZO 7 | Cartografía de Archivos Vivos | Nombre coincidente | ACT-SCBC66974 |
| MARZO 8 | Taller de Introducción a la interdisciplina | Nombre coincidente | ACT-SCPE79917 |
| MARZO 9 | “Ciénciame un cuento”, | Sin coincidencia por nombre | — |
| MARZO 10 | ENCLAVE 2026. Poéticas de Origen Futuro Taller de Códigos Poéticos Expandidos | Nombre coincidente | ACT-SCWB12949 |
| MARZO 11 | Proyección de XV Aniversario de Cine Colectivo Taller de Códigos Poéticos Expandidos | Sin coincidencia por nombre | — |
| MARZO 12 | Conferencia magistral: La participación en la vida cultural, un derecho humano que le da sentido al desarrollo, desde nuestra diversidad creativa | Sin coincidencia por nombre | — |
| MARZO 13 | Presentación editorial: Presentación del libro Creatividades locales, editado por UNESCO | Sin coincidencia por nombre | — |
| MARZO 14 | Una discusión marital | Sin coincidencia por nombre | — |
| MARZO 15 | Pesentación artística "Los malos Hábitos" | Sin coincidencia por nombre | — |
| ABRIL 7 | Taller Diversidad cultural en las políticas culturales municipales | Nombre coincidente | ACT-SCRS96271, ACT-SCBW36284, ACT-SCKS34336, ACT-SCHC75119 |
| ABRIL 8 | Taller Diversidad cultural en las políticas culturales municipales | Nombre coincidente | ACT-SCRS96271, ACT-SCBW36284, ACT-SCKS34336, ACT-SCHC75119 |
| ABRIL 9 | Taller Diversidad cultural en las políticas culturales municipales | Nombre coincidente | ACT-SCRS96271, ACT-SCBW36284, ACT-SCKS34336, ACT-SCHC75119 |
| ABRIL 10 | Taller Diversidad cultural en las políticas culturales municipales | Nombre coincidente | ACT-SCRS96271, ACT-SCBW36284, ACT-SCKS34336, ACT-SCHC75119 |
| ABRIL 11 | Metodologia de procesos creativos | Nombre coincidente | ACT-SCLV97219 |
| ABRIL 12 | Taller avanzado de grabado en metal FIC | Nombre coincidente | ACT-SCJW46062 |
| ABRIL 13 | Taller de gráfica experimental a través de la estampación y transferencia botánica | Nombre coincidente | ACT-SCHO27779 |
| ABRIL 14 |  "Voces pequeñas, derechos grandes. Taller de herramientas de autocuidado para la infancia" | Sin coincidencia por nombre | — |
| ABRIL 15 |  "Voces pequeñas, derechos grandes. Taller de herramientas de autocuidado para la infancia" | Sin coincidencia por nombre | — |
| ABRIL 16 |  "Voces pequeñas, derechos grandes. Taller de herramientas de autocuidado para la infancia" | Sin coincidencia por nombre | — |
| ABRIL 17 |  "Voces pequeñas, derechos grandes. Taller de herramientas de autocuidado para la infancia" | Sin coincidencia por nombre | — |
| ABRIL 18 |  "Voces pequeñas, derechos grandes. Taller de herramientas de autocuidado para la infancia" | Sin coincidencia por nombre | — |
| ABRIL 19 | El Gran Delirio de Anacleto y Cascarrabias | Sin coincidencia por nombre | — |
| ABRIL 20 | Cleo, La Brujita | Sin coincidencia por nombre | — |
| ABRIL 21 | Cleo, La Brujita | Sin coincidencia por nombre | — |
| ABRIL 22 | GoGoTeens | Sin coincidencia por nombre | — |
| ABRIL 23 | El Gran Delirio de Anacleto y Cascarrabias | Sin coincidencia por nombre | — |
| MAYO 7 | Taller de Producción Audiovisual | Nombre coincidente | ACT-SCTP93796 |
| MAYO 8 | Taller de Modelado 3D en Blender | Nombre coincidente | ACT-SCCL28269 |
| MAYO 9 | Exposición "La Fortaleza. MarisolGuerrero" | Nombre coincidente | ACT-SCJU79713 |
| MAYO 10 | Exposición "De lo invisible a lo visible. Cartografía de la memoria histórica afrodescendiente en guanajuato" | Nombre coincidente | ACT-SCTH89398 |
| JUNIO 7 | Taller de metodologías del grabado para la inclusión | Nombre coincidente | ACT-SCSU96183 |
| JUNIO 8 | Taller -laboratorio: Teatro abierto, nuevas narrativas, territorios expresivos y estrategias de producción | Nombre coincidente | ACT-SCSA90746 |
| JUNIO 9 | Diplomado en danza clásica El Callejón: Programa de formación dancística y creación escénica | Nombre coincidente | ACT-SCKE58665 |
| JUNIO 10 | Taller " La cuerpa. Actividades sensoriales y sensibles" | Nombre coincidente | ACT-SCJH52543 |
| JUNIO 11 | Taller "Escritura poética. Genealogias de lo familiar" | Nombre coincidente | ACT-SCRN10556 |
| JUNIO 12 | Taller El cerebro positrónico de Asimov, ciencia ficción para infancias y adolescencias | Nombre coincidente | ACT-SCSA27668 |
| JUNIO 13 | Brotes: Talleres artísticos para primera infancia | Nombre coincidente | ACT-SCJQ99794 |
| JUNIO 14 | Brotes: Talleres artísticos para primera infancia | Nombre coincidente | ACT-SCJQ99794 |
| JUNIO 15 | Brotes: Talleres artísticos para primera infancia | Nombre coincidente | ACT-SCJQ99794 |
| JUNIO 16 | Brotes: Talleres artísticos para primera infancia | Nombre coincidente | ACT-SCJQ99794 |
| JUNIO 17 | 6o. Concurso Nacional de Literatura Infantil | Nombre coincidente | ACT-SCZN45583 |
| JUNIO 18 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| JUNIO 19 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| JUNIO 22 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| JUNIO 23 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| JUNIO 24 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| JUNIO 25 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| JUNIO 26 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| JUNIO 27 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| JUNIO 28 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| JUNIO 29 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| JUNIO 30 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| JUNIO 31 | Encuentro estatal de saberes locales | Sin coincidencia por nombre | — |
| AGOSTO 7 | Diplomado en danza contemporánea: Ejes de Creación escénica y multidisciplinaria | Nombre coincidente | ACT-SCIR74848 |
| AGOSTO 8 | Diplomado en danza clásica El Callejón: Programa de formación dancística y creación escénica | Nombre coincidente | ACT-SCKE58665 |
| AGOSTO 9 | Taller de creación de literatura para adolescentes | Nombre coincidente | ACT-SCWJ23456 |
| SEPTIEMBRE 7 | Presentación Editorial "Sombras y Susurros" | Sin coincidencia por nombre | — |
| SEPTIEMBRE 8 | Taller de "Certificación de Mujeres al Frente" | Nombre coincidente | ACT-SCPD16906 |
| SEPTIEMBRE 9 | Taller de Mezzotinta a color | Nombre coincidente | ACT-SCEV04930 |
| SEPTIEMBRE 10 | Diplomado Pedagogías de lo corporal: Saberes locales; Cuerpo y Aprendizaje intuitivo | Nombre coincidente | ACT-SCFX97585 |
| SEPTIEMBRE 11 | XXXVIII Concurso Regional Artesanía del Pan Tradicional y Ritual | Sin coincidencia por nombre | — |
| SEPTIEMBRE 12 | XXXVI Concurso-Venta-Exposición Alfarería | Sin coincidencia por nombre | — |
| SEPTIEMBRE 13 | Congreso Estatal de Teatro | Sin coincidencia por nombre | — |
| SEPTIEMBRE 14 | FIRMA DE CONVENIOS POR BENEFICIARIOS | Sin coincidencia por nombre | — |
| SEPTIEMBRE 15 | Taller de Inteligencia Artificial, datos y cuerpo | Nombre coincidente | ACT-SCJU55686 |
| JUNIO 20 | Sin nombre de actividad | Identificar antes de cargar | — |
| JUNIO 21 | Sin nombre de actividad | Identificar antes de cargar | — |

## Fuentes y alcance

- Archivo CEARG: nueve hojas ENERO–SEPTIEMBRE, filas de datos a partir de la 7, columnas A:AI.
- DB_Sistema_Cultura_GTO_V1.xlsx: Registro_Actividades, Cat_Alineacion, Cat_Disciplina, Cat_Recintos, Cat_Grupo_Etario y Cat_Formato. Se usó la copia local, sin consultar ni modificar las altas actuales de Google Sheets.
- C:/Users/luisa/Downloads/Matriz_PG_PEC_para_revision.xlsx: Listas, BA33:BE35, para las terminaciones de QC4049.

Los archivos de origen permanecen sin cambios. No se generaron filas definitivas de importación ni IDs/folios de alta en esta revisión.
