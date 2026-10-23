import Image from "next/image";
import { WaitlistForm } from "@/components/waitlist-form";

export function Hero() {
  return (
    <header className="hero" id="lista">
      <div className="wrap">
        <div>
          <span className="eyebrow">Beta en TestFlight · Android en camino</span>
          <h1>
            Grabá tus carreras, juntá las de todas tus apps.
            <br />
            <em>Y entendé cada kilómetro.</em>
          </h1>
          <p className="lead">
            Salí a correr con Tramato o seguí usando Strava, tu Apple Watch, Garmin o Nike Run Club: todo termina en un
            solo historial, con parciales, mejores marcas, carga y un resumen listo para tu IA.
          </p>
          <WaitlistForm heading="Sumate a la lista de espera" />
        </div>
        <div className="phones" aria-hidden="true">
          <Image className="p1" src="/assets/screen-history.png" alt="" width={600} height={1305} priority sizes="(max-width: 900px) 240px, 300px" />
          <Image className="p2" src="/assets/screen-record.png" alt="" width={600} height={1305} priority sizes="(max-width: 900px) 240px, 300px" />
        </div>
      </div>
    </header>
  );
}
