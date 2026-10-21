# ENTREGABLE 2: MODELO DE INFORMACIÓN INSTITUCIONAL DISEÑADO

| CONTROL NORMATIVO Y FISCAL DEL ENTREGABLE | DETALLE OFICIAL |
| :--- | :--- |
| **Dependencia Destinataria** | Secretaría de Cultura del Estado de Guanajuato |
| **Unidad Administrativa Validadora** | Dirección de Planeación — Titular: **Lic. Marcela Chagoya** |
| **Nombre del Servicio** | Sistematización de Información Institucional y Diseño Funcional del Sistema de Información Cultural |
| **Objeto del Contrato** | Prestación de servicios profesionales para la sistematización, organización, análisis y estructuración de la información institucional de la Secretaría de Cultura, así como para el diseño conceptual y funcional de un Sistema de Información Cultural, que permita integrar, consultar, actualizar y dar seguimiento a información relacionada con programas, proyectos, acciones, beneficiarios, cobertura territorial, infraestructura, indicadores y resultados institucionales, con el propósito de fortalecer los procesos de planeación, seguimiento, evaluación y toma de decisiones. |
| **Sustento Contractual (Punto 2)** | *"Modelo de información institucional diseñado. Que incluya estructura de datos, variables, catálogos, criterios de clasificación, relaciones entre información y reglas básicas para su integración y actualización."* |
| **Prestador de Servicios Profesionales** | **Luis Angel Durán Alvarez** (Persona Física \| Consultoría **PULSO Q**) |
| **Registro Federal de Contribuyentes (RFC)** | `DUAL921018QI3` |
| **Padrón de Proveedores (Finanzas GTO)** | **No. 504898** (Estatus Vigente `R-2026`) |
| **Código de Documento y Fecha de Emisión** | `SCGTO-DP-2026-E02` — Guanajuato, Gto., a **19 de octubre de 2026** |

---

## 1. ARQUITECTURA DE DATOS Y ESTRUCTURA RELACIONAL EN TERCERA FORMA NORMAL (3FN)

En cumplimiento estricto del Punto 2 de los Términos de Referencia contractuales, Consultoría **PULSO Q** diseñó e implementó un **Modelo Relacional en Tercera Forma Normal (3FN)** alojado sobre la base de datos institucional `DB_Sistema_Cultura_GTO_V1`. Esta arquitectura erradica el paradigma anterior de "sábanas planas" con columnas repetidas por municipio o grupo de edad, desacoplando los atributos descriptivos de la actividad respecto de sus impactos territoriales, demográficos y documentales.

El modelo se compone de **veintidós (22) entidades relacionales** divididas en dos capas formales:
1. **Capa Transaccional de Hechos (4 Tablas Operativas):** Una entidad padre maestra (`Registro_Actividades`) que almacena la ficha única del evento o acción cultural, vinculada mediante relaciones **Uno a Muchos ($1:N$)** a tres entidades hijas especializadas: `Registro_Territorio` (desglose geográfico y de recintos), `Registro_Poblacion` (desagregación demográfica por sexo y 10 rangos etarios) y `Regitro_Evidencia` (respaldo documental probatorio en Google Drive).
2. **Capa Dimensional y Normativa (18 Catálogos Maestros):** Dieciocho tablas de referencia cerradas (`Cat_*`) que gobiernan mediante llaves foráneas (`FK`) cada atributo clasificatorio del sistema, garantizando cero ambigüedad semántica y trazabilidad total hacia los instrumentos de planeación del Gobierno del Estado de Guanajuato.

