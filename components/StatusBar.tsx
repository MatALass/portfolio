"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

type StatusPayload = {
  mode: string;
  uptimeSeconds: number;
  now: string; // ISO
};

function formatUptime(seconds: number) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

function fmtTime(d: Date, locale: "en" | "fr") {
  return d.toLocaleTimeString(locale === "fr" ? "fr-FR" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function fmtDate(d: Date, locale: "en" | "fr") {
  // IMPORTANT: on fixe un format stable (sans virgule)
  return d.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    weekday: "short",
    month: "short",
    day: "2-digit",
  });
}

export default function StatusBar({ locale }: { locale: "en" | "fr" }) {
  const labels =
    locale === "fr"
      ? {
          status: "Statut",
          uptime: "Uptime",
          latency: "Latence",
          mode: "Mode",
          focus: "Focus",
          normal: "Normal",
          online: "En ligne",
        }
      : {
          status: "Status",
          uptime: "Uptime",
          latency: "Latency",
          mode: "Mode",
          focus: "Focus",
          normal: "Normal",
          online: "Online",
        };

  const [payload, setPayload] = useState<StatusPayload | null>(null);
  const [latencyMs, setLatencyMs] = useState<number | null>(null);
  const [clock, setClock] = useState<{ date: string; time: string } | null>(
    null
  );

  // 1) Horloge client-only => plus d'hydration mismatch
  useEffect(() => {
    function tick() {
      const d = new Date();
      setClock({ date: fmtDate(d, locale), time: fmtTime(d, locale) });
    }
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [locale]);

  // 2) Status API + "latency" réelle
  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const t0 = performance.now();
        const res = await fetch("/api/status", { cache: "no-store" });
        const t1 = performance.now();

        if (!res.ok) throw new Error(String(res.status));

        const json = (await res.json()) as StatusPayload;

        if (!cancelled) {
          setLatencyMs(Math.round(t1 - t0));
          setPayload(json);
        }
      } catch {
        if (!cancelled) {
          setLatencyMs(null);
          setPayload(null);
        }
      }
    }

    run();
    const id = setInterval(run, 15_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const uptime = payload ? formatUptime(payload.uptimeSeconds) : "—";
  const latency = latencyMs != null ? `${latencyMs}ms` : "—";
  const mode = payload?.mode ?? "—";

  const date = clock?.date ?? "—";
  const time = clock?.time ?? "—";

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70"
      suppressHydrationWarning
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Dot on />
          <span className="font-semibold text-white/80">{labels.status}:</span>
          <span className="text-emerald-300">{labels.online}</span>
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