# Dashboard de Planeación de Cultura

El tablero se abre desde `index.html`, que permanece en la raíz del proyecto.

## Organización

- `assets/identidad`: logotipos institucionales y de PULSO Q.
- `assets/capturas`: capturas utilizadas en los entregables.
- `assets/firmas`: firmas y elementos de validación documental.
- `assets/interfaz`: imágenes utilizadas por el tablero.
- `entregables/pdf`: PDF aprobados como referencia de diseño. Los archivos terminados en `_DESDE_WORD.pdf` pertenecen al intento anterior y no son las versiones recomendadas para entrega.
- `entregables/word`: versiones editables en Microsoft Word. Para el entregable 1, utilizar `Entregable_1_Diagnostico_Informacion_Institucional_BASE_PDF.docx`, reconstruido desde el PDF aprobado de 22 páginas.
- `entregables/fuentes`: fuentes HTML y Markdown de los entregables.
- `referencias`: propuesta técnica, diagnóstico de referencia y manual de identidad.
- `documentacion`: arquitectura, diagnóstico técnico y resúmenes de trabajo.
- `tools`: utilidades para reconstrucción, conversión y control de calidad.
- `respaldo`: copias anteriores conservadas para recuperación.
- `tmp`: archivos temporales de renderizado y revisión visual.

Las rutas de recursos de `index.html` y de los generadores están actualizadas para esta estructura.

## Conciliación y publicación del tablero

La sección Conciliación muestra diferencias de cifras, campos importantes pendientes, evidencia, cantidades por revisar y posibles duplicaciones. Permite filtrar, buscar y descargar los resultados. La lógica está en `assets/js/calidad-datos.js`; se publica junto con `index.html`.

Registros capturados, actividades reportadas y sesiones se mantienen separados. El esquema de concentrados mensuales y las columnas opcionales propuestas se describen en [Conciliación y concentrados](documentacion/Conciliacion_y_concentrados_2026-10-26.md). Estas columnas aún no se agregaron a AppSheet ni a la base productiva.

`_config.yml` excluye las carpetas de trabajo del proceso de GitHub Pages. Se debe subir también este archivo para que Jekyll no intente procesar dependencias y documentos temporales. `.gitignore` previene agregar nuevos temporales, pero no retira los que ya estaban versionados.

La ficha de actividad incluye alertas, comparación de totales, usuario y fecha de captura, periodo completo, clasificación, acciones PG y sede/tipo/detalle del espacio por separado. Los detalles territoriales y demográficos permiten localizar cada registro por su ID. Las cantidades ausentes se distinguen de los ceros informados; una fila vacía de evidencia no cuenta como archivo. La presentación está en `assets/js/ficha-actividad.js`, que debe publicarse junto con `index.html` y `assets/js/calidad-datos.js`. No modifica datos de la base ni el exportador CSV.

Comprobación local de conciliación, matriz y fichas: `node --test tests/calidad-datos.test.cjs tests/tablero.test.cjs tests/ficha-actividad.test.cjs`.

## Flujo recomendado de edición

1. Para el entregable 1, abrir el archivo `_BASE_PDF.docx`.
2. Realizar los cambios en Microsoft Word.
3. Usar `Archivo > Guardar como` y seleccionar PDF.

El PDF aprobado es la referencia de diseño. El Word se adapta a su estructura para permitir modificaciones y una posterior exportación. Al añadir o ampliar contenido, revisar los saltos de página y la altura de las filas antes de exportar.
