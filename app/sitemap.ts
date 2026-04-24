import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const SITE_URL = "https://teenpattiludo.com.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/",              priority: 1.0, changeFrequency: "daily" },
    { path: "/download",     priority: 1.0, changeFrequency: "weekly" },
    { path: "/games",        priority: 0.9, changeFrequency: "weekly" },
    { path: "/for-pc",       priority: 0.8, changeFrequency: "monthly" },
    { path: "/old-versions", priority: 0.8, changeFrequency: "weekly" },
    { path: "/blog",         priority: 0.8, changeFrequency: "weekly" },
    { path: "/about",        priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact",      priority: 0.5, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/disclaimer",   priority: 0.3, changeFrequency: "yearly" },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...blogRoutes,
  ];
}
