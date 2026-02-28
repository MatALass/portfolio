export const projects = [
  {
    slug: "dataviz-dashboard",
    title: "Digital Cultural Consumption in France",
    short:
      "Interactive Streamlit data storytelling dashboard exploring how socio-demographic and digital behaviors influence cultural consumption in France.",
    tags: ["DataViz", "Storytelling", "Open Data", "Streamlit"],
    stack: ["Python", "Pandas", "Plotly", "Streamlit"],
    year: "2025",
    highlights: [
      "Narrative flow: Problem → Analysis → Insights → Implications",
      "Interactive charts + guided storytelling",
      "Open public dataset (data.gouv.fr) + clean structure",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MatALass-EFREI/dataviz-dashboard",
      },
    ],
    caseStudy: {
      problem:
        "Transformer un dataset open-data en une histoire claire et interactive, qui guide l’utilisateur vers des insights (au lieu d’un simple ‘dashboard de graphiques’).",
      approach: {
        body:
          "J’ai structuré l’app comme un parcours narratif (problème → analyse → insights → implications) avec des visualisations interactives et des comparaisons socio-démographiques.",
        bullets: [
          "Storytelling-driven UX",
          "EDA + visualisations interactives",
          "Lisibilité & pédagogie (progression par sections)",
        ],
      },
      architecture: {
        body:
          "App Streamlit modulaire : une app principale + sections d’analyse/visu + utilitaires + assets/data séparés.",
        code: `app.py\nsections/\nutils/\ndata/\nassets/\nrequirements.txt\n`,
      },
      results: {
        body:
          "Dashboard utilisable en démo, navigation fluide, et une narration qui facilite la compréhension des facteurs influençant les pratiques culturelles numériques.",
        highlight:
          "Prochaine étape : publier une version déployée + ajouter des tests de cohérence dataset.",
      },
      improvements:
        "Ajouter un déploiement (Streamlit Community/Cloud), automatiser les checks qualité (schema validation), et intégrer une page ‘Methods/Limitations’.",
      screenshots:
        "À ajouter : 1) page intro narrative 2) une vue comparative socio-démographique 3) une vue ‘insights’ finale.",
    },
  },

  {
    slug: "3d-hop-viewer",
    title: "3D_HOP Web Viewer",
    short:
      "Lightweight web viewer to serve and explore 3D models in the browser (static site).",
    tags: ["3D", "Web", "Viewer", "Static"],
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    highlights: [
      "Static site: simple & portable",
      "Local dev in seconds (http-server)",
      "Assets organized (css/js/fonts/docs/images)",
    ],
    links: [{ label: "GitHub", href: "https://github.com/MatALass/3D_HOP" }],
    caseStudy: {
      problem:
        "Avoir un viewer 3D simple à lancer (sans build) pour partager/présenter rapidement des modèles dans un navigateur.",
      approach: {
        body:
          "Approche ‘static-first’ : un index unique, assets séparés, et un serveur local minimal pour le dev/démo.",
        bullets: [
          "Zéro build",
          "Portable (juste des fichiers)",
          "Structure assets claire",
        ],
      },
      architecture: {
        body:
          "Site statique : un point d’entrée + assets front (CSS/JS/fonts/images/docs).",
        code: `index.html\ncss/\njs/\nfonts/\nassets/images/\ndocs/\n`,
      },
      results: {
        body:
          "Viewer prêt pour des démos rapides : lancement local via serveur statique, partage simple du dossier.",
        highlight:
          "Prochaine étape : ajouter une page ‘gallery’ + presets caméra + UI Control Room.",
      },
      improvements:
        "Ajouter une mini UI (controls, presets), une page gallery, et documenter le format attendu des modèles.",
      screenshots:
        "À ajouter : capture du viewer + un modèle affiché + un zoom sur UI/controls.",
    },
  },

  {
    slug: "nachweis-generator",
    title: "Nachweis Generator",
    short:
      "Privacy-safe local CLI tool that generates Nachweis Excel workbooks per campus + a quota overview workbook (SWS-weighted).",
    tags: ["Automation", "Reporting", "Excel", "Data Quality"],
    stack: ["Python", "pandas", "openpyxl", "CLI"],
    year: "2026",
    highlights: [
      "CLI tool + config-driven",
      "Privacy-by-design (data/ + outputs gitignored)",
      "Template-compatible Excel outputs",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MatALass-ISM/nachweis-generator",
      },
    ],
    caseStudy: {
      problem:
        "Produire des fichiers Excel standardisés (Nachweis + quota overview) de manière fiable, sans erreurs manuelles, tout en respectant la confidentialité des exports.",
      approach: {
        body:
          "Tool local, config-driven : ingestion → normalisation (schema) → génération Excel (template) → QA report optionnel.",
        bullets: ["Config YAML", "Schema/normalization rules", "Option QA report"],
      },
      architecture: {
        body:
          "Package Python + scripts + tests + config. Les vrais exports restent locaux (gitignore).",
        code: `src/nachweis_generator/\nscripts/\nconfig/\ntests/\ndata/ (gitignored)\n`,
      },
      results: {
        body:
          "Génération reproductible de workbooks Nachweis par campus + fichier de synthèse quotas, avec structure compatible template.",
        highlight: "Point fort : privacy-safe & structure ‘production-grade’.",
      },
      improvements:
        "Ajouter un export ‘unmatched’/audit trail, et une table de mapping manuelle (overrides) maintenue localement.",
      screenshots:
        "À ajouter : 1) workbook Nachweis 2) quota overview (summary/matrix) 3) extrait QA report.",
    },
  },

  {
    slug: "academic-workload-analytics",
    title: "Academic Workload Analytics (SWS Quota)",
    short:
      "Data pipeline to compute, per campus and study program, the share of semester weekly hours (SWS) taught by in-house professors, with Excel outputs and a CLI.",
    tags: ["Analytics Engineering", "ETL", "Reporting", "Data Security"],
    stack: ["Python", "pandas", "CLI", "Excel export"],
    year: "2026",
    highlights: [
      "CLI pipeline + reproducible structure",
      "Excel reports (per campus + optional colored gradients)",
      "Conservative name matching + DQ guidance",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MatALass-ISM/academic-workload-analytics",
      },
    ],
    caseStudy: {
      problem:
        "Mesurer de façon fiable la part de SWS assurée par des professeurs internes (par campus/program), avec sorties prêtes à être partagées (Excel).",
      approach: {
        body:
          "Pipeline CLI : lecture fichiers cours + profs → normalisation noms → matching conservateur → calcul quotas → exports Excel + workbooks détaillés.",
        bullets: [
          "Reproductible & scriptable",
          "Name normalization",
          "Exports Excel multi-niveaux",
        ],
      },
      architecture: {
        body:
          "Package Python (modules pipeline) + scripts d’entrée + dossiers data/reports locaux (gitignored).",
        code: `src/quotas_professors/\nscripts/\ndata/raw (local)\ndata/processed (local)\nreports/ (local)\n`,
      },
      results: {
        body:
          "Exports : quota par campus (TotalSWS / OwnSWS / OwnSWS%) + version colorisée + workbooks détaillés par campus/program.",
        highlight:
          "Prochaine étape : ajouter ‘unmatched lecturers’ export + overrides local.",
      },
      improvements:
        "Ajouter des tests de non-régression sur jeux de données anonymisés et brancher un logging structuré (JSON).",
      screenshots:
        "À ajouter : 1) sws_quota_by_campus.xlsx 2) version colorisée 3) workbook détaillé.",

      // ✅ AJOUTS
      kpis: [
        { label: "Interface", value: "CLI", hint: "scriptable & repeatable runs" },
        { label: "Outputs", value: "Excel", hint: "summary + detailed workbooks" },
        { label: "Granularity", value: "Campus × Program", hint: "quota breakdown" },
        { label: "DQ", value: "Conservative matching", hint: "avoid false positives" },
      ],
      timeline: [
        { title: "Ingest", desc: "Load course + lecturer exports (local files, gitignored)." },
        { title: "Normalize", desc: "Clean columns + normalize names (case/accents/spacing)." },
        { title: "Match", desc: "Conservative matching between lecturers & in-house list." },
        { title: "Compute", desc: "Aggregate TotalSWS / OwnSWS / OwnSWS% by campus/program." },
        { title: "Export", desc: "Generate Excel summaries + detailed workbooks (optionally colorized)." },
        { title: "Review", desc: "Sanity checks + identify unmatched lecturers for manual overrides." },
      ],
    },
  },

  {
    slug: "targroup-hubspot",
    title: "TARGROUP → HubSpot API Integration",
    short:
      "ETL + CRM sync: fetch leads from a proprietary API, validate/normalize, map fields, and upsert into HubSpot with retries & logs.",
    tags: ["Integration", "ETL", "CRM", "Data Quality"],
    stack: ["Python", "requests", "HubSpot API", "Logging"],
    year: "2026",
    highlights: [
      "Field mapping centralized",
      "Idempotent upsert strategy",
      "Retries + observability for stability",
    ],
    caseStudy: {
      problem:
        "Synchroniser des leads hétérogènes vers HubSpot sans polluer le CRM, tout en restant robuste aux erreurs réseau/API.",
      approach: {
        body:
          "Pipeline : fetch → clean/validate → map → upsert. Gestion erreurs + retries contrôlés. Logs pour diagnostiquer rapidement.",
        bullets: ["Validation avant CRM", "Retries contrôlés", "Logs & traçabilité"],
      },
      architecture: {
        body:
          "Un module d’ingestion API, un module de normalisation, puis un module HubSpot (upsert).",
        code: `src/\n  fetch_api/\n  normalize/\n  hubspot/\n  logs/\n`,
      },
      results: {
        body:
          "Sync plus stable, meilleure qualité des contacts et une base prête pour des analytics CRM (sources, funnel, segments).",
        highlight:
          "Prochaine étape : metrics de sync (success rate, latency) + mode dry-run.",
      },
      improvements:
        "Ajouter un mode dry-run, des métriques (success rate/latency), et une file de retry persistante (si gros volume).",
      screenshots:
        "À ajouter : 1) schéma pipeline 2) extrait logs 3) mapping table (source → HubSpot).",
    },
  },

  {
    slug: "football-kelly-ml",
    title: "Football Prediction + Kelly Sizing",
    short:
      "Notebook R&D: build match outcome models, run time-split backtests, and evaluate ROI/variance with Kelly bet sizing.",
    tags: ["ML", "Backtesting", "Notebook", "Sports Analytics"],
    stack: ["Python", "pandas", "Jupyter", "scikit-learn (option)"],
    year: "2026",
    highlights: [
      "Time-aware validation (anti-leakage)",
      "Backtest ROI + drawdown tracking",
      "Kelly sizing for risk management",
    ],
    links: [{ label: "Notebook", href: "#" }],
    caseStudy: {
      problem:
        "Passer d’un modèle ‘accuracy’ à un système complet orienté décision (ROI, variance, sizing), sans leakage temporel.",
      approach: {
        body:
          "Dataset historique → features → modèle → validation time-split → backtest rolling. Comparaison baselines vs modèle, puis sizing Kelly.",
        bullets: ["Anti-leakage", "Metrics ROI/drawdown", "Baseline comparisons"],
      },
      architecture: {
        body:
          "Notebook structuré : ingest → features → train/eval → backtest → reporting (tables + plots).",
        code: `notebooks/\n  01_ingest.ipynb\n  02_features.ipynb\n  03_model.ipynb\n  04_backtest.ipynb\n`,
      },
      results: {
        body:
          "Structure prête pour itérer rapidement (features/modèles/stratégies) et mesurer l’impact sur ROI et risque.",
        highlight:
          "Prochaine étape : brancher odds fiables + pipeline reproductible (scripts).",
      },
      improvements:
        "Industrialiser hors notebook (scripts + config), et ajouter un store local (parquet) + runs versionnés.",
      screenshots:
        "À ajouter : 1) courbe ROI cumulée 2) drawdown 3) tableau metrics par période.",
    },
  },
] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}