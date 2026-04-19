import Link from "next/link";
import { ArrowRight, Home, Clock, Target, Users, BookOpen, HeartPulse } from "lucide-react";
import type { Service } from "@/lib/services";

const ICONS: Record<string, typeof Home> = {
  "personal-homemaker-support": Home,
  "respite-companion-care": Clock,
  "individualized-home-supports": Target,
  "community-independent-living": Users,
  "family-training": BookOpen,
  "transitional-post-discharge-care": HeartPulse,
};

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  const Icon = ICONS[service.slug] ?? Home;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card p-6 md:p-7 group flex flex-col transition-shadow hover:shadow-[var(--shadow-card)]"
      style={featured ? { borderTop: "4px solid var(--color-amber-400)" } : undefined}
    >
      <div
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
        style={{ background: "var(--color-teal-50)", color: "var(--color-teal-700)" }}
        aria-hidden
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-serif text-xl">{service.name}</h3>
      <p className="mt-2 text-[0.975rem]" style={{ color: "var(--color-ink-700)" }}>
        {service.cardDescription}
      </p>
      <span
        className="inline-flex items-center gap-1.5 mt-5 font-semibold text-sm"
        style={{ color: "var(--color-teal-700)" }}
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
