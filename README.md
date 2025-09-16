# 🍳 Recette-IA

Un générateur de recettes intelligent propulsé par l'IA qui crée des recettes personnalisées selon vos préférences culinaires.

![Recette-IA Demo](https://github.com/user-attachments/assets/fb2ca75e-632c-48d6-9261-486b797b12b8)

## ✨ Fonctionnalités

### 🎯 Génération de recettes intelligente
- **Génération IA de recettes** : Créez des recettes uniques basées sur vos préférences
- **Cuisines variées** : Française, Italienne, Asiatique, Méditerranéenne, Mexicaine, Indienne
- **Types de repas** : Petit-déjeuner, déjeuner, dîner, dessert, collation
- **Restrictions alimentaires** : Végétarien, végétalien, sans gluten, sans lactose, cétogène
- **Temps de cuisson** : Options rapide, moyen ou long selon votre disponibilité
- **Ingrédients personnalisés** : Incorporez vos ingrédients disponibles dans la recette

### 🔍 Recherche avancée
- **Recherche intelligente** : Trouvez des recettes par nom, ingrédient, ou cuisine
- **Filtres multiples** : Cuisine, type de repas, difficulté
- **Suggestions automatiques** : Propositions de recherche en temps réel
- **Résultats pertinents** : Classement par pertinence avec mise en évidence

### 🌍 Internationalisation (i18n)
- **Support multilingue** : Interface en français et anglais
- **Commutateur de langue** : Changement de langue instantané
- **Persistance des préférences** : Mémorisation du choix de langue
- **Traductions complètes** : Interface entièrement traduite

### ♿ Accessibilité
- **Navigation clavier** : Support complet de la navigation au clavier
- **Lecteurs d'écran** : Étiquettes ARIA et annonces vocales
- **Contraste élevé** : Styles adaptés pour la visibilité
- **Lien d'évitement** : Accès rapide au contenu principal
- **Focus visible** : Indicateurs visuels de focus améliorés

### 📱 Progressive Web App (PWA)
- **Installation possible** : Installez l'app sur votre appareil
- **Fonctionnement hors ligne** : Accès aux recettes sans connexion
- **Cache intelligent** : Mise en cache automatique des ressources
- **Mises à jour automatiques** : Notifications de nouvelles versions
- **Mode standalone** : Expérience d'application native

### 📊 Analytics respectueuses de la vie privée
- **Opt-in uniquement** : Aucun tracking par défaut
- **Respect Do Not Track** : Honore les préférences de confidentialité
- **Sans cookies** : Tracking sans cookies tiers
- **Données anonymes** : Aucune donnée personnelle collectée
- **Contrôle utilisateur** : Activation/désactivation facile

### 📱 Mobile First
- **Interface responsive** : Optimisée pour tous les écrans
- **Actions rapides mobiles** : Boutons flottants pour navigation rapide
- **Touch-friendly** : Interface adaptée au tactile
- **Performance mobile** : Optimisée pour les connexions lentes

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

### Installation PWA

L'application peut être installée comme une Progressive Web App :

1. **Sur desktop** : Recherchez l'icône d'installation dans la barre d'adresse
2. **Sur mobile** : Utilisez "Ajouter à l'écran d'accueil" dans le menu du navigateur
3. **Notification automatique** : L'app vous proposera l'installation lors de votre visite

### Configuration Analytics (Optionnelle)

Pour activer les analytics respectueuses de la vie privée :

1. **Modifiez `services/analytics.js`** :
   ```javascript
   const ANALYTICS_PROVIDER_URL = 'https://votre-instance-plausible.com/js/script.js';
   const ANALYTICS_DATA_DOMAIN = 'votre-domaine.com';
   ```

2. **Providers supportés** :
   - [Plausible Analytics](https://plausible.io/) (recommandé)
   - [Umami](https://umami.is/)
   - Tout provider respectueux de la vie privée

3. **Fonctionnalités** :
   - Opt-in uniquement (désactivé par défaut)
   - Respect du Do Not Track
   - Sans cookies
   - Données anonymisées

### Configuration i18n

Pour ajouter d'autres langues :

1. **Modifiez `ui/i18n.js`** :
   ```javascript
   const translations = {
     'votre.cle': {
       fr: 'Texte français',
       en: 'English text',
       es: 'Texto español' // Nouvelle langue
     }
   };
   ```

2. **Ajoutez le bouton de langue dans `index.html`** :
   ```html
   <button type="button" class="locale-btn" data-locale="es">ES</button>
   ```

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

### Frontend
- **HTML5** : Structure sémantique moderne avec microdata Schema.org
- **CSS3** : Styles avancés avec gradients, animations et responsive design
- **JavaScript ES6+ Modules** : Architecture modulaire sans bundler
- **Web APIs** : Service Workers, Web App Manifest, Local Storage

### PWA Technologies
- **Service Worker** : Cache intelligent et fonctionnement hors ligne
- **Web App Manifest** : Installation et intégration système
- **Cache API** : Gestion automatique du cache
- **Background Sync** : Synchronisation en arrière-plan (future)

### Accessibilité
- **ARIA** : Étiquettes et rôles pour les lecteurs d'écran
- **WCAG 2.1** : Conformité aux standards d'accessibilité
- **Navigation clavier** : Support complet du clavier
- **Annonces vocales** : Régions live pour les mises à jour

### Architecture
- **ES Modules natifs** : Pas de bundler requis
- **Architecture MVC** : Séparation claire des responsabilités
- **Dependency Injection** : Couplage faible entre modules
- **Event-driven** : Communication par événements

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
├── index.html              # Page principale avec SEO et PWA
├── styles.css              # Feuilles de style avec accessibilité
├── main.js                 # Point d'entrée et orchestrateur
├── sw.js                   # Service Worker pour PWA
├── manifest.webmanifest    # Manifest PWA
├── data/
│   └── recipeDatabase.js   # Base de données des recettes
├── core/
│   ├── generator.js        # Générateur IA de recettes
│   └── search.js           # Moteur de recherche avancé
├── ui/
│   ├── i18n.js            # Système d'internationalisation
│   └── ui.js              # Interface utilisateur et interactions
├── services/
│   ├── analytics.js        # Analytics respectueuses vie privée
│   └── pwa.js             # Gestion PWA et installation
└── README.md              # Documentation
```

## 🎨 Personnalisation

### Ajouter de nouvelles cuisines

Modifiez `data/recipeDatabase.js` :

```javascript
export const recipeDatabase = {
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

- **Changez les couleurs** : Modifiez les gradients CSS
- **Ajustez les tailles** : Personnalisez les tailles de police et espacements  
- **Animations** : Modifiez les transitions et animations
- **Responsive** : Adaptez les breakpoints media queries

### Configurer les analytics

Dans `services/analytics.js` :

```javascript
// Configuration Plausible
const ANALYTICS_PROVIDER_URL = 'https://plausible.io/js/script.js';
const ANALYTICS_DATA_DOMAIN = 'votre-domaine.com';

// Configuration Umami
const ANALYTICS_PROVIDER_URL = 'https://umami.votre-domaine.com/umami.js';
const ANALYTICS_DATA_DOMAIN = 'votre-domaine.com';
```

### Personnaliser le PWA

Modifiez `manifest.webmanifest` :

```json
{
    "name": "Votre App de Recettes",
    "short_name": "VotreApp",
    "start_url": "./",
    "theme_color": "#votre-couleur",
    "background_color": "#votre-couleur"
}
```

## 📱 Compatibilité

### Navigateurs supportés
- ✅ **Chrome/Chromium 80+** : Support complet PWA
- ✅ **Firefox 75+** : Toutes fonctionnalités sauf installation PWA
- ✅ **Safari 13+** : Support partiel PWA
- ✅ **Edge 80+** : Support complet
- ✅ **Appareils mobiles** : iOS 13+ et Android 7+

### Fonctionnalités par navigateur

| Fonctionnalité | Chrome | Firefox | Safari | Edge |
|----------------|--------|---------|--------|------|
| ES Modules | ✅ | ✅ | ✅ | ✅ |
| Service Worker | ✅ | ✅ | ✅ | ✅ |
| Web App Manifest | ✅ | ⚠️ | ⚠️ | ✅ |
| Installation PWA | ✅ | ❌ | ⚠️ | ✅ |
| Notifications | ✅ | ✅ | ❌ | ✅ |

⚠️ = Support partiel, ❌ = Non supporté

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
