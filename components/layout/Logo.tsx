import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

type LogoProps = {
  priority?: boolean;
};

const Logo = ({ priority = false }: LogoProps) => {
  return (
    <Link
      href='/'
      aria-label={`${siteConfig.name} - home`}
      className='relative inline-flex h-16.25 w-39 items-center justify-center'
    >
      <Image
        src='/name-bg.avif'
        alt=''
        width={160}
        height={65}
        priority={priority}
        aria-hidden='true'
        className='absolute inset-0 size-full'
      />
      <span className='relative font-display text-sm font-medium text-honey'>
        {siteConfig.logoText}
      </span>
    </Link>
  );
};

export default Logo;
