# Carga propuesta de Soraya Villegas: enero–septiembre 2026

El archivo conserva las cuatro hojas operativas y el orden de columnas de la base. Está normalizado con los datos disponibles; tiene pendientes de clasificación y cifras de origen que deberán revisarse. No se modificaron los originales ni se realizó una carga en el sistema.

De 692 filas con actividad en ocho pestañas, se prepararon **292 registros nuevos propuestos**. Se apartaron **383 coincidencias de nombre y fecha con registros existentes** y **17 filas con fecha inválida o fuera de enero–septiembre de 2026**. No se declara que todas las coincidencias sean duplicados: se deben comparar sede, grupo, periodo y cantidades antes de decidir si requieren actualización o un registro distinto.

Usuario de todas las actividades nuevas: **ssvillegas@guanajuato.gob.mx**, por indicación de Luis. La pestaña y la fila de origen se conservan en este control. Los IDs y folios se verificaron contra la base local actualizada y contra el lote de Marcelina ya cargado.

## Antes de pegar

- Revisar los pendientes de meta, fechas y selecciones múltiples indicados abajo. Un campo vacío no significa «No» ni «No aplica».
- Las filas con posibles coincidencias ya capturadas no están en el lote para pegar. No pegarlas de nuevo desde el archivo fuente.
- El libro también contiene 62 filas que repiten nombre, fecha y sede de otra fila nueva. Se conservaron porque pueden corresponder a grupos distintos, especialmente visitas guiadas. Revisarlas en el apartado de coincidencias internas antes de sumar o fusionar actividades.
- Hacer respaldo de la base y probar primero una actividad con sus registros asociados. Pegar una sola vez, solo valores, sin encabezados, desde la primera fila libre de cada hoja. Primero actividades, después territorio, población y evidencias. No reemplazar filas existentes.

## Rangos para copiar

| Hoja | Rango sin encabezado | Registros |
|---|---|---:|
| Registro_Actividades | A2:BN293 | 292 |
| Registro_Territorio | A2:L293 | 292 |
| Registro_Poblacion | A2:H278 | 277 |
| Regitro_Evidencia | A2:E77 | 76 |

## Qué se conservó y qué se completó

- Una fila reportada se conserva como un registro; N. de sesiones se traslada a Total_Sesiones. No se usa como multiplicador de actividades o asistentes. Una actividad de varias sesiones no se divide en actividades ficticias.
- Se respetan las columnas diferentes de cada pestaña. Anny, OscarEric y Julio C. tienen desplazamientos de columnas que se identificaron por sus encabezados.
- Fechas de Excel y textos inequívocos se normalizan. Se corrigieron únicamente separaciones de escritura como «demayo», «juli o» y una barra ausente en «18/072026»; se conservan sin resolver años incorrectos y fechas ambiguas. No se importó octubre.
- Las metas se relacionan por clave y descripción con el catálogo actual. No se asigna una meta por defecto cuando falta correspondencia.
- Disciplina se obtiene de una subdisciplina identificada con correspondencia única. Selecciones múltiples no se convierten automáticamente en «Interdisciplinario». Gestión cultural tiene más de una disciplina en el catálogo y se señala cuando no se puede resolver.
- Acciones PG/PEC y Promesas múltiples permanecen pendientes cuando el sistema requiere una sola selección. No se escogió la primera arbitrariamente. Se conservaron los textos completos de origen para que el área indique la opción principal.
- Los totales territoriales y demográficos, participación y acceso se conservan aunque difieran. Un vacío no se transforma en cero. Solo se dedujo cero en el otro componente cuando participación o acceso ya igualaba al total informado.
- Listas de edades o géneros sin cantidades no se reparten ni se suman de nuevo. Se utiliza Población General/Dato global cuando el total no tiene desglose cuantitativo compatible. Los datos originales se conservan en el control.
- La marca genérica de zona prioritaria no identifica si corresponde a Nuevo Comienzo o SSyP: esos campos no se inventan. Comunidades no identificadas en catálogo permanecen en texto como Otra_Comunidad cuando la fuente las especifica.
- Se trasladan enlaces de evidencia proporcionados por el área, sin afirmar que se haya validado su contenido o sus permisos de acceso. Un enlace puede apuntar a una carpeta compartida por varias actividades.
- Descripcion_Breve se limita a 200 caracteres; la descripción completa sigue disponible en la fuente y en el control de este lote.

## Campos pendientes en las actividades propuestas

| Campo | Registros sin completar |
|---|---:|
| Clave_Proceso | 5 |
| Disciplina | 12 |
| Subdisciplina | 11 |
| Acciones_PG | 34 |
| Promesa_NC | 49 |
| Acciones_PEC | 88 |
| Fecha_Fin | 2 |
| Total_Sesiones | 1 |

## Distribución por pestaña de origen

| Equipo / pestaña | Registros nuevos propuestos |
|---|---:|
| DiegoDiana | 6 |
| RenataThania | 8 |
| LauraGuias | 117 |
| OscarEric | 4 |
| MajoMari | 5 |
| Anny | 90 |
| Pablo B. | 54 |
| Julio C. | 8 |

## Filas apartadas para revisar

