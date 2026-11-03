import Image from "next/image";
import { BetaCta } from "@/components/beta-cta";
import { WaitlistForm } from "@/components/waitlist-form";

export function FinalCta() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="wrap final-wrap">
        <Image src="/assets/app-icon.png" alt="" width={80} height={80} className="final-icon" />
        <h2 className="section-title" id="final-title">Salí a correr. Tramato te cuenta qué pasó.</h2>
        <p className="section-lead">
          La beta de iPhone está abierta: instalala hoy. Si tenés Android, anotate y te avisamos cuando esté lista.
        </p>
        <div className="final-options">
          <BetaCta androidLink={false} />
          <div id="android">
            <WaitlistForm heading="Avisame cuando llegue a Android" platform="android" />
          </div>
        </div>
      </div>
    </section>
  );
}
