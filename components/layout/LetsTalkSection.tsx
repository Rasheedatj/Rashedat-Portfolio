'use client';

import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
import ButtonLink from '@/components/ui/ButtonLink';
import Container from '@/components/ui/Container';
import { emailHref } from '@/data/site';
import { gsap } from '@/lib/gsap';

const LetsTalkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Pinned-panel-with-overscroll: `main` (everything before this section)
  // pins in place once fully scrolled through, and this section - unaffected
  // by that pin thanks to `pinSpacing: false` - keeps scrolling up and over
  // it. Same technique as
  // https://demos.gsap.com/demo/pinned-panels-with-overscroll/
  useGSAP(
    () => {
      const section = sectionRef.current;
      const main = document.getElementById('main-content');
      if (!section || !main) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // A subtle recede on the covered panel while it's pinned reads as
        // depth rather than a flat swap.
        gsap.to(main, {
          scale: 0.94,
          ease: 'none',
          scrollTrigger: {
            trigger: main,
            start: 'bottom bottom',
            end: () => `+=${section.offsetHeight}`,
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id='contact'
      aria-labelledby='lets-talk-heading'
      className="relative z-10 bg-cocoa bg-[url('/building-something-bg.avif')] bg-cover bg-center pt-23.25 pb-22 text-center text-white lg:h-[65dvh]"
    >
      <Container className='flex flex-col items-center gap-9'>
        <div className='space-y-6'>
          <h2
            id='lets-talk-heading'
            className='font-display text-[34px] leading-normal font-medium md:text-5xl'
          >
            Building Something ?
            <br />
            <span className='relative inline-block'>
              Let’s Talk.
              <Image
                src='/single-yellow-stroke.svg'
                alt=''
                width={178}
                height={17}
                aria-hidden='true'
                className='absolute top-full left-1/2 -mt-1 max-w-none -translate-x-1/2'
              />
            </span>
          </h2>
          <p className='max-w-140 text-lg leading-8.5 font-bold'>
            Whether You Need A Mobile Product, A Marketing Website, Or Extra
            Engineering Support. Tell Me What You Are Working On.
          </p>
        </div>

        <ButtonLink href={emailHref} variant='light' taped>
          Discuss Your Project
        </ButtonLink>
      </Container>
    </section>
  );
};

export default LetsTalkSection;
