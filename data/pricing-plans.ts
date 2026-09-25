import { contactHref } from '@/data/site';
import type { PricingPlan } from '@/types/home';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'focused-build',
    name: 'Focused Build',
    tone: 'espresso',
    description:
      'For Startups That Need A Mobile Product Built Properly From Start To Launch.',
    price: '$5k - $12k',
    duration: '3 - 6 Months',
    features: [
      'MVPs, Major Features Or Rebuilds',
      'iOS And Android App',
      'Figma-To-Code',
      'API Integrations, Auth, Payments e.t.c',
      'App Store & Play Store Launch',
      '30 Days Post-Launch Support',
    ],
    cta: { label: 'Discuss Your Project', href: contactHref },
    tag: { src: '/mvp-tag.png', alt: 'Best for MVPs and rebuilds' },
  },
  {
    id: 'marketing-website',
    name: 'Marketing Website',
    tone: 'slate',
    description:
      'A Website That Explains Your Product Clearly And Drives Action.',
    price: '$1.5k - $2k',
    duration: '1 - 3 Weeks',
    features: [
      'Dynamic Website',
      'Responsive Development',
      'SEO Foundations',
      'Analytics Setup',
      'Hosting And Domain Support',
      'Performance Optimization',
    ],
    cta: { label: 'Build My Website', href: contactHref },
  },
  {
    id: 'embedded-engineer',
    name: 'Embedded Engineer',
    tone: 'graphite',
    description:
      'More Engineering Capacity To Help Your Team Ship Consistently.',
    price: 'From $1k / Month',
    duration: 'Contract Based',
    features: [
      'New Feature Development',
      'API Integrations',
      'Bug Fixes & Maintenance',
      'Code Reviews',
      'Product & Engineering Collaboration',
      'AI Assisted Development',
    ],
    cta: { label: 'Work With Me', href: contactHref },
  },
];
