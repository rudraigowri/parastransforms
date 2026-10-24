import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Journeys, QuoteBreak } from "@/components/home/JourneyQuote";
import { Pillars } from "@/components/home/Pillars";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TransformationIntro } from "@/components/home/TransformationIntro";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <TransformationIntro />
      <QuoteBreak />
      <Journeys />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
