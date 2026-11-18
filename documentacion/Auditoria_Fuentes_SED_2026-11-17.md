# Auditoría de fuentes, base y SED — 17/11/2026

Estado: auditoría de lectura. Sin modificaciones productivas, cargas, publicación ni contacto con las áreas.

## Resultado principal

Territorio y población suman ambos **1,029,143** en la lectura nativa actual. Se revisaron 1,644 fichas, 1,693 filas territoriales, 2,952 poblacionales y 108 metas. Los 1,644 IDs de actividad son únicos. No hay hijos territoriales ni poblacionales huérfanos. Hay ocho fichas sin clave de alineación y ninguna clave no vacía inexistente en catálogo. Igualdad de sumas no acredita personas únicas ni que todos los públicos estén documentados.

El desfase con SED se concentra en versiones de fuentes, cortes, unidades y correspondencia de entregables. No se corrige cambiando asistentes para igualar una cantidad de talleres.

## Alcance realizado y límites

Se extrajeron estructura y valores almacenados de los 59 libros XLSX de archivos_base y archivos_matriz (sin archivos temporales de Excel). Se revisaron especialmente los dos nuevos de Adriana, las versiones duplicadas, los informes de cargas previas y el código de agregación. Se cruzaron las 108 metas SED contra las 108 del catálogo y sus fichas actuales. No se ha certificado individualmente cada actividad, documento de evidencia, permiso o respuesta de todos los expedientes. Los valores de fórmulas de los Excel son los almacenados por su autor; no se recalcularon. La copia DB_Sistema_Cultura_GTO_V1.xlsx es histórica y no sustituye a la lectura viva. No se usó Dashboard_Master como fuente de resultados.

## Dos archivos nuevos de Adriana

### Avance de metas DGVDC 2026.xlsx

SHA256 a7509f56df90d4597cd232678765a7931c804e80a46c33750c1f5868fec3e7b5. Incluye enero–octubre; noviembre y diciembre no acreditan avance. La versión en archivos_matriz/adriana_ugalde y la copia de la raíz de archivos_base son idénticas entre sí y anteriores a esta versión.

| Entregable | Enero–septiembre en fuente anterior | Enero–octubre nuevo | Octubre nuevo |
|---|---:|---:|---:|
| Promotores culturales | 102 | 120 | 18 |
| Talleres artísticos en casas de cultura | 4,194 | 4,217 | 23 |
| Formación lectora | 71 | 77 | 6 |
| Programa curricular | 3 | 20 | 17 |
| Danza folclórica | 2 | 2 | 0 |
| Apoyos municipales | 72 | 72 | 0 |
| Identidad y memoria | 437 | 509 | 72 |
| Visitas escolares | 20 | 35 | 15 |
| Animación lectora | 2,615 | 2,952 | 337 |
| Capacitación bibliotecaria | 18 | 21 | 3 |
| Proyectos interinstitucionales | 1 | 2 | 1 |
| Proyectos socioculturales | 0 | 0 | 0 |
| Círculos de lectura | 50 | 66 | 16 |

La suma aritmética es 8,093, pero incluye unidades distintas. No es un KPI homogéneo. Octubre aporta 508 unidades de esas familias, pendientes de cotejo por ID antes de cualquier alta. La DB conserva los 60 concentrados anteriores, y el cotejo por nombre no encontró concentrados titulados octubre. Esto no descarta otras capturas equivalentes.

Mayo de animación lectora aporta ahora 8,666 asistentes (PB3563, K12), frente al pendiente histórico. Junio conserva 5,226 y octubre 6,623. Antes de corregir población revisar las anotaciones sobre arrastres y la cifra viva por ID. Visitas escolares de agosto sigue con cero en la fuente, frente al antecedente explícito de público no disponible; conservar esa distinción. Octubre visitas trae 700.

QC4098 documenta 42 talleres, distribuidos 7,7,15,6,7, con metas 9,9,19,12,12. El SED general implica 21 (2,3,9,2,5), coincidentes con el primer bloque. Puede ser desfase de corte, no permite duplicar ambos avances. Las metas 101–105 ya existen y no tienen fichas.

La nueva versión alinea metas anuales con catálogo en apoyos (92), encuentros bibliotecarios (20) y proyectos socioculturales (1), frente a 94,15,10 en la fuente anterior. PB3564 añade préstamos de libros: 223,315 septiembre y 15,714 octubre, 239,029 acumulados, meta 360,000. Son préstamos, no personas. Requiere correspondencia institucional propia y no agregarlos a asistencia o talleres. GA2476 y QB4039 tampoco deben forzarse a un programa con nombre parecido.

### Faltantes_Territorio_Poblacion... (1) (1).xlsx

