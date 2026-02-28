"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { projects as allProjects } from "@/data/projects";

type Locale = "en" | "fr";

type Cmd = {
  id: string;
  title: string;
  subtitle?: string;
  href?: string;
  action?: () => void;
  keywords: string[];
  badge?: "NAV" | "LANG" | "ACTION" | "PROJECT";
};

function normalize(s: string) {
  return s.toLowerCase().trim();
}

function inferLocale(pathname: string | null): Locale {
  if (!pathname) return "en";
  return pathname.startsWith("/fr") ? "fr" : "en";
}

export default function CommandPalette() {
  const router = useRouter();
  const pathname = usePathname();
  const locale: Locale = inferLocale(pathname);

  const projects = useMemo(
    () =>
      (allProjects ?? []).map((p: any) => ({
        slug: p.slug as string,
        title: p.title as string,
        desc: (p.short ?? "") as string,
      })),
    []
  );

  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const baseCmds: Cmd[] = useMemo(() => {
    const go = (href: string) => () => router.push(href);

    const toggleLang = () => {
      const nextLocale: Locale = locale === "en" ? "fr" : "en";
      const rest = (pathname ?? "").replace(/^\/(en|fr)(?=\/|$)/, "");
      router.push(`/${nextLocale}${rest || ""}`);
    };

    const nav: Cmd[] = [
      { id: "nav-overview", title: locale === "fr" ? "Aperçu" : "Overview", href: `/${locale}`, action: go(`/${locale}`), keywords: ["overview", "home", "accueil"], badge: "NAV" },
      { id: "nav-projects", title: locale === "fr" ? "Projets" : "Projects", href: `/${locale}/projects`, action: go(`/${locale}/projects`), keywords: ["projects", "work", "case", "projets"], badge: "NAV" },
      { id: "nav-systems", title: locale === "fr" ? "Systèmes" : "Systems", href: `/${locale}/systems`, action: go(`/${locale}/systems`), keywords: ["systems", "pipeline", "architecture", "systèmes"], badge: "NAV" },
      { id: "nav-lab", title: "Lab", href: `/${locale}/lab`, action: go(`/${locale}/lab`), keywords: ["lab", "playground", "experiments"], badge: "NAV" },
    ];

    const actions: Cmd[] = [
      { id: "action-lang", title: locale === "fr" ? "Basculer langue (EN/FR)" : "Toggle language (EN/FR)", subtitle: locale === "fr" ? "Passe en anglais / français" : "Switch English / French", action: toggleLang, keywords: ["lang", "language", "fr", "en", "toggle", "langue"], badge: "LANG" },
      { id: "action-cv", title: locale === "fr" ? "Télécharger le CV" : "Download CV", subtitle: "/cv.pdf", action: () => window.open("/cv.pdf", "_blank"), keywords: ["cv", "resume", "download", "pdf"], badge: "ACTION" },
    ];

    const proj: Cmd[] = projects.map((p) => ({
      id: `proj-${p.slug}`,
      title: p.title,
      subtitle: p.desc,
      href: `/${locale}/projects/${p.slug}`,
      action: go(`/${locale}/projects/${p.slug}`),
      keywords: ["project", "case", "study", p.title, p.slug, ...(p.desc ? [p.desc] : [])].map(normalize),
      badge: "PROJECT",
    }));

    return [...nav, ...actions, ...proj];
  }, [router, locale, pathname, projects]);

  const filtered = useMemo(() => {
    const nq = normalize(q);
    if (!nq) return baseCmds.slice(0, 8);

    const scored = baseCmds
      .map((c) => {
        const hay = [c.title, c.subtitle ?? "", ...c.keywords].map(normalize).join(" ");
        const score =
          hay.includes(nq) ? 3 :
          c.title.toLowerCase().startsWith(nq) ? 2 :
          hay.split(" ").some((w) => w.startsWith(nq)) ? 1 : 0;
        return { c, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score);

    return scored.slice(0, 10).map((x) => x.c);
  }, [q, baseCmds]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isCmdK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      if (isCmdK) {
        e.preventDefault();
        setOpen(true);
        return;
      }
      if (e.key === "Escape") setOpen(false);
    };

    const onOpen = () => setOpen(true);

    window.addEventListener("keydown", onKey);
    window.addEventListener("cmdk:open", onOpen as EventListener);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("cmdk:open", onOpen as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  const run = (cmd: Cmd) => {
    setOpen(false);
    setTimeout(() => cmd.action?.(), 10);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* dialog */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-24 w-[min(720px,92vw)] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1222] shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <div className="h-9 w-9 rounded-xl bg-blue-500/15 ring-1 ring-blue-400/20" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-white/90">Command Palette</div>
                <div className="text-xs text-white/55">Ctrl+K • Esc</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                {locale.toUpperCase()}
              </div>
            </div>

            <div className="p-4">
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={locale === "fr" ? "Rechercher une page ou un projet..." : "Search pages or projects..."}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-blue-400/30"
              />

              <div className="mt-4 max-h-[420px] overflow-auto rounded-2xl border border-white/10">
                {filtered.length === 0 ? (
                  <div className="px-4 py-10 text-center text-sm text-white/55">
                    {locale === "fr" ? "Aucun résultat." : "No results."}
                  </div>
                ) : (
                  <ul className="divide-y divide-white/10">
                    {filtered.map((cmd) => (
                      <li key={cmd.id}>
                        <button
                          onClick={() => run(cmd)}
                          className="flex w-full items-start gap-3 px-4 py-3 text-left transition hover:bg-white/5"
                        >
                          <Badge kind={cmd.badge} />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <div className="truncate text-sm font-semibold text-white/90">
                                {cmd.title}
                              </div>
                              {cmd.href && (
                                <div className="hidden truncate text-xs text-white/40 md:block">
                                  {cmd.href}
                                </div>
                              )}
                            </div>
                            {cmd.subtitle && (
                              <div className="mt-1 line-clamp-2 text-xs text-white/55">
                                {cmd.subtitle}
                              </div>
                            )}
                          </div>
                          <div className="mt-0.5 text-xs font-semibold text-amber-300">↵</div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-white/45">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1">Ctrl</span>
                  <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1">K</span>
                  <span>open</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1">Esc</span>
                  <span>close</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Badge({ kind }: { kind?: Cmd["badge"] }) {
  const base =
    "mt-0.5 inline-flex h-7 w-14 items-center justify-center rounded-xl border text-[10px] font-semibold";

  if (kind === "PROJECT")
    return <span className={`${base} border-blue-400/20 bg-blue-500/10 text-blue-200`}>PROJECT</span>;
  if (kind === "LANG")
    return <span className={`${base} border-amber-400/20 bg-amber-400/10 text-amber-200`}>LANG</span>;
  if (kind === "ACTION")
    return <span className={`${base} border-white/10 bg-white/5 text-white/70`}>ACTION</span>;
  return <span className={`${base} border-white/10 bg-white/5 text-white/70`}>NAV</span>;
}