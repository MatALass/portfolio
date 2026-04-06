export const githubPortfolioAuditor = {
  en: {
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
      'This project solves a real portfolio problem: too many repositories, uneven quality, and no objective way to decide what should be featured. I built a deterministic system that scans GitHub repositories, scores them out of 100 using explicit quality criteria, ranks them, and generates structured outputs (JSON reports, rankings, and portfolio recommendations).',
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
      [
        'Signal',
        'Deterministic scoring engine, repository ranking, structured review exports',
      ],
      [
        'Why it matters',
        'Transforms subjective portfolio review into a reproducible engineering system',
      ],
    ],
    links: [
      ['GitHub', 'https://github.com/MatALass/github-portfolio-auditor', true],
      ['Live app', 'https://matalass-portfolio-auditor.streamlit.app/', false],
    ],
  },
  fr: {
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
      'Ce projet répond à un vrai problème de portfolio : trop de repositories, une qualité inégale et aucun moyen objectif de décider lesquels mettre en avant. J’ai construit un système déterministe qui scanne les repositories GitHub, les note sur 100 à partir de critères explicites, les classe et génère des sorties structurées (rapports JSON, classements et recommandations portfolio).',
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
      [
        'Signal',
        'Moteur de scoring déterministe, classement de repositories, exports de revue structurés',
      ],
      [
        'Pourquoi il compte',
        'Transforme une revue portfolio subjective en système d’ingénierie reproductible',
      ],
    ],
    links: [
      ['GitHub', 'https://github.com/MatALass/github-portfolio-auditor', true],
      ['App live', 'https://matalass-portfolio-auditor.streamlit.app/', false],
    ],
  },
};
