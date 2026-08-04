self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('lyra-store').then((cache) => {
      return cache.addAll(['/LYRA/', '/LYRA/index.html', '/LYRA/manifest.json']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
