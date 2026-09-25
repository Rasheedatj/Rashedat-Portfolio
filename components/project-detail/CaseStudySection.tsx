'use client';

import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
import type { CaseStudySection as CaseStudySectionData } from '@/types/project';
import { gsap, SplitText } from '@/lib/gsap';

type CaseStudySectionProps = {
  section: CaseStudySectionData;
};

const DIM_ESPRESSO = 'rgba(51, 32, 26, 0.15)';

const CaseStudySection = ({ section }: CaseStudySectionProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      // const heading = headingRef.current;
      const body = bodyRef.current;
      if (!body) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // SplitText.create(heading, {
        //   type: 'words',
        //   onSplit(self) {
        //     return gsap.fromTo(
        //       self.words,
        //       { color: DIM_ESPRESSO },
        //       {
        //         color: '#33201a',
        //         stagger: 0.1,
        //         scrollTrigger: {
        //           trigger: heading,
        //           start: 'top center',
        //           end: 'bottom center',
        //           scrub: true,
        //         },
        //       },
        //     );
        //   },
        // });

        SplitText.create(body, {
          type: 'words',
          onSplit(self) {
            return gsap.fromTo(
              self.words,
              { color: DIM_ESPRESSO },
              {
                color: '#33201ab2',
                stagger: 0.1,
                scrollTrigger: {
                  trigger: body,
                  start: 'top center',
                  end: 'bottom center',
                  scrub: true,
                },
              },
            );
          },
        });
      });
    },
    { scope: rootRef, dependencies: [section.heading, section.body] },
  );

  return (
    <div
      ref={rootRef}
      className='flex flex-col gap-4 md:flex-row md:gap-16 items-start'
    >
      <p className='relative w-fit shrink-0 font-bold text-[15px] text-[#461010D9] uppercase md:w-32 md:text-[21px]'>
        {section.label}
        <Image
          src='/double-yellow-stroke.svg'
          alt=''
          width={100}
          height={17}
          aria-hidden='true'
          className='pointer-events-none absolute top-full left-0 mt-0.5 w-14 max-w-none'
        />
      </p>
      <div className=' space-y-3 lg:space-y-10'>
        <h2
          // ref={headingRef}
          className='font-display text-[21px] leading-tight font-medium text-espresso md:text-4xl md:leading-tight capitalize'
        >
          {section.heading}
        </h2>
        <p
          ref={bodyRef}
          className='text-sm leading-relaxed text-espresso/70 md:text-[19px] font-semibold md:leading-[1.9]'
        >
          {section.body}
        </p>
      </div>
    </div>
  );
};

export default CaseStudySection;
