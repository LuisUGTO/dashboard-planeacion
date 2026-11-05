# Conciliación de Territorio desde Población (Cuatro Casos) — 04/11/2026

Estado: **aplicado y lectura posterior verificada**.

Siguiendo la instrucción de Luis para los casos donde la población es mayor que el territorio y el registro cuenta con una sola fila territorial, se actualizaron las columnas `Cantidad` (J) y `Cantidad_Acceso` (L) en la hoja `Registro_Territorio`, preservando intactas las columnas A:I y K (`Cantidad_Participacion`), respetando el límite operativo A:L.

## 1. Verificación previa y estado en DB

Antes de la escritura se confirmó el estado nativo de las filas en `Registro_Territorio` mediante lectura directa por API con la cuenta conectada:
- `ACT-SCPD08021` (Fila 770): ya había sido actualizada por Luis a 1,990 en Cantidad y Acceso, Participación 0.
- Los cuatro casos restantes permanecían con los valores pendientes anteriores (el intento previo de Codex no se había aplicado).

## 2. Cambios aplicados y verificados

| Fila Sheet | ID_Territorio | ID_Actividad | Nombre Actividad | Cantidad (J) Antes $\rightarrow$ Después | Participación (K) | Acceso (L) Antes $\rightarrow$ Después | Criterio / Suma Población |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **164** | `cc9907d0` | `ACT-SCMV29363` | Identiarte: Taller de cartoneria | 2 $\rightarrow$ **3** | `''` (vacío) | 2 $\rightarrow$ **3** | Población Fila 229: 3 (taller infantil). |
| **650** | `ef2c77b2` | `ACT-SCUO63965` | Matinata | 195 $\rightarrow$ **197** | 0 | 195 $\rightarrow$ **197** | Población Filas 1192-1195: suma 197, Part. 0. |
| **768** | `03b9d962` | `ACT-SCYP51812` | Cantatas Clausura FESTIVAL BACH | 164 $\rightarrow$ **361** | 0 | 164 $\rightarrow$ **361** | Población Filas 1475-1477: suma 361, Part. 0. |
| **1510** | `2aa7b1cc` | `ACT-SCDD82613` | Visita escolar | 32 $\rightarrow$ **35** | `''` (vacío) | 32 $\rightarrow$ **35** | Población Filas 2281-2282: suma 35, Part. vacía. |

### Verificación nativa posterior
Se realizó una relectura celda por celda de las cuatro filas modificadas en `Registro_Territorio`. Se confirmó que los valores J y L cambiaron exactamente a los esperados, mientras que las columnas A:I y K conservaron sus valores íntegros sin corrimientos, duplicaciones ni borrados.

## 3. Caso pendiente para decisión: `ACT-SCMI05636` («abece»)

- **Fila 335 de `Registro_Territorio` (`ID_Territorio`: `d8507719`):** Cantidad 8, Participación 3, Acceso 5.
- **Filas 540 y 541 de `Registro_Poblacion`:**
  - Fila 540: Jóvenes (18 a 29 años), Hombre $\rightarrow$ Part. 1, Acceso 4, Población 5.
  - Fila 541: Adultos (30 a 59 años), Mujer $\rightarrow$ Part. 3, Acceso 8, Población 11.
  - **Totales en Población:** Participación = 4 ($1 + 3$), Acceso = 12 ($4 + 8$), Total Población = 16 ($5 + 11$).
- **Opciones:**
  - *Opción 1:* Actualizar `Registro_Territorio` a Cantidad = 16, Participación = 4, Acceso = 12 ($4 + 12 = 16$).
  - *Opción 2:* Mantener sin cambio y canalizar a revisión/cancelación por sospecha fundada de captura de prueba (nombre `abece`, descripción `fgggggggfd`, recinto Casa Diego Rivera en Guanajuato asignado al municipio de Acámbaro y otra comunidad `ftgfdgfdg`).

## 4. Recálculo de Indicadores tras la aplicación

- **Discrepancias (diferencias):** Reducción de 5 a **1** (quedando únicamente `ACT-SCMI05636`).
- **Posibles duplicaciones / identidad:** **284** (sin variación).
- **Pruebas automatizadas:** 42/42 pasaron exitosamente (`tests/calidad-datos.test.cjs`, `tests/tablero.test.cjs`, `tests/ficha-actividad.test.cjs`).
- **Respaldos privados:** `respaldo/privado_cargas_2026-11-04/territorio_4_before.json` y `territorio_4_verificacion.json`.
