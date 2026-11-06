# Revisiones de grupos distintos — 05/11/2026

Estado: implementado localmente; no publicado ni verificado visualmente. Se cotejaron las respuestas de Soraya, sus filas de origen, y para los pares adicionales la trazabilidad entre fila fuente e ID del lote y sus cifras territoriales. Respuesta expresa: grupos diferentes. No se borraron ni fusionaron actividades.

Se incluyeron 46 revisiones de grupo/par que abarcan 55 IDs. En el recálculo local de la lectura directa: 242→206 alertas de identidad. Un ID permanece alertado si también coincide con una contraparte no revisada. No equivale a 36 duplicados borrados.

Cada revisión conserva los IDs, el estado cotejado y la referencia de origen en assets/js/revisiones-identidad.js. Se verifica por par el nombre, fechas, sede, descripción, sesiones, y filas territoriales y demográficas relevantes; si varían, vuelve la alerta de ese par. Cambios posteriores en el archivo original no se detectan automáticamente. Otras causas de identidad (ID/folio repetidos u otras coincidencias) conservan su alerta.

El archivo compartido está versionado con el dashboard; no es todavía la función general de captura por AppSheet ni una interfaz para que el usuario cierre alertas. Para desplegar se necesitan conjuntamente index.html, assets/js/calidad-datos.js y assets/js/revisiones-identidad.js. No se publicó ni modificó la DB.

La suite de44 pruebas pasó; cubre cambios de datos, fecha, contraparte adicional y folios repetidos. No se ha comprobado en navegador ni con la exportación CSV pública. El revisor automático rechazó consultar el CSV público porque el rango solicitado por el dashboard llega a BV y una regla del repositorio mantiene esas columnas fuera de uso. El usuario explicó que habilitó BU/BV, por lo que es necesario conciliar esa decisión con la regla antes de verificar la lectura completa.

