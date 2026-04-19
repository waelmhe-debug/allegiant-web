import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/site";
import { CallButton } from "./PhoneLink";

export function ServiceAreaList() {
  return (
    <section aria-labelledby="service-area-heading" className="container-page py-16 md:py-20">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <div>
          <div className="eyebrow">Service area</div>
          <h2 id="service-area-heading" className="mt-3">
            Rochester, MN and surrounding communities
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--color-ink-700)" }}>
            We provide care across Rochester and nearby communities. Not sure if we cover your area? Call us — if we can&rsquo;t help directly, we&rsquo;ll help you find someone who can.
          </p>
          <div className="mt-6">
            <CallButton variant="primary" />
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-3" role="list">
          {SERVICE_AREAS.map((town) => (
            <li
              key={town}
              className="card flex items-center gap-2 px-4 py-3"
            >
              <MapPin className="h-4 w-4" style={{ color: "var(--color-teal-600)" }} aria-hidden />
              <span className="font-medium" style={{ color: "var(--color-ink-900)" }}>{town}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
