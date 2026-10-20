import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Tramato — Tus carreras, entendidas",
  description:
    "App de iPhone para corredores: lee tus carreras de Apple Salud (Strava, Apple Watch, Garmin, Nike Run Club), te muestra parciales, mejores marcas y carga, graba con el GPS y arma un resumen para ChatGPT o Claude. Tus datos no salen del iPhone.",
  icons: { icon: "/assets/tramato-symbol-on-dark.svg", apple: "/assets/apple-touch-icon.png" },
  openGraph: {
    title: "Tramato — Tus carreras, entendidas",
    description: "Parciales, mejores marcas, entrenamientos guiados y un resumen listo para la IA. Sin cuentas ni servidores.",
    images: ["/assets/app-icon.png"],
  },
};

export const viewport: Viewport = { themeColor: "#0b0b0c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
