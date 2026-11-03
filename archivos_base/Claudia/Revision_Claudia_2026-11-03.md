# Revisión de la entrega de Claudia — 03/11/2026

**Estado: analizado; sin cambios en la DB ni en los Excel.** Se revisó el único archivo de esta carpeta, `Concentrado Actividades OCTUBRE 2026.xlsx`, y se contrastó con una lectura actual de la DB en vivo. No se cargó ningún registro. El corte autorizado sigue siendo enero–septiembre de 2026.

## Resultado

El libro contiene una hoja, `CONCENTRADO OCTUBRE 2026`, con **13 actividades** (filas 7–17, 20 y 21). Todas inician en octubre de 2026. Las dos últimas terminan el 31/01/2027. El encabezado A2 dice «Informe de actividades de Octubre de 2025», en contradicción con las fechas: debe confirmarse/corregirse el encabezado, sin cambiar fechas por intuición.

**Las 13 ya tienen registros correspondientes en la DB**, por nombre, contexto y fechas. El recital de Max Flores tiene un título más amplio en la DB. No volver a importar este archivo como altas. Que estén presentes no prueba que estén conciliadas ni que deban incorporarse al corte enero–septiembre.

| Fila del Excel | Actividad | ID existente | Público del Excel | Total territorial DB |
|---:|---|---|---:|---:|
| 7 | Enclave: Sonoridades Poéticas Expandidas | ACT-SCZU26953 | 28 | 25 |
| 8 | Lectura de Elena Garro | ACT-SCAH64970 | 271 | 271 |
| 9 | Modulaciones, Max Flores | ACT-SCEM34948 | 50 | 50 |
| 10 | Cera escamada | ACT-SCZD11467 | 30 | 30 |
| 11 | Guirnaldas de xempazuchitl | ACT-SCKK34173 | 17 | 17 |
| 12 | Papel picado | ACT-SCTN60936 | 18 | 18 |
| 13 | Ballet Folclórico Juvenil Xidoo | ACT-SCDJ88045 | 300 | 300 |
| 14 | Proyección Entre cartón y escenario | ACT-SCUQ80549 | 52 | 52 |
| 15 | Comparsa de la muerte | ACT-SCHM54541 | 158 | 158 |
| 16 | Concurso Nacional Reina Catrina | ACT-SCZF90716 | 733 | 733 |
| 17 | Muestra Tzompantli | ACT-SCLQ88281 | 250 | 250 |
| 20 | Lo esencial de la Forma, Paul Nevin | ACT-SCBC34336 | 2228 | 2228 |
| 21 | Metamorfosís Gráfica, Alice Rahon | ACT-SCAQ60152 | 2228 | 2228 |

## Aclaraciones para este archivo de octubre

1. **Enclave (fila 7):** el Excel reporta 28 atendidos (16 mujeres y 12 hombres), 24 que concluyen (12 y 12) y edades que suman 24. La DB contiene 25 en territorio (1 participación + 24 acceso) y 24 en población, todos en participación. Confirmar qué representa cada cifra y a quién corresponde el desglose. La diferencia entre atendidos y concluyentes no equivale a público de acceso. La sede dice Salamanca y León; la DB solo Salamanca. Pedir el desglose real por sede si existe, sin repartir cantidades ni interpretar las procedencias AF como sedes.
2. **Dos exposiciones (filas 20 y 21):** ambas repiten 2228 visitantes, 1175 mujeres y 1053 hombres, mismo espacio y periodo. Confirmar si cada exposición tuvo conteo independiente o si comparten visitantes, y hasta qué fecha se midieron los 2228. No presentar el público como ejecución completa hasta enero de 2027 ni sumar automáticamente las dos cifras como personas distintas.
3. **Metas:** PB3567 y QC4049 tienen varias metas en el catálogo; la clave general no identifica una sola. Solicitar la meta concreta cuando no sea inequívoca. Hay diferencias que requieren revisión institucional: el ballet está asociado a la meta 3 (movilidad/circulación de agentes, QC4102), aunque el Excel señala PB3567; Reina Catrina está en meta 5 (QC4140), aunque el Excel señala PB3567. La lectura está en meta 73 (cursos de patrimonio inmaterial), el recital en 75 (cursos de artes visuales/digitales/sonoras) y Tzompantli en 72 (cursos de grabado). Son alertas de correspondencia, no autorización para cambiarlas automáticamente ni prueba de error definitivo.
4. **Sesiones:** el Excel no reporta sesiones realizadas. La DB tiene 3 para Enclave y 108/107 para las dos exposiciones. No se validan esos valores por contar los días del intervalo; se necesita conocer qué se está midiendo antes de corregir.
5. **Desglose por sexo disponible:** el Excel aporta información que la DB conserva como «No se cuenta con el dato» para la lectura, el recital y las dos exposiciones. Puede servir para una corrección futura conservando IDs, después de resolver el alcance de las exposiciones y autorizar el trabajo del corte de octubre. No inventar edades: solo Enclave tiene cifras por edad y corresponden a 24, no a 28.
6. **Participación/acceso:** los talleres Cera escamada, Guirnaldas y Papel picado tienen público de acceso en territorio y de participación en población, con totales iguales. Requieren criterio consistente, sin sumar ambas fuentes.

Los totales por sexo de atendidos y concluyentes cuadran aritméticamente en las 13 filas. Esto no resuelve la atribución de visitantes compartidos. Doce actividades tienen referencias de archivo de evidencia en la DB; la proyección no tiene fila de evidencia. Solo se comprobó existencia del valor, no contenido, permisos ni completitud documental. No se convierte la falta de evidencia en requisito para resolver el corte actual.

## Qué pedir ahora para enero–septiembre

Esta entrega de octubre **no sustituye las respuestas al archivo de pendientes del CEARG**, guardado en `archivos_base/CEARG/Respuestas_Claudia_CEARG_2026-11-01.xlsx`. Mantener un solo expediente de seguimiento y no tratar la carpeta Claudia como una dirección adicional.

Pedir que responda ese Excel con lo ya confirmado: fechas, casos repetidos o grupos distintos, metas concretas, público observado y si julio tuvo actividades o está pendiente. Permitir respuestas parciales y «No tengo el dato» para avanzar sin volver a solicitar toda la matriz. Resolver octubre por separado, después del corte vigente.

## Evidencia y límites

- Fuente local SHA-256: `791cc4b9ff94f4e530498322bef66b764bb4398717cf62ffb3c25ba04f44cd88`.
- DB: `1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4`, lectura del 03/11/2026.
- Lecturas acotadas: Actividades A:B, M:Q y AL hasta fila 2260; detalle A:BN en filas 1208, 1257–1263 y 1287–1291. Territorio A1:L1517, Población A1:H2405, Evidencia A1:E1061 y Cat_Alineacion A1:R110. Sin usar columnas deshabilitadas ni Dashboard_Master.
- No se modificaron fuentes, registros, catálogos, AppSheet, código, permisos o servicios externos. No se enviaron mensajes. No se ejecutaron pruebas del tablero porque esta revisión no cambia código. Sin commit, push ni publicación.
