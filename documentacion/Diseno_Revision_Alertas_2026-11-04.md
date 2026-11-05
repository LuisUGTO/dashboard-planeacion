# Confirmación de alertas revisadas — diseño pendiente

Estado: diseño inicial, no implementado ni desplegado. El tablero actual calcula las alertas a partir de las cinco hojas y no dispone de un registro compartido de revisiones.

La revisión debe identificar la actividad y la categoría de alerta, registrar el motivo y la fecha, y conservar una huella de los datos y de los demás registros implicados en esa alerta. Si cambia alguno de esos datos, la revisión debe caducar y la alerta volver a aparecer. Un registro puede tener varias categorías y confirmar una no debe cerrar las demás. Las revisiones confirmadas deben poder consultarse y revertirse, sin modificar los datos originales.

Para que la confirmación se comparta entre equipos se necesita almacenamiento compartido con autorización y control de acceso. No usar Dashboard_Master ni columnas fuera de uso, ni poner credenciales en el navegador. El almacenamiento local del navegador no resuelve ese requisito compartido. Antes de implementar una escritura productiva se debe definir y probar el mecanismo de autenticación, permisos, concurrencia, respaldo y trazabilidad; el tablero actual es de lectura y AppSheet sigue siendo la captura operativa.

Casos de prueba necesarios: confirmación por categoría, cambios en cifras o desgloses, cambios o incorporación de coincidencias, reversión, persistencia entre equipos, permisos y concurrencia. No se han ejecutado pruebas de implementación porque aún no existe.
