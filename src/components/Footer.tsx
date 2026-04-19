import Link from "next/link";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { NAV, SITE, SOCIAL, CONTACT } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { Logo } from "./Logo";

export function Footer() {
  const socialLinks = [
    SOCIAL.instagram && { href: SOCIAL.instagram, Icon: Instagram, label: "Instagram" },
    SOCIAL.facebook && { href: SOCIAL.facebook, Icon: Facebook, label: "Facebook" },
    SOCIAL.linkedin && { href: SOCIAL.linkedin, Icon: Linkedin, label: "LinkedIn" },
    SOCIAL.youtube && { href: SOCIAL.youtube, Icon: Youtube, label: "YouTube" },
  ].filter(Boolean) as { href: string; Icon: typeof Instagram; label: string }[];

  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-24 border-t"
      style={{ background: "#fff", borderColor: "var(--color-border)" }}
    >
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div>
          <Logo size="md" />
          <p className="mt-4 text-sm" style={{ color: "var(--color-ink-700)" }}>
            {SITE.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-ink-900)", fontFamily: "var(--font-sans)" }}>
            Explore
          </h2>
          <ul className="mt-3 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm prose-a">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-ink-900)", fontFamily: "var(--font-sans)" }}>
            Services
          </h2>
          <ul className="mt-3 space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm prose-a">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-ink-900)", fontFamily: "var(--font-sans)" }}>
            Contact
          </h2>
          <address className="mt-3 not-italic text-sm space-y-1" style={{ color: "var(--color-ink-700)" }}>
            <div>
              <a href={`tel:${CONTACT.phoneTel}`} className="prose-a">
                {CONTACT.phoneDisplay}
              </a>
            </div>
            <div>
              <a href={`mailto:${CONTACT.email}`} className="prose-a">
                {CONTACT.email}
              </a>
            </div>
            <div>{CONTACT.address.street}</div>
            <div>
              {CONTACT.address.city}, {CONTACT.address.region} {CONTACT.address.postalCode}
            </div>
          </address>

          {socialLinks.length > 0 && (
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Allegiant on ${label}`}
                  className="rounded-md p-2 border"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-teal-700)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className="border-t"
        style={{ borderColor: "var(--color-border)", background: "var(--color-cream-50)" }}
      >
        <div className="container-page py-5 text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2" style={{ color: "var(--color-ink-500)" }}>
          <div>
            © {year} {SITE.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="prose-a">Privacy Policy</Link>
            <Link href="/accessibility" className="prose-a">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
