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
 * sin dependencias extra. Usa la clave pública (publishable/anon): la tabla solo permite
 * INSERT por RLS, no se puede leer desde afuera. `email` es único y un duplicado se ignora
 * sin avisar, así nadie puede averiguar qué emails ya están anotados.
 */
export async function saveSignup({ email, platform, currentApp }: Signup): Promise<SaveResult> {
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, "");
  const publicKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!baseUrl || !publicKey) {
    console.error("[waitlist] Faltan NEXT_PUBLIC_SUPABASE_URL y/o NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY. Ver README.");
    return "unavailable";
  }

  try {
    const response = await fetch(`${baseUrl}/rest/v1/waitlist?on_conflict=email`, {
      method: "POST",
      headers: {
        apikey: publicKey,
        Authorization: `Bearer ${publicKey}`,
        "Content-Type": "application/json",
        Prefer: "resolution=ignore-duplicates,return=minimal",
      },
      body: JSON.stringify({ email, platform, current_app: currentApp }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

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
