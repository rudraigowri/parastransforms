import Image from "next/image";
import reflectivePortrait from "@/assets/images/paras-reflective.jpg";
import { ButtonLink } from "../Button";
import { Reveal } from "../motion";

export function TransformationIntro() {
  return (
    <section className="bg-linear-to-br from-ivory via-mauve/70 to-mauve">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[3/2] md:aspect-auto md:min-h-[34rem]">
          <Image
            src={reflectivePortrait}
            alt="Paras Parashar smiling thoughtfully, chin resting on her hand"
            fill
            quality={90}
            placeholder="blur"
            sizes="(min-width: 900px) 50vw, 100vw"
            className="object-cover object-[30%_center] md:[mask-image:linear-gradient(to_right,black_72%,transparent)]"
          />
        </div>

        <div className="flex items-center px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-magenta">Your transformation starts here</p>
            <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.875rem)] leading-[1.15] font-medium">
              From Guilt to <span className="text-magenta">Growth</span> and Regret to{" "}
              <span className="text-magenta">Resilience.</span>
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-charcoal/85">
              Personalised sessions to help you release emotional baggage, build unshakable confidence
              and design a life aligned with your authentic self.
            </p>
            <ButtonLink href="/services" variant="accent" arrow className="mt-8">
              Explore My Services
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
