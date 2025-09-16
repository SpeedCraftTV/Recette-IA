/**
 * @fileoverview AI Recipe Generator for Recette-IA
 * @description Provides intelligent recipe generation with dietary restrictions and customization
 */

import { recipeDatabase } from '../data/recipeDatabase.js';

/**
 * @typedef {Object} Recipe
 * @property {string} name - Recipe name
 * @property {string[]} ingredients - List of ingredients
 * @property {string[]} instructions - Cooking instructions
 * @property {string} time - Cooking time
 * @property {string} difficulty - Difficulty level
 * @property {string} servings - Number of servings
 * @property {string} [tips] - Cooking tips
 * @property {string} [cuisineStyle] - Cuisine style
 * @property {string} [mealCategory] - Meal category
 * @property {string[]} [appliedRestrictions] - Applied dietary restrictions
 */

/**
 * @typedef {Object} RecipePreferences
 * @property {string} cuisineType - Type of cuisine
 * @property {string} mealType - Type of meal
 * @property {string[]} [dietaryRestrictions] - Dietary restrictions
 * @property {string} [cookingTime] - Cooking time preference
 * @property {string} [ingredients] - User available ingredients
 */

/**
 * @typedef {Object} SearchFilters
 * @property {string} [cuisine] - Cuisine filter
 * @property {string} [mealType] - Meal type filter
 * @property {string} [difficulty] - Difficulty filter
 */

// Dietary modification functions
const dietaryModifications = {
    'végétarien': (recipe) => ({
        ...recipe,
        ingredients: recipe.ingredients.map(ing => 
            ing.replace(/viande|porc|bœuf|agneau|volaille|poulet|canard|jambon|lardons|bacon/gi, 'protéines végétales')
               .replace(/bouillon de .*$/gi, 'bouillon de légumes')
        ),
        instructions: recipe.instructions.map(inst => 
            inst.replace(/viande|porc|bœuf|agneau|volaille|poulet|canard/gi, 'protéines végétales')
        ),
        name: recipe.name + ' (Version Végétarienne)'
    }),
    
    'végétalien': (recipe) => ({
        ...recipe,
        ingredients: recipe.ingredients.map(ing => 
            ing.replace(/viande|porc|bœuf|agneau|volaille|poulet|canard|jambon|lardons|bacon/gi, 'protéines végétales')
               .replace(/œuf|oeuf/gi, 'substitut d\'œuf')
               .replace(/lait|crème|beurre|fromage|yaourt/gi, 'alternative végétale')
               .replace(/bouillon de .*$/gi, 'bouillon de légumes')
        ),
        instructions: recipe.instructions.map(inst => 
            inst.replace(/viande|porc|bœuf|agneau|volaille|poulet|canard/gi, 'protéines végétales')
                .replace(/œuf|oeuf/gi, 'substitut d\'œuf')
                .replace(/lait|crème|beurre|fromage|yaourt/gi, 'alternative végétale')
        ),
        name: recipe.name + ' (Version Végétalienne)'
    }),
    
    'sans-gluten': (recipe) => ({
        ...recipe,
        ingredients: recipe.ingredients.map(ing => 
            ing.replace(/farine/gi, 'farine sans gluten')
               .replace(/pain|brioche|croissant/gi, 'équivalent sans gluten')
               .replace(/pâtes/gi, 'pâtes sans gluten')
        ),
        instructions: recipe.instructions.map(inst => 
            inst.replace(/farine/gi, 'farine sans gluten')
        ),
        name: recipe.name + ' (Sans Gluten)'
    }),
    
    'sans-lactose': (recipe) => ({
        ...recipe,
        ingredients: recipe.ingredients.map(ing => 
            ing.replace(/lait|crème|beurre|fromage|yaourt/gi, 'alternative sans lactose')
        ),
        instructions: recipe.instructions.map(inst => 
            inst.replace(/lait|crème|beurre|fromage|yaourt/gi, 'alternative sans lactose')
        ),
        name: recipe.name + ' (Sans Lactose)'
    }),
    
    'cétogène': (recipe) => ({
        ...recipe,
        ingredients: recipe.ingredients.filter(ing => 
            !/(pommes de terre|riz|pâtes|pain|farine|sucre)/gi.test(ing)
        ).concat(['Légumes verts à feuilles', 'Avocat', 'Huile MCT']),
        name: recipe.name + ' (Version Cétogène)',
        instructions: [...recipe.instructions, 'Servez avec des légumes faibles en glucides.']
    }),
    
    'halal': (recipe) => ({
        ...recipe,
        ingredients: recipe.ingredients.map(ing => 
            ing.replace(/porc|jambon|lardons|bacon/gi, 'viande halal')
               .replace(/vin|alcool/gi, 'bouillon aromatisé')
        ),
        instructions: recipe.instructions.map(inst => 
            inst.replace(/vin|alcool/gi, 'bouillon aromatisé')
        ),
        name: recipe.name + ' (Halal)'
    }),
    
    'casher': (recipe) => ({
        ...recipe,
        ingredients: recipe.ingredients.map(ing => 
            ing.replace(/porc|jambon|lardons|bacon/gi, 'viande casher')
        ),
        instructions: recipe.instructions.filter(inst => 
            !/(mélangez.*viande.*lait|ajoutez.*fromage.*viande)/gi.test(inst)
        ),
        name: recipe.name + ' (Casher)'
    })
};

