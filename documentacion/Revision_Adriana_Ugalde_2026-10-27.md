# Adriana Ugalde: actualización de normalización

Se habían revisado los dos archivos el 23 de octubre. Los archivos de la nueva carpeta `archivos_base/Adriana Ugalde` tienen el mismo contenido que esas versiones. Se incorporaron las respuestas de Adriana transmitidas por Luis el 27 de octubre.

Responsable identificado en la base actual: **augalde@guanajuato.gob.mx**.

## Confirmaciones

- Corte completo enero–septiembre de 2026; los ceros expresos significan que no hubo actividades. Metas declaradas vigentes.
- No dispone del dato separado de sesiones; los agentes aún están en revisión. No convertir una cantidad reportada de talleres en sesiones ni replicar los números antiguos de agentes por mes.
- Los beneficiarios son quienes asisten; no se confirmó que sean personas únicas entre talleres. No hay desgloses numéricos por sexo o edad en los concentrados proporcionados.
- La alineación declarada se conserva; el eje transversal queda pendiente. No seleccionar Ninguno como sustituto de dato desconocido.
- Adriana indicó que había iniciado enero de cinco metas de PB3562. La consulta de la base muestra fechas diferentes: febrero–diciembre, enero, febrero, septiembre–octubre y abril–agosto. No se duplican esos periodos por interpretar que todo corresponde a enero.

## Resultado local

Se preparó un Excel con cuatro hojas en:

`outputs/01a157b5-4b5c-7dc2-a3d8-393848e44b3f/normalizacion_adriana_2026-10-27/`

- 47 concentrados nuevos propuestos, 47 filas de territorio y 47 de población. Evidencias solo con encabezados.
- 13 pares meta/mes positivos apartados por posibles traslapes con cinco registros existentes.
- 10 pares positivos de QC4098 apartados porque las metas no aparecen en Cat_Alineacion; la fuente conserva además la clave Q3688.
- Control completo de 162 pares meta/mes de 18 rubros, incluidos 62 ceros expresos y 30 meses sin dato expreso.
- Se conservaron las cifras de cada meta y mes. El lote reúne 6,779 unidades heterogéneas (no llamarlas todas talleres) y 180,531 atenciones reportadas.
- 141 IDs y 47 folios verificados contra la lectura de 1,207 actividades, claves de hijos y cargas reservadas.

## Condiciones antes de pegar

El archivo es de preparación y **no está listo para pegar sin adaptar la base y validar sus catálogos**. La base actual tiene 72 columnas A:BT; no contiene Tipo_Registro ni Cantidad_Actividades. Se propone anexarlas en BU/BV, manteniendo intactos los encabezados del bloque antiguo BO:BT. No se modificó el esquema de la base ni AppSheet.

Tampoco existe Cobertura estatal en Cat_Municipio. Se mantiene esa categoría como alcance agregado, sin asumir 46 municipios. La subdisciplina genérica Multidisciplinario no existe en Cat_Disciplina y algunas acciones PG de origen no tienen equivalencia exacta en el catálogo; los pendientes se conservan, sin elegir opciones arbitrarias.

Las instrucciones, los registros apartados y las diferencias de metas anuales están en `LEEME_Adriana_Antes_de_Cargar.md` dentro de la carpeta de salida. No hubo escrituras en la base en línea ni cambios al código del tablero en esta tarea.

Las respuestas sobre Escenautas, GA2477, QC4051 y PB3571 enviadas durante esta revisión corresponden a **Ileana** y se anotaron en su revisión independiente. Su criterio de clasificar hombres/mujeres como adultos no se aplicó a Adriana.
