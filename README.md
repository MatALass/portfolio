# Portfolio Front-End Refactor

Refactor modulaire du portfolio statique initial.

## Objectif

Conserver le rendu, le contenu et la logique produit du portfolio existant, tout en supprimant le principal défaut technique : tout le site était concentré dans un unique fichier HTML avec CSS et JavaScript inline.

## Ce qui a été refactoré

- `index.html` garde uniquement la structure HTML et les points d'ancrage UI
- `assets/css/main.css` contient tout le style
- `src/js/data/content.js` centralise le contenu éditable : traductions, projets mis en avant, constantes de configuration
- `src/js/render/*` gère le rendu des sections traduites et des cartes projet
- `src/js/features/*` isole les comportements : modal, GitHub snapshot, démo jouable, navigation, curseur
- `tests/*` ajoute une base de tests sur les helpers et la cohérence du contenu

## Structure

```text
portfolio-refactored/
├── assets/
│   └── css/
│       └── main.css
├── src/
│   └── js/
│       ├── app.js
│       ├── data/
│       │   └── content.js
│       ├── features/
│       │   ├── cursor.js
│       │   ├── github-snapshot.js
│       │   ├── modal.js
│       │   ├── navigation.js
│       │   └── playable-demo.js
│       ├── render/
│       │   ├── projects.js
│       │   └── translations.js
│       └── utils/
│           ├── github.js
│           └── path.js
├── tests/
│   ├── content.test.js
│   └── github.test.js
├── index.html
├── package.json
└── README.md
```

## Modifier les projets mis en avant

Tout passe maintenant par `src/js/data/content.js`.

Les prochains changements doivent se faire là :

- titres
- badges
- pitchs
- stacks
- tags
- liens GitHub / live
- contenu détaillé des modales

C'est le bon point d'entrée pour remplacer la sélection actuelle sans toucher au rendu ni aux comportements globaux.

## Lancer le projet

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Lancer les tests

```bash
node --test
```

## Limites restantes

- J'ai gardé la sélection actuelle des projets, car tu n'as pas encore donné la nouvelle shortlist cible
- Le snapshot GitHub reste côté front via l'API publique GitHub
- Le projet reste volontairement sans build step pour garder un déploiement statique simple

## Recommandation

La prochaine vraie étape utile n'est pas de toucher encore à l'architecture : c'est de décider la nouvelle sélection exacte des projets à mettre en avant, puis de rationaliser le contenu dans `content.js` pour que chaque carte serve clairement ton positionnement Data / BI / Analytics Engineering.


## Tests

Run the lightweight Node test suite:

```bash
node --test
```

The suite now includes:
- data and translation integrity tests
- GitHub summary utility tests
- DOM-oriented rendering tests
- modal and playable-demo behavior tests
