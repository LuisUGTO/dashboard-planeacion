# Población desde territorio y conciliación — 03/11/2026

**Estado: aplicado y verificado en la DB.** Luis autorizó aprovechar los totales territoriales como Población General cuando las áreas no habían capturado población, sin consultar al equipo. Corte de nuevas poblaciones: enero–septiembre de 2026. La autorización no convierte municipio, localidad o ZAP en información demográfica.

## Cambios aplicados

- **13 nuevas filas de población**, en Registro_Poblacion **A2444:H2456**, vinculadas a actividades existentes: seis de Editorial, cinco de Museos, una de Producción y una de Formación. Total: **10,527 asistencias reportadas**, ya existentes en territorio; no son público nuevo, personas únicas ni actividades nuevas.
- Grupo_Etario: Población General; Genero: No se cuenta con el dato; grupo prioritario vacío. Solo se trasladó participación/acceso cuando ambas cantidades territoriales eran enteros no negativos y sumaban el total (seis casos). Los otros siete conservan ese desglose desconocido.
- **485 celdas vacías** F/G completadas en población de **266 actividades**. En cada fila, la otra parte ya igualaba el total: el complemento comprobable es cero. No se sustituyeron vacíos por cero de forma general.
- Se exigió concordancia de los totales de territorio y población para los complementos; los desgloses territoriales conocidos también debían coincidir. Se apartaron contradicciones, posibles duplicaciones, fechas inválidas/fuera de corte y cantidades desconocidas. No se sobreescribieron cantidades existentes ni se redistribuyeron edades, sexo o prioridades.

No cambian actividades, territorio, evidencias, catálogos ni AppSheet. Sin código nuevo, mensajes, commits, push o publicación. Se respetaron A:BN, A:L y A:H; no se leyó ni escribió Dashboard_Master o columnas fuera de uso.

## Resultado de la auditoría

Recalculada con la lógica vigente de assets/js/calidad-datos.js, convirtiendo las fechas seriales de Sheets a fechas ISO:

| Indicador | Antes | Después |
|---|---:|---:|
| Registros con cualquier alerta | 1435 | 1377 |
| Sin registro de población | 48 | 35 |
| Desglose de participación/acceso incompleto | 801 | 542 |
| Registros con datos faltantes, categoría general | 1341 | 1227 |

**58 registros quedaron sin alertas.** Se cerró el desglose de 266 registros, pero siete de las nuevas poblaciones todavía carecen de ese desglose: reducción neta de 259 en esa causa. Las categorías se superponen y no se suman como actividades diferentes.

Permanecen, entre otras causas, 1005 registros sin archivo de evidencia vinculado, 994 sin localidad, 320 con coincidencias que requieren revisión y 84 con diferencias de cifras. No se ocultaron alertas para disminuir el indicador. La captura del usuario mostraba 1443; corresponde a otra lectura/estado del sitio. **1377 es el recálculo sobre la lectura actual completa; no se verificó visualmente la cifra de la página pública ni sus filtros/caché.** Dos canceladas también se conservan en el historial de conciliación.

## Editorial

Se completó población de los registros existentes Premio Nacional de Poesía Efraín Huerta, mesa de diálogo, Foro virtual del libro, Premiación, Voces Guanajuato y Rumbo al encuentro de escritoras (septiembre). No son nuevas actividades de Fátima ni sustituyen sus 67 presentaciones.

Continúan los dos públicos del 26/03 que está buscando Raúl. Festival de Escritores San Miguel de Allende tiene dos territorios (Guanajuato 28 y San Miguel de Allende 300); queda apartado para confirmar el alcance y que se puedan acumular, sin decidir por coincidencia de título. Dos registros Rumbo al encuentro de escritoras de octubre quedan fuera de esta carga.

La lectura de la matriz viva vuelve a mostrar **La región de San Felipe, 25/09**, fila 161: 25 mujeres + 15 hombres = 40, con edades que también suman 40. La DB contiene territorio 42 (1 participación + 41 acceso) y población 41 (1 + 40). La respuesta al formulario confirma un solo evento, pero no aclara si los 40 excluyen al ponente ni cuál es el total general: se conserva la diferencia hasta precisar el alcance; no imponer 40, 41 o 42 por intuición. La discrepancia de Las brujas, 26/25, pertenece a octubre y no se corrigió en este corte.

Las 65 presentaciones no canceladas del lote siguen con PG/PEC sin completar, localidades y participación/acceso pendientes. Cat_Alineacion 87–90 no aporta acciones PG/PEC: no se pueden inventar a partir de la familia P/Q. Ese trabajo institucional y de catálogo no debe convertirse en una solicitud para que Fátima rehaga toda la matriz. Fecha exacta de Carta al amor propio, alcance/meta de actividades apartadas y públicos confirmados siguen en su seguimiento.

## Respaldo y verificación

Lectura previa de metadatos y datos operativos, copia privada y relectura inmediatamente antes de escribir sin cambios concurrentes. Nuevas filas añadidas al final de la cuadrícula, sin insertar entre registros; copiados exclusivamente formato/validación de una fila operativa. Celdas modificadas sin fórmulas, chips o validaciones restrictivas en la inspección nativa.

Lectura posterior: **cero cambios de valores fuera del plan y cero diferencias de formato/validación/chips**, comparados por coordenadas. Se comprobaron los valores, formato y validación de las 13 nuevas filas. IDs únicos y cero huérfanos en las cuatro tablas operativas. Conteos: **1485 actividades, 1524 territorios, 2445 poblaciones y 522 evidencias**. Los aumentos previos de actividad/territorio/evidencia frente al informe anterior ya estaban presentes antes de esta tarea; no atribuirlos a esta escritura.

Respaldos y plan por ID/coordenada: `respaldo/privado_cargas_2026-11-03/conciliacion_poblacion_before.json`, `conciliacion_poblacion_plan_final.json`, `conciliacion_poblacion_after.json`, excluidos de Git. Control de resultados: `Control_Conciliacion_Poblacion_2026-11-03.json`. No se ejecutaron pruebas del código porque no hubo cambios de lógica. Verificación visual no realizada por el bloqueo de navegador documentado; se verificó la estructura mediante la API nativa.
