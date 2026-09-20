import Image from 'next/image';
import { socialLinks } from '@/data/site';
import type { SocialPlatform } from '@/types/site';

const icons: Record<SocialPlatform, string> = {
  github: '/github.svg',
  linkedin: '/linkedin.svg',
  x: '/x.svg',
  email: '/mail.svg',
};

const SocialLinks = () => {
  return (
    <ul aria-label='Social links' className='flex items-center gap-6'>
      {socialLinks.map((link) => {
        const external = link.href.startsWith('http');

        return (
          <li key={link.platform}>
            <a
              href={link.href}
              aria-label={link.label}
              {...(external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              <Image
                src={icons[link.platform]}
                alt=''
                width={24}
                height={24}
                aria-hidden='true'
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
