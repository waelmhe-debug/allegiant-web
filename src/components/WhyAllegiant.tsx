import { MapPin, PhoneCall, UserCheck, ShieldCheck } from "lucide-react";

const items = [
  {
    Icon: MapPin,
    title: "Locally owned, Rochester-based",
    body: "We live here, we hire here, and we answer the phone when you call.",
  },
  {
    Icon: PhoneCall,
    title: "A real person, every time",
    body: "No phone trees. Inquiries answered by our care team directly, typically within the hour during business hours.",
  },
  {
    Icon: UserCheck,
    title: "Matched caregivers, not assigned shifts",
    body: "We take the time to match the right caregiver to each client — personality, schedule, and care needs.",
  },
  {
    Icon: ShieldCheck,
    title: "Licensed, trained, and background-checked",
    body: "Every caregiver on our team is screened, licensed, and trained. Your loved one’s safety is the first thing we protect.",
  },
];

export function WhyAllegiant() {
  return (
    <section aria-labelledby="why-heading" className="container-page py-16 md:py-20">
      <div className="max-w-2xl">
        <div className="eyebrow">Why Allegiant</div>
        <h2 id="why-heading" className="mt-3">Families choose Allegiant because</h2>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 gap-5 md:gap-6">
        {items.map(({ Icon, title, body }) => (
          <div key={title} className="card p-6 md:p-7">
            <div
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
              style={{ background: "var(--color-amber-50)", color: "var(--color-amber-500)" }}
              aria-hidden
            >
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-serif text-xl">{title}</h3>
            <p className="mt-2" style={{ color: "var(--color-ink-700)" }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
