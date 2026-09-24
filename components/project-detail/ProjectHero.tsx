'use client';

import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';
import Container from '@/components/ui/Container';
import type { Project } from '@/types/project';
import { gsap, SplitText } from '@/lib/gsap';

type ProjectHeroProps = {
  project: Project;
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const heading = headingRef.current;
      if (!heading) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        SplitText.create(heading, {
          type: 'lines',
          mask: 'lines',
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out',
            });
          },
        });

        const wrapper = galleryRef.current;
        const track = trackRef.current;
        if (!wrapper || !track) return;

        const distance = () => track.scrollWidth - wrapper.offsetWidth;
        if (distance() <= 0) return;

        gsap.set(wrapper, { overflow: 'hidden' });

        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: () => `+=${distance()}`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: sectionRef, dependencies: [project.slug] },
  );

  return (
    <section ref={sectionRef} className='space-y-10 md:space-y-20'>
      <Container className='flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between'>
        <h1
          ref={headingRef}
          className='max-w-200 font-display text-2xl leading-[1.2] text-espresso md:text-[56px] md:leading-16.25'
        >
          {project.headline}
        </h1>
      </Container>
      <Container>
        <Image
          src={project.images.cover}
          alt={`${project.name} website preview`}
          width={2518}
          height={1172}
          sizes='(min-width: 1024px) 1280px, 100vw'
          className='h-auto w-full '
          priority
        />
      </Container>

      {/* 
      <div>
        {isWebsite && typeof cover === 'string' ? (
          <Container>
            <Image
              src={cover}
              alt={`${project.name} website preview`}
              width={2518}
              height={1172}
              sizes='(min-width: 1024px) 1280px, 100vw'
              className='h-auto w-full '
              priority
            />
          </Container>
        ) : (
          <div
            // ref={galleryRef}
            className='overflow-x-auto py-10 [scrollbar-width:none] md:py-16 [&::-webkit-scrollbar]:hidden'
          >
            <div
              // ref={trackRef}
              className='flex w-max gap-4 px-6 md:gap-8 md:px-[max(1.5rem,calc(50vw-650px))]'
            >
              {mockups.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className='relative aspect-568/1172 h-95 shrink-0 md:h-155'
                >
                  <Image
                    src={src}
                    alt={index === 0 ? `${project.name} app screens` : ''}
                    aria-hidden={index === 0 ? undefined : true}
                    fill
                    sizes='(min-width: 768px) 320px, 180px'
                    className='object-contain'
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div> */}
    </section>
  );
};

export default ProjectHero;
