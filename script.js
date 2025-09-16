// Recipe database organized by cuisine type and meal type
const recipeDatabase = {
    française: {
        'petit-déjeuner': [
            {
                name: 'L\'Éveil Doré des Matins Enchantés',
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
                name: 'La Symphonie Croustillante du Petit Matin',
                ingredients: ['200g de flocons d\'avoine', '300ml de lait d\'amande', '2 cuillères à soupe de miel', '100g de noix mélangées', '1 pomme', '1 cuillère à café de cannelle', 'Graines de chia'],
                instructions: [
                    'Faites chauffer le lait d\'amande avec le miel et la cannelle.',
                    'Versez sur les flocons d\'avoine et laissez reposer 5 minutes.',
                    'Coupez la pomme en petits dés.',
                    'Mélangez les noix concassées et les graines de chia.',
                    'Servez dans des bols avec les pommes et les noix.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '3 personnes'
            },
            {
                name: 'Les Nuages Moelleux de Normandie',
                ingredients: ['6 œufs', '100g de farine', '250ml de lait', '50g de beurre', '2 cuillères à soupe de sucre', 'Confiture de pommes', 'Calvados'],
                instructions: [
                    'Séparez les blancs des jaunes d\'œufs.',
                    'Mélangez jaunes, farine, lait et sucre.',
                    'Montez les blancs en neige ferme.',
                    'Incorporez délicatement les blancs à la pâte.',
                    'Cuisez en petites crêpes épaisses dans le beurre.',
                    'Servez avec la confiture et une pointe de calvados.'
                ],
                time: '25 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'Le Roi Rouge des Vignobles Bourguignons',
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
                name: 'L\'Arc-en-Ciel Provençal du Soleil',
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
                name: 'La Tempête Veloutée des Océans Bretons',
                ingredients: ['1kg de moules', '500g de poissons blancs', '300ml de crème fraîche', '2 échalotes', '200ml de vin blanc', '1 bouquet de persil', 'Beurre', 'Pommes de terre'],
                instructions: [
                    'Nettoyez soigneusement les moules.',
                    'Faites revenir les échalotes dans le beurre.',
                    'Ajoutez les moules et le vin blanc, couvrez 5 minutes.',
                    'Retirez les moules et filtrez le jus de cuisson.',
                    'Faites pocher les poissons dans ce jus avec la crème.',
                    'Servez avec pommes de terre vapeur et persil haché.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '5 personnes'
            },
            {
                name: 'Le Bouquet Secret du Jardin Enchanté',
                ingredients: ['500g de champignons variés', '300g de quinoa', '200g de chèvre frais', '100g de noix', '2 courgettes', 'Huile de truffe', 'Thym', 'Miel'],
                instructions: [
                    'Cuisez le quinoa selon les instructions du paquet.',
                    'Faites sauter les champignons avec le thym.',
                    'Coupez les courgettes en rubans avec un économe.',
                    'Mélangez quinoa, champignons et courgettes.',
                    'Ajoutez le chèvre émietté et les noix concassées.',
                    'Assaisonnez avec huile de truffe et une pointe de miel.'
                ],
                time: '35 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'dîner': [
            {
                name: 'L\'Étoile Dorée de Marseille',
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
                name: 'Le Mystère Fondant des Châteaux de Loire',
                ingredients: ['1kg de bœuf bourguignon', '500ml de vin rouge', '300g de champignons', '200g de lardons', '1 oignon', 'Bouquet garni', 'Pommes de terre', 'Beurre'],
                instructions: [
                    'Coupez la viande en gros cubes et faites-la dorer.',
                    'Ajoutez l\'oignon émincé et les lardons.',
                    'Versez le vin rouge et ajoutez le bouquet garni.',
                    'Laissez mijoter 2 heures à feu doux.',
                    'Ajoutez les champignons sautés 30 minutes avant la fin.',
                    'Servez avec des pommes de terre sautées.'
                ],
                time: '2h30',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'La Mélodie Cristalline des Jardins Secrets',
                ingredients: ['1 canard entier', '500g de cerises', '200ml de porto', '2 échalotes', 'Miel', 'Thym', 'Beurre', 'Vinaigre balsamique'],
                instructions: [
                    'Découpez le canard en morceaux et faites-le rôtir.',
                    'Dans une poêle, faites caraméliser les cerises avec le miel.',
                    'Ajoutez les échalotes et déglacez au porto.',
                    'Incorporez un trait de vinaigre balsamique.',
                    'Nappez le canard de cette sauce aux cerises.',
                    'Servez avec des légumes de saison.'
                ],
                time: '1h45',
                difficulty: 'Difficile',
                servings: '5 personnes'
            }
        ],
        'dessert': [
            {
                name: 'La Spirale Renversée des Vergers Normands',
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
                name: 'Les Bulles Magiques du Paradis Chocolaté',
                ingredients: ['200g de chocolat noir', '6 œufs', '100g de sucre', '300ml de crème liquide', 'Vanille', 'Fruits rouges'],
                instructions: [
                    'Faites fondre le chocolat au bain-marie.',
                    'Séparez les blancs des jaunes d\'œufs.',
                    'Mélangez jaunes, sucre et chocolat fondu.',
                    'Montez la crème en chantilly avec la vanille.',
                    'Incorporez délicatement crème et blancs en neige.',
                    'Réfrigérez 4 heures et servez avec fruits rouges.'
                ],
                time: '4h30',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'L\'Archipel Doré des Mille et Une Saveurs',
                ingredients: ['300g de pâte feuilletée', '500g de pommes', '200g d\'amandes effilées', '100g de miel', 'Cannelle', 'Beurre'],
                instructions: [
                    'Étalez la pâte feuilletée en rectangles.',
                    'Coupez les pommes en fines lamelles.',
                    'Disposez les pommes en rosace sur la pâte.',
                    'Parsemez d\'amandes effilées et de cannelle.',
                    'Enfournez 20 minutes à 180°C.',
                    'Badigeonnez de miel tiède avant de servir.'
                ],
                time: '35 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
            }
        ],
        'collation': [
            {
                name: 'Les Étoiles Croquantes de Minuit',
                ingredients: ['200g de fromage blanc', '100g de muesli', '2 cuillères à soupe de miel', '1 pomme', 'Cannelle', 'Noix'],
                instructions: [
                    'Mélangez le fromage blanc avec le miel.',
                    'Coupez la pomme en petits dés.',
                    'Ajoutez le muesli et les dés de pomme.',
                    'Saupoudrez de cannelle.',
                    'Décorez avec quelques noix concassées.',
                    'Servez immédiatement.'
                ],
                time: '5 minutes',
                difficulty: 'Facile',
                servings: '2 personnes'
            },
            {
                name: 'La Symphonie Craquante des Jardins Enchantés',
                ingredients: ['4 tranches de pain complet', '2 avocats', '200g de saumon fumé', 'Citron', 'Aneth', 'Graines de sésame'],
                instructions: [
                    'Toastez légèrement les tranches de pain.',
                    'Écrasez les avocats avec un peu de citron.',
                    'Étalez l\'avocat sur les toasts.',
                    'Disposez le saumon fumé par-dessus.',
                    'Parsemez d\'aneth et de graines de sésame.',
                    'Servez aussitôt.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ]
    },
    italienne: {
        'petit-déjeuner': [
            {
                name: 'L\'Aurora Sicilienne aux Agrumes Magiques',
                ingredients: ['4 tranches de panettone', 'Mascarpone', '2 oranges sanguines', '1 citron', 'Miel de châtaignier', 'Pistaches'],
                instructions: [
                    'Toastez légèrement les tranches de panettone.',
                    'Mélangez le mascarpone avec le zeste de citron.',
                    'Pelez et coupez les oranges en rondelles.',
                    'Tartinez le panettone de mascarpone.',
                    'Disposez les oranges et arrosez de miel.',
                    'Parsemez de pistaches concassées.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'La Danse Dorée des Cappuccini Divins',
                ingredients: ['4 tasses de café fort', 'Lait entier', 'Cacao en poudre', 'Sucre roux', 'Biscotti aux amandes'],
                instructions: [
                    'Préparez un café expresso bien fort.',
                    'Faites chauffer le lait et montez-le en mousse.',
                    'Versez le café dans les tasses.',
                    'Ajoutez la mousse de lait délicatement.',
                    'Saupoudrez de cacao et de sucre roux.',
                    'Servez avec les biscotti.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'L\'Écrin Doré des Champignons Nobles',
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
                name: 'La Symphonie Verte du Jardin de Gênes',
                ingredients: ['400g de penne', '200g de basilic frais', '100g de pignons', '150g de parmesan', '4 gousses d\'ail', 'Huile d\'olive extra vierge'],
                instructions: [
                    'Faites cuire les pâtes al dente.',
                    'Mixez basilic, pignons, ail et parmesan avec l\'huile.',
                    'Ajustez la consistance avec l\'eau de cuisson des pâtes.',
                    'Mélangez les pâtes chaudes avec le pesto.',
                    'Servez immédiatement avec du parmesan râpé.',
                    'Décorez avec quelques feuilles de basilic.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Le Trésor Ensoleillé des Côtes Amalfitaines',
                ingredients: ['500g de spaghetti', '1kg de palourdes', '4 gousses d\'ail', 'Persil plat', '200ml de vin blanc', 'Huile d\'olive', 'Piment rouge'],
                instructions: [
                    'Faites purger les palourdes dans l\'eau salée.',
                    'Faites revenir l\'ail et le piment dans l\'huile.',
                    'Ajoutez les palourdes et le vin blanc.',
                    'Couvrez jusqu\'à ouverture des coquillages.',
                    'Ajoutez les spaghetti al dente et mélangez.',
                    'Parsemez de persil haché et servez.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '5 personnes'
            }
        ],
        'dîner': [
            {
                name: 'L\'Héritier Doré de Milan',
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
                name: 'La Légende Pourpre des Collines Toscanes',
                ingredients: ['500g de pappardelle', '400g de sanglier haché', '200ml de Chianti', '2 carottes', '1 oignon', '2 branches de céleri', 'Tomates pelées', 'Romarin'],
                instructions: [
                    'Faites revenir le mirepoix de légumes.',
                    'Ajoutez la viande de sanglier et faites dorer.',
                    'Versez le vin rouge et laissez réduire.',
                    'Ajoutez les tomates et le romarin.',
                    'Laissez mijoter 1h30 à feu doux.',
                    'Servez sur les pappardelle avec du pecorino.'
                ],
                time: '2 heures',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Les Nuages d\'Amour de Vérone',
                ingredients: ['6 jaunes d\'œufs', '100g de sucre', '500ml de marsala', '300ml de crème', 'Biscuits savoiardi', 'Cacao'],
                instructions: [
                    'Fouettez les jaunes avec le sucre au bain-marie.',
                    'Ajoutez le marsala et fouettez jusqu\'à épaississement.',
                    'Laissez refroidir en fouettant.',
                    'Montez la crème en chantilly.',
                    'Incorporez délicatement à la préparation.',
                    'Servez dans des coupes avec les biscuits.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'L\'Île Mystérieuse aux Saveurs Siciliennes',
                ingredients: ['Ricotta fraîche', 'Pâte d\'amande', 'Fruits confits', 'Chocolat noir', 'Pistaches', 'Eau de fleur d\'oranger'],
                instructions: [
                    'Mélangez la ricotta avec l\'eau de fleur d\'oranger.',
                    'Ajoutez les fruits confits hachés finement.',
                    'Étalez la pâte d\'amande en disque.',
                    'Déposez la garniture au centre.',
                    'Refermez en forme de dôme.',
                    'Décorez de chocolat râpé et pistaches.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            }
        ],
        'collation': [
            {
                name: 'Les Baisers Dorés de la Nonna',
                ingredients: ['Pain ciabatta', 'Tomates cerises', 'Mozzarella di bufala', 'Basilic', 'Huile d\'olive', 'Vinaigre balsamique'],
                instructions: [
                    'Coupez le pain en tranches épaisses.',
                    'Toastez légèrement au grille-pain.',
                    'Frottez avec une gousse d\'ail.',
                    'Disposez tomates et mozzarella.',
                    'Ajoutez le basilic et un filet d\'huile.',
                    'Terminez par quelques gouttes de balsamique.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ]
    },
    asiatique: {
        'petit-déjeuner': [
            {
                name: 'L\'Éveil du Dragon Doré',
                ingredients: ['Riz gluant', 'Lait de coco', 'Mangue fraîche', 'Graines de sésame', 'Sucre de palme', 'Feuilles de bananier'],
                instructions: [
                    'Faites cuire le riz gluant à la vapeur.',
                    'Mélangez avec le lait de coco et le sucre de palme.',
                    'Coupez la mangue en tranches fines.',
                    'Servez le riz tiède avec la mangue.',
                    'Parsemez de graines de sésame grillées.',
                    'Présentez sur feuilles de bananier.'
                ],
                time: '45 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'La Symphonie Vaporeuse du Matin',
                ingredients: ['Farine de riz', 'Crevettes', 'Porc haché', 'Champignons shiitake', 'Ciboules', 'Sauce soja', 'Huile de sésame'],
                instructions: [
                    'Préparez une pâte avec la farine de riz.',
                    'Faites sauter crevettes et porc avec les champignons.',
                    'Étalez la pâte en crêpes fines.',
                    'Garnissez avec la farce et roulez.',
                    'Cuisez à la vapeur 15 minutes.',
                    'Servez avec sauce soja et huile de sésame.'
                ],
                time: '40 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'La Danse Enflammée des Nouilles de Jade',
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
                name: 'Le Trésor Fumant de l\'Empereur',
                ingredients: ['500g de canard laqué', 'Riz jasmin', 'Pak-choï', 'Champignons noirs', 'Gingembre', 'Sauce hoisin', 'Vin de riz'],
                instructions: [
                    'Découpez le canard en fines tranches.',
                    'Faites sauter le pak-choï avec les champignons.',
                    'Préparez une sauce avec hoisin et vin de riz.',
                    'Servez le canard sur le riz jasmin.',
                    'Accompagnez des légumes sautés.',
                    'Nappez de sauce parfumée au gingembre.'
                ],
                time: '35 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'L\'Harmonie Cristalline des Océans d\'Orient',
                ingredients: ['300g de poisson blanc', 'Algues wakame', 'Tofu soyeux', 'Miso blanc', 'Ciboules', 'Champignons enoki'],
                instructions: [
                    'Coupez le poisson en cubes délicats.',
                    'Réhydratez les algues wakame.',
                    'Diluez le miso dans un bouillon chaud.',
                    'Ajoutez le tofu coupé en dés.',
                    'Incorporez poisson et algues 2 minutes.',
                    'Garnissez de ciboules et champignons.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Le Phénix Rouge des Montagnes Sacrées',
                ingredients: ['600g de bœuf émincé', 'Piments séchés', 'Poivre du Sichuan', 'Ail', 'Gingembre', 'Sauce soja noire', 'Huile pimentée'],
                instructions: [
                    'Faites mariner le bœuf dans la sauce soja.',
                    'Faites griller les piments et le poivre du Sichuan.',
                    'Saisissez la viande à feu très vif.',
                    'Ajoutez ail, gingembre et épices grillées.',
                    'Terminez avec l\'huile pimentée.',
                    'Servez sur riz vapeur avec légumes.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'La Légende Dorée du Lac de Lotus',
                ingredients: ['1 poisson entier', 'Gingembre', 'Ciboules', 'Sauce soja claire', 'Huile de sésame', 'Vin de riz', 'Coriandre'],
                instructions: [
                    'Nettoyez et incisez le poisson.',
                    'Farcissez de lamelles de gingembre.',
                    'Cuisez à la vapeur 15-20 minutes.',
                    'Préparez une sauce avec soja et vin de riz.',
                    'Versez la sauce chaude sur le poisson.',
                    'Garnissez de ciboules et coriandre.'
                ],
                time: '35 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Les Perles de Lune Enchantées',
                ingredients: ['Tapioca', 'Lait de coco', 'Sucre de palme', 'Fruits tropicaux', 'Menthe fraîche', 'Glace pilée'],
                instructions: [
                    'Faites cuire le tapioca jusqu\'à transparence.',
                    'Mélangez avec lait de coco et sucre de palme.',
                    'Laissez refroidir complètement.',
                    'Coupez les fruits en petits dés.',
                    'Servez sur glace pilée.',
                    'Décorez avec la menthe fraîche.'
                ],
                time: '1 heure',
                difficulty: 'Facile',
                servings: '6 personnes'
            }
        ],
        'collation': [
            {
                name: 'Les Petites Lunes Croustillantes',
                ingredients: ['Pâte à raviolis', 'Crevettes', 'Porc haché', 'Champignons', 'Gingembre', 'Sauce soja'],
                instructions: [
                    'Mélangez crevettes hachées et porc.',
                    'Ajoutez champignons et gingembre émincés.',
                    'Garnissez les pâtes à raviolis.',
                    'Pliez en forme de croissant.',
                    'Faites cuire à la vapeur 8 minutes.',
                    'Servez avec sauce soja épicée.'
                ],
                time: '25 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            }
        ]
    },
    méditerranéenne: {
        'petit-déjeuner': [
            {
                name: 'L\'Aurore Dorée des Îles Grecques',
                ingredients: ['Yaourt grec épais', 'Miel de thym', 'Noix', 'Figues fraîches', 'Granola maison', 'Menthe'],
                instructions: [
                    'Versez le yaourt grec dans des bols.',
                    'Arrosez généreusement de miel de thym.',
                    'Coupez les figues en quartiers.',
                    'Concassez grossièrement les noix.',
                    'Disposez figues, noix et granola sur le yaourt.',
                    'Décorez avec quelques feuilles de menthe.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'La Mosaïque Ensoleillée des Cyclades',
                ingredients: ['Quinoa', 'Tomates cerises', 'Concombre', 'Feta', 'Olives kalamata', 'Huile d\'olive', 'Citron', 'Origan'],
                instructions: [
                    'Cuisez le quinoa et laissez refroidir.',
                    'Coupez tomates et concombre en dés.',
                    'Émettez la feta en gros morceaux.',
                    'Mélangez tous les ingrédients.',
                    'Assaisonnez avec huile, citron et origan.',
                    'Laissez mariner 20 minutes avant de servir.'
                ],
                time: '35 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Le Jardin Secret de Santorin',
                ingredients: ['Aubergines', 'Tomates', 'Courgettes', 'Poivrons', 'Oignons rouges', 'Ail', 'Herbes de Provence', 'Huile d\'olive'],
                instructions: [
                    'Coupez tous les légumes en gros dés.',
                    'Faites revenir l\'oignon et l\'ail.',
                    'Ajoutez les aubergines, puis les autres légumes.',
                    'Assaisonnez avec les herbes de Provence.',
                    'Laissez mijoter 45 minutes à feu doux.',
                    'Servez tiède avec du pain grillé.'
                ],
                time: '1 heure',
                difficulty: 'Facile',
                servings: '6 personnes'
            }
        ],
        'dîner': [
            {
                name: 'L\'Étoile Brillante de la Mer Égée',
                ingredients: ['Daurade royale', 'Citrons', 'Huile d\'olive', 'Origan', 'Tomates', 'Olives', 'Câpres'],
                instructions: [
                    'Nettoyez et écaillez la daurade.',
                    'Farcissez de tranches de citron et origan.',
                    'Disposez dans un plat avec tomates et olives.',
                    'Arrosez d\'huile d\'olive et de jus de citron.',
                    'Enfournez 25 minutes à 200°C.',
                    'Parsemez de câpres avant de servir.'
                ],
                time: '40 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Les Délices Parfumés d\'Aphrodite',
                ingredients: ['Pâte filo', 'Noix', 'Pistaches', 'Miel', 'Beurre', 'Cannelle', 'Eau de rose'],
                instructions: [
                    'Concassez noix et pistaches avec la cannelle.',
                    'Badigeonnez les feuilles de filo de beurre fondu.',
                    'Alternez couches de pâte et de fruits secs.',
                    'Découpez en losanges avant cuisson.',
                    'Enfournez 30 minutes jusqu\'à doré.',
                    'Arrosez de miel parfumé à l\'eau de rose.'
                ],
                time: '50 minutes',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            }
        ],
        'collation': [
            {
                name: 'Les Bouchées Dorées de Zeus',
                ingredients: ['Houmous', 'Pain pita', 'Tomates cerises', 'Concombre', 'Feta', 'Huile d\'olive'],
                instructions: [
                    'Coupez le pain pita en triangles.',
                    'Toastez légèrement au four.',
                    'Étalez le houmous sur les triangles.',
                    'Garnissez de dés de tomate et concombre.',
                    'Ajoutez quelques miettes de feta.',
                    'Arrosez d\'un filet d\'huile d\'olive.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ]
    },
    mexicaine: {
        'petit-déjeuner': [
            {
                name: 'L\'Éveil Épicé du Soleil Aztèque',
                ingredients: ['Tortillas de maïs', '4 œufs', 'Haricots noirs', 'Avocat', 'Tomates', 'Piment jalapeño', 'Coriandre', 'Citron vert'],
                instructions: [
                    'Réchauffez les tortillas à la poêle.',
                    'Faites des œufs brouillés aux épices.',
                    'Réchauffez les haricots noirs.',
                    'Écrasez l\'avocat avec citron et coriandre.',
                    'Assemblez sur les tortillas chaudes.',
                    'Garnissez de tomates et piment émincé.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'La Tempête Colorée du Yucatan',
                ingredients: ['Riz', 'Haricots rouges', 'Poivrons', 'Maïs', 'Tomates', 'Oignons', 'Cumin', 'Paprika', 'Coriandre'],
                instructions: [
                    'Cuisez le riz avec du cumin.',
                    'Faites sauter les légumes avec les épices.',
                    'Ajoutez les haricots et le maïs.',
                    'Incorporez les tomates coupées en dés.',
                    'Laissez mijoter 20 minutes.',
                    'Servez avec coriandre fraîche hachée.'
                ],
                time: '40 minutes',
                difficulty: 'Facile',
                servings: '5 personnes'
            },
            {
                name: 'L\'Explosion Savoureuse de Frida',
                ingredients: ['Blanc de poulet', 'Chocolat noir', 'Piments poblano', 'Tomates', 'Oignons', 'Ail', 'Sésame', 'Épices mexicaines'],
                instructions: [
                    'Grillez et pelez les piments poblano.',
                    'Faites dorer le poulet coupé en morceaux.',
                    'Mixez tomates, oignons et piments.',
                    'Ajoutez chocolat râpé et épices.',
                    'Laissez mijoter la sauce 30 minutes.',
                    'Servez avec graines de sésame grillées.'
                ],
                time: '1 heure',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Le Festin Mystique des Mayas',
                ingredients: ['Porc effiloché', 'Achiote', 'Jus d\'orange', 'Citron vert', 'Oignons rouges', 'Feuilles de bananier', 'Habanero'],
                instructions: [
                    'Marinez le porc dans achiote et agrumes.',
                    'Enveloppez dans des feuilles de bananier.',
                    'Cuisez lentement au four 3 heures.',
                    'Effilochez la viande à la fourchette.',
                    'Servez avec oignons marinés au citron.',
                    'Accompagnez de sauce habanero.'
                ],
                time: '3h30',
                difficulty: 'Difficile',
                servings: '8 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Les Nuages de Cannelle de Montezuma',
                ingredients: ['Lait', 'Sucre', 'Cannelle', 'Vanille', 'Œufs', 'Caramel', 'Rhum'],
                instructions: [
                    'Infusez le lait avec cannelle et vanille.',
                    'Préparez un caramel dans des ramequins.',
                    'Battez œufs et sucre, ajoutez le lait tiède.',
                    'Versez sur le caramel.',
                    'Cuisez au bain-marie 45 minutes.',
                    'Démoulez froid et flambez au rhum.'
                ],
                time: '1h30',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            }
        ],
        'collation': [
            {
                name: 'Les Étoiles Croquantes d\'Acapulco',
                ingredients: ['Chips de tortilla', 'Avocat', 'Tomates', 'Oignons', 'Citron vert', 'Coriandre', 'Piment'],
                instructions: [
                    'Écrasez l\'avocat avec le citron vert.',
                    'Coupez tomates et oignons en petits dés.',
                    'Hachez finement la coriandre.',
                    'Mélangez tous les ingrédients.',
                    'Assaisonnez avec sel et piment.',
                    'Servez avec les chips de tortilla.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ]
    },
    indienne: {
        'petit-déjeuner': [
            {
                name: 'L\'Éveil Doré du Maharaja',
                ingredients: ['Semoule fine', 'Lait', 'Cardamome', 'Pistaches', 'Amandes', 'Sucre', 'Safran', 'Eau de rose'],
                instructions: [
                    'Faites griller la semoule à sec.',
                    'Infusez le lait avec cardamome et safran.',
                    'Cuisez la semoule dans le lait parfumé.',
                    'Ajoutez le sucre et l\'eau de rose.',
                    'Garnissez de fruits secs concassés.',
                    'Servez chaud dans des bols dorés.'
                ],
                time: '25 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ],
        'déjeuner': [
            {
                name: 'Le Jardin Enchanté de Kashmir',
                ingredients: ['Riz basmati', 'Légumes variés', 'Yaourt', 'Épices garam masala', 'Coriandre', 'Menthe', 'Ghee'],
                instructions: [
                    'Cuisez le riz avec des épices entières.',
                    'Faites sauter les légumes avec garam masala.',
                    'Mélangez yaourt et herbes fraîches.',
                    'Disposez en couches dans un plat.',
                    'Parsemez de ghee et d\'épices.',
                    'Laissez reposer 10 minutes avant de servir.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'La Symphonie Dorée des Mille Épices',
                ingredients: ['Lentilles corail', 'Lait de coco', 'Épices curry', 'Gingembre', 'Ail', 'Tomates', 'Coriandre'],
                instructions: [
                    'Cuisez les lentilles jusqu\'à tendreté.',
                    'Faites revenir ail et gingembre.',
                    'Ajoutez épices et tomates concassées.',
                    'Incorporez les lentilles et le lait de coco.',
                    'Laissez mijoter 20 minutes.',
                    'Garnissez de coriandre fraîche.'
                ],
                time: '35 minutes',
                difficulty: 'Facile',
                servings: '5 personnes'
            }
        ],
        'dîner': [
            {
                name: 'Le Trésor Royal du Rajasthan',
                ingredients: ['Agneau en cubes', 'Yaourt', 'Épices tandoori', 'Oignons', 'Tomates', 'Crème', 'Amandes', 'Cardamome'],
                instructions: [
                    'Marinez l\'agneau dans yaourt et épices.',
                    'Faites dorer la viande dans un tandoor virtuel.',
                    'Préparez une sauce avec oignons et tomates.',
                    'Ajoutez crème et poudre d\'amandes.',
                    'Incorporez la viande grillée.',
                    'Parfumez à la cardamome et servez.'
                ],
                time: '1h15',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            }
        ],
        'dessert': [
            {
                name: 'Les Perles de Nectar Céleste',
                ingredients: ['Lait entier', 'Sucre', 'Cardamome', 'Pistaches', 'Amandes', 'Safran', 'Eau de rose'],
                instructions: [
                    'Faites réduire le lait à feu doux.',
                    'Ajoutez sucre et cardamome pilée.',
                    'Incorporez safran et eau de rose.',
                    'Laissez refroidir complètement.',
                    'Garnissez de fruits secs hachés.',
                    'Servez dans des coupes en argent.'
                ],
                time: '2 heures',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            }
        ],
        'collation': [
            {
                name: 'Les Délices Croustillants de Bombay',
                ingredients: ['Pois chiches', 'Épices chat masala', 'Oignons', 'Tomates', 'Citron', 'Coriandre', 'Chutney'],
                instructions: [
                    'Réchauffez les pois chiches cuits.',
                    'Assaisonnez avec chat masala.',
                    'Ajoutez oignons et tomates hachés.',
                    'Arrosez de jus de citron frais.',
                    'Garnissez de coriandre.',
                    'Servez avec chutney épicé.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
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