import Link from "next/link";
import { CallButton } from "@/components/PhoneLink";

export default function NotFound() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="max-w-xl mx-auto text-center">
        <div className="eyebrow">404</div>
        <h1 className="mt-3">We can&rsquo;t find that page</h1>
        <p className="mt-4 text-lg" style={{ color: "var(--color-ink-700)" }}>
          The page you&rsquo;re looking for may have moved. Head back home, or give us a call — we&rsquo;ll point you in the right direction.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">Back to home</Link>
          <CallButton variant="secondary" />
        </div>
      </div>
    </section>
  );
}
