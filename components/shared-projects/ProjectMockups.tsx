import Image from 'next/image';
import type { Project } from '@/types/project';

type ProjectMockupsProps = {
  project: Project;
};

const ProjectMockups = ({ project }: ProjectMockupsProps) => {
  const { featured, annotationArt } = project.images;

  return (
    <div
      data-project={project.slug}
      className='relative mt-13 lg:absolute lg:-right-1 lg:bottom-0 lg:mt-0 lg:w-[48%]'
    >
      {annotationArt && (
        <Image
          src={annotationArt}
          alt=''
          width={140}
          height={100}
          aria-hidden='true'
          className='pointer-events-none relative mb-1 ml-2 block h-25 w-35 max-w-none lg:absolute lg:top-[24.5%] lg:right-full lg:mr-3.5 lg:mb-0 lg:ml-0'
        />
      )}
      <Image
        src={featured}
        alt={`${project.name} app screens`}
        width={1183}
        height={1360}
        sizes='(min-width: 1024px) 592px, 315px'
        className='-mb-2 block h-auto w-full lg:mb-0'
      />
    </div>
  );
};

export default ProjectMockups;