| Pestaña | Fila | Actividad | Motivo / referencias existentes |
|---|---:|---|---|
| DiegoDiana | 4 | Museos para la niñez: Torneo de Rubik | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00017 |
| DiegoDiana | 5 | Museos para la niñez: Proyectos Kamalio y Orquesta Ensamble Da Capo | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00018 |
| DiegoDiana | 6 | Museos para la niñez: Magic Mind para la niñez. Meditación | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00019 |
| DiegoDiana | 7 | Museos para la niñez: Cómo visitar un museo para niños | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00020 |
| DiegoDiana | 9 | Musos para la niñez: Misión Olimpo y un poco de IA | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00022 |
| DiegoDiana | 10 | Encuentro de Danza Guanajuato | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00023 |
| DiegoDiana | 11 | Museos para la niñez: "Donde nacen los sueños" Ballet infantil | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00024 |
| DiegoDiana | 12 | Palabras Umbral, Palabrasfilo. Hilandera: Flor Bosco. "Bajo el signo de Saturno. Adivinación en el arte" | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| DiegoDiana | 13 | Entre medios y a través de. Diálogos con Miguel Mesa."Habitar ése bosque. Camila Apaez y Miguel Mesa" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00026 |
| DiegoDiana | 14 | Museo en Escena. Encuentro Arte Guanajuato | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00027 |
| DiegoDiana | 15 | Libro de Zona 102. Festival FELIZ. Región III, sector 03 y Zona 102. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00028 |
| DiegoDiana | 16 | Conferencia: Hipnosis y Estados Alterados de Consciencia. Presenta: Ramón Iturbide."Bajo el signo de Saturno. Adivinación en el arte" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00029 |
| DiegoDiana | 17 | Conferencia: Tarot como camino del autoconocimiento. Presenta: Alejandra del Castillo Negrete. "Bajo el signo de Saturno. Adivinación en el arte" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00030 |
| DiegoDiana | 20 | Mago Melchor: Arte, magia, esoterismo y disidencia sexual. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSM43229 |
| DiegoDiana | 21 | Gestión de la Cultura y poblaciones LGBTI+ | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCBC60407 |
| DiegoDiana | 22 | Sitios arqueológicos de Léon. Nuevas Investigaciones | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOE58638 |
| DiegoDiana | 23 | Presentación editorial del proyecto Sueños ARV | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQQ30458 |
| DiegoDiana | 24 | Concierto para papá | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCGL39605 |
| DiegoDiana | 25 | Taller mini encuadernación de libros | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCWD48387 |
| DiegoDiana | 27 | Grandiosa | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIE30645 |
| DiegoDiana | 28 | Presentación del catálogo de la exposición Bajo el Signo de Saturno. Adivinación en el arte" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZY20708 |
| DiegoDiana | 29 | Presentación editorial "Querida Inés. La herencia que no se pudo mirar ni se quiso mirar. Biodecodificación y Constelaciones". | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCPR20785 |
| DiegoDiana | 32 | Taller de Tarot Fotográfico Crea tu propio arcano. Imparten: Eduardo Gómez y Daniel Arróniz | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZA06114 |
| DiegoDiana | 33 | Conferencia Carta Bazi y Feng Shui | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLR62190 |
| DiegoDiana | 34 | Conferencia El Tarot como herramienta creativa: Símbolos, Arquetipos y Azar en la creación de narrativas en el Arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNH26698 |
| DiegoDiana | 35 | Lectura performática De lo espiritual en diálogos literarios. El revés de la imagen. Espacios Incidentales. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCYI20383 |
| DiegoDiana | 36 | Coros del Valle de Señora. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHW41152 |
| DiegoDiana | 37 | Lectura performática. Espacios indicentales. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCXE00182 |
| DiegoDiana | 38 | El Diseño en el tarot. Historia, arte y ocultismo. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCGP32952 |
| DiegoDiana | 39 | El espiritismo seduce a Francisco I. Madero. Presenta la autora: Yolia Tortolero Cervantes | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLX68215 |
| DiegoDiana | 40 | Las 7 luminarias y las constelaciones | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLU07350 |
| DiegoDiana | 41 | Runas y sabiduría nórdica. El lenguaje simbólico del norte como puente entre historia, mito y conciencia. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKY29214, ACT-SCUI68875 |
| DiegoDiana | 42 | Conversatorio La importancia de la imagen Butoh. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCTW29397 |
| DiegoDiana | 43 | Segundo Encuentro de Danza Butoh | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKY93862 |
| DiegoDiana | 44 | Apertura de la exposición efímera Luz Abisal | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCEV33562, ACT-SCYH28131 |
| DiegoDiana | 45 | Espacio Incidental La Prudencia | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZJ24932 |
| DiegoDiana | 46 | Espacios incidentales. Coros Voces del Alma y Acordes del Corazón | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCUF24467 |
| DiegoDiana | 47 | Proyección de Cortometraje "La Galereña", Concierto del Coro AJUG, Charla: Panoramas, perspectivas de la vida, Exposición efímera de los talleres de dibujo y pintura de los talleres AJUG. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCYM51625 |
| DiegoDiana | 48 | Activación Sonora con Miguel Meza. De la exposición Habitar ése Bosque. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZY58450 |
| DiegoDiana | 49 | 4° Festival de Cine de la Otredad. Muestra de Visuales | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJY84263 |
| RenataThania | 7 | Exposición: La Sangre de Ella. Altar de Dolores por Ana Karen Gómez | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCGD31598 |
| RenataThania | 15 | Inauguración de exposiciones: Programa de Artes Visuales de la edición 54 del festival Internacional Cervantino | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| RenataThania | 16 | Exposición: Escenario Plegable: entre bípedos y cuadrúpedos. Cosa Rapozo y Exposición: Terra Nova. Pintura de Paisaje en la colección BBVA | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| RenataThania | 17 | Exposición: RE/vuelta. Héctor Zamora | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| LauraGuias | 6 | Collage del arcano mayor | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQI25133 |
| LauraGuias | 7 | Móvil cósmico | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCQ09985 |
| LauraGuias | 8 | Topoto estelar | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVH91156 |
| LauraGuias | 9 | El futuro en la palma de tu mano | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLB21945 |
| LauraGuias | 10 | Sound Hill | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJB27190 |
| LauraGuias | 23 | NOCHE DE MUSEOS | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCID84291, ACT-SCJW65154 |
| LauraGuias | 28 | EL LIBRO COMO TERRITORIO ARTÍSTICO | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCBV35787 |
| LauraGuias | 29 | Programa día internacional de los museos, Rally y tendedero | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCG56880 |
| LauraGuias | 44 | Fotografía espírita | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCXN37407 |
| LauraGuias | 45 | Retrato de Lupe Marín "Pitonisa" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVB95206 |
| LauraGuias | 46 | Collage de Kandisky | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCEP49266 |
| LauraGuias | 47 | Dibujo de Roberto Montenegro | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCWB71791 |
| LauraGuias | 54 | BACHILLERATO INVERNA GUANAJUATO | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| LauraGuias | 56 | CENTRO FOX | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| LauraGuias | 57 | LIBRE | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| LauraGuias | 71 | NOCHE DE MUSEOS | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLF83323 |
| LauraGuias | 72 | NOCHE DE MUSEOS | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLF83323 |
| LauraGuias | 84 | ART VENTURA | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAH55092 |
| LauraGuias | 85 | TALLER DE VERANO ARTE Y CREATIVIDAD | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNU32492 |
| LauraGuias | 87 | Ciclo de cine "La montaña sagrada" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJI40826 |
| LauraGuias | 88 | Ciclo de cine "VALERY" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQP93296 |
| LauraGuias | 92 | Plastas del paraíso. Un verano en el museo | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRN39622 |
| LauraGuias | 93 | Esgrafiado de saturno. Un verano en el museo | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMN07435 |
| LauraGuias | 96 | Lectura dramatizada de oráculos griegos | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCYI34868 |
| LauraGuias | 97 | Lectura dramatizada de oráculos griegos | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLZ98766 |
| LauraGuias | 98 | Rompecabezas del arcano mayor | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOJ18223, ACT-SCLW62426 |
| LauraGuias | 100 | CIPEC | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| LauraGuias | 149 | Carretilla de cuarzo | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCDB57542 |
| LauraGuias | 151 | El grito geométrico | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSM54851 |
| LauraGuias | 152 | Mural Veneciano | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJG05812 |
| LauraGuias | 153 | Arte Objeto en el grabado | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKS19373 |
| OscarEric | 6 | Juguetes típicos en estampa alternativa | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00031 |
| OscarEric | 7 | Juguetes típicos en estampa alternativa | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00032 |
| OscarEric | 8 | Derechos de los niños y niñas | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00033 |
| OscarEric | 9 | Acoso Escolar | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00034 |
| OscarEric | 10 | Sana Convivencia | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00035 |
| OscarEric | 11 | Tarjeta Española para Mamá | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00036 |
| OscarEric | 13 | 1EEM "Diálogos de Museos y política pública" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00038 |
| OscarEric | 14 | 1EEM "Vámonos conociendo" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00039 |
| OscarEric | 15 | 1 EEM "Conferencia comunidades y museos" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00040 |
| OscarEric | 16 | 1 EEM "Conociendo los museos de Guanajuato. Sesion de PechaKucha" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00041 |
| OscarEric | 17 | 1 EEM " Conferencia el diseño de exhibiciones" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00042 |
| OscarEric | 18 | 1 EEM " ¿Qué somos Y qué tenemos en común? | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00043 |
| OscarEric | 19 | 1 EEM " Conferencia Las redes sociales, un campo abierto a la comunicación e los emprendimientos culturales" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00044 |
| OscarEric | 20 | 1 EEM " Conversatorio los retos de la comunicación y la mediación de los museos" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00045 |
| OscarEric | 21 | 1 EEM "Conferencia reflexiones sobre la educación en museos" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT00046 |
| OscarEric | 22 | Exposicion "Fragmentos y complicidades" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSI98628 |
| OscarEric | 23 | Exposicion "Homo videns" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRP99464 |
| OscarEric | 25 | Arte en tu plaza Exposicion "Fragmentos y Complicidades" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKK48572 |
| OscarEric | 26 | Arte en tu plaza Exposición "Homo Videns" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVW61936 |
| OscarEric | 27 | Activación Arte en tu plaza Activación "Fragmentos y complicidades" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZL12704 |
| OscarEric | 28 | Activación Arte en tu plaza Activación "Homo Videns" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIW12431 |
| OscarEric | 29 | Activación Arte en tu plaza Activación "Homo Videns" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKP18157 |
| OscarEric | 30 | Activación Arte en tu plaza Activación "Homo Videns" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJN51368 |
| OscarEric | 31 | El museo a la vuelta de tu casa Purísima "Taller de cartonería mascaras de nuestra cultura" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCPE48487 |
| OscarEric | 32 | Activación Arte en tu plaza Activación "Homo Videns" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFP85411 |
| OscarEric | 33 | CONVOCATORIA [COLab] 2026 | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVR60755 |
| OscarEric | 35 | Arte en tu Plaza exposicion" Homo Videns" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCTR14537 |
| OscarEric | 36 | Activación de la exposición "Homo Videns" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJY66694 |
| OscarEric | 38 | Premio Cultura Investiga Categoría Historia de Guanajuato 2026 | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNM26421 |
| OscarEric | 39 | Premio Cultura Investiga Categoría Artes Visuales en Guanajuato 2026 | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIV93284 |
| OscarEric | 40 | Arte en tu Plaza exposicion "Fragmentos y Complicidades" municipio de Silao de la Victoria | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOV13911 |
| OscarEric | 41 | Arte en tu Plaza exposicion "Homo Videns" municipio de Comonfort | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCEF46739 |
| OscarEric | 42 | Activación de la exposicion "Homo Videns" municipio de Comonfort | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCDJ57410 |
| OscarEric | 43 | Taller de formación "Marca personal y Redes Sociales" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRV11027 |
| OscarEric | 44 | Festival de Arte Urbano Guanajuato 2026 "Uriangato" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCS95646 |
| MajoMari | 8 | Noche de Museos. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCID84291, ACT-SCJW65154 |
| MajoMari | 11 | Exposición: En busca de lo imposible. 200 años de la relación diplomática entre México y Francia | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| MajoMari | 12 | Exposición: Jesús Martínez. Tazos y papel | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| MajoMari | 13 | Exposición: Vistas de Guanajauto. Manuel Leal | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| MajoMari | 14 | Exposición: Del hilo a la trama. Julien Devaux | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| MajoMari | 15 | Exposición: FFIEL Postales de León 2026 | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| Anny | 6 | Compilación Viernes de Dolores en Guanajuato | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCYJ01916 |
| Anny | 7 | Cuentacuentos: Luis Long, el arquitecto del tiempo | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHP41657 |
| Anny | 8 | Taller familiar de barro | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCXD05649 |
| Anny | 9 | Tradición cerámica en Guanajuato | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQF07472 |
| Anny | 10 | Talleres en el Día Mundial del Arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNJ91361 |
| Anny | 11 | Recital de guitarra en el Día Mundial del arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNO77641 |
| Anny | 12 | Recorrido guiado en Día Mundial del arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCEB55079 |
| Anny | 13 | Me conozco y me quiero | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAN56678 |
| Anny | 15 | La escuela al Museo | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFI49355 |
| Anny | 16 | Cuentos al piano | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJD19095 |
| Anny | 17 | Circulo de lectura escritura para niños, niñas y adolescentes | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZZ10210 |
| Anny | 18 | Museos desde la primera infancia | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCGV04211 |
| Anny | 19 | Inauguración de la exposición: Poética del paisaje | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMY03003, ACT-SCEV02279 |
| Anny | 20 | Noche misteriosa en los museos. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKO16141 |
| Anny | 21 | Me conozco y me quiero | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJC28810 |
| Anny | 22 | Cine para niños y niñas | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCWL91147 |
| Anny | 23 | Recital infantil | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFA11501 |
| Anny | 24 | Clap, clap, clap, al compás del Museo. Presentación de Danza | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSV85618, ACT-SCQV21814 |
| Anny | 25 | Clap, clap, clap, al compás del Museo. Presentación de Danza | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSV85618, ACT-SCQV21814 |
| Anny | 26 | Clap, clap, clap, al compás del Museo. Conferencia | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVO74171 |
| Anny | 27 | Inauguración de la exposición: Manuel Álvarez Bravo, los años decisivos | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCUZ80082, ACT-SCVU78547 |
| Anny | 28 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRE54917 |
| Anny | 29 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJS28324 |
| Anny | 30 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQW88822 |
| Anny | 31 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCGF02574, ACT-SCDO56831 |
| Anny | 32 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCGF02574, ACT-SCDO56831 |
| Anny | 33 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCID52619 |
| Anny | 34 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFY90265, ACT-SCRR27760 |
| Anny | 35 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFY90265, ACT-SCRR27760 |
| Anny | 36 | Visita guiada UVEG Telebachillerato Comunitario León Ramillete | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAF80267 |
| Anny | 37 | Visita guiada Instituto Tecnológico Superior de Irapuato | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCR74811 |
| Anny | 38 | Visita guiada Universidad de Guanajuato (Facultad de Arquitectura) | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFB28687 |
| Anny | 39 | Visita guiada Pedro Poveda Funddé | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLN82017 |
| Anny | 40 | Visita guiada Pedro Poveda Funddé | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLN82017 |
| Anny | 41 | Visita guiada INGENIERO Ponciano Aguilar | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOL36987 |
| Anny | 42 | Visita práctica escolar | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCPT13660 |
| Anny | 43 | Visita práctica escolar | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJK83217 |
| Anny | 44 | Joint, Museos+Fanzines | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAP74839 |
| Anny | 45 | Visita escolar Secundaria Benito Juárez | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZY13401 |
| Anny | 46 | Taller de lectoescritura: Cada cabeza es un mundo | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSH02504 |
| Anny | 47 | Visita práctica escolar. Sesión de dibujo UG | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZG64402 |
| Anny | 48 | Visita escolar Secundaria Benito Juárez | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRW57264 |
| Anny | 49 | Florilegio de mayo, peregrinaciones a Nuestra Señora de Guanajuato | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRO46689 |
| Anny | 50 | Cuentacuento: La gran campana | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCWW16326 |
| Anny | 51 | Visita guiada Gerontológico Salamanca | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSX44941 |
| Anny | 52 | Rumbo al festival del piano | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMS43271 |
| Anny | 53 | Transmisión Radio UG EL DADO | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCPY84321 |
| Anny | 54 | Los de afuera, presentación musical - visual urbana | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCK59938 |
| Anny | 55 | Inauguración: ¡Moda hoy! Diseño de moda latinoamericanx y latinx | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHE27788 |
| Anny | 56 | Ecos, Tolula, música y danza. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQN89526 |
| Anny | 58 | Obra en análisis: observando el poder en El fusilero Marino. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZI86402 |
| Anny | 59 | Transmisión Radio UG | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHH09885 |
| Anny | 60 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAZ01656 |
| Anny | 61 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKW17009 |
| Anny | 62 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKW17009 |
| Anny | 63 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCB66394 |
| Anny | 64 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVT09644 |
| Anny | 65 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRN21273, ACT-SCQL83167, ACT-SCMZ54375 |
| Anny | 66 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRN21273, ACT-SCQL83167, ACT-SCMZ54375 |
| Anny | 67 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRN21273, ACT-SCQL83167, ACT-SCMZ54375 |
| Anny | 68 | Visita guiada Esc. TVC Bachillerato Loma de Yerbabuena | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVP20410 |
| Anny | 69 | Visita guiada Esc. Pri. Aquiles Serdán | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCWC72951 |
| Anny | 70 | Visita práctica escolar. Sesión de dibujo UG | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOJ61319 |
| Anny | 71 | Concierto de la Orquesta Sinfónica Infantil del Departamento de Música y Artes Escénicas | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQS70160 |
| Anny | 72 | Jornada: Miguel Cabrera | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQP56334 |
| Anny | 73 | Palabrasumbral, palabrasfilo. Lectura de poesía. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCWW65984 |
| Anny | 74 | Reescribir el paisaje. Taller de lectoescritura a partir de la exposición Poética del Paisaje | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKC43099 |
| Anny | 75 | Museum week: Sembrar la paz: taller de creación colectiva a partir de “Sembrador de pájaros" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJK78780 |
| Anny | 76 | Danzón, patrimonio vivo, clases de baile. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCTN33043 |
| Anny | 77 | Diversión en los museos: Concierto Postransducción | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFT66371 |
| Anny | 78 | Taller de Flauta nativa | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCDW48745 |
| Anny | 79 | Puesta en escena | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCXA58208 |
| Anny | 80 | Inauguración exposición Eterno Femenino | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCGA50478 |
| Anny | 81 | Conferencia Imágenes para la paz | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJT61532 |
| Anny | 82 | Conversatorio con las artistas: Mujeres en el territorio, encuentros situados. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAI04033 |
| Anny | 83 | Callejón del arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMS48317 |
| Anny | 84 | Inauguración: De Japón a Antequera. Gráfica de Maestros Japoneses en Oaxaca | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLH69157 |
| Anny | 86 | Dibujar como grabar: línea, trama y paisaje | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCBK14914 |
| Anny | 87 | Viernes libre de clases ¡al museo! “Colores de la naturaleza: pintando como Olga Costa” | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVL27603 |
| Anny | 88 | Desorientadxs: el arte de la resistencia. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCEH72319 |
| Anny | 93 | Visita guiada a alumnos de la Universidad de Guanajuato. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJX43524 |
| Anny | 94 | Visita guiada para el grupo amigos de la naturaleza y el arte. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCBY16288 |
| Anny | 95 | Visita guiada a grupo de Asociación de amigos del Museo Regional de Guanajuato Alhondiga de Granaditas (TURNO 512) | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRY05562 |
| Anny | 96 | Danzón, patrimonio vivo, clases de baile. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCEE03529 |
| Anny | 97 | MCDR Lectura de poesía: Poética del paisaje: entre pinceladas y versos de Carlos Pellicer. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNV66062 |
| Anny | 99 | Danzón, patrimonio vivo, clases de baile. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQN00282 |
| Anny | 100 | Recorrido guiado Casa Mata | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHU10776 |
| Anny | 101 | Conversatorio: De la máquina a la marca, ¿cómo dejó de coser para otros y empiezo lo mío? | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIW82641 |
| Anny | 102 | Taller: Verbalizar el río. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCTW87174 |
| Anny | 103 | Danzón, patrimonio vivo, clases de baile. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMI23044 |
| Anny | 104 | Viaje sonoro, de la antigüedad a nuestros tiempos. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRK24440 |
| Anny | 105 | Danzón, patrimonio vivo, clases de baile. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAS85845 |
| Anny | 106 | Recorrido Eterno Femenino | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNF45811 |
| Anny | 109 | Coloquio Frida Kahlo y Diego Rivera: estudios críticos, perspectivas y relecturas contemporáneas. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIT34845 |
| Anny | 110 | Taller: Intervención en sombreros de palma de San Francisco del Rincón | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCML75018 |
| Anny | 111 | San Pancho vs Milán: ¿El Sombrero Guanajuatense en la cabeza del mundo? | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHK67760 |
| Anny | 112 | Talleres familiares de verano: Realismo mágico en Cianotipia | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAX15944 |
| Anny | 113 | Talleres familiares de verano: Realismo mágico en Cianotipia | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCDT56541 |
| Anny | 114 | Curso de verano: Laboratorio de cartoneria | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFC55475 |
| Anny | 115 | Recorrido Eterno Femenino | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOW93048 |
| Anny | 116 | Recorrido Eterno Femenino | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCL84222 |
| Anny | 117 | Verano en el museo: Recorrido por Poética del paisaje y Manuel Álvarez Bravo, los años decisivos | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSL55418 |
| Anny | 118 | Verano en el museo: Recorrido por ¡Moda hoy! Diseño latinoamericanex y latinex | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMG26633 |
| Anny | 120 | Verano en el museo: Recorrido por ¡Moda hoy! Diseño latinoamericanex y latinex | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCBR91119 |
| Anny | 132 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOL16601 |
| Anny | 134 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHN23680, ACT-SCND30007 |
| Anny | 135 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHN23680, ACT-SCND30007 |
| Anny | 142 | Callejón del arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMH52052 |
| Anny | 143 | Taller de inclusivo: El paisaje entre las manos. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCDR96816 |
| Anny | 144 | Talleres familiares de verano: Paisajes que cuentan historias. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHD32027 |
| Anny | 145 | Talleres familiares de verano: Paisajes que cuentan historias. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCTH51490 |
| Anny | 146 | Recorrido guiado CIPEC | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNE08864 |
| Anny | 147 | Taller. Escribir la vida: el diario como memoria y expresión | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIS40701 |
| Anny | 148 | Talleres familiares de verano: Paisajes que cuentan historias. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSC14496 |
| Anny | 149 | Recorrido especial Consulado de Japón | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOF01844 |
| Anny | 150 | Talleres familiares de verano: Paisajes que cuentan historias. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIP21079 |
| Anny | 151 | Talleres familiares de verano: Paisajes que cuentan historias. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFB30098 |
| Anny | 152 | Talleres familiares de verano: Paisajes que cuentan historias. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCUX59265 |
| Anny | 153 | Callejon del arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOA06513 |
| Anny | 154 | Espacios incidentales: Barroco, tango y silencio | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSO91081 |
| Anny | 155 | Activación interdisciplinar: Moda hoy, ayer y mañana. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNK13055, ACT-SCJS75643 |
| Anny | 156 | Activación interdisciplinar: Moda hoy, ayer y mañana. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCTU54508 |
| Anny | 157 | Talleres familiares de verano: Paisajes que cuentan historias. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNV23326 |
| Anny | 158 | Activación interdisciplinar: Moda hoy, ayer y mañana. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKX77224 |
| Anny | 159 | Talleres familiares de verano: Paisajes que cuentan historias. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHN00336 |
| Anny | 160 | Visita guiada: Eterno Femenino. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCGN42034, ACT-SCEG52588 |
| Anny | 161 | Conferencia Poética del Paisaje | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSV41561 |
| Anny | 162 | Taller “Una mañana de verano en el jardín de Olga Costa” | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQW89910 |
| Anny | 163 | Cuentacuentos: Tlali Nantli | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAC96318 |
| Anny | 164 | Taller: El arte del rapacejo / empuntado el rebozo de Uriangato | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAS88315 |
| Anny | 165 | Conversatorio: ¿Quién hereda el taller de rebozo? | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNW78674 |
| Anny | 166 | Capacitación Trastorno del Espectro Autista | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCDD20458 |
| Anny | 167 | Capacitación Trastorno del Espectro Autista | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZY03455 |
| Anny | 168 | Conversatorio Moda hoy | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKA20778 |
| Anny | 169 | Visita guiada: Eterno Femenino. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCGN42034, ACT-SCEG52588 |
| Anny | 171 | Visita guiada: Eterno Femenino. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIV31392, ACT-SCDN84830, ACT-SCZY90747 |
| Anny | 172 | Visita guiada: Eterno Femenino. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIV31392, ACT-SCDN84830, ACT-SCZY90747 |
| Anny | 173 | Visita guiada: Eterno Femenino. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVL18515, ACT-SCKC19065 |
| Anny | 174 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKL99207, ACT-SCBI74655, ACT-SCVS48670, ACT-SCIR07558 |
| Anny | 175 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJS85381, ACT-SCDH11554 |
| Anny | 176 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJA53450, ACT-SCAD02703, ACT-SCXI88562 |
| Anny | 177 | Visita guiada COMUDEG | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCEO23171 |
| Anny | 178 | Visita guiada Amigos de la Alhondiga | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRK60862 |
| Anny | 179 | Visita guiada UG | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQE64976 |
| Anny | 180 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJA53450, ACT-SCAD02703, ACT-SCXI88562 |
| Anny | 181 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLV27428, ACT-SCOF39726 |
| Anny | 182 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKL99207, ACT-SCBI74655, ACT-SCVS48670, ACT-SCIR07558 |
| Anny | 183 | Visita guiada libre scout Gto | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMT80704 |
| Anny | 184 | Visita guiada CIANNA | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSE03136 |
| Anny | 185 | Visita guiada Escuela de Diseño | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHE47742 |
| Anny | 187 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJA53450, ACT-SCAD02703, ACT-SCXI88562 |
| Anny | 188 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCYA08501 |
| Anny | 189 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSN82816, ACT-SCDG78924, ACT-SCVX90182 |
| Anny | 190 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSN82816, ACT-SCDG78924, ACT-SCVX90182 |
| Anny | 191 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSN82816, ACT-SCDG78924, ACT-SCVX90182 |
| Anny | 192 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKL99207, ACT-SCBI74655, ACT-SCVS48670, ACT-SCIR07558 |
| Anny | 193 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFR24702, ACT-SCVR72910 |
| Anny | 194 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFR24702, ACT-SCVR72910 |
| Anny | 195 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKJ18026, ACT-SCWN41231, ACT-SCFD64081 |
| Anny | 196 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKJ18026, ACT-SCWN41231, ACT-SCFD64081 |
| Anny | 197 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMO58522, ACT-SCAL82876 |
| Anny | 198 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMO58522, ACT-SCAL82876 |
| Anny | 199 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNP58131, ACT-SCPT19980 |
| Anny | 200 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNP58131, ACT-SCPT19980 |
| Anny | 201 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNP58131, ACT-SCPT19980 |
| Anny | 202 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLF07599, ACT-SCYY62075 |
| Anny | 203 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLF07599, ACT-SCYY62075 |
| Anny | 204 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJS85381, ACT-SCDH11554 |
| Anny | 205 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFV66869, ACT-SCRW71537, ACT-SCHL56287 |
| Anny | 206 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFV66869, ACT-SCRW71537, ACT-SCHL56287 |
| Anny | 207 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFV66869, ACT-SCRW71537, ACT-SCHL56287 |
| Anny | 208 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVH99141, ACT-SCCQ25265 |
| Anny | 209 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVH99141, ACT-SCCQ25265 |
| Anny | 210 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCWM44500 |
| Anny | 211 | Capacitación Trastorno del Espectro Autista | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRU37929 |
| Anny | 212 | El Pueblo en cartón: taller de muñecas | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCST39394 |
| Anny | 213 | Danzón, patrimonio vivo, clases de baile. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRL25642 |
| Anny | 214 | Mi sueño de una tarde dominical. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCBV34476 |
| Anny | 215 | Mi sueño de una tarde dominical. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCUT25950 |
| Anny | 216 | El Pueblo en cartón: taller de muñecas | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCDD95654 |
| Anny | 217 | Danzón, patrimonio vivo, clases de baile. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFB83750 |
| Anny | 218 | Mi sueño de una tarde dominical. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCW50829 |
| Anny | 219 | Mi sueño de una tarde dominical. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCYI32876 |
| Anny | 220 | Cuentacuentos: Mitos, ritos y otros gritos | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCTR91697 |
| Anny | 221 | Cuarteto Alba: Concierto de música mexicana | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCML00255 |
| Anny | 222 | Novela histórica, Los recuerdos del porvenir de Elena Garro y Cartucho de Nellie Campobello. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCU88388 |
| Anny | 223 | Danzón, patrimonio vivo, clases de baile. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVC31610 |
| Anny | 224 | El Pueblo en cartón: taller de muñecas | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFH09646 |
| Anny | 225 | Mi sueño de una tarde dominical. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCHJ17496 |
| Anny | 226 | Mi sueño de una tarde dominical. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCH70156 |
| Anny | 227 | Memorias colectivas del Museo del Pueblo de Guanajuato | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAK96271 |
| Anny | 235 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNK06395 |
| Anny | 239 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQP92821, ACT-SCIR27388, ACT-SCUZ23637 |
| Anny | 240 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQP92821, ACT-SCIR27388, ACT-SCUZ23637 |
| Anny | 244 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNB99509 |
| Anny | 271 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNK06395 |
| Anny | 292 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNB99509 |
| Anny | 293 | Visita guiada libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNB99509 |
| Pablo B. | 8 | Taller de Cartoneria Identiarte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCUF74629 |
| Pablo B. | 9 | Taller de Fanzinarte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQD94004 |
| Pablo B. | 10 | Taller derechos niñas y niños | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCWK91279 |
| Pablo B. | 11 | Taller derechos niñas y niños | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCGZ69056 |
| Pablo B. | 12 | Taller, mi espacio feliz | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIZ23576 |
| Pablo B. | 13 | Taller derechos niñas y niños | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCXV96959 |
| Pablo B. | 15 | Conferencia: Las poquianchis, una perspectiva filosofica | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKC53281 |
| Pablo B. | 16 | Conferencia: “Museos: Agentes Culturales de cambio” | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCDN33785 |
| Pablo B. | 17 | Crearte Taller de acuarela | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCA07519 |
| Pablo B. | 18 | Fanzinarte: taller de comic | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSJ46627 |
| Pablo B. | 19 | Identiarte: Taller de cartoneria | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMV29363 |
| Pablo B. | 20 | Visita escolar | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIP85126, ACT-SCDB68442 |
| Pablo B. | 21 | Visita escolar | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCBC19659, ACT-SCBT73191 |
| Pablo B. | 22 | Visita escolar | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCBC19659, ACT-SCBT73191 |
| Pablo B. | 23 | Visita escolar | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIP85126, ACT-SCDB68442 |
| Pablo B. | 27 | Circulo de lectura | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFF91218 |
| Pablo B. | 32 | Crearte Taller de acuarela | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCWY89313 |
| Pablo B. | 33 | Fanzinarte: taller de comic | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCYM74376 |
| Pablo B. | 34 | Identiarte: Taller de cartoneria | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCUW89025 |
| Pablo B. | 35 | Visita escolar | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRV34557 |
| Pablo B. | 40 | Crearte Taller de acuarela | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCUY62458 |
| Pablo B. | 41 | Fanzinarte: taller de comic | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCPO47673 |
| Pablo B. | 42 | Identiarte: Taller de cartoneria | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSM61699 |
| Pablo B. | 43 | Crearte Taller de acuarela | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCUY62458 |
| Pablo B. | 44 | Fanzinarte: taller de comic | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCPO47673 |
| Pablo B. | 45 | Identiarte: Taller de cartoneria | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSM61699 |
| Pablo B. | 46 | Braceros hasta el ultimo aliento | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCEC78279 |
| Pablo B. | 47 | Silao, el cubilete y la guerra cristera | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIA91121 |
| Pablo B. | 48 | circulo de lectura | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLB87432 |
| Pablo B. | 49 | Visita libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMY17952 |
| Pablo B. | 50 | Visita libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMY83187 |
| Pablo B. | 53 | Visita libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCDK66386, ACT-SCXR04810 |
| Pablo B. | 55 | Visita libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRS70126 |
| Pablo B. | 60 | Visita libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCVP57572, ACT-SCIO65695 |
| Pablo B. | 62 | Crearte Taller de acuarela | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCEQ46334 |
| Pablo B. | 63 | Fanzinarte: taller de comic | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCUH29282 |
| Pablo B. | 64 | Identiarte: Taller de cartoneria | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNO55541 |
| Pablo B. | 65 | Circulo de lectura e identidad | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCUX09615 |
| Pablo B. | 74 | conferencia | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMQ74551 |
| Pablo B. | 76 | Visita libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCN06688 |
| Pablo B. | 77 | Visita libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCSL85903 |
| Pablo B. | 85 | Fanzinarte: taller de comic | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMO35805 |
| Pablo B. | 86 | Identiarte: Taller de cartoneria | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZI44962 |
| Pablo B. | 87 | circulo de lectura e identidad | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCIB95757 |
| Pablo B. | 90 | crearte: taller de acuarela | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJS30123 |
| Pablo B. | 91 | Visita libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCN32873 |
| Pablo B. | 92 | circulo de lectura e identidad | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCTP98926 |
| Pablo B. | 94 | Visita libre | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCYX71100 |
| Julio C. | 5 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCTP89307 |
| Julio C. | 6 | Noche misteriosa. Historias tenebrosas | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCGW11311 |
| Julio C. | 7 | Alma en movimiento, Muestra de danza | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCZD01303 |
| Julio C. | 8 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNQ95807 |
| Julio C. | 9 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAL57574 |
| Julio C. | 10 | Visita especial Universidad de León, facultad de arquitectura | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCCA19851 |
| Julio C. | 11 | Visita especial Club de Leones Convención | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCWV81142 |
| Julio C. | 13 | Viernes libre de clases | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCBL86377 |
| Julio C. | 15 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFB65135, ACT-SCMK74426, ACT-SCTH69990, ACT-SCSH86841 |
| Julio C. | 16 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFB65135, ACT-SCMK74426, ACT-SCTH69990, ACT-SCSH86841 |
| Julio C. | 17 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFB65135, ACT-SCMK74426, ACT-SCTH69990, ACT-SCSH86841 |
| Julio C. | 18 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCFB65135, ACT-SCMK74426, ACT-SCTH69990, ACT-SCSH86841 |
| Julio C. | 19 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCJJ15015 |
| Julio C. | 20 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAE27878 |
| Julio C. | 21 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCAE27878 |
| Julio C. | 22 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNM90733, ACT-SCEK01502, ACT-SCAQ65320 |
| Julio C. | 23 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNM90733, ACT-SCEK01502, ACT-SCAQ65320 |
| Julio C. | 24 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNM90733, ACT-SCEK01502, ACT-SCAQ65320 |
| Julio C. | 25 | Espacios incidentales: Escenas al vuelo. Nxuni el bailar del mio Cid | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCUZ08441 |
| Julio C. | 26 | Inauguración de exposición: Angelitos. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLW02149 |
| Julio C. | 27 | Conversemos sobre arte | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOX41959 |
| Julio C. | 28 | Noche de Museos | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCBT53042 |
| Julio C. | 29 | Conferencia: Metamorfosis del alma. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCLF06356 |
| Julio C. | 30 | Viernes libre de clases | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOF92079 |
| Julio C. | 32 | Visita especial de la Universidad Humani Mundial | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCOW48414 |
| Julio C. | 33 | Festival Escenautas. Mujeres en el puño. Hilando la ternura, conquistando la libertad. | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCDO40520 |
| Julio C. | 34 | Visita especial a Ballet folclórico Cacaxtla del estado de Tlaxcala | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCDP05616 |
| Julio C. | 35 | Noche de Museos | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCEO07614 |
| Julio C. | 36 | Conferencia "Retablo dorado de Purísima de Bustos" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCNC66983 |
| Julio C. | 37 | Conferencia "Pincel a pincel, Juan Nepomuceno Herrera y Hermenegildo Bustos" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCBV35426 |
| Julio C. | 38 | Conferencia "Dichoso de tí angelito" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCKJ13536 |
| Julio C. | 39 | Espacios incidentales: Presentación de danza "Inercia" | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCRB24293 |
| Julio C. | 40 | Noche de Museos | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCQB51111 |
| Julio C. | 42 | Espacios incidentales: Premios Juventudes | Coincidencia de nombre y fecha con registros existentes; revisar grupo, sede y periodo antes de agregar ACT-SCMV84403 |
| Julio C. | 47 | Conversemos sobre arte | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| Julio C. | 48 | Conferencia formación de la vicaría de Purísima del Rincón | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| Julio C. | 49 | Recorrido mediado de Centro de Estudios Tecnológicos en Aguas Continentales Num. 19 | Fecha de inicio inválida o fuera de enero–septiembre 2026  |
| Julio C. | 50 | Conversemos sobre arte | Fecha de inicio inválida o fuera de enero–septiembre 2026  |

