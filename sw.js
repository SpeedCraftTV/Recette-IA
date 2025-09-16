/**
 * Service Worker for Recette-IA PWA
 * Implements cache-first strategy for static assets and network-first for HTML
 */

const CACHE_NAME = 'recette-ia-v1';
const STATIC_CACHE = 'recette-ia-static-v1';
const DYNAMIC_CACHE = 'recette-ia-dynamic-v1';

// Determine base path for GitHub Pages
const BASE_PATH = self.location.pathname.includes('/Recette-IA/') ? '/Recette-IA' : '';

// Static assets to cache
const STATIC_ASSETS = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/styles.css`,
  `${BASE_PATH}/main.js`,
  `${BASE_PATH}/manifest.webmanifest`,
  // Module files
  `${BASE_PATH}/data/recipeDatabase.js`,
  `${BASE_PATH}/core/generator.js`,
  `${BASE_PATH}/core/search.js`,
  `${BASE_PATH}/ui/i18n.js`,
  `${BASE_PATH}/ui/ui.js`,
  `${BASE_PATH}/services/analytics.js`,
  `${BASE_PATH}/services/pwa.js`
];

// Offline fallback page
const OFFLINE_PAGE = `${BASE_PATH}/offline.html`;

/**
 * Install event - cache static assets
 */
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[ServiceWorker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[ServiceWorker] All static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[ServiceWorker] Failed to cache static assets:', error);
      })
  );
});

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[ServiceWorker] Activated');
        return self.clients.claim();
      })
  );
});

/**
 * Fetch event - implement caching strategies
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip cross-origin requests unless they're for our assets
  if (url.origin !== self.location.origin) {
    return;
  }
  
  // Handle different types of requests
  if (request.destination === 'document') {
    // Network-first strategy for HTML documents
    event.respondWith(networkFirstStrategy(request));
  } else {
    // Cache-first strategy for static assets
    event.respondWith(cacheFirstStrategy(request));
  }
});

/**
 * Cache-first strategy for static assets
 */
async function cacheFirstStrategy(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('[ServiceWorker] Serving from cache:', request.url);
      return cachedResponse;
    }
    
    // If not in cache, fetch from network
    console.log('[ServiceWorker] Fetching from network:', request.url);
    const networkResponse = await fetch(request);
    
    // Cache the response for future requests
    if (networkResponse.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('[ServiceWorker] Cache-first strategy failed:', error);
    
    // Return cached version if available
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // If it's a navigation request and we have the offline page, return it
    if (request.destination === 'document') {
      return caches.match(OFFLINE_PAGE);
    }
    
    throw error;
  }
}

/**
 * Network-first strategy for HTML documents
 */
async function networkFirstStrategy(request) {
  try {
    // Try network first
    console.log('[ServiceWorker] Fetching HTML from network:', request.url);
    const networkResponse = await fetch(request);
    
    // Cache the response for future requests
    if (networkResponse.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[ServiceWorker] Network failed, trying cache:', error);
    
    // If network fails, try cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('[ServiceWorker] Serving HTML from cache:', request.url);
      return cachedResponse;
    }
    
    // If nothing in cache and it's a navigation request, return offline page
    if (request.destination === 'document') {
      console.log('[ServiceWorker] Serving offline page');
      return caches.match(OFFLINE_PAGE);
    }
    
    throw error;
  }
}

/**
 * Background sync for when connectivity returns
 */
self.addEventListener('sync', (event) => {
  console.log('[ServiceWorker] Background sync:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Perform background sync tasks here
      Promise.resolve()
    );
  }
});

/**
 * Push notification handler
 */
self.addEventListener('push', (event) => {
  console.log('[ServiceWorker] Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle recette disponible!',
    icon: `${BASE_PATH}/icons/icon-192x192.png`,
    badge: `${BASE_PATH}/icons/icon-72x72.png`,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'Voir la recette',
        icon: `${BASE_PATH}/icons/icon-72x72.png`
      },
      {
        action: 'close',
        title: 'Fermer',
        icon: `${BASE_PATH}/icons/icon-72x72.png`
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Recette-IA', options)
  );
});

/**
 * Notification click handler
 */
self.addEventListener('notificationclick', (event) => {
  console.log('[ServiceWorker] Notification click:', event.action);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    // Open the app
    event.waitUntil(
      self.clients.openWindow(`${BASE_PATH}/`)
    );
  }
});

/**
 * Message handler for communication with main thread
 */
self.addEventListener('message', (event) => {
  console.log('[ServiceWorker] Message received:', event.data);
  
  if (event.data && event.data.type) {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        self.skipWaiting();
        break;
      case 'GET_VERSION':
        event.ports[0].postMessage({ version: CACHE_NAME });
        break;
      default:
        console.log('[ServiceWorker] Unknown message type:', event.data.type);
    }
  }
});