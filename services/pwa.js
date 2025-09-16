/**
 * @fileoverview PWA service for managing service worker registration and installation
 * @description Handles Progressive Web App functionality for Recette-IA
 */

/**
 * PWA class for managing Progressive Web App features
 */
export class PWA {
    /**
     * Initialize the PWA service
     */
    constructor() {
        this.isInstallable = false;
        this.deferredPrompt = null;
        this.isStandalone = this.isRunningStandalone();
        
        this.initializeEventListeners();
    }

    /**
     * Check if app is running in standalone mode (installed as PWA)
     * @returns {boolean} True if running in standalone mode
     */
    isRunningStandalone() {
        return window.matchMedia && 
               (window.matchMedia('(display-mode: standalone)').matches ||
                window.matchMedia('(display-mode: fullscreen)').matches ||
                window.navigator.standalone === true);
    }

    /**
     * Initialize event listeners for PWA functionality
     */
    initializeEventListeners() {
        // Listen for beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('[PWA] App is installable');
            e.preventDefault();
            this.deferredPrompt = e;
            this.isInstallable = true;
            this.showInstallPrompt();
        });

        // Listen for appinstalled event
        window.addEventListener('appinstalled', () => {
            console.log('[PWA] App installed successfully');
            this.deferredPrompt = null;
            this.isInstallable = false;
            this.hideInstallPrompt();
        });

        // Listen for online/offline events
        window.addEventListener('online', () => {
            console.log('[PWA] App is online');
            this.updateOnlineStatus(true);
        });

        window.addEventListener('offline', () => {
            console.log('[PWA] App is offline');
            this.updateOnlineStatus(false);
        });
    }

    /**
     * Register the service worker
     * @returns {Promise<void>}
     */
    async registerServiceWorker() {
        if (!('serviceWorker' in navigator)) {
            console.warn('[PWA] Service Worker not supported');
            return;
        }

        try {
            // Determine the correct service worker path for GitHub Pages
            const swPath = this.getServiceWorkerPath();
            
            const registration = await navigator.serviceWorker.register(swPath, {
                scope: './'
            });

            console.log('[PWA] Service Worker registered successfully:', registration);

            // Handle service worker updates
            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                console.log('[PWA] New service worker found, installing...');

                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // New update available
                            console.log('[PWA] New version available');
                            this.showUpdateAvailable();
                        } else {
                            // First install
                            console.log('[PWA] Service worker installed for the first time');
                        }
                    }
                });
            });

            // Check for controlling service worker
            if (registration.active && !navigator.serviceWorker.controller) {
                // Page wasn't claimed, reload to get the latest version
                window.location.reload();
            }

        } catch (error) {
            console.error('[PWA] Service Worker registration failed:', error);
        }
    }

    /**
     * Get the correct service worker path for the current environment
     * @returns {string} Service worker path
     */
    getServiceWorkerPath() {
        const isGitHubPages = window.location.hostname.includes('github.io');
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        
        if (isGitHubPages && basePath.includes('Recette-IA')) {
            // GitHub Pages with repository name in path
            return `${basePath}/sw.js`;
        }
        
        // Local development or custom domain
        return './sw.js';
    }

    /**
     * Show install prompt to user
     */
    showInstallPrompt() {
        // Create install prompt UI if it doesn't exist
        if (!document.getElementById('install-prompt')) {
            const prompt = document.createElement('div');
            prompt.id = 'install-prompt';
            prompt.innerHTML = `
                <div class="install-prompt-content">
                    <span>📱 Installer Recette-IA sur votre appareil ?</span>
                    <button id="install-accept" class="install-btn">Installer</button>
                    <button id="install-dismiss" class="install-btn secondary">Plus tard</button>
                </div>
            `;
            prompt.className = 'install-prompt';
            
            // Add styles
            const style = document.createElement('style');
            style.textContent = `
                .install-prompt {
                    position: fixed;
                    bottom: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-radius: 15px;
                    padding: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    z-index: 1000;
                    max-width: 90vw;
                    animation: slideUp 0.3s ease;
                }
                
                @keyframes slideUp {
                    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
                    to { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
                
                .install-prompt-content {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                
                .install-btn {
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 20px;
                    cursor: pointer;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                
                .install-btn:hover {
                    transform: scale(1.05);
                }
                
                .install-btn.secondary {
                    background: #ccc;
                    color: #333;
                }
                
                @media (max-width: 768px) {
                    .install-prompt {
                        bottom: 80px;
                        padding: 15px;
                    }
                    
                    .install-prompt-content {
                        flex-direction: column;
                        gap: 10px;
                    }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(prompt);
            
            // Add event listeners
            document.getElementById('install-accept').addEventListener('click', () => {
                this.installApp();
            });
            
            document.getElementById('install-dismiss').addEventListener('click', () => {
                this.hideInstallPrompt();
            });
        }
    }

    /**
     * Hide install prompt
     */
    hideInstallPrompt() {
        const prompt = document.getElementById('install-prompt');
        if (prompt) {
            prompt.style.animation = 'slideDown 0.3s ease forwards';
            setTimeout(() => {
                prompt.remove();
            }, 300);
        }
    }

    /**
     * Install the app using the deferred prompt
     */
    async installApp() {
        if (!this.deferredPrompt) {
            console.log('[PWA] No install prompt available');
            return;
        }

        try {
            this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            
            console.log(`[PWA] User response to install prompt: ${outcome}`);
            
            this.deferredPrompt = null;
            this.hideInstallPrompt();
            
        } catch (error) {
            console.error('[PWA] Error during app installation:', error);
        }
    }

    /**
     * Show update available notification
     */
    showUpdateAvailable() {
        // Create update notification if it doesn't exist
        if (!document.getElementById('update-notification')) {
            const notification = document.createElement('div');
            notification.id = 'update-notification';
            notification.innerHTML = `
                <div class="update-content">
                    <span>🔄 Nouvelle version disponible</span>
                    <button id="update-refresh" class="update-btn">Actualiser</button>
                    <button id="update-dismiss" class="update-btn secondary">Plus tard</button>
                </div>
            `;
            notification.className = 'update-notification';
            
            // Add styles
            const style = document.createElement('style');
            style.textContent = `
                .update-notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: rgba(76, 175, 80, 0.95);
                    color: white;
                    backdrop-filter: blur(10px);
                    border-radius: 10px;
                    padding: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                    z-index: 1000;
                    max-width: 300px;
                    animation: slideIn 0.3s ease;
                }
                
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(100%); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                .update-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                
                .update-btn {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    padding: 5px 15px;
                    border-radius: 15px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                }
                
                .update-btn:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(notification);
            
            // Add event listeners
            document.getElementById('update-refresh').addEventListener('click', () => {
                window.location.reload();
            });
            
            document.getElementById('update-dismiss').addEventListener('click', () => {
                notification.remove();
            });
            
            // Auto-hide after 10 seconds
            setTimeout(() => {
                if (document.getElementById('update-notification')) {
                    notification.remove();
                }
            }, 10000);
        }
    }

    /**
     * Update online/offline status indicator
     * @param {boolean} isOnline - Whether the app is online
     */
    updateOnlineStatus(isOnline) {
        // Add visual indicator for offline state
        let statusIndicator = document.getElementById('connection-status');
        
        if (!isOnline && !statusIndicator) {
            statusIndicator = document.createElement('div');
            statusIndicator.id = 'connection-status';
            statusIndicator.textContent = '📶 Mode hors ligne';
            statusIndicator.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: #ff9800;
                color: white;
                text-align: center;
                padding: 10px;
                z-index: 1000;
                font-weight: 500;
            `;
            document.body.appendChild(statusIndicator);
        } else if (isOnline && statusIndicator) {
            statusIndicator.remove();
        }
    }

    /**
     * Get PWA status information
     * @returns {Object} PWA status
     */
    getStatus() {
        return {
            isInstallable: this.isInstallable,
            isStandalone: this.isStandalone,
            isOnline: navigator.onLine,
            hasServiceWorker: 'serviceWorker' in navigator
        };
    }
}

export default PWA;