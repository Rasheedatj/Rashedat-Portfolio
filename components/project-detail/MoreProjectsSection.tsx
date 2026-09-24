'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import MoreProjectCard from '@/components/project-detail/MoreProjectCard';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Project } from '@/types/project';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import Image from 'next/image';

type MoreProjectsSectionProps = {
  projects: Project[];
};

const MoreProjectsSection = ({ projects }: MoreProjectsSectionProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const otherProjects = projects.slice(0, 2);

  useGSAP(
    () => {
      const list = listRef.current;
      const items = list?.children;
      if (!list || !items?.length) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(items, { opacity: 0, y: 60 });

        ScrollTrigger.batch(items, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'sine.out',
              stagger: 0.15,
              autoAlpha: 1,
              overwrite: true,
            }),
        });
      });
    },
    { scope: listRef },
  );

  if (!otherProjects.length) return null;

  return (
    <section className='mt-16 md:mt-27'>
      <Container className='space-y-9 md:space-y-12'>
        <div className='flex flex-wrap items-start gap-8'>
          <SectionHeading
            title='See More Projects'
            titleClassName='max-w-[10.5em]'
            underline
          />
          <div className='w-full flex justify-center pl-20 md:pl-0 md:w-auto md:justify-start'>
            <Image
              src='/other-projects.svg'
              alt=''
              width={139}
              height={67}
              aria-hidden='true'
              className='h-16.75 w-34.75 '
            />
          </div>
        </div>

        <ul ref={listRef} className='flex flex-col md:flex-row gap-8 md:gap-10'>
          {otherProjects.map((project) => (
            <MoreProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default MoreProjectsSection;