## Coincidencias internas conservadas

No prueban duplicidad. Para visitas de distintos grupos, agregar el grupo/horario cuando exista ayuda a distinguirlas. No se inventó esa información.

| Pestaña / fila | Actividad | Otra fila con nombre, día y sede iguales |
|---|---|---|
| LauraGuias / 13 | UPN | LauraGuias!12 |
| LauraGuias / 15 | PREPARATORIA OFICIAL | LauraGuias!14 |
| LauraGuias / 20 | PREPARATORIA OFICIAL | LauraGuias!19 |
| LauraGuias / 22 | INSTITUTO IGNACIO MONTES DE OCA | LauraGuias!21 |
| LauraGuias / 26 | ENCUENTRO ESTATAL DE MUSEOS | LauraGuias!25 |
| LauraGuias / 31 | BENITO JUÁREZ | LauraGuias!30 |
| LauraGuias / 33 | TÉCNICA #46 | LauraGuias!32 |
| LauraGuias / 35 | SABES GRAL CÁNDIDO NAVARRO | LauraGuias!34 |
| LauraGuias / 36 | SABES GRAL CÁNDIDO NAVARRO | LauraGuias!34, LauraGuias!35 |
| LauraGuias / 38 | GABRIELA MISTRAL | LauraGuias!37 |
| LauraGuias / 52 | LIBRE | LauraGuias!51 |
| LauraGuias / 55 | ROSARIO CASTELLANOS | LauraGuias!49 |
| LauraGuias / 58 | LIBRE | LauraGuias!51, LauraGuias!52 |
| LauraGuias / 59 | UPN | LauraGuias!53 |
| LauraGuias / 62 | LIBRE | LauraGuias!61 |
| LauraGuias / 63 | LIBRE | LauraGuias!61, LauraGuias!62 |
| LauraGuias / 74 | LIBRE | LauraGuias!73 |
| LauraGuias / 76 | BIBLIOTECA ALFONSO VILLASEÑOR SÖLE | LauraGuias!75 |
| LauraGuias / 78 | UNIVERSIDAD DE LEÓN | LauraGuias!77 |
| LauraGuias / 79 | UNIVERSIDAD DE LEÓN | LauraGuias!77, LauraGuias!78 |
| LauraGuias / 80 | LIBRE | LauraGuias!73, LauraGuias!74 |
| LauraGuias / 101 | CIPEC | LauraGuias!99 |
| LauraGuias / 103 | CIPEC | LauraGuias!102 |
| LauraGuias / 111 | SABES VALLE DE JEREZ | LauraGuias!110 |
| LauraGuias / 119 | LIBRE | LauraGuias!118 |
| LauraGuias / 121 | UNIVERSIDAD TECNOLÓGICA | LauraGuias!120 |
| LauraGuias / 124 | UNIVERSIDAD DE LEÓN | LauraGuias!123 |
| LauraGuias / 125 | UNIVERSIDAD DE LEÓN | LauraGuias!123, LauraGuias!124 |
| LauraGuias / 127 | CETIS 33 | LauraGuias!126 |
| LauraGuias / 131 | BACHILLERATO INTEGRAL | LauraGuias!130 |
| LauraGuias / 133 | ESPECIAL ENCUENTRO DE MUSEOS | LauraGuias!132 |
| LauraGuias / 134 | ESPECIAL ENCUENTRO DE MUSEOS | LauraGuias!132, LauraGuias!133 |
| LauraGuias / 136 | CETIS 21 | LauraGuias!135 |
| LauraGuias / 138 | CETIS 21 | LauraGuias!135, LauraGuias!136 |
| LauraGuias / 140 | LASALLE | LauraGuias!139 |
| LauraGuias / 142 | UG | LauraGuias!141 |
| LauraGuias / 144 | CETIS 21 | LauraGuias!143 |
| LauraGuias / 146 | CETIS 21 | LauraGuias!143, LauraGuias!144 |
| LauraGuias / 148 | LASALLE ARQ | LauraGuias!147 |
| Anny / 126 | Visita guiada libre | Anny!125 |
| Anny / 127 | Visita guiada libre | Anny!125, Anny!126 |
| Anny / 128 | Visita guiada libre | Anny!125, Anny!126, Anny!127 |
| Anny / 137 | Visita guiada libre | Anny!136 |
| Anny / 138 | Visita guiada libre | Anny!136, Anny!137 |
| Anny / 139 | Visita guiada libre | Anny!136, Anny!137, Anny!138 |
| Anny / 140 | Visita guiada libre | Anny!136, Anny!137, Anny!138, Anny!139 |
| Anny / 238 | Visita guiada libre | Anny!237 |
| Anny / 242 | Visita guiada libre | Anny!241 |
| Anny / 246 | Visita guiada libre | Anny!245 |
| Anny / 247 | Visita guiada libre | Anny!245, Anny!246 |
| Anny / 248 | Visita guiada libre | Anny!245, Anny!246, Anny!247 |
| Anny / 249 | Visita guiada libre | Anny!245, Anny!246, Anny!247, Anny!248 |
| Anny / 253 | Visita guiada libre | Anny!252 |
| Anny / 256 | Visita guiada libre | Anny!255 |
| Anny / 258 | Visita guiada libre | Anny!257 |
| Anny / 264 | Visita guiada libre | Anny!261 |
| Anny / 266 | Visita guiada libre | Anny!265 |
| Anny / 267 | Visita guiada libre | Anny!265, Anny!266 |
| Anny / 269 | Visita guiada libre | Anny!268 |
| Anny / 275 | Visita guiada libre | Anny!273 |
| Pablo B. / 108 | Visita libre | Pablo B.!107 |
| Pablo B. / 110 | Visita libre | Pablo B.!109 |

