# Adriana Ugalde: revisión de la base actualizada y alternativas de normalización

Fecha de revisión: **29 de octubre de 2026**. Se revisó la copia actualizada de `archivos_base/DB_Sistema_Cultura_GTO_V1.xlsx`, las cinco capturas de augalde@guanajuato.gob.mx en la hoja original de Google Sheets y los avances mensuales de su carpeta. **Este trabajo es de análisis: no se generó un Excel nuevo ni se modificaron la base en línea, los catálogos, AppSheet o el tablero.**

## Recomendación

**Conviene avanzar ahora con la normalización de la información confirmada y preparar correcciones directas en Google Sheets. La distribución debe seguir las cifras reales por meta y mes, no dividir los totales en nueve partes iguales.** La población pendiente se trata por separado. Normalizar la estructura no equivale a certificar como definitivos todos los asistentes.

La cuenta conectada tiene rol de edición en el archivo y están disponibles herramientas para escribir en Google Sheets. Se verificó la identidad de la cuenta y su rol mediante metadatos de permisos; no se probó con una escritura ni se cambió la compartición. Las reglas y la configuración de AppSheet requieren su propia comprobación: el acceso a Sheets no equivale a haber configurado sus formularios.

## Qué muestran las cinco capturas actuales

Las cinco aparecen con los mismos IDs y periodos tanto en la copia actualizada como en la consulta en línea. No se encontró, entre estas cinco, un intervalo literal enero–septiembre: hay registros de un mes y otros con fechas amplias que Adriana ya aclaró.

| ID / fila consultada en Registro_Actividades | Meta | Periodo actual | Cantidad en Total_Sesiones | Mes confirmado por Adriana |
|---|---|---|---:|---|
| ACT-SCYQ40561 / 573 | Formación de promotores | 09/02/2026–18/12/2026 | 8 | Febrero, 8 cursos/talleres |
| ACT-SCQN95689 / 574 | Talleres artísticos | 12/01/2026–31/01/2026 | 687 | Enero, 687 talleres |
| ACT-SCVZ93952 / 575 | Formación lectora | 02/02/2026–28/02/2026 | 12 | Febrero, 12 cursos/talleres |
| ACT-SCKK85034 / 576 | Artes en educación básica | 07/09/2026–30/10/2026 | 3 | Septiembre, 3 talleres |
| ACT-SCYY07745 / 579 | Danza folclórica | 01/04/2026–31/08/2026 | 2 | Una capacitación en abril y otra en agosto |

No debe distribuirse el registro de 687 talleres de enero entre nueve meses: Adriana confirmó que corresponde a enero. El archivo mensual tiene cantidades diferentes para los demás meses y se perdería esa información con un reparto uniforme.

## Hay cifras mensuales reales para sustituir el prorrateo

En `Avance de metas DGVDC 2026.xlsx`, hoja PB3562, la fila 12 registra estos talleres artísticos por mes:

| Enero | Febrero | Marzo | Abril | Mayo | Junio | Julio | Agosto | Septiembre |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 687 | 190 | 767 | 618 | 87 | 12 | 347 | 915 | 571 |

Por ejemplo, dividir 687 entre nueve produciría 76.33 talleres por mes: sería una estimación que no coincide con el reporte y que incluso genera fracciones de talleres. Redistribuir el total anual uniformemente tampoco reproduce los meses reportados.

Para danza, la fuente mensual distingue **88 beneficiarios en abril y 248 en agosto**; suman los **336** del registro demográfico existente. El ajuste correcto conserva ese reparto, junto con una capacitación en cada mes. No debe repartir 336 por mitades ni distribuirlo a todos los meses entre abril y agosto.

Estos valores provienen de la fuente recibida; conservar su trazabilidad no sustituye la revisión del área sobre la integridad de su población.

## Comparación de opciones

