/**
 * @fileoverview Internationalization System
 * @description Minimal i18n system for FR/EN translations with data-i18n binding
 */

/**
 * @typedef {Object} TranslationDict
 * @property {Object.<string, string>} fr - French translations
 * @property {Object.<string, string>} en - English translations
 */

/**
 * Translation dictionary for UI strings
 * @type {TranslationDict}
 */
export const translations = {
  fr: {
    // App info
    'app-title': 'Recette-IA',
    'app-subtitle': 'Générez des recettes délicieuses avec l\'intelligence artificielle',
    'app-name': 'Recette-IA',
    
    // Navigation
    'skip-to-content': 'Aller au contenu principal',
    'quick-search': 'Rechercher',
    'quick-generator': 'Générateur',
    'quick-top': 'Haut',
    
    // Search section
    'search-title': 'Rechercher une recette',
    'search-label': 'Rechercher par nom, ingrédient, cuisine',
    'search-placeholder': 'Rechercher par nom, ingrédient, cuisine...',
    'search-button': 'Rechercher',
    'search-results-title': 'Résultats de recherche',
    'new-search': 'Nouvelle recherche',
    
    // Filters
    'filter-cuisine': 'Cuisine :',
    'filter-meal': 'Type de repas :',
    'filter-difficulty': 'Difficulté :',
    
    // Filter options
    'all-cuisines': 'Toutes les cuisines',
    'all-meals': 'Tous les repas',
    'all-difficulties': 'Toutes les difficultés',
    
    // Cuisines
    'cuisine-french': 'Française',
    'cuisine-italian': 'Italienne',
    'cuisine-asian': 'Asiatique',
    'cuisine-mediterranean': 'Méditerranéenne',
    'cuisine-mexican': 'Mexicaine',
    'cuisine-indian': 'Indienne',
    'cuisine-spanish': 'Espagnole',
    'cuisine-german': 'Allemande',
    'cuisine-british': 'Britannique',
    'cuisine-brazilian': 'Brésilienne',
    'cuisine-lebanese': 'Libanaise',
    
    // Meals
    'meal-breakfast': 'Petit-déjeuner',
    'meal-lunch': 'Déjeuner',
    'meal-dinner': 'Dîner',
    'meal-dessert': 'Dessert',
    'meal-snack': 'Collation',
    
    // Difficulties
    'difficulty-easy': 'Facile',
    'difficulty-medium': 'Intermédiaire',
    'difficulty-hard': 'Difficile',
    'difficulty-very-hard': 'Très difficile',
    
    // Generator form
    'generator-title': 'Créer une nouvelle recette',
    'form-cuisine': 'Type de cuisine :',
    'form-meal': 'Type de repas :',
    'form-restrictions': 'Restrictions alimentaires :',
    'form-time': 'Temps de cuisson souhaité :',
    'form-ingredients': 'Ingrédients disponibles (optionnel) :',
    
    // Dietary restrictions
    'diet-vegetarian': 'Végétarien',
    'diet-vegan': 'Végétalien',
    'diet-gluten-free': 'Sans gluten',
    'diet-lactose-free': 'Sans lactose',
    'diet-keto': 'Cétogène',
    'diet-halal': 'Halal',
    'diet-kosher': 'Casher',
    
    // Time options
    'time-quick': 'Rapide (moins de 30 min)',
    'time-medium': 'Moyen (30-60 min)',
    'time-long': 'Long (plus d\'1 heure)',
    
    // Form helpers
    'ingredients-placeholder': 'Ex: tomates, basilic, mozzarella...',
    'ingredients-help': 'Séparez les ingrédients par des virgules',
    'generate-button': 'Générer une recette',
    'generate-help': 'Appuyez sur Entrée ou cliquez pour générer votre recette personnalisée',
    'generating': 'Génération en cours...',
    
    // Recipe display
    'recipe-title': 'Votre recette générée',
    'new-recipe': 'Générer une nouvelle recette',
    'prep-time': 'Temps de préparation',
    'difficulty': 'Difficulté',
    'servings': 'Portions',
    'ingredients': 'Ingrédients',
    'instructions': 'Instructions',
    'main-ingredients': 'Ingrédients principaux',
    'recipe-generated': 'Recette générée',
    
    // Footer
    'footer-powered': 'Propulsé par l\'intelligence artificielle',
    'analytics-opt-in': '📊 Activer les statistiques',
    'analytics-opt-out': '📊 Désactiver les statistiques',
    'analytics-enabled': 'Statistiques activées'
  },
  
  en: {
    // App info
    'app-title': 'Recipe-AI',
    'app-subtitle': 'Generate delicious recipes with artificial intelligence',
    'app-name': 'Recipe-AI',
    
    // Navigation
    'skip-to-content': 'Skip to main content',
    'quick-search': 'Search',
    'quick-generator': 'Generator',
    'quick-top': 'Top',
    
    // Search section
    'search-title': 'Search for a recipe',
    'search-label': 'Search by name, ingredient, cuisine',
    'search-placeholder': 'Search by name, ingredient, cuisine...',
    'search-button': 'Search',
    'search-results-title': 'Search results',
    'new-search': 'New search',
    
    // Filters
    'filter-cuisine': 'Cuisine:',
    'filter-meal': 'Meal type:',
    'filter-difficulty': 'Difficulty:',
    
    // Filter options
    'all-cuisines': 'All cuisines',
    'all-meals': 'All meals',
    'all-difficulties': 'All difficulties',
    
    // Cuisines
    'cuisine-french': 'French',
    'cuisine-italian': 'Italian',
    'cuisine-asian': 'Asian',
    'cuisine-mediterranean': 'Mediterranean',
    'cuisine-mexican': 'Mexican',
    'cuisine-indian': 'Indian',
    'cuisine-spanish': 'Spanish',
    'cuisine-german': 'German',
    'cuisine-british': 'British',
    'cuisine-brazilian': 'Brazilian',
    'cuisine-lebanese': 'Lebanese',
    
    // Meals
    'meal-breakfast': 'Breakfast',
    'meal-lunch': 'Lunch',
    'meal-dinner': 'Dinner',
    'meal-dessert': 'Dessert',
    'meal-snack': 'Snack',
    
    // Difficulties
    'difficulty-easy': 'Easy',
    'difficulty-medium': 'Intermediate',
    'difficulty-hard': 'Hard',
    'difficulty-very-hard': 'Very hard',
    
    // Generator form
    'generator-title': 'Create a new recipe',
    'form-cuisine': 'Cuisine type:',
    'form-meal': 'Meal type:',
    'form-restrictions': 'Dietary restrictions:',
    'form-time': 'Desired cooking time:',
    'form-ingredients': 'Available ingredients (optional):',
    
    // Dietary restrictions
    'diet-vegetarian': 'Vegetarian',
    'diet-vegan': 'Vegan',
    'diet-gluten-free': 'Gluten-free',
    'diet-lactose-free': 'Lactose-free',
    'diet-keto': 'Keto',
    'diet-halal': 'Halal',
    'diet-kosher': 'Kosher',
    
    // Time options
    'time-quick': 'Quick (less than 30 min)',
    'time-medium': 'Medium (30-60 min)',
    'time-long': 'Long (more than 1 hour)',
    
    // Form helpers
    'ingredients-placeholder': 'Ex: tomatoes, basil, mozzarella...',
    'ingredients-help': 'Separate ingredients with commas',
    'generate-button': 'Generate recipe',
    'generate-help': 'Press Enter or click to generate your personalized recipe',
    'generating': 'Generating...',
    
    // Recipe display
    'recipe-title': 'Your generated recipe',
    'new-recipe': 'Generate new recipe',
    'prep-time': 'Preparation time',
    'difficulty': 'Difficulty',
    'servings': 'Servings',
    'ingredients': 'Ingredients',
    'instructions': 'Instructions',
    'main-ingredients': 'Main ingredients',
    'recipe-generated': 'Recipe generated',
    
    // Footer
    'footer-powered': 'Powered by artificial intelligence',
    'analytics-opt-in': '📊 Enable analytics',
    'analytics-opt-out': '📊 Disable analytics',
    'analytics-enabled': 'Analytics enabled'
  }
};

