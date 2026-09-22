import { projects } from '@/data/projects';
import type { Project, ProjectImage, WorkFilter } from '@/types/project';

// Resolves a single shareable image for metadata (Open Graph/Twitter cards):
// `metaImage` when a project sets one (mobile projects, whose `featured` is
// a `{ straight, rotated }` pair rather than one image), otherwise falls
// back to `featured` itself (website projects, where it's already a string).
export const getMetaImage = (project: Project): ProjectImage =>
  project.images.metaImage ??
  (typeof project.images.featured === 'string'
    ? project.images.featured
    : project.images.featured.straight);

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
