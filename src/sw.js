

var CACHE_NAME = 'UIDeve-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
];

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(CACHE_NAME).then(function(cache) {
     return cache.addAll(urlsToCache);
   })
 );
});

self.addEventListener('fetch', function(event) {
  //console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
