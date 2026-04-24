import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CaregiverForm } from "@/components/CaregiverForm";

export const metadata: Metadata = {
  title: "Careers — Become a caregiver",
  description:
    "We're hiring caregivers in Rochester, MN and surrounding communities. Paid training. Flexible schedules. A team that treats you the way you treat clients.",
  alternates: { canonical: "/careers" },
};

const PERKS = [
  "Competitive pay, paid training",
  "Flexible shifts — part-time, full-time, and overnight options",
  "Health and wellness benefits for qualifying positions",
  "Real support from a team that answers when you call",
  "Opportunities to grow with the company",
];

export default function CareersPage() {
  return (
    <>
      <Hero
        eyebrow="Careers"
        title="Work with Allegiant"
        subtitle="We're hiring caregivers in Rochester and surrounding communities. Training provided. Flexible schedules. A team that treats you the way you treat clients."
        primaryCta={{ label: "Apply now", href: "#apply" }}
        showCall={false}
        showTrust={false}
        coverImage={{
          // Temporary reuse of the get-started photo — careers-hero.jpg reads
          // as commercial kitchen, not home care. Replace when a better
          // careers-specific photo is available.
          src: "/images/get-started-hero.jpg",
          alt: "A caregiver and senior client sharing a quiet moment at home",
          width: 3840,
          height: 2160,
          priority: true,
          objectPosition: "center 60%",
          overlayOpacity: 0.5,
        }}
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-14">
          <div>
            <h2>Why join our team</h2>
            <ul className="mt-6 grid gap-3">
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[1.05rem]">
                  <Check
                    className="h-5 w-5 mt-1 shrink-0"
                    style={{ color: "var(--color-teal-600)" }}
                    aria-hidden
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div
              className="mt-10 rounded-lg p-6 border"
              style={{ background: "var(--color-cream-50)", borderColor: "var(--color-border)" }}
            >
              <h3 className="font-serif text-xl">Who we&rsquo;re looking for</h3>
              <p className="mt-2" style={{ color: "var(--color-ink-700)" }}>
                You don&rsquo;t need formal caregiving experience to apply. What matters most is that you&rsquo;re dependable, kind, and genuinely want to help people live well at home. If that sounds like you, we&rsquo;d love to talk.
              </p>
            </div>
          </div>

          <div id="apply">
            <CaregiverForm />
          </div>
        </div>
      </section>
    </>
  );
}
