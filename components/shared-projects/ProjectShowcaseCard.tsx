import type { Project } from '@/types/project';

type ProjectShowcaseCardProps = {
  project: Project;
  index: number;
};

const ProjectShowcaseCard = ({ project, index }: ProjectShowcaseCardProps) => {
  return (
    <article>
      <span>{String(index + 1).padStart(2, '0')}</span>
      <h3>{project.name}</h3>
    </article>
  );
};

export default ProjectShowcaseCard;
