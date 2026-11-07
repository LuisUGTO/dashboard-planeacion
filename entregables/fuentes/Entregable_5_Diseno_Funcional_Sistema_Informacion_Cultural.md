# ENTREGABLE 5: DISEÑO FUNCIONAL DEL SISTEMA DE INFORMACIÓN CULTURAL ELABORADO

| CONTROL NORMATIVO Y FISCAL DEL ENTREGABLE | DETALLE OFICIAL |
| :--- | :--- |
| **Dependencia Destinataria** | Secretaría de Cultura del Estado de Guanajuato |
| **Unidad Administrativa Validadora** | Dirección de Planeación — Titular: **Lic. Marcela Chagoya** |
| **Nombre del Servicio** | Sistematización de Información Institucional y Diseño Funcional del Sistema de Información Cultural |
| **Objeto del Contrato** | Prestación de servicios profesionales para la sistematización, organización, análisis y estructuración de la información institucional de la Secretaría de Cultura, así como para el diseño conceptual y funcional de un Sistema de Información Cultural, que permita integrar, consultar, actualizar y dar seguimiento a información relacionada con programas, proyectos, acciones, beneficiarios, cobertura territorial, infraestructura, indicadores y resultados institucionales, con el propósito de fortalecer los procesos de planeación, seguimiento, evaluación y toma de decisiones. |
| **Sustento Contractual (Punto 5)** | *"Diseño funcional del Sistema de Información Cultural elaborado. Que contenga módulos, perfiles de usuario, funcionalidades requeridas, mecanismos de consulta, filtros, reportes, tableros e indicadores, así como requerimientos generales para su posterior desarrollo tecnológico."* |
| **Prestador de Servicios Profesionales** | **Luis Angel Durán Alvarez** (Persona Física \| Consultoría **PULSO Q**) |
| **Registro Federal de Contribuyentes (RFC)** | `DUAL921018QI3` |
| **Padrón de Proveedores (Finanzas GTO)** | **No. 504898** (Estatus Vigente `R-2026`) |
| **Código de Documento y Fecha de Emisión** | `SCGTO-DP-2026-E05` — Guanajuato, Gto., a **6 de noviembre de 2026** |

---

## 1. ARQUITECTURA FUNCIONAL Y ESPECIFICACIÓN DE MÓDULOS DEL SISTEMA

En estricto cumplimiento del **Punto 5 de los Términos de Referencia** contractuales, Consultoría **PULSO Q** elaboró el diseño funcional detallado del **Sistema de Información Cultural (SIC)** de la Secretaría de Cultura del Estado de Guanajuato. El sistema está concebido como una plataforma modular, analítica y directiva que transforma los datos transaccionales capturados en campo en inteligencia estratégica para la toma de decisiones.

El diseño funcional desacopla la **captura operativa** (gestionada descentralizadamente mediante AppSheet y formularios blindados) de la **capa de visualización, análisis y fiscalización** (operada en el Tablero Directivo Web). El sistema se estructura en **seis (6) módulos funcionales interconectados**:

