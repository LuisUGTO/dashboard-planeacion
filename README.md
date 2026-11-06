# Dashboard de Planeación de Cultura

**05/11/2026:** revisiones documentadas de grupos distintos implementadas localmente; recálculo de identidad242→206, sin borrar actividades. Pendiente publicación y verificación visual. [Detalle y límites](documentacion/Revisiones_Grupos_Distintos_2026-11-05.md).

**05/11/2026:** cruce documental inicial de242 alertas con respuestas de Soraya y Claudia; se identificaron casos con contraparte y respuestas que aún requieren cotejo. [Detalle por ID](documentacion/Cruce_Duplicaciones_2026-11-05.md). Sin cambios en DB.

**05/11/2026:** dos declaraciones de sesiones de Adriana Escamilla reconocidas localmente; 66→64 avisos en recálculo, 43 pruebas pasaron. Falta publicar y verificar visualmente. [Detalle](documentacion/Revision_Sesiones_Adriana_Escamilla_2026-11-05.md).

**04/11/2026 (11:20):** completadas75 actividades en un solo lote (*batch* de41 operaciones) sin solicitudes celda por celda:67 de Fátima Molinar con alineación PG/PEC de fomento al libro y lectura;8 de Ileana Salazar con direcciones, disciplinas, espacios, PG/PEC y55 asistentes de FECA en territorio/población. Relectura nativa API verificada; 42 pruebas pasaron. [Verificación](documentacion/Completar_Actividades_Fatima_Ileana_2026-11-04.md).

**04/11/2026 (10:25):** aplicados cuatro ajustes en Registro_Territorio desde población (ACT-SCMV29363, ACT-SCUO63965, ACT-SCYP51812, ACT-SCDD82613) con respaldo y relectura nativa; ACT-SCPD08021 ya había sido ajustado por Luis. Recálculo diferencias 6→1, identidad 284 sin cambio; ACT-SCMI05636 queda pendiente de decisión. [Verificación](documentacion/Conciliacion_Territorio_Cuatro_Casos_2026-11-04.md).

**04/11/2026:** completados48 faltantes de población general por diferencia territorial, a solicitud de Luis. Recálculo diferencias54→6, identidad284 sin cambio; el complemento no certifica las fuentes. [Verificación](documentacion/Complementos_Poblacion_2026-11-04.md).

**Conciliación adicional del03/11:** DB verificada, diferencias72→54 y coincidencias286→284. Doce formaciones y cinco repeticiones de total corregidas; tres respuestas de septiembre recuperadas y un par confirmado sustituido.24 poblaciones nuevas, cero actividades nuevas;42 pruebas pasaron. [Resultado y límites](documentacion/Conciliacion_Adicional_Fuentes_2026-11-03.md).

**03/11, 15:28 — respuestas de Ileana y Soraya aplicadas parcialmente:** WAPA conciliado a94 asistentes sin duplicar; siete desgloses corregidos, dos fechas y dos totales de Museos incorporados; tres duplicados confirmados conservados como sustituidos. Diferencias79→72 e identidad292→286 en recálculo comparable; 42 pruebas pasaron. [Resultado y límites](documentacion/Aplicacion_Ileana_Soraya_2026-11-03.md).

El tablero se abre desde `index.html`, que permanece en la raíz del proyecto.

## Contexto y continuidad — 31 de octubre de 2026

**Duplicaciones — ajuste local del03/11/2026:** horas explícitas distintas ahora distinguen funciones: identidad320→292 en el mismo corte. Captura de ejercicio de Cañada marcada como sustituida en DB, con exclusión reversible implementada localmente; se conservan IDs, hijos, cifras y CSV. **42 pruebas pasaron**. [Reglas, verificación y pendientes](documentacion/Revision_Duplicaciones_y_Discrepancias_2026-11-03.md). Falta publicar conjuntamente index.html y los dos módulos JS; sin commit/push/publicación del agente. No se borraron registros ni se ocultaron alertas sin fundamento.

