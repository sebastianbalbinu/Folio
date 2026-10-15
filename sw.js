// =====================================================================
//  VERSIÓN DE FOLIO  →  cámbiala CADA VEZ que subas cambios a GitHub
//  (folio-v3 → folio-v4 → folio-v5 ...). Así los celulares ven el aviso
//  "NUEVA VERSIÓN · TOCA PARA ACTUALIZAR".
// =====================================================================
const C='folio-v3';

const F=['./','index.html','manifest.json','lib/epub.min.js','lib/jszip.min.js','fonts/SpaceMono-Regular.woff2','fonts/SpaceMono-Bold.woff2','icon-192.png','icon-512.png','icon-maskable-192.png','icon-maskable-512.png','apple-touch-icon.png','favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(u=>c.add(new Request(u,{cache:'reload'})).catch(()=>{}))))) });
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET'||!r.url.startsWith(self.location.origin))return;
 if(r.mode==='navigate'){
  e.respondWith(caches.match('index.html').then(x=>x||fetch(r)).catch(()=>fetch(r)));return}
 e.respondWith(caches.match(r,{ignoreSearch:true}).then(x=>x||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res})));
});
