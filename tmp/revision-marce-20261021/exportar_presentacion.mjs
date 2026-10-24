import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import vm from 'node:vm';
import {Presentation,PresentationFile} from 'file:///C:/Users/luisa/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';
const root='D:/Proyectos/dashboard-planeacion';
const build=path.join(root,'tmp/revision-marce-20261021');
const out=path.join(root,'entregables/revision_ejecutiva_2026-10-21');
const skill='C:/Users/luisa/.codex/plugins/cache/openai-primary-runtime/presentations/26.1020.11127/skills/presentations';
process.env.RUNTIME_NODE_MODULES='C:/Users/luisa/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
process.env.RUNTIME_NODE='C:/Users/luisa/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe';
await fs.mkdir(path.join(build,'slides'),{recursive:true});
const fn=vm.runInThisContext((await fs.readFile(path.join(build,'construir_slides.js'),'utf8'))+'\nconstruir;');
const presentation=Presentation.create({slideSize:{width:1280,height:720}});
await fn(presentation,'data:image/png;base64,'+(await fs.readFile(path.join(root,'assets/identidad/Logo.png'))).toString('base64'));
for(const [i,s] of presentation.slides.items.entries()){
 const blob=await presentation.export({slide:s,format:'png',scale:1.25});
 await fs.writeFile(path.join(build,'slides',`slide-${i+1}.png`),new Uint8Array(await blob.arrayBuffer()));
 console.log(`Render ${i+1}/7`);
}
const staging=path.join(build,'finalizer');await fs.mkdir(staging,{recursive:true});
const candidate=path.join(staging,'candidate.pptx');
await (await PresentationFile.exportPptx(presentation)).save(candidate);
const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const result=await finalizePresentation({
 workspaceDir:root,candidatePath:candidate,finalPath:path.join(out,'Presentacion_Ejecutiva_Captura_y_Calidad_2026-10-21_FINAL.pptx'),
 pythonExecutable:'C:/Users/luisa/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe',
 integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),
 layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),
 layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit',...[2,3,5,6].flatMap(i=>['--require-native-table-slide',String(i)])],
 explicitTotalSlideCount:7,requiredNativeTableOwnerSlides:[2,3,5,6],requiredNativeChartOwnerSlides:[],
 fontPolicy:{basis:'design',families:['Arial']},verifyArtifactToolImport:true,
 receiptPath:path.join(staging,'validation_final.json')
});
console.log(JSON.stringify(result));
