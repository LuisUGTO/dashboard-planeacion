# Leyendas de PG/enfoque y revisión de enfoques vacíos — 03/11/2026

**Estado:** ajustes de interfaz implementados localmente; ocho enfoques aplicados y verificados en la DB. Cuatro casos pendientes de confirmación. Sin commit, push ni publicación.

## Interfaz

**Seguimiento del mapa de Inicio, 03/11:** Luis aportó una captura con un hueco entre el mapa y sus indicadores. El apilado de la leyenda de PG incrementó la altura de la fila; la tarjeta del mapa distribuía el espacio con justify-between mientras el mapa tenía 340 px fijos. Se retiró esa distribución, el contenedor superior y el mapa ahora crecen con flex y se conserva un mínimo de 340 px. ResizeObserver notifica a Leaflet cuando cambia el contenedor, incluso sin redimensionar la ventana, usando invalidateSize con pan:false. Así las teselas se reajustan a la nueva dimensión sin pedir un desplazamiento del mapa. Se conserva la versión de Leaflet, las coordenadas, filtros y cálculos de cobertura. Pasaron **35 pruebas**, incluida la comprobación nueva de observación del contenedor, instancia única y reajuste sin pan. **Implementado localmente; navegador, publicación y exportación siguen sin certificación visual.** Este seguimiento amplía la corrección anterior, sin nuevas escrituras de datos.

En **Inicio / Distribución por Programa de Gobierno** y **Matriz estratégica / Distribución del Enfoque**, la leyenda ocupa el ancho de la tarjeta debajo de la dona. Solo estas dos leyendas activan nombres multilínea sin truncamiento; las cantidades y porcentajes conservan su espacio. El encabezado de Enfoque admite salto de línea.

La distribución PG transforma únicamente las etiquetas mostradas: 1 Tranquilidad → Tranquilidad, 2 Igualdad → Igualdad, 4 Vocación → Vocación, 5 Prosperidad → Prosperidad. Se conservan los valores originales Eje_PG, los filtros, los grupos, el orden y los conteos. No se recortan numeraciones de objetivos como 2.4, ni años. Las etiquetas mostradas en el gráfico y la leyenda utilizan el mismo nombre; la exportación existente toma las etiquetas de esas vistas.

El grupo ausente se muestra como **No especificado**, conservando su conteo. No se ocultan ni reclasifican pendientes solo para eliminar la categoría.

El generador compartido permite esta presentación completa como opción; las otras leyendas conservan su distribución. Se escapa el texto antes de insertarlo como HTML para preservar su contenido sin interpretarlo como etiquetas.

**Pruebas:** pasaron las 34 pruebas de calidad-datos, tablero y ficha-actividad, incluidas dos nuevas que comprueban etiquetas completas, escape, conservación de claves/conteos y nombres PG sin prefijo. No se actualizaron dependencias. **La vista en navegador, el sitio remoto y el PPTX renderizado siguen sin verificación visual**; el acceso al navegador había sido detenido al no poder verificar su URL. No se usó una vía alternativa de automatización para eludirlo. La implementación local no prueba publicación.

## Doce actividades sin enfoque encontradas

La lectura fresca identificó cuatro registros de Museos y ocho de Ileana. Las actividades de Fátima del lote 1348–1414 ya tenían Cultural por la corrección anterior y no se tocaron.

Se completaron ocho celdas de **Registro_Actividades, columna L**:

| Fila | ID | Actividad | Enfoque | Sustento |
|---:|---|---|---|---|
| 972 | ACT-SCWO79422 | Arte en tu Plaza exposición "Fragmentos y Comlicidades | Artística | Muestra de artes visuales identificada en fuente y registros comparables |
| 1415 | ACT-SCYG88344 | Erase una vez RAP | Artística | Concierto o formación/creación literaria-musical identificados por título, tipo y fuente |
| 1417 | ACT-SCQN89121 | Trío Guanaxteco | Artística | Concierto o formación/creación literaria-musical identificados por título, tipo y fuente |
| 1418 | ACT-SCGK12176 | Flor de Autonomía | Artística | Concierto o formación/creación literaria-musical identificados por título, tipo y fuente |
| 1419 | ACT-SCNU71129 | Taller de novela | Artística | Concierto o formación/creación literaria-musical identificados por título, tipo y fuente |
| 1420 | ACT-SCCF54781 | WAPA - Taller de coplas y décimas del huapango | Artística | Concierto o formación/creación literaria-musical identificados por título, tipo y fuente |
| 1421 | ACT-SCIH64446 | Concierto San Felipe | Artística | Concierto o formación/creación literaria-musical identificados por título, tipo y fuente |
| 1422 | ACT-SCYR45800 | Taller FECA | Cultural | Meta QC4102.2601 de capacitación en formulación/planeación/evaluación de proyectos culturales |

