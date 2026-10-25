export const site = {
  name: "ParasTransforms",
  tagline: "Unleash Your Inner You",
  founder: "Paras Parashar",
  role: "Human Potential Expert | Confidence Architect",
  promise: "From guilt to growth. From regret to resilience. From self-doubt to self-belief.",
  description:
    "Personalised 1:1 coaching with Paras Parashar to release guilt and regret, rebuild unshakable confidence and reconnect with your authentic self.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // TODO: add real contact details before launch. Empty values hide the related UI.
  email: "",
  bookingUrl: "",
  whatsapp: "https://wa.me/919779340819",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/pparashar23" },
    { label: "YouTube", href: "https://www.youtube.com/@parastransforms" },
    { label: "Facebook", href: "https://www.facebook.com/share/1E1mxy1ygy/" },
    { label: "WhatsApp", href: "https://wa.me/919779340819" },
  ] as { label: string; href: string }[],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

// The navbar leaves out Testimonials; the footer and sitemap still list every page.
export const headerLinks = navLinks.filter((link) => link.href !== "/testimonials");
