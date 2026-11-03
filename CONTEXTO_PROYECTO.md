# Contexto del proyecto — Dashboard de Planeación de Cultura

Fecha de corte: **31 de octubre de 2026**. Entidad usuaria: Secretaría de Cultura de Guanajuato. Equipo/metodología documentada: PULSO Q. Repositorio local: `dashboard-planeacion`.

**Regla operativa vigente, aclarada por el usuario el 31/10:** `Registro_Actividades` utiliza **A:BN**; desde **BO** no se usa ninguna columna (incluidas BU/BV). `Registro_Territorio` utiliza **A:L**; desde **M** las columnas están fuera de uso. `Dashboard_Master` está inutilizada y no participa como fuente ni destino. Esta instrucción prevalece sobre propuestas y operaciones históricas descritas abajo. Conservar esos bloques sin escribirlos, reutilizarlos ni eliminarlos. El código del tablero aún admite `Tipo_Registro`/`Cantidad_Actividades`, presentes históricamente en BU/BV; queda una incompatibilidad pendiente de resolver antes de cargas basadas en esos campos. No trasladar cantidades a `Total_Sesiones` como sustitución.

La actualización de Fátima del 31/10 respetó los límites: únicamente **N** de actividades (52 descripciones), **J** de territorio (53 totales) y **A:H** de población (106 filas añadidas al final). No escribió BO en adelante, M en adelante de territorio ni `Dashboard_Master`. Comprobado también contra los rangos de las solicitudes de escritura emitidas.

## 1. Propósito y alcance

Apoyar la planeación, seguimiento de metas, cobertura territorial, análisis de población, conciliación y rendición de cuentas de la acción cultural. Vincular la captura con el Programa de Gobierno (PG), el Programa Estatal de Cultura (PEC) y las zonas prioritarias (ZAP), preservando trazabilidad y evitando doble conteo.

El proyecto reúne un tablero web de consulta y archivos de diagnóstico, normalización y entrega documental. AppSheet **Gestión de Metas Cultura 2030** continúa como herramienta operativa de captura según los antecedentes. El tablero no sustituye ese formulario ni implementa escrituras productivas.

## 2. Evidencia y límites de esta auditoría

Se inspeccionaron la estructura, los archivos de configuración, el código HTML/JavaScript, las pruebas, las utilidades, el inventario Markdown y el historial Git local. Se contrastaron los documentos técnicos con el código y con los informes de carga del 29 de octubre. No se ejecutaron generadores, migraciones, escrituras externas, commits ni pushes.

Se distingue entre **confirmado en código/pruebas**, **registrado en informes históricos**, **parcial/planificado** y **no verificado**. Los informes de cargas describen operaciones anteriores; no constituyen una nueva lectura de producción. No se reauditaron íntegramente las 289 páginas de `Application Documentation.pdf`, los documentos binarios ni cada celda de los Excel/JSON de respaldo. No se comprobó el despliegue remoto, los permisos actuales, las cuotas o las licencias.

El listado de chats Codex disponibles en este equipo solo devolvió esta conversación. No se recuperó el chat original cuyo identificador aparece en `outputs/`. Las decisiones conservadas aquí proceden de los archivos y commits, no de una reconstrucción completa de conversaciones anteriores.

## 3. Arquitectura y tecnologías

Flujo implementado: **AppSheet → Google Sheets → CSV de Google (`gviz/tq`) → navegador → vistas, CSV y PPTX**. Google Drive almacena/referencia evidencias. Las relaciones se procesan en memoria en el cliente; Sheets no garantiza integridad SQL ni transacciones relacionales.

`index.html` contiene estilos, interfaz y la mayor parte de la lógica. Carga cinco hojas en paralelo con `Promise.all`, timeout de 9 segundos por intento, hasta dos intentos y `cache: no-store`. La disponibilidad de la lectura CSV depende de los permisos/publicación de la fuente. No hay backend propio, servidor de autenticación, SDK de Supabase, esquema SQL ni migraciones SQL identificados en el código operativo. Supabase/PostgreSQL son alternativas de arquitectura documentadas, no componentes desplegados confirmados.

| Dependencia del navegador | Versión/referencia en HTML | Uso |
|---|---|---|
| Tailwind CSS | `cdn.tailwindcss.com`, sin versión fijada | Estilos |
| Chart.js / datalabels | 4.4.1 / 2.2.0 | Gráficas |
| PapaParse | 5.4.1 | Lectura/escritura CSV |
| Leaflet | 1.9.4 | Mapa |
| Lucide | 0.460.0 | Iconos |
| PptxGenJS | 3.12.0 | Presentación ejecutiva |
| Google Fonts | Montserrat / Vollkorn | Tipografía |
| OpenStreetMap | servidor de teselas | Cartografía |
| CounterAPI | llamada de incremento de visitas | Contador externo |

