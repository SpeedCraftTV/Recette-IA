/**
 * @fileoverview Search functionality for Recette-IA
 * @description Provides advanced search capabilities with filters and ranking
 */

import { AIRecipeGenerator } from './generator.js';

/**
 * @typedef {Object} SearchResult
 * @property {string} name - Recipe name
 * @property {string[]} ingredients - Recipe ingredients
 * @property {string[]} instructions - Recipe instructions
 * @property {string} time - Cooking time
 * @property {string} difficulty - Difficulty level
 * @property {string} servings - Number of servings
 * @property {string} cuisine - Cuisine type
 * @property {string} mealType - Meal type
 * @property {number} matchScore - Search relevance score
 */

/**
 * @typedef {Object} SearchFilters
 * @property {string} [cuisine] - Cuisine filter
 * @property {string} [mealType] - Meal type filter
 * @property {string} [difficulty] - Difficulty filter
 */

/**
 * Search class for handling recipe search functionality
 */
export class Search {
    /**
     * Initialize the search system
     */
    constructor() {
        this.generator = new AIRecipeGenerator();
        this.lastQuery = '';
        this.lastResults = [];
    }

    /**
     * Perform a search with the given query and filters
     * @param {string} query - Search query
     * @param {SearchFilters} filters - Search filters
     * @returns {SearchResult[]} Array of search results
     */
    search(query, filters = {}) {
        // Cache the search for potential reuse
        this.lastQuery = query;
        
        // Use the generator's search functionality
        const results = this.generator.searchRecipes(query, filters);
        
        // Apply additional search enhancements
        const enhancedResults = this.enhanceSearchResults(results, query);
        
        this.lastResults = enhancedResults;
        return enhancedResults;
    }

    /**
     * Enhance search results with additional metadata and filtering
     * @param {SearchResult[]} results - Raw search results
     * @param {string} query - Original search query
     * @returns {SearchResult[]} Enhanced search results
     */
    enhanceSearchResults(results, query) {
        const queryTerms = query.toLowerCase().split(' ').filter(term => term.length > 1);
        
        return results.map(result => {
            // Calculate additional relevance factors
            let enhancedScore = result.matchScore || 0;
            
            // Boost exact name matches
            if (result.name.toLowerCase().includes(query.toLowerCase())) {
                enhancedScore += 5;
            }
            
            // Boost if multiple query terms are found
            const nameWords = result.name.toLowerCase().split(' ');
            const commonWords = queryTerms.filter(term => 
                nameWords.some(word => word.includes(term))
            );
            enhancedScore += commonWords.length * 2;
            
            // Boost based on ingredient relevance
            const ingredientMatches = queryTerms.filter(term =>
                result.ingredients.some(ingredient => 
                    ingredient.toLowerCase().includes(term)
                )
            );
            enhancedScore += ingredientMatches.length * 1.5;
            
            // Add relevance indicators
            const relevanceIndicators = this.getRelevanceIndicators(result, queryTerms);
            
            return {
                ...result,
                enhancedScore,
                relevanceIndicators,
                searchHighlights: this.getSearchHighlights(result, queryTerms)
            };
        }).sort((a, b) => b.enhancedScore - a.enhancedScore);
    }

    /**
     * Get relevance indicators for a search result
     * @param {SearchResult} result - Search result
     * @param {string[]} queryTerms - Query terms
     * @returns {string[]} Array of relevance indicators
     */
    getRelevanceIndicators(result, queryTerms) {
        const indicators = [];
        
        // Check for exact matches in name
        queryTerms.forEach(term => {
            if (result.name.toLowerCase().includes(term)) {
                indicators.push(`Nom contient "${term}"`);
            }
        });
        
        // Check for ingredient matches
        const ingredientMatches = queryTerms.filter(term =>
            result.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(term)
            )
        );
        
        if (ingredientMatches.length > 0) {
            indicators.push(`Ingrédients: ${ingredientMatches.join(', ')}`);
        }
        
        // Check for cuisine/meal type matches
        queryTerms.forEach(term => {
            if (result.cuisine.toLowerCase().includes(term)) {
                indicators.push(`Cuisine ${result.cuisine}`);
            }
            if (result.mealType.toLowerCase().includes(term)) {
                indicators.push(`Type: ${result.mealType}`);
            }
        });
        
