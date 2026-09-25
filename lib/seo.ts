import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

type PageSeo = {
  /** Plain page title; the root layout title template appends the site name. */
  title?: string;
  description?: string;
  /** Path relative to the site root, e.g. "/work-gallery". Used for canonical and og:url. */
  path: string;
  image?: string;
  type?: 'website' | 'article';
};

export const buildMetadata = ({
  title,
  description = siteConfig.description,
  path,
  image,
  type = 'website',
}: PageSeo): Metadata => {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const images = image ? [image] : undefined;

  return {
    title: title ?? { absolute: siteConfig.title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: fullTitle,
      description,
      url: path,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images,
    },
  };
};
