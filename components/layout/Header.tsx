'use client';

import { useGSAP } from '@gsap/react';
import { useLayoutEffect, useRef } from 'react';
import Logo from '@/components/layout/Logo';
import MobileMenu from '@/components/layout/MobileMenu';
import NavLinks from '@/components/layout/NavLinks';
import ButtonLink from '@/components/ui/ButtonLink';
import Container from '@/components/ui/Container';
import { contactHref, emailHref } from '@/data/site';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  // Publishes the header's height for the spacer in the root layout, which has
  // to live inside the smooth-scroll content rather than next to the header.
  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () =>
      document.documentElement.style.setProperty(
        '--header-height',
        `${header.offsetHeight}px`,
      );
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(header);
    return () => resizeObserver.disconnect();
  }, []);

  useGSAP(
    () => {
      const header = headerRef.current;
      if (!header) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const reveal = gsap
          .from(header, {
            yPercent: -100,
            duration: 0.4,
            ease: 'power2.out',
            paused: true,
          })
          .progress(1);

        ScrollTrigger.create({
          start: 'top top',
          onUpdate: (self) => {
            const nearTop = self.scroll() < header.offsetHeight;
            if (nearTop || self.direction === -1) {
              reveal.play();
            } else {
              reveal.reverse();
            }
          },
        });
      });
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-40 bg-background/90 py-5 backdrop-blur-sm bg-[url('/paper-lines-tile.png')] "
    >
      <Container className='flex items-center justify-between'>
        <Logo priority />
        <div className='hidden md:block'>
          <NavLinks label='Primary' showActiveIndicator />
        </div>
        <div className='flex items-center'>
          <div className='hidden md:block'>
            <ButtonLink href={emailHref} taped>
              Let’s Talk
            </ButtonLink>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
