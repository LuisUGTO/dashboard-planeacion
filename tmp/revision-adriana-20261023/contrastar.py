from pathlib import Path
import json, openpyxl, unicodedata, re, sys
from collections import defaultdict,Counter
from difflib import SequenceMatcher
sys.stdout.reconfigure(encoding='utf-8')
ROOT=Path(__file__).resolve().parents[2]
j=json.loads((Path(__file__).parent/'inventario.json').read_text(encoding='utf-8'))
cap=j['Captura Plataforma Gestión de Metas Cultura .xlsx']['sheets']
avance=j['Avance de metas DGVDC 2026.xlsx']['sheets']
base=openpyxl.load_workbook(ROOT/'archivos_base/DB_Sistema_Cultura_GTO_V1.xlsx',read_only=True,data_only=True)
cat=list(base['Cat_Alineacion'].values)
def norm(x):return re.sub(r'[^a-z0-9 ]','',re.sub(r'\s+',' ',''.join(c for c in unicodedata.normalize('NFKD',str(x or '').lower()) if not unicodedata.combining(c)))).strip()
detail={};matches=[]
for sn,limit in [('PB3563',9),('PB3562',9),('PB3564',7),('QC4098',8)]:
    rows=[x for x in cap[sn]['data'] if x['row']<limit+1 and isinstance(x['values'].get('E'),(int,float))]
    print('\nCAPTURA',sn,'familias',len(rows))
    detail[sn]=rows
    for x in rows:
        v=x['values'];eq=[(i+2,c) for i,c in enumerate(cat[1:]) if c[0] and norm(c[5])==norm(v['D'])]
        d={'sheet':sn,'row':x['row'],'name':v['D'],'target':v['E'],'matches':[(i,c[0],c[1],c[7]) for i,c in eq]}
        matches.append(d);print(json.dumps(d,ensure_ascii=False))
        for field,dbcol in [('L',8),('M',12),('O',16)]:
            value=v.get(field)
            if value:
                full={c[dbcol] for c in cat[1:] if c[0] and norm(c[dbcol])==norm(value)}
                print('  ALINEACION',field,repr(value),'coincidencias exactas',len(full))
    print('EJES',[(x['row'],x['values'].get('N')) for x in rows])
print('\nCORRESPONDENCIA AVANCE')
for sn in ['PB3563','PB3562','PB3564']:
    for x in avance[sn]['data']:
        v=x['values'];name=v.get('D')
        if not(name and isinstance(v.get('E'),(int,float)) and v.get('F')):continue
        expected=[a for a in detail[sn] if norm(a['values'].get('D'))==norm(name)]
        print(sn,x['row'],'capture_row',[a['row'] for a in expected],'target',v['E'],'monthly_total',sum(v.get(c,0) or 0 for c in 'GHIJKLMNO'),'total_cached',v.get('S'))
print('\nAGENTES Y EJES')
for sn,rows in detail.items():
    for x in rows:
        v=x['values'];print(sn,x['row'],{c:v.get(c) for c in ['J','K','N','P','U']})
print('\nCatalogo cobertura estatal',[(i+1,r[0]) for i,r in enumerate(base['Cat_Municipio'].values) if r[0] and 'estatal' in norm(r[0])])
print('Catalogo acciones con 4.4.2',sorted({r[12] for r in cat[1:] if r[0] and str(r[12]).startswith('4.4.2')}))
(Path(__file__).parent/'contraste.json').write_text(json.dumps(matches,ensure_ascii=False,indent=2),encoding='utf-8')
