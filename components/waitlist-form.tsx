"use client";

import Link from "next/link";
import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { joinWaitlist } from "@/app/actions";
import { initialWaitlistState } from "@/lib/waitlist-types";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary btn-block" disabled={pending} aria-disabled={pending}>
      {pending ? (
        <>
          <LoaderCircle className="spin" size={18} aria-hidden="true" /> Anotándote…
        </>
      ) : (
        "Sumarme a la lista"
      )}
    </button>
  );
}

export function WaitlistForm({ heading, note }: { heading: string; note?: string }) {
  const uid = useId();
  const [state, formAction] = useActionState(joinWaitlist, initialWaitlistState);

  const emailId = `${uid}-email`;
  const emailErrorId = `${uid}-email-error`;
  const platformErrorId = `${uid}-platform-error`;
  const appId = `${uid}-app`;
  const appErrorId = `${uid}-app-error`;
  const errors = state.fieldErrors ?? {};

  if (state.status === "success" || state.status === "duplicate") {
    return (
      <div className="waitlist waitlist-done" role="status">
        <CheckCircle2 size={28} aria-hidden="true" />
        <h3>{state.status === "success" ? "Listo, estás en la lista." : "Ya estabas en la lista."}</h3>
        <p>
          {state.platform === "android"
            ? "Android está en camino. Cuando haya novedades, te avisamos por email."
            : "Te escribimos por email cuando haya lugar en la beta de iPhone."}
        </p>
      </div>
    );
  }

  return (
    <form className="waitlist" action={formAction} noValidate>
      <h3 className="waitlist-title">{heading}</h3>

      <div className="field">
        <label htmlFor={emailId}>Email</label>
        <input
          id={emailId}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          required
          maxLength={254}
          placeholder="vos@ejemplo.com"
          defaultValue={state.values?.email ?? ""}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? emailErrorId : undefined}
        />
        {errors.email && (
          <p className="field-error" id={emailErrorId}>
            {errors.email}
          </p>
        )}
      </div>

      <fieldset className="field" aria-describedby={errors.platform ? platformErrorId : undefined}>
        <legend>¿Qué teléfono usás?</legend>
        <div className="seg">
          <label>
            <input type="radio" name="platform" value="iphone" required defaultChecked={state.values?.platform === "iphone"} />
            <span>iPhone</span>
          </label>
          <label>
            <input type="radio" name="platform" value="android" required defaultChecked={state.values?.platform === "android"} />
            <span>Android</span>
          </label>
        </div>
        {errors.platform && (
          <p className="field-error" id={platformErrorId}>
            {errors.platform}
          </p>
        )}
      </fieldset>

      <div className="field">
        <label htmlFor={appId}>
          ¿Con qué registrás hoy tus carreras? <span className="optional">(opcional)</span>
        </label>
        <input
          id={appId}
          name="currentApp"
          type="text"
          maxLength={80}
          autoComplete="off"
          placeholder="Strava, Garmin, Apple Watch…"
          defaultValue={state.values?.currentApp ?? ""}
          aria-invalid={errors.currentApp ? true : undefined}
          aria-describedby={errors.currentApp ? appErrorId : undefined}
        />
        {errors.currentApp && (
          <p className="field-error" id={appErrorId}>
            {errors.currentApp}
          </p>
        )}
      </div>

      <div className="hp" aria-hidden="true">
        <label>
          No completes este campo
          <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <div aria-live="polite">
        {state.status === "error" && state.message && <p className="form-error">{state.message}</p>}
      </div>

      <SubmitButton />

      <p className="waitlist-note">
        {note ?? "Usamos tu email solo para avisarte sobre la beta."}{" "}
        <Link href="/privacidad#lista-de-espera">Cómo lo usamos</Link>.
      </p>
    </form>
  );
}
