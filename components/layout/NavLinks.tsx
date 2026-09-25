'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/site';
import { isNavItemActive } from '@/lib/nav';

type NavLinksProps = {
  label: string;
  showActiveIndicator?: boolean;
  onNavigate?: () => void;
  className?: string;
};

const NavLinks = ({
  label,
  showActiveIndicator = false,
  onNavigate,
  className,
}: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav aria-label={label}>
      <ul
        className={`flex flex-col md:flex-row md:items-center ${label === 'Footer' ? 'gap-9' : 'gap-12'} ${className}`}
      >
        {navItems.map((item) => {
          const active = isNavItemActive(pathname, item);

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={active ? 'page' : undefined}
                className='relative inline-block font-bold text-maroon'
              >
                {item.label}
                {showActiveIndicator && active && (
                  <Image
                    src='/double-yellow-stroke.svg'
                    alt=''
                    width={63}
                    height={10}
                    aria-hidden='true'
                    className='absolute top-full left-1/2 mt-1.5 max-w-none -translate-x-1/2'
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
