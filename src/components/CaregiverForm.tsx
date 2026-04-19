"use client";

import { useState, type FormEvent } from "react";
import { FORMSPREE, CONTACT } from "@/lib/site";
import { pushEvent } from "@/lib/analytics";
import { AlertCircle } from "lucide-react";

type Errors = Partial<Record<"name" | "phone" | "email" | "form", string>>;

const AVAILABILITY = ["Weekdays", "Evenings", "Weekends", "Overnights", "Flexible"];

function validateUsPhone(input: string) {
  const digits = input.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}
function validateEmail(input: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}

export function CaregiverForm() {
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

    pushEvent("caregiver_form_submit", {
      valid: Object.keys(next).length === 0,
      position: data.get("position"),
      experience: data.get("experience"),
    });

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    setSubmitting(true);
    try {
      if (!FORMSPREE.caregiver) {
        console.warn("[Allegiant] NEXT_PUBLIC_FORMSPREE_CAREGIVER_ID is not set. Redirecting to thank-you page without submission.");
        window.location.href = "/thank-you/caregiver";
        return;
      }
      const res = await fetch(`https://formspree.io/f/${FORMSPREE.caregiver}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`Form submission failed (${res.status})`);
      window.location.href = "/thank-you/caregiver";
    } catch (err) {
      setSubmitting(false);
      setErrors({
        form: `Something went wrong submitting your application. Please try again, or call us at ${CONTACT.phoneDisplay}.`,
      });
      console.error(err);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 md:p-8 grid gap-5">
      <div>
        <h2 className="font-serif text-2xl">Apply to join our team</h2>
        <p className="mt-2" style={{ color: "var(--color-ink-700)" }}>
          Tell us about yourself. We review every application and will reach out to schedule a conversation.
        </p>
      </div>

      <div>
        <label htmlFor="cg-name" className="field-label">
          Your name <span style={{ color: "#B3261E" }}>*</span>
        </label>
        <input
          id="cg-name"
          name="name"
          autoComplete="name"
          required
          className="field-input"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "cg-name-err" : undefined}
        />
        {errors.name && <div id="cg-name-err" className="field-error" role="alert">{errors.name}</div>}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cg-phone" className="field-label">
            Phone number <span style={{ color: "#B3261E" }}>*</span>
          </label>
          <input
            id="cg-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            className="field-input"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "cg-phone-err" : undefined}
          />
          {errors.phone && <div id="cg-phone-err" className="field-error" role="alert">{errors.phone}</div>}
        </div>
        <div>
          <label htmlFor="cg-email" className="field-label">
            Email <span style={{ color: "#B3261E" }}>*</span>
          </label>
          <input
            id="cg-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="field-input"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "cg-email-err" : undefined}
          />
          {errors.email && <div id="cg-email-err" className="field-error" role="alert">{errors.email}</div>}
        </div>
      </div>

      <div>
        <label htmlFor="cg-position" className="field-label">Position applying for</label>
        <select id="cg-position" name="position" className="field-select" defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Caregiver</option>
          <option>PCA</option>
          <option>Homemaker</option>
          <option>Companion</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <fieldset>
        <legend className="field-label">Do you have caregiving experience?</legend>
        <div className="flex flex-wrap gap-5 mt-1">
          {["Yes", "No", "Some informal experience"].map((opt, i) => (
            <label key={opt} className="inline-flex items-center gap-2 text-[0.975rem]">
              <input type="radio" name="experience" value={opt} defaultChecked={i === 0} className="h-4 w-4" />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="field-label">Availability</legend>
        <div className="grid sm:grid-cols-2 gap-2 mt-1">
          {AVAILABILITY.map((opt) => (
            <label key={opt} className="inline-flex items-center gap-2 text-[0.975rem]">
              <input type="checkbox" name="availability" value={opt} className="h-4 w-4" />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="field-label">Do you have reliable transportation?</legend>
        <div className="flex flex-wrap gap-5 mt-1">
          {["Yes", "No"].map((opt, i) => (
            <label key={opt} className="inline-flex items-center gap-2 text-[0.975rem]">
              <input type="radio" name="transportation" value={opt} defaultChecked={i === 0} className="h-4 w-4" />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cg-why" className="field-label">Why do you want to work in caregiving?</label>
        <textarea id="cg-why" name="why" className="field-textarea" rows={4} />
      </div>

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

      <div className="pt-1">
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Sending…" : "Submit application"}
        </button>
      </div>
    </form>
  );
}
