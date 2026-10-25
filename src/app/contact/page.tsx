import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { Script } from "@/components/Script";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a discovery call with Paras Parashar.",
};

const steps = [
  { title: "Where you are", body: "We talk about what is weighing on you today, at your pace." },
  { title: "Where you want to be", body: "We explore what you would like to feel, change and create." },
  { title: "Your next step", body: "You decide, with no pressure, whether we continue together." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Book your <Script>discovery call</Script>
          </>
        }
        lead="A relaxed, no-pressure conversation to understand where you are, where you want to be and whether we're the right fit."
      />

      <section className="section-y bg-ivory">
        <div className="container-page grid gap-14 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16 lg:gap-24">
          <Reveal>
            <p className="eyebrow text-magenta">What to expect</p>
            <ol className="mt-8 space-y-8">
              {steps.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span aria-hidden="true" className="font-heading text-4xl leading-none text-magenta/70">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="text-xl">{step.title}</h2>
                    <p className="mt-1 text-charcoal/80">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ButtonLink href={site.booking} arrow className="mt-10">
              {site.bookingUrl ? "Choose a Time" : "Book on WhatsApp"}
            </ButtonLink>
          </Reveal>

          <Reveal delay={100} className="rounded-2xl bg-grey p-6 shadow-card sm:p-10">
            {site.email ? (
              <>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] leading-tight">Send a message</h2>
                <p className="mt-2 mb-8 text-charcoal/80">
                  Tell me a little about what brings you here. I&rsquo;ll reply personally.
                </p>
                <ContactForm email={site.email} />
              </>
            ) : (
              <>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] leading-tight">Reach out to Us</h2>
                <p className="mt-3 text-charcoal/80">
                  Use the button alongside to book your call, or connect with us on any of these channels.
                </p>
                {site.social.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {site.social.map((item) => (
                      <li key={item.href}>
                        <ButtonLink href={item.href} variant="accent" size="sm">
                          {item.label}
                        </ButtonLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
