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
      'The value lies in a complete pipeline covering data ingestion, feature engineering, training, and evaluation.',
    status: 'Work in progress',
    focus: 'Dataset pipeline, features, evaluation, ML workflow structure',
    stack: 'Python, pandas, scikit-learn, APIs',
    tags: ['Python', 'pandas', 'scikit-learn', 'ML', 'Sports analytics'],
    quote:
      'I wanted a machine learning project that could survive beyond a single experiment.',
    summary:
      'This project builds a full ML pipeline around football match prediction: data acquisition, feature engineering, model training, and evaluation. It uses historical match data, structured features, and supervised models to produce measurable predictions instead of isolated experiments.',
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
      [
        'Signal',
        'End-to-end ML pipeline: dataset → features → training → evaluation',
      ],
      [
        'Why it matters',
        'Demonstrates ability to move from ML experimentation to maintainable data workflows',
      ],
    ],
    links: [['GitHub', 'https://github.com/MatALass/footpredict-pl', true]],
  },
  fr: {
    id: 'footpredict',
    title: 'FootPredict',
    badge: 'ML',
    badgeClass: 'terra',
    category: 'Machine learning',
    shortPitch:
      'Un projet de prédiction football conçu comme une pipeline ML maintenable, et non comme un simple notebook expérimental.',
    shortDescription:
      'La valeur réside dans une pipeline complète couvrant l’ingestion, le feature engineering, l’entraînement et l’évaluation.',
    status: 'Work in progress',
    focus: 'Pipeline dataset, features, évaluation, structure de workflow ML',
    stack: 'Python, pandas, scikit-learn, APIs',
    tags: ['Python', 'pandas', 'scikit-learn', 'ML', 'Sports analytics'],
    quote:
      'Je voulais un projet de machine learning capable de survivre au-delà d’une seule expérience.',
    summary:
      'Ce projet construit une pipeline ML complète autour de la prédiction de matchs de football : acquisition des données, feature engineering, entraînement et évaluation des modèles. Il s’appuie sur des données historiques, des features structurées et des modèles supervisés pour produire des prédictions mesurables plutôt que des expériences isolées.',
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
      [
        'Signal',
        'Pipeline ML end-to-end : dataset → features → entraînement → évaluation',
      ],
      [
        'Pourquoi il compte',
        'Montre la capacité à passer de l’expérimentation ML à un workflow data maintenable',
      ],
    ],
    links: [['GitHub', 'https://github.com/MatALass/footpredict-pl', true]],
  },
};
