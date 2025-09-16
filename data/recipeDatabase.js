/**
 * @fileoverview Recipe Database
 * @description Complete database of recipes organized by cuisine and meal type
 */

/**
 * @typedef {Object} Recipe
 * @property {string} name - Recipe name
 * @property {string[]} ingredients - List of ingredients
 * @property {string[]} instructions - Cooking instructions
 * @property {string} time - Preparation and cooking time
 * @property {string} difficulty - Difficulty level
 * @property {string} servings - Number of servings
 */

/**
 * @typedef {Object} MealTypeRecipes
 * @property {Recipe[]} petit-déjeuner - Breakfast recipes
 * @property {Recipe[]} déjeuner - Lunch recipes
 * @property {Recipe[]} dîner - Dinner recipes
 * @property {Recipe[]} dessert - Dessert recipes
 * @property {Recipe[]} collation - Snack recipes
 */

/**
 * @typedef {Object.<string, MealTypeRecipes>} RecipeDatabase
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
            },
            {
                name: 'Gaufres de Liège',
                ingredients: ['500g de farine', '15g de levure fraîche', '3 œufs', '300ml de lait tiède', '150g de beurre', '100g de sucre perlé', '1 pincée de sel', 'Vanille'],
                instructions: [
                    'Délayez la levure dans le lait tiède.',
                    'Mélangez farine et sel, ajoutez œufs et lait-levure.',
                    'Incorporez le beurre mou et pétrissez 10 minutes.',
                    'Ajoutez le sucre perlé délicatement.',
                    'Laissez lever 1 heure puis cuisez au gaufrier.',
                    'Servez chaudes avec sirop d\'érable.'
                ],
                time: '1h30 + levée',
                difficulty: 'Intermédiaire',
                servings: '8 gaufres'
            },
            {
                name: 'Tartines Avocado-Toast à la Française',
                ingredients: ['4 tranches de pain de campagne', '2 avocats mûrs', '200g de fromage de chèvre', '4 œufs', 'Ciboulette', 'Huile d\'olive', 'Fleur de sel', 'Poivre du moulin'],
                instructions: [
                    'Grillez légèrement les tranches de pain.',
                    'Écrasez les avocats avec huile d\'olive, sel et poivre.',
                    'Étalez le fromage de chèvre sur les tartines.',
                    'Ajoutez l\'avocat écrasé en couche généreuse.',
                    'Cuisez les œufs au plat avec jaunes coulants.',
                    'Déposez un œuf sur chaque tartine, parsemez de ciboulette.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Porridge Français au Lait de Noisette',
                ingredients: ['100g de flocons d\'avoine', '400ml de lait de noisette', '2 cuillères à soupe de miel', '1 pomme', '50g de noisettes grillées', 'Cannelle', 'Beurre'],
                instructions: [
                    'Faites chauffer le lait de noisette avec une pincée de cannelle.',
                    'Ajoutez les flocons d\'avoine et cuisez 5 minutes en remuant.',
                    'Incorporez le miel et une noix de beurre.',
                    'Coupez la pomme en dés et faites-la revenir rapidement.',
                    'Servez le porridge avec les pommes et noisettes.',
                    'Saupoudrez de cannelle avant de déguster.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '2 personnes'
            },
            {
                name: 'Brioche Perdue aux Pralines Roses',
                ingredients: ['6 tranches de brioche', '3 œufs', '250ml de lait', '50g de sucre', '100g de pralines roses', '50g de beurre', 'Vanille'],
                instructions: [
                    'Battez œufs, lait, sucre et vanille.',
                    'Concassez grossièrement les pralines roses.',
                    'Trempez les tranches de brioche dans le mélange.',
                    'Faites dorer au beurre dans une poêle chaude.',
                    'Saupoudrez généreusement de pralines concassées.',
                    'Servez immédiatement bien chaud.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Œufs à la Coque et Mouillettes au Beurre Salé',
                ingredients: ['6 œufs extra-frais', '6 tranches de pain de mie', '100g de beurre demi-sel', 'Fleur de sel', 'Ciboulette'],
                instructions: [
                    'Portez une casserole d\'eau à ébullition.',
                    'Plongez délicatement les œufs et cuisez 3 minutes.',
                    'Grillez légèrement les tranches de pain.',
                    'Coupez le pain en mouillettes régulières.',
                    'Beurrez généreusement avec le beurre salé.',
                    'Servez immédiatement avec fleur de sel et ciboulette.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '3 personnes'
            },
            {
                name: 'Smoothie Bowl à la Française',
                ingredients: ['2 bananes congelées', '150g de fruits rouges', '200ml de lait d\'amande', '50g de granola maison', '2 cuillères à soupe de miel', 'Amandes effilées', 'Menthe fraîche'],
                instructions: [
                    'Mixez bananes et fruits rouges avec le lait d\'amande.',
                    'Versez dans un bol et lissez la surface.',
                    'Disposez harmonieusement le granola en ligne.',
                    'Ajoutez amandes effilées et fruits frais.',
                    'Arrosez délicatement de miel.',
                    'Décorez de feuilles de menthe fraîche.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '2 personnes'
            },
            {
                name: 'Chocolat Chaud à l\'Ancienne',
                ingredients: ['500ml de lait entier', '200g de chocolat noir 70%', '50ml de crème liquide', '2 cuillères à soupe de sucre', 'Vanille', 'Chantilly maison'],
                instructions: [
                    'Chauffez le lait avec la vanille sans faire bouillir.',
                    'Hachez finement le chocolat noir.',
                    'Versez le lait chaud sur le chocolat et mélangez.',
                    'Ajoutez sucre et crème, fouettez énergiquement.',
                    'Montez la chantilly bien ferme.',
                    'Servez le chocolat couronné de chantilly.'
                ],
                time: '15 minutes',
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
            },
            {
                name: 'Pot-au-Feu Traditionnel',
                ingredients: ['1kg de paleron de bœuf', '500g de plat de côtes', '1 os à moelle', '4 poireaux', '6 carottes', '4 navets', '1 chou', 'Bouquet garni', 'Gros sel', 'Cornichons'],
                instructions: [
                    'Placez les viandes et l\'os dans une grande marmite d\'eau froide.',
                    'Portez à ébullition en écumant régulièrement.',
                    'Ajoutez le bouquet garni et laissez frémir 2 heures.',
                    'Ajoutez les légumes selon leur temps de cuisson.',
                    'Cuisez encore 1 heure jusqu\'à tendreté parfaite.',
                    'Servez le bouillon puis la viande avec légumes, gros sel et cornichons.'
                ],
                time: '3h30',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Cassoulet de Toulouse',
                ingredients: ['500g de haricots tarbais', '4 cuisses de canard confites', '400g de saucisse de Toulouse', '200g de poitrine fumée', '1 oignon', '4 tomates', 'Ail', 'Bouquet garni', 'Chapelure'],
                instructions: [
                    'Faites tremper les haricots une nuit.',
                    'Cuisez-les avec bouquet garni et aromates 1 heure.',
                    'Faites revenir saucisses et poitrine coupées.',
                    'Montez en couches : haricots, viandes, tomates.',
                    'Mouillez avec bouillon de cuisson des haricots.',
                    'Enfournez 2 heures à 160°C en cassant la croûte 3 fois.'
                ],
                time: '4 heures + trempage',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Blanquette de Veau à l\'Ancienne',
                ingredients: ['1.2kg d\'épaule de veau', '3 carottes', '2 navets', '12 petits oignons', '250g de champignons', '50g de beurre', '40g de farine', '200ml de crème', '2 jaunes d\'œufs', 'Citron'],
                instructions: [
                    'Faites blanchir le veau 5 minutes puis rafraîchissez.',
                    'Remettez en casserole avec eau froide et légumes.',
                    'Laissez frémir 1h30 jusqu\'à tendreté.',
                    'Préparez un roux blond avec beurre et farine.',
                    'Liez avec le bouillon filtré, ajoutez crème et jaunes.',
                    'Terminez avec jus de citron et servez avec riz.'
                ],
                time: '2h15',
                difficulty: 'Difficile',
                servings: '6 personnes'
            },
            {
                name: 'Salade Niçoise Authentique',
                ingredients: ['400g de thon à l\'huile', '4 tomates', '1 concombre', '1 poivron vert', '200g de haricots verts', '4 œufs durs', '100g d\'olives noires', '8 filets d\'anchois', 'Basilic', 'Huile d\'olive'],
                instructions: [
                    'Cuisez les haricots verts al dente et rafraîchissez.',
                    'Coupez tomates en quartiers, concombre en rondelles.',
                    'Émincez finement le poivron vert.',
                    'Écalez et coupez les œufs durs en quartiers.',
                    'Disposez harmonieusement tous les ingrédients.',
                    'Assaisonnez d\'huile d\'olive, basilic et poivre.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Escargots de Bourgogne',
                ingredients: ['4 douzaines d\'escargots', '200g de beurre', '4 gousses d\'ail', '1 bouquet de persil', '2 échalotes', 'Vin blanc sec', 'Coquilles d\'escargots', 'Pain de campagne'],
                instructions: [
                    'Préparez le beurre d\'escargot avec ail, persil et échalotes hachés.',
                    'Rincez et égouttez les escargots.',
                    'Placez un escargot dans chaque coquille.',
                    'Comblez avec le beurre d\'ail parfumé.',
                    'Enfournez 10 minutes à 200°C.',
                    'Servez immédiatement avec pain grillé.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Hachis Parmentier Gratinée',
                ingredients: ['800g de reste de pot-au-feu', '1kg de pommes de terre', '100ml de lait', '50g de beurre', '1 oignon', '100g de gruyère râpé', 'Persil', 'Muscade'],
                instructions: [
                    'Hachez finement la viande avec oignon et persil.',
                    'Faites revenir ce hachis 10 minutes.',
                    'Cuisez les pommes de terre et préparez une purée.',
                    'Incorporez lait, beurre et muscade à la purée.',
                    'Montez en couches dans un plat : viande puis purée.',
                    'Parsemez de fromage et gratinez 20 minutes.'
                ],
                time: '1 heure',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Gratin Dauphinois',
                ingredients: ['1.5kg de pommes de terre', '500ml de crème liquide', '250ml de lait', '2 gousses d\'ail', '100g de gruyère', 'Muscade', 'Beurre', 'Sel', 'Poivre'],
                instructions: [
                    'Épluchez et émincez finement les pommes de terre.',
                    'Frottez un plat à gratin avec l\'ail.',
                    'Disposez les pommes de terre en couches régulières.',
                    'Mélangez crème, lait, muscade, sel et poivre.',
                    'Versez ce mélange sur les pommes de terre.',
                    'Parsemez de gruyère et enfournez 1h15 à 180°C.'
                ],
                time: '1h30',
                difficulty: 'Facile',
                servings: '8 personnes'
            },
            {
                name: 'Choucroute Garnie Alsacienne',
                ingredients: ['1.5kg de choucroute crue', '6 saucisses de Strasbourg', '6 saucisses fumées', '400g de lard fumé', '4 pommes de terre', 'Vin blanc d\'Alsace', 'Baies de genièvre', 'Saindoux'],
                instructions: [
                    'Rincez et égouttez la choucroute.',
                    'Faites fondre le saindoux dans une cocotte.',
                    'Ajoutez la choucroute, vin blanc et genièvre.',
                    'Disposez les viandes sur la choucroute.',
                    'Laissez mijoter 1h30 à feu doux.',
                    'Ajoutez pommes de terre 30 minutes avant la fin.'
                ],
                time: '2 heures',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
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
            },
            {
                name: 'Magret de Canard aux Figues',
                ingredients: ['2 magrets de canard', '8 figues fraîches', '100ml de porto', '2 cuillères à soupe de miel', '50g de beurre', 'Thym frais', 'Vinaigre balsamique'],
                instructions: [
                    'Entaillez la peau des magrets en croisillons.',
                    'Cuisez côté peau 8 minutes puis retournez 3 minutes.',
                    'Laissez reposer sous papier aluminium.',
                    'Faites revenir les figues coupées avec miel.',
                    'Déglacez au porto et vinaigre balsamique.',
                    'Montez au beurre et servez avec les magrets tranchés.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'Saint-Jacques à l\'Ail et Persil',
                ingredients: ['12 noix de Saint-Jacques', '3 gousses d\'ail', '1 bouquet de persil plat', '100g de beurre', '1 citron', 'Huile d\'olive', 'Fleur de sel'],
                instructions: [
                    'Sortez les Saint-Jacques 30 minutes avant cuisson.',
                    'Séchez-les parfaitement avec du papier absorbant.',
                    'Saisissez-les 2 minutes de chaque côté à feu vif.',
                    'Ajoutez ail haché et beurre dans la poêle.',
                    'Arrosez les Saint-Jacques du beurre parfumé.',
                    'Finissez avec persil ciselé et jus de citron.'
                ],
                time: '15 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'Côte de Bœuf aux Échalotes',
                ingredients: ['1 côte de bœuf de 1.5kg', '8 échalotes', '250ml de vin rouge', '50g de beurre', 'Thym', 'Romarin', 'Huile d\'olive', 'Fleur de sel'],
                instructions: [
                    'Sortez la viande 1 heure avant cuisson.',
                    'Saisissez la côte de bœuf de tous côtés.',
                    'Enfournez 20 minutes à 200°C pour rosé.',
                    'Confisez les échalotes au beurre et thym.',
                    'Déglacez au vin rouge et laissez réduire.',
                    'Laissez reposer la viande 10 minutes avant de trancher.'
                ],
                time: '45 minutes + repos',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Lotte à l\'Armoricaine',
                ingredients: ['1kg de lotte', '4 tomates', '1 oignon', '2 échalotes', 'Cognac', 'Vin blanc sec', 'Crème fraîche', 'Estragon', 'Beurre'],
                instructions: [
                    'Coupez la lotte en médaillons épais.',
                    'Faites revenir oignon et échalotes au beurre.',
                    'Ajoutez les tomates concassées et cuisez 10 minutes.',
                    'Saisissez les médaillons de lotte à part.',
                    'Flambez au cognac puis ajoutez vin blanc.',
                    'Terminez avec crème et estragon, servez immédiatement.'
                ],
                time: '35 minutes',
                difficulty: 'Difficile',
                servings: '6 personnes'
            },
            {
                name: 'Gigot d\'Agneau aux Herbes de Provence',
                ingredients: ['1 gigot d\'agneau de 2kg', '4 gousses d\'ail', 'Herbes de Provence', 'Romarin frais', 'Huile d\'olive', 'Vin blanc', 'Haricots blancs'],
                instructions: [
                    'Piquez le gigot d\'éclats d\'ail et romarin.',
                    'Badigeonnez d\'huile et herbes de Provence.',
                    'Saisissez le gigot de tous côtés au four très chaud.',
                    'Cuisez 15 minutes par 500g à 180°C pour rosé.',
                    'Arrosez régulièrement du jus de cuisson.',
                    'Servez avec haricots blancs et jus de cuisson déglacé.'
                ],
                time: '1h15 + repos',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Poulet aux Morilles',
                ingredients: ['1 poulet fermier découpé', '200g de morilles', '200ml de crème fraîche', '100ml de vin jaune', '2 échalotes', 'Beurre', 'Persil'],
                instructions: [
                    'Nettoyez soigneusement les morilles.',
                    'Faites dorer les morceaux de poulet au beurre.',
                    'Réservez et faites suer les échalotes.',
                    'Ajoutez les morilles et cuisez 5 minutes.',
                    'Remettez le poulet, versez vin jaune et crème.',
                    'Mijotez 25 minutes et parsemez de persil.'
                ],
                time: '50 minutes',
                difficulty: 'Difficile',
                servings: '4 personnes'
            },
            {
                name: 'Ratatouille Tian Provençal',
                ingredients: ['2 aubergines', '4 courgettes', '6 tomates', '2 poivrons', 'Huile d\'olive', 'Herbes de Provence', 'Ail', 'Basilic', 'Parmesan'],
                instructions: [
                    'Émincez tous les légumes en rondelles fines.',
                    'Préparez une sauce tomate à l\'ail et basilic.',
                    'Étalez la sauce dans un plat à gratin.',
                    'Disposez les légumes en alternance debout.',
                    'Arrosez d\'huile d\'olive et herbes de Provence.',
                    'Enfournez 45 minutes à 180°C, parsemez de parmesan.'
                ],
                time: '1h15',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Saumon en Papillote aux Légumes',
                ingredients: ['4 pavés de saumon', '2 courgettes', '2 carottes', '1 fenouil', 'Citron', 'Aneth frais', 'Huile d\'olive', 'Beurre', 'Fleur de sel'],
                instructions: [
                    'Taillez les légumes en julienne fine.',
                    'Disposez chaque pavé sur papier sulfurisé.',
                    'Répartissez les légumes autour du poisson.',
                    'Ajoutez rondelles de citron, aneth et beurre.',
                    'Fermez hermétiquement les papillotes.',
                    'Enfournez 18 minutes à 200°C et servez dans les papillotes.'
                ],
                time: '35 minutes',
                difficulty: 'Facile',
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
                time: '1 heure',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Mille-Feuille Traditionnel',
                ingredients: ['3 rectangles de pâte feuilletée', '500ml de lait', '6 jaunes d\'œufs', '100g de sucre', '40g de fécule de maïs', '1 gousse de vanille', 'Fondant blanc', 'Chocolat fondu'],
                instructions: [
                    'Cuisez les rectangles de pâte feuilletée jusqu\'à dorure.',
                    'Préparez une crème pâtissière avec lait, œufs, sucre et vanille.',
                    'Montez le mille-feuille en alternant pâte et crème.',
                    'Nappez le dessus de fondant blanc.',
                    'Tracez des lignes de chocolat et créez un motif en plume.',
                    'Réfrigérez 2 heures avant de servir.'
                ],
                time: '2 heures + réfrigération',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Tarte au Citron Meringuée',
                ingredients: ['1 pâte sablée', '4 citrons', '3 œufs entiers', '2 jaunes', '150g de sucre', '100g de beurre', '4 blancs d\'œufs', '120g de sucre pour meringue'],
                instructions: [
                    'Cuisez la pâte sablée à blanc 15 minutes.',
                    'Préparez la curd de citron en cuisant œufs, jus de citron et sucre.',
                    'Montez le beurre froid dans la curd chaude.',
                    'Garnissez le fond de tarte de curd de citron.',
                    'Montez les blancs en neige avec le sucre.',
                    'Dressez la meringue et dorez au four 5 minutes.'
                ],
                time: '1h30',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Soufflé au Grand Marnier',
                ingredients: ['500ml de lait', '40g de farine', '40g de beurre', '5 jaunes d\'œufs', '6 blancs d\'œufs', '100g de sucre', '60ml de Grand Marnier', 'Sucre glace'],
                instructions: [
                    'Préparez une panade avec lait, beurre et farine.',
                    'Incorporez les jaunes et le Grand Marnier.',
                    'Montez les blancs en neige avec le sucre.',
                    'Mélangez délicatement 1/3 des blancs puis le reste.',
                    'Remplissez des ramequins beurrés et sucrés.',
                    'Enfournez 15 minutes à 190°C sans ouvrir le four.'
                ],
                time: '45 minutes',
                difficulty: 'Difficile',
                servings: '6 personnes'
            },
            {
                name: 'Paris-Brest',
                ingredients: ['Pâte à choux', 'Crème pralinée', '100g d\'amandes', '100g de noisettes', '200g de sucre', '500ml de crème', '4 jaunes d\'œufs', 'Amandes effilées'],
                instructions: [
                    'Dressez la pâte à choux en couronnes et enfournez.',
                    'Préparez un pralin avec amandes, noisettes et sucre.',
                    'Réalisez une crème pâtissière au pralin.',
                    'Coupez les choux en deux horizontalement.',
                    'Garnissez généreusement de crème pralinée.',
                    'Refermez et saupoudrez d\'amandes effilées.'
                ],
                time: '2 heures',
                difficulty: 'Très difficile',
                servings: '8 personnes'
            },
            {
                name: 'Clafoutis aux Cerises',
                ingredients: ['500g de cerises', '4 œufs', '100g de sucre', '100g de farine', '400ml de lait', '50g de beurre', '1 pincée de sel', 'Vanille'],
                instructions: [
                    'Préchauffez le four à 180°C et beurrez un moule.',
                    'Disposez les cerises dénoyautées dans le moule.',
                    'Battez œufs et sucre jusqu\'à blanchiment.',
                    'Ajoutez farine, lait, vanille et beurre fondu.',
                    'Versez l\'appareil sur les cerises.',
                    'Enfournez 45 minutes jusqu\'à coloration dorée.'
                ],
                time: '1 heure',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Île Flottante',
                ingredients: ['6 œufs', '150g de sucre', '1L de lait', '1 gousse de vanille', '100g de sucre pour caramel', 'Pralines roses'],
                instructions: [
                    'Séparez les blancs des jaunes d\'œufs.',
                    'Préparez une crème anglaise avec les jaunes, lait et vanille.',
                    'Montez les blancs en neige avec le sucre.',
                    'Pochez les blancs dans le lait chaud 3 minutes de chaque côté.',
                    'Préparez un caramel blond et laissez refroidir.',
                    'Servez les îles sur la crème anglaise, nappées de caramel et pralines.'
                ],
                time: '1h30',
                difficulty: 'Difficile',
                servings: '6 personnes'
            },
            {
                name: 'Religieuse au Chocolat',
                ingredients: ['Pâte à choux', 'Crème pâtissière au chocolat', 'Glaçage chocolat', 'Chantilly', '200g de chocolat noir', '500ml de lait', '6 jaunes d\'œufs', '100g de sucre', '40g de fécule'],
                instructions: [
                    'Préparez la pâte à choux et dressez gros et petits choux.',
                    'Enfournez 25 minutes à 200°C jusqu\'à dorure.',
                    'Préparez une crème pâtissière au chocolat.',
                    'Garnissez les choux de crème pâtissière.',
                    'Nappez de glaçage chocolat.',
                    'Montez les religieuses et décorez de chantilly.'
                ],
                time: '2h30',
                difficulty: 'Très difficile',
                servings: '8 religieuses'
            },
            {
                name: 'Opéra',
                ingredients: ['Biscuit Joconde', 'Ganache chocolat', 'Crème au beurre café', 'Sirop café', 'Glaçage chocolat', '200g de chocolat', '200ml de crème', '150g de beurre', 'Café expresso'],
                instructions: [
                    'Préparez un biscuit Joconde aux amandes.',
                    'Réalisez une ganache chocolat et une crème au beurre café.',
                    'Montez l\'opéra en alternant biscuit, sirop, crème et ganache.',
                    'Terminez par une couche de glaçage chocolat brillant.',
                    'Réfrigérez 4 heures minimum.',
                    'Découpez en rectangles parfaits avant de servir.'
                ],
                time: '4 heures + réfrigération',
                difficulty: 'Très difficile',
                servings: '12 personnes'
            },
            {
                name: 'Saint-Honoré',
                ingredients: ['Pâte brisée', 'Pâte à choux', 'Crème pâtissière', 'Crème Chiboust', 'Caramel', '500ml de lait', '6 œufs', '150g de sucre', 'Gélatine', 'Vanille'],
                instructions: [
                    'Foncez un cercle de pâte brisée et cuisez à blanc.',
                    'Dressez des petits choux sur le pourtour et au centre.',
                    'Garnissez les choux de crème pâtissière.',
                    'Trempez-les dans le caramel et fixez sur le fond.',
                    'Garnissez le centre de crème Chiboust.',
                    'Décorez avec du caramel filé.'
                ],
                time: '3 heures',
                difficulty: 'Très difficile',
                servings: '10 personnes'
            },
            {
                name: 'Croquembouche',
                ingredients: ['Pâte à choux', 'Crème pâtissière vanille', 'Caramel', 'Sucre filé', '1L de lait', '8 œufs', '200g de sucre', '60g de fécule', 'Vanille bourbon'],
                instructions: [
                    'Préparez de nombreux petits choux et laissez refroidir.',
                    'Garnissez chaque chou de crème pâtissière.',
                    'Préparez un caramel blond.',
                    'Trempez chaque chou dans le caramel et montez en pyramide.',
                    'Décorez avec du sucre filé doré.',
                    'Servez le jour même pour conserver le croustillant.'
                ],
                time: '4 heures',
                difficulty: 'Très difficile',
                servings: '15 personnes'
            },
            {
                name: 'Fraisier',
                ingredients: ['Génoise', 'Mousseline vanille', '500g de fraises', 'Sirop vanille', 'Pâte d\'amandes verte', '250g de beurre', '4 jaunes d\'œufs', '150g de sucre', 'Vanille'],
                instructions: [
                    'Préparez une génoise et coupez en 2 disques.',
                    'Réalisez une crème mousseline vanille.',
                    'Imbibez le premier disque de sirop vanille.',
                    'Étalez la mousseline et disposez les fraises coupées.',
                    'Recouvrez du second disque imbibé.',
                    'Enrobez de pâte d\'amandes verte et décorez.'
                ],
                time: '2h30',
                difficulty: 'Difficile',
                servings: '10 personnes'
            },
            {
                name: 'Tarte aux Framboises',
                ingredients: ['Pâte sablée vanille', '500g de framboises', 'Crème pâtissière', 'Nappage neutre', '500ml de lait', '4 jaunes d\'œufs', '80g de sucre', '40g de fécule', 'Vanille'],
                instructions: [
                    'Cuisez la pâte sablée à blanc 15 minutes.',
                    'Préparez une crème pâtissière vanille.',
                    'Garnissez le fond de tarte de crème.',
                    'Disposez harmonieusement les framboises.',
                    'Badigeonnez de nappage neutre.',
                    'Réfrigérez 2 heures avant de servir.'
                ],
                time: '1h + réfrigération',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Éclair au Café',
                ingredients: ['Pâte à choux', 'Crème pâtissière café', 'Fondant café', 'Café expresso', '500ml de lait', '6 jaunes d\'œufs', '100g de sucre', '50g de fécule'],
                instructions: [
                    'Dressez des éclairs de 12 cm et enfournez 25 minutes.',
                    'Préparez une crème pâtissière au café.',
                    'Percez et garnissez les éclairs de crème.',
                    'Préparez un fondant au café.',
                    'Trempez le dessus des éclairs dans le fondant.',
                    'Laissez prendre avant de servir.'
                ],
                time: '1h30',
                difficulty: 'Difficile',
                servings: '12 éclairs'
            },
            {
                name: 'Tarte Tropézienne',
                ingredients: ['Brioche', 'Crème diplomate', '400ml de lait', '4 jaunes d\'œufs', '100g de sucre', '40g de fécule', '200ml de crème fouettée', 'Vanille', 'Sucre perlé'],
                instructions: [
                    'Préparez une brioche sucrée avec sucre perlé.',
                    'Réalisez une crème pâtissière vanille.',
                    'Montez la crème liquide en chantilly.',
                    'Mélangez délicatement crème et chantilly pour la diplomate.',
                    'Coupez la brioche en deux et garnissez de crème.',
                    'Refermez et saupoudrez de sucre glace.'
                ],
                time: '2 heures + levée',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Charlotte aux Poires',
                ingredients: ['Biscuits à la cuillère', 'Mousse aux poires', '6 poires Williams', '4 feuilles de gélatine', '300ml de crème', '3 œufs', '80g de sucre', 'Poire Williams (alcool)'],
                instructions: [
                    'Tapissez un moule de biscuits à la cuillère.',
                    'Pochez les poires dans un sirop vanillé.',
                    'Préparez une mousse légère aux poires.',
                    'Alternez mousse et poires dans le moule.',
                    'Recouvrez de biscuits et réfrigérez 6 heures.',
                    'Démoulez et décorez de poires pochées.'
                ],
                time: '1h30 + 6h réfrigération',
                difficulty: 'Difficile',
                servings: '10 personnes'
            },
            {
                name: 'Baba au Rhum',
                ingredients: ['Pâte levée', 'Sirop au rhum', 'Chantilly', '250g de farine', '4 œufs', '150g de beurre', '10g de levure', '200g de sucre', '300ml d\'eau', 'Rhum brun'],
                instructions: [
                    'Préparez une pâte levée et faites lever 2 heures.',
                    'Moule en babas et enfournez 20 minutes.',
                    'Préparez un sirop rhum-sucre.',
                    'Imbibez généreusement les babas tièdes.',
                    'Laissez refroidir et imbiber complètement.',
                    'Servez avec chantilly et fruits frais.'
                ],
                time: '3 heures + levée',
                difficulty: 'Difficile',
                servings: '8 babas'
            },
            {
                name: 'Tarte Bourdaloue',
                ingredients: ['Pâte brisée', 'Crème frangipane', '6 poires', 'Amandes effilées', '100g de beurre', '100g de sucre', '100g d\'amandes en poudre', '2 œufs', 'Rhum'],
                instructions: [
                    'Foncez un moule de pâte brisée.',
                    'Préparez la crème frangipane avec beurre, sucre, amandes et œufs.',
                    'Étalez la frangipane sur le fond de tarte.',
                    'Disposez les poires pelées et coupées en lamelles.',
                    'Parsemez d\'amandes effilées.',
                    'Enfournez 45 minutes à 180°C.'
                ],
                time: '1h15',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Macarons Parisiens',
                ingredients: ['125g d\'amandes en poudre', '200g de sucre glace', '75g de blancs d\'œufs', '25g de sucre', 'Colorants', 'Ganache au choix'],
                instructions: [
                    'Mixez amandes et sucre glace, tamisez finement.',
                    'Montez les blancs avec le sucre en meringue ferme.',
                    'Incorporez colorants puis tant pour tant délicatement.',
                    'Macaronnez jusqu\'à consistance coulante.',
                    'Dressez sur tapis silicone et croûtez 30 minutes.',
                    'Enfournez 14 minutes à 150°C, garnissez de ganache.'
                ],
                time: '2 heures + croûtage',
                difficulty: 'Très difficile',
                servings: '30 macarons'
            },
            {
                name: 'Kouign-Amann',
                ingredients: ['500g de farine', '10g de sel', '10g de levure', '300ml d\'eau', '250g de beurre demi-sel', '200g de sucre'],
                instructions: [
                    'Préparez une pâte levée et laissez pointer 1 heure.',
                    'Incorporez le beurre en pâton comme pour un feuilletage.',
                    'Donnez 3 tours en incorporant le sucre progressivement.',
                    'Découpez et moule dans des petits moules beurrés.',
                    'Laissez pousser 1 heure.',
                    'Enfournez 25 minutes à 210°C jusqu\'à caramélisation.'
                ],
                time: '4 heures + levée',
                difficulty: 'Très difficile',
                servings: '12 kouign-amann'
            },
            {
                name: 'Gâteau Saint-Joseph',
                ingredients: ['Pâte d\'amandes', 'Crème aux amandes', 'Pâte feuilletée', '200g d\'amandes', '200g de sucre', '4 œufs', '100g de beurre', 'Rhum', 'Dorure'],
                instructions: [
                    'Étalez la pâte feuilletée en 2 abaisses.',
                    'Préparez la crème aux amandes avec tous les ingrédients.',
                    'Garnissez une abaisse de crème en laissant une bordure.',
                    'Recouvrez de la seconde abaisse et soudez.',
                    'Dorez et décorez au couteau.',
                    'Enfournez 30 minutes à 200°C.'
                ],
                time: '1h30',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Vacherin aux Fruits',
                ingredients: ['Meringue française', 'Glace vanille', 'Glace fraise', 'Chantilly', '500g de fruits rouges', '4 blancs d\'œufs', '250g de sucre', 'Vanille'],
                instructions: [
                    'Montez les blancs en neige avec le sucre.',
                    'Dressez un fond et des bords de meringue.',
                    'Enfournez 2 heures à 100°C pour sécher.',
                    'Garnissez de boules de glace alternées.',
                    'Décorez de chantilly et fruits rouges.',
                    'Servez immédiatement.'
                ],
                time: '3 heures + séchage',
                difficulty: 'Difficile',
                servings: '10 personnes'
            },
            {
                name: 'Financiers aux Amandes',
                ingredients: ['100g d\'amandes en poudre', '150g de sucre glace', '50g de farine', '4 blancs d\'œufs', '100g de beurre noisette', '1 pincée de sel'],
                instructions: [
                    'Mélangez amandes, sucre glace et farine.',
                    'Ajoutez les blancs d\'œufs et mélangez.',
                    'Incorporez le beurre noisette tiède.',
                    'Remplissez des moules à financiers.',
                    'Enfournez 12 minutes à 200°C.',
                    'Démoulez tiède et laissez refroidir.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '15 financiers'
            },
            {
                name: 'Canelés de Bordeaux',
                ingredients: ['500ml de lait', '50g de beurre', '2 œufs entiers', '1 jaune', '200g de sucre', '100g de farine', 'Rhum', 'Vanille', 'Cire d\'abeille'],
                instructions: [
                    'Chauffez le lait avec beurre et vanille.',
                    'Battez œufs et sucre, ajoutez la farine.',
                    'Versez le lait chaud et le rhum.',
                    'Laissez reposer la pâte 24 heures.',
                    'Cirez les moules et garnissez aux 3/4.',
                    'Enfournez 1 heure à 220°C puis 180°C.'
                ],
                time: '1h30 + 24h repos',
                difficulty: 'Très difficile',
                servings: '12 canelés'
            },
            {
                name: 'Galette des Rois Frangipane',
                ingredients: ['2 pâtes feuilletées', 'Crème frangipane', '125g de beurre', '125g de sucre', '125g d\'amandes', '2 œufs', 'Rhum', 'Fève', 'Dorure'],
                instructions: [
                    'Préparez la frangipane en mélangeant tous les ingrédients.',
                    'Étalez la crème sur une pâte en laissant une bordure.',
                    'Cachez la fève dans la crème.',
                    'Recouvrez de la seconde pâte et soudez.',
                    'Dorez et tracez des rosaces au couteau.',
                    'Enfournez 30 minutes à 200°C.'
                ],
                time: '1 heure',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Mousse au Chocolat Traditionnelle',
                ingredients: ['200g de chocolat noir', '6 œufs', '1 pincée de sel', 'Chantilly (optionnel)'],
                instructions: [
                    'Faites fondre le chocolat au bain-marie.',
                    'Séparez les blancs des jaunes d\'œufs.',
                    'Incorporez les jaunes un par un dans le chocolat tiède.',
                    'Montez les blancs en neige ferme avec le sel.',
                    'Incorporez délicatement les blancs en 2 fois.',
                    'Répartissez en verrines et réfrigérez 4 heures.'
                ],
                time: '20 min + 4h réfrigération',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Far Breton aux Pruneaux',
                ingredients: ['125g de farine', '4 œufs', '150g de sucre', '750ml de lait', '50g de beurre', '200g de pruneaux', 'Rhum', 'Vanille', 'Sel'],
                instructions: [
                    'Faites gonfler les pruneaux dans le rhum.',
                    'Mélangez farine, sucre et une pincée de sel.',
                    'Ajoutez les œufs puis le lait progressivement.',
                    'Incorporez le beurre fondu et la vanille.',
                    'Disposez les pruneaux dans un moule beurré.',
                    'Versez l\'appareil et enfournez 45 minutes à 180°C.'
                ],
                time: '1 heure',
                difficulty: 'Facile',
                servings: '8 personnes'
            }
        ],
        'collation': [
            {
                name: 'Madeleines de Commercy',
                ingredients: ['100g de farine', '100g de sucre', '100g de beurre', '2 œufs', '1/2 sachet de levure', 'Zeste de citron'],
                instructions: [
                    'Mélangez les œufs et le sucre jusqu\'à blanchiment.',
                    'Ajoutez la farine, la levure et le zeste de citron.',
                    'Incorporez le beurre fondu tiède.',
                    'Remplissez les moules à madeleines aux 3/4.',
                    'Enfournez 12 minutes à 220°C.',
                    'Démoulez et laissez refroidir sur une grille.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '12 madeleines'
            },
            {
                name: 'Pain d\'Épices Maison',
                ingredients: ['250g de farine', '200g de miel', '2 œufs', '100ml de lait', '1 cuillère à café de bicarbonate', 'Épices pain d\'épices', 'Beurre'],
                instructions: [
                    'Chauffez le miel jusqu\'à liquéfaction.',
                    'Mélangez farine, épices et bicarbonate.',
                    'Battez œufs et lait, ajoutez le miel tiède.',
                    'Incorporez le mélange sec et mélangez bien.',
                    'Versez dans un moule beurré.',
                    'Enfournez 45 minutes à 160°C.'
                ],
                time: '1 heure',
                difficulty: 'Facile',
                servings: '10 personnes'
            },
            {
                name: 'Chouquettes Parisiennes',
                ingredients: ['125ml d\'eau', '50g de beurre', '1 pincée de sel', '75g de farine', '2 œufs', 'Sucre perlé', '1 œuf pour dorure'],
                instructions: [
                    'Portez eau, beurre et sel à ébullition.',
                    'Ajoutez la farine d\'un coup et mélangez vigoureusement.',
                    'Laissez dessécher 2 minutes hors du feu.',
                    'Incorporez les œufs un par un.',
                    'Dressez des petits choux et parsemez de sucre perlé.',
                    'Enfournez 20 minutes à 200°C.'
                ],
                time: '40 minutes',
                difficulty: 'Intermédiaire',
                servings: '20 chouquettes'
            },
            {
                name: 'Croque-Monsieur Traditionnel',
                ingredients: ['8 tranches de pain de mie', '4 tranches de jambon blanc', '200g de gruyère râpé', '50g de beurre', '2 cuillères à soupe de farine', '300ml de lait'],
                instructions: [
                    'Préparez une béchamel avec beurre, farine et lait.',
                    'Incorporez la moitié du gruyère.',
                    'Garnissez 4 tranches de jambon et fromage.',
                    'Recouvrez des autres tranches.',
                    'Nappez de béchamel et gruyère.',
                    'Enfournez 15 minutes à 200°C jusqu\'à dorure.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Gougères Bourguignonnes',
                ingredients: ['125ml d\'eau', '50g de beurre', '75g de farine', '2 œufs', '100g de comté râpé', 'Muscade', 'Poivre'],
                instructions: [
                    'Préparez une pâte à choux classique.',
                    'Incorporez le comté râpé et assaisonnements.',
                    'Dressez des boules de pâte sur plaque.',
                    'Parsemez de fromage supplémentaire.',
                    'Enfournez 25 minutes à 200°C.',
                    'Servez tiède en apéritif.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '15 gougères'
            },
            {
                name: 'Quatre-Quarts Breton',
                ingredients: ['250g de beurre', '250g de sucre', '250g de farine', '4 œufs', '1 sachet de levure', 'Vanille', 'Rhum'],
                instructions: [
                    'Crémeusez beurre mou et sucre.',
                    'Ajoutez les œufs un par un.',
                    'Incorporez farine, levure et arômes.',
                    'Versez dans un moule à cake beurré.',
                    'Enfournez 45 minutes à 160°C.',
                    'Vérifiez la cuisson avec la pointe d\'un couteau.'
                ],
                time: '1 heure',
                difficulty: 'Facile',
                servings: '8 personnes'
            },
            {
                name: 'Petits Fours Salés Variés',
                ingredients: ['Pâte feuilletée', 'Tapenade', 'Fromage de chèvre', 'Tomates cerises', 'Anchois', 'Olives', 'Herbes de Provence', 'Œuf pour dorure'],
                instructions: [
                    'Étalez la pâte feuilletée finement.',
                    'Découpez en carrés et rectangles.',
                    'Garnissez de différentes préparations.',
                    'Variez : tapenade-chèvre, tomate-anchois, olive-herbes.',
                    'Dorez les bords à l\'œuf battu.',
                    'Enfournez 12 minutes à 200°C.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '20 pièces'
            },
            {
                name: 'Cookies aux Pépites de Chocolat',
                ingredients: ['200g de farine', '150g de beurre', '100g de sucre roux', '50g de sucre blanc', '1 œuf', '150g de pépites de chocolat', 'Levure chimique', 'Vanille'],
                instructions: [
                    'Crémeusez beurre mou et sucres.',
                    'Ajoutez œuf et vanille.',
                    'Incorporez farine et levure.',
                    'Ajoutez les pépites de chocolat.',
                    'Formez des boules sur plaque.',
                    'Enfournez 12 minutes à 180°C.'
                ],
                time: '25 minutes',
                difficulty: 'Facile',
                servings: '15 cookies'
            },
            {
                name: 'Palmiers Feuilletés',
                ingredients: ['1 pâte feuilletée', '100g de sucre en poudre', '1 œuf pour dorure'],
                instructions: [
                    'Étalez la pâte feuilletée en rectangle.',
                    'Saupoudrez généreusement de sucre.',
                    'Roulez chaque côté vers le centre.',
                    'Réfrigérez 30 minutes.',
                    'Coupez en tranches et dorez.',
                    'Enfournez 15 minutes à 200°C en retournant à mi-cuisson.'
                ],
                time: '50 minutes + réfrigération',
                difficulty: 'Facile',
                servings: '20 palmiers'
            },
            {
                name: 'Muffins aux Myrtilles',
                ingredients: ['250g de farine', '2 œufs', '200ml de lait', '80ml d\'huile', '100g de sucre', '1 sachet de levure', '150g de myrtilles', 'Vanille'],
                instructions: [
                    'Mélangez ingrédients secs dans un saladier.',
                    'Battez œufs, lait, huile et vanille.',
                    'Versez le mélange liquide sur la farine.',
                    'Mélangez rapidement sans trop travailler.',
                    'Incorporez délicatement les myrtilles.',
                    'Enfournez 20 minutes à 180°C dans moules à muffins.'
                ],
                time: '35 minutes',
                difficulty: 'Facile',
                servings: '12 muffins'
            }
        ]
    },
    italienne: {
        'petit-déjeuner': [
            {
                name: 'Cappuccino et Cornetti',
                ingredients: ['Café expresso', 'Lait entier', '4 cornetti', 'Sucre', 'Cacao en poudre'],
                instructions: [
                    'Préparez un expresso serré.',
                    'Faites chauffer le lait et montez-le en mousse.',
                    'Versez le café dans une grande tasse.',
                    'Ajoutez délicatement la mousse de lait.',
                    'Saupoudrez de cacao.',
                    'Servez avec les cornetti tièdes.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '2 personnes'
            },
            {
                name: 'Maritozzi Romani',
                ingredients: ['4 briochettes rondes', '300ml de chantilly', '50g de sucre glace', 'Zeste d\'orange', 'Candits d\'orange', 'Amandes grillées'],
                instructions: [
                    'Coupez les maritozzi en deux horizontalement.',
                    'Montez la chantilly avec le sucre glace.',
                    'Ajoutez zeste d\'orange râpé.',
                    'Garnissez généreusement les briochettes.',
                    'Décorez de candits et amandes.',
                    'Servez immédiatement bien frais.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Frittata alle Erbe',
                ingredients: ['6 œufs', 'Basilic frais', 'Persil', 'Menthe', 'Parmesan râpé', 'Huile d\'olive extra vierge', 'Sel', 'Poivre noir'],
                instructions: [
                    'Battez les œufs avec sel et poivre.',
                    'Hachez finement toutes les herbes fraîches.',
                    'Incorporez herbes et parmesan aux œufs.',
                    'Chauffez l\'huile d\'olive dans une poêle.',
                    'Versez le mélange et cuisez 5 minutes.',
                    'Terminez 3 minutes sous le grill.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Biscotti all\'Anice',
                ingredients: ['300g de farine', '200g de sucre', '3 œufs', '100g d\'amandes entières', '1 cuillère à café d\'anis', 'Levure chimique', 'Zeste de citron'],
                instructions: [
                    'Mélangez farine, sucre et levure.',
                    'Ajoutez œufs, anis et zeste de citron.',
                    'Incorporez les amandes entières.',
                    'Formez des boudins et enfournez 25 minutes.',
                    'Coupez en biscotti obliques.',
                    'Enfournez à nouveau 10 minutes pour sécher.'
                ],
                time: '50 minutes',
                difficulty: 'Intermédiaire',
                servings: '20 biscotti'
            },
            {
                name: 'Panettone French Toast',
                ingredients: ['6 tranches de panettone', '3 œufs', '200ml de lait', '2 cuillères à soupe de sucre', 'Vanille', 'Beurre', 'Mascarpone', 'Miel'],
                instructions: [
                    'Battez œufs, lait, sucre et vanille.',
                    'Trempez les tranches de panettone.',
                    'Faites dorer au beurre de chaque côté.',
                    'Servez chaud avec mascarpone.',
                    'Arrosez généreusement de miel.',
                    'Décorez de fruits confits du panettone.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Granita al Caffè',
                ingredients: ['500ml de café fort refroidi', '100g de sucre', '200ml de chantilly', 'Brioche sicilienne'],
                instructions: [
                    'Dissolvez le sucre dans le café chaud.',
                    'Laissez refroidir complètement.',
                    'Versez dans un plat et congelez.',
                    'Grattez à la fourchette toutes les 30 minutes.',
                    'Répétez 4 fois pour obtenir des cristaux fins.',
                    'Servez dans des verres avec chantilly et brioche.'
                ],
                time: '15 min + 3h congélation',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Focaccia Dolce',
                ingredients: ['300g de farine', '7g de levure fraîche', '200ml d\'eau tiède', '60ml d\'huile d\'olive', '50g de sucre', 'Raisins secs', 'Pignons', 'Sel'],
                instructions: [
                    'Délayez la levure dans l\'eau tiède sucrée.',
                    'Mélangez farine et sel, ajoutez eau-levure.',
                    'Pétrissez avec l\'huile 10 minutes.',
                    'Laissez lever 1 heure.',
                    'Étalez, parsemez raisins et pignons.',
                    'Enfournez 25 minutes à 200°C.'
                ],
                time: '1h30 + levée',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Caffè Affogato',
                ingredients: ['4 boules de gelato alla vaniglia', '4 expressos chauds', 'Amaretti', 'Chocolat noir râpé'],
                instructions: [
                    'Placez une boule de glace dans chaque verre.',
                    'Préparez 4 expressos bien chauds.',
                    'Versez l\'expresso chaud sur chaque boule.',
                    'Servez immédiatement avec amaretti.',
                    'Saupoudrez de chocolat râpé.',
                    'Dégustez à la petite cuillère.'
                ],
                time: '5 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Bomboloni alla Crema',
                ingredients: ['Pâte à brioche', 'Crème pâtissière', 'Huile de friture', 'Sucre en poudre', 'Confiture d\'abricot'],
                instructions: [
                    'Formez des boules avec la pâte levée.',
                    'Laissez lever 45 minutes.',
                    'Faites frire dans l\'huile à 170°C.',
                    'Égouttez et roulez dans le sucre.',
                    'Percez et garnissez de crème à la poche.',
                    'Servez tièdes pour le petit-déjeuner.'
                ],
                time: '1h30 + levée',
                difficulty: 'Difficile',
                servings: '12 bomboloni'
            },
            {
                name: 'Ricotta e Miele Toast',
                ingredients: ['4 tranches de pain artisanal', '200g de ricotta fraîche', '4 cuillères à soupe de miel', 'Noix concassées', 'Figues fraîches', 'Menthe'],
                instructions: [
                    'Grillez légèrement les tranches de pain.',
                    'Étalez généreusement la ricotta fraîche.',
                    'Arrosez délicatement de miel.',
                    'Parsemez de noix concassées.',
                    'Ajoutez lamelles de figues fraîches.',
                    'Décorez de feuilles de menthe.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
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
            },
            {
                name: 'Spaghetti Carbonara',
                ingredients: ['400g de spaghetti', '200g de guanciale', '4 œufs', '100g de Pecorino Romano', '100g de Parmesan', 'Poivre noir', 'Sel'],
                instructions: [
                    'Faites cuire les pâtes dans l\'eau salée.',
                    'Coupez le guanciale en lardons et faites-le griller.',
                    'Battez les œufs avec les fromages râpés.',
                    'Égouttez les pâtes en gardant un peu d\'eau de cuisson.',
                    'Mélangez rapidement pâtes, guanciale et œufs battus.',
                    'Ajoutez l\'eau de cuisson si nécessaire et servez immédiatement.'
                ],
                time: '20 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'Lasagnes Bolognaise',
                ingredients: ['12 feuilles de lasagnes', '500g de bœuf haché', '300g de porc haché', '400g de tomates', '2 carottes', '2 branches de céleri', '1 oignon', '500ml de béchamel', 'Parmesan', 'Mozzarella'],
                instructions: [
                    'Préparez la sauce bolognaise en faisant revenir la mirepoix.',
                    'Ajoutez les viandes et faites brunir.',
                    'Incorporez les tomates et laissez mijoter 2 heures.',
                    'Montez les lasagnes en alternant pâtes, bolognaise et béchamel.',
                    'Terminez par fromages râpés.',
                    'Enfournez 45 minutes à 180°C.'
                ],
                time: '3 heures',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Risotto alla Milanese',
                ingredients: ['300g de riz Carnaroli', '1L de bouillon de bœuf', '1 oignon', '100ml de vin blanc', '1g de safran', '100g de parmesan', '80g de beurre', 'Moelle de bœuf'],
                instructions: [
                    'Infusez le safran dans le bouillon chaud.',
                    'Faites suer l\'oignon dans beurre et moelle.',
                    'Ajoutez le riz et nacrez 3 minutes.',
                    'Versez le vin blanc et laissez évaporer.',
                    'Ajoutez le bouillon saffrané louche par louche.',
                    'Mantecate avec beurre et parmesan en fin de cuisson.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'Penne all\'Arrabbiata',
                ingredients: ['400g de penne rigate', '400g de tomates pelées', '4 gousses d\'ail', '2 piments rouges', 'Persil plat', 'Huile d\'olive extra vierge', 'Sel'],
                instructions: [
                    'Faites revenir ail et piments dans l\'huile chaude.',
                    'Ajoutez les tomates concassées.',
                    'Laissez mijoter 15 minutes à feu vif.',
                    'Cuisez les penne al dente.',
                    'Mélangez pâtes et sauce dans la poêle.',
                    'Parsemez de persil et servez immédiatement.'
                ],
                time: '25 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
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
            },
            {
                name: 'Gnocchi alla Sorrentina',
                ingredients: ['800g de gnocchi de pommes de terre', '400g de sauce tomate', '200g de mozzarella', '50g de parmesan', 'Basilic frais', 'Huile d\'olive', 'Ail'],
                instructions: [
                    'Préparez une sauce tomate à l\'ail et basilic.',
                    'Cuisez les gnocchi dans l\'eau bouillante salée.',
                    'Mélangez gnocchi et sauce dans un plat.',
                    'Ajoutez mozzarella coupée en dés.',
                    'Parsemez de parmesan et basilic.',
                    'Gratinez 10 minutes au four.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Pasta e Fagioli',
                ingredients: ['300g de haricots cannellini', '200g de ditalini', '2 tomates', '1 oignon', '2 branches de céleri', '2 gousses d\'ail', 'Romarin', 'Huile d\'olive', 'Parmesan'],
                instructions: [
                    'Faites tremper les haricots une nuit.',
                    'Cuisez-les avec romarin 1 heure.',
                    'Faites un soffritto avec légumes hachés.',
                    'Ajoutez tomates et cuisez 10 minutes.',
                    'Incorporez haricots et leur eau de cuisson.',
                    'Ajoutez les pâtes et terminez la cuisson ensemble.'
                ],
                time: '1h30 + trempage',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Saltimbocca alla Romana',
                ingredients: ['8 escalopes de veau', '8 tranches de prosciutto', '8 feuilles de sauge', 'Farine', 'Vin blanc sec', '50g de beurre', 'Huile d\'olive', 'Cure-dents'],
                instructions: [
                    'Aplatissez finement les escalopes.',
                    'Posez prosciutto et sauge, fixez au cure-dent.',
                    'Farinez légèrement côté veau.',
                    'Saisissez 2 minutes côté prosciutto.',
                    'Retournez, ajoutez vin blanc et beurre.',
                    'Servez immédiatement avec le jus de cuisson.'
                ],
                time: '15 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'Minestrone della Nonna',
                ingredients: ['200g de haricots borlotti', '2 courgettes', '2 carottes', '2 pommes de terre', '1 oignon', '2 tomates', '100g de petites pâtes', 'Basilic', 'Parmesan', 'Huile d\'olive'],
                instructions: [
                    'Cuisez les haricots préalablement trempés.',
                    'Préparez un soffritto avec oignon et tomates.',
                    'Ajoutez tous les légumes coupés en dés.',
                    'Mouillez avec bouillon de légumes.',
                    'Ajoutez les pâtes 10 minutes avant la fin.',
                    'Servez avec basilic, parmesan et huile d\'olive.'
                ],
                time: '1h15 + trempage',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Melanzane alla Parmigiana',
                ingredients: ['3 grosses aubergines', '500g de sauce tomate', '300g de mozzarella', '100g de parmesan', 'Basilic frais', 'Farine', 'Œufs', 'Huile de friture'],
                instructions: [
                    'Coupez les aubergines en tranches et dégorgeant au sel.',
                    'Farinez, trempez dans l\'œuf et faites frire.',
                    'Préparez une sauce tomate au basilic.',
                    'Montez en couches : sauce, aubergines, fromages.',
                    'Répétez l\'opération 3 fois.',
                    'Enfournez 40 minutes à 180°C.'
                ],
                time: '1h30',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Cacio e Pepe',
                ingredients: ['400g de spaghetti', '200g de Pecorino Romano', 'Poivre noir grossièrement moulu', 'Eau de cuisson des pâtes'],
                instructions: [
                    'Cuisez les spaghetti al dente dans peu d\'eau.',
                    'Râpez finement le Pecorino.',
                    'Dans un saladier, mélangez fromage et poivre.',
                    'Ajoutez progressivement eau de cuisson chaude.',
                    'Créez une crème onctueuse.',
                    'Mélangez vigoureusement avec les pâtes chaudes.'
                ],
                time: '15 minutes',
                difficulty: 'Difficile',
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
            },
            {
                name: 'Scaloppine al Limone',
                ingredients: ['8 escalopes de veau', 'Farine', '100g de beurre', '2 citrons', '100ml de vin blanc sec', 'Persil', 'Sel', 'Poivre'],
                instructions: [
                    'Aplatissez les escalopes et farinez-les.',
                    'Faites-les dorer dans le beurre 2 minutes de chaque côté.',
                    'Réservez au chaud.',
                    'Déglacez la poêle au vin blanc et jus de citron.',
                    'Montez la sauce au beurre froid.',
                    'Nappez les escalopes et parsemez de persil.'
                ],
                time: '25 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'Branzino in Crosta di Sale',
                ingredients: ['1 bar de 1.5kg entier', '2kg de gros sel', '4 blancs d\'œufs', 'Herbes aromatiques', 'Citron', 'Huile d\'olive extra vierge'],
                instructions: [
                    'Videz et nettoyez le poisson sans l\'écailler.',
                    'Farcissez de herbes aromatiques.',
                    'Mélangez sel et blancs d\'œufs.',
                    'Tapissez un plat de sel, posez le poisson.',
                    'Recouvrez complètement de mélange sel.',
                    'Enfournez 40 minutes à 200°C, cassez la croûte pour servir.'
                ],
                time: '1 heure',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Vitello Tonnato',
                ingredients: ['1kg de rôti de veau', '200g de thon à l\'huile', '4 anchois', '2 œufs durs', 'Câpres', 'Mayonnaise', 'Citron', 'Vin blanc'],
                instructions: [
                    'Cuisez le rôti de veau dans bouillon aromatisé.',
                    'Laissez refroidir dans son jus.',
                    'Mixez thon, anchois, œufs et mayonnaise.',
                    'Ajoutez citron et un peu de bouillon.',
                    'Tranchez finement le veau froid.',
                    'Nappez de sauce tonnato et parsemez de câpres.'
                ],
                time: '1h + refroidissement',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Pesce Spada alla Griglia',
                ingredients: ['4 tranches d\'espadon', 'Huile d\'olive', 'Citron', 'Origan', 'Tomates cerises', 'Olives noires', 'Câpres', 'Ail'],
                instructions: [
                    'Marinez l\'espadon 30 minutes dans huile, citron et origan.',
                    'Préparez une salsa avec tomates, olives et câpres.',
                    'Grillez l\'espadon 4 minutes de chaque côté.',
                    'Assaisonnez d\'ail, huile et citron.',
                    'Servez immédiatement avec la salsa.',
                    'Accompagnez de légumes grillés.'
                ],
                time: '45 minutes + marinade',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Pollo alla Cacciatora',
                ingredients: ['1 poulet découpé', '400g de tomates', '1 poivron rouge', '1 oignon', 'Champignons', 'Vin rouge', 'Romarin', 'Huile d\'olive'],
                instructions: [
                    'Faites dorer les morceaux de poulet.',
                    'Réservez et faites revenir légumes.',
                    'Remettez le poulet, ajoutez tomates et vin.',
                    'Parfumez au romarin et laissez mijoter.',
                    'Cuisez 45 minutes jusqu\'à tendreté.',
                    'Servez avec polenta crémeuse.'
                ],
                time: '1h15',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Involtini di Melanzane',
                ingredients: ['2 grosses aubergines', '250g de ricotta', '100g de parmesan', 'Basilic', 'Sauce tomate', 'Mozzarella', 'Huile d\'olive'],
                instructions: [
                    'Coupez les aubergines en lamelles fines.',
                    'Grillez-les à l\'huile d\'olive.',
                    'Mélangez ricotta, parmesan et basilic.',
                    'Garnissez chaque lamelle de farce.',
                    'Roulez et disposez dans un plat.',
                    'Nappez de sauce tomate et gratinez.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Salmone in Padella',
                ingredients: ['4 pavés de saumon', 'Courgettes', 'Tomates cerises', 'Ail', 'Basilic', 'Vin blanc', 'Huile d\'olive', 'Pignons'],
                instructions: [
                    'Saisissez les pavés de saumon côté peau.',
                    'Retournez et cuisez 3 minutes.',
                    'Réservez au chaud.',
                    'Faites sauter courgettes et tomates.',
                    'Ajoutez ail, basilic et pignons.',
                    'Déglacez au vin blanc et servez avec le saumon.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Brasato al Barolo',
                ingredients: ['1.5kg de bœuf à braiser', '750ml de Barolo', '2 carottes', '2 oignons', '2 branches de céleri', 'Romarin', 'Sauge', 'Bouillon'],
                instructions: [
                    'Marinez la viande 24h dans le Barolo.',
                    'Égouttez et faites dorer de tous côtés.',
                    'Ajoutez légumes et herbes.',
                    'Versez marinade et bouillon.',
                    'Braisez 3 heures au four à 160°C.',
                    'Servez avec polenta et sauce réduite.'
                ],
                time: '3h30 + marinade',
                difficulty: 'Difficile',
                servings: '6 personnes'
            },
            {
                name: 'Capesante Gratinate',
                ingredients: ['12 coquilles Saint-Jacques', 'Chapelure', 'Persil', 'Ail', 'Citron', 'Huile d\'olive', 'Beurre', 'Parmesan'],
                instructions: [
                    'Nettoyez les coquilles Saint-Jacques.',
                    'Mélangez chapelure, persil, ail et parmesan.',
                    'Disposez les noix sur les coquilles.',
                    'Parsemez du mélange de chapelure.',
                    'Arrosez d\'huile d\'olive.',
                    'Gratinez 8 minutes au four très chaud.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Tiramisu',
                ingredients: ['300g de mascarpone', '3 œufs', '75g de sucre', '300ml de café fort', '3 cuillères à soupe de Marsala', '200g de biscuits savoiardi', 'Cacao en poudre'],
                instructions: [
                    'Séparez les blancs des jaunes d\'œufs.',
                    'Battez les jaunes avec le sucre puis incorporez le mascarpone.',
                    'Montez les blancs en neige et incorporez délicatement.',
                    'Mélangez café et Marsala.',
                    'Trempez rapidement les biscuits et alternez avec la crème.',
                    'Réfrigérez 4 heures et saupoudrez de cacao avant de servir.'
                ],
                time: '30 min + 4h réfrigération',
                difficulty: 'Facile',
                servings: '8 personnes'
            },
            {
                name: 'Panna Cotta aux Fruits Rouges',
                ingredients: ['500ml de crème liquide', '80g de sucre', '3 feuilles de gélatine', '1 gousse de vanille', '300g de fruits rouges', 'Coulis de fruits'],
                instructions: [
                    'Faites ramollir la gélatine dans l\'eau froide.',
                    'Chauffez la crème avec sucre et vanille.',
                    'Ajoutez la gélatine essorée hors du feu.',
                    'Répartissez dans des verrines et réfrigérez 4 heures.',
                    'Préparez un coulis avec les fruits rouges.',
                    'Servez la panna cotta nappée de coulis.'
                ],
                time: '20 min + 4h réfrigération',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Cannoli Siciliens',
                ingredients: ['Tubes à cannoli', '500g de ricotta', '200g de sucre glace', '100g de chocolat noir', '50g de pistaches', 'Zeste d\'orange', 'Marsala', 'Sucre glace'],
                instructions: [
                    'Mélangez ricotta, sucre glace et Marsala.',
                    'Ajoutez zeste d\'orange et chocolat haché.',
                    'Remplissez les tubes de cannoli avec la crème.',
                    'Trempez les extrémités dans les pistaches hachées.',
                    'Saupoudrez de sucre glace.',
                    'Servez immédiatement pour garder le croustillant.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '8 cannoli'
            },
            {
                name: 'Zabaione',
                ingredients: ['6 jaunes d\'œufs', '100g de sucre', '120ml de Marsala', 'Biscuits amaretti'],
                instructions: [
                    'Battez les jaunes d\'œufs avec le sucre dans un bain-marie.',
                    'Ajoutez progressivement le Marsala en fouettant.',
                    'Continuez à fouetter jusqu\'à épaississement.',
                    'La texture doit être mousseuse et nappe la cuillère.',
                    'Servez immédiatement dans des coupes.',
                    'Accompagnez de biscuits amaretti.'
                ],
                time: '20 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Semifreddo aux Amaretti',
                ingredients: ['300ml de crème liquide', '4 jaunes d\'œufs', '100g de sucre', '200g d\'amaretti', '100ml d\'Amaretto', 'Amandes grillées'],
                instructions: [
                    'Montez la crème en chantilly ferme.',
                    'Battez jaunes et sucre jusqu\'à blanchiment.',
                    'Incorporez délicatement la chantilly.',
                    'Émiettez les amaretti et imbibez d\'Amaretto.',
                    'Incorporez les biscuits dans la crème.',
                    'Moule et congélez 4 heures minimum.'
                ],
                time: '30 min + 4h congélation',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Granita Sicilienne',
                ingredients: ['500ml d\'eau', '150g de sucre', '200ml de jus de citron', 'Zeste de citron', 'Brioches siciliennes'],
                instructions: [
                    'Préparez un sirop avec eau et sucre.',
                    'Ajoutez jus et zeste de citron.',
                    'Versez dans un plat et placez au congélateur.',
                    'Grattez à la fourchette toutes les 30 minutes.',
                    'Répétez l\'opération 4-5 fois pour obtenir des cristaux fins.',
                    'Servez dans des verres avec brioche.'
                ],
                time: '15 min + 3h congélation',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Cassata Sicilienne',
                ingredients: ['Pan di Spagna', 'Ricotta', '200g de sucre glace', 'Chocolat noir haché', 'Fruits confits', 'Pistaches', 'Marasquin', 'Pâte d\'amandes verte'],
                instructions: [
                    'Tapissez un moule de tranches de pan di Spagna imbibées.',
                    'Mélangez ricotta, sucre, chocolat et fruits confits.',
                    'Parfumez au marasquin et ajoutez les pistaches.',
                    'Garnissez le moule de ce mélange.',
                    'Recouvrez de pâte d\'amandes verte.',
                    'Réfrigérez 12 heures avant de démouler.'
                ],
                time: '1h + 12h réfrigération',
                difficulty: 'Difficile',
                servings: '10 personnes'
            },
            {
                name: 'Affogato al Caffè',
                ingredients: ['Gelato alla vaniglia', 'Espresso molto caldo', 'Amaretti', 'Liqueur Amaretto'],
                instructions: [
                    'Placez une boule de glace vanille dans chaque verre.',
                    'Préparez un espresso bien serré et très chaud.',
                    'Versez l\'espresso chaud sur la glace.',
                    'Ajoutez quelques gouttes d\'Amaretto.',
                    'Servez immédiatement avec des amaretti.',
                    'Dégustez pendant que la glace fond dans le café.'
                ],
                time: '5 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Sfogliatelle',
                ingredients: ['Pâte sfoglia', 'Ricotta', 'Semoule', 'Sucre', 'Œufs', 'Zeste d\'orange', 'Cannelle', 'Vanille', 'Strutto'],
                instructions: [
                    'Préparez une pâte très fine étirée au maximum.',
                    'Badigeonnez de strutto et roulez serré.',
                    'Coupez en tranches et façonnez les cônes.',
                    'Préparez la crème avec ricotta, semoule cuite et arômes.',
                    'Garnissez les cônes et enfournez jusqu\'à dorure.',
                    'Servez tièdes saupoudrées de sucre glace.'
                ],
                time: '3 heures',
                difficulty: 'Très difficile',
                servings: '12 sfogliatelle'
            },
            {
                name: 'Sorbetto al Limone',
                ingredients: ['500ml d\'eau', '200g de sucre', '250ml de jus de citron', 'Zeste de 2 citrons', '1 blanc d\'œuf', 'Basilic frais'],
                instructions: [
                    'Préparez un sirop avec eau, sucre et zestes.',
                    'Laissez refroidir et ajoutez le jus de citron.',
                    'Versez en sorbetière et turbinez.',
                    'En fin de prise, ajoutez le blanc d\'œuf monté.',
                    'Terminez le turbinage jusqu\'à consistance ferme.',
                    'Servez décoré de basilic frais.'
                ],
                time: '30 min + turbinage',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Millefeuille Napoletano',
                ingredients: ['Pâte feuilletée', 'Crema diplomatica', 'Fruits rouges', 'Sucre glace', '500ml de lait', 'Jaunes d\'œufs', 'Sucre', 'Fécule', 'Chantilly'],
                instructions: [
                    'Cuisez la pâte feuilletée en rectangles bien dorés.',
                    'Préparez une crème diplomate avec pâtissière et chantilly.',
                    'Montez en alternant feuilletage et crème.',
                    'Disposez les fruits rouges entre les couches.',
                    'Terminez par du feuilletage saupoudré de sucre glace.',
                    'Réfrigérez 2 heures avant de découper.'
                ],
                time: '2h + réfrigération',
                difficulty: 'Difficile',
                servings: '8 personnes'
            }
        ],
        'collation': [
            {
                name: 'Gelato Pistacchio',
                ingredients: ['500ml de lait', '200ml de crème', '150g de sucre', '6 jaunes d\'œufs', '100g de pâte de pistache', 'Pistaches concassées'],
                instructions: [
                    'Chauffez le lait et la crème.',
                    'Battez les jaunes avec le sucre.',
                    'Réalisez une crème anglaise.',
                    'Ajoutez la pâte de pistache hors du feu.',
                    'Laissez refroidir puis turbinez en sorbetière.',
                    'Parsemez de pistaches concassées.'
                ],
                time: '45 min + turbinage',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Arancini Siciliani',
                ingredients: ['300g de riz Arborio cuit', '100g de mozzarella', '50g de parmesan', '2 œufs', 'Chapelure', 'Petits pois', 'Sauce tomate', 'Huile de friture'],
                instructions: [
                    'Mélangez le riz froid avec un œuf et parmesan.',
                    'Formez des boules avec mozzarella au centre.',
                    'Trempez dans œuf battu puis chapelure.',
                    'Faites frire jusqu\'à dorure croustillante.',
                    'Égouttez sur papier absorbant.',
                    'Servez chaud avec sauce tomate.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '8 arancini'
            },
            {
                name: 'Bruschetta Miste',
                ingredients: ['8 tranches de pain Pugliese', '4 tomates mûres', 'Mozzarella di bufala', 'Prosciutto di Parma', 'Basilic', 'Huile d\'olive', 'Ail', 'Balsamique'],
                instructions: [
                    'Grillez les tranches de pain.',
                    'Frottez avec une gousse d\'ail.',
                    'Variez les garnitures : tomate-basilic, mozzarella-prosciutto.',
                    'Arrosez généreusement d\'huile d\'olive.',
                    'Finissez avec quelques gouttes de balsamique.',
                    'Servez immédiatement en apéritif.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Panzanella Toscana',
                ingredients: ['300g de pain rassis', '4 tomates mûres', '1 concombre', '1 oignon rouge', 'Basilic', 'Vinaigre de vin', 'Huile d\'olive', 'Sel'],
                instructions: [
                    'Trempez le pain dans l\'eau puis essorez.',
                    'Coupez tomates et concombre en dés.',
                    'Émincez finement l\'oignon rouge.',
                    'Mélangez avec le pain émietté.',
                    'Assaisonnez d\'huile, vinaigre et basilic.',
                    'Laissez reposer 30 minutes avant de servir.'
                ],
                time: '45 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Supplì al Telefono',
                ingredients: ['400g de riz Arborio', 'Sauce tomate', 'Mozzarella', '2 œufs', 'Chapelure', 'Parmesan', 'Huile de friture'],
                instructions: [
                    'Préparez un risotto à la tomate.',
                    'Laissez refroidir et ajoutez œufs et parmesan.',
                    'Formez des cylindres avec mozzarella au centre.',
                    'Panez soigneusement.',
                    'Faites frire jusqu\'à dorure.',
                    'Le fromage doit filer comme un téléphone.'
                ],
                time: '45 minutes',
                difficulty: 'Difficile',
                servings: '10 supplì'
            },
            {
                name: 'Focaccia Genovese',
                ingredients: ['500g de farine', '10g de levure', '300ml d\'eau tiède', '80ml d\'huile d\'olive', 'Romarin', 'Olives', 'Gros sel', 'Tomates cerises'],
                instructions: [
                    'Préparez une pâte levée avec farine, levure et huile.',
                    'Laissez lever 2 heures.',
                    'Étalez dans un plat huilé.',
                    'Creusez des trous avec les doigts.',
                    'Garnissez d\'olives, tomates et romarin.',
                    'Enfournez 25 minutes à 220°C.'
                ],
                time: '2h30 + levée',
                difficulty: 'Facile',
                servings: '8 personnes'
            },
            {
                name: 'Antipasto Misto',
                ingredients: ['Prosciutto di Parma', 'Salami', 'Mortadelle', 'Mozzarella', 'Gorgonzola', 'Olives marinées', 'Artichauts', 'Poivrons grillés', 'Huile d\'olive'],
                instructions: [
                    'Disposez harmonieusement charcuteries et fromages.',
                    'Ajoutez légumes marinés colorés.',
                    'Variez textures et saveurs.',
                    'Arrosez d\'huile d\'olive extra vierge.',
                    'Servez avec pain italien et vin.',
                    'Accompagnez de figues fraîches en saison.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Panzerotti Pugliesi',
                ingredients: ['Pâte à pizza', 'Mozzarella', 'Tomates', 'Anchois', 'Origan', 'Huile d\'olive', 'Huile de friture'],
                instructions: [
                    'Étalez la pâte en cercles de 12 cm.',
                    'Garnissez de mozzarella, tomates et anchois.',
                    'Pliez en chausson et soudez les bords.',
                    'Faites frire dans l\'huile chaude.',
                    'Retournez à mi-cuisson.',
                    'Servez immédiatement bien croustillants.'
                ],
                time: '40 minutes',
                difficulty: 'Intermédiaire',
                servings: '8 panzerotti'
            },
            {
                name: 'Tramezzini Veneziani',
                ingredients: ['Pain de mie sans croûte', 'Thon', 'Mayonnaise', 'Œufs durs', 'Tomates', 'Salade', 'Jambon', 'Fromage'],
                instructions: [
                    'Préparez différentes farces : thon-mayonnaise, jambon-fromage.',
                    'Étalez généreusement sur pain de mie.',
                    'Ajoutez salade, tomates, œufs selon goût.',
                    'Refermez et coupez en triangles.',
                    'Servez frais comme en-cas.',
                    'Variez les garnitures selon les envies.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '8 tramezzini'
            },
            {
                name: 'Calzone Napoletano',
                ingredients: ['Pâte à pizza napolitaine', 'Ricotta', 'Mozzarella', 'Salami napolitain', 'Parmesan', 'Œuf', 'Poivre', 'Huile d\'olive'],
                instructions: [
                    'Étalez la pâte en disques.',
                    'Mélangez ricotta, mozzarella et parmesan.',
                    'Ajoutez salami coupé et œuf.',
                    'Garnissez la moitié de chaque disque.',
                    'Repliez et soudez en forme de chausson.',
                    'Enfournez 15 minutes à 250°C.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 calzones'
            }
        ]
    },
    asiatique: {
        'petit-déjeuner': [
            {
                name: 'Congee aux Champignons',
                ingredients: ['150g de riz', '1.5L de bouillon de poule', '200g de champignons shiitakés', '2 œufs', 'Ciboules', 'Sauce soja', 'Huile de sésame', 'Gingembre'],
                instructions: [
                    'Faites cuire le riz dans le bouillon 1 heure en remuant.',
                    'Ajoutez les champignons émincés.',
                    'Battez les œufs et incorporez-les en filet.',
                    'Assaisonnez avec sauce soja et huile de sésame.',
                    'Ajoutez le gingembre râpé.',
                    'Servez avec ciboules ciselées.'
                ],
                time: '1h15',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Dim Sum Vapeur',
                ingredients: ['Farine de blé', 'Porc haché', 'Crevettes', 'Champignons noirs', 'Bambou', 'Sauce soja', 'Huile de sésame', 'Gingembre', 'Ciboules'],
                instructions: [
                    'Préparez une pâte souple avec farine et eau chaude.',
                    'Mélangez porc, crevettes hachées et aromates.',
                    'Étalez la pâte en cercles fins.',
                    'Garnissez et formez des petits chaussons.',
                    'Cuisez à la vapeur 12 minutes.',
                    'Servez avec sauce soja épicée.'
                ],
                time: '1 heure',
                difficulty: 'Difficile',
                servings: '20 pièces'
            },
            {
                name: 'Onigiri aux Umeboshi',
                ingredients: ['400g de riz japonais', 'Umeboshi (prunes salées)', 'Nori', 'Sel de mer', 'Graines de sésame'],
                instructions: [
                    'Cuisez le riz japonais selon la méthode traditionnelle.',
                    'Laissez tiédir légèrement.',
                    'Humidifiez vos mains avec eau salée.',
                    'Formez des boules de riz avec umeboshi au centre.',
                    'Façonnez en triangles parfaits.',
                    'Enrobez de nori et parsemez de sésame.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '8 onigiri'
            },
            {
                name: 'Baozi aux Légumes',
                ingredients: ['500g de farine', '10g de levure', '250ml d\'eau tiède', 'Chou chinois', 'Champignons shiitakés', 'Tofu ferme', 'Gingembre', 'Sauce soja', 'Huile de sésame'],
                instructions: [
                    'Préparez une pâte levée et laissez doubler.',
                    'Sautez légumes et tofu avec assaisonnements.',
                    'Étalez la pâte en cercles.',
                    'Garnissez et fermez en petits pains.',
                    'Laissez lever 30 minutes.',
                    'Cuisez à la vapeur 15 minutes.'
                ],
                time: '2 heures + levée',
                difficulty: 'Difficile',
                servings: '12 baozi'
            },
            {
                name: 'Miso Soup Traditionnel',
                ingredients: ['Dashi (bouillon japonais)', 'Pâte miso', 'Tofu soyeux', 'Wakame', 'Ciboules', 'Champignons enoki'],
                instructions: [
                    'Préparez le dashi avec kombu et bonite.',
                    'Chauffez sans faire bouillir.',
                    'Délayez la pâte miso dans un peu de dashi.',
                    'Ajoutez tofu coupé en dés.',
                    'Incorporez wakame réhydratée.',
                    'Servez immédiatement avec ciboules et enoki.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Youtiao (Beignets Chinois)',
                ingredients: ['300g de farine', '1 cuillère à café de levure', '1 cuillère à café de bicarbonate', '1 œuf', '200ml d\'eau', 'Sel', 'Huile de friture'],
                instructions: [
                    'Mélangez farine, levure, bicarbonate et sel.',
                    'Ajoutez œuf et eau progressivement.',
                    'Pétrissez et laissez reposer 1 heure.',
                    'Étalez et coupez en bandes.',
                    'Collez 2 bandes et étirez.',
                    'Faites frire jusqu\'à dorure et gonflement.'
                ],
                time: '1h30',
                difficulty: 'Intermédiaire',
                servings: '8 youtiao'
            },
            {
                name: 'Tamagoyaki (Omelette Japonaise)',
                ingredients: ['6 œufs', '2 cuillères à soupe de dashi', '1 cuillère à soupe de mirin', '1 cuillère à café de sucre', 'Sauce soja', 'Huile végétale'],
                instructions: [
                    'Battez œufs avec dashi, mirin et sucre.',
                    'Chauffez une poêle rectangulaire.',
                    'Versez 1/3 du mélange et cuisez.',
                    'Roulez l\'omelette vers vous.',
                    'Répétez 2 fois en superposant.',
                    'Laissez refroidir et coupez en tranches.'
                ],
                time: '20 minutes',
                difficulty: 'Difficile',
                servings: '4 personnes'
            },
            {
                name: 'Chai Tea Latte Indien',
                ingredients: ['Thé noir', 'Lait entier', 'Cardamome', 'Cannelle', 'Gingembre frais', 'Clous de girofle', 'Sucre', 'Poivre noir'],
                instructions: [
                    'Faites bouillir lait avec toutes les épices.',
                    'Ajoutez le thé noir et infusez 3 minutes.',
                    'Sucrez selon goût.',
                    'Filtrez soigneusement.',
                    'Moussez au fouet ou mixeur.',
                    'Servez chaud dans de grandes tasses.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Kaya Toast Singapourien',
                ingredients: ['Pain de mie épais', 'Confiture de coco (kaya)', 'Beurre salé', '2 œufs à la coque', 'Café noir fort', 'Lait concentré'],
                instructions: [
                    'Grillez le pain jusqu\'à dorure parfaite.',
                    'Tartinez généreusement de kaya.',
                    'Ajoutez une fine couche de beurre froid.',
                    'Servez avec œufs à la coque (3 minutes).',
                    'Accompagnez de café au lait concentré.',
                    'Trempez le toast dans les jaunes coulants.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '2 personnes'
            },
            {
                name: 'Pancakes Coréens (Hotteok)',
                ingredients: ['250g de farine', '5g de levure', '200ml d\'eau tiède', '50g de sucre roux', 'Cannelle', 'Cacahuètes concassées', 'Huile végétale'],
                instructions: [
                    'Préparez une pâte levée et laissez doubler.',
                    'Mélangez sucre, cannelle et cacahuètes.',
                    'Formez des boules de pâte.',
                    'Garnissez du mélange sucré.',
                    'Aplatissez dans une poêle huilée.',
                    'Cuisez jusqu\'à caramélisation dorée.'
                ],
                time: '1h + levée',
                difficulty: 'Intermédiaire',
                servings: '8 hotteok'
            }
        ],
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
            },
            {
                name: 'Ramen Tonkotsu',
                ingredients: ['400g de nouilles ramen', '1kg d\'os de porc', '500g de poitrine de porc', '4 œufs', 'Miso blanc', 'Champignons shiitakés', 'Ciboules', 'Nori', 'Maïs', 'Pousses de bambou'],
                instructions: [
                    'Préparez le bouillon en faisant mijoter les os 12 heures.',
                    'Cuisez la poitrine de porc confite.',
                    'Préparez les œufs mollets marinés.',
                    'Cuisez les nouilles al dente.',
                    'Montez les bols avec bouillon, miso et nouilles.',
                    'Garnissez avec tous les accompagnements.'
                ],
                time: '12h + 30 min',
                difficulty: 'Difficile',
                servings: '4 personnes'
            },
            {
                name: 'Sushi Maki et Nigiri',
                ingredients: ['400g de riz à sushi', '300g de thon rouge', '200g de saumon', 'Feuilles de nori', 'Wasabi', 'Gingembre mariné', 'Sauce soja', 'Vinaigre de riz', 'Sucre', 'Sel'],
                instructions: [
                    'Préparez le riz vinaigré et laissez refroidir.',
                    'Découpez le poisson en sashimi.',
                    'Formez les nigiri avec riz et poisson.',
                    'Roulez les maki avec nori, riz et garniture.',
                    'Coupez les rouleaux en tranches.',
                    'Servez avec wasabi, gingembre et sauce soja.'
                ],
                time: '1 heure',
                difficulty: 'Difficile',
                servings: '4 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Canard Laqué de Pékin',
                ingredients: ['1 canard entier', 'Sauce hoisin', 'Crêpes chinoises', 'Ciboules', 'Concombre', 'Cinq-épices', 'Miel', 'Sauce soja', 'Vin de riz'],
                instructions: [
                    'Badigeonnez le canard du mélange miel-soja-cinq épices.',
                    'Laissez sécher le canard 24 heures au réfrigérateur.',
                    'Rôtissez 1h30 à 180°C en arrosant régulièrement.',
                    'Découpez la peau croustillante et la chair.',
                    'Réchauffez les crêpes à la vapeur.',
                    'Servez avec légumes julienne et sauce hoisin.'
                ],
                time: '24h + 2h',
                difficulty: 'Difficile',
                servings: '6 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Mochi à la Glace',
                ingredients: ['200g de farine de riz gluant', '250ml d\'eau', '50g de sucre', 'Fécule de pomme de terre', 'Glace vanille', 'Colorant alimentaire'],
                instructions: [
                    'Mélangez farine de riz, eau et sucre.',
                    'Cuisez au micro-ondes 2 minutes.',
                    'Mélangez et cuisez encore 1 minute.',
                    'Étalez sur plan fariné de fécule.',
                    'Découpez des cercles et garnissez de glace.',
                    'Refermez en chaussons et réfrigérez.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '8 pièces'
            },
            {
                name: 'Dorayaki (Pancakes Japonais)',
                ingredients: ['200g de farine', '3 œufs', '100g de sucre', '200ml de lait', '1 cuillère à café de levure', 'Pâte de haricots rouges (anko)', 'Miel'],
                instructions: [
                    'Battez œufs et sucre jusqu\'à blanchiment.',
                    'Ajoutez lait, farine et levure.',
                    'Laissez reposer la pâte 30 minutes.',
                    'Cuisez de petits pancakes épais dans une poêle.',
                    'Garnissez de pâte de haricots rouges.',
                    'Assemblez deux pancakes et badigeonnez de miel.'
                ],
                time: '1 heure',
                difficulty: 'Facile',
                servings: '10 dorayaki'
            },
            {
                name: 'Boba de Taro',
                ingredients: ['Perles de tapioca', '200g de taro', '400ml de lait de coco', '100g de sucre', 'Glace pilée', 'Crème fouettée'],
                instructions: [
                    'Cuisez les perles de tapioca selon les instructions.',
                    'Cuisez le taro à la vapeur puis écrasez-le.',
                    'Mélangez taro, lait de coco et sucre.',
                    'Placez perles et taro dans des verres.',
                    'Ajoutez glace pilée et crème fouettée.',
                    'Servez avec une grosse paille.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 verres'
            },
            {
                name: 'Mango Sticky Rice',
                ingredients: ['300g de riz gluant', '400ml de lait de coco', '100g de sucre', '1 pincée de sel', '2 mangues mûres', 'Graines de sésame'],
                instructions: [
                    'Faites tremper le riz gluant 4 heures.',
                    'Cuisez à la vapeur 25 minutes.',
                    'Chauffez lait de coco, sucre et sel.',
                    'Mélangez la moitié avec le riz cuit.',
                    'Coupez les mangues en tranches.',
                    'Servez riz, mangues et sauce au lait de coco.'
                ],
                time: '45 min + 4h trempage',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Matcha Ice Cream',
                ingredients: ['500ml de crème liquide', '200ml de lait', '150g de sucre', '6 jaunes d\'œufs', '3 cuillères à soupe de poudre de matcha', 'Chocolat blanc'],
                instructions: [
                    'Chauffez lait et crème.',
                    'Battez jaunes, sucre et matcha.',
                    'Réalisez une crème anglaise.',
                    'Laissez refroidir puis turbinez.',
                    'Servez en boules avec copeaux de chocolat blanc.',
                    'Décorez de poudre de matcha.'
                ],
                time: '45 min + turbinage',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Castella (Gâteau Japonais)',
                ingredients: ['6 œufs', '150g de sucre', '150g de farine', '50ml de miel', '50ml d\'eau chaude'],
                instructions: [
                    'Battez œufs et sucre 15 minutes jusqu\'à tripler de volume.',
                    'Diluez le miel dans l\'eau chaude.',
                    'Incorporez délicatement farine puis miel.',
                    'Versez dans un moule chemisé.',
                    'Enfournez 50 minutes à 160°C.',
                    'Laissez refroidir avant de démouler.'
                ],
                time: '1h30',
                difficulty: 'Difficile',
                servings: '10 personnes'
            },
            {
                name: 'Taiyaki (Gâteau Poisson)',
                ingredients: ['200g de farine', '2 œufs', '200ml de lait', '50g de sucre', 'Levure', 'Pâte de haricots rouges', 'Huile'],
                instructions: [
                    'Préparez une pâte à pancake avec farine, œufs, lait et sucre.',
                    'Ajoutez la levure et laissez reposer 30 minutes.',
                    'Chauffez le moule taiyaki et huilez-le.',
                    'Versez la pâte, ajoutez l\'anko au centre.',
                    'Refermez avec plus de pâte et cuisez 3 minutes de chaque côté.',
                    'Servez chaud pour apprécier le contraste textures.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '8 taiyaki'
            },
            {
                name: 'Kakigori (Glace Pilée Japonaise)',
                ingredients: ['Glace pilée', 'Sirop melon', 'Sirop fraise', 'Lait condensé', 'Haricots rouges sucrés', 'Mochi', 'Fruits frais'],
                instructions: [
                    'Piler finement la glace avec une machine kakigori.',
                    'Former un dôme de glace pilée dans un bol.',
                    'Arroser généreusement des sirops colorés.',
                    'Ajouter lait condensé et haricots rouges.',
                    'Décorer avec des morceaux de mochi.',
                    'Servir immédiatement avec des cuillères.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Imagawayaki (Pancakes Fourrés)',
                ingredients: ['250g de farine', '300ml de lait', '2 œufs', '30g de sucre', 'Levure', 'Anko', 'Crème pâtissière', 'Huile'],
                instructions: [
                    'Mélangez tous les ingrédients pour la pâte.',
                    'Laissez reposer 1 heure pour développer.',
                    'Chauffez les plaques rondes et huilez.',
                    'Versez la pâte, ajoutez la garniture au centre.',
                    'Recouvrez de pâte et cuisez jusqu\'à dorure.',
                    'Retournez délicatement et terminez la cuisson.'
                ],
                time: '1h30',
                difficulty: 'Intermédiaire',
                servings: '10 imagawayaki'
            },
            {
                name: 'Anmitsu',
                ingredients: ['Agar-agar', 'Sirop de sucre noir', 'Anko', 'Fruits en conserve', 'Gyuhi (mochi mou)', 'Glace vanille', 'Shiratama dango'],
                instructions: [
                    'Préparez la gelée d\'agar-agar et coupez en cubes.',
                    'Disposez dans des bols avec l\'anko.',
                    'Ajoutez fruits, gyuhi et shiratama dango.',
                    'Placez une boule de glace au centre.',
                    'Arrosez généreusement de sirop noir.',
                    'Servez immédiatement avec une cuillère.'
                ],
                time: '30 min + prise gelée',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Mizu Yokan',
                ingredients: ['200g d\'anko', '5g d\'agar-agar', '400ml d\'eau', '50g de sucre', 'Sel'],
                instructions: [
                    'Dissolvez l\'agar-agar dans l\'eau froide.',
                    'Portez à ébullition en remuant constamment.',
                    'Ajoutez l\'anko et le sucre, mélangez bien.',
                    'Filtrez pour éliminer les grumeaux.',
                    'Versez dans un moule et réfrigérez 3 heures.',
                    'Démoulez et découpez en tranches nettes.'
                ],
                time: '30 min + 3h prise',
                difficulty: 'Facile',
                servings: '8 personnes'
            },
            {
                name: 'Tang Yuan (Boulettes Sucrées)',
                ingredients: ['200g de farine de riz gluant', '150ml d\'eau chaude', 'Pâte de sésame noir', 'Pâte d\'arachide', 'Gingembre', 'Sucre roux'],
                instructions: [
                    'Mélangez la farine avec l\'eau chaude pour former une pâte.',
                    'Pétrissez jusqu\'à obtenir une pâte lisse.',
                    'Formez des boulettes et garnissez-les de pâte de sésame.',
                    'Refermez soigneusement en boulettes parfaites.',
                    'Cuisez dans l\'eau bouillante jusqu\'à remontée.',
                    'Servez dans un sirop gingembre-sucre roux.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Che Ba Mau (Dessert Vietnamien)',
                ingredients: ['Haricots mungo', 'Tapioca', 'Lait de coco', 'Sucre', 'Agar-agar', 'Colorants naturels', 'Glace pilée'],
                instructions: [
                    'Cuisez séparément les haricots et le tapioca.',
                    'Préparez plusieurs couches colorées avec l\'agar-agar.',
                    'Montez dans des verres en alternant les couches.',
                    'Ajoutez haricots, tapioca et glace pilée.',
                    'Terminez par du lait de coco sucré.',
                    'Servez frais avec une paille large.'
                ],
                time: '1h + prise',
                difficulty: 'Difficile',
                servings: '6 personnes'
            }
        ],
        'collation': [
            {
                name: 'Bubble Tea',
                ingredients: ['Thé noir', 'Lait', 'Sucre de canne', 'Perles de tapioca', 'Glace pilée', 'Sirop de fruit'],
                instructions: [
                    'Cuisez les perles de tapioca selon les instructions.',
                    'Préparez un thé fort et laissez refroidir.',
                    'Mélangez thé, lait et sucre.',
                    'Placez les perles au fond du verre.',
                    'Ajoutez glace pilée et mélange thé-lait.',
                    'Servez avec une grosse paille.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '2 verres'
            }
        ]
    },
    méditerranéenne: {
        'petit-déjeuner': [
            {
                name: 'Shakshuka',
                ingredients: ['6 tomates', '4 œufs', '1 poivron rouge', '1 oignon', '3 gousses d\'ail', 'Harissa', 'Cumin', 'Paprika', 'Feta', 'Coriandre', 'Huile d\'olive'],
                instructions: [
                    'Faites revenir oignon et poivron dans l\'huile d\'olive.',
                    'Ajoutez l\'ail, les épices et la harissa.',
                    'Incorporez les tomates concassées et mijotez 15 minutes.',
                    'Creusez des puits et cassez-y les œufs.',
                    'Couvrez et cuisez jusqu\'à ce que les blancs soient pris.',
                    'Parsemez de feta et coriandre, servez avec du pain.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'Moussaka Grecque',
                ingredients: ['3 aubergines', '500g d\'agneau haché', '3 tomates', '2 oignons', '3 gousses d\'ail', 'Béchamel', 'Feta', 'Cannelle', 'Origan', 'Huile d\'olive'],
                instructions: [
                    'Tranchez et faites griller les aubergines.',
                    'Préparez la sauce à la viande avec tomates et épices.',
                    'Montez en alternant aubergines et viande.',
                    'Nappez de béchamel et parsemez de feta.',
                    'Enfournez 45 minutes à 180°C.',
                    'Laissez reposer 10 minutes avant de servir.'
                ],
                time: '1h30',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Paella Valenciana',
                ingredients: ['400g de riz bomba', '500g de poulet', '300g de lapin', '200g de haricots verts', '200g de garrofón', 'Safran', 'Tomates', 'Poivron rouge', 'Romarin', 'Huile d\'olive'],
                instructions: [
                    'Faites dorer les viandes dans la paellera.',
                    'Ajoutez les légumes et faites revenir.',
                    'Incorporez le riz et le safran.',
                    'Versez le bouillon chaud et ne plus remuer.',
                    'Cuisez 20 minutes à feu vif puis doux.',
                    'Laissez reposer 5 minutes avant de servir.'
                ],
                time: '45 minutes',
                difficulty: 'Difficile',
                servings: '6 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Tajine d\'Agneau aux Abricots',
                ingredients: ['1kg d\'épaule d\'agneau', '200g d\'abricots secs', '2 oignons', '3 gousses d\'ail', 'Cannelle', 'Gingembre', 'Coriandre', 'Miel', 'Amandes grillées', 'Bouillon'],
                instructions: [
                    'Faites dorer les morceaux d\'agneau.',
                    'Ajoutez oignons, ail et épices.',
                    'Versez le bouillon et laissez mijoter 1h30.',
                    'Ajoutez les abricots et le miel.',
                    'Poursuivez la cuisson 30 minutes.',
                    'Parsemez d\'amandes et servez avec semoule.'
                ],
                time: '2h15',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Baklava',
                ingredients: ['1 paquet de pâte filo', '300g de noix mélangées', '200g de beurre', '200g de miel', '100g de sucre', 'Cannelle', 'Eau de fleur d\'oranger'],
                instructions: [
                    'Hachez grossièrement les noix avec cannelle.',
                    'Badigeonnez chaque feuille de filo de beurre fondu.',
                    'Alternez feuilles beurrées et mélange de noix.',
                    'Découpez en losanges avant cuisson.',
                    'Enfournez 30 minutes à 180°C.',
                    'Arrosez du sirop miel-eau de fleur d\'oranger.'
                ],
                time: '1 heure',
                difficulty: 'Difficile',
                servings: '12 parts'
            },
            {
                name: 'Galaktoboureko',
                ingredients: ['6 feuilles de pâte filo', '500ml de lait', '4 œufs', '100g de sucre', '60g de semoule fine', 'Vanille', 'Beurre fondu', 'Sirop au miel'],
                instructions: [
                    'Préparez une crème pâtissière épaisse avec lait, œufs et semoule.',
                    'Badigeonnez les feuilles de filo de beurre.',
                    'Disposez 3 feuilles dans un moule, ajoutez la crème.',
                    'Recouvrez des 3 autres feuilles beurrées.',
                    'Enfournez 45 minutes jusqu\'à dorure.',
                    'Arrosez du sirop froid sur le gâteau chaud.'
                ],
                time: '1h30',
                difficulty: 'Difficile',
                servings: '10 personnes'
            },
            {
                name: 'Loukoumades',
                ingredients: ['250g de farine', '1 sachet de levure', '250ml d\'eau tiède', '1 cuillère à café de sel', 'Huile de friture', 'Miel', 'Cannelle', 'Noix concassées'],
                instructions: [
                    'Mélangez farine, levure, eau et sel.',
                    'Laissez lever la pâte 1 heure.',
                    'Formez des boulettes avec une cuillère.',
                    'Faites frire dans l\'huile chaude jusqu\'à dorure.',
                    'Égouttez sur papier absorbant.',
                    'Arrosez de miel, cannelle et noix.'
                ],
                time: '1h30 + levée',
                difficulty: 'Intermédiaire',
                servings: '20 pièces'
            },
            {
                name: 'Halva de Semoule',
                ingredients: ['200g de semoule fine', '200g de sucre', '500ml d\'eau', '100ml d\'huile d\'olive', 'Cannelle', 'Amandes grillées', 'Raisins secs'],
                instructions: [
                    'Faites griller la semoule dans l\'huile jusqu\'à dorure.',
                    'Préparez un sirop avec eau et sucre.',
                    'Versez le sirop chaud sur la semoule en remuant.',
                    'Ajoutez cannelle, amandes et raisins.',
                    'Laissez gonfler 10 minutes hors du feu.',
                    'Servez tiède ou froid.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '8 personnes'
            },
            {
                name: 'Yogourt au Miel et Noix',
                ingredients: ['500g de yaourt grec', '100g de miel', '100g de noix', '50g de pistaches', 'Cannelle', 'Zeste d\'orange'],
                instructions: [
                    'Égouttez le yaourt grec 2 heures.',
                    'Concassez grossièrement noix et pistaches.',
                    'Disposez le yaourt dans des verrines.',
                    'Arrosez généreusement de miel.',
                    'Parsemez de fruits secs et cannelle.',
                    'Décorez de zeste d\'orange frais.'
                ],
                time: '15 min + égouttage',
                difficulty: 'Facile',
                servings: '6 personnes'
            }
        ],
        'collation': [
            {
                name: 'Houmous et Crudités',
                ingredients: ['400g de pois chiches', '3 gousses d\'ail', '60ml de tahini', '2 citrons', 'Cumin', 'Paprika', 'Huile d\'olive', 'Légumes crudités'],
                instructions: [
                    'Mixez les pois chiches égouttés.',
                    'Ajoutez ail, tahini et jus de citron.',
                    'Incorporez l\'huile d\'olive en filet.',
                    'Assaisonnez avec cumin et sel.',
                    'Servez avec un filet d\'huile et paprika.',
                    'Accompagnez de crudités et pain pita.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
            }
        ]
    },
    mexicaine: {
        'petit-déjeuner': [
            {
                name: 'Huevos Rancheros',
                ingredients: ['4 œufs', '4 tortillas de maïs', '2 tomates', '1 oignon', '2 piments jalapeños', 'Haricots noirs', 'Avocat', 'Coriandre', 'Fromage frais', 'Lime'],
                instructions: [
                    'Préparez une salsa avec tomates, oignon et piments.',
                    'Réchauffez les tortillas et les haricots.',
                    'Faites frire les œufs au plat.',
                    'Disposez tortilla, haricots et œuf dans l\'assiette.',
                    'Nappez de salsa chaude.',
                    'Garnissez d\'avocat, fromage et coriandre.'
                ],
                time: '25 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'Tacos al Pastor',
                ingredients: ['500g de porc', 'Ananas', 'Tortillas de maïs', 'Oignon', 'Coriandre', 'Achiote', 'Chipotle', 'Ail', 'Orange', 'Lime'],
                instructions: [
                    'Marinez le porc dans les épices et jus d\'orange.',
                    'Faites griller la viande avec l\'ananas.',
                    'Réchauffez les tortillas.',
                    'Émincez finement viande et ananas.',
                    'Garnissez les tacos de viande, ananas, oignon et coriandre.',
                    'Servez avec quartiers de lime.'
                ],
                time: '45 minutes + marinade',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'Chiles Rellenos',
                ingredients: ['8 piments poblanos', '300g de fromage Oaxaca', '4 œufs', 'Farine', 'Sauce tomate', 'Oignon', 'Ail', 'Cumin', 'Huile de friture'],
                instructions: [
                    'Grillez les piments et retirez la peau.',
                    'Farcissez-les de fromage par une petite incision.',
                    'Farinez puis trempez dans les œufs battus.',
                    'Faites frire jusqu\'à dorure.',
                    'Préparez une sauce tomate épicée.',
                    'Servez les piments nappés de sauce.'
                ],
                time: '1 heure',
                difficulty: 'Difficile',
                servings: '4 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Mole Poblano',
                ingredients: ['1 poulet', '6 piments différents', 'Chocolat noir', 'Graines de sésame', 'Amandes', 'Raisins secs', 'Tomates', 'Oignon', 'Ail', '20 épices différentes'],
                instructions: [
                    'Grillez et réhydratez tous les piments.',
                    'Toastez graines, noix et épices séparément.',
                    'Mixez tous les ingrédients avec un peu de bouillon.',
                    'Passez au tamis pour une texture lisse.',
                    'Mijotez la sauce 2 heures en remuant.',
                    'Servez le poulet nappé de mole avec riz.'
                ],
                time: '4 heures',
                difficulty: 'Très difficile',
                servings: '8 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Tres Leches',
                ingredients: ['Génoise', '400ml de lait concentré', '400ml de lait évaporé', '250ml de crème liquide', '250ml de crème fouettée', 'Cannelle', 'Vanille'],
                instructions: [
                    'Préparez une génoise et laissez refroidir.',
                    'Mélangez les trois laits avec la vanille.',
                    'Percez la génoise et imbibez du mélange.',
                    'Réfrigérez 4 heures minimum.',
                    'Nappez de crème fouettée.',
                    'Saupoudrez de cannelle avant de servir.'
                ],
                time: '1h + 4h réfrigération',
                difficulty: 'Facile',
                servings: '10 personnes'
            },
            {
                name: 'Churros con Chocolate',
                ingredients: ['250ml d\'eau', '50g de beurre', '150g de farine', '3 œufs', 'Huile de friture', 'Sucre', 'Cannelle', '200g de chocolat noir', '200ml de crème'],
                instructions: [
                    'Préparez une pâte à choux avec eau, beurre et farine.',
                    'Incorporez les œufs un par un.',
                    'Dressez en bâtonnets et faites frire.',
                    'Roulez dans le mélange sucre-cannelle.',
                    'Préparez une sauce chocolat avec crème et chocolat.',
                    'Servez les churros avec la sauce chaude.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Flan Mexicain',
                ingredients: ['200g de sucre', '6 œufs', '400ml de lait concentré', '300ml de lait évaporé', '200ml de lait entier', 'Vanille'],
                instructions: [
                    'Préparez un caramel avec 100g de sucre.',
                    'Versez dans le moule et laissez durcir.',
                    'Battez œufs, laits, sucre restant et vanille.',
                    'Versez sur le caramel et couvrez.',
                    'Cuisez au bain-marie 1 heure.',
                    'Réfrigérez 4 heures avant de démouler.'
                ],
                time: '1h30 + réfrigération',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Sopapillas',
                ingredients: ['300g de farine', '1 cuillère à café de levure', '1 cuillère à café de sel', '30g de saindoux', '200ml d\'eau tiède', 'Huile de friture', 'Miel', 'Cannelle'],
                instructions: [
                    'Mélangez farine, levure et sel.',
                    'Incorporez saindoux et eau pour former une pâte.',
                    'Laissez reposer 30 minutes.',
                    'Étalez et découpez en carrés.',
                    'Faites frire jusqu\'à gonflement et dorure.',
                    'Servez chaud avec miel et cannelle.'
                ],
                time: '1 heure',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Horchata Ice Cream',
                ingredients: ['500ml de lait', '200ml de crème', '150g de sucre', '6 jaunes d\'œufs', '100g de riz', 'Cannelle', 'Vanille', 'Amandes'],
                instructions: [
                    'Faites tremper riz et amandes 3 heures.',
                    'Mixez avec eau et passez au tamis.',
                    'Chauffez avec lait, crème et cannelle.',
                    'Réalisez une crème anglaise avec les jaunes.',
                    'Ajoutez l\'extrait de riz-amandes.',
                    'Turbinez et servez avec cannelle.'
                ],
                time: '1h + 3h trempage + turbinage',
                difficulty: 'Difficile',
                servings: '8 personnes'
            }
        ],
        'collation': [
            {
                name: 'Elote (Maïs Mexicain)',
                ingredients: ['4 épis de maïs', 'Mayonnaise', 'Fromage Cotija', 'Piment en poudre', 'Lime', 'Coriandre'],
                instructions: [
                    'Faites griller les épis de maïs.',
                    'Badigeonnez de mayonnaise.',
                    'Roulez dans le fromage râpé.',
                    'Saupoudrez de piment en poudre.',
                    'Arrosez de jus de lime.',
                    'Parsemez de coriandre ciselée.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ]
    },
    espagnole: {
        'petit-déjeuner': [
            {
                name: 'Torrijas',
                ingredients: ['8 tranches de pain rassis', '500ml de lait', '3 œufs', '100g de sucre', 'Cannelle', 'Zeste de citron', 'Huile d\'olive', 'Miel'],
                instructions: [
                    'Faites chauffer le lait avec cannelle et zeste de citron.',
                    'Trempez les tranches de pain dans le lait parfumé.',
                    'Battez les œufs et trempez-y les tranches.',
                    'Faites frire dans l\'huile chaude jusqu\'à dorure.',
                    'Égouttez et saupoudrez de sucre-cannelle.',
                    'Servez chaud avec un filet de miel.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Chocolate con Churros',
                ingredients: ['Churros', '200g de chocolat noir', '200ml de lait', '1 cuillère à soupe de fécule', 'Sucre', 'Cannelle'],
                instructions: [
                    'Préparez un chocolat chaud épais avec lait et chocolat.',
                    'Liez avec la fécule délayée dans un peu de lait.',
                    'Préparez les churros et saupoudrez de sucre cannelle.',
                    'Servez le chocolat bien chaud dans des tasses.',
                    'Trempez les churros dans le chocolat.',
                    'Dégustez immédiatement.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'Gazpacho Andalou',
                ingredients: ['1kg de tomates mûres', '1 poivron rouge', '1 concombre', '1 oignon', '2 gousses d\'ail', 'Mie de pain', 'Vinaigre de Xérès', 'Huile d\'olive extra vierge'],
                instructions: [
                    'Épluchez et épépinez les tomates.',
                    'Coupez tous les légumes grossièrement.',
                    'Mixez avec la mie de pain trempée.',
                    'Ajoutez vinaigre et huile d\'olive progressivement.',
                    'Passez au tamis fin pour une texture lisse.',
                    'Réfrigérez 4 heures et servez très frais avec des dés de légumes.'
                ],
                time: '30 min + 4h réfrigération',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Jamón Ibérico et Melon',
                ingredients: ['12 tranches de jamón ibérico', '1 melon cantaloupe bien mûr', 'Huile d\'olive extra vierge', 'Poivre noir'],
                instructions: [
                    'Coupez le melon en quartiers et retirez la peau.',
                    'Disposez harmonieusement jamón et melon sur l\'assiette.',
                    'Arrosez d\'un filet d\'huile d\'olive.',
                    'Ajoutez quelques tours de moulin à poivre.',
                    'Servez immédiatement à température ambiante.',
                    'Accompagnez de pain grillé à l\'ail.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Paella Mixta',
                ingredients: ['400g de riz bomba', '300g de poulet', '300g de fruits de mer', '200g de haricots verts', 'Safran', 'Tomates râpées', 'Poivron rouge', 'Ail', 'Huile d\'olive'],
                instructions: [
                    'Faites dorer le poulet dans la paellera avec l\'huile.',
                    'Ajoutez légumes et tomate, faites revenir.',
                    'Incorporez le riz et le safran infusé.',
                    'Versez le bouillon chaud et ne plus remuer.',
                    'Ajoutez les fruits de mer en fin de cuisson.',
                    'Laissez reposer 5 minutes avant de servir.'
                ],
                time: '45 minutes',
                difficulty: 'Difficile',
                servings: '6 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Crema Catalana',
                ingredients: ['500ml de lait', '6 jaunes d\'œufs', '100g de sucre', '2 cuillères à soupe de fécule', 'Zeste de citron', 'Cannelle', 'Sucre roux'],
                instructions: [
                    'Chauffez le lait avec zeste de citron et cannelle.',
                    'Battez jaunes et sucre jusqu\'à blanchiment.',
                    'Ajoutez la fécule puis le lait chaud.',
                    'Cuisez en remuant jusqu\'à épaississement.',
                    'Répartissez en ramequins et réfrigérez.',
                    'Saupoudrez de sucre roux et caramélisez au fer.'
                ],
                time: '45 min + réfrigération',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Flan de Huevo',
                ingredients: ['6 œufs', '400ml de lait concentré', '300ml de lait', '150g de sucre pour caramel', 'Vanille'],
                instructions: [
                    'Préparez un caramel avec le sucre.',
                    'Versez dans le moule et laissez durcir.',
                    'Battez œufs, laits et vanille.',
                    'Versez délicatement sur le caramel.',
                    'Cuisez au bain-marie 50 minutes.',
                    'Réfrigérez 6 heures avant de démouler.'
                ],
                time: '1h + 6h réfrigération',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            }
        ],
        'collation': [
            {
                name: 'Pan con Tomate',
                ingredients: ['Pain de campagne', 'Tomates mûres', 'Ail', 'Huile d\'olive extra vierge', 'Sel de mer', 'Jamón serrano (optionnel)'],
                instructions: [
                    'Grillez les tranches de pain.',
                    'Frottez avec une gousse d\'ail.',
                    'Frottez avec la tomate coupée en deux.',
                    'Arrosez généreusement d\'huile d\'olive.',
                    'Saupoudrez de sel de mer.',
                    'Ajoutez le jamón si désiré.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ]
    },
    allemande: {
        'petit-déjeuner': [
            {
                name: 'Apfelstrudel',
                ingredients: ['Pâte filo', '1kg de pommes', '100g de chapelure', '100g de beurre', '80g de sucre', 'Cannelle', 'Raisins secs', 'Amandes effilées'],
                instructions: [
                    'Épluchez et émincez finement les pommes.',
                    'Mélangez avec sucre, cannelle et raisins secs.',
                    'Étalez la pâte filo et badigeonnez de beurre.',
                    'Saupoudrez de chapelure dorée au beurre.',
                    'Étalez les pommes et roulez délicatement.',
                    'Enfournez 40 minutes à 180°C.'
                ],
                time: '1h15',
                difficulty: 'Difficile',
                servings: '8 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'Sauerbraten',
                ingredients: ['1.5kg de bœuf', 'Vinaigre de vin rouge', 'Oignons', 'Carottes', 'Céleri', 'Baies de genièvre', 'Clous de girofle', 'Laurier', 'Lebkuchen', 'Crème'],
                instructions: [
                    'Marinez la viande 3 jours dans vinaigre et épices.',
                    'Égouttez et faites dorer de tous côtés.',
                    'Ajoutez légumes et marinade filtrée.',
                    'Laissez mijoter 2 heures à feu doux.',
                    'Liez la sauce avec lebkuchen émietté.',
                    'Terminez avec un peu de crème et servez avec Rotkohl.'
                ],
                time: '2h30 + 3j marinade',
                difficulty: 'Difficile',
                servings: '6 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Schnitzel Viennois',
                ingredients: ['4 escalopes de veau', 'Farine', '2 œufs', 'Chapelure fine', 'Beurre clarifié', 'Citron', 'Persil', 'Pommes de terre'],
                instructions: [
                    'Aplatissez les escalopes très finement.',
                    'Passez dans farine, œufs battus puis chapelure.',
                    'Faites dorer dans le beurre clarifié chaud.',
                    'Retournez délicatement et cuisez l\'autre côté.',
                    'Égouttez sur papier absorbant.',
                    'Servez avec quartiers de citron et pommes de terre persillées.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Forêt Noire',
                ingredients: ['Génoise au chocolat', 'Chantilly', 'Cerises griottes', 'Kirsch', 'Chocolat noir', 'Copeaux de chocolat'],
                instructions: [
                    'Coupez la génoise en 3 disques.',
                    'Imbibez chaque disque de sirop au kirsch.',
                    'Montez en alternant génoise, chantilly et cerises.',
                    'Enrobez entièrement de chantilly.',
                    'Décorez de copeaux de chocolat et cerises.',
                    'Réfrigérez 4 heures avant de servir.'
                ],
                time: '1h + 4h réfrigération',
                difficulty: 'Difficile',
                servings: '10 personnes'
            },
            {
                name: 'Kaiserschmarrn',
                ingredients: ['4 œufs', '250ml de lait', '120g de farine', '30g de sucre', 'Vanille', 'Beurre', 'Raisins secs', 'Sucre glace', 'Compote de prunes'],
                instructions: [
                    'Séparez blancs et jaunes d\'œufs.',
                    'Mélangez jaunes, lait, farine et sucre.',
                    'Montez les blancs et incorporez délicatement.',
                    'Cuisez dans une poêle beurrée comme une crêpe épaisse.',
                    'Déchirez en morceaux avec deux fourchettes.',
                    'Servez chaud saupoudré de sucre glace avec compote.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'collation': [
            {
                name: 'Bretzel',
                ingredients: ['500g de farine', '10g de levure', '300ml d\'eau tiède', '10g de sel', 'Bicarbonate de soude', 'Gros sel'],
                instructions: [
                    'Préparez une pâte avec farine, levure, eau et sel.',
                    'Pétrissez 10 minutes et laissez lever 1 heure.',
                    'Façonnez en bretzels traditionnels.',
                    'Plongez 30 secondes dans eau bouillante bicarbonatée.',
                    'Saupoudrez de gros sel et enfournez 15 minutes.',
                    'Servez tièdes avec beurre ou moutarde.'
                ],
                time: '2h + levée',
                difficulty: 'Difficile',
                servings: '8 bretzels'
            }
        ]
    },
    britannique: {
        'petit-déjeuner': [
            {
                name: 'Scones aux Raisins',
                ingredients: ['300g de farine', '2 cuillères à café de levure', '75g de beurre', '50g de sucre', '150ml de lait', '1 œuf', 'Raisins secs', 'Confiture', 'Crème fouettée'],
                instructions: [
                    'Mélangez farine et levure, incorporez le beurre froid.',
                    'Ajoutez sucre et raisins secs.',
                    'Versez lait et œuf, mélangez rapidement.',
                    'Pétrissez légèrement et étalez sur 2 cm.',
                    'Découpez et enfournez 15 minutes à 200°C.',
                    'Servez chaud avec confiture et crème.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '8 scones'
            }
        ],
        'déjeuner': [
            {
                name: 'Fish and Chips',
                ingredients: ['4 filets de cabillaud', 'Pommes de terre', 'Farine', 'Bière blonde', 'Levure', 'Huile de friture', 'Petits pois', 'Vinaigre de malt'],
                instructions: [
                    'Préparez une pâte à beignet avec farine, bière et levure.',
                    'Coupez les pommes de terre en gros bâtonnets.',
                    'Faites frire les chips une première fois.',
                    'Trempez le poisson dans la pâte et faites frire.',
                    'Refaites frire les chips pour les dorer.',
                    'Servez avec petits pois et vinaigre de malt.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Beef Wellington',
                ingredients: ['1kg de filet de bœuf', 'Pâte feuilletée', 'Duxelles de champignons', 'Foie gras', 'Crêpes fines', 'Moutarde', 'Œuf pour dorure'],
                instructions: [
                    'Saisissez le filet de bœuf de tous côtés.',
                    'Badigeonnez de moutarde et laissez refroidir.',
                    'Étalez duxelles sur les crêpes.',
                    'Enrobez le filet de foie gras puis de crêpes.',
                    'Enveloppez dans la pâte feuilletée dorée.',
                    'Enfournez 25 minutes à 200°C pour rosé.'
                ],
                time: '1h30',
                difficulty: 'Très difficile',
                servings: '6 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Sticky Toffee Pudding',
                ingredients: ['200g de dattes', '250ml d\'eau bouillante', '75g de beurre', '150g de sucre roux', '2 œufs', '175g de farine', 'Levure', 'Sauce toffee', 'Crème anglaise'],
                instructions: [
                    'Hachez les dattes et versez l\'eau bouillante.',
                    'Crémerez beurre et sucre, ajoutez les œufs.',
                    'Incorporez farine, levure et mélange de dattes.',
                    'Enfournez 35 minutes dans des moules individuels.',
                    'Préparez une sauce toffee généreuse.',
                    'Servez chaud nappé de sauce et crème anglaise.'
                ],
                time: '1 heure',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Trifle aux Fruits',
                ingredients: ['Génoise', 'Crème anglaise', 'Chantilly', 'Fruits rouges', 'Sherry', 'Confiture', 'Amandes effilées'],
                instructions: [
                    'Coupez la génoise et imbibez de sherry.',
                    'Étalez confiture sur les biscuits.',
                    'Alternez dans un grand bol génoise et fruits.',
                    'Versez la crème anglaise refroidie.',
                    'Terminez par une généreuse couche de chantilly.',
                    'Décorez d\'amandes et réfrigérez 4 heures.'
                ],
                time: '30 min + 4h réfrigération',
                difficulty: 'Facile',
                servings: '8 personnes'
            }
        ],
        'collation': [
            {
                name: 'Afternoon Tea Sandwiches',
                ingredients: ['Pain de mie', 'Concombre', 'Saumon fumé', 'Cream cheese', 'Cresson', 'Beurre', 'Radis'],
                instructions: [
                    'Émincez finement le concombre et salez légèrement.',
                    'Beurrez les tranches de pain de mie.',
                    'Préparez sandwiches concombre-cresson.',
                    'Réalisez sandwiches saumon-cream cheese.',
                    'Retirez les croûtes et coupez en triangles.',
                    'Servez sur étages avec thé Earl Grey.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
            }
        ]
    },
    indienne: {
        'petit-déjeuner': [
            {
                name: 'Dosa aux Pommes de Terre',
                ingredients: ['Pâte à dosa', '4 pommes de terre', 'Graines de moutarde', 'Feuilles de curry', 'Gingembre', 'Piments verts', 'Curcuma', 'Coriandre', 'Chutney de coco'],
                instructions: [
                    'Préparez le masala de pommes de terre épicé.',
                    'Étalez finement la pâte à dosa dans une poêle.',
                    'Garnissez d\'une portion de masala.',
                    'Pliez la dosa en forme de tube.',
                    'Servez chaud avec chutney de coco.',
                    'Accompagnez de sambar (dal épicé).'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'Biryani d\'Agneau',
                ingredients: ['500g d\'agneau', '400g de riz basmati', 'Yaourt', 'Safran', 'Oignons frits', 'Garam masala', 'Cardamome', 'Cannelle', 'Clous de girofle', 'Coriandre', 'Menthe'],
                instructions: [
                    'Marinez l\'agneau dans yaourt et épices 2 heures.',
                    'Cuisez partiellement le riz épicé.',
                    'Faites cuire la viande marinée.',
                    'Montez en alternant riz et viande.',
                    'Parsemez de safran, oignons frits et herbes.',
                    'Cuisez au four 45 minutes à couvert.'
                ],
                time: '2h + marinade',
                difficulty: 'Difficile',
                servings: '6 personnes'
            },
            {
                name: 'Dal Makhani',
                ingredients: ['200g de lentilles noires', '50g de haricots rouges', 'Beurre', 'Crème', 'Tomates', 'Gingembre', 'Ail', 'Garam masala', 'Cumin', 'Coriandre'],
                instructions: [
                    'Faites tremper les légumineuses toute la nuit.',
                    'Cuisez-les 1 heure en autocuiseur.',
                    'Préparez une base d\'oignon-tomate épicée.',
                    'Ajoutez les légumineuses cuites.',
                    'Mijotez 1 heure en ajoutant beurre et crème.',
                    'Parsemez de coriandre et servez avec naan.'
                ],
                time: '2h + trempage',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Tandoori Chicken',
                ingredients: ['1 poulet entier', 'Yaourt grec', 'Pâte de tandoori', 'Garam masala', 'Cumin', 'Coriandre', 'Paprika', 'Gingembre', 'Ail', 'Citron'],
                instructions: [
                    'Incisez le poulet et marinez 4 heures minimum.',
                    'Mélangez yaourt et toutes les épices.',
                    'Badigeonnez le poulet de marinade.',
                    'Cuisez au four très chaud 45 minutes.',
                    'Arrosez régulièrement du jus de cuisson.',
                    'Servez avec riz basmati et chutney.'
                ],
                time: '1h + 4h marinade',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Gulab Jamun',
                ingredients: ['Lait en poudre', 'Farine', 'Ghee', 'Lait', 'Levure', 'Sucre', 'Eau de rose', 'Cardamome', 'Pistaches'],
                instructions: [
                    'Préparez une pâte avec lait en poudre et farine.',
                    'Formez des boulettes et faites-les frire dans le ghee.',
                    'Préparez un sirop avec sucre, eau de rose et cardamome.',
                    'Plongez les boulettes chaudes dans le sirop.',
                    'Laissez absorber 2 heures.',
                    'Garnissez de pistaches avant de servir.'
                ],
                time: '1h + 2h absorption',
                difficulty: 'Difficile',
                servings: '12 pièces'
            },
            {
                name: 'Rasmalai',
                ingredients: ['1L de lait entier', 'Jus de citron', '500ml de lait', '100g de sucre', 'Cardamome', 'Pistaches', 'Safran'],
                instructions: [
                    'Préparez du paneer en caillant le lait.',
                    'Formez des galettes et pochéz dans l\'eau sucrée.',
                    'Préparez un lait réduit parfumé au safran.',
                    'Plongez les galettes dans le lait parfumé.',
                    'Réfrigérez 4 heures.',
                    'Servez garni de pistaches hachées.'
                ],
                time: '2h + réfrigération',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Kheer (Riz au Lait)',
                ingredients: ['100g de riz basmati', '1L de lait entier', '100g de sucre', 'Cardamome', 'Amandes', 'Pistaches', 'Safran', 'Eau de rose'],
                instructions: [
                    'Faites cuire le riz dans le lait en remuant.',
                    'Laissez réduire jusqu\'à consistance crémeuse.',
                    'Ajoutez sucre, cardamome et safran.',
                    'Incorporez amandes et pistaches hachées.',
                    'Parfumez à l\'eau de rose.',
                    'Servez chaud ou froid.'
                ],
                time: '1h30',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Kulfi',
                ingredients: ['1L de lait entier', '150g de sucre', '50g d\'amandes', '50g de pistaches', 'Cardamome', 'Safran'],
                instructions: [
                    'Réduisez le lait de moitié en remuant constamment.',
                    'Ajoutez sucre, cardamome et safran.',
                    'Incorporez amandes et pistaches hachées.',
                    'Versez dans des moules à kulfi.',
                    'Congelez 6 heures minimum.',
                    'Démoulez et servez garni de pistaches.'
                ],
                time: '1h + 6h congélation',
                difficulty: 'Facile',
                servings: '8 kulfi'
            },
            {
                name: 'Gajar Halwa',
                ingredients: ['1kg de carottes', '500ml de lait', '100g de sucre', '50g de ghee', 'Cardamome', 'Amandes', 'Raisins secs'],
                instructions: [
                    'Râpez finement les carottes.',
                    'Cuisez avec le lait jusqu\'à évaporation.',
                    'Ajoutez sucre et ghee, continuez la cuisson.',
                    'Incorporez cardamome et fruits secs.',
                    'Cuisez jusqu\'à consistance épaisse.',
                    'Servez chaud garni d\'amandes.'
                ],
                time: '1h30',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            }
        ],
        'collation': [
            {
                name: 'Samosas aux Légumes',
                ingredients: ['Pâte à samosa', 'Pommes de terre', 'Petits pois', 'Oignon', 'Gingembre', 'Cumin', 'Coriandre', 'Garam masala', 'Piment vert', 'Huile de friture'],
                instructions: [
                    'Préparez la farce en faisant revenir les légumes épicés.',
                    'Découpez la pâte en triangles.',
                    'Garnissez et refermez en forme de triangle.',
                    'Scellez les bords avec un peu d\'eau.',
                    'Faites frire jusqu\'à dorure croustillante.',
                    'Servez chaud avec chutney de menthe.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '20 pièces'
            }
        ]
    },
    brésilienne: {
        'petit-déjeuner': [
            {
                name: 'Pão de Açúcar',
                ingredients: ['300g de farine de tapioca', '200ml de lait de coco', '3 œufs', '100g de fromage râpé', '50ml d\'huile', 'Sel'],
                instructions: [
                    'Mélangez la farine de tapioca avec le sel.',
                    'Chauffez lait de coco et huile.',
                    'Versez sur la farine et mélangez.',
                    'Ajoutez œufs et fromage, pétrissez.',
                    'Formez des boules et enfournez 20 minutes.',
                    'Servez chaud pour le petit-déjeuner.'
                ],
                time: '40 minutes',
                difficulty: 'Facile',
                servings: '12 pains'
            },
            {
                name: 'Açaí Bowl',
                ingredients: ['200g de pulpe d\'açaí', '1 banane', 'Granola', 'Noix de coco râpée', 'Fruits frais', 'Miel', 'Lait d\'amande'],
                instructions: [
                    'Mixez la pulpe d\'açaí avec banane et lait d\'amande.',
                    'Versez dans un bol et lissez la surface.',
                    'Disposez harmonieusement la granola.',
                    'Ajoutez fruits frais coupés et noix de coco.',
                    'Arrosez délicatement de miel.',
                    'Servez immédiatement bien frais.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '2 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'Feijoada Completa',
                ingredients: ['500g de haricots noirs', '300g de porc fumé', '200g de saucisse', '200g de bœuf séché', '2 oignons', '4 gousses d\'ail', 'Oranges', 'Riz blanc', 'Farofa'],
                instructions: [
                    'Faites tremper les haricots toute la nuit.',
                    'Cuisez les viandes séparément.',
                    'Faites revenir oignon et ail.',
                    'Ajoutez haricots et viandes, mijotez 2 heures.',
                    'Servez avec riz, farofa et quartiers d\'orange.',
                    'Accompagnez de caipirinha traditionnelle.'
                ],
                time: '3h + trempage',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Moqueca de Peixe',
                ingredients: ['1kg de poisson blanc', 'Lait de coco', 'Huile de dendê', 'Tomates', 'Poivrons', 'Oignons', 'Coriandre', 'Citron vert', 'Malagueta'],
                instructions: [
                    'Coupez le poisson en gros morceaux.',
                    'Marinez avec citron vert et sel 30 minutes.',
                    'Faites revenir légumes dans l\'huile de dendê.',
                    'Ajoutez lait de coco et laissez mijoter.',
                    'Incorporez le poisson et cuisez 10 minutes.',
                    'Parsemez de coriandre et servez avec riz.'
                ],
                time: '1h + marinade',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Picanha Grillée',
                ingredients: ['1.5kg de picanha', 'Gros sel', 'Ail', 'Farofa', 'Salade de tomates', 'Riz aux haricots', 'Chimichurri'],
                instructions: [
                    'Entaillez la graisse de la picanha en losanges.',
                    'Frottez avec ail écrasé et gros sel.',
                    'Grillez sur feu vif en commençant côté gras.',
                    'Cuisez selon goût (saignant recommandé).',
                    'Laissez reposer 5 minutes avant de trancher.',
                    'Servez avec accompagnements traditionnels.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Brigadeiro',
                ingredients: ['400g de lait concentré', '3 cuillères à soupe de cacao', '1 cuillère à soupe de beurre', 'Chocolat granulé'],
                instructions: [
                    'Mélangez lait concentré, cacao et beurre.',
                    'Cuisez à feu doux en remuant constamment.',
                    'Cuisez jusqu\'à ce que le mélange se décolle.',
                    'Laissez refroidir complètement.',
                    'Formez des boules avec les mains beurrées.',
                    'Roulez dans le chocolat granulé.'
                ],
                time: '30 min + refroidissement',
                difficulty: 'Facile',
                servings: '20 brigadeiros'
            },
            {
                name: 'Pudim de Leite',
                ingredients: ['400g de lait concentré', '3 œufs', '200ml de lait', '200g de sucre pour caramel', 'Vanille'],
                instructions: [
                    'Préparez un caramel et versez dans le moule.',
                    'Battez tous les ingrédients au mixeur.',
                    'Versez délicatement sur le caramel.',
                    'Cuisez au bain-marie 1 heure.',
                    'Laissez refroidir puis réfrigérez 4 heures.',
                    'Démoulez en passant un couteau sur les bords.'
                ],
                time: '1h30 + réfrigération',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Beijinho',
                ingredients: ['400g de lait concentré', '50g de noix de coco', '1 cuillère à soupe de beurre', 'Noix de coco râpée'],
                instructions: [
                    'Mélangez lait concentré, noix de coco et beurre.',
                    'Cuisez en remuant jusqu\'à décollement.',
                    'Laissez refroidir complètement.',
                    'Formez des boules avec les mains beurrées.',
                    'Roulez dans la noix de coco râpée.',
                    'Placez dans des petites caissettes.'
                ],
                time: '30 min + refroidissement',
                difficulty: 'Facile',
                servings: '20 beijinhos'
            }
        ],
        'collation': [
            {
                name: 'Coxinha',
                ingredients: ['Pâte de pomme de terre', 'Poulet effiloché', 'Cream cheese', 'Farine', 'Œuf', 'Chapelure', 'Huile de friture'],
                instructions: [
                    'Préparez une farce avec poulet et cream cheese.',
                    'Formez des coxinhas avec la pâte et la farce.',
                    'Passez dans farine, œuf battu puis chapelure.',
                    'Faites frire dans l\'huile chaude.',
                    'Égouttez sur papier absorbant.',
                    'Servez chaud avec sauce pimentée.'
                ],
                time: '1 heure',
                difficulty: 'Difficile',
                servings: '15 coxinhas'
            }
        ]
    },
    libanaise: {
        'petit-déjeuner': [
            {
                name: 'Manakish au Zaatar',
                ingredients: ['Pâte à pain', 'Zaatar', 'Huile d\'olive', 'Tomates', 'Concombre', 'Olives', 'Fromage blanc'],
                instructions: [
                    'Étalez la pâte en cercles fins.',
                    'Mélangez zaatar et huile d\'olive.',
                    'Étalez le mélange sur les pâtes.',
                    'Enfournez 8 minutes à 220°C.',
                    'Servez chaud avec légumes frais.',
                    'Accompagnez de thé à la menthe.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '6 manakish'
            }
        ],
        'déjeuner': [
            {
                name: 'Mezze Libanais',
                ingredients: ['Houmous', 'Baba ganoush', 'Taboulé', 'Falafel', 'Fattoush', 'Pain pita', 'Olives', 'Labneh'],
                instructions: [
                    'Préparez houmous avec pois chiches et tahini.',
                    'Réalisez baba ganoush avec aubergines grillées.',
                    'Confectionnez taboulé avec persil et boulgour.',
                    'Formez et faites frire les falafels.',
                    'Assemblez fattoush avec pain grillé.',
                    'Disposez harmonieusement tous les mezze.'
                ],
                time: '2 heures',
                difficulty: 'Difficile',
                servings: '8 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Kibbeh Nayyeh',
                ingredients: ['500g d\'agneau cru très frais', '200g de boulgour fin', 'Oignons', 'Menthe', 'Cannelle', 'Piment', 'Huile d\'olive', 'Pignons'],
                instructions: [
                    'Faites tremper le boulgour 30 minutes.',
                    'Hachez finement la viande d\'agneau.',
                    'Mélangez viande, boulgour essoré et épices.',
                    'Pétrissez jusqu\'à obtenir une pâte lisse.',
                    'Dressez en forme de plateau.',
                    'Arrosez d\'huile et parsemez de pignons.'
                ],
                time: '45 minutes',
                difficulty: 'Difficile',
                servings: '6 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Muhallabia',
                ingredients: ['1L de lait', '100g de sucre', '60g de fécule de maïs', 'Eau de fleur d\'oranger', 'Pistaches concassées', 'Cannelle'],
                instructions: [
                    'Délayez la fécule dans un peu de lait froid.',
                    'Chauffez le reste du lait avec le sucre.',
                    'Ajoutez la fécule délayée en remuant.',
                    'Cuisez jusqu\'à épaississement.',
                    'Parfumez à l\'eau de fleur d\'oranger.',
                    'Répartissez en verrines et décorez de pistaches.'
                ],
                time: '30 min + réfrigération',
                difficulty: 'Facile',
                servings: '8 personnes'
            },
            {
                name: 'Knefeh',
                ingredients: ['Pâte kadaif', 'Fromage akkawi', 'Sirop de sucre', 'Eau de fleur d\'oranger', 'Colorant orange', 'Pistaches'],
                instructions: [
                    'Effilochez la pâte kadaif finement.',
                    'Mélangez avec beurre fondu.',
                    'Étalez la moitié dans un plat beurré.',
                    'Ajoutez le fromage akkawi dessalé.',
                    'Recouvrez du reste de pâte.',
                    'Enfournez 25 minutes et arrosez de sirop.'
                ],
                time: '45 minutes',
                difficulty: 'Difficile',
                servings: '10 personnes'
            }
        ],
        'collation': [
            {
                name: 'Labneh aux Herbes',
                ingredients: ['Yaourt grec épais', 'Herbes fraîches', 'Ail', 'Huile d\'olive', 'Pain pita', 'Sel'],
                instructions: [
                    'Égouttez le yaourt toute la nuit.',
                    'Mélangez avec herbes hachées et ail.',
                    'Salez légèrement.',
                    'Formez des boules et disposez sur assiette.',
                    'Arrosez d\'huile d\'olive.',
                    'Servez avec pain pita grillé.'
                ],
                time: '15 min + égouttage',
                difficulty: 'Facile',
                servings: '6 personnes'
            }
        ]
    }
};
