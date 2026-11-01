# Marce Chagoya — relevancia para las cargas de matrices

**Archivos confirmados por el usuario:** el PPTX DGPA de esta carpeta está relacionado con la nueva pestaña comentada el 29/10, y los dos Excel de alineación son los que Marce le compartió. La identificación de esos adjuntos queda resuelta; no solicitar que se envíen otra vez. Se conserva la distinción de contenido: Excel para claves/metas/alineación y PPTX como referencia del análisis DGPA 2025/2026 y propuesta 2027, sin asumir que los libros contienen todas sus filas de cálculo operativo.

**Complemento manual posterior:** el usuario recuperó el intercambio del 29/10: seis de ocho expedientes con avances parciales, conciliación previa para Edith/Adriana Escamilla, **Comunicación Social pendiente de entregar información**, y solicitud de Excel comparativo 2025/2026 para una nueva pestaña cuyo destino y contenido quedan por precisar. Esto complementa el contexto que no traían las exportaciones. No supone cierre de cargas ni autorización para crear hojas de DB. Ver el complemento al inicio del seguimiento enlazado abajo.

**Actualización posterior del mismo día:** el usuario aportó una exportación ampliada de WhatsApp que sí contiene conversación histórica. El resultado de la primera exportación vacía, descrito abajo, queda limitado a esos primeros archivos. Los acuerdos recuperados, el límite de últimas conversaciones sustantivas en julio y las fuentes técnicas pendientes están en [Seguimiento de conversación recuperada](Seguimiento_Conversacion_Recuperada_2026-11-01.md). No se recuperaron respuestas sustantivas de octubre ni se modificó la DB.

Revisión: 1 de noviembre de 2026. Alcance: dos Excel, texto de las 20 diapositivas del PPTX y dos exportaciones de WhatsApp. Se comparó la referencia de metas con `Cat_Alineacion!A1:R110` de la DB en vivo, sin escrituras externas. No se alteraron Excel ni presentación, no se recalcularon/guardaron los libros ni se validó visualmente el diseño del PPTX. Se conserva corte de carga **enero–septiembre de 2026**, actividades A:BN, territorio A:L y Dashboard_Master fuera de uso.

## Conclusión

La carpeta es **muy relevante para identificar metas, unidades y claves**, especialmente porque recupera en el repositorio una referencia antes citada mediante una ruta de Downloads de la otra computadora. No prueba que sea idéntica a aquel archivo ni que sea la última versión aprobada. **No constituye un lote de actividades realizadas ni resuelve por sí sola las cantidades, fechas, población y duplicaciones pendientes de las direcciones.**

## 1. Matriz_PG_PEC_para_revision.xlsx

Contenido compatible con referencia 2026: claves con sufijos `.26xx` y metas que coinciden mayoritariamente con la DB de 2026. Tiene dos hojas:

- **Matriz:** cuadrícula A1:BK102, 303 fórmulas de consulta; solo cuatro filas con valores guardados, principalmente encabezados y selecciones de ejemplo. No hay una fila completa de alineación y avance para cada meta institucional. La misma selección de PG/PEC del ejemplo **no debe copiarse a todas las actividades**.
- **Listas:** A1:BE104. El bloque **AY3:BE98** tiene 96 renglones con descripción de meta, claves completas, nombre, unidad y meta anual. Las filas 99:104 no agregan descripciones de metas; los ceros auxiliares de BC no son cantidades ejecutadas. También hay listas de PG, PEC, áreas y selecciones dependientes.

### Comparación con la base actual

Se observaron 99 metas en `Cat_Alineacion`. Al comparar descripción normalizada, 90 de los 96 renglones fuente tienen una coincidencia única, cinco no tienen coincidencia exacta y uno tiene dos. La coincidencia de nombre no valida automáticamente vigencia, pertinencia o alineación de una actividad. Comparación íntegra por fila en `Comparacion_Catalogo_2026_2026-11-01.json`.

- **CEARG:** Listas filas 32:35 distingue `QC4049.2601` mantenimiento, `.2602` programa académico, `.2603` programa artístico y `.2604` exposiciones. En la DB los IDs 27 y 28 comparten descripción de mantenimiento con metas anuales distintas (6.3 y 3); no seleccionar la primera coincidencia. La referencia de fila 32 declara meta anual 3, pero falta verificar vigencia y alcance antes de corregir datos o catálogo.
- **Fátima:** filas 86:89 separan ferias, presentaciones editoriales, encuentros profesionales y foro virtual de PB3573. Ayuda a no llamar presentación a toda lectura/taller/encuentro; no determina por sí sola en qué meta se aprobó cada actividad apartada ni si ya está comprendida en un ciclo.
- **Myrna:** filas 62:64 separan dos metas de cursos y una de mantenimiento de PB3565. Su inventario de 17 funciones sigue sin cantidades ejecutadas y una meta única por acción. La mención Q4137 no queda resuelta: esta referencia 2026 sitúa una descripción de Camino Real en **QC4048.2603 (fila 28)**, mientras el libro 2027 la sitúa en QB4137.0000. Es una discrepancia a confirmar, no una equivalencia automática entre ejercicios.
- **Adriana Ugalde:** no se encontraron QC4098 ni Q3688 en las descripciones/claves del bloque de metas; ese pendiente continúa.
- **Adriana Escamilla:** no se encontró una identificación explícita de las tres metas del Conservatorio ni la palabra Conservatorio en el bloque de metas. No asignarlas por semejanza a capacitación musical genérica.
- **Ileana:** el bloque no aporta GA2477.2600 como meta inequívoca para los apoyos del Despacho; la aclaración sigue pendiente.

Hay cuatro diferencias de meta anual frente a coincidencias únicas de la DB:

