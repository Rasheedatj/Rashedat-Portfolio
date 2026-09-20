import { siteConfig, socialLinks } from '@/data/site';
import type { Project } from '@/types/project';

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.jobTitle,
  url: siteConfig.url,
  sameAs: socialLinks
    .filter((link) => link.href.startsWith('http'))
    .map((link) => link.href),
};

export const projectSchema = (project: Project) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.name,
  headline: project.headline,
  description: project.summary,
  url: `${siteConfig.url}/projects/${project.slug}`,
  author: { '@type': 'Person', name: siteConfig.name },
});
