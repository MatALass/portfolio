"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { featuredProjects } from "@/data/home";

type Locale = "en" | "fr";

export default function FeaturedProjects({
  copy,
  locale,
}: {
  copy: any;
  locale: Locale | string;
}) {
  const safeLocale: Locale = locale === "fr" ? "fr" : "en";

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold text-white">
          {copy.sections.featured}
        </h2>
        <Link
          href={`/${safeLocale}/projects`}
          className="text-sm font-semibold text-blue-200 hover:text-blue-100"
        >
          View all →
        </Link>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {featuredProjects.map((p, idx) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="group rounded-2xl border border-white/10 bg-[#1E293B] p-6 shadow-xl transition hover:-translate-y-0.5 hover:border-blue-400/30"
          >
            <div className="text-lg font-semibold text-white group-hover:text-blue-200">
              {p.title}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-white/70">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/65"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Link
                href={`/${safeLocale}/projects/${p.slug}`}
                className="text-sm font-semibold text-amber-300 hover:text-amber-200"
              >
                Open case study →
              </Link>
              <span className="text-xs text-white/45">featured</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}