| Opción | Posibilidad técnica | Evaluación para este caso |
|---|---|---|
| Prorratear en el tablero | Se puede programar como una estimación identificada y separada del dato reportado. | No conviene para presentar los avances reales: presupone actividad y población uniforme, aun donde el área reporta cero o cantidades distintas. No corrige fechas, sesiones o registros de origen. |
| Dividir por igual los registros en la base | Se pueden crear filas y repartir cifras, pero los valores serían calculados por una suposición. | No recomendable: la estimación quedaría almacenada como si hubiera sido reportada y podría introducir fracciones, redondeos o municipios sin respaldo. |
| Normalizar por meta y mes con cifras reportadas | Se pueden corregir IDs existentes y agregar únicamente los meses que faltan. | **Recomendado.** Conserva los avances mensuales reales y permite completar la población después sobre los mismos IDs. |

## Hallazgos de estructura y del tablero

1. **Sesiones y actividades siguen mezcladas.** La base actual tiene A:BT, 72 columnas. No contiene Tipo_Registro ni Cantidad_Actividades. Las cifras confirmadas de cursos/talleres/capacitaciones no deben seguir almacenadas como sesiones verificadas: el área declaró que no cuenta con ese dato separado. Se propone agregar BU/BV al final, dejando intactas BO:BT, que pertenecen al bloque antiguo en desuso.
2. **No hay territorio vinculado a estas cinco capturas** en la consulta de claves de Registro_Territorio. No existe una distribución territorial de esos registros que podamos dividir por meses. Si el área solo informa alcance estatal, habilitar Cobertura estatal; no inventar 46 filas municipales ni asumir que todos los municipios participaron. Si existe un desglose municipal para una meta, conservarlo y no convertir cantidades de talleres en personas.
3. **Hay cuatro registros de población vinculados:** 116 para promotores, 16,765 para talleres artísticos de enero, 406 para formación lectora y 336 para danza. No hay población vinculada al registro de artes en educación básica en la consulta. Se debe conservar o corregir por ID; no duplicarla al crear los meses faltantes.
4. **Cobertura estatal sigue ausente de Cat_Municipio.** Se mantienen las 46 opciones municipales y las tres externas observadas; no se agregó una nueva opción durante el análisis.
5. **QC4098 sigue sin metas coincidentes en Cat_Alineacion.** Los diez pares positivos de julio/septiembre de esa familia, apartados en la preparación anterior, necesitan su alineación. La vigencia confirmada de metas no crea por sí misma sus IDs de catálogo. Las subdisciplinas y acciones PG/PEC que ya estaban pendientes tampoco se resuelven repartiendo cifras.
6. **La gráfica mensual de actividades cuenta filas.** En `index.html`, el bloque actPorMes incrementa una unidad por registro y popPorMes agrega la población al mes de Fecha_Inicio. No distribuye intervalos ni suma en esa gráfica Cantidad_Actividades. Aunque algunas métricas y la matriz ya reconocen el campo opcional, corregir solo las fechas no basta para mostrar 687 talleres en la serie de actividades: la gráfica debe distinguir registros capturados y cantidades de actividades reportadas.
7. **Población incompleta:** la serie mensual actual usa conversiones que llevan vacíos a cero. Al adaptar los concentrados conviene señalar meses o resultados incompletos, evitando presentar la ausencia de asistencia como un cero definitivo. La ficha y la conciliación ya distinguen estos casos en sus propios totales, pero eso no asegura que todas las gráficas lo hagan.

## Información que permanece pendiente

- Mayo, animación lectora: 318 actividades confirmadas, población 2 en revisión. Confirmar si el dato de junio incorpora reportes atrasados de mayo antes de redistribuir o descontar asistentes.
- Agosto, visitas escolares: 20 visitas confirmadas, asistentes pendientes de listas. El cero de origen no acredita cero asistentes.
- Sesiones, agentes y desgloses poblacionales ausentes no se estimarán a partir de talleres, días del mes, municipios ni metas anuales.
- Las fechas de primero a último día se usarían como **periodo de consolidación mensual** expresamente identificado, no como afirmación de que hubo sesiones todos esos días. Si hay fechas efectivas y eventos individuales, conservarlas.

