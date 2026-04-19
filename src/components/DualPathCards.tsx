import Link from "next/link";
import { ArrowRight, HeartHandshake, Briefcase } from "lucide-react";

export function DualPathCards() {
  return (
    <section aria-labelledby="dual-path-heading" className="container-page py-16 md:py-20">
      <h2 id="dual-path-heading" className="sr-only">
        Choose your path
      </h2>
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        <Link
          href="/get-started"
          className="card p-7 md:p-9 group transition-shadow hover:shadow-[var(--shadow-card)]"
          style={{ borderLeft: "6px solid var(--color-teal-600)" }}
        >
          <div className="flex items-start gap-4">
            <div
              className="shrink-0 rounded-full p-3"
              style={{ background: "var(--color-teal-50)", color: "var(--color-teal-700)" }}
              aria-hidden
            >
              <HeartHandshake className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-2xl">
                I need care for myself or a loved one
              </h3>
              <p className="mt-3" style={{ color: "var(--color-ink-700)" }}>
                Whether you&rsquo;re planning ahead or responding to a sudden change, we&rsquo;ll walk you through your options — no pressure, no obligation.
              </p>
              <span
                className="inline-flex items-center gap-1.5 mt-5 font-semibold"
                style={{ color: "var(--color-teal-700)" }}
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/careers"
          className="card p-7 md:p-9 group transition-shadow hover:shadow-[var(--shadow-card)]"
          style={{ borderLeft: "6px solid var(--color-amber-400)" }}
        >
          <div className="flex items-start gap-4">
            <div
              className="shrink-0 rounded-full p-3"
              style={{ background: "var(--color-amber-50)", color: "var(--color-amber-500)" }}
              aria-hidden
            >
              <Briefcase className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-2xl">I want to become a caregiver</h3>
              <p className="mt-3" style={{ color: "var(--color-ink-700)" }}>
                Join a team that values the people doing the work. Training provided. Flexible schedules.
              </p>
              <span
                className="inline-flex items-center gap-1.5 mt-5 font-semibold"
                style={{ color: "var(--color-amber-500)" }}
              >
                View open positions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
