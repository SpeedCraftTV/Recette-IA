/**
 * @fileoverview Main Application Bootstrap
 * @description Entry point that initializes all modules and services
 */

import { i18n } from './ui/i18n.js';
import { RecipeUI } from './ui/ui.js';
import { analytics } from './services/analytics.js';
import { pwa } from './services/pwa.js';

/**
 * Application class
 */
class RecetteIAApp {
  constructor() {
    this.ui = null;
    this.isInitialized = false;
  }

  /**
   * Initialize the application
   */
  async init() {
    if (this.isInitialized) {
      console.warn('[App] Already initialized');
      return;
    }

    console.log('[App] Initializing Recette-IA...');

    try {
      // Initialize in order of dependency
      await this.initializeI18n();
      await this.initializeServices();
      await this.initializeUI();
      await this.initializeFeatures();

      this.isInitialized = true;
      console.log('[App] Recette-IA initialized successfully');

      // Track app initialization
      if (analytics.isAnalyticsEnabled()) {
        analytics.track('App Initialized', {
          locale: i18n.getCurrentLocale(),
          pwaSupported: 'serviceWorker' in navigator,
          timestamp: new Date().toISOString()
        });
      }

    } catch (error) {
      console.error('[App] Initialization failed:', error);
      this.handleInitializationError(error);
    }
  }

  /**
   * Initialize internationalization
   */
  async initializeI18n() {
    console.log('[App] Initializing i18n...');
    
    // i18n is already initialized in its constructor
    // Just make sure it's ready
    i18n.updateUI();
    
    console.log('[App] i18n initialized with locale:', i18n.getCurrentLocale());
  }