## Control de los registros preparados

### DiegoDiana / fuente 8 / salida 2: Museos para la niñez: Ensamble Sinfónico Oviedo

ID ACT-SCPZ17424. Folio SC-261026-190642. Fecha 2026-04-19.

- Clasificación múltiple o no equivalente a una sola subdisciplina: Musica Popular, Orquesta
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### DiegoDiana / fuente 18 / salida 3: Palabras Umbral Palabras Filo

ID ACT-SCAO61041. Folio SC-261026-190643. Fecha 2026-06-05.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- Diferencia conservada: participación 1 + acceso 11 no coincide con población 11.
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### DiegoDiana / fuente 19 / salida 4: Invocar desde las sombras. Con Flor Bosco

ID ACT-SCIU92114. Folio SC-261026-190644. Fecha 2026-06-10.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- Diferencia conservada: participación 1 + acceso 16 no coincide con población 16.
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### DiegoDiana / fuente 26 / salida 5: Espacio Incidental: Activación Sonora

ID ACT-SCUY86942. Folio SC-261026-190645. Fecha 2026-06-26.

- Clasificación múltiple o no equivalente a una sola subdisciplina: Arte Digital, Instalacion, Produccion Audioviaual, Investigacion Cultural, Interdiciplinario
- Promesa_NC múltiple o no equivalente: Formacion de Formadores Artisticos y Culturales: Cursos y Talleres de Capacitacion Artistica para Docentes. Encuentro entre Formadores
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- Diferencia conservada: participación 1 + acceso 23 no coincide con población 23.
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### DiegoDiana / fuente 30 / salida 6: Oráculos Griegos. Lectura dramatizada. Espacios incidentales

ID ACT-SCCO65544. Folio SC-261026-190646. Fecha 2026-07-26.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- Diferencia conservada: participación 1 + acceso 96 no coincide con población 96.
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### DiegoDiana / fuente 31 / salida 7: Taller de Lecto escritura: El revés de la imagen. Imparte Pedro Omar Rivera y Editorial Mar de Nombres

