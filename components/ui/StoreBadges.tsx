import Image from 'next/image';
import ButtonLink from '@/components/ui/ButtonLink';
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
            <a
              href={links.appStore}
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer'
            >
              <Image
                src='/app-store.svg'
                alt='appStore'
                width={139}
                height={48}
                className='h-auto w-27.25 max-w-none lg:w-35.75'
              />
            </a>
          </li>
          <li className='cursor-pointer'>
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
      ) : (
        <li>
          <ButtonLink
            href={links.liveSite ?? '#'}
            variant='outline'
            style='bg-[#FDF3E3] rounded-[13.4px] gap-1.5'
            external
          >
            <Image
              src='/website.svg'
              alt=''
              width={20}
              height={20}
              aria-hidden='true'
              className='h-4 w-4 md:h-5 md:w-5'
            />
            View Website
            <Image
              src='/external.svg'
              alt=''
              width={12}
              height={12}
              aria-hidden='true'
              className='h-2 w-2 md:h-3 md:w-3'
            />
          </ButtonLink>
        </li>
      )}
    </ul>
  );
};

export default StoreBadges;
