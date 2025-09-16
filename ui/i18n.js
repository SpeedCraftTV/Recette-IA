/**
 * @fileoverview Internationalization (i18n) system for Recette-IA
 * @description Provides translation support for French and English locales
 */

/**
 * @typedef {Object} Translations
 * @property {string} fr - French translation
 * @property {string} en - English translation
 */

/**
 * Translation data for French and English
 * @type {Object.<string, Translations>}
 */
const translations = {
    'page.title': {
        fr: 'Recette-IA - Générateur de Recettes par IA',
        en: 'Recipe-AI - AI Recipe Generator'
    },
    'header.title': {
        fr: '🍳 Recette-IA',
        en: '🍳 Recipe-AI'
    },
    'header.subtitle': {
        fr: 'Générez des recettes délicieuses avec l\'intelligence artificielle',
        en: 'Generate delicious recipes with artificial intelligence'
    },
    'search.title': {
        fr: '🔍 Rechercher une recette',
        en: '🔍 Search for a recipe'
    },
    'search.input_label': {
        fr: 'Rechercher une recette',
        en: 'Search for a recipe'
    },
    'search.placeholder': {
        fr: 'Rechercher par nom, ingrédient, cuisine...',
        en: 'Search by name, ingredient, cuisine...'
    },
    'search.button': {
        fr: 'Rechercher',
        en: 'Search'
    },
    'search.cuisine_label': {
        fr: 'Cuisine :',
        en: 'Cuisine:'
    },
    'search.meal_label': {
        fr: 'Type de repas :',
        en: 'Meal type:'
    },
    'search.difficulty_label': {
        fr: 'Difficulté :',
        en: 'Difficulty:'
    },
    'search.all_cuisines': {
        fr: 'Toutes les cuisines',
        en: 'All cuisines'
    },
    'search.all_meals': {
        fr: 'Tous les repas',
        en: 'All meals'
    },
    'search.all_difficulties': {
        fr: 'Toutes les difficultés',
        en: 'All difficulties'
    },
    'search.results_title': {
        fr: 'Résultats de recherche',
        en: 'Search results'
    },
    'search.new_search': {
        fr: 'Nouvelle recherche',
        en: 'New search'
    },
    'search.no_results': {
        fr: 'Aucune recette trouvée. Essayez avec d\'autres mots-clés.',
        en: 'No recipes found. Try different keywords.'
    },
    'search.main_ingredients': {
        fr: 'Ingrédients principaux',
        en: 'Main ingredients'
    },
    'search.results_found': {
        fr: 'recette(s) trouvée(s)',
        en: 'recipe(s) found'
    },
    'search.first_shown': {
        fr: '12 premières affichées',
        en: 'first 12 shown'
    },
    'search.empty_query': {
        fr: 'Veuillez saisir un terme de recherche ou sélectionner un filtre.',
        en: 'Please enter a search term or select a filter.'
    },
    'generator.title': {
        fr: 'Créer une nouvelle recette',
        en: 'Create a new recipe'
    },
    'generator.cuisine_type': {
        fr: 'Type de cuisine :',
        en: 'Cuisine type:'
    },
    'generator.meal_type': {
        fr: 'Type de repas :',
        en: 'Meal type:'
    },
    'generator.dietary_restrictions': {
        fr: 'Restrictions alimentaires :',
        en: 'Dietary restrictions:'
    },
    'generator.cooking_time': {
        fr: 'Temps de cuisson souhaité :',
        en: 'Desired cooking time:'
    },
    'generator.ingredients_label': {
        fr: 'Ingrédients disponibles (optionnel) :',
        en: 'Available ingredients (optional):'
    },
    'generator.ingredients_placeholder': {
        fr: 'Ex: tomates, basilic, mozzarella...',
        en: 'e.g.: tomatoes, basil, mozzarella...'
    },
    'generator.generate_button': {
        fr: 'Générer une recette',
        en: 'Generate recipe'
    },
    'generator.generating': {
        fr: 'Génération en cours...',
        en: 'Generating...'
    },
    'recipe.title': {
        fr: 'Votre recette générée',
        en: 'Your generated recipe'
    },
    'recipe.new_recipe': {
        fr: 'Générer une nouvelle recette',
        en: 'Generate new recipe'
    },
    'recipe.prep_time': {
        fr: 'Temps de préparation',
        en: 'Preparation time'
    },
    'recipe.difficulty': {
        fr: 'Difficulté',
        en: 'Difficulty'
    },
    'recipe.servings': {
        fr: 'Portions',
        en: 'Servings'
    },
    'recipe.ingredients': {
        fr: 'Ingrédients',
        en: 'Ingredients'
    },
    'recipe.instructions': {
        fr: 'Instructions',
        en: 'Instructions'
    },
    'recipe.generated': {
        fr: 'Recette générée',
        en: 'Recipe generated'
    },
    'recipe.restrictions_applied': {
        fr: 'Restrictions appliquées',
        en: 'Applied restrictions'
    },
    'cuisines.french': {
        fr: 'Française',
        en: 'French'
    },
    'cuisines.italian': {
        fr: 'Italienne',
        en: 'Italian'
    },
    'cuisines.asian': {
        fr: 'Asiatique',
        en: 'Asian'
    },
    'cuisines.mediterranean': {
        fr: 'Méditerranéenne',
        en: 'Mediterranean'
    },
    'cuisines.mexican': {
        fr: 'Mexicaine',
        en: 'Mexican'
    },
    'cuisines.indian': {
        fr: 'Indienne',
        en: 'Indian'
    },
    'cuisines.spanish': {
        fr: 'Espagnole',
        en: 'Spanish'
    },
    'cuisines.german': {
        fr: 'Allemande',
        en: 'German'
    },
    'cuisines.british': {
        fr: 'Britannique',
        en: 'British'
    },
    'cuisines.brazilian': {
        fr: 'Brésilienne',
        en: 'Brazilian'
    },
    'cuisines.lebanese': {
        fr: 'Libanaise',
        en: 'Lebanese'
    },
    'meals.breakfast': {
        fr: 'Petit-déjeuner',
        en: 'Breakfast'
    },
    'meals.lunch': {
        fr: 'Déjeuner',
        en: 'Lunch'
    },
    'meals.dinner': {
        fr: 'Dîner',
        en: 'Dinner'
    },
    'meals.dessert': {
        fr: 'Dessert',
        en: 'Dessert'
    },
    'meals.snack': {
        fr: 'Collation',
        en: 'Snack'
    },
    'difficulty.easy': {
        fr: 'Facile',
        en: 'Easy'
    },
    'difficulty.intermediate': {
        fr: 'Intermédiaire',
        en: 'Intermediate'
    },
    'difficulty.hard': {
        fr: 'Difficile',
        en: 'Hard'
    },
    'difficulty.very_hard': {
        fr: 'Très difficile',
        en: 'Very hard'
    },
    'dietary.vegetarian': {
        fr: 'Végétarien',
        en: 'Vegetarian'
    },
    'dietary.vegan': {
        fr: 'Végétalien',
        en: 'Vegan'
    },
    'dietary.gluten_free': {
        fr: 'Sans gluten',
        en: 'Gluten-free'
    },
    'dietary.lactose_free': {
        fr: 'Sans lactose',
        en: 'Lactose-free'
    },
    'dietary.keto': {
        fr: 'Cétogène',
        en: 'Keto'
    },
    'dietary.halal': {
        fr: 'Halal',
        en: 'Halal'
    },
    'dietary.kosher': {
        fr: 'Casher',
        en: 'Kosher'
    },
    'cooking_time.quick': {
        fr: 'Rapide (moins de 30 min)',
        en: 'Quick (less than 30 min)'
    },
    'cooking_time.medium': {
        fr: 'Moyen (30-60 min)',
        en: 'Medium (30-60 min)'
    },
    'cooking_time.long': {
        fr: 'Long (plus d\'1 heure)',
        en: 'Long (more than 1 hour)'
    },
    'footer.copyright': {
        fr: 'Recette-IA - Propulsé par l\'intelligence artificielle',
        en: 'Recipe-AI - Powered by artificial intelligence'
    },
    'footer.analytics_opt_in': {
        fr: 'Activer les statistiques (respectueuses de la vie privée)',
        en: 'Enable analytics (privacy-friendly)'
    },
    'footer.analytics_opt_out': {
        fr: 'Désactiver les statistiques',
        en: 'Disable analytics'
    },
    'accessibility.skip_to_content': {
        fr: 'Aller au contenu principal',
        en: 'Skip to main content'
    },
    'quick_actions.search': {
        fr: 'Aller à la recherche',
        en: 'Go to search'
    },
    'quick_actions.generator': {
        fr: 'Aller au générateur',
        en: 'Go to generator'
    },
    'quick_actions.top': {
        fr: 'Retour en haut',
        en: 'Back to top'
    }
};

