/**
 * @fileoverview Search functionality
 * @description Dedicated search logic for recipe database
 */

import { generator } from './generator.js';

/**
 * @typedef {Object} SearchFilters
 * @property {string} [cuisine] - Cuisine filter
 * @property {string} [mealType] - Meal type filter  
 * @property {string} [difficulty] - Difficulty filter
 */

/**
 * Search service class
 */
export class SearchService {
  constructor() {
    this.lastQuery = '';
    this.lastFilters = {};
    this.lastResults = [];
  }

  /**
   * Perform search with caching
   * @param {string} query - Search query
   * @param {SearchFilters} filters - Search filters
   * @returns {Object[]} Search results
   */
  search(query, filters = {}) {
    // Simple caching to avoid redundant searches
    if (query === this.lastQuery && 
        JSON.stringify(filters) === JSON.stringify(this.lastFilters)) {
      return this.lastResults;
    }

    this.lastQuery = query;
    this.lastFilters = filters;
    this.lastResults = generator.searchRecipes(query, filters);

    // Track search analytics if available
    if (window.analytics && window.analytics.isAnalyticsEnabled()) {
      window.analytics.track('Recipe Search', {
        query: query || 'empty',
        filters: Object.keys(filters).length,
        results: this.lastResults.length
      });
    }

    return this.lastResults;
  }

  /**
   * Get search suggestions based on partial query
   * @param {string} partialQuery - Partial search query
   * @returns {string[]} Search suggestions
   */
  getSuggestions(partialQuery) {
    if (!partialQuery || partialQuery.length < 2) {
      return [];
    }

    const suggestions = new Set();
    const query = partialQuery.toLowerCase();

    // Search through recipe names for suggestions
    this.lastResults.forEach(recipe => {
      const name = recipe.name.toLowerCase();
      if (name.includes(query)) {
        suggestions.add(recipe.name);
      }

      // Also suggest ingredients
      recipe.ingredients.forEach(ingredient => {
        const ing = ingredient.toLowerCase();
        if (ing.includes(query)) {
          // Extract the main ingredient name (before comma or parenthesis)
          const mainIng = ingredient.split(',')[0].split('(')[0].trim();
          suggestions.add(mainIng);
        }
      });
    });

    return Array.from(suggestions).slice(0, 5); // Limit to 5 suggestions
  }

  /**
   * Get popular searches
   * @returns {string[]} Popular search terms
   */
  getPopularSearches() {
    return [
      'chocolat',
      'poulet',
      'végétarien',
      'rapide',
      'pasta',
      'tarte',
      'salade',
      'soupe'
    ];
  }

  /**
   * Clear search cache
   */
  clearCache() {
    this.lastQuery = '';
    this.lastFilters = {};
    this.lastResults = [];
  }

  /**
   * Get last search results
   * @returns {Object[]} Last search results
   */
  getLastResults() {
    return this.lastResults;
  }

  /**
   * Get search statistics
   * @returns {Object} Search statistics
   */
  getSearchStats() {
    return {
      lastQuery: this.lastQuery,
      lastFilters: this.lastFilters,
      resultCount: this.lastResults.length,
      hasCache: this.lastResults.length > 0
    };
  }
}

// Export default instance
export const searchService = new SearchService();