56 filas, 41 propuestas de Tipo_Actividad y 53 comentarios. El área informa que no dispone de participación/acceso separados y contabiliza asistentes totales. Mantener el total conocido y señalar desglose no disponible; no convertirlo en cero verificado ni estimar categorías.

La columna H contiene etiquetas equivocadas en varias filas. Ejemplos:
- ACT-SCWL65120: formulario dice capacitación bibliotecaria, DB actual clave55 y nombre correcto de apoyos municipales.
- ACT-SCHT70836: formulario dice capacitación bibliotecaria, DB clave57 y nombre correcto de visitas escolares.
- ACT-SCAG47824: formulario dice círculos de lectura, DB clave60 y nombre correcto de proyectos interinstitucionales.

Estas tres no necesitan reasignación de meta en DB. Revisar generación o manipulación del formulario para evitar volver a pedir respuestas con etiquetas falsas. El comentario de Enclave indica que PB3567 no pertenece a DGVDC: no reasignarlo a Vinculación por el correo capturista. Las sugerencias de tipo deben revisarse contra su entregable; por ejemplo clasificar apoyos como capacitación no resulta automático.

## Cruce completo con SED

Se cruzaron las descripciones y el proyecto, conservando clave de entregable cuando el SED la contiene. **86 filas tienen correspondencia exacta única**. En esas 86, las metas anuales coinciden en todos los casos con catálogo. **22 requieren cruce semántico/manual**, no son 22 metas inexistentes. Los textos de zonas, restauraciones y equipamientos difieren o usan abreviaturas.

De las correspondencias exactas, **23 tienen avance positivo SED y cero fichas**. El registro operativo por sí solo no reproduce todos los entregables institucionales. Entre ellas hay QC4098, Conservatorio, Comunicación Social, restauración Catedral, arqueología, apoyos Cervantino y ferias editoriales.

El SED también requiere revisión:
- PB3563 lectura: 17.232 almacenado como fracción equivale a 1,723.2%. Por meta4,800 implica82,713.6, incompatible con conteo entero y con el avance DGVDC2,952. Revisar denominador/unidad/celda, no copiar ese resultado a DB.
- PB3563 capacitación bibliotecaria: 700% implica140 frente a21 en nuevo DGVDC.
- QC4142.2603: 135% de104 implica140.4 presentaciones.
- PB3567 presentaciones: 105% de35 implica36.75 presentaciones.
Estos productos son diagnósticos del porcentaje guardado, no cantidades realizadas certificadas. Un reporte redondeado o mal escalado no permite reconstruir siempre cantidades originales.

Superar100% puede ser ejecución real. La meta anual es un objetivo, no un máximo que obligue a recortar actividades. Comparar igual entregable, unidad, corte y criterio.

## Código que explica parte del problema

index.html:1740 sigue leyendo actividades A:BV (74 columnas). La regla operativa vigente autoriza A:BN. CulturaCalidad.quantity consume Cantidad_Actividades en BV, y muchas gráficas/matriz usan ese cálculo. Existe una incompatibilidad de diseño pendiente y ya documentada. No se leyeron BU/BV como fuente operativa para este informe.

Los concentrados mensuales requieren cantidad de talleres/acciones además de sesiones. Dentro del esquema permitido todavía debe definirse dónde conservar esa cantidad o un registro independiente de avances por entregable. Contar una ficha mensual como un taller produce subestimación. Usar sesiones o personas como talleres produce sobreestimación.

El tablero tampoco sustituye una ficha de avance físico de inversión. Reparaciones parciales, m², equipos, dictámenes y programas no se deben representar con público ficticio.

## Estado por expediente y prioridad

| Expediente | Hallazgo a atender | Trabajo interno siguiente |
|---|---|---|
| Adriana Ugalde | Nueva fuente octubre, corrección de mayo, formulario con etiquetas falsas | Cotejo por ID de60 concentrados, lote de mayo y octubre, resolución del modelo de cantidades |
| Claudia/CEARG | Cursos, promoción, iniciación y residencias comparten PB3567 | Mantener cruce por entregable. Meta75 es parcial documentada; no usar asistentes como cursos |
| Adriana Escamilla | Capacitación y público de conciertos se mezclaban | Conservar función revisada QC4047 y diferencia127 vs120 según corte. Totales no prueban personas únicas |
| Soraya/Museos | Visitas, eventos y talleres no tienen siempre igual unidad | Cotejar1,438 SED contra920 fichas de meta92 y cantidad de cada fuente, no contra conteo de filas |
| Edith/Patrimonio | Alcance de redes incluye difusión, no solo visitas físicas | Separar alcance digital y presencial en comparaciones; no afirmar visitantes únicos de sitio |
| Fátima/Editorial | Versiones18 y26, ferias/presentaciones/equipamientos distintos | Usar26 como candidato vigente y cotejar sin reimportar18. Meta de feria no sustituye presentaciones |
| Marcelina/DGPA | Raíz y archivos_matriz son versiones diferentes | Fuente personal incluye sep–oct, archivos_matriz conserva versión anterior. Comparar periodos equivalentes |
| Ileana | Versión actualizada coincide con archivos_matriz | Cruzar festivales, apoyos y encuentros con claves completas |
| Myrna | Contratos y funciones administrativas no equivalen a actividades ejecutadas | Usar contratos solo como evidencia auxiliar de avances realmente documentados |
| Comunicación Social | SED tiene7 y5 campañas y un plan; cero fichas exactas | Reconocer avance institucional con procedencia antes de interpretarlo como ausencia de trabajo |
| Marce/Planeación | Matrices2026/2027 y presentación tienen alcances distintos | Fijar catálogo2026, versión y corte; no reutilizar metas2027 |

