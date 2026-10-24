import Link from "next/link";
import { Lotus } from "./icons";

const tones = {
  onDark: {
    lotus: "text-gold",
    paras: "text-ivory",
    transforms: "text-gold-light",
    tagline: "text-ivory/70",
  },
  onLight: {
    lotus: "text-coral",
    paras: "text-plum",
    transforms: "text-magenta",
    tagline: "text-plum/70",
  },
};

const layouts = {
  // One line on phones (lotus beside the wordmark), stacked from md up.
  adaptive: {
    root: "items-center gap-2 md:flex-col md:gap-0",
    lotus: "size-6 md:size-7",
    wordmark: "text-[1.375rem] md:text-[1.6rem]",
    tagline: "hidden md:block",
  },
  stacked: {
    root: "flex-col items-start",
    lotus: "size-7",
    wordmark: "text-[1.6rem]",
    tagline: "",
  },
};

type LogoProps = {
  tone?: keyof typeof tones;
  layout?: keyof typeof layouts;
  onClick?: () => void;
};

export function Logo({ tone = "onDark", layout = "adaptive", onClick }: LogoProps) {
  const t = tones[tone];
  const l = layouts[layout];
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="ParasTransforms home"
      className={`inline-flex shrink-0 leading-none ${l.root}`}
    >
      <Lotus className={`${l.lotus} ${t.lotus}`} />
      <span className={`font-heading tracking-tight ${l.wordmark}`}>
        <span className={t.paras}>Paras</span>
        <span className={t.transforms}>Transforms</span>
      </span>
      <span
        className={`mt-1.5 text-[0.5625rem] font-medium tracking-[0.32em] uppercase ${l.tagline} ${t.tagline}`}
      >
        Unleash Your Inner You
      </span>
    </Link>
  );
}
