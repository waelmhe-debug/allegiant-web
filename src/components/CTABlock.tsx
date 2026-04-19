import Link from "next/link";
import { CallButton } from "./PhoneLink";

export function CTABlock({
  title = "Ready when you are",
  body = "Tell us about your situation. A member of our care team will reach out within one business hour.",
  primaryHref = "/contact",
  primaryLabel = "Request a free consultation",
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--color-teal-700)" }}
    >
      <div className="container-page py-14 md:py-16 text-center">
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
