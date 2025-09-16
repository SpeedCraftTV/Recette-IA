# 🍳 Recette-IA

Un générateur de recettes intelligent propulsé par l'IA qui crée des recettes personnalisées selon vos préférences culinaires.

![Recette-IA Demo](https://github.com/user-attachments/assets/d2a8c47f-f310-418d-bf7a-e75060cd4eef)

## ✨ Nouvelles Fonctionnalités (Version 2.0)

### 🌐 **Application Web Progressive (PWA)**
- **Installation**: Installable comme une application native sur mobile et desktop
- **Mode hors ligne**: Fonctionne sans connexion internet grâce au service worker
- **Cache intelligent**: Cache-first pour les assets, network-first pour le contenu
- **Notifications push**: Support des notifications (optionnel)

### 🌍 **Internationalisation (i18n)**
- **Multilingue**: Interface complète en français et anglais
- **Commutation instantanée**: Changez de langue en temps réel
- **Persistance**: Votre choix de langue est sauvegardé
- **Accessibilité**: Labels et ARIA en plusieurs langues

### 🔒 **Analytics Respectueux de la Vie Privée**
- **Opt-in uniquement**: Aucun tracking par défaut
- **Respect Do Not Track**: Honore les préférences de confidentialité
- **Sans cookies**: Analytics cookieless (Plausible/Umami ready)
- **Contrôle utilisateur**: Activation/désactivation facile

### ♿ **Accessibilité Avancée**
- **Navigation clavier**: Liens de saut, navigation complète au clavier
- **Lecteurs d'écran**: ARIA roles, landmarks, live regions
- **Focus visible**: Indicateurs de focus améliorés
- **Gestion des annonces**: Annonces automatiques pour les changements d'état

### 📱 **Interface Mobile Optimisée**
- **Actions rapides**: Barre d'actions flottante pour navigation rapide
- **Responsive design**: Interface adaptée à tous les écrans
- **Touch-friendly**: Interactions tactiles optimisées
- **Performance**: Chargement rapide et transitions fluides

### 🏗️ **Architecture Moderne ES6+ Modules**
- **Modularité**: Code organisé en modules ES6 spécialisés
- **Types JSDoc**: Annotations de types pour une meilleure documentation
- **Sans bundler**: Fonctionne nativement dans les navigateurs modernes
- **Maintenabilité**: Code plus facile à maintenir et étendre

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

### Fonctionnalités Principales

#### 🔍 **Recherche Avancée**
- Recherche par nom, ingrédient, ou type de cuisine
- Filtres multiples (cuisine, type de repas, difficulté)
- Suggestions en temps réel
- Résultats détaillés avec métadonnées

#### 🎯 **Génération Personnalisée**
- **11 types de cuisine** : Française, Italienne, Asiatique, Méditerranéenne, Mexicaine, Indienne, Espagnole, Allemande, Britannique, Brésilienne, Libanaise
- **5 types de repas** : Petit-déjeuner, déjeuner, dîner, dessert, collation
- **7 restrictions alimentaires** : Végétarien, végétalien, sans gluten, sans lactose, cétogène, halal, casher
- **3 temps de cuisson** : Rapide, moyen, long
- **Ingrédients personnalisés** : Incorporez vos ingrédients disponibles

#### 🌐 **Multilingue**
- **Français** : Interface complète en français
- **English** : Complete English interface
- **Commutation instantanée** : Switch languages on the fly
- **Persistance** : Your language choice is remembered

### Configuration Analytics (Optionnel)

Pour activer les analytics respectueux de la vie privée, modifiez `services/analytics.js` :

```javascript
export const ANALYTICS_CONFIG = {
  PROVIDER_URL: 'https://plausible.io/js/script.js', // Ou votre provider
  DATA_DOMAIN: 'votre-domaine.com',
  SCRIPT_ATTRIBUTES: {
    'data-domain': 'votre-domaine.com',
    'data-api': '/api/event', // Optionnel
    'defer': true
  }
};
```

Providers supportés :
- **Plausible** : Analytics simple et respectueux
- **Umami** : Self-hosted, open source
- **Simple Analytics** : GDPR compliant

## 🛠️ Architecture Technique

### Structure des Modules ES6

```
Recette-IA/
├── index.html              # Page principale avec SEO optimisé
├── main.js                 # Bootstrap de l'application
├── styles.css              # Styles avec accessibilité
├── manifest.webmanifest    # Manifest PWA
├── sw.js                   # Service Worker
├── offline.html            # Page hors ligne
├── data/
│   └── recipeDatabase.js   # Base de données des recettes
├── core/
│   ├── generator.js        # Moteur de génération IA
│   └── search.js           # Service de recherche
├── ui/
│   ├── i18n.js            # Système d'internationalisation
│   └── ui.js              # Interface utilisateur
└── services/
    ├── analytics.js        # Analytics opt-in
    └── pwa.js             # Service PWA
```

### 🎨 **SEO & Performance**
- **Meta tags optimisés** : Description, Open Graph, Twitter Cards
- **Schema.org** : JSON-LD structured data
- **Canonical URLs** : URLs canoniques pour GitHub Pages
- **Performance** : Lazy loading, cache intelligent
- **Lighthouse Score** : Optimisé pour de hauts scores

### 🔧 **PWA Features**
- **Installable** : Prompt d'installation automatique
- **Offline-first** : Fonctionne sans connexion
- **App-like** : Expérience application native
- **Fast loading** : Cache intelligent et optimisations

## 🤖 **Intelligence Artificielle**

L'IA de Recette-IA utilise :

- **Base de données enrichie** : Plus de 200 recettes organisées par cuisine
- **Modifications diététiques intelligentes** : Adaptation automatique selon les restrictions
- **Adaptation temporelle** : Ajustement des temps de cuisson selon les préférences
- **Intégration d'ingrédients** : Incorporation intelligente des ingrédients disponibles
- **Conseils personnalisés** : Tips culinaires contextuels selon la cuisine choisie

## 📱 **Compatibilité & Support**

### Navigateurs
- ✅ Chrome/Chromium 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ iOS Safari 13+
- ✅ Android Chrome 80+

### PWA Support
- ✅ Installation sur iOS/Android
- ✅ Mode standalone
- ✅ Service Worker
- ✅ Offline capabilities
- ✅ App icons & splash screens

## 🔧 Développement

### Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -am 'Ajout nouvelle fonctionnalité'`)
4. Push sur la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

### Guidelines

- **ES6+ Modules** : Utilisez la syntaxe moderne
- **JSDoc** : Documentez vos fonctions
- **Accessibilité** : Respectez les standards ARIA
- **i18n** : Ajoutez les traductions pour les nouvelles chaînes
- **Progressive Enhancement** : Assurez-vous que les fonctionnalités de base marchent partout

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 🤝 Remerciements

- **Communauté Open Source** pour les outils et libraries
- **Contributors** pour leurs améliorations et suggestions
- **Users** pour leurs retours et tests

---

**Bon appétit et bonnes créations culinaires ! 👨‍🍳👩‍🍳**

*Fait avec ❤️ et beaucoup de café ☕*