| Fila Listas | ID DB | Meta | Referencia / DB actual |
|---:|---:|---|---|
| 54 | 55 | Apoyos especiales a organismos culturales municipales | 74 / 94 |
| 57 | 58 | Promoción y animación lectora | 125 / 4800 |
| 58 | 59 | Encuentros/capacitaciones de bibliotecarios | 2 / 15 |
| 60 | 61 | Proyectos socioculturales | 10 / 1 |

Los ajustes de ese grupo ya tienen antecedentes de matrices y confirmaciones en la carga de vinculación del 29/10. **No revertirlos porque este archivo tenga cifras distintas.** Revisar versión y respaldo institucional.

Las cinco descripciones sin coincidencia exacta corresponden a QC4141.2601, QC4141.2602, Camino Real QC4048.2603 y dos metas QC4056.2601/.2602. No significa que sean cinco metas faltantes que deban añadirse: pueden ser cambios de redacción, clave o alcance. Ocho IDs actuales de la DB no reciben coincidencia por descripción desde esta referencia (34, 35, 36, 39, 40, 41, 42, 43), incluyendo proyectos concretos de patrimonio. El archivo de referencia no es un sustituto íntegro del catálogo productivo.

## 2. Matriz_PG_PEC_para_revision 2027.xlsx

También tiene Matriz y Listas. La primera conserva un ejemplo y fórmulas; Listas contiene **104 descripciones** en el bloque de metas, frente a 96 del otro libro. Cambia claves, redacciones, unidades y cifras. Hay valores que requieren comprobarse antes de usarlo incluso para planeación: por ejemplo, Listas fila 50 informa 3800 cursos para promotores y fila 91 informa 800 foros virtuales, frente a 138 y 1 en las referencias comparables del otro libro. No se certifica si son nuevas metas, errores o un desplazamiento de datos.

**No usar la versión 2027 para completar ni corregir automáticamente cargas de enero–septiembre de 2026.** Sus propuestas tampoco autorizan cambios al esquema operativo o al catálogo.

## 3. DGPA_desempeno_integral_2025_2026_y_ruta_2027.pptx

Veinte diapositivas de análisis de DGPA, con comparativos de **enero–agosto 2025/2026** y recomendaciones para 2027–2030. Es útil como control de coherencia y definición de indicadores, no como lista de altas ni evidencia de septiembre completo.

- Diapositiva 2 declara 277 filas fuente en 2026, 34 canceladas y 243 acciones activas. No equivale a los 229 IDs del lote normalizado de Marcelina: corte, exclusiones y universo deben conciliarse. No inferir que faltan exactamente 14 o 48 actividades ni cargar una fila por diferencia de totales.
- Diapositiva 8 menciona el Encuentro de Orquestas Cedro UP y Vientos Musicales con 547 asistentes. Puede orientar la comprobación del posible solapamiento entre Marcelina y Adriana Escamilla, pero no especifica qué personas están comprendidas en cada registro; no autoriza fusionar o borrar.
- Diapositiva 20 distingue actividad activa, programación artística, red de teatros, contratación y ocupación. Advierte que honorarios **no equivalen al costo operativo total**, y que un campo de artista puede agrupar personas/compañías. Son restricciones útiles para interpretar las matrices.
- No copiar como realizados los objetivos de ocupación, preventa o programación de 2027.
- El propio resumen requiere conciliación antes de usarse como fuente de cifras: en diapositiva 9 música figura con promedio 288 en la tabla y 294 en un destacado; en diapositivas 4/5 cambian número de eventos/ocupación de Teatro Juárez. Comprobar universos, filtros y cálculo original, sin corregir registros individuales para que cuadren con la presentación.

## 4. Conversación WhatsApp

**Esta sección describe únicamente la primera exportación**, sustituida para efectos de contexto por el seguimiento enlazado al inicio. La exportación ampliada posterior contiene 1,028 bloques fechados; sí permite recuperar requisitos y decisiones anteriores, sin demostrar que incluya acuerdos recientes de las cargas.

Ambas exportaciones solo contienen avisos automáticos de cambio de código de seguridad de los días 30 y 31/10. **No hay conversación sustantiva de Marce, respuestas, autorización de cambios ni acuerdos recuperables.** Si se esperaba recuperar instrucciones de Planeación, hace falta una exportación que realmente contenga esos mensajes; un audio o reunión no se reconstruye a partir de estos avisos.

Por la instrucción previa del usuario sobre retirar conversaciones tras resumirlas, se eliminan los dos archivos y su carpeta después de documentar que no aportan acuerdos. Los tres archivos de trabajo originales se conservan.

## 5. Qué confirmar con Marce

1. Qué versión es la referencia institucional aprobada para **metas y alineación de 2026**, y si este archivo sin año sigue vigente. No hace falta pedirle nuevamente toda la información de las direcciones.
2. Equivalencias específicas: QC4098/Q3688; meta oficial de Camino Real en 2026; tres metas del Conservatorio; meta de los apoyos GA2477.2600. Son decisiones que estas referencias no resuelven.
3. Cómo distinguir metas con el mismo texto (caso CEARG) y cuál es el catálogo autorizado cuando cambian meta anual o clave.
4. Si existe una matriz con la **alineación PG/PEC validada por cada meta**, no únicamente listas de opciones y una fila de ejemplo.

El siguiente avance técnico es usar esta referencia para preparar cruces de meta–clave–unidad de las matrices pendientes y separar coincidencias únicas de casos que requieren validación. Se pueden seguir revisando actividades documentadas, sin inventar cifras ni activar columnas fuera de uso. Esta revisión no realizó cargas, cambios de catálogo, envíos de mensajes, commits ni pushes.
