/**
 * @fileoverview PWA Service
 * @description Handles service worker registration and PWA functionality
 */

/**
 * PWA Service class
 */
class PWAService {
  constructor() {
    this.swRegistration = null;
    this.isOnline = navigator.onLine;
    this.init();
  }
  
  /**
   * Initialize PWA service
   */
  async init() {
    // Check if service workers are supported
    if (!('serviceWorker' in navigator)) {
      console.log('[PWA] Service workers not supported');
      return;
    }
    
    try {
      await this.registerServiceWorker();
      this.setupNetworkListeners();
      this.setupInstallPrompt();
      this.setupNotifications();
    } catch (error) {
      console.error('[PWA] Initialization failed:', error);
    }
  }
  
  /**
   * Register service worker
   */
  async registerServiceWorker() {
    try {
      // Determine the correct path based on environment
      const swPath = this.getServiceWorkerPath();
      
      console.log('[PWA] Registering service worker:', swPath);
      
      this.swRegistration = await navigator.serviceWorker.register(swPath, {
        scope: this.getScope()
      });
      
      console.log('[PWA] Service worker registered successfully');
      
      // Handle updates
      this.swRegistration.addEventListener('updatefound', () => {
        console.log('[PWA] New service worker version found');
        this.handleServiceWorkerUpdate();
      });
      
      // Check for existing service worker
      if (this.swRegistration.active) {
        console.log('[PWA] Service worker already active');
      }
      
      return this.swRegistration;
    } catch (error) {
      console.error('[PWA] Service worker registration failed:', error);
      throw error;
    }
  }
  
  /**
   * Get service worker path based on environment
   * @returns {string} Service worker path
   */
  getServiceWorkerPath() {
    // Check if we're in a GitHub Pages environment
    const isGitHubPages = window.location.hostname.includes('github.io');
    const pathName = window.location.pathname;
    
    if (isGitHubPages && pathName.includes('/Recette-IA/')) {
      return '/Recette-IA/sw.js';
    }
    
    return '/sw.js';
  }
  
  /**
   * Get service worker scope
   * @returns {string} Scope path
   */
  getScope() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    const pathName = window.location.pathname;
    
    if (isGitHubPages && pathName.includes('/Recette-IA/')) {
      return '/Recette-IA/';
    }
    
