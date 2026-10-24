"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { headerLinks } from "@/content/site";
import { ButtonLink } from "./Button";
import { Logo } from "./Logo";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    const toggle = toggleRef.current;
    const focusables = () => Array.from(drawer?.querySelectorAll<HTMLElement>("a, button") ?? []);

    focusables()[0]?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      toggle?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow] duration-300 ${
          scrolled ? "bg-plum/90 shadow-[0_8px_30px_rgb(20_6_28/0.35)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-plum"
        >
          Skip to content
        </a>
        <nav aria-label="Main" className="container-page flex h-16 items-center gap-8 md:h-24">
          <Logo />
          <ul className="ml-auto hidden items-center gap-7 md:flex">
            {headerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className="relative py-2 text-[0.9375rem] font-medium text-ivory/80 transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:ease-soft hover:text-ivory hover:after:scale-x-100 aria-[current=page]:text-ivory aria-[current=page]:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <ButtonLink href="/contact" size="sm">
              Book a Call
            </ButtonLink>
          </div>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="ml-auto inline-flex size-11 items-center justify-center rounded-full text-ivory ring-1 ring-ivory/30 transition-colors hover:bg-ivory/10 md:hidden"
          >
            <Menu aria-hidden="true" className="size-5" />
          </button>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-velvet pt-[env(safe-area-inset-top)] md:hidden"
        >
          <div className="container-page flex h-16 shrink-0 items-center justify-between">
            <Logo onClick={close} />
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center rounded-full text-ivory ring-1 ring-ivory/30 transition-colors hover:bg-ivory/10"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
          <ul className="container-page mt-8 flex flex-col gap-1 animate-rise">
            {headerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className="block py-2 font-heading text-3xl text-ivory/85 transition-colors hover:text-gold aria-[current=page]:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container-page mt-auto pt-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
            <Link
              href="/contact"
              onClick={close}
              className="flex min-h-13 w-full items-center justify-center rounded-full bg-gold-sheen font-semibold text-plum shadow-cta"
            >
              Book Your Discovery Call
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
