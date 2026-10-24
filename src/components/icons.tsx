import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

// strokeWidth matches Lucide's 24-unit scale, so the 48-unit lotus doubles it.
export function Lotus({ strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...line} strokeWidth={Number(strokeWidth) * 2} {...props}>
      <path d="M24 8c5 6 5 18 0 26-5-8-5-20 0-26Z" />
      <path d="M24 34c-7-3-11-10-11-18 5 2 9 7 11 18Z" />
      <path d="M24 34c7-3 11-10 11-18-5 2-9 7-11 18Z" />
      <path d="M24 34c-9 1-16-3-19-10 6-1 13 2 19 10Z" />
      <path d="M24 34c9 1 16-3 19-10-6-1-13 2-19 10Z" />
      <path d="M12 39c6 3 18 3 24 0" />
    </svg>
  );
}

export function GoldLeaf(props: IconProps) {
  return (
    <svg viewBox="0 0 160 260" aria-hidden="true" {...line} strokeWidth={1.4} {...props}>
      <path d="M58 250C66 190 84 120 128 30" />
      <path d="M64 205C36 196 24 168 30 146c22 8 36 32 34 59Z" />
      <path d="M64 203C52 186 40 168 31 149" strokeWidth={0.8} />
      <path d="M70 175c26-7 42-31 40-57-22 8-36 32-40 57Z" />
      <path d="M71 173c14-16 26-34 38-53" strokeWidth={0.8} />
      <path d="M80 135C54 122 46 96 54 76c20 12 32 36 26 59Z" />
      <path d="M80 133C70 114 62 96 55 79" strokeWidth={0.8} />
      <path d="M94 102c24-10 36-34 34-56-20 12-32 34-34 56Z" />
      <path d="M95 100c11-17 21-35 32-52" strokeWidth={0.8} />
    </svg>
  );
}

export function Sprout(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...line} strokeWidth={1.6} {...props}>
      <path d="M30 160c40-8 100-8 140 0" />
      <path d="M100 158c0-28-2-48 0-78" />
      <path d="M100 120c-26-2-44-20-48-42 24 0 44 18 48 42Z" />
      <path d="M100 100c26-4 42-24 44-46-24 2-42 20-44 46Z" />
      <path d="M100 80c-8-14-6-30 0-40 6 10 8 26 0 40Z" />
      <path d="M100 158c-8 8-16 10-24 12M100 158c8 8 16 10 24 12" strokeWidth={1} />
    </svg>
  );
}

export function OpenArms(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...line} strokeWidth={1.6} {...props}>
      <path d="M24 150h152" />
      <path d="M54 150a46 46 0 0 1 92 0" />
      <path
        d="M100 96V86M127 103.2l5-8.6M73 103.2l-5-8.6M146.8 123l8.6-5M53.2 123l-8.6-5"
        strokeWidth={1.2}
      />
      <circle cx="100" cy="118" r="6" />
      <path d="M100 124v18M100 130l-18-18M100 130l18-18M100 142l-6 8M100 142l6 8" />
      <path d="M70 162h60M84 172h32" strokeWidth={1} />
    </svg>
  );
}

export function Stones(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...line} strokeWidth={1.6} {...props}>
      <ellipse cx="100" cy="150" rx="44" ry="14" />
      <ellipse cx="100" cy="124" rx="34" ry="12" />
      <ellipse cx="100" cy="102" rx="25" ry="10" />
      <ellipse cx="100" cy="84" rx="16" ry="8" />
      <path d="M30 168c40-4 100-4 140 0M56 178c30-3 58-3 88 0" strokeWidth={1} />
    </svg>
  );
}

export function Journal(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...line} strokeWidth={1.6} {...props}>
      <path d="M100 70c-16-8-40-10-60-6v82c20-4 44-2 60 6Z" />
      <path d="M100 70c16-8 40-10 60-6v82c-20-4-44-2-60 6Z" />
      <path d="M100 70v82" />
      <path d="M52 86c14-2 28-1 38 3M52 100c14-2 28-1 38 3M52 114c14-2 28-1 38 3" strokeWidth={1} />
      <path d="M124 140l-6-4 38-78 10 6Z" />
      <path d="M118 136l-4 12 10-8" />
    </svg>
  );
}
