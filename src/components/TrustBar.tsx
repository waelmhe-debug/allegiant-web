import { ShieldCheck, MapPin, Users, Phone } from "lucide-react";

const items = [
  { Icon: ShieldCheck, label: "Licensed & insured" },
  { Icon: MapPin, label: "Locally owned, Rochester-based" },
  { Icon: Users, label: "Background-checked caregivers" },
  { Icon: Phone, label: "A real person answers" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Trust signals"
      className="border-y"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-cream-50)",
      }}
    >
      <div className="container-page py-5 md:py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
        {items.map(({ Icon, label }) => (
          <div key={label} className="inline-flex items-center gap-2" style={{ color: "var(--color-ink-700)" }}>
            <Icon className="h-4 w-4" style={{ color: "var(--color-teal-600)" }} aria-hidden />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
