import {
  SiExpo,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import type { TechItem, TechStackGroup } from '@/types/home';

export const techItems: TechItem[] = [
  { id: 'react-native', name: 'React Native', icon: SiReact },
  { id: 'expo', name: 'Expo', icon: SiExpo },
  { id: 'typescript', name: 'Typescript', icon: SiTypescript },
  { id: 'react', name: 'React.js', icon: SiReact },
  { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs },
  { id: 'javascript', name: 'Javascript', icon: SiJavascript },
  { id: 'tailwindcss', name: 'Tailwind CSS', icon: SiTailwindcss },
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
