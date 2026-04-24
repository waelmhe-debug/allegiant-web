import Image from "next/image";
import Link from "next/link";
import { CallButton } from "./PhoneLink";
import { TRUST_BADGES } from "@/lib/site";
import { ShieldCheck } from "lucide-react";

type SideImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

type CoverImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  /** 0–1. Defaults to 0.55. Keep text contrast ≥ WCAG AA. */
  overlayOpacity?: number;
  /** Focal point of the image when cropped. CSS object-position value. */
  objectPosition?: string;
};

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  showCall?: boolean;
  showTrust?: boolean;
  /** Right-column image on desktop, stacks below text on mobile. */
  image?: SideImage;
  /** Full-bleed background image with dark overlay. Mutually exclusive with `image`. */
  coverImage?: CoverImage;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta = { label: "Request a free care consultation", href: "/contact" },
  showCall = true,
  showTrust = true,
  image,
  coverImage,
}: HeroProps) {
  if (coverImage) return <CoverHero {...{ eyebrow, title, subtitle, primaryCta, showCall, showTrust, coverImage }} />;
  if (image) return <SplitHero {...{ eyebrow, title, subtitle, primaryCta, showCall, showTrust, image }} />;
  return <BaseHero {...{ eyebrow, title, subtitle, primaryCta, showCall, showTrust }} />;
}

function TextColumn({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  showCall,
  showTrust,
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  showCall: boolean;
  showTrust: boolean;
  onDark?: boolean;
}) {
  const subtitleColor = onDark ? "#E6EFF2" : "var(--color-ink-700)";
  const trustColor = onDark ? "#D6E6EA" : "var(--color-ink-700)";
  const trustIcon = onDark ? "#8FC3CE" : "var(--color-teal-600)";
  return (
    <>
      {eyebrow && (
        <div className="eyebrow mb-4" style={onDark ? { color: "#F1D9B7" } : undefined}>
          {eyebrow}
        </div>
      )}
      <h1 className="font-serif" style={onDark ? { color: "#fff" } : undefined}>
        {title}
      </h1>
      {subtitle && (
        <p
          className="mt-5 text-lg md:text-xl"
          style={{ color: subtitleColor, maxWidth: "52ch" }}
        >
          {subtitle}
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={primaryCta.href}
          className={onDark ? "btn btn-accent" : "btn btn-primary"}
        >
          {primaryCta.label}
        </Link>
        {showCall && <CallButton variant="secondary" />}
      </div>

      {showTrust && (
        <div
          className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
          style={{ color: trustColor }}
        >
          {TRUST_BADGES.slice(0, 3).map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" style={{ color: trustIcon }} aria-hidden />
              {badge}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

function BaseHero(props: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  showCall: boolean;
  showTrust: boolean;
}) {
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
          <TextColumn {...props} />
        </div>
      </div>
    </section>
  );
}

function SplitHero(props: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  showCall: boolean;
  showTrust: boolean;
  image: SideImage;
}) {
  const { image, ...text } = props;
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, var(--color-teal-50) 0%, var(--color-cream-50) 60%, var(--color-amber-50) 100%)",
      }}
    >
      <div className="container-page py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="order-1">
            <TextColumn {...text} />
          </div>
          <div className="order-2 relative">
            <div
              className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden"
              style={{
                borderRadius: "var(--radius-xl)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority={image.priority}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverHero(props: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  showCall: boolean;
  showTrust: boolean;
  coverImage: CoverImage;
}) {
  const { coverImage, ...text } = props;
  const overlay = coverImage.overlayOpacity ?? 0.62;
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--color-teal-800)" }}>
      <Image
        src={coverImage.src}
        alt={coverImage.alt}
        fill
        priority={coverImage.priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: coverImage.objectPosition ?? "center" }}
      />
      {/* Dark teal gradient overlay — darker at bottom-left where text sits */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(110deg, rgba(10, 36, 45, ${overlay + 0.1}) 0%, rgba(15, 51, 64, ${overlay}) 55%, rgba(15, 51, 64, ${Math.max(
            0,
            overlay - 0.15,
          )}) 100%)`,
        }}
      />
      <div className="relative container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <TextColumn {...text} onDark />
        </div>
      </div>
    </section>
  );
}
