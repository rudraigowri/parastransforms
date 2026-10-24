import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { FinalCta } from "@/components/FinalCta";
import { Lotus } from "@/components/icons";
import { Prose } from "@/components/Prose";
import { getPost, posts, readingMinutes } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-velvet text-ivory">
        <Lotus
          strokeWidth={0.5}
          className="pointer-events-none absolute -right-16 -bottom-20 -z-10 size-[18rem] text-gold/10 md:-right-20 md:-bottom-28 md:size-[30rem]"
        />
        <div className="container-page pt-28 pb-14 tablet:pt-36 tablet:pb-20 md:pt-44 md:pb-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow animate-rise text-gold">{post.category}</p>
            <h1 className="mt-5 animate-rise text-[clamp(2.125rem,4.6vw,3.5rem)] leading-[1.12] font-medium text-ivory [animation-delay:100ms]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-[56ch] animate-rise font-heading text-[clamp(1.125rem,1.8vw,1.375rem)] leading-relaxed text-ivory/80 italic [animation-delay:200ms]">
              {post.excerpt}
            </p>
            <p className="mt-8 animate-rise text-sm tracking-wide text-ivory/70 [animation-delay:300ms]">
              By Paras Parashar
              <span aria-hidden="true" className="mx-3 text-gold">·</span>
              <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
              <span aria-hidden="true" className="mx-3 text-gold">·</span>
              {readingMinutes(post.body)} min read
            </p>
          </div>
        </div>
      </section>

      <article className="section-y bg-ivory">
        <div className="container-page">
          <div className="mx-auto max-w-[68ch]">
            <Prose markdown={post.body} />

            <div className="mt-16 border-t border-rose pt-8">
              <Link
                href="/blog"
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold tracking-wide text-magenta"
              >
                <ArrowLeft
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
                />
                All articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      <FinalCta />
    </>
  );
}
