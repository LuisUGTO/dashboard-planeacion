# Ileana Salazar: carga parcial enero–septiembre de 2026

**Resultado:** 8 actividades nuevas preparadas, 8 filas de territorio, 14 de población y ninguna evidencia. Las otras 20 filas del actualizado están identificadas abajo; no se descartaron ni se mezclaron con las altas.

Responsable de las altas: **iysalazarh@guanajuato.gob.mx**. Corte confirmado por Luis: **1 de enero a 30 de septiembre de 2026**. La población reportada en esta carga suma **6,757**; no es un conteo de personas únicas. Dos de estas actividades conservan el total cero expresamente escrito en el archivo.

## Cómo usar el Excel

- Usar únicamente `Carga_Parcial_Ileana_Enero_Septiembre_2026.xlsx` para estas ocho altas. La fila 1 es el encabezado; los datos empiezan en la fila 2.
- Registro_Actividades: copiar **A2:BN9** al final de la misma hoja de la base. Son 8 filas y 66 columnas vigentes.
- Registro_Territorio: copiar **A2:L9** al final de esa hoja. Son 8 filas.
- Registro_Poblacion: copiar **A2:H15** al final de esa hoja. Son 14 filas.
- Regitro_Evidencia: **no pegar ninguna fila**; tiene solo encabezados porque no se recibieron archivos o enlaces de evidencia. Se conserva la escritura exacta del nombre de la hoja de la base.
- Pegar valores conservando los IDs como texto y las fechas como fechas. No reemplazar la base completa ni sus fórmulas, no pegar los encabezados y no repetir este lote si ya se cargó.

Se comprobaron IDs, folios, relaciones entre hojas y coincidencias contra la base conectada y las cargas locales previamente emitidas. Consulta/preparación: **2026-10-27T20:08:20-06:00**. La base consultada tenía 1207 actividades con ID. Esto es una comprobación al momento de la consulta, no un bloqueo de nuevos registros: si se pospone la carga, volver a revisar duplicaciones e IDs/folios contra la base vigente. No se escribió en Google Sheets ni AppSheet.

## Altas incluidas

| Fila del actualizado | Actividad | Fechas | Total reportado | ID nuevo |
|---:|---|---|---:|---|
| 2 | Erase una vez RAP | 2026-05-09 a 2026-05-10 | 180 | ACT-SCQJ92774 |
| 4 | Festival Medieval | 2026-04-10 a 2026-04-12 | 500 | ACT-SCNQ37380 |
| 6 | Trío Guanaxteco | 2026-05-30 a 2026-05-31 | 3000 | ACT-SCTV04237 |
| 7 | Flor de Autonomía | 2026-05-31 a 2026-06-01 | 3000 | ACT-SCOH96695 |
| 8 | Taller de novela | 2026-07-13 a 2026-07-16 | 7 | ACT-SCUZ03098 |
| 10 | WAPA - Taller de coplas y décimas del huapango | 2026-03-28 a 2026-03-30 | 70 | ACT-SCUC51578 |
| 11 | Concierto San Felipe | 2026-04-17 a 2026-04-17 | 0 | ACT-SCFD07612 |
| 20 | Taller FECA | 2026-07-10 a 2026-08-01 | 0 | ACT-SCUS31051 |

## Criterios y campos pendientes de completar

