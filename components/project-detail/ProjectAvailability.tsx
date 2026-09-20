import type { ProjectLinks } from '@/types/project';

type ProjectAvailabilityProps = {
  links: ProjectLinks;
};

const ProjectAvailability = ({ links }: ProjectAvailabilityProps) => {
  return <div data-has-links={Object.keys(links).length > 0}></div>;
};

export default ProjectAvailability;
