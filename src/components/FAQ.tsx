"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { q: string; a: string };

export function FAQ({
  items,
  headingId = "faq-heading",
  title = "Questions families ask us",
  eyebrow = "FAQ",
}: {
  items: readonly Item[];
  headingId?: string;
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section aria-labelledby={headingId} className="container-page py-16 md:py-20">
      <div className="max-w-2xl">
        <div className="eyebrow">{eyebrow}</div>
        <h2 id={headingId} className="mt-3">{title}</h2>
      </div>
      <div className="mt-8 divide-y rounded-lg border" style={{ borderColor: "var(--color-border)", background: "#fff" }}>
        {items.map((item, i) => (
          <FaqRow key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

function FaqRow({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div>
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-4 text-left px-5 py-5 font-serif text-lg"
          style={{ color: "var(--color-ink-900)" }}
        >
          <span>{item.q}</span>
          <ChevronDown
            className="h-5 w-5 shrink-0 transition-transform"
            style={{ color: "var(--color-teal-700)", transform: open ? "rotate(180deg)" : "rotate(0)" }}
            aria-hidden
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        hidden={!open}
        className="px-5 pb-5 -mt-1"
      >
        <p style={{ color: "var(--color-ink-700)" }}>{item.a}</p>
      </div>
    </div>
  );
}
