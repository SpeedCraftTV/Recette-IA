/**
 * @fileoverview Privacy-friendly analytics service for Recette-IA
 * @description Provides opt-in analytics with respect for user privacy and Do Not Track
 */

// Configuration constants for analytics provider
const ANALYTICS_PROVIDER_URL = 'https://plausible.io/js/script.js';
const ANALYTICS_DATA_DOMAIN = 'speedcrafttv.github.io'; // Update this to your actual domain
const ANALYTICS_STORAGE_KEY = 'recette-ia-analytics-consent';

/**
 * Analytics class for handling privacy-friendly tracking
 */
export class Analytics {
    /**
     * Initialize the analytics service
     */
    constructor() {
        this.isEnabled = false;
        this.isOptedIn = this.getStoredConsent();
        this.respectsDoNotTrack = this.checkDoNotTrack();
        
        // Initialize UI after DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeUI());
        } else {
            this.initializeUI();
        }
    }

    /**
     * Check if user has Do Not Track enabled
     * @returns {boolean} True if DNT is enabled
     */
    checkDoNotTrack() {
        return navigator.doNotTrack === '1' || 
               navigator.doNotTrack === 'yes' || 
               navigator.msDoNotTrack === '1' ||
               window.doNotTrack === '1';
    }

    /**
     * Get stored consent from localStorage
     * @returns {boolean} True if user has opted in
     */
    getStoredConsent() {
        try {
            const consent = localStorage.getItem(ANALYTICS_STORAGE_KEY);
            return consent === 'true';
        } catch (e) {
            console.warn('localStorage not available for analytics consent');
            return false;
        }
    }

    /**
     * Store user consent in localStorage
     * @param {boolean} consent - User's consent status
     */
    storeConsent(consent) {
        try {
            localStorage.setItem(ANALYTICS_STORAGE_KEY, consent.toString());
        } catch (e) {
            console.warn('Failed to store analytics consent in localStorage');
        }
    }

    /**
     * Initialize the analytics UI and set initial state
     */
    initializeUI() {
        const optInButton = document.getElementById('analytics-opt-in');
        if (!optInButton) {
            console.warn('Analytics opt-in button not found');
            return;
        }

        // Set initial button state
        this.updateButtonState(optInButton);
        
        // Add click handler
        optInButton.addEventListener('click', () => {
            this.toggleAnalytics();
        });

        // If user previously opted in and DNT is not enabled, enable analytics
        if (this.isOptedIn && !this.respectsDoNotTrack) {
            this.enableAnalytics();
        }
    }

    /**
     * Update the opt-in button state and text
     * @param {HTMLElement} button - The analytics button element
     */
    updateButtonState(button) {
        const isEnabled = this.isEnabled && !this.respectsDoNotTrack;
        
        if (this.respectsDoNotTrack) {
            button.textContent = 'Analytics disabled (Do Not Track)';
            button.disabled = true;
            button.title = 'Analytics are disabled because you have Do Not Track enabled';
        } else if (isEnabled) {
            button.textContent = 'Disable analytics';
            button.classList.add('active');
            button.title = 'Click to disable privacy-friendly analytics';
        } else {
            button.textContent = 'Enable analytics (privacy-friendly)';
            button.classList.remove('active');
            button.title = 'Click to enable privacy-friendly analytics';
        }
    }

    /**
     * Toggle analytics on/off
     */
    toggleAnalytics() {
        if (this.respectsDoNotTrack) {
            console.log('Analytics blocked due to Do Not Track setting');
            return;
        }

        if (this.isEnabled) {
            this.disableAnalytics();
        } else {
            this.enableAnalytics();
        }
    }

    /**
     * Enable analytics tracking
     */
    enableAnalytics() {
        if (this.respectsDoNotTrack) {
            console.log('Cannot enable analytics: Do Not Track is enabled');
            return;
        }

        try {
            this.loadAnalyticsScript();
            this.isEnabled = true;
            this.isOptedIn = true;
            this.storeConsent(true);
            
            console.log('Analytics enabled with user consent');
            this.updateButtonState(document.getElementById('analytics-opt-in'));
            
            // Track initial page view
            this.trackEvent('page_view', { path: window.location.pathname });
            
        } catch (error) {
            console.error('Failed to enable analytics:', error);
        }
    }

    /**
     * Disable analytics tracking
     */
    disableAnalytics() {
        try {
            this.removeAnalyticsScript();
            this.isEnabled = false;
            this.isOptedIn = false;
            this.storeConsent(false);
            
            console.log('Analytics disabled by user');
            this.updateButtonState(document.getElementById('analytics-opt-in'));
            
        } catch (error) {
            console.error('Failed to disable analytics:', error);
        }
    }

    /**
     * Load the analytics provider script
     */
    loadAnalyticsScript() {
        // Remove existing script if any
        this.removeAnalyticsScript();
        
        const script = document.createElement('script');
        script.id = 'analytics-script';
        script.src = ANALYTICS_PROVIDER_URL;
        script.defer = true;
        script.setAttribute('data-domain', ANALYTICS_DATA_DOMAIN);
        script.setAttribute('data-api', '/api/event'); // For self-hosted Plausible
        script.setAttribute('data-exclude', 'localhost'); // Exclude localhost from tracking
        
        // For cookieless tracking (Plausible feature)
        script.setAttribute('data-no-cookie', 'true');
        
        document.head.appendChild(script);
        
        console.log('Analytics script loaded');
    }

    /**
     * Remove the analytics provider script
     */
    removeAnalyticsScript() {
        const existingScript = document.getElementById('analytics-script');
        if (existingScript) {
            existingScript.remove();
            console.log('Analytics script removed');
        }
        
        // Clear any analytics-related globals
        if (window.plausible) {
            delete window.plausible;
        }
    }

    /**
     * Track a custom event (only if analytics is enabled)
     * @param {string} eventName - Name of the event
     * @param {Object} properties - Event properties
     */
    trackEvent(eventName, properties = {}) {
        if (!this.isEnabled || this.respectsDoNotTrack) {
            return;
        }

        try {
            // Use Plausible's event tracking if available
            if (window.plausible) {
                window.plausible(eventName, { props: properties });
            } else {
                console.log('Analytics event would be tracked:', eventName, properties);
            }
        } catch (error) {
            console.error('Failed to track event:', error);
        }
    }

    /**
     * Track page views (called on navigation)
     * @param {string} path - Page path
     */
    trackPageView(path) {
        this.trackEvent('pageview', { path });
    }

    /**
     * Track recipe generation events
     * @param {Object} recipe - Recipe details
     */
    trackRecipeGeneration(recipe) {
        this.trackEvent('recipe_generated', {
            cuisine: recipe.cuisineStyle || 'unknown',
            meal_type: recipe.mealCategory || 'unknown',
            difficulty: recipe.difficulty || 'unknown'
        });
    }

    /**
     * Track search events
     * @param {string} query - Search query
     * @param {number} results - Number of results
     */
    trackSearch(query, results) {
        this.trackEvent('recipe_search', {
            query_length: query.length,
            results_count: results,
            has_results: results > 0
        });
    }

    /**
     * Track language changes
     * @param {string} locale - New locale
     */
    trackLanguageChange(locale) {
        this.trackEvent('language_change', { locale });
    }

    /**
     * Get current analytics status
     * @returns {Object} Analytics status information
     */
    getStatus() {
        return {
            isEnabled: this.isEnabled,
            isOptedIn: this.isOptedIn,
            respectsDoNotTrack: this.respectsDoNotTrack,
            canEnable: !this.respectsDoNotTrack
        };
    }
}

export default Analytics;