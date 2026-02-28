"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Locale = "en" | "fr";

type KPI = { label: string; value: string; hint?: string };
type Step = { title: string; desc?: string };

type Project = {
  slug: string;
  title: string;
  short: string;
  tags: string[];
  stack: string[];
  year: string;
  highlights: string[];
  links?: { label: string; href: string }[];

  caseStudy?: {
    problem: string;
    approach: { body: string; bullets?: string[] };
    architecture: { body: string; code?: string };
    results: { body: string; highlight?: string };
    improvements?: string;
    screenshots?: string;

    // optionnels (si présents dans data/projects.ts)
    kpis?: KPI[];
    timeline?: Step[];
  };
};

export default function CaseStudyView({
  locale,
  project,
}: {
  locale: Locale;
  project: Project;
}) {
  const L = locale === "fr";

  const kpis: KPI[] =
    project.caseStudy?.kpis ?? [
      { label: L ? "Année" : "Year", value: project.year },
      { label: L ? "Stack" : "Stack", value: `${project.stack.length}` },
      { label: L ? "Tags" : "Tags", value: `${project.tags.length}` },
      { label: L ? "Highlights" : "Highlights", value: `${project.highlights.length}` },
    ];

  const hasTimeline =
    !!project.caseStudy?.timeline && project.caseStudy.timeline.length > 0;

  return (
    <main className="relative mx-auto max-w-6xl px-5 pb-16">
      <div className="mt-10">
        {/* Top nav */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/${locale}/projects`}
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/70 hover:bg-white/10"
          >
            ← {L ? "Retour projets" : "Back to projects"}
          </Link>

          <div className="flex items-center gap-2">
            <span className="rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/60">
              {project.year}
            </span>
            <span className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
              case study
            </span>
          </div>
        </div>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-2xl border border-white/10 bg-[#1E293B] p-8 shadow-xl"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-3xl font-semibold text-white md:text-4xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-3xl text-white/70">{project.short}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/65"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/55">
                {project.stack.map((s) => (
                  <span key={s}>• {s}</span>
                ))}
              </div>
            </div>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-col gap-2">
                {project.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/70 hover:bg-white/10"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* KPI strip */}
          <div className="mt-7 grid gap-3 md:grid-cols-4">
            {kpis.slice(0, 4).map((k) => (
              <div
                key={k.label}
                className="rounded-2xl border border-white/10 bg-[#0B1222]/45 p-4"
              >
                <div className="text-xs font-semibold text-white/55">{k.label}</div>
                <div className="mt-1 text-lg font-semibold text-white/90">
                  {k.value}
                </div>
                {k.hint && (
                  <div className="mt-1 text-xs text-white/45">{k.hint}</div>
                )}
              </div>
            ))}
          </div>

          {/* Timeline (optional) */}
          {hasTimeline && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B1222]/35 p-4">
              <div className="text-xs font-semibold text-white/60">
                {L ? "Pipeline" : "Pipeline"}
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {project.caseStudy!.timeline!.slice(0, 6).map((s, i) => (
                  <div
                    key={`${s.title}-${i}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-xs text-white/45">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white/85">
                      {s.title}
                    </div>
                    {s.desc && (
                      <div className="mt-2 text-xs leading-relaxed text-white/60">
                        {s.desc}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.section>

        {/* Grid */}
        <section className="mt-8 grid gap-6 md:grid-cols-12">
          {/* Left column */}
          <div className="md:col-span-8 space-y-6">
            <Card
              title={L ? "Problème" : "Problem"}
              body={
                project.caseStudy?.problem ??
                (L
                  ? "Explique en 3–5 lignes le contexte et le besoin (cible, contrainte, pourquoi c’est important)."
                  : "Explain in 3–5 lines the context and the need (who, constraints, why it matters).")
              }
            />

            <Card
              title={L ? "Approche" : "Approach"}
              body={
                project.caseStudy?.approach.body ??
                (L
                  ? "Décris comment tu as structuré la solution (sources, transformation, validation, sorties)."
                  : "Describe how you structured the solution (sources, transformations, validation, outputs).")
              }
              bullets={
                project.caseStudy?.approach.bullets ?? [
                  L ? "Choix de modèle / design" : "Design choices",
                  L ? "Qualité & validation" : "Quality & validation",
                  L ? "Reproductibilité" : "Reproducibility",
                ]
              }
            />

            <Card
              title={L ? "Architecture" : "Architecture"}
              body={
                project.caseStudy?.architecture.body ??
                (L
                  ? "Tu peux mettre un schéma plus tard. Pour l’instant : modules principaux, flux de données, entrées/sorties."
                  : "You can add a diagram later. For now: main modules, data flow, inputs/outputs.")
              }
              code={
                project.caseStudy?.architecture.code ??
                `src/\n  ingest/\n  transform/\n  validate/\n  export/\n  reports/\n`
              }
            />

            <Card
              title={L ? "Résultats" : "Results"}
              body={
                project.caseStudy?.results.body ??
                (L
                  ? "Qu’est-ce que ça a amélioré concrètement ? (temps gagné, qualité, lisibilité, adoption)."
                  : "What improved concretely? (time saved, quality, clarity, adoption).")
              }
              highlight={
                project.caseStudy?.results.highlight ??
                (L ? "Ajoute 2–3 résultats mesurables ici." : "Add 2–3 measurable outcomes here.")
              }
            />
          </div>

          {/* Right column */}
          <div className="md:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="rounded-2xl border border-white/10 bg-[#1E293B] p-6 shadow-xl"
            >
              <div className="text-sm font-semibold text-white/85">
                {L ? "Highlights" : "Highlights"}
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-300/90" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <Card
              title={L ? "Ce que j’améliorerais" : "What I’d improve"}
              body={
                project.caseStudy?.improvements ??
                (L
                  ? "2–4 points : tests, monitoring, packaging, CI, docs, performance…"
                  : "2–4 points: tests, monitoring, packaging, CI, docs, performance…")
              }
            />

            <Card
              title={L ? "Captures / démo" : "Screenshots / demo"}
              body={
                project.caseStudy?.screenshots ??
                (L
                  ? "Tu ajouteras tes images plus tard (dashboard, code, schéma)."
                  : "You’ll add images later (dashboard, code, diagram).")
              }
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function Card({
  title,
  body,
  bullets,
  code,
  highlight,
}: {
  title: string;
  body: string;
  bullets?: string[];
  code?: string;
  highlight?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-[#1E293B] p-6 shadow-xl"
    >
      <div className="text-sm font-semibold text-white/85">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{body}</p>

      {bullets && (
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-300/80" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {code && (
        <pre className="mt-4 overflow-auto rounded-2xl border border-white/10 bg-[#0B1222] p-4 text-xs text-white/75">
          <code>{code}</code>
        </pre>
      )}

      {highlight && (
        <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-xs text-amber-200">
          {highlight}
        </div>
      )}
    </motion.div>
  );
}