/**
 * @fileoverview UI handler for Recette-IA
 * @description Manages user interface interactions, recipe display, and accessibility features
 */

import { AIRecipeGenerator } from '../core/generator.js';
import { Search } from '../core/search.js';

/**
 * @typedef {Object} Recipe
 * @property {string} name - Recipe name
 * @property {string[]} ingredients - Recipe ingredients
 * @property {string[]} instructions - Recipe instructions
 * @property {string} time - Cooking time
 * @property {string} difficulty - Difficulty level
 * @property {string} servings - Number of servings
 * @property {string} [tips] - Cooking tips
 * @property {string[]} [appliedRestrictions] - Applied dietary restrictions
 */

/**
 * UI Handler Class for managing all user interface interactions
 */
export class RecipeUI {
    /**
     * Initialize the UI handler
     * @param {Object} dependencies - Injected dependencies
     * @param {Object} dependencies.i18n - Internationalization instance
     * @param {Object} dependencies.analytics - Analytics instance
     */
    constructor(dependencies = {}) {
        this.generator = new AIRecipeGenerator();
        this.search = new Search();
        this.i18n = dependencies.i18n;
        this.analytics = dependencies.analytics;
        
        this.initializeEventListeners();
        this.initializeQuickActions();
        this.initializeAccessibilityFeatures();
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

        // Navigation buttons
        const newRecipeBtn = document.getElementById('new-recipe-btn');
        if (newRecipeBtn) {
            newRecipeBtn.addEventListener('click', () => this.showGeneratorForm());
        }

        // Search functionality
        const searchBtn = document.getElementById('search-btn');
        const searchInput = document.getElementById('search-input');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.handleSearch());
        }
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleSearch();
            });
            // Add search suggestions on input
            searchInput.addEventListener('input', (e) => this.handleSearchInput(e));
        }

        // Clear search
        const clearSearchBtn = document.getElementById('clear-search-btn');
        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => this.clearSearch());
        }

        // Add form field interactions for accessibility
        this.addFormEnhancements();
    }

    /**
     * Initialize mobile quick actions
     */
    initializeQuickActions() {
        const quickSearch = document.getElementById('quick-search');
        const quickGenerator = document.getElementById('quick-generator');
        const quickTop = document.getElementById('quick-top');

        if (quickSearch) {
            quickSearch.addEventListener('click', () => {
                document.querySelector('.search-section').scrollIntoView({ behavior: 'smooth' });
                document.getElementById('search-input')?.focus();
                this.trackQuickAction('search');
            });
        }

        if (quickGenerator) {
            quickGenerator.addEventListener('click', () => {
                this.showGeneratorForm();
                this.trackQuickAction('generator');
            });
        }

        if (quickTop) {
            quickTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                this.trackQuickAction('top');
            });
        }
    }

    /**
     * Initialize accessibility features
     */
    initializeAccessibilityFeatures() {
        // Announce search results to screen readers
        this.createLiveRegion();
        
        // Add keyboard navigation enhancements
        this.enhanceKeyboardNavigation();
        
        // Add focus management
        this.manageFocus();
    }

    /**
     * Create ARIA live region for announcements
     */
    createLiveRegion() {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'live-announcements';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'visually-hidden';
        document.body.appendChild(liveRegion);
    }

    /**
     * Announce message to screen readers
     * @param {string} message - Message to announce
     */
    announceToScreenReader(message) {
        const liveRegion = document.getElementById('live-announcements');
        if (liveRegion) {
            liveRegion.textContent = message;
            // Clear after a short delay
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }

    /**
     * Enhance keyboard navigation
     */
    enhanceKeyboardNavigation() {
        // Add escape key handler to close modals/sections
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Handle escape key actions
                this.handleEscapeKey();
            }
        });
    }

    /**
     * Handle escape key press
     */
    handleEscapeKey() {
        // Clear search if search results are visible
        const searchResults = document.getElementById('search-results');
        if (searchResults && searchResults.style.display === 'block') {
            this.clearSearch();
        }
    }

    /**
     * Manage focus for better accessibility
     */
    manageFocus() {
        // Focus management when showing/hiding sections
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const target = mutation.target;
                    if (target.style.display === 'block') {
                        // Focus first interactive element when section becomes visible
                        this.focusFirstInteractiveElement(target);
                    }
                }
            });
        });

        // Observe style changes on main sections
        const sections = [
            document.getElementById('recipe-section'),
            document.getElementById('search-results')
        ].filter(Boolean);

        sections.forEach(section => {
            observer.observe(section, { attributes: true });
        });
    }

    /**
     * Focus first interactive element in container
     * @param {HTMLElement} container - Container element
     */
    focusFirstInteractiveElement(container) {
        const focusableElements = container.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }

    /**
     * Add form enhancements for better UX
     */
    addFormEnhancements() {
        const formInputs = document.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            // Add visual feedback on focus
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
                this.parentElement.style.transition = 'transform 0.2s ease';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });

            // Add validation feedback
            if (input.hasAttribute('required')) {
                input.addEventListener('invalid', (e) => {
                    this.showValidationError(e.target);
                });
                input.addEventListener('input', (e) => {
                    this.clearValidationError(e.target);
                });
            }
        });
    }

    /**
     * Show validation error for form field
     * @param {HTMLElement} field - Form field element
     */
    showValidationError(field) {
        field.style.borderColor = '#e74c3c';
        field.setAttribute('aria-invalid', 'true');
        
        let errorMessage = field.nextElementSibling;
        if (!errorMessage || !errorMessage.classList.contains('field-error')) {
            errorMessage = document.createElement('div');
            errorMessage.className = 'field-error';
            errorMessage.style.cssText = 'color: #e74c3c; font-size: 0.9rem; margin-top: 5px;';
            field.parentNode.insertBefore(errorMessage, field.nextSibling);
        }
        
        errorMessage.textContent = this.i18n ? 
            this.i18n.t('validation.required') : 
            'Ce champ est requis';
    }

    /**
     * Clear validation error for form field
     * @param {HTMLElement} field - Form field element
     */
    clearValidationError(field) {
        field.style.borderColor = '';
        field.removeAttribute('aria-invalid');
        
        const errorMessage = field.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('field-error')) {
            errorMessage.remove();
        }
    }

    /**
     * Handle form submission
     * @param {Event} event - Form submit event
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
        
        this.showLoading();
        this.announceToScreenReader(
            this.i18n ? this.i18n.t('generator.generating') : 'Génération en cours...'
        );
        
        try {
            const recipe = await this.generator.generateRecipe(preferences);
            this.displayRecipe(recipe);
            
            // Track recipe generation
            if (this.analytics) {
                this.analytics.trackRecipeGeneration(recipe);
            }
        } catch (error) {
            this.showError(
                this.i18n ? 
                this.i18n.t('errors.generation_failed') : 
                'Erreur lors de la génération de la recette. Veuillez réessayer.'
            );
        }
    }

    /**
     * Show loading state
     */
    showLoading() {
        const generateBtn = document.getElementById('generate-btn');
        if (!generateBtn) return;
        
        const btnText = generateBtn.querySelector('.btn-text');
        const loading = generateBtn.querySelector('.loading');
        
        generateBtn.disabled = true;
        generateBtn.setAttribute('aria-busy', 'true');
        if (btnText) btnText.style.display = 'none';
        if (loading) loading.style.display = 'inline';
    }

    /**
     * Hide loading state
     */
    hideLoading() {
        const generateBtn = document.getElementById('generate-btn');
        if (!generateBtn) return;
        
        const btnText = generateBtn.querySelector('.btn-text');
        const loading = generateBtn.querySelector('.loading');
        
        generateBtn.disabled = false;
        generateBtn.removeAttribute('aria-busy');
        if (btnText) btnText.style.display = 'inline';
        if (loading) loading.style.display = 'none';
    }

    /**
     * Display generated recipe
     * @param {Recipe} recipe - Generated recipe
     */
    displayRecipe(recipe) {
        this.hideLoading();
        
        const recipeSection = document.getElementById('recipe-section');
        const recipeContent = document.getElementById('recipe-content');
        
        if (!recipeSection || !recipeContent) return;

        // Display applied dietary restrictions if any
        const restrictionsDisplay = recipe.appliedRestrictions && recipe.appliedRestrictions.length > 0 
            ? `<div class="applied-restrictions">
                <strong>🏷️ ${this.i18n ? this.i18n.t('recipe.restrictions_applied') : 'Restrictions appliquées'} :</strong> ${recipe.appliedRestrictions.join(', ')}
               </div>` 
            : '';
        
        recipeContent.innerHTML = `
            <div class="recipe-card">
                <h3 class="recipe-title">${recipe.name}</h3>
                
                ${restrictionsDisplay}
                
                <div class="recipe-meta">
                    <div class="meta-item">
                        <div class="meta-label">${this.i18n ? this.i18n.t('recipe.prep_time') : 'Temps de préparation'}</div>
                        <div class="meta-value">${recipe.time}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">${this.i18n ? this.i18n.t('recipe.difficulty') : 'Difficulté'}</div>
                        <div class="meta-value">${recipe.difficulty}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">${this.i18n ? this.i18n.t('recipe.servings') : 'Portions'}</div>
                        <div class="meta-value">${recipe.servings}</div>
                    </div>
                </div>
                
                <div class="recipe-content">
                    <div class="ingredients-section">
                        <h4 class="section-title">${this.i18n ? this.i18n.t('recipe.ingredients') : 'Ingrédients'}</h4>
                        <ul class="ingredients-list" role="list">
                            ${recipe.ingredients.map(ingredient => `<li role="listitem">${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="instructions-section">
                        <h4 class="section-title">${this.i18n ? this.i18n.t('recipe.instructions') : 'Instructions'}</h4>
                        <ol class="instructions-list" role="list">
                            ${recipe.instructions.map(instruction => `<li role="listitem">${instruction}</li>`).join('')}
                        </ol>
                    </div>
                </div>
                
                ${recipe.tips ? `
                    <div class="cooking-tips" style="margin-top: 25px; padding: 20px; background: #e8f4f8; border-radius: 10px; border-left: 4px solid #667eea;">
                        <strong>💡 ${recipe.tips}</strong>
                    </div>
                ` : ''}
            </div>
        `;
        
        // Hide form and show recipe
        const generatorSection = document.querySelector('.generator-section');
        if (generatorSection) generatorSection.style.display = 'none';
        recipeSection.style.display = 'block';
        
        // Scroll to recipe and announce
        recipeSection.scrollIntoView({ behavior: 'smooth' });
        this.announceToScreenReader(
            `${this.i18n ? this.i18n.t('recipe.generated') : 'Recette générée'}: ${recipe.name}`
        );
    }

    /**
     * Show generator form
     */
    showGeneratorForm() {
        const generatorSection = document.querySelector('.generator-section');
        const recipeSection = document.getElementById('recipe-section');
        const searchResults = document.getElementById('search-results');
        
        // Reset form
        const form = document.getElementById('recipe-form');
        if (form) form.reset();
        
        // Show form and hide other sections
        if (generatorSection) generatorSection.style.display = 'block';
        if (recipeSection) recipeSection.style.display = 'none';
        if (searchResults) searchResults.style.display = 'none';
        
        // Scroll to form
        if (generatorSection) {
            generatorSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    /**
     * Handle search input with suggestions
     * @param {Event} event - Input event
     */
    handleSearchInput(event) {
        const query = event.target.value;
        
        // Show suggestions for queries longer than 2 characters
        if (query.length >= 2) {
            this.showSearchSuggestions(query);
        } else {
            this.hideSearchSuggestions();
        }
    }

    /**
     * Show search suggestions
     * @param {string} query - Search query
     */
    showSearchSuggestions(query) {
        const suggestions = this.search.getSuggestions(query);
        
        // Create or update suggestions dropdown
        let dropdown = document.getElementById('search-suggestions');
        if (!dropdown) {
            dropdown = document.createElement('div');
            dropdown.id = 'search-suggestions';
            dropdown.className = 'search-suggestions';
            dropdown.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border: 1px solid #e1e5e9;
                border-radius: 0 0 10px 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                z-index: 100;
                max-height: 200px;
                overflow-y: auto;
            `;
            
            const searchContainer = document.querySelector('.search-input-group');
            if (searchContainer) {
                searchContainer.style.position = 'relative';
                searchContainer.appendChild(dropdown);
            }
        }
        
        dropdown.innerHTML = suggestions.map(suggestion => 
            `<div class="suggestion-item" style="padding: 10px; cursor: pointer; border-bottom: 1px solid #f0f0f0;" 
                 onclick="this.closest('.search-input-group').querySelector('input').value='${suggestion}'; this.parentElement.style.display='none';">
                ${suggestion}
             </div>`
        ).join('');
        
        dropdown.style.display = 'block';
    }

    /**
     * Hide search suggestions
     */
    hideSearchSuggestions() {
        const dropdown = document.getElementById('search-suggestions');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    }

    /**
     * Handle search functionality
     */
    handleSearch() {
        const searchInput = document.getElementById('search-input');
        const cuisineFilter = document.getElementById('search-cuisine');
        const mealFilter = document.getElementById('search-meal');
        const difficultyFilter = document.getElementById('search-difficulty');
        
        if (!searchInput) return;
        
        const query = searchInput.value.trim();
        const filters = {
            cuisine: cuisineFilter?.value || '',
            mealType: mealFilter?.value || '',
            difficulty: difficultyFilter?.value || ''
        };
        
        // Hide suggestions
        this.hideSearchSuggestions();
        
        if (query.length === 0 && !filters.cuisine && !filters.mealType && !filters.difficulty) {
            this.showError(
                this.i18n ? 
                this.i18n.t('search.empty_query') : 
                'Veuillez saisir un terme de recherche ou sélectionner un filtre.'
            );
            return;
        }
        
        const results = this.search.search(query, filters);
        this.displaySearchResults(results);
        
        // Track search
        if (this.analytics) {
            this.analytics.trackSearch(query, results.length);
        }
    }

    /**
     * Display search results
     * @param {Array} results - Search results
     */
    displaySearchResults(results) {
        const searchResultsSection = document.getElementById('search-results');
        const searchResultsContainer = document.getElementById('search-results-container');
        
        if (!searchResultsSection || !searchResultsContainer) return;
        
        if (results.length === 0) {
            searchResultsContainer.innerHTML = `
                <div class="no-results">
                    <p>${this.i18n ? this.i18n.t('search.no_results') : 'Aucune recette trouvée. Essayez avec d\'autres mots-clés.'}</p>
                </div>
            `;
        } else {
            searchResultsContainer.innerHTML = `
                <div class="search-results-grid">
                    ${results.slice(0, 12).map(recipe => `
                        <div class="recipe-preview" onclick="recipeUI.selectSearchResult('${recipe.cuisine}', '${recipe.mealType}', '${recipe.name}')" 
                             tabindex="0" role="button" aria-label="Sélectionner la recette ${recipe.name}"
                             onkeypress="if(event.key==='Enter') this.click()">
                            <h4>${recipe.name}</h4>
                            <div class="recipe-meta-preview">
                                <span class="cuisine-tag">${recipe.cuisine}</span>
                                <span>${recipe.time}</span>
                                <span>${recipe.difficulty}</span>
                            </div>
                            <div class="ingredients-preview">
                                <strong>${this.i18n ? this.i18n.t('search.main_ingredients') : 'Ingrédients principaux'}:</strong> 
                                ${recipe.ingredients.slice(0, 3).join(', ')}${recipe.ingredients.length > 3 ? '...' : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="search-summary">
                    <p><strong>${results.length}</strong> ${this.i18n ? this.i18n.t('search.results_found') : 'recette(s) trouvée(s)'}${results.length > 12 ? ` (${this.i18n ? this.i18n.t('search.first_shown') : '12 premières affichées'})` : ''}</p>
                </div>
            `;
        }
        
        // Hide other sections and show search results
        const generatorSection = document.querySelector('.generator-section');
        const recipeSection = document.getElementById('recipe-section');
        
        if (generatorSection) generatorSection.style.display = 'none';
        if (recipeSection) recipeSection.style.display = 'none';
        searchResultsSection.style.display = 'block';
        
        // Scroll to results and announce
        searchResultsSection.scrollIntoView({ behavior: 'smooth' });
        this.announceToScreenReader(
            `${results.length} ${this.i18n ? this.i18n.t('search.results_found') : 'résultats trouvés'}`
        );
    }

    /**
     * Select a search result
     * @param {string} cuisine - Cuisine type
     * @param {string} mealType - Meal type
     * @param {string} recipeName - Recipe name
     */
    selectSearchResult(cuisine, mealType, recipeName) {
        // Find the recipe in the database
        const recipe = this.generator.selectBaseRecipe({ cuisineType: cuisine, mealType: mealType });
        
        if (recipe && recipe.name === recipeName) {
            // Add cuisine and meal type info for display
            const enrichedRecipe = {
                ...recipe,
                cuisineStyle: cuisine,
                mealCategory: mealType,
                tips: this.generator.generateCookingTips({ cuisineType: cuisine, mealType: mealType })
            };
            
            this.displayRecipe(enrichedRecipe);
        }
    }

    /**
     * Clear search and return to generator
     */
    clearSearch() {
        // Clear search inputs
        const searchInput = document.getElementById('search-input');
        const cuisineFilter = document.getElementById('search-cuisine');
        const mealFilter = document.getElementById('search-meal');
        const difficultyFilter = document.getElementById('search-difficulty');
        
        if (searchInput) searchInput.value = '';
        if (cuisineFilter) cuisineFilter.value = '';
        if (mealFilter) mealFilter.value = '';
        if (difficultyFilter) difficultyFilter.value = '';
        
        // Hide search suggestions
        this.hideSearchSuggestions();
        
        // Hide search results and show generator form
        const searchResults = document.getElementById('search-results');
        if (searchResults) searchResults.style.display = 'none';
        
        this.showGeneratorForm();
    }

    /**
     * Show error message
     * @param {string} message - Error message
     */
    showError(message) {
        this.hideLoading();
        
        // Create or update error notification
        let errorDiv = document.getElementById('error-notification');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'error-notification';
            errorDiv.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #e74c3c;
                color: white;
                padding: 15px 20px;
                border-radius: 5px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                z-index: 1000;
                max-width: 300px;
                animation: slideIn 0.3s ease;
            `;
            document.body.appendChild(errorDiv);
        }
        
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (errorDiv) {
                errorDiv.style.display = 'none';
            }
        }, 5000);
        
        // Also announce to screen readers
        this.announceToScreenReader(message);
    }

    /**
     * Track quick action usage
     * @param {string} action - Action name
     */
    trackQuickAction(action) {
        if (this.analytics) {
            this.analytics.trackEvent('quick_action', { action });
        }
    }
}

// Global variable to access UI from onclick handlers in HTML
let recipeUI;

export { recipeUI };
export default RecipeUI;