import ProjectShowcaseCard from '@/components/shared-projects/ProjectShowcaseCard';
import type { Project } from '@/types/project';

type WorkGalleryListProps = {
  projects: Project[];
};

const WorkGalleryList = ({ projects }: WorkGalleryListProps) => {
  return (
    <ul className='flex flex-col '>
      {projects.map((project, index) => (
        <ProjectShowcaseCard
          key={project.slug}
          project={project}
          index={index}
        />
      ))}
    </ul>
  );
};

export default WorkGalleryList;
