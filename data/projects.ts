import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'eatly',
    name: 'Eatly',
    category: 'mobile',
    headline: 'Eatly - Bringing More Fun to Food Delivery.',
    summary:
      'Developed a food delivery experience that feels as satisfying as the meal itself.',
    role: 'Mobile Engineer',
    featured: true,
    annotation: 'Food delivery can be fun too!',
    links: {
      appStore:
        'https://apps.apple.com/ng/app/eatly-food-delivery/id6755495005',
      playStore:
        'https://play.google.com/store/apps/details?id=com.technologies.eatly',
    },
    techStack: ['react-native', 'expo', 'typescript'],
    images: {
      featured: {
        straight: '/eatly-straight-featured.avif',
        rotated: '/eatly-rotated-featured.avif',
      },
      metaImage: '/eatly-featured.avif',
      slideShow: [''],
      preview: '',
      annotationArt: '/eatly-arrow.svg',
    },
    caseStudy: [],
    seo: {
      description: 'Eatly — Food Delivery App — Case Study',
    },
  },
  {
    slug: 'koyo',
    name: 'Koyo',
    category: 'mobile',
    headline: 'Koyo - Making Nigerian Languages Easier to Learn.',
    summary:
      'Built a language learning app that makes Nigerian languages easier to understand, remember, and use in everyday life.',
    role: 'Mobile Engineer',
    featured: true,
    annotation: 'African culture is beautiful',
    links: {
      appStore: 'https://apps.apple.com/ng/app/koyo/id6744146311',
      playStore:
        'https://play.google.com/store/apps/details?id=com.koyo.koyoapp&pcampaignid=web_share',
    },
    techStack: ['react-native', 'expo', 'typescript'],
    images: {
      featured: {
        straight: '/koyo-straight-featured.avif',
        rotated: '/koyo-rotated-featured.avif',
      },
      metaImage: '/koyo-featured.avif',
      slideShow: [''],
      preview: '',
      annotationArt: '/koyo-arrow.svg',
    },
    caseStudy: [],
    seo: {
      description: 'Koyo — Local Language Learning App — Case Study',
    },
  },
  {
    slug: 'jacko',
    name: 'Jacko',
    category: 'mobile',
    headline: 'Jacko',
    summary:
      'Built a learning app that helps beginners understand programming languages through simple, practical lessons.',
    role: 'Mobile Engineer',
    featured: false,
    links: {},
    techStack: ['react-native', 'expo', 'typescript'],
    images: {
      featured: {
        straight: '/jacko-straight-featured.avif',
        rotated: '/jacko-rotated-featured.avif',
      },
      metaImage: '/jacko-featured.avif',
      slideShow: [''],
      preview: '',
      annotationArt: '/robo-arrow.svg',
    },
    caseStudy: [],
    seo: {
      description: 'Jacko — Exam Study App — Case Study',
    },
  },
  {
    slug: 'robo',
    name: 'Robo',
    category: 'mobile',
    headline: 'Robo - Learning to Code Made Simple.',
    summary:
      'Built a learning app that helps beginners understand programming languages through simple, practical lessons.',
    role: 'Mobile Engineer',
    featured: true,
    annotation: 'Hard things can be made really easy to learn',
    links: {},
    techStack: ['react-native', 'expo', 'typescript'],
    images: {
      featured: {
        straight: '/robo-straight-featured.avif',
        rotated: '/robo-rotated-featured.avif',
      },
      metaImage: '/robo-featured.avif',
      slideShow: [''],
      preview: '',
      annotationArt: '/robo-arrow.svg',
    },
    caseStudy: [],
    seo: {
      description: 'Robo — Coding App — Case Study',
    },
  },

  {
    slug: 'cartwise',
    name: 'Cartwise',
    category: 'mobile',
    headline: 'Cartwise',
    summary:
      'Built a learning app that helps beginners understand programming languages through simple, practical lessons.',
    role: 'Mobile Engineer',
    featured: false,
    links: {},
    techStack: ['react-native', 'expo', 'typescript'],
    images: {
      featured: {
        straight: '/cartwise-straight-featured.avif',
        rotated: '/cartwise-rotated-featured.avif',
      },
      metaImage: '/cartwise-featured.avif',
      slideShow: [''],
      preview: '',
      annotationArt: '/cartwise-arrow.svg',
    },
    caseStudy: [],
    seo: {
      description: 'Cartwise — Grocery Shopping App — Case Study',
    },
  },
  {
    slug: 'eatly-website',
    name: 'Eatly',
    category: 'website',
    headline: 'Eatly Website',
    summary:
      'Built a learning app that helps beginners understand programming languages through simple, practical lessons.',
    role: 'Front-End Developer',
    featured: false,
    annotation: 'Your website should be as fun as your mobile app',
    links: {},
    techStack: ['react', 'nextjs', 'typescript', 'tailwindcss'],
    images: {
      featured: '/eatly-website-featured.avif',
      slideShow: [''],
      preview: '',
      annotationArt: '/eatly-website-arrow.svg',
    },
    caseStudy: [],
    seo: {
      description: 'Eatly — Food Delivery Landing Page — Case Study',
    },
  },
  {
    slug: 'legacy',
    name: 'Legacy',
    category: 'website',
    headline: 'Legacy',
    summary:
      'Built a learning app that helps beginners understand programming languages through simple, practical lessons.',
    role: 'Front-End Developer',
    featured: false,
    annotation: 'A specialist ghostwriting and content studio',
    links: {},
    techStack: ['react', 'nextjs', 'typescript', 'tailwindcss'],
    images: {
      featured: '/legacy-ink-featured.avif',
      slideShow: [''],
      preview: '',
      annotationArt: '/legacy-ink-arrow.svg',
    },
    caseStudy: [],
    seo: {
      description: 'Legacy Inks — Business Landing Page — Case Study',
    },
  },
];
