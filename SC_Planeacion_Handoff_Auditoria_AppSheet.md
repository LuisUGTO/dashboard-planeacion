# Secretaría de Cultura de Guanajuato — Transferencia técnica y auditoría AppSheet

**Fecha:** 21 de octubre de 2026  
**Proyecto:** Sistema de Información Cultural / Planeación  
**Estado:** análisis de arquitectura; AppSheet continúa en producción.  
**Documento fuente:** `Application Documentation.pdf` (289 páginas, exportación AppSheet del 21/10/2026). **Adjuntar este PDF nuevamente en la conversación principal si no está disponible allí.**

## 1. Objetivo y restricciones

La Secretaría utiliza una aplicación AppSheet denominada **Gestión de Metas Cultura 2030** para capturar actividades, territorio, población y datos asociados a metas institucionales. El objetivo es auditar su configuración, corregir errores y evaluar una aplicación web propia con dashboard más potente, **sin interrumpir ni alterar la captura actual**.

- Mantener AppSheet como sistema productivo durante la auditoría y desarrollo paralelo.
- Preservar registros históricos, catálogos, columnas, claves, fórmulas y trazabilidad.
- Evitar gastos adicionales sin una justificación funcional y presupuestal.
- No escribir desde prototipos en las hojas productivas; iniciar con lectura o copias de prueba.
- No asumir que la documentación por sí sola incluye registros, permisos de Google Workspace, configuraciones de API o automatizaciones externas.

## 2. Hallazgos confirmados en la documentación

En la portada del PDF se reportan **23 tablas, 243 columnas, 51 vistas, 89 acciones, 0 slices, 0 reglas de formato y 0 workflow rules**. Estos son conteos de la exportación y no prueban por sí mismos que no existan automatizaciones en otros servicios.

- Fuente de datos identificada: **Google**, archivo `DB_Sistema_Cultura_GTO_V1`.
- Tablas operativas: `Registro_Actividades`, `Registro_Territorio`, `Registro_Poblacion`, `Regitro_Evidencia` (respetar la grafía exacta hasta verificar).
- Catálogos observados: `Cat_Alineacion`, `Cat_Indicadores`, `Cat_Municipio`, `Cat_Comunidades`, `Cat_Comunidades_Limpio`, `Cat_Genero`, `Cat_Grupo_Etario`, `Cat_Grupo_Prioritario`, `Cat_Disciplina`, `Cat_Tipo_Actividad`, `Cat_Tipo_Espacio`, `Cat_Formato`, `Cat_Tipo_Asentamiento`, `Cat_Costo`, `Cat_Enfoque`, `Cat_Actividades`, `Cat_Agentes_Culturales`, `Cat_Recintos` y otros detallados en el PDF.
- Se documentan relaciones de `Registro_Actividades` con tablas hijas mediante `REF_ROWS("Registro_Territorio", "ID_Actividad")` y `REF_ROWS("Registro_Poblacion", "ID_Actividad")`.
- En `Registro_Poblacion`, `ID_Poblacion` aparece como clave con valor inicial `UNIQUEID()` y `ID_Actividad` como referencia a `Registro_Actividades`.
- La documentación es una fotografía de la configuración exportada, no un diagnóstico completo de funcionamiento.

## 3. Alternativas de arquitectura a evaluar

### A. Optimizar AppSheet + Google Sheets

Corregir expresiones, validaciones, relaciones, navegación, formularios y errores. Mantener el sistema actual como solución principal. Ventaja: mínimo cambio operativo; límite: personalización y arquitectura sujetas a AppSheet.

### B. Solución híbrida: AppSheet + Google Sheets + aplicación web

AppSheet sigue capturando; la nueva web ofrece consultas y dashboard, inicialmente **solo lectura**, a través de una capa segura (Apps Script o backend con Google Sheets API, según permisos y cuotas). La web no debe incorporar credenciales de servicio en el navegador. Antes de habilitar escrituras, probar concurrencia, consistencia, autenticación, autorización y conflictos con AppSheet.

### C. Aplicación web + PostgreSQL/Supabase

Base de datos relacional, controles de acceso por fila, integridad referencial, transacciones y potencial de crecimiento. Requiere migración, presupuesto, operación, respaldos y aprobación institucional. No seleccionar automáticamente: justificar con pruebas y requisitos reales.

**Hipótesis inicial, pendiente de auditoría:** B como vía incremental y A para corregir producción; C solo si el volumen, la concurrencia, seguridad o complejidad lo justifican. Google Sheets puede servir como origen de datos, pero no equivale a un motor SQL transaccional.

## 4. Auditoría técnica requerida

