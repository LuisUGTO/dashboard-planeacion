import json, csv, math
from pathlib import Path
from collections import Counter, defaultdict
from datetime import datetime, date

ROOT=Path(__file__).resolve().parent
src=json.loads((ROOT/'corte_fuente.json').read_text(encoding='utf-8'))
def objects(name,key):
    v=src['tables'][name]
    return [dict(zip(v[0],r))|{'fila':i+2} for i,r in enumerate(v[1:]) if len(r)>v[0].index(key) and str(r[v[0].index(key)]).strip()]
def s(x): return str(x or '').strip()
def num(x):
    t=s(x).replace('\u00a0','').replace(' ','')
    if not t: return None
    try:
        if ',' in t and '.' in t: t=t.replace('.','').replace(',','.')
        elif ',' in t: t=t.replace(',','.')
        return float(t)
    except ValueError: return None
def dt(x):
    for f in ['%d/%m/%Y %H:%M:%S','%d/%m/%Y','%Y-%m-%d','%Y-%m-%d %H:%M:%S']:
        try:return datetime.strptime(s(x),f)
        except ValueError:pass
    return None
A=objects('Registro_Actividades','ID_Actividad')
T=objects('Registro_Territorio','ID_Territorio')
P=objects('Registro_Poblacion','ID_Poblacion')
E=objects('Regitro_Evidencia','ID_Evidencia')
C=objects('Cat_Alineacion','ID_Alineacion')
ids={s(a['ID_Actividad']) for a in A}
assert len(A)==len(ids),'Claves de actividades duplicadas'
maps=[]
for rows in [T,P,E]:
    m=defaultdict(list)
    for r in rows:m[s(r.get('ID_Actividad'))].append(r)
    maps.append(m)
tm,pm,em=maps
dirs=sorted({s(c.get('Direccion')) for c in C if s(c.get('Direccion'))}|{s(a.get('Direccion')) for a in A if s(a.get('Direccion'))})
details=[]
for a in A:
    aid=s(a['ID_Actividad']); ts=tm[aid];ps=pm[aid];es=em[aid]
    tv=[num(t.get('Cantidad')) for t in ts];pv=[num(p.get('Cantidad_Poblacion')) for p in ps]
    st=sum(v for v in tv if v is not None);sp=sum(v for v in pv if v is not None)
    validt=bool(ts) and all(v is not None for v in tv);validp=bool(ps) and all(v is not None for v in pv)
    ev=[e for e in es if s(e.get('Archivo_Evidencia'))]
    cap=dt(a.get('Fecha_Captura'));start=dt(a.get('Fecha_Inicio'));end=dt(a.get('Fecha_Fin'))
    d={'id':aid,'folio':s(a.get('Folio')),'fila':a['fila'],'direccion':s(a.get('Direccion')) or 'VACÍO','nombre':s(a.get('Nombre_Actividad')),'fecha_captura':s(a.get('Fecha_Captura')),'fecha_inicio':s(a.get('Fecha_Inicio')),'fecha_fin':s(a.get('Fecha_Fin')),'territorios':len(ts),'poblaciones':len(ps),'evidencias':len(ev),'total_territorio':st,'total_poblacion':sp,'diferencia':st-sp,'comparable':validt and validp,'sin_territorio':not ts,'sin_poblacion':not ps,'sin_evidencia':not ev,'difiere':validt and validp and abs(st-sp)>0.001,'futura':bool(start and start.date()>date(2026,10,21)),'inicio_invalido':not start,'captura_invalida':not cap,'fin_anterior':bool(start and end and end<start),'esencial_vacio':any(not s(a.get(k)) for k in ['Nombre_Actividad','Fecha_Inicio','Clave_Proceso','Direccion']),'indicador_vacio':not s(a.get('Indicador_Oficial')),'error_formula':any(s(v).startswith(('#N/A','#REF!','#VALUE!','#DIV/0!','#ERROR!','#NAME?','#NUM!')) for v in a.values())}
    details.append(d)