Estas son las referencias observadas, no recomendaciones de versiones actuales. No hay `package.json` ni lockfile raíz para ejecutar el tablero; no requiere `npm install` ni compilación. Node.js se usa para pruebas. `localStorage` conserva estadísticas locales con la clave `gto_cultura_stats`; no es una base ni un mecanismo de permisos.

## 4. Estructura y responsabilidades

| Ruta | Responsabilidad |
|---|---|
| `index.html` | Entrada, carga de Sheets, filtros, KPIs, seis vistas, mapa y exportadores |
| `assets/js/calidad-datos.js` | Cantidades, fechas, concentrados, población mensual y auditoría de calidad; API `CulturaCalidad`/CommonJS |
| `assets/js/ficha-actividad.js` | Ficha detallada, filas hijas, alertas y escape de texto; API `CulturaFicha`/CommonJS |
| `assets/identidad`, `interfaz`, `capturas`, `firmas` | Recursos visuales; revisar sensibilidad de firmas y capturas antes de compartir |
| `tests/*.test.cjs` | Pruebas Node de calidad, ficha e integración de lógica del tablero |
| `archivos_base/` | Fuentes Excel, copias de base, revisiones por área, respaldos y trazabilidad |
| `outputs/` | Lotes preparados, controles CSV e instrucciones; preparación no equivale a carga |
| `documentacion/` | Arquitectura histórica, conciliación y revisiones operativas |
| `entregables/fuentes`, `word`, `pdf` | Fuentes y documentos institucionales; conservar reglas de versión del README |
| `entregables/revision_ejecutiva_2026-10-21/` | Informe/presentación y su `LEEME_VERSION_ACTUAL.md` |
| `referencias/` | Propuesta, diagnóstico y manual de identidad |
| `respaldo/` | Versiones anteriores conservadas |
| `tools/` | Reconstrucción Word/PDF, conversión HTML, sello y hojas de contacto |
| `tmp/` | Temporales y dependencias auxiliares; existen archivos históricamente versionados |
| `_config.yml` / `.gitignore` | Exclusiones del build Pages / prevención de nuevos temporales |
| `SC_Planeacion_Handoff_Auditoria_AppSheet.md` | Antecedentes, restricciones y alternativas A/B/C |

Inventario inicial: 135 archivos visibles fuera de `.git`, `tmp` y `node_modules`; 17,934 rutas seguidas por Git, incluyendo dependencias temporales históricas. Los conteos son de esta copia y pueden variar al continuar.

## 5. Modelo de datos y relaciones

| Hoja | Identificador y relación | Datos principales |
|---|---|---|
| `Registro_Actividades` | `ID_Actividad`; `Clave_Proceso` se relaciona con `Cat_Alineacion.ID_Alineacion` | Folio, meta, alineación, área/dirección, nombre, fechas, sesiones, disciplina, sede, costos, captura |
| `Registro_Territorio` | `ID_Territorio`; `ID_Actividad` → actividad, 1:N | Municipio, comunidad, ZAP, participación, acceso, `Cantidad` |
| `Registro_Poblacion` | `ID_Poblacion`; `ID_Actividad` → actividad, 1:N | Edad, género, grupo prioritario, participación, acceso, `Cantidad_Poblacion` |
| `Regitro_Evidencia` | `ID_Evidencia`; `ID_Actividad` → actividad, 1:N | Archivo, tipo y descripción |
| `Cat_Alineacion` | `ID_Alineacion` | Clave programática, meta, unidad, meta anual, PG/PEC y responsables |

Respetar **`Regitro_Evidencia`**, con esa grafía real; `Registro_Evidencia` aparece en documentos como denominación conceptual. No renombrar la hoja por corrección ortográfica. No imponer un patrón secuencial único a los IDs: los informes recientes contienen identificadores distintos del ejemplo antiguo `ACT00001`.

La exportación AppSheet de 21/10 reporta 23 tablas y 243 columnas; es una fotografía histórica, no un recuento vigente. Los documentos enumeran 18 catálogos: Alineacion, Disciplina, Actividades, Tipo_Actividad, Recintos, Tipo_Espacio, Agentes_Culturales, Indicadores, Enfoque, Formato, Costo, Grupo_Etario, Genero, Grupo_Prioritario, Tipo_Asentamiento, Municipio, Comunidades y Comunidades_Limpio, todos con prefijo `Cat_`. El tablero solo descarga cinco hojas; no valida todas las reglas de esos catálogos ni prueba su configuración actual en AppSheet.

