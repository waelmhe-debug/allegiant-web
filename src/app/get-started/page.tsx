import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import { CareSeekerForm } from "@/components/CareSeekerForm";
import { CallButton } from "@/components/PhoneLink";

export const metadata: Metadata = {
  title: "Get started — Free care consultation",
  description:
    "Tell us about your family's situation. A member of our care team will reach out within one business hour. No cost, no commitment.",
  alternates: { canonical: "/get-started" },
  robots: { index: true, follow: true },
};

export default function GetStartedPage() {
  return (
    <section
      className="relative"
      style={{
        background:
          "linear-gradient(170deg, var(--color-teal-50) 0%, var(--color-cream-50) 45%, var(--color-amber-50) 100%)",
      }}
    >
      <div className="container-page py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-start">
          <div>
            <div
              className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden"
              style={{ borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-card)" }}
            >
              <Image
                src="/images/get-started-hero.jpg"
                alt="A caregiver and senior sharing a quiet, supportive moment at home"
                width={3840}
                height={2160}
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="mt-8">
              <div className="eyebrow">Free consultation</div>
              <h1 className="mt-3">Care for your family, on your terms</h1>
              <p className="mt-5 text-lg" style={{ color: "var(--color-ink-700)" }}>
                Tell us what&rsquo;s going on. We&rsquo;ll listen, answer your questions, and walk you through options. No cost, no commitment, no pressure.
              </p>

              <ul className="mt-7 grid gap-3">
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "var(--color-teal-600)" }} aria-hidden />
                  <span>Response within one business hour</span>
                </li>
                <li className="flex items-start gap-3">
                  <HeartHandshake className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "var(--color-teal-600)" }} aria-hidden />
                  <span>A real person from our local care team</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "var(--color-teal-600)" }} aria-hidden />
                  <span>Licensed, trained, and background-checked caregivers</span>
                </li>
              </ul>

              <div className="mt-8 hidden lg:block">
                <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-ink-500)" }}>
                  Prefer to talk now?
                </div>
                <div className="mt-2">
                  <CallButton variant="primary" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <CareSeekerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