```
                     +-----------------------------------------------------------+
                     |              CAPA DE 18 CATÁLOGOS MAESTROS                |
                     |  Cat_Unidades (8) | Cat_Proceso (34) | Cat_Alineacion (99)|
                     |  Cat_Municipios (46) | Cat_ZAP | Cat_Disciplinas | ...    |
                     +-----------------------------+-----------------------------+
                                                   | (Validación FK 1:N)
                                                   v
                     +-----------------------------------------------------------+
                     |            ENTIDAD PADRE: Registro_Actividades            |
                     |  PK: ID_Actividad (573 registros únicos auditados)        |
                     |  72 atributos: Planeación, Clasificación, Formato, Costos |
                     +---------+-------------------+-------------------+---------+
                               | 1:N               | 1:N               | 1:N
          +--------------------+                   |                   +--------------------+
          v                                        v                                        v
+----------------------------------+    +----------------------------------+    +----------------------------------+
| ENTIDAD HIJA 1:                  |    | ENTIDAD HIJA 2:                  |    | ENTIDAD HIJA 3:                  |
| Registro_Territorio              |    | Registro_Poblacion               |    | Regitro_Evidencia                |
| PK: ID_Registro_Territorio       |    | PK: ID_Registro_Poblacion        |    | PK: ID_Evidencia                 |
| FK: ID_Actividad (0 huérfanos)   |    | FK: ID_Actividad (0 huérfanos)   |    | FK: ID_Actividad (0 huérfanos)   |
| 711 filas | 349,183 asistentes   |    | 563 filas | 304,626 personas     |    | 570 filas | Expedientes Drive    |
+----------------------------------+    +----------------------------------+    +----------------------------------+
```

### 1.1 Resumen Estructural y Auditoría de Integridad Referencial de las 4 Tablas Operativas

La verificación algorítmica practicada sobre el repositorio productivo confirma una **integridad referencial del 100.00%** en las llaves foráneas (`ID_Actividad`), sin un solo registro huérfano en las entidades hijas:

| Nombre Físico de la Tabla | Rol en el Modelo 3FN | Llave Primaria (`PK`) | Llave Foránea Principal (`FK`) | Total de Atributos | Filas Auditadas | Registros Huérfanos | Dictamen de Integridad Relacional |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| **`Registro_Actividades`** | Entidad Padre Maestra | `ID_Actividad` | `ID_Unidad`, `ID_Proceso`, `ID_Alineacion`, `ID_Disciplina`, `ID_Tipo_Actividad` | **72** | **573** | **0** | **100% Íntegra:** Sin llaves primarias duplicadas ni nulas. |
| **`Registro_Territorio`** | Entidad Hija ($1:N$) Geográfica | `ID_Registro_Territorio` | `ID_Actividad`, `ID_Municipio`, `ID_ZAP`, `ID_Recinto` | **14** | **711** | **0** | **100% Íntegra:** Las 711 filas apuntan a un `ID_Actividad` válido (suma: **349,183**). |
| **`Registro_Poblacion`** | Entidad Hija ($1:N$) Demográfica | `ID_Registro_Poblacion` | `ID_Actividad`, `ID_Grupo_Vulnerable` | **26** | **563** | **0** | **100% Íntegra en FK:** 0 huérfanos; pendiente completar 10 actividades (**44,557**). |
| **`Regitro_Evidencia`** | Entidad Hija ($1:N$) Probatoria | `ID_Evidencia` | `ID_Actividad`, `ID_Tipo_Evidencia` | **9** | **570** | **0** | **100% Íntegra:** Vinculación directa a objetos verificables en Google Drive. |

---

## 2. DICCIONARIO DE DATOS Y VARIABLES DE LAS ENTIDADES OPERATIVAS

A continuación se documenta la estructura de variables de las cuatro tablas transaccionales, especificando el nombre físico del atributo, tipo de dato, obligatoriedad, catálogo vinculado y su función dentro del modelo institucional.

### 2.1 Entidad Padre: `Registro_Actividades` (Síntesis Estructural de los 72 Atributos por Dominio)

La entidad `Registro_Actividades` concentra los **72 atributos** descriptivos, programáticos y administrativos de cada acción cultural, organizados lógicamente en seis dominios funcionales:

