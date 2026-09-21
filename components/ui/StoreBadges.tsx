import Image from 'next/image';
import type { ProjectLinks } from '@/types/project';

type StoreBadgesProps = {
  links: ProjectLinks;
  type?: 'mobile' | 'website';
};

const StoreBadges = ({ links, type }: StoreBadgesProps) => {
  return (
    <ul
      aria-label='Download links'
      className='flex items-center gap-1 lg:gap-2'
    >
      {type === 'mobile' ? (
        <>
          <li>
            <a href={links.appStore} target='_blank' rel='noopener noreferrer'>
              <Image
                src='/app-store.svg'
                alt='appStore'
                width={139}
                height={48}
                className='h-auto w-27.25 max-w-none lg:w-35.75'
              />
            </a>
          </li>
          <li>
            <a href={links.playStore} target='_blank' rel='noopener noreferrer'>
              <Image
                src='/play-store.svg'
                alt='playStore'
                width={139}
                height={48}
                className='h-auto w-27.25 max-w-none lg:w-35.75'
              />
            </a>
          </li>
        </>
      ) : null}
    </ul>
  );
};

export default StoreBadges;
