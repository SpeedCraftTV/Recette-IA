/**
 * @fileoverview Privacy-Friendly Analytics Service
 * @description Opt-in analytics system that respects Do Not Track and uses cookieless tracking
 */

/**
 * Configuration for analytics providers
 */
export const ANALYTICS_CONFIG = {
  // Configure your analytics provider here
  PROVIDER_URL: 'https://plausible.io/js/script.js', // Example: Plausible
  DATA_DOMAIN: 'speedcrafttv.github.io', // Your domain
  
  // Alternative providers:
  // Umami: 'https://umami.is/script.js'
  // Simple Analytics: 'https://scripts.simpleanalyticscdn.com/latest.js'
  
  // Script attributes for cookieless tracking
  SCRIPT_ATTRIBUTES: {
    'data-domain': 'speedcrafttv.github.io/Recette-IA',
    'data-api': '/api/event', // Optional: custom API endpoint
    'defer': true
  }
};

/**
 * Analytics service class
 */
class AnalyticsService {
  constructor() {
    this.isEnabled = false;
    this.scriptLoaded = false;
    this.consentKey = 'recette-ia-analytics-consent';
    this.init();
  }
  
  /**
   * Initialize analytics service
   */
  init() {
    // Check if user has Do Not Track enabled
    if (this.isDntEnabled()) {
      console.log('[Analytics] Do Not Track detected, analytics disabled');
      this.updateUI(false);
      return;
    }
    
    // Check stored consent
    const storedConsent = this.getStoredConsent();
    if (storedConsent !== null) {
      if (storedConsent) {
        this.enable();
      } else {
        this.disable();
      }
    }
    
    this.updateUI(this.isEnabled);
    this.initToggleButton();
  }
  
  /**
   * Check if Do Not Track is enabled
   * @returns {boolean} True if DNT is enabled
   */
  isDntEnabled() {
    return navigator.doNotTrack === '1' || 
           navigator.doNotTrack === 'yes' || 
           navigator.msDoNotTrack === '1' ||
           window.doNotTrack === '1';
  }
  
  /**
   * Get stored consent from localStorage
   * @returns {boolean|null} Consent status or null if not set
   */
  getStoredConsent() {
    try {
      const stored = localStorage.getItem(this.consentKey);
      return stored !== null ? JSON.parse(stored) : null;
    } catch (error) {
      console.warn('[Analytics] Could not read consent from storage:', error);
      return null;
    }
  }
  
  /**
   * Store consent in localStorage
   * @param {boolean} consent - Consent status
   */
  storeConsent(consent) {
    try {
      localStorage.setItem(this.consentKey, JSON.stringify(consent));
    } catch (error) {
      console.warn('[Analytics] Could not store consent:', error);
    }
  }
  
  /**
   * Enable analytics
   */
  enable() {
    if (this.isDntEnabled()) {
      console.log('[Analytics] Cannot enable: Do Not Track is active');
      return;
    }
    
    this.isEnabled = true;
    this.storeConsent(true);
    this.loadScript();
    this.updateUI(true);
    
    console.log('[Analytics] Analytics enabled');
  }
  
  /**
   * Disable analytics
   */
  disable() {
    this.isEnabled = false;
    this.storeConsent(false);
    this.unloadScript();
    this.updateUI(false);
    
    console.log('[Analytics] Analytics disabled');
  }
  
  /**
   * Toggle analytics on/off
   */
  toggle() {
    if (this.isEnabled) {
      this.disable();
    } else {
      this.enable();
    }
  }
  
  /**
   * Load analytics script
   */
  loadScript() {
    if (this.scriptLoaded) return;
    
    const script = document.createElement('script');
    script.src = ANALYTICS_CONFIG.PROVIDER_URL;
    script.async = true;
    script.defer = true;
    
    // Add configuration attributes
    Object.entries(ANALYTICS_CONFIG.SCRIPT_ATTRIBUTES).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    
    // Add loading handlers
    script.onload = () => {
      this.scriptLoaded = true;
      console.log('[Analytics] Script loaded successfully');
    };
    
    script.onerror = () => {
      console.error('[Analytics] Failed to load script');
    };
    
    document.head.appendChild(script);
  }
  
  /**
   * Unload analytics script
   */
  unloadScript() {
    const scripts = document.querySelectorAll(`script[src="${ANALYTICS_CONFIG.PROVIDER_URL}"]`);
    scripts.forEach(script => {
      script.remove();
    });
    
    this.scriptLoaded = false;
    
    // Clear any analytics data/functions
    if (typeof window.plausible !== 'undefined') {
      delete window.plausible;
    }
    if (typeof window.umami !== 'undefined') {
      delete window.umami;
    }
  }
  
  /**
   * Track custom event (if analytics is enabled)
   * @param {string} eventName - Event name
   * @param {Object} [properties] - Event properties
   */
  track(eventName, properties = {}) {
    if (!this.isEnabled || !this.scriptLoaded) {
      return;
    }
    
    try {
      // Plausible tracking
      if (typeof window.plausible === 'function') {
        window.plausible(eventName, { props: properties });
      }
      
      // Umami tracking
      if (typeof window.umami === 'object' && window.umami.track) {
        window.umami.track(eventName, properties);
      }
      
      // Custom tracking implementation
      console.log('[Analytics] Event tracked:', eventName, properties);
    } catch (error) {
      console.error('[Analytics] Error tracking event:', error);
    }
  }
  
  /**
   * Initialize toggle button
   */
  initToggleButton() {
    const button = document.getElementById('analytics-toggle');
    if (button) {
      button.addEventListener('click', () => {
        this.toggle();
      });
    }
  }
  
  /**
   * Update UI based on analytics state
   * @param {boolean} enabled - Whether analytics is enabled
   */
  updateUI(enabled) {
    const button = document.getElementById('analytics-toggle');
    if (!button) return;
    
    if (this.isDntEnabled()) {
      button.style.display = 'none';
      return;
    }
    
    button.style.display = 'inline-block';
    
    if (enabled) {
      button.classList.add('enabled');
      button.setAttribute('data-i18n', 'analytics-opt-out');
      button.setAttribute('aria-label', 'Désactiver les statistiques anonymes');
    } else {
      button.classList.remove('enabled');
      button.setAttribute('data-i18n', 'analytics-opt-in');
      button.setAttribute('aria-label', 'Activer les statistiques anonymes');
    }
    
    // Update button text if i18n is available
    if (window.i18n) {
      window.i18n.updateUI();
    }
  }
  
  /**
   * Get current analytics status
   * @returns {boolean} True if analytics is enabled
   */
  isAnalyticsEnabled() {
    return this.isEnabled;
  }
}

// Create and export analytics service instance
export const analytics = new AnalyticsService();

// Make analytics available globally for debugging
window.analytics = analytics;

// Track some basic events
if (analytics.isAnalyticsEnabled()) {
  // Page view is automatically tracked by most providers
  
  // Track when service worker is installed
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(() => {
      analytics.track('ServiceWorker Installed');
    });
  }
  
  // Track PWA install prompt
  window.addEventListener('beforeinstallprompt', () => {
    analytics.track('PWA Install Prompt Shown');
  });
  
  // Track if app is launched as PWA
  if (window.matchMedia('(display-mode: standalone)').matches) {
    analytics.track('App Launched as PWA');
  }
}