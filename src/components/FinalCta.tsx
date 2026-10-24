import { ButtonLink } from "./Button";
import { GoldLeaf } from "./icons";
import { BrushCircle, Reveal } from "./motion";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-velvet text-ivory">
      <GoldLeaf className="pointer-events-none absolute bottom-0 -left-4 -z-10 hidden h-[85%] w-auto text-gold/60 sm:block" />

      <div className="container-page section-y text-center">
        <Reveal>
          <h2 className="text-[clamp(2.25rem,4.5vw,3.25rem)] leading-tight font-medium text-ivory">
            Ready to Reclaim
            <span className="block font-script text-[1.3em] leading-[1.15] font-normal text-gold">
              your Authentic Self?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-ivory/80">
            Your past may be a part of your story, but it doesn&rsquo;t have to write the rest of it.
          </p>
          <ButtonLink href="/contact" arrow className="mt-9">
            Book Your Discovery Call
          </ButtonLink>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[3%] hidden aspect-square w-64 -translate-y-1/2 xl:block"
      >
        <BrushCircle className="absolute inset-0 text-gold" />
        <p className="absolute inset-0 flex -rotate-12 flex-col items-center justify-center font-script text-[1.85rem] leading-[1.15] text-gold-light">
          <span>A Confident,</span>
          <span>Calmer,</span>
          <span>Happier You</span>
          <span>Awaits…</span>
        </p>
      </div>
    </section>
  );
}
