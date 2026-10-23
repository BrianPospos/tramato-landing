import Image from "next/image";
import { WaitlistForm } from "@/components/waitlist-form";

export function Hero() {
  return (
    <header className="hero" id="lista">
      <div className="wrap">
        <div>
          <span className="eyebrow">Beta en TestFlight · Android en camino</span>
          <h1>
            Todas tus carreras en un solo lugar.
            <br />
            <em>Y explicadas.</em>
          </h1>
          <p className="lead">
            Tramato junta lo que corriste con Strava, Apple Watch, Garmin o Nike Run Club —o con el teléfono solo— y te
            muestra qué pasó en cada kilómetro.
          </p>
          <WaitlistForm heading="Sumate a la lista de espera" />
        </div>
        <div className="phones" aria-hidden="true">
          <Image className="p1" src="/assets/screen1.png" alt="" width={521} height={1100} priority sizes="(max-width: 900px) 240px, 300px" />
          <Image className="p2" src="/assets/screen2.png" alt="" width={521} height={1100} priority sizes="(max-width: 900px) 240px, 300px" />
        </div>
      </div>
    </header>
  );
}
