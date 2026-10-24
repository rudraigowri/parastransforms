import Image from "next/image";
import { ShieldCheck, Users } from "lucide-react";
import heroPortrait from "@/assets/images/paras-hero.jpg";
import { ButtonLink } from "../Button";
import { Lotus } from "../icons";
import { BrushCircle } from "../motion";

const trust = [
  { Icon: Users, label: "1:1 personalised sessions" },
  { Icon: Lotus, label: "NLP & mindfulness" },
  { Icon: ShieldCheck, label: "Safe, judgment-free space" },
];

function Separator() {
  return (
    <span aria-hidden="true" className="mx-2 text-gold">
      |
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-velvet font-classic text-ivory">
      <div className="container-page grid items-center gap-14 pt-28 pb-16 tablet:grid-cols-[1.15fr_1fr] tablet:gap-10 tablet:pt-36 md:min-h-[min(100svh,60rem)] md:pt-32 md:pb-20">
        {/* Copy first on every device: value, CTA and trust land in the first phone viewport. */}
        <div className="relative z-10">
          <p className="eyebrow animate-rise text-ivory/85">
            Heal <Separator /> Grow <Separator /> Rise <Separator /> Be You
          </p>
          <h1 className="mt-5 animate-rise text-[clamp(2.75rem,6.4vw,4.75rem)] leading-[1.02] font-medium text-ivory [animation-delay:80ms]">
            Unleash
            <br />
            Your
            <span className="mt-1 block animate-write ps-[0.12em] font-script text-[1.32em] leading-[0.95] font-normal text-gold [animation-delay:450ms]">
              Inner You
            </span>
          </h1>
          <p className="mt-6 max-w-[34ch] animate-rise text-[clamp(1.0625rem,1.5vw,1.25rem)] leading-relaxed text-ivory/85 [animation-delay:250ms]">
            Break free from self-doubt, release the weight of the past and create a life of confidence,
            clarity and purpose.
          </p>
          <div className="mt-8 flex animate-rise flex-col gap-3 [animation-delay:400ms] sm:flex-row tablet:flex-col lg:flex-row lg:gap-4">
            <ButtonLink href="/contact" arrow>
              Book Your Discovery Call
            </ButtonLink>
            <ButtonLink href="/about" variant="outline">
              Know More
            </ButtonLink>
          </div>

          <ul className="mt-10 grid max-w-lg animate-rise grid-cols-3 gap-4 border-t border-ivory/15 pt-6 [animation-delay:550ms]">
            {trust.map(({ Icon, label }) => (
              <li key={label} className="flex flex-col gap-2 text-[0.8125rem] leading-snug text-ivory/75 lg:flex-row lg:items-center">
                <Icon aria-hidden="true" strokeWidth={1.4} className="size-5 shrink-0 text-gold" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[17rem] animate-rise [animation-delay:150ms] sm:max-w-[20rem] tablet:max-w-[22rem] md:max-w-[26rem]">
          <div aria-hidden="true" className="absolute -inset-3 rounded-t-full border border-b-0 border-gold/40" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-plum-deep shadow-[0_30px_80px_rgb(10_2_16/0.5)]">
            <Image
              src={heroPortrait}
              alt="Paras Parashar in a deep plum saree, seated in a warmly lit room"
              fill
              loading="eager"
              fetchPriority="high"
              quality={90}
              placeholder="blur"
              sizes="(min-width: 900px) 26rem, (min-width: 768px) 22rem, (min-width: 640px) 20rem, 17rem"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-plum/70 to-transparent" />
          </div>

          <div aria-hidden="true" className="absolute -top-6 -right-6 hidden w-44 lg:-right-20 lg:block">
            <BrushCircle className="absolute -inset-4 text-gold" />
            <p className="relative flex rotate-[-10deg] flex-col items-center py-6 font-script text-[1.7rem] leading-[1.1] text-gold-light">
              <span>Confidence</span>
              <span>Clarity</span>
              <span>Balance</span>
              <span>You</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
