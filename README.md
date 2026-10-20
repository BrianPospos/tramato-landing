# Tramato — landing

Landing de Tramato y su política de privacidad. Next.js (App Router) + Tailwind CSS 4, listo para importar en [v0](https://v0.dev) o desplegar en Vercel.

- `/` — landing (`app/page.tsx`)
- `/privacidad` — política de privacidad (`app/privacidad/page.tsx`). Es la URL que va en App Store Connect / TestFlight.
- Estilos: `app/globals.css`. Los colores del kit de marca están como variables CSS y como tokens de Tailwind (`bg-bg`, `bg-surface`, `text-accent`, `text-text-2`, `font-mono`…).
- Imágenes: `public/assets` (logo, ícono y capturas del mockup).

```bash
npm install
npm run dev   # http://localhost:3000
```

La app vive en otro repo (`tramato-mvp`). Si cambia qué datos usa la app, actualizá la política y su fecha antes de publicar esa versión.
