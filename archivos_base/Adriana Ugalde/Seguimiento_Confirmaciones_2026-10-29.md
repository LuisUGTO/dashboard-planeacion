# Adriana Ugalde: confirmaciones del 29 de octubre de 2026

## Contraste con WhatsApp — 31 de octubre de 2026

Se leyeron las dos exportaciones aportadas (`chat.txt` y `chat.md`), con mensajes del 21 al 30 de octubre. Las aclaraciones técnicas escritas son consistentes con este seguimiento y con `Resultado_Carga_Directa_2026-10-29.md`. El texto siguiente conserva la fase anterior de preparación; el informe de resultado registra la carga posterior de 60 concentrados y tiene precedencia para conocer lo ejecutado. Esta revisión no consultó ni modificó Google Sheets.

- El 23/10 se identificaron como fuentes los dos Excel que están en esta carpeta: `Captura Plataforma Gestión de Metas Cultura .xlsx` y `Avance de metas DGVDC 2026.xlsx`; el segundo corresponde al avance mensual. La exportación no permite comprobar por sí sola que los adjuntos sean idénticos byte a byte a esas copias.
- Las respuestas del 27/10 sobre corte enero–septiembre, ceros de actividades, ausencia de sesiones separadas, alineación pendiente al eje transversal y agentes en revisión quedan corroboradas por los mensajes escritos. La aclaración del 29/10 sustituye la afirmación anterior de que las cinco capturas iniciales eran todas de enero: corresponden a los meses detallados en este seguimiento.
- El 27/10 Luis indicó a Adriana que por el momento no continuara capturando mientras se preparaba la carga. Se conserva como acuerdo histórico de coordinación, no como prohibición permanente ni prueba de que la base no haya cambiado después. Coordinar futuras correcciones para evitar capturas simultáneas o duplicadas.
- El 29/10 a las 21:20 Luis comunicó que ya estaban organizados 60 registros mensuales y que las confirmaciones posteriores se aplicarían sobre esos mismos registros. El 30/10 Adriana agradeció e indicó que enviaría los datos pendientes cuando los tuviera; **no aportó nuevas cifras ni resolvió los pendientes**. Ese acuse no certifica por sí solo la exactitud de toda la carga.
- Siguen pendientes población de animación lectora de mayo/junio, población de visitas escolares de agosto, correspondencia QC4098/Q3688, agentes, sedes y evidencias. No generar nuevas altas para reemplazar los 60 registros sin revisar primero sus IDs y el estado vigente.
- Se recupera además una duda funcional del 22/10: el área no sabía qué debía informar en «Descripción de la oferta» y pidió revisar la tipología de agentes culturales (por ejemplo, promotores e instructores). No consta una respuesta explícita a esas dos dudas en el chat; mantenerlas pendientes de definición funcional. La solicitud inicial de un único registro enero–septiembre fue seguida por el criterio de concentrados mensuales, sin desagregar taller por taller.
- Hay un mensaje de voz del 23/10 cuyo contenido fue omitido en ambas exportaciones. No se pudo recuperar ni atribuirle confirmaciones adicionales. Los adjuntos omitidos tampoco se reconstruyen desde el texto del chat.

Por instrucción del usuario se eliminan las exportaciones completas y su carpeta `conversación_whatsapp` después de conservar este resumen técnico. No se copian teléfonos, enlaces de reuniones, códigos de acceso ni mensajes ajenos al análisis. La carpeta no aparecía entre los archivos seguidos por Git al revisarla; esta comprobación no audita posibles copias externas.

## Seguimiento original del 29/10 (previo a la carga)

Luis compartió la respuesta del área fechada el 29 de octubre. Este seguimiento actualiza los criterios para preparar la carga. **No modifica registros en línea ni sustituye todavía el Excel de preparación del 27 de octubre. No pegar ese archivo como si ya incorporara estas aclaraciones.**

## Qué quedó confirmado

- Las fechas amplias de las capturas iniciales fueron un error de interpretación del periodo. Las cantidades corresponden al primer mes con avance de cada meta, no a todo el intervalo registrado.
- Promotores culturales: febrero, 8 cursos/talleres.
- Talleres artísticos: enero, 687 talleres.
- Formación lectora: febrero, 12 cursos/talleres; enero sin avance.
- Artes en educación básica: septiembre, 3 talleres.
- Danza folclórica: una capacitación en abril y otra en agosto. Son dos periodos separados, no un concentrado continuo abril–agosto.
- Metas declaradas vigentes. Esta confirmación general no convierte en definitivos los beneficiarios que el propio mensaje declara pendientes o en revisión.

## Tratamiento de las capturas existentes

Los siguientes IDs proceden de la revisión del 27 de octubre; comprobar su estado actual antes de preparar correcciones o nuevas altas. No se realizó una nueva lectura de producción en este seguimiento.

