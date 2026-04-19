import { Quote } from "lucide-react";

export type TestimonialData = {
  quote: string;
  attribution: string;
};

export function Testimonial({ data }: { data: TestimonialData }) {
  return (
    <figure className="card p-6 md:p-7 h-full flex flex-col">
      <Quote className="h-6 w-6" style={{ color: "var(--color-amber-400)" }} aria-hidden />
      <blockquote className="mt-3 text-lg" style={{ color: "var(--color-ink-900)" }}>
        “{data.quote}”
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold" style={{ color: "var(--color-ink-700)" }}>
        — {data.attribution}
      </figcaption>
    </figure>
  );
}

// Placeholder section — real testimonials to be collected with written consent.
export function TestimonialsPlaceholder() {
  return (
    <section aria-labelledby="testimonials-heading" className="container-page py-16 md:py-20">
      <div className="max-w-2xl">
        <div className="eyebrow">Family stories</div>
        <h2 id="testimonials-heading" className="mt-3">Families we&rsquo;ve walked with</h2>
        <p className="mt-3" style={{ color: "var(--color-ink-700)" }}>
          Real stories from real families, coming soon. If you&rsquo;ve worked with us and would like to share your experience, we&rsquo;d be grateful to hear from you.
        </p>
      </div>
    </section>
  );
}
