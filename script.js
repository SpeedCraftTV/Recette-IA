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
                time: '1 heure',
                difficulty: 'Difficile',
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
            !ing.toLowerCase().includes('canard') && 
            !ing.toLowerCase().includes('agneau') && 
            !ing.toLowerCase().includes('veau') && 
            !ing.toLowerCase().includes('lapin') && 
            !ing.toLowerCase().includes('poisson') &&
            !ing.toLowerCase().includes('crevettes') &&
            !ing.toLowerCase().includes('lardons') &&
            !ing.toLowerCase().includes('jambon')
        );
        if (vegIngredients.length < recipe.ingredients.length) {
            vegIngredients.push('Tofu mariné', 'Légumes grillés', 'Protéines végétales');
        }
        
        // Also modify instructions to remove meat references
        const vegInstructions = recipe.instructions.map(instruction =>
            instruction.replace(/lardons/gi, 'légumes sautés')
                      .replace(/viande/gi, 'protéines végétales')
                      .replace(/poulet/gi, 'tofu')
                      .replace(/porc/gi, 'champignons')
                      .replace(/bœuf/gi, 'seitan')
        );
        
        return { ...recipe, ingredients: vegIngredients, instructions: vegInstructions };
    },
    'végétalien': (recipe) => {
        let veganIngredients = recipe.ingredients.filter(ing => 
            !ing.toLowerCase().includes('œuf') && 
            !ing.toLowerCase().includes('lait') && 
            !ing.toLowerCase().includes('beurre') && 
            !ing.toLowerCase().includes('fromage') &&
            !ing.toLowerCase().includes('crème') &&
            !ing.toLowerCase().includes('mascarpone') &&
            !ing.toLowerCase().includes('parmesan') &&
            !ing.toLowerCase().includes('mozzarella') &&
            !ing.toLowerCase().includes('feta') &&
            !ing.toLowerCase().includes('yaourt') &&
            !ing.toLowerCase().includes('miel') &&
            !ing.toLowerCase().includes('gélatine') &&
            !ing.toLowerCase().includes('viande') && 
            !ing.toLowerCase().includes('porc') && 
            !ing.toLowerCase().includes('bœuf') && 
            !ing.toLowerCase().includes('poulet') && 
            !ing.toLowerCase().includes('poisson') &&
            !ing.toLowerCase().includes('crevettes') &&
            !ing.toLowerCase().includes('lardons')
        );
        veganIngredients = veganIngredients.map(ing => 
            ing.replace(/beurre/gi, 'huile d\'olive')
               .replace(/lait/gi, 'lait d\'amande')
               .replace(/crème/gi, 'crème de coco')
               .replace(/fromage/gi, 'fromage végétal')
               .replace(/miel/gi, 'sirop d\'agave')
               .replace(/œuf/gi, 'substitut d\'œuf')
        );
        if (veganIngredients.length < recipe.ingredients.length) {
            veganIngredients.push('Tofu soyeux', 'Lait d\'avoine', 'Levure nutritionnelle');
        }
        
        // Also modify instructions for vegan alternatives
        const veganInstructions = recipe.instructions.map(instruction =>
            instruction.replace(/œufs/gi, 'substitut d\'œuf')
                      .replace(/beurre/gi, 'huile d\'olive')
                      .replace(/crème/gi, 'crème végétale')
                      .replace(/fromage/gi, 'fromage végétal')
                      .replace(/lait/gi, 'lait végétal')
                      .replace(/lardons/gi, 'champignons fumés')
        );
        
        return { ...recipe, ingredients: veganIngredients, instructions: veganInstructions };
    },
    'sans-gluten': (recipe) => {
        const glutenFreeIngredients = recipe.ingredients.map(ing =>
            ing.replace(/farine/gi, 'farine de riz')
               .replace(/pain/gi, 'pain sans gluten')
               .replace(/pâte/gi, 'pâte sans gluten')
               .replace(/nouilles/gi, 'nouilles de riz')
               .replace(/spaghetti/gi, 'spaghetti sans gluten')
               .replace(/lasagnes/gi, 'lasagnes sans gluten')
        );
        return { ...recipe, ingredients: glutenFreeIngredients };
    },
    'sans-lactose': (recipe) => {
        const lactoseFreeIngredients = recipe.ingredients.map(ing =>
            ing.replace(/lait/gi, 'lait sans lactose')
               .replace(/beurre/gi, 'beurre sans lactose')
               .replace(/crème/gi, 'crème sans lactose')
               .replace(/fromage/gi, 'fromage sans lactose')
               .replace(/yaourt/gi, 'yaourt sans lactose')
        );
        return { ...recipe, ingredients: lactoseFreeIngredients };
    },
    'cétogène': (recipe) => {
        const ketoIngredients = recipe.ingredients.filter(ing =>
            !ing.toLowerCase().includes('pomme de terre') &&
            !ing.toLowerCase().includes('riz') &&
            !ing.toLowerCase().includes('pâte') &&
            !ing.toLowerCase().includes('farine') &&
            !ing.toLowerCase().includes('sucre') &&
            !ing.toLowerCase().includes('pain') &&
            !ing.toLowerCase().includes('nouille')
        );
        ketoIngredients.push('Avocat', 'Huile MCT', 'Fromage gras', 'Beurre clarifié');
        return { ...recipe, ingredients: ketoIngredients };
    },
    'halal': (recipe) => {
        const halalIngredients = recipe.ingredients.filter(ing =>
            !ing.toLowerCase().includes('porc') &&
            !ing.toLowerCase().includes('jambon') &&
            !ing.toLowerCase().includes('lardons') &&
            !ing.toLowerCase().includes('alcool') &&
            !ing.toLowerCase().includes('vin') &&
            !ing.toLowerCase().includes('bière')
        );
        return { ...recipe, ingredients: halalIngredients };
    },
    'casher': (recipe) => {
        const kosherIngredients = recipe.ingredients.filter(ing =>
            !ing.toLowerCase().includes('porc') &&
            !ing.toLowerCase().includes('fruits de mer') &&
            !ing.toLowerCase().includes('crevettes') &&
            !ing.toLowerCase().includes('crabe') &&
            !ing.toLowerCase().includes('homard')
        );
        return { ...recipe, ingredients: kosherIngredients };
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
        
        // Display applied dietary restrictions if any
        const restrictionsDisplay = recipe.appliedRestrictions && recipe.appliedRestrictions.length > 0 
            ? `<div class="applied-restrictions">
                <strong>🏷️ Restrictions appliquées :</strong> ${recipe.appliedRestrictions.join(', ')}
               </div>` 
            : '';
        
        recipeContent.innerHTML = `
            <div class="recipe-card">
                <h3 class="recipe-title">${recipe.name}</h3>
                
                ${restrictionsDisplay}
                
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