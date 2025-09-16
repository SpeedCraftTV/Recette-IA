# 🍳 Recette-IA

Un générateur de recettes intelligent propulsé par l'IA qui crée des recettes personnalisées selon vos préférences culinaires.

## 🌐 Accès direct au site

**[🚀 Visitez Recette-IA en ligne](https://speedcrafttv.github.io/Recette-IA/)**

![Recette-IA Demo](https://github.com/user-attachments/assets/4124daba-5271-4cae-b21d-5316de3da91b)

## ✨ Fonctionnalités

- **Génération IA de recettes** : Créez des recettes uniques basées sur vos préférences
- **Cuisines variées** : Française, Italienne, Asiatique, Méditerranéenne, Mexicaine, Indienne
- **Types de repas** : Petit-déjeuner, déjeuner, dîner, dessert, collation
- **Restrictions alimentaires** : Végétarien, végétalien, sans gluten, sans lactose, cétogène
- **Temps de cuisson** : Options rapide, moyen ou long selon votre disponibilité
- **Ingrédients personnalisés** : Incorporez vos ingrédients disponibles dans la recette
- **Interface responsive** : Optimisée pour desktop et mobile
- **Design moderne** : Interface élégante avec animations fluides

## 🚀 Utilisation

### Installation et lancement

1. **Clonez le repository** :
   ```bash
   git clone https://github.com/SpeedCraftTV/Recette-IA.git
   cd Recette-IA
   ```

2. **Lancez un serveur web local** :
   ```bash
   # Avec Python 3
   python3 -m http.server 8000
   
   # Ou avec Python 2
   python -m SimpleHTTPServer 8000
   
   # Ou avec Node.js (si npx est installé)
   npx serve .
   ```

3. **Ouvrez votre navigateur** et allez sur `http://localhost:8000`

### Comment générer une recette

1. **Sélectionnez vos préférences** :
   - Type de cuisine (française, italienne, etc.)
   - Type de repas (petit-déjeuner, déjeuner, etc.)
   - Restrictions alimentaires si nécessaire
   - Temps de cuisson souhaité

2. **Ajoutez des ingrédients** (optionnel) :
   - Listez les ingrédients que vous avez sous la main
   - Séparez-les par des virgules

3. **Générez votre recette** :
   - Cliquez sur "Générer une recette"
   - Attendez quelques secondes que l'IA traite votre demande

4. **Profitez de votre recette** :
   - Consultez la liste d'ingrédients
   - Suivez les instructions étape par étape
   - Lisez les conseils du chef

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique moderne
- **CSS3** : Styles avancés avec gradients et animations
- **JavaScript ES6+** : Logique métier et interactions
- **IA Simulée** : Algorithme intelligent de génération de recettes

## 📱 Compatibilité

- ✅ Chrome/Chromium 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Appareils mobiles (iOS/Android)

## 🤖 Comment fonctionne l'IA

L'IA de Recette-IA utilise :

- **Base de données de recettes** organisée par cuisine et type de repas
- **Modifications diététiques** intelligentes selon les restrictions
- **Adaptation temporelle** des recettes selon le temps disponible
- **Intégration d'ingrédients** personnalisés dans les recettes existantes
- **Conseils culinaires** contextuels selon le type de cuisine

## 🔧 Structure des fichiers

```
Recette-IA/
├── index.html          # Page principale
├── styles.css          # Feuilles de style
├── script.js           # Logique JavaScript et IA
└── README.md          # Documentation
```

## 🎨 Personnalisation

Vous pouvez facilement personnaliser Recette-IA :

### Ajouter de nouvelles cuisines

Modifiez l'objet `recipeDatabase` dans `script.js` :

```javascript
const recipeDatabase = {
    nouvelleCuisine: {
        'déjeuner': [
            {
                name: 'Nom de la recette',
                ingredients: ['ingrédient 1', 'ingrédient 2'],
                instructions: ['étape 1', 'étape 2'],
                time: '30 minutes',
                difficulty: 'Facile',
                servings: '4 personnes'
            }
        ]
    }
};
```

### Modifier les styles

Personnalisez l'apparence dans `styles.css` :

- Changez les couleurs principales en modifiant les gradients
- Ajustez les tailles de police et espacements
- Modifiez les animations et transitions

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou suggestion, ouvrez une issue sur GitHub.

---

**Bon appétit et bonnes créations culinaires ! 👨‍🍳👩‍🍳**
