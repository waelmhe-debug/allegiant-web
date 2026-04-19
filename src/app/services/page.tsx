import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABlock } from "@/components/CTABlock";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Home care services in Rochester, MN — personal care, respite, companionship, individualized home supports, family training, and post-discharge support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Care that adapts to your family"
        subtitle="From a few hours of companionship a week to daily hands-on support — we shape our services around what your family actually needs."
        primaryCta={{ label: "Request a free consultation", href: "/contact" }}
        showTrust={false}
      />
      <section className="container-page py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.slug}
              service={s}
              featured={s.slug === "transitional-post-discharge-care"}
            />
          ))}
        </div>
      </section>
      <CTABlock />
    </>
  );
}
