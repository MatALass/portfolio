import Link from "next/link";
import { getProject, projects } from "@/data/projects";
import { isLocale, type Locale } from "@/i18n/dict";
import CaseStudyView from "@/components/CaseStudyView";

export function generateStaticParams() {
  // Prebuild the known slugs (works fine without i18n duplication)
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  const project = getProject(slug);

  if (!project) {
    return (
      <main className="relative mx-auto max-w-6xl px-5 pb-16">
        <div className="mt-10 rounded-2xl border border-white/10 bg-[#1E293B] p-8 shadow-xl">
          <h1 className="text-2xl font-semibold text-white">
            {locale === "fr" ? "Projet introuvable" : "Project not found"}
          </h1>
          <p className="mt-3 text-white/70">
            {locale === "fr"
              ? "Le lien est peut-être incorrect."
              : "The link might be incorrect."}
          </p>
          <div className="mt-6">
            <Link
              href={`/${locale}/projects`}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70 hover:bg-white/10"
            >
              ← {locale === "fr" ? "Retour projets" : "Back to projects"}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <CaseStudyView locale={locale} project={project} />;
}