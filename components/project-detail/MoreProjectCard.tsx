import type { Project } from '@/types/project';

type MoreProjectCardProps = {
  project: Project;
};

const MoreProjectCard = ({ project }: MoreProjectCardProps) => {
  return (
    <li>
      <h3>{project.name}</h3>
    </li>
  );
};

export default MoreProjectCard;
