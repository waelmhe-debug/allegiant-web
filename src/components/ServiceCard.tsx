import Image from "next/image";
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

// Per-service photo (only set on the cards we want to feature with imagery —
// other cards stay icon-only). Keep photo cards visually distinct without
// forcing all six to match height.
type CardPhoto = { src: string; alt: string; width: number; height: number };
const PHOTOS: Record<string, CardPhoto> = {
  "personal-homemaker-support": {
    src: "/images/get-started-hero.jpg", // services-homemaker.jpg unavailable; reuse per brief
    alt: "A caregiver helping with household tasks at home",
    width: 3840,
    height: 2160,
  },
  "transitional-post-discharge-care": {
    src: "/images/post-discharge.jpg",
    alt: "A caregiver supporting an elderly client during recovery",
    width: 3840,
    height: 2560,
  },
};

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  const Icon = ICONS[service.slug] ?? Home;
  const photo = PHOTOS[service.slug];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="card group flex flex-col overflow-hidden transition-shadow hover:shadow-[var(--shadow-card)]"
      style={featured ? { borderTop: "4px solid var(--color-amber-400)" } : undefined}
    >
      {photo ? (
        <div className="relative w-full aspect-[16/9] overflow-hidden" style={{ background: "var(--color-cream-200)" }}>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover w-full h-full"
          />
        </div>
      ) : null}

      <div className="p-6 md:p-7 flex flex-col">
        {!photo && (
          <div
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
            style={{ background: "var(--color-teal-50)", color: "var(--color-teal-700)" }}
            aria-hidden
          >
            <Icon className="h-5 w-5" />
          </div>
        )}
        <h3 className={`${photo ? "" : "mt-4"} font-serif text-xl`}>{service.name}</h3>
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
      </div>
    </Link>
  );
}
