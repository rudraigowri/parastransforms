import type { Metadata, Viewport } from "next";
import { Fraunces, Great_Vibes, Manrope, Montserrat, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { Navbar } from "@/components/Navbar";
import { site } from "@/content/site";
import "./globals.css";

// Site-wide fonts.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// The homepage hero keeps the original Playfair + Montserrat pairing (see font-classic in globals.css).
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#351447",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${manrope.variable} ${playfair.variable} ${greatVibes.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        {/* Opts into scroll-reveal styles only when JS runs, so content never stays hidden. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