/**
 * I18n class for handling internationalization
 */
export class I18n {
    /**
     * Initialize the i18n system
     */
    constructor() {
        this.currentLocale = this.getStoredLocale() || 'fr';
        this.translations = translations;
    }

    /**
     * Get the stored locale from localStorage
     * @returns {string|null} The stored locale or null if not found
     */
    getStoredLocale() {
        try {
            return localStorage.getItem('recette-ia-locale');
        } catch (e) {
            console.warn('localStorage not available for locale storage');
            return null;
        }
    }

    /**
     * Set and store the current locale
     * @param {string} locale - The locale to set (fr or en)
     */
    setLocale(locale) {
        if (!['fr', 'en'].includes(locale)) {
            console.warn(`Unsupported locale: ${locale}`);
            return;
        }
        
        this.currentLocale = locale;
        
        try {
            localStorage.setItem('recette-ia-locale', locale);
        } catch (e) {
            console.warn('Failed to store locale in localStorage');
        }
        
        this.updateDocument();
        this.updateLocaleButtons();
    }

    /**
     * Get translation for a key
     * @param {string} key - The translation key
     * @returns {string} The translated text
     */
    t(key) {
        const translation = this.translations[key];
        if (!translation) {
            console.warn(`Missing translation for key: ${key}`);
            return key;
        }
        
        return translation[this.currentLocale] || translation.fr || key;
    }

