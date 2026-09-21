import ViewAllWorkLink from '@/components/home/ViewAllWorkLink';
import ProjectShowcaseCard from '@/components/shared-projects/ProjectShowcaseCard';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { getFeaturedProjects } from '@/lib/projects';

const FeaturedProjectsSection = () => {
  const projects = getFeaturedProjects();

  return (
    <section aria-labelledby='featured-projects-heading'>
      <Container className='space-y-20'>
        <SectionHeading
          id='featured-projects-heading'
          title='Featured Projects'
          description='A Few Things I Have Helped Design, Build And Ship.'
          underline
        />
        <section className='space-y-23.75'>
          <div className='flex flex-col gap-12 lg:gap-45'>
            {projects.map((project, index) => (
              <ProjectShowcaseCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
          <ViewAllWorkLink />
        </section>
      </Container>
    </section>
  );
};

export default FeaturedProjectsSection;
