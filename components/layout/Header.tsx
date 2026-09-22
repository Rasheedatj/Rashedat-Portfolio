'use client';

import { useGSAP } from '@gsap/react';
import { useLayoutEffect, useRef, useState } from 'react';
import Logo from '@/components/layout/Logo';
import MobileMenu from '@/components/layout/MobileMenu';
import NavLinks from '@/components/layout/NavLinks';
import ButtonLink from '@/components/ui/ButtonLink';
import Container from '@/components/ui/Container';
import { contactHref } from '@/data/site';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => setSpacerHeight(header.offsetHeight);
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
    <>
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
              <ButtonLink href={contactHref} taped>
                Let’s Talk
              </ButtonLink>
            </div>
            <MobileMenu />
          </div>
        </Container>
      </header>
      <div
        style={{ height: spacerHeight }}
        aria-hidden='true'
        className='md:mb-10'
      />
    </>
  );
};

export default Header;