| Dominio Funcional | Rango de Columnas | Variables Clave (`Nombre_Fisico`) | Tipo de Dato | Restricción / Regla | Catálogo o Referencia Asociada |
| :--- | :---: | :--- | :---: | :---: | :--- |
| **I. Identificación y Control de Auditoría** | Cols. 1–6 | `ID_Actividad`, `Fecha_Captura`, `Usuario_Captura`, `Estatus_Validacion`, ` Ejercicio_Fiscal`, `Mes_Reporte` | `VARCHAR(20)` / `DATETIME` | `PK` / `NOT NULL` | Generación automática (`ACT-YYYY-NNNN`) y sello de tiempo de auditoría. |
| **II. Alineación Programática y Presupuestal** | Cols. 7–16 | `ID_Unidad`, `ID_Proceso`, `ID_Alineacion`, `Clave_Proyecto_Q`, `Programa_Presupuestario`, `Eje_Sectorial` | `VARCHAR(15)` | `FK` / `NOT NULL` | `Cat_Unidades` (8), `Cat_Proceso` (34 procesos), `Cat_Alineacion` (99 metas GP). |
| **III. Clasificación Sustantiva y Modalidad** | Cols. 17–28 | `Nombre_Actividad`, `Descripcion_Objetivo`, `Poblacion_Objetivo`, `ID_Tipo_Actividad`, `ID_Disciplina`, `ID_Subdisciplina`, `ID_Derecho_Cultural` | `TEXT` / `VARCHAR(30)` | `NOT NULL` | `Cat_Tipos_Actividad`, `Cat_Disciplinas`, `Cat_Derechos_Culturales` y distinción Acceso vs. Participación. |
| **IV. Temporalidad, Formato y Operación** | Cols. 29–44 | `Fecha_Inicio`, `Fecha_Termino`, `Num_Sesiones`, `Duracion_Horas`, `ID_Modalidad` (Presencial/Virtual/Híbrida), `Gratuidad`, `Costo_Boleto` | `DATE` / `INTEGER` / `DECIMAL` | `CHECK (>= 1)` | `Cat_Modalidades`, `Cat_Periodicidad`. En la auditoría suma **1,797 sesiones**. |
| **V. Talento Artístico, Creadores y Vinculación** | Cols. 45–60 | `Num_Artistas_Locales`, `Num_Artistas_Nacionales`, `Num_Artistas_Internacionales`, `ID_Esquema_Colaboracion`, `Institucion_Aliada` | `INTEGER` / `VARCHAR(100)` | `DEFAULT 0` | `Cat_Colaboracion`, `Cat_Tipo_Creador` (indicadores de estímulo a agentes culturales). |
| **VI. Métricas Consolidadas de Control (Roll-ups)** | Cols. 61–72 | `Total_Territorio_Calc`, `Total_Poblacion_Calc`, `Diferencia_Cuadre`, `Tiene_Evidencia`, `Bandera_Consistencia`, `Observaciones_Planeacion` | `INTEGER` / `BOOLEAN` | Calculado por Sistema | Variables virtuales de control que alimentan la **Vista 6 (Conciliación Operativa)**. |

### 2.2 Entidades Hijas ($1:N$): `Registro_Territorio`, `Registro_Poblacion` y `Regitro_Evidencia`

