import Link from "next/link";
import { Footer, Nav } from "@/components/site";

const features = [
  { icon: "km", title: "Parciales y gráficos", text: "Ritmo km a km, frecuencia cardíaca, deriva, altitud y cadencia, con mapa del recorrido." },
  { icon: "AI", title: "Copiar para IA", text: "Un resumen compacto de tu carrera y tus últimas semanas para pedirle un análisis o un plan a ChatGPT o Claude." },
  { icon: "●", title: "Grabá con el iPhone", text: "GPS, pausa automática, avisos de voz y control desde la pantalla bloqueada y la Dynamic Island." },
  { icon: "6×", title: "Entrenamientos guiados", text: "Series por distancia o tiempo con ritmo objetivo. La voz te avisa cada paso y si vas rápido o lento." },
  { icon: "PR", title: "Mejores marcas", text: "Tu mejor 1K, 5K, 10K, media y maratón, buscadas dentro de cada carrera." },
  { icon: "%", title: "Carga y objetivo", text: "Objetivo de km semanal con racha, aviso cuando subís la carga demasiado rápido y widget en la pantalla de inicio." },
  { icon: "GPX", title: "Importá de Strava", text: "Sumá el GPX o FIT de una carrera y obtené parciales aunque Strava no los haya guardado en Salud." },
  { icon: "xls", title: "Exportá", text: "Tu historial, los parciales o la serie completa a CSV o Excel, para analizarlos como quieras." },
  { icon: "↗", title: "Compartí", text: "Una imagen con distancia, tiempo, ritmo y el dibujo del recorrido, para tus historias." },
];

const sources = ["Strava", "Apple Watch", "Garmin Connect", "Nike Run Club", "Cinta", "Solo el iPhone"];

const screens = [
  { src: "/assets/screen1.png", alt: "Historial de carreras con el resumen de la semana", caption: "Tu semana y tus carreras" },
  { src: "/assets/screen2.png", alt: "Detalle de una carrera con mapa, métricas y parciales", caption: "Detalle con parciales" },
  { src: "/assets/screen3.png", alt: "Pantalla Copiar para IA", caption: "Copiar para IA" },
  { src: "/assets/screen4.png", alt: "Pantalla Exportar a CSV o Excel", caption: "Exportar" },
];

const privacyPoints = [
  "Sin cuentas ni inicio de sesión",
  "Sin analítica, rastreo ni publicidad",
  "Solo escribe en Salud las carreras que grabás con la app",
  "“Copiar para IA” nunca incluye coordenadas GPS",
  "Podés borrar todo desde Ajustes en un toque",
];

export default function Home() {
  return (
    <>
      <Nav home />

      <header className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow">Beta en TestFlight</span>
            <h1>
              Tus carreras,
              <br />
              <em>entendidas.</em>
            </h1>
            <p className="lead">
              Tramato lee tus carreras de Apple Salud —las de Strava, Apple Watch, Garmin o Nike Run Club— y te muestra lo
              que importa: parciales por km, mejores marcas, carga de entrenamiento y un resumen listo para pegarle a ChatGPT
              o Claude.
            </p>
            <div className="cta">
              <a className="btn btn-primary" href="#beta">Probar la beta</a>
              <a className="btn btn-secondary" href="#funciones">Ver funciones</a>
            </div>
            <p className="hero-note">Para iPhone con iOS 17 o posterior. Gratis.</p>
          </div>
          <div className="phones" aria-hidden="true">
            <img className="p1" src="/assets/screen1.png" alt="" />
            <img className="p2" src="/assets/screen2.png" alt="" />
          </div>
        </div>
      </header>

      <section id="funciones">
        <div className="wrap">
          <div className="kicker">Funciones</div>
          <h2 className="section-title">Todo lo de tus carreras, en un solo lugar</h2>
          <p className="section-lead">
            Si ya registrás tus carreras con cualquier app, Tramato las encuentra en Salud. Y si salís solo con el celular,
            también graba.
          </p>
          <div className="grid">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <div className="icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
          <div className="sources">
            {sources.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="screens">
            {screens.map((s) => (
              <figure key={s.src}>
                <img src={s.src} alt={s.alt} loading="lazy" />
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="privacidad">
        <div className="wrap">
          <div className="privacy-band">
            <div>
              <div className="kicker">Privacidad</div>
              <h2 className="section-title">Tus datos no salen del iPhone</h2>
              <p className="section-lead" style={{ marginBottom: 18 }}>
                Tramato no tiene servidores, cuentas ni publicidad. Todo se calcula en tu teléfono, y los datos solo salen si
                vos exportás, copiás o compartís algo.
              </p>
              <Link href="/privacidad">Leer la política de privacidad →</Link>
            </div>
            <ul>
              {privacyPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="beta">
        <div className="wrap" style={{ textAlign: "center" }}>
          <img src="/assets/app-icon.png" alt="" width={96} height={96} style={{ margin: "0 auto 20px", borderRadius: 22 }} />
          <h2 className="section-title">Probá la beta</h2>
          <p className="section-lead" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Tramato está en prueba en TestFlight. Instalá TestFlight desde la App Store y abrí la invitación que te llegó por
            mail.
          </p>
          <div className="cta" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="https://apps.apple.com/app/testflight/id899247664">Descargar TestFlight</a>
          </div>
          <div className="stat-row" style={{ justifyContent: "center" }}>
            <div className="stat"><b>0</b><span>servidores</span></div>
            <div className="stat"><b>0</b><span>cuentas</span></div>
            <div className="stat"><b>100%</b><span>en tu iPhone</span></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
