# Fátima — actualización de población con matriz en vivo

Fecha: 31/10/2026. Corte autorizado por el usuario: **enero–septiembre de 2026**. Se actualizó la base maestra, no la matriz fuente editorial.

Comprobación adicional de límites operativos: las solicitudes emitidas escribieron únicamente **N** en Registro_Actividades, **J** en Registro_Territorio y **A:H** en Registro_Poblacion. No se escribió desde BO de actividades ni desde M de territorio; tampoco se leyó o modificó `Dashboard_Master` para esta carga. Se respetan los límites A:BN y A:L aclarados por el usuario.

Ante la consulta del usuario sobre columnas desde M, se inspeccionaron las solicitudes efectivamente emitidas: las 53 escrituras de territorio tienen `startColumnIndex: 9`, `endColumnIndex: 10` (solo J), sin copias de formato ni ampliaciones de territorio. En una lectura diagnóstica posterior, M1388:AA1454 está vacío. En M1:P15 hay encabezados y fórmulas auxiliares; los mismos encabezados y fórmulas de M2:O3 ya figuran en el Excel local DB_Sistema_Cultura_GTO_V1.xlsx, versionado el 29/10 (e7853ef0). Esto prueba preexistencia de esas muestras, no una comparación histórica completa de todo M:AA. El respaldo anterior a la escritura de hoy solo cubría A:L en territorio; no afirmar que respaldó las columnas fuera de uso. No se borraron ni corrigieron esas fórmulas.

## Resultado verificado

- Se completaron **53 actividades existentes**: 53 totales territoriales y **106 filas nuevas de población** (Mujer/Hombre) en `Registro_Poblacion!A2296:H2401`.
- Suman **1,694 asistencias reportadas**, no personas únicas. Territorio y población representan el mismo público; no sumar ambas fuentes.
- Se actualizaron 52 descripciones que todavía decían población pendiente. La descripción restante no contenía esa frase y se conservó. No hubo altas de actividades, cambios de IDs/folios, metas, cantidades de actividades, sesiones ni evidencias.
- Se guardó `Respaldo_Antes_Completar_Poblacion_2026-10-31.json` con valores nativos previos, correspondencias y datos fuente. La verificación posterior está en `Verificacion_Completar_Poblacion_2026-10-31.json`: 848 celdas de población y 105 celdas existentes escritas, sin discrepancias; 5,657 celdas de actividades/territorio verificadas como conservadas, además de las cinco filas finales de población preexistentes.
- La cuadrícula de población se amplió al final de 2295 a 2401 filas. No se insertó dentro del historial ni se desplazaron filas existentes. Se copiaron formato y validación del último registro para A:H, sin copiar sus valores.

## Fuentes y criterios

Fuente: matriz editorial en vivo, pestaña `Actividades 2026`, lectura A1:AP650 (contenido devuelto hasta fila 207) y fórmulas AB1:AN207. Base destino: DB_Sistema_Cultura_GTO_V1, hojas Registro_Actividades, Registro_Territorio y Registro_Poblacion.

Se cruzaron las 67 altas editoriales del 29/10 por título y sede con correspondencia única, fecha y ID vigente; no se reutilizaron posiciones de fila antiguas porque la matriz cambió. Las 53 seleccionadas tienen total positivo, cantidades por sexo expresas y concordantes y ningún subtotal etario mayor al total.

**Corrección de la lectura inicial:** los encabezados actuales están alineados: AB mujeres, AC hombres, AD:AH edades, AI:AL grupos prioritarios y AM total. La nota anterior de posible desplazamiento surgió de una lectura preliminar y queda sustituida por la comprobación de coordenadas exactas. AN suma edades/grupos en algunas filas y no se usa como segundo total de asistentes.

Se conservó el desglose por sexo bajo `Población General` sin asignar edad por sexo ni distribuir los totales entre edades. Los rangos de edad de la matriz no indican límites numéricos ni un cruce sexo–edad; importarlos como filas adicionales duplicaría asistentes. No se asignaron grupos prioritarios ni se interpretó su ausencia como Ninguno. Participación/acceso quedan vacíos porque esta matriz no separa esas cantidades explícitamente.

La revisión de formato se realizó mediante lectura de metadatos nativos: los campos anteriores conservaron formato/validación/chips en los rangos comparados. No se hizo inspección visual en navegador ni se certificó sincronización AppSheet/dashboard tras esta actualización.

## Catorce presentaciones que siguen sin población definitiva

Referencias de fila de la matriz en vivo al momento de revisión; pueden moverse con futuras inserciones. Los IDs y datos completos se conservan en el respaldo.

| Fila | Presentación | Aclaración necesaria |
|---:|---|---|
| 10 | Fanta CBrew | Mujeres 10 y hombres vacío: confirmar total y si falta el desglose |
| 11 | Saturno en Llamas | Total 13, edades 14 |
| 17 | Focus, una historia de la fotografía de Guanajuato | Total 30 frente a 10 mujeres + 15 hombres |
| 23 | Con una lámpara encendida | Total 5, edades 25; hombres vacío |
| 25 | ;r Ha muerto / La mugre | Total calculado cero con cantidades de origen vacías |
| 26 | Estilo libre | Total 4, edades 25 |
| 27 | Crímenes y ensueños, Pájaros humanos | Total calculado cero con cantidades de origen vacías |
| 31 | ;r Ha muerto | Mujeres 13 y hombres vacío; confirmar total |
| 92 | Cartas al joven violinista | Cero sin confirmación de si es ausencia real o dato pendiente |
| 118 | La noche de los Axolotes | Mujeres 21 y hombres vacío; confirmar total |
| 123 | Las hadas verdaderas son de madera | Total toma solo mujeres 45; confirmar si es total o falta información |
| 124 | Invierno mágico | Total toma solo mujeres 40; confirmar si es total o falta información |
| 129 | El loco libro de las pastorelas y Rock es puro cuento | Total toma solo mujeres 50; confirmar si es total o falta información |
| 165 | Memorias de un hombre importante, Años de papel y Cita Analema | Sin población informada |

La carga no cierra las 131 filas apartadas en la revisión anterior. Falta confirmar metas/naturaleza de talleres, encuentros, participaciones en ferias y alcance de ciclos ya capturados; varias filas corresponden a octubre o coinciden con agrupaciones existentes. El número anterior no debe interpretarse como 131 altas faltantes. No se añadieron actividades nuevas de ese conjunto ni se cargó octubre.
