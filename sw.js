const CACHE_NAME = 'lfd-v2-cache-v13';
const PRECACHE_URLS = [
  './',
  './index.html',
  './delegate.html',
  './volunteer.html',
  './program.html',
  './assets/css/style.css',
  './assets/js/app.js',
  './assets/js/html2canvas.min.js',
  './assets/js/logo-data.js',
  './assets/js/volunteer-data.js',
  './assets/images/jw_ic_logo-removebg-preview.png',
  './assets/images/jw_ic_logo_2-removebg-preview.png',
  './assets/images/logo-philippines-2026.png',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Network first, fallback to cache for offline availability
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
            return caches.match('./delegate.html');
          }
        });
      })
  );
});
