/**
 * @fileoverview Service Worker for Recette-IA PWA
 * @description Provides offline functionality and caching for the recipe generator
 */

const CACHE_NAME = 'recette-ia-v1';
const OFFLINE_PAGE = '/offline.html';

// Assets to cache for offline functionality
const STATIC_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './main.js',
    './data/recipeDatabase.js',
    './core/generator.js',
    './core/search.js',
    './ui/i18n.js',
    './ui/ui.js',
    './services/analytics.js',
    './services/pwa.js',
    './manifest.webmanifest'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing service worker...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('[SW] Static assets cached successfully');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('[SW] Failed to cache static assets:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating service worker...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[SW] Service worker activated');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }
    
    // Skip external requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    // Serve from cache
                    return cachedResponse;
                }
                
                // Try to fetch from network
                return fetch(event.request)
                    .then((response) => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // Clone the response for caching
                        const responseToCache = response.clone();
                        
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    })
                    .catch(() => {
                        // Network failed, try to serve offline page for navigation requests
                        if (event.request.mode === 'navigate') {
                            return caches.match('./index.html')
                                .then((cachedIndex) => {
                                    if (cachedIndex) {
                                        return cachedIndex;
                                    }
                                    // Fallback offline page
                                    return new Response(
                                        createOfflinePage(),
                                        {
                                            headers: { 'Content-Type': 'text/html' }
                                        }
                                    );
                                });
                        }
                        
                        // For other requests, return a generic offline response
                        return new Response('Offline - Content not available', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
});

// Background sync event (for future use)
self.addEventListener('sync', (event) => {
    console.log('[SW] Background sync:', event.tag);
    
    if (event.tag === 'background-sync') {
        event.waitUntil(
            // Perform background sync operations
            console.log('[SW] Performing background sync')
        );
    }
});

// Push notification event (for future use)
self.addEventListener('push', (event) => {
    console.log('[SW] Push notification received');
    
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23667eea"/><text x="50" y="70" font-size="60" text-anchor="middle" fill="white">🍳</text></svg>',
            badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23667eea"/><text x="50" y="70" font-size="60" text-anchor="middle" fill="white">🍳</text></svg>',
            tag: 'recette-ia-notification',
            renotify: true
        };
        
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});

/**
 * Create a simple offline page when the main page is not cached
 * @returns {string} HTML content for offline page
 */
function createOfflinePage() {
    return `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Recette-IA - Hors ligne</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    text-align: center;
                    padding: 50px 20px;
                    min-height: 100vh;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .offline-container {
                    max-width: 500px;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 40px;
                    border-radius: 20px;
                    backdrop-filter: blur(10px);
                }
                h1 { font-size: 3rem; margin-bottom: 20px; }
                p { font-size: 1.2rem; line-height: 1.6; margin-bottom: 30px; }
                .retry-btn {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    padding: 15px 30px;
                    border-radius: 25px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .retry-btn:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(1.05);
                }
            </style>
        </head>
        <body>
            <div class="offline-container">
                <h1>🍳 Recette-IA</h1>
                <p>Vous êtes actuellement hors ligne. Vérifiez votre connexion Internet et réessayez.</p>
                <button class="retry-btn" onclick="window.location.reload()">Réessayer</button>
            </div>
        </body>
        </html>
    `;
}

// Handle service worker messages
self.addEventListener('message', (event) => {
    console.log('[SW] Message received:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

console.log('[SW] Service worker loaded');