- **Sesiones:** quedan vacías. “1 taller” es un taller, no prueba que tuvo una sesión; tampoco se usan como sesiones los días entre inicio y fin. Las cuatro filas que concentran varios eventos/talleres quedaron fuera de este lote, para no reducirlos a una sola actividad ni convertirlos en sesiones.
- **Población:** se conservaron totales por sexo. La etiqueta “adultas” no demuestra el rango de 30–59 años que exige la base; por ello se usó Población General cuando no hay una edad compatible. La fuente agrupa niñas y adolescentes: tampoco se repartió esa cifra entre edades inventadas. El detalle original se conserva en la fuente y en el control de población de abajo. No se afirma que adultos y niñas/adolescentes sean el mismo grupo de origen.
- **Ceros:** Concierto San Felipe y Taller FECA de Laura Fernández conservan el total 0 que aparece en el actualizado. Si significa dato pendiente, el área debe entregar la cifra y actualizar el mismo ID, sin registrar otra actividad.
- **Territorio:** se conservó el municipio reportado. Municipio no determina comunidad, tipo de asentamiento ni ZAP: esos campos quedaron vacíos. No se asignó a estas actividades Cobertura estatal ni se repartió población por municipios.
- **Alineación:** se recuperó la fila exacta del catálogo a partir del programa completo de 2026 y su descripción en la matriz. Se conservó lo que declara Ileana. Los conciertos Trío Guanaxteco y Flor de Autonomía están declarados en QC4140.2602 (encuentros); confirmar su contexto si después se revisa esa clasificación, sin moverlos a festivales por suposición. Los campos vacíos en el catálogo permanecen vacíos.
- **Clasificación:** Taller de novela se propone como Narrativa / Literatura, par único del catálogo. La subdisciplina de los demás no se inventó. El taller de coplas y décimas puede involucrar música y literatura: su disciplina queda pendiente.
- **Otros campos:** acceso/participación, agentes, contratos, ingresos y evidencias no se dedujeron. El presupuesto no se convirtió en ingreso ni en monto contratado. Algunas sedes no tienen coincidencia exacta en el catálogo: se conservaron en Especifique_Espacio. Las sedes ausentes permanecen sin dato.
- **Estructura:** no se añadieron columnas nuevas a la base ni se reutilizaron las antiguas BO:BT. Este lote termina en BN, como los campos vigentes. Los casos que necesitan representar varias actividades siguen apartados hasta habilitar un campo de cantidad o recibir su desglose.

## Las 20 filas apartadas: qué falta resolver

