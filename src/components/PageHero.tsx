import type { ReactNode } from "react";
import { Lotus } from "./icons";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-velvet text-ivory">
      <Lotus
        strokeWidth={0.5}
        className="pointer-events-none absolute -right-16 -bottom-20 -z-10 size-[18rem] text-gold/10 md:-right-20 md:-bottom-28 md:size-[30rem]"
      />
      <div className="container-page pt-28 pb-14 tablet:pt-36 tablet:pb-20 md:pt-44 md:pb-28">
        <p className="eyebrow animate-rise text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl animate-rise text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.1] font-medium text-ivory [animation-delay:100ms]">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-[56ch] animate-rise text-[clamp(1.0625rem,1.6vw,1.25rem)] leading-relaxed text-ivory/80 [animation-delay:200ms]">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
