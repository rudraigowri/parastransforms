import Link from "next/link";
import { testimonials } from "@/content/testimonials";
import { Reveal } from "../motion";
import { Script } from "../Script";
import TestimonialsEditorial from "../ui/editorial-testimonial";

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section-y bg-mauve/40">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        <Reveal>
          <p className="eyebrow text-magenta">Kind words</p>
          <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.15] font-medium">
            Stories of <Script className="text-magenta">becoming</Script>
          </h2>
          <p className="mt-4 max-w-[36ch] text-charcoal/80">
            In their own words, from people who chose to stop defining themselves by their past.
          </p>
          <Link
            href="/testimonials"
            className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold tracking-wide text-magenta underline-offset-4 hover:underline"
          >
            Read all stories →
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <TestimonialsEditorial testimonials={testimonials} />
        </Reveal>
      </div>
    </section>
  );
}
