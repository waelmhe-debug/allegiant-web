"use client";

import { useState, type FormEvent } from "react";
import { FORMSPREE, CONTACT } from "@/lib/site";
import { pushEvent } from "@/lib/analytics";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type Errors = Partial<Record<"name" | "phone" | "email" | "form", string>>;

const SUPPORT_OPTIONS = [
  "Personal care",
  "Respite",
  "Companionship",
  "Post-discharge / transitional care",
  "Community living support",
  "Family training",
  "Not sure yet",
];

function validateUsPhone(input: string) {
  const digits = input.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

function validateEmail(input: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}

export function CareSeekerForm({
  variant = "default",
}: {
  variant?: "default" | "inline";
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!phone) next.phone = "Please share a phone number.";
    else if (!validateUsPhone(phone)) next.phone = "Please enter a valid US phone number.";
    if (!email) next.email = "Please share an email address.";
    else if (!validateEmail(email)) next.email = "That email doesn’t look quite right.";

    // Fire dataLayer event on submit attempt
    pushEvent("care_seeker_form_submit", {
      valid: Object.keys(next).length === 0,
      preferred_contact: data.get("preferredContact"),
      when_to_start: data.get("whenToStart"),
    });

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    setSubmitting(true);
    try {
      if (!FORMSPREE.careSeeker) {
        // No endpoint configured yet — treat as success in dev.
        console.warn("[Allegiant] NEXT_PUBLIC_FORMSPREE_CARE_SEEKER_ID is not set. Redirecting to thank-you page without submission.");
        window.location.href = "/thank-you/care-seeker";
        return;
      }
      const res = await fetch(`https://formspree.io/f/${FORMSPREE.careSeeker}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`Form submission failed (${res.status})`);
      window.location.href = "/thank-you/care-seeker";
    } catch (err) {
      setSubmitting(false);
      setErrors({
        form: `Something went wrong submitting the form. Please try again, or call us directly at ${CONTACT.phoneDisplay}.`,
      });
      console.error(err);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={variant === "inline" ? "grid gap-4" : "card p-6 md:p-8 grid gap-5"}
    >
      {variant !== "inline" && (
        <div>
          <h2 className="font-serif text-2xl">Request a free consultation</h2>
          <p className="mt-2" style={{ color: "var(--color-ink-700)" }}>
            Tell us a bit about your situation. A member of our care team will reach out within one business hour.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="cs-name" className="field-label">
          Your name <span style={{ color: "#B3261E" }}>*</span>
        </label>
        <input
          id="cs-name"
          name="name"
          autoComplete="name"
          required
          className="field-input"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "cs-name-err" : undefined}
        />
        {errors.name && (
          <div id="cs-name-err" className="field-error" role="alert">
            {errors.name}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cs-phone" className="field-label">
            Phone number <span style={{ color: "#B3261E" }}>*</span>
          </label>
          <input
            id="cs-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            inputMode="tel"
            className="field-input"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "cs-phone-err" : undefined}
          />
          {errors.phone && (
            <div id="cs-phone-err" className="field-error" role="alert">
              {errors.phone}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="cs-email" className="field-label">
            Email <span style={{ color: "#B3261E" }}>*</span>
          </label>
          <input
            id="cs-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="field-input"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "cs-email-err" : undefined}
          />
          {errors.email && (
            <div id="cs-email-err" className="field-error" role="alert">
              {errors.email}
            </div>
          )}
        </div>
      </div>

      <fieldset>
        <legend className="field-label">Preferred contact method</legend>
        <div className="flex flex-wrap gap-5 mt-1">
          {["Call", "Text", "Email"].map((opt, i) => (
            <label key={opt} className="inline-flex items-center gap-2 text-[0.975rem]">
              <input
                type="radio"
                name="preferredContact"
                value={opt}
                defaultChecked={i === 0}
                className="h-4 w-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cs-who" className="field-label">Who needs care?</label>
        <select id="cs-who" name="whoNeedsCare" className="field-select" defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Myself</option>
          <option>A parent</option>
          <option>A spouse</option>
          <option>Another family member</option>
          <option>Someone else</option>
        </select>
      </div>

      <fieldset>
        <legend className="field-label">What kind of support are you looking for?</legend>
        <div className="grid sm:grid-cols-2 gap-2 mt-1">
          {SUPPORT_OPTIONS.map((opt) => (
            <label key={opt} className="inline-flex items-start gap-2 text-[0.975rem]">
              <input type="checkbox" name="supportType" value={opt} className="h-4 w-4 mt-1" />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cs-when" className="field-label">When would you like care to start?</label>
        <select id="cs-when" name="whenToStart" className="field-select" defaultValue="">
          <option value="" disabled>Select one</option>
          <option>This week</option>
          <option>Next 2 weeks</option>
          <option>Within a month</option>
          <option>Just planning ahead</option>
        </select>
      </div>

      <div>
        <label htmlFor="cs-notes" className="field-label">Anything else we should know?</label>
        <textarea id="cs-notes" name="additionalInfo" className="field-textarea" rows={4} />
      </div>

      {/* Honeypot */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {errors.form && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-md p-3 border"
          style={{ background: "#FDECEA", borderColor: "#F5B7B1", color: "#782520" }}
        >
          <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" aria-hidden />
          <span>{errors.form}</span>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Sending…" : "Request consultation"}
        </button>
        <div className="text-sm inline-flex items-center gap-1.5" style={{ color: "var(--color-ink-500)" }}>
          <CheckCircle2 className="h-4 w-4" style={{ color: "var(--color-success-600)" }} aria-hidden />
          We&rsquo;ll reach out within one business hour.
        </div>
      </div>
    </form>
  );
}
