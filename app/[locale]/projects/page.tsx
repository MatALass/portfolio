import { projects } from "@/data/projects";
import { isLocale, t, type Locale } from "@/i18n/dict";
import ProjectsView from "@/components/ProjectsView";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const copy = t(locale);

  return <ProjectsView locale={locale} copy={copy} projects={projects} />;
}