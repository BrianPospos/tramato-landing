import { ArrowUpRight } from "lucide-react";
import { TESTFLIGHT_URL } from "@/lib/beta";

/** Botón a la beta abierta de iPhone (TestFlight), con los pasos para instalarla. */
export function BetaCta({ heading = "Probá la beta en iPhone", androidLink = true }: { heading?: string; androidLink?: boolean }) {
  return (
    <div className="waitlist beta">
      <h3 className="waitlist-title">{heading}</h3>
      <p className="beta-lead">Gratis, con TestFlight, la app de Apple para probar betas. Necesitás iOS 17 o posterior.</p>
      <a className="btn btn-primary btn-block" href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer">
        Instalar la beta <ArrowUpRight size={18} aria-hidden="true" />
      </a>
      <ol className="beta-steps">
        <li>Abrí este enlace desde tu iPhone.</li>
        <li>Instalá TestFlight si no lo tenés.</li>
        <li>Aceptá la invitación e instalá Tramato.</li>
      </ol>
      {androidLink && (
        <p className="waitlist-note">
          ¿Tenés Android? <a href="#android">Anotate y te avisamos</a> cuando esté lista.
        </p>
      )}
    </div>
  );
}