| Fila | Actividad | Cantidad original | Estado | Qué falta |
|---:|---|---|---|---|
| 3 | Festival Ex Nihilo | 8 eventos | Concentrado | Son 8 eventos con fechas agrupadas. Conservar la cantidad en un campo distinto de sesiones, o recibir el desglose. Hay registros Ex Nihilo de Marcelina el 18 y 21 de marzo; no coinciden con el intervalo 26–29 declarado aquí: confirmar alcance antes de sumar. |
| 5 | Jurados Escenautas | 4 jurados | Jurados | La cantidad es 4 jurados y la población reportada es 1. Confirmar qué representa esa persona y cómo registrar la dictaminación en la meta; no son 4 eventos ni 4 asistentes. |
| 9 | WAPA - Taller “Maquillaje escénico para la danza” | 1 taller | Revisar existente | Posible misma actividad que ACT-SCDW90018, de Ileana, con inicio 28 de marzo. Actualizar el mismo ID si se confirma, sin crear una segunda alta. La fuente nueva dice 28–30 de marzo, Casa Mariel y 94 personas. |
| 12 | Talleres FECA | 5 talleres | Concentrado | Son 5 talleres, 11 personas y cuatro municipios más modalidad virtual, sin reparto por municipio. Habilitar cantidad de actividades o desglosar; no repartir personas por igual ni convertir Virtual en un municipio. |
| 13 | Festival Escenautas | 1 festival | Revisar existente | Escenautas reporta 2,135 personas para el festival completo; existen funciones de Marcelina del 20–26 de julio. Aclarar qué público incluye el total antes de sumar el concentrado y las funciones. |
| 14 | Logística para asistencia al Festival de Teatro Nuevo León | 17 apoyos | Apoyos | La cantidad dice 17 apoyos, pero el total de población es 1,089 y la meta es asistentes a festivales. Aclarar unidad, beneficiarios y si Guanajuato corresponde al origen y no al lugar del festival en Nuevo León. |
| 15 | Beneficiarios FECA | 30 beneficiarios | Beneficiarios | Son 30 beneficiarios, no necesariamente 30 proyectos (unidad de la meta). Cobertura Estado de Guanajuato sin reparto y sin esa opción habilitada en el catálogo. Aclarar número de proyectos y fechas efectivas frente al periodo administrativo hasta diciembre. |
| 16 | Beneficiarios FECA | 13 beneficiarios | Cobertura | Son 13 beneficiarios de movilidad, compatibles con agentes apoyados; no son 13 talleres ni asistentes. Falta habilitar cobertura estatal o precisar territorio de beneficiarios y fecha efectiva; el intervalo termina en diciembre. |
| 17 | Jurados FECA | 6 jurados | Jurados | La cantidad es 6 jurados FECA y la meta cuenta proyectos apoyados. Confirmar meta y si las 6 personas son exclusivamente el jurado; no sumarlas como público o proyectos. |
| 18 | Beneficiaria Escenautas | 1 beneficiaria | Meta pendiente | GA2477.2600 corresponde al Despacho, pero GA2477 no existe en Cat_Alineacion. Falta la meta/ID del catálogo; población sin dato y periodo hasta diciembre. |
| 19 | Talleres FECA | 8 talleres | Concentrado | Son 8 talleres virtuales y 43 personas sin municipio. Falta representar la cantidad separada de sesiones y aclarar cobertura; Virtual no equivale a cobertura estatal. |
| 21 | Talleres primeras infancias | 4 talleres | Concentrado | Son 4 talleres de primeras infancias y 101 personas, agrupadas como niñas/adolescentes sin rango exacto. Conservar cantidad de talleres separada de sesiones; no asignar edades 0–5 solo por el nombre. |
| 22 | Talleres de cartografías | 3 talleristas | No realizado | POR REALIZAR: no importar como actividad ejecutada en enero–septiembre. Son 3 talleristas; la responsabilidad Formación está aclarada, pero la subclave QC4051.2603 sigue pendiente de meta exacta. |
| 23 | Estímulo publicación obra editorial Desde el faro (250 ejemplares) | 1 apoyo | Meta pendiente | GA2477.2600 no existe en Cat_Alineacion. Falta meta/ID; 1 apoyo y 250 ejemplares no son 250 asistentes. Confirmar fecha efectiva del apoyo frente al cierre administrativo de diciembre. |
| 24 | Estímulo presentación artística | 1 apoyo | Meta pendiente | GA2477.2600 no existe en Cat_Alineacion. Falta meta/ID y fecha efectiva del apoyo; no convertir el apoyo en una función realizada sin confirmación. |
| 25 | Estímulo presentación artística | 1 apoyo | Meta pendiente | GA2477.2600 no existe en Cat_Alineacion. Falta meta/ID y fecha efectiva del apoyo. Es otro beneficiario: no unirlo al renglón anterior solo por repetir el título. |
| 26 | Apoyo para participación del colectivo de teatro comunitario Soy Del Puño en la Semana XVIII de Teatro “Ray Garduñoˮ en Baja California. | 1 apoyo | Fuera del corte | Inicio 22 de octubre: fuera de enero–septiembre. La responsabilidad Forum está aclarada, pero PB3571.2600 no selecciona una de sus cuatro metas. Confirmar origen Guanajuato frente a destino Baja California. |
| 27 | Logística para asistencia al Congreso Gafete Negro | 1 apoyo | Fuera del corte | Inicio 12 de octubre: fuera de enero–septiembre. La cantidad es 1 apoyo de logística, no un congreso nuevo ni un asistente. |
| 28 | Beneficiarias Cartografías | 10 apoyos | No realizado | EN PROCESO desde octubre: fuera del corte y no ejecutado. Son 10 apoyos, no 10 actividades. QC4051.2603 necesita meta exacta. |
| 29 | Logística para asistencia al Festival Literiario del Norte | 2 apoyos | No realizado | POR REALIZAR, 9–16 de noviembre: fuera del corte. Son 2 apoyos de logística y no 2 festivales ejecutados. |

## Qué resolver con Ileana y qué corresponde a la plataforma

**Para Ileana, sin pedir que vuelva a capturar todo:**

