import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { EmptyState } from "@/components/EmptyState";
import { FinalCta } from "@/components/FinalCta";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { Script } from "@/components/Script";
import TestimonialsEditorial from "@/components/ui/editorial-testimonial";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Stories from people who chose to stop defining themselves by their past.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Stories of <Script>becoming</Script>
          </>
        }
        lead="Real words from people who chose to stop defining themselves by their past."
      />

      <section className="section-y bg-ivory">
        <div className="container-page">
          {testimonials.length > 0 ? (
            <Reveal className="flex justify-center">
              <TestimonialsEditorial testimonials={testimonials} />
            </Reveal>
          ) : (
            <EmptyState
              title="Client stories are on their way"
              action={
                <ButtonLink href="/contact" variant="accent" arrow>
                  Book Your Discovery Call
                </ButtonLink>
              }
            >
              <p>
                I&rsquo;m gathering words from the people I&rsquo;ve worked with. In the meantime, the best
                way to know whether we&rsquo;re a good fit is a simple conversation.
              </p>
            </EmptyState>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