| Tabla Hija ($1:N$) | Atributo / Variable (`Nombre_Fisico`) | Tipo de Dato | Carácter | Descripción Técnica y Regla de Integración |
| :--- | :--- | :---: | :---: | :--- |
| **`Registro_Territorio`** | `ID_Registro_Territorio` | `VARCHAR(20)` | `PK` | Identificador único de la fila de impacto territorial (`TER-NNNN`). |
| **`Registro_Territorio`** | `ID_Actividad` | `VARCHAR(20)` | `FK` | Llave foránea hacia `Registro_Actividades.ID_Actividad` (integridad 100%). |
| **`Registro_Territorio`** | `ID_Municipio` | `VARCHAR(10)` | `FK` | Clave oficial del municipio dentro de los **46 municipios** de `Cat_Municipios` (`GTO_COORDS`). |
| **`Registro_Territorio`** | `Localidad_Colonia` / `ID_ZAP` | `VARCHAR(80)` | `FK` | Nombre de la localidad e identificador oficial de Zona de Atención Prioritaria (`Cat_ZAP`). |
| **`Registro_Territorio`** | `ID_Tipo_Sede` / `ID_Recinto` | `VARCHAR(20)` | `FK` | Clasificación del espacio (`Cat_Tipo_Sede`, `Cat_Recintos`: museo, teatro, casa de cultura, espacio público). |
| **`Registro_Territorio`** | `Total_Beneficiarios_Territorio` | `INTEGER` | `NOT NULL` | Conteo físico de asistentes o participantes en esa sede específica (Suma auditada: **349,183**). |
| **`Registro_Poblacion`** | `ID_Registro_Poblacion` / `ID_Actividad` | `VARCHAR(20)` | `PK` / `FK` | Llave primaria demográfica y enlace $1:N$ hacia la actividad maestra. |
| **`Registro_Poblacion`** | `Hombre_0_5`, `Hombre_6_12`, `Hombre_13_17`, `Hombre_18_29`, `Hombre_30_59`, `Hombre_60_Mas` (y sub-rangos hasta 10 cortes) | `INTEGER` | `NOT NULL` | Desagregación etaria masculina por ciclo de vida (Infancia, Adolescencia, Juventud, Adultez, Adulto Mayor). |
| **`Registro_Poblacion`** | `Mujer_0_5`, `Mujer_6_12`, `Mujer_13_17`, `Mujer_18_29`, `Mujer_30_59`, `Mujer_60_Mas` (y sub-rangos hasta 10 cortes) | `INTEGER` | `NOT NULL` | Desagregación etaria femenina por ciclo de vida homologada con criterios INEGI / CONAPO. |
| **`Registro_Poblacion`** | `Total_Poblacion_Calculado` | `INTEGER` | Calculado | Suma horizontal de los 20 campos sexo-edad ($\sum \text{Hombres} + \sum \text{Mujeres} = \mathbf{304,626}$). |
| **`Regitro_Evidencia`** | `ID_Evidencia` / `ID_Actividad` | `VARCHAR(20)` | `PK` / `FK` | Llave primaria del expediente probatorio vinculada a la actividad maestra. |
| **`Regitro_Evidencia`** | `ID_Tipo_Evidencia` / `URL_Archivo_Drive` | `VARCHAR(255)` | `FK` / `URL` | Clasificación (`Cat_Tipo_Evidencia`: Lista de asistencia, Memoria fotográfica, Boletería) y vínculo válido a Drive. |

---

## 3. DICCIONARIO COMPLETO DE LOS 18 CATÁLOGOS MAESTROS HOMOLOGADOS

Para impedir la fragmentación semántica y garantizar que cada registro sea clasificable por los criterios normativos del Gobierno del Estado de Guanajuato, el modelo incorpora **dieciocho (18) Catálogos Maestros** de consulta obligatoria:

