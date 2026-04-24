"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, CONTACT } from "@/lib/site";
import { Logo } from "./Logo";
import { pushEvent } from "@/lib/analytics";

// Ad landing pages strip the main nav entirely so we don't compete with the
// form's single conversion. Header keeps just logo + phone CTA on these routes.
const MINIMAL_NAV_PATHS = new Set<string>(["/get-started", "/apply"]);

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const minimal = MINIMAL_NAV_PATHS.has(pathname);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu if the route changes while it's open
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        background: "rgba(253, 251, 247, 0.92)",
        backdropFilter: "saturate(150%) blur(8px)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="container-page flex items-center justify-between" style={{ minHeight: 72 }}>
        <Link href="/" className="flex items-center gap-2" aria-label="Allegiant Home Care home">
          <Logo size="md" />
        </Link>

        {!minimal && (
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-[0.95rem] font-medium hover:bg-[var(--color-teal-50)]"
                style={{ color: "var(--color-ink-700)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2">
          {/* Desktop (≥768px): full phone CTA with number */}
          <a
            href={`tel:${CONTACT.phoneTel}`}
            onClick={() => pushEvent("phone_click", { phone: CONTACT.phoneDisplay, location: "header" })}
            className="btn btn-primary hidden md:inline-flex text-sm"
            style={{ padding: "0.625rem 1rem", minHeight: 44 }}
            aria-label={`Call ${CONTACT.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>Call {CONTACT.phoneDisplay}</span>
          </a>

          {/* Mobile (<768px): phone icon only */}
          <a
            href={`tel:${CONTACT.phoneTel}`}
            onClick={() => pushEvent("phone_click", { phone: CONTACT.phoneDisplay, location: "header-mobile" })}
            className="btn btn-primary md:hidden"
            style={{ padding: "0.5rem 0.75rem", minHeight: 44 }}
            aria-label={`Call ${CONTACT.phoneDisplay}`}
          >
            <Phone className="h-5 w-5" aria-hidden />
            <span className="sr-only">Call {CONTACT.phoneDisplay}</span>
          </a>

          {!minimal && (
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md border"
              style={{
                minHeight: 44,
                minWidth: 44,
                borderColor: "var(--color-border)",
                background: "#fff",
              }}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          )}
        </div>
      </div>

      {!minimal && open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t"
          style={{ borderColor: "var(--color-border)", background: "#fff" }}
        >
          <nav aria-label="Mobile" className="container-page py-3 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-3 rounded-md text-base font-medium border-b last:border-b-0"
                style={{ borderColor: "var(--color-cream-200)", color: "var(--color-ink-900)" }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
