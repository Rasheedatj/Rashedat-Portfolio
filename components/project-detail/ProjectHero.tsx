import type { Project } from '@/types/project';

type ProjectHeroProps = {
  project: Project;
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <section>
      <h1>{project.headline}</h1>
    </section>
  );
};

export default ProjectHero;
