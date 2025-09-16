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
            },
            {
                name: 'Müsli Allemand',
                ingredients: ['Flocons d\'avoine', 'Pommes râpées', 'Noix', 'Noisettes', 'Miel', 'Yaourt', 'Fruits secs', 'Graines'],
                instructions: [
                    'Mélangez flocons d\'avoine et fruits secs.',
                    'Ajoutez pommes râpées fraîches.',
                    'Incorporez noix et noisettes hachées.',
                    'Versez yaourt et miel.',
                    'Mélangez délicatement.',
                    'Parsemez de graines et servez frais.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Lebkuchen Toast',
                ingredients: ['Pain d\'épices', 'Fromage blanc', 'Miel', 'Amandes effilées', 'Cannelle', 'Pommes'],
                instructions: [
                    'Grillez légèrement les tranches de pain d\'épices.',
                    'Tartinez de fromage blanc.',
                    'Disposez lamelles de pommes.',
                    'Arrosez de miel et saupoudrez de cannelle.',
                    'Garnissez d\'amandes effilées.',
                    'Servez avec café ou thé chaud.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
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
            },
            {
                name: 'Currywurst',
                ingredients: ['Saucisses bratwurst', 'Ketchup', 'Poudre de curry', 'Paprika', 'Oignon', 'Ail', 'Huile', 'Pain ou frites'],
                instructions: [
                    'Grillez les saucisses et coupez-les en tranches.',
                    'Préparez sauce avec ketchup, curry et épices.',
                    'Faites revenir oignon et ail.',
                    'Mélangez avec la sauce curry.',
                    'Nappez les saucisses de sauce.',
                    'Servez avec pain ou frites et saupoudrez de curry.'
                ],
                time: '25 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Schweinshaxe',
                ingredients: ['Jarrets de porc', 'Bière', 'Choucroute', 'Moutarde', 'Marjolaine', 'Carvi', 'Pommes de terre'],
                instructions: [
                    'Incisez la peau des jarrets en losanges.',
                    'Frottez avec épices et moutarde.',
                    'Rôtissez 2 heures en arrosant de bière.',
                    'Servez avec choucroute et pommes de terre.',
                    'Accompagnez de moutarde forte.',
                    'Tradition de la brasserie bavaroise.'
                ],
                time: '2h30',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'Königsberger Klopse',
                ingredients: ['Bœuf et porc hachés', 'Anchois', 'Œuf', 'Chapelure', 'Câpres', 'Crème', 'Citron', 'Bouillon', 'Farine'],
                instructions: [
                    'Formez boulettes avec viande, anchois et œuf.',
                    'Pochez dans bouillon frémissant 15 minutes.',
                    'Préparez sauce blanche avec bouillon et crème.',
                    'Ajoutez câpres et jus de citron.',
                    'Nappez les boulettes de sauce.',
                    'Servez avec pommes de terre et betteraves.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
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
            },
            {
                name: 'Rouladen',
                ingredients: ['Tranches de bœuf fines', 'Moutarde', 'Lard', 'Oignons', 'Cornichons', 'Vin rouge', 'Bouillon', 'Crème'],
                instructions: [
                    'Tartinez viande de moutarde.',
                    'Garnissez de lard, oignons et cornichons.',
                    'Roulez et fixez avec piques.',
                    'Faites dorer puis braiser au vin rouge.',
                    'Mijotez 1h30 dans bouillon.',
                    'Liez sauce avec crème et servez.'
                ],
                time: '2 heures',
                difficulty: 'Difficile',
                servings: '4 personnes'
            },
            {
                name: 'Himmel und Erde',
                ingredients: ['Pommes de terre', 'Pommes', 'Boudin noir', 'Oignons', 'Beurre', 'Lait', 'Muscade'],
                instructions: [
                    'Cuisez pommes de terre et pommes ensemble.',
                    'Écrasez en purée avec beurre et lait.',
                    'Assaisonnez de muscade.',
                    'Grillez tranches de boudin noir.',
                    'Faites caraméliser les oignons.',
                    'Servez purée garnie de boudin et oignons.'
                ],
                time: '40 minutes',
                difficulty: 'Facile',
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
            },
            {
                name: 'Stollen de Dresden',
                ingredients: ['Farine', 'Levure', 'Lait', 'Beurre', 'Fruits confits', 'Amandes', 'Rhum', 'Épices de Noël', 'Sucre glace'],
                instructions: [
                    'Préparez pâte levée enrichie au beurre.',
                    'Incorporez fruits confits imbibés de rhum.',
                    'Ajoutez amandes et épices.',
                    'Façonnez en forme ovale traditionnelle.',
                    'Enfournez 45 minutes à 180°C.',
                    'Enrobez de beurre fondu et sucre glace.'
                ],
                time: '3h + levée',
                difficulty: 'Difficile',
                servings: '12 personnes'
            },
            {
                name: 'Baumkuchen',
                ingredients: ['Œufs', 'Sucre', 'Farine', 'Beurre', 'Vanille', 'Rhum', 'Glaçage chocolat'],
                instructions: [
                    'Battez œufs et sucre jusqu\'à mousse.',
                    'Incorporez farine, beurre fondu et arômes.',
                    'Étalez couche fine sur plaque et grillez.',
                    'Répétez pour créer des cercles concentriques.',
                    'Montez en cylindre couche par couche.',
                    'Enrobez de glaçage chocolat.'
                ],
                time: '2 heures',
                difficulty: 'Très difficile',
                servings: '10 personnes'
            },
            {
                name: 'Pflaumenkuchen',
                ingredients: ['Pâte levée', 'Prunes', 'Sucre', 'Cannelle', 'Amandes effilées', 'Streusel', 'Crème'],
                instructions: [
                    'Étalez pâte levée dans moule beurré.',
                    'Disposez prunes dénoyautées côte à côte.',
                    'Saupoudrez de sucre et cannelle.',
                    'Parsemez de streusel et amandes.',
                    'Enfournez 30 minutes à 180°C.',
                    'Servez tiède avec crème fouettée.'
                ],
                time: '1h + levée',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
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
            },
            {
                name: 'Leberwurst Sandwich',
                ingredients: ['Pain de seigle', 'Leberwurst', 'Cornichons', 'Moutarde douce', 'Oignons', 'Radis'],
                instructions: [
                    'Tartinez pain de moutarde douce.',
                    'Étalez généreusement leberwurst.',
                    'Ajoutez lamelles d\'oignons et radis.',
                    'Garnissez de cornichons émincés.',
                    'Poivrez légèrement.',
                    'Servez avec bière allemande.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 sandwiches'
            },
            {
                name: 'Speckpfannkuchen',
                ingredients: ['Farine', 'Œufs', 'Lait', 'Lard fumé', 'Oignons', 'Ciboulette', 'Sel', 'Poivre'],
                instructions: [
                    'Préparez pâte à pancakes salée.',
                    'Faites griller lardons et oignons.',
                    'Incorporez dans la pâte.',
                    'Cuisez pancakes épais dans poêle.',
                    'Parsemez de ciboulette.',
                    'Servez chaud comme collation copieuse.'
                ],
                time: '25 minutes',
                difficulty: 'Facile',
                servings: '6 pancakes'
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
            },
            {
                name: 'Full English Breakfast',
                ingredients: ['Saucisses', 'Bacon', 'Œufs', 'Haricots blancs en sauce', 'Champignons', 'Tomates', 'Boudin noir', 'Pain grillé', 'Beurre'],
                instructions: [
                    'Cuisez saucisses et bacon dans une grande poêle.',
                    'Réservez et faites frire les œufs.',
                    'Grillez champignons et tomates.',
                    'Réchauffez haricots en sauce et boudin.',
                    'Grillez le pain et beurrez.',
                    'Dressez tous les éléments sur assiette chaude.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Porridge aux Fruits',
                ingredients: ['Flocons d\'avoine', 'Lait', 'Miel', 'Fruits rouges', 'Banane', 'Noix', 'Cannelle'],
                instructions: [
                    'Cuisez l\'avoine dans le lait en remuant.',
                    'Ajoutez miel et cannelle.',
                    'Cuisez jusqu\'à consistance crémeuse.',
                    'Servez dans des bols chauds.',
                    'Garnissez de fruits frais et noix.',
                    'Arrosez d\'un filet de miel.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
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
            },
            {
                name: 'Shepherd\'s Pie',
                ingredients: ['500g d\'agneau haché', 'Oignons', 'Carottes', 'Petits pois', 'Concentré de tomate', 'Bouillon', 'Pommes de terre', 'Beurre', 'Lait', 'Fromage'],
                instructions: [
                    'Faites revenir agneau haché avec oignons.',
                    'Ajoutez carottes, pois et concentré de tomate.',
                    'Versez bouillon et mijotez 20 minutes.',
                    'Préparez purée de pommes de terre.',
                    'Étalez viande dans plat, recouvrez de purée.',
                    'Gratinez au four 25 minutes.'
                ],
                time: '1h15',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Bangers and Mash',
                ingredients: ['Saucisses anglaises', 'Pommes de terre', 'Oignons', 'Beurre', 'Lait', 'Sauce gravy', 'Petits pois'],
                instructions: [
                    'Grillez les saucisses jusqu\'à dorure.',
                    'Préparez purée crémeuse avec beurre et lait.',
                    'Faites caraméliser les oignons.',
                    'Préparez sauce gravy traditionnelle.',
                    'Servez saucisses sur purée.',
                    'Nappez de sauce et accompagnez de pois.'
                ],
                time: '40 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Cornish Pasty',
                ingredients: ['Pâte brisée', 'Bœuf haché', 'Pommes de terre', 'Navets', 'Oignons', 'Persil', 'Sel', 'Poivre', 'Œuf battu'],
                instructions: [
                    'Coupez légumes en petits dés.',
                    'Mélangez viande, légumes et assaisonnements.',
                    'Étalez pâte et découpez en cercles.',
                    'Garnissez un côté de farce.',
                    'Pliez et soudez en forme de chausson.',
                    'Dorez et enfournez 45 minutes à 180°C.'
                ],
                time: '1h15',
                difficulty: 'Intermédiaire',
                servings: '6 pasties'
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
            },
            {
                name: 'Roast Beef and Yorkshire Pudding',
                ingredients: ['Rôti de bœuf', 'Farine', 'Œufs', 'Lait', 'Graisse de bœuf', 'Légumes racines', 'Sauce gravy', 'Raifort'],
                instructions: [
                    'Rôtissez le bœuf avec légumes.',
                    'Préparez pâte à Yorkshire pudding.',
                    'Chauffez graisse dans moules à muffins.',
                    'Versez pâte et enfournez 20 minutes.',
                    'Préparez sauce avec jus de cuisson.',
                    'Servez bœuf tranché avec puddings et sauce.'
                ],
                time: '2h30',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Steak and Kidney Pie',
                ingredients: ['Bœuf à braiser', 'Rognons', 'Pâte brisée', 'Oignons', 'Champignons', 'Bière brune', 'Farine', 'Thym', 'Laurier'],
                instructions: [
                    'Faites revenir viande et rognons.',
                    'Ajoutez oignons et champignons.',
                    'Saupoudrez de farine et versez bière.',
                    'Mijotez 1h30 avec herbes.',
                    'Garnissez moule et recouvrez de pâte.',
                    'Enfournez 30 minutes jusqu\'à dorure.'
                ],
                time: '2h30',
                difficulty: 'Difficile',
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
            },
            {
                name: 'Eton Mess',
                ingredients: ['Meringues', 'Fraises', 'Crème fouettée', 'Sucre glace', 'Coulis de fraises'],
                instructions: [
                    'Cassez les meringues en gros morceaux.',
                    'Équeutez et coupez les fraises.',
                    'Fouettez la crème avec sucre glace.',
                    'Mélangez délicatement tous les éléments.',
                    'Servez dans des verres ou bols.',
                    'Décorez de coulis et fraises entières.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Spotted Dick',
                ingredients: ['Farine', 'Graisse de rognon', 'Sucre', 'Raisins de Corinthe', 'Lait', 'Levure', 'Sel', 'Crème anglaise'],
                instructions: [
                    'Mélangez farine, graisse, sucre et raisins.',
                    'Ajoutez lait pour former une pâte.',
                    'Formez un boudin et enveloppez.',
                    'Cuisez à la vapeur 2 heures.',
                    'Démoulez et tranchez.',
                    'Servez chaud avec crème anglaise.'
                ],
                time: '2h30',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Treacle Tart',
                ingredients: ['Pâte sablée', 'Golden syrup', 'Chapelure', 'Citron', 'Œufs', 'Crème'],
                instructions: [
                    'Foncez un moule de pâte sablée.',
                    'Mélangez golden syrup et chapelure.',
                    'Ajoutez zeste et jus de citron.',
                    'Incorporez œufs battus.',
                    'Versez sur la pâte et enfournez 25 minutes.',
                    'Servez tiède avec crème.'
                ],
                time: '45 minutes',
                difficulty: 'Facile',
                servings: '8 personnes'
            },
            {
                name: 'Bread and Butter Pudding',
                ingredients: ['Pain brioche', 'Beurre', 'Raisins secs', 'Œufs', 'Lait', 'Crème', 'Sucre', 'Vanille', 'Muscade'],
                instructions: [
                    'Beurrez tranches de brioche et disposez en couches.',
                    'Parsemez de raisins secs.',
                    'Battez œufs, lait, crème et sucre.',
                    'Versez sur le pain et laissez imbiber.',
                    'Saupoudrez de muscade et enfournez 45 minutes.',
                    'Servez chaud ou tiède.'
                ],
                time: '1h + trempage',
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
            },
            {
                name: 'Welsh Rarebit',
                ingredients: ['Pain grillé', 'Fromage cheddar', 'Bière', 'Moutarde', 'Sauce Worcestershire', 'Œuf', 'Beurre'],
                instructions: [
                    'Grillez les tranches de pain.',
                    'Mélangez fromage râpé, bière et condiments.',
                    'Chauffez en remuant jusqu\'à fusion.',
                    'Ajoutez jaune d\'œuf hors du feu.',
                    'Étalez sur pain grillé.',
                    'Passez sous le grill jusqu\'à dorure.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Scotch Eggs',
                ingredients: ['Œufs durs', 'Chair à saucisse', 'Farine', 'Œuf battu', 'Chapelure', 'Huile de friture'],
                instructions: [
                    'Écalez délicatement les œufs durs.',
                    'Enrobez chaque œuf de chair à saucisse.',
                    'Passez dans farine, œuf battu puis chapelure.',
                    'Faites frire jusqu\'à dorure uniforme.',
                    'Égouttez sur papier absorbant.',
                    'Servez chaud ou froid avec moutarde.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 œufs'
            },
            {
                name: 'Crumpets',
                ingredients: ['Farine', 'Levure', 'Lait tiède', 'Sucre', 'Sel', 'Beurre', 'Anneaux métalliques'],
                instructions: [
                    'Préparez une pâte levée liquide.',
                    'Laissez lever 1 heure jusqu\'à bulles.',
                    'Chauffez anneaux graissés sur plaque.',
                    'Versez pâte dans anneaux.',
                    'Cuisez 8 minutes de chaque côté.',
                    'Servez grillés avec beurre et confiture.'
                ],
                time: '1h30 + levée',
                difficulty: 'Difficile',
                servings: '8 crumpets'
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
            },
            {
                name: 'Poha Maharashtrian',
                ingredients: ['Riz battu (poha)', 'Oignons', 'Pommes de terre', 'Piments verts', 'Graines de moutarde', 'Curcuma', 'Coriandre', 'Citron', 'Cacahuètes'],
                instructions: [
                    'Rincez le poha et égouttez.',
                    'Tempérez graines de moutarde dans l\'huile.',
                    'Ajoutez oignons et pommes de terre.',
                    'Incorporez poha et épices.',
                    'Cuisez 5 minutes en mélangeant.',
                    'Garnissez de coriandre et cacahuètes.'
                ],
                time: '20 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Idli Sambhar',
                ingredients: ['Pâte à idli', 'Lentilles toor', 'Légumes mélangés', 'Tamarin', 'Poudre de sambhar', 'Feuilles de curry', 'Coriandre', 'Chutney coco'],
                instructions: [
                    'Cuisez idlis à la vapeur 15 minutes.',
                    'Préparez sambhar avec lentilles et légumes.',
                    'Ajoutez pâte de tamarin et épices.',
                    'Tempérez avec graines de moutarde.',
                    'Servez idlis avec sambhar chaud.',
                    'Accompagnez de chutneys variés.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Upma de Semoule',
                ingredients: ['Semoule', 'Légumes variés', 'Graines de moutarde', 'Curry leaves', 'Gingembre', 'Piments verts', 'Noix de cajou', 'Coriandre'],
                instructions: [
                    'Grillez la semoule à sec jusqu\'à parfum.',
                    'Tempérez graines dans l\'huile.',
                    'Ajoutez légumes et gingembre.',
                    'Versez eau bouillante progressivement.',
                    'Incorporez semoule en remuant.',
                    'Garnissez de coriandre et noix de cajou.'
                ],
                time: '25 minutes',
                difficulty: 'Facile',
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
            },
            {
                name: 'Chole Bhature',
                ingredients: ['Pois chiches', 'Farine', 'Yaourt', 'Levure', 'Oignons', 'Tomates', 'Garam masala', 'Amchur', 'Coriandre', 'Huile de friture'],
                instructions: [
                    'Préparez pâte levée pour bhature.',
                    'Cuisez pois chiches avec épices.',
                    'Préparez masala épicé avec oignons-tomates.',
                    'Mélangez pois chiches et masala.',
                    'Frire bhature jusqu\'à gonflement.',
                    'Servez chole avec bhature chaudes.'
                ],
                time: '2h + levée',
                difficulty: 'Difficile',
                servings: '4 personnes'
            },
            {
                name: 'Palak Paneer',
                ingredients: ['Épinards', 'Paneer', 'Oignons', 'Tomates', 'Ail', 'Gingembre', 'Crème', 'Garam masala', 'Cumin', 'Coriandre'],
                instructions: [
                    'Blanchissez épinards et mixez en purée.',
                    'Faites griller cubes de paneer.',
                    'Préparez base d\'oignon-tomate épicée.',
                    'Ajoutez purée d\'épinards.',
                    'Incorporez paneer et crème.',
                    'Mijotez 10 minutes et parsemez de coriandre.'
                ],
                time: '40 minutes',
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
            },
            {
                name: 'Rogan Josh',
                ingredients: ['Agneau en cubes', 'Yaourt', 'Oignons', 'Tomates', 'Ail', 'Gingembre', 'Pâte de piments kashmir', 'Garam masala', 'Cardamome', 'Cannelle'],
                instructions: [
                    'Marinez agneau dans yaourt épicé.',
                    'Faites dorer oignons jusqu\'à caramélisation.',
                    'Ajoutez ail, gingembre et pâte de piments.',
                    'Incorporez agneau et tomates.',
                    'Mijotez 1h30 jusqu\'à tendreté.',
                    'Ajustez épices et servez avec riz.'
                ],
                time: '2h + marinade',
                difficulty: 'Difficile',
                servings: '6 personnes'
            },
            {
                name: 'Fish Curry Goan',
                ingredients: ['Poisson kokum', 'Lait de coco', 'Pâte de curry rouge', 'Tamarin', 'Oignons', 'Ail', 'Gingembre', 'Feuilles de curry', 'Coriandre'],
                instructions: [
                    'Marinez poisson avec curcuma et sel.',
                    'Préparez pâte de curry avec épices.',
                    'Faites revenir oignons et pâte de curry.',
                    'Ajoutez lait de coco et tamarin.',
                    'Glissez délicatement le poisson.',
                    'Mijotez 15 minutes et garnissez de coriandre.'
                ],
                time: '45 minutes',
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
            },
            {
                name: 'Jalebi',
                ingredients: ['Farine', 'Yaourt', 'Levure', 'Sucre', 'Safran', 'Cardamome', 'Huile de friture'],
                instructions: [
                    'Préparez pâte fermentée avec farine et yaourt.',
                    'Laissez fermenter 8 heures.',
                    'Préparez sirop avec sucre, safran et cardamome.',
                    'Formez spirales dans l\'huile chaude.',
                    'Frire jusqu\'à dorure croustillante.',
                    'Tremper immédiatement dans sirop chaud.'
                ],
                time: '30 min + 8h fermentation',
                difficulty: 'Difficile',
                servings: '15 pièces'
            },
            {
                name: 'Sandesh',
                ingredients: ['Paneer frais', 'Sucre en poudre', 'Cardamome', 'Pistaches', 'Safran', 'Eau de rose'],
                instructions: [
                    'Égouttez bien paneer frais.',
                    'Pétrissez avec sucre jusqu\'à lisse.',
                    'Ajoutez cardamome et eau de rose.',
                    'Cuisez 5 minutes en remuant.',
                    'Moule dans formes décoratives.',
                    'Décorez de pistaches et safran.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
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
            },
            {
                name: 'Pakoras Mixtes',
                ingredients: ['Farine de pois chiches', 'Légumes variés', 'Oignons', 'Épinards', 'Pommes de terre', 'Épices', 'Huile de friture', 'Chutney'],
                instructions: [
                    'Préparez pâte avec farine de pois chiches.',
                    'Ajoutez épices et un peu d\'eau.',
                    'Trempez légumes dans la pâte.',
                    'Frire dans huile chaude jusqu\'à dorure.',
                    'Égouttez sur papier absorbant.',
                    'Servez chaud avec chutneys variés.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Dhokla Gujarati',
                ingredients: ['Farine de pois chiches', 'Yaourt', 'Gingembre', 'Piments verts', 'Fruit à pain', 'Graines de moutarde', 'Feuilles de curry', 'Coriandre'],
                instructions: [
                    'Mélangez farine, yaourt et épices.',
                    'Laissez fermenter 4 heures.',
                    'Ajoutez fruit à pain avant cuisson.',
                    'Cuisez à la vapeur 15 minutes.',
                    'Tempérez garniture avec graines de moutarde.',
                    'Coupez en carrés et servez.'
                ],
                time: '30 min + 4h fermentation',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
            },
            {
                name: 'Bhel Puri',
                ingredients: ['Puri (galettes soufflées)', 'Sev', 'Oignons', 'Tomates', 'Chutney de tamarin', 'Chutney de menthe', 'Pommes de terre bouillies', 'Coriandre'],
                instructions: [
                    'Cassez puri en morceaux.',
                    'Mélangez avec légumes hachés.',
                    'Ajoutez chutneys selon goût.',
                    'Incorporez pommes de terre en dés.',
                    'Garnissez de sev et coriandre.',
                    'Servez immédiatement pour garder croquant.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
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
            },
            {
                name: 'Tapioca Recheada',
                ingredients: ['Farine de tapioca', 'Fromage coalho', 'Noix de coco râpée', 'Beurre', 'Jambon', 'Tomates', 'Origan'],
                instructions: [
                    'Chauffez une poêle antiadhésive.',
                    'Versez la farine de tapioca en fine couche.',
                    'Laissez former une galette souple.',
                    'Garnissez de fromage, jambon et tomates.',
                    'Pliez en deux et servez immédiatement.',
                    'Variante sucrée avec coco et condensé.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '2 personnes'
            },
            {
                name: 'Vitamina de Abacate',
                ingredients: ['2 avocats mûrs', '400ml de lait', '100ml de lait concentré', 'Sucre', 'Glace pilée', 'Cannelle'],
                instructions: [
                    'Coupez les avocats et retirez le noyau.',
                    'Mixez avec lait et lait concentré.',
                    'Ajustez le sucre selon goût.',
                    'Ajoutez glace pilée et mixez à nouveau.',
                    'Servez dans des verres hauts.',
                    'Saupoudrez de cannelle.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 verres'
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
            },
            {
                name: 'Bobó de Camarão',
                ingredients: ['500g de crevettes', 'Manioc', 'Lait de coco', 'Huile de dendê', 'Oignons', 'Tomates', 'Coriandre', 'Ail', 'Gingembre'],
                instructions: [
                    'Cuisez et écrasez le manioc.',
                    'Mélangez avec lait de coco pour obtenir une purée.',
                    'Faites revenir oignons, ail et tomates.',
                    'Ajoutez les crevettes et l\'huile de dendê.',
                    'Incorporez la purée de manioc.',
                    'Parsemez de coriandre et servez.'
                ],
                time: '1 heure',
                difficulty: 'Intermédiaire',
                servings: '6 personnes'
            },
            {
                name: 'Escondidinho de Carne Seca',
                ingredients: ['Carne seca', 'Purée de manioc', 'Oignons', 'Tomates', 'Fromage râpé', 'Lait', 'Beurre', 'Ciboulette'],
                instructions: [
                    'Dessalez et effilochez la carne seca.',
                    'Préparez une purée crémeuse avec le manioc.',
                    'Faites revenir viande avec oignons et tomates.',
                    'Montez en couches dans un plat.',
                    'Terminez par purée et fromage.',
                    'Gratinez au four et parsemez de ciboulette.'
                ],
                time: '1h30',
                difficulty: 'Intermédiaire',
                servings: '8 personnes'
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
            },
            {
                name: 'Vatapá',
                ingredients: ['Crevettes séchées', 'Pain de mie', 'Lait de coco', 'Huile de dendê', 'Cachacinha', 'Oignons', 'Ail', 'Gingembre', 'Coriandre'],
                instructions: [
                    'Trempez le pain dans le lait de coco.',
                    'Mixez avec crevettes séchées et cacahuètes.',
                    'Faites revenir oignons, ail et gingembre.',
                    'Ajoutez le mélange mixé et l\'huile de dendê.',
                    'Cuisez en remuant jusqu\'à consistance crémeuse.',
                    'Servez avec acarajé ou riz.'
                ],
                time: '45 minutes',
                difficulty: 'Difficile',
                servings: '6 personnes'
            },
            {
                name: 'Peixe na Telha',
                ingredients: ['Poisson entier', 'Tomates', 'Oignons', 'Poivrons', 'Huile d\'olive', 'Citron', 'Coriandre', 'Ail', 'Olives'],
                instructions: [
                    'Marinez le poisson avec citron et ail.',
                    'Disposez sur une tuile d\'argile huilée.',
                    'Couvrez de légumes émincés.',
                    'Arrosez d\'huile d\'olive et assaisonnez.',
                    'Enfournez 45 minutes à 180°C.',
                    'Garnissez d\'olives et coriandre.'
                ],
                time: '1h + marinade',
                difficulty: 'Facile',
                servings: '4 personnes'
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
            },
            {
                name: 'Quindim',
                ingredients: ['12 jaunes d\'œufs', '200g de sucre', '100g de noix de coco râpée', '50g de beurre'],
                instructions: [
                    'Battez jaunes d\'œufs et sucre jusqu\'à blanchiment.',
                    'Incorporez noix de coco et beurre fondu.',
                    'Versez dans des moules caramélisés.',
                    'Cuisez au bain-marie 40 minutes.',
                    'Laissez refroidir avant de démouler.',
                    'Servez frais avec sa couleur dorée caractéristique.'
                ],
                time: '1h + refroidissement',
                difficulty: 'Intermédiaire',
                servings: '12 quindim'
            },
            {
                name: 'Cocada',
                ingredients: ['Noix de coco fraîche râpée', 'Sucre cristal', 'Eau', 'Lait de coco'],
                instructions: [
                    'Préparez un sirop avec sucre et eau.',
                    'Ajoutez la noix de coco râpée.',
                    'Cuisez en remuant jusqu\'à épaississement.',
                    'Ajoutez un peu de lait de coco.',
                    'Versez sur une plaque et laissez refroidir.',
                    'Découpez en carrés quand c\'est ferme.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '20 carrés'
            },
            {
                name: 'Romeu e Julieta',
                ingredients: ['Fromage Minas', 'Pâte de goyave', 'Biscoitos de maizena'],
                instructions: [
                    'Coupez le fromage en tranches fines.',
                    'Coupez la pâte de goyave de même épaisseur.',
                    'Alternez fromage et goyave sur l\'assiette.',
                    'Servez avec biscoitos de maizena.',
                    'Dégustez ce contraste sucré-salé typique.',
                    'Accompagnez d\'un café expresso.'
                ],
                time: '5 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Doce de Leite Caseiro',
                ingredients: ['1L de lait entier', '300g de sucre', '1 cuillère à café de bicarbonate'],
                instructions: [
                    'Mélangez lait, sucre et bicarbonate.',
                    'Cuisez à feu doux en remuant constamment.',
                    'Continuez jusqu\'à obtenir une couleur caramel.',
                    'La consistance doit nappe la cuillère.',
                    'Versez dans des pots stérilisés.',
                    'Servez tartiné ou en garniture de gâteaux.'
                ],
                time: '1h30',
                difficulty: 'Intermédiaire',
                servings: '2 pots'
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
            },
            {
                name: 'Pão de Açúcar Mini',
                ingredients: ['Farine de tapioca', 'Lait', 'Œufs', 'Fromage râpé', 'Huile', 'Sel'],
                instructions: [
                    'Préparez des mini pains de sucre.',
                    'Mélangez tous les ingrédients.',
                    'Formez de petites boules.',
                    'Enfournez 15 minutes à 180°C.',
                    'Servez tiède comme collation.',
                    'Parfait avec café ou jus de fruits.'
                ],
                time: '25 minutes',
                difficulty: 'Facile',
                servings: '20 mini pains'
            },
            {
                name: 'Pastel de Feira',
                ingredients: ['Pâte à pastel', 'Fromage', 'Jambon', 'Cœur de palmier', 'Huile de friture'],
                instructions: [
                    'Étalez la pâte finement.',
                    'Garnissez de fromage et jambon.',
                    'Ajoutez cœur de palmier émincé.',
                    'Fermez et soudez les bords.',
                    'Faites frire jusqu\'à dorure.',
                    'Servez immédiatement avec caldo de cana.'
                ],
                time: '30 minutes',
                difficulty: 'Intermédiaire',
                servings: '8 pastels'
            },
            {
                name: 'Sanduíche de Mortadela',
                ingredients: ['Pain français', 'Mortadelle', 'Fromage provolone', 'Tomates', 'Laitue', 'Mayonnaise'],
                instructions: [
                    'Coupez le pain en deux dans la longueur.',
                    'Tartinez de mayonnaise.',
                    'Disposez mortadelle et fromage.',
                    'Ajoutez tomates et laitue.',
                    'Fermez et coupez en portions.',
                    'Servez avec guaraná ou suco.'
                ],
                time: '10 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
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
            },
            {
                name: 'Fatteh Hummus',
                ingredients: ['Pain pita rassis', 'Pois chiches cuits', 'Yaourt grec', 'Tahini', 'Ail', 'Citron', 'Pignons', 'Paprika', 'Persil'],
                instructions: [
                    'Grillez et cassez le pain en morceaux.',
                    'Disposez dans un plat de service.',
                    'Réchauffez les pois chiches avec épices.',
                    'Mélangez yaourt, tahini, ail et citron.',
                    'Versez les pois chiches sur le pain.',
                    'Nappez de sauce yaourt et garnissez de pignons.'
                ],
                time: '25 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Kaak Libnaneh',
                ingredients: ['Farine', 'Levure', 'Lait tiède', 'Sucre', 'Huile d\'olive', 'Graines de sésame', 'Nigelle', 'Sel'],
                instructions: [
                    'Préparez une pâte levée avec farine, levure et lait.',
                    'Incorporez huile d\'olive et sucre.',
                    'Pétrissez et laissez lever 1 heure.',
                    'Façonnez en petits pains ronds.',
                    'Badigeonnez d\'huile et parsemez de graines.',
                    'Enfournez 20 minutes à 180°C.'
                ],
                time: '2h + levée',
                difficulty: 'Intermédiaire',
                servings: '8 pains'
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
            },
            {
                name: 'Kafta bil Saniyeh',
                ingredients: ['500g d\'agneau haché', 'Persil', 'Oignon', 'Cannelle', 'Piment de la Jamaïque', 'Tomates', 'Pommes de terre', 'Huile d\'olive'],
                instructions: [
                    'Mélangez viande hachée, persil, oignon et épices.',
                    'Formez des boulettes aplaties.',
                    'Tranchez pommes de terre et tomates.',
                    'Disposez en couches dans un plat huilé.',
                    'Arrosez d\'huile d\'olive et d\'eau.',
                    'Enfournez 45 minutes à 180°C.'
                ],
                time: '1h15',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Shawarma Libanais',
                ingredients: ['Agneau émincé', 'Yaourt', 'Ail', 'Citron', 'Épices baharat', 'Pain pita', 'Tomates', 'Oignons', 'Persil', 'Sauce tahini'],
                instructions: [
                    'Marinez la viande dans yaourt, ail et épices 2 heures.',
                    'Faites griller la viande à feu vif.',
                    'Réchauffez les pains pita.',
                    'Préparez les légumes et sauce tahini.',
                    'Garnissez les pains de viande et légumes.',
                    'Roulez et servez immédiatement.'
                ],
                time: '30 min + 2h marinade',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'Mujaddara',
                ingredients: ['Lentilles vertes', 'Riz basmati', 'Oignons', 'Huile d\'olive', 'Cumin', 'Cannelle', 'Piment de la Jamaïque', 'Laurier'],
                instructions: [
                    'Cuisez les lentilles avec épices et laurier.',
                    'Faites caraméliser les oignons jusqu\'à dorure.',
                    'Ajoutez le riz aux lentilles et mélangez.',
                    'Versez l\'eau bouillante et cuisez 20 minutes.',
                    'Incorporez la moitié des oignons caramélisés.',
                    'Servez garni du reste d\'oignons.'
                ],
                time: '45 minutes',
                difficulty: 'Facile',
                servings: '6 personnes'
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
            },
            {
                name: 'Samke Harra',
                ingredients: ['Poisson entier', 'Coriandre', 'Ail', 'Piments rouges', 'Noix', 'Citron', 'Huile d\'olive', 'Tahini', 'Oignons'],
                instructions: [
                    'Nettoyez et incisez le poisson.',
                    'Préparez la sauce harra avec coriandre, ail et piments.',
                    'Farcissez le poisson de sauce et d\'oignons.',
                    'Badigeonnez d\'huile et enfournez 30 minutes.',
                    'Arrosez de jus de citron en cours de cuisson.',
                    'Servez avec tahini et salade.'
                ],
                time: '50 minutes',
                difficulty: 'Intermédiaire',
                servings: '4 personnes'
            },
            {
                name: 'Fatteh Djaj',
                ingredients: ['Poulet rôti', 'Pain pita', 'Riz basmati', 'Amandes grillées', 'Yaourt', 'Ail', 'Cannelle', 'Pignons', 'Beurre'],
                instructions: [
                    'Cuisez le riz avec cannelle et pignons.',
                    'Grillez et cassez le pain en morceaux.',
                    'Effilochez le poulet rôti.',
                    'Disposez pain, riz et poulet en couches.',
                    'Nappez de yaourt à l\'ail.',
                    'Garnissez d\'amandes grillées au beurre.'
                ],
                time: '40 minutes',
                difficulty: 'Intermédiaire',
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
            },
            {
                name: 'Riz au Lait Libanais',
                ingredients: ['Riz rond', 'Lait entier', 'Sucre', 'Eau de fleur d\'oranger', 'Cannelle', 'Pistaches hachées', 'Amandes'],
                instructions: [
                    'Cuisez le riz dans l\'eau jusqu\'à absorption.',
                    'Ajoutez le lait chaud progressivement.',
                    'Sucrez et cuisez en remuant 20 minutes.',
                    'Parfumez à l\'eau de fleur d\'oranger.',
                    'Laissez refroidir et réfrigérez.',
                    'Servez garni de pistaches et cannelle.'
                ],
                time: '45 min + réfrigération',
                difficulty: 'Facile',
                servings: '6 personnes'
            },
            {
                name: 'Atayef',
                ingredients: ['Farine', 'Levure', 'Sucre', 'Lait tiède', 'Fromage ricotta', 'Pistaches', 'Sirop de sucre', 'Eau de rose', 'Huile de friture'],
                instructions: [
                    'Préparez une pâte à crêpes levée.',
                    'Cuisez de petites crêpes d\'un seul côté.',
                    'Garnissez de ricotta et pistaches.',
                    'Pliez en demi-lune et soudez les bords.',
                    'Faites frire jusqu\'à dorure.',
                    'Trempez dans le sirop à l\'eau de rose.'
                ],
                time: '1h + levée',
                difficulty: 'Difficile',
                servings: '12 pièces'
            },
            {
                name: 'Halawet el Jibn',
                ingredients: ['Fromage akkawi', 'Semoule fine', 'Sucre', 'Eau de fleur d\'oranger', 'Crème épaisse', 'Pistaches', 'Sirop'],
                instructions: [
                    'Dessalez le fromage et égouttez.',
                    'Mélangez avec semoule et sucre.',
                    'Cuisez en remuant jusqu\'à consistance lisse.',
                    'Étalez finement et laissez refroidir.',
                    'Garnissez de crème et roulez.',
                    'Coupez en tranches et nappez de sirop.'
                ],
                time: '1h + refroidissement',
                difficulty: 'Difficile',
                servings: '8 personnes'
            },
            {
                name: 'Mamoul aux Dattes',
                ingredients: ['Farine', 'Semoule fine', 'Beurre', 'Eau de fleur d\'oranger', 'Dattes', 'Cannelle', 'Noix', 'Sucre glace'],
                instructions: [
                    'Mélangez farine, semoule et beurre.',
                    'Ajoutez eau de fleur d\'oranger et pétrissez.',
                    'Préparez la farce avec dattes, cannelle et noix.',
                    'Formez des petits chaussons farcis.',
                    'Enfournez 20 minutes à 180°C.',
                    'Saupoudrez de sucre glace tiède.'
                ],
                time: '1h30',
                difficulty: 'Difficile',
                servings: '20 pièces'
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
            },
            {
                name: 'Makanak Libanais',
                ingredients: ['Saucisses libanaises', 'Ail', 'Citron', 'Huile d\'olive', 'Pignons', 'Persil', 'Tomates cerises'],
                instructions: [
                    'Piquez les saucisses et faites-les griller.',
                    'Ajoutez ail émincé et pignons.',
                    'Arrosez de jus de citron et huile.',
                    'Ajoutez tomates cerises et persil.',
                    'Cuisez 2 minutes de plus.',
                    'Servez chaud avec pain pita.'
                ],
                time: '15 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            },
            {
                name: 'Cheese Rolls Libanais',
                ingredients: ['Pâte filo', 'Fromage blanc', 'Menthe fraîche', 'Huile d\'olive', 'Graines de nigelle', 'Œuf battu'],
                instructions: [
                    'Mélangez fromage blanc et menthe hachée.',
                    'Découpez la pâte filo en bandes.',
                    'Déposez fromage au bout de chaque bande.',
                    'Roulez en serrant et badigeonnez d\'œuf.',
                    'Parsemez de graines de nigelle.',
                    'Enfournez 15 minutes jusqu\'à dorure.'
                ],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '12 pièces'
            },
            {
                name: 'Fatayer aux Épinards',
                ingredients: ['Pâte à pain', 'Épinards', 'Oignons', 'Citron', 'Sumac', 'Pignons', 'Huile d\'olive', 'Sel'],
                instructions: [
                    'Hachez et salez les épinards, égouttez.',
                    'Mélangez avec oignons, citron et sumac.',
                    'Ajoutez pignons et huile d\'olive.',
                    'Étalez la pâte et découpez en cercles.',
                    'Garnissez et pliez en triangles.',
                    'Enfournez 20 minutes à 200°C.'
                ],
                time: '45 minutes',
                difficulty: 'Intermédiaire',
                servings: '15 pièces'
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

    // Search recipes in database
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
        const searchBtn = document.getElementById('search-btn');
        const searchInput = document.getElementById('search-input');
        const clearSearchBtn = document.getElementById('clear-search-btn');
        
        form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        newRecipeBtn.addEventListener('click', () => this.showGeneratorForm());
        searchBtn.addEventListener('click', () => this.handleSearch());
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSearch();
        });
        clearSearchBtn.addEventListener('click', () => this.clearSearch());
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

    handleSearch() {
        const searchInput = document.getElementById('search-input');
        const searchCuisine = document.getElementById('search-cuisine');
        const searchMeal = document.getElementById('search-meal');
        const searchDifficulty = document.getElementById('search-difficulty');
        
        const query = searchInput.value.trim();
        const filters = {
            cuisine: searchCuisine.value,
            mealType: searchMeal.value,
            difficulty: searchDifficulty.value
        };
        
        // Remove empty filters
        Object.keys(filters).forEach(key => {
            if (!filters[key]) delete filters[key];
        });
        
        const results = this.generator.searchRecipes(query, filters);
        this.displaySearchResults(results);
    }

    displaySearchResults(results) {
        const searchResultsSection = document.getElementById('search-results');
        const searchResultsContainer = document.getElementById('search-results-container');
        
        if (results.length === 0) {
            searchResultsContainer.innerHTML = `
                <div class="no-results">
                    <p>Aucune recette trouvée. Essayez avec d'autres mots-clés.</p>
                </div>
            `;
        } else {
            searchResultsContainer.innerHTML = `
                <div class="search-results-grid">
                    ${results.slice(0, 12).map(recipe => `
                        <div class="recipe-preview" onclick="recipeUI.selectSearchResult('${recipe.cuisine}', '${recipe.mealType}', '${recipe.name}')">
                            <h4>${recipe.name}</h4>
                            <div class="recipe-meta-preview">
                                <span class="cuisine-tag">${recipe.cuisine}</span>
                                <span>${recipe.time}</span>
                                <span>${recipe.difficulty}</span>
                            </div>
                            <div class="ingredients-preview">
                                <strong>Ingrédients principaux:</strong> ${recipe.ingredients.slice(0, 3).join(', ')}${recipe.ingredients.length > 3 ? '...' : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="search-summary">
                    <p><strong>${results.length}</strong> recette(s) trouvée(s)${results.length > 12 ? ' (12 premières affichées)' : ''}</p>
                </div>
            `;
        }
        
        // Hide other sections and show search results
        document.querySelector('.generator-section').style.display = 'none';
        document.getElementById('recipe-section').style.display = 'none';
        searchResultsSection.style.display = 'block';
        
        // Scroll to results
        searchResultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    selectSearchResult(cuisine, mealType, recipeName) {
        // Find the recipe in the database
        const recipe = recipeDatabase[cuisine][mealType].find(r => r.name === recipeName);
        if (recipe) {
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

    clearSearch() {
        // Clear search inputs
        document.getElementById('search-input').value = '';
        document.getElementById('search-cuisine').value = '';
        document.getElementById('search-meal').value = '';
        document.getElementById('search-difficulty').value = '';
        
        // Hide search results and show generator form
        document.getElementById('search-results').style.display = 'none';
        document.querySelector('.generator-section').style.display = 'block';
        document.getElementById('recipe-section').style.display = 'none';
        
        // Scroll to generator
        document.querySelector('.generator-section').scrollIntoView({ behavior: 'smooth' });
    }
    showError(message) {
        this.hideLoading();
        alert(message);
    }
}

// Global variable to access UI from onclick handlers
let recipeUI;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    recipeUI = new RecipeUI();
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