Según `archivos_base/Adriana Ugalde/Resultado_Carga_Directa_2026-10-29.md`, Sheets tiene históricamente **BU `Tipo_Registro` y BV `Cantidad_Actividades`**, además de `Cobertura estatal` en municipios y `Multidisciplinario / Multidisciplinario` en disciplinas. **La aclaración posterior del usuario deja BO en adelante fuera de uso, incluidas BU/BV**: su existencia no autoriza utilizarlas. No regenerar AppSheet para activarlas por iniciativa propia. Conservar los datos históricos sin modificarlos y resolver cómo representar cantidades de concentrados dentro de un esquema operativo acordado.

## 6. Flujos funcionales y reglas de interpretación

1. Captura en AppSheet de actividad, territorio, población y evidencia; las reglas reales de permisos/formularios requieren revisión de la app.
2. Lectura de cinco hojas al abrir o recargar el tablero. Si falla, se presenta estado de error/reintento; no hay copia autónoma offline confirmada.
3. Filtros y conmutador de fuente territorial/demográfica actualizan Visión General, Matriz Estratégica, Cobertura Territorial, Población, Evidencias y Conciliación.
4. Conciliación permite revisar alertas, buscar y filtrar por usuario/tipo, y descargar resumen o filas originales para corregir por ID. Descargar no modifica la fuente. La tabla limita la presentación a 250 resultados; la descarga incluye la selección completa.
5. Ficha presenta campos, totales y todos los hijos relacionados; exportación PPTX usa filtros/gráficas del tablero. La calidad visual final de PPTX no se verificó en esta auditoría.

Reglas confirmadas en código y pruebas:

- Registros, actividades reportadas y sesiones son medidas distintas. `Cantidad_Actividades` alimenta metas cuando existe; no deducirla de sesiones. Concentrado sin cantidad válida queda por confirmar.
- No sumar territorio y demografía: son fuentes alternativas. Comparar todos los hijos de la actividad incluso bajo filtro municipal.
- Cero informado difiere de vacío/valor inválido; una suma parcial no equivale a un total conciliado.
- El público de periodos multimes se informa aparte de la serie mensual. No se asigna todo al mes inicial ni se reparte sin evidencia. Los registros sí se cuentan por mes de inicio.
- La cobertura usa 46 municipios de Guanajuato. Cobertura estatal y categorías externas no aumentan ese denominador ni prueban presencia en cada municipio.
- Alertas de posible duplicación no autorizan borrar/fusionar. Un enlace o fila vacía no acredita evidencia completa; asistencias no equivalen a personas únicas.

## 7. Autenticación, permisos y seguridad

El tablero no implementa login ni autorización por roles. Filtrar por usuario es una función analítica, no control de acceso. Las autorizaciones de AppSheet, Sheets y Drive son externas y no se certificaron. No hay variables de entorno obligatorias identificadas para el tablero: `SHEET_ID` y `SHEETS` están en el script; el primero es identificador de origen, no credencial. No copiar tokens o claves al HTML para resolver un problema de acceso.

La ficha escapa contenido y las pruebas cubren entradas HTML/enlaces ejecutables; el CSV de conciliación usa protección frente a fórmulas. Esto no constituye una auditoría completa de XSS de todas las plantillas. Revisar permisos de la fuente, acceso a evidencias, tratamiento de datos personales y contenido del repositorio antes de ampliar su distribución. `_config.yml` excluye carpetas de Jekyll, pero **no vuelve privados los archivos ni el historial de GitHub**. Se desconoce la visibilidad actual del repositorio. CDN, fuentes, teselas y contador requieren red e implican peticiones a terceros.

Mantener AppSheet en operación; cambios productivos requieren autorización explícita, respaldo y validación. Migraciones destructivas y acciones irreversibles requieren confirmación previa. Backend seguro/roles/RLS son propuestas, no garantías actuales.

## 8. ESTADO DEL PROYECTO AL 31 DE OCTUBRE DE 2026

**Implementado y comprobado localmente:** tablero estático con cinco fuentes y seis vistas; módulos de calidad y ficha; exportación CSV de conciliación; reglas de cantidades, cobertura y separación mensual. Existen generador PPTX y mapa en código; su operación visual y dependencias de red no se probaron de extremo a extremo en este corte. Las **28 pruebas existentes pasan** con Node **v24.22.1**, sin instalar paquetes.

**Registrado en informes de 29/10, sin repetir operaciones:**

