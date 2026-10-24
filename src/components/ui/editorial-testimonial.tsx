"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/content/testimonials";
import { Lotus } from "../icons";

const pad = (n: number) => String(n).padStart(2, "0");

function Monogram({ name }: { name: string }) {
  const anonymous = name.toLowerCase() === "anonymous";
  return (
    <span
      aria-hidden="true"
      className="flex size-12 shrink-0 items-center justify-center rounded-full bg-plum font-heading text-xl text-gold ring-2 ring-rose transition-shadow duration-300 group-hover:ring-gold"
    >
      {anonymous ? <Lotus strokeWidth={1.2} className="size-6" /> : name.charAt(0)}
    </span>
  );
}

type TestimonialsEditorialProps = {
  testimonials: Testimonial[];
  className?: string;
};

export default function TestimonialsEditorial({ testimonials, className = "" }: TestimonialsEditorialProps) {
  const [active, setActive] = useState(0);
  const count = testimonials.length;

  const go = (index: number) => setActive((index + count) % count);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className={`w-full max-w-3xl ${className}`}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8">
        {/* Large index number */}
        <span
          aria-hidden="true"
          className="font-heading text-[4.5rem] leading-none font-light text-rose tabular-nums select-none sm:text-[7.5rem]"
        >
          {pad(active + 1)}
        </span>

        {/* Every slide shares one grid cell, so the height stays fixed at the longest quote. */}
        <div className="grid flex-1 sm:pt-6">
          {testimonials.map((item, i) => {
            const isActive = i === active;
            return (
              <figure
                key={`${item.name}-${item.detail}`}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={!isActive}
                inert={!isActive}
                className={`[grid-area:1/1] transition duration-500 ease-soft ${
                  isActive ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-4 opacity-0"
                }`}
              >
                {item.detail && <p className="eyebrow text-magenta">{item.detail}</p>}
                <blockquote className="mt-4 font-heading text-[clamp(1.1875rem,2.1vw,1.5rem)] leading-relaxed font-light text-plum">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="group mt-8 flex items-center gap-4">
                  <Monogram name={item.name} />
                  <span>
                    <span className="block font-semibold text-plum">{item.name}</span>
                    <span className="block text-sm text-charcoal/70">ParasTransforms client</span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Navigation: line selector, counter and arrows */}
      <div className="mt-12 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4 sm:gap-6">
          <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3">
            {testimonials.map((item, i) => (
              <button
                key={`${item.name}-${item.detail}`}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show testimonial ${i + 1}: ${item.detail ?? item.name}`}
                aria-current={i === active}
                className="group relative py-4"
              >
                <span
                  className={`block h-px transition-all duration-500 ease-out ${
                    i === active
                      ? "w-8 bg-magenta sm:w-12"
                      : "w-4 bg-plum/25 group-hover:w-6 group-hover:bg-plum/50 sm:w-6 sm:group-hover:w-8"
                  }`}
                />
              </button>
            ))}
          </div>
          <span aria-live="polite" className="shrink-0 text-xs tracking-widest text-charcoal/70 uppercase tabular-nums">
            {pad(active + 1)} / {pad(count)}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous testimonial"
            className="flex size-11 items-center justify-center rounded-full text-plum/60 transition duration-300 hover:bg-plum/5 hover:text-plum"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next testimonial"
            className="flex size-11 items-center justify-center rounded-full text-plum/60 transition duration-300 hover:bg-plum/5 hover:text-plum"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
