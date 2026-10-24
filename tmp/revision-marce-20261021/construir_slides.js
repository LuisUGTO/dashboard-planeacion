async function construir(presentation, logo) {
  const azul='#004B87', celeste='#69B3E7', gris='#63666A', tinta='#182A3A', tenue='#F1F6FA';
  presentation.slides.keep([]);
  presentation.theme.defaultFont='Arial';
  function text(slide,name,txt,x,y,w,h,size=25,color=tinta,bold=false){
    const t=slide.shapes.add({geometry:'textbox',name,position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
    t.text=txt;t.text.style={typeface:'Arial',fontSize:size,color,bold,verticalAlignment:'top',alignment:'left',autoFit:'none',wrap:'square',insets:0};return t;
  }
  function base(title,n,subtitle=''){
    const s=presentation.slides.add({width:1280,height:720,background:{fill:'#FFFFFF'}});
    s.images.add({dataUrl:logo,alt:'Gobierno de la Gente Guanajuato',fit:'contain',position:{left:60,top:24,width:62,height:54}});
    text(s,'encabezado','SECRETARÍA DE CULTURA',140,30,600,24,18,azul,true);
    text(s,'area','Dirección de Planeación',140,54,600,22,16,gris);
    text(s,'titulo',title,60,108,1160,78,42,azul,true);
    if(subtitle)text(s,'subtitulo',subtitle,60,188,1160,42,24,gris);
    text(s,'fuente','Fuente: DB_Sistema_Cultura_GTO_V1. Corte de lectura: 21 oct 2026, 16:33 h.',60,675,1090,22,14,gris);
    text(s,'pagina',String(n).padStart(2,'0'),1160,674,60,24,16,azul,true);
    return s;
  }
  function table(slide,name,values,x,y,width,height,widths,font=23){
    const t=slide.tables.add({rows:values.length,columns:values[0].length,left:x,top:y,width,height,columnWidths:widths,values});
    t.borders.assign({style:'solid',fill:'#D9E2EB',width:0.6});
    for(let r=0;r<values.length;r++)for(let c=0;c<values[0].length;c++){
      const cell=t.getCell(r,c);cell.fill=r===0?azul:r%2===0?tenue:'#FFFFFF';
      cell.text.style={typeface:'Arial',fontSize:r===0?font-1:font,color:r===0?'#FFFFFF':tinta,bold:r===0,alignment:c===0?'left':'center',verticalAlignment:'middle',autoFit:'none',insets:10};
    }
    return t;
  }
  function notes(slide,body){slide.speakerNotes.text=body+'\n\nFuente: https://docs.google.com/spreadsheets/d/1Enq__tSbcolJ7J7PS3qomn5idh9Zh56JdFA9wR9Gkm4/edit\nLectura de las tablas Registro_Actividades, Registro_Territorio, Registro_Poblacion, Regitro_Evidencia y Cat_Alineacion el 21/10/2026 a las 16:33 h de Ciudad de México. Agrupación por ID_Actividad. Uso interno de Planeación.';}
  {
    const s=base('Estado de captura y calidad\nde la información',1);
    text(s,'alcance','Acumulado disponible al 21 de octubre de 2026',60,285,1120,42,29,gris);
    text(s,'numero-actividades','576',60,380,330,100,88,azul,true);
    text(s,'etiqueta-actividades','actividades registradas',60,488,430,42,28,tinta);
    text(s,'numero-areas','6 de 8',640,380,470,100,88,azul,true);
    text(s,'etiqueta-areas','áreas identificadas con captura',640,488,580,42,28,tinta);
    text(s,'objetivo','Revisión ejecutiva para definir reuniones de acompañamiento',60,580,1140,38,27,tinta);
    text(s,'autor','Luis Angel Durán Alvarez  ·  PULSO Q',60,628,1120,24,18,gris);
    notes(s,'La cifra 576 representa filas con ID_Actividad no vacío y único, no personas ni sesiones. Seis de ocho áreas del catálogo tienen registros. Cuatro actividades adicionales figuran como SIN ASIGNAR, ya incluidas en las 576. La tarjeta 7/9 del tablero incluye esta categoría administrativa como séptima categoría activa. No se mide cumplimiento de metas ni personas únicas.');
  }
  {
    const s=base('Participación de las áreas en la captura',2,'Forum y Comunicación Social no tienen actividades registradas');
    const v=[['Área o categoría','Actividades','Última captura'],['Museos, Artes Visuales y Exposiciones','486','21 oct'],['Formación e Investigación','67','7 oct'],['Editorial y Publicaciones','9','6 oct'],['Vinculación y Desarrollo Cultural','5','21 oct'],['Producción Artística','3','7 oct'],['Patrimonio Cultural','2','28 ago'],['Forum','0','Sin registro'],['Comunicación Social','0','Sin registro'],['Sin asignar','4','7 oct']];
    table(s,'captura-direcciones',v,60,244,1160,365,[730,180,250],23);
    text(s,'nota','El 7/9 del tablero incluye “Sin asignar”. Cero registros requiere confirmar alcance y obligación de reporte.',60,626,1150,40,20,gris);
    notes(s,'Las áreas esperadas se obtienen de los valores no vacíos de Direccion en Cat_Alineacion, excluyendo SIN ASIGNAR: ocho. La suma de las filas de la tabla es 576. Última captura significa máximo de Fecha_Captura, no fecha de última edición ni última sincronización. Los datos no prueban incumplimiento. Cat_Alineacion contiene además tres filas sin dirección, filas 48 a 50, excluidas del denominador.');
  }
  {
    const s=base('Pendientes de información por área',3,'310 actividades sin archivo vinculado en el módulo de evidencias');
    const v=[['Área','Registros','Sin\nterritorio','Sin\npoblación','Sin\nevidencia','Diferencias*'],['Museos','486','6','2','273','8 / 479'],['Formación e Investigación','67','0','6','25','52 / 61'],['Editorial y Publicaciones','9','0','7','0','1 / 2'],['Vinculación y Desarrollo','5','5','1','5','No comparable'],['Producción Artística','3','2','3','3','No comparable'],['Patrimonio Cultural','2','1','1','1','1 / 1'],['Sin asignar','4','1','1','3','3 / 3'],['Total','576','15','21','310','65 / 546']];
    table(s,'calidad-direcciones',v,60,243,1160,340,[366,128,139,139,139,249],21);
    text(s,'metodo','* Actividades con cifras distintas / actividades con ambas fuentes. Los pendientes se superponen.',60,615,1160,25,18,gris);
    text(s,'limite','Archivo vinculado no equivale a evidencia validada. Las diferencias requieren aclaración del equipo.',60,646,1160,24,18,gris);
    notes(s,'Se agrupan todas las filas hijas por ID_Actividad antes de sumar. Sin territorio o población significa ausencia de filas relacionadas. Sin evidencia significa ausencia de Archivo_Evidencia no vacío en Regitro_Evidencia. Foto_Evidencia está vacío en las 576 actividades. Existen 291 registros de evidencia asociados a 266 actividades. No se verificaron permisos ni contenido de los archivos. Diferencias: 65 de 546 actividades con ambos registros y totales numéricos tienen suma territorial diferente de suma demográfica. Las 30 actividades restantes carecen de una o ambas fuentes. No se suman ambas fuentes para estimar personas. No comparable no significa sin problemas.');
  }
  {
    const s=base('Propuesta para las primeras dos reuniones',4,'Selección por volumen de pendientes y frecuencia de diferencias');
    text(s,'museos-titulo','01  Museos, Artes Visuales y Exposiciones',60,255,1160,46,32,azul,true);
    text(s,'museos-dato','273 de 486 actividades sin evidencia vinculada (56.2%)',60,312,1160,38,29,tinta,true);
    text(s,'museos-objetivo','Objetivo: acordar el respaldo documental y revisar los casos sin territorio o población.',60,360,1140,64,25,gris);
    text(s,'formacion-titulo','02  Formación e Investigación',60,448,1160,45,32,azul,true);
    text(s,'formacion-dato','52 de 61 actividades comparables con diferencias (85.2%)',60,504,1160,38,29,tinta,true);
    text(s,'formacion-objetivo','Objetivo: aclarar el conteo por actividad y el desglose demográfico. Hay 25 actividades sin evidencia.',60,553,1140,65,25,gris);
    text(s,'decide','Propuesta para decisión de Planeación. Patrimonio requiere una aclaración puntual por separado.',60,632,1160,29,20,gris);
    notes(s,'No se trata de un ranking de desempeño. Museos concentra 486/576 actividades (84.4%) y 273/310 de los faltantes documentales (88.1%). Formación concentra 52/65 diferencias detectadas (80.0%), con una tasa 52/61 entre comparables. Marce debe confirmar la convocatoria. Patrimonio tiene un caso de diferencia absoluta de 49,254 entre territorio y población, que requiere aclarar alcance, periodo y fuente.');
  }
  {
    const s=base('Acuerdos propuestos para el seguimiento',5,'Cada reunión debe cerrar con responsable, pendiente y fecha de revisión');
    const v=[['Frente','Resultado esperado'],['Museos','Vinculación de evidencias y revisión de registros incompletos'],['Formación e Investigación','Criterio de conteo y lista de diferencias por aclarar'],['Forum y Comunicación Social','Confirmación del alcance y enlace responsable de captura'],['Planeación','Asignación de 4 actividades y revisión de 3 metas sin dirección'],['Soporte técnico','Revisión de fórmulas de indicadores antes de su uso']];
    table(s,'acuerdos',v,60,245,1160,290,[405,755],23);
    text(s,'propuesta-plazo','Seguimiento sugerido: responsables en reunión y primer corte de atención en cinco días hábiles.',60,583,1140,66,25,tinta);
    notes(s,'Los plazos son una propuesta y no un compromiso institucional confirmado. Se debe preservar el historial. Los equipos validarán cada observación antes de corregirla. No se hicieron cambios en la base ni en el código del tablero. La evidencia de errores de cálculo de Indicador_Oficial corresponde a la lectura de las celdas y requiere atención técnica, no atribución automática a los capturistas.');
  }
  {
    const s=base('Anexo 1  Casos para aclaración',6,'Ejemplos trazables por identificador de actividad');
    const v=[['Área y actividad','Territorio','Población','Diferencia'],['Patrimonio: Cañada de la Virgen\nACT-SCBV52724','49,465','211','49,254'],['Formación: La Cocina del Noreste\nACT-SCWH81648','252','1,512','-1,260'],['Museos: Lectura de oráculos griegos\nACT-SCYI34868','96','0','96']];
    table(s,'casos',v,60,246,1160,270,[674,162,162,162],24);
    text(s,'pregunta','Pregunta de trabajo: ¿ambas fuentes reportan el mismo universo, periodo y criterio de conteo?',60,552,1150,72,29,azul,true);
    text(s,'advertencia','Diferencia = territorio menos población. Estos casos son alertas de revisión, no errores confirmados.',60,636,1150,27,19,gris);
    notes(s,'Registro_Actividades: casos en filas 331, 469 y 293 respectivamente. Totales calculados mediante suma de Cantidad en Registro_Territorio y Cantidad_Poblacion en Registro_Poblacion, enlazadas por ID_Actividad. Patrimonio: nombre completo Reporte de visitantes presenciales y virtuales en la Zona Arqueológica de Cañada de la Virgen en SMA., inicio 01/01/2026, fin 30/06/2026. Formación: XXV Concurso - Muestra. La Cocina del Noreste, fecha 25/09/2026. Museos: Lectura dramatizada de oráculos griegos, fecha 25/07/2026. No se determina cuál cifra es correcta con esta revisión.');
  }
  {
    const s=base('Anexo 2  Alcance del corte y cautelas',7);
    text(s,'rango-captura','Captura en plataforma',60,227,540,40,30,azul,true);
    text(s,'valor-captura','4 jun a 21 oct de 2026',60,280,555,40,30,tinta);
    text(s,'rango-actividad','Inicio de actividades reportadas',660,227,560,40,30,azul,true);
    text(s,'valor-actividad','1 ene a 11 oct de 2026',660,280,560,40,30,tinta);
    text(s,'fecha-fin','Algunos registros terminan después del corte, incluso en 2027. Las 576 actividades son registros acumulados, no actividades concluidas.',60,350,1160,76,26,gris);
    text(s,'alerta-calculo','Alerta técnica de indicadores oficiales',60,460,1160,42,32,azul,true);
    text(s,'detalle-alerta','Indicador_Oficial presenta #N/A en las 576 actividades. Nombre_Indicador presenta #ERROR! en 546 y está vacío en 30.',60,514,1160,74,27,tinta);
    text(s,'limite-interpretacion','Estos campos requieren revisión técnica antes de su uso. No equivalen a un error de captura de cada equipo.',60,610,1160,49,22,gris);
    notes(s,'Rangos calculados a partir de Fecha_Captura y Fecha_Inicio. La última captura registrada es 21/10/2026 14:21:45. El corte de lectura es 16:33 h. Existen fechas de fin posteriores al corte; por ello el informe no certifica actividades concluidas. Se encontraron 0 claves de actividad duplicadas y 0 hijos huérfanos en territorio, población y evidencia. No se encontraron cantidades negativas ni discrepancias participación+acceso vs total en las filas revisadas. Esto no certifica otras dimensiones de calidad. Los errores de indicadores son valores visibles del origen, no estimaciones, y no se usaron como filtro para atribuir pendientes a una dirección.');
  }
}