| Frente | Último resultado documentado | Límite/pendiente |
|---|---|---|
| Concentrados de vinculación | Cinco registros corregidos y 55 altas; 60 concentrados mensuales, con columnas nuevas y ajustes de catálogo | Confirmar público de mayo/junio, visitas de agosto y QC4098/Q3688; esquema AppSheet pendiente |
| Editorial | 67 presentaciones nuevas, 67 territorios y 62 enlaces; 131 filas apartadas | Encabezados de población AA:AM, metas, ciclos y posibles solapamientos |
| Programación de subsecretaría | Ocho actividades nuevas, ocho territorios y doce filas demográficas | Dos públicos pendientes, sesiones, alineación/evidencias y veinte filas apartadas; informe aún sin seguimiento Git al inicio |
| Visitantes de sitios | Corregida la lógica mensual del tablero; acumulados conservados aparte | Solicitar desglose real, revisar virtuales repetidos y solapamiento enero–junio/enero–septiembre |
| CEARG y otros lotes en `outputs/` | Preparaciones y controles disponibles | No afirmar importación completa sin informe posterior/lectura autorizada |

**Parcial:** normalización histórica, completitud de captura, evidencia y validación institucional de alineaciones. **Planificado:** auditoría AppSheet completa y evaluación de arquitectura A/B/C. **No verificado:** sincronización remota de commits, Pages actual, acceso real a datos/evidencias, permisos, concurrencia, costos/licencias y respaldo externo completo.

Prioridades: preservar archivos locales antes del traslado; revisar privacidad y cambios Git; completar información de áreas; validar columnas nuevas en AppSheet; verificar publicación del ajuste mensual. El proyecto tiene continuidad documental, pero el traslado mediante GitHub todavía requiere acciones del usuario.

## 9. Historial y decisiones conservadas

Git local: rama `main`, 29 commits desde 24/09/2026; HEAD al inicio **`e7853ef0`** de 29/10. Referencias útiles:

- `a06c9173`: separa público multimes de la gráfica mensual; añade pruebas.
- `49f663ab`: ficha detallada en módulo y pruebas, preparación de programación y revisión de visitantes.
- `3403a432`: conciliación/descargas y controles asociados.
- `e7853ef0`: incorpora informes, respaldos y trazabilidad de cargas de 29/10; no certifica estado del remoto.

Decisiones: reutilizar el tablero; mantener captura AppSheet; no inventar desgloses; preservar IDs y relaciones; distinguir fuentes poblacionales; tratar el modelo relacional de Sheets como relaciones de aplicación. Alternativas del handoff: A optimizar AppSheet; B coexistencia con web/capa segura; C migración SQL solo con requisitos y aprobación.

## 10. Hallazgos documentales y riesgos

| Hallazgo | Tratamiento / siguiente comprobación |
|---|---|
| Arquitectura de 19/10 afirma cifras, 0 huérfanos, tiempos y normalización como garantías | Conservar como antecedente fechado; no usar como métrica vigente ni garantía SQL |
| README y conciliación decían que las columnas opcionales no existían en Sheets | Actualizados con el informe de 29/10; AppSheet sigue pendiente |
| Resumen antiguo dice `Registro_Evidencia` y gráficas vectoriales | Aclarar nombre real y que el código exporta imágenes de gráficas; no prometer vectores |
| Revisión de visitantes registra push fallido por falta de autenticación | Confirmar publicación de `a06c9173` desde GitHub Desktop; sin push en esta auditoría |
| 8,528 borrados locales iniciales en dependencias de `tmp/.../node_modules` | Preexistentes; no restaurados, eliminados ni incluidos por esta tarea. `.gitignore` no retira archivos ya seguidos |
| Un Markdown modificado y cuatro archivos nuevos del expediente de programación | Preexistentes; respaldar y revisar antes de seleccionar archivos en GitHub Desktop |
| Historial con Excel, JSON, capturas y firmas | Revisar privacidad antes de publicar; exclusión Pages no protege historial |
| Dependencias CDN y utilidades sin entorno reproducible fijado | Documentar versiones y recrear entorno opcional; no actualizar dependencias sin comprobar compatibilidad |

No se añade una configuración de despliegue ni se cambian rutas operativas en esta auditoría. Los documentos de entregables se conservan como registros históricos, sin regenerarlos.

## 11. Continuar en la Lenovo ThinkPad

### Antes de dejar la ASUS

