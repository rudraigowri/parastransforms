import { Brain, Heart, Star, Sun } from "lucide-react";
import { Lotus } from "../icons";
import { Reveal } from "../motion";

const pillars = [
  { Icon: Lotus, title: "Confidence", caption: "Believe in yourself again" },
  { Icon: Brain, title: "Emotional Wellness", caption: "Heal from guilt and regret" },
  { Icon: Sun, title: "Mindful Living", caption: "Find balance in a busy life" },
  { Icon: Heart, title: "Stronger You", caption: "Build healthier relationships" },
  { Icon: Star, title: "Purposeful Life", caption: "Create a life you love" },
];

export function Pillars() {
  return (
    <section aria-labelledby="pillars-heading" className="bg-ivory">
      <h2 id="pillars-heading" className="sr-only">
        What we work on together
      </h2>
      <ul className="container-page flex flex-wrap justify-center py-10 md:py-14">
        {pillars.map(({ Icon, title, caption }, i) => (
          <li
            key={title}
            className="basis-1/2 px-3 py-6 text-center sm:basis-1/3 lg:basis-1/5 lg:border-l lg:border-rose lg:py-2 lg:first:border-l-0"
          >
            <Reveal delay={i * 80}>
              <Icon aria-hidden="true" strokeWidth={1.4} className="mx-auto size-10 text-coral" />
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mx-auto mt-1.5 max-w-[16ch] text-sm leading-snug text-charcoal/75">{caption}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
