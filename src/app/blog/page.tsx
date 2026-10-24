import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { EmptyState } from "@/components/EmptyState";
import { FinalCta } from "@/components/FinalCta";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { Script } from "@/components/Script";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Reflections on confidence, self-worth and turning the past into growth.",
};

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Reflections for <Script>your journey</Script>
          </>
        }
        lead="Notes on confidence, self-worth and turning the past into growth."
      />

      <section className="section-y bg-ivory">
        <div className="container-page">
          {posts.length > 0 ? (
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <li key={post.slug}>
                  <Reveal delay={(i % 3) * 80} className="h-full">
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                      <article className="flex h-full flex-col rounded-xl bg-grey p-8 shadow-card transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-card-hover">
                        <p className="eyebrow text-magenta">{post.category}</p>
                        <h2 className="mt-3 text-2xl leading-snug">{post.title}</h2>
                        <p className="mt-3 text-charcoal/80">{post.excerpt}</p>
                        <p className="mt-auto flex items-center justify-between pt-6 text-sm text-charcoal/70">
                          <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
                          <span className="font-semibold text-magenta">Read article →</span>
                        </p>
                      </article>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="The first articles are being written"
              action={
                <ButtonLink href="/about" variant="accent" arrow>
                  Read My Story
                </ButtonLink>
              }
            >
              <p>
                Thoughtful pieces on confidence, self-worth and resilience are coming soon. Until then,
                you can learn more about my approach.
              </p>
            </EmptyState>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
