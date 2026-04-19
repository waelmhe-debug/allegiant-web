import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CaregiverForm } from "@/components/CaregiverForm";

export const metadata: Metadata = {
  title: "Apply to be a caregiver",
  description:
    "Join the Allegiant caregiving team in Rochester, MN. Paid training, flexible shifts, real support. Submit your application in a few minutes.",
  alternates: { canonical: "/apply" },
};

const PERKS = [
  "Paid training from day one",
  "Flexible shifts — part-time, full-time, overnights",
  "Health and wellness benefits for qualifying positions",
  "A team that answers when you call",
];

export default function ApplyPage() {
  return (
    <section
      className="relative"
      style={{
        background:
          "linear-gradient(170deg, var(--color-amber-50) 0%, var(--color-cream-50) 55%, var(--color-teal-50) 100%)",
      }}
    >
      <div className="container-page py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-start">
          <div>
            <div className="eyebrow">Join our team</div>
            <h1 className="mt-3">Caregiving work that values caregivers</h1>
            <p className="mt-5 text-lg" style={{ color: "var(--color-ink-700)" }}>
              We hire caregivers we&rsquo;d trust with our own families — and we treat you the way you treat clients.
            </p>

            <ul className="mt-7 grid gap-3">
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Check
                    className="h-5 w-5 mt-0.5 shrink-0"
                    style={{ color: "var(--color-teal-600)" }}
                    aria-hidden
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <CaregiverForm />
          </div>
        </div>
      </div>
    </section>
  );
}
