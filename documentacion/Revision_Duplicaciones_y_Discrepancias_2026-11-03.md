# Duplicaciones y discrepancias — 03/11/2026

**Estado: corrección de lógica implementada/probada localmente; marca de sustitución aplicada y verificada en DB. Sin publicación por el agente.** Luis solicita reducir las320 coincidencias y80 diferencias de su captura. Se revisaron fuentes operativas y antecedentes de las áreas antes de cambiar datos o reglas. No se borraron ni fusionaron registros.

## Horas distintas: 28 alertas falsas resueltas

El detector agrupaba nombre, fecha inicial y sede, omitiendo la hora explícita existente en Descripcion_Breve. El corte directo tenía320 registros agrupados en132 conjuntos de coincidencias. Ejemplos comprobados en los registros de programación:

- Los Músicos de la Capital,01/02,TeatroJuárez:13:00 y18:00.
- El Lago de los Cisnes,28/02,TeatroJuárez:16:30 y20:00.
- Océano,06/03,Irapuato:11:00 y17:00;13/03:09:00,11:00,17:00.
- Lava,Dora lava,10/03:11:30 y15:30.
- Programa10,Día de la Niñez,30/04:11:00 y19:00.
- Otros registros de Océano y Tianguis Cultural también tienen horas explícitas distintas.

La nueva regla compara cada par: si ambos tienen una única Hora:HH:mm(:ss) válida y las horas de inicio son distintas, no genera esa coincidencia. Si falta una hora, es inválida, ambigua o coincide, conserva la alerta. No usa cantidad de asistentes diferente como prueba de grupos independientes; tampoco basta que cambie usuario, meta, descripción o artista. IDs/folios repetidos siguen alertándose siempre.

Resultado sobre el mismo conjunto: **320→292** registros con identidad por revisar. No se excluyeron28 actividades ni se alteraron sus públicos; siguen representadas todas las funciones. El contador general puede mantenerse porque esos registros conservan otras alertas.

## Cañada: captura de ejercicio sustituida

Edith confirmó expresamente en su Excel devuelto que ACT-SCBV52724,enero–junio, fue un ejercicio de alimentación de la plataforma y fue sustituido por ACT-SCQZ00697,enero–septiembre. Se comprobó la existencia de ambos IDs y se actualizó **N331** a una marca exacta `[SUSTITUIDO:ACT-SCQZ00697]`, seguida de procedencia y descripción anterior completa.

La regla reconoce solo esa sintaxis explícita con ID válido distinto del propio; no toma menciones narrativas como sustitución. Mantiene una categoría Capturas sustituidas en Conciliación y etiqueta en ficha. Se conservan ID, folio, territorio, poblaciones, cifras originales y exportación CSV histórica. No marcar como cancelación: lo sustituido es la captura, no la ejecución real.

Las cinco vistas analíticas y sus fuentes de presentación excluyen la captura y sus hijos mediante el filtro común; métricas y series mensuales también la excluyen. Por ello **49465 territoriales y211 demográficos históricos** dejan de sumar a ejecución al publicarse el cambio. No son asistentes nuevos ni una corrección del número original. Se elimina de la categoría Diferencias la contradicción49254 de una captura que no representa ejecución independiente; queda visible como historial y referencia al registro vigente. Si la referencia no existe, se alerta esa identidad.

## Comprobaciones

- **42 pruebas pasaron:** `node --test tests/calidad-datos.test.cjs tests/tablero.test.cjs tests/ficha-actividad.test.cjs`. Cinco nuevas cubren horas distintas/iguales/faltantes/ambiguas, grupos de tres, IDs/folios, sustitución explícita, métricas, serie y cinco vistas/ficha/CSV.
- Nueva integración de vistas: ejecución recibe solo el registro vigente y sus hijos; rawDB conserva ambos; CSV de Capturas sustituidas conserva el ID histórico; ficha mantiene cifras y referencia.
- En DB solo se escribió N331 con máscara userEnteredValue. Metadatos previos, IDs comprobados y respaldo privado; lectura posterior nativa confirmó el texto previsto y formato/validación/chips conservados. No se modificaron cantidades ni hijos, ni columnas fuera de A:BN/A:L. Dashboard_Master no se usa.
- Recálculo directo después: identidad292, diferencias80, total1380 con alertas o historial. El corte previo directo tenía81 diferencias; la captura del usuario mostraba80 y depende de lectura/filtros. No prometer un número remoto idéntico antes de publicar y verificar.
- Se añadieron versiones en las rutas relativas de ambos módulos JS para evitar que un HTML nuevo use un módulo anterior desde caché. No se cambiaron CDN o dependencias.

Código a publicar conjuntamente: **index.html, assets/js/calidad-datos.js y assets/js/ficha-actividad.js**. No se hicieron commits, push o publicación. No se comprobó visualmente navegador/PPTX en esta revisión: se verificaron lógica e integración de datos en pruebas. La exclusión y reducción de falsas coincidencias no estarán activas en el sitio anterior por el mero cambio de descripción.

Respaldos privados excluidos de Git: `respaldo/privado_cargas_2026-11-03/dedup_sustitucion_before.json` y `dedup_sustitucion_after.json`. Lecturas, grupos y resultados completos en tmp/dedup_20261103, también excluido.

## Pendientes reales

Las292 alertas restantes requieren revisar grupos/periodos/alcance: muchas son visitas con nombres genéricos y no disponen de horario o grupo explícito. Una coincidencia no prueba que se deba borrar; tampoco una cantidad distinta prueba que sean visitas independientes. No se eliminan por similitud ni se alteran los totales para hacerlos coincidir.

Se contrastó también CEARG y el archivo original de Museos. CEARG distingue atendidos, concluyentes y ganadores, con cifras diferentes, docentes y algunas inconsistencias internas. Museos contiene desgloses participación/acceso que ya son contradictorios en la propia fuente. No hay respaldo para tomar automáticamente el mayor/menor, restar un artista o repartir el faltante por edad/sexo. Los casos deben resolverse con la aclaración del área o una fuente inequívoca, conservando cada medida y su periodo.

La mezcla de alcance digital y visitantes presenciales en los reportes de Edith **sigue pendiente** de separación de indicadores; excluir el ejercicio repetido no certifica que el total restante sean personas únicas. Los67 avisos de cantidades tampoco se ocultaron:60 son concentrados mensuales con modelo operativo pendiente y7 son sesiones/cantidades por verificar.
