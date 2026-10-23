import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  BookOpenText,
  DatabaseBackup,
  CalendarCheck,
  FileUp,
  Mic,
  Share2,
} from "lucide-react";

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="shot">
      <Image src={src} alt={alt} width={600} height={1305} sizes="(max-width: 900px) 70vw, 340px" />
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
        id="grabar"
        kicker="Para salir a correr"
        title="Grabá con el teléfono"
        lead="Si no tenés reloj, o salís sin él, el teléfono alcanza. Funciona con la pantalla bloqueada y pausa solo cuando frenás."
        points={[
          "iPhone: Live Activity y Dynamic Island",
          "Android: notificación con controles",
          "Avisos de voz por distancia o por tiempo",
          "Se guarda aunque no des permiso a Salud",
        ]}
        shot={{ src: "/assets/screen-record.png", alt: "Grabar una carrera con pausa automática y avisos de voz" }}
      />

      <section className="band-section" aria-labelledby="guiados-title">
        <div className="wrap">
          <div className="band band-surface">
            <div className="icon icon-lg" aria-hidden="true"><Mic size={24} /></div>
            <div>
              <h2 className="band-title" id="guiados-title">Entrenamientos guiados por voz</h2>
              <p>Armá series con ritmo objetivo. Una voz te va marcando cada paso.</p>
              <ul className="ticks ticks-cols">
                <li>Calentamiento, series por distancia o tiempo, pausas y enfriamiento</li>
                <li>Te avisa antes de cada cambio y si vas rápido o lento</li>
                <li>El paso actual, también en la pantalla bloqueada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Showcase
        kicker="Historial"
        title="Todas tus carreras, juntas"
        lead="Cada carrera muestra de qué app viene. Si una misma salida aparece dos veces, Tramato lo detecta, y cada semana te arma el resumen."
        points={[
          "El origen de cada carrera: Strava, Apple Watch, Garmin, lo que sea",
          "Detección de duplicados",
          "Resumen semanal con km, tiempo y cantidad de carreras",
          "Aviso cuando subís la carga demasiado rápido",
        ]}
        shot={{ src: "/assets/screen-history.png", alt: "Historial de carreras con el resumen de la semana" }}
        reverse
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
        shot={{ src: "/assets/screen-detail.png", alt: "Detalle de una carrera con mapa, métricas y parciales por kilómetro" }}
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


      <Showcase
        kicker="Tendencias · gratis"
        title="Tendencias para ver cómo venís"
        lead="Con tu historial, Tramato te muestra cómo evolucionás, sin suscripción."
        points={[
          "Volumen semanal y ritmo medio",
          "Mejores marcas en 1K, 5K, 10K, media y maratón",
          "Carga de entrenamiento (agudo:crónico), con alerta",
          "Calendario de carreras",
        ]}
        shot={{ src: "/assets/screen-trends.png", alt: "Tendencias con mejores marcas, carga de entrenamiento y volumen semanal" }}
        reverse
      />
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
        "Plantillas para analizar una carrera, armar el plan de la semana o prevenir lesiones",
        "Suma tus últimas 6 semanas, tu perfil, tus notas y cómo te sentiste",
        "El resumen no incluye coordenadas GPS",
        "Lo pegás vos: Tramato no manda nada por su cuenta",
      ]}
      shot={{ src: "/assets/screen-copy.png", alt: "Pantalla Copiar para IA con plantillas y vista previa del resumen" }}
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
        "Con el rango de fechas que elijas",
      ]}
      shot={{ src: "/assets/screen-export.png", alt: "Pantalla Exportar con nivel de detalle, rango de fechas y formato CSV o Excel" }}
      reverse
    />
  );
}

const extras = [
  {
    icon: BookOpenText,
    title: "Diario",
    text: "Ponele nombre, una nota y cómo te sentiste a cada carrera, y llevá los km de cada par de zapatillas con aviso de recambio.",
  },
  {
    icon: CalendarCheck,
    title: "Objetivo con racha",
    text: "Fijá un objetivo semanal o mensual, seguí tu racha y miralo en el widget de inicio.",
  },
  {
    icon: Share2,
    title: "Para tus historias",
    text: "Armá una imagen con distancia, tiempo, ritmo y el dibujo del recorrido: tarjeta, fondo transparente o con el mapa.",
  },
  {
    icon: DatabaseBackup,
    title: "Copia de seguridad",
    text: "Guardá en un archivo tus notas, zapatillas, objetivo, importaciones y entrenamientos, y restaurálos en otro teléfono.",
  },
];

const privacyPoints = [
  "Sin cuentas ni inicio de sesión",
  "Sin analítica, rastreo ni publicidad dentro de la app",
  "Todo se calcula en tu teléfono",
  "“Copiar para IA” nunca incluye coordenadas GPS",
  "Podés borrar todo desde Ajustes en un toque",
];

export function PrivacySection() {
  return (
    <section id="privacidad" className="section-tight" aria-labelledby="privacidad-title">
      <div className="wrap">
        <div className="privacy-band">
          <div>
            <div className="kicker">Privacidad</div>
            <h2 className="section-title" id="privacidad-title">Tus carreras no salen de tu teléfono</h2>
            <p className="section-lead">
              La app no tiene servidores. Tus datos solo salen si vos exportás, copiás o compartís algo.
            </p>
            <Link href="/privacidad">Leer la política de privacidad →</Link>
          </div>
          <ul>
            {privacyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

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