ID ACT-SCKF25368. Folio SC-261026-190647. Fecha 2026-07-09.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- Diferencia conservada: participación 15 + acceso 15 no coincide con población 15.
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### RenataThania / fuente 6 / salida 8: Exposición: Mujeres en el territorio: encuentros situados

ID ACT-SCOF43756. Folio SC-261026-190648. Fecha 2026-03-14.

- Clasificación múltiple o no equivalente a una sola subdisciplina: Arte contemporáneo de Guanajuato
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### RenataThania / fuente 8 / salida 9: Exposición: Altar de Dolores 2026

ID ACT-SCHN23366. Folio SC-261026-190649. Fecha 2026-03-25.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### RenataThania / fuente 9 / salida 10: Exposición: Poética del paisaje

ID ACT-SCTU77851. Folio SC-261026-190650. Fecha 2026-04-23.

- Clasificación múltiple o no equivalente a una sola subdisciplina: Pintura, Grabado, Dibujo, Procesos de Memoria, Fotografia
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### RenataThania / fuente 10 / salida 11: Exposición: Manuel Álvarez Bravo, los años decisivos

ID ACT-SCLF10400. Folio SC-261026-190651. Fecha 2026-04-30.

- Clasificación múltiple o no equivalente a una sola subdisciplina: Fotografia, Patrimonio Documental
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### RenataThania / fuente 11 / salida 12: Exposición: ¡Moda hoy! Diseño latinoamericanx y latinx contemporáneo

ID ACT-SCPO46050. Folio SC-261026-190652. Fecha 2026-05-21.

- Clasificación múltiple o no equivalente a una sola subdisciplina: Interdiciplinario, Moda, Textil
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### RenataThania / fuente 12 / salida 13: Exposición: Eterno femenino. El ser mujer en la Bella Época

ID ACT-SCUY55121. Folio SC-261026-190653. Fecha 2026-06-10.

- Clasificación múltiple o no equivalente a una sola subdisciplina: Investigacion Cultural, Procesos de Memoria
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### RenataThania / fuente 13 / salida 14: Exposición: De Japón a Antequera. Gráfica de Maestros Japoneses en Oaxaca

ID ACT-SCRS73128. Folio SC-261026-190654. Fecha 2026-06-18.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### RenataThania / fuente 14 / salida 15: Exposición: Bajo la sombra del mezquite

ID ACT-SCMI87432. Folio SC-261026-190655. Fecha 2026-07-16.

- Clasificación múltiple o no equivalente a una sola subdisciplina: Performance Visual, Instalacion, Escultura, Fotografia
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### LauraGuias / fuente 11 / salida 16: Noche Misteriosa

ID ACT-SCPF61747. Folio SC-261026-190656. Fecha 2026-04-24.

- Tipo_Actividad requiere una selección única: Taller, Programacion Cultural en Recinto
- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Crear un micrositio estatal con recursos, tutoriales y asesoría virtual sobre derechos de autor y propiedad intelectual.", Fortalecer las capacidades de autoridades locales y estatales

### LauraGuias / fuente 12 / salida 17: UPN

ID ACT-SCXE90838. Folio SC-261026-190657. Fecha 2026-05-06.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 13 / salida 18: UPN

ID ACT-SCQR88797. Folio SC-261026-190658. Fecha 2026-05-06.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 14 / salida 19: PREPARATORIA OFICIAL

ID ACT-SCQX28667. Folio SC-261026-190659. Fecha 2026-05-07.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 15 / salida 20: PREPARATORIA OFICIAL

ID ACT-SCZG96247. Folio SC-261026-190700. Fecha 2026-05-07.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 16 / salida 21: SEC. TEC. 50

ID ACT-SCMQ97380. Folio SC-261026-190701. Fecha 2026-05-12.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 17 / salida 22: SABES ZANGARRO

ID ACT-SCXU06032. Folio SC-261026-190702. Fecha 2026-05-14.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 18 / salida 23: TELESECUNDARIA 1003 RUTAS CULTURALES

ID ACT-SCFE91615. Folio SC-261026-190703. Fecha 2026-05-19.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 19 / salida 24: PREPARATORIA OFICIAL

ID ACT-SCYQ25428. Folio SC-261026-190704. Fecha 2026-05-21.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 20 / salida 25: PREPARATORIA OFICIAL

ID ACT-SCQU71740. Folio SC-261026-190705. Fecha 2026-05-21.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 21 / salida 26: INSTITUTO IGNACIO MONTES DE OCA

ID ACT-SCRP58292. Folio SC-261026-190706. Fecha 2026-05-22.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 22 / salida 27: INSTITUTO IGNACIO MONTES DE OCA

ID ACT-SCNL24195. Folio SC-261026-190707. Fecha 2026-05-22.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 24 / salida 28: MIGUEL BERNAL JIMÉNEZ

ID ACT-SCRI76762. Folio SC-261026-190708. Fecha 2026-05-27.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 25 / salida 29: ENCUENTRO ESTATAL DE MUSEOS

ID ACT-SCRA39908. Folio SC-261026-190709. Fecha 2026-05-28.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 26 / salida 30: ENCUENTRO ESTATAL DE MUSEOS

ID ACT-SCRN05061. Folio SC-261026-190710. Fecha 2026-05-28.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 27 / salida 31: 2026-03-18 00:00:00

ID ACT-SCXI04343. Folio SC-261026-190711. Fecha 2026-05-29.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 30 / salida 32: BENITO JUÁREZ

ID ACT-SCUK25967. Folio SC-261026-190712. Fecha 2026-06-04.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 31 / salida 33: BENITO JUÁREZ

ID ACT-SCVI99252. Folio SC-261026-190713. Fecha 2026-06-04.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 32 / salida 34: TÉCNICA #46

ID ACT-SCUV86759. Folio SC-261026-190714. Fecha 2026-06-04.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 33 / salida 35: TÉCNICA #46

ID ACT-SCVV75111. Folio SC-261026-190715. Fecha 2026-06-04.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 34 / salida 36: SABES GRAL CÁNDIDO NAVARRO

ID ACT-SCOI81145. Folio SC-261026-190716. Fecha 2026-06-05.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 35 / salida 37: SABES GRAL CÁNDIDO NAVARRO

ID ACT-SCNA19945. Folio SC-261026-190717. Fecha 2026-06-05.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 36 / salida 38: SABES GRAL CÁNDIDO NAVARRO

ID ACT-SCEB99555. Folio SC-261026-190718. Fecha 2026-06-05.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 37 / salida 39: GABRIELA MISTRAL

ID ACT-SCVU58310. Folio SC-261026-190719. Fecha 2026-06-18.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 38 / salida 40: GABRIELA MISTRAL

ID ACT-SCHR06694. Folio SC-261026-190720. Fecha 2026-06-18.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 39 / salida 41: 2026-11-20 00:00:00

ID ACT-SCGZ13635. Folio SC-261026-190721. Fecha 2026-06-19.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 40 / salida 42: GABRIELA MISTRAL

ID ACT-SCAE22197. Folio SC-261026-190722. Fecha 2026-06-19.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 41 / salida 43: PRPEPARATORIA ALONSO ESPINO

ID ACT-SCXI09265. Folio SC-261026-190723. Fecha 2026-06-24.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 42 / salida 44: COLEGIO NUEVA JUENTUD

ID ACT-SCJD07751. Folio SC-261026-190724. Fecha 2026-06-26.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 43 / salida 45: JN MANUEL CERVANTES IMAZ

ID ACT-SCYX01736. Folio SC-261026-190725. Fecha 2026-06-30.

- Acciones_PG múltiple o no equivalente: 2.4.3.1 Impulsar el desarrollo artistico y cultural entre infancias y juventudes, 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades, 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 48 / salida 46: BACHILLERATO INVERNA GUANAJUATO

ID ACT-SCZW67478. Folio SC-261026-190726. Fecha 2026-07-01.

- Tipo_Actividad requiere una selección única: Taller, Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 49 / salida 47: ROSARIO CASTELLANOS

ID ACT-SCFL63749. Folio SC-261026-190727. Fecha 2026-07-09.

- Tipo_Actividad requiere una selección única: Taller, Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 50 / salida 48: CENTRO FOX

ID ACT-SCIU62573. Folio SC-261026-190728. Fecha 2026-07-09.

- Fecha de fin no interpretable; se conserva vacía para corregir, sin sustituirla por el inicio.
- Tipo_Actividad requiere una selección única: Taller, Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 51 / salida 49: LIBRE

ID ACT-SCLN47636. Folio SC-261026-190729. Fecha 2026-07-09.

- Fecha de fin no interpretable; se conserva vacía para corregir, sin sustituirla por el inicio.
- Tipo_Actividad requiere una selección única: Taller, Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 52 / salida 50: LIBRE

ID ACT-SCEC59494. Folio SC-261026-190730. Fecha 2026-07-09.

- Tipo_Actividad requiere una selección única: Taller, Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 53 / salida 51: UPN

ID ACT-SCID20527. Folio SC-261026-190731. Fecha 2026-07-09.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 55 / salida 52: ROSARIO CASTELLANOS

ID ACT-SCOF77862. Folio SC-261026-190732. Fecha 2026-07-09.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 58 / salida 53: LIBRE

ID ACT-SCWL17736. Folio SC-261026-190733. Fecha 2026-07-09.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 59 / salida 54: UPN

ID ACT-SCQA46763. Folio SC-261026-190734. Fecha 2026-07-09.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 60 / salida 55: EPCA

ID ACT-SCWX09742. Folio SC-261026-190735. Fecha 2026-07-15.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 61 / salida 56: LIBRE

ID ACT-SCOL05853. Folio SC-261026-190736. Fecha 2026-07-15.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 62 / salida 57: LIBRE

ID ACT-SCLH71384. Folio SC-261026-190737. Fecha 2026-07-15.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 63 / salida 58: LIBRE

ID ACT-SCFS39255. Folio SC-261026-190738. Fecha 2026-07-15.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 64 / salida 59: EPCA

ID ACT-SCSM37747. Folio SC-261026-190739. Fecha 2026-07-16.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 65 / salida 60: LIBRE/TALLER

ID ACT-SCHA79294. Folio SC-261026-190740. Fecha 2026-07-19.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 66 / salida 61: TELESECUNDARIA

ID ACT-SCNX48386. Folio SC-261026-190741. Fecha 2026-06-19.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 67 / salida 62: EDUCEM

ID ACT-SCYR59532. Folio SC-261026-190742. Fecha 2026-07-21.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 68 / salida 63: UNIVERSIDAD HUMAI MUNDIAL

ID ACT-SCWP47300. Folio SC-261026-190743. Fecha 2026-07-21.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 69 / salida 64: LIBRE

ID ACT-SCPG48234. Folio SC-261026-190744. Fecha 2026-07-22.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 70 / salida 65: RUTAS/BIBLIOTECA OCTAVIO PAZ

ID ACT-SCCC72626. Folio SC-261026-190745. Fecha 2026-07-22.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 73 / salida 66: LIBRE

ID ACT-SCTE83691. Folio SC-261026-190746. Fecha 2026-07-23.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 74 / salida 67: LIBRE

ID ACT-SCKO17136. Folio SC-261026-190747. Fecha 2026-07-23.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 75 / salida 68: BIBLIOTECA ALFONSO VILLASEÑOR SÖLE

ID ACT-SCUM49337. Folio SC-261026-190748. Fecha 2026-07-23.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 76 / salida 69: BIBLIOTECA ALFONSO VILLASEÑOR SÖLE

ID ACT-SCHF14108. Folio SC-261026-190749. Fecha 2026-07-23.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 77 / salida 70: UNIVERSIDAD DE LEÓN

ID ACT-SCST29154. Folio SC-261026-190750. Fecha 2026-07-23.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 78 / salida 71: UNIVERSIDAD DE LEÓN

ID ACT-SCIU85655. Folio SC-261026-190751. Fecha 2026-07-23.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 79 / salida 72: UNIVERSIDAD DE LEÓN

ID ACT-SCOK94797. Folio SC-261026-190752. Fecha 2026-07-23.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 80 / salida 73: LIBRE

ID ACT-SCWM63580. Folio SC-261026-190753. Fecha 2026-07-23.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 81 / salida 74: LIBRE

ID ACT-SCJC32309. Folio SC-261026-190754. Fecha 2026-07-28.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 82 / salida 75: IBERO

ID ACT-SCEX74581. Folio SC-261026-190755. Fecha 2026-07-29.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 83 / salida 76: UNIVERSIDAD DE LEÓN

ID ACT-SCJB24725. Folio SC-261026-190756. Fecha 2026-07-30.

- Tipo_Actividad requiere una selección única: Visitas Escolares, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 86 / salida 77: Collage de tarot de arcanos mayores

