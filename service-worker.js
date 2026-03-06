const CACHE_NAME='sifa-qc-v2-cache';
const urlsToCache=['./','./index.html','./manifest.json','./logo_sifa.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