| Módulo Funcional | Propósito y Capacidades Principales | Componentes y Vistas en Pantalla | Indicadores / Salidas |
| :--- | :--- | :--- | :--- |
| **M1. Visión General del Ecosistema Cultural** | Consolidar en un solo panel ejecutivo los macroindicadores de impacto social, volumen operativo y cobertura del Instituto. | Tarjetas KPI dinámicas, selector de población (Territorial vs. Demográfica), series de asistencias mensuales y distribución por temporalidad. | Total de actividades reportadas, personas atendidas, inversión contratada, ingresos generados y municipios con presencia. |
| **M2. Matriz Estratégica y Alineación** | Evaluar el cumplimiento físico de las 99 metas del Catálogo Oficial cruzadas contra el Programa de Gobierno (PG) y Programa Estatal de Cultura (PEC). | Tabla de alineación programática, barras de cumplimiento porcentual por meta y dirección, filtro por Eje y unidad de medida. | Avance institucional anual (**86.4%**), metas cumplidas, actividades de meta vs. metas de personas o metros. |
| **M3. Cobertura Territorial y Cartografía** | Monitorear la descentralización de la oferta artística en los 46 municipios del Estado de Guanajuato mediante cartografía interactiva. | Mapa Leaflet georreferenciado con coropletas de intensidad, marcadores por cabecera municipal, panel de detalle por municipio y recintos. | Cobertura municipal (43 municipios presenciales regulares + cobertura estatal extendida) y atención en polígonos prioritarios. |
| **M4. Perfil Poblacional e Inclusión** | Analizar la desagregación sociodemográfica de los beneficiarios para garantizar equidad de género, inclusión de grupos prioritarios y derechos culturales. | Pirámides etarias, distribución por sexo (Mujeres vs. Hombres), gráfico de modalidades (Acceso vs. Participación) y atención en ZAP. | 503,420 Mujeres (52.1%) • 461,926 Hombres (47.9%), cruce por 10 grupos de edad y condición de vulnerabilidad. |
| **M5. Repositorio Digital de Evidencias** | Administrar el expediente probatorio de respaldo para solventar revisiones de órganos de control interno y auditoría fiscal. | Malla fotográfica interactiva, visor de comprobantes PDF, listas de asistencia escaneadas y enlaces a carpetas Drive. | Validación de evidencia vinculada por actividad; porcentaje de respaldo documental institucional. |
| **M6. Auditoría y Conciliación Operativa** | Ejecutar algoritmos forenses en tiempo real que auditan la integridad matemática, referencial y documental de la base de datos completa. | 5 tarjetas de control: *Cifras discrepantes*, *Datos por completar*, *Sin evidencia*, *Revisar cantidades* y *Posible duplicación*. | Detección de anomalías en origen; descarga de CSV de corrección y auditoría de capturas sustituidas. |

---

## 2. PERFILES DE USUARIO, ROLES Y MATRIZ DE PRIVILEGIOS

Para asegurar la gobernanza de datos y el principio de menor privilegio, el SIC establece **cinco (5) perfiles de usuario** con atribuciones diferenciadas:

| Perfil de Usuario | Usuarios Objetivo | Entorno de Trabajo | Permisos y Atribuciones Operativas |
| :--- | :--- | :--- | :--- |
| **P1. Administrador de Planeación** | Titular y equipo técnico de la Dirección de Planeación | Tablero Directivo + Consola Administrativa AppSheet | Control total: parametrización de catálogos, auditoría forense, aprobación de cierres mensuales, exportación de presentaciones directivas y corrección de llaves. |
| **P2. Enlace de Dirección Sustantiva** | Enlaces designados de las 8 Unidades Generadoras (Patrimonio, Museos, CEARG, etc.) | Formularios AppSheet (Web/Móvil) + Ficha Técnica SIC | Captura, edición y carga de evidencia de las actividades de su propia dirección; consulta de avance de sus metas programáticas asignadas. |
| **P3. Enlace Municipal de Campo** | Coordinadores de Casas de Cultura y CAV | AppSheet Móvil (Modo Offline) + Plantilla Protegida | Captura desconectada en localidades rurales; reporte exclusivo de actividades de su demarcación geográfica con sincronización diferida. |
| **P4. Consulta Directiva / Titular** | Secretaria de Cultura, Subsecretarios y Directores Generales | Tablero Directivo Web (Vistas 1 a 4) | Consulta ejecutiva interactiva en tiempo real; aplicación de filtros estratégicos; generación con un clic de presentaciones oficiales en PowerPoint (.pptx). |
| **P5. Órganos de Control y Auditoría** | Auditoría Interna de la Secretaría y Órganos Fiscalizadores | Módulos de Auditoría (M5 y M6) + Descarga Histórica | Consulta de trazabilidad histórica, verificación de evidencias probatorias en Google Drive, inspección de registros sustituidos y exportación de bitácoras. |

---

## 3. MECANISMOS DE CONSULTA, FILTROS MULTIDIMENSIONALES Y NAVEGACIÓN