1. Conservar una copia privada completa de la carpeta, incluidos archivos sin seguimiento y recursos externos necesarios. GitHub solo trasladará lo que se incorpore a commits y se suba.
2. En GitHub Desktop revisar cambios individualmente. Separar la documentación de esta auditoría, los archivos de trabajo previos y los 8,528 borrados de dependencias. Evitar seleccionar todo sin revisión. Esta tarea no decide retirar dependencias históricas.
3. Revisar información sensible, visibilidad del repositorio y acceso institucional. Guardar respaldos sensibles por un medio autorizado; no subirlos automáticamente.
4. Cuando corresponda, el usuario realiza commit y push, comprueba que GitHub contiene los archivos elegidos y verifica Pages. No hay confirmación de sincronización remota en este corte.

### Instalación y prueba del tablero

1. Instalar GitHub Desktop y Git, un navegador moderno y Node.js con `node:test` (en esta copia se probó v24.22.1). Instalar Codex y autenticar las cuentas necesarias. Las sesiones/tokens locales de la ASUS no viajan con el repositorio.
2. Clonar desde GitHub Desktop en **`C:\Proyectos\dashboard-planeacion`**. Comparar rama/commit con el corte que se haya subido. No confundir el Excel local con respaldo actualizado de la nube.
3. Abrir esa carpeta en Codex y leer `AGENTS.md`, este contexto y `README.md`. No se necesita recuperar chats anteriores para comprender las reglas conservadas.
4. Desde PowerShell, ejecutar:

   ```powershell
   Set-Location C:\Proyectos\dashboard-planeacion
   node --test tests/calidad-datos.test.cjs tests/tablero.test.cjs tests/ficha-actividad.test.cjs
   ```

5. Abrir `index.html` en el navegador. Necesita conexión a Google y los CDN. Para revisión por HTTP, si Python está instalado, usar `py -m http.server 8000 --bind 127.0.0.1` desde la raíz y abrir `http://127.0.0.1:8000/`; detener con Ctrl+C. Este servidor es opcional y no requiere paquetes del proyecto.
6. Revisar carga de las cinco hojas, consola del navegador, seis vistas, filtros, ficha, CSV, mapa y PPTX. Verificar periodos multimes y cobertura estatal con datos autorizados. Las pruebas Node no sustituyen esta revisión de red e interfaz.

### Herramientas documentales y rutas locales

Python es **opcional para el tablero**, necesario para utilidades documentales. En esta sesión `python --version` no pudo iniciar el alias WindowsApps; no se certificó un intérprete disponible ni se instalaron dependencias. Para recrear herramientas, instalar Python real, crear `.venv` y usar paquetes según la utilidad: `python-docx`, `lxml`, `Pillow`, `pdf2docx`, `pypdf`, `reportlab`. No existe un manifiesto de versiones fijadas; validar en copia de trabajo antes de regenerar entregables. `tools/word_from_approved_pdf.py` añade `tmp/pdf-word-deps` a la búsqueda de módulos: no depender de esa carpeta temporal como instalación portable.

`tools/export_word_pdf.ps1` requiere Windows y Microsoft Word de escritorio mediante COM; resolver `Source`/`Output` desde la raíz del proyecto. Algunos generadores sobrescriben resultados conocidos: revisar código y respaldo antes de ejecutarlos. Conservar la referencia PDF aprobada y el Word `_BASE_PDF.docx` del entregable 1.

Rutas no portables identificadas:

- La arquitectura histórica enlazaba `index.html` mediante una ruta `file:///` en la unidad D:. Se corrigió únicamente ese enlace documental a `../index.html` para que funcione después de clonar; no se cambió configuración de ejecución.

- `tools/insert_institutional_seal.py`, líneas 14 y 18: dos imágenes en el perfil anterior, dentro de `.codex/generated_images/...`. El tablero usa capturas ya guardadas en `assets/`; no requiere esas imágenes originales para abrir. Para repetir la edición, recuperar los originales por un medio privado y adaptar el generador con justificación; no se cambiaron rutas aquí.
- `documentacion/Revision_CEARG_2026-10-26.md` y `Revision_Ileana_Salazar_2026-10-26.md`: referencia histórica a `Downloads/Matriz_PG_PEC_para_revision.xlsx` del perfil anterior. Recuperar y verificar esa fuente antes de repetir el cruce; no se confirmó su traslado ni equivalencia con otros libros.
- Los identificadores de chat en `outputs/` son nombres de carpeta conservados, no dependencias de ejecución. Los adjuntos y entornos locales de Codex no se reconstruyen con `git clone`.

No se identificaron `.env` ni secretos requeridos por la aplicación estática. Acceso a GitHub, Workspace, AppSheet y Drive se configura por cuenta y permisos externos, sin documentar valores de credenciales. No es necesario copiar todo el perfil `.codex`.

## 12. Próximas actividades recomendadas

