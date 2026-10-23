"use server";

import { parseSignup, saveSignup } from "@/lib/waitlist";
import type { Platform, WaitlistState } from "@/lib/waitlist-types";

export async function joinWaitlist(_previous: WaitlistState, formData: FormData): Promise<WaitlistState> {
  // Honeypot: un campo oculto que una persona nunca completa. Si viene lleno, respondemos "ok" sin guardar nada.
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    const platform: Platform = formData.get("platform") === "android" ? "android" : "iphone";
    return { status: "success", platform };
  }

  const parsed = parseSignup(formData);
  if (!parsed.ok) {
    return {
      status: "error",
      message: "Revisá los campos marcados.",
      fieldErrors: parsed.fieldErrors,
      values: parsed.values,
    };
  }

  const { signup } = parsed;
  const result = await saveSignup(signup);

  if (result === "created") return { status: "success", platform: signup.platform };
  if (result === "duplicate") return { status: "duplicate", platform: signup.platform };

  return {
    status: "error",
    message:
      result === "unavailable"
        ? "La lista de espera no está disponible en este momento. Probá de nuevo en un rato."
        : "No pudimos guardar tu email. Probá de nuevo en un momento.",
    values: { email: signup.email, platform: signup.platform, currentApp: signup.currentApp ?? "" },
  };
}
