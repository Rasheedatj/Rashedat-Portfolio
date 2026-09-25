import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { getAllProjects } from '@/lib/projects';

const sitemap = (): MetadataRoute.Sitemap => {
  const routes = ['/', '/work-gallery'];
  const projectRoutes = getAllProjects().map(
    (project) => `/projects/${project.slug}`,
  );

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
};

export default sitemap;
