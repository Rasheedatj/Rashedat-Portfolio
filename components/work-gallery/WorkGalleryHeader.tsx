'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap, SplitText } from '@/lib/gsap';

type WorkGalleryHeaderProps = {
  children?: React.ReactNode;
};

const WorkGalleryHeader = ({ children }: WorkGalleryHeaderProps) => {
  const headerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const heading = headingRef.current;
      const description = descriptionRef.current;
      if (!heading || !description) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const headingSplit = SplitText.create(heading, {
          type: 'chars',
          mask: 'chars',
        });
        const descriptionSplit = SplitText.create(description, {
          type: 'lines',
          mask: 'lines',
        });

        gsap
          .timeline()
          .from(headingSplit.chars, {
            yPercent: 100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.02,
            ease: 'power3.out',
          })
          .from(
            descriptionSplit.lines,
            {
              yPercent: 100,
              opacity: 0,
              duration: 0.5,
              stagger: 0.06,
              ease: 'power3.out',
            },
            '-=0.4',
          );
      });
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10'
    >
      <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-14.25'>
        <h1
          ref={headingRef}
          id='work-gallery-heading'
          className='lg:max-w-40 font-display text-[28px] leading-7.5 font-medium text-espresso lg:text-[45px] lg:leading-12.5'
        >
          Work Gallery
        </h1>
        <p
          ref={descriptionRef}
          className='max-w-56 text-[13px] leading-6 font-semibold text-maroon-text lg:max-w-100 lg:text-lg lg:leading-9'
        >
          A Gallery Of Things I Have Helped Build And Ship.
        </p>
      </div>
      {children}
    </header>
  );
};

export default WorkGalleryHeader;
