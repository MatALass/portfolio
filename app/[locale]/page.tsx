import ControlRoomBackground from "@/components/ControlRoomBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import FeaturedProjects from "@/components/FeaturedProjects";
import LiveMetrics from "@/components/LiveMetrics";
import { isLocale, t, type Locale } from "@/i18n/dict";
import StatusBar from "@/components/StatusBar";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const copy = t(locale);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <ControlRoomBackground />

      <div className="relative mx-auto max-w-6xl px-5 pb-16">
        <Header locale={locale} copy={copy} />
        <StatusBar locale={locale} />
        <section className="mt-10 grid items-stretch gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8 h-full">
          <Hero locale={locale} copy={copy} />
        </div>
        <div className="lg:col-span-4 h-full">
          <LiveMetrics locale={locale} copy={copy} />
        </div>
      </section>

        <section className="mt-10 lg:mt-14">
          <WhatIDo copy={copy} />
        </section>

        <section className="mt-10 lg:mt-14">
          <FeaturedProjects copy={copy} locale={locale} />
        </section>

        <footer className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center">
          <span className="font-medium text-white/70">© {new Date().getFullYear()} Mathieu Alassoeur</span>
          <span>{copy.footer.built}</span>
        </footer>
      </div>
    </main>
  );
}