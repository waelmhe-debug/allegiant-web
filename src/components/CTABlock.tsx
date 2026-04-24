import Image from "next/image";
import Link from "next/link";
import { CallButton } from "./PhoneLink";

type BgImage = {
  src: string;
  /** Decorative backgrounds use alt="". */
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
};

export function CTABlock({
  title = "Ready when you are",
  body = "Tell us about your situation. A member of our care team will reach out within one business hour.",
  primaryHref = "/contact",
  primaryLabel = "Request a free consultation",
  bgImage,
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  bgImage?: BgImage;
}) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden isolate"
      style={{ background: "var(--color-teal-800)" }}
    >
      {bgImage && (
        <>
          <Image
            src={bgImage.src}
            alt={bgImage.alt}
            width={bgImage.width}
            height={bgImage.height}
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: bgImage.objectPosition ?? "center" }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10, 36, 45, 0.82) 0%, rgba(15, 51, 64, 0.85) 100%)",
            }}
          />
        </>
      )}
      <div className="relative container-page py-14 md:py-16 text-center">
        <h2
          id="cta-heading"
          className="font-serif"
          style={{ color: "#fff" }}
        >
          {title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#E6EFF2" }}>
          {body}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href={primaryHref} className="btn btn-accent">
            {primaryLabel}
          </Link>
          <CallButton variant="secondary" />
        </div>
        <p className="mt-4 text-sm" style={{ color: "#BBD3D8" }}>
          Fast response. Most new-client consultations scheduled within 24 hours.
        </p>
      </div>
    </section>
  );
}