metrics=[]
for dr in dirs:
    ds=[d for d in details if d['direccion']==dr]
    metrics.append({'direccion':dr,'actividades':len(ds),'metas_catalogo':sum(s(c.get('Direccion'))==dr for c in C),'sin_territorio':sum(d['sin_territorio'] for d in ds),'sin_poblacion':sum(d['sin_poblacion'] for d in ds),'sin_evidencia':sum(d['sin_evidencia'] for d in ds),'comparables':sum(d['comparable'] for d in ds),'diferencias':sum(d['difiere'] for d in ds),'diferencia_neta':sum(d['diferencia'] for d in ds),'suma_territorio':sum(d['total_territorio'] for d in ds),'suma_poblacion':sum(d['total_poblacion'] for d in ds),'futuras':sum(d['futura'] for d in ds),'esencial_vacio':sum(d['esencial_vacio'] for d in ds),'indicador_vacio':sum(d['indicador_vacio'] for d in ds),'error_formula':sum(d['error_formula'] for d in ds),'ultima_captura':max([dt(d['fecha_captura']) for d in ds if dt(d['fecha_captura'])],default=None)})
    if metrics[-1]['ultima_captura']:metrics[-1]['ultima_captura']=metrics[-1]['ultima_captura'].isoformat()
bad=[]
for table,rs,total in [('Registro_Territorio',T,'Cantidad'),('Registro_Poblacion',P,'Cantidad_Poblacion')]:
    for r in rs:
        vals=[num(r.get(k)) for k in [total,'Cantidad_Participacion','Cantidad_Acceso']]
        issues=[]
        if any(v is not None and v<0 for v in vals):issues.append('cantidad negativa')
        if vals[0] is None:issues.append('total vacío o no numérico')
        if all(v is not None for v in vals) and abs(vals[1]+vals[2]-vals[0])>.001:issues.append('participación más acceso no coincide con total')
        if issues:bad.append({'tabla':table,'fila':r['fila'],'id_actividad':s(r.get('ID_Actividad')),'valores':vals,'alertas':issues})
caps=[dt(a.get('Fecha_Captura')) for a in A if dt(a.get('Fecha_Captura'))]
starts=[dt(a.get('Fecha_Inicio')) for a in A if dt(a.get('Fecha_Inicio'))]
candidate_groups=defaultdict(list)
for a in A:
    key=tuple(s(a.get(k)).casefold() for k in ['Direccion','Nombre_Actividad','Fecha_Inicio'])
    candidate_groups[key].append(s(a['ID_Actividad']))
dup=[v for v in candidate_groups.values() if len(v)>1]
result={'corte':src['retrievedAt'],'fecha_corte':src['cutoffDate'],'conteos':{'actividades':len(A),'territorio':len(T),'poblacion':len(P),'evidencia':len(E),'catalogo_alineacion':len(C)},'direcciones':metrics,'totales':{k:sum(bool(d[k]) for d in details) for k in ['sin_territorio','sin_poblacion','sin_evidencia','comparable','difiere','futura','inicio_invalido','captura_invalida','fin_anterior','esencial_vacio','indicador_vacio','error_formula']},'rango_captura':[min(caps).isoformat(),max(caps).isoformat()],'rango_actividad':[min(starts).isoformat(),max(starts).isoformat()],'huerfanos':{n:sum(s(r.get('ID_Actividad')) not in ids for r in rs) for n,rs in [('territorio',T),('poblacion',P),('evidencia',E)]},'filas_catalogo_direccion_vacia':[c['fila'] for c in C if not s(c.get('Direccion'))],'alertas_cantidades':bad,'posibles_duplicados':dup,'casos':sorted([d for d in details if d['difiere']],key=lambda d:abs(d['diferencia']),reverse=True)[:15],'sin_asignar':[d for d in details if d['direccion']=='SIN ASIGNAR']}
(ROOT/'resultados.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
with (ROOT/'detalle_actividades.csv').open('w',encoding='utf-8-sig',newline='') as f:
    w=csv.DictWriter(f,fieldnames=details[0].keys());w.writeheader();w.writerows(details)
print(json.dumps(result,ensure_ascii=False,indent=2))
