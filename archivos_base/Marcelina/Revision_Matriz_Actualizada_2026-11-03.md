# Marcelina: revisión de matriz actualizada — 03/11/2026

**Resultado posterior del mismo día:** tras recibir la devolución contestada y la autorización de Luis, se cargaron las 11 funciones restantes de la pestaña de septiembre: nueve con público conciliado y dos con público desconocido por contradicciones. Las dos funciones previamente cargadas se conservaron. Se verificó la DB y no se modificaron valores preexistentes. Consultar [carga aplicada y pendientes](Resultado_Carga_Respuestas_2026-11-03.md). Este seguimiento sustituye el estado de preparación que conserva el análisis inicial siguiente.

**Estado: analizado; nueve candidatas a alta con datos básicos conciliados, dos funciones con aclaraciones y dos ya cargadas. No se modificó la DB.** Corte autorizado: enero–septiembre de 2026.

## Qué cambió en esta entrega

La fuente local es `resumen mio, DGPA.xlsx`, actualizada por Luis en esta carpeta. SHA-256 recibido y conservado: `14cae42d3d374691135b826d0ca1d4941e31f6cca2655b4751b44f0b62d3eb65`.

Se comparó con el libro anterior conservado en HEAD de Git (SHA-256 `6c99ad0b3d1f8b8a25ea061d65bb40182ef5ad093fd326ef9f7cf814e5e3b851`), sin restaurar ni sobrescribir archivos. La entrega añade **sep - oct 2026**. Las hojas anteriores no cambian sus valores de celdas, incluidos los diez casos de público de enero–agosto. Algunas dimensiones de plantilla crecen a 1000 filas sin que eso represente nuevas actividades.

La hoja nueva contiene **13 funciones de septiembre, del 2 al 21**, en filas 3–15. Desde la fila 16 hay fechas de octubre, noviembre y diciembre que quedan fuera del corte. El nombre de la pestaña no autoriza cargar esos otros meses ni acredita que septiembre esté completo.

Las copias antiguas de septiembre de Hoja3 y julio - sep siguen en el libro, con información anterior. Usar la hoja actualizada para preparar septiembre, sin sumar sus repeticiones ni sobrescribir con las copias antiguas.

## Nueve candidatas a alta

Los totales y mujeres/hombres de estas nueve filas concilian. Se localizaron fecha, nombre, sede, municipio y clave programática. La comparación en la DB actual no identificó una función correspondiente por nombre/variantes, fecha, sede y contexto de artista; se revisaron también registros de otras áreas y referencias de OSUG/Factotum. No se trata de una certificación universal de ausencia de duplicados.

| Fila nueva | Fecha | Función | Municipio | Mujeres | Hombres | Total | Meta propuesta |
|---:|---|---|---|---:|---:|---:|---|
| 3 | 02/09/2026 | Sinfonietta del MIQ | Guanajuato | 65 | 53 | 118 | 83 / PB3574 |
| 4 | 03/09/2026 | Sobre la imposibilidad de ser actriz sin temor a la vida | Purísima del Rincón | 75 | 52 | 127 | 83 / PB3574 |
| 5 | 04/09/2026 | El Ogrito, ESCENAS AL VUELO | Celaya | 160 | 141 | 301 | 10 / QC4142 |
| 9 | 07/09/2026 | Teatrando Barrio | León | 40 | 30 | 70 | 83 / PB3574 |
| 10 | 09/09/2026 | Teatrando Barrio | León | 35 | 30 | 65 | 83 / PB3574 |
| 11 | 11/09/2026 | Programa no. 5 Paisajes del Alma | Guanajuato | 138 | 141 | 279 | 83 / PB3574 |
| 12 | 12/09/2026 | Al son de México | Purísima del Rincón | 42 | 35 | 77 | 83 / PB3574 |
| 13 | 12/09/2026 | Vida y obra de Ignacio de Allende | Guanajuato | 313 | 196 | 509 | 83 / PB3574 |
| 14 | 15/09/2026 | Al Son de México | Guanajuato | 410 | 238 | 648 | 83 / PB3574 |

Suman **2194 asistencias reportadas**, sin afirmar personas únicas. Las metas se proponen por la clave declarada y la naturaleza de las funciones, contrastadas con Cat_Alineacion: la 83 corresponde a actividades de artes vivas en el estado, mientras la 84 de PB3574 mide circulación de creadores. No asignar la 84 solo por compartir clave.

Siete de estas funciones responden al bloque anterior de ocho pendientes de septiembre; las dos de Teatrando Barrio del 7 y 9 son información adicional. El Programa no.4 es la octava función anterior y sigue pendiente por la discrepancia indicada abajo.

La propuesta permite preparar actividades, territorio y público por sexo en Población General, como criterio previo, sin inventar edades ni duplicar grupos. Las categorías de infancias/adolescencias de la fuente no tienen una correspondencia exacta con los cortes del sistema. El Ogrito ya existente ACT-SCNY07070 corresponde a otra fecha y sede (30/05/2026, Purísima), no a la función del 04/09 en Celaya.

No se crearon IDs/folios, filas de importación ni solicitudes de escritura. Antes de aplicar un lote hay que preservar respaldo/metadatos, revisar nuevamente destino y validar los campos operativos. Las referencias PG/PEC de la matriz pueden apoyar la alineación, pero no se presentan como una correspondencia institucional completa ya verificada. No convertir honorarios en contratos, tarifas en ingreso efectivo, artistas en asistentes ni días en sesiones.

## Dos funciones ya cargadas

| Fila nueva | Función | ID vigente | Total conciliado |
|---:|---|---|---:|
| 6 | Un viaje con ritmo, ESCENAS AL VUELO, 04/09 | ACT-SCOH08277 | 608 |
| 8 | Viva la Ópera, 05/09 | ACT-SCGK69033 | 118 |

Sus fechas y totales coinciden con las altas del 01/11. No volver a crearlas. La matriz actual puede aportar referencias adicionales de alineación, sin que eso autorice sobrescribirlas automáticamente.

## Dos funciones que aún necesitan respuesta

1. **Programa no.4, 04/09, Teatro Juárez (fila 7):** AA=151 mujeres y AB=145 hombres, suma 296; AK total=296, pero AL Comprobante=355. Confirmar qué representa 355 y cuál es el público correcto antes de cerrar/importar la función con su público. No elegir arbitrariamente una de las cifras.
2. **Teatrando Barrio, 21/09, León (fila 15):** AA=32 mujeres y AB=32 hombres, suma 64; AK total=65 mediante la fórmula literal `=33+32`. Confirmar si son 64 o 65 y el desglose correcto. No cambiar 32 a 33 por intuición ni registrar la diferencia como sexo desconocido sin confirmación.

Las sumas de las fórmulas AA/AB de las 13 funciones y sus cantidades de origen se inspeccionaron. La discrepancia de fila 15 no es solo formato o separador regional.

## Diez públicos anteriores siguen pendientes

La hoja programa ene-ago 2026 conserva exactamente sus valores anteriores; se contrastó también la situación de estos IDs con la DB actual:

| Fila anterior | Actividad | Situación que no resolvió la entrega |
|---:|---|---|
| 57 | Matinata, 22/03 | 91 + 106 = 197, frente a total 195 |
| 80 | Sangre Negra JORNADAS DID 2026 | Público sin informar |
| 83 | Programa no. 9, 24/04 | Público sin informar |
| 147 | El mundo de la imaginación de Francisco Gabilondo Soler | 104 + 74 = 178, frente a total 340 |
| 175 | Cantatas Clausura FESTIVAL BACH | 197 + 164 = 361, frente a total/comprobante 164 |
| 177 | Apertura de la Presa de la Olla | 1100 + 890 = 1990, frente a total 0 y comprobante 3270 |
| 179 | El Diario de Un Loco | Público sin informar |
| 182 | Hechicera que cambia los rostros | Público sin informar |
| 206 | GIFF | Público sin informar |
| 212 | Asistencia a San Miguel de Allende | 120 + 140 = 260, frente a total/comprobante 462 |

El formulario previo conserva localmente sus 19 consultas sin respuestas en la columna I. La matriz nueva sí resuelve parte del bloque de septiembre, aunque no se haya contestado el formulario. No pedir otra vez la información ya aportada.

## Qué pedir a Marcelina

- Confirmar las dos diferencias de septiembre descritas arriba.
- Completar o aclarar los diez públicos de enero–agosto que siguen pendientes en su Excel anterior.
- Confirmar si las 13 funciones son todas las realizadas en septiembre. Ya aparece una función el 21/09; falta certificar la cobertura del resto del mes, especialmente del 22 al 30. No interpretar la ausencia de filas como «no hubo actividades».

No es necesario pedirle que vuelva a elaborar toda la matriz. La evidencia se mantiene opcional para este seguimiento y no impide preparar los datos confirmados.

## Verificación y límites

Lectura actual de DB `1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4`: Registro_Actividades A1:BN1476 y A1477:Q2260 (sin datos adicionales devueltos), Registro_Territorio A1:L1517, Registro_Poblacion A1:H2405 y Cat_Alineacion A1:R110. Se respetaron las columnas operativas y no se usó Dashboard_Master. No se consultaron archivos de evidencia ni se verificaron sus permisos.

Se conservaron el Excel actualizado y el formulario recibido sin modificaciones. Solo se elaboró este informe y se actualizó el contexto. Sin cambios productivos, mensajes a terceros, código, pruebas del tablero, commit, push ni publicación. La dirección sigue parcial; preparación de candidatas no equivale a carga ejecutada ni a cierre al 100%.
