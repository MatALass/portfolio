export type Metric = { key: string; value: number };
export type ProjectCard = { slug: string; title: string; desc: string; tags: string[] };

export const metrics: Metric[] = [
  { key: "projects", value: 5 },
  { key: "dashboards", value: 3 },
  { key: "pipelines", value: 2 },
  { key: "automations", value: 2 },
];

export const featuredProjects: ProjectCard[] = [
  {
    slug: "cultural-consumption-explorer",
    title: "Cultural Consumption Explorer (France)",
    desc: "Interactive Streamlit dashboard analyzing socio-demographic and digital drivers using open public data.",
    tags: ["Streamlit", "Open Data", "Data Viz"],
  },
  {
    slug: "academic-workload-quota-pipeline",
    title: "Academic Workload & Quota Analytics Pipeline",
    desc: "Production-grade pipeline focused on reproducibility, structure, and data-security best practices.",
    tags: ["Python", "Reproducible", "Security"],
  },
  {
    slug: "targroup-hubspot-interface",
    title: "Targroup → HubSpot Lead Interface",
    desc: "Automated API ingestion and transformation into a HubSpot-ready CSV with robust field mapping and retries.",
    tags: ["API", "ETL", "CSV"],
  },
];