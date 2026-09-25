'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import HeroActions from '@/components/home/HeroActions';
import HeroPortrait from '@/components/home/HeroPortrait';
import Container from '@/components/ui/Container';
import { gsap, SplitText } from '@/lib/gsap';

const OVERLAP = '-=0.5';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root) return;

      const portraitMask = root.querySelector<HTMLElement>(
        '[data-hero="portrait-mask"]',
      );
      const actionsMask = root.querySelector<HTMLElement>(
        '[data-hero="actions-mask"]',
      );
      const heading = root.querySelector<HTMLElement>('[data-hero="heading"]');
      const paragraph = root.querySelector<HTMLElement>(
        '[data-hero="paragraph"]',
      );

      if (!portraitMask || !actionsMask || !heading || !paragraph) return;

      const masks = [portraitMask, actionsMask];

      // Each mask only needs to clip while ITS OWN tween is running - clear
      // it the instant that tween completes, not when the whole sequence
      // (heading/paragraph included) finishes, otherwise an early-finishing
      // mask (the portrait) stays clipped while later steps still play.
      const clearMask = (mask: HTMLElement) =>
        mask.classList.remove('overflow-hidden');
      const revealOverflow = () => masks.forEach(clearMask);

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: '(prefers-reduced-motion: reduce)',
          fullMotion: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          const { reduceMotion } = context.conditions as {
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            revealOverflow();
            return;
          }

          let headingTween!: gsap.core.Tween;
          SplitText.create(heading, {
            type: 'lines',
            mask: 'lines',
            onSplit(self) {
              headingTween = gsap.from(self.lines, {
                duration: 0.8,
                yPercent: 100,
                opacity: 0,
                stagger: 0.1,
                ease: 'expo.out',
              });
              return headingTween;
            },
          });

          let paragraphTween!: gsap.core.Tween;
          SplitText.create(paragraph, {
            type: 'lines',
            mask: 'lines',
            onSplit(self) {
              paragraphTween = gsap.from(self.lines, {
                duration: 0.8,
                yPercent: 100,
                opacity: 0,
                stagger: 0.1,
                ease: 'expo.out',
              });
              return paragraphTween;
            },
          });

          gsap
            .timeline({ defaults: { duration: 0.9, ease: 'power3.out' } })
            .from(portraitMask.firstElementChild, {
              yPercent: 10,
              opacity: 0,
              onComplete: () => clearMask(portraitMask),
            })
            .add(headingTween, OVERLAP)
            .add(paragraphTween, OVERLAP)
            .from(
              actionsMask.firstElementChild,
              {
                yPercent: 10,
                opacity: 0,
                onComplete: () => clearMask(actionsMask),
              },
              OVERLAP,
            );
        },
      );
    },
    { scope: sectionRef },
  );
  return (
    <section ref={sectionRef} className='pt-6'>
      <Container className='grid gap-15 lg:grid-cols-[30rem_1fr] lg:items-center'>
        <div data-hero='portrait-mask' className='order-2 md:order-1 '>
          <HeroPortrait />
        </div>
        <div className='order-1 space-y-6 md:order-2 md:space-y-12'>
          <article className='space-y-3 md:space-y-6'>
            <h1
              data-hero='heading'
              className='max-w-175 font-display text-2xl leading-[1.2] text-espresso md:text-[56px] md:leading-16.25'
            >
              I Build Mobile Products That Look Good And Work Even Better.
            </h1>
            <p
              data-hero='paragraph'
              className='max-w-132 text-[13px] leading-[1.9] font-semibold text-espresso md:text-lg'
            >
              Mobile Software Engineer With 4 Years Of Experience Building And
              Shipping Production-Ready Applications With React Native, Expo And
              TypeScript.
            </p>
          </article>

          <div data-hero='actions-mask' className='overflow-hidden'>
            <HeroActions />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
