import fs from 'node:fs/promises';
import path from 'node:path';
import {Workbook,SpreadsheetFile} from '@oai/artifact-tool';

const here=path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/,'$1'));
const data=JSON.parse(await fs.readFile(path.join(here,'carga.json'),'utf8'));
await fs.mkdir(data.out,{recursive:true});
const wb=Workbook.create();
function col(n){let s='';for(;n;n=Math.floor((n-1)/26))s=String.fromCharCode(65+(n-1)%26)+s;return s;}
const dateCols=new Set(['Fecha_Captura','Fecha_Inicio','Fecha_Fin']);
for(const [name,payload] of Object.entries(data.sheets)){
  const sheet=wb.worksheets.add(name);
  const rows=payload.rows.map(r=>r.map((v,i)=>dateCols.has(payload.headers[i])&&v?new Date(String(v).slice(0,payload.headers[i]==='Fecha_Captura'?19:10)+(payload.headers[i]==='Fecha_Captura'?'Z':'T00:00:00Z')):v));
  const count=rows.length+1, cols=payload.headers.length, end=col(cols);
  const all=sheet.getRange(`A1:${end}${count}`);
  all.values=[payload.headers,...rows];
  all.format.font={name:'Arial',size:10,color:'#1F2937'};
  all.format.verticalAlignment='center';
  all.format.rowHeight=30;
  all.format.columnWidth=22;
  const header=sheet.getRange(`A1:${end}1`);
  header.format.fill='#004B87';header.format.font={name:'Arial',size:10,bold:true,color:'#FFFFFF'};
  header.format.wrapText=true;header.format.rowHeight=46;header.format.horizontalAlignment='center';
  sheet.showGridLines=false;sheet.tabColor='#004B87';
  sheet.freezePanes.freezeRows(1);
  if(rows.length){
    sheet.tables.add(`A1:${end}${count}`,true,name+'Carga');
  }
  for(let i=0;i<cols;i++){
    const c=col(i+1), key=payload.headers[i], r=sheet.getRange(`${c}2:${c}${Math.max(count,2)}`);
    if(key.startsWith('ID_')||key==='Folio'){
      r.setNumberFormat('@');sheet.getRange(`${c}1:${c}${count}`).format.columnWidth=25;
    }
    if(dateCols.has(key)){
      r.setNumberFormat(key==='Fecha_Captura'?'dd/mm/yyyy hh:mm:ss':'dd/mm/yyyy');
      sheet.getRange(`${c}1:${c}${count}`).format.columnWidth=key==='Fecha_Captura'?24:19;
    }
    if(/^(Cantidad|Total_Sesiones|Meta_Anual)/.test(key)){
      r.setNumberFormat('#,##0');r.format.horizontalAlignment='right';
    }
    if(/^(Monto|Costo_Minimo|Costo_Maximo)/.test(key))r.setNumberFormat('#,##0.00');
    if(key==='Usuario_Registra')sheet.getRange(`${c}1:${c}${count}`).format.columnWidth=40;
    if(['Nombre_Actividad','Nombre_Meta','Meta','Nombre_Espacio','Especifique_Espacio','Detalle_Tarifas','Objetivo_PG','Estrategia_PG','Acciones_PG'].includes(key)){
      sheet.getRange(`${c}1:${c}${count}`).format.columnWidth=54;
      r.format.wrapText=true;
    }
    if(['Grupo_Etario','Genero','Grupo_Prioritario','Municipio'].includes(key))sheet.getRange(`${c}1:${c}${count}`).format.columnWidth=32;
    if(key==='Descripcion_Breve'){
      sheet.getRange(`${c}1:${c}${count}`).format.columnWidth=110;
      r.format.wrapText=true;
    }
    if(rows.length && ['Clave_Proceso','Subdisciplina','Promesa_NC','Acciones_PEC','Municipio'].includes(key)){
      r.conditionalFormats.add('containsBlanks',{format:{fill:'#FFF2CC'}});
    }
  }
  if(name==='Registro_Actividades')sheet.getRange(`A2:${end}${count}`).format.rowHeight=105;
}
wb.recalculate();
console.log((await wb.inspect({kind:'sheet',include:'id,name',maxChars:2000})).ndjson);
console.log((await wb.inspect({kind:'table',range:'Registro_Poblacion!A1:H5',include:'values,formulas',tableMaxRows:5,tableMaxCols:8,maxChars:3000})).ndjson);
console.log((await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:20},maxChars:1500})).ndjson);
const out=path.join(data.out,'Carga_Marcelina_Enero_Agosto_2026.xlsx');
await (await SpreadsheetFile.exportXlsx(wb)).save(out);
const previews=[
 ['Registro_Actividades','A1:D5','actividades_ids'],
 ['Registro_Actividades','L1:U4','actividades_detalle'],
 ['Registro_Actividades','AK1:AN4','usuario'],
 ['Registro_Territorio','A1:L7','territorio'],
 ['Registro_Poblacion','A1:H8','poblacion'],
 ['Regitro_Evidencia','A1:E3','evidencia'],
];
for(const [sheetName,range,file] of previews){
 const image=await wb.render({sheetName,range,scale:1,format:'png'});
 await fs.writeFile(path.join(here,file+'.png'),new Uint8Array(await image.arrayBuffer()));
}
console.log(JSON.stringify({output:out,rows:data.summary.conteos}));
