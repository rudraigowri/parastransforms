import { confidence } from "./posts/confidence";
import { heartbreak } from "./posts/heartbreak";
import { loveOrFear } from "./posts/love-or-fear";
import { selfWorth } from "./posts/self-worth";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  // ISO date, e.g. "2026-01-31"
  date: string;
  // Article body in the Markdown subset described in posts/heartbreak.ts
  body: string;
};

// Add blog posts here, newest first. The blog page shows a placeholder while this is empty.
export const posts: Post[] = [
  {
    slug: "heartbreak-let-go-without-losing-yourself",
    title: "Heartbreak: How to Let Go of Someone Without Losing Yourself",
    excerpt: "Healing heartbreak, rebuilding self-worth, and finding your way back to yourself.",
    category: "Healing & Self-Worth",
    date: "2026-10-24",
    body: heartbreak,
  },
  {
    slug: "in-love-or-afraid-of-losing-them",
    title: "Are You in Love With the Person, or Are You Afraid of Losing Them?",
    excerpt:
      "Love should not require you to abandon your dignity, silence your needs, or give up your entire identity.",
    category: "Relationships",
    date: "2026-10-24",
    body: loveOrFear,
  },
  {
    slug: "confidence-is-not-the-absence-of-fear",
    title: "Confidence Is Not the Absence of Fear. It Is the Decision to Stop Letting Fear Decide Everything.",
    excerpt:
      "Confidence doesn't always arrive before action. Sometimes, it develops because we act despite feeling uncertain.",
    category: "Confidence",
    date: "2026-10-24",
    body: confidence,
  },
  {
    slug: "you-are-not-worth-less",
    title: "You Are Not Worth Less Just Because Someone Failed to Value You",
    excerpt: "Sometimes, the fear of losing someone makes us lose touch with ourselves.",
    category: "Self-Worth",
    date: "2026-10-24",
    body: selfWorth,
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function readingMinutes(body: string) {
  return Math.max(1, Math.round(body.split(/\s+/).length / 200));
}
