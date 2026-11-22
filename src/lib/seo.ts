import type { Metadata } from "next";
import { getCopy, pathForLocale, type Locale } from "@/content/copy";
import { siteConfig } from "@/content/site";

export function createMetadata(
  locale: Locale,
  {
    title,
    description,
    path = "/",
  }: {
    title?: string;
    description?: string;
    path?: string;
  } = {},
): Metadata {
  const copy = getCopy(locale);
  const pageTitle = title ? `${title} | ${copy.meta.siteName}` : copy.meta.title;
  const socialTitle = title ? pageTitle : copy.meta.socialTitle;
  const pageDescription = description ?? copy.meta.description;
  const canonicalPath = pathForLocale(locale, path);
  const url = new URL(canonicalPath, siteConfig.url).toString();
  const heUrl = new URL(pathForLocale("he", path), siteConfig.url).toString();
  const enUrl = new URL(pathForLocale("en", path), siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: { absolute: pageTitle },
    description: pageDescription,
    applicationName: copy.meta.siteName,
    authors: [{ name: copy.meta.siteName, url: siteConfig.url }],
    creator: copy.meta.siteName,
    publisher: copy.meta.siteName,
    alternates: {
      canonical: url,
      languages: {
        he: heUrl,
        en: enUrl,
        "x-default": heUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: copy.meta.locale,
      url,
      siteName: copy.meta.siteName,
      title: socialTitle,
      description: pageDescription,
      images: [
        {
          url: "/brand/logo-square.png",
          width: 1080,
          height: 1080,
          alt: copy.brand,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: pageDescription,
      images: ["/brand/logo-square.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
