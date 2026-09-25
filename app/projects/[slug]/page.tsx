import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/seo/JsonLd';
import CaseStudySection from '@/components/project-detail/CaseStudySection';
import MoreProjectsSection from '@/components/project-detail/MoreProjectsSection';
import ProjectAvailability from '@/components/project-detail/ProjectAvailability';
import ProjectBuiltWith from '@/components/project-detail/ProjectBuiltWith';
import ProjectHero from '@/components/project-detail/ProjectHero';
import Container from '@/components/ui/Container';
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

      <Container className='mt-10 space-y-8 md:mt-20 md:space-y-12'>
        <ProjectAvailability project={project} />
        <ProjectBuiltWith techStack={project.techStack} />
      </Container>

      <Container className='mt-16 space-y-12 md:mt-27 md:space-y-21'>
        {project.caseStudy.map((section) => (
          <CaseStudySection key={section.label} section={section} />
        ))}
      </Container>

      <MoreProjectsSection projects={getOtherProjects(project.slug)} />
    </>
  );
};

export default Page;
