import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

const questions: { q: string; a: ReactNode }[] = [
  {
    q: "¿Con qué apps funciona?",
    a: "Con las que guarden tus carreras en Apple Salud (iPhone) o en Health Connect (Android): Strava, Apple Watch, Garmin, Nike Run Club, Samsung Health, una cinta o el teléfono. Tramato las muestra todas juntas.",
  },
  {
    q: "¿Y si Strava no me deja bajar los parciales?",
    a: "Importá el archivo de la carrera en GPX, TCX o FIT, o el archivo completo de Strava. La carrera suma la ruta con horarios, la frecuencia cardíaca y las pausas.",
  },
  {
    q: "¿Cuándo llega a Android?",
    a: "Está en camino: la versión nativa de Android se está probando. No tenemos fecha para dar. Si te anotás con Android, te avisamos por email cuando haya novedades.",
  },
  {
    q: "¿Cómo entro a la beta de iPhone?",
    a: "Anotate en la lista de espera. La beta corre en TestFlight y te escribimos por email cuando haya lugar.",
  },
  {
    q: "¿Qué hacen con mi email?",
    a: (
      <>
        Lo usamos solo para avisarte sobre la beta de Tramato. Los detalles están en la{" "}
        <Link href="/privacidad#lista-de-espera">política de privacidad</Link>.
      </>
    ),
  },
  {
    q: "¿“Copiar para IA” manda mis datos a alguien?",
    a: "No. Arma un resumen y lo copia al portapapeles, sin coordenadas GPS. Lo que hagas con ese texto, por ejemplo pegarlo en ChatGPT o Claude, lo decidís vos.",
  },
];

export function Faq() {
  return (
    <section id="preguntas" aria-labelledby="faq-title">
      <div className="wrap faq-wrap">
        <div className="kicker">Preguntas</div>
        <h2 className="section-title" id="faq-title">Lo que más nos preguntan</h2>
        <div className="faq">
          {questions.map(({ q, a }) => (
            <details key={q}>
              <summary>
                <span>{q}</span>
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
