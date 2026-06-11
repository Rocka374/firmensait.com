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
  showcaseSubtitle?: string;
  whoFor?: {
    title: string;
    items: {
      title: string;
      text: string;
      icon: any;
    }[];
  };
  features?: {
    title: string;
    subtitle?: string;
    items: {
      title: string;
      text: string;
      icon: any;
    }[];
  };
  seoFoundation?: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      text: string;
      icon: any;
    }[];
  };
  processSteps?: {
    title: string;
    items: {
      title: string;
      description: string;
      icon: any;
    }[];
  };
  sections: {
    h2: string;
    paragraphs: string[];
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
  faq: {
    q: string;
    a: string;
  }[];
  relatedIndustries: string[];
}