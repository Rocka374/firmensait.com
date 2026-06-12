import { siteConfig } from '@/content/site';
import { homeContent } from '@/content/home';
import { IndustryPageContent } from '@/content/industries/types';

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/favicon.png`,
    "description": siteConfig.description,
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design",
    "provider": {
      "@type": "Organization",
      "name": siteConfig.name
    },
    "areaServed": "BG",
    "offers": {
      "@type": "Offer",
      "price": "350",
      "priceCurrency": "EUR"
    }
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeContent.faq.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}

/**
 * Генерира Service name без дублиране на 'Изработка на'
 */
function getNormalizedServiceName(title: string): string {
  if (title.toLowerCase().startsWith('изработка на')) {
    return title;
  }
  if (title.toLowerCase().startsWith('сайт за')) {
    return `Изработка на ${title.toLowerCase()}`;
  }
  return `Изработка на сайт за ${title.toLowerCase()}`;
}

/**
 * Генерира Service schema за конкретна браншова страница
 */
export function getIndustryServiceSchema(industry: IndustryPageContent) {
  const serviceName = getNormalizedServiceName(industry.title);
  const pageUrl = `${siteConfig.url}/${industry.slug}`;
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": industry.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bulgaria"
    },
    "serviceType": "Изработка на фирмен сайт",
    "url": pageUrl,
    "offers": {
      "@type": "Offer",
      "price": "350",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": pageUrl
    }
  };
}

/**
 * Генерира Breadcrumb schema за конкретна браншова страница
 */
export function getIndustryBreadcrumbSchema(industry: IndustryPageContent) {
  const serviceName = getNormalizedServiceName(industry.title);
  const pageUrl = `${siteConfig.url}/${industry.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Начало",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": serviceName,
        "item": pageUrl
      }
    ]
  };
}

/**
 * Генерира FAQ schema за конкретна браншова страница
 */
export function getIndustryFAQSchema(industry: IndustryPageContent) {
  if (!industry.faq || industry.faq.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}