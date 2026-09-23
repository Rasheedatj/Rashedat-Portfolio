import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/project';

type MoreProjectCardProps = {
  project: Project;
};

const categoryLabels = {
  mobile: 'Mobile App',
  website: 'Website',
};

const MoreProjectCard = ({ project }: MoreProjectCardProps) => {
  const thumbnail =
    typeof project.images.featured === 'string'
      ? project.images.featured
      : project.images.featured.straight;

  return (
    <li className='relative '>
      <Image
        src='/yellow-tape.svg'
        alt=''
        width={80}
        height={113}
        aria-hidden='true'
        className='pointer-events-none absolute -top-8 -left-4 z-10 md::-z-10 w-14.5 h-18.75 max-w-none md:-top-8 md:-left-8 md:w-20'
      />

      <Link
        href={`/projects/${project.slug}`}
        className='flex items-center gap-4 rounded-[14px] bg-lemon/90 px-2 py-2 md:rounded-[22px] md:gap-9 md:px-3 md:py-3'
      >
        <div className='relative h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-maroon md:h-24 md:w-19'>
          <Image
            src={thumbnail}
            alt=''
            aria-hidden='true'
            fill
            sizes='96px'
            className='object-cover'
          />
        </div>
        <div className='flex-1 space-y-2'>
          <p className='font-display text-2xl font-medium text-espresso md:text-4xl'>
            {project.category === 'mobile'
              ? `${project.name} App`
              : project.name}
          </p>
          <p className='text-xs font-bold text-espresso/50 md:text-lg'>
            {categoryLabels[project.category]}
          </p>
        </div>
        <Image
          src='/external arrow.svg'
          alt=''
          aria-hidden='true'
          width={67}
          height={19}
          className='lg:w-17 lg:h-4.75'
        />
      </Link>
    </li>
  );
};

export default MoreProjectCard;
