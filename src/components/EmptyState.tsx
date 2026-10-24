import type { ReactNode } from "react";
import { Lotus } from "./icons";

type EmptyStateProps = {
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

export function EmptyState({ title, children, action }: EmptyStateProps) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-mauve">
        <Lotus className="size-8 text-coral" />
      </span>
      <h2 className="mt-6 text-[clamp(1.75rem,3vw,2.25rem)] leading-tight">{title}</h2>
      <div className="mt-4 text-charcoal/80">{children}</div>
      {action && <div className="mt-8">{action}</div>}
    </div>
  );
}
