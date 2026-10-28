# Adriana Ugalde: preparación de concentrados enero–septiembre 2026

## Estado: preparado para revisión; todavía no pegar

Responsable: **augalde@guanajuato.gob.mx**. Fecha de preparación: 2026-10-27T19:06:10-06:00.

Se usaron los dos archivos de la carpeta Adriana Ugalde, su respuesta del 27 de octubre y una lectura actual de la base en línea (1,207 actividades). Los dos Excel son idénticos a las versiones revisadas el 23 de octubre. No se modificó la base, los catálogos ni AppSheet.

El Excel de preparación tiene las cuatro hojas operativas: 47 actividades, 47 filas de territorio y 47 de población; la hoja Regitro_Evidencia contiene solo encabezados. No se adjuntaron archivos inexistentes. Son 47 concentrados por meta y mes, no 47 talleres. Se conservan por separado 6,779 unidades reportadas en sus respectivas metas (talleres, apoyos, visitas, acciones y proyectos) y 180,531 atenciones reportadas. Estas unidades heterogéneas no deben describirse como 6,779 talleres ni como personas únicas.

## Cambios necesarios antes de pegar

1. **Cantidad de los concentrados.** La base actual llega a BT (72 columnas) y no contiene Tipo_Registro ni Cantidad_Actividades. La preparación conserva A:BT con sus encabezados existentes y propone agregar BU1 = Tipo_Registro y BV1 = Cantidad_Actividades. BO:BT, que pertenecen al bloque antiguo, permanecen vacías en estas nuevas filas; no se reutilizan ni se renombran. Habilitar y validar los dos campos en la base/AppSheet antes de pegar A2:BV48. El tablero local ya reconoce esos nombres, pero no se verificó el despliegue publicado en esta tarea.
2. **Cobertura estatal.** Esa opción no existe aún en Cat_Municipio. La preparación la usa para conservar un total estatal sin inventar municipios. Debe habilitarse en el catálogo/formulario con el criterio de que no equivale a presencia comprobada en los 46 municipios. No se distribuyó población entre ellos.
3. **Alineación y metas.** Conservar las selecciones originales de la columna de PG en el control adjunto. Donde no hay equivalencia exacta con el catálogo, la selección queda pendiente, en lugar de sustituir un objetivo por una acción distinta. La frase 4.4.2 Fomentar el hábito lector no tiene una coincidencia exacta actual. Planeación debe indicar su opción válida o ampliar el catálogo.
4. **Eje transversal.** Queda vacío en todo el lote, porque Adriana declaró que no puede elegirlo. No se usó Ninguno como respuesta automática ni se clasificó toda la actividad como Inclusión.
5. **Subdisciplina y datos ausentes.** Multidisciplinario existe como disciplina, pero no como subdisciplina general. No se eligió Interdisciplinario por conveniencia. Las subdisciplinas sin correspondencia inequívoca, sedes, sesiones y cantidades de agentes no informadas quedan pendientes.

La normalización no autoriza alterar el esquema o los registros existentes: estas modificaciones están propuestas en el archivo y deben aplicarse como un paso separado. La preparación no es todavía un lote que pueda pegarse sin esos ajustes.

## Criterio de normalización

- Una fila por meta y mes con actividad reportada. Inicio y fin son los límites del periodo mensual de consolidación, no las fechas efectivas de cada sesión.
- La cantidad reportada se conserva en Cantidad_Actividades. Total_Sesiones permanece vacío en todo el lote: Adriana confirmó que no dispone de ese dato por separado.
- Los ceros numéricos expresos se mantienen en el control y no generan registros ficticios. Un vacío no se convirtió en cero, aunque las fórmulas de acumulado muestren cero.
- La población se conserva como Población General / Dato global cuando no hay cifras por sexo o edad. Los nombres de grupos disponibles para seleccionar en una plantilla no constituyen un desglose cuantificado. No se utilizó la regla de adultos de Ileana en el expediente de Adriana.
- No se certifica que sean personas únicas; el área describe asistentes. Se usa atenciones o beneficiarios reportados, sin deduplicar ni repartir asistentes por intuición.
- Participación/acceso queda sin asignar porque la respuesta no define esa separación. No se igualó a quienes concluyen, agentes o ganadores.
- Se conservaron los Sí/No de contratación, apoyo y vinculación cuando están expresamente informados; las cantidades antiguas de agentes por familia no se replicaron por mes, porque Adriana indicó que aún las está revisando.
- Se conservó la meta anual declarada vigente por Adriana en cada registro preparado. Esto no actualiza el Cat_Alineacion que utiliza la matriz estratégica del tablero.

