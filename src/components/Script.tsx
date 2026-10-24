import type { ReactNode } from "react";

type ScriptProps = {
  children: ReactNode;
  className?: string;
};

// Gold script accent for one or two words inside a heading.
export function Script({ children, className = "text-gold" }: ScriptProps) {
  return (
    <span className={`font-script text-[1.3em] leading-none font-normal ${className}`}>
      {children}
    </span>
  );
}
