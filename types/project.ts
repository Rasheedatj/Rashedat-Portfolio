export type ProjectCategory = 'mobile' | 'website';

export type WorkFilter = 'all' | ProjectCategory;

export type ProjectImage = string;

/**
 * Mobile projects show two layered phone mockups (a straight one on top of a
 * rotated one) instead of a single flat image. Website projects keep the
 * plain `ProjectImage` string so their existing UI is unaffected.
 */
export type MobileFeaturedImage = {
  straight: ProjectImage;
  rotated: ProjectImage;
};

export type ProjectLinks = {
  appStore?: string;
  playStore?: string;
  liveSite?: string;
};

export type CaseStudyLabel = 'Overview' | 'Challenge' | 'Solution';

export type CaseStudySection = {
  label: CaseStudyLabel;
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  headline: string;
  summary: string;
  role: string;
  featured: boolean;
  annotation?: string;

  client?: string;
  year?: string;
  links: ProjectLinks;
  techStack: string[];
  images: {
    featured: ProjectImage | MobileFeaturedImage;
    metaImage?: ProjectImage;
    cover: ProjectImage;
    annotationArt?: ProjectImage;
  };
  caseStudy: CaseStudySection[];
  seo?: {
    title?: string;
    description?: string;
  };
};
