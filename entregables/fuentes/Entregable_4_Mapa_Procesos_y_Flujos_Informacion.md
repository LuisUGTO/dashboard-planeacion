# ENTREGABLE 4: MAPA DE PROCESOS Y FLUJOS DE INFORMACIÓN ELABORADO

| CONTROL NORMATIVO Y FISCAL DEL ENTREGABLE | DETALLE OFICIAL |
| :--- | :--- |
| **Dependencia Destinataria** | Secretaría de Cultura del Estado de Guanajuato |
| **Unidad Administrativa Validadora** | Dirección de Planeación — Titular: **Lic. Marcela Chagoya** |
| **Nombre del Servicio** | Sistematización de Información Institucional y Diseño Funcional del Sistema de Información Cultural |
| **Objeto del Contrato** | Prestación de servicios profesionales para la sistematización, organización, análisis y estructuración de la información institucional de la Secretaría de Cultura, así como para el diseño conceptual y funcional de un Sistema de Información Cultural, que permita integrar, consultar, actualizar y dar seguimiento a información relacionada con programas, proyectos, acciones, beneficiarios, cobertura territorial, infraestructura, indicadores y resultados institucionales, con el propósito de fortalecer los procesos de planeación, seguimiento, evaluación y toma de decisiones. |
| **Sustento Contractual (Punto 4)** | *"Mapa de procesos y flujos de información elaborado. Identificando áreas generadoras de información, responsables, mecanismos de captura, validación, actualización y consulta."* |
| **Prestador de Servicios Profesionales** | **Luis Angel Durán Alvarez** (Persona Física \| Consultoría **PULSO Q**) |
| **Registro Federal de Contribuyentes (RFC)** | `DUAL921018QI3` |
| **Padrón de Proveedores (Finanzas GTO)** | **No. 504898** (Estatus Vigente `R-2026`) |
| **Código de Documento y Fecha de Emisión** | `SCGTO-DP-2026-E04` — Guanajuato, Gto., a **19 de octubre de 2026** |

---

## 1. ARQUITECTURA DEL FLUJO OPERATIVO EXTREMO A EXTREMO (4 FASES INSTITUCIONALES)

En cumplimiento estricto del Punto 4 de los Términos de Referencia contractuales, Consultoría **PULSO Q** diseñó e instrumentó el **Mapa de Procesos y Flujos de Información** del Sistema de Información Cultural de la Secretaría de Cultura del Estado de Guanajuato. El flujo operativo sustituye el envío desarticulado de oficios, documentos Word y hojas de Excel aisladas por una tubería transaccional continua (*End-to-End Pipeline*) estructurada en **cuatro (4) fases secuenciales** perfectamente auditables:

```
+---------------------------------------------------------------------------------------------------+
| FASE 1: CAPTURA EN ORIGEN (8 UNIDADES GENERADORAS Y ENLACES DE CAMPO)                             |
| • Modalidad A (Conectada): Formularios relacionales AppSheet (Web / Móvil) con listas en cascada. |
| • Modalidad B (Sin Red): Caché Offline AppSheet y Plantilla CSV/XLSX blindada para zonas rurales. |
+-------------------------------------------------+-------------------------------------------------+
                                                  | Escritura transaccional validada (FK)
                                                  v
+---------------------------------------------------------------------------------------------------+
| FASE 2: PERSISTENCIA RELACIONAL Y ALMACENAMIENTO PROBATORIO (GOOGLE WORKSPACE)                    |
| • Base de Datos Maestra: Google Sheets `DB_Sistema_Cultura_GTO_V1` (4 tablas 3FN + 18 Catálogos). |
| • Repositorio Documental: Carpetas estructuradas en Google Drive vinculadas a `Regitro_Evidencia`.|
+-------------------------------------------------+-------------------------------------------------+
                                                  | Ingesta asíncrona JSONP / GViz API
                                                  v
+---------------------------------------------------------------------------------------------------+
| FASE 3: VALIDACIÓN, CONCILIACIÓN Y CONSULTA DIRECTIVA (TABLERO WEB SPA `index.html`)              |
| • Motor analítico en tiempo real con 6 Vistas Especializadas, filtros globales multicriterio y    |
|   mapa coroplético/burbujas de los 46 municipios (`GTO_COORDS` completo: 25/46 activos).          |
+-------------------------------------------------+-------------------------------------------------+
                                                  | Renderizado Canvas Base64 -> Widescreen 16:9
                                                  v
+---------------------------------------------------------------------------------------------------+
| FASE 4: EXPORTACIÓN EJECUTIVA AUTOMATIZADA (`PptxGenJS` EN UN CLIC)                               |
| • Generación instantánea de presentaciones `.pptx` editables con identidad institucional,         |
|   filtros activos aplicados, KPIs oficiales y gráficas de alta resolución para toma de decisiones.|
+---------------------------------------------------------------------------------------------------+
```

