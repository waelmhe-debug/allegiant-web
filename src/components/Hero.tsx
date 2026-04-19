import Link from "next/link";
import { CallButton } from "./PhoneLink";
import { TRUST_BADGES } from "@/lib/site";
import { ShieldCheck } from "lucide-react";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  showCall?: boolean;
  showTrust?: boolean;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta = { label: "Request a free care consultation", href: "/contact" },
  showCall = true,
  showTrust = true,
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, var(--color-teal-50) 0%, var(--color-cream-50) 60%, var(--color-amber-50) 100%)",
      }}
    >
      <div className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
          <h1 className="font-serif">{title}</h1>
          {subtitle && (
            <p
              className="mt-5 text-lg md:text-xl"
              style={{ color: "var(--color-ink-700)", maxWidth: "52ch" }}
            >
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryCta.href} className="btn btn-primary">
              {primaryCta.label}
            </Link>
            {showCall && <CallButton variant="secondary" />}
          </div>

          {showTrust && (
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm" style={{ color: "var(--color-ink-700)" }}>
              {TRUST_BADGES.slice(0, 3).map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" style={{ color: "var(--color-teal-600)" }} aria-hidden />
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
