import Image from "next/image";
import type { ReactNode } from "react";
import {
  BookOpenText,
  CalendarCheck,
  FileUp,
  Mic,
  Share2,
  TrendingUp,
  Radio,
} from "lucide-react";

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="shot">
      <Image src={src} alt={alt} width={521} height={1100} sizes="(max-width: 900px) 70vw, 340px" />
    </figure>
  );
}

function Showcase({
  id,
  kicker,
  title,
  lead,
  points,
  shot,
  extra,
  reverse = false,
}: {
  id?: string;
  kicker: string;
  title: string;
  lead: ReactNode;
  points: string[];
  shot: { src: string; alt: string };
  extra?: ReactNode;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="showcase-section">
      <div className={`wrap showcase${reverse ? " reverse" : ""}`}>
        <div className="showcase-copy">
          <div className="kicker">{kicker}</div>
          <h2 className="section-title">{title}</h2>
          <p className="section-lead">{lead}</p>
          <ul className="ticks">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {extra}
        </div>
        <Phone {...shot} />
      </div>
    </section>
  );
}

const assistants = [
  { name: "ChatGPT", logo: "/assets/ai/chatgpt.svg" },
  { name: "Claude", logo: "/assets/ai/claude.svg" },
  { name: "Gemini", logo: "/assets/ai/gemini.svg" },
  { name: "Grok", logo: "/assets/ai/grok.svg" },
];

function AssistantPicker() {
  return (
    <div className="assistants">
      <p className="assistants-label" id="assistants-label">Pegalo en tu IA de preferencia</p>
      <ul className="assistants-list" aria-labelledby="assistants-label">
        {assistants.map(({ name, logo }) => (
          <li className="assistant" key={name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt="" width={20} height={20} />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Features() {
  return (
    <div id="funciones">
      <Showcase
        kicker="Historial"
        title="Todas tus carreras, juntas"
        lead="Cada carrera muestra de qué app viene. Si una misma salida aparece dos veces, Tramato lo detecta, y cada semana te arma el resumen."
        points={[
          "El origen de cada carrera: Strava, Apple Watch, Garmin, lo que sea",
          "Detección de duplicados",
          "Resumen semanal con km, tiempo y cantidad de carreras",
        ]}
        shot={{ src: "/assets/screen1.png", alt: "Historial de carreras con el resumen de la semana" }}
      />

      <Showcase
        kicker="Detalle"
        title="Cada carrera, km a km"
        lead="Abrí una carrera y mirá todo lo que pasó en el recorrido, con mapa y gráficos."
        points={[
          "Mapa, ritmo, tiempo en movimiento y desnivel",
          "Frecuencia cardíaca y cadencia",
          "Parciales km a km y gráficos",
          "Mejores tramos, con récords",
          "Comparación de dos carreras km a km",
        ]}
        shot={{ src: "/assets/screen2.png", alt: "Detalle de una carrera con mapa, métricas y parciales por kilómetro" }}
        reverse
      />

      <section className="band-section" aria-labelledby="strava-title">
        <div className="wrap">
          <div className="band">
            <div className="icon icon-lg" aria-hidden="true"><FileUp size={24} /></div>
            <div>
              <h2 className="band-title" id="strava-title">Completá tus carreras de Strava</h2>
              <p>
                Importá un GPX, TCX o FIT —también el archivo completo que te baja Strava— y la carrera suma la ruta con
                horarios, la frecuencia cardíaca y las pausas.
              </p>
              <ul className="sources" aria-label="Formatos de archivo">
                <li className="chip chip-mono">GPX</li>
                <li className="chip chip-mono">TCX</li>
                <li className="chip chip-mono">FIT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="grabar-title">
        <div className="wrap">
          <div className="kicker">Para salir a correr</div>
          <h2 className="section-title" id="grabar-title">Grabá y entrená con el teléfono</h2>
          <p className="section-lead">Si no tenés reloj, o salís sin él, el teléfono alcanza.</p>
          <div className="duo">
            <article className="card card-lg">
              <div className="icon" aria-hidden="true"><Radio size={20} /></div>
              <h3>Grabá con el GPS</h3>
              <p>Funciona con la pantalla bloqueada y pausa solo cuando frenás.</p>
              <ul className="ticks">
                <li>iPhone: Live Activity y Dynamic Island</li>
                <li>Android: notificación con controles</li>
                <li>Avisos de voz configurables</li>
              </ul>
            </article>
            <article className="card card-lg">
              <div className="icon" aria-hidden="true"><Mic size={20} /></div>
              <h3>Entrenamientos guiados por voz</h3>
              <p>Armá series con ritmo objetivo. Una voz te va marcando cada paso.</p>
              <ul className="ticks">
                <li>Series con ritmo objetivo</li>
                <li>Te avisa si vas rápido o lento</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="tendencias-title">
        <div className="wrap">
          <div className="band band-surface">
            <div className="icon icon-lg" aria-hidden="true"><TrendingUp size={24} /></div>
            <div>
              <div className="kicker">Gratis</div>
              <h2 className="band-title" id="tendencias-title">Tendencias para ver cómo venís</h2>
              <p>Las tendencias son gratis. Con tu historial, Tramato te muestra:</p>
              <ul className="ticks ticks-cols">
                <li>Volumen y ritmo</li>
                <li>Mejores marcas en 1K, 5K, 10K, media y maratón</li>
                <li>Carga de entrenamiento, con alerta</li>
                <li>Calendario de carreras</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AiSection() {
  return (
    <Showcase
      id="ia"
      kicker="Inteligencia artificial"
      title="“Copiar para IA”: tu carrera, lista para tu IA de preferencia"
      lead="Con un toque, Tramato arma un resumen de tu carrera y de tus últimas semanas, listo para pegar en el asistente que uses."
      extra={<AssistantPicker />}
      points={[
        "Plantillas para analizar una carrera o armar el plan de la semana",
        "El resumen no incluye coordenadas GPS",
        "Lo pegás vos: Tramato no manda nada por su cuenta",
      ]}
      shot={{ src: "/assets/screen3.png", alt: "Pantalla Copiar para IA con plantillas y vista previa del resumen" }}
    />
  );
}

export function ExportSection() {
  return (
    <Showcase
      id="exportar"
      kicker="Exportar"
      title="Tus datos, en una planilla"
      lead="Llevate tu historial a CSV o Excel y analizalo como quieras."
      points={[
        "El historial, con una fila por carrera",
        "Los parciales km a km",
        "La serie completa, segundo a segundo",
      ]}
      shot={{ src: "/assets/screen4.png", alt: "Pantalla Exportar con nivel de detalle, rango de fechas y formato CSV o Excel" }}
      reverse
    />
  );
}

const extras = [
  {
    icon: BookOpenText,
    title: "Diario",
    text: "Anotá una nota y cómo te sentiste en cada carrera, y llevá los km de cada par de zapatillas.",
  },
  {
    icon: CalendarCheck,
    title: "Objetivo con racha",
    text: "Fijá un objetivo semanal o mensual, seguí tu racha y miralo en el widget de inicio.",
  },
  {
    icon: Share2,
    title: "Para tus historias",
    text: "Armá una imagen de tu carrera para compartir, en tres estilos.",
  },
];

export function Extras() {
  return (
    <section className="section-tight" aria-labelledby="extras-title">
      <div className="wrap">
        <div className="kicker">Y además</div>
        <h2 className="section-title" id="extras-title">Los detalles de todos los días</h2>
        <div className="grid">
          {extras.map(({ icon: Icon, title, text }) => (
            <article className="card" key={title}>
              <div className="icon" aria-hidden="true"><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
