# Edith: revisión de visitantes y preparación de la normalización

Revisión: **2026-10-27T20:28:03-06:00**. Fuente: `CONCENTRADO VISITANTES Trimestres 2026.xlsx`, única hoja visible `Concentrado 2026`, rango A1:AK66. El original no se modificó.

## Resultado

**Analizable, pero no listo para otra carga de altas.** El archivo reporta atención presencial y virtual de cinco zonas arqueológicas. Las cinco ya tienen concentrados de enero–septiembre en la base, y Cañada de la Virgen tiene además un registro enero–junio. Antes de generar IDs o pegar filas nuevas, conciliar y corregir los existentes.

En los cinco concentrados, Total_Sesiones coincide exactamente con el total de visitantes presencial+virtual del Excel. Es un indicio directo de cantidad de visitantes colocada en sesiones; no demuestra que se realizaron decenas de miles de sesiones. No trasladar esa cifra a Cantidad_Actividades ni deducir una cantidad de eventos a partir de visitantes.

## Metas y sedes identificadas

| Sitio | ID de alineación actual | Proceso actual | Municipio del sitio | Unidad del catálogo |
|---|---:|---|---|---|
| CAÑADA DE LA VIRGEN | 13 | QC4042 | San Miguel de Allende | Personas atendidas de manera presencial y virtual |
| EL CÓPORO | 15 | QC4043 | Ocampo | Personas atendidas de manera presencial y virtual |
| PLAZUELAS | 18 | QC4045 | Pénjamo | Personas atendidas de manera presencial y virtual |
| PERALTA | 20 | QC4046 | Abasolo | Personas atendidas de manera presencial y virtual |
| ARROYO SECO | 22 | QC4048 | Victoria | Personas atendidas de manera presencial y virtual |

Las claves Q14/Q15/Q17/Q18/Q19 escritas en la columna A del concentrado no se interpretaron como IDs actuales del catálogo. Las correspondencias de la tabla se verificaron por nombre y descripción de atención a visitantes, sin confundirlas con metas de intervenciones. El municipio del sitio no demuestra el origen municipal de los visitantes virtuales ni identifica por sí solo comunidad o ZAP.

## Registros que ya existen: conservar sus IDs al revisar

| ID actual | Meta | Periodo | Nombre | Total_Sesiones actual | Usuario actual |
|---|---:|---|---|---:|---|
| ACT-SCBV52724 | 13 | 2026-01-01 a 2026-06-30 | Reporte de visitantes presenciales y virtuales en la Zona Arqueológica de Cañada de la Virgen en SMA. | 1 | ealvarezt@guanajuato.gob.mx |
| ACT-SCQZ00697 | 13 | 2026-01-01 a 2026-09-30 | visita guiada a zonas | 69395 | ealvarezt@guanajuato.gob.mx |
| ACT-SCAC38909 | 15 | 2026-01-01 a 2026-09-30 | visita guiada a zonas | 57652 | ealvarezt@guanajuato.gob.mx |
| ACT-SCYP66179 | 18 | 2026-01-01 a 2026-09-30 | visita guiada a zonas | 68385 | ealvarezt@guanajuato.gob.mx |
| ACT-SCCS51664 | 20 | 2026-01-01 a 2026-09-30 | visita guiada a zonas | 61362 | ealvarezt@guanajuato.gob.mx |
| ACT-SCOT28274 | 22 | 2026-01-01 a 2026-09-30 | visita guiada a zonas | 44812 | ealvarezt@guanajuato.gob.mx |

El correo de estos registros es ealvarezt@guanajuato.gob.mx. Confirmarlo como responsable antes de emitir una futura preparación a nombre de Edith. El concentrado enero–junio de Cañada y el enero–septiembre pueden cubrir los mismos visitantes: no sumar ni eliminar uno automáticamente sin revisar sus alcances.

## Diferencias concretas del archivo

| Trimestre | Presencial al sumar meses | Presencial en resumen trimestral | Virtual al sumar meses | Virtual en resumen trimestral |
|---|---:|---:|---:|---:|
| 1 | 11,288 | 8,931 | 177,537 | 30,965 |
| 2 | 8,137 | 7,234 | 84,607 | 156,224 |
| 3 | Sin desglose mensual | 10,496 | Sin desglose mensual | 87,756 |

Referencias: enero–marzo en filas 9:13; abril en Y9:AE13; mayo–junio en D19:Q23. Resumen trimestral de los cinco sitios en filas 45:49. No se eligió un bloque como oficial por intuición.

- **Julio, agosto y septiembre:** están vacías las cifras de origen de niñas/niños/mujeres/hombres y virtuales del bloque mensual, aunque las fórmulas muestran cero. El resumen trimestral sí reporta **10,496 presenciales y 87,756 virtuales**. No interpretar esos vacíos como cero actividad, ni distribuir el trimestre por igual entre tres meses.
- **Total del segundo trimestre, Q50:** la fórmula `SUM(Q45:Q48)` omite Arroyo Seco (Q49, 29,731). Guarda 133,727, mientras las cinco filas de ese bloque suman 163,458. Esto solo verifica la suma del bloque: no certifica que sus cifras individuales sean definitivas.
- **Referencia circular en V35:** `SUM(V29:V36)` incluye a la propia V35. El valor guardado no debe tratarse como resultado confiable de esa fórmula.
- **Virtuales repetidos:** enero tiene 15,945 en cada uno de los cinco sitios; febrero, 8,043 en cada uno. Enero coincide además con 12,952 + 2,993 de L3:L5. Puede ser un alcance digital compartido o cifras por sitio: Edith debe aclarar la metodología antes de sumarlos.
- **Año y notas históricas:** la hoja y el reporte inferior indican 2026, pero aparecen rótulos SED/IGTO 2025, meta 25 y vis tot 2024. Confirmar que los datos a utilizar corresponden efectivamente a 2026 y qué bloques son solo auxiliares.
- **Población:** niñas/niños no ofrecen rangos compatibles inequívocos con 0–5, 6–12 y 13–17; mujeres/hombres no permiten asignar por sí solos 30–59. Además, el trimestre julio–septiembre carece de ese desglose aunque tiene total positivo. Virtuales no tienen sexo/edad: no repartirlos ni agregarlos a los grupos presenciales.

