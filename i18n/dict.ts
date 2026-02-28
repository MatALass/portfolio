export type Locale = "en" | "fr";

const dict = {
  en: {
    nav: { overview: "Overview", projects: "Projects", systems: "Systems", lab: "Lab", about: "About", contact: "Contact" },
    hero: {
      name: "Mathieu Alassoeur",
      tagline: "Building reliable data systems for decision-making.",
      ctaPrimary: "Enter Projects",
      ctaSecondary: "Download CV",
      recruiterMode: "Recruiter Mode",
    },
    sections: { whatIDo: "What I build", featured: "Featured projects" },
    cards: {
      analyticsTitle: "Analytics & Dashboards",
      analyticsBody: "Turn raw datasets into explorable insights and clear KPIs.",
      automationTitle: "Automation & Reporting",
      automationBody: "Build pipelines that produce consistent outputs with less manual work.",
      qualityTitle: "Data Quality Systems",
      qualityBody: "Validate, log, and structure data for reproducibility and trust.",
    },
    metrics: {
      title: "Live metrics",
      projects: "Projects shipped",
      dashboards: "Dashboards built",
      pipelines: "Pipelines designed",
      automations: "Automation tools",
    },
    footer: { built: "Built with Next.js, Tailwind, Framer Motion, and Three.js." },
  },
  fr: {
    nav: { overview: "Aperçu", projects: "Projets", systems: "Systèmes", lab: "Lab", about: "À propos", contact: "Contact" },
    hero: {
      name: "Mathieu Alassoeur",
      tagline: "Construire des systèmes data fiables pour aider à décider.",
      ctaPrimary: "Voir les projets",
      ctaSecondary: "Télécharger le CV",
      recruiterMode: "Mode recruteur",
    },
    sections: { whatIDo: "Ce que je construis", featured: "Projets mis en avant" },
    cards: {
      analyticsTitle: "Analyse & Dashboards",
      analyticsBody: "Transformer des données brutes en insights et KPIs clairs.",
      automationTitle: "Automatisation & Reporting",
      automationBody: "Créer des pipelines cohérents, réduire le travail manuel.",
      qualityTitle: "Qualité des données",
      qualityBody: "Valider, tracer et structurer pour la reproductibilité et la confiance.",
    },
    metrics: {
      title: "Indicateurs",
      projects: "Projets livrés",
      dashboards: "Dashboards créés",
      pipelines: "Pipelines conçus",
      automations: "Outils d’automatisation",
    },
    footer: { built: "Construit avec Next.js, Tailwind, Framer Motion et Three.js." },
  },
} satisfies Record<Locale, any>;

export function isLocale(x: string): x is Locale {
  return x === "en" || x === "fr";
}

export function t(locale: Locale) {
  return dict[locale];
}