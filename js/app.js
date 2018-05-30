/*service worker registration*/

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('./service-worker.js', {scope: './'})
		.then(function(registration) {
			console.log('Service Worker Registered', registration);	
		})
		.catch(function(err) {
			console.log('Error in <<Service Worker Registration>>', err);
		})
}


/*When service worker is installing I'm caching all static files 
self.addEventListener('install', function runWhenInstalling(event){
	event.waitUntil(
    caches.open(cacheName).then(function(cache) {
     	 return cache.addAll(fileArr);
    })
  );
});
*/

/**
 * Service Worker

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register(`${repository}/sw.js`,  {scope: `${repository}/`}).then(function(reg) {
        return;
      }).catch(function(err) {
        console.log('ServiceWorker registration failed!');
      });
    });
  } else {
    return;
  }
}

registerServiceWorker();
 */