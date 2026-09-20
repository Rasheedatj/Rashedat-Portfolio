import { projects } from '@/data/projects';
import type { Project, WorkFilter } from '@/types/project';

export const getAllProjects = (): Project[] => projects;

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const getFeaturedProjects = (): Project[] =>
  projects.filter((project) => project.featured);

export const getProjectsByFilter = (filter: WorkFilter): Project[] =>
  filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

export const getOtherProjects = (slug: string): Project[] =>
  projects.filter((project) => project.slug !== slug);
