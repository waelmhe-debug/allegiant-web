import type { Metadata } from "next";
import { CONTACT, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description: `${SITE.name} accessibility statement — our commitment to making our website usable by everyone.`,
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <section className="container-page py-14 md:py-20 max-w-3xl">
      <h1>Accessibility</h1>

      <div className="mt-8 space-y-6 text-[1.0625rem]" style={{ color: "var(--color-ink-900)" }}>
        <p>
          We want this website to work well for everyone, including people who use assistive technology. Our goal is to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
        </p>

        <h2>What we&rsquo;ve done</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Semantic HTML and clear heading structure on every page</li>
          <li>Keyboard navigation for all interactive elements</li>
          <li>Visible focus indicators</li>
          <li>Color contrast that meets AA for body text and UI</li>
          <li>Meaningful alt text on images</li>
          <li>Accessible form labels, error messages, and ARIA where appropriate</li>
        </ul>

        <h2>Something not working for you?</h2>
        <p>
          If you encounter any accessibility barrier on this site, please let us know and we&rsquo;ll do our best to fix it. You can reach us at{" "}
          <a href={`mailto:${CONTACT.email}`} className="prose-a">{CONTACT.email}</a> or{" "}
          <a href={`tel:${CONTACT.phoneTel}`} className="prose-a">{CONTACT.phoneDisplay}</a>.
        </p>
      </div>
    </section>
  );
}
