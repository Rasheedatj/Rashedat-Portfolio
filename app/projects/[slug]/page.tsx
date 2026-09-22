import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/seo/JsonLd';
import CaseStudySection from '@/components/project-detail/CaseStudySection';
import MoreProjectsSection from '@/components/project-detail/MoreProjectsSection';
import ProjectHero from '@/components/project-detail/ProjectHero';
import {
  getAllProjects,
  getMetaImage,
  getOtherProjects,
  getProjectBySlug,
} from '@/lib/projects';
import { projectSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = () =>
  getAllProjects().map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.seo?.description,
    description: project.seo?.description,
    path: `/projects/${project.slug}`,
    image: getMetaImage(project),
  });
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd data={projectSchema(project)} />
      <ProjectHero project={project} />
      {project.caseStudy.map((section) => (
        <CaseStudySection key={section.heading} section={section} />
      ))}
      <MoreProjectsSection projects={getOtherProjects(project.slug)} />
    </>
  );
};

export default Page;
