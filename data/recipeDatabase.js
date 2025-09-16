/**
 * @fileoverview Recipe database organized by cuisine type and meal type
 * @description Contains the complete collection of recipes for the AI recipe generator
 */

/**
 * @typedef {Object} Recipe
 * @property {string} name - The name of the recipe
 * @property {string[]} ingredients - List of ingredients
 * @property {string[]} instructions - Step-by-step cooking instructions
 * @property {string} time - Cooking time
 * @property {string} difficulty - Difficulty level (Facile, Intermédiaire, Difficile, Très difficile)
 * @property {string} servings - Number of servings
 */

/**
 * @typedef {Object.<string, Object.<string, Recipe[]>>} RecipeDatabase
 * @description Database structure: cuisine -> mealType -> recipes[]
 */

// Recipe database organized by cuisine type and meal type
export const recipeDatabase = {
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
            },
            {
                name: 'Croissants aux Amandes',
                ingredients: ['6 croissants de la veille', '100g d\'amandes en poudre', '100g de sucre', '100g de beurre', '2 œufs', '1 cuillère à café d\'extrait d\'amande', 'Amandes effilées'],
                instructions: [
                    'Préchauffez le four à 180°C.',
                    'Mélangez la poudre d\'amandes, le sucre et le beurre mou.',
                    'Ajoutez les œufs et l\'extrait d\'amande.',
                    'Fendez les croissants en deux et garnissez de crème aux amandes.',
                    'Parsemez d\'amandes effilées et enfournez 15 minutes.',
                    'Servez tiède.'
                ],
                time: '25 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Crêpes Suzette',
                ingredients: ['200g de farine', '3 œufs', '500ml de lait', '50g de beurre fondu', '2 cuillères à soupe de sucre', 'Zeste d\'orange', '100ml de Grand Marnier', 'Sucre en poudre'],
                instructions: [
                    'Préparez la pâte à crêpes et laissez reposer 30 minutes.',
                    'Cuisez de fines crêpes dans une poêle beurrée.',
                    'Préparez le beurre à l\'orange avec zeste et Grand Marnier.',
                    'Pliez les crêpes en quatre et nappez de beurre à l\'orange.',
                    'Flambez délicatement au Grand Marnier.',
                    'Servez immédiatement.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
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
            },
            {
                name: 'Bœuf Bourguignon',
                ingredients: ['1.5kg de bœuf à braiser', '750ml de vin rouge de Bourgogne', '200g de lardons', '20 petits oignons', '500g de champignons', '3 carottes', 'Bouquet garni', 'Beurre', 'Farine'],
                instructions: [
                    'Faites mariner le bœuf dans le vin rouge 24h.',
                    'Égouttez la viande et faites-la dorer dans une cocotte.',
                    'Ajoutez les légumes, la marinade et le bouquet garni.',
                    'Laissez mijoter 3 heures à feu doux.',
                    'Ajoutez les lardons et champignons 30 minutes avant la fin.',
                    'Servez avec des pommes de terre ou des pâtes.'
                ],
                time: '3h30',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Quiche Lorraine',
                ingredients: ['1 pâte brisée', '200g de lardons', '4 œufs', '200ml de crème fraîche', '200ml de lait', '150g de gruyère râpé', 'Muscade', 'Sel', 'Poivre'],
                instructions: [
                    'Préchauffez le four à 200°C.',
                    'Foncez un moule avec la pâte brisée.',
                    'Faites revenir les lardons et disposez-les sur la pâte.',
                    'Battez les œufs avec la crème, le lait et le fromage.',
                    'Versez l\'appareil sur les lardons.',
                    'Enfournez 35 minutes jusqu\'à coloration dorée.'
                ],
                time: '50 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
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
            },
            {
                name: 'Canard aux Cerises',
                ingredients: ['1 canard entier', '500g de cerises', '250ml de vin rouge', '2 échalotes', '50g de beurre', 'Thym', 'Laurier', 'Sel', 'Poivre'],
                instructions: [
                    'Assaisonnez le canard et faites-le rôtir 1h30 à 180°C.',
                    'Dénoyautez les cerises et faites-les revenir avec les échalotes.',
                    'Déglacez au vin rouge et ajoutez les herbes.',
                    'Laissez réduire la sauce 10 minutes.',
                    'Découpez le canard et servez avec la sauce aux cerises.',
                    'Accompagnez de pommes sarladaises.'
                ],
                time: '2 heures',
                difficulty: 'Difficile',
                servings: '4 personnes'
            },
            {
                name: 'Sole Meunière',
                ingredients: ['4 soles', '100g de beurre', 'Farine', '2 citrons', 'Persil plat', 'Sel', 'Poivre'],
                instructions: [
                    'Farinez les soles des deux côtés.',
                    'Faites chauffer une noix de beurre dans une poêle.',
                    'Cuisez les soles 3-4 minutes de chaque côté.',
                    'Réservez au chaud sur un plat de service.',
                    'Ajoutez le beurre restant et laissez noisetter.',
                    'Arrosez les soles de beurre noisette et de jus de citron.'
                ],
                time: '20 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
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
            },
            {
                name: 'Crème Brûlée à la Vanille',
                ingredients: ['500ml de crème liquide', '6 jaunes d\'œufs', '100g de sucre', '1 gousse de vanille', 'Sucre roux pour caraméliser'],
                instructions: [
                    'Faites chauffer la crème avec la vanille fendue.',
                    'Battez les jaunes avec le sucre jusqu\'à blanchiment.',
                    'Versez la crème chaude sur les jaunes en mélangeant.',
                    'Répartissez dans des ramequins et cuisez au bain-marie 45 minutes.',
                    'Laissez refroidir puis réfrigérez 4 heures.',
                    'Saupoudrez de sucre roux et caramélisez au chalumeau.'
                ],
                time: '1h + 4h réfrigération',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Profiteroles au Chocolat',
                ingredients: ['125ml d\'eau', '50g de beurre', '75g de farine', '2 œufs', '500ml de glace vanille', '200g de chocolat noir', '200ml de crème'],
                instructions: [
                    'Préparez la pâte à choux et dressez des petits choux.',
                    'Enfournez 25 minutes à 200°C jusqu\'à dorure.',
                    'Laissez refroidir et garnissez de glace vanille.',
                    'Préparez la sauce chocolat avec crème et chocolat fondu.',
                    'Dressez les profiteroles en pyramide.',
                    'Nappez généreusement de sauce chocolat chaude.'
                ],
                time: '1h30',
                difficulty: 'Difficile',
                servings: '6 personnes'
            }
        ],
        'collation': [
            {
                name: 'Madeleine de Commercy',
                ingredients: ['4 œufs', '120g de sucre', '120g de farine', '120g de beurre', '1 cuillère à café de levure', 'Zeste de citron'],
                instructions: [
                    'Battez les œufs et le sucre jusqu\'à blanchiment.',
                    'Incorporez délicatement la farine et la levure.',
                    'Ajoutez le beurre fondu tiède et le zeste de citron.',
                    'Remplissez les moules à madeleine beurrés.',
                    'Enfournez 12 minutes à 200°C.',
                    'Démoulez et laissez refroidir sur une grille.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '20 madeleines'
            }
        ]
    }
    // Additional cuisines can be added here following the same structure
    // italienne: { ... }, asiatique: { ... }, etc.
};

export default recipeDatabase;