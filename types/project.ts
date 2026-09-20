export type ProjectCategory = 'mobile' | 'website';

export type WorkFilter = 'all' | ProjectCategory;

export type ProjectImage = string;

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
    featured: ProjectImage;
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
