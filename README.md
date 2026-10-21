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

## Flujo recomendado de edición

1. Para el entregable 1, abrir el archivo `_BASE_PDF.docx`.
2. Realizar los cambios en Microsoft Word.
3. Usar `Archivo > Guardar como` y seleccionar PDF.

El PDF aprobado es la referencia de diseño. El Word se adapta a su estructura para permitir modificaciones y una posterior exportación. Al añadir o ampliar contenido, revisar los saltos de página y la altura de las filas antes de exportar.
