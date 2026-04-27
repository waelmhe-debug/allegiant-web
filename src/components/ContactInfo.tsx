import { MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/site";
import { CallButton, SmsLink, EmailLink } from "./PhoneLink";

export function ContactInfo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-ink-500)" }}>
            Call or text
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
            <CallButton variant="plain" label={CONTACT.phoneDisplay} />
            <SmsLink />
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-ink-500)" }}>
          Email
        </div>
        <div className="mt-1">
          <EmailLink />
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-ink-500)" }}>
          Office
        </div>
        <address className="mt-1 not-italic inline-flex items-start gap-2" style={{ color: "var(--color-ink-900)" }}>
          <MapPin className="h-4 w-4 mt-1" style={{ color: "var(--color-teal-600)" }} aria-hidden />
          <span>
            {CONTACT.address.street}
            <br />
            {CONTACT.address.city}, {CONTACT.address.region} {CONTACT.address.postalCode}
          </span>
        </address>
      </div>

      <div>
        <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-ink-500)" }}>
          Hours
        </div>
        <div className="mt-1 inline-flex items-start gap-2" style={{ color: "var(--color-ink-900)" }}>
          <Clock className="h-4 w-4 mt-1" style={{ color: "var(--color-teal-600)" }} aria-hidden />
          <span>
            <span className="font-medium">Office hours:</span> {CONTACT.hours.office.full}
            <br />
            <span className="font-medium">Care services:</span> {CONTACT.hours.care.full}
          </span>
        </div>
      </div>
    </div>
  );
}
