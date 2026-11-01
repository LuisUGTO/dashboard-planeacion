# Dashboard de Planeación de Cultura

El tablero se abre desde `index.html`, que permanece en la raíz del proyecto.

## Contexto y continuidad — 31 de octubre de 2026

Consultar [CONTEXTO_PROYECTO.md](CONTEXTO_PROYECTO.md) para arquitectura vigente, estado confirmado, pendientes, seguridad y traslado a `C:\Proyectos\dashboard-planeacion` en la Lenovo. Las instrucciones de trabajo están en [AGENTS.md](AGENTS.md).

**Última actualización de datos — 01/11/2026:** dos altas de septiembre de Marcelina, un territorio de Soraya y 23 celdas existentes corregidas, con respaldo y verificación. Consultar el [resultado y pendientes por expediente](documentacion/Resultado_Cargas_y_Pendientes_2026-11-01.md) y el [inventario de los 23 libros](documentacion/Control_Matrices_y_Cargas_2026-11-01.json). Las cargas siguen siendo parciales; no volver a pegar preparaciones sustituidas.

El tablero es HTML/JavaScript estático y consulta cinco hojas de Google Sheets; no requiere `npm install` ni compilación. Usa bibliotecas CDN y necesita red y acceso de lectura a las fuentes. No implementa login ni escrituras a la base. AppSheet mantiene la captura operativa; Supabase/SQL son alternativas documentadas, sin integración activa identificada.

Para abrirlo, usar `index.html` en un navegador moderno. Con Python instalado, opcionalmente servir la raíz con `py -m http.server 8000 --bind 127.0.0.1` y abrir `http://127.0.0.1:8000/`. Las 28 pruebas existentes pasan con Node v24.22.1 en el corte de auditoría. Esto no certifica permisos, datos productivos ni publicación remota.

Antes del traslado, revisar los cambios locales y archivos sin seguimiento en GitHub Desktop; clonar solo recupera lo que se haya confirmado y subido. Existen borrados previos de dependencias temporales versionadas: no seleccionar todos los cambios automáticamente. Revisar también privacidad de respaldos, capturas y firmas: excluir carpetas de Pages no las hace privadas en GitHub.

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

Registros capturados, actividades reportadas y sesiones se mantienen separados. El esquema se describe en [Conciliación y concentrados](documentacion/Conciliacion_y_concentrados_2026-10-26.md). **Límites operativos confirmados por el usuario el 31/10:** actividades A:BN; territorio A:L; BO en adelante de actividades y M en adelante de territorio no se utilizan. `Dashboard_Master` está inutilizada. Aunque existen históricamente `Tipo_Registro` y `Cantidad_Actividades` en BU/BV y el código admite esos campos, no deben utilizarse para nuevas cargas. Esa dependencia requiere resolver el diseño de concentrados con el esquema vigente; no sustituir cantidades por sesiones ni activar columnas automáticamente.

La gráfica mensual separa el público acumulado de varios meses, sin atribuirlo íntegramente al mes de inicio ni inventar una distribución. Este ajuste está en el commit local `a06c9173`; su publicación remota no se verificó. Consultar [revisión del pico de enero](archivos_base/Edith/Revision_Pico_Enero_2026-10-29.md).

`_config.yml` excluye las carpetas de trabajo del proceso de GitHub Pages. Se debe subir también este archivo para que Jekyll no intente procesar dependencias y documentos temporales. `.gitignore` previene agregar nuevos temporales, pero no retira los que ya estaban versionados.

La ficha de actividad incluye alertas, comparación de totales, usuario y fecha de captura, periodo completo, clasificación, acciones PG y sede/tipo/detalle del espacio por separado. Los detalles territoriales y demográficos permiten localizar cada registro por su ID. Las cantidades ausentes se distinguen de los ceros informados; una fila vacía de evidencia no cuenta como archivo. La presentación está en `assets/js/ficha-actividad.js`, que debe publicarse junto con `index.html` y `assets/js/calidad-datos.js`. No modifica datos de la base ni el exportador CSV.

Comprobación local de conciliación, matriz y fichas: `node --test tests/calidad-datos.test.cjs tests/tablero.test.cjs tests/ficha-actividad.test.cjs`.

## Flujo recomendado de edición

1. Para el entregable 1, abrir el archivo `_BASE_PDF.docx`.
2. Realizar los cambios en Microsoft Word.
3. Usar `Archivo > Guardar como` y seleccionar PDF.

El PDF aprobado es la referencia de diseño. El Word se adapta a su estructura para permitir modificaciones y una posterior exportación. Al añadir o ampliar contenido, revisar los saltos de página y la altura de las filas antes de exportar.
