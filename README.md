# Mathieu Portfolio — V4 Refactor

Portfolio statique refactoré proprement à partir d'un fichier HTML monolithique, sans perdre la direction artistique ni la logique produit du portfolio original.

## Ce que la V4 améliore

Cette V4 ne change pas le socle du projet. Elle ajoute surtout de meilleures finitions produit et une configuration plus propre :

- curseur custom rendu **optionnel** et désactivé par défaut
- liens runtime centralisés pour le GitHub public et le CV
- emplacement de CV clair et stable dans le repo
- amélioration légère de l'accessibilité avec skip link et focus visible
- métadonnées HTML un peu plus propres pour le partage/publication

## Objectif

La refonte cherche à rendre le projet plus défendable techniquement sans le sur-architecturer :

- architecture front lisible
- contenu éditable bien découpé
- validation du contenu
- tests DOM et tests de cohérence
- chaîne qualité minimale
- base CI pour éviter les régressions

## Architecture

```text
portfolio-refactored/
├── .github/
│   └── workflows/
│       └── ci.yml
├── assets/
│   ├── css/
│   │   └── main.css
│   └── docs/
│       └── README.md
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
│       │   ├── playable-demo.js
│       │   └── runtime-links.js
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
│   ├── modal-play.test.js
│   └── runtime-links.test.js
├── index.html
├── package.json
└── README.md
```

## Modifier le portfolio

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
- le chemin public du CV
- l'activation ou non du curseur custom

## Où mettre le CV

Le meilleur emplacement pour ce projet est :

```text
assets/docs/mathieu-alassoeur-cv.pdf
```

Pourquoi :

- chemin stable pour un hébergement statique
- facile à référencer dans le hero et la section contact
- pas besoin de build step
- simple à versionner si tu veux remplacer le PDF plus tard

Le repo contient déjà :

- `assets/docs/README.md`

Tu n'as qu'à déposer ton vrai PDF dans ce dossier avec le bon nom.

## Lancer le projet en local

```bash
python -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

## Qualité

Installer les dépendances :

```bash
npm install
```

Lancer tous les checks :

```bash
npm run check
```

Formater le projet :

```bash
npm run format
```

## Déploiement

Le projet reste volontairement **sans build step** pour rester compatible avec un hébergement statique simple :

- GitHub Pages
- Netlify
- Vercel en mode statique

## Choix d'architecture

Je déconseille ici une migration directe vers React ou Next.js. Ce portfolio n'a pas besoin d'une stack plus lourde pour devenir meilleur. Le bon choix reste :

- simplicité d'un site statique
- qualité visuelle actuelle
- architecture plus rigoureuse
- base de tests et de validation crédible
- finition produit progressive
