# 🌍 Wander - Recommandation de destinations personnalisées

Wander est une application web fullstack permettant aux utilisateurs de découvrir des destinations adaptées à leurs envies. Grâce à un système de filtres multicritères (atmosphère, type de lieu, budget, saison, durée, accessibilité...), l'utilisateur obtient des recommandations de lieux uniques à explorer.

> Projet réalisé dans le cadre de la formation Développeur Web Fullstack à la Wild Code School Toulouse.
> 
Le défi ? Réaliser en 3 jours un projet fullstack complet !

---

## 🚀 Fonctionnalités principales

- Recherche de destinations avec filtres combinables
- Affichage dynamique des résultats sous forme de cartes
- Détail complet d'une destination (galerie, description immersive, accessibilité…)
- Backend structuré et sécurisé via une API REST
- Modélisation relationnelle de la base de données
- Conception graphique et prototypage réalisés en autonomie

- 📁 Un dossier `ressources` est disponible ici :  
`wander-project/client-src/assets/ressources`  
Il contient :
- La modélisation de la base de données
- Le backlog fonctionnel

---

---

## 🛠️ Stack technique

### 🎨 Design

- **Adobe Illustrator** – Création de l’identité visuelle (logo, charte graphique)
- **Figma** – Prototypage de l’interface utilisateur  
  👉 [Voir la maquette Figma](https://www.figma.com/proto/GbZVgfQH0GgRcvDupyTnHS/Untitled?node-id=2-2&starting-point-node-id=2%3A2&t=3Yc38YtQ1WCQrrGC-1)

### 🧠 Backend

- **Node.js**
- **Express**
- **Sequelize** (ORM)
- **MySQL**
- **TypeScript**
- **Dotenv**

---

### 💻 Frontend

- **React**
- **TypeScript**
- **Vite**
- **React Router DOM**
- **Classnames**
- **ESLint / Prettier** pour la qualité de code

---

Installation et lancement

Pour exécuter le projet en local :

    Cloner le dépôt :

git clone <URL_DU_REPO>
cd wander-project

    Installer les dépendances :

cd server && npm install
cd ../client && npm install

    Lancer l’application :

✅ Option 1 – Dans deux terminaux séparés

 npm run dev

✅ Option 2 – Dans deux terminaux séparés

    Backend :

cd server
npm run dev

    Frontend :

cd client
npm run dev