## Control de los 162 pares meta/mes

| Situación | Pares meta/mes |
|---|---:|
| Sin actividad | 62 |
| Preparado | 47 |
| Revisar existente | 13 |
| Sin dato | 30 |
| Pendiente catálogo | 10 |

El archivo Control_Concentrados_Todos_los_Meses.csv contiene las 162 filas, incluidos ceros, datos ausentes, altas propuestas y apartados. No se perdieron esos meses por no incluirlos como actividades.

## Capturas existentes: conservar IDs y revisar fechas

Adriana indicó que había iniciado enero en cinco metas. La base muestra lo siguiente:

| ID | Meta | Fechas actuales | Total_Sesiones actual | Tratamiento |
|---|---|---|---|---|
| ACT-SCYQ40561 | Cursos y talleres para promotores culturales e instructores de casas de la cultura | 09/02/2026 – 18/12/2026 | 8 | Apartar febrero–septiembre positivos: el registro abarca febrero–diciembre y no está claro qué mes representan sus 8 unidades. |
| ACT-SCQN95689 | Talleres de educación artística y cultural no formales impartidos en casas de cultura y salones culturales | 12/01/2026 – 31/1/2026 | 687 | Apartar enero. Las 687 son la cantidad de talleres reportada en la fuente; no se conservará como sesiones confirmadas. |
| ACT-SCVZ93952 | Cursos y talleres de formación lectora para bibliotecarios, niños narradores y escritores, padres de familia y promotores de lectura | 02/02/2026 – 28/02/2026 | 12 | Apartar febrero, cuya cantidad 12 coincide con el registro fechado en febrero. |
| ACT-SCKK85034 | Talleres de seguimiento a la implementación del programa curricular para la asignatura de artes en la educación básica | 07/09/2026 – 30/10/2026 | 3 | Apartar septiembre; el registro actual abarca septiembre–octubre y tiene 3. |
| ACT-SCYY07745 | Capacitaciones en danza folclórica dirigido a directores, maestros y ejecutantes del estado de Guanajuato | 01/04/2026 – 31/08/2026 | 2 | Apartar abril y agosto: el registro abarca ambos y tiene 2, frente a 1 y 1 en la fuente. |

No se corrigieron estas cinco actividades ni sus hijos. No se generan nuevas altas para sus 13 pares positivos apartados. Una revisión posterior debe conservar los IDs y definir cómo reemplazar los concentrados existentes sin volver a sumar su población.

## QC4098 y otros renglones

Los cinco rubros de QC4098 tienen diez pares positivos de julio y septiembre, pero sus metas no aparecen en Cat_Alineacion. La plantilla conserva Q3688 como clave anterior. Se mantuvieron separados y no se inventaron IDs de alineación. El archivo Control_Alcance_Territorial_QC4098.csv conserva los municipios y talleres por municipio, cuyos subtotales coinciden con los totales mensuales. Esa cantidad es de talleres, no de personas: no se copió a Cantidad de territorio. Los beneficiarios de QC4098 no están informados por mes; los ceros de fórmulas de acumulado no se interpretaron como cero asistentes.

Las hojas GA2476 y QB4039 del avance contienen filas administrativas o sin actividad positiva reportada; no se fabricaron actividades. La plantilla adicional de actividades fuera de SED menciona un taller de gráfica para adolescentes con 15 sesiones, pero no da mes, fechas, población ni alineación suficientes para cargarlo. Se conserva como pendiente sin aplicarle la ausencia de sesiones de los demás concentrados.

## Diferencias de metas anuales

| ID | Meta | Declarada en captura | Catálogo actual |
|---|---|---:|---:|
| 55 | Apoyos especiales a organismos culturales municipales | 94 | 74 |
| 58 | Actividades de promoción y animación lectora para público en general | 4800 | 125 |
| 59 | Encuentros y capacitaciones del personal bibliotecario incorporado a la red estatal de bibliotecas públicas del estado de Guanajuato | 15 | 2 |
| 61 | Proyectos socioculturales en barrios, colonias, periferias y/o comunidades | 1 | 10 |

