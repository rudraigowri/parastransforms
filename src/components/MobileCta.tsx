"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Arrow } from "./Button";

// Distance from the page bottom where the closing CTA and footer take over.
const END_ZONE = 1100;

export function MobileCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const { scrollY, innerHeight } = window;
      const nearEnd = scrollY + innerHeight > document.documentElement.scrollHeight - END_ZONE;
      setVisible(scrollY > innerHeight * 0.75 && !nearEnd);
    };
    const frame = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  if (pathname === "/contact") return null;

  return (
    <div
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-gold/20 bg-plum/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 ease-soft md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={site.booking}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold-sheen text-[0.9375rem] font-semibold text-plum shadow-cta"
      >
        Book Your Discovery Call
        <Arrow />
      </a>
    </div>
  );
}
