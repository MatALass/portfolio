"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LanguageToggle from "./LanguageToggle";
import RecruiterToggle from "./RecruiterToggle";
import type { Locale } from "@/i18n/dict";

export default function Header({ locale, copy }: { locale: Locale; copy: any }) {
  return (
    <header className="mt-6 flex items-center justify-between gap-3">
      <Link href={`/${locale}`} className="group flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 shadow-sm" />
        <div className="leading-tight">
          <div className="text-sm font-semibold text-white">Mathieu Alassoeur</div>
          <div className="text-xs text-white/60">Scale-up Data Systems</div>
        </div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2"
      >
        <nav className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-2 py-2 text-sm text-white/70 md:flex">
          <NavItem href={`/${locale}`} label={copy.nav.overview} />
          <NavItem href={`/${locale}/projects`} label={copy.nav.projects} />
          <NavItem href={`/${locale}/systems`} label={copy.nav.systems} />
          <NavItem href={`/${locale}/lab`} label={copy.nav.lab} />
          <NavItem href={`/${locale}/about`} label={copy.nav.about} />
          <NavItem href={`/${locale}/contact`} label={copy.nav.contact} />
        </nav>

        <button
          onClick={() => window.dispatchEvent(new Event("cmdk:open"))}
          className="hidden md:flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 hover:bg-white/10"
          title="Ctrl+K"
        >
          <span className="text-white/60">Search…</span>
          <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/55">
            Ctrl K
          </span>
        </button>

        <RecruiterToggle copy={copy} />
        <LanguageToggle locale={locale} />
      </motion.div>
    </header>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white"
    >
      {label}
    </Link>
  );
}