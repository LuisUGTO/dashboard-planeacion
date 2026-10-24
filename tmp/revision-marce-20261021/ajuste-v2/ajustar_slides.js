async function ajustar(presentation){
  const s5=presentation.slides.items[4];
  const s7=presentation.slides.items[6];
  const table=s5.tables.items[0];
  if(!table)throw Error('No se encontró la tabla de acuerdos');
  table.deleteRows({index:5,count:1});
  function replace(slide,name,value){
    const shape=slide.shapes.items.find(s=>s.name===name);
    if(!shape)throw Error('No se encontró '+name);
    shape.text=value;
  }
  replace(s7,'alerta-calculo','Cómo leer los pendientes');
  replace(s7,'detalle-alerta','Sin territorio o población: falta un registro relacionado.\nSin evidencia: falta un archivo vinculado.');
  replace(s7,'limite-interpretacion','Las diferencias entre fuentes requieren aclaración. No indican por sí solas que una cifra sea incorrecta.');
  const source='\n\nFuente: https://docs.google.com/spreadsheets/d/1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4/edit\nCorte de lectura: 21/10/2026, 16:33 h de Ciudad de México. Uso interno de Planeación.';
  presentation.slides.items[2].speakerNotes.text='Se agrupan las filas de territorio y población por ID_Actividad antes de sumar cada fuente por separado. Sin territorio o población significa ausencia de filas relacionadas. Sin evidencia significa ausencia de un archivo vinculado en el módulo de evidencias. Hay 291 entradas de evidencia asociadas a 266 actividades. No se revisaron contenido ni permisos de apertura. De las 546 actividades con ambas fuentes y totales numéricos, 65 presentan diferencias. Las 30 restantes carecen de una o ambas fuentes. Los pendientes se superponen. No se suman ambas fuentes para estimar personas.'+source;
  s5.speakerNotes.text='Los plazos son una propuesta, sujetos al acuerdo de las áreas. Cada reunión debe definir responsable, actividades por revisar y fecha de seguimiento. Las áreas deben aclarar las observaciones antes de corregirlas. Cat_Alineacion es un catálogo con 99 entradas de metas y alineación, no captura de actividades. No se modificaron la base ni el dashboard.'+source;
  s7.speakerNotes.text='Las fechas de captura abarcan del 04/06/2026 al 21/10/2026. Los inicios de actividad abarcan del 01/01/2026 al 11/10/2026. Algunos términos de actividad son posteriores al corte, incluso en 2027. Sin registro relacionado no equivale a cero personas. Un archivo vinculado no acredita suficiencia documental. Las diferencias requieren comprobar universo, periodo y criterio de conteo. No se encontraron claves de actividad duplicadas ni hijos huérfanos en las tres tablas relacionadas. Las 99 entradas de Cat_Alineacion son referencias de planeación y no actividades realizadas.'+source;
}
