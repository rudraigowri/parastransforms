import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { navLinks, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navLinks.map((link) => ({ url: new URL(link.href, site.url).toString() })),
    ...posts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, site.url).toString(),
      lastModified: post.date,
    })),
  ];
}
