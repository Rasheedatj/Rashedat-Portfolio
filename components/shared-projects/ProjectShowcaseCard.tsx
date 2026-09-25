import Image from 'next/image';
import ProjectMockups from '@/components/shared-projects/ProjectMockups';
import ButtonLink from '@/components/ui/ButtonLink';
import StoreBadges from '@/components/ui/StoreBadges';
import type { Project } from '@/types/project';

type ProjectShowcaseCardProps = {
  project: Project;
  index: number;
};

const categoryLabels = {
  mobile: 'Mobile Application',
  website: 'Website',
};

const ProjectShowcaseCard = ({ project, index }: ProjectShowcaseCardProps) => {
  const titleId = `${project.slug}-title`;

  return (
    <li
      aria-labelledby={titleId}
      className={`relative overflow-hidden rounded-[20px]  mb-12  ${project.category === 'mobile' ? 'lg:mt-27' : 'lg:mt-9'} ${index === 0 && 'lg:mt-0!'} bg-[#F1F1D4] bg-[url('/project-bg.avif')] bg-size-[100%_100%] px-6.5 pt-8.5 shadow-project-card lg:overflow-visible lg:pt-13 lg:pr-0 lg:pb-10.5 lg:pl-17.5`}
    >
      <div className='lg:max-w-114 space-y-9'>
        <div className='space-y-6'>
          <p className='relative isolate ml-1 w-fit font-display text-base font-semibold text-crimson lg:text-2xl'>
            <Image
              src='/multiple-yellow-stroke.svg'
              alt=''
              width={43}
              height={18}
              aria-hidden='true'
              className='absolute top-1/2 -left-1 -z-10 w-7 max-w-none -translate-y-1/2 lg:-left-1.5 lg:w-10.75'
            />
            {String(index + 1).padStart(2, '0')}
          </p>

          <h3
            id={titleId}
            className='relative  w-fit font-display text-5xl leading-none font-medium text-espresso lg:text-[81px]'
          >
            {project.name}
            <Image
              src='/single-downward-yellow-stroke.svg'
              alt=''
              width={178}
              height={17}
              aria-hidden='true'
              className='pointer-events-none absolute top-full left-0 mt-1 w-32.5 max-w-none lg:w-44.5'
            />
          </h3>

          <p className='font-display text-base font-medium text-espresso lg:text-2xl '>
            {categoryLabels[project.category]}
          </p>
          <p className='text-xs leading-normal font-semibold text-espresso-70 capitalize lg:text-lg lg:leading-6'>
            {project.summary}
          </p>
        </div>

        <div className='space-y-2'>
          <p className='font-display text-sm leading-tight font-medium text-crimson uppercase lg:text-[19px]'>
            My Role
          </p>
          <p className='text-sm font-bold text-maroon-text lg:text-xl'>
            {project.role}
          </p>
        </div>

        <div className='space-y-6'>
          <ButtonLink href={`/projects/${project.slug}`} taped>
            View Case Study
          </ButtonLink>

          <div className='flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3'>
            <p className='text-[10px] font-bold text-maroon-text lg:text-[13px]'>
              {project.category === 'mobile'
                ? (project.links.appStore || project.links.playStore) &&
                  'Available On'
                : project.links.liveSite && 'See Live Preview'}
            </p>
            <StoreBadges links={project.links} type={project.category} />
          </div>
        </div>
      </div>

      <ProjectMockups project={project} />
    </li>
  );
};

export default ProjectShowcaseCard;