1. Completar respaldo privado, revisión de cambios y sincronización GitHub; validar clonación/pruebas en Lenovo.
2. Resolver con el responsable el modelo de concentrados y la dependencia actual del tablero de BU/BV, respetando que el esquema operativo termina en BN. Revisar catálogos/validaciones sin activar columnas fuera de uso ni alterar producción durante el diagnóstico.
3. Resolver públicos pendientes y solapamientos de visitantes, editorial y programación; conservar fuentes, cantidades desconocidas y trazabilidad.
4. Verificar despliegue del ajuste mensual y accesibilidad de evidencias con cuentas autorizadas.
5. Auditar permisos de lectura CSV y exposición de información; definir acceso institucional antes de habilitar funciones nuevas.
6. Completar inventario AppSheet con páginas de evidencia y evaluar backend seguro/SQL solo si se justifican; no tratar esa evaluación como migración aprobada.

## 13. Índice de antecedentes

**Ajuste de Registros por Disciplina — 03/11/2026:** implementado localmente en `index.html`, solo para ese gráfico de Inicio. Las etiquetas largas se dividen por palabras en líneas de hasta 18 caracteres, sin abreviar nombres ni alterar el Top 8 o sus conteos; Cultura comunitaria queda en dos líneas. Se fijan tamaño de letra y separación del eje, se evita omitir categorías y se aumenta la altura de 192 a 256 px para alojar etiquetas multilínea. Se conserva el espacio derecho para los valores. Las 28 pruebas pertinentes pasaron. Revisión visual en navegador y exportación no verificadas en este ajuste; sigue documentado el bloqueo previo del control del navegador. Sin cambios de datos, dependencias, commits, push o publicación.

**Ajuste visual del gráfico de evidencias — 03/11/2026:** implementado localmente en `index.html`. Se retiraron las etiquetas reflejadas dentro del área de barras (`mirror: true` y desplazamiento negativo) y el margen artificial izquierdo de 160 px; los nombres ahora usan el margen del eje, con saltos por palabras. Se aumentó la altura a 320 px, se conservaron todas las direcciones visibles y los valores enteros; las cifras dentro de segmentos se muestran únicamente cuando caben. No se cambió el conteo de evidencia, los datos, las dependencias o los servicios externos. Las 28 pruebas pertinentes pasaron. **Revisión visual y exportación pendientes:** el navegador integrado no accedió al servidor local y la herramienta de Computer Use detuvo el acceso a Chrome al no poder verificar su URL. No se intentó eludir ese bloqueo. Sin commit, push o publicación; comprobar la vista Evidencias y su imagen exportada antes de dar por validada la presentación final.

**Paquetes de aclaraciones preparados el 01/11/2026:** por solicitud de Luis se generaron once guías PDF de una página y once Excel de una sola pestaña, dentro de las carpetas de las nueve áreas/personas con matriz, Marce y una nueva carpeta de Comunicación Social. Respuesta en columnas amarillas I:K, con actividad, fechas, sede, situación, pregunta, ID/folio y referencia de origen. Las 762 filas son consultas, no altas faltantes: incluyen 383 posibles coincidencias y 62 grupos de Soraya. Se verificaron 581 referencias de ID/folio contra lectura actual de la DB, respuestas vacías, opciones de estado, fechas, filtros y paneles fijos, además de revisión visual de las once guías y hojas. Los 23 Excel originales quedaron intactos; no hubo escrituras productivas ni envío de mensajes durante esta preparación. Enlaces, alcance y orden de revisión en [paquetes por expediente](documentacion/Paquetes_Pendientes_por_Area_2026-11-01.md). Los ajustes técnicos del modelo y las equivalencias de opciones no se trasladaron a las áreas como tareas de programación.

**Carga autorizada y verificada del 01/11/2026:** Luis autorizó aprovechar todos los archivos y corregir/agregar lo respaldado, sin contactar al equipo. Se añadieron dos presentaciones de septiembre de Marcelina (726 asistencias, dos territorios y cuatro filas de población), se repuso un territorio faltante de Soraya, se corrigieron 18 celdas de nueve filas de Marcelina con miles convertidos a decimales y se dejaron pendientes las cinco cifras de sesiones de Edith que eran totales de visitantes. Resultado: 1472 actividades, 1510 territorios, 2394 poblaciones y 520 evidencias; cero diferencias no previstas en la primera escritura y verificación nativa de las cinco correcciones posteriores, cero IDs duplicados y cero hijos huérfanos. Se respetaron A:BN, A:L y Dashboard_Master inutilizada. Se revisaron 23 libros, incluidas copias/versiones/lotes sustituidos; 60 IDs de Adriana Ugalde, 67 de Fátima, ocho de Ileana, 229 del lote de Marcelina, 292 de Soraya y cinco de CEARG siguen presentes. Myrna conserva 17 funciones anuales sin ejecución al corte; Comunicación Social sigue sin fuente localizada. No hubo nuevas altas de Fátima ni carga de Myrna. Respaldos privados excluidos de Git en `respaldo/privado_cargas_2026-11-01/`. Detalle de rangos, fuentes, pendientes y control por archivo en [resultado integral del 01/11](documentacion/Resultado_Cargas_y_Pendientes_2026-11-01.md). Este resultado sustituye el estado de diagnóstico/preparación del párrafo siguiente; no certifica cobertura completa de áreas ni resuelve el modelo de concentrados.