archivos_matriz tiene varias copias byte a byte iguales a archivos_base: CEARG, Soraya, Edith, Myrna, revisiónEscamilla, Ileanaactualizada y editorial18. No sumarlas ni importarlas dos veces. Mantenerlas como fuentes conservadas y seleccionar una versión vigente por expediente.

## Ruta de cierre propuesta al 30 de noviembre

1. 18–19nov: congelar la fuente de comparación a31oct, conservar el17nov como fecha de extracción; registrar versión y corte por área. Aprobar correspondencia de108entregables con clave completa SED.
2. 18–20nov: resolver la representación de cantidades de concentrados y avances físicos. Preparar correcciones concretas de Adriana sin escribir sesiones ni BO+.
3. 20–24nov: aplicar lotes cotejados con respaldo/readback. Empezar por mayo y octubre de Adriana y42talleresQC4098; después23metas con avanceSED sin ficha. No duplicar eventos ya capturados.
4. 25–27nov: reconciliar metas con fuentes por corte y unidad. Pedir únicamente las excepciones que sigan sin dato: fecha de corteSED, arrastres de lectura, asistentes agosto, discrepancia docentes y cantidades no reconstruibles del porcentaje.
5. 28–29nov: verificar filtros, exportación y presentación con una misma extracción. Validar metas altas/bajas por definición, sin recortar porcentajes a100.
6. 30nov: entregar versión con fuentes, corte y pendientes explícitos. No prometer certeza de datos que ninguna fuente aporta.

## Detalle de108metas

Fichas es conteo de IDs actuales ligados. T/P son alcance territorial/demográfico asociado, no avance del entregable. SED implícito es meta por porcentaje guardado, solo cuando existe cruce exacto único. Por cotejar requiere correspondencia manual. Cero fichas no acredita cero ejecución.

