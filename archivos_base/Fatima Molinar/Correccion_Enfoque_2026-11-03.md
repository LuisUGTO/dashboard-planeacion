# Fátima: Enfoque_Actividad completado — 03/11/2026

**Estado: aplicado y verificado en la DB.** Se completaron exclusivamente las 67 celdas **Registro_Actividades!L1348:L1414** con **Cultural**. No hubo actividades nuevas, cambios de público, fechas, metas, IDs, folios o evidencias.

## Hallazgo y criterio

El lote de 67 presentaciones editoriales importado el 29/10 conservaba Enfoque_Actividad vacío. Las actualizaciones posteriores habían atendido población y descripciones, sin completar ese campo. Se comprobó que las 67 filas seguían siendo Presentación editorial, Literatura y meta 88; la disciplina por sí sola no determina el enfoque.

Cat_Enfoque actual contiene únicamente Artística y Cultural. No contiene una regla de correspondencia por tipo ni una definición metodológica extendida. Cat_Actividades tampoco asigna un enfoque. La documentación AppSheet del 21/10, página 36, describe el campo como referencia editable a Cat_Enfoque, con clave textual Enfoque_Actividad y sin fórmula de clasificación visible: no se acredita una cascada automática vigente ni se escribió el ID numérico del catálogo.

Se aplicó **un criterio operativo de promoción y difusión del libro**, consistente con los tres precedentes existentes de Presentación editorial: filas 295 y 296 (Museos, meta 92), y especialmente **fila 520, ACT-SCJQ53039, presentación de La región de San Felipe de Fátima, misma meta 88**, todas clasificadas Cultural. Se conservó Literatura en Disciplina y no se aplicó una regla general para cualquier actividad literaria, taller, feria o encuentro.

**Es una decisión de clasificación operativa sustentada en contenido y precedentes, no una validación institucional nueva de Fátima o Planeación.** Si se aprueba una metodología diferente debe revisarse esa correspondencia conservando trazabilidad. La confirmación de este campo no resuelve por sí sola las metas oficiales ni los públicos pendientes.

Las dos actividades señaladas como canceladas conservaron su marca y sus relaciones. El enfoque clasifica la naturaleza del registro, no confirma su realización; la exclusión analítica continúa dependiendo del ajuste local de cancelaciones ya documentado.

## Respaldo y verificación

Se inspeccionó A1348:BN1414 y K520:M520 con valores, formato, validación y chips antes de escribir. No había validación/chips en L. La escritura usó un solo updateCells acotado a L y fields=userEnteredValue. El control previo tuvo una falsa diferencia por orden de los bloques devueltos; se releyó y comparó por coordenada, comprobando cero cambios reales antes de escribir.

Respaldo, solicitud y lectura posterior: `respaldo/privado_cargas_2026-11-03/fatima_enfoque_*.json`, excluidos de Git. La lectura posterior de todo el bloque A:BN comprobó **67 valores Cultural**, cero diferencias en el resto de celdas, formatos/validaciones/chips conservados, incluidos IDs, folios y marcas de cancelación.

Sin uso de columnas fuera de A:BN ni Dashboard_Master. Sin modificaciones de fuentes del área, catálogos, AppSheet, código, permisos o servicios SQL. No hubo mensajes a terceros, commit, push ni publicación. La verificación fue de valores/metadatos nativos; navegador, gráficos y exportaciones no verificados visualmente en esta corrección. No se ejecutaron pruebas Node porque no se cambió código.

Para el mensaje a Fátima, no hace falta solicitar que recapture Enfoque_Actividad de esas 67 filas. Las consultas adicionales útiles son la fecha respaldada de Carta al amor propio y, si dispone de ellas, las claves/metas oficiales de los casos todavía ambiguos. Las correspondencias institucionales que ella no tenga deben validarse con Planeación, sin elegir arbitrariamente una meta.
