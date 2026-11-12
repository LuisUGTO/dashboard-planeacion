# Lote propuesto de corrección · CEARG, PB3567 · 12/11/2026

Estado: aplicado y verificado el 12/11/2026. Se respaldaron los valores anteriores en un archivo local temporal. La relectura confirmó 14 celdas modificadas: diez fechas y cuatro campos de alineación del concierto (D, G, J y K). Se conservaron formatos y validación en los rangos cotejados. Falta verificar el porcentaje en la Matriz.

| ID · ficha | Fila de referencia | Inicio y fin en la base | Inicio y fin propuestos | Respaldo |
|---|---:|---|---|---|
| ACT-SCPE79917 · Introducción a la interdisciplina | 429 | 2026-09-03 a 2026-09-24 | **2026-03-10 a 2026-03-29** | CEARG Enero–Septiembre, MARZO fila 8. Respuestas de Claudia fila 14 confirma la misma ficha. |
| ACT-SCLV97219 · Metodología de procesos creativos | 431 | 2026-09-03 a 2026-09-24 | **2026-04-13 a 2026-04-26** | ABRIL fila 11. Respuestas fila 24 confirma la misma ficha y menciona una variante de nombre. |
| ACT-SCTP93796 · Producción Audiovisual | 432 | 2026-09-04 a 2026-09-04 | **2026-05-04 a 2026-05-23** | MAYO fila 7. Respuestas fila 37 confirma la misma ficha. |
| ACT-SCCL28269 · Modelado 3D en Blender | 428 | 2026-05-02 a 2026-06-28 | **2026-05-16 a 2026-05-29** | MAYO fila 8. Respuestas fila 38 confirma la misma ficha. |
| ACT-SCZU26953 · Enclave | 1173 | 2026-05-01 a 2026-05-31 | **2026-10-21 a 2026-10-24** | Concentrado Octubre fila 7, fechas de las celdas K:L. El encabezado del archivo dice 2025, pero las fechas de la fila son de 2026. Es el caso con mayor cambio de corte. |

Destino de fechas: `Registro_Actividades!P:Q` de cada ID. Conservar el tipo fecha de Sheets. Los cuatro primeros se quedan dentro del corte a septiembre, pero cambian de mes o intervalo. Enclave pasa de mayo a octubre. Para los filtros que usan la fecha de inicio, revisar el efecto sobre los indicadores mensuales.

## Reclasificación lista para revisar

**ACT-SCEM34948 · Modulaciones** (fila de referencia 1225). Cambiar de meta **75 a 77**, dentro de PB3567. El Concentrado Octubre, fila 9, clasifica la ficha como promoción y documenta un concierto de música. La meta 77 incluye expresamente presentaciones artísticas de música. Fecha de realización: 23/10/2026. Público registrado: 50.

Destino propuesto: `Registro_Actividades!D:K` de la ficha, con la alineación del catálogo, verificando antes si el rango contiene fórmulas. La lectura de catálogo corresponde al ID 77 en la fila 78.

| Campo | Valor de destino |
|---|---|
| D · Clave_Proceso | 77 |
| E · Clave_Proceso_Txt | PB3567 |
| F · Meta | Formación e Investigación Artística |
| G · Nombre_Meta | Presentaciones artísticas de teatro, música y danza, editoriales, conversatorios, conferencias y charlas |
| H · Area | SUBSECRETARÍA DE DESARROLLO COMUNITARIO Y PROMOCIÓN PATRIMONIAL |
| I · Direccion | DIRECCIÓN GENERAL DE FORMACIÓN E INVESTIGACIÓN |
| J · Unidad_Medida | Presentaciones realizadas |
| K · Meta_Anual | 35, según la lectura de Cat_Alineacion!H78. Si K es fórmula, conservarla y comprobar que resuelva al valor del catálogo. |

La fuente documenta **una presentación**, no 50 presentaciones. Comprobar su contribución a la meta 77 tras el cambio. Si el tablero arrastra una cantidad superior a uno desde su configuración de cantidades, resolver ese numerador antes de considerar completa la reclasificación en el tablero.

## Casos fuera del lote

- **Entre Cartón y Escenario** (ACT-SCUQ80549): el archivo confirma que es promoción y debe salir del conteo de talleres. La proyección cinematográfica no figura expresamente en el alcance de la meta 77. Apartar la decisión de destino hasta hallar una meta compatible o autorizar dejarla sin meta específica.
- **Brotes** y **Encuentro Estatal de Saberes Locales**: faltan correspondencia con la meta y unidad de conteo. Revisar la meta 78 para Brotes como candidata, sin convertir sedes, grupos o sesiones en talleres.
- **Numerador de la meta 75**: cinco talleres identificados, cuatro hasta septiembre y uno en octubre. Es un mínimo documentado, no un cierre anual. El 326 continúa pendiente de rastreo. Este lote no escribe cantidades ni modifica la meta anual de 10.

## Aplicación y comprobación

1. Releer por ID los seis registros y la meta 77. Confirmar que las fechas y la asignación actual coincidan con el lote. Guardar un respaldo de los valores y fórmulas afectados.
2. Actualizar solo los rangos indicados, conservando IDs, folios, sesiones, evidencias, territorio y población. Si un valor actual cambió desde la lectura de referencia, apartar esa operación y cotejar el cambio.
3. Releer las celdas y revisar la Matriz por mes y por meta. Confirmar que la ficha del concierto salga de la meta 75 y se refleje en la 77 como una presentación. Registrar los porcentajes observados antes y después. Las seis fichas siguen siendo las mismas.
