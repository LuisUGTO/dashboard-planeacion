from pathlib import Path
import json, sys, re, unicodedata
from collections import Counter, defaultdict
from datetime import datetime, date
sys.stdout.reconfigure(encoding='utf-8')
j=json.loads((Path(__file__).parent/'inventario.json').read_text(encoding='utf-8'))
db=j['DB_Sistema_Cultura_GTO_V1.xlsx']; src=j['resumen mio, DGPA.xlsx']
def norm(x):
    s=unicodedata.normalize('NFKD',str(x or '').lower())
    return re.sub(r'\s+',' ',''.join(c for c in s if not unicodedata.combining(c))).strip()
def rows(book,s):return book[s]['data'][1:]
def countcol(s,c):return Counter(str(x['values'].get(c,'')) for x in rows(db,s))
for s in ['Cat_Grupo_Etario','Cat_Genero','Cat_Grupo_Prioritario','Cat_Municipio','Cat_Recintos']:
    print('\nCAT',s)
    print(json.dumps(rows(db,s),ensure_ascii=False))
print('\nALIGNMENT TEATROS')
for x in rows(db,'Cat_Alineacion'):
    v=x['values']
    if v.get('B') in ['PB3574','QC4140','QC4142'] or 'produccion' in norm(v.get('D')):
        print(x)
print('\nDB ACTIVITIES')
acts=[x for x in rows(db,'Registro_Actividades') if x['values'].get('A')]
print('n',len(acts),'keys dup',[x for x,n in countcol('Registro_Actividades','A').items() if n>1])
print('directions',countcol('Registro_Actividades','I'))
prod=[]
for x in acts:
    v=x['values']
    if 'produccion' in norm(v.get('I')) or any(t in norm(v.get('M')) for t in ['matinata','sinfonietta','purisima','tango','teatro']):
        prod.append(x)
print('THEATRE CANDIDATES',json.dumps(prod,ensure_ascii=False))
ids={x['values']['A'] for x in acts}
for s in ['Registro_Territorio','Registro_Poblacion','Regitro_Evidencia']:
    rr=[x for x in rows(db,s) if x['values'].get('A')]
    cnt=Counter(x['values']['A'] for x in rr)
    print('REL',s,'rows',len(rr),'dupkeys',sum(n>1 for n in cnt.values()),'orphan',sum(x['values'].get('B') not in ids for x in rr))
    print('SAMPLE',json.dumps(rr[:2],ensure_ascii=False))
print('POB OPTIONS', {c:dict(countcol('Registro_Poblacion',c)) for c in ['C','D','E']})
print('\nSOURCES')
months={norm(m):i for i,m in enumerate(['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],1)}
def parse_date(x):
    s=norm(x)
    ma=re.search(r'(\d{1,2})\s+(?:de\s+)?([a-z]+)\s+(?:de\s+)?(20\d\d)',s)
    if ma and ma[2] in months:
        try:return date(int(ma[3]),months[ma[2]],int(ma[1])).isoformat()
        except ValueError:return None
    if re.match(r'^20\d\d-\d\d-\d\d',s):return s[:10]
    return None
allr={}
for sn in ['programa ene-ago 2026','julio - sep','Hoja3','Hoja4']:
    main=sn.startswith('programa')
    cs={'date':'H','time':'I','event':'J','artist':'K','discipline':'O','venue':'P','city':'Q','prog':'T','female':'AA','male':'AB','total':'AK'} if main else {'date':'A','time':'B','event':'C','artist':'D','discipline':'H','venue':'I','city':'J','prog':'M','female':'T','male':'U','total':'AD'}
    rr=[]; unparsed=[]
    for x in src[sn]['data'][2:]:
        v=x['values']; dt=parse_date(v.get(cs['date']))
        if not(v.get(cs['date']) and v.get(cs['event'])):continue
        if not dt:unparsed.append(x);continue
        d={k:v.get(c) for k,c in cs.items()};d.update(row=x['row'],date=dt,raw=v)
        d['key']='|'.join(norm(d[k]) for k in ['date','time','event','venue'])
        rr.append(d)
    allr[sn]=rr
    dates=[x['date'] for x in rr]
    bad=[{'row':x['row'],'women':x['female'],'men':x['male'],'total':x['total']} for x in rr if all(isinstance(x[c],(float,int)) for c in ['female','male','total']) and x['female']+x['male']!=x['total']]
    print(sn,'parsed',len(rr),'range',min(dates),max(dates),'unparsed',json.dumps(unparsed,ensure_ascii=False))
    print('cities',Counter(x['city'] for x in rr))
    print('disciplines',Counter(x['discipline'] for x in rr),'programs',Counter(x['prog'] for x in rr))
    print('badgender',bad,'zero total',sum(x['total']==0 for x in rr),'blanktotal',sum(x['total'] is None for x in rr),'future',sum(x['date']>'2026-10-23' for x in rr))
    if main:
        print('codes', {col:dict(Counter(str(x['raw'].get(col,'')) for x in rr)) for col in ['A','B','C','D','E','F','G']})
for a in allr:
    for b in allr:
        if list(allr).index(a)>=list(allr).index(b):continue
        aa={x['key']:x for x in allr[a]}; bb={x['key']:x for x in allr[b]}
        common=aa.keys()&bb.keys()
        diff=[(aa[k]['row'],bb[k]['row'],aa[k]['total'],bb[k]['total']) for k in common if aa[k]['total']!=bb[k]['total']]
        print('OVERLAP',a,b,len(common),'different totals',sorted(diff))
(Path(__file__).parent/'fuente_parseada.json').write_text(json.dumps(allr,ensure_ascii=False,indent=2),encoding='utf-8')