### 1.1 Especificación Técnica de los Mecanismos por Fase Operativa

| Fase del Flujo | Componente Tecnológico | Áreas y Actores que Intervienen | Mecanismo Técnico de Captura, Validación, Actualización o Consulta |
| :---: | :--- | :--- | :--- |
| **FASE 1**<br>*Captura en Origen* | **AppSheet Institucional** + **Plantilla Offline Homologada** | Enlaces de Captura de las **8 Unidades Generadoras** y promotores municipales/CAV | • Captura estructurada padre-hijo: primero se registra la ficha en `Registro_Actividades` y en el mismo flujo se agregan las filas hijas de `Registro_Territorio`, `Registro_Poblacion` y `Regitro_Evidencia`.<br>• En zonas arqueológicas o comunidades sin cobertura celular (Patrimonio Cultural y Vinculación), el promotor captura en modo desconectado y sincroniza al recuperar señal. |
| **FASE 2**<br>*Persistencia y Respaldo* | **Google Sheets (`DB_Sistema_Cultura_GTO_V1`)** + **Google Drive** | Motor de Base de Datos en la Nube / Administración de Planeación | • Almacenamiento centralizado en 3FN sin duplicidad de archivos.<br>• Integridad referencial garantizada por los **18 Catálogos Maestros**.<br>• Cada fotografía, lista de asistencia escaneada o reporte de taquilla se aloja en Google Drive y su URL inmutable se registra en `Regitro_Evidencia` (`570` registros vinculados). |
| **FASE 3**<br>*Validación y Consulta* | **Tablero Directivo Web SPA (`index.html`)** + **Leaflet (`GTO_COORDS`)** + **Chart.js** | Titular de la Secretaría, **Dirección de Planeación** y Directores de las 8 Unidades | • Conexión viva en tiempo real a `DB_Sistema_Cultura_GTO_V1` sin necesidad de servidores intermedios costosos.<br>• Filtros dinámicos cruzados por Unidad Administrativa, Proceso Presupuestal, Municipio, Modalidad (Acceso vs. Participación) y Rango de Fechas.<br>• Georreferenciación exacta de los **46 municipios del Estado de Guanajuato** (`GTO_COORDS`). |
| **FASE 4**<br>*Reporte Ejecutivo* | **Módulo Integrado `PptxGenJS` (Widescreen 16:9)** | Dirección de Planeación y Despacho de la C. Secretaria | • Botón directo en el encabezado del tablero (*"Exportar Presentación Ejecutiva"*).<br>• Construye en el navegador un archivo `.pptx` nativo en formato `LAYOUT_16x9` con portada institucional, tarjetas de KPIs filtradas y capturas vectoriales/alta resolución (`toBase64Image()`) de las gráficas activas. |

---

## 2. ARQUITECTURA DE CONSULTA Y MONITOREO: LAS 6 VISTAS DEL TABLERO DIRECTIVO

Para satisfacer las distintas necesidades de consulta, seguimiento y auditoría identificadas en el contrato, el Tablero Directivo Web organiza la información institucional en **seis (6) vistas especializadas** interactivas:

