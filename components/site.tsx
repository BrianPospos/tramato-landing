import Link from "next/link";

export const CONTACT_URL = "https://github.com/BrianPospos/tramato-landing/issues";

export function Nav({ home = false }: { home?: boolean }) {
  return (
    <nav className="nav" aria-label="Principal">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Tramato, inicio">
          <img src="/assets/tramato-lockup-on-dark.svg" alt="Tramato" width={120} height={28} />
        </Link>
        <div className="links">
          {home ? (
            <>
              <a className="hide-sm" href="#funciones">Funciones</a>
              <a className="hide-sm" href="#preguntas">Preguntas</a>
              <a className="btn btn-primary btn-sm" href="#lista">Lista de espera</a>
            </>
          ) : (
            <Link href="/">Inicio</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© 2026 Tramato</span>
        <span className="footer-links">
          <Link href="/privacidad">Privacidad</Link>
          <a href={CONTACT_URL}>Contacto</a>
        </span>
      </div>
    </footer>
  );
}
