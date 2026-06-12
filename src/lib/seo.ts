import { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export function constructMetadata(): Metadata {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: '/',
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon.png', type: 'image/png' },
      ],
      apple: [
        { url: '/favicon.png' },
      ],
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage }],
      locale: 'bg_BG',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: siteConfig.keywords,
  };
}