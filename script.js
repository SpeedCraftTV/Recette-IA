// Recipe database organized by cuisine type and meal type
const recipeDatabase = {
    française: {
        'petit-déjeuner': [
            {
                name: 'Pain Perdu aux Fruits Rouges',
                ingredients: ['4 tranches de pain brioche', '2 œufs', '200ml de lait', '2 cuillères à soupe de sucre', '1 cuillère à café de vanille', '200g de fruits rouges', 'Beurre'],
                instructions: [
                    'Battez les œufs avec le lait, le sucre et la vanille dans un plat creux.',
                    'Trempez chaque tranche de pain dans le mélange pendant quelques secondes de chaque côté.',
                    'Faites chauffer le beurre dans une poêle à feu moyen.',
                    'Faites dorer les tranches de pain 2-3 minutes de chaque côté.',
                    'Servez chaud avec les fruits rouges.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'Coq au Vin',
                ingredients: ['1 poulet fermier découpé', '750ml de vin rouge', '200g de lardons', '12 petits oignons', '250g de champignons', '2 carottes', '2 gousses d\'ail', 'Bouquet garni', 'Beurre', 'Farine'],
                instructions: [
                    'Faites revenir les lardons dans une cocotte, puis réservez.',
                    'Faites dorer les morceaux de poulet dans la graisse des lardons.',
                    'Ajoutez les légumes et faites revenir 5 minutes.',
                    'Saupoudrez de farine et mélangez.',
                    'Versez le vin rouge, ajoutez le bouquet garni et laissez mijoter 1h30.',
                    'Remettez les lardons 10 minutes avant la fin de cuisson.'
                ],
                time: '2 heures',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Ratatouille Provençale',
                ingredients: ['2 aubergines', '3 courgettes', '4 tomates', '2 poivrons', '1 oignon', '4 gousses d\'ail', 'Herbes de Provence', 'Huile d\'olive', 'Sel', 'Poivre'],
                instructions: [
                    'Coupez tous les légumes en dés réguliers.',
                    'Faites revenir l\'oignon et l\'ail dans l\'huile d\'olive.',
                    'Ajoutez les aubergines et cuisez 5 minutes.',
                    'Incorporez les poivrons, puis les courgettes.',
                    'Ajoutez les tomates et les herbes, laissez mijoter 45 minutes.',
                    'Assaisonnez et servez chaud ou tiède.'
                ],
                time: '1 heure',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Bouillabaisse Marseillaise',
                ingredients: ['1kg de poissons de roche', '500g de crevettes', '1 bulbe de fenouil', '4 tomates', '1 oignon', '4 gousses d\'ail', 'Safran', 'Rouille', 'Croûtons', 'Huile d\'olive'],
                instructions: [
                    'Préparez un fumet avec les arêtes et têtes de poisson.',
                    'Faites revenir les légumes dans l\'huile d\'olive.',
                    'Ajoutez les poissons fermes d\'abord, puis les plus fragiles.',
                    'Versez le fumet bouillant et le safran.',
                    'Cuisez à feu vif 15 minutes.',
                    'Servez avec la rouille et les croûtons.'
                ],
                time: '1h30',
                difficulty: 'Difficile',
                servings: '6 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Tarte Tatin aux Pommes',
                ingredients: ['1 pâte brisée', '6 pommes Granny Smith', '150g de sucre', '50g de beurre', '1 cuillère à soupe de calvados'],
                instructions: [
                    'Préparez un caramel avec le sucre dans un moule à tarte.',
                    'Ajoutez le beurre et mélangez.',
                    'Disposez les pommes pelées et coupées en quartiers.',
                    'Recouvrez de pâte et enfournez 25 minutes à 200°C.',
                    'Démoulez immédiatement en retournant sur un plat.',
                    'Servez tiède.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            }
        ]
    },
    italienne: {
        'déjeuner': [
            {
                name: 'Risotto aux Champignons Porcini',
                ingredients: ['300g de riz Arborio', '30g de champignons porcini séchés', '1L de bouillon de légumes', '1 oignon', '100ml de vin blanc', '100g de parmesan', '50g de beurre', 'Huile d\'olive'],
                instructions: [
                    'Réhydratez les porcini dans l\'eau chaude.',
                    'Faites revenir l\'oignon dans l\'huile d\'olive.',
                    'Ajoutez le riz et nacrez 2 minutes.',
                    'Versez le vin blanc et laissez évaporer.',
                    'Ajoutez le bouillon louche par louche en remuant constamment.',
                    'Incorporez les champignons, le beurre et le parmesan en fin de cuisson.'
                ],
                time: '35 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Osso Buco alla Milanese',
                ingredients: ['4 jarrets de veau', '2 carottes', '2 branches de céleri', '1 oignon', '400g de tomates concassées', '250ml de vin blanc', 'Bouillon de bœuf', 'Gremolata', 'Huile d\'olive'],
                instructions: [
                    'Faites dorer les jarrets de veau dans l\'huile chaude.',
                    'Ajoutez les légumes émincés et faites revenir.',
                    'Versez le vin blanc et laissez réduire.',
                    'Ajoutez les tomates et le bouillon.',
                    'Laissez mijoter à couvert 2 heures.',
                    'Servez avec la gremolata et un risotto saffrané.'
                ],
                time: '2h30',
                difficulty: 'Difficile',
                servings: '4 personnes'
            }
        ]
    },
    asiatique: {
        'déjeuner': [
            {
                name: 'Pad Thaï aux Crevettes',
                ingredients: ['200g de nouilles de riz', '300g de crevettes', '2 œufs', '100g de germes de soja', '3 ciboules', '2 gousses d\'ail', 'Sauce nuoc-mâm', 'Sucre de palme', 'Citron vert', 'Cacahuètes'],
                instructions: [
                    'Faites tremper les nouilles dans l\'eau chaude.',
                    'Faites revenir l\'ail et les crevettes dans un wok.',
                    'Poussez sur un côté et scramlez les œufs.',
                    'Ajoutez les nouilles égouttées et les sauces.',
                    'Incorporez les germes de soja et les ciboules.',
                    'Servez avec cacahuètes concassées et quartiers de citron.'
                ],
                time: '25 minutes',
                difficulty: 'Facile',
                servings: '3 personnes'
            }
        ]
    }
};

// Dietary modification functions
const dietaryModifications = {
    'végétarien': (recipe) => {
        const vegIngredients = recipe.ingredients.filter(ing => 
            !ing.toLowerCase().includes('viande') && 
            !ing.toLowerCase().includes('porc') && 
            !ing.toLowerCase().includes('bœuf') && 
            !ing.toLowerCase().includes('poulet') && 
            !ing.toLowerCase().includes('poisson')
        );
        if (vegIngredients.length < recipe.ingredients.length) {
            vegIngredients.push('Tofu mariné', 'Légumes grillés');
        }
        return { ...recipe, ingredients: vegIngredients };
    },
    'végétalien': (recipe) => {
        let veganIngredients = recipe.ingredients.filter(ing => 
            !ing.toLowerCase().includes('œuf') && 
            !ing.toLowerCase().includes('lait') && 
            !ing.toLowerCase().includes('beurre') && 
            !ing.toLowerCase().includes('fromage') &&
            !ing.toLowerCase().includes('crème')
        );
        veganIngredients = veganIngredients.map(ing => 
            ing.replace(/beurre/gi, 'huile d\'olive')
               .replace(/lait/gi, 'lait d\'amande')
               .replace(/crème/gi, 'crème de coco')
        );
        return { ...recipe, ingredients: veganIngredients };
    },
    'sans-gluten': (recipe) => {
        const glutenFreeIngredients = recipe.ingredients.map(ing =>
            ing.replace(/farine/gi, 'farine de riz')
               .replace(/pain/gi, 'pain sans gluten')
               .replace(/pâte/gi, 'pâte sans gluten')
        );
        return { ...recipe, ingredients: glutenFreeIngredients };
    }
};

// Time adjustment functions
const timeAdjustments = {
    'rapide': (recipe) => ({
        ...recipe,
        time: '15-25 minutes',
        instructions: recipe.instructions.map(inst => 
            inst.replace(/laissez mijoter.*?heures?/gi, 'laissez mijoter 15 minutes')
        )
    }),
    'moyen': (recipe) => ({
        ...recipe,
        time: '45-60 minutes'
    }),
    'long': (recipe) => ({
        ...recipe,
        time: '1h30-3 heures'
    })
};

// AI Recipe Generator Class
class AIRecipeGenerator {
    constructor() {
        this.isGenerating = false;
    }

    // Generate recipe based on user preferences
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
            
            this.isGenerating = false;
            return recipe;
        } catch (error) {
            this.isGenerating = false;
            throw error;
        }
    }

    // Select base recipe from database
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

    // Generate fallback recipe when no database match
    generateFallbackRecipe(preferences) {
        const { cuisineType, mealType } = preferences;
        
        const baseIngredients = {
            'française': ['Beurre', 'Échalotes', 'Vin blanc', 'Herbes fraîches'],
            'italienne': ['Huile d\'olive', 'Ail', 'Tomates', 'Parmesan'],
            'asiatique': ['Huile de sésame', 'Gingembre', 'Sauce soja', 'Ciboules'],
            'méditerranéenne': ['Huile d\'olive', 'Citron', 'Olives', 'Feta'],
            'mexicaine': ['Avocat', 'Citron vert', 'Coriandre', 'Piment'],
            'indienne': ['Épices garam masala', 'Curcuma', 'Coriandre', 'Yaourt']
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

    // Apply dietary restrictions
    applyDietaryRestrictions(recipe, restriction) {
        if (restriction === 'aucune') return recipe;
        
        const modifier = dietaryModifications[restriction];
        return modifier ? modifier(recipe) : recipe;
    }

    // Adjust cooking time
    adjustCookingTime(recipe, timePreference) {
        const adjuster = timeAdjustments[timePreference];
        return adjuster ? adjuster(recipe) : recipe;
    }

    // Customize with user ingredients
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

    // Add personalized touches
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

    // Generate cooking tips
    generateCookingTips(preferences) {
        const tipDatabase = {
            'française': 'Conseil du chef : Utilisez du beurre de qualité pour révéler toutes les saveurs.',
            'italienne': 'Conseil du chef : La qualité des ingrédients est primordiale en cuisine italienne.',
            'asiatique': 'Conseil du chef : Préparez tous vos ingrédients avant de commencer la cuisson.',
            'méditerranéenne': 'Conseil du chef : L\'huile d\'olive extra vierge fait toute la différence.',
            'mexicaine': 'Conseil du chef : Ajustez le piquant selon vos goûts.',
            'indienne': 'Conseil du chef : Faites griller les épices à sec pour intensifier leurs arômes.'
        };
        
        return tipDatabase[preferences.cuisineType] || 'Conseil du chef : Goûtez et ajustez l\'assaisonnement en cours de cuisson.';
    }

    // Utility function for delays
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// UI Handler Class
class RecipeUI {
    constructor() {
        this.generator = new AIRecipeGenerator();
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const form = document.getElementById('recipe-form');
        const newRecipeBtn = document.getElementById('new-recipe-btn');
        
        form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        newRecipeBtn.addEventListener('click', () => this.showGeneratorForm());
    }

    async handleFormSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const preferences = {
            cuisineType: formData.get('cuisineType'),
            mealType: formData.get('mealType'),
            dietaryRestrictions: formData.get('dietaryRestrictions'),
            cookingTime: formData.get('cookingTime'),
            ingredients: formData.get('ingredients')
        };
        
        this.showLoading();
        
        try {
            const recipe = await this.generator.generateRecipe(preferences);
            this.displayRecipe(recipe);
        } catch (error) {
            this.showError('Erreur lors de la génération de la recette. Veuillez réessayer.');
        }
    }

    showLoading() {
        const generateBtn = document.getElementById('generate-btn');
        const btnText = generateBtn.querySelector('.btn-text');
        const loading = generateBtn.querySelector('.loading');
        
        generateBtn.disabled = true;
        btnText.style.display = 'none';
        loading.style.display = 'inline';
    }

    hideLoading() {
        const generateBtn = document.getElementById('generate-btn');
        const btnText = generateBtn.querySelector('.btn-text');
        const loading = generateBtn.querySelector('.loading');
        
        generateBtn.disabled = false;
        btnText.style.display = 'inline';
        loading.style.display = 'none';
    }

    displayRecipe(recipe) {
        this.hideLoading();
        
        const recipeSection = document.getElementById('recipe-section');
        const recipeContent = document.getElementById('recipe-content');
        
        recipeContent.innerHTML = `
            <div class="recipe-card">
                <h3 class="recipe-title">${recipe.name}</h3>
                
                <div class="recipe-meta">
                    <div class="meta-item">
                        <div class="meta-label">Temps de préparation</div>
                        <div class="meta-value">${recipe.time}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Difficulté</div>
                        <div class="meta-value">${recipe.difficulty}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Portions</div>
                        <div class="meta-value">${recipe.servings}</div>
                    </div>
                </div>
                
                <div class="recipe-content">
                    <div class="ingredients-section">
                        <h4 class="section-title">Ingrédients</h4>
                        <ul class="ingredients-list">
                            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="instructions-section">
                        <h4 class="section-title">Instructions</h4>
                        <ol class="instructions-list">
                            ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
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
        document.querySelector('.generator-section').style.display = 'none';
        recipeSection.style.display = 'block';
        
        // Scroll to recipe
        recipeSection.scrollIntoView({ behavior: 'smooth' });
    }

    showGeneratorForm() {
        const generatorSection = document.querySelector('.generator-section');
        const recipeSection = document.getElementById('recipe-section');
        
        // Reset form
        document.getElementById('recipe-form').reset();
        
        // Show form and hide recipe
        generatorSection.style.display = 'block';
        recipeSection.style.display = 'none';
        
        // Scroll to form
        generatorSection.scrollIntoView({ behavior: 'smooth' });
    }

    showError(message) {
        this.hideLoading();
        alert(message);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RecipeUI();
});

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Add form field animations
    const formInputs = document.querySelectorAll('input, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});