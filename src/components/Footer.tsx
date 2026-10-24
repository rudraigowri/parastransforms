import Link from "next/link";
import { navLinks, site } from "@/content/site";
import { Logo } from "./Logo";

// Taller tap targets on touch screens, compact on desktop.
const linkClass =
  "inline-block py-2 text-ivory/75 transition-colors duration-200 hover:text-gold-light md:py-1";

export function Footer() {
  return (
    <footer className="bg-plum-deep text-sm text-ivory/75">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="col-span-2 md:col-span-1">
          <Logo layout="stacked" />
          <p className="mt-6 max-w-xs leading-relaxed">{site.promise}</p>
        </div>

        <div>
          <h2 className="eyebrow font-sans text-gold">Explore</h2>
          <ul className="mt-4 grid md:gap-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow font-sans text-gold">Connect</h2>
          <ul className="mt-4 grid md:gap-1.5">
            <li>
              <Link href="/contact" className={linkClass}>
                Book a discovery call
              </Link>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </li>
            )}
            {site.social.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-page flex flex-col gap-2 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-xs text-ivory/60 md:flex-row md:justify-between">
          <p>© ParasTransforms. All rights reserved.</p>
          <p>Coaching supports personal growth and is not a substitute for therapy or medical care.</p>
        </div>
      </div>
    </footer>
  );
}
