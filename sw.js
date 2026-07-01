self.addEventListener('install', (event) => {
    console.log('Service Worker устанавливается');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});