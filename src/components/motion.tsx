"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in milliseconds, for staggering siblings. */
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

const brushStrokes = [
  {
    d: "M250 70C200 20 80 25 45 110C15 185 80 270 165 265C245 260 285 190 270 120C262 85 240 62 205 50",
    width: 3,
    opacity: 0.9,
  },
  {
    d: "M236 58C185 30 95 40 60 112C35 180 92 255 168 252C238 248 272 185 258 125",
    width: 1.2,
    opacity: 0.55,
  },
];

export function BrushCircle({ className }: { className?: string }) {
  const [ref, visible] = useInView<SVGSVGElement>();
  return (
    <svg
      ref={ref}
      data-visible={visible}
      viewBox="0 0 300 300"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      {brushStrokes.map((stroke, i) => (
        <path
          key={stroke.d}
          d={stroke.d}
          pathLength={1}
          strokeWidth={stroke.width}
          strokeOpacity={stroke.opacity}
          className="brush-path"
          style={{ transitionDelay: `${400 + i * 250}ms` }}
        />
      ))}
    </svg>
  );
}
