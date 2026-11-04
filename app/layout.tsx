import type { Metadata, Viewport } from "next";
import { Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

import { Footer } from "@/core/layout/footer/Footer";
import { SiteHeader } from "@/core/layout/header/SiteHeader";
import { AppProviders } from "@/core/providers/AppProviders";
import { JsonLd, organizationSchema, websiteSchema } from "@/modules/seo";
import { AmbientBackground } from "@/shared/ui/AmbientBackground";

import { rootMetadata } from "@/content/site/metadata";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f5f6fa",
};

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${rajdhani.variable} ${rajdhani.className} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={`${rajdhani.className} min-h-full flex flex-col overflow-x-clip bg-canvas-base text-slate-100 font-semibold relative`}>
        <AppProviders>
          <JsonLd data={websiteSchema()} />
          <JsonLd data={organizationSchema()} />
          <AmbientBackground />
          <SiteHeader />
          <div className="flex-1 relative z-10">{children}</div>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
