import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "accent";
type Size = "sm" | "md";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition duration-200 ease-soft hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

const sizes: Record<Size, string> = {
  sm: "min-h-11 px-5 text-sm",
  md: "min-h-13 px-7 text-[0.9375rem]",
};

const variants: Record<Variant, string> = {
  primary: "bg-gold-sheen text-plum shadow-cta hover:shadow-cta-hover",
  secondary: "bg-plum text-ivory ring-[1.5px] ring-inset ring-gold hover:bg-plum-deep",
  outline: "text-ivory ring-[1.5px] ring-inset ring-ivory/70 hover:bg-ivory/10 hover:ring-ivory",
  accent: "bg-linear-to-r from-magenta to-plum text-ivory shadow-card hover:shadow-card-hover",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`;
}

export function Arrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
    />
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ href, variant, size, arrow, className, children }: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
