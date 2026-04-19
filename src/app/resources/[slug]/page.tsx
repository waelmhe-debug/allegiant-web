import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CTABlock } from "@/components/CTABlock";
import { RESOURCES, getResource } from "@/lib/resources";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) return {};
  return {
    title: r.title,
    description: r.description,
    alternates: { canonical: `/resources/${r.slug}` },
  };
}

// Very small markdown renderer for paragraphs + bold + bullets
function renderBody(body: string) {
  const blocks = body.split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((l) => l.replace(/^- /, ""));
      return (
        <ul key={i} className="mt-4 mb-4 grid gap-2 list-disc pl-6">
          {items.map((it, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inline(it) }} />
          ))}
        </ul>
      );
    }
    return (
      <p
        key={i}
        className="mt-4"
        style={{ color: "var(--color-ink-900)" }}
        dangerouslySetInnerHTML={{ __html: inline(block) }}
      />
    );
  });
}

function inline(s: string) {
  // Escape HTML, then convert **bold**
  const esc = s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return esc.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) notFound();

  return (
    <>
      <Hero
        eyebrow={`Resources · ${r.readingTime}`}
        title={r.title}
        subtitle={r.description}
        primaryCta={{ label: "Talk to our care team", href: "/contact" }}
        showCall={false}
        showTrust={false}
      />

      <article className="container-page py-12 md:py-16 max-w-2xl">
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 text-sm prose-a"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All resources
        </Link>

        <div className="mt-6 text-[1.0625rem] leading-relaxed">
          {renderBody(r.body)}
        </div>
      </article>

      <CTABlock />
    </>
  );
}
