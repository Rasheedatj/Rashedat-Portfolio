'use client';
import TechStackGroup from '@/components/home/TechStackGroup';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { techStackGroups } from '@/data/tech-stack';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const TechStackSection = () => {
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
              // overwrite: true,
            }),
        });
      });
    },
    { scope: listRef },
  );
  return (
    <section aria-labelledby='tech-stack-heading'>
      <Container className='space-y-6 md:space-y-12'>
        <SectionHeading
          id='tech-stack-heading'
          title='What I Build With'
          description='The Tools & Technologies I Use Most To Turn Ideas Into Real Shippable Products'
          titleClassName='max-w-none'
          descriptionClassName='max-w-85 lg:max-w-90 lg:leading-8.25!'
          gapClassName='space-y-5 lg:space-y-13'
          underline
          mobileUnderline
        />

        <ul ref={listRef} className='space-y-2 lg:space-y-6'>
          {techStackGroups.map((group, index) => (
            <TechStackGroup key={group.id} group={group} index={index} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TechStackSection;
