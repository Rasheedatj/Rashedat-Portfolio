import type { IconType } from 'react-icons';

export type Hero = {
  heading: string;
  description: string;
  portrait: {
    src: string;
    alt: string;
  };
  actions: {
    primary: { label: string; href: string };
    resume: { label: string; href: string };
  };
};

export type Client = {
  name: string;
  logo: string;
  logoHeight?: number;
};

export type ProofStat = {
  label: string;
  icon: string;
};

export type PricingPlanTone = 'espresso' | 'slate' | 'graphite';

export type PricingPlan = {
  id: string;
  name: string;
  tone: PricingPlanTone;
  description: string;
  price: string;
  duration: string;
  features: string[];
  cta: { label: string; href: string };
  /** Sticky-note artwork pinned to the card's top-right corner. */
  tag?: { src: string; alt: string };
};

export type TechItem = {
  id: string;
  name: string;
  icon: IconType;
};

export type TechStackGroup = {
  id: string;
  title: string;
  items: TechItem[];
};

export type Principle = {
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
};
