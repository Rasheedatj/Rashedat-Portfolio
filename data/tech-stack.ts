import type { TechItem, TechStackGroup } from '@/types/home';

export const techItems: TechItem[] = [
  { id: 'react-native', name: 'React Native', logo: '/react-native.svg' },
  { id: 'expo', name: 'Expo', logo: '/expo.svg' },
  { id: 'typescript', name: 'Typescript', logo: '/typescript.svg' },
  { id: 'react', name: 'React.js', logo: '/react-js.svg' },
  { id: 'nextjs', name: 'Next.js', logo: '/next-js.svg' },
  { id: 'javascript', name: 'Javascript', logo: '/javascript.svg' },
  { id: 'tailwindcss', name: 'Tailwind CSS', logo: '/tailwind-css.svg' },
];

const pick = (ids: string[]) =>
  ids.map((id) => techItems.find((item) => item.id === id)!);

export const techStackGroups: TechStackGroup[] = [
  {
    id: 'mobile',
    title: 'Mobile',
    items: pick(['react-native', 'expo', 'typescript']),
  },
  {
    id: 'front-end',
    title: 'Front-End',
    items: pick(['react', 'nextjs', 'javascript', 'tailwindcss']),
  },
];