| Meta | ID observado | Periodo mensual confirmado | Cantidad de actividades | Tratamiento previsto |
|---|---|---|---:|---|
| Promotores culturales | ACT-SCYQ40561 | Febrero 2026 | 8 | Corregir el periodo del mismo registro; ya no se interpreta que cubra marzo–septiembre. Esos otros meses podrán prepararse por separado si no existen nuevas capturas. |
| Talleres artísticos | ACT-SCQN95689 | Enero 2026 | 687 | Conservar el ID y comprobar población y alineación antes de completar. |
| Formación lectora | ACT-SCVZ93952 | Febrero 2026 | 12 | Conservar el ID; no crear otro por atribuirlo a enero. |
| Artes en educación básica | ACT-SCKK85034 | Septiembre 2026 | 3 | Corregir el periodo septiembre–octubre al mes confirmado, conservando el ID. |
| Danza folclórica | ACT-SCYY07745 | Abril y agosto 2026, por separado | 1 + 1 | Separar los dos meses, revisando también sus filas de población y territorio. Se puede conservar el ID para uno y crear una alta para el otro, sin dejar además el concentrado original con las dos capacitaciones. La elección y los datos de cada registro se definirán al preparar la corrección. |

Las cantidades anteriores cuentan cursos, talleres o capacitaciones, **no sesiones**. Adriana ya declaró que no dispone de sesiones separadas; no mantener los avances de 687, 12, 8 o 3 como si fueran sesiones verificadas. Se requiere un campo de cantidad de actividades habilitado y validado antes de trasladar esas cifras fuera de Total_Sesiones.

## Rangos de fechas de los concentrados

Si se reporta un concentrado mensual y no fechas efectivas de cada capacitación, abril se representa del **01/04/2026 al 30/04/2026** y agosto del **01/08/2026 al 31/08/2026**, identificándolos expresamente como periodos mensuales de consolidación. Son límites del periodo reportado: no prueban actividad diaria ni cantidad de sesiones. Si el área dispone de las fechas reales y se preparan eventos individuales, conservarlas.

El mismo criterio aplica a enero, febrero y septiembre en las otras capturas mensuales. No adelantar esta recomendación como una instrucción de captura en un formulario que aún no distinga concentrados y cantidades.

## Beneficiarios: dos casos que cambian de tratamiento

### Mayo: animación lectora

- Actividades: **318**, confirmadas.
- Beneficiarios: el **2** de la fuente queda **en revisión**; no certificarlo como total completo ni sustituirlo por una cantidad estimada.
- El área explicó que a veces recibe reportes tarde y los incorpora al acumulado del mes siguiente. Hay que confirmar si ocurrió en este caso; no afirmar que los 5,226 reportados en junio incluyen mayo sin esa confirmación.
- Solicitar mayo y junio con las cifras correspondientes a cada mes y sin arrastres que se vuelvan a sumar. Si pasó en otros meses, aplicar la misma conciliación.

### Agosto: visitas escolares

- Visitas: **20**, confirmadas.
- Beneficiarios: pendientes de listas de asistencia. El **0** de la fuente no significa ausencia comprobada de asistentes.
- En la siguiente preparación, representar la población como pendiente/sin dato completo y conservar el 0 original solo en el control de procedencia. No fabricarle una población definitiva de cero ni asumir un promedio de asistentes por visita.
- La información de actividades puede prepararse por separado de la población pendiente. Los indicadores de población deben identificar que el dato está incompleto; no presentarlo como conciliado.

## Qué falta de Adriana

1. Entregar la revisión de población de animación lectora de mayo y confirmar si junio incluye reportes de mayo. Cuando sea posible, remitir ambas cifras corregidas por mes y señalar otros meses afectados por reportes tardíos.
2. Completar los beneficiarios de las 20 visitas escolares de agosto al recibir las listas. Mientras tanto, declararlos pendientes.
3. Si dispone de fechas reales de las capacitaciones de danza, compartirlas; si solo reporta el mes, mantener el criterio de concentrado mensual. No es necesario pedirle que invente sesiones ni rehaga los archivos completos.

Las cantidades mensuales de población que ya contiene el Excel de origen para abril y agosto se contrastarán al dividir la captura de danza; no repartir por mitades la población del registro amplio. La confirmación de actividades no valida automáticamente la integridad de todos los beneficiarios.

## Qué corresponde resolver en la preparación técnica

- Volver a consultar la base actual antes de corregir IDs, emitir folios o crear nuevas altas. Las personas siguen capturando; no basta la consulta del 27 de octubre.
- Preparar por separado las correcciones de registros existentes y las altas de meses no registrados, conservando sus relaciones con población y territorio.
- Actualizar el tratamiento del cero de agosto y del dos de mayo antes de volver a entregar el lote. La preparación anterior los conservaba como cifras expresas de la fuente; este mensaje agrega que no son datos definitivos.
- Verificar el estado actual de los campos de cantidad/tipo de registro, Cobertura estatal, subdisciplinas, acciones PG/PEC y metas de QC4098. Sus condiciones se documentaron el 27; no se comprobó en este seguimiento que ya se hayan habilitado.
- La confirmación de vigencia de metas permite mantener los objetivos declarados del área, pero no actualiza automáticamente el catálogo productivo ni resuelve las selecciones de alineación ausentes.

No se generaron nuevos IDs ni folios, no se sobrescribió el Excel preparado y no se modificó la base, AppSheet o el tablero con esta respuesta.