**Trabajo sin consultas al equipo (01/11):** el usuario solicita no contactar a Marce/áreas hasta el martes 03/11. Se encontraron diez funciones del 2–15/09 en el Excel de Marcelina, repetidas en `julio - sep` filas 86:95 y `Hoja3` filas 3:12. No duplicar bloques. Dos tienen clave y población concordante, candidatas a comprobación de meta/identidad antes de carga. Septiembre completo sigue sin certificarse. Se releyeron la matriz editorial y los registros actuales para priorizar preparación; no se ejecutaron escrituras externas en este diagnóstico. Plan y hallazgos en [avance posible sin consultas](documentacion/Avance_Posible_Sin_Consultas_2026-11-01.md).

**Identificación de adjuntos confirmada posteriormente por el usuario:** el PPTX `DGPA_desempeno_integral_2025_2026_y_ruta_2027.pptx` corresponde a la nueva pestaña comentada con Marce el 29/10, y los dos libros `Matriz_PG_PEC_para_revision.xlsx` / `Matriz_PG_PEC_para_revision 2027.xlsx` son los Excel que ella compartió. Se considera resuelta su procedencia y relación con la solicitud; no pedir reenvío de esos archivos. Para estudiar la nueva sección usar los tres disponibles, conservando la distinción entre catálogos/plantillas de alineación y datos operativos de cálculo del PPTX. Las notas anteriores sobre identificar el Excel quedan sustituidas por esta confirmación. No cambia el corte de carga enero–septiembre de 2026 ni autoriza escrituras adicionales.

**Complemento manual del 29/10 recuperado el 01/11:** Luis informó a Marce avances parciales en seis de ocho expedientes (Marcelina, Soraya, CEARG, Adriana Ugalde, Fátima e Ileana); Edith y Adriana Escamilla requerían conciliación previa a altas. **Coordinación de Comunicación Social estaba pendiente de entregar información**; no hay carpeta local identificada de esa área ni comprobación de una entrega posterior. Myrna se incorporó posteriormente al inventario local. Marce también refiere un análisis de datos **2025/2026** para una **nueva pestaña** solicitada por ella; falta identificar el Excel concreto, indicadores y destino de esa pestaña. Es un frente de visualización por definir, no una nueva carga autorizada de 2025 ni autorización para añadir hojas de DB o reactivar Dashboard_Master. Corte de carga vigente: enero–septiembre de 2026. Detalle y procedencia en el complemento inicial del seguimiento de Marce. No hubo cambios externos.

**Chat ampliado de Marce recuperado el 01/11/2026:** esta segunda exportación sí trae acuerdos históricos: relación de actividades con instrumentos PG/PEC/presupuesto (03/03), validación de totales de población y opción Ninguno (16/04), necesidad de carga masiva desde Excel para Vinculación (15/06) y error de claves duplicadas comunicado como resuelto (17/06). La última conversación sustantiva presente es 24/07; después solo avisos automáticos, por lo que no se dan por recuperados acuerdos de octubre ni por resueltos pendientes de áreas. Se identifican documentos técnicos omitidos a recuperar, especialmente Notas de sistema.docx (28/04), Plataforma.xlsx de Laura (20/04) y el archivo de ajustes citado en julio. Se conserva resumen sin credenciales ni datos personales; los chats se retiran por instrucción previa. Detalle en [seguimiento de Marce](archivos_base/Marce%20Chagoya/Seguimiento_Conversacion_Recuperada_2026-11-01.md). No se ejecutaron nuevas cargas ni cambios de permisos.

