import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

type LogoProps = {
  priority?: boolean;
  compact?: boolean;
  backgroundColor?: string;
  textClassName?: string;
  onClick?: () => void;
};

const nameBgMask = "url('/name-bg.avif')";

const Logo = ({
  priority = false,
  compact = false,
  backgroundColor,
  textClassName = 'text-honey',
  onClick,
}: LogoProps) => {
  return (
    <Link
      href='/'
      onClick={onClick}
      aria-label={`${siteConfig.name} - home`}
      className={`relative inline-flex items-center justify-center ${compact ? 'h-10.5 w-27' : 'h-16.25 w-39'}`}
    >
      {backgroundColor ? (
        <span
          aria-hidden='true'
          className='absolute inset-0'
          style={{
            backgroundColor,
            maskImage: nameBgMask,
            WebkitMaskImage: nameBgMask,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
          }}
        />
      ) : (
        <Image
          src='/name-bg.avif'
          alt=''
          width={160}
          height={65}
          priority={priority}
          aria-hidden='true'
          className='absolute inset-0 size-full'
        />
      )}
      <span
        className={`relative font-display font-medium ${compact ? 'text-[10px]' : 'text-sm'} ${textClassName}`}
      >
        {siteConfig.logoText}
      </span>
    </Link>
  );
};

export default Logo;
