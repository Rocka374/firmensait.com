export interface IndustryPageContent {
  title: string;
  slug: string;
  href: string;
  menuLabel: string;
  icon: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  heroImage: {
    src: string;
    alt: string;
  };
  portfolioImages: {
    src: string;
    alt: string;
  }[];
  intro: string;
  sections: {
    h2: string;
    paragraphs: string[];
    h3Items?: {
      h3: string;
      text: string;
    }[];
  }[];
  specificFeatures?: {
    title: string;
    description: string;
    items: {
      title: string;
      text: string;
      icon: string;
    }[];
  };
  benefits: {
    title: string;
    text: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
  relatedIndustries: string[];
}