import type { Platform, WaitlistFieldErrors } from "./waitlist-types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_EMAIL = 254;
const MAX_CURRENT_APP = 80;

export type Signup = { email: string; platform: Platform; currentApp: string | null };

export type ParseResult =
  | { ok: true; signup: Signup }
  | { ok: false; fieldErrors: WaitlistFieldErrors; values: { email: string; platform: string; currentApp: string } };

function text(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseSignup(formData: FormData): ParseResult {
  const email = text(formData.get("email")).toLowerCase();
  const platform = text(formData.get("platform"));
  const currentApp = text(formData.get("currentApp")).replace(/\s+/g, " ");

  const fieldErrors: WaitlistFieldErrors = {};

  if (!email) fieldErrors.email = "Ingresá tu email.";
  else if (email.length > MAX_EMAIL || !EMAIL_RE.test(email)) fieldErrors.email = "Revisá el email, parece que no es válido.";

  if (platform !== "iphone" && platform !== "android") fieldErrors.platform = "Elegí iPhone o Android.";

  if (currentApp.length > MAX_CURRENT_APP) fieldErrors.currentApp = `Máximo ${MAX_CURRENT_APP} caracteres.`;

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors, values: { email: text(formData.get("email")), platform, currentApp } };
  }

  return { ok: true, signup: { email, platform: platform as Platform, currentApp: currentApp || null } };
}

export type SaveResult = "created" | "duplicate" | "unavailable" | "failed";

/**
 * Guarda el registro en la tabla `waitlist` de Supabase usando su API REST (PostgREST),
 * sin dependencias extra. Corre solo en el servidor con la clave de servicio, así la tabla
 * queda cerrada para el navegador (RLS activo y sin políticas para anon). Un email repetido
 * se trata como éxito, para que nadie pueda averiguar qué emails ya están anotados.
 */
export async function saveSignup({ email, platform, currentApp }: Signup): Promise<SaveResult> {
  const baseUrl = (process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL)?.replace(/\/+$/, "");
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;

  if (!baseUrl || !serviceKey) {
    console.error("[waitlist] Faltan SUPABASE_URL y/o SUPABASE_SERVICE_ROLE_KEY. Ver README.");
    return "unavailable";
  }

  try {
    const response = await fetch(`${baseUrl}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email, platform, current_app: currentApp }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (response.status === 409) return "created";

    if (!response.ok) {
      console.error("[waitlist] Supabase respondió", response.status, await response.text());
      return "failed";
    }

    return "created";
  } catch (error) {
    console.error("[waitlist] Error al guardar el registro:", error);
    return "failed";
  }
}