| IDs revisados | Consultas y filas fuente |
|---|---|
| ACT-SCDO56831, ACT-SCGF02574 | #158 Formato Interno de Indicadores (2).xlsx / Anny / fila 31; #159 Formato Interno de Indicadores (2).xlsx / Anny / fila 32 |
| ACT-SCFY90265, ACT-SCRR27760 | #161 Formato Interno de Indicadores (2).xlsx / Anny / fila 34; #162 Formato Interno de Indicadores (2).xlsx / Anny / fila 35 |
| ACT-SCDG78924, ACT-SCVX90182 | #286 Formato Interno de Indicadores (2).xlsx / Anny / fila 189; #287 Formato Interno de Indicadores (2).xlsx / Anny / fila 190; #288 Formato Interno de Indicadores (2).xlsx / Anny / fila 191 |
| ACT-SCFR24702, ACT-SCVR72910 | #290 Formato Interno de Indicadores (2).xlsx / Anny / fila 193; #291 Formato Interno de Indicadores (2).xlsx / Anny / fila 194 |
| ACT-SCFD64081, ACT-SCWN41231 | #292 Formato Interno de Indicadores (2).xlsx / Anny / fila 195; #293 Formato Interno de Indicadores (2).xlsx / Anny / fila 196 |
| ACT-SCAL82876, ACT-SCMO58522 | #294 Formato Interno de Indicadores (2).xlsx / Anny / fila 197; #295 Formato Interno de Indicadores (2).xlsx / Anny / fila 198 |
| ACT-SCNP58131, ACT-SCPT19980 | #296 Formato Interno de Indicadores (2).xlsx / Anny / fila 199; #297 Formato Interno de Indicadores (2).xlsx / Anny / fila 200; #298 Formato Interno de Indicadores (2).xlsx / Anny / fila 201 |
| ACT-SCLF07599, ACT-SCYY62075 | #299 Formato Interno de Indicadores (2).xlsx / Anny / fila 202; #300 Formato Interno de Indicadores (2).xlsx / Anny / fila 203 |
| ACT-SCFV66869, ACT-SCHL56287, ACT-SCRW71537 | #302 Formato Interno de Indicadores (2).xlsx / Anny / fila 205; #303 Formato Interno de Indicadores (2).xlsx / Anny / fila 206; #304 Formato Interno de Indicadores (2).xlsx / Anny / fila 207 |
| ACT-SCCQ25265, ACT-SCVH99141 | #305 Formato Interno de Indicadores (2).xlsx / Anny / fila 208; #306 Formato Interno de Indicadores (2).xlsx / Anny / fila 209 |
| ACT-SCRA39908, ACT-SCRN05061 | #418 Formato Interno de Indicadores (2).xlsx / LauraGuias / fila 26; comparar LauraGuias!25 |
| ACT-SCHR06694, ACT-SCVU58310 | #423 Formato Interno de Indicadores (2).xlsx / LauraGuias / fila 38; comparar LauraGuias!37 |
| ACT-SCWB31313, ACT-SCYY20286 | #453 Formato Interno de Indicadores (2).xlsx / Anny / fila 126; comparar Anny!125 |
| ACT-SCUG70486, ACT-SCWB31313 | #454 Formato Interno de Indicadores (2).xlsx / Anny / fila 127; comparar Anny!125, Anny!126 |
| ACT-SCUG70486, ACT-SCYY20286 | #454 Formato Interno de Indicadores (2).xlsx / Anny / fila 127; comparar Anny!125, Anny!126 |
| ACT-SCTD96194, ACT-SCWB31313 | #455 Formato Interno de Indicadores (2).xlsx / Anny / fila 128; comparar Anny!125, Anny!126, Anny!127 |
| ACT-SCTD96194, ACT-SCYY20286 | #455 Formato Interno de Indicadores (2).xlsx / Anny / fila 128; comparar Anny!125, Anny!126, Anny!127 |
| ACT-SCTD96194, ACT-SCUG70486 | #455 Formato Interno de Indicadores (2).xlsx / Anny / fila 128; comparar Anny!125, Anny!126, Anny!127 |
| ACT-SCDD46576, ACT-SCZR35037 | #456 Formato Interno de Indicadores (2).xlsx / Anny / fila 137; comparar Anny!136 |
| ACT-SCRM78932, ACT-SCZR35037 | #457 Formato Interno de Indicadores (2).xlsx / Anny / fila 138; comparar Anny!136, Anny!137 |
| ACT-SCDD46576, ACT-SCRM78932 | #457 Formato Interno de Indicadores (2).xlsx / Anny / fila 138; comparar Anny!136, Anny!137 |
| ACT-SCRS76701, ACT-SCZR35037 | #458 Formato Interno de Indicadores (2).xlsx / Anny / fila 139; comparar Anny!136, Anny!137, Anny!138 |
| ACT-SCDD46576, ACT-SCRS76701 | #458 Formato Interno de Indicadores (2).xlsx / Anny / fila 139; comparar Anny!136, Anny!137, Anny!138 |
| ACT-SCRM78932, ACT-SCRS76701 | #458 Formato Interno de Indicadores (2).xlsx / Anny / fila 139; comparar Anny!136, Anny!137, Anny!138 |
| ACT-SCYL18280, ACT-SCZR35037 | #459 Formato Interno de Indicadores (2).xlsx / Anny / fila 140; comparar Anny!136, Anny!137, Anny!138, Anny!139 |
| ACT-SCDD46576, ACT-SCYL18280 | #459 Formato Interno de Indicadores (2).xlsx / Anny / fila 140; comparar Anny!136, Anny!137, Anny!138, Anny!139 |
| ACT-SCRM78932, ACT-SCYL18280 | #459 Formato Interno de Indicadores (2).xlsx / Anny / fila 140; comparar Anny!136, Anny!137, Anny!138, Anny!139 |
| ACT-SCRS76701, ACT-SCYL18280 | #459 Formato Interno de Indicadores (2).xlsx / Anny / fila 140; comparar Anny!136, Anny!137, Anny!138, Anny!139 |
| ACT-SCBI39264, ACT-SCSK13712 | #460 Formato Interno de Indicadores (2).xlsx / Anny / fila 238; comparar Anny!237 |
| ACT-SCNF11223, ACT-SCOE35202 | #461 Formato Interno de Indicadores (2).xlsx / Anny / fila 242; comparar Anny!241 |
| ACT-SCWL29449, ACT-SCYR77313 | #462 Formato Interno de Indicadores (2).xlsx / Anny / fila 246; comparar Anny!245 |
| ACT-SCVC16818, ACT-SCYR77313 | #463 Formato Interno de Indicadores (2).xlsx / Anny / fila 247; comparar Anny!245, Anny!246 |
| ACT-SCVC16818, ACT-SCWL29449 | #463 Formato Interno de Indicadores (2).xlsx / Anny / fila 247; comparar Anny!245, Anny!246 |
| ACT-SCHL28991, ACT-SCYR77313 | #464 Formato Interno de Indicadores (2).xlsx / Anny / fila 248; comparar Anny!245, Anny!246, Anny!247 |
| ACT-SCHL28991, ACT-SCWL29449 | #464 Formato Interno de Indicadores (2).xlsx / Anny / fila 248; comparar Anny!245, Anny!246, Anny!247 |
| ACT-SCHL28991, ACT-SCVC16818 | #464 Formato Interno de Indicadores (2).xlsx / Anny / fila 248; comparar Anny!245, Anny!246, Anny!247 |
| ACT-SCEC08568, ACT-SCYR77313 | #465 Formato Interno de Indicadores (2).xlsx / Anny / fila 249; comparar Anny!245, Anny!246, Anny!247, Anny!248 |
| ACT-SCEC08568, ACT-SCWL29449 | #465 Formato Interno de Indicadores (2).xlsx / Anny / fila 249; comparar Anny!245, Anny!246, Anny!247, Anny!248 |
| ACT-SCEC08568, ACT-SCVC16818 | #465 Formato Interno de Indicadores (2).xlsx / Anny / fila 249; comparar Anny!245, Anny!246, Anny!247, Anny!248 |
| ACT-SCEC08568, ACT-SCHL28991 | #465 Formato Interno de Indicadores (2).xlsx / Anny / fila 249; comparar Anny!245, Anny!246, Anny!247, Anny!248 |
| ACT-SCDF52076, ACT-SCZC19616 | #467 Formato Interno de Indicadores (2).xlsx / Anny / fila 256; comparar Anny!255 |
| ACT-SCGO67828, ACT-SCPW42925 | #468 Formato Interno de Indicadores (2).xlsx / Anny / fila 258; comparar Anny!257 |
| ACT-SCBS46929, ACT-SCIM79162 | #469 Formato Interno de Indicadores (2).xlsx / Anny / fila 264; comparar Anny!261 |
| ACT-SCDP88452, ACT-SCFN14990 | #471 Formato Interno de Indicadores (2).xlsx / Anny / fila 267; comparar Anny!265, Anny!266 |
| ACT-SCIN76554, ACT-SCPW91712 | #472 Formato Interno de Indicadores (2).xlsx / Anny / fila 269; comparar Anny!268 |
| ACT-SCDA95565, ACT-SCRN56558 | #474 Formato Interno de Indicadores (2).xlsx / Pablo B. / fila 108; comparar Pablo B.!107 |
