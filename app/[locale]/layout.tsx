import "../globals.css";
import type { ReactNode } from "react";
import ControlRoomBackground from "@/components/ControlRoomBackground";
import CommandPalette from "@/components/CommandPalette";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-[#0F172A] text-white antialiased">
        {/* Global background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <ControlRoomBackground />
        </div>

        {/* Global Command Palette (Ctrl+K everywhere) */}
        <CommandPalette />

        {/* App content */}
        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}