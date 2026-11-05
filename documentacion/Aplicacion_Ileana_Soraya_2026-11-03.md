# Aplicación urgente de respuestas — 03/11/2026, 15:28

**Corrección posterior del03/11:** las respuestas21,24 y25 son de septiembre, no de octubre. La exclusión indicada abajo fue un error de esta revisión; ya se incorporaron en la conciliación adicional. Ver [resultado actualizado](Conciliacion_Adicional_Fuentes_2026-11-03.md). Se conserva el informe original como trazabilidad.
Estado: **parcial, aplicado y verificado en Google Sheets**. Corte de altas/ajustes: enero–septiembre. Sin commit, push ni publicación por el agente.

## Soraya
Se leyeron 219 respuestas: 25 sobre cifras, 189 sobre coincidencias y cinco sobre fechas. No equivalen a 219 actividades nuevas.
- Corregidos participación/acceso en Palabras Umbral (11 espectadores), Invocar (16), Activación Sonora (23), Oráculos (96) y Lectoescritura (15 participantes), tanto en territorio como en población.
- Corregida participación duplicada en Eterno Femenino (9) y Visita guiada libre (3), conservando acceso cero existente y totales confirmados.
- Completadas fechas finales de CENTRO FOX y LIBRE: 09/07/2026.
- Altar de Dolores: 8722; Fragmentos y Complicidades: 13116. Un territorio existente por actividad y dos nuevas poblaciones generales; sin reparto de edad, sexo o participación/acceso no informado.
- Aclaraciones incorporadas a las descripciones de 22 registros existentes. Las cifras de inauguración y visitantes se conservan separadas en texto: no se sumaron sin confirmar si se solapan.
- No se modificaron las respuestas 21, 24 y 25: registros con inicio en octubre, fuera del corte.
- Tres pares confirmados como MISMA: Runas, Luz Abisal y Rompecabezas del arcano mayor. Se aplicó la marca reversible SUSTITUIDO a ACT-SCKY29214→ACT-SCUI68875, ACT-SCEV33562→ACT-SCYH28131 y ACT-SCLW62426→ACT-SCOJ18223. Se conservaron originales e hijos. No se certificaron los desgloses de edad contradictorios. Runas mantiene explícita la diferencia 138 frente a 136.
- Las otras coincidencias no se descartaron por contestaciones genéricas: varias comparan una fila del archivo con la base, sin demostrar que dos IDs productivos deban fusionarse.

## Ileana
Se leyeron once respuestas. WAPA ACT-SCDW90018 se confirmó como actividad existente: no se creó otro ID.
Se completó final 30/03/2026, territorio Guanajuato/Casa Mariel y 94 personas (84 mujeres, 10 hombres) según matriz actualizada. No había hijos territoriales/demográficos asociados a ese ID en la lectura previa. Se añadieron un territorio y dos poblaciones generales, sin inventar edades.
Las otras respuestas se documentan en el resultado individual. No se cargaron concentrados como una única actividad ni se usaron sesiones para reemplazar cantidades.

## Verificación
- 42 celdas existentes actualizadas en el primer lote y seis descripciones en la conciliación de duplicados.
- Cuatro poblaciones nuevas A2468:H2471; un territorio nuevo A1535:L1535. Cero altas de actividades.
- Lectura posterior confirma todos los valores; formato, validaciones y chips de las celdas existentes conservados.
- Solo campos operativos A:BN/A:L/A:H. Sin Dashboard_Master ni columnas retiradas.
- Auditoría sobre el mismo corte de datos: diferencias **79→72**, identidad **292→286**. Total con alertas/historial **1380→1380**, porque conservan otros pendientes y las sustituidas siguen en historial. No sumar tarjetas ni interpretar el contador como porcentaje de calidad.
- **42 pruebas pasaron**: node --test tests/calidad-datos.test.cjs tests/tablero.test.cjs tests/ficha-actividad.test.cjs.
- No se comprobó visualmente el contador remoto. La lógica de sustitución debe estar publicada para excluir esos historiales del sitio.
- Respaldos y lecturas nativas en respaldo/privado_cargas_2026-11-03, excluidos de Git.

## Pendientes técnicos que NO quedaron resueltos en esta operación
Los 60 concentrados de Adriana Ugalde requieren un modelo de cantidad/unidad dentro de los campos vigentes; no se reutilizaron BU/BV. La separación de métricas digitales y asistencia física de Edith sigue pendiente. No certificar que todos los datos o áreas están al 100%.

