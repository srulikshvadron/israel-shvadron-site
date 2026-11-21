import type { MetadataRoute } from "next";
import { getSiteUrl, legalMeta, publicPages } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date(legalMeta.updatedIso);

  return publicPages.map((page) => ({
    url: page.path === "/" ? base : `${base}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
