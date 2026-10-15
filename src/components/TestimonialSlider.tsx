"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type Review = { name: string; text: string };

const initial = (name: string) => name.trim().charAt(0).toLocaleUpperCase("ro");

export function TestimonialSlider({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const go = (d: number) => setIndex((i) => (i + d + reviews.length) % reviews.length);

  return (
    <div className="testimonials__wrap" data-reveal="60">
      <div className="slider" aria-roledescription="carusel" aria-label="Recenzii clienți">
        {reviews.map((r, i) => (
          <div
            key={r.name + i}
            className={`slider__slide${i === index ? " is-active" : ""}`}
            aria-hidden={i !== index}
            aria-roledescription="slide"
            aria-label={`${i + 1} din ${reviews.length}`}
          >
            <div className="pn-testimonial">
              <div className="pn-testimonial__author">
                <div className="pn-testimonial__avatar" aria-hidden>
                  {initial(r.name)}
                </div>
                <div>
                  <div className="pn-testimonial__name">{r.name}</div>
                  <div className="pn-testimonial__role">Recenzie client</div>
                </div>
              </div>
              <div className="pn-testimonial__review">
                <p className="pn-testimonial__text">„{r.text}”</p>
                <div className="pn-testimonial__divider" />
                <svg className="pn-testimonial__quote" viewBox="0 0 96 78" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M0 78V46C0 19 13 4 38 0l4 11C28 15 21 24 20 38h18v40H0Zm54 0V46C54 19 67 4 92 0l4 11C82 15 75 24 74 38h18v40H54Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider__thumbs">
        {reviews.map((r, i) => (
          <button
            key={r.name + i}
            type="button"
            className={`slider__thumb${i === index ? " is-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Recenzia lui ${r.name}`}
            aria-current={i === index}
          >
            {initial(r.name)}
          </button>
        ))}
      </div>
      <div className="slider__arrows">
        <button type="button" className="slider__arrow" onClick={() => go(-1)} aria-label="Recenzia anterioară">
          <ArrowLeft size={16} />
        </button>
        <button type="button" className="slider__arrow" onClick={() => go(1)} aria-label="Recenzia următoare">
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
