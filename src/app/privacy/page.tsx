import type { Metadata } from "next";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${SITE.name} privacy policy — how we collect, use, and protect information submitted through our website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const updated = "January 2026";
  return (
    <section className="container-page py-14 md:py-20 max-w-3xl">
      <h1>Privacy Policy</h1>
      <p className="mt-2 text-sm" style={{ color: "var(--color-ink-500)" }}>Last updated: {updated}</p>

      <div className="mt-8 space-y-6 text-[1.0625rem]" style={{ color: "var(--color-ink-900)" }}>
        <p>
          {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what information we collect through this website and how we use it.
        </p>

        <h2>What we collect</h2>
        <p>
          When you submit a contact or application form, we collect the information you provide — such as your name, phone number, email, and the details of your request. We may also collect basic technical information (browser type, device, referring page) through standard web analytics.
        </p>

        <h2>How we use it</h2>
        <p>We use the information you submit to respond to your inquiry, provide the services you request, and improve our website. We do not sell personal information.</p>

        <h2>Cookies and analytics</h2>
        <p>
          This site uses Google Tag Manager and Google Analytics to understand how visitors find and use the site. You can disable cookies in your browser settings.
        </p>

        <h2>Sharing</h2>
        <p>
          We share information only with service providers that help us operate the site and respond to inquiries (for example, our form processor). These providers are bound by confidentiality and data-handling agreements.
        </p>

        <h2>Your choices</h2>
        <p>
          You can request access to or deletion of the information you&rsquo;ve submitted by contacting us at{" "}
          <a href={`mailto:${CONTACT.email}`} className="prose-a">{CONTACT.email}</a>.
        </p>

        <h2>Contact</h2>
        <address className="not-italic">
          {SITE.name}<br />
          {CONTACT.address.street}<br />
          {CONTACT.address.city}, {CONTACT.address.region} {CONTACT.address.postalCode}<br />
          <a href={`tel:${CONTACT.phoneTel}`} className="prose-a">{CONTACT.phoneDisplay}</a>
        </address>
      </div>
    </section>
  );
}
