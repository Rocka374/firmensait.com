import { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site';
import { industries } from '@/content/industries';

export default function sitemap(): MetadataRoute.Sitemap {
  const industryUrls = industries.map((industry) => ({
    url: `${siteConfig.url}${industry.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/kontakti`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...industryUrls,
  ];
}