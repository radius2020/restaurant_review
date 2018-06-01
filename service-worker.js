

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
	'./data/restaurants.json',
	'./css/styles.css',
	'./css/access_response_styles.css',
	'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic,700italic',
	'./img/1.jpg',
	'./img/2.jpg',
	'./img/3.jpg',
	'./img/4.jpg',
	'./img/5.jpg',
	'./img/6.jpg',
	'./img/7.jpg',
	'./img/8.jpg',
	'./img/9.jpg',
	'./img/10.jpg',
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
	/*console.log("[Service Worker] fetch:", e.request.url);*/
});