* **Mecanismo de Cascada Dinámica:** Los filtros operan de manera relacional e instantánea en el navegador del cliente sin requerir recargas de página completas ni consultas lentas de servidor.
* **Filtro por Unidad Administrativa:** Permite aislar la producción de cualquiera de las 8 direcciones o visualizar el consolidado institucional.
* **Filtro por Eje del Programa de Gobierno:** Reorganiza los indicadores y gráficas según los 6 Ejes del PG y los objetivos del Programa Estatal de Cultura.
* **Filtro Geográfico Municipal:** Al seleccionar cualquiera de los 46 municipios, el tablero recalcula automáticamente la asistencia, despliega sus recintos culturales activos y centra el mapa con zoom territorial automático.
* **Búsqueda Predictiva Universal:** Motor de búsqueda en tiempo real que indexa por nombre de actividad, folio, artista, tallerista o espacio cultural, permitiendo localizar cualquier evento entre más de 1,500 registros en menos de 50 milisegundos.

---

## 4. MECANISMOS DE REPORTEO, GENERACIÓN DE DOCUMENTOS Y SALIDAS

El diseño funcional incorpora tres mecanismos estandarizados de salida de información para atender las demandas operativas y ejecutivas:

| Mecanismo de Salida | Tecnología / Motor | Formato | Descripción y Caso de Uso Institucional |
| :--- | :--- | :--- | :--- |
| **Presentación Ejecutiva Automatizada** | Motor nativo cliente `PptxGenJS` | PowerPoint (`.pptx`) 16:9 Widescreen | Genera en un clic una presentación directiva con los filtros activos en pantalla, portadas institucionales, tablas de KPIs y gráficas en alta resolución para acuerdos de gabinete. |
| **Descarga de Datos Depurada** | Parser transaccional `PapaParse` | CSV plano compatible Excel / UTF-8 | Exporta el padrón completo o filtrado respetando límites operativos (A:BV), preservando ceros válidos, textos largos y fechas ISO sin alteración de tipos. |
| **Ficha Técnica de Detalle Operativo** | Modal dinámico de detalle relacional | Vista en pantalla / Imprimible | Despliega el expediente integral de una actividad específica: ficha padre, desglose territorial, desglose demográfico, fotos de evidencia y trazabilidad de folios. |

---

## 5. REQUERIMIENTOS GENERALES PARA POSTERIOR DESARROLLO TECNOLÓGICO

1. **Arquitectura Ligera sin Servidor Propietario (Jamstack):** El Tablero Directivo debe operar como una aplicación estática basada en estándares web abiertos (HTML5, Tailwind CSS, JavaScript Vanilla ES6+), eliminando la dependencia de servidores de aplicaciones dedicados o licenciamiento de software comercial privativo.
2. **Persistencia en la Nube de Google Workspace:** La base de datos central reside en hojas de cálculo institucionales debidamente protegidas, aprovechando el almacenamiento y la autenticación corporativa ya contratada por el Gobierno del Estado.
3. **Desacoplamiento de Entornos:** El Tablero se comunica con la base de datos en modo estrictamente de **solo lectura** para visualización y análisis, mientras que las transacciones de escritura se concentran exclusivamente a través de la API móvil/web de AppSheet, garantizando que el tablero directivo sea inmune a inyecciones de datos o desconfiguración de fórmulas.
4. **Resiliencia de Red y Compatibilidad Móvil:** El diseño es plenamente responsivo, optimizado para consulta en tabletas y teléfonos inteligentes de funcionarios en giras de trabajo, con soporte de caché para tolerar intermitencias de conectividad.

---

## CONSTANCIA DE ENTREGA-RECEPCIÓN Y VALIDACIÓN TÉCNICA — ENTREGABLE 5

| ELABORÓ Y ENTREGA (PRESTADOR DE SERVICIOS PROFESIONALES) | RECIBE Y VALIDA (DEPENDENCIA DESTINATARIA) |
| :---: | :---: |
| <br><br><br><br>**LUIS ANGEL DURÁN ALVAREZ** | <br><br><br><br>**LIC. MARCELA CHAGOYA** |
| Persona Física \| Consultoría **PULSO Q**<br>RFC: **`DUAL921018QI3`** \| Padrón de Proveedores GTO: **`504898` (R-2026)**<br>Fecha: 6 de noviembre de 2026 | **Directora de Planeación**<br>Secretaría de Cultura del Estado de Guanajuato<br>Fecha: 6 de noviembre de 2026 |
