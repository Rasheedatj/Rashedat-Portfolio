import ProjectShowcaseCard from '@/components/shared-projects/ProjectShowcaseCard';
import type { Project } from '@/types/project';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

type WorkGalleryListProps = {
  projects: Project[];
};

const WorkGalleryList = ({ projects }: WorkGalleryListProps) => {
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
          start: 'top 100%',
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
    <ul ref={listRef} className='flex flex-col '>
      {projects.map((project, index) => (
        <ProjectShowcaseCard
          key={project.slug}
          project={project}
          index={index}
        />
      ))}
    </ul>
  );
};

export default WorkGalleryList;