**Edith y Adriana Escamilla — 03/11/2026:** aclaraciones aritméticas de Edith confirmadas; Bandas/Orquestas corregido a569 y hospital a240 (5 participantes+235 espectadores). Dos diferencias resueltas con verificación y respaldo; el contador general conserva otros pendientes. Conservatorio recuperado y analizado, pendiente correspondencia de metas/modelo mensual y cortes. [Resultado y desglose de las67 alertas de cantidades](archivos_base/Adriana%20Escamilla/Resultado_Respuestas_2026-11-03.md). Sin altas ni publicación por esta tarea.

**Fátima, claves completas y nuevas actividades — 03/11/2026:** aplicadas tres altas confirmadas (Encuentro de lectores 220, Santo Domingo 130 y Lectura y entrega de obra 12), con hijos y fuentes; San Felipe corregido a 40 incluyendo al ponente y sin alertas. Código de Talleristas recibido, sin importación indiscriminada. [Resultado y pendientes](archivos_base/Fatima%20Molinar/Resultado_Claves_y_Nuevas_Actividades_2026-11-03.md). La captura posterior del usuario muestra 1377; el recálculo tras estas altas da 1380 porque tres registros nuevos tienen campos por completar y uno anterior se resuelve. No es porcentaje de calidad. Para la presentación usar corte hasta septiembre y no certificar totales globales/cumplimiento al 100% mientras continúen las conciliaciones indicadas. Sin publicación por el agente.

**Lectura CSV corregida localmente — 03/11/2026:** el CSV gviz omitía sedes reales por mezclar números y texto, provocando alertas falsas. El cargador ahora usa exportación CSV por gid y rangos operativos explícitos, preserva los valores y rechaza esquemas incorrectos. **37 pruebas pasaron**; integración con las cinco respuestas HTTP reales/PapaParse y lectura directa coinciden en **1378 alertas** para el corte actual. El usuario seguía viendo 1443; **falta publicar index.html** para que el sitio use la corrección. No se ocultaron alertas ni se publicaron cambios. [Diagnóstico y verificación](documentacion/Correccion_Lectura_CSV_Conciliacion_2026-11-03.md).

**Dos públicos pendientes de Fátima resueltos — 03/11/2026:** 32 y 30 asistentes confirmados, cuatro poblaciones y dos territorios actualizados, sin nuevas actividades. Lote de 67: **65 realizadas con público y dos canceladas**; sustituye el pendiente de Raúl para esos dos datos. Una carpeta de fotos vinculada sin acceso/contenido verificados; el otro caso no tiene fotos en su fuente. [Resultado](archivos_base/Fatima%20Molinar/Resultado_Publicos_32_30_2026-11-03.md).

**Edith — revisión del archivo contestado, 03/11/2026:** 45 desgloses mensuales recibidos; dos diferencias aritméticas y naturaleza digital del alcance pendientes de conciliar. Confirmada captura de prueba de Cañada sustituida, conservada con trazabilidad y todavía sin exclusión automática. Se anotaron seis descripciones en DB, sin altas ni cambios numéricos. [Resultado y pendientes concretos](archivos_base/Edith/Resultado_Revision_Respuestas_2026-11-03.md).

Consultar [CONTEXTO_PROYECTO.md](CONTEXTO_PROYECTO.md) para arquitectura vigente, estado confirmado, pendientes, seguridad y traslado a `C:\Proyectos\dashboard-planeacion` en la Lenovo. Las instrucciones de trabajo están en [AGENTS.md](AGENTS.md).