    return '/';
  }
  
  /**
   * Handle service worker updates
   */
  handleServiceWorkerUpdate() {
    const newWorker = this.swRegistration.installing;
    
    if (!newWorker) return;
    
    newWorker.addEventListener('statechange', () => {
      if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
        // New version available
        this.showUpdateNotification();
      }
    });
  }
  
  /**
   * Show update notification to user
   */
  showUpdateNotification() {
    const shouldUpdate = confirm(
      'Une nouvelle version de Recette-IA est disponible. Voulez-vous l\'installer maintenant ?'
    );
    
    if (shouldUpdate) {
      this.applyUpdate();
    }
  }
  
  /**
   * Apply service worker update
   */
  applyUpdate() {
    if (!this.swRegistration || !this.swRegistration.waiting) return;
    
    // Tell the waiting service worker to skip waiting
    this.swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
    
    // Reload the page when the new service worker takes control
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });
  }
  
  /**
   * Setup network status listeners
   */
  setupNetworkListeners() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      console.log('[PWA] Network: Online');
      this.showNetworkStatus('Connexion rétablie', 'success');
    });
    
    window.addEventListener('offline', () => {
      this.isOnline = false;
      console.log('[PWA] Network: Offline');
      this.showNetworkStatus('Mode hors ligne activé', 'warning');
    });
  }
  
  /**
   * Show network status message
   * @param {string} message - Status message
   * @param {string} type - Message type ('success', 'warning', 'error')
   */
  showNetworkStatus(message, type = 'info') {
    // Create or update status element
    let statusEl = document.getElementById('network-status');
    
    if (!statusEl) {
      statusEl = document.createElement('div');
      statusEl.id = 'network-status';
      statusEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
      `;
      document.body.appendChild(statusEl);
    }
    
    // Set styling based on type
    const colors = {
      success: '#2ecc71',
      warning: '#f39c12',
      error: '#e74c3c',
      info: '#3498db'
    };
    
    statusEl.style.backgroundColor = colors[type] || colors.info;
    statusEl.textContent = message;
    statusEl.style.transform = 'translateX(0)';
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      statusEl.style.transform = 'translateX(100%)';
    }, 3000);
  }
  
  /**
   * Setup PWA install prompt
   */
  setupInstallPrompt() {
    let deferredPrompt = null;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('[PWA] Install prompt triggered');
      
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      
      // Stash the event so it can be triggered later
      deferredPrompt = e;
      
      // Show custom install button
      this.showInstallButton(deferredPrompt);
    });
    
    // Track install
    window.addEventListener('appinstalled', () => {
      console.log('[PWA] App installed successfully');
      deferredPrompt = null;
      
      // Track with analytics if available
      if (window.analytics) {
        window.analytics.track('PWA Installed');
      }
    });
  }
  
  /**
   * Show install button
   * @param {Event} deferredPrompt - Deferred install prompt event
   */
  showInstallButton(deferredPrompt) {
    // Create install button if it doesn't exist
    let installBtn = document.getElementById('pwa-install-btn');
    
    if (!installBtn) {
      installBtn = document.createElement('button');
      installBtn.id = 'pwa-install-btn';
      installBtn.textContent = '📱 Installer l\'app';
      installBtn.className = 'analytics-btn';
      installBtn.style.marginLeft = '10px';
      
      // Add to footer actions
      const footerActions = document.querySelector('.footer-actions');
      if (footerActions) {
        footerActions.appendChild(installBtn);
      }
    }
    
    installBtn.style.display = 'inline-block';
    
    installBtn.addEventListener('click', async () => {
      // Hide the button
      installBtn.style.display = 'none';
      
      // Show the install prompt
      deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      console.log('[PWA] User choice:', outcome);
      
      // Clear the deferred prompt
      deferredPrompt = null;
    });
  }
  
  /**
   * Setup push notifications (if supported)
   */
  async setupNotifications() {
    if (!('Notification' in window) || !('PushManager' in window)) {
      console.log('[PWA] Push notifications not supported');
      return;
    }
    
    // Check current permission
    if (Notification.permission === 'granted') {
      console.log('[PWA] Notifications already granted');
      return;
    }
    
    if (Notification.permission === 'denied') {
      console.log('[PWA] Notifications denied');
      return;
    }
    
    // Permission is 'default', so we can ask for permission
    // We'll add a button for this later if needed
  }
  
  /**
   * Request notification permission
   */
  async requestNotificationPermission() {
    if (!('Notification' in window)) {
      console.log('[PWA] Notifications not supported');
      return false;
    }
    
    const permission = await Notification.requestPermission();
    console.log('[PWA] Notification permission:', permission);
    
    return permission === 'granted';
  }
  
  /**
   * Send a test notification
   */
  async sendTestNotification() {
    if (!await this.requestNotificationPermission()) {
      return;
    }
    
    if (this.swRegistration) {
      // Send via service worker for better reliability
      this.swRegistration.showNotification('Recette-IA', {
        body: 'Notifications activées avec succès!',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png'
      });
    } else {
      // Fallback to direct notification
      new Notification('Recette-IA', {
        body: 'Notifications activées avec succès!',
        icon: '/icons/icon-192x192.png'
      });
    }
  }
  
  /**
   * Get PWA installation status
   * @returns {boolean} True if app is installed as PWA
   */
  isInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone; // iOS Safari
  }
  
  /**
   * Check if app is online
   * @returns {boolean} True if online
   */
  isAppOnline() {
    return this.isOnline;
  }
  
  /**
   * Get service worker registration
   * @returns {ServiceWorkerRegistration|null} Service worker registration
   */
  getRegistration() {
    return this.swRegistration;
  }
}

// Create and export PWA service instance
export const pwa = new PWAService();

// Make PWA service available globally for debugging
window.pwa = pwa;