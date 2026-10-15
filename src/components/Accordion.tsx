"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const id = useId();
  return (
    <div className="pn-accordion" data-stagger="90">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`pn-accordion__item${isOpen ? " is-open" : ""}`} key={it.q}>
            <button
              type="button"
              className="pn-accordion__q"
              aria-expanded={isOpen}
              aria-controls={`${id}-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {it.q}
              <span className="pn-accordion__icon">
                <ChevronDown size={14} strokeWidth={2} aria-hidden />
              </span>
            </button>
            <div className="pn-accordion__a" id={`${id}-${i}`} role="region" aria-hidden={!isOpen}>
              <div>
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