        return indicators;
    }

    /**
     * Get search highlights for a result
     * @param {SearchResult} result - Search result
     * @param {string[]} queryTerms - Query terms
     * @returns {Object} Object with highlighted text sections
     */
    getSearchHighlights(result, queryTerms) {
        const highlights = {
            name: result.name,
            ingredients: result.ingredients.slice(0, 3), // First 3 ingredients
            matchedIngredients: []
        };
        
        // Highlight matching ingredients
        queryTerms.forEach(term => {
            result.ingredients.forEach(ingredient => {
                if (ingredient.toLowerCase().includes(term.toLowerCase()) && 
                    !highlights.matchedIngredients.includes(ingredient)) {
                    highlights.matchedIngredients.push(ingredient);
                }
            });
        });
        
        return highlights;
    }

    /**
     * Get search suggestions based on partial query
     * @param {string} partialQuery - Partial search query
     * @returns {string[]} Array of search suggestions
     */
    getSuggestions(partialQuery) {
        if (!partialQuery || partialQuery.length < 2) {
            return this.getPopularSearchTerms();
        }
        
        const suggestions = new Set();
        const query = partialQuery.toLowerCase();
        
        // Search through recipe names
        this.generator.searchRecipes('', {}).forEach(recipe => {
            const name = recipe.name.toLowerCase();
            if (name.includes(query)) {
                suggestions.add(recipe.name);
            }
            
            // Add ingredient suggestions
            recipe.ingredients.forEach(ingredient => {
                const ingLower = ingredient.toLowerCase();
                if (ingLower.includes(query)) {
                    suggestions.add(ingredient);
                }
            });
        });
        
        // Add cuisine and meal type suggestions
        const categories = [
            'française', 'italienne', 'asiatique', 'méditerranéenne', 
            'mexicaine', 'indienne', 'espagnole', 'allemande', 
            'britannique', 'brésilienne', 'libanaise',
            'petit-déjeuner', 'déjeuner', 'dîner', 'dessert', 'collation'
        ];
        
        categories.forEach(category => {
            if (category.includes(query)) {
                suggestions.add(category);
            }
        });
        
        return Array.from(suggestions).slice(0, 8); // Limit to 8 suggestions
    }

    /**
     * Get popular search terms for initial suggestions
     * @returns {string[]} Array of popular search terms
     */
    getPopularSearchTerms() {
        return [
            'poulet', 'tomates', 'chocolat', 'pasta', 'légumes',
            'facile', 'rapide', 'végétarien', 'dessert', 'salade'
        ];
    }

    /**
     * Filter results by difficulty level
     * @param {SearchResult[]} results - Results to filter
     * @param {string} difficulty - Difficulty level
     * @returns {SearchResult[]} Filtered results
     */
    filterByDifficulty(results, difficulty) {
        if (!difficulty) return results;
        return results.filter(result => result.difficulty === difficulty);
    }

    /**
     * Filter results by cooking time
     * @param {SearchResult[]} results - Results to filter
     * @param {string} timeRange - Time range (e.g., "rapide", "moyen", "long")
     * @returns {SearchResult[]} Filtered results
     */
    filterByTime(results, timeRange) {
        if (!timeRange) return results;
        
        const timeFilters = {
            'rapide': (time) => {
                const minutes = this.extractMinutes(time);
                return minutes <= 30;
            },
            'moyen': (time) => {
                const minutes = this.extractMinutes(time);
                return minutes > 30 && minutes <= 90;
            },
            'long': (time) => {
                const minutes = this.extractMinutes(time);
                return minutes > 90;
            }
        };
        
        const filter = timeFilters[timeRange];
        if (!filter) return results;
        
        return results.filter(result => filter(result.time));
    }

    /**
     * Extract minutes from time string
     * @param {string} timeString - Time string (e.g., "30 minutes", "1h30")
     * @returns {number} Total minutes
     */
    extractMinutes(timeString) {
        const hourMatch = timeString.match(/(\d+)h/);
        const minuteMatch = timeString.match(/(\d+)\s*min/);
        
        let totalMinutes = 0;
        
        if (hourMatch) {
            totalMinutes += parseInt(hourMatch[1]) * 60;
        }
        
        if (minuteMatch) {
            totalMinutes += parseInt(minuteMatch[1]);
        }
        
        // If no specific pattern found, try to extract any number as minutes
        if (totalMinutes === 0) {
            const numberMatch = timeString.match(/(\d+)/);
            if (numberMatch) {
                totalMinutes = parseInt(numberMatch[1]);
            }
        }
        
        return totalMinutes;
    }

    /**
     * Get search statistics
     * @returns {Object} Search statistics
     */
    getSearchStats() {
        return {
            lastQuery: this.lastQuery,
            lastResultCount: this.lastResults.length,
            hasResults: this.lastResults.length > 0,
            topCuisines: this.getTopCuisines(this.lastResults),
            avgDifficulty: this.getAverageDifficulty(this.lastResults)
        };
    }

    /**
     * Get top cuisines from results
     * @param {SearchResult[]} results - Search results
     * @returns {Object} Cuisine frequency map
     */
    getTopCuisines(results) {
        const cuisineCount = {};
        results.forEach(result => {
            cuisineCount[result.cuisine] = (cuisineCount[result.cuisine] || 0) + 1;
        });
        
        return Object.entries(cuisineCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3)
            .reduce((acc, [cuisine, count]) => {
                acc[cuisine] = count;
                return acc;
            }, {});
    }

    /**
     * Get average difficulty from results
     * @param {SearchResult[]} results - Search results
     * @returns {string} Most common difficulty level
     */
    getAverageDifficulty(results) {
        const difficultyCount = {};
        results.forEach(result => {
            difficultyCount[result.difficulty] = (difficultyCount[result.difficulty] || 0) + 1;
        });
        
        const mostCommon = Object.entries(difficultyCount)
            .sort(([,a], [,b]) => b - a)[0];
        
        return mostCommon ? mostCommon[0] : 'Facile';
    }

    /**
     * Clear search cache
     */
    clearCache() {
        this.lastQuery = '';
        this.lastResults = [];
    }
}

export default Search;