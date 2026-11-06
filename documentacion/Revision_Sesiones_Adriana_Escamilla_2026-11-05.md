# Dos avisos de sesiones revisados — 05/11/2026

Estado: implementado localmente; sin publicación ni cambios en DB. Adriana confirmó el 03/11 que las 1020 sesiones de ACT-SCOG94069 y las 170 de ACT-SCIN39392 son un cálculo de clases por municipio y semanas del primer semestre. Es una declaración del área, no comprobación individual de cada sesión.

El detector deja de emitir únicamente el aviso de 100 o más sesiones para esos dos registros si coinciden ID, periodo 20/03–30/06, cantidad y texto de confirmación. Si cambia cualquiera, el aviso vuelve. Otras alertas, incluida la coincidencia entre sesiones y público, permanecen independientes. No se modifican cantidades, registros ni fuentes.

Recálculo de la lectura de DB del 05/11: Revisar cantidades 66→64; identidad 242 sin cambios. Las 43 pruebas pertinentes pasaron. No se verificó navegador, red o exportación tras esta modificación, ni se publicó; actualizar index.html y assets/js/calidad-datos.js conjuntamente al desplegar, respetando los cambios locales existentes.
