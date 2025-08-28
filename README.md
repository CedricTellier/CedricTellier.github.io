# Mon Portfolio

Ce projet est un site web personnel développé avec Next.js et Tailwind CSS.  
Il présente mon parcours, mes compétences, mon CV et mes liens professionnels (GitHub, LinkedIn).  
L'objectif est de proposer une vitrine moderne, responsive et interactive pour me présenter en tant que développeur et engineering manager.

> **Le projet est hébergé sur Vercel à l'adresse suivante : [https://portfolio-cedric-telliers-projects.vercel.app/](https://portfolio-cedric-telliers-projects.vercel.app/)**

## Fonctionnalités principales

- Présentation animée avec effet "machine à écrire"
- Mode sombre et clair avec switch de thème
- Navbar avec accès rapide à GitHub, LinkedIn et téléchargement du CV
- Footer avec accès au code source
- Design inspiré du rétro gaming (Super Mario) et totalement responsive

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Node.js (version 12 ou supérieure)
- npm (ou yarn)

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/cedrictellier/CedricTellier.github.io.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd CedricTellier.github.io
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

## Démarrage

Pour démarrer le serveur de développement, exécutez :

```bash
npm run dev
```

ou

```bash
yarn dev
```

Votre application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du projet

- **public/** : Contient les fichiers statiques, y compris l'icône du site et le CV.
- **src/pages/** : Contient les pages de l'application, dont la page d'accueil.
- **src/components/** : Contient les composants réutilisables, comme la barre de navigation, le switch de thème, le footer, etc.
- **src/styles/** : Contient les fichiers de styles globaux.
- **tailwind.config.js** : Configuration de Tailwind CSS.
- **postcss.config.js** : Configuration pour PostCSS.
- **package.json** : Liste des dépendances et scripts du projet.
- **tsconfig.json** : Configuration TypeScript.

## Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à soumettre des pull requests ou à signaler des problèmes.

## Licence

Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails.