import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
import type { Project } from '@/types/project';
import { gsap } from '@/lib/gsap';

type ProjectMockupsProps = {
  project: Project;
};

const ProjectMockups = ({ project }: ProjectMockupsProps) => {
  const { featured, annotationArt } = project.images;
  const isWebsite = project.category === 'website';

  const mockupsRef = useRef<HTMLDivElement>(null);
  const rotatedRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const wrapper = mockupsRef.current;
      const rotated = rotatedRef.current;
      if (!wrapper || !rotated) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(rotated, {
          xPercent: -60,
          opacity: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top 75%',
            once: true,
          },
        });
      });
    },
    { scope: mockupsRef },
  );

  return (
    <div
      data-project={project.slug}
      className={`relative mt-13 lg:absolute lg:-right-1 lg:mt-0 lg:w-[48%] ${isWebsite ? 'lg:top-1/2 lg:-translate-y-1/2' : 'lg:bottom-0'}`}
    >
      {annotationArt && (
        <Image
          src={annotationArt}
          alt=''
          width={140}
          height={100}
          aria-hidden='true'
          className={`pointer-events-none relative mb-1 ml-2 block h-25 w-35 max-w-none lg:absolute lg:right-full lg:mr-3.5 lg:mb-0 lg:ml-0 ${isWebsite ? 'lg:-top-10' : 'lg:top-[24.5%]'}`}
        />
      )}
      {typeof featured === 'string' ? (
        <Image
          src={featured}
          alt={`${project.name} app screens`}
          width={1183}
          height={1360}
          sizes='(min-width: 1024px) 592px, 315px'
          className='-mb-2 block h-auto w-full lg:mb-0'
        />
      ) : (
        <div
          ref={mockupsRef}
          className='relative aspect-1183/1360 -mb-2 lg:mb-0'
        >
          <Image
            ref={rotatedRef}
            src={featured.rotated}
            alt=''
            width={855}
            height={1360}
            aria-hidden='true'
            sizes='(min-width: 1024px) 380px, 200px'
            className='absolute top-0 right-0 z-0 h-full w-auto'
          />
          <Image
            src={featured.straight}
            alt={`${project.name} app screens`}
            width={656}
            height={1355}
            sizes='(min-width: 1024px) 300px, 160px'
            className='absolute top-0 left-0 z-10 h-full w-auto'
          />
        </div>
      )}
    </div>
  );
};

export default ProjectMockups;
