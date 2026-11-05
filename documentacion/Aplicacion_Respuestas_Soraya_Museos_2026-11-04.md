# Aplicación de Respuestas de Soraya Villegas (Museos) — 04/11/2026

Estado: **aplicado en lote (*batch*) de 26 sustituciones y verificado en Google Sheets**.

A partir del archivo final contestado `archivos_base/Soraya Villegas/Respuestas_Soraya_Museos_2026-11-01_contestado.xlsx` (475 consultas respondidas), se contrastaron las respuestas contra la base de datos viva (`1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4`) y lo aplicado en las conciliaciones previas del 03/11.

---

## 1. Diagnóstico del Archivo Contestado (475 consultas)

1. **Cifras, fechas o programa (25 consultas):**
   - Las 25 consultas (desgloses de espectadores/participantes, visitantes de exposiciones e inauguraciones en Altar de Dolores, Fragmentos y Complicidades, Eterno Femenino, etc.) fueron **incorporadas y conciliadas previamente el 03/11/2026** (ver [Aplicación Ileana y Soraya](Aplicacion_Ileana_Soraya_2026-11-03.md) y [Conciliación Adicional](Conciliacion_Adicional_Fuentes_2026-11-03.md)).
2. **Fechas por aclarar (5 consultas):**
   - Ya resueltas el 03/11 (Centro Fox, Libre, Bachillerato Inverna y registro fuera de corte).
3. **Posibles coincidencias con capturas previas (383 consultas):**
   - **4 pares confirmados como `MISMA`** ya habían sido sustituidos el 03/11 (`Runas`, `Luz Abisal`, `Rompecabezas del arcano mayor` y `Manuel Álvarez Bravo`).
   - **1 nuevo par confirmado como `MISMA`**: `#146` Inauguración de la exposición *Poética del paisaje* (`ACT-SCMY03003` de Soraya frente a `ACT-SCEV02279` de Christian Cardona). Se confirmó que es la misma inauguración.
   - **27 consultas de registros `ACT00017` a `ACT00046`**: correspondían a actividades ya capturadas por Christian Cardona que en la normalización del 26/10 se habían apartado para no duplicar; Soraya certificó que son sesiones únicas o conferencias específicas del 1er Encuentro Estatal de Museos, por lo que su exclusión previa fue 100% correcta.
   - **Más de 200 visitas guiadas a museos**: Soraya certificó explícitamente que son **«Misma actividad, diferentes fechas»** o **«Misma actividad, diferente grupo»**. Se confirma que **no son duplicados operativos**, sino contingentes escolares y recorridos independientes en distintas fechas y horarios.
4. **Grupos con datos iguales en origen (62 consultas):**
   - En 37 casos, Soraya aclaró que se trata de fechas o grupos distintos.
   - En **25 casos**, Soraya confirmó explícitamente **«MISMA»**, acreditando que la fila capturada duplicaba el mismo grupo de la fila anterior del archivo original de Museos.

---

## 2. Aplicación de las 26 Sustituciones Confirmadas

Siguiendo la regla de oro del repositorio (no borrar filas ni destruir trazabilidad histórica), se aplicó la marca formal `[SUSTITUIDO:ID_VIGENTE]` al inicio de `Descripcion_Breve` en la columna N de `Registro_Actividades` para las 26 actividades duplicadas confirmadas:

