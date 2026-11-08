# Auditoría de Evolución Anual · 08/11/2026

**Ajuste de gráficas y conteo anual.** Lectura de Registro_Actividades A:P: 1,708 filas vigentes con fecha de 2026, con 1,660 IDs distintos, y siete filas vigentes sin fecha. Inicio cuenta 1,715 filas. Evolución Anual aplica el mismo criterio en el corte 2026 y documenta la diferencia entre filas e IDs. Públicos distingue visitas históricas y alcance territorial 2026 en series separadas; la línea muestra etiquetas por punto y las cifras de las tarjetas se ajustan al ancho. Cambios locales, sin verificación visual en navegador.

**Ajuste visual de Evolución Anual:** se recuperaron la cabecera con fotografía, el panel plegable y la distribución anterior con tres gráficas, comparativo y logros. Conserva los filtros por año, programa, área y municipio; las gráficas usan el alcance documentado de la selección. Las fuentes se consultan en un panel plegable. Verificación automatizada, pendiente prueba visual en navegador.

## Implementado localmente

- La pantalla tiene filtros propios de año, programa o proyecto P/Q, dirección y municipio. Las tarjetas, tabla, cobertura y gráfica se vuelven a calcular desde la misma selección. La gráfica usa un indicador a la vez. Se separan fichas, visitas, asistencias, talleres, metas programadas y otras unidades.
- 2026 usa filas de fichas vigentes con inicio en 2026 o sin fecha válida, y alcance de Registro_Territorio. La selección municipal usa solo filas territoriales de ese municipio y cuenta cada fila de ficha una vez, aunque tenga varios renglones territoriales. Los resultados 2026 de la presentación se muestran como datos de esa fuente, separados de la operación. Los filtros de 2026 siguen dependiendo de las claves registradas y sus alineaciones.
- Las series históricas conservan su alcance y su referencia. Los cruces sin desglose muestran una raya o un estado sin datos. La imagen de WhatsApp orientó la cabecera, los cuatro filtros, el color y la distribución de tarjetas, evolución y cobertura. El mapa y la reproducción visual completa siguen pendientes.

## Cotejos

| Fuente | Resultado |
|---|---|
| Presentación «Informe de resultados 2025» | Visitantes a exposiciones 490,350 y 602,389. El desglose municipal de 2025 suma 602,389. El informe indica que no existe un desglose municipal comparable en 2024. El desglose por recinto de 2025 no coincide exactamente con el municipal; se conservó la tabla municipal publicada como tal. |
| Presentación + AE3037 Forum 2025 | 136 y 174 actividades, 62,619 y 67,285 asistencias, comparativa Forum sin MAHG + Teatro. En 2025 el Excel da 91 + 83 actividades y 17,619 + 49,666 asistencias. El 70 previo era solo el componente Forum 2024. |
| Presentación, Editorial | 12, 15 y 6 metas **programadas**. Incluidos indicadores seleccionados de PB3501/PB3573 y la tabla territorial de 17 municipios de Guanajuato. Los totales estatales de esa tabla dejan fuera otros estados y países. La nota de cumplimiento de libros digitales reporta 46.2% para 8 de 13, que aritméticamente es 61.5%; no se usa ese porcentaje. |
| Anexo Académico 2025 | 47 cursos/acciones y 1,120 participaciones. PB3520 aporta 37 y 935, QC4049 aporta 10 y 185. Se excluyó la fila Suma del cálculo de detalle. |
| Imagen de WhatsApp | Referencia de diseño. Su gráfica 2019–2026 suma 52,328 actividades, mientras su tarjeta indica 56,328. Además, el crecimiento 2019–2026 aparece con dos porcentajes distintos. Ninguna cifra de la imagen se usa como fuente. |

## Pendientes para entrega

- Se inventariaron los nueve Excel. Falta cotejar hoja por hoja el Anexo Estadístico DGFI con el Anexo Académico para evitar superposición; la programación DGPA con la evidencia de realización; y los cuatro anexos CDCM y el anexo de personas privadas de libertad con su año, universo y relación entre tablas de detalle y acumulados. No se incorporaron como totales del sistema. Falta extraer y validar el resto de indicadores de la presentación.
- El tablero vigente solicita A:BV de actividades, mientras las instrucciones escritas del repositorio señalan A:BN. El cambio anual no introduce dependencias nuevas de BO en adelante. En las vistas operativas el filtro municipio + ZAP puede coincidir en dos filas distintas de una misma ficha, y el total territorial conserva filas de cualquier ZAP. El tablero también puede conservar fichas sin fecha cuando hay un rango operativo. Estos comportamientos quedan pendientes de corrección fuera de la vista anual.
- Verificación: 46 pruebas Node, incluida integración de la vista con tres años, filtros cruzados, conservación de vacíos y exclusión de registros sustituidos/cancelados según la lógica existente. El intento de navegador sin interfaz no devolvió una página verificable. Pendientes prueba visual en navegador, red contra datos vigentes y PDF. La exportación PPTX operativa queda fuera de la pestaña anual. Sin publicación ni cambios en la base.
