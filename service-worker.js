

// Cache Name
var cacheName = 'v1'; 

// Files to cache
var cacheFiles = [
	'./',
	'./index.html',
	'./restaurant.html',
	'./js/main.js',
	'./js/dbhelper.js',
	'./js/restaurant_info.js',
	'./js/app.js',
	'./css/styles.css',
	'./css/access_response_styles.css',
	'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic,700italic'
]

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Installed');

    // e.waitUntil Delays the event until the Promise is resolved
    e.waitUntil(

    	// Open the cache
	    caches.open(cacheName).then(function(cache) {

	    	// Add all the default files to the cache
			console.log('[ServiceWorker] Caching cacheFiles');
			return cache.addAll(cacheFiles);
	    })
	); // end e.waitUntil
});

/*
self.addEventListener('install', function(e) {
	console.log("[Service Worker] installed");
});
*/

self.addEventListener('activate', function(e) {
	console.log("[Service Worker] activated");
});
self.addEventListener('fetch', function(e) {
	console.log("[Service Worker] fetch:", e.request.url);
});

