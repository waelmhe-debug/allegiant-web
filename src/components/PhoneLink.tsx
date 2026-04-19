"use client";

import { Phone, MessageSquare, Mail } from "lucide-react";
import { CONTACT } from "@/lib/site";
import { pushEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost" | "plain";

const variantClass: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
  plain: "inline-flex items-center gap-2 font-semibold prose-a",
};

export function CallButton({
  label,
  variant = "primary",
  className = "",
}: {
  label?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={`tel:${CONTACT.phoneTel}`}
      onClick={() => pushEvent("phone_click", { phone: CONTACT.phoneDisplay })}
      className={`${variantClass[variant]} ${className}`}
      aria-label={`Call Allegiant Home Care at ${CONTACT.phoneDisplay}`}
    >
      <Phone className="h-4 w-4" aria-hidden />
      <span>{label ?? `Call ${CONTACT.phoneDisplay}`}</span>
    </a>
  );
}

export function SmsLink({
  label = "Text us",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={`sms:${CONTACT.phoneSms}`}
      onClick={() => pushEvent("sms_click", { phone: CONTACT.phoneDisplay })}
      className={`inline-flex items-center gap-2 font-semibold prose-a ${className}`}
    >
      <MessageSquare className="h-4 w-4" aria-hidden />
      <span>{label}</span>
    </a>
  );
}

export function EmailLink({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={`mailto:${CONTACT.email}`}
      onClick={() => pushEvent("email_click", { email: CONTACT.email })}
      className={`inline-flex items-center gap-2 font-semibold prose-a ${className}`}
    >
      <Mail className="h-4 w-4" aria-hidden />
      <span>{label ?? CONTACT.email}</span>
    </a>
  );
}