ID ACT-SCVJ56701. Folio SC-261026-190757. Fecha 2026-07-04.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 89 / salida 78: Ciclo de cina "El rostro"

ID ACT-SCLF71421. Folio SC-261026-190758. Fecha 2026-07-18.

- Tipo_Actividad requiere una selección única: Programacion Cultural en Espacio Publico, Programacion Cultural en Recinto
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 90 / salida 79: Ciclo de cina "Una martillo para las brujas"

ID ACT-SCWZ47070. Folio SC-261026-190759. Fecha 2026-07-25.

- Tipo_Actividad requiere una selección única: Programacion Cultural en Espacio Publico, Programacion Cultural en Recinto
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 91 / salida 80: Retrato de Lupe Marín Pironisa

ID ACT-SCQG53896. Folio SC-261026-190800. Fecha 2026-07-05.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 94 / salida 81: Collage de colores (Tarot)me

ID ACT-SCXA40559. Folio SC-261026-190801. Fecha 2026-07-19.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 95 / salida 82: Monotipia de Tamayo. Un verano en el el museo

ID ACT-SCIH03404. Folio SC-261026-190802. Fecha 2026-07-24.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 99 / salida 83: CIPEC

ID ACT-SCXB46118. Folio SC-261026-190803. Fecha 2026-08-13.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 101 / salida 84: CIPEC

ID ACT-SCXO47326. Folio SC-261026-190804. Fecha 2026-08-13.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 102 / salida 85: CIPEC

ID ACT-SCBX48618. Folio SC-261026-190805. Fecha 2026-08-14.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 103 / salida 86: CIPEC

ID ACT-SCKE52232. Folio SC-261026-190806. Fecha 2026-08-14.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 104 / salida 87: OLIMPO SEMILLAS DEL FUTIRO

ID ACT-SCSC24290. Folio SC-261026-190807. Fecha 2026-08-14.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 105 / salida 88: BIBLIOTECA SATURNINO COVARRUBIAS

ID ACT-SCTI21727. Folio SC-261026-190808. Fecha 2026-08-14.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 106 / salida 89: CAJA POPULAR MEXICANA

ID ACT-SCDG16874. Folio SC-261026-190809. Fecha 2026-08-15.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 107 / salida 90: FUNDACIÓN DON BENJAMÍN

ID ACT-SCRT71813. Folio SC-261026-190810. Fecha 2026-08-19.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 108 / salida 91: COMITE DE COLONOS NLA MOREÑA II

ID ACT-SCDV43231. Folio SC-261026-190811. Fecha 2026-08-19.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 109 / salida 92: IBERO

ID ACT-SCBB20275. Folio SC-261026-190812. Fecha 2026-08-27.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 110 / salida 93: SABES VALLE DE JEREZ

ID ACT-SCRB11632. Folio SC-261026-190813. Fecha 2026-08-28.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 111 / salida 94: SABES VALLE DE JEREZ

ID ACT-SCGK77088. Folio SC-261026-190814. Fecha 2026-08-28.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 112 / salida 95: DEPORTIVA OLIMPIA

ID ACT-SCNQ12340. Folio SC-261026-190815. Fecha 2026-08-28.

- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 113 / salida 96: Retrato de Lupe Marín "Pitonisa"

ID ACT-SCDY31161. Folio SC-261026-190816. Fecha 2026-08-05.

- Tipo_Actividad requiere una selección única: Taller, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 114 / salida 97: Collage de Kandisnky

ID ACT-SCFZ35446. Folio SC-261026-190817. Fecha 2026-08-05.

- Tipo_Actividad requiere una selección única: Taller, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 115 / salida 98: Fotografía Espírita

ID ACT-SCLL05400. Folio SC-261026-190818. Fecha 2026-08-05.

- Tipo_Actividad requiere una selección única: Taller, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 116 / salida 99: Dibujo de Roberto Montenegro

ID ACT-SCLX80397. Folio SC-261026-190819. Fecha 2026-08-05.

- Tipo_Actividad requiere una selección única: Taller, Visitas Guiadas
- Acciones_PEC múltiple o no equivalente: Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 117 / salida 100: Círculo de lectura: Chamanes eléctricos en la fiesta del sol. Ojeda, Mónica

ID ACT-SCVB63030. Folio SC-261026-190820. Fecha 2026-08-26.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 118 / salida 101: libre

ID ACT-SCHK73032. Folio SC-261026-190821. Fecha 2026-09-08.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 119 / salida 102: LIBRE

ID ACT-SCDL48719. Folio SC-261026-190822. Fecha 2026-09-08.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 120 / salida 103: UNIVERSIDAD TECNOLÓGICA

ID ACT-SCSA87938. Folio SC-261026-190823. Fecha 2026-09-10.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 121 / salida 104: UNIVERSIDAD TECNOLÓGICA

ID ACT-SCHN68767. Folio SC-261026-190824. Fecha 2026-09-10.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 122 / salida 105: IBERO

ID ACT-SCBK39493. Folio SC-261026-190825. Fecha 2026-09-17.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 123 / salida 106: UNIVERSIDAD DE LEÓN

ID ACT-SCWN16131. Folio SC-261026-190826. Fecha 2026-09-22.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 124 / salida 107: UNIVERSIDAD DE LEÓN

ID ACT-SCNR03519. Folio SC-261026-190827. Fecha 2026-09-22.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 125 / salida 108: UNIVERSIDAD DE LEÓN

ID ACT-SCMS71876. Folio SC-261026-190828. Fecha 2026-09-22.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 126 / salida 109: CETIS 33

ID ACT-SCOW24790. Folio SC-261026-190829. Fecha 2026-09-23.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 127 / salida 110: CETIS 33

ID ACT-SCIC96809. Folio SC-261026-190830. Fecha 2026-09-23.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 128 / salida 111: CITIS 33

ID ACT-SCXF44752. Folio SC-261026-190831. Fecha 2026-09-23.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 129 / salida 112: CETIS33

ID ACT-SCVG45701. Folio SC-261026-190832. Fecha 2026-09-23.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 130 / salida 113: BACHILLERATO INTEGRAL

ID ACT-SCUR56844. Folio SC-261026-190833. Fecha 2026-09-23.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 131 / salida 114: BACHILLERATO INTEGRAL

ID ACT-SCOF03596. Folio SC-261026-190834. Fecha 2026-09-23.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 132 / salida 115: ESPECIAL ENCUENTRO DE MUSEOS

ID ACT-SCXJ70814. Folio SC-261026-190835. Fecha 2026-09-28.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 133 / salida 116: ESPECIAL ENCUENTRO DE MUSEOS

ID ACT-SCVP88098. Folio SC-261026-190836. Fecha 2026-09-28.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 134 / salida 117: ESPECIAL ENCUENTRO DE MUSEOS

ID ACT-SCWS17352. Folio SC-261026-190837. Fecha 2026-09-28.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 135 / salida 118: CETIS 21

ID ACT-SCAQ43276. Folio SC-261026-190838. Fecha 2026-09-29.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 136 / salida 119: CETIS 21

ID ACT-SCLP33110. Folio SC-261026-190839. Fecha 2026-09-29.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 137 / salida 120: CETIS

ID ACT-SCWW25709. Folio SC-261026-190840. Fecha 2026-09-29.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 138 / salida 121: CETIS 21

ID ACT-SCNQ44331. Folio SC-261026-190841. Fecha 2026-09-29.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 139 / salida 122: LASALLE

ID ACT-SCRG34496. Folio SC-261026-190842. Fecha 2026-09-30.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 140 / salida 123: LASALLE

ID ACT-SCQE06079. Folio SC-261026-190843. Fecha 2026-09-30.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 141 / salida 124: UG

ID ACT-SCCG07185. Folio SC-261026-190844. Fecha 2026-09-30.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 142 / salida 125: UG

ID ACT-SCAN49585. Folio SC-261026-190845. Fecha 2026-09-30.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 143 / salida 126: CETIS 21

ID ACT-SCTR77257. Folio SC-261026-190846. Fecha 2026-09-30.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 144 / salida 127: CETIS 21

ID ACT-SCLS54531. Folio SC-261026-190847. Fecha 2026-09-30.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 145 / salida 128: CETIS

ID ACT-SCXB66922. Folio SC-261026-190848. Fecha 2026-09-30.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 146 / salida 129: CETIS 21

ID ACT-SCSK90288. Folio SC-261026-190849. Fecha 2026-09-30.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 147 / salida 130: LASALLE ARQ

ID ACT-SCHD41399. Folio SC-261026-190850. Fecha 2026-09-30.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 148 / salida 131: LASALLE ARQ

ID ACT-SCBW22460. Folio SC-261026-190851. Fecha 2026-09-30.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### LauraGuias / fuente 150 / salida 132: Fideos a la chpícuaro

ID ACT-SCKF15287. Folio SC-261026-190852. Fecha 2026-09-05.

- Acciones_PG múltiple o no equivalente: 2.4.3.3 Incidir en el Involucramiento de las Personas con el Ecosistema Cultural, 4.4.1 Competencias y Habilidades
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### OscarEric / fuente 12 / salida 133: Tarjeta Española para Mamá

ID ACT-SCRM91374. Folio SC-261026-190853. Fecha 2026-05-13.

- Acciones_PEC múltiple o no equivalente: "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales", Realiza mesas de Co-creacion de programas culturales con enfoque en grupos prioritarios y atencion a zonas prioritarias, Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias
- Enfoque_Accion múltiple o no equivalente: Adultos mayores
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### OscarEric / fuente 24 / salida 134: Mujeres en las Artes Visuales en Guanajuato

ID ACT-SCTT59086. Folio SC-261026-190854. Fecha 2026-03-01.


### OscarEric / fuente 34 / salida 135: Arte en tu Plaza exposición "Fragmentos y Comlicidades

ID ACT-SCWO79422. Folio SC-261026-190855. Fecha 2026-07-08.

- Promesa_NC múltiple o no equivalente: "Programa ""Arte en tu Plaza"" A. Apreciacion del arte y la Cultura en Plazas Publicas(Cant, baile, poesia, oratoria, pintura. etc) "
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- Sin cantidades de población interpretables; no se creó un total ficticio.

### OscarEric / fuente 37 / salida 136: Activación de la exposición "Fragmentos y Comlicidades"

ID ACT-SCTS46081. Folio SC-261026-190856. Fecha 2026-08-03.

- La subdisciplina pertenece a más de una disciplina en el catálogo: Gestión cultural
- Promesa_NC múltiple o no equivalente: "Programa ""Arte en tu Plaza"" A. Apreciacion del arte y la Cultura en Plazas Publicas(Cant, baile, poesia, oratoria, pintura. etc) "
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### MajoMari / fuente 5 / salida 137: Exposición: Habitar ese bosque

ID ACT-SCRP37151. Folio SC-261026-190857. Fecha 2026-04-25.

- Meta no identificada inequívocamente: PB 35722600
- Clasificación múltiple o no equivalente a una sola subdisciplina: Instalacion, Ceramica
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### MajoMari / fuente 6 / salida 138: Préstamos de espacios y visita guiada a la exposición temporal: Bajo el Signo se Satruno. Adivinación en el arte.

ID ACT-SCNH21397. Folio SC-261026-190858. Fecha 2026-05-09.

- Meta no identificada inequívocamente: PB 35722600
- Tipo_Actividad requiere una selección única: Visitas Guiadas, Vinculacion
- Promesa_NC múltiple o no equivalente: Formacion de Formadores Artisticos y Culturales: Cursos y Talleres de Capacitacion Artistica para Docentes. Encuentro entre Formadores
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### MajoMari / fuente 7 / salida 139: Quiromancia al cuadro

ID ACT-SCWP52672. Folio SC-261026-190859. Fecha 2026-05-26.

- Meta no identificada inequívocamente: PB 35722600
- Tipo_Actividad requiere una selección única: Visitas Guiadas, Vinculacion
- Promesa_NC múltiple o no equivalente: Formacion de Formadores Artisticos y Culturales: Cursos y Talleres de Capacitacion Artistica para Docentes. Encuentro entre Formadores
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### MajoMari / fuente 9 / salida 140: Exposición: Mi México Seihi Shinohara

ID ACT-SCGZ16088. Folio SC-261026-190900. Fecha 2026-05-28.

- Meta no identificada inequívocamente: PB 35722600
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### MajoMari / fuente 10 / salida 141: Exposición: La importancia del dibujo. Bernardo Gómez Pimienta

ID ACT-SCVE84312. Folio SC-261026-190901. Fecha 2026-09-24.

- Fecha fin anterior al inicio: se conserva la fecha reportada para revisión.
- Meta no identificada inequívocamente: PB 35722600
- Clasificación múltiple o no equivalente a una sola subdisciplina: Dibujo, Ceramica, Mobiliario
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.
- Sin cantidades de población interpretables; no se creó un total ficticio.

