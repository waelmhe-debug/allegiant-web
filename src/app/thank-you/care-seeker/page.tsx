import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { CallButton } from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Thank you",
  description: "We've received your request and will be in touch soon.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you/care-seeker" },
};

export default function ThankYouCareSeekerPage() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="inline-flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "var(--color-teal-50)", color: "var(--color-success-600)" }}
          aria-hidden
        >
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h1 className="mt-6">Thank you — we&rsquo;ve received your request</h1>
        <p className="mt-5 text-lg" style={{ color: "var(--color-ink-700)" }}>
          A member of our care team will be in touch within one business hour. If your need is urgent, please call us directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CallButton variant="primary" />
          <Link href="/" className="btn btn-secondary">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
