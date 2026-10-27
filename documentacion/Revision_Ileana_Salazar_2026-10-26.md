# Revisión para preparar la carga de Ileana Salazar

Responsable confirmado por Luis: **iysalazarh@guanajuato.gob.mx**.

Se revisó `archivos_base/Ileana Salazar/Reporte de programación SDPAC.xlsx`, hoja `Hoja1`, rango A1:Y27. Contiene 26 renglones de programación, que mezclan eventos, talleres, jurados, apoyos y beneficiarios. No equivalen necesariamente a 26 actividades nuevas para importar.

## Qué se puede recuperar sin pedir otra captura completa

- Conservar nombres, artistas, fechas completas, ciudades, sedes y cifras expresamente reportadas, sin inventar los faltantes.
- Estandarizar fechas y formatos monetarios, manteniendo el significado original del presupuesto. Presupuesto no equivale automáticamente a monto contratado, ejercido o ingreso.
- Identificar la meta de **20 de los 26 renglones** mediante la clave completa de Programa, su descripción en `Listas` de la matriz 2026 y la coincidencia exacta de esa descripción en `Cat_Alineacion` de la base. Una coincidencia de catálogo no confirma que la clasificación original del evento sea correcta.
- Recuperar los campos de alineación que tenga esa fila del catálogo. No escoger arbitrariamente entre varias acciones ni completar los campos que el propio catálogo tenga vacíos.
- Completar disciplina cuando una subdisciplina inequívoca esté identificada. Por ejemplo, “Taller de novela” permite proponer Narrativa / Literatura, pero festivales amplios y apoyos necesitan revisar su contenido. No clasificar todos los registros como Teatro por el área que reporta.
- Buscar el municipio y la localidad de una sede cuando el catálogo ofrezca una coincidencia única. El municipio por sí solo no determina localidad ni zona prioritaria.
- Generar los identificadores y folios al preparar la carga, contrastándolos entonces con la base vigente y con las cargas reservadas.

## Cruce de metas identificado

| Programa del archivo | ID de alineación en la base | Renglones de Hoja1 |
|---|---:|---|
| QC4139.2601 | 4 | 2, 21 |
| QC4140.2601 | 5 | 3, 4, 5, 13, 14, 22 |
| QC4140.2602 | 6 | 6, 7 |
| QC4142.2601 | 8 | 8 |
| QC4142.2603 | 10 | 9, 10, 11 |
| QC4102.2601 | 1 | 12, 19, 20 |
| QC4102.2602 | 2 | 15, 17 |
| QC4102.2603 | 3 | 16 |

No hay correspondencia completa verificada para los otros seis renglones:

- **GA2477.2600**: renglones 18, 24, 25 y 26. GA2477 no aparece en el catálogo de alineación revisado.
- **QC4051.2603**, renglón 23: la clave general QC4051 existe, pero la terminación .2603 no se resolvió en la matriz utilizada. El catálogo general la vincula a Formación e Investigación, mientras el archivo indica SDPAC. Confirmar antes de elegir una meta o dirección.
- **PB3571.2600**, renglón 27: el catálogo contiene varias metas de PB3571 asociadas al Forum; el código genérico .2600 no permite escoger una y el registro refiere un apoyo teatral fuera del estado. Confirmar clasificación.

## Aclaraciones mínimas para Ileana

1. **Cantidad y sesiones.** ¿La columna Cantidad cuenta talleres distintos, funciones, sesiones o apoyos? Hay ocho renglones sin cantidad. No usar el número de días del intervalo como sesiones.
2. **Fechas y ejecución.** Faltan fechas exactas en los renglones 5, 12, 13, 17 y 18. Varios periodos terminan el 31 de diciembre: confirmar si son periodos administrativos o fechas de realización y qué ya se ejecutó al corte. El renglón 27 inicia en octubre; separarlo si se cargará enero–septiembre.
3. **Sedes y territorio.** Hay 21 renglones sin sede y 16 sin ciudad. Confirmar ubicaciones que no se puedan recuperar de otros registros. Todas las celdas de zona prioritaria están vacías: no convertir ese vacío en “No”.
4. **Población.** Confirmar si Mujeres y Hombre representan adultos o el total de todos los grupos. En el renglón 2, 63 mujeres + 76 hombres + 18 niñas/adolescentes + 23 niños/adolescentes = 180; sumar solo las dos primeras columnas produciría 139. Esto sugiere grupos excluyentes, pero no prueba la regla para todas las filas. No duplicar discapacidad o edad si son subconjuntos.
5. **Asistentes, agentes y beneficiarios.** Distinguir público, personas creadoras contratadas, jurados y beneficiarios de apoyos. El número de artistas o beneficiarios no se convierte automáticamente en asistentes. Confirmar también si los totales cero significan cero real, dato pendiente o actividad no realizada.
6. **Escenautas.** Los renglones 13 y 22 reportan el mismo presupuesto ($1,129,527.77), 1,067 niñas/adolescentes y 1,068 niños/adolescentes, total 2,135. Confirmar si describen el mismo festival antes de sumarlos o importar ambos. La carga de Marcelina ya incluye funciones individuales de ese festival: confirmar si los 2,135 ya contienen ese público, para evitar contar dos veces el concentrado y sus funciones.
7. **Alineación pendiente.** Confirmar la meta y el área responsable de GA2477.2600, QC4051.2603 y PB3571.2600. “SIN ASIGNAR” en varias filas del catálogo es una limitación del catálogo, no una dirección que podamos deducir.
8. **Evidencias.** Solicitar enlaces o archivos disponibles; no fabricar registros de evidencia vacíos.

Existe además un registro previo de Ileana, `ACT-SCDW90018`, “Asamblea WAPA - Taller de maquillaje teatral de danza”, con fecha 28 de marzo. El archivo nuevo reporta un taller WAPA de maquillaje el 29 de mayo. El parecido del título no basta para fusionarlos ni para copiarles la fecha; confirmar si son sesiones diferentes.

## Recomendación

Preparar la normalización de los datos explícitos y las correspondencias únicas, conservar los pendientes en una lista breve y solicitar solo esas aclaraciones. No cargar todavía los concentrados potencialmente duplicados ni convertir presupuesto, sesiones, agentes y público en cantidades equivalentes. No se modificó el Excel original ni se insertaron registros en la base.

Fuentes: archivo de Ileana indicado arriba; `archivos_base/DB_Sistema_Cultura_GTO_V1.xlsx`, hojas Cat_Alineacion, Cat_Disciplina y Registro_Actividades; matriz 2026 `C:/Users/luisa/Downloads/Matriz_PG_PEC_para_revision.xlsx`, hoja Listas; carga preparada de Marcelina del 26 de octubre en outputs.
