import type { IconType } from 'react-icons';

export type Client = {
  name: string;
  logo?: string;
};

export type ProofStat = {
  label: string;
  description: string;
  icon: IconType;
};

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration?: string;
  features: string[];
  cta: { label: string; href: string };
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
