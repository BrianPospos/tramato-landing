import Link from "next/link";

export const CONTACT_URL = "https://github.com/BrianPospos/tramato-landing/issues";

export function Nav({ home = false }: { home?: boolean }) {
  return (
    <nav className="nav">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Tramato, inicio">
          <img src="/assets/tramato-lockup-on-dark.svg" alt="Tramato" />
        </Link>
        <div className="links">
          {home ? (
            <>
              <a className="hide-sm" href="#funciones">Funciones</a>
              <a className="hide-sm" href="#privacidad">Privacidad</a>
              <Link href="/privacidad">Política de privacidad</Link>
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
        <span>
          <Link href="/privacidad">Política de privacidad</Link> · <a href={CONTACT_URL}>Contacto</a>
        </span>
      </div>
    </footer>
  );
}