Estos pendientes no impiden preparar las cantidades de actividades confirmadas ni corregir los periodos ya aclarados. Sí impiden certificar una población mensual completa en esos casos.

## Secuencia propuesta para una intervención directa

1. Guardar antes de la ejecución una copia de los rangos exactos que se modificarán y volver a leer las celdas de destino, sus fórmulas, validaciones e IDs. La base sigue recibiendo capturas; no aplicar una copia local completa encima del original.
2. Habilitar y validar los campos de tipo de registro y cantidad de actividades en la base y AppSheet, además de las opciones de cobertura/alineación requeridas. No renombrar ni reutilizar las columnas antiguas.
3. Corregir los cinco registros actuales y sus hijos conservando IDs y folios. Para danza, conservar el registro actual en uno de sus meses y crear otro para el segundo; distribuir sus hijos con las cifras mensuales de la fuente. No conservar además el concentrado de ambas capacitaciones sumando de nuevo su población. No copiar a cada mes una cantidad global de agentes cuyo reparto no esté confirmado.
4. Crear los concentrados por meta y mes restantes con las cantidades reportadas. Una revisión preliminar de la preparación anterior identifica 60 pares positivos con meta vigente en catálogo: cinco correcciones de registros existentes y 55 altas potenciales después de la separación de danza. Es una propuesta, no un lote ya emitido o libre de todos los pendientes. Los diez pares QC4098 siguen aparte. Comprobar nuevas capturas antes de emitir IDs/folios para las altas.
5. Mantener la población dudosa como pendiente y guardar sus cifras originales en el control de procedencia. Evitar filas ficticias de evidencia o población, y evitar duplicar asistentes que lleguen después: corregir los mismos registros.
6. Adaptar la gráfica mensual para sumar la cantidad de actividades reportadas, mantener las sesiones aparte e identificar datos poblacionales incompletos. Conservar el conteo de registros como otra medida, no como sustituto de los talleres.
7. Verificar con lectura posterior los cambios en las hojas, las relaciones entre padres/hijos, sumas mensuales, totales globales y resultados del tablero. No basta la respuesta de escritura de la API.

La corrección directa en la hoja original evita el paso manual de pegar un Excel, pero mantiene los mismos requisitos de trazabilidad, relaciones entre hojas, datos de origen y verificación. No se ha ejecutado ninguno de estos cambios en esta revisión.

## Fuentes y alcance de la revisión

- Copia actualizada `archivos_base/DB_Sistema_Cultura_GTO_V1.xlsx`, con fecha de modificación 29/10/2026; sus cuatro hojas operativas y los catálogos pertinentes se leyeron sin modificar el archivo.
- Hoja original: https://docs.google.com/spreadsheets/d/1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4/edit?usp=drivesdk . Se consultaron metadatos, rangos acotados de actividades, cabeceras, claves de hijos, catálogos y metadatos de celdas de las cinco actividades y cuatro filas de población. No se encontraron fórmulas ni validaciones de Sheets en las celdas activas de esas actividades inspeccionadas; eso no verifica reglas de AppSheet ni autoriza ampliar el alcance de una futura escritura.
- Fuente mensual: `archivos_base/Adriana Ugalde/Avance de metas DGVDC 2026.xlsx`, PB3562, filas 10:19, columnas G:O. SHA-256: 3cb750a39151fd8bce43c52ad878d37554affcde0e558287d777af9cabcfd0c8, igual a la versión ya revisada.
- Confirmaciones de Adriana transmitidas por Luis el 29 de octubre; seguimiento guardado en esta misma carpeta.
- Preparación del 27 de octubre y controles de meta/mes, utilizados para identificar qué queda fuera de las cinco correcciones.
- Código actual del tablero, funciones de agregación mensual y módulo de calidad. No se cambió código en este análisis.
