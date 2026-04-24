import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { WhyAllegiant } from "@/components/WhyAllegiant";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "About",
  description:
    "Allegiant Home Care is a locally owned home care team serving Rochester, MN. Learn how we approach care — listen first, match carefully, stay involved.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Allegiant"
        title="Local care, from a team that shows up"
        subtitle="Allegiant Home Care was founded in Rochester, Minnesota to provide families with home care that feels personal — not transactional."
        primaryCta={{ label: "Request a free consultation", href: "/contact" }}
        showTrust={false}
        coverImage={{
          src: "/images/about-hero.jpg",
          alt: "A compassionate caregiver helps an elderly client at home",
          width: 3840,
          height: 2560,
          priority: true,
          objectPosition: "center 30%",
        }}
      />

      <section className="container-page py-16 md:py-20 max-w-3xl">
        <p className="text-lg" style={{ color: "var(--color-ink-700)" }}>
          We&rsquo;re a local team serving local families. When you call, you talk to us. When we schedule care, it&rsquo;s with caregivers we know and have trained ourselves.
        </p>
        <p className="mt-5 text-lg" style={{ color: "var(--color-ink-700)" }}>
          Our approach is simple: <strong>listen first, match carefully, stay involved</strong>. We care about your loved one&rsquo;s independence, dignity, and comfort at home — and we care about you, the family member carrying the weight of making decisions.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Start with a free consultation
          </Link>
          <Link href="/services" className="btn btn-secondary">
            See our services
          </Link>
        </div>
      </section>

      <WhyAllegiant />
      <CTABlock />
    </>
  );
}
