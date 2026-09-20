export type ProjectCategory = 'mobile' | 'website';

export type WorkFilter = 'all' | ProjectCategory;

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectLinks = {
  appStore?: string;
  playStore?: string;
  liveSite?: string;
};

export type CaseStudySection = {
  label: string;
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  /** Page heading on the project screen, e.g. "Eatly - Bringing More Fun to Food Delivery." */
  headline: string;
  /** Short description used on cards and as the default meta description. */
  summary: string;
  /** Job title held on the project, e.g. "Mobile Engineer". */
  role: string;
  featured: boolean;
  /** Handwritten annotation shown beside the card. */
  annotation?: string;
  links: ProjectLinks;
  /** Ids from `data/tech-stack.ts`. */
  techStack: string[];
  images: {
    preview?: ProjectImage;
    screens: ProjectImage[];
    ogImage?: ProjectImage;
  };
  caseStudy: CaseStudySection[];
  seo?: {
    title?: string;
    description?: string;
  };
};
