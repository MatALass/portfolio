export const projectTranslations = {
  en: [
    {
      id: 'github-portfolio-auditor',
      title: 'GitHub Portfolio Auditor',
      badge: 'Featured',
      badgeClass: 'indigo',
      category: 'Portfolio engineering',
      shortPitch:
        'A deterministic audit and scoring system built to evaluate GitHub repositories with explicit portfolio-quality rules.',
      shortDescription:
        'The project turns vague GitHub impressions into structured reviews around architecture, documentation, maintainability, testing, and portfolio credibility.',
      status: 'Active project · tests-first evolution',
      focus:
        'Policy-driven scoring, repository auditing, portfolio prioritization',
      stack: 'Python, Streamlit, GitHub API, pandas',
      tags: ['Python', 'Streamlit', 'GitHub API', 'Scoring', 'Audit'],
      quote:
        'To review my own repositories more rigorously, I built the reviewer I wanted from the start.',
      summary:
        'This project came from a real portfolio problem: too many repositories, uneven quality, and no objective way to decide what should be featured. I built a deterministic system that scans repositories, scores them, and produces structured review outputs.',
      context:
        'Manual repository review becomes fuzzy as a portfolio grows. I wanted a repeatable framework that behaves more like a demanding technical reviewer than a vague checklist.',
      architecture:
        'The architecture separates collection, scanning, scoring policies, review generation, ranking, and dashboard exploration. That separation matters because the audit logic remains explainable while the system stays extensible.',
      decisions: [
        'Keep scoring policy-driven instead of hardcoding everything into one opaque pipeline.',
        'Prefer deterministic and explainable outputs over black-box review logic.',
        'Treat portfolio credibility as an engineering problem, not just a cosmetic one.',
      ],
      proof: [
        'You can formalize qualitative repository review into a structured engineering system.',
        'You think in layers: collection, rules, ranking, reporting, and portfolio decisions.',
        'You care about maintainability, explicit methodology, and defensible outputs.',
      ],
      meta: [
        ['Role', 'Designer and builder of the complete audit workflow'],
        ['Signal', 'Deterministic scoring, repository ranking, review exports'],
        [
          'Why it matters',
          'Strong fit with a data / analytics engineering portfolio narrative',
        ],
      ],
      links: [
        [
          'GitHub',
          'https://github.com/MatALass/github-portfolio-auditor',
          true,
        ],
        [
          'Live app',
          'https://matalass-portfolio-auditor.streamlit.app/',
          false,
        ],
      ],
    },
    {
      id: 'dataviz-dashboard',
      title: 'Digital Cultural Consumption Analytics',
      badge: 'BI',
      badgeClass: 'indigo',
      category: 'Business intelligence',
      shortPitch:
        'An interactive Streamlit dashboard built from socio-demographic and cultural consumption data with stronger KPI framing.',
      shortDescription:
        'This project is less about chart accumulation and more about transforming exploratory analysis into a readable dashboard with clearer analytical hierarchy.',
      status: 'Published project',
      focus: 'Dashboard framing, KPI design, analytical readability',
      stack: 'Python, Streamlit, pandas',
      tags: ['Python', 'Streamlit', 'Dataviz', 'BI'],
      quote:
        'A dashboard becomes useful when the metrics are structured enough to support interpretation, not only display.',
      summary:
        'This project pushes beyond raw analysis toward a real BI deliverable: filtered views, interpretable indicators, and a clearer analytical story for non-technical readers.',
      context:
        'It sits between exploratory analysis and communication. The challenge is not only to compute something interesting, but to make the result readable and decision-oriented.',
      architecture:
        'The project combines data preparation, KPI selection, filtering logic, and dashboard presentation. The key design choice is to organize the interface around analytical questions rather than isolated charts.',
      decisions: [
        'Prioritize readable KPI structure over visual overload.',
        'Keep a clear analytical flow: what are we looking at, why does it matter, what can we conclude?',
        'Use the dashboard as a communication layer, not only a rendering layer.',
      ],
      proof: [
        'You can build presentable, decision-oriented BI dashboards.',
        'You understand that BI includes interpretation design, not only visualization.',
        'You can turn public data into a more structured analytical product.',
      ],
      meta: [
        ['Role', 'Dashboard builder and analytical framing'],
        [
          'Signal',
          'Interactive Streamlit delivery with stronger KPI structure',
        ],
        [
          'Why it matters',
          'Solid BI showcase with clearer decision-support intent',
        ],
      ],
      links: [
        [
          'GitHub',
          'https://github.com/MatALass/digital-cultural-consumption-analytics',
          true,
        ],
      ],
    },
    {
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
    {
      id: 'anssi-vulnerability-intelligence',
      title: 'ANSSI Vulnerability Intelligence',
      badge: 'Data',
      badgeClass: 'terra',
      category: 'Data engineering / analytics',
      shortPitch:
        'An offline-first Python project for ANSSI bulletin analysis, CVE enrichment, risk prioritization, and Streamlit decision support.',
      shortDescription:
        'The project combines public-source ingestion, enrichment, consolidation, analysis, and dashboard delivery around vulnerability intelligence.',
      status: 'Published project',
      focus: 'Ingestion, enrichment, prioritization, analytics dashboard',
      stack: 'Python, pandas, scikit-learn, Streamlit',
      tags: ['Python', 'Security data', 'Streamlit', 'ETL', 'Analytics'],
      quote:
        'A strong data project should connect ingestion, structuring, analysis, and decision support in one defensible pipeline.',
      summary:
        'This project builds a full vulnerability intelligence workflow: collecting ANSSI bulletins, extracting CVEs, enriching them, analyzing the results, and surfacing them in a decision-oriented dashboard.',
      context:
        'The interesting part is not a single statistic, but the integration of multiple data sources into a coherent pipeline that supports prioritization and interpretation.',
      architecture:
        'The architecture separates bulletin ingestion, CVE extraction, enrichment, dataset consolidation, analytical reporting, and dashboard presentation. That separation makes the project credible as both a data pipeline and an analytics product.',
      decisions: [
        'Keep the workflow offline-first and reproducible.',
        'Combine enrichment and analytics instead of stopping at raw collection.',
        'Use dashboard outputs to support prioritization, not just display counts.',
      ],
      proof: [
        'You can build a multi-source pipeline with real analytical value.',
        'You understand that data products need both technical structure and decision framing.',
        'You can connect ETL, analysis, and presentation in one coherent project.',
      ],
      meta: [
        ['Role', 'Pipeline and dashboard builder'],
        [
          'Signal',
          'Public-source enrichment workflow with risk-oriented outputs',
        ],
        [
          'Why it matters',
          'One of the strongest portfolio projects for end-to-end data credibility',
        ],
      ],
      links: [
        [
          'GitHub',
          'https://github.com/MatALass/anssi-vulnerability-intelligence',
          true,
        ],
      ],
    },
    {
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
    {
      id: 'automata-toolkit',
      title: 'Automata Toolkit',
      badge: 'Engineering',
      badgeClass: 'indigo',
      category: 'Software engineering',
      shortPitch:
        'A production-grade CLI tool to parse, validate, and transform finite automata with strong test coverage and clean architecture.',
      shortDescription:
        'Even if it is not a data project, it is valuable portfolio evidence for packaging, CLI design, validation logic, and software quality discipline.',
      status: 'Published project',
      focus: 'CLI design, validation, transformations, clean architecture',
      stack: 'Python, Typer/CLI, tests, graph export',
      tags: ['Python', 'CLI', 'Testing', 'Architecture', 'Algorithms'],
      quote:
        'This project matters because it proves software engineering discipline independently from the data layer.',
      summary:
        'Automata Toolkit is a structured Python CLI that parses finite automata, validates them, applies key transformations, and exports outputs cleanly. It is especially useful in the portfolio because it shows packaging, testing, and algorithmic rigor.',
      context:
        'A portfolio focused only on dashboards can look too narrow. This project broadens the profile with a strong engineering artifact that is still rigorous and technically easy to defend.',
      architecture:
        'The project separates parsing, validation, transformations, recognition logic, and export capabilities. That modularity is what makes it useful as engineering proof rather than only an academic exercise.',
      decisions: [
        'Keep the CLI and transformation logic cleanly separated.',
        'Favor explicit validation and deterministic outputs.',
        'Use tests and packaging quality as first-class signals.',
      ],
      proof: [
        'You can build a polished and testable CLI tool.',
        'You understand modular architecture outside the dashboard space.',
        'You can show algorithmic rigor with production-style project structure.',
      ],
      meta: [
        ['Role', 'CLI designer and developer'],
        [
          'Signal',
          'Strong architecture, validation logic, and test discipline',
        ],
        [
          'Why it matters',
          'Excellent engineering complement to a data / BI profile',
        ],
      ],
      links: [['GitHub', 'https://github.com/MatALass/automata-toolkit', true]],
    },
  ],
  fr: [
    {
      id: 'github-portfolio-auditor',
      title: 'GitHub Portfolio Auditor',
      badge: 'Featured',
      badgeClass: 'indigo',
      category: 'Ingénierie portfolio',
      shortPitch:
        'Un système d’audit et de scoring déterministe conçu pour évaluer des repositories avec des règles explicites de qualité portfolio.',
      shortDescription:
        'Le projet transforme des impressions vagues sur GitHub en revues structurées autour de l’architecture, de la documentation, de la maintenabilité, des tests et de la crédibilité portfolio.',
      status: 'Projet actif · évolution pilotée par les tests',
      focus:
        'Scoring piloté par règles, audit de repositories, priorisation portfolio',
      stack: 'Python, Streamlit, GitHub API, pandas',
      tags: ['Python', 'Streamlit', 'GitHub API', 'Scoring', 'Audit'],
      quote:
        'Pour revoir mes propres repositories avec plus de rigueur, j’ai construit le reviewer que j’aurais aimé avoir dès le départ.',
      summary:
        'Le projet vient d’un vrai problème de portfolio : trop de repositories, une qualité inégale et aucun moyen objectif de décider ce qui mérite d’être mis en avant. J’ai construit un système déterministe qui scanne les repositories, les note et produit des sorties de revue structurées.',
      context:
        'La revue manuelle de repositories devient vite floue quand un portfolio grandit. Je voulais un cadre répétable, plus proche d’un reviewer technique exigeant que d’une checklist vague.',
      architecture:
        'L’architecture sépare la collecte, le scan, les politiques de scoring, la génération de revue, le ranking et l’exploration dashboard. Cette séparation garde la logique d’audit explicable tout en laissant le projet évoluer proprement.',
      decisions: [
        'Garder un scoring piloté par règles au lieu de tout coder dans une pipeline opaque.',
        'Privilégier des sorties déterministes et explicables plutôt qu’une logique boîte noire.',
        'Traiter la crédibilité portfolio comme un problème d’ingénierie, pas seulement cosmétique.',
      ],
      proof: [
        'Tu sais formaliser une revue qualitative de repositories en système d’ingénierie structuré.',
        'Tu raisonnes en couches : collecte, règles, ranking, reporting et décisions portfolio.',
        'Tu accordes de l’importance à la maintenabilité, à la méthodologie explicite et aux sorties défendables.',
      ],
      meta: [
        ['Rôle', 'Concepteur et développeur du workflow d’audit complet'],
        ['Signal', 'Scoring déterministe, ranking de repos, exports de revue'],
        [
          'Pourquoi il compte',
          'Très bon fit avec un récit data / analytics engineering',
        ],
      ],
      links: [
        [
          'GitHub',
          'https://github.com/MatALass/github-portfolio-auditor',
          true,
        ],
        [
          'App live',
          'https://matalass-portfolio-auditor.streamlit.app/',
          false,
        ],
      ],
    },
    {
      id: 'dataviz-dashboard',
      title: 'Digital Cultural Consumption Analytics',
      badge: 'BI',
      badgeClass: 'indigo',
      category: 'Business intelligence',
      shortPitch:
        'Un dashboard Streamlit interactif construit à partir de données socio-démographiques et de consommation culturelle avec un cadrage KPI plus solide.',
      shortDescription:
        'Le projet vaut moins comme accumulation de charts que comme transformation d’une analyse exploratoire en dashboard lisible avec une hiérarchie analytique plus claire.',
      status: 'Projet publié',
      focus: 'Cadrage dashboard, conception KPI, lisibilité analytique',
      stack: 'Python, Streamlit, pandas',
      tags: ['Python', 'Streamlit', 'Dataviz', 'BI'],
      quote:
        'Un dashboard devient utile quand les métriques sont assez bien structurées pour soutenir l’interprétation, pas seulement l’affichage.',
      summary:
        'Le projet va au-delà d’une analyse brute pour devenir un vrai livrable BI : vues filtrées, indicateurs interprétables et récit analytique plus clair pour un lecteur non technique.',
      context:
        'Il se situe entre exploration de données et communication. Le défi n’est pas seulement de calculer quelque chose d’intéressant, mais de rendre le résultat lisible et orienté décision.',
      architecture:
        'Le projet combine préparation des données, sélection des KPI, logique de filtres et présentation dashboard. Le choix clé est d’organiser l’interface autour de questions analytiques et non autour de charts isolés.',
      decisions: [
        'Privilégier une structure KPI lisible plutôt qu’une surcharge visuelle.',
        'Garder un flow analytique clair : que regarde-t-on, pourquoi, et que peut-on conclure ?',
        'Utiliser le dashboard comme couche de communication et pas seulement de rendu.',
      ],
      proof: [
        'Tu sais construire des dashboards BI présentables et orientés décision.',
        'Tu comprends que la BI inclut le design de l’interprétation, pas seulement la visualisation.',
        'Tu sais transformer des données publiques en produit analytique plus structuré.',
      ],
      meta: [
        ['Rôle', 'Builder du dashboard et du cadrage analytique'],
        [
          'Signal',
          'Delivery Streamlit interactif avec meilleure structure KPI',
        ],
        [
          'Pourquoi il compte',
          'Bon showcase BI avec intention décisionnelle plus nette',
        ],
      ],
      links: [
        [
          'GitHub',
          'https://github.com/MatALass/digital-cultural-consumption-analytics',
          true,
        ],
      ],
    },
    {
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
      focus:
        'Scoring décisionnel, analytics opérationnelle, sorties structurées',
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
    {
      id: 'anssi-vulnerability-intelligence',
      title: 'ANSSI Vulnerability Intelligence',
      badge: 'Data',
      badgeClass: 'terra',
      category: 'Data engineering / analytics',
      shortPitch:
        'Un projet Python offline-first pour l’analyse des bulletins ANSSI, l’enrichissement CVE, la priorisation du risque et un dashboard Streamlit orienté décision.',
      shortDescription:
        'Le projet combine ingestion de sources publiques, enrichissement, consolidation, analyse et delivery dashboard autour de la vulnérabilité.',
      status: 'Projet publié',
      focus: 'Ingestion, enrichissement, priorisation, dashboard analytique',
      stack: 'Python, pandas, scikit-learn, Streamlit',
      tags: ['Python', 'Security data', 'Streamlit', 'ETL', 'Analytics'],
      quote:
        'Un bon projet data doit relier ingestion, structuration, analyse et aide à la décision dans une pipeline défendable.',
      summary:
        'Ce projet construit un workflow complet de vulnerability intelligence : collecte des bulletins ANSSI, extraction des CVE, enrichissement, analyse puis exposition dans un dashboard orienté décision.',
      context:
        'L’intérêt n’est pas dans une seule statistique, mais dans l’intégration de plusieurs sources de données au sein d’une pipeline cohérente qui soutient la priorisation et l’interprétation.',
      architecture:
        'L’architecture sépare ingestion des bulletins, extraction des CVE, enrichissement, consolidation du dataset, reporting analytique et présentation dashboard. Cette séparation rend le projet crédible comme pipeline data et comme produit analytique.',
      decisions: [
        'Garder le workflow offline-first et reproductible.',
        'Combiner enrichissement et analyse au lieu de s’arrêter à la collecte brute.',
        'Utiliser le dashboard pour soutenir la priorisation, pas seulement afficher des volumes.',
      ],
      proof: [
        'Tu sais construire une pipeline multi-sources avec une vraie valeur analytique.',
        'Tu comprends qu’un data product a besoin de structure technique et de cadrage décisionnel.',
        'Tu sais relier ETL, analyse et présentation dans un projet cohérent.',
      ],
      meta: [
        ['Rôle', 'Builder de la pipeline et du dashboard'],
        [
          'Signal',
          'Workflow d’enrichissement sur sources publiques avec sorties orientées risque',
        ],
        [
          'Pourquoi il compte',
          'L’un des projets les plus solides pour montrer une crédibilité data end-to-end',
        ],
      ],
      links: [
        [
          'GitHub',
          'https://github.com/MatALass/anssi-vulnerability-intelligence',
          true,
        ],
      ],
    },
    {
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
        [
          'Pourquoi il compte',
          'Bon complément ML à un portfolio BI / analytics',
        ],
      ],
      links: [['GitHub', 'https://github.com/MatALass/footpredict', true]],
    },
    {
      id: 'automata-toolkit',
      title: 'Automata Toolkit',
      badge: 'Engineering',
      badgeClass: 'indigo',
      category: 'Software engineering',
      shortPitch:
        'Un outil CLI Python de niveau production pour parser, valider et transformer des automates finis avec une forte couverture de tests et une architecture propre.',
      shortDescription:
        'Même si ce n’est pas un projet data, c’est une excellente preuve portfolio sur le packaging, la conception CLI, la logique de validation et la discipline logicielle.',
      status: 'Projet publié',
      focus: 'Conception CLI, validation, transformations, architecture propre',
      stack: 'Python, CLI, tests, export de graphes',
      tags: ['Python', 'CLI', 'Testing', 'Architecture', 'Algorithms'],
      quote:
        'Ce projet compte parce qu’il prouve une discipline software engineering indépendamment de la couche data.',
      summary:
        'Automata Toolkit est un CLI Python structuré qui parse des automates finis, les valide, applique des transformations clés et exporte les résultats proprement. Il est particulièrement utile dans le portfolio parce qu’il montre packaging, testing et rigueur algorithmique.',
      context:
        'Un portfolio uniquement centré sur les dashboards peut paraître trop étroit. Ce projet élargit le profil avec un artefact d’ingénierie solide, tout en restant très défendable techniquement.',
      architecture:
        'Le projet sépare parsing, validation, transformations, logique de reconnaissance et export. C’est cette modularité qui lui donne de la valeur comme preuve d’ingénierie plutôt que comme simple exercice académique.',
      decisions: [
        'Séparer proprement la CLI et la logique de transformation.',
        'Privilégier une validation explicite et des sorties déterministes.',
        'Traiter les tests et le packaging comme des signaux de premier niveau.',
      ],
      proof: [
        'Tu sais construire un outil CLI propre, testable et abouti.',
        'Tu comprends l’architecture modulaire en dehors de l’espace dashboard.',
        'Tu peux montrer de la rigueur algorithmique dans une structure de projet de niveau production.',
      ],
      meta: [
        ['Rôle', 'Concepteur et développeur du CLI'],
        [
          'Signal',
          'Architecture solide, logique de validation et discipline de test',
        ],
        [
          'Pourquoi il compte',
          'Excellent complément engineering à un profil data / BI',
        ],
      ],
      links: [['GitHub', 'https://github.com/MatALass/automata-toolkit', true]],
    },
  ],
};
