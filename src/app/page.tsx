import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { DualPathCards } from "@/components/DualPathCards";
import { TrustBar } from "@/components/TrustBar";
import { PostDischargeBlock } from "@/components/PostDischargeBlock";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyAllegiant } from "@/components/WhyAllegiant";
import { HowItWorks } from "@/components/HowItWorks";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import { FAQ } from "@/components/FAQ";
import { CTABlock } from "@/components/CTABlock";
import { TestimonialsPlaceholder } from "@/components/Testimonial";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES } from "@/lib/services";
import { HOME_FAQS } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Trusted home care for families across Rochester, MN",
  description:
    "Personalized home care in Rochester, MN. Personal care, respite, companionship, and post-discharge support from local, background-checked caregivers.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Trusted home care for families across Rochester, MN"
        subtitle="When a loved one needs support at home — after a hospital stay, during recovery, or as they age — Allegiant is here. Personalized care, local caregivers, and a team that answers when you call."
        primaryCta={{ label: "Request a free care consultation", href: "/contact" }}
      />
      <TrustBar />
      <DualPathCards />
      <PostDischargeBlock />

      <section aria-labelledby="services-heading" className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <div className="eyebrow">Our services</div>
          <h2 id="services-heading" className="mt-3">How we support families in Rochester</h2>
          <p className="mt-4 text-lg" style={{ color: "var(--color-ink-700)" }}>
            Every family&rsquo;s situation is different. Our services are designed to adapt to yours — from a few hours of companionship a week to daily, hands-on support.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.slug}
              service={s}
              featured={s.slug === "transitional-post-discharge-care"}
            />
          ))}
        </div>
      </section>

      <WhyAllegiant />
      <HowItWorks />
      <ServiceAreaList />
      <TestimonialsPlaceholder />
      <FAQ items={HOME_FAQS} />
      <CTABlock />

      <JsonLd data={faqSchema(HOME_FAQS)} />
    </>
  );
}
