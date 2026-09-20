import ViewAllWorkLink from '@/components/home/ViewAllWorkLink';
import ProjectShowcaseCard from '@/components/shared-projects/ProjectShowcaseCard';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { getFeaturedProjects } from '@/lib/projects';

const FeaturedProjectsSection = () => {
  const projects = getFeaturedProjects();

  return (
    <section aria-labelledby='featured-projects-heading'>
      <Container width='w-[min(77.5rem,100%-2rem)]'>
        <SectionHeading
          id='featured-projects-heading'
          title='Featured Projects'
          description='A Few Things I Have Helped Design, Build And Ship.'
          underline
        />

        <div className='mt-9.5 flex flex-col gap-12 lg:mt-17.5 lg:gap-43'>
          {projects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className='mt-22.5 lg:mt-57'>
          <ViewAllWorkLink />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjectsSection;
