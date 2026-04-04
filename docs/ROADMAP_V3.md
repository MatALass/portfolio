# Roadmap de refonte V3

## Objectif

Améliorer le portfolio sans casser son identité visuelle ni le sur-complexifier.

## Priorité 1 — Corriger la faiblesse structurelle principale

### Problème

Le contenu était trop centralisé dans un seul gros fichier.

### Action

Découper le contenu en modules spécialisés :

- config
- textes globaux
- projets
- expérience
- stack
- about
- play

### Résultat attendu

- meilleure lisibilité
- meilleure maintenabilité
- modification plus sûre des contenus

## Priorité 2 — Ajouter une validation de contenu

### Problème

Le contenu traduisible et les cartes projet pouvaient dériver sans garde-fous.

### Action

Ajouter une couche de validation qui vérifie :

- IDs cohérents entre langues
- champs obligatoires présents
- structure minimale des cartes et modales
- absence de doublons

### Résultat attendu

- moins de régressions silencieuses
- contenu plus robuste

## Priorité 3 — Renforcer la couverture de tests

### Problème

Les tests initiaux couvraient surtout la cohérence des données de base.

### Action

Étendre la suite avec :

- tests DOM de rendu
- tests modal
- tests GitHub snapshot avec fetch mocké
- tests de la section Play

### Résultat attendu

- meilleure confiance dans les refactors
- couverture front plus crédible

## Priorité 4 — Ajouter une chaîne qualité minimale

### Problème

Le projet n'avait pas encore la discipline standard d'un repo front défendable.

### Action

Ajouter :

- ESLint
- Prettier
- scripts npm dédiés
- CI GitHub Actions

### Résultat attendu

- projet plus rigoureux
- contrôle automatisé des régressions

## Priorité 5 — Améliorer la documentation

### Problème

Le README ne reflétait plus l'état réel du projet.

### Action

Réécrire la doc avec :

- architecture réelle
- conventions de modification
- commandes de test
- stratégie de déploiement
- philosophie technique du projet

### Résultat attendu

- projet plus lisible pour un recruteur ou un reviewer
- onboarding plus rapide

## Priorité 6 — Petites finitions produit

### Action

- amélioration de la gestion focus dans la modal
- meilleure configuration de l'iframe Play
- clarification des points d'entrée de configuration

### Résultat attendu

- finition plus propre
- meilleure qualité perçue
