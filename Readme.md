## **Travaux pratiques (TP)**

---

### **Introduction**

Dans ce TP, nous allons explorer les fonctionnalités clés de Webpack à travers la création et la gestion d'un petit projet. Le thème du projet est libre – choisissez quelque chose en rapport avec l'une de vos passions, que ce soit la musique, la photographie, le sport, la cuisine, etc. L'idée est d'obtenir une expérience pratique avec Webpack tout en travaillant sur quelque chose qui vous tient à cœur.

---

### **Atelier de configuration initiale**

**Objectif** : Mettre en place une base de projet en utilisant Webpack et explorer sa configuration initiale.

**Instructions** :
1. **Initialisation du projet** :
    - Créez un nouveau dossier pour votre projet.
    - Initialisez un nouveau projet npm en exécutant `npm init`.
    - Installez Webpack et Webpack CLI à l'aide de `npm install webpack webpack-cli --save-dev`.

2. **Configuration de Webpack** :
    - Dans la racine de votre projet, créez un fichier `webpack.config.js`.
    - Explorez et définissez les points d'entrée et de sortie pour votre application.

3. **Testez votre configuration** :
    - Créez un simple fichier `index.js` dans un dossier `src/`.
    - Exécutez Webpack pour créer le bundle à l'aide de la commande `npx webpack` (ou en ajoutant un script à votre `package.json`).
    - Vérifiez si le bundle a été généré correctement.

---

### **Intégration de CSS et de JS**

**Objectif** : Intégrez des styles et des scripts dans votre projet et familiarisez-vous avec la compilation Webpack.

**Instructions** :
1. **Ajout de styles** :
    - Créez un fichier CSS pour ajouter des styles à votre projet.
    - Intégrez ce fichier CSS dans votre `index.js` en utilisant `import`.
    - Configurez Webpack pour gérer les fichiers CSS en utilisant `css-loader` et `style-loader`.

2. **Ajout de scripts** :
    - Créez un module JavaScript supplémentaire, par exemple pour gérer un effet interactif ou une fonctionnalité spécifique de votre application.
    - Intégrez ce module dans votre `index.js`.
    - Testez le fonctionnement après compilation avec Webpack.

---

### **Optimisation et Code-splitting**

**Objectif** : Ajoutez plusieurs modules à votre projet et explorez les avantages du code-splitting avec Webpack.

**Instructions** :
1. **Ajout de modules** :
    - Pensez à plusieurs fonctionnalités ou sections de votre application et créez un module pour chacune d'elles.
    - Intégrez ces modules dans votre fichier principal `index.js`.

2. **Mise en œuvre du code-splitting** :
    - Configurez Webpack pour diviser votre code en différents bundles, en fonction des différents modules ou des routes de votre application.
    - Testez et observez la création de différents bundles lors de la compilation.

---

### **Gestion d'images et d'autres assets**

**Objectif** : Apprenez à gérer divers assets tels que les images et les polices avec Webpack.

**Instructions** :
1. **Intégration d'images** :
    - Ajoutez quelques images en rapport avec le thème de votre projet.
    - Intégrez ces images dans votre application à l'aide de JavaScript.
    - Configurez Webpack pour gérer ces images à l'aide de `file-loader` ou `url-loader`.

2. **Incorporation de polices** :
    - Si vous souhaitez utiliser une police personnalisée pour votre application, intégrez-la à l'aide de Webpack.
    - Assurez-vous de configurer Webpack pour gérer les fichiers de polices.

3. **Optimisation** :
    - Utilisez des plugins Webpack pour optimiser les images et réduire leur taille sans perdre en qualité.
    - Testez et observez les différences de taille avant et après l'optimisation.

---

À la fin de ce TP, vous devriez avoir une application fonctionnelle, compilée et optimisée grâce à Webpack. Assurez-vous de consulter la documentation officielle de Webpack si vous rencontrez des problèmes ou si vous avez des questions sur des configurations spécifiques.