**Conciliación y población — 03/11/2026:** aplicada la autorización de Luis para completar Población General desde territorio: 13 filas nuevas para actividades existentes y 485 celdas de desglose comprobable en 266 actividades. Auditoría recalculada: **1435 → 1377**, 58 registros sin alertas; cifra del sitio remoto no verificada visualmente. [Resultado, criterios y respaldos](documentacion/Conciliacion_Poblacion_desde_Territorio_2026-11-03.md). Adriana Ugalde contestó: **QC4098 confirmado**, públicos todavía pendientes; [revisión de las trece respuestas](archivos_base/Adriana%20Ugalde/Resultado_Revision_Respuestas_2026-11-03.md). No hubo altas de actividades, cambios de código ni publicación en esta tarea.

**Última actualización de datos — 03/11/2026:** se añadieron 11 funciones de septiembre de Marcelina/DGPA: nueve con público conciliado (2194 asistencias) y dos con público pendiente por diferencias; se conservaron los registros existentes. [Resultado de Marcelina](archivos_base/Marcelina/Resultado_Carga_Respuestas_2026-11-03.md). También se completó público de diez presentaciones existentes de Fátima (285 asistencias, incluido Focus corregido a 25) y se anotaron dos cancelaciones. [Resultado inicial de Fátima](archivos_base/Fatima%20Molinar/Resultado_Actualizacion_Respuestas_2026-11-03.md) y [aclaraciones posteriores/Focus](archivos_base/Fatima%20Molinar/Seguimiento_Aclaraciones_2026-11-03.md). Ambas cargas tienen respaldo/verificación nativa y siguen siendo parciales.

**Cancelaciones — implementado localmente el 03/11/2026:** la marca explícita al inicio de Descripcion_Breve excluye canceladas de los indicadores y conserva su historial en Conciliación, ficha y CSV. Pasaron 32 pruebas. El cambio de código no se ha publicado y no se verificó visualmente el sitio remoto; no asumir que la versión pública ya aplica esta exclusión.

**Enfoque de Fátima — aplicado en DB el 03/11/2026:** L1348:L1414 se completó con Cultural por el criterio operativo de promoción/difusión del libro, consistente con presentaciones editoriales anteriores, incluida otra de Fátima bajo la misma meta. [Criterio y verificación](archivos_base/Fatima%20Molinar/Correccion_Enfoque_2026-11-03.md). No es una validación institucional nueva ni una regla universal por disciplina; los otros campos se conservaron.

**Leyendas y otros enfoques — 03/11/2026:** leyendas PG de Inicio y Enfoque de Matriz ajustadas localmente para mostrar nombres completos; solo en esa distribución PG se omite la numeración inicial, conservando los datos. Pasaron 34 pruebas. En DB se completaron ocho de los doce enfoques vacíos; cuatro requieren confirmación por fuente ambigua. [Detalle y pendientes](documentacion/Ajuste_Leyendas_y_Enfoques_2026-11-03.md). Sin publicación ni validación visual del sitio remoto/PPTX.

**Mapa de Inicio — ajuste local posterior del 03/11/2026:** el mapa ocupa el espacio disponible de la tarjeta al crecer las gráficas vecinas, manteniendo un mínimo de 340 px; Leaflet se reajusta al tamaño del contenedor. Pasaron 35 pruebas. No cambia datos de cobertura. Publicación y revisión visual de navegador/exportación pendientes.

**Actualización anterior — 01/11/2026:** dos altas de septiembre de Marcelina, un territorio de Soraya y 23 celdas existentes corregidas. Consultar el [resultado por expediente](documentacion/Resultado_Cargas_y_Pendientes_2026-11-01.md) y el [inventario de los 23 libros](documentacion/Control_Matrices_y_Cargas_2026-11-01.json). No volver a pegar preparaciones sustituidas.

**Aclaraciones listas para revisión — 01/11/2026:** [guías PDF y Excel para responder por expediente](documentacion/Paquetes_Pendientes_por_Area_2026-11-01.md), guardados en las carpetas de cada enlace. Los Excel son formularios de respuesta de una hoja, no archivos para importar directamente a la DB.

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