| # Vista | Denominación de la Vista en el Tablero | Propósito Analítico y de Toma de Decisiones | Indicadores, Gráficas y Controles Principales que Despliega | Usuario Principal |
| :-: | :--- | :--- | :--- | :--- |
| **Vista 1** | **Resumen Ejecutivo e Impacto Global** | Ofrecer una radiografía inmediata del desempeño institucional acumulado y del avance mensual. | • Tarjetas KPI: **573** actividades, **1,797** sesiones, **349,183** beneficiarios territoriales.<br>• Separación clara entre **Acceso (344,037)** y **Participación Activa (5,146)**.<br>• Tendencia temporal y distribución por las 8 Unidades Administrativas. | Titular de la Secretaría / Dirección de Planeación |
| **Vista 2** | **Cobertura Territorial y Mapa Estatal (46 Municipios)** | Evaluar la descentralización cultural (Indicador 1) y la atención en Zonas de Atención Prioritaria (Indicador 13). | • Mapa interactivo Leaflet con coordenadas completas de los **46 municipios (`GTO_COORDS`)**.<br>• Indicador de cobertura (**25/46 municipios = 54.35%**).<br>• Ranking municipal de beneficiarios y desglose por tipo de sede y ZAP. | Dirección de Planeación / Desarrollo Cultural Municipal |
| **Vista 3** | **Perfil Demográfico, Género e Inclusión** | Monitorear la equidad de género y la atención por ciclo de vida (Indicador 9). | • Pirámide poblacional interactiva por sexo (Hombres vs. Mujeres) y **10 rangos de edad** sobre los **304,626** registros demográficos.<br>• Indicador de paridad y desglose por grupos de atención prioritaria. | Dirección de Planeación / Unidades Operativas |
| **Vista 4** | **Alineación Estratégica y Presupuestal** | Vincular el quehacer cultural con las **99 Metas GP** (`Cat_Alineacion`) y los **34 Procesos Presupuestales** (`Cat_Proceso`) (Indicador 8). | • Matriz de cumplimiento por Proceso Presupuestal (`20/34` activos) y Meta GP.<br>• Detección visual de las **313 actividades** pendientes de asignación de `ID_Proceso`. | Dirección de Planeación / Dirección Administrativa |
| **Vista 5** | **Explorador Detallado del Padrón de Actividades** | Consulta granular de cada una de las 573 acciones registradas y acceso directo a sus evidencias probatorias. | • Buscador instantáneo por `ID_Actividad`, nombre, municipio o disciplina.<br>• Ficha técnica emergente con sesiones, aforo y enlace clicable al expediente en **Google Drive** (`Regitro_Evidencia`). | Auditores / Directores de Área / Planeación |
| **Vista 6** | **Conciliación Operativa y Auditoría de Calidad** | Instrumento de control interno para detectar y corregir inconsistencias antes del cierre mensual oficial. | • **Semáforo de Cuadre:** Aísla automáticamente las **10 actividades** que originan la discrepancia de **44,557** registros entre Territorio y Demografía.<br>• Lista de actividades sin evidencia en Drive o sin `ID_Proceso`. | **Lic. Marcela Chagoya** (Dirección de Planeación) y Enlaces |

---

## 3. MATRIZ DE RESPONSABILIDADES OPERATIVAS (MATRIZ RACI INSTITUCIONAL)

Con el fin de garantizar la gobernanza permanente del Sistema de Información Cultural y evitar la dilución de responsabilidades entre las áreas generadoras y el órgano coordinador, se establece la siguiente **Matriz RACI** (*Responsible, Accountable, Consulted, Informed*) de observancia obligatoria:

*Nomenclatura normativa:* **`R` (Responsable Ejecutor):** Quien realiza directamente la tarea operativa. **`A` (Aprobador / Dueño del Proceso):** Quien valida oficialmente y responde por la calidad del resultado. **`C` (Consultado):** Área que aporta insumos técnicos o catálogos. **`I` (Informado):** Instancia directiva que consume el resultado validado.

| # | Actividad Crítica dentro del Flujo de Información | Enlaces Operativos de Captura (8 Unidades) | Directores de las 8 Unidades Generadoras | Dirección de Planeación (Lic. Marcela Chagoya) | Despacho de la C. Secretaria / Direcciones Grales. |
| :-: | :--- | :---: | :---: | :---: | :---: |
| **01** | **Administración y actualización de los 18 Catálogos Maestros (`Cat_*`)** | `I` | `C` | **`R` / `A`** | `I` |
| **02** | **Captura primaria de la actividad cultural (`Registro_Actividades`)** | **`R`** | **`A`** | `C` | `I` |
| **03** | **Desglose municipal/ZAP (`Registro_Territorio`) y demográfico (`Registro_Poblacion`)** | **`R`** | **`A`** | `C` | `I` |
| **04** | **Carga de listas de asistencia/fotografías en Drive y vínculo en `Regitro_Evidencia`** | **`R`** | **`A`** | `I` | `I` |
| **05** | **Revisión en Vista 6 (Conciliación Operativa) y emisión de alertas por descuadre** | `I` | `C` | **`R` / `A`** | `I` |
| **06** | **Subsanación de inconsistencias (descuadres Territorio vs. Demografía o falta de `ID_Proceso`)** | **`R`** | **`A`** | `C` | `I` |
| **07** | **Dictamen de cierre mensual, bloqueo de corte y exportación ejecutiva (`.pptx`)** | `I` | `I` | **`R` / `A`** | **`I` (Consumidor)** |

