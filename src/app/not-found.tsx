import { ButtonLink } from "@/components/Button";
import { Lotus } from "@/components/icons";
import { Script } from "@/components/Script";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-velvet text-ivory">
      <Lotus
        strokeWidth={0.5}
        className="pointer-events-none absolute -right-20 -bottom-28 -z-10 size-[30rem] text-gold/10"
      />
      <div className="container-page pt-28 pb-16">
        <p className="eyebrow text-gold">Page not found</p>
        <h1 className="mt-5 max-w-2xl text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.1] font-medium text-ivory">
          This page has <Script>wandered off</Script>
        </h1>
        <p className="mt-6 max-w-[48ch] text-ivory/80">
          The page you&rsquo;re looking for doesn&rsquo;t exist, but your journey can continue from here.
        </p>
        <ButtonLink href="/" arrow className="mt-10">
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
