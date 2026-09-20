import type { Project } from '@/types/project';

type ProjectMockupsProps = {
  project: Project;
};

const ProjectMockups = ({ project }: ProjectMockupsProps) => {
  return <div data-project={project.slug}></div>;
};

export default ProjectMockups;
