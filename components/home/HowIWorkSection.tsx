'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import PrincipleItem from '@/components/home/PrincipleItem';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { principles } from '@/data/principles';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const HowIWorkSection = () => {
  const listRef = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const list = listRef.current;
      const items = list?.children;
      if (!list || !items?.length) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(items, { opacity: 0, y: 60 });

        ScrollTrigger.batch(items, {
          start: 'top 85%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'sine.out',
              stagger: 0.2,
              autoAlpha: 1,
              overwrite: true,
            }),
        });
      });
    },
    { scope: listRef },
  );

  return (
    <section aria-labelledby='how-i-work-heading'>
      <Container className='grid gap-7.5 lg:grid-cols-[minmax(12rem,1fr)_minmax(0,56.25rem)] lg:items-start lg:gap-0'>
        <SectionHeading
          id='how-i-work-heading'
          title='How I Work'
          description='A Few Principles I Bring Into Every Product I Work On'
          titleClassName='max-w-none lg:max-w-[3.5em]'
          descriptionClassName='max-w-56 lg:max-w-60 lg:leading-7.5!'
          gapClassName='space-y-7.5 lg:space-y-12'
          underline
          mobileUnderline
        />

        <ol ref={listRef} className='space-y-3.25 lg:space-y-6'>
          {principles.map((principle, index) => (
            <PrincipleItem
              key={principle.title}
              principle={principle}
              index={index}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default HowIWorkSection;
