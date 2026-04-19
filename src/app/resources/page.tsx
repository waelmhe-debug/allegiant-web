import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CTABlock } from "@/components/CTABlock";
import { RESOURCES } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources for families",
  description:
    "Practical guides and articles for families navigating home care in Rochester, MN — discharge planning, starting the conversation, what to expect.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <Hero
        eyebrow="Resources"
        title="Practical guides for families"
        subtitle="Short, honest articles to help you navigate the decisions families face when bringing a loved one home or starting care."
        primaryCta={{ label: "Talk to our care team", href: "/contact" }}
        showTrust={false}
      />

      <section className="container-page py-16 md:py-20">
        <ul className="grid gap-5 md:grid-cols-2">
          {RESOURCES.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/resources/${r.slug}`}
                className="card p-6 md:p-7 h-full flex flex-col group transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--color-teal-50)", color: "var(--color-teal-700)" }}
                  aria-hidden
                >
                  <BookOpen className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-xl mt-4">{r.title}</h2>
                <p className="mt-2" style={{ color: "var(--color-ink-700)" }}>
                  {r.description}
                </p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span style={{ color: "var(--color-ink-500)" }}>{r.readingTime}</span>
                  <span
                    className="inline-flex items-center gap-1.5 font-semibold"
                    style={{ color: "var(--color-teal-700)" }}
                  >
                    Read article
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTABlock title="Have a specific question?" body="Our care team is happy to talk through your situation — no pressure, no obligation." />
    </>
  );
}
