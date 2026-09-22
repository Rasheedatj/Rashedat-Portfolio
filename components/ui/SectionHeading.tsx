'use client';

import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
import { gsap, SplitText } from '@/lib/gsap';

type SectionHeadingProps = {
  id?: string;
  title: string;
  description?: string;
  underline?: boolean;
  mobileUnderline?: boolean;
  descriptionClassName?: string;
  titleClassName?: string;
  gapClassName?: string;
};

const SectionHeading = ({
  id,
  title,
  description,
  underline = false,
  mobileUnderline = true,
  descriptionClassName = 'max-w-64 lg:max-w-84',
  titleClassName = 'max-w-[7.5em]',
  gapClassName = 'space-y-6 md:space-y-9',
}: SectionHeadingProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const heading = headingRef.current;
      if (!heading) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        SplitText.create(heading, {
          type: 'chars',
          mask: 'chars',
          onSplit(self) {
            return gsap.from(self.chars, {
              yPercent: 100,
              opacity: 0,
              duration: 0.9,
              stagger: 0.02,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: heading,
                start: 'top 85%',
                once: true,
              },
            });
          },
        });

        const description = descriptionRef.current;
        if (!description) return;

        SplitText.create(description, {
          type: 'lines',
          mask: 'lines',
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.06,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: description,
                start: 'top 85%',
                once: true,
              },
            });
          },
        });
      });
    },
    { scope: headingRef },
  );

  return (
    <div className={gapClassName}>
      <div className='relative w-fit'>
        <h2
          ref={headingRef}
          id={id}
          className={`font-display text-[28px] leading-7.5 font-medium text-espresso lg:text-5xl lg:leading-12.5 ${titleClassName}`}
        >
          {title}
        </h2>
        {underline && (
          <Image
            src='/single-yellow-stroke.svg'
            alt=''
            width={178}
            height={17}
            aria-hidden='true'
            className={`pointer-events-none absolute top-full -left-0.75 mt-1.5 h-auto max-w-none lg:w-44.5 ${mobileUnderline ? 'block w-22.5' : 'hidden lg:block'}`}
          />
        )}
      </div>
      {description && (
        <p
          ref={descriptionRef}
          className={`text-[12.5px] leading-[1.8] font-bold text-espresso lg:text-base lg:leading-[1.9] ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
