import type { Metadata } from "next";
import Image from "next/image";
import reflectivePortrait from "@/assets/images/paras-reflective.jpg";
import { ButtonLink } from "@/components/Button";
import { FinalCta } from "@/components/FinalCta";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { Script } from "@/components/Script";

export const metadata: Metadata = {
  title: "About Paras",
  description:
    "Paras Parashar is a Human Potential Expert and Confidence Architect helping people move beyond guilt, regret and self-doubt.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Paras Parashar"
        title={
          <>
            You are not <Script>your past.</Script>
          </>
        }
        lead="Human Potential Expert and Confidence Architect, helping you reconnect with your authentic self and create a life rooted in self-belief."
      />

      <section className="section-y bg-ivory">
        <div className="container-page grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 lg:gap-24">
          <Reveal className="md:sticky md:top-32 md:self-start">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl shadow-card md:aspect-[4/5]">
              <Image
                src={reflectivePortrait}
                alt="Paras Parashar smiling thoughtfully, chin resting on her hand"
                fill
                quality={90}
                placeholder="blur"
                sizes="(min-width: 900px) 40vw, 100vw"
                className="object-cover object-[30%_center]"
              />
            </div>
          </Reveal>

          <Reveal className="max-w-[62ch]">
            <p className="font-heading text-[clamp(1.5rem,2.6vw,2rem)] leading-snug text-plum">
              What if the person you&rsquo;ve been searching for is the person you&rsquo;ve never truly
              given yourself the chance to become?
            </p>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-charcoal/90">
              <p>
                I believe every individual has immense potential within them. Yet, somewhere along
                life&rsquo;s journey, guilt, regret, self-doubt, fear of judgment and the pressure to meet
                everyone&rsquo;s expectations can make us forget who we truly are.
              </p>
              <p className="font-heading text-xl text-magenta">That&rsquo;s where my work begins.</p>
              <p>
                As a Human Potential Expert and Confidence Architect, I help people reconnect with their
                authentic selves, recognise their self-worth, rebuild their confidence and move beyond
                the emotional weight of their past.
              </p>
              <p>
                Through ParasTransforms, my mission is to help individuals stop defining themselves by
                their mistakes, start learning from their experiences and create a life rooted in
                self-belief, clarity and authenticity.
              </p>
              <p>
                My approach draws on NLP-based techniques, mindfulness and practical self-reflection to
                support meaningful personal development.
              </p>
            </div>
            <ButtonLink href="/services" variant="accent" arrow className="mt-10">
              See How I Can Help
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-mauve">
        <Reveal className="container-page max-w-4xl text-center">
          <p className="eyebrow text-magenta">My philosophy</p>
          <blockquote className="mt-6 font-heading text-[clamp(1.75rem,3.4vw,2.75rem)] leading-snug text-plum italic">
            You don&rsquo;t need to become someone else to be worthy. You need to rediscover the person
            you were always capable of becoming.
          </blockquote>
          <div aria-hidden="true" className="mx-auto mt-8 h-px w-16 bg-gold" />
          <p className="mx-auto mt-8 max-w-[58ch] text-charcoal/80">
            I don&rsquo;t believe transformation means becoming someone else. It means understanding
            yourself more deeply, accepting your journey and giving yourself permission to grow.
          </p>
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