Son criterios operativos apoyados en tipo, descripción, clave específica y fuentes; no constituyen una validación institucional nueva ni se aplican universalmente por dirección o disciplina. En particular, Taller FECA se clasifica por el contenido de la meta QC4102.2601 sobre formulación, planeación y evaluación de proyectos, sin cambiar su meta o asumir que se realizó una actividad artística específica. La discrepancia histórica de los conciertos con metas de encuentros se conserva pendiente, sin corregirla por este campo.

Fuentes consultadas: `archivos_base/Soraya Villegas/Formato Interno de Indicadores  (2).xlsx`, OscarEric fila 34; `archivos_base/Ileana Salazar/Reporte de programación SDPAC_actualizado.xlsx`, Hoja1 filas 2, 6, 7, 8, 10, 11 y 20; Cat_Alineacion y Cat_Enfoque actuales; registros comparables, incluidos antecedentes de la misma exposición. No se borraron/fusionaron posibles coincidencias.

## Cuatro casos conservados sin enfoque

| Fila | ID | Actividad | Motivo |
|---:|---|---|---|
| 917 | ACT-SCQG53896 | Retrato de Lupe Marín Pironisa | Fuente con ambas opciones Artística y Cultural marcadas |
| 918 | ACT-SCXA40559 | Collage de colores (Tarot)me | Fuente con ambas opciones Artística y Cultural marcadas |
| 919 | ACT-SCIH03404 | Monotipia de Tamayo. Un verano en el el museo | Fuente con ambas opciones Artística y Cultural marcadas |
| 1416 | ACT-SCSD72334 | Festival Medieval | Festival sin programa detallado que permita decidir su enfoque |

En LauraGuias filas **91, 94 y 95**, las columnas E Artística y F Cultural están ambas marcadas. Los registros comparables no ofrecen un criterio uniforme: hay versiones Cultural y Artística. No basta copiar una ni deducir que Cultura comunitaria implica Cultural. Solicitar a Museos una sola clasificación para cada caso, conservando los IDs. Las posibles duplicaciones de esos registros siguen sujetas a revisión; no se borraron.

**Festival Medieval:** la fuente solo declara festival, nombre, lugar y programa general. Falta el programa/descripción que permita distinguir su enfoque principal; no se asignó uno solo por la palabra Festival. Es una aclaración para el expediente de Ileana, no para Fátima.

## Escritura y verificación

Se inspeccionaron las ocho filas A:BN con valores, formatos, validaciones y chips. Se comprobó nuevamente ID y vacío de L inmediatamente antes de escribir. La solicitud utilizó únicamente updateCells de las ocho L, con fields=userEnteredValue. No había validación/chips en los destinos; los valores pertenecen a Cat_Enfoque.

Respaldo previo, solicitudes exactas y lectura posterior: `respaldo/privado_cargas_2026-11-03/enfoques_pendientes_*.json`, excluidos de Git. Lectura posterior de cada fila completa A:BN: ocho cambios esperados, cero cambios fuera de L y formatos/validaciones/chips conservados. La lectura completa A1:L2260 confirma **cuatro enfoques vacíos**. Contiene 1484 IDs de actividad; esta tarea no creó ninguno. Se preservó un registro añadido por captura ajena a estas correcciones, sin atribuírselo a esta carga.

No se tocaron folios, nombres, población, territorio, evidencia, metas, AppSheet, permisos o columnas deshabilitadas. No se usó Dashboard_Master. La comprobación de la DB fue de valores/metadatos, no visual.