// Time adjustment functions
const timeAdjustments = {
    'rapide': (recipe) => ({
        ...recipe,
        time: '15-25 minutes',
        instructions: recipe.instructions.map(inst => 
            inst.replace(/mijoter \d+h?/gi, 'mijoter 10 minutes')
               .replace(/laisser reposer \d+h?/gi, 'laisser reposer 5 minutes')
        )
    }),
    
    'moyen': (recipe) => ({
        ...recipe,
        time: '30-60 minutes'
    }),
    
    'long': (recipe) => ({
        ...recipe,
        time: '1h30-3h',
        instructions: [...recipe.instructions, 'Laissez mijoter longuement pour développer les saveurs.']
    })
};

/**
 * AI Recipe Generator Class
 * Handles recipe generation, search, and customization
 */
export class AIRecipeGenerator {
    /**
     * Initialize the generator
     */
    constructor() {
        this.isGenerating = false;
    }

    /**
     * Search recipes in database
     * @param {string} query - Search query
     * @param {SearchFilters} filters - Search filters
     * @returns {Recipe[]} Array of matching recipes
     */
    searchRecipes(query, filters = {}) {
        const results = [];
        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 1);
        
        // Search through all cuisines
        Object.keys(recipeDatabase).forEach(cuisine => {
            // Apply cuisine filter
            if (filters.cuisine && cuisine !== filters.cuisine) return;
            
            Object.keys(recipeDatabase[cuisine]).forEach(mealType => {
                // Apply meal type filter
                if (filters.mealType && mealType !== filters.mealType) return;
                
                recipeDatabase[cuisine][mealType].forEach(recipe => {
                    // Apply difficulty filter
                    if (filters.difficulty && recipe.difficulty !== filters.difficulty) return;
                    
                    let matchScore = 0;
                    const searchableText = [
                        recipe.name,
                        ...recipe.ingredients,
                        ...recipe.instructions,
                        cuisine,
                        mealType
                    ].join(' ').toLowerCase();
                    
                    // Calculate match score
                    searchTerms.forEach(term => {
                        if (searchableText.includes(term)) {
                            matchScore++;
                            // Boost score for name matches
                            if (recipe.name.toLowerCase().includes(term)) {
                                matchScore += 2;
                            }
                        }
                    });
                    
                    if (matchScore > 0 || searchTerms.length === 0) {
                        results.push({
                            ...recipe,
                            cuisine,
                            mealType,
                            matchScore
                        });
                    }
                });
            });
        });
        
