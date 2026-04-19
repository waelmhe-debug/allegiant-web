import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContactInfo } from "@/components/ContactInfo";
import { CareSeekerForm } from "@/components/CareSeekerForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, text, or email Allegiant Home Care in Rochester, MN. Our team responds within one business hour.",
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
