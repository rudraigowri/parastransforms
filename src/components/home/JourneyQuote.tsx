import Link from "next/link";
import { Arrow } from "../Button";
import { Journal, Lotus, OpenArms, Sprout, Stones } from "../icons";
import { Reveal } from "../motion";

const journeys = [
  { Art: Sprout, title: ["Heal", "Your Past"] },
  { Art: OpenArms, title: ["Proven", "to Gain"] },
  { Art: Stones, title: ["Find", "Balance"] },
  { Art: Journal, title: ["Create", "Your Next Chapter"] },
];

// Full-bleed dark "breathing" break between the light content sections.
export function QuoteBreak() {
  return (
    <section className="relative isolate overflow-hidden bg-plum text-ivory">
      <Lotus
        strokeWidth={0.4}
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[22rem] -translate-x-1/2 -translate-y-1/2 text-gold/[0.08] md:size-[36rem]"
      />
      <Reveal className="container-page py-20 text-center md:py-32">
        <figure>
          <blockquote className="font-heading text-[clamp(2rem,5vw,3.75rem)] leading-[1.15] text-ivory italic">
            You are not broken.
            <span className="mt-2 block font-script text-[1.3em] leading-[1.1] text-gold not-italic">
              You are becoming.
            </span>
          </blockquote>
          <div aria-hidden="true" className="mx-auto mt-8 h-px w-16 bg-gold" />
        </figure>
      </Reveal>
    </section>
  );
}

export function Journeys() {
  return (
    <section className="section-y bg-ivory">
      <div className="container-page">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-magenta">The journey</p>
            <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.75rem)] leading-tight font-medium">
              Four chapters toward the person you&rsquo;re becoming
            </h2>
          </div>
          <Link
            href="/about"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-magenta"
          >
            Meet Paras
            <Arrow />
          </Link>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-14 lg:grid-cols-4 lg:gap-5">
          {journeys.map(({ Art, title }, i) => (
            <li key={title.join(" ")}>
              <Reveal delay={i * 80}>
                <figure className="relative aspect-[4/5] overflow-hidden rounded-[10px] bg-velvet shadow-card sm:aspect-[3/4]">
                  <Art className="absolute inset-x-0 top-[8%] mx-auto w-[72%] text-gold" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-plum-deep/90 to-transparent" />
                  <figcaption className="absolute inset-x-3 bottom-4 text-center font-heading text-base leading-tight text-ivory sm:bottom-5 sm:text-lg">
                    {title[0]}
                    <br />
                    {title[1]}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
