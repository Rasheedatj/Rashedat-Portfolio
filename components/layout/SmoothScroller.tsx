'use client';

import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { gsap, ScrollSmoother, ScrollTrigger } from '@/lib/gsap';

const hashOffset = () =>
  parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;

const scrollToHash = (hash: string, smooth: boolean) => {
  const smoother = ScrollSmoother.get();
  const target =
    hash && document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!smoother || !target) return false;

  smoother.scrollTo(target, smooth, `top ${hashOffset()}px`);
  return true;
};

const SmoothScroller = () => {
  const pathname = usePathname();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });
    });
  });

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link = (event.target as Element).closest('a');
      if (!link?.hash) return;

      const url = new URL(link.href);
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname
      ) {
        return;
      }

      if (scrollToHash(url.hash, true)) {
        event.preventDefault();
        history.pushState(null, '', url.hash);
      }
    };

    // Capture phase, so this runs before Next's <Link> handles the click.
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (!smoother) return;

    ScrollTrigger.refresh();
    if (!scrollToHash(location.hash, false)) smoother.scrollTop(0);
  }, [pathname]);

  return null;
};

export default SmoothScroller;
