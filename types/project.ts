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

export type CaseStudySection = {
  label: string;
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
  links: ProjectLinks;
  techStack: string[];
  images: {
    featured: ProjectImage | MobileFeaturedImage;
    /**
     * Single flat image used for Open Graph/Twitter cards and other
     * metadata. Mobile projects need this since `featured` there is a
     * `{ straight, rotated }` pair, not a shareable single image; website
     * projects can omit it and fall back to their `featured` string.
     */
    metaImage?: ProjectImage;
    slideShow: ProjectImage[];
    preview?: ProjectImage;
    /** Handwritten note + arrow artwork shown beside the featured image. */
    annotationArt?: ProjectImage;
  };
  caseStudy: CaseStudySection[];
  seo?: {
    title?: string;
    description?: string;
  };
};