## Qué pedirle a Edith

1. **Versión definitiva:** confirmar que es información 2026 y cuál bloque es correcto: meses o resumen trimestral. Idealmente, enviar una tabla final por sitio y mes con presencial, virtual y total de enero–septiembre. No es necesario rehacer todos los formatos de la plataforma.
2. **Julio–septiembre:** proporcionar las cifras mensuales si existen. Si solo dispone del trimestre, decirlo expresamente; tendría que conservarse como dato trimestral y tratar su periodo correctamente en el tablero, sin cargar todo en julio ni inventar meses.
3. **Virtuales:** definir si son visitantes virtuales, reproducciones, alcance o personas únicas; si pertenecen a cada sitio o a una cuenta común. Confirmar que pueden sumarse sin repetir el mismo total global.
4. **Duplicaciones actuales:** confirmar si el registro enero–junio de Cañada está comprendido en su reporte enero–septiembre. Acordar qué registro se actualizará o reemplazará conservando trazabilidad antes de cualquier eliminación.
5. **Sesiones y población:** si tiene número real de visitas guiadas/sesiones y rangos de edad, compartirlos separados del total de visitantes; si no los tiene, declararlos no disponibles. Confirmar si las cifras por sexo/edad corresponden solo a presencial.
6. **Identificación:** confirmar correo responsable ealvarezt@guanajuato.gob.mx y aportar los enlaces o evidencias disponibles del reporte.

Los ajustes de suma, el tratamiento de concentrados/periodos, los catálogos y la estructura para distinguir modalidades corresponden a la preparación técnica. Edith debe confirmar los datos de origen; no se le pide resolver fórmulas de AppSheet ni generar IDs.

## Orden recomendado para continuar

1. Obtener de Edith la tabla/cifra oficial y aclaración de virtuales.
2. Conciliar los seis registros actuales y sus hijos contra esa fuente, preservando los IDs; distinguir correcciones de nuevas altas y evitar repetir enero–junio.
3. Conservar visitantes presenciales/virtuales separados. Si el público virtual no tiene municipio, no atribuirle origen municipal por la ubicación del sitio.
4. Acordar el periodo de consolidación y reflejarlo correctamente en el tablero; no llamar visitas a sesiones ni interpretar cada concentrado como un evento.
5. Emitir solo entonces el archivo de actualización/altas con alcance y rangos claros. No se generó un lote nuevo ni se modificó la base durante esta revisión.

## Estado comprobado de las otras cargas

Esta tabla cuenta lotes preparados por persona/equipo; no equivale a contar direcciones generales completas.

| Carpeta | Filas del lote | IDs del lote presentes en la base | Situación |
|---|---:|---:|---|
| Marcelina | 229 | 229 | Los 229 IDs/folios aparecen en la base. Periodo enero–agosto; no implica septiembre completo. |
| Soraya Villegas | 292 | 292 | Los 292 IDs/folios aparecen en la base; no representa por sí solo todas las direcciones. |
| CEARG | 5 | 5 | Las 5 altas parciales ya aparecen en la base. No repetir el lote. Las otras 70 filas originales requieren conciliación; varias ya tenían coincidencias, no son 70 altas nuevas confirmadas. |
| Ileana Salazar | 8 | 0 | 8 altas parciales preparadas, todavía sin esos IDs/folios en la base. No cubren las 28 filas del actualizado; ver guía personal. |
| Adriana Ugalde | 47 | 0 | 47 concentrados propuestos, sin pegar. Requieren campos de cantidad separados de sesiones, cobertura estatal y pendientes de catálogo/alineación. Existen otras capturas de Adriana que no deben duplicarse. |
| Adriana Escamilla | — | — | El archivo de conciliación revisa registros existentes; no es un lote de altas. Los concentrados del Conservatorio requieren definir metas y cantidades separadas de sesiones. |
| Edith | Sin lote nuevo | 6 registros relacionados | Cinco concentrados enero–septiembre y otro enero–junio de Cañada. Requieren conciliación/corrección. |

La presencia de IDs y folios acredita que esas filas ya aparecen en la base, no que se certificaron todos sus campos o la totalidad de registros del área. En particular, las cinco filas CEARG ya existen: no volver a pegar ese lote. La carga parcial de Ileana es la otra preparación disponible de ocho altas, con faltantes explícitos y condiciones indicadas en su guía personal.

## Fuentes y conservación

- Fuente de Edith: archivo indicado al inicio, hoja Concentrado 2026. SHA-256 `a0435cacd778b0e531392a269b5d731c4a5e0f1557db66bc7f170fe6838bf217`. No se alteró el original ni sus fórmulas.
- Base conectada DB_Sistema_Cultura_GTO_V1, Google Sheets ID 1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4: Registro_Actividades A1:AN2130 (dos bloques acotados), Cat_Alineacion A1:R105. 1207 actividades con ID en esta lectura. No hubo escrituras.
- Lotes y guías de Marcelina, Soraya, CEARG y Adriana Ugalde en outputs; carga/guía parcial de Ileana y revisión de conciliación de Adriana Escamilla en sus respectivas carpetas. Coincidencias comprobadas por ID y folio, no solo por nombre.
- Esta revisión no modifica el CSV ni las funciones del dashboard.
