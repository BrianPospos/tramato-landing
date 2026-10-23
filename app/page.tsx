import { Faq } from "@/components/faq";
import { AiSection, ExportSection, Extras, Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { Footer, Nav } from "@/components/site";
import { Sources } from "@/components/sources";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Tramato",
  url: "https://tramato.vercel.app",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  inLanguage: "es-AR",
  description:
    "App para corredores que junta todas sus carreras en un solo lugar y las explica. Lee de Apple Salud en iPhone y de Health Connect en Android.",
};

export default function Home() {
  return (
    <>
      <Nav home />
      <main>
        <Hero />
        <Sources />
        <Features />
        <AiSection />
        <ExportSection />
        <Extras />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