| # Consulta | ID Sustituido | Fila en Base | Actividad / Grupo | ID Vigente que se Conserva | Fila Vigente | Motivo / Confirmación |
|:---:|:---:|:---:|:---|:---:|:---:|:---|
| 146 | `ACT-SCMY03003` | 44 | Poética del paisaje (Inauguración) | `ACT-SCEV02279` | 141 | Misma inauguración (Christian) |
| 416 | `ACT-SCQU71740` | 862 | PREPARATORIA OFICIAL | `ACT-SCYQ25428` | 861 | Misma visita / grupo |
| 419 | `ACT-SCVI99252` | 870 | BENITO JUÁREZ | `ACT-SCUK25967` | 869 | Misma visita / grupo |
| 420 | `ACT-SCVV75111` | 872 | TÉCNICA #46 | `ACT-SCUV86759` | 871 | Misma visita / grupo |
| 421 | `ACT-SCNA19945` | 874 | SABES GRAL CÁNDIDO NAVARRO | `ACT-SCOI81145` | 873 | Misma visita / grupo |
| 422 | `ACT-SCEB99555` | 875 | SABES GRAL CÁNDIDO NAVARRO | `ACT-SCOI81145` | 873 | Misma visita / grupo |
| 425 | `ACT-SCOF77862` | 889 | ROSARIO CASTELLANOS | `ACT-SCFL63749` | 884 | Misma visita / grupo |
| 428 | `ACT-SCLH71384` | 894 | LIBRE | `ACT-SCOL05853` | 893 | Misma visita / grupo |
| 429 | `ACT-SCFS39255` | 895 | LIBRE | `ACT-SCOL05853` | 893 | Misma visita / grupo |
| 431 | `ACT-SCHF14108` | 906 | BIBLIOTECA ALFONSO VILLASEÑOR | `ACT-SCUM49337` | 905 | Misma visita / grupo |
| 432 | `ACT-SCIU85655` | 908 | UNIVERSIDAD DE LEÓN | `ACT-SCST29154` | 907 | Misma visita / grupo |
| 433 | `ACT-SCOK94797` | 909 | UNIVERSIDAD DE LEÓN | `ACT-SCST29154` | 907 | Misma visita / grupo |
| 437 | `ACT-SCGK77088` | 931 | SABES VALLE DE JEREZ | `ACT-SCRB11632` | 930 | Misma visita / grupo |
| 439 | `ACT-SCHN68767` | 941 | UNIVERSIDAD TECNOLÓGICA | `ACT-SCSA87938` | 940 | Misma visita / grupo |
| 442 | `ACT-SCIC96809` | 947 | CETIS 33 | `ACT-SCOW24790` | 946 | Misma visita / grupo |
| 443 | `ACT-SCOF03596` | 951 | BACHILLERATO INTEGRAL | `ACT-SCUR56844` | 950 | Misma visita / grupo |
| 444 | `ACT-SCVP88098` | 953 | ESPECIAL ENCUENTRO DE MUSEOS | `ACT-SCXJ70814` | 952 | Misma visita / grupo |
| 445 | `ACT-SCWS17352` | 954 | ESPECIAL ENCUENTRO DE MUSEOS | `ACT-SCXJ70814` | 952 | Misma visita / grupo |
| 446 | `ACT-SCLP33110` | 956 | CETIS 21 | `ACT-SCAQ43276` | 955 | Misma visita / grupo |
| 447 | `ACT-SCNQ44331` | 958 | CETIS 21 | `ACT-SCAQ43276` | 955 | Misma visita / grupo |
| 448 | `ACT-SCQE06079` | 960 | LASALLE | `ACT-SCRG34496` | 959 | Misma visita / grupo |
| 450 | `ACT-SCLS54531` | 964 | CETIS 21 | `ACT-SCTR77257` | 963 | Misma visita / grupo |
| 451 | `ACT-SCSK90288` | 966 | CETIS 21 | `ACT-SCTR77257` | 963 | Misma visita / grupo |
| 452 | `ACT-SCBW22460` | 968 | LASALLE ARQ | `ACT-SCHD41399` | 967 | Misma visita / grupo |
| 470 | `ACT-SCLZ69224` | 1044 | Visita guiada libre | `ACT-SCFN14990` | 1043 | Misma visita / grupo |
| 473 | `ACT-SCBK71518` | 1052 | Visita guiada libre | `ACT-SCFP60419` | 1051 | Misma visita / grupo |

---

## 3. Verificación Posterior y Respaldos

- **Operación por lotes:** Se ejecutó mediante `gsheets mutate batch` con el plan `tmp/batch_soraya_substituciones.json`.
- **Relectura nativa:** Se leyó la hoja viva por API (`gsheets readonly read`) y se confirmó que las 26 celdas contienen la marca exacta y que ninguna otra columna de `A:BN` sufrió alteraciones.
- **Límites estrictos:** No se tocaron columnas `BO+` de actividades, `M+` de territorio, ni `Dashboard_Master`.
- **Respaldos privados:** 
  - `respaldo/privado_cargas_2026-11-04/soraya_sustituciones_before.json`
  - `respaldo/privado_cargas_2026-11-04/soraya_sustituciones_verificacion.json`
- **Suite de pruebas:** Se ejecutaron las 42 pruebas de `calidad-datos.test.cjs`, `tablero.test.cjs` y `ficha-actividad.test.cjs`, pasando el **100% (42/42)**.
- **Impacto en indicadores:** Al marcar estas 26 capturas sustituidas, el detector de calidad excluye tanto la captura duplicada como la alerta sobre el registro vigente, resolviendo **42 alertas de identidad** en el tablero.
