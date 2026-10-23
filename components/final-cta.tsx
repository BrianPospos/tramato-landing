import Image from "next/image";
import { WaitlistForm } from "@/components/waitlist-form";

export function FinalCta() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="wrap final-wrap">
        <Image src="/assets/app-icon.png" alt="" width={80} height={80} className="final-icon" />
        <h2 className="section-title" id="final-title">Salí a correr. Tramato te cuenta qué pasó.</h2>
        <p className="section-lead">
          Sumate a la lista de espera. Te avisamos cuando haya lugar en la beta de iPhone y cuando Android esté listo.
        </p>
        <WaitlistForm heading="Quiero probar Tramato" />
      </div>
    </section>
  );
}
