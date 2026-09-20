'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import NavLinks from '@/components/layout/NavLinks';
import ButtonLink from '@/components/ui/ButtonLink';
import { contactHref } from '@/data/site';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className='md:hidden'>
      <button
        type='button'
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls='mobile-menu'
        onClick={() => setOpen((value) => !value)}
        className='p-2'
      >
        <Image
          src='/hamburger-menu.svg'
          alt=''
          width={52}
          height={17}
          aria-hidden='true'
          className='h-4 w-auto'
        />
      </button>
      {open && (
        <div
          id='mobile-menu'
          className='bg-linen absolute inset-x-0 top-full flex flex-col items-start gap-6 border-y-2 border-maroon px-4 py-6'
        >
          <NavLinks
            label='Mobile'
            showActiveIndicator
            onNavigate={() => setOpen(false)}
            // className='flex flex-col items-start gap-6'
          />
          <ButtonLink href={contactHref}>Let’s Talk</ButtonLink>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
