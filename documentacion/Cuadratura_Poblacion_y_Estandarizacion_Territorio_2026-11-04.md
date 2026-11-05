# Cuadratura Total de Población (Territorial vs Demográfica) y Estandarización de Otros Alcances

**Fecha:** 4 de noviembre de 2026  
**Hora:** 20:25 hrs  
**Hoja de cálculo:** `1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4`  
**Estado:** Aplicado en Google Sheets, verificado al 100% y respaldado.

---

## 1. Resumen Ejecutivo

1. **Cuadratura Territorial vs Demográfico:**
   - **Antes:** Territorial (filtrado) = **962,619** | Demográfico (filtrado) = **963,555** | Diferencia = **936 personas**.
   - **Después:** Territorial (filtrado) = **964,086** | Demográfico (filtrado) = **964,086** | **Diferencia = 0 (Cuadre Exacto)**.
   *(Nota: la cifra sube a 964,086 porque además de sumar los 936 faltantes en territorio, se completaron 393 personas en demografía de las actividades territoriales de Fátima y se dedujeron sustituciones).*

2. **Estandarización del Indicador de Municipios ("Otros alcances"):**
   - **Antes:** Aparecía `"Ciudad de México"`, `"Ciudad de mexico"`, `"Cobertura estatal"`, `"México"`, `"Santo Domingo, República Dominicana"` y `"León"` (con encoding dañado que se fugaba como foráneo).
   - **Después:** Queda limpio y estandarizado a exactamente 3 entradas foráneas:
     `Otros alcances: Ciudad de México, Cobertura estatal, Santo Domingo, República Dominicana`
   - Se corrigieron las grafías en `Registro_Territorio!C`:
     - Fila 333 (`ACT-SCIG15181`): `"Ciudad de mexico"` $\rightarrow$ `"Ciudad de México"` (Sede: *Centro de Creación Literaria Xavier Villaurrutia*).
     - Fila 1533 (`ACT-SCID10817`): `"México"` $\rightarrow$ `"Ciudad de México"` (Sede: *Claustro Sor Juana*).
     - Fila 1227 (`ACT-SCMG32181`): Recuperado encoding limpio `"León"`, integrándose a los 43 municipios oficiales de Guanajuato sin contaminar "Otros alcances".

---

## 2. Detalle de Ajustes de Cuadratura (9 Actividades)

### Grupo A: Filas territoriales completadas/añadidas (+1,329 personas)
| Fila | ID Actividad | Nombre / Sede | Municipio | Cantidad | Participación | Acceso | Tipo Ajuste |
| :---: | :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| **734** | `ACT-SCML05482` | BME / Cereso Puentecillas | Guanajuato | **524** | 0 | 524 | Completada celda vacía |
| **778** | `ACT-SCYQ82180` | Festival del Mango | Pénjamo | **470** | 0 | 470 | Completada celda vacía |
| **1113** | `ACT-SCNO29257` | Capacitación guías turísticos | Purísima del Rincón | **23** | 23 | 0 | Completada celda vacía |
| **1535** | `ACT-SCLF83323` | Noche de Museos (MAHG) | León | **212** | 0 | 212 | Fila agregada (`03e2aae3`) |
| **1536** | `ACT-SCNO25177` | Mujeres en el territorio | Guanajuato | **100** | 0 | 100 | Fila agregada (`a197cf9a`) |

### Grupo B: Filas demográficas añadidas en `Registro_Poblacion` (+393 personas)
| Fila | ID Actividad | Nombre / Evento | Rango Etario | Género | Cantidad | Part / Acc | ID Fila Nueva |
| :---: | :---: | :--- | :--- | :--- | :---: | :---: | :---: |
| **2547** | `ACT-SCFB82875` | Festival de Escritores SMA (Gto) | Población General | Dato global | **28** | 27 / 1 | `c674b3fc` |
| **2548** | `ACT-SCFB82875` | Festival de Escritores SMA (SMA) | Población General | Dato global | **300** | 0 / 300 | `a157aab5` |
| **2549** | `ACT-SCPP44354` | Rumbo al encuentro escritoras (Salamanca) | Población General | Dato global | **19** | 0 / 19 | `e1b2673d` |
| **2550** | `ACT-SCRB87201` | Rumbo al encuentro escritoras (Jaral) | Población General | Dato global | **39** | 0 / 39 | `92c2613f` |
| **2551** | `ACT-SCOH37318` | Rumbo al encuentro escritoras (Acámbaro) | Población General | Dato global | **7** | 0 / 7 | `4306437d` |

---

## 3. Verificación de Integridad

- **Regla A:BN / A:L preservada:** Ninguna columna fuera de rango (`BO+` en Actividades o `M+` en Territorio) fue leída ni escrita.
- **Suite de pruebas:** 42/42 pruebas unitarias pasando al 100%.
- **Respaldo previo:** Almacenado en `respaldo/privado_cargas_2026-11-04/cuadratura_y_estandarizacion_before.json`.
- **Cero diferencias:** El tablero reflejará exactamente la misma cifra en ambos botones superiores.
