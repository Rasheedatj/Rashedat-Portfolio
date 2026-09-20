import Image from 'next/image';
import type { ProjectLinks } from '@/types/project';

type StoreBadgesProps = {
  links: ProjectLinks;
};

const badges = [
  {
    key: 'appStore',
    src: '/app-store.svg',
    alt: 'Download on the App Store',
  },
  {
    key: 'playStore',
    src: '/play-store.svg',
    alt: 'Download on the Play Store',
  },
] as const;

const StoreBadges = ({ links }: StoreBadgesProps) => {
  return (
    <ul
      aria-label='Download links'
      className='flex items-center gap-1 lg:gap-2'
    >
      {badges.map(({ key, src, alt }) => {
        const badge = (
          <Image
            src={src}
            alt={alt}
            width={139}
            height={48}
            className='h-auto w-27.25 max-w-none lg:w-35.75'
          />
        );
        const href = links[key];

        return (
          <li key={key}>
            {href ? (
              <a href={href} target='_blank' rel='noopener noreferrer'>
                {badge}
              </a>
            ) : (
              badge
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default StoreBadges;
