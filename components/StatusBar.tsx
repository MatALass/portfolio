"use client";

import { motion } from "framer-motion";

function Dot({ on }: { on: boolean }) {
  return (
    <span
      className={[
        "inline-block h-2 w-2 rounded-full",
        on ? "bg-emerald-400" : "bg-white/25",
      ].join(" ")}
    />
  );
}

export default function StatusBar({
  locale,
}: {
  locale: "en" | "fr";
}) {
  const now = new Date();
  const time = now.toLocaleTimeString(locale === "fr" ? "fr-FR" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = now.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    weekday: "short",
    month: "short",
    day: "2-digit",
  });

  const labels =
    locale === "fr"
      ? {
          status: "Statut",
          uptime: "Uptime",
          latency: "Latence",
          mode: "Mode",
          focus: "Focus",
          recruiter: "Recruteur",
          normal: "Normal",
        }
      : {
          status: "Status",
          uptime: "Uptime",
          latency: "Latency",
          mode: "Mode",
          focus: "Focus",
          recruiter: "Recruiter",
          normal: "Normal",
        };

  // (Fake but believable for now — later we can wire real values)
  const uptime = "99.98%";
  const latency = "42ms";
  const mode = "Normal";

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Dot on />
          <span className="font-semibold text-white/80">{labels.status}:</span>
          <span className="text-emerald-300">Online</span>
        </div>

        <div className="hidden h-4 w-px bg-white/10 sm:block" />

        <div className="flex items-center gap-2">
          <span className="text-white/60">{labels.uptime}</span>
          <span className="font-semibold text-white/85">{uptime}</span>
        </div>

        <div className="hidden h-4 w-px bg-white/10 sm:block" />

        <div className="flex items-center gap-2">
          <span className="text-white/60">{labels.latency}</span>
          <span className="font-semibold text-amber-300">{latency}</span>
        </div>

        <div className="hidden h-4 w-px bg-white/10 sm:block" />

        <div className="flex items-center gap-2">
          <span className="text-white/60">{labels.mode}</span>
          <span className="font-semibold text-white/85">{mode}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 md:flex">
          <span className="text-white/60">{labels.focus}</span>
          <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 font-semibold text-blue-200">
            Data Systems
          </span>
        </div>

        <div className="hidden h-4 w-px bg-white/10 sm:block" />

        <div className="flex items-center gap-2">
          <span className="text-white/60">{date}</span>
          <span className="font-semibold text-white/85">{time}</span>
        </div>
      </div>
    </motion.div>
  );
}