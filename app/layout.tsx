import type { Metadata, Viewport } from "next";
import { Azeret_Mono, Karla, Syne } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { colors, content, seo } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";

const syne = Syne({ subsets: ["latin"], weight: "700", variable: "--font-syne", display: "swap" });
const karla = Karla({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-karla", display: "swap" });
const azeret = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-azeret",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: "%s · Stukadoorsbedrijf M. Janssen",
  },
  description: seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const viewport: Viewport = { themeColor: colors.primary };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const themeVars = {
  "--brand": colors.primary,
  "--brand-fg": colors.primaryForeground,
  "--accent": colors.accent,
  "--background": colors.background,
  "--foreground": colors.foreground,
  "--muted": colors.muted,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={seo.lang}
      style={themeVars}
      className={`${syne.variable} ${karla.variable} ${azeret.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col pb-40 lg:pb-20">
        {children}
        <SleadsBadge />
      </body>
    </html>
  );
}
