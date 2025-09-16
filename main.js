/**
 * @fileoverview Main bootstrap module for Recette-IA
 * @description Initializes and coordinates all application modules
 */

import { I18n } from './ui/i18n.js';
import { RecipeUI, recipeUI } from './ui/ui.js';
import { PWA } from './services/pwa.js';
import { Analytics } from './services/analytics.js';

/**
 * Main Application Class
 * Orchestrates the initialization of all modules
 */
class RecetteIA {
    /**
     * Initialize the application
     */
    constructor() {
        this.i18n = null;
        this.ui = null;
        this.pwa = null;
        this.analytics = null;
        this.isInitialized = false;
    }

    /**
     * Initialize all application modules
     * @returns {Promise<void>}
     */
    async initialize() {
        if (this.isInitialized) {
            console.warn('Application already initialized');
            return;
        }

        try {
            console.log('🍳 Initializing Recette-IA...');

            // Initialize internationalization first
            await this.initializeI18n();
            
            // Initialize analytics (privacy-respecting)
            await this.initializeAnalytics();
            
            // Initialize PWA features
            await this.initializePWA();
            
            // Initialize UI with dependencies
            await this.initializeUI();
            
            // Set up global error handling
            this.setupErrorHandling();
            
            // Mark as initialized
            this.isInitialized = true;
            
            console.log('✅ Recette-IA initialized successfully');
            
            // Track application startup
            if (this.analytics) {
                this.analytics.trackEvent('app_initialized', {
                    locale: this.i18n?.getCurrentLocale() || 'fr',
                    timestamp: new Date().toISOString()
                });
            }

        } catch (error) {
            console.error('❌ Failed to initialize Recette-IA:', error);
            this.handleInitializationError(error);
        }
    }

    /**
     * Initialize internationalization system
     * @returns {Promise<void>}
     */
    async initializeI18n() {
        try {
            this.i18n = new I18n();
            this.i18n.initializeLocaleSwitcher();
            console.log('🌍 I18n initialized');
        } catch (error) {
            console.error('Failed to initialize i18n:', error);
            // Continue without i18n rather than failing completely
        }
    }

    /**
     * Initialize analytics with privacy controls
     * @returns {Promise<void>}
     */
    async initializeAnalytics() {
        try {
            this.analytics = new Analytics();
            console.log('📊 Analytics initialized (privacy-friendly)');
        } catch (error) {
            console.error('Failed to initialize analytics:', error);
            // Continue without analytics
        }
    }

    /**
     * Initialize Progressive Web App features
     * @returns {Promise<void>}
     */
    async initializePWA() {
        try {
            this.pwa = new PWA();
            await this.pwa.registerServiceWorker();
            console.log('📱 PWA features initialized');
        } catch (error) {
            console.error('Failed to initialize PWA:', error);
            // Continue without PWA features
        }
    }

    /**
     * Initialize user interface
     * @returns {Promise<void>}
     */
    async initializeUI() {
        try {
            // Create UI instance with dependencies
            this.ui = new RecipeUI({
                i18n: this.i18n,
                analytics: this.analytics
            });
            
            // Set global reference for HTML onclick handlers
            window.recipeUI = this.ui;
            
            console.log('🎨 UI initialized');
        } catch (error) {
            console.error('Failed to initialize UI:', error);
            throw error; // UI is critical, so fail if it doesn't work
        }
    }

    /**
     * Set up global error handling
     */
    setupErrorHandling() {
        // Handle unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            console.error('Unhandled promise rejection:', event.reason);
            
            if (this.analytics) {
                this.analytics.trackEvent('error', {
                    type: 'unhandled_rejection',
                    message: event.reason?.message || 'Unknown error'
                });
            }
            
            // Prevent the default browser error handling
            event.preventDefault();
        });

        // Handle other JavaScript errors
        window.addEventListener('error', (event) => {
            console.error('JavaScript error:', event.error);
            
            if (this.analytics) {
                this.analytics.trackEvent('error', {
                    type: 'javascript_error',
                    message: event.error?.message || 'Unknown error',
                    filename: event.filename || 'unknown',
                    lineno: event.lineno || 0
                });
            }
        });
    }

    /**
     * Handle initialization errors gracefully
     * @param {Error} error - Initialization error
     */
    handleInitializationError(error) {
        // Create a basic error UI
        const errorContainer = document.createElement('div');
        errorContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            z-index: 10000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        `;
        
        errorContainer.innerHTML = `
            <div style="max-width: 500px; padding: 40px;">
                <h1 style="font-size: 3rem; margin-bottom: 20px;">🍳</h1>
                <h2 style="margin-bottom: 20px;">Oops! Something went wrong</h2>
                <p style="margin-bottom: 30px; opacity: 0.9;">
                    We're having trouble loading Recette-IA. Please try refreshing the page.
                </p>
                <button onclick="window.location.reload()" style="
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    padding: 15px 30px;
                    border-radius: 25px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'"
                   onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'">
                    Refresh Page
                </button>
                <p style="margin-top: 20px; font-size: 0.9rem; opacity: 0.7;">
                    Error: ${error.message}
                </p>
            </div>
        `;
        
        document.body.appendChild(errorContainer);
    }

    /**
     * Get application status
     * @returns {Object} Application status information
     */
    getStatus() {
        return {
            isInitialized: this.isInitialized,
            modules: {
                i18n: !!this.i18n,
                ui: !!this.ui,
                pwa: !!this.pwa,
                analytics: !!this.analytics
            },
            locale: this.i18n?.getCurrentLocale(),
            analyticsStatus: this.analytics?.getStatus(),
            pwaStatus: this.pwa?.getStatus()
        };
    }

    /**
     * Change application locale
     * @param {string} locale - New locale (fr or en)
     */
    changeLocale(locale) {
        if (this.i18n) {
            const oldLocale = this.i18n.getCurrentLocale();
            this.i18n.setLocale(locale);
            
            if (this.analytics && oldLocale !== locale) {
                this.analytics.trackLanguageChange(locale);
            }
        }
    }

    /**
     * Manual service worker update check
     * @returns {Promise<boolean>} True if update available
     */
    async checkForUpdates() {
        if (this.pwa && 'serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.getRegistration();
                if (registration) {
                    await registration.update();
                    return !!registration.waiting;
                }
            } catch (error) {
                console.error('Failed to check for updates:', error);
            }
        }
        return false;
    }
}

/**
 * Initialize the application when DOM is ready
 */
function initializeApp() {
    const app = new RecetteIA();
    
    // Store app instance globally for debugging
    window.recetteIA = app;
    
    // Initialize the app
    app.initialize().catch(error => {
        console.error('Failed to start application:', error);
    });
    
    return app;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already ready
    initializeApp();
}

// Export for testing or manual initialization
export { RecetteIA, initializeApp };
export default RecetteIA;