1. **Inventario de datos:** las 23 tablas, 243 columnas, tipos, claves, valores iniciales, fórmulas, virtuales, obligatoriedad, visibilidad, edición y fuentes.
2. **Relaciones y cardinalidad:** actividades–territorio–población–evidencias; referencias a catálogos; detectar claves inestables y dependencias rotas.
3. **Reglas de negocio:** `Valid_If`, `Show_If`, `Required_If`, `Editable_If`, `Reset_If`, `Suggested_Values`, expresiones de cálculo y dependencias. Identificar reglas documentadas vs. requisitos declarados pero no implementados.
4. **UX y flujos:** revisar 51 vistas y 89 acciones, formularios padre-hijo, navegación y estados de captura.
5. **Calidad de datos:** duplicados, nulos, huérfanos, catálogos redundantes, normalización y validación de cantidades; contrastar con datos reales únicamente cuando estén disponibles.
6. **Seguridad y gobierno:** usuarios, acceso por dirección, acceso a hojas, evidencias, registros de auditoría, políticas de TI, licenciamiento y protección de datos personales. No inferir seguridad real solo del PDF.
7. **Rendimiento y costos:** tamaño real de hojas, usuarios concurrentes, frecuencia de sincronización, cuotas de Apps Script/Sheets API, licencias Workspace/AppSheet y soporte institucional.
8. **Dashboard:** indicadores, metas, avances, filtros de año/mes/dirección/municipio, cobertura territorial, población y riesgos de doble conteo por relaciones 1:N.
9. **Migración incremental:** especificar pruebas, criterios de aceptación, estrategia de reversión, respaldo y punto de corte eventual.

## 5. Entregables de auditoría

- Matriz **tabla–campo–tipo–regla–dependencia–destino web/SQL** con referencias a páginas del PDF.
- Mapa entidad-relación y diccionario de datos.
- Catálogo de hallazgos priorizados: crítico / alto / medio / bajo, con evidencia y corrección propuesta.
- Inventario de vistas, acciones y flujos.
- Evaluación comparativa A/B/C con costo total de propiedad, riesgo, seguridad, rendimiento y esfuerzo.
- Blueprint de aplicación web modular y plan de fases; conservar código existente del dashboard cuando sea viable.
- Lista de evidencias adicionales necesarias (hojas/catálogos reales, código HTML/JS, configuraciones de AppSheet, accesos y requisitos de Planeación).

## 6. Principios de implementación

- **Cero cambios en producción sin autorización explícita.**
- Prototipos con copias anonimizadas o entorno de pruebas.
- Respaldos verificables antes de cualquier migración.
- Roles, validaciones y permisos aplicados en backend, no solo en interfaz.
- Reportes que eviten sumar repetidamente una actividad por sus múltiples filas de territorio o población.
- Separar hallazgos comprobados en el PDF de hipótesis o recomendaciones.

---

# PROMPT PARA PEGAR EN LA CONVERSACIÓN PRINCIPAL

Estamos retomando el proyecto de **Planeación de la Secretaría de Cultura de Guanajuato**. Adjuntaré el archivo `Application Documentation.pdf` exportado de mi aplicación AppSheet **Gestión de Metas Cultura 2030** (289 páginas). Lee también este Markdown de transferencia y utiliza los archivos existentes de esta conversación (dashboard HTML/JS, modelos de datos y demás documentación) cuando estén disponibles.

**Objetivo:** realizar una **auditoría técnica exhaustiva, verificable y por etapas** de AppSheet para decidir si conviene (A) corregir y conservar AppSheet, (B) mantener AppSheet y Google Sheets mientras desarrollamos una web/dashboard paralela, o (C) migrar gradualmente a una base SQL como PostgreSQL/Supabase. Mi prioridad es no interrumpir la captura actual ni generar costos innecesarios. La Secretaría ya utiliza Google Workspace; verifica las condiciones reales de licencia y cuotas antes de afirmar que una opción no cuesta más.

**Instrucciones de trabajo:**
1. Inspecciona la documentación completa, no solo la portada. Inventaría 23 tablas, 243 columnas, 51 vistas y 89 acciones; contrasta esos conteos con el contenido. Identifica las expresiones AppSheet y las relaciones padre-hijo.
2. Construye primero un **diagnóstico AS-IS**: modelo de datos, claves, referencias, catálogos, fórmulas, validaciones, acciones, vistas, seguridad documentada y dependencias externas.
3. Distingue **hecho confirmado** (con número de página), **inferencia** y **dato pendiente de verificar**. No inventes errores ni asegures que un comportamiento funciona solo porque aparece configurado.
4. Busca inconsistencias: columnas redundantes, claves inestables, validaciones insuficientes, relaciones huérfanas, reglas contradictorias, fallas de UX y riesgos de doble conteo en el dashboard. Propón cómo comprobar cada posible problema.
5. Compara A/B/C considerando rendimiento, concurrencia, integridad de datos, seguridad, permisos institucionales, costos, mantenimiento y facilidad de operación.
6. Diseña una **arquitectura de coexistencia** que use Google Sheets como fuente inicial, con integración web segura y de solo lectura. No modifiques las hojas productivas ni ejecutes escrituras sin mi autorización.
7. Relaciona el diagnóstico con nuestro dashboard web existente y el proyecto de Supabase/HTML/JS, evitando rehacer lo que ya funciona.
8. Entrega la auditoría en fases manejables: empieza por un **resumen ejecutivo + inventario de tablas + mapa de relaciones + primeros hallazgos con páginas de referencia**, y continúa con el detalle de columnas, reglas, UX, seguridad y blueprint.
9. Al terminar cada fase, señala claramente qué información adicional requieres y qué decisión debe tomarse antes de avanzar.

**Resultado esperado:** una decisión técnica documentada y un plan incremental para mejorar el sistema institucional, preservando la captura en AppSheet hasta que exista una alternativa validada y autorizada.