En proyectos socioculturales, el avance conserva 10 con una nota de cambio a 1; la captura indica 1. La declaración vigente se conserva como 1 en el control. No hubo avance positivo para crear altas en ese rubro. Ninguna diferencia de catálogo se modificó en producción.

## Datos que conviene corroborar sin cambiar las cifras

Animación lectora de mayo contiene 318 actividades y solo 2 beneficiarios. Se preserva el 2 explícito, sin agregar miles por suposición. Visitas escolares de agosto contiene 20 visitas y cero beneficiarios; también se conserva el cero declarado, a reserva de revisión del área.

## Rangos de pegado después de resolver las condiciones anteriores

- Registro_Actividades: A2:BV48, una vez creados y validados los encabezados BU/BV y los valores de catálogo.
- Registro_Territorio: A2:L48, una vez admitida Cobertura estatal.
- Registro_Poblacion: A2:H48.
- Regitro_Evidencia: no pegar filas; solo tiene encabezados.

No sobrescribir registros ocupados, no pegar encabezados sobre otros datos y no importar este lote dos veces. Las tres hojas con datos están relacionadas por los nuevos IDs.

## Altas propuestas

| Fila de salida | Origen | Mes | Cantidad reportada | Población reportada | ID nuevo | Folio |
|---:|---|---|---:|---:|---|---|
| 2 | PB3563!12/03 | 3 | 8 | 1544 | ACT-SCUU58627 | SC-261027-190610 |
| 3 | PB3563!12/04 | 4 | 30 | 0 | ACT-SCKL18498 | SC-261027-190611 |
| 4 | PB3563!12/05 | 5 | 5 | 0 | ACT-SCXF86897 | SC-261027-190612 |
| 5 | PB3563!12/07 | 7 | 29 | 0 | ACT-SCRM42763 | SC-261027-190613 |
| 6 | PB3563!14/01 | 1 | 4 | 138 | ACT-SCRP97692 | SC-261027-190614 |
| 7 | PB3563!14/02 | 2 | 13 | 222 | ACT-SCHS62851 | SC-261027-190615 |
| 8 | PB3563!14/03 | 3 | 23 | 179 | ACT-SCVM12502 | SC-261027-190616 |
| 9 | PB3563!14/04 | 4 | 11 | 195 | ACT-SCFQ61653 | SC-261027-190617 |
| 10 | PB3563!14/05 | 5 | 43 | 2250 | ACT-SCYB59400 | SC-261027-190618 |
| 11 | PB3563!14/06 | 6 | 22 | 356 | ACT-SCBA86431 | SC-261027-190619 |
| 12 | PB3563!14/07 | 7 | 23 | 281 | ACT-SCAM41441 | SC-261027-190620 |
| 13 | PB3563!14/08 | 8 | 11 | 144 | ACT-SCZW79408 | SC-261027-190621 |
| 14 | PB3563!14/09 | 9 | 287 | 51211 | ACT-SCGV84178 | SC-261027-190622 |
| 15 | PB3563!16/08 | 8 | 20 | 0 | ACT-SCCX61856 | SC-261027-190623 |
| 16 | PB3563!18/02 | 2 | 258 | 4071 | ACT-SCUK62455 | SC-261027-190624 |
| 17 | PB3563!18/03 | 3 | 350 | 4598 | ACT-SCKG64864 | SC-261027-190625 |
| 18 | PB3563!18/04 | 4 | 497 | 11138 | ACT-SCNN38955 | SC-261027-190626 |
| 19 | PB3563!18/05 | 5 | 318 | 2 | ACT-SCOK35525 | SC-261027-190627 |
| 20 | PB3563!18/06 | 6 | 355 | 5226 | ACT-SCEL66785 | SC-261027-190628 |
| 21 | PB3563!18/07 | 7 | 376 | 6094 | ACT-SCQL45182 | SC-261027-190629 |
| 22 | PB3563!18/08 | 8 | 461 | 8219 | ACT-SCVR74722 | SC-261027-190630 |
| 23 | PB3563!20/02 | 2 | 1 | 300 | ACT-SCHC08275 | SC-261027-190631 |
| 24 | PB3563!20/04 | 4 | 1 | 5 | ACT-SCDP59689 | SC-261027-190632 |
| 25 | PB3563!20/05 | 5 | 4 | 12 | ACT-SCCD45544 | SC-261027-190633 |
| 26 | PB3563!20/06 | 6 | 4 | 30 | ACT-SCJQ63855 | SC-261027-190634 |
| 27 | PB3563!20/07 | 7 | 4 | 26 | ACT-SCRD44115 | SC-261027-190635 |
| 28 | PB3563!20/08 | 8 | 4 | 20 | ACT-SCHL08267 | SC-261027-190636 |
| 29 | PB3562!12/02 | 2 | 190 | 2914 | ACT-SCPP66372 | SC-261027-190637 |
| 30 | PB3562!12/03 | 3 | 767 | 16107 | ACT-SCEJ71737 | SC-261027-190638 |
| 31 | PB3562!12/04 | 4 | 618 | 9395 | ACT-SCHB85013 | SC-261027-190639 |
| 32 | PB3562!12/05 | 5 | 87 | 2061 | ACT-SCLQ41759 | SC-261027-190640 |
| 33 | PB3562!12/06 | 6 | 12 | 255 | ACT-SCYB01039 | SC-261027-190641 |
| 34 | PB3562!12/07 | 7 | 347 | 7458 | ACT-SCHL65934 | SC-261027-190642 |
| 35 | PB3562!12/08 | 8 | 915 | 20940 | ACT-SCAG26203 | SC-261027-190643 |
| 36 | PB3562!12/09 | 9 | 571 | 17206 | ACT-SCKA89843 | SC-261027-190644 |
| 37 | PB3562!14/03 | 3 | 12 | 406 | ACT-SCDP66279 | SC-261027-190645 |
| 38 | PB3562!14/05 | 5 | 5 | 230 | ACT-SCPQ50104 | SC-261027-190646 |
| 39 | PB3562!14/06 | 6 | 20 | 1967 | ACT-SCEA58503 | SC-261027-190647 |
| 40 | PB3562!14/07 | 7 | 12 | 2270 | ACT-SCDD87181 | SC-261027-190648 |
| 41 | PB3562!14/08 | 8 | 10 | 2000 | ACT-SCNU57763 | SC-261027-190649 |
| 42 | PB3564!9/06 | 6 | 1 | 23 | ACT-SCWA44548 | SC-261027-190650 |
| 43 | PB3564!13/02 | 2 | 9 | 180 | ACT-SCOG18090 | SC-261027-190651 |
| 44 | PB3564!13/03 | 3 | 4 | 148 | ACT-SCQM78193 | SC-261027-190652 |
| 45 | PB3564!13/05 | 5 | 5 | 100 | ACT-SCIY23468 | SC-261027-190653 |
| 46 | PB3564!13/06 | 6 | 8 | 210 | ACT-SCYQ39634 | SC-261027-190654 |
| 47 | PB3564!13/07 | 7 | 12 | 220 | ACT-SCBC82914 | SC-261027-190655 |
| 48 | PB3564!13/08 | 8 | 12 | 180 | ACT-SCBJ59585 | SC-261027-190656 |

## Fuentes y validaciones

- Los dos archivos de archivos_base/Adriana Ugalde; hojas PB3563, PB3562, PB3564, QC4098 y los renglones adicionales descritos.
- Respuesta de Adriana transmitida por Luis el 27 de octubre: corte, ceros, vigencia, sesiones no disponibles, definición de asistentes, eje pendiente, agentes en revisión y metas capturadas.
- Base conectada: Registro_Actividades A1:AN2130, encabezados A1:BT1, claves de los hijos, catálogos de alineación, municipios y disciplina. Se leyó en bloques acotados; no hubo escrituras.
- Cada celda del Excel final, tipos numéricos, fechas de Excel, IDs/folios únicos frente a la lectura actual y las cargas reservadas, relaciones de las cuatro hojas, conservación de cifras y de los originales.
- No se ejecutó una importación ni una validación de formularios de AppSheet en producción.
