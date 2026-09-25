'use client';
import ViewAllWorkLink from '@/components/home/ViewAllWorkLink';
import ProjectShowcaseCard from '@/components/shared-projects/ProjectShowcaseCard';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { getFeaturedProjects } from '@/lib/projects';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const FeaturedProjectsSection = () => {
  const projects = getFeaturedProjects();

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
          start: 'top 95%',
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
    <section aria-labelledby='featured-projects-heading'>
      <Container className='space-y-16 md:space-y-20'>
        <SectionHeading
          id='featured-projects-heading'
          title='Featured Projects'
          description='A Few Things I Have Helped Build And Ship.'
          underline
          titleClassName='max-w-[4.5em]'
        />
        <section className='space-y-20 md:space-y-27'>
          <ul ref={listRef} className='flex flex-col'>
            {projects.map((project, index) => (
              <ProjectShowcaseCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </ul>
          <ViewAllWorkLink />
        </section>
      </Container>
    </section>
  );
};

export default FeaturedProjectsSection;
