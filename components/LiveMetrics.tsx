"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/home";

const mapKey: Record<string, string> = {
  projects: "projects",
  dashboards: "dashboards",
  pipelines: "pipelines",
  automations: "automations",
};

export default function LiveMetrics({ copy }: { locale: any; copy: any }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1E293B] p-6 shadow-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white/85">{copy.metrics.title}</h2>

        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
          EN–FR
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
          >
            <div className="text-3xl font-semibold text-amber-300">
              {m.value}
            </div>
            <div className="mt-1 text-xs text-white/65">
              {copy.metrics[mapKey[m.key]]}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
        Tip: later, connect real stats (GitHub / analytics).
      </div>
    </div>
  );
}