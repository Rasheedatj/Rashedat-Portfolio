import type { Hero } from '@/types/home';

// TODO: swap in the real resume file once it's ready.
export const hero: Hero = {
  heading: 'I Build Mobile Products That Look Good And Work Even Better.',
  description:
    'Mobile Engineer With 4 Years Of Experience Building And Shipping Production-Ready Applications With React Native, Expo And TypeScript.',
  portrait: {
    src: '/my-picture.avif',
    alt: 'Portrait of Jinadu Rashedat',
  },
  actions: {
    primary: { label: 'View My Work', href: '/work-gallery' },
    resume: { label: 'Download Resume', href: '/resume.pdf' },
  },
};
