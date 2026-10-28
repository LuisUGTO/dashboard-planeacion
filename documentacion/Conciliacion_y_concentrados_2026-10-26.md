# Conciliación y manejo de concentrados históricos

## Qué muestra el tablero

La conciliación separa cifras discrepantes, datos por completar, falta de evidencia, cantidades por revisar y posibles duplicaciones. Las categorías se superponen: no deben sumarse como actividades distintas. Se pueden filtrar, buscar y exportar a CSV; cada fila permite abrir el expediente.

La descarga ahora permite escoger una hoja operativa: Registro_Actividades A:BN, Registro_Territorio A:L, Registro_Poblacion A:H o Regitro_Evidencia A:E. Conserva los encabezados vigentes, su orden y los valores de la fuente, sin el campo auxiliar Fecha_Inicio_ISO. Los diagnósticos quedan en la opción independiente Resumen de alertas. El CSV se genera en UTF-8 con marca para Excel y mantiene los filtros de usuario, búsqueda, periodo y alerta. Los hijos incluyen todos los registros existentes para los IDs seleccionados. Una hoja sin hijos no genera filas nuevas. Estas descargas son para corregir registros existentes por ID, no para agregarlos como altas nuevas.

La comparación territorial/demográfica se hace con todos los registros hijos de cada actividad seleccionada. Elegir un municipio selecciona actividades, pero no compara un fragmento territorial con una población completa. Un cero informado sigue siendo cero; una celda vacía o inválida se muestra como no disponible. No se comparan sumas incompletas.

Los campos revisados incluyen nombre, fechas válidas, dirección, meta existente, acciones del PG/PEC, disciplina/subdisciplina, sede presencial, cantidad válida de sesiones, municipio/localidad, registros y cantidades de territorio/población, participación/acceso y evidencia vinculada. También se revisan cantidades y folios condicionales cuando se declara contratación, ingresos o INDAUTOR. Las columnas en desuso no se evalúan. Los enlaces de evidencia no prueban por sí solos que su contenido esté completo o accesible.

Las alertas de duplicación identifican coincidencias de ID/folio o de nombre, fecha y sede. Distintos grupos, horarios o participaciones de áreas pueden justificar registros separados; no se borra ni fusiona automáticamente.

## Registro, actividad y sesión

- **Registro capturado:** una fila en Registro_Actividades.
- **Actividad reportada:** un taller, evento o servicio efectivamente realizado según la unidad de la meta.
- **Sesión:** cada encuentro o jornada que integra una actividad.

Ejemplo ilustrativo: 1,000 talleres con tres sesiones cada uno representan 1,000 talleres y 3,000 sesiones. Una fila de resumen no convierte ese conjunto en un solo taller. Tampoco se usa el total de asistentes como sesiones.

El indicador principal ahora dice «Registros de actividades». Las sesiones se muestran por separado y tienen un acceso a conciliación cuando requieren revisión. La gráfica mensual cuenta registros por mes de inicio: no distribuye automáticamente cantidades o asistentes entre meses.

## Carga histórica propuesta

Preferir un concentrado por mes, meta/tipo de actividad y área, conservando el desglose adicional que ya exista. Enero–septiembre necesita nueve cortes mensuales si el reporte ya los contiene; no repartir el total en nueve partes iguales. Si solo existe un total del periodo, conservarlo como concentrado sin afirmar una distribución desconocida.

«Cobertura estatal» describe el alcance del concentrado; no demuestra presencia en los 46 municipios y no debe convertirse en 46 registros ficticios. Si existe información municipal, conservarla.

Para consolidaciones futuras, el tablero admite estas dos columnas opcionales:

| Columna propuesta | Ejemplo | Significado |
|---|---|---|
| Tipo_Registro | Concentrado mensual | Distingue un registro individual de un resumen histórico |
| Cantidad_Actividades | 1000 | Número reportado de talleres/actividades del resumen |

La suma de actividades para metas utiliza Cantidad_Actividades cuando está informada. Un concentrado identificado sin cantidad válida se muestra «Por confirmar», sin convertirlo en cero ni sustituirlo por sesiones. Para registros anteriores sin estas columnas se conserva el conteo de una fila por registro; no se puede reconstruir una cantidad de talleres que no fue capturada.

**Estas columnas aún no se añadieron a Google Sheets ni a AppSheet.** Se debe acordar su uso y ajustar el formulario antes de capturar concentrados con este esquema. No reemplazar ni reutilizar columnas rojas. Tampoco se modificó automáticamente la carga de Marcelina ni otros registros productivos.

Se alerta con 100 o más sesiones para confirmar el significado de la cifra; ese umbral es una regla de revisión y no determina que un dato sea incorrecto. También se señala cuando sesiones coincide con el total de público. Un curso largo puede tener muchas sesiones válidas.

## Publicación

La ejecución fallida #22 de GitHub Pages usa el commit 50d0abb666c762c68d938f5c6e2b5d672541ad13 y falló en «Build with Jekyll». Su anotación muestra procesamiento de documentos dentro de tmp/revision-base-marcelina-20261023/node_modules, ajenos al tablero. El mensaje público disponible está truncado; no confirma por sí solo la excepción final.

Se añadió _config.yml para excluir del proceso de Pages los temporales, dependencias, bases de trabajo, salidas y entregables. .gitignore evita agregar nuevos temporales; no elimina los archivos ya versionados. El tablero sigue publicándose como sitio de HTML/JavaScript. Esta corrección local requiere subirse y comprobar una ejecución nueva; no se ejecutó publicación ni cambio de configuración remoto.

Referencia: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
