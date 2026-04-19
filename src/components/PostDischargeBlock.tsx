import Link from "next/link";
import { HeartPulse, Clock } from "lucide-react";

export function PostDischargeBlock() {
  return (
    <section
      aria-labelledby="post-discharge-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(170deg, var(--color-teal-700) 0%, var(--color-teal-800) 100%)",
      }}
    >
      <div className="container-page py-16 md:py-20 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{ background: "rgba(255,255,255,0.1)", color: "#F1D9B7" }}
          >
            <HeartPulse className="h-3.5 w-3.5" aria-hidden />
            Post-discharge support
          </div>
          <h2 id="post-discharge-heading" className="mt-4" style={{ color: "#fff" }}>
            Coming home after a hospital stay?
          </h2>
          <p className="mt-5 text-lg" style={{ color: "#E6EFF2", maxWidth: "60ch" }}>
            Rochester&rsquo;s medical community brings families here from across the country. When the hospital or rehabilitation stay ends, the care doesn&rsquo;t. We help families navigate the transition home — whether that&rsquo;s for a few weeks of recovery support or a longer-term plan. We coordinate with your existing care team, help set up the home for a safe return, and provide the personal support that makes recovery at home possible.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/services/transitional-post-discharge-care" className="btn btn-accent">
              Talk to us about transitional care
            </Link>
            <div className="inline-flex items-center gap-2 text-sm" style={{ color: "#BBD3D8" }}>
              <Clock className="h-4 w-4" aria-hidden />
              Most consultations scheduled within 24 hours
            </div>
          </div>
        </div>

        <div
          className="card p-6 md:p-8 hidden md:block"
          style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}
        >
          <h3 className="font-serif text-xl" style={{ color: "#fff" }}>What we help with</h3>
          <ul className="mt-4 space-y-2 text-[0.975rem]" style={{ color: "#E6EFF2" }}>
            <li>• Pre-discharge planning with your care team</li>
            <li>• Home setup for a safe return</li>
            <li>• Higher-intensity support during the first weeks home</li>
            <li>• Coordination with your existing providers</li>
            <li>• Step-down support as recovery progresses</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
