import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-jetbrains" });

const SITE_URL = "https://tramato.vercel.app";
const TITLE = "Tramato — Todas tus carreras en un solo lugar, y explicadas";
const DESCRIPTION =
  "Tramato junta tus carreras de Strava, Apple Watch, Garmin y más, las explica km a km y graba con el GPS del teléfono. Beta en TestFlight para iPhone, Android en camino. Sumate a la lista de espera.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: { icon: "/assets/tramato-symbol-on-dark.svg", apple: "/assets/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Tramato",
    locale: "es_AR",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = { themeColor: "#0b0b0c", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${jetbrains.variable} bg-bg`}>
      <body>{children}</body>
    </html>
  );
}
