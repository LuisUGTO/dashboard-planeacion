from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as E
import json, sys, posixpath, hashlib
sys.stdout.reconfigure(encoding='utf-8')
ROOT=Path(__file__).resolve().parents[2]
NS={'x':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
MAIN='{'+NS['x']+'}'
books={}
for filename in ['Captura Plataforma Gestión de Metas Cultura .xlsx','Avance de metas DGVDC 2026.xlsx']:
    p=ROOT/'archivos_base'/filename
    z=ZipFile(p)
    ss=[]
    if 'xl/sharedStrings.xml' in z.namelist():
        ss=[''.join(el.itertext()) for el in E.fromstring(z.read('xl/sharedStrings.xml')).findall('x:si',NS)]
    rel={x.attrib['Id']:x.attrib['Target'] for x in E.fromstring(z.read('xl/_rels/workbook.xml.rels'))}
    sheets={}
    print('\nFILE',filename)
    for sh in E.fromstring(z.read('xl/workbook.xml')).findall('x:sheets/x:sheet',NS):
        rid=sh.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']
        target=rel[rid];xmlpath=target.lstrip('/') if target.startswith('/') else posixpath.normpath('xl/'+target)
        xml=E.fromstring(z.read(xmlpath))
        rows=[]
        for r in xml.findall('x:sheetData/x:row',NS):
            vals={};formulas={}
            for c in r.findall('x:c',NS):
                v=c.find('x:v',NS);f=c.find('x:f',NS)
                typ=c.attrib.get('t');value=None
                if typ=='inlineStr':value=''.join(c.find('x:is',NS).itertext())
                elif v is not None:
                    raw=v.text
                    if typ=='s':value=ss[int(raw)]
                    elif typ=='b':value=raw=='1'
                    elif typ in ['str','e','d']:value=raw
                    elif raw is not None:
                        try:value=float(raw);value=int(value) if value.is_integer() else value
                        except ValueError:value=raw
                addr=c.attrib['r'];col=''.join(x for x in addr if x.isalpha())
                if value is not None:vals[col]=value
                if f is not None:formulas[col]=f.text
            if vals or formulas:rows.append({'row':int(r.attrib['r']),'values':vals,'formulas':formulas})
        sheets[sh.attrib['name']]={'state':sh.attrib.get('state','visible'),'data':rows,'merged':[m.attrib['ref'] for m in xml.findall('x:mergeCells/x:mergeCell',NS)]}
        print('SHEET',sh.attrib['name'],sh.attrib.get('state','visible'),'nonemptyrows',len(rows),'lastrow',max([r['row'] for r in rows],default=0))
        print('FIRST',json.dumps(rows[:7],ensure_ascii=False)[:4500])
    books[filename]={'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'sheets':sheets}
(Path(__file__).parent/'inventario.json').write_text(json.dumps(books,ensure_ascii=False,indent=2),encoding='utf-8')