    /**
     * Update all elements with data-i18n attributes
     */
    updateDocument() {
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLocale;
        document.documentElement.setAttribute('data-locale', this.currentLocale);
        
        // Update document title
        document.title = this.t('page.title');
        
        // Update all elements with data-i18n attribute
        const i18nElements = document.querySelectorAll('[data-i18n]');
        i18nElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });
        
        // Update placeholder attributes
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });
        
        // Update title attributes
        const titleElements = document.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.t(key);
        });
        
        // Update aria-label attributes
        const ariaLabelElements = document.querySelectorAll('[data-i18n-aria-label]');
        ariaLabelElements.forEach(element => {
            const key = element.getAttribute('data-i18n-aria-label');
            element.setAttribute('aria-label', this.t(key));
        });
    }

    /**
     * Update locale button states
     */
    updateLocaleButtons() {
        const buttons = document.querySelectorAll('.locale-btn');
        buttons.forEach(button => {
            const buttonLocale = button.getAttribute('data-locale');
            button.classList.toggle('active', buttonLocale === this.currentLocale);
        });
    }

    /**
     * Initialize locale switching functionality
     */
    initializeLocaleSwitcher() {
        const buttons = document.querySelectorAll('.locale-btn');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const locale = button.getAttribute('data-locale');
                this.setLocale(locale);
            });
        });
        
        // Set initial state
        this.updateDocument();
        this.updateLocaleButtons();
    }

    /**
     * Get current locale
     * @returns {string} The current locale
     */
    getCurrentLocale() {
        return this.currentLocale;
    }
}

export default I18n;