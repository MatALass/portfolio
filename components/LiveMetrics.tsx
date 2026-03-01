// components/LiveMetrics.tsx
"use client";

import { useEffect, useState } from "react";

type GH = {
  username: string;
  profileUrl: string;

  publicRepos: number;
  followers: number;

  // nouveaux KPI
  activeRepos30d: number;
  daysSinceLastPush: number | null;

  // on garde lastPush pour afficher la date lisible
  lastPush: string | null;
};

function formatDate(iso: string, locale: "en" | "fr") {
  const d = new Date(iso);
  return d.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function KpiRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-xs text-white/60">{label}</span>
      <span className="text-lg font-semibold text-white/90 tabular-nums">
        {value}
      </span>
    </div>
  );
}

export default function LiveMetrics({
  locale,
  copy,
}: {
  locale: "en" | "fr";
  copy: any;
}) {
  const [gh, setGh] = useState<GH | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const res = await fetch("/api/github-metrics", { cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const json = (await res.json()) as any;

        const cleaned: GH = {
          username: json.username,
          profileUrl: json.profileUrl,

          publicRepos: json.publicRepos,
          followers: json.followers,

          activeRepos30d: json.activeRepos30d ?? 0,
          daysSinceLastPush:
            typeof json.daysSinceLastPush === "number"
              ? json.daysSinceLastPush
              : null,

          lastPush: json.lastPush ?? null,
        };

        if (!cancelled) setGh(cleaned);
      } catch {
        if (!cancelled) setGh(null);
      }
    }

    run();
    const id = setInterval(run, 60_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return (
    <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col">
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs font-semibold text-white/60 tracking-wide">
            {copy.metrics.title}
          </div>

          <div className="mt-2 text-base font-semibold text-white/90">
            {gh ? `@${gh.username}` : "@—"}
          </div>

          <div className="mt-1 text-xs text-white/60">
            {gh?.lastPush
              ? `${copy.metrics.lastPush}: ${formatDate(gh.lastPush, locale)}`
              : "—"}
          </div>
        </div>

        <a
          href={gh?.profileUrl ?? "https://github.com/MatALass"}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
        >
          GitHub
        </a>
      </div>

      {/* KPI list */}
      <div className="mt-5 grid gap-3">
        <KpiRow label={copy.metrics.repos} value={gh ? gh.publicRepos : "—"} />
        <KpiRow label={copy.metrics.followers} value={gh ? gh.followers : "—"} />

        <KpiRow
          label={copy.metrics.activeRepos30d}
          value={gh ? gh.activeRepos30d : "—"}
        />

        <KpiRow
          label={copy.metrics.daysSinceLastPush}
          value={
            gh
              ? gh.daysSinceLastPush === null
                ? "—"
                : gh.daysSinceLastPush
              : "—"
          }
        />
      </div>

      {/* Spacer */}
      <div className="flex-1" />
    </div>
  );
}