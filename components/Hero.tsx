"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale } from "@/i18n/dict";

export default function Hero({ locale, copy }: { locale: Locale; copy: any }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1E293B] p-8 shadow-xl">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
          ● Data Systems Online
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {copy.hero.name}
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
          {copy.hero.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={`/${locale}/projects`}
            className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            {copy.hero.ctaPrimary}
          </Link>

          <a
            href="/cv.pdf"
            className="rounded-xl border border-amber-400/40 bg-amber-400/10 px-6 py-3 text-sm font-semibold text-amber-300 transition hover:bg-amber-400/20"
          >
            {copy.hero.ctaSecondary}
          </a>
        </div>
      </motion.div>
    </div>
  );
}