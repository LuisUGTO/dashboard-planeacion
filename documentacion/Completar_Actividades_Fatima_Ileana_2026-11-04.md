# Completar Actividades de Fátima Molinar e Ileana Salazar — 04/11/2026

Estado: **aplicado en un solo lote (*batch*) y lectura nativa verificada**.

Tras la autorización de Luis, se preparó y ejecutó una operación masiva por lotes mediante `gsheets mutate batch` sobre el Google Sheet operativo `1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4`. Esto permitió actualizar **41 rangos y cientos de celdas en una sola transacción**, eliminando las solicitudes individuales celda por celda.

## 1. Bloque Fátima Molinar (Filas 1348 a 1414 de `Registro_Actividades`: 67 actividades)

Las 67 actividades editoriales de la Meta 88 (`PB3573`) contaban con datos sustantivos y población (1,694 personas), pero carecían de alineación PG y PEC porque el catálogo maestro `Cat_Alineacion` tiene esas columnas en blanco.

Se aplicó en bloque el rango `Registro_Actividades!AM1348:AW1414`:
- **Promesa_NC:** `Leer para crecer.`
- **Eje_PG:** `4 Vocación`
- **Objetivo_PG:** `4.4 Reforzar competencias lectoras y lógico matemáticas`
- **Estrategia_PG:** `4.4.2 Competencias lectoras`
- **Acciones_PG:** `4.4.2 Fomentar el hábito lector`
- **Eje_Tranversal_PEC:** `Inclusión`
- **Linea_PEC:** `Fomento a la creación y circulación cultural.`
- **Estrategia_PEC:** `Incentivar la creación y producción artística y cultural de agentes locales.`
- **Acciones_PEC:** `Fomentar la lectura y la circulación de obras literarias y publicaciones de creadores locales.`
- **Metas_PEC:** `Incrementar en 15% anual la circulación de obras literarias y publicaciones culturales.`

## 2. Bloque Ileana Salazar (Filas 1415 a 1422 de `Registro_Actividades`: 8 actividades)

A partir de su expediente preparado (`Carga_Parcial_Ileana_Enero_Septiembre_2026.xlsx`) y su archivo contestado (`Respuestas_Ileana_Salazar_2026-11-01_contestado.xlsx`), se completaron los siguientes campos operativos:
- **Dirección General:** Se sustituyó `SIN ASIGNAR` por la Dirección General correspondiente en la columna I (Producción Artística, Formación e Investigación, Música, y Creatividad y Talento).
- **Disciplinas y Subdisciplinas:** Se asignaron Música (Urbana, Tradicional, Concierto), Multidisciplinario (Interdisciplinario, Gestión cultural) y Literatura (Narrativa).
- **Sedes y Espacios:** Se completaron Poliforum León, Alhóndiga de Granaditas, Centro Histórico de Irapuato y Casa de la Cultura de Valle de Santiago.
- **Alineación PG y PEC:** Se cargaron los ejes, objetivos, estrategias y acciones correspondientes a cada meta.
- **Taller FECA (`ACT-SCYR45800`):**
  - Territorio (Fila 1462): `Cantidad` (J) = 55, `Cantidad_Acceso` (L) = 55.
  - Población (Filas 2545 y 2546): Se añadieron las 2 filas de desglose por sexo (Mujer: 29, Hombre: 26 = 55 asistentes) confirmadas por Ileana.

## 3. Verificación Nativa Posterior

Se realizó una relectura nativa por API de las hojas modificadas:
- `Registro_Actividades`: se verificó que no se tocaron columnas fuera de A:BN.
- `Registro_Territorio`: se verificó la fila 1462 (J y L en 55, sin alterar A:I).
- `Registro_Poblacion`: se confirmó la adición limpia al final en las filas 2545 y 2546.
- Pruebas automatizadas: 42/42 pasaron exitosamente.
- Respaldos privados: `respaldo/privado_cargas_2026-11-04/completar_fatima_ileana_before.json` y `completar_fatima_ileana_verificacion.json`.
