# Lectura CSV y contador de conciliación — 03/11/2026

**Estado: implementado y probado localmente; falta publicación.** Luis informa que Conciliación sigue mostrando **1443**, incluso tras Ctrl+F5. Se revisaron código publicado, código local, la respuesta CSV pública limitada a las columnas operativas y la DB directa.

## Hallazgo comprobado

Antes del ajuste, los contenidos públicos de index.html y assets/js/calidad-datos.js coincidían con sus copias locales. No se trataba simplemente de asumir una publicación vieja. Esta comprobación de contenido por HTTP sustituye la falta de verificación remota de código anotada en informes anteriores; **no es una revisión visual del tablero o su PPTX**.

El cargador usaba gviz/tq, cuya inferencia de tipos omite valores minoritarios cuando una columna mezcla números y texto. Registro_Actividades.Nombre_Espacio mezcla referencias numéricas y nombres literales. Se comprobó, por ejemplo, que **Museo del Pueblo de Guanajuato** en ACT-SCHG41917 y otras sedes presentes en Sheets se convertían en vacío en el CSV de gviz. Esto generaba alertas falsas de sede y alteraba la revisión de coincidencias por nombre/fecha/sede.

En la lectura gviz acotada A:BN/A:L/A:H/A:E/A:R se recalcularon **1396 registros con alertas**, frente a **1378** con lectura directa; había **18 registros adicionales únicamente por sede falsamente ausente**. La inferencia también ocultaba otras sedes y coincidencias en registros que ya tenían más alertas. No se descargaron columnas fuera de uso para intentar reproducir el 1443 del sitio: el cargador anterior no restringía esas columnas. No atribuir toda la diferencia del contador del usuario a las 18 alertas, ni comparar cortes distintos como si fueran una instantánea idéntica.

## Corrección

Se conserva el tablero estático, las cinco fuentes, PapaParse 5.4.1, filtros, CSV de descarga y lógica de calidad. Solo se sustituye la lectura de entrada por **exportación CSV nativa**, que conserva los valores mixtos, con gid y rango operativos explícitos:

| Hoja | gid | Rango | Columnas |
|---|---:|---|---:|
| Registro_Actividades | 0 | A:BN | 66 |
| Registro_Territorio | 375614539 | A:L | 12 |
| Registro_Poblacion | 1598177756 | A:H | 8 |
| Regitro_Evidencia | 219249658 | A:E | 5 |
| Cat_Alineacion | 923865401 | A:R | 18 |

No se lee BO en adelante, M en adelante de territorio ni Dashboard_Master. No hay escrituras desde el navegador ni credenciales nuevas. Hoja desconocida, encabezado inicial incorrecto, número de columnas inesperado o errores de parseo rechazan la lectura; no se acepta una página de acceso o una tabla incorrecta como datos. Se conserva cache:no-store y los dos intentos; se espera el resultado del parseo para que el rechazo asíncrono también entre en el manejo de reintento.

Referencia de la fuente anterior y su soporte de rangos: [documentación oficial Google Charts](https://developers.google.com/chart/interactive/docs/spreadsheets). La ruta de exportación y sus rangos se verificaron directamente sobre las cinco hojas, sin asumir que los parámetros fueran aceptados.

## Verificación ejecutada

- **37 pruebas pasaron** con `node --test tests/calidad-datos.test.cjs tests/tablero.test.cjs tests/ficha-actividad.test.cjs`. Dos pruebas nuevas cubren las cinco fuentes, sus límites y gid, conservación de texto/0/vacío, bloqueo de Dashboard_Master y rechazo/reintento de CSV inválido o con columnas históricas.
- Se descargaron por HTTP los cinco CSV reales con rangos explícitos. Todos devolvieron el número exacto de columnas (66/12/8/5/18), Content-Type text/csv y **Access-Control-Allow-Origin:*** al solicitar desde el origen público del tablero. No se cambiaron permisos de Drive.
- Integración con **la función fetchSheetCSV actual** y **PapaParse 5.4.1 real**, usando esos cinco cuerpos CSV: cinco fuentes aceptadas, sedes literales preservadas, cero conservado como "0" y **1378 alertas**, idénticas al recálculo de valores operativos leídos directamente. No se mezclaron vacío y cero, ni se borraron advertencias reales.
- Los datos de ese corte tienen 1486 actividades con ID. La diferencia frente a las 1485 del informe anterior ya estaba presente al comenzar esta tarea; no hubo alta de actividad por el agente. Las nuevas poblaciones de Fátima también se incluyeron en ambas lecturas comparadas.

Archivos de código modificados: index.html y tests/tablero.test.cjs. Calidad de datos no cambia sus reglas. Los CSV y resultados de diagnóstico permanecen en tmp/fatima_32_30_20261103, excluido de Git, sin publicar copias de la DB. No hubo revisión visual de navegador ni exportación PPTX en esta integración. No se realizaron commits, push o publicación.

## Qué debe pasar con el contador

**1378 es el resultado del código corregido sobre esa lectura actual, no una cifra ya observada en la página pública.** El sitio seguirá utilizando su cargador anterior hasta publicar index.html. Después debe recargarse el tablero; nuevas capturas o filtros pueden cambiar la cifra. El informe anterior de 1377 correspondía a otro corte, antes de otra captura ajena a esta tarea.

Un registro permanece en Conciliación mientras tenga al menos una alerta. Completar los dos públicos de Fátima elimina sus faltantes territoriales/demográficos, pero ambos siguen con acciones PG/PEC, localidad y participación/acceso pendientes; uno continúa sin foto. Anotar aclaraciones de Edith no modifica por sí mismo los campos auditados. El contador no es la cantidad de actividades pendientes de cargar ni el número total de advertencias sumadas.

Para bajar el número real hay que cerrar los campos respaldados y conciliar cifras/coincidencias, preservando los registros que requieren revisión. No se ocultaron evidencias, localidades, concentrados, duplicaciones o cancelaciones para reducir artificialmente el indicador.
