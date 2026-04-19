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
        <ol className="mt-10 grid md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((s) => (
            <li key={s.num} className="card p-6 md:p-7">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full font-semibold font-serif"
                style={{ background: "var(--color-teal-600)", color: "#fff" }}
                aria-hidden
              >
                {s.num}
              </div>
              <h3 className="mt-4 font-serif text-xl">{s.title}</h3>
              <p className="mt-2" style={{ color: "var(--color-ink-700)" }}>
                {s.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Link href="/contact" className="btn btn-primary">
            Start with a free consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