/**
 * I18n class for managing translations and locale switching
 */
class I18n {
  constructor() {
    this.currentLocale = this.getStoredLocale() || 'fr';
    this.init();
  }
  
  /**
   * Initialize the i18n system
   */
  init() {
    this.updateUI();
    this.updateLocaleButtons();
  }
  
  /**
   * Get stored locale from localStorage
   * @returns {string|null} Stored locale or null
   */
  getStoredLocale() {
    try {
      return localStorage.getItem('recette-ia-locale');
    } catch (error) {
      console.warn('[I18n] localStorage not available:', error);
      return null;
    }
  }
  
  /**
   * Store locale in localStorage
   * @param {string} locale - Locale to store
   */
  storeLocale(locale) {
    try {
      localStorage.setItem('recette-ia-locale', locale);
    } catch (error) {
      console.warn('[I18n] Could not store locale:', error);
    }
  }
  
  /**
   * Switch to a different locale
   * @param {string} locale - Target locale ('fr' or 'en')
   */
  switchLocale(locale) {
    if (locale === this.currentLocale) return;
    
    if (!translations[locale]) {
      console.error('[I18n] Unknown locale:', locale);
      return;
    }
    
    this.currentLocale = locale;
    this.storeLocale(locale);
    this.updateUI();
    this.updateLocaleButtons();
    
    // Update document language
    document.documentElement.lang = locale;
    
    console.log('[I18n] Switched to locale:', locale);
  }
  
  /**
   * Get translation for a key
   * @param {string} key - Translation key
   * @param {string} [fallback] - Fallback text if key not found
   * @returns {string} Translated text
   */
  t(key, fallback = key) {
    const translation = translations[this.currentLocale]?.[key];
    if (!translation) {
      console.warn('[I18n] Missing translation for key:', key, 'in locale:', this.currentLocale);
      return fallback;
    }
    return translation;
  }
  
  /**
   * Update all UI elements with data-i18n attributes
   */
  updateUI() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);
      
      // Update different types of content
      if (element.tagName === 'INPUT' && element.type !== 'checkbox' && element.type !== 'radio') {
        if (element.placeholder !== undefined) {
          element.placeholder = translation;
        } else {
          element.value = translation;
        }
      } else if (element.tagName === 'OPTION') {
        element.textContent = translation;
      } else {
        element.textContent = translation;
      }
      
      // Update aria-label if present
      if (element.hasAttribute('aria-label')) {
        element.setAttribute('aria-label', translation);
      }
    });
  }
  
  /**
   * Update locale button states
   */
  updateLocaleButtons() {
    const buttons = document.querySelectorAll('.locale-btn');
    buttons.forEach(button => {
      const locale = button.getAttribute('data-locale');
      if (locale === this.currentLocale) {
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
      } else {
        button.classList.remove('active');
        button.setAttribute('aria-pressed', 'false');
      }
    });
  }
  
  /**
   * Get current locale
   * @returns {string} Current locale
   */
  getCurrentLocale() {
    return this.currentLocale;
  }
  
  /**
   * Get available locales
   * @returns {string[]} Array of available locales
   */
  getAvailableLocales() {
    return Object.keys(translations);
  }
}

// Create global i18n instance
export const i18n = new I18n();

// Make i18n available globally for onclick handlers
window.i18n = i18n;