1. Confirmar si WAPA maquillaje es ACT-SCDW90018. El actualizado ahora coincide en el inicio del 28 de marzo; si es el mismo, completar/corregir ese ID con fecha final, sede y población, sin otra alta.
2. Pedir a la empresa o responsable del Festival Escenautas que confirme si 2,135 incluye las funciones de Marcelina. Si el total incluye esas funciones, acordar una sola forma de contabilizar el público. No restar ni dividirlo sin respaldo.
3. Precisar qué representan los 17 apoyos de logística y 1,089 personas; qué significa la población de jurados (4 jurados frente a 1 persona, y 6 jurados FECA); y si los 30 beneficiarios FECA corresponden también a 30 proyectos.
4. Para apoyos cuyo intervalo termina el 31 de diciembre, confirmar fecha efectiva y realización al corte de septiembre. Para Nuevo León y Baja California, distinguir municipio de origen de beneficiarios y destino de realización.
5. Validar si los totales cero de las dos altas indicadas son definitivos o pendientes. Si tiene las edades reales, sedes y sesiones faltantes, incorporarlas después al mismo ID.

**Para resolver en la plataforma/catálogos:**

- Definir y habilitar cómo guardar 8 eventos Ex Nihilo, 5 talleres FECA, 8 talleres FECA virtuales y 4 talleres de primeras infancias sin usar Total_Sesiones como cantidad de actividades. No requiere inventar datos ni atribuir a Ileana la creación del campo.
- Habilitar Cobertura estatal si se acuerda usarla para los beneficiarios FECA; en la consulta actual no aparece en Cat_Municipio. No equivale a afirmar presencia en los 46 municipios. Los talleres virtuales necesitan cobertura explícita; no se les asignará estatal solo por ser virtuales.
- Incorporar/confirmar la meta exacta del catálogo para GA2477.2600. Que sea responsabilidad del Despacho ya quedó aclarado; todavía falta su ID de alineación. Para QC4051.2603 y PB3571.2600 la responsabilidad también quedó aclarada, pero no la meta específica; además sus filas actuales están programadas o fuera del corte.

## Control de población original de las ocho altas

Los demás subgrupos poblacionales de estas ocho filas están en cero. No se sumaron discapacidad o grupos prioritarios como personas adicionales.

| Fila | Mujeres adultas en fuente | Hombres adultos en fuente | Niñas/adolescentes en fuente | Niños/adolescentes en fuente | Mujeres a importar sin rango preciso | Hombres a importar sin rango preciso | Total |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 2 | 63 | 76 | 18 | 23 | 81 | 99 | 180 |
| 4 | 250 | 250 | 0 | 0 | 250 | 250 | 500 |
| 6 | 1500 | 1500 | 0 | 0 | 1500 | 1500 | 3000 |
| 7 | 1500 | 1500 | 0 | 0 | 1500 | 1500 | 3000 |
| 8 | 5 | 2 | 0 | 0 | 5 | 2 | 7 |
| 10 | 35 | 35 | 0 | 0 | 35 | 35 | 70 |
| 11 | Sin dato | Sin dato | Sin dato | Sin dato | 0 | 0 | 0 |
| 20 | Sin dato | Sin dato | Sin dato | Sin dato | 0 | 0 | 0 |

## Trazabilidad y verificación

Fuente principal: `Reporte de programación SDPAC_actualizado.xlsx`, Hoja1, A1:W29, dentro de esta misma carpeta. SHA-256: `64355a0e7a595fa6749010183238fa2e29b5ea2f1b2ecb8bfc210a9d23f54ec3`. Fuente sin modificar.

Alineación: matriz 2026 `C:/Users/luisa/Downloads/Matriz_PG_PEC_para_revision.xlsx`, Listas, columnas BA:BB; correspondencias exactas de las seis claves usadas contrastadas contra Cat_Alineacion de la base conectada `DB_Sistema_Cultura_GTO_V1` (Google Sheets, ID 1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4). Cat_Municipio, Cat_Disciplina, Cat_Actividades y Cat_Recintos contrastados durante esta revisión. No se utilizó la matriz 2027.

Se verificaron 827 celdas del Excel exportado contra la preparación, cuatro hojas en el orden de la base, tipos de fechas y claves, ausencia de fórmulas/errores, unicidad de IDs/folios, relaciones padre-hijo y conciliación de población/territorio por cada actividad. Las cuatro hojas se renderizaron e inspeccionaron visualmente.

Este documento y el Excel sustituyen la revisión preliminar para decidir estas ocho altas. El resto permanece identificado, no autorizado automáticamente para carga. No se modificó el exportador CSV, conforme a lo indicado por Luis.