**Recuperación adicional del 01/11/2026:** nueva carpeta `archivos_base/Marce Chagoya` con dos matrices PG/PEC y presentación DGPA. La matriz sin año contiene referencias compatibles con 2026 y recupera una fuente antes citada en Downloads, sin probar identidad exacta o aprobación vigente. Sus 96 descripciones se contrastaron con 99 metas de la DB: 90 coincidencias únicas, cinco sin coincidencia exacta y una ambigua (CEARG). No aporta avances ni alineación completa por cada meta. La versión 2027 cambia claves/cifras y no se usa para cargas 2026. El PPTX tiene corte enero–agosto, útil como control, sin demostrar septiembre completo. La exportación de Marce solo contiene avisos automáticos y no recupera acuerdos. Consultar [hallazgos de Marce](archivos_base/Marce%20Chagoya/LEEME_Relevancia_y_Hallazgos_2026-11-01.md). No hubo escrituras externas en esta revisión.

**Actualización operativa del 31/10, posterior a la auditoría:** el usuario fijó corte **enero–septiembre 2026** y autorizó cargar/corregir directamente la DB, dejando evidencia para después. Se completó población de **53 presentaciones existentes de Fátima** (1,694 asistencias reportadas, 53 totales de territorio, 106 filas nuevas de población A2296:H2401 y 52 descripciones), con respaldo y lectura posterior sin discrepancias; no hubo altas de actividades. Catorce del lote conservan población pendiente y el resto de actividades apartadas requiere clasificación/alcance. Myrna se analizó: 17 funciones anuales sin avance ejecutado verificable, con metas/identidad por confirmar; no se cargaron. Consultar los resultados en cada carpeta y [mensajes de seguimiento por área](documentacion/Mensajes_Seguimiento_Areas_2026-10-31.md). La hipótesis inicial de encabezados de Fátima desplazados quedó corregida: AB:AM están alineados; hay discrepancias de cifras en filas específicas.

Verificación adicional del 31/10: se leyó la base maestra con conector y se contrastaron IDs de trazabilidad. Siguen presentes los 60 registros de Adriana Ugalde, las 67 altas de Fátima (sin filas de población para ese lote) y las ocho altas de Ileana (seis con población). El usuario autoriza continuar las cargas/correcciones directamente en la DB y posponer evidencia; esta revisión no ejecutó escrituras ni certificó todas las cantidades. Conteos actuales, rangos y pendientes en [verificación de cargas en vivo](documentacion/Verificacion_Cargas_DB_2026-10-31.md).

Verificación posterior del 31/10: confirmado acceso de lectura a la matriz editorial en vivo de Fátima mediante el conector (pestaña Actividades 2026, A1:AP7). Los encabezados de población ya son visibles, con diferencias de alineación y sumas que aún deben conciliarse; no se consideran resueltos todos los pendientes. Esta comprobación no verifica acceso ni estado actual de la base maestra y no realizó escrituras externas. Detalle en su informe de carga parcial.

Actualización de continuidad del 31/10: se contrastaron las conversaciones de ocho personas (incluida Adriana Ugalde, revisada antes), se guardaron resúmenes técnicos individuales y se retiraron las exportaciones completas por instrucción del usuario. Falta conversación de CEARG/Claudia Ramírez frente al inventario local. Se incorporó **Myrna** con Excel nuevo pendiente de análisis. Fátima refiere una versión `(20)` no encontrada localmente y aporta una liga a su matriz; Marcelina presenta una diferencia de cortes agosto/septiembre sin resolver. Consultar [control de conversaciones y pendientes](documentacion/Control_Conversaciones_y_Pendientes_2026-10-31.md). Esta recuperación no implica nuevas cargas ni verificación actual de producción.

- [README y versiones recomendadas de entregables](README.md).
- [Handoff AppSheet y restricciones A/B/C](SC_Planeacion_Handoff_Auditoria_AppSheet.md).
- [Arquitectura histórica](documentacion/PULSO_Q_Arquitectura_y_Diagnostico_Tecnico_Sistema_Cultura.md) y [resumen histórico de entregables](documentacion/Resumen_Ejecutivo_Entregables_1_2_4.md).
- [Conciliación y concentrados](documentacion/Conciliacion_y_concentrados_2026-10-26.md).
- Revisiones `documentacion/Revision_*.md`; instrucciones `outputs/**/LEEME*.md` y `archivos_base/**/LEEME*.md`; resultados y seguimiento `archivos_base/**/Resultado_*.md`, `Seguimiento_*.md`, `Revision_*.md` y `Analisis_*.md`. Son cortes distintos: consultar el resultado posterior antes de reutilizar un lote anterior.
- Fuentes de entregables en `entregables/fuentes/*.md`; selección ejecutiva en `entregables/revision_ejecutiva_2026-10-21/LEEME_VERSION_ACTUAL.md`. No equivalen a la especificación vigente del código.
