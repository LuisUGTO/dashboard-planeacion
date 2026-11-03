# Marcelina / DGPA: carga con matriz y respuestas — 03/11/2026

**Estado: aplicado y verificado en la DB.** Luis autorizó incorporar o actualizar lo respaldado por el archivo contestado. Se añadieron **11 funciones de septiembre, 11 territorios y 18 filas de población**. Nueve funciones tienen público conciliado (**2194 asistencias reportadas**); dos tienen identificada la actividad y conservan su público desconocido por discrepancias. No se modificó ningún valor de registros preexistentes.

## Fuentes y ubicación del archivo contestado

El archivo respondido está en **archivos_base/Marce Chagoya/Respuestas_Marcelina_DGPA_2026-11-01_contestado.xlsx**, hoja Pendientes. Se relacionó con el expediente DGPA por su contenido y referencias, sin renombrar ni mover archivos. SHA-256: `756abadcaf72857d95551c3f02c9307876b1728117893850f3d9e3c4d50b8278`.

El archivo de nombre parecido en **archivos_base/Marcelina/Respuestas_Marcelina_DGPA_2026-11-01_Ciontestado.xlsx** conserva las 19 consultas sin respuestas; no se utilizó como devolución contestada. Su desaparición/renombre del archivo original era un cambio local previo del usuario y no se restauró.

La matriz vigente es **archivos_base/Marcelina/resumen mio, DGPA.xlsx**, pestaña **sep - oct 2026**, filas 3–15. SHA-256: `14cae42d3d374691135b826d0ca1d4941e31f6cca2655b4751b44f0b62d3eb65`. El enlace de las respuestas remite a la versión compartida de esa matriz; el contenido operativo se analizó desde la copia local disponible. Los originales se conservaron intactos.

Corte respetado: enero–septiembre de 2026. Las filas de octubre–diciembre no se cargaron. No se sumaron las copias antiguas de Hoja3/julio - sep.

## Funciones efectivamente cargadas

| Fila de matriz | Fecha | Función | ID nuevo | Asistencias confirmadas |
|---:|---|---|---|---:|
| 3 | 02/09/2026 | Sinfonietta del MIQ | ACT-SCBX04667 | 118 |
| 4 | 03/09/2026 | Sobre la imposibilidad de ser actriz sin temor a la vida | ACT-SCLT83210 | 127 |
| 5 | 04/09/2026 | El Ogrito, ESCENAS AL VUELO | ACT-SCDT17517 | 301 |
| 7 | 04/09/2026 | Programa no.4 | ACT-SCIZ55117 | Pendiente |
| 9 | 07/09/2026 | Teatrando Barrio | ACT-SCRK85015 | 70 |
| 10 | 09/09/2026 | Teatrando Barrio | ACT-SCLH52235 | 65 |
| 11 | 11/09/2026 | Programa no. 5 Paisajes del Alma | ACT-SCNT80981 | 279 |
| 12 | 12/09/2026 | Al son de México | ACT-SCKA81366 | 77 |
| 13 | 12/09/2026 | Vida y obra de Ignacio de Allende | ACT-SCTW24581 | 509 |
| 14 | 15/09/2026 | Al Son de México | ACT-SCUL87230 | 648 |
| 15 | 21/09/2026 | Teatrando Barrio | ACT-SCUD02459 | Pendiente |

Las funciones de Un viaje con ritmo, 04/09 (ACT-SCOH08277, 608), y Viva la Ópera, 05/09 (ACT-SCGK69033, 118), ya estaban cargadas desde el 01/11: se verificaron y conservaron. Quedan representadas las **13 funciones de septiembre de la hoja recibida**, sin certificar que sea un padrón exhaustivo de todo septiembre.

Se contrastaron títulos/variantes, fechas, sedes y contexto de artistas con los registros actuales, incluidas otras áreas. No se localizó una función correspondiente para las 11 altas; El Ogrito existente de mayo tiene otra fecha/sede. Las tres funciones de Teatrando Barrio corresponden a fechas diferentes, no se fusionaron.

## Criterios y datos conservados como pendientes

