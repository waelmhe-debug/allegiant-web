import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank you for applying",
  description: "We've received your application and will be in touch soon.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you/caregiver" },
};

export default function ThankYouCaregiverPage() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="inline-flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "var(--color-amber-50)", color: "var(--color-success-600)" }}
          aria-hidden
        >
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h1 className="mt-6">Thank you for applying</h1>
        <p className="mt-5 text-lg" style={{ color: "var(--color-ink-700)" }}>
          We review every application — you&rsquo;ll hear from us within a few business days.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn btn-secondary">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