| ID | Proyecto | Meta | Unidad | Meta anual | Fichas | T | P | SED implícito |
|---|---|---|---|---:|---:|---:|---:|---:|
| 1 | QC4102 | Capacitación teórico-práctica a personas creadoras, gestoras, promotoras y productoras culturales a través de talleres para fortalecer sus capacidades en la formulación, planeación y evaluación de proyectos culturales y artísticos. | Talleres realizados | 20 | 2 | 90 | 90 | 13 |
| 2 | QC4102 | Apoyos económicos a personas físicas y morales para la producción de proyectos culturales y artísticos, en disciplinas como artes visuales, escénicas, música, arte sonoro, literatura, medios audiovisuales e interdisciplina, festivales y espacios independientes. | Proyectos culturales apoyados | 15 | 2 | 94 | 94 | 14 |
| 3 | QC4102 | Apoyos económicos para la movilidad y circulación de agentes culturales de Guanajuato en circuitos artísticos y culturales a nivel nacional e internacional. | Agentes culturales apoyados | 16 | 1 | 300 | 300 | 5 |
| 4 | QC4139 | Eventos culturales con perspectiva de género y enfoque de derechos humanos, dirigidos a mujeres, niñas, niños y adolescentes, así como a sus redes de cuidado (laboratorios, pensatorios y talleres) | Personas atendidas | 1500 | 3 | 373 | 373 | 1752 |
| 5 | QC4140 | Asistentes a Festivales de música, artes visuales, infancias, artes vivas y literatura, incluye actividades escénicas, exposiciones, talleres, conciertos o experiencias participativas, incorporando a artistas y colectivos locales y nacionales. | Asistentes y participantes de los festivales | 12500 | 39 | 6541 | 6541 | 6855 |
| 6 | QC4140 | Encuentros culturales enfocados en la formación, reflexión y profesionalización de artistas, investigadoras, creadoras, docentes, promotoras culturales, gestoras y editoras, con actividades como talleres, clases magistrales. | Asistentes y participantes de los encuentros | 6000 | 3 | 6016 | 6016 | 123 |
| 7 | QC4140 | Participación de la Secretaría de Cultura del Estado de Guanajuato en ferias y mercados culturales estratégicos como ferias nacionales de arte, encuentros de galerías o bienales con componente de mercado | Pabellones instalados | 5 | 0 | 0 | 0 | 3 |
| 8 | QC4142 | Programa literario en los 46 municipios con actividades como lecturas, talleres, círculos, presentaciones y narración oral, promoviendo la lectura, la creación comunitaria y la difusión del fondo editorial estatal en coordinación con bibliotecas, casas de cultura y escuelas | Eventos realizados | 50 | 1 | 7 | 7 | 17 |
| 9 | QC4142 | Programa expositivo estatal, mediante la circulación y montaje de contenidos visuales y patrimoniales, en espacios culturales y municipales, con exposiciones de arte contemporáneo, fotografía, gráfica y cultura regional, acompañadas de mediación, visitas comentadas y actividades educativas | Exposiciones realizadas | 40 | 0 | 0 | 0 | 11 |
| 10 | QC4142 | Programa de artes vivas en los 46 municipios, con presentaciones, talleres y procesos creativos de teatro, música, danza, narración oral y arte circense, participan agrupaciones locales, estatales e invitadas, articulada con espacios culturales y acompañada de mediación y formación comunitaria | Presentaciones realizadas | 104 | 34 | 6431 | 6431 | 140.4 |
| 11 | QC4143 | Adquisición de instrumentos musicales (percusiones) para la Banda de Música del Estado de Guanajuato | Instrumentos musicales entregados | 5 | 0 | 0 | 0 | 0 |
| 12 | QC4051 | Apoyos económicos para el desarrollo de proyectos artísticos y culturales coordinados por la Secretaría de Cultura estatal | Proyectos desarrollados | 0 | 0 | 0 | 0 | 0 |
| 13 | QC4042 | Atención a personas para conocer el Sitio Arqueológico Cañada de la Virgen en San Miguel de Allende tanto de forma presencial como por medios electrónicos. | Personas atendidas de manera presencial y virtual | 105000 | 1 | 69395 | 69395 | Por cotejar |
| 14 | QC4042 | Acciones de preservación de la zona Arqueológica Cañada de la Virgen en San Miguel de Allende. | Intervenciones realizadas | 2 | 0 | 0 | 0 | Por cotejar |
| 15 | QC4043 | Atención a personas para conocer el Sitio Arqueológico El Cóporo en Ocampo, tanto de forma presencial  como  medios a a través  de recorridos virtuales y fotografías de 360 grados además de actividades complementarias | Personas atendidas de manera presencial y virtual | 80000 | 1 | 57652 | 57652 | Por cotejar |
| 16 | QC4043 | Intervenciones para rehabilitar y preservar el Sitio Arqueológico de  El Cóporo, Ocampo, Gto. | Intervenciones realizadas | 2 | 0 | 0 | 0 | Por cotejar |
| 17 | QC4044 | Intervenciones para rehabilitar y preservar el Sitio Arqueológico de Cerro de los Remedios, Comonfort, Gto. | Intervenciones realizadas | 2 | 1 | 41 | 41 | Por cotejar |
| 18 | QC4045 | Atención a personas para conocer el Sitio Arqueológico Plazuelas en Pénjamo, tanto de forma presencial  y virtual por medios electrónicos. | Personas atendidas de manera presencial y virtual | 90000 | 1 | 68385 | 68385 | Por cotejar |
| 19 | QC4045 | Intervenciones para rehabilitar y preservar el Sitio Arqueológico de Plazuelas, Pénjamo, Gto. | Intervenciones realizadas | 2 | 0 | 0 | 0 | Por cotejar |
| 20 | QC4046 | Atención a personas para conocer el Sitio Arqueológico Peralta en Abasolo, tanto de forma presencial  y virtual por medios electrónicos. | Personas atendidas de manera presencial y virtual | 95000 | 1 | 61362 | 61362 | Por cotejar |
| 21 | QC4046 | Intervenciones para rehabilitar y preservar el Sitio Arqueológico Peralta, Abasolo, Gto. | Intervenciones realizadas | 2 | 0 | 0 | 0 | Por cotejar |
| 22 | QC4048 | Atención a personas para conocer el Sitio Arqueológico Arroyo seco en Victoria, tanto de forma presencial y por medios electrónicos | Personas atendidas de manera presencial y virtual | 45000 | 1 | 44812 | 44812 | Por cotejar |
| 23 | QC4048 | Intervenciones para rehabilitar y preservar la zona Arqueológica Arroyo seco en Victoria | Intervenciones realizadas | 2 | 0 | 0 | 0 | Por cotejar |
| 24 | QC4047 | Capacitación a alumnado en el método multinivel en Bandas Sinfónicas, Orquestas Sinfónicas y Camerata | Personas capacitadas | 1240 | 5 | 4007 | 4007 | 569 |
| 25 | QC4047 | Capacitación a alumnado en el método multinivel en ensambles corales | Personas capacitadas | 700 | 2 | 1197 | 1197 | 304 |
| 26 | QC4047 | Capacitación docente y a personas beneficiarias de ensambles representativos en temas especializados a través de la enseñanza por competencias. | Personas capacitadas | 400 | 5 | 2241 | 2241 | 120 |
| 27 | QC4049 | Rehabilitación y mantenimiento de espacios interiores y exteriores, el Claustro Mayor del ex convento Fray Juan de Sahagún, en Salamanca | Acciones realizadas | 6.3 | 0 | 0 | 0 | Por cotejar |
| 28 | QC4049 | Rehabilitación y mantenimiento de espacios interiores y exteriores, el Claustro Mayor del ex convento Fray Juan de Sahagún, en Salamanca | Acciones realizadas | 5 | 0 | 0 | 0 | Por cotejar |
| 29 | QC4049 | Programa académico del Centro de las Artes de Guanajuato, Claustro Mayor, incluye: cursos y talleres de especialización en las disciplinas de artes escénicas, visuales, plásticas, patrimonio cultural inmaterial y públicos específicos, en Salamanca | Actividades realizadas | 16 | 12 | 382 | 382 | 7 |
| 30 | QC4049 | Programa artístico del Centro de las Artes de Guanajuato en el Claustro Mayor, consistente en presentaciones de danza, teatro y música en Salamanca | Eventos realizados | 4 | 2 | 42 | 42 | 4 |
| 31 | QC4049 | Programa anual expositivo del Centro de las Artes de Guanajuato, Claustro Mayor, con exposiciones temporales de artes plásticas y de los acervos CEARG en Salamanca | Exposiciones realizadas | 3 | 4 | 8505 | 8505 | 2 |
| 32 | QC4061 | Apoyos económicos para el desarrollo de proyectos artísticos en alguna de las siguientes disciplinas: artes plásticas, danza, literatura, medios audiovisuales y alternativos, música, patrimonio cultural o teatro | Apoyos otorgados | 20 | 0 | 0 | 0 | 0 |
| 33 | QC4062 | Apoyos económicos para el desarrollo de proyectos culturales o intervenciones culturales comunitarias dirigidos a personas portadoras de la cultura popular | Apoyos otorgados | 8 | 0 | 0 | 0 | 0 |
| 34 | QC4055 | Adquisición de equipos | Equipos adquiridos | 5 | 0 | 0 | 0 | Por cotejar |
| 35 | QC4055 | Modernización de librería | Librería modernizada | 1 | 0 | 0 | 0 | Por cotejar |
| 36 | QC4055 | Equipamiento librería forum | Librería equipada | 1 | 0 | 0 | 0 | Por cotejar |
| 37 | QC4045 | Equipar con mobiliario el espacio de la librería institucional en el Fórum, para fortalecer su gestión como un foro cultural vivo, versátil y moderno | Equipamiento de librería realizado | 1 | 0 | 0 | 0 | Por cotejar |
| 38 | QC4045 | Dictamen de la convocatoria de Premio Nacional de Cuento, premiar al autor seleccionado y gestionar la publicación de texto ganador | Dictamen de la convocatoria por tres jurados para otorgar premio | 1 | 1 | 6 | 6 | Por cotejar |
| 39 | QA4095 | Proyecto Integral para la instalación del sistema de agua nebulizada y obras adicionales del sistema contra incendios en el Teatro Juárez | Metros cuadrados | 1478 | 0 | 0 | 0 | Por cotejar |
| 40 | QB4208 | Restauración de pinturas de Caballete de la capilla del Çrosario del Santuario de Jesís de Nazareno, Atotonilco, San Miguel de Allende |  | 3 | 1 | 295 | 295 | Por cotejar |
| 41 | QB4208 | Restauración de la escultura de San Cayetano de Thiene, Templo de San Cayetano, Mineral de Valenciana en Guanajuato |  | 1 | 0 | 0 | 0 | 0.2 |
| 42 | QB4208 | Conservación de los retablos del Templo de San Juan de Sahagún en Salamanca |  | 2 | 0 | 0 | 0 | Por cotejar |
| 43 | QB4208 | Restauración de la fachada principal de la Catedral Basílica de León | Metros cuadrados | 769.12 | 0 | 0 | 0 | 769.12 |
| 44 | PB3576 | Gestión para la realización de campañas de difusión de actividades culturales. | Campañas gestionadas. | 12 | 0 | 0 | 0 | 7 |
| 45 | PB3576 | Gestión para la realización de campañas de difusión Institucional. | Campañas gestionadas. | 8 | 0 | 0 | 0 | 5 |
| 46 | PB3576 | Elaboración del documento del Plan Anual de Comunicación de la Secretaría de Cultura. | Plan realizado | 1 | 0 | 0 | 0 | 1 |
| 47 | PB3575 | Cursos y talleres especializados orientados a fortalecer los factores clave para el crecimiento de las economías creativas para agentes culturales | Cursos y Talleres realizados | 5 | 0 | 0 | 0 | 0 |
| 48 | PB3575 | Colaboraciones con instituciones educativas, organismos empresariales y entidades públicas para desarrollar programas de capacitación y mentoría en los ámbitos de las economías creativas. | Colaboraciones realizadas | 10 | 0 | 0 | 0 | 0 |
| 49 | PB3575 | Encuentros temáticos de diálogo y reflexión, presenciales o virtuales, en distintos ámbitos de las economías creativas (ejemplo: diseño y moda; gastronomía y artesanías; música y artes escénicas), fomentando la generación de redes y propuestas de política pública. | Encuentros realizados | 3 | 0 | 0 | 0 | 0 |
| 50 | PB3562 | Cursos y talleres para promotores culturales e instructores de casas de la cultura | Cursos y talleres realizados | 138 | 8 | 1493 | 1493 | 72 |
| 51 | PB3562 | Talleres de educación artística y cultural no formales impartidos en casas de cultura y salones culturales | Talleres realizados | 3800 | 9 | 93101 | 93101 | 2708 |
| 52 | PB3562 | Cursos y talleres de formación lectora para bibliotecarios, niños narradores y escritores, padres de familia y promotores de lectura | Cursos y talleres realizados | 90 | 6 | 7279 | 7279 | 61 |
| 53 | PB3562 | Talleres de seguimiento a la implementación del programa curricular para la asignatura de artes en la educación básica | Talleres realizados | 20 | 1 | 0 | 0 | 0 |
| 54 | PB3562 | Capacitaciones en danza folclórica dirigido a directores, maestros y ejecutantes del estado de Guanajuato | Capacitaciones realizadas | 2 | 2 | 336 | 336 | 1 |
| 55 | PB3563 | Apoyos especiales a organismos culturales municipales | Apoyos otorgados | 92 | 4 | 1544 | 1544 | 89.5135 |
| 56 | PB3563 | Actividades colaborativas de la red de identidad cultura y memoria | Acciones realizadas | 495 | 9 | 54976 | 54976 | 139 |
| 57 | PB3563 | Visitas escolares a zonas arqueológicas y recintos culturales del estado para impulsar aprendizajes significativos en alumnos de educación básica | Visitas realizadas | 30 | 1 | 0 | 0 | 0 |
| 58 | PB3563 | Actividades de promoción y animación lectora para público en general | Actividades realizadas | 4800 | 7 | 34120 | 34120 | Por cotejar |
| 59 | PB3563 | Encuentros y capacitaciones del personal bibliotecario incorporado a la red estatal de bibliotecas públicas del estado de Guanajuato | Encuentros y capacitaciones realizadas | 20 | 6 | 393 | 393 | 140 |
| 60 | PB3564 | Proyectos culturales interinstitucionales y comunitarios dirigidos a públicos vulnerables | Proyectos realizados | 3 | 1 | 23 | 23 | 1 |
| 61 | PB3564 | Proyectos socioculturales en barrios, colonias, periferias y/o comunidades | Proyectos realizados | 1 | 0 | 0 | 0 | 0 |
| 62 | PB3564 | Encuentros de lectores y círculos de lectura para usuarios de la red estatal de bibliotecas públicas | Encuentros y círculos realizados | 95 | 6 | 1038 | 1038 | 38 |
| 63 | PB3565 | Programa y listado de asistentes al Curso taller para la difusión del patrimonio cultural de la entidad. | Curso taller realizado | 1 | 1 | 27 | 27 | 0 |
| 64 | PB3565 | Programa y listado de asistentes al Curso del Patrimonio cultural tangible del estado de Guanajuato | Curso realizado | 1 | 1 | 30 | 30 | 1 |
| 65 | PB3565 | Acta de entrega recepción de las acciones de mantenimiento menor a los inmuebles bajo el resguardo de la Secretaría de Cultura | Acciones de mantenimiento menor realizadas | 2 | 1 | 0 | 0 | 0 |
| 66 | PB3566 | Charlas y conferencias del patrimonio arqueológico del Estado de Guanajuato. | Charlas y conferencias realizadas. | 15 | 1 | 200 | 200 | 9 |
| 67 | PB3566 | Ferias de la cocina tradicional y/o de la artesanía del Estado de Guanajuato en los sitios arqueológicos en coordinación con otras instituciones privadas y de gobierno. | Ferias de la cocina tradicional y de la artesanía realizadas. | 5 | 0 | 0 | 0 | 5 |
| 68 | PB3566 | Evento de Equinoccio y/o Solsticio en los sitios arqueológicos del Estado de Guanajuato. | Equinoccio y/o Solsticios astronómicas realizados. | 5 | 0 | 0 | 0 | 5 |
| 69 | PB3566 | Talleres lúdicos interactivos para difundir el patrimonio arqueológico del Estado de Guanajuato. | Talleres lúdicos interactivos realizados | 10 | 0 | 0 | 0 | 10 |
| 70 | PB3566 | Exposiciones del patrimonio arqueológico del Estado de Guanajuato. | Exposiciones realizadas. | 15 | 0 | 0 | 0 | 9 |
| 71 | PB3567 | Cursos, talleres, y diplomados en la disciplina de las artes escénicas y multidisciplinares. Teatro, danza y artes vivas. | Cursos, talleres, diplomados realizados | 4 | 11 | 440 | 440 | 3 |
| 72 | PB3567 | Cursos, talleres, y diplomados en la disciplina de las artes plásticas, sobre distintas técnicas del grabado | Cursos, talleres, diplomados realizados | 5 | 4 | 290 | 290 | 2.5 |
| 73 | PB3567 | Cursos, talleres, y diplomados en patrimonio cultural inmaterial, sobre territorio y comunidad. | Cursos, talleres, diplomados realizados | 2 | 9 | 585 | 585 | 0 |
| 74 | PB3567 | Cursos, talleres, y diplomados en los distintos ámbitos de la gestión cultura. Gestión de recursos y elaboración de proyectos. | Cursos, talleres, diplomados realizados | 2 | 2 | 52 | 52 | 4 |
| 75 | PB3567 | Cursos, talleres, y diplomados en la disciplina de las artes visuales, digitales y sonoras. Cine y sonorización. | Cursos, talleres, diplomados realizados | 10 | 8 | 270 | 270 | 15 |
| 76 | PB3567 | Exposiciones temporales en distintas disciplinas artísticas. | Exposiciones realizadas | 3 | 3 | 3151 | 3151 | 3 |
| 77 | PB3567 | Presentaciones artísticas de teatro, música y danza, editoriales, conversatorios, conferencias y charlas | Presentaciones realizadas | 35 | 13 | 1193 | 1193 | 36.75 |
| 78 | PB3567 | Cursos y talleres de iniciación artística para infantes y adolescentes. Artes plásticas, teatro, danza y arte popular. | Curso y talleres artísticos realizados | 20 | 4 | 236 | 236 | 20 |
| 79 | PB3567 | Residencias, Laboratorios, tutorías de cruces disciplinares de la experimentación e investigación artística. Artes vivas. | Laboratorios y residencias artísticas realizadas | 2 | 2 | 56 | 56 | 2 |
| 80 | PB3568 | Concursos realizados que promuevan a los creadores, artesanos y portadores de saberes con apoyos | Concursos realizados | 12 | 5 | 383 | 383 | 3 |
| 81 | PB3568 | Curso o taller de apoyo a los creadores y artesanos de arte popular | Curso o taller realizado | 2 | 1 | 11 | 11 | 1 |
| 82 | PB3568 | Exposiciones muestra de arte popular | Exposiciones muestra realizadas | 5 | 1 | 102 | 102 | 1.25 |
| 83 | PB3574 | Actividades de artes vivas y eventos culturales en el estado de Guanajuato. | Actividades realizadas | 60 | 153 | 38756 | 38756 | 57 |
| 84 | PB3574 | Circulación de creadores y artistas guanajuatenses en el país y el extranjero. | Circulación de creadores y artistas guanajuatenses | 4 | 0 | 0 | 0 | 0 |
| 85 | PB3569 | Conciertos de la Banda de Música del Estado de Guanajuato en municipios del estado. | Conciertos | 35 | 24 | 20132 | 20132 | 35 |
| 86 | PB3570 | Equipos de apoyo de gobierno del estado coordinados para las actividades operativas y de logistica encaminadas a la realización del festival | Equipos de apoyo coordinados | 18 | 0 | 0 | 0 | 12 |
| 87 | PB3573 | Participación en ferias de libro nacionales e internacionales | Ferias de libros en las que se participa | 4 | 0 | 0 | 0 | 2 |
| 88 | PB3573 | Actividades de promoción y difusión de productos editoriales de manera presencial como son presentaciones de libros en diferentes municipios. | Presentaciones realizadas | 92 | 51 | 2157 | 2157 | 38 |
| 89 | PB3573 | Encuentros profesionales de la cadena del valor del libro. | Encuentros realizados | 2 | 2 | 628 | 628 | 2 |
| 90 | PB3573 | Foro virtual de libro con invitados nacionales e internacionales | Foro realizado | 1 | 1 | 5969 | 5969 | 1 |
| 91 | PB3572 | Exposiciones permanentes y la producción de exposiciones temporales de los museos adscritos a la Secretaria de Cultura de Guanajuato | Número de Exposiciones inauguradas | 28 | 36 | 92740 | 92740 | 17 |
| 92 | PB3572 | Creación y participación en actividades formativas y académicas de los museos adscritos a la Secretaria de Cultura | Número de Actividades realizadas | 800 | 920 | 28977 | 28977 | 1438 |
| 93 | PB3572 | Participación de artistas en las actividades extramuros en municipios del Estado de Guanajuato | Número de Actividades realizadas | 10 | 21 | 234583 | 234583 | 9 |
| 94 | PB3572 | Creación de actividades para poblaciones especificas como mujeres, niños y niñas, adultos mayores y discapacidad en los Museos adscritos a la Secretaria de Cultura | Número de Actividades realizadas | 12 | 54 | 1314 | 1314 | 11 |
| 95 | PB3572 | Mantenimiento de los museos adscritos a la Secretaria de Cultura | Reportes de mantenimiento realizado | 4 | 0 | 0 | 0 | 0 |
| 96 | PB3571 | Programa anual de actividades artísticas y culturales de la Dirección General del Forum | Programa realizado | 1 | 0 | 0 | 0 | 1 |
| 97 | PB3571 | Actividades artísticas y culturales: escénicas, comunitarias, incluyentes, formativas, extramuros de la Dirección General del Forum durante el año | Actividades realizadas | 70 | 124 | 62800 | 62800 | 79 |
| 98 | PB3571 | Actividades públicas y privadas realizadas en el Forum, solicitadas por terceros | Actividades realizadas | 30 | 0 | 0 | 0 | 29 |
| 99 | PB3571 | Mantenimiento preventivo y correctivo a la infraestructura y equipos de la Dirección General del Forum para su correcto funcionamiento | Mantenimiento Preventivo y Correctivo Realizado | 1 | 0 | 0 | 0 | 0 |
| 100 | QC4039 | Instalación de un elevador para los usuarios y personal de la | Elevador instalado | 2 | 0 | 0 | 0 | 0 |
| 101 | QC4098 | Talleres de escritura creativa dirigidos a personas privadas de la libertad en los CEPRERESOS del estado de Guanajuato | Talleres realizados | 9 | 0 | 0 | 0 | 2 |
| 102 | QC4098 | Talleres de música dirigidos a personas privadas de la libertad en los CEPRERESOS del estado de Guanajuato | Talleres realizados | 9 | 0 | 0 | 0 | 3 |
| 103 | QC4098 | Talleres de pintura, cartonería y talla en madera dirigidos a personas privadas de la libertad en los CEPRERESOS del estado de Guanajuato | Talleres realizados | 19 | 0 | 0 | 0 | 9 |
| 104 | QC4098 | Talleres de danza folclórica y ritmos latinos dirigidos a personas privadas de la libertad en los CEPRERESOS del estado de Guanajuato | Talleres realizados | 12 | 0 | 0 | 0 | 2 |
| 105 | QC4098 | Talleres de teatro dirigidos a personas privadas de la libertad en los CEPRERESOS del estado de Guanajuato | Talleres realizados | 12 | 0 | 0 | 0 | 5 |
| 106 | QC4060 | Capacitación y formación musical profesional o de extensión a niñas, niños, adolescentes, jóvenes y maestros mediante un programa académico del Conservatorio de Música de Celaya | Personas capacitadas y formadas en el ámbito musical | 1120 | 0 | 0 | 0 | 492 |
| 107 | QC4060 | Realización de audiciones públicas por parte de los estudiantes del Conservatorio de Música de Celaya | Audiciones realizadas | 50 | 0 | 0 | 0 | 40 |
| 108 | QC4060 | Presentación de conciertos estatales, nacionales e internacionales por parte de los estudiantes del Conservatorio de Música de Celaya | Conciertos realizados | 20 | 0 | 0 | 0 | 10 |

## Fuentes y verificación

DB original leída con API nativa el17/11/2026, actividades A:R, territorio A:L, población A:H y catálogo A:R. Fuente SED: archivos_base/Avance metas (1).xlsx,109filas incluida cabecera. DGVDC nuevo y formulario de faltantes en carpeta personal. Informes de carga29oct, respuestas3nov y auditorías12nov usados como antecedentes, diferenciados de lectura actual. No se probaron permisos de evidencias ni despliegue remoto. No se realizaron cambios de lógica ni pruebas de código por tratarse de auditoría documental.

