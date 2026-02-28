import Link from "next/link";
import { isLocale, t, type Locale } from "@/i18n/dict";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";

  return (
    <main className="relative mx-auto max-w-6xl px-5 pb-16">
      <div className="mt-10 rounded-2xl border border-white/10 bg-[#1E293B] p-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-white">
          {locale === "fr" ? "Bientôt" : "Coming soon"}
        </h1>
        <p className="mt-3 text-white/70">
          {locale === "fr"
            ? "Cette page arrive. On construit d'abord les case studies des projets."
            : "This page is coming. First, we ship the project case studies."}
        </p>

        <div className="mt-6">
          <Link
            href={`/${locale}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70 hover:bg-white/10"
          >
            ← {locale === "fr" ? "Retour accueil" : "Back home"}
          </Link>
        </div>
      </div>
    </main>
  );
}