### Anny / fuente 14 / salida 142: Callejón del arte

ID ACT-SCPB70657. Folio SC-261026-190902. Fecha 2026-04-19.

- Acciones_PG múltiple o no equivalente: 1.2.3.4 Promover una Cultura de Paz desde las Expresiones Artisticas y Culturales, 2.4.3.4 Actividades Culturales en Colonias y Comunidades Rurales
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Anny / fuente 57 / salida 143: ¡Moda hoy! Diseño de moda latinoamericanx y latinx

ID ACT-SCKQ07454. Folio SC-261026-190903. Fecha 2026-05-22.

- Acciones_PG múltiple o no equivalente: 1.2.3.4 Promover una Cultura de Paz desde las Expresiones Artisticas y Culturales, 2.1.3.2. Coordinar la Incorporacion Progresiva de ña Accesibilidad Universal, 2.1.5 Inclusion Poblacion Migrante
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Anny / fuente 85 / salida 144: Danzón, patrimonio vivo, clases de baile.

ID ACT-SCWR46777. Folio SC-261026-190904. Fecha 2026-06-20.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 89 / salida 145: Colegio Cristiano Dr. Isaías León

ID ACT-SCYZ30303. Folio SC-261026-190905. Fecha 2026-06-18.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 90 / salida 146: Universidad Autónoma de San Luis Potosí

ID ACT-SCIY65965. Folio SC-261026-190906. Fecha 2026-06-02.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 91 / salida 147: Unviersidad de La Salle Bajío

ID ACT-SCFA60499. Folio SC-261026-190907. Fecha 2026-06-09.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 92 / salida 148: UGTO-Área de español para extranjeros

ID ACT-SCAT63785. Folio SC-261026-190908. Fecha 2026-06-15.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 98 / salida 149: Escuela Secundaria Rudolph

ID ACT-SCTY90935. Folio SC-261026-190909. Fecha 2026-07-03.

- Enfoque_Accion múltiple o no equivalente: Niños y Adolescentes)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 107 / salida 150: Taller en búsqueda del Mezquite

ID ACT-SCRR49219. Folio SC-261026-190910. Fecha 2026-07-16.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 108 / salida 151: Inauguración: Bajo la sombre del Mezquite

ID ACT-SCIC52126. Folio SC-261026-190911. Fecha 2026-07-16.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 119 / salida 152: Verano en el museo: Recorrido por Poética del paisaje y Manuel Álvarez Bravo, los años decisivos

ID ACT-SCDY94333. Folio SC-261026-190912. Fecha 2026-07-19.

- Enfoque_Accion múltiple o no equivalente: NNA (Niñas
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 121 / salida 153: Visita guiada libre

ID ACT-SCFF27378. Folio SC-261026-190913. Fecha 2026-07-24.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 122 / salida 154: Visita guiada libre

ID ACT-SCCM31574. Folio SC-261026-190914. Fecha 2026-07-25.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 123 / salida 155: Visita guiada libre

ID ACT-SCMS10299. Folio SC-261026-190915. Fecha 2026-07-28.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 124 / salida 156: Visita guiada libre

ID ACT-SCVL07006. Folio SC-261026-190916. Fecha 2026-07-29.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 125 / salida 157: Visita guiada libre

ID ACT-SCWB31313. Folio SC-261026-190917. Fecha 2026-07-21.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 126 / salida 158: Visita guiada libre

ID ACT-SCYY20286. Folio SC-261026-190918. Fecha 2026-07-21.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 127 / salida 159: Visita guiada libre

ID ACT-SCUG70486. Folio SC-261026-190919. Fecha 2026-07-21.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 128 / salida 160: Visita guiada libre

ID ACT-SCTD96194. Folio SC-261026-190920. Fecha 2026-07-21.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 129 / salida 161: Visita guiada libre

ID ACT-SCJF91946. Folio SC-261026-190921. Fecha 2026-07-24.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 130 / salida 162: Visita guiada libre

ID ACT-SCCI55611. Folio SC-261026-190922. Fecha 2026-07-03.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 131 / salida 163: Visita guiada libre

ID ACT-SCBK85596. Folio SC-261026-190923. Fecha 2026-07-19.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 133 / salida 164: Visita guiada libre

ID ACT-SCCJ96299. Folio SC-261026-190924. Fecha 2026-07-03.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 136 / salida 165: Visita guiada libre

ID ACT-SCZR35037. Folio SC-261026-190925. Fecha 2026-07-21.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 137 / salida 166: Visita guiada libre

ID ACT-SCDD46576. Folio SC-261026-190926. Fecha 2026-07-21.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 138 / salida 167: Visita guiada libre

ID ACT-SCRM78932. Folio SC-261026-190927. Fecha 2026-07-21.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 139 / salida 168: Visita guiada libre

ID ACT-SCRS76701. Folio SC-261026-190928. Fecha 2026-07-21.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 140 / salida 169: Visita guiada libre

ID ACT-SCYL18280. Folio SC-261026-190929. Fecha 2026-07-21.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 141 / salida 170: Visita guiada libre

ID ACT-SCQP18262. Folio SC-261026-190930. Fecha 2026-07-28.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 170 / salida 171: Visita guiada: Eterno Femenino.

ID ACT-SCHM11033. Folio SC-261026-190931. Fecha 2026-08-26.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- Diferencia conservada: participación 18 + acceso 0 no coincide con población 9.
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 186 / salida 172: Visita guiada libre

ID ACT-SCOP01093. Folio SC-261026-190932. Fecha 2026-08-05.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- Diferencia conservada: participación 6 + acceso 0 no coincide con población 3.
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 228 / salida 173: Sonido México

ID ACT-SCAE90848. Folio SC-261026-190933. Fecha 2026-09-24.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 229 / salida 174: Viernes libre de clases ¡Al museo! Identidad y nacionalismo

ID ACT-SCJS91096. Folio SC-261026-190934. Fecha 2026-09-25.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 230 / salida 175: Conferencia: La participación de las mujeres en la Guerra de Independencia

ID ACT-SCRG16177. Folio SC-261026-190935. Fecha 2026-09-25.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 231 / salida 176: Danzón, patrimonio vivo, clases de baile.

ID ACT-SCRD35570. Folio SC-261026-190936. Fecha 2026-09-26.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 232 / salida 177: Mi sueño de una tarde dominical.

ID ACT-SCXZ05565. Folio SC-261026-190937. Fecha 2026-09-26.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 233 / salida 178: Mi sueño de una tarde dominical.

ID ACT-SCPU42921. Folio SC-261026-190938. Fecha 2026-09-27.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 234 / salida 179: Visita guiada libre

ID ACT-SCCO81814. Folio SC-261026-190939. Fecha 2026-09-01.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 236 / salida 180: Visita guiada libre

ID ACT-SCFR72450. Folio SC-261026-190940. Fecha 2026-09-05.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 237 / salida 181: Visita guiada libre

ID ACT-SCBI39264. Folio SC-261026-190941. Fecha 2026-09-06.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 238 / salida 182: Visita guiada libre

ID ACT-SCSK13712. Folio SC-261026-190942. Fecha 2026-09-06.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 241 / salida 183: Visita guiada libre

ID ACT-SCOE35202. Folio SC-261026-190943. Fecha 2026-09-09.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 242 / salida 184: Visita guiada libre

ID ACT-SCNF11223. Folio SC-261026-190944. Fecha 2026-09-09.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 243 / salida 185: Visita guiada libre

ID ACT-SCIY92512. Folio SC-261026-190945. Fecha 2026-09-10.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 245 / salida 186: Visita guiada libre

ID ACT-SCYR77313. Folio SC-261026-190946. Fecha 2026-09-12.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 246 / salida 187: Visita guiada libre

ID ACT-SCWL29449. Folio SC-261026-190947. Fecha 2026-09-12.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 247 / salida 188: Visita guiada libre

ID ACT-SCVC16818. Folio SC-261026-190948. Fecha 2026-09-12.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 248 / salida 189: Visita guiada libre

ID ACT-SCHL28991. Folio SC-261026-190949. Fecha 2026-09-12.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 249 / salida 190: Visita guiada libre

ID ACT-SCEC08568. Folio SC-261026-190950. Fecha 2026-09-12.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 250 / salida 191: Visita guiada libre

ID ACT-SCTI30510. Folio SC-261026-190951. Fecha 2026-09-13.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 251 / salida 192: Visita guiada libre

ID ACT-SCCG69694. Folio SC-261026-190952. Fecha 2026-09-15.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 252 / salida 193: Visita guiada libre

ID ACT-SCEK85092. Folio SC-261026-190953. Fecha 2026-09-17.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 253 / salida 194: Visita guiada libre

ID ACT-SCLF73249. Folio SC-261026-190954. Fecha 2026-09-17.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 254 / salida 195: Visita guiada libre

ID ACT-SCQG32270. Folio SC-261026-190955. Fecha 2026-09-19.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 255 / salida 196: Visita guiada libre

ID ACT-SCZC19616. Folio SC-261026-190956. Fecha 2026-09-20.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 256 / salida 197: Visita guiada libre

ID ACT-SCDF52076. Folio SC-261026-190957. Fecha 2026-09-20.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 257 / salida 198: Visita guiada libre

ID ACT-SCGO67828. Folio SC-261026-190958. Fecha 2026-09-22.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 258 / salida 199: Visita guiada libre

ID ACT-SCPW42925. Folio SC-261026-190959. Fecha 2026-09-22.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 259 / salida 200: Visita guiada libre

ID ACT-SCNA55939. Folio SC-261026-191000. Fecha 2026-09-23.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 260 / salida 201: Visita guiada libre

ID ACT-SCIA81020. Folio SC-261026-191001. Fecha 2026-09-24.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 261 / salida 202: Visita guiada libre

ID ACT-SCBS46929. Folio SC-261026-191002. Fecha 2026-09-25.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 262 / salida 203: Visita guiada libre Grupo UG

ID ACT-SCBB68314. Folio SC-261026-191003. Fecha 2026-09-22.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 263 / salida 204: Visita guiada libre Grupo UG

ID ACT-SCGK42132. Folio SC-261026-191004. Fecha 2026-09-23.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 264 / salida 205: Visita guiada libre

ID ACT-SCIM79162. Folio SC-261026-191005. Fecha 2026-09-25.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 265 / salida 206: Visita guiada libre

ID ACT-SCFN14990. Folio SC-261026-191006. Fecha 2026-09-26.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 266 / salida 207: Visita guiada libre

ID ACT-SCLZ69224. Folio SC-261026-191007. Fecha 2026-09-26.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 267 / salida 208: Visita guiada libre

ID ACT-SCDP88452. Folio SC-261026-191008. Fecha 2026-09-26.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 268 / salida 209: Visita guiada libre

ID ACT-SCPW91712. Folio SC-261026-191009. Fecha 2026-09-27.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 269 / salida 210: Visita guiada libre

ID ACT-SCIN76554. Folio SC-261026-191010. Fecha 2026-09-27.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 270 / salida 211: Visita guiada libre

ID ACT-SCOE23523. Folio SC-261026-191011. Fecha 2026-09-01.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 272 / salida 212: Visita guiada libre

ID ACT-SCTF94480. Folio SC-261026-191012. Fecha 2026-09-05.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 273 / salida 213: Visita guiada libre

ID ACT-SCFP60419. Folio SC-261026-191013. Fecha 2026-09-12.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 274 / salida 214: Visita guiada libre

ID ACT-SCOZ68311. Folio SC-261026-191014. Fecha 2026-09-06.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 275 / salida 215: Visita guiada libre

ID ACT-SCBK71518. Folio SC-261026-191015. Fecha 2026-09-12.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 276 / salida 216: Visita guiada libre

ID ACT-SCAJ52970. Folio SC-261026-191016. Fecha 2026-09-13.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 277 / salida 217: Visita guiada libre

ID ACT-SCLG96107. Folio SC-261026-191017. Fecha 2026-09-17.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 278 / salida 218: Visita guiada libre

ID ACT-SCOB53637. Folio SC-261026-191018. Fecha 2026-09-18.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 279 / salida 219: Visita guiada libre

ID ACT-SCIM36171. Folio SC-261026-191019. Fecha 2026-09-22.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 280 / salida 220: Visita guiada libre

ID ACT-SCFL57625. Folio SC-261026-191020. Fecha 2026-09-24.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 281 / salida 221: Visita guiada libre

ID ACT-SCGL69862. Folio SC-261026-191021. Fecha 2026-09-25.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 282 / salida 222: Visita guiada libre

ID ACT-SCVE44886. Folio SC-261026-191022. Fecha 2026-09-26.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 283 / salida 223: Visita guiada libre

ID ACT-SCZM10990. Folio SC-261026-191023. Fecha 2026-09-27.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 284 / salida 224: Evento toma de la Alhondiga

ID ACT-SCMF36897. Folio SC-261026-191024. Fecha 2026-09-28.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 285 / salida 225: Visita guiada libre

ID ACT-SCFQ64798. Folio SC-261026-191025. Fecha 2026-09-12.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 286 / salida 226: Visita guiada libre Taller de muñecas

ID ACT-SCKS90162. Folio SC-261026-191026. Fecha 2026-09-19.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 287 / salida 227: Visita guiada Tec. Monterrey

ID ACT-SCCD44321. Folio SC-261026-191027. Fecha 2026-09-26.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 288 / salida 228: Visita guiada CBTIA 175

ID ACT-SCGH78821. Folio SC-261026-191028. Fecha 2026-09-22.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 289 / salida 229: Visita guiada Arquitectura UG

ID ACT-SCKJ85023. Folio SC-261026-191029. Fecha 2026-09-23.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 290 / salida 230: Visita guiada Arquitectura Tec de Monterrey

ID ACT-SCRO06991. Folio SC-261026-191030. Fecha 2026-09-26.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Anny / fuente 291 / salida 231: Visita guiada Dpto. Lenguas Ug

ID ACT-SCXH78469. Folio SC-261026-191031. Fecha 2026-09-29.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Pablo B. / fuente 5 / salida 232: Visita libre

ID ACT-SCFU87796. Folio SC-261026-191032. Fecha 2026-04-01.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 6 / salida 233: Visita libre

ID ACT-SCSF73879. Folio SC-261026-191033. Fecha 2026-04-04.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 7 / salida 234: Visita libre

ID ACT-SCTB85459. Folio SC-261026-191034. Fecha 2026-04-05.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 24 / salida 235: Visita especial

ID ACT-SCVL48124. Folio SC-261026-191035. Fecha 2026-05-28.

- Tipo_Actividad requiere una selección única: Divulgacion Cultural, Visitas Institucionales
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 25 / salida 236: taller acoso escolar

ID ACT-SCWZ10989. Folio SC-261026-191036. Fecha 2026-05-22.


### Pablo B. / fuente 28 / salida 237: taller acoso escolar

ID ACT-SCIT93215. Folio SC-261026-191037. Fecha 2026-06-09.


### Pablo B. / fuente 29 / salida 238: Conferencia

ID ACT-SCJO26685. Folio SC-261026-191038. Fecha 2026-06-05.


### Pablo B. / fuente 30 / salida 239: Conferencia

ID ACT-SCFI93148. Folio SC-261026-191039. Fecha 2026-06-12.


### Pablo B. / fuente 31 / salida 240: conferencia

ID ACT-SCOX33073. Folio SC-261026-191040. Fecha 2026-06-19.


### Pablo B. / fuente 36 / salida 241: Visita escolar

ID ACT-SCSV37476. Folio SC-261026-191041. Fecha 2026-06-12.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Apoyos para artistas populares

### Pablo B. / fuente 37 / salida 242: Visita escolar

ID ACT-SCFC50070. Folio SC-261026-191042. Fecha 2026-06-17.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Apoyos para artistas populares

### Pablo B. / fuente 38 / salida 243: Visita escolar

ID ACT-SCCO99201. Folio SC-261026-191043. Fecha 2026-06-01.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Apoyos para artistas populares

### Pablo B. / fuente 51 / salida 244: Visita libre

ID ACT-SCFT85443. Folio SC-261026-191044. Fecha 2026-07-26.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 52 / salida 245: Visita libre

ID ACT-SCUA50507. Folio SC-261026-191045. Fecha 2026-07-07.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 54 / salida 246: Visita libre

ID ACT-SCEB89086. Folio SC-261026-191046. Fecha 2026-07-10.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 56 / salida 247: Visita libre

ID ACT-SCTY36726. Folio SC-261026-191047. Fecha 2026-07-16.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 57 / salida 248: Visita libre

ID ACT-SCMV32773. Folio SC-261026-191048. Fecha 2026-07-18.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 58 / salida 249: Visita libre

ID ACT-SCFR56250. Folio SC-261026-191049. Fecha 2026-07-21.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 59 / salida 250: Visita libre

ID ACT-SCAK70782. Folio SC-261026-191050. Fecha 2026-07-22.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 61 / salida 251: Visita libre

ID ACT-SCQT76448. Folio SC-261026-191051. Fecha 2026-07-30.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 66 / salida 252: Visita libre

ID ACT-SCUG05590. Folio SC-261026-191052. Fecha 2026-08-02.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 67 / salida 253: Visita libre

ID ACT-SCXP94647. Folio SC-261026-191053. Fecha 2026-08-01.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 68 / salida 254: Visita libre

ID ACT-SCUM91210. Folio SC-261026-191054. Fecha 2026-08-09.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 69 / salida 255: Visita libre

ID ACT-SCBS28751. Folio SC-261026-191055. Fecha 2026-08-12.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 70 / salida 256: Visita libre

ID ACT-SCEK07509. Folio SC-261026-191056. Fecha 2026-08-13.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 71 / salida 257: Visita libre

ID ACT-SCKA01347. Folio SC-261026-191057. Fecha 2026-08-14.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 72 / salida 258: Visita libre

ID ACT-SCTW88932. Folio SC-261026-191058. Fecha 2026-08-16.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 73 / salida 259: Visita libre

ID ACT-SCMV80498. Folio SC-261026-191059. Fecha 2026-08-20.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 75 / salida 260: conferencia

ID ACT-SCDP28039. Folio SC-261026-191100. Fecha 2026-08-21.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 78 / salida 261: Visita libre

ID ACT-SCTV82164. Folio SC-261026-191101. Fecha 2026-08-26.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 79 / salida 262: Visita libre

ID ACT-SCZK92079. Folio SC-261026-191102. Fecha 2026-08-27.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 80 / salida 263: Visita libre

ID ACT-SCKG42796. Folio SC-261026-191103. Fecha 2026-08-29.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 81 / salida 264: Visita libre

ID ACT-SCDN73789. Folio SC-261026-191104. Fecha 2026-08-30.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 83 / salida 265: Visita libre

ID ACT-SCEJ08838. Folio SC-261026-191105. Fecha 2026-09-01.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 84 / salida 266: Visita libre

ID ACT-SCQC76801. Folio SC-261026-191106. Fecha 2026-09-02.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 88 / salida 267: Visita libre

ID ACT-SCDY40904. Folio SC-261026-191107. Fecha 2026-09-03.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 89 / salida 268: Visita libre

ID ACT-SCQU69292. Folio SC-261026-191108. Fecha 2026-09-04.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 93 / salida 269: Visita libre

ID ACT-SCAT63508. Folio SC-261026-191109. Fecha 2026-09-08.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 95 / salida 270: Visita libre

ID ACT-SCWX88850. Folio SC-261026-191110. Fecha 2026-09-10.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 96 / salida 271: Conferencia

ID ACT-SCNG52489. Folio SC-261026-191111. Fecha 2026-09-11.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 97 / salida 272: Visita libre

ID ACT-SCMQ77525. Folio SC-261026-191112. Fecha 2026-09-11.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 98 / salida 273: Visita libre

ID ACT-SCNZ87862. Folio SC-261026-191113. Fecha 2026-09-12.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 99 / salida 274: Visita libre

ID ACT-SCUM91078. Folio SC-261026-191114. Fecha 2026-09-13.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 100 / salida 275: Visita libre

ID ACT-SCCY84221. Folio SC-261026-191115. Fecha 2026-09-17.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 101 / salida 276: conferencia

ID ACT-SCTF15422. Folio SC-261026-191116. Fecha 2026-09-18.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 102 / salida 277: Visita libre

ID ACT-SCKD36987. Folio SC-261026-191117. Fecha 2026-09-18.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 103 / salida 278: Visita libre

ID ACT-SCKT73108. Folio SC-261026-191118. Fecha 2026-09-20.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 104 / salida 279: Visita libre

ID ACT-SCVG16691. Folio SC-261026-191119. Fecha 2026-09-22.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 105 / salida 280: Visita libre

ID ACT-SCZN30924. Folio SC-261026-191120. Fecha 2026-09-23.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 106 / salida 281: Visita libre

ID ACT-SCJB65964. Folio SC-261026-191121. Fecha 2026-09-24.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 107 / salida 282: Visita libre

ID ACT-SCDA95565. Folio SC-261026-191122. Fecha 2026-09-25.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 108 / salida 283: Visita libre

ID ACT-SCRN56558. Folio SC-261026-191123. Fecha 2026-09-25.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 109 / salida 284: Visita libre

ID ACT-SCHZ69552. Folio SC-261026-191124. Fecha 2026-09-26.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)