---

## 4. PROTOCOLO DE CORTE MENSUAL, VALIDACIÓN Y CONCILIACIÓN OPERATIVA (VISTA 6)

Para asegurar que las cifras presentadas ante el Gabinete Estatal, la Secretaría de Finanzas y los Informes de Gobierno posean **validez estadística y soporte jurídico-administrativo inobjetable**, la actualización y validación de la información se sujeta a un ciclo mensual regulado en cinco etapas:

| Etapa del Ciclo | Calendario Oficial | Actividad de Control y Validación | Criterio de Aceptación en el Sistema |
| :---: | :---: | :--- | :--- |
| **Etapa 1**<br>*Registro Continuo* | Días **1 al 30/31** del mes en curso ($M$) | Los enlaces de las 8 Unidades Operativas registran conforme se realizan las actividades culturales y adjuntan los expedientes probatorios en Google Drive. | Todo registro nuevo recibe folio único `ID_Actividad` y estatus inicial `En Captura`. |
| **Etapa 2**<br>*Pre-cierre de Unidades* | Días **1 al 3 hábiles** del mes siguiente ($M+1$) | Cada Director de Unidad revisa en el Tablero Directivo (filtrando por su `ID_Unidad`) que la totalidad de los eventos del mes estén capturados y vinculados a su `ID_Proceso` y `ID_Alineacion`. | Cero omisiones de actividades realizadas en el periodo mensual que concluye. |
| **Etapa 3**<br>*Auditoría en Vista 6* | Día **4 hábil** del mes siguiente ($M+1$) | La **Dirección de Planeación** ejecuta la revisión en la **Vista 6 (Conciliación Operativa)** del Tablero Directivo, identificando automáticamente cualquier actividad donde $\text{Territorio} \neq \text{Población}$ o falte evidencia en Drive. | Emisión del listado automatizado de folios observados por Unidad Administrativa. |
| **Etapa 4**<br>*Solventación Obligatoria* | Día **5 hábil** del mes siguiente ($M+1$) | Los enlaces operativos corrigen en `DB_Sistema_Cultura_GTO_V1` los registros observados (completando el desglose demográfico por sexo/edad o subiendo la evidencia faltante). | **Diferencia neta = 0** entre `Registro_Territorio` y `Registro_Poblacion` para el corte mensual. |
| **Etapa 5**<br>*Cierre Oficial y Exportación* | Día **6 hábil** del mes siguiente ($M+1$) | La Dirección de Planeación cambia el estatus del periodo a `Validado Oficial` y genera desde el tablero la **Presentación Ejecutiva Widescreen (`.pptx`)** mediante el módulo `PptxGenJS`. | Cifras oficiales congeladas y presentación ejecutiva entregada para toma de decisiones. |

---

## CONSTANCIA DE ENTREGA-RECEPCIÓN Y VALIDACIÓN TÉCNICA — ENTREGABLE 4

El presente documento técnico-normativo ampara el cumplimiento integral del **Entregable 4 (Mapa de procesos y flujos de información elaborado)**, correspondiente al contrato de prestación de servicios profesionales para la *Sistematización de Información Institucional y Diseño Funcional del Sistema de Información Cultural* de la Secretaría de Cultura del Estado de Guanajuato.

| ELABORÓ Y ENTREGA (PRESTADOR DE SERVICIOS PROFESIONALES) | RECIBE Y VALIDA (DEPENDENCIA DESTINATARIA) |
| :---: | :---: |
| ![Logo PULSO Q](../../assets/identidad/pulso-q-logo-sobrio.png)<br>![Firma Luis Angel Durán Alvarez](../../assets/firmas/firma-luis-duran.png) | <br><br><br><br> |
| **LUIS ANGEL DURÁN ALVAREZ** | **LIC. MARCELA CHAGOYA** |
| Persona Física \| Consultoría **PULSO Q**<br>RFC: **`DUAL921018QI3`** \| Padrón de Proveedores GTO: **`504898` (R-2026)** | **Directora de Planeación**<br>Secretaría de Cultura del Estado de Guanajuato |
