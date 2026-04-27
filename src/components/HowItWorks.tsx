import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    num: "1",
    title: "Talk to us",
    body: "Call, text, or fill out the form. We’ll listen, answer your questions, and explain what’s possible. There’s no cost and no commitment.",
  },
  {
    num: "2",
    title: "Meet your care coordinator",
    body: "A member of our team will meet with you and your family — at home, at the hospital, or by video — to understand what you need and put a plan together.",
  },
  {
    num: "3",
    title: "Care begins at home",
    body: "We match you with a caregiver, introduce them before the first shift, and stay involved to make sure the fit is right.",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      className="py-16 md:py-20"
      style={{ background: "var(--color-cream-50)" }}
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="eyebrow">How it works</div>
          <h2 id="how-heading" className="mt-3">Getting started is simple</h2>
        </div>

        <div className="mt-10 grid gap-8 md:gap-10 md:grid-cols-[2fr_3fr] items-start">
          <div
            className="relative w-full aspect-[4/3] overflow-hidden"
            style={{
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <Image
              src="/images/about-hero.jpg"
              alt="A care coordinator meets with a family at home."
              width={3840}
              height={2560}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover w-full h-full"
              style={{ objectPosition: "center 30%" }}
            />
          </div>

          <ol className="grid gap-4 md:gap-5">
            {steps.map((s) => (
              <li key={s.num} className="card p-5 md:p-6 flex gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-semibold font-serif"
                  style={{ background: "var(--color-teal-600)", color: "#fff" }}
                  aria-hidden
                >
                  {s.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl leading-tight">{s.title}</h3>
                  <p className="mt-1.5" style={{ color: "var(--color-ink-700)" }}>
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <Link href="/contact" className="btn btn-primary">
            Start with a free consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
