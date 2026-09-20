import type { Project } from '@/types/project';

type MoreProjectsSectionProps = {
  projects: Project[];
};

const MoreProjectsSection = ({ projects }: MoreProjectsSectionProps) => {
  return <section data-count={projects.length}></section>;
};

export default MoreProjectsSection;
