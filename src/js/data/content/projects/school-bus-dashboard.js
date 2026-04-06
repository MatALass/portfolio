export const schoolBusDashboard = {
  en: {
    id: 'school-bus-dashboard',
    title: 'School Bus Decision System',
    badge: 'Data',
    badgeClass: 'indigo',
    category: 'Applied analytics',
    shortPitch:
      'A data-driven prioritization system for electric school bus deployment, combining analytics, scoring, and public-facing visualization.',
    shortDescription:
      'The project is valuable because it moves beyond a dataset toward operational prioritization logic and decision support.',
    status: 'Published project',
    focus: 'Decision scoring, operational analytics, structured outputs',
    stack: 'Python, Streamlit, pandas, scoring logic',
    tags: ['Python', 'Streamlit', 'Analytics', 'Scoring', 'Decision support'],
    quote:
      'Useful analytics should help someone understand an operational situation faster and more clearly.',
    summary:
      'This project is closer to applied analytics than simple exploration. It takes a public problem, structures the criteria, and translates the data into a prioritization system that can be explained.',
    context:
      'The main challenge is not only cleaning and aggregating public transport-related data, but turning it into a decision system with explicit assumptions and usable outputs.',
    architecture:
      'The architecture combines data preparation, scoring logic, prioritization outputs, and a dashboard layer. The important design choice is to make the prioritization logic readable instead of hiding it behind opaque charts.',
    decisions: [
      'Treat prioritization as a transparent scoring problem.',
      'Keep outputs interpretable for a non-technical reader.',
      'Use the dashboard to expose reasoning, not only final rankings.',
    ],
    proof: [
      'You can build applied analytics with explicit decision-support intent.',
      'You know how to translate data into prioritization logic.',
      'You can connect analytical framing with public-facing dashboard delivery.',
    ],
    meta: [
      ['Role', 'Builder of the decision workflow and dashboard'],
      ['Signal', 'Analytics + scoring + interactive delivery'],
      [
        'Why it matters',
        'Strong applied-data project with clearer operational value',
      ],
    ],
    links: [
      [
        'GitHub',
        'https://github.com/MatALass/school-bus-decision-system',
        true,
      ],
    ],
  },
  fr: {
    id: 'school-bus-dashboard',
    title: 'School Bus Decision System',
    badge: 'Data',
    badgeClass: 'indigo',
    category: 'Analytics appliquée',
    shortPitch:
      'Un système de priorisation piloté par la donnée pour le déploiement de bus scolaires électriques, combinant analytics, scoring et visualisation publique.',
    shortDescription:
      'Le projet est intéressant parce qu’il dépasse le dataset pour proposer une logique de priorisation opérationnelle et d’aide à la décision.',
    status: 'Projet publié',
    focus: 'Scoring décisionnel, analytics opérationnelle, sorties structurées',
    stack: 'Python, Streamlit, pandas, logique de scoring',
    tags: ['Python', 'Streamlit', 'Analytics', 'Scoring', 'Decision support'],
    quote:
      'Une analytics utile doit aider quelqu’un à comprendre une situation opérationnelle plus vite et plus clairement.',
    summary:
      'Ce projet se rapproche davantage d’une analytics appliquée que d’une simple exploration. Il prend un problème public, structure les critères et transforme la donnée en système de priorisation explicable.',
    context:
      'Le vrai défi n’est pas seulement de nettoyer et agréger des données publiques liées au transport, mais d’en faire un système décisionnel avec des hypothèses explicites et des sorties utilisables.',
    architecture:
      'L’architecture combine préparation des données, logique de scoring, sorties de priorisation et couche dashboard. Le choix important consiste à rendre la logique lisible plutôt qu’à la cacher derrière des visualisations opaques.',
    decisions: [
      'Traiter la priorisation comme un problème de scoring transparent.',
      'Garder des sorties interprétables pour un lecteur non technique.',
      'Utiliser le dashboard pour exposer le raisonnement, pas seulement le classement final.',
    ],
    proof: [
      'Tu sais construire une analytics appliquée avec intention claire d’aide à la décision.',
      'Tu sais traduire la donnée en logique de priorisation.',
      'Tu sais relier cadrage analytique et delivery dashboard public.',
    ],
    meta: [
      ['Rôle', 'Builder du workflow décisionnel et du dashboard'],
      ['Signal', 'Analytics + scoring + delivery interactif'],
      [
        'Pourquoi il compte',
        'Projet data appliqué avec valeur opérationnelle plus nette',
      ],
    ],
    links: [
      [
        'GitHub',
        'https://github.com/MatALass/school-bus-decision-system',
        true,
      ],
    ],
  },
};
