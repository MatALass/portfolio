# Mathieu Portfolio — V3 Refactor

Portfolio statique refactoré proprement à partir d'un fichier HTML monolithique, sans perdre la direction artistique ni la logique produit du portfolio original.

## Objectif

Cette V3 ne cherche pas à changer l'identité du portfolio. Elle cherche à rendre le projet plus défendable techniquement :

- architecture front plus lisible
- contenu éditable mieux découpé
- validation du contenu
- tests DOM et tests de cohérence
- chaîne qualité minimale
- base CI pour éviter les régressions

## Principes de la refonte

- garder un **site statique simple à déployer**
- éviter une migration artificielle vers React ou un build step lourd
- renforcer la **maintenabilité** et la **lisibilité**
- traiter le portfolio comme un vrai projet front, pas comme une simple page perso

## Architecture

```text
portfolio-refactored/
├── .github/
│   └── workflows/
│       └── ci.yml
├── assets/
│   └── css/
│       └── main.css
├── src/
│   └── js/
│       ├── app.js
│       ├── data/
│       │   ├── config.js
│       │   ├── content.js
│       │   └── content/
│       │       ├── about.js
│       │       ├── experience.js
│       │       ├── general.js
│       │       ├── index.js
│       │       ├── play.js
│       │       ├── projects.js
│       │       └── stack.js
│       ├── features/
│       │   ├── cursor.js
│       │   ├── github-snapshot.js
│       │   ├── modal.js
│       │   ├── navigation.js
│       │   └── playable-demo.js
│       ├── render/
│       │   ├── projects.js
│       │   └── translations.js
│       ├── utils/
│       │   ├── github.js
│       │   └── path.js
│       └── validation/
│           └── content.js
├── tests/
│   ├── content.test.js
│   ├── dom-render.test.js
│   ├── dom-test-helpers.js
│   ├── github-snapshot.test.js
│   ├── github.test.js
│   └── modal-play.test.js
├── .prettierignore
├── .prettierrc.json
├── eslint.config.js
├── index.html
└── package.json
```

## Ce qui a changé en V3

### 1. Split du contenu

Le gros `content.js` a été découpé en sous-modules :

- `general.js`
- `projects.js`
- `experience.js`
- `stack.js`
- `about.js`
- `play.js`
- `config.js`

Résultat : le contenu reste centralisé, mais il n'est plus monolithique.

### 2. Validation du contenu

`src/js/validation/content.js` vérifie :

- la présence des champs requis pour chaque projet
- la cohérence des IDs entre langues
- l'absence de doublons
- la structure minimale des listes et liens

### 3. Tests renforcés

Le projet inclut maintenant :

- tests de cohérence des traductions
- tests de validation structurelle du contenu
- tests des helpers GitHub
- tests DOM de rendu
- tests de modal
- tests du bloc GitHub snapshot
- tests de la section Play

### 4. Chaîne qualité minimale

Le projet ajoute :

- ESLint
- Prettier
- script `check`
- GitHub Actions CI

## Comment modifier le portfolio

### Modifier les projets mis en avant

Éditer :

- `src/js/data/content/projects.js`

### Modifier les textes globaux

Éditer :

- `src/js/data/content/general.js`
- `src/js/data/content/experience.js`
- `src/js/data/content/stack.js`
- `src/js/data/content/about.js`
- `src/js/data/content/play.js`

### Modifier les constantes de configuration

Éditer :

- `src/js/data/config.js`

Tu y trouveras notamment :

- le username GitHub public
- l'URL de la démo embarquée

## Lancer le projet en local

```bash
python -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

## Lancer les tests

```bash
node --test
```

ou :

```bash
npm test
```

## Lancer tous les checks

Après installation des dépendances :

```bash
npm install
npm run check
```

## Déploiement

Le projet reste volontairement **sans build step** pour rester compatible avec un hébergement statique simple :

- GitHub Pages
- Netlify
- Vercel (mode statique)

## Pourquoi cette approche est la bonne

Je déconseille ici une migration directe vers React ou Next.js. Ce portfolio n'a pas besoin d'une stack plus lourde pour devenir meilleur. La bonne décision est de garder :

- la simplicité d'un site statique
- la qualité visuelle actuelle
- une architecture plus rigoureuse
- une base de tests et de validation crédible

## Niveau actuel

Cette V3 vise un portfolio :

- plus propre à maintenir
- plus crédible techniquement
- plus facile à faire évoluer sans casser le rendu
- plus défendable comme vrai projet front
