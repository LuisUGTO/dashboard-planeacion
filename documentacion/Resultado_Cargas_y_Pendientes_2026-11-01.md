# Cargas ejecutadas y control integral de matrices — 01/11/2026

**Estado: implementado y verificado en la DB en vivo.** Luis autorizó agregar/corregir lo respaldado por las fuentes y revisar todos los archivos, sin consultar al equipo. No se enviaron mensajes ni se solicitaron datos a terceros. Corte conservado: enero–septiembre de 2026.

Base: [DB_Sistema_Cultura_GTO_V1](https://docs.google.com/spreadsheets/d/1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4/edit). Este resultado sustituye el estado de preparación del diagnóstico anterior del mismo día; no certifica que estén completas todas las direcciones.

## 1. Cambios efectivamente realizados hoy

### Dos presentaciones de septiembre de Marcelina

| Actividad | Fecha | Meta | Municipio / sede | Asistencias reportadas | ID nuevo |
|---|---|---|---|---:|---|
| Un viaje con ritmo, ESCENAS AL VUELO | 04/09/2026 | 10 / QC4142, artes vivas de Ventanas al Territorio | Silao de la Victoria / Escuela Primaria Juventino Rosas | 608 | ACT-SCOH08277 |
| Viva la Ópera | 05/09/2026 | 83 / PB3574, actividades de artes vivas | Guanajuato / Teatro Cervantes | 118 | ACT-SCGK69033 |

Fuente: `archivos_base/Marcelina/resumen mio, DGPA.xlsx`, `Hoja3` filas 6 y 8, repetidas en `julio - sep` filas 89 y 91. Se importó cada función una sola vez. Se contrastaron nombres, fechas, artistas y sedes con las 1470 actividades previas. La presentación de Un viaje con ritmo que ya existía corresponde al 11/07 y otra sede; no se reemplazó.

Se añadieron **2 actividades, 2 territorios y 4 filas de población**, por sexo en Población General: 335 mujeres + 273 hombres; 76 mujeres + 42 hombres. Son **726 asistencias**, sin afirmar personas únicas. No se repartieron edades ni se inventaron ZAP, comunidades, sesiones, ingresos efectivos, contratos o evidencias. Los honorarios no se trasladaron a montos contratados. Se conservaron las tarifas declaradas de Viva la Ópera.

La clave, descripción y unidad se vincularon a las metas vigentes. La Dirección DGPA conserva la atribución del expediente y el criterio del lote previo; `Usuario_Registra` mantiene el capturador de ese lote, sin presentarlo como prueba de autoría personal de cada función. Los campos PG/PEC de estas altas permanecen pendientes: no se trasladó la alineación de otra presentación ni se aplicó automáticamente la del catálogo, que contiene correspondencias que requieren revisión.

### Territorio faltante de Soraya

Se repuso `0e530566` para **ACT-SCKQ07454**, ¡Moda hoy! Diseño de moda latinoamericanx y latinx, del 22/05/2026. La actividad y su población ya existían; no tenían territorio. Fuente original: `Formato Interno de Indicadores (2).xlsx`, `Anny`, fila 57: Guanajuato, Urbano, 13 participantes y 0 de acceso. Coincide con la población vigente de 13. Se recuperó el ID del lote original; no se añadió otra actividad ni otra población.

### Nueve filas con miles convertidos a decimales

Se corrigieron **18 celdas numéricas** conservando IDs, clasificaciones y formatos. La DB presentaba valores mil veces menores; el lote original y el Excel fuente coinciden en los enteros. La escritura utilizó valores numéricos nativos, sin separadores regionales.

| Registro | Celdas | Valor anterior → correcto | Fuente vigente de Marcelina |
|---|---|---|---|
| ACT-SCEN97364, Día del ejército nacional | Territorio J611 y L611 | `1.155` → `1155` | programa ene-ago 2026, fila 18, AK |
| ACT-SCCS76063, 100 años de José Alfredo | Territorio J613 y L613 | `1.353` → `1353` | misma hoja, fila 20, AK |
| ACT-SCVV75829, El Lago de los Cisnes | Territorio J621 y L621 | `1.251` → `1251` | misma hoja, fila 28, AK |
| ACT-SCIS69956, Informe de la Gobernadora | Territorio J623 y L623 | `10.355` → `10355` | misma hoja, fila 30, AK |
| ACT-SCMH85463, Oceano | Territorio J697 y L697 | `1.389` → `1389` | misma hoja, fila 104, AK |
| ACT-SCZM13538, Huateque cultural | Territorio J794 y L794 | `1.022` → `1022` | misma hoja, fila 201, AK |
| ACT-SCIS69956, mujeres sin prioridad separada | Población G1131:H1131 | `5.6` → `5600` | fila 30: 5720 mujeres, de ellas 120 con discapacidad; desglose excluyente ya documentado en lote |
| ACT-SCIS69956, hombres sin prioridad separada | Población G1133:H1133 | `4.6` → `4600` | fila 30: 4635 hombres, de ellos 35 con discapacidad; mismo criterio del lote |
| ACT-SCPD08021, Apertura de la Presa de la Olla | Población G1480:H1480 | `1.1` → `1100` | misma hoja, fila 177, AA; julio - sep fila 19, T |

En Apertura de la Presa sigue pendiente la contradicción entre total cero, comprobante 3270 y sexos que suman 1990. La corrección del dato femenino inequívoco no certifica esos totales contradictorios ni los reemplaza.

### Cinco cantidades de visitantes retiradas del campo de sesiones de Edith

Se dejó `Total_Sesiones` vacío en R604, R605, R607, R608 y R609. Esas cifras —69395, 57652, 68385, 61362 y 44812— coinciden exactamente con `Concentrado 2026!AF45:AF49`, rotulado TOTAL de visitantes presenciales y virtuales. No hay una cifra de sesiones que respalde su uso en R.

Se conservan los IDs ACT-SCQZ00697, ACT-SCAC38909, ACT-SCYP66179, ACT-SCCS51664 y ACT-SCOT28274. No se modificaron sus territorios ni poblaciones, ni se trasladaron los visitantes a cantidad de actividades. El otro registro de Cañada enero–junio permanece intacto; su posible solapamiento sigue pendiente. La conciliación de visitantes necesita resolver las discrepancias del Excel antes de ajustar públicos o añadir altas.

## 2. Rangos y verificación

| Hoja | Altas de hoy | Correcciones de existentes |
|---|---|---|
| Registro_Actividades | A1475:BN1476 | Las cinco celdas R de Edith indicadas arriba |
| Registro_Territorio | A1515:L1517: dos funciones y Soraya | 12 celdas J/L de las seis filas indicadas arriba |
| Registro_Poblacion | A2402:H2405 | 6 celdas G/H de las tres filas indicadas arriba |
| Regitro_Evidencia | Ninguna | Ninguna |

Se ampliaron cuatro filas al final de la cuadrícula de Población; no se insertaron entre registros existentes. Se copió exclusivamente formato y validación de filas operativas, y se escribieron valores nativos. No se añadieron columnas ni se utilizaron BO en adelante, M en adelante de territorio, BU/BV o Dashboard_Master. No se modificaron catálogos, AppSheet, código del tablero, permisos o servicios SQL.

| Control | Antes | Después |
|---|---:|---:|
| Actividades con ID | 1470 | **1472** |
| Territorios con ID | 1507 | **1510** |
| Poblaciones con ID | 2390 | **2394** |
| Evidencias con ID | 520 | **520** |

La lectura posterior de las cuatro hojas operativas coincidió con el plan de la primera escritura: **cero diferencias no previstas**, cero IDs duplicados y cero hijos sin actividad. Las dos altas concilian territorio y población en 608 y 118. La segunda escritura de cinco sesiones se verificó con lectura nativa: el resto de A:R, formatos, notas y validaciones se conservó. Total: 23 celdas existentes corregidas y nueve filas nuevas. La conservación de los IDs no demuestra ausencia de duplicados de contenido; no se borraron ni fusionaron coincidencias.

Los respaldos de valores anteriores, metadatos nativos, solicitudes exactas y verificaciones están en `respaldo/privado_cargas_2026-11-01/`, excluido expresamente de nuevos archivos de Git. Los originales Excel permanecen intactos; se comprobó nuevamente el SHA-256 de los 23 libros al terminar. No hubo commit, push ni publicación. No se ejecutaron pruebas Node ni revisión visual de navegador: no cambió código; la comprobación realizada es de datos y estructura nativa de Sheets.

## 3. Qué falta por expediente

| Expediente | Presencia comprobada en vivo | Pendiente que sí afecta nuevas cargas |
|---|---|---|
| Marcelina / DGPA | 229/229 IDs del lote enero–agosto y las 2 altas de hoy | Otras 8 funciones del bloque de septiembre apartadas: siete con clave ausente/N/A y El Ogrito con público cero sin confirmar realización/alcance. Resolver cifras contradictorias y acreditar cobertura del resto de septiembre; no se certifica mes completo. |
| Soraya | 292/292 IDs del lote; territorio faltante repuesto | Coincidencias, filas inválidas/fuera del corte y alineaciones apartadas en su guía. No hay otro lote completo pendiente de pegar. |
| CEARG / Claudia | 5/5 IDs del lote parcial, sus 5 territorios y 13 poblaciones | El control conserva 38 filas con posibles coincidencias y 32 con aclaraciones; no equivalen a 70 altas. JULIO solo tiene plantilla. Hay fechas discordantes, repeticiones y metas no identificadas. |
| Adriana Ugalde | 60/60 IDs de la trazabilidad directa, incluidos cinco corregidos | Diez avances QC4098/Q3688 sin correspondencia oficial inequívoca; población de animación lectora mayo/junio y visitas escolares agosto. El modelo de cantidades de concentrados debe resolverse dentro del esquema autorizado. |
| Fátima | 67/67 altas directas; sigue la población completada de 53 el 31/10 | 14 públicos del lote siguen pendientes. Las 131 filas previamente apartadas requieren resolver meta/tipo, talleres, ciclos ya cubiertos, cantidades o fechas; algunas están fuera del corte. La matriz viva contiene 200 filas con título: las 198 anteriores siguen reconocibles y las dos adicionales son del 27 y 28 de octubre, excluidas. No hubo nuevas altas de Fátima hoy. |
| Ileana | 8/8 altas directas del 29/10 presentes | 20 filas apartadas: concentrados, posibles coincidencias WAPA/Escenautas, apoyos/jurados, metas no resueltas y fechas futuras. Dos de las ocho altas siguen con público pendiente. No volver a pegar el Excel preparado con otros IDs. |
| Edith | Sus 6 registros siguen presentes; cinco sesiones corregidas hoy | Conciliar meses frente a trimestres, alcance virtual y posible solapamiento Cañada enero–junio/enero–septiembre. No hay nuevas altas defendibles con esas discrepancias. |
| Adriana Escamilla | Los 7 IDs del archivo de conciliación ya existen | Ese Excel es una copia de revisión, no nuevas actividades. Faltan las tres metas oficiales y ejecución mensual del Conservatorio; aclarar Encuentro de Orquestas y públicos. Se conservan las correcciones territoriales posteriores: no reponer Apaseo el Grande/Cuerámaro desde la copia vieja. |
| Myrna | Ninguna alta nueva atribuida a su matriz | Sus 17 filas son funciones anuales hasta diciembre, sin ejecución separada hasta septiembre. Faltan acciones realizadas, fecha/periodo, meta concreta y responsable confirmado. La falta de público o evidencia por sí sola no es el impedimento. No atribuirle automáticamente capturas de otro usuario por semejanza temática. |
| Coordinación de Comunicación Social | No se localizó fuente en el inventario disponible | Información pendiente según el mensaje del 29/10; no se acredita una entrega posterior en los archivos revisados. |
| Marce: dos matrices PG/PEC y PPTX | Referencias revisadas; no son lotes operativos | Matriz 2026 útil para correspondencias; 2027 fuera de alcance. PPTX con comparación enero–agosto 2025/2026 sirve de referencia para la nueva sección, sin probar datos de septiembre ni autorizar altas de 2025. |

No existe un padrón institucional exhaustivo entre estos archivos: Comunicación Social es el faltante identificado respecto del seguimiento aportado, sin afirmar que esta lista certifique todas las direcciones del organismo.

## 4. Control de los 23 libros Excel

El [control estructurado](Control_Matrices_y_Cargas_2026-11-01.json) contiene las rutas completas, SHA-256, estado y comprobaciones de IDs por cada archivo. Se incluyeron hojas ocultas y celdas no vacías; una dimensión de plantilla de un millón de filas no se interpretó como un millón de actividades.

| Carpeta / archivo | Clasificación actual |
|---|---|
| Adriana Escamilla / Revision_Conciliacion_Adriana_Escamilla_Formato_DB_2026-10-27.xlsx | Revisión de siete existentes; no importar como altas |
| Adriana Ugalde / Avance de metas DGVDC 2026.xlsx | Fuente de avance mensual; lote directo presente |
| Adriana Ugalde / Captura Plataforma Gestión de Metas Cultura .xlsx | Detalle complementario; no sumarlo al avance como otro lote |
| Raíz de archivos_base / Avance de metas DGVDC 2026.xlsx | Copia idéntica de la anterior fuente homónima |
| Raíz de archivos_base / Captura Plataforma Gestión de Metas Cultura .xlsx | Copia idéntica de la fuente de Adriana Ugalde |
| CEARG / Actividades Enero-Septiembre CEARG.xlsx | Parcial; cinco altas presentes y control de apartadas |
| DB_Sistema_Cultura_GTO_V1.xlsx | Respaldo anterior; no fuente vigente para sobrescribir nube |
| Edith / CONCENTRADO VISITANTES Trimestres 2026.xlsx | Fuente con discrepancias; conciliación pendiente |
| Fatima Molinar / Actividades editoriales DGEP 2026 (18).xlsx | Versión anterior; preferir fuente viva |
| Ileana / Carga_Parcial_Ileana_Enero_Septiembre_2026.xlsx | Preparación sustituida por altas directas; no repetir IDs |
| Ileana / Reporte de programación SDPAC.xlsx | Versión anterior |
| Ileana / Reporte de programación SDPAC_actualizado.xlsx | Fuente vigente de 28 renglones |
| Marce / Matriz_PG_PEC_para_revision 2027.xlsx | Referencia 2027; excluida de cargas |
| Marce / Matriz_PG_PEC_para_revision.xlsx | Referencia de correspondencias 2026 |
| Marcelina / resumen mio, DGPA.xlsx | Fuente vigente; se añadieron dos funciones de septiembre |
| Myrna / Formato Interno de Indicadores DGPC-CC 29-10-26.xlsx | 17 funciones anuales; no acredita ejecución al corte |
| Raíz de archivos_base / resumen mio, DGPA.xlsx | Versión diferente con 13 filas adicionales; no mezclar automáticamente con la de su carpeta |
| Soraya / Formato Interno de Indicadores (2).xlsx | Fuente; lote de 292 ya presente |
| outputs / normalizacion_adriana_2026-10-27 / Preparacion_Adriana…xlsx | Preparación de 47 IDs sustituida por la carga directa de 60 |
| outputs / normalizacion_cearg_2026-10-26 / Carga_Parcial…xlsx | Cinco IDs ya presentes |
| outputs / normalizacion_marcelina_2026-10-23 / Carga_Marcelina…xlsx | Preparación de 242 sustituida por revisión posterior; no reimportar |
| outputs / normalizacion_marcelina_2026-10-26 / Carga_Marcelina…xlsx | 229 IDs ya presentes |
| outputs / normalizacion_soraya_2026-10-26 / Carga_Soraya…xlsx | 292 IDs ya presentes |

También se consideraron los controles CSV/JSON, resúmenes de conversaciones y revisiones fechadas. Los PDF/JPEG de Marcelina son referencias de alineación; los PDF/DOCX de solicitud y capturas de verificaciones previas son soporte, no nuevas filas de ejecución. No se recrearon chats ya eliminados ni se copiaron datos de acceso.

## 5. Continuidad después de hoy

Quedan aprovechadas las altas y correcciones inequívocas encontradas en esta revisión. Los pendientes de datos se conservaron para el martes, sin reenviar solicitudes hoy ni pedir de nuevo lo ya recibido. Priorizar: Comunicación Social como fuente faltante; ejecución concreta y metas de Myrna; conciliaciones de Edith y Conservatorio; y respuestas a las preguntas ya enviadas a las demás áreas.

El trabajo técnico pendiente es definir cómo representar cantidades de concentrados con columnas vigentes A:BN y corregir la dependencia del tablero de campos fuera de uso. No habilitar BU/BV ni sustituir cantidades por sesiones para cargar más renglones. La nueva sección DGPA basada en el PPTX sigue como frente de diseño separado; no se creó una pestaña sin indicadores operativos conciliados.
