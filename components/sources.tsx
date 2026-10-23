import { Smartphone, Watch } from "lucide-react";

const sources = ["Strava", "Apple Watch", "Garmin", "Nike Run Club", "Samsung Health", "Cinta", "El teléfono"];

export function Sources() {
  return (
    <section className="section-tight" aria-labelledby="fuentes-title">
      <div className="wrap">
        <div className="kicker">Compatibilidad</div>
        <h2 className="section-title" id="fuentes-title">Funciona con lo que ya usás</h2>
        <p className="section-lead">
          No importa con qué registraste cada carrera: Tramato las lee desde la app de salud de tu teléfono y las junta en
          un solo historial. Y si no usás ninguna, Tramato graba con el teléfono.
        </p>

        <div className="platforms">
          <div className="card platform">
            <div className="icon" aria-hidden="true"><Smartphone size={20} /></div>
            <h3>iPhone</h3>
            <p>Lee tus carreras de Apple Salud. Hoy está en beta en TestFlight.</p>
          </div>
          <div className="card platform">
            <div className="icon" aria-hidden="true"><Watch size={20} /></div>
            <h3>Android <span className="tag">En camino</span></h3>
            <p>Va a leer de Health Connect. La versión nativa está en pruebas.</p>
          </div>
        </div>

        <ul className="sources" aria-label="Apps y dispositivos compatibles">
          {sources.map((source) => (
            <li className="chip" key={source}>{source}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
