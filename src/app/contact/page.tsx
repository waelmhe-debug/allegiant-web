import type { Metadata } from "next";
import { Clock, Briefcase } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ContactInfo } from "@/components/ContactInfo";
import { CareSeekerForm } from "@/components/CareSeekerForm";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, text, or email Allegiant Home Care in Rochester, MN. Office hours Mon–Fri 9–5 CT, care services 24/7 with scheduled caregivers.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Whether you're looking for care or looking to join our team, we want to hear from you. Call or text us, send an email, or use the form below."
        primaryCta={{ label: "Call us now", href: "tel:+15072188833" }}
        showCall={false}
        showTrust={false}
      />

      {/* Prominent hours block — surfaces the two-tier coverage model */}
      <section
        aria-label="Hours of operation"
        className="border-y"
        style={{ borderColor: "var(--color-border)", background: "var(--color-cream-50)" }}
      >
        <div className="container-page py-6 md:py-7 grid gap-4 md:grid-cols-2 md:gap-10">
          <div className="flex items-start gap-3">
            <div
              className="shrink-0 rounded-lg p-2"
              style={{ background: "var(--color-teal-50)", color: "var(--color-teal-700)" }}
              aria-hidden
            >
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-ink-500)" }}>
                Office hours
              </div>
              <div className="mt-0.5 text-[1.0625rem] font-medium" style={{ color: "var(--color-ink-900)" }}>
                {CONTACT.hours.office.full}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div
              className="shrink-0 rounded-lg p-2"
              style={{ background: "var(--color-amber-50)", color: "var(--color-amber-500)" }}
              aria-hidden
            >
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-ink-500)" }}>
                Care services
              </div>
              <div className="mt-0.5 text-[1.0625rem] font-medium" style={{ color: "var(--color-ink-900)" }}>
                {CONTACT.hours.care.full}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 md:gap-14">
          <CareSeekerForm />
          <aside>
            <h2 className="font-serif text-2xl">Office details</h2>
            <div className="mt-5">
              <ContactInfo />
            </div>
            <p className="mt-8 text-sm" style={{ color: "var(--color-ink-500)" }}>
              Looking to join our caregiving team?{" "}
              <a href="/careers" className="prose-a font-semibold">Apply on our careers page</a>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
