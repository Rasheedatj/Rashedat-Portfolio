import type { NavItem, SocialLink } from '@/types/site';

export const siteConfig = {
  name: 'Jinadu Rasheedat',
  title: 'Jinadu Rasheedat | Mobile Engineer',
  description:
    'Mobile engineer building production-ready apps with React Native, Expo and TypeScript.',
  logoText: 'Jinadu Rashedat',
  jobTitle: 'Mobile Engineer',
  url: 'https://www.rashedatjinadu.com/',
  locale: 'en_US',
} as const;

export const navItems: NavItem[] = [
  { label: 'Home', href: '/', activePaths: ['/'] },
  {
    label: 'Work',
    href: '/work-gallery',
    activePaths: ['/work-gallery', '/projects'],
  },
  {
    label: 'Hire Me',
    href: '/#choose-how-we-work',
    activePaths: ['/#choose-how-we-work'],
  },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
];

export const contactHref = '/#contact';

// TODO: replace the placeholder hrefs with the real profile URLs and email.
export const socialLinks: SocialLink[] = [
  { platform: 'github', label: 'GitHub', href: '#' },
  { platform: 'linkedin', label: 'LinkedIn', href: '#' },
  { platform: 'x', label: 'X', href: '#' },
  { platform: 'email', label: 'Email', href: '#' },
];

export const emailHref =
  socialLinks.find((link) => link.platform === 'email')?.href ?? '#';