| # | Nombre del Catálogo | Llave Primaria (`PK`) | Registros Activos | Propósito Normativo y Criterio de Clasificación en el Sistema |
| :-: | :--- | :--- | :---: | :--- |
| **01** | **`Cat_Unidades`** | `ID_Unidad` | **8** | Identifica a las 8 Direcciones/Unidades Administrativas generadoras de información de la Secretaría de Cultura. |
| **02** | **`Cat_Proceso`** | `ID_Proceso` | **34** | Catálogo oficial de los **34 Procesos Presupuestales** y proyectos de inversión (`Proyecto Q`) vigentes en el ejercicio. |
| **03** | **`Cat_Alineacion`** | `ID_Alineacion` | **99** | Matriz programática con las **99 Metas de Gestión y Producto (Metas GP)** alineadas al Programa de Gobierno y PED. |
| **04** | **`Cat_Municipios`** | `ID_Municipio` | **46** | Padrón oficial INEGI de los **46 municipios del Estado de Guanajuato**, integrado con latitud/longitud (`GTO_COORDS`). |
| **05** | **`Cat_Regiones`** | `ID_Region` | **7** | Regionalización administrativa estatal para análisis de equilibrio territorial subregional. |
| **06** | **`Cat_ZAP`** | `ID_ZAP` | **Polígonos** | Padrón de Zonas de Atención Prioritaria y polígonos de reconstrucción del tejido social para el Indicador 13. |
| **07** | **`Cat_Tipo_Sede`** | `ID_Tipo_Sede` | **8** | Clasifica la naturaleza del espacio: Recinto Estatal, Casa de Cultura Municipal, Escuela, Espacio Público, Virtual, etc. |
| **08** | **`Cat_Recintos`** | `ID_Recinto` | **Padrón** | Directorio homologado de Museos, Teatros, Zonas Arqueológicas, Centros de las Artes y Bibliotecas del Estado. |
| **09** | **`Cat_Disciplinas`** | `ID_Disciplina` | **12** | Clasificación artística estándar: Música, Teatro, Danza, Artes Visuales, Literatura, Cine, Patrimonio, Multidisciplina, etc. |
| **10** | **`Cat_Tipos_Actividad`** | `ID_Tipo_Actividad` | **18** | Formato operativo: Concierto, Función Escénica, Exposición, Taller Formativo, Diplomado, Conferencia, Feria, Proyección. |
| **11** | **`Cat_Poblacion_Objetivo`** | `ID_Modalidad_Atencion` | **2** | Criterio rector que separa **Acceso a Eventos Culturales** (espectadores) de **Participación Cultural Activa** (formación). |
| **12** | **`Cat_Rangos_Edad`** | `ID_Rango_Edad` | **10** | Estructura decenal y por ciclo de vida utilizada en las columnas demográficas de `Registro_Poblacion`. |
| **13** | **`Cat_Grupos_Atencion`** | `ID_Grupo_Vulnerable` | **9** | Pueblos Indígenas, Personas con Discapacidad, Población Migrante, Primera Infancia, Personas Privadas de la Libertad, etc. |
| **14** | **`Cat_Derechos_Culturales`** | `ID_Derecho_Cultural` | **9** | Alineación con la Ley de Derechos Culturales para el Estado de Guanajuato (identidad, patrimonio, creación, acceso). |
| **15** | **`Cat_Modalidades`** | `ID_Modalidad` | **3** | Modalidad de entrega del servicio público: Presencial, Digital/Virtual o Híbrida. |
| **16** | **`Cat_Colaboracion`** | `ID_Esquema_Colaboracion` | **6** | Esquema interinstitucional: Ejecución Directa, Convenio Municipal, Co-producción Federal, Sociedad Civil, Academia. |
| **17** | **`Cat_Tipo_Evidencia`** | `ID_Tipo_Evidencia` | **6** | Tipología documental válida: Lista de Asistencia Firmada, Reporte de Taquilla, Memoria Fotográfica, Testigo de Prensa, Oficio. |
| **18** | **`Cat_Estatus_Validacion`** | `ID_Estatus` | **4** | Flujo de control de calidad de Planeación: `En Captura`, `Pendiente de Conciliación`, `Observado`, `Validado Oficial`. |

---

## 4. CRITERIOS DE CLASIFICACIÓN Y REGLAS DE NEGOCIO PARA INTEGRACIÓN Y ACTUALIZACIÓN

En cumplimiento de la parte final del Punto 2 contractual (*"criterios de clasificación, relaciones entre información y reglas básicas para su integración y actualización"*), se establecen las **Seis Reglas de Negocio Institucionales (`RN-01` a `RN-06`)** de observancia obligatoria tanto en la capa de captura (AppSheet) como en el motor de validación del Tablero Directivo:

| Código Regla | Nombre de la Regla de Negocio | Expresión Lógica / Condición Normativa | Mecanismo de Aplicación en la Integración y Actualización |
| :---: | :--- | :--- | :--- |
| **`RN-01`** | **Regla de Cuadre Estricto Territorio vs. Demografía** | $$\sum_{i=1}^{n} \text{Territorio}(A) \equiv \sum_{j=1}^{m} \text{Población}(A)$$ | Para toda actividad $A$ (`ID_Actividad`), la suma de asistentes en `Registro_Territorio` debe ser exactamente igual a la suma de hombres y mujeres por rango etario en `Registro_Poblacion`. Si existe una diferencia $\neq 0$ (como los **44,557** detectados en las 10 actividades históricas), la actividad queda marcada en estado **`Pendiente de Conciliación`** y no se integra al corte oficial validado hasta su subsanación. |
| **`RN-02`** | **Regla de Segregación Metodológica: Acceso vs. Participación Activa** | $$\text{Poblacion\_Objetivo} \in \{\text{Acceso}, \text{Participación}\}$$ | Prohibido agregar en un mismo indicador bruto a espectadores pasivos y a beneficiarios de procesos formativos. El sistema clasifica automáticamente como **Acceso a Eventos Culturales** (`344,037`) las presentaciones, exposiciones y conciertos, y como **Participación Cultural Activa** (`5,146`) los talleres, laboratorios, diplomados y coros comunitarios. |
| **`RN-03`** | **Regla de Prohibición Absoluta de Texto Libre en Atributos Clasificatorios** | $$\forall c \in \text{Campos\_Clasificación}: c \in \text{Catálogo\_Maestro}$$ | Ningún usuario operativo puede escribir manualmente nombres de municipios, unidades administrativas, disciplinas, procesos presupuestales o metas GP. Toda selección se realiza mediante listas desplegables (`ENUM` / `REF`) vinculadas a los **18 Catálogos Maestros**. |
| **`RN-04`** | **Regla de Trazabilidad Programático-Presupuestal en Cascada** | $$\text{ID\_Unidad} \rightarrow \text{ID\_Proceso} \rightarrow \text{ID\_Alineacion}$$ | Toda actividad nueva o actualizada debe contar obligatoriamente (`NOT NULL`) con `ID_Unidad`, `ID_Proceso` (uno de los 34 procesos presupuestales) e `ID_Alineacion` (una de las 99 metas GP). La interfaz filtra en cascada únicamente los procesos y metas asignados a la unidad que captura, corrigiendo el **54.62%** de omisión histórica de `ID_Proceso`. |
| **`RN-05`** | **Regla de Respaldo Probatorio Obligatorio en Google Drive** | $$\text{Count}(\text{Regitro\_Evidencia}(A)) \ge 1$$ | Ningún registro de actividad puede cambiar su estatus a `Validado Oficial` para Cuenta Pública o Informe de Gobierno si no posee al menos un vínculo válido en `Regitro_Evidencia` que apunte a la lista de asistencia, reporte de taquilla o memoria fotográfica alojada en el repositorio institucional de Google Drive. |
| **`RN-06`** | **Regla de Ventana de Actualización y Bloqueo de Corte Mensual** | $$\text{Fecha\_Actual} \le \text{Día } 5 \text{ hábil del mes } M+1$$ | Las unidades operativas disponen hasta el quinto día hábil del mes inmediato posterior para registrar y conciliar sus actividades. Una vez emitido el dictamen de la Dirección de Planeación en la **Vista 6**, los registros del periodo quedan bloqueados contra edición (`Read-Only`) para preservar la inmutabilidad estadística de los reportes ejecutivos. |

---

## CONSTANCIA DE ENTREGA-RECEPCIÓN Y VALIDACIÓN TÉCNICA — ENTREGABLE 2

El presente documento técnico-normativo ampara el cumplimiento integral del **Entregable 2 (Modelo de información institucional diseñado)**, correspondiente al contrato de prestación de servicios profesionales para la *Sistematización de Información Institucional y Diseño Funcional del Sistema de Información Cultural* de la Secretaría de Cultura del Estado de Guanajuato.

| ELABORÓ Y ENTREGA (PRESTADOR DE SERVICIOS PROFESIONALES) | RECIBE Y VALIDA (DEPENDENCIA DESTINATARIA) |
| :---: | :---: |
| ![Logo PULSO Q](../../assets/identidad/pulso-q-logo-sobrio.png)<br>![Firma Luis Angel Durán Alvarez](../../assets/firmas/firma-luis-duran.png) | <br><br><br><br> |
| **LUIS ANGEL DURÁN ALVAREZ** | **LIC. MARCELA CHAGOYA** |
| Persona Física \| Consultoría **PULSO Q**<br>RFC: **`DUAL921018QI3`** \| Padrón de Proveedores GTO: **`504898` (R-2026)** | **Directora de Planeación**<br>Secretaría de Cultura del Estado de Guanajuato |
