import type { Metadata } from "next";
import { FinalCta } from "@/components/FinalCta";
import { Lotus } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { Script } from "@/components/Script";
import { approach, transformations } from "@/content/transformations";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personalised 1:1 coaching built around five transformations: authentic self, confidence, self-worth, guilt into growth and regret into resilience.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            From guilt to growth. <Script>From regret to resilience.</Script>
          </>
        }
        lead="Personalised 1:1 sessions built around five powerful transformations, so you can stop defining yourself by your past and start living from self-belief."
      />

      <section className="section-y bg-ivory">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-magenta">Five transformations</p>
            <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.75rem)] leading-tight font-medium">
              What we work on, together
            </h2>
          </Reveal>

          <ol className="mt-12 border-t border-rose md:mt-16">
            {transformations.map((item, i) => (
              <li key={item.title} className="border-b border-rose">
                {/* Phones: number beside a stacked title/body. Desktop: three columns. */}
                <Reveal className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 gap-y-2 py-7 md:grid-cols-[7rem_minmax(0,1fr)_minmax(0,1.2fr)] md:items-baseline md:gap-10 md:py-10">
                  <span aria-hidden="true" className="row-span-2 font-heading text-4xl leading-none text-magenta/70 md:row-span-1 md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl leading-snug md:text-2xl">{item.title}</h3>
                  <p className="leading-relaxed text-charcoal/85 md:text-[1.0625rem]">{item.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-mauve">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-magenta">My approach</p>
            <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.75rem)] leading-tight font-medium">
              Practical tools, gently applied
            </h2>
            <p className="mt-5 max-w-[46ch] text-charcoal/85">
              Transformation doesn&rsquo;t mean becoming someone else. It means understanding yourself
              more deeply and giving yourself permission to grow.
            </p>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2">
            {approach.map((item, i) => (
              <li key={item.title} className={i === 0 ? "sm:col-span-2" : undefined}>
                <Reveal delay={i * 80} className="h-full rounded-xl bg-ivory p-6 shadow-card sm:p-7">
                  <Lotus className="size-8 text-coral" />
                  <h3 className="mt-4 text-xl">{item.title}</h3>
                  <p className="mt-2 text-charcoal/80">{item.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
