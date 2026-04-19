import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Hero } from "@/components/Hero";
import { FAQ } from "@/components/FAQ";
import { CTABlock } from "@/components/CTABlock";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES, getService } from "@/lib/services";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { CareSeekerForm } from "@/components/CareSeekerForm";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.cardDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.name,
      description: service.cardDescription,
      url: `/services/${service.slug}`,
      type: "article",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const isFeatured = service.slug === "transitional-post-discharge-care";

  return (
    <>
      <Hero
        eyebrow={isFeatured ? "Featured service" : "Service"}
        title={service.name}
        subtitle={service.overview}
        primaryCta={{ label: "Request a free consultation", href: "/contact" }}
        showTrust={false}
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-12 items-start">
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm prose-a"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All services
            </Link>

            <h2 className="mt-6">What&rsquo;s included</h2>
            <ul className="mt-4 grid gap-2.5">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="h-5 w-5 mt-0.5 shrink-0"
                    style={{ color: "var(--color-teal-600)" }}
                    aria-hidden
                  />
                  <span style={{ color: "var(--color-ink-900)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12">Who this is for</h2>
            <ul className="mt-4 grid gap-2.5">
              {service.whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ background: "var(--color-amber-400)" }}
                    aria-hidden
                  />
                  <span style={{ color: "var(--color-ink-900)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="md:sticky md:top-24">
            <CareSeekerForm variant="inline" />
          </aside>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <FAQ items={service.faqs} eyebrow={`${service.shortName} · FAQ`} title="Common questions" />
      )}

      <CTABlock />

      <JsonLd data={serviceSchema(service)} />
      {service.faqs.length > 0 && <JsonLd data={faqSchema(service.faqs)} />}
    </>
  );
}