### Pablo B. / fuente 110 / salida 285: Visita libre

ID ACT-SCHP88716. Folio SC-261026-191125. Fecha 2026-09-26.

- Promesa_NC múltiple o no equivalente: Arraigo y Empoderamiento Cultural de Comunidades, Leer para Crecer
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- Sin cantidades de población interpretables; no se creó un total ficticio.

### Julio C. / fuente 12 / salida 286: Conversemos sobre arte

ID ACT-SCCX63144. Folio SC-261026-191126. Fecha 2026-05-26.

- Tipo_Actividad requiere una selección única: Taller, Visitas Escolares
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Julio C. / fuente 14 / salida 287: Conferencia

ID ACT-SCWR52731. Folio SC-261026-191127. Fecha 2026-05-29.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Julio C. / fuente 31 / salida 288: Capacitación de guías turísticos

ID ACT-SCNO29257. Folio SC-261026-191128. Fecha 2026-06-29.

- Clasificación múltiple o no equivalente a una sola subdisciplina: Formacion Comunitaria, Innovacion Cultural
- Tipo_Actividad requiere una selección única: Taller, Curso
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Julio C. / fuente 41 / salida 289: Espacios incidentales: presentación de la orquesta Vientos Musicales

ID ACT-SCHF84120. Folio SC-261026-191129. Fecha 2026-08-28.

- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Julio C. / fuente 43 / salida 290: Conversemos sobre arte

ID ACT-SCKG42349. Folio SC-261026-191130. Fecha 2026-09-22.

- Tipo_Actividad requiere una selección única: Taller, Visitas Escolares
- Acciones_PG múltiple o no equivalente: 2.2.3.2 Proover la Participacion de Grupos Prioritariosen Actividades Culturales, 1.2.3.4 Promover una Cultura de Paz desde las Expresiones Artisticas y Culturales
- Acciones_PEC múltiple o no equivalente: "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales", Impulsar programas de mediacion con lineas de trabajo enfocadas a la participacion y acceso de grupos prioritarios y poblacion de zonas prioritarias
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Julio C. / fuente 44 / salida 291: Noche de Museos

ID ACT-SCRN16755. Folio SC-261026-191131. Fecha 2026-09-23.

- Acciones_PEC múltiple o no equivalente: "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales", Fortalecer la oferta cultura en espacios independientes
- Enfoque_Accion múltiple o no equivalente: Ninguno (Población General)
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Julio C. / fuente 45 / salida 292: Viernes libre de clases

ID ACT-SCCG42184. Folio SC-261026-191132. Fecha 2026-09-25.

- Diferencia conservada: participación 15 + acceso 2 no coincide con población 15.
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

### Julio C. / fuente 46 / salida 293: Conversemos sobre arte

ID ACT-SCZX20278. Folio SC-261026-191133. Fecha 2026-09-28.

- Tipo_Actividad requiere una selección única: Taller, Visitas Escolares
- Promesa_NC múltiple o no equivalente: Leer para Crecer, Arraigo y Empoderamiento Cultural de Comunidades
- Acciones_PEC múltiple o no equivalente: Crear un sistema de inteligencia cultural, "Fortalecer la programacion cultural en espacios publicos, espacios alternativos y otros espacios culturales"
- La fuente marca zona prioritaria sin distinguir Nuevo Comienzo y SSyP; ambos campos quedan sin clasificar.

## Fuentes

- Formato Interno de Indicadores (2), carpeta Soraya Villegas: ocho pestañas, filas identificadas en este control.
- DB_Sistema_Cultura_GTO_V1.xlsx: estructura de cuatro registros y catálogos vigentes de la copia proporcionada.
- Lote de Marcelina, ya cargado según Luis: reservado para no repetir sus IDs ni folios.
- Verificado: todos los valores exportados, fechas como fechas de Excel, encabezados, claves únicas, relaciones padre/hijo y archivos fuente sin cambios. No se probó una importación en AppSheet ni se modificaron registros productivos.