  /**
   * Initialize services
   */
  async initializeServices() {
    console.log('[App] Initializing services...');
    
    // Analytics is already initialized
    console.log('[App] Analytics service ready, enabled:', analytics.isAnalyticsEnabled());
    
    // PWA service is already initialized
    console.log('[App] PWA service ready');
    
    // Wait for service worker to be ready if supported
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.ready;
        console.log('[App] Service worker ready:', registration.scope);
      } catch (error) {
        console.warn('[App] Service worker not ready:', error);
      }
    }
  }

  /**
   * Initialize UI
   */
  async initializeUI() {
    console.log('[App] Initializing UI...');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      await new Promise(resolve => {
        document.addEventListener('DOMContentLoaded', resolve);
      });
    }

    // Initialize UI
    this.ui = new RecipeUI();
    
    // Make UI globally available for onclick handlers
    window.recipeUI = this.ui;
    
    console.log('[App] UI initialized');
  }

  /**
   * Initialize additional features
   */
  async initializeFeatures() {
    console.log('[App] Initializing additional features...');

    // Setup search enhancements
    this.setupSearchEnhancements();
    
    // Setup form enhancements
    this.setupFormEnhancements();
    
    // Setup analytics tracking
    this.setupAnalyticsTracking();
    
    // Setup error handling
    this.setupErrorHandling();

    console.log('[App] Additional features initialized');
  }

  /**
   * Setup search enhancements
   */
  setupSearchEnhancements() {
    // Add search history if supported
    if ('localStorage' in window) {
      this.setupSearchHistory();
    }

    // Setup search analytics
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      let searchTimer;
      searchInput.addEventListener('input', () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
          if (analytics.isAnalyticsEnabled() && searchInput.value.length > 2) {
            analytics.track('Search Query Typed', {
              length: searchInput.value.length,
              hasFilters: false // Could check actual filters
            });
          }
        }, 1000);
      });
    }
  }

  /**
   * Setup search history
   */
  setupSearchHistory() {
    const HISTORY_KEY = 'recette-ia-search-history';
    const MAX_HISTORY = 10;

    try {
      // Get existing history
      const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');

      // Function to add to history
      window.addToSearchHistory = (query) => {
        if (!query || query.length < 2) return;

        // Remove duplicates and add to front
        const filtered = history.filter(item => item !== query);
        filtered.unshift(query);

        // Limit history size
        const newHistory = filtered.slice(0, MAX_HISTORY);

        // Save back to localStorage
        localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
      };

      // Function to get history
      window.getSearchHistory = () => history;

    } catch (error) {
      console.warn('[App] Could not setup search history:', error);
    }
  }

  /**
   * Setup form enhancements
   */
  setupFormEnhancements() {
    // Form validation enhancements
    const form = document.getElementById('recipe-form');
    if (form) {
      // Real-time validation
      const inputs = form.querySelectorAll('select, input');
      inputs.forEach(input => {
        input.addEventListener('change', () => {
          this.validateFormField(input);
        });
      });

      // Save form state
      this.setupFormPersistence(form);
    }

    // Setup ingredient suggestions
    this.setupIngredientSuggestions();
  }

  /**
   * Validate individual form field
   * @param {HTMLElement} field - Form field to validate
   */
  validateFormField(field) {
    // Remove any existing validation messages
    const existingError = field.parentNode.querySelector('.validation-error');
    if (existingError) {
      existingError.remove();
    }

    // Basic validation
    if (field.hasAttribute('required') && !field.value) {
      this.showFieldError(field, i18n.t('field-required', 'Ce champ est requis'));
      return false;
    }

    return true;
  }

  /**
   * Show field validation error
   * @param {HTMLElement} field - Form field
   * @param {string} message - Error message
   */
  showFieldError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'validation-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorDiv);
    
    // Remove error after 5 seconds
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.remove();
      }
    }, 5000);
  }

  /**
   * Setup form persistence
   * @param {HTMLElement} form - Form element
   */
  setupFormPersistence(form) {
    const FORM_KEY = 'recette-ia-form-state';

    try {
      // Load saved form state
      const savedState = localStorage.getItem(FORM_KEY);
      if (savedState) {
        const state = JSON.parse(savedState);
        Object.entries(state).forEach(([name, value]) => {
          const field = form.querySelector(`[name="${name}"]`);
          if (field) {
            if (field.type === 'checkbox') {
              field.checked = value;
            } else {
              field.value = value;
            }
          }
        });
      }

      // Save form state on changes
      form.addEventListener('change', () => {
        const formData = new FormData(form);
        const state = {};
        
        for (const [name, value] of formData.entries()) {
          state[name] = value;
        }

        // Also save checkbox states
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => {
          state[cb.name] = cb.checked;
        });

        localStorage.setItem(FORM_KEY, JSON.stringify(state));
      });

    } catch (error) {
      console.warn('[App] Could not setup form persistence:', error);
    }
  }

  /**
   * Setup ingredient suggestions
   */
  setupIngredientSuggestions() {
    const ingredientsInput = document.getElementById('ingredients');
    if (!ingredientsInput) return;

    const commonIngredients = [
      'tomates', 'oignons', 'ail', 'basilic', 'persil', 'thym', 'laurier',
      'pommes de terre', 'carottes', 'courgettes', 'aubergines', 'poivrons',
      'champignons', 'épinards', 'salade', 'concombre', 'avocat',
      'poulet', 'bœuf', 'porc', 'agneau', 'poisson', 'saumon', 'thon',
      'œufs', 'lait', 'beurre', 'fromage', 'yaourt', 'crème',
      'huile d\'olive', 'vinaigre', 'citron', 'lime', 'gingembre',
      'riz', 'pâtes', 'pain', 'farine', 'sucre', 'sel', 'poivre'
    ];

    let suggestionsContainer;

    ingredientsInput.addEventListener('input', (e) => {
      const value = e.target.value;
      const lastComma = value.lastIndexOf(',');
      const currentIngredient = lastComma >= 0 ? value.substring(lastComma + 1).trim() : value.trim();

      if (currentIngredient.length < 2) {
        this.hideIngredientSuggestions();
        return;
      }

      const suggestions = commonIngredients.filter(ingredient =>
        ingredient.toLowerCase().includes(currentIngredient.toLowerCase())
      ).slice(0, 5);

      if (suggestions.length > 0) {
        this.showIngredientSuggestions(suggestions, ingredientsInput);
      } else {
        this.hideIngredientSuggestions();
      }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
      if (!ingredientsInput.contains(e.target)) {
        this.hideIngredientSuggestions();
      }
    });
  }

  /**
   * Show ingredient suggestions
   * @param {string[]} suggestions - Ingredient suggestions
   * @param {HTMLElement} input - Input element
   */
  showIngredientSuggestions(suggestions, input) {
    this.hideIngredientSuggestions();

    const container = document.createElement('ul');
    container.id = 'ingredient-suggestions';
    container.className = 'ingredient-suggestions';
    container.style.cssText = `
      position: absolute;
      background: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      max-height: 200px;
      overflow-y: auto;
      z-index: 1000;
      list-style: none;
      padding: 0;
      margin: 0;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `;

    suggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.textContent = suggestion;
      li.style.cssText = `
        padding: 8px 12px;
        cursor: pointer;
        border-bottom: 1px solid #eee;
      `;
      
      li.addEventListener('mouseenter', () => {
        li.style.backgroundColor = '#f5f5f5';
      });
      
      li.addEventListener('mouseleave', () => {
        li.style.backgroundColor = 'white';
      });
      
      li.addEventListener('click', () => {
        this.selectIngredientSuggestion(suggestion, input);
      });
      
      container.appendChild(li);
    });

    // Position relative to input
    const rect = input.getBoundingClientRect();
    container.style.top = (rect.bottom + window.scrollY) + 'px';
    container.style.left = rect.left + 'px';
    container.style.width = rect.width + 'px';
    container.style.position = 'absolute';

    document.body.appendChild(container);
  }

  /**
   * Hide ingredient suggestions
   */
  hideIngredientSuggestions() {
    const existing = document.getElementById('ingredient-suggestions');
    if (existing) {
      existing.remove();
    }
  }

  /**
   * Select an ingredient suggestion
   * @param {string} suggestion - Selected ingredient
   * @param {HTMLElement} input - Input element
   */
  selectIngredientSuggestion(suggestion, input) {
    const value = input.value;
    const lastComma = value.lastIndexOf(',');
    
    if (lastComma >= 0) {
      input.value = value.substring(0, lastComma + 1) + ' ' + suggestion + ', ';
    } else {
      input.value = suggestion + ', ';
    }
    
    this.hideIngredientSuggestions();
    input.focus();
  }

  /**
   * Setup analytics tracking for user interactions
   */
  setupAnalyticsTracking() {
    if (!analytics.isAnalyticsEnabled()) return;

    // Track button clicks
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        const buttonText = e.target.textContent.trim();
        const buttonId = e.target.id;
        
        analytics.track('Button Clicked', {
          text: buttonText,
          id: buttonId,
          section: this.ui?.currentSection || 'unknown'
        });
      }
    });

    // Track form interactions
    const form = document.getElementById('recipe-form');
    if (form) {
      form.addEventListener('change', (e) => {
        if (e.target.name) {
          analytics.track('Form Field Changed', {
            field: e.target.name,
            type: e.target.type
          });
        }
      });
    }

    // Track scroll depth
    this.setupScrollTracking();
  }

  /**
   * Setup scroll depth tracking
   */
  setupScrollTracking() {
    if (!analytics.isAnalyticsEnabled()) return;

    let maxScroll = 0;
    let scrollTrackingTimer;

    window.addEventListener('scroll', () => {
      clearTimeout(scrollTrackingTimer);
      scrollTrackingTimer = setTimeout(() => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          // Track at 25%, 50%, 75%, 100%
          if (maxScroll >= 25 && maxScroll < 50) {
            analytics.track('Scroll Depth', { depth: '25%' });
          } else if (maxScroll >= 50 && maxScroll < 75) {
            analytics.track('Scroll Depth', { depth: '50%' });
          } else if (maxScroll >= 75 && maxScroll < 100) {
            analytics.track('Scroll Depth', { depth: '75%' });
          } else if (maxScroll >= 100) {
            analytics.track('Scroll Depth', { depth: '100%' });
          }
        }
      }, 250);
    });
  }

  /**
   * Setup global error handling
   */
  setupErrorHandling() {
    // Global error handler
    window.addEventListener('error', (e) => {
      console.error('[App] Global error:', e.error);
      
      if (analytics.isAnalyticsEnabled()) {
        analytics.track('JavaScript Error', {
          message: e.message,
          filename: e.filename,
          line: e.lineno,
          column: e.colno
        });
      }
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (e) => {
      console.error('[App] Unhandled promise rejection:', e.reason);
      
      if (analytics.isAnalyticsEnabled()) {
        analytics.track('Promise Rejection', {
          reason: e.reason?.toString() || 'Unknown'
        });
      }
    });
  }

  /**
   * Handle initialization errors
   * @param {Error} error - Initialization error
   */
  handleInitializationError(error) {
    // Show user-friendly error message
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #e74c3c;
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      z-index: 9999;
      max-width: 400px;
      text-align: center;
    `;
    errorDiv.innerHTML = `
      <strong>Erreur d'initialisation</strong><br>
      Veuillez recharger la page
    `;
    
    document.body.appendChild(errorDiv);

    // Auto-hide after 10 seconds
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.remove();
      }
    }, 10000);
  }

  /**
   * Get application info
   * @returns {Object} Application information
   */
  getAppInfo() {
    return {
      initialized: this.isInitialized,
      locale: i18n.getCurrentLocale(),
      analyticsEnabled: analytics.isAnalyticsEnabled(),
      pwaInstalled: pwa.isInstalled(),
      serviceWorkerReady: pwa.getRegistration() !== null
    };
  }
}

// Create and initialize the app
const app = new RecetteIAApp();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}

// Make app available globally for debugging
window.recetteIAApp = app;

// Export for module usage
export default app;