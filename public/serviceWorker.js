const CACHE_NAME = 'version-1'
const D_CACHE_NAME = 'd-version-1'
const urlsToCache = [
	'index.html',
	'offline.html',
	'/static/js/main.chunk.js',
	'/static/js/0.chunk.js',
	'/static/js/bundle.js',
	'/'
]

self.addEventListener('install', async (event) => {
	const cache = await caches.open(CACHE_NAME)
	await cache.addAll(urlsToCache)
})

self.addEventListener('active', async (event) => {

	// const cacheNames = await caches.keys()
	// await Promise.all(
	// 	cacheNames
	// 		.filter(name => name !== CACHE_NAME)
	// 		.filter(name => name !== D_CACHE_NAME)
	// 		.map(name => caches.delete(name))
	// )

	// const cacheWhiteList = []
	// cacheWhiteList.push(CACHE_NAME)
	// caches.keys()
	// 	.then(cacheNames => Promise.all(
	// 		cacheNames.map(cacheName => {
	// 			if (!cacheWhiteList.includes(cacheName)) {
	// 				return caches.delete(cacheName)
	// 			}
	// 		})
	// 	))
})

self.addEventListener('fetch', (event) => {

	const {request} = event

	const url = new URL(request.url)

	if(url.origin === location.origin) {
		event.respondWith(cacheFirst(request))
	} else {
		event.respondWith(networkFirst(request))
	}

	// console.log('Fetch ', event.request.url);


	// event.respondWith(
	// 	caches.match(event.request)
	// 		.then(() => {
	// 			return fetch(event.request)
	// 				.catch(() => caches.match('offline.html'))
	// 		})
	// )
})

const cacheFirst = async request => {
	const cached = await caches.match(request)
	return cached ?? await fetch(request)
}

const networkFirst = async (request) => {

	const cache = await caches.open(D_CACHE_NAME)

	try {
		const response = await fetch(request)
		await cache.put(request, response.clone())
		return response
	} catch (e) {
		const cached = await cache.match(request)
		return cached ?? await caches.match('offline.html')
	}
}