        // Sort by match score
        return results.sort((a, b) => b.matchScore - a.matchScore);
    }

    /**
     * Generate recipe based on user preferences
     * @param {RecipePreferences} preferences - User preferences
     * @returns {Promise<Recipe>} Generated recipe
     */
    async generateRecipe(preferences) {
        this.isGenerating = true;
        
        // Simulate AI processing time
        await this.delay(2000 + Math.random() * 2000);
        
        try {
            let recipe = this.selectBaseRecipe(preferences);
            recipe = this.applyDietaryRestrictions(recipe, preferences.dietaryRestrictions);
            recipe = this.adjustCookingTime(recipe, preferences.cookingTime);
            recipe = this.customizeWithIngredients(recipe, preferences.ingredients);
            recipe = this.addPersonalizedTouch(recipe, preferences);
            
            // Track applied dietary restrictions for display
            if (preferences.dietaryRestrictions && preferences.dietaryRestrictions.length > 0) {
                recipe.appliedRestrictions = preferences.dietaryRestrictions;
            }
            
            this.isGenerating = false;
            return recipe;
        } catch (error) {
            this.isGenerating = false;
            throw error;
        }
    }

    /**
     * Select base recipe from database
     * @param {RecipePreferences} preferences - User preferences
     * @returns {Recipe} Base recipe
     */
    selectBaseRecipe(preferences) {
        const { cuisineType, mealType } = preferences;
        const cuisineRecipes = recipeDatabase[cuisineType];
        
        if (!cuisineRecipes || !cuisineRecipes[mealType]) {
            // Fallback to a generated recipe
            return this.generateFallbackRecipe(preferences);
        }
        
        const recipes = cuisineRecipes[mealType];
        return { ...recipes[Math.floor(Math.random() * recipes.length)] };
    }

    /**
     * Generate fallback recipe when no database match
     * @param {RecipePreferences} preferences - User preferences
     * @returns {Recipe} Fallback recipe
     */
    generateFallbackRecipe(preferences) {
        const { cuisineType, mealType } = preferences;
        
        const baseIngredients = {
            'française': ['Beurre', 'Échalotes', 'Vin blanc', 'Herbes fraîches'],
            'italienne': ['Huile d\'olive', 'Ail', 'Tomates', 'Parmesan'],
            'asiatique': ['Huile de sésame', 'Gingembre', 'Sauce soja', 'Ciboules'],
            'méditerranéenne': ['Huile d\'olive', 'Citron', 'Olives', 'Feta'],
            'mexicaine': ['Avocat', 'Citron vert', 'Coriandre', 'Piment'],
            'indienne': ['Épices garam masala', 'Curcuma', 'Coriandre', 'Yaourt'],
            'espagnole': ['Huile d\'olive', 'Safran', 'Tomates', 'Ail'],
            'allemande': ['Beurre', 'Choucroute', 'Moutarde', 'Herbes'],
            'britannique': ['Beurre', 'Crème', 'Herbes', 'Fromage'],
            'brésilienne': ['Huile de dendê', 'Lait de coco', 'Citron vert', 'Coriandre'],
            'libanaise': ['Huile d\'olive', 'Citron', 'Menthe', 'Tahini']
        };

        return {
            name: `${mealType.charAt(0).toUpperCase() + mealType.slice(1)} ${cuisineType} Délicieux`,
            ingredients: [
                ...baseIngredients[cuisineType] || baseIngredients['française'],
                'Légumes de saison',
                'Protéines au choix',
                'Assaisonnements'
            ],
            instructions: [
                'Préparez tous les ingrédients en les coupant finement.',
                'Faites chauffer l\'huile ou le beurre dans une grande poêle.',
                'Ajoutez les aromates et faites revenir 2 minutes.',
                'Incorporez les autres ingrédients selon leur temps de cuisson.',
                'Assaisonnez et laissez mijoter jusqu\'à cuisson complète.',
                'Servez chaud avec les accompagnements de votre choix.'
            ],
            time: '30-45 minutes',
            difficulty: 'Facile',
            servings: '4 personnes'
        };
    }

    /**
     * Apply dietary restrictions to recipe
     * @param {Recipe} recipe - Base recipe
     * @param {string[]} restrictions - Dietary restrictions
     * @returns {Recipe} Modified recipe
     */
    applyDietaryRestrictions(recipe, restrictions) {
        if (!restrictions || restrictions.length === 0) return recipe;
        
        let modifiedRecipe = { ...recipe };
        
        // Apply each dietary restriction
        restrictions.forEach(restriction => {
            const modifier = dietaryModifications[restriction];
            if (modifier) {
                modifiedRecipe = modifier(modifiedRecipe);
            }
        });
        
        return modifiedRecipe;
    }

    /**
     * Adjust cooking time based on preference
     * @param {Recipe} recipe - Recipe to adjust
     * @param {string} timePreference - Time preference
     * @returns {Recipe} Time-adjusted recipe
     */
    adjustCookingTime(recipe, timePreference) {
        const adjuster = timeAdjustments[timePreference];
        return adjuster ? adjuster(recipe) : recipe;
    }

    /**
     * Customize recipe with user ingredients
     * @param {Recipe} recipe - Recipe to customize
     * @param {string} userIngredients - User's available ingredients
     * @returns {Recipe} Customized recipe
     */
    customizeWithIngredients(recipe, userIngredients) {
        if (!userIngredients || userIngredients.trim() === '') return recipe;
        
        const ingredients = userIngredients.split(',').map(ing => ing.trim());
        const customizedIngredients = [...recipe.ingredients];
        
        // Add user ingredients if not already present
        ingredients.forEach(ing => {
            const exists = customizedIngredients.some(existing => 
                existing.toLowerCase().includes(ing.toLowerCase())
            );
            if (!exists && ing.length > 2) {
                customizedIngredients.splice(2, 0, ing);
            }
        });
        
        return { ...recipe, ingredients: customizedIngredients };
    }

    /**
     * Add personalized touches to recipe
     * @param {Recipe} recipe - Recipe to personalize
     * @param {RecipePreferences} preferences - User preferences
     * @returns {Recipe} Personalized recipe
     */
    addPersonalizedTouch(recipe, preferences) {
        // Add cooking tips based on preferences
        const tips = this.generateCookingTips(preferences);
        
        return {
            ...recipe,
            tips: tips,
            cuisineStyle: preferences.cuisineType,
            mealCategory: preferences.mealType
        };
    }

    /**
     * Generate cooking tips based on preferences
     * @param {RecipePreferences} preferences - User preferences
     * @returns {string} Cooking tip
     */
    generateCookingTips(preferences) {
        const tipDatabase = {
            'française': [
                'Conseil du chef : Utilisez du beurre de qualité pour révéler toutes les saveurs.',
                'Conseil du chef : Laissez toujours reposer la pâte pour une meilleure texture.',
                'Conseil du chef : Le secret d\'une bonne sauce française est la patience et le temps de réduction.',
                'Conseil du chef : Utilisez du vin blanc sec pour déglacer et sublimer vos plats.',
                'Conseil du chef : La température est cruciale - laissez vos ingrédients atteindre la température ambiante.',
                'Conseil du chef : Pour un caramel parfait, ne remuez jamais le sucre pendant la cuisson.',
                'Conseil du chef : Les herbes fraîches s\'ajoutent en fin de cuisson pour préserver leurs arômes.'
            ],
            'italienne': [
                'Conseil du chef : La qualité des ingrédients est primordiale en cuisine italienne.',
                'Conseil du chef : L\'eau de cuisson des pâtes salée comme la mer donne le goût authentique.',
                'Conseil du chef : Ajoutez toujours un peu d\'eau de cuisson des pâtes dans votre sauce.',
                'Conseil du chef : Le parmesan se râpe juste avant de servir pour un maximum de saveur.',
                'Conseil du chef : Pour un risotto crémeux, ajoutez le bouillon chaud louche par louche.',
                'Conseil du chef : L\'huile d\'olive extra vierge se verse en fin de cuisson, jamais pendant.',
                'Conseil du chef : Les tomates San Marzano font toute la différence dans les sauces.'
            ],
            'asiatique': [
                'Conseil du chef : Préparez tous vos ingrédients avant de commencer la cuisson.',
                'Conseil du chef : Le wok doit être très chaud pour saisir rapidement les aliments.',
                'Conseil du chef : L\'équilibre des 5 saveurs (sucré, salé, acide, amer, umami) est essentiel.',
                'Conseil du chef : Faites griller les épices à sec pour intensifier leurs arômes.',
                'Conseil du chef : La sauce soja de qualité vieillie apporte une profondeur incomparable.',
                'Conseil du chef : Pour un riz parfait, respectez le ratio 1:1.5 (riz:eau).',
                'Conseil du chef : Les légumes doivent garder leur croquant, ne les surcuisez jamais.'
            ],
            'méditerranéenne': [
                'Conseil du chef : L\'huile d\'olive extra vierge fait toute la différence.',
                'Conseil du chef : Les herbes de Provence s\'épanouissent avec un peu de chaleur.',
                'Conseil du chef : Laissez mariner vos légumes dans l\'huile et les herbes pour plus de goût.',
                'Conseil du chef : Le citron rehausse tous les plats méditerranéens, ajoutez-le en fin de cuisson.',
                'Conseil du chef : Les olives apportent l\'umami méditerranéen, n\'hésitez pas à les utiliser.',
                'Conseil du chef : Grillez vos légumes pour développer leurs saveurs naturelles.',
                'Conseil du chef : Le zaatar et le sumac sont les épices secrètes de la Méditerranée.'
            ],
            'mexicaine': [
                'Conseil du chef : Ajustez le piquant selon vos goûts.',
                'Conseil du chef : Grillez vos piments pour développer leurs arômes fumés.',
                'Conseil du chef : La lime fraîche est indispensable, elle équilibre les épices.',
                'Conseil du chef : Faites vos tortillas maison, ça change tout !',
                'Conseil du chef : Le cumin moulu frais a un arôme incomparable.',
                'Conseil du chef : L\'avocat doit être parfaitement mûr mais encore ferme.',
                'Conseil du chef : Laissez reposer votre guacamole 30 minutes pour que les saveurs se mélangent.'
            ],
            'indienne': [
                'Conseil du chef : Faites griller les épices à sec pour intensifier leurs arômes.',
                'Conseil du chef : Le garam masala s\'ajoute en fin de cuisson pour préserver ses arômes.',
                'Conseil du chef : Tempérez vos épices dans l\'huile chaude avant d\'ajouter les autres ingrédients.',
                'Conseil du chef : Le yaourt naturel équilibre parfaitement les plats épicés.',
                'Conseil du chef : Broyez vos épices juste avant utilisation pour un maximum de fraîcheur.',
                'Conseil du chef : La cardamome se marie parfaitement avec les desserts et le thé.',
                'Conseil du chef : Laissez mijoter vos currys longtemps pour développer les saveurs complexes.'
            ],
            'espagnole': [
                'Conseil du chef : L\'huile d\'olive extra vierge est la base de la cuisine espagnole.',
                'Conseil du chef : Le safran doit être infusé dans un liquide chaud avant usage.',
                'Conseil du chef : Pour une paella parfaite, ne remuez jamais le riz pendant la cuisson.',
                'Conseil du chef : Le jamón ibérico se déguste à température ambiante.',
                'Conseil du chef : Les tomates mûres sont essentielles pour un bon gazpacho.'
            ],
            'allemande': [
                'Conseil du chef : La patience est clé pour un bon sauerbraten, laissez mariner plusieurs jours.',
                'Conseil du chef : Pour un schnitzel parfait, la chapelure doit être très fine.',
                'Conseil du chef : Les pommes acides conviennent mieux à l\'apfelstrudel.',
                'Conseil du chef : Le lebkuchen ajoute une note sucrée-épicée aux sauces.'
            ],
            'britannique': [
                'Conseil du chef : Pour de bons scones, travaillez la pâte le moins possible.',
                'Conseil du chef : L\'eau glacée est essentielle pour une pâte à fish and chips réussie.',
                'Conseil du chef : Le sticky toffee pudding doit être servi très chaud.',
                'Conseil du chef : Un bon trifle nécessite plusieurs heures de repos au frais.'
            ],
            'brésilienne': [
                'Conseil du chef : La feijoada est meilleure réchauffée le lendemain.',
                'Conseil du chef : Pour la moqueca, l\'huile de dendê authentique fait toute la différence.',
                'Conseil du chef : Les brigadeiros doivent être roulés avec les mains légèrement beurrées.',
                'Conseil du chef : La picanha se cuit idéalement sur grill très chaud.'
            ],
            'libanaise': [
                'Conseil du chef : Le zaatar frais a un goût incomparable.',
                'Conseil du chef : Pour un houmous onctueux, épluchez les pois chiches.',
                'Conseil du chef : L\'eau de fleur d\'oranger parfume délicatement les desserts.',
                'Conseil du chef : Le labneh maison nécessite un égouttage de 24 heures.'
            ]
        };
        
        const tips = tipDatabase[preferences.cuisineType] || [
            'Conseil du chef : Goûtez et ajustez l\'assaisonnement en cours de cuisson.',
            'Conseil du chef : La patience est la clé d\'une cuisine réussie.',
            'Conseil du chef : Utilisez des ingrédients de saison pour plus de saveur.'
        ];
        
        // Add meal-specific tips
        const mealTips = {
            'dessert': [
                'Conseil du chef : Pesez précisément vos ingrédients en pâtisserie.',
                'Conseil du chef : Les œufs à température ambiante montent mieux en neige.',
                'Conseil du chef : Laissez refroidir complètement avant de démouler.',
                'Conseil du chef : Un bain-marie permet une cuisson douce et uniforme.',
                'Conseil du chef : Tamisez votre farine pour éviter les grumeaux.'
            ],
            'petit-déjeuner': [
                'Conseil du chef : Préparez certains éléments la veille pour gagner du temps.',
                'Conseil du chef : Les fruits frais apportent vitamines et fraîcheur au réveil.',
                'Conseil du chef : Un petit-déjeuner équilibré vous donne de l\'énergie pour la journée.'
            ]
        };
        
        // Combine cuisine and meal-specific tips
        let allTips = [...tips];
        if (mealTips[preferences.mealType]) {
            allTips = [...allTips, ...mealTips[preferences.mealType]];
        }
        
        // Return a random tip
        return allTips[Math.floor(Math.random() * allTips.length)];
    }

    /**
     * Utility function for delays
     * @param {number} ms - Milliseconds to delay
     * @returns {Promise} Promise that resolves after delay
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default AIRecipeGenerator;