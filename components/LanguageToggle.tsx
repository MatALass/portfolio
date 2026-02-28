"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/i18n/dict";

export default function LanguageToggle({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const nextLocale = locale === "en" ? "fr" : "en";
    const rest = pathname.replace(/^\/(en|fr)(?=\/|$)/, "");
    router.push(`/${nextLocale}${rest || ""}`);
  };

  return (
    <button
      onClick={toggle}
      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
      aria-label="Toggle language"
      title="Toggle language"
    >
      {locale.toUpperCase()}
    </button>
  );
}