import StoreBadges from '@/components/ui/StoreBadges';
import type { Project } from '@/types/project';

type ProjectAvailabilityProps = {
  project: Project;
};

const ProjectAvailability = ({ project }: ProjectAvailabilityProps) => {
  const isWebsite = project.category === 'website';

  return (
    <div className='flex flex-col gap-3 md:flex-row md:items-end md:gap-6'>
      <p className='text-xs font-bold text-maroon-text md:text-base w-35'>
        {isWebsite ? 'See Live Preview' : 'Available On'}
      </p>
      <StoreBadges
        links={project.links}
        type={isWebsite ? 'website' : 'mobile'}
      />
    </div>
  );
};

export default ProjectAvailability;
