const CACHE_NAME = 'controle-validade-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  'https://drive.google.com/uc?export=view&id=1RQjNjPZxp3MzXdBFvlMKvCZJv7F1Pu08' // ícone
];

// Instala o Service Worker e armazena os assets em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

// Intercepta as requisições e serve os assets do cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
