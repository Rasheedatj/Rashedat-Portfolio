'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ButtonLink from '@/components/ui/ButtonLink';
import { contactHref } from '@/data/site';
import { gsap, SplitText } from '@/lib/gsap';

const OVERLAP = '-=0.4';

const PricingHelpCallout = () => {
  const rootRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const heading = headingRef.current;
      const paragraph = paragraphRef.current;
      const button = buttonRef.current;
      if (!root || !heading || !paragraph || !button) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        let headingTween!: gsap.core.Tween;
        SplitText.create(heading, {
          type: 'lines',
          mask: 'lines',
          onSplit(self) {
            headingTween = gsap.from(self.lines, {
              duration: 0.6,
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
              duration: 0.6,
              yPercent: 100,
              opacity: 0,
              stagger: 0.1,
              ease: 'expo.out',
            });
            return paragraphTween;
          },
        });

        gsap
          .timeline({
            defaults: { ease: 'power3.out' },
            scrollTrigger: {
              trigger: root,
              start: 'top 85%',
              once: true,
            },
          })
          .add(headingTween)
          .add(paragraphTween, OVERLAP)
          .from(button, { y: 40, opacity: 0, duration: 0.7 }, OVERLAP);
      });
    },
    { scope: rootRef },
  );

  return (
    <aside
      ref={rootRef}
      aria-labelledby='pricing-help-heading'
      className='flex flex-col gap-6 rounded-[10px] lg:rounded-2xl bg-butter-65 p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-12'
    >
      <div className='space-y-3'>
        <h3
          ref={headingRef}
          id='pricing-help-heading'
          className='max-w-[13em] font-display text-[21px] leading-5.5 font-medium text-maroon lg:text-4xl lg:leading-9.25'
        >
          Not Sure Which Fits Your Project ?
        </h3>
        <p
          ref={paragraphRef}
          className='text-[13px] leading-5.25 font-bold text-cocoa lg:mt-2.5 lg:max-w-138.75 lg:text-base lg:leading-6.5'
        >
          Tell Me What You Are Building, And I Will Recommend The Best Way To
          Move Forward
        </p>
      </div>
      <div ref={buttonRef} className='shrink-0 lg:pr-0.5'>
        <ButtonLink href={contactHref} taped>
          Tell Me About Your Project
        </ButtonLink>
      </div>
    </aside>
  );
};

export default PricingHelpCallout;
