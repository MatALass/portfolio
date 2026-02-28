"use client";

import { motion } from "framer-motion";

export default function WhatIDo({ copy }: { copy: any }) {
  const items = [
    { title: copy.cards.analyticsTitle, body: copy.cards.analyticsBody, tag: "Analytics" },
    { title: copy.cards.automationTitle, body: copy.cards.automationBody, tag: "Automation" },
    { title: copy.cards.qualityTitle, body: copy.cards.qualityBody, tag: "Quality" },
  ];

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold text-white">{copy.sections.whatIDo}</h2>
        <div className="text-sm text-white/55">
          Clean pipelines. Clear decisions.
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="group rounded-2xl border border-white/10 bg-[#1E293B] p-6 shadow-xl transition hover:-translate-y-0.5 hover:border-blue-400/30"
          >
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
              {it.tag}
            </div>

            <div className="mt-4 text-lg font-semibold text-white group-hover:text-blue-200">
              {it.title}
            </div>

            <div className="mt-2 text-sm leading-relaxed text-white/70">
              {it.body}
            </div>

            <div className="mt-5 h-px w-full bg-white/10" />

            <div className="mt-3 text-xs text-white/55">
              Validation • logging • reproducibility
              <span className="ml-2 text-amber-300/90">↗</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}