- Meta **83 / PB3574** para las diez funciones correspondientes a la operación de espacios escénicos/actividades de artes vivas en el estado; meta **10 / QC4142** para El Ogrito. Se contrastaron con Cat_Alineacion. No se eligió la otra meta PB3574 de circulación de agentes solo por compartir clave.
- Se usó DGPA como atribución del expediente y el capturador del lote previo, sin tratar ese dato como autoría personal de cada función. Se preservaron claves, nombres de metas y unidades del catálogo.
- Música se mantiene como disciplina; Orquestas solo cuando la fuente identifica expresamente una orquesta. Teatro y danza folklórica se vinculan a Artes escénicas conforme al catálogo y al tipo/grupo declarado. La subdisciplina de Sinfonietta no se inventó.
- Se reconocieron Teatro Juárez y Teatro de la Ciudad de Purísima mediante Cat_Recintos. Las otras sedes se conservaron en espacio especificado sin inventar su tipo, localidad o ZAP.
- Los nueve públicos conciliados se registraron por mujeres/hombres en Población General. Territorio y demografía son el mismo público: no se suman. No se trasladaron cortes de edad incompatibles ni se duplicaron personas con grupos prioritarios.
- La fuente no declara sesiones: se dejaron sin informar, como en las dos altas anteriores. Cada fila representa una función identificada por fecha y horario; no se reutilizaron columnas BO en adelante ni se escribió una cantidad de actividades en sesiones.
- Se conservaron las tarifas explícitas y sus mínimos/máximos cuando procedía, sin convertirlas en ingreso efectivo. Honorarios no se registraron como contratos ni montos contratados.
- Los códigos PG/PEC declarados en la fuente se conservaron textualmente en la descripción para trazabilidad. Sus campos institucionales de alineación permanecen pendientes de correspondencia inequívoca; no se copiaron alineaciones de otra actividad o una fila del catálogo sin validar.
- No se crearon evidencias artificiales ni se utilizó la matriz como comprobante documental de cada función.

## Dos altas con público pendiente

**Programa no.4, 04/09, ACT-SCIZ55117:** 151 mujeres + 145 hombres = 296; total declarado 296 y Comprobante 355. La respuesta «el cero es sin asistentes en ese rubro» no explica 355. La actividad, fecha, programa y sede sí están identificados: se cargó su registro, pero territorio Cantidad y participación/acceso permanecen vacíos y no se añadieron poblaciones. Las cifras en conflicto están en la descripción, sin escoger una como oficial.

**Teatrando Barrio, 21/09, ACT-SCUD02459:** 32 mujeres + 32 hombres = 64, frente a total 65. Se cargó la función con público desconocido y se conserva la contradicción en la descripción. No se transformó 32 en 33 ni se inventó una persona de sexo no informado.

Estas dos actividades se incorporan como registros identificados con datos pendientes, no como confirmación de asistencia cero.

## Diez públicos históricos: no se corrigieron sin sustento

Las respuestas de las consultas 9, 12, 13, 14 y 18 repiten la explicación genérica del cero. No resuelven:
- Matinata: 195 frente a 197 por sexo.
- El mundo de la imaginación: 340 frente a 178 por sexo.
- Cantatas Clausura: 164 frente a 361 por sexo.
- Presa de la Olla: cero frente a 1990 por sexo y Comprobante 3270.
- Asistencia a San Miguel de Allende: 462 frente a 260 por sexo.

Las consultas 10, 11, 15 y 16 dicen «sin datos», y la 17 «Sin respuesta». Se conservaron desconocidos los públicos de Sangre Negra, Programa no.9 del 24/04, El Diario de Un Loco, Hechicera y GIFF. Respondido no equivale a información numérica resuelta. No se volvió a pedir la matriz completa ni se envió mensaje a terceros.

La consulta 19 remite al enlace actualizado, que aporta una función del 21/09. No expresa por escrito que no haya actividades adicionales del 22 al 30; esa cobertura no se certifica por ausencia de filas.

## Respaldo y verificación

Escrituras:
- Registro_Actividades **A1477:BN1487**.
- Registro_Territorio **A1518:L1528**.
- Registro_Poblacion **A2424:H2441**.
- Regitro_Evidencia sin cambios.

Se ampliaron 18 filas al final de población, de 2423 a 2441, sin desplazar existentes. Se copió exclusivamente formato y validación de filas operativas; no se copiaron sus valores ni chips. Se inspeccionaron metadatos de origen/destino: no había validación ni chips en esos campos. Antes de escribir se releyeron las celdas y se comprobó que destino y cuadrícula seguían sin cambios.

El respaldo previo, las solicitudes exactas y la lectura posterior están en **respaldo/privado_cargas_2026-11-03/marcelina_*.json**, excluidos de nuevos archivos de Git. Verificación de las tres hojas completas dentro de columnas operativas: cero diferencias fuera del plan, **cero cambios de valores preexistentes**, cero IDs duplicados y cero hijos huérfanos. Las nueve actividades con público concilian; las otras dos tienen cantidades vacías y ninguna fila de población. Formatos y validación nativa verificados.

Conteos posteriores con ID: **1483 actividades, 1521 territorios, 2430 poblaciones y 520 evidencias**. Son registros; no equivalen a personas únicas o dirección completa.

No se usó Dashboard_Master ni columnas fuera de uso. No hubo cambios de catálogos, AppSheet, permisos, código o servicios externos distintos de las escrituras autorizadas de Sheets. No se hicieron commits, push, publicación ni envíos de mensajes. No se ejecutaron pruebas Node porque esta carga no cambia código; la comprobación fue de valores/relaciones/metadatos de Sheets. Revisión visual de navegador y exportación no verificadas.

[Control por consulta y registro](Control_Carga_Respuestas_2026-11-03.json). Este resultado sustituye el estado de preparación del informe previo de matriz actualizada; **la carga sigue parcial** por los públicos y alineaciones señalados.
