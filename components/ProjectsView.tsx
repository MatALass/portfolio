"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Locale = "en" | "fr";

type Project = {
  slug: string;
  title: string;
  short: string;
  tags: string[];
  stack: string[];
  year: string;
};

export default function ProjectsView({
  locale,
  copy,
  projects,
}: {
  locale: Locale;
  copy: any;
  projects: Project[];
}) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    const nq = q.toLowerCase().trim();
    return projects.filter((p) => {
      const matchQ =
        !nq ||
        `${p.title} ${p.short} ${p.tags.join(" ")} ${p.stack.join(" ")} ${p.year}`
          .toLowerCase()
          .includes(nq);

      const matchTag = tag === "All" || p.tags.includes(tag);
      return matchQ && matchTag;
    });
  }, [projects, q, tag]);

  const L = locale === "fr";

  return (
    <main className="relative mx-auto max-w-6xl px-5 pb-16">
      <div className="pt-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              {L ? "Projets" : "Projects"}
            </h1>
            <p className="mt-2 max-w-2xl text-white/65">
              {L
                ? "Une sélection de systèmes data, dashboards et automatisations — pensés pour la fiabilité."
                : "A selection of data systems, dashboards, and automation — built for reliability."}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Counter */}
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <span className="font-semibold text-white/80">{filtered.length}</span>
              <span className="text-white/50"> / {projects.length}</span>{" "}
              {L ? "projets" : "projects"}
            </div>

            <Link
              href={`/${locale}`}
              className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70 hover:bg-white/10 md:inline-flex"
            >
              ← {L ? "Retour" : "Back"}
            </Link>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-6 h-px w-full bg-white/10" />

        {/* Filters (sticky control panel) */}
        <div className="sticky top-3 z-10 mt-6 rounded-2xl border border-white/10 bg-[#0B1222]/55 p-3 backdrop-blur">
          <div className="grid gap-3 md:grid-cols-12">
            <div className="md:col-span-8">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={
                  L
                    ? "Rechercher (ex: API, Streamlit, pipeline)..."
                    : "Search (e.g., API, Streamlit, pipeline)..."
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-blue-400/30"
              />
            </div>

            <div className="md:col-span-4">
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-blue-400/30"
              >
                {allTags.map((t) => (
                  <option key={t} value={t} className="bg-[#0F172A]">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* small hint row */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-white/45">
            <span>
              {L ? "Astuce :" : "Tip:"} Ctrl+K {L ? "pour chercher partout" : "to search everywhere"}
            </span>
            {tag !== "All" || q.trim() ? (
              <button
                onClick={() => {
                  setQ("");
                  setTag("All");
                }}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-white/70 hover:bg-white/10"
              >
                {L ? "Réinitialiser" : "Reset"}
              </button>
            ) : (
              <span />
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((p, idx) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#1E293B] p-6 shadow-xl transition hover:-translate-y-0.5 hover:border-blue-400/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-lg font-semibold text-white">{p.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/70">
                    {p.short}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  {p.year}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/65"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className="text-xs text-white/55">
                    • {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Link
                  href={`/${locale}/projects/${p.slug}`}
                  className="text-sm font-semibold text-amber-300 hover:text-amber-200"
                >
                  {L ? "Ouvrir l'étude →" : "Open case study →"}
                </Link>
                <span className="text-xs text-white/40">case study</span>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/60">
            {L ? "Aucun projet ne correspond à ta recherche." : "No projects match your search."}
          </div>
        )}
      </div>
    </main>
  );
}