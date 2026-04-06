export const footpredict = {
  en: {
    id: 'footpredict',
    title: 'FootPredict',
    badge: 'ML',
    badgeClass: 'terra',
    category: 'Machine learning',
    shortPitch:
      'A football prediction project designed as a maintainable workflow rather than a disposable notebook.',
    shortDescription:
      'The value is in the full pipeline: data ingestion, feature engineering, training logic, evaluation, and long-term extensibility toward backtesting.',
    status: 'Work in progress',
    focus: 'Dataset pipeline, features, evaluation, ML workflow structure',
    stack: 'Python, pandas, scikit-learn, APIs',
    tags: ['Python', 'pandas', 'scikit-learn', 'ML', 'Sports analytics'],
    quote:
      'I wanted a machine learning project that could survive beyond a single experiment.',
    summary:
      'The goal is not only to predict football matches, but to build a reusable workflow around data acquisition, feature generation, model training, and evaluation.',
    context:
      'The project started from sports prediction curiosity, but the real challenge quickly became architectural: turning a modeling idea into a maintainable system with explicit stages.',
    architecture:
      'The intended architecture separates source ingestion, validation, feature generation, training, prediction, and later backtesting. That structure matters more than one isolated model score.',
    decisions: [
      'Treat ingestion and feature engineering as first-class project layers.',
      'Favor explicit workflow steps over notebook sprawl.',
      'Leave room for future ROI or betting logic without polluting the initial version.',
    ],
    proof: [
      'You can move an ML idea toward a cleaner engineering implementation.',
      'You understand that maintainability matters in data projects too.',
      'You think about extensibility and evaluation, not only raw model output.',
    ],
    meta: [
      ['Role', 'End-to-end builder'],
      ['Signal', 'API → dataset → features → model evaluation flow'],
      ['Why it matters', 'Good ML complement to a BI / analytics portfolio'],
    ],
    links: [['GitHub', 'https://github.com/MatALass/footpredict', true]],
  },
  fr: {
    id: 'footpredict',
    title: 'FootPredict',
    badge: 'ML',
    badgeClass: 'terra',
    category: 'Machine learning',
    shortPitch:
      'Un projet de prédiction football conçu comme un workflow maintenable plutôt qu’un notebook jetable.',
    shortDescription:
      'La valeur est dans la pipeline complète : ingestion des données, feature engineering, logique d’entraînement, évaluation et extensibilité long terme vers le backtesting.',
    status: 'Work in progress',
    focus: 'Pipeline dataset, features, évaluation, structure de workflow ML',
    stack: 'Python, pandas, scikit-learn, APIs',
    tags: ['Python', 'pandas', 'scikit-learn', 'ML', 'Sports analytics'],
    quote:
      'Je voulais un projet de machine learning capable de survivre au-delà d’une seule expérience.',
    summary:
      'L’objectif n’est pas seulement de prédire des matchs, mais de construire un workflow réutilisable autour de l’acquisition des données, de la génération de features, de l’entraînement et de l’évaluation.',
    context:
      'Le projet part d’une curiosité pour la prédiction sportive, mais le vrai défi est rapidement devenu architectural : transformer une idée de modélisation en système maintenable avec des étapes explicites.',
    architecture:
      'L’architecture visée sépare ingestion, validation, génération de features, entraînement, prédiction puis backtesting. Cette structure compte plus qu’un score isolé de modèle.',
    decisions: [
      'Traiter l’ingestion et le feature engineering comme des couches de premier niveau.',
      'Privilégier des étapes de workflow explicites au chaos des notebooks.',
      'Laisser de la place pour une future logique ROI / betting sans polluer la première version.',
    ],
    proof: [
      'Tu sais pousser une idée ML vers une implémentation engineering plus propre.',
      'Tu comprends que la maintenabilité compte aussi dans les projets data.',
      'Tu réfléchis à l’extensibilité et à l’évaluation, pas seulement à la sortie brute du modèle.',
    ],
    meta: [
      ['Rôle', 'Builder end-to-end'],
      ['Signal', 'Workflow API → dataset → features → évaluation modèle'],
      ['Pourquoi il compte', 'Bon complément ML à un portfolio BI / analytics'],
    ],
    links: [['GitHub', 'https://github.com/MatALass/footpredict', true]],
  },
};
