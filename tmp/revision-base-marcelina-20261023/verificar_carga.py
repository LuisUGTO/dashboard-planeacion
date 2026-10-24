from pathlib import Path
from datetime import datetime
from collections import defaultdict
import json, openpyxl, hashlib, re, sys
sys.stdout.reconfigure(encoding='utf-8')
TMP=Path(__file__).parent;ROOT=TMP.parents[1]
d=json.loads((TMP/'carga.json').read_text(encoding='utf-8'))
out=Path(d['out'])/'Carga_Marcelina_Enero_Agosto_2026.xlsx'
w=openpyxl.load_workbook(out,data_only=False,read_only=False)
assert w.sheetnames==list(d['sheets'])
all_ids=[]
for name,p in d['sheets'].items():
    s=w[name]; cols=len(p['headers']); expected=[p['headers']]+p['rows']
    assert [s.cell(1,c+1).value for c in range(cols)]==p['headers'],name
    for ri,row in enumerate(expected,1):
        for ci,val in enumerate(row,1):
            c=s.cell(ri,ci)
            if ri>1 and p['headers'][ci-1] in ['Fecha_Captura','Fecha_Inicio','Fecha_Fin'] and val:
                target=str(val)[:19] if p['headers'][ci-1]=='Fecha_Captura' else str(val)[:10]+'T00:00:00'
                assert isinstance(c.value,datetime),(name,c.coordinate,c.value)
                # XLSX serial dates are binary floats; allow <=2 ms serialization rounding.
                assert abs((c.value-datetime.fromisoformat(target)).total_seconds())<=.002,(name,c.coordinate,c.value,target)
            else:assert c.value==val,(name,c.coordinate,c.value,val)
            assert c.data_type!='f',(name,c.coordinate,'formula inesperada')
            assert c.data_type!='e',(name,c.coordinate,'error de Excel')
    assert s.sheet_state=='visible'
    all_ids += [r[0] for r in p['rows']]
assert len(all_ids)==len(set(all_ids))
base=openpyxl.load_workbook(ROOT/'archivos_base/DB_Sistema_Cultura_GTO_V1.xlsx',data_only=True,read_only=True)
old_ids=set();old_folios=set()
for name in d['sheets']:
    for row in base[name].iter_rows(min_row=2,values_only=True):
        if row[0]:old_ids.add(str(row[0]))
        if name=='Registro_Actividades' and row[1]:old_folios.add(str(row[1]))
assert not old_ids.intersection(all_ids)
act=w['Registro_Actividades'];heads=d['sheets']['Registro_Actividades']['headers'];ac={h:i for i,h in enumerate(heads)}
vals=list(act.iter_rows(min_row=2,max_row=243,max_col=66,values_only=True))
assert all(r[ac['Usuario_Registra']]=='machagoya@guanajuato.gob.mx' for r in vals)
assert len({r[ac['Folio']] for r in vals})==242
assert not {r[ac['Folio']] for r in vals}&old_folios
assert all(re.fullmatch(r'ACT-SC[A-Z]{2}\d{5}',r[0]) for r in vals)
assert all(re.fullmatch(r'SC-\d{6}-\d{6}',r[1]) for r in vals)
ids={r[0] for r in vals}
pop=defaultdict(lambda:defaultdict(float)); terr={}
for row in w['Registro_Poblacion'].iter_rows(min_row=2,max_row=567,max_col=8,values_only=True):
    assert row[1] in ids
    assert row[6]==row[7] and row[5]==0
    pop[row[1]][row[3]]+=row[7]
for row in w['Registro_Territorio'].iter_rows(min_row=2,max_row=243,max_col=12,values_only=True):
    assert row[1] in ids
    assert row[9]==row[11]
    terr[row[1]]=row[9]
for x in d['lineage']:
    raw=x['datos_fuente'];aid=x['id_actividad']
    for c,sex in [('AA','Mujer'),('AB','Hombre')]:
        if isinstance(raw.get(c),(int,float)):assert pop[aid][sex]==raw[c],(x['fila_fuente'],sex)
    assert terr[aid]==raw.get('AK')
for name,digest in d['summary']['sha256_fuentes'].items():
    assert hashlib.sha256((ROOT/'archivos_base'/name).read_bytes()).hexdigest()==digest
result={'verificacion':'correcta','hojas':len(w.sheetnames),'conteos':d['summary']['conteos'],
 'ids_unicos_sin_coincidencias':len(all_ids),'folios_unicos':242,'usuario_correcto':242,
 'encabezados_y_valores':'coinciden con la preparación','fuentes_originales':'sin cambios',
 'validacion_AppSheet':'no ejecutada','pendientes_clave_proceso':d['summary']['actividades_sin_clave_proceso']}
(TMP/'verificacion.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
