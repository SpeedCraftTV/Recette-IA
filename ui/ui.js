/**
 * @fileoverview Enhanced UI Handler
 * @description Main UI controller with accessibility, i18n, and analytics integration
 */

import { generator } from '../core/generator.js';
import { searchService } from '../core/search.js';
import { i18n } from './i18n.js';

/**
 * Enhanced UI Handler Class
 */
export class RecipeUI {
  constructor() {
    this.currentSection = 'search';
    this.initializeEventListeners();
    this.setupAccessibility();
    this.setupMobileActions();
  }

  /**
   * Initialize all event listeners
   */
  initializeEventListeners() {
    // Form submission
    const form = document.getElementById('recipe-form');
    if (form) {
      form.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    // Button events
    this.setupButtonEvents();
    
    // Search events
    this.setupSearchEvents();
    
    // Keyboard events
    this.setupKeyboardEvents();
    
    // Add event delegation for recipe preview clicks
    document.addEventListener('click', (e) => {
      const recipePreview = e.target.closest('.recipe-preview');
      if (recipePreview) {
        const cuisine = recipePreview.dataset.cuisine;
        const mealType = recipePreview.dataset.mealType;
        const recipeName = recipePreview.dataset.recipeName;
        if (cuisine && mealType && recipeName) {
          this.selectSearchResult(cuisine, mealType, recipeName);
        }
      }
    });
    
    // Add event delegation for locale switcher
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('locale-btn')) {
        const locale = e.target.dataset.locale;
        if (locale && window.i18n) {
          window.i18n.switchLocale(locale);
        }
      }
    });
    
    // Add event delegation for mobile quick actions
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-action-btn')) {
        const action = e.target.dataset.action;
        switch (action) {
          case 'search':
            this.scrollToSection('search-section');
            break;
          case 'generator':
            this.scrollToSection('generator-section');
            break;
          case 'top':
            this.scrollToTop();
            break;
        }
      }
    });
    
    // Setup other event types
    this.setupKeyboardEvents();
    this.setupWindowEvents();
  }

  /**
   * Setup button event listeners
   */
  setupButtonEvents() {
    const newRecipeBtn = document.getElementById('new-recipe-btn');
    if (newRecipeBtn) {
      newRecipeBtn.addEventListener('click', () => this.showGeneratorForm());
    }

    const clearSearchBtn = document.getElementById('clear-search-btn');
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => this.clearSearch());
    }
  }

  /**
   * Setup search event listeners
   */
  setupSearchEvents() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');

    if (searchBtn) {
      searchBtn.addEventListener('click', () => this.handleSearch());
    }

    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.handleSearch();
        }
      });

      // Add input debouncing for live search suggestions
      let searchTimeout;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          this.handleSearchSuggestions(e.target.value);
        }, 300);
      });
    }
  }

  /**
   * Setup keyboard navigation
   */
  setupKeyboardEvents() {
    document.addEventListener('keydown', (e) => {
      // Global keyboard shortcuts
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'k': // Ctrl/Cmd + K for search
            e.preventDefault();
            this.focusSearch();
            break;
          case 'n': // Ctrl/Cmd + N for new recipe
            e.preventDefault();
            this.showGeneratorForm();
            break;
        }
      }

      // Escape key to close modals or reset
      if (e.key === 'Escape') {
        this.handleEscape();
      }
    });
  }

  /**
   * Setup window event listeners
   */
  setupWindowEvents() {
    // Handle browser back/forward
    window.addEventListener('popstate', (e) => {
      this.handleBrowserNavigation(e.state);
    });

    // Handle window resize for responsive adjustments
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  }

  /**
   * Setup accessibility features
   */
  setupAccessibility() {
    // Announce section changes to screen readers
    this.announceRegion = document.createElement('div');
    this.announceRegion.setAttribute('aria-live', 'polite');
    this.announceRegion.setAttribute('aria-atomic', 'true');
    this.announceRegion.className = 'visually-hidden';
    document.body.appendChild(this.announceRegion);

    // Enhanced focus management
    this.setupFocusManagement();
    
    // Skip link functionality
    this.setupSkipLink();
  }

  /**
   * Setup focus management
   */
  setupFocusManagement() {
    // Store last focused element
    let lastFocusedElement = null;

    document.addEventListener('focusin', (e) => {
      lastFocusedElement = e.target;
    });

    // Trap focus in modals when needed
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        this.handleTabNavigation(e);
      }
    });
  }

  /**
   * Setup skip link functionality
   */
  setupSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('main-content');
        if (target) {
          target.focus();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  /**
   * Setup mobile quick actions
   */
  setupMobileActions() {
    // Mobile quick actions are now handled via event delegation in initializeEventListeners
  }

  /**
   * Handle form submission with enhanced validation
   * @param {Event} event - Form submission event
   */
  async handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    // Get all selected dietary restrictions
    const dietaryRestrictions = [];
    const checkboxes = event.target.querySelectorAll('input[name="dietaryRestrictions"]:checked');
    checkboxes.forEach(checkbox => {
      dietaryRestrictions.push(checkbox.value);
    });
    
    const preferences = {
      cuisineType: formData.get('cuisineType'),
      mealType: formData.get('mealType'),
      dietaryRestrictions: dietaryRestrictions,
      cookingTime: formData.get('cookingTime'),
      ingredients: formData.get('ingredients')
    };
    
    // Validate form
    if (!this.validateForm(preferences)) {
      return;
    }
    
    this.showLoading();
    this.announceToScreenReader(i18n.t('generating', 'Génération en cours...'));
    
    try {
      const recipe = await generator.generateRecipe(preferences);
      this.displayRecipe(recipe);
      
      // Track analytics
      if (window.analytics && window.analytics.isAnalyticsEnabled()) {
        window.analytics.track('Recipe Generated', {
          cuisine: preferences.cuisineType,
          meal: preferences.mealType,
          restrictions: dietaryRestrictions.length,
          hasIngredients: !!preferences.ingredients
        });
      }
    } catch (error) {
      console.error('Recipe generation error:', error);
      this.showError(i18n.t('error-generation', 'Erreur lors de la génération de la recette. Veuillez réessayer.'));
    }
  }

  /**
   * Validate form data
   * @param {Object} preferences - Form preferences
   * @returns {boolean} True if valid
   */
  validateForm(preferences) {
    if (!preferences.cuisineType || !preferences.mealType) {
      this.showError(i18n.t('error-required', 'Veuillez sélectionner un type de cuisine et de repas.'));
      return false;
    }
    return true;
  }

  /**
   * Show loading state with accessibility
   */
  showLoading() {
    const generateBtn = document.getElementById('generate-btn');
    const btnText = generateBtn?.querySelector('.btn-text');
    const loading = generateBtn?.querySelector('.loading');
    
    if (generateBtn && btnText && loading) {
      generateBtn.disabled = true;
      generateBtn.setAttribute('aria-busy', 'true');
      btnText.style.display = 'none';
      loading.style.display = 'inline';
    }
  }

  /**
   * Hide loading state
   */
  hideLoading() {
    const generateBtn = document.getElementById('generate-btn');
    const btnText = generateBtn?.querySelector('.btn-text');
    const loading = generateBtn?.querySelector('.loading');
    
    if (generateBtn && btnText && loading) {
      generateBtn.disabled = false;
      generateBtn.setAttribute('aria-busy', 'false');
      btnText.style.display = 'inline';
      loading.style.display = 'none';
    }
  }

  /**
   * Display recipe with enhanced accessibility
   * @param {Object} recipe - Generated recipe
   */
  displayRecipe(recipe) {
    this.hideLoading();
    
    const recipeSection = document.getElementById('recipe-section');
    const recipeContent = document.getElementById('recipe-content');
    
    if (!recipeSection || !recipeContent) return;

    // Display applied dietary restrictions if any
    const restrictionsDisplay = recipe.appliedRestrictions && recipe.appliedRestrictions.length > 0 
      ? `<div class="applied-restrictions" role="status">
          <strong>🏷️ ${i18n.t('restrictions-applied', 'Restrictions appliquées')} :</strong> ${recipe.appliedRestrictions.join(', ')}
         </div>` 
      : '';
    
    recipeContent.innerHTML = `
      <div class="recipe-card">
        <h3 class="recipe-title">${recipe.name}</h3>
        
        ${restrictionsDisplay}
        
        <div class="recipe-meta">
          <div class="meta-item">
            <div class="meta-label">${i18n.t('prep-time', 'Temps de préparation')}</div>
            <div class="meta-value">${recipe.time}</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">${i18n.t('difficulty', 'Difficulté')}</div>
            <div class="meta-value">${recipe.difficulty}</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">${i18n.t('servings', 'Portions')}</div>
            <div class="meta-value">${recipe.servings}</div>
          </div>
        </div>
        
        <div class="recipe-content">
          <div class="ingredients-section">
            <h4 class="section-title">${i18n.t('ingredients', 'Ingrédients')}</h4>
            <ul class="ingredients-list" role="list">
              ${recipe.ingredients.map(ingredient => `<li role="listitem">${ingredient}</li>`).join('')}
            </ul>
          </div>
          
          <div class="instructions-section">
            <h4 class="section-title">${i18n.t('instructions', 'Instructions')}</h4>
            <ol class="instructions-list" role="list">
              ${recipe.instructions.map(instruction => `<li role="listitem">${instruction}</li>`).join('')}
            </ol>
          </div>
        </div>
        
        ${recipe.tips ? `
          <div class="cooking-tips" role="complementary" style="margin-top: 25px; padding: 20px; background: #e8f4f8; border-radius: 10px; border-left: 4px solid #667eea;">
            <strong>💡 ${recipe.tips}</strong>
          </div>
        ` : ''}
      </div>
    `;
    
    // Hide other sections and show recipe
    this.hideAllSections();
    recipeSection.style.display = 'block';
    this.currentSection = 'recipe';
    
    // Update browser history
    this.updateBrowserHistory('recipe', { recipeId: recipe.name });
    
    // Announce to screen readers
    this.announceToScreenReader(i18n.t('recipe-generated', `Recette générée : ${recipe.name}`));
    
    // Scroll to recipe and focus
    recipeSection.scrollIntoView({ behavior: 'smooth' });
    recipeSection.setAttribute('tabindex', '-1');
    recipeSection.focus();
  }

  /**
   * Show generator form
   */
  showGeneratorForm() {
    const generatorSection = document.querySelector('.generator-section');
    const recipeForm = document.getElementById('recipe-form');
    
    if (!generatorSection) return;

    // Reset form
    if (recipeForm) {
      recipeForm.reset();
    }
    
    // Show form and hide others
    this.hideAllSections();
    generatorSection.style.display = 'block';
    this.currentSection = 'generator';
    
    // Update browser history
    this.updateBrowserHistory('generator');
    
    // Scroll to form and focus first input
    generatorSection.scrollIntoView({ behavior: 'smooth' });
    const firstInput = generatorSection.querySelector('select, input');
    if (firstInput) {
      firstInput.focus();
    }
  }

  /**
   * Handle search with enhanced features
   */
  handleSearch() {
    const searchInput = document.getElementById('search-input');
    const searchCuisine = document.getElementById('search-cuisine');
    const searchMeal = document.getElementById('search-meal');
    const searchDifficulty = document.getElementById('search-difficulty');
    
    if (!searchInput) return;

    const query = searchInput.value.trim();
    const filters = {
      cuisine: searchCuisine?.value || '',
      mealType: searchMeal?.value || '',
      difficulty: searchDifficulty?.value || ''
    };
    
    // Remove empty filters
    Object.keys(filters).forEach(key => {
      if (!filters[key]) delete filters[key];
    });
    
    const results = searchService.search(query, filters);
    this.displaySearchResults(results, query);
  }

  /**
   * Handle search suggestions
   * @param {string} query - Search query
   */
  handleSearchSuggestions(query) {
    if (!query || query.length < 2) {
      this.hideSuggestions();
      return;
    }

    const suggestions = searchService.getSuggestions(query);
    this.showSuggestions(suggestions);
  }

  /**
   * Show search suggestions
   * @param {string[]} suggestions - Search suggestions
   */
  showSuggestions(suggestions) {
    if (suggestions.length === 0) {
      this.hideSuggestions();
      return;
    }

    let suggestionsList = document.getElementById('search-suggestions');
    
    if (!suggestionsList) {
      suggestionsList = document.createElement('ul');
      suggestionsList.id = 'search-suggestions';
      suggestionsList.className = 'search-suggestions';
      suggestionsList.setAttribute('role', 'listbox');
      suggestionsList.setAttribute('aria-label', 'Suggestions de recherche');
      
      const searchContainer = document.querySelector('.search-input-group');
      if (searchContainer) {
        searchContainer.appendChild(suggestionsList);
      }
    }

    suggestionsList.innerHTML = suggestions.map((suggestion, index) => `
      <li role="option" class="suggestion-item" data-suggestion="${suggestion}" tabindex="-1">
        ${suggestion}
      </li>
    `).join('');

    // Add click handlers
    suggestionsList.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        this.selectSuggestion(item.dataset.suggestion);
      });
    });

    suggestionsList.style.display = 'block';
  }

  /**
   * Hide search suggestions
   */
  hideSuggestions() {
    const suggestionsList = document.getElementById('search-suggestions');
    if (suggestionsList) {
      suggestionsList.style.display = 'none';
    }
  }

  /**
   * Select a search suggestion
   * @param {string} suggestion - Selected suggestion
   */
  selectSuggestion(suggestion) {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = suggestion;
      this.hideSuggestions();
      this.handleSearch();
    }
  }

  /**
   * Display search results with accessibility
   * @param {Object[]} results - Search results
   * @param {string} query - Search query
   */
  displaySearchResults(results, query) {
    const searchResultsSection = document.getElementById('search-results');
    const searchResultsContainer = document.getElementById('search-results-container');
    
    if (!searchResultsSection || !searchResultsContainer) return;

    if (results.length === 0) {
      searchResultsContainer.innerHTML = `
        <div class="no-results" role="status">
          <p>${i18n.t('no-results', 'Aucune recette trouvée.')} ${i18n.t('try-other-keywords', 'Essayez avec d\'autres mots-clés.')}</p>
        </div>
      `;
    } else {
      searchResultsContainer.innerHTML = `
        <div class="search-results-grid" role="list" aria-label="Résultats de recherche">
          ${results.slice(0, 12).map(recipe => `
            <div class="recipe-preview" role="listitem" tabindex="0" 
                 data-cuisine="${recipe.cuisine}" data-meal-type="${recipe.mealType}" data-recipe-name="${recipe.name}"
                 onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}"
                 aria-label="Sélectionner la recette ${recipe.name}">
              <h4>${recipe.name}</h4>
              <div class="recipe-meta-preview">
                <span class="cuisine-tag">${recipe.cuisine}</span>
                <span>${recipe.time}</span>
                <span>${recipe.difficulty}</span>
              </div>
              <div class="ingredients-preview">
                <strong>${i18n.t('main-ingredients', 'Ingrédients principaux')}:</strong> ${recipe.ingredients.slice(0, 3).join(', ')}${recipe.ingredients.length > 3 ? '...' : ''}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="search-summary" role="status">
          <p><strong>${results.length}</strong> ${i18n.t('recipes-found', 'recette(s) trouvée(s)')}${results.length > 12 ? ' (12 premières affichées)' : ''}</p>
        </div>
      `;
    }
    
    // Hide other sections and show search results
    this.hideAllSections();
    searchResultsSection.style.display = 'block';
    this.currentSection = 'search-results';
    
    // Update browser history
    this.updateBrowserHistory('search', { query, filters: searchService.lastFilters });
    
    // Announce to screen readers
    this.announceToScreenReader(i18n.t('search-complete', `Recherche terminée. ${results.length} résultats trouvés.`));
    
    // Scroll to results
    searchResultsSection.scrollIntoView({ behavior: 'smooth' });
  }

  /**
   * Select a search result
   * @param {string} cuisine - Cuisine type
   * @param {string} mealType - Meal type
   * @param {string} recipeName - Recipe name
   */
  selectSearchResult(cuisine, mealType, recipeName) {
    // Find the recipe in the database
    const results = searchService.getLastResults();
    const recipe = results.find(r => r.name === recipeName && r.cuisine === cuisine && r.mealType === mealType);
    
    if (recipe) {
      // Add cuisine and meal type info for display
      const enrichedRecipe = {
        ...recipe,
        cuisineStyle: cuisine,
        mealCategory: mealType,
        tips: generator.generateCookingTips({ cuisineType: cuisine, mealType: mealType })
      };
      
      this.displayRecipe(enrichedRecipe);
      
      // Track analytics
      if (window.analytics && window.analytics.isAnalyticsEnabled()) {
        window.analytics.track('Search Result Selected', {
          cuisine,
          mealType,
          recipeName
        });
      }
    }
  }

  /**
   * Clear search and return to generator
   */
  clearSearch() {
    // Clear search inputs
    const searchInput = document.getElementById('search-input');
    const searchCuisine = document.getElementById('search-cuisine');
    const searchMeal = document.getElementById('search-meal');
    const searchDifficulty = document.getElementById('search-difficulty');
    
    if (searchInput) searchInput.value = '';
    if (searchCuisine) searchCuisine.value = '';
    if (searchMeal) searchMeal.value = '';
    if (searchDifficulty) searchDifficulty.value = '';
    
    // Clear search cache
    searchService.clearCache();
    
    // Hide suggestions
    this.hideSuggestions();
    
    // Hide search results and show generator form
    this.hideAllSections();
    const generatorSection = document.querySelector('.generator-section');
    if (generatorSection) {
      generatorSection.style.display = 'block';
      this.currentSection = 'generator';
    }
    
    // Update browser history
    this.updateBrowserHistory('generator');
    
    // Focus search input
    if (searchInput) {
      searchInput.focus();
    }
  }

  /**
   * Hide all main sections
   */
  hideAllSections() {
    const sections = [
      document.querySelector('.generator-section'),
      document.getElementById('search-results'),
      document.getElementById('recipe-section')
    ];
    
    sections.forEach(section => {
      if (section) {
        section.style.display = 'none';
      }
    });
  }

  /**
   * Focus search input
   */
  focusSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  }

  /**
   * Handle escape key
   */
  handleEscape() {
    // Hide suggestions
    this.hideSuggestions();
    
    // Close any modals or return to main view
    this.showGeneratorForm();
  }

  /**
   * Handle tab navigation for accessibility
   * @param {KeyboardEvent} e - Keyboard event
   */
  handleTabNavigation(e) {
    // Implement focus trapping if needed
    // This is a placeholder for advanced focus management
  }

  /**
   * Handle browser navigation
   * @param {Object} state - Browser state
   */
  handleBrowserNavigation(state) {
    if (!state) {
      this.showGeneratorForm();
      return;
    }
    
    switch (state.section) {
      case 'search':
        if (state.query !== undefined) {
          const searchInput = document.getElementById('search-input');
          if (searchInput) {
            searchInput.value = state.query;
          }
          this.handleSearch();
        }
        break;
      case 'generator':
        this.showGeneratorForm();
        break;
      case 'recipe':
        // Could restore recipe if we stored it
        break;
    }
  }

  /**
   * Handle window resize
   */
  handleResize() {
    // Responsive adjustments if needed
    this.hideSuggestions(); // Hide suggestions on resize
  }

  /**
   * Update browser history
   * @param {string} section - Current section
   * @param {Object} data - Additional data
   */
  updateBrowserHistory(section, data = {}) {
    const state = { section, ...data };
    const url = new URL(window.location);
    
    switch (section) {
      case 'search':
        if (data.query) {
          url.searchParams.set('q', data.query);
        }
        break;
      case 'generator':
        url.searchParams.delete('q');
        break;
    }
    
    history.pushState(state, '', url);
  }

  /**
   * Announce message to screen readers
   * @param {string} message - Message to announce
   */
  announceToScreenReader(message) {
    if (this.announceRegion) {
      this.announceRegion.textContent = message;
      
      // Clear after announcement
      setTimeout(() => {
        this.announceRegion.textContent = '';
      }, 1000);
    }
  }

  /**
   * Scroll to a specific section
   * @param {string} sectionId - ID of section to scroll to
   */
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Focus the section for screen readers
      section.setAttribute('tabindex', '-1');
      section.focus();
      
      // Track analytics
      if (window.analytics && window.analytics.isAnalyticsEnabled()) {
        window.analytics.track('Mobile Quick Action', { section: sectionId });
      }
    }
  }

  /**
   * Scroll to top of page
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Focus the skip link or header
    const skipLink = document.querySelector('.skip-link');
    const header = document.querySelector('header');
    if (skipLink) {
      skipLink.focus();
    } else if (header) {
      header.setAttribute('tabindex', '-1');
      header.focus();
    }
    
    // Track analytics
    if (window.analytics && window.analytics.isAnalyticsEnabled()) {
      window.analytics.track('Mobile Quick Action', { section: 'top' });
    }
  }

  /**
   * Show error message
   * @param {string} message - Error message
   */
  showError(message) {
    this.hideLoading();
    
    // For now, use alert - could be enhanced with custom modal
    alert(message);
    
    // Announce to screen readers
    this.announceToScreenReader(message);
  }
}

// Global variable to access UI from onclick handlers
let recipeUI;

// Make UI available globally for onclick handlers in HTML
window.RecipeUI = RecipeUI;