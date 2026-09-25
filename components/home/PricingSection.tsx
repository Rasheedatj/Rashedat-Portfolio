'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import PricingCard from '@/components/home/PricingCard';
import PricingHelpCallout from '@/components/home/PricingHelpCallout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { pricingPlans } from '@/data/pricing-plans';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const PricingSection = () => {
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
          start: 'top 85%',
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
    <section aria-labelledby='pricing-heading' id='choose-how-we-work'>
      <Container className='space-y-6 md:space-y-10'>
        <SectionHeading
          id='pricing-heading'
          title='Choose How We Can Work'
          description='Three Ways To Bring Me Into Your Product'
          descriptionClassName='max-w-none'
          underline
          mobileUnderline
        />

        <ul
          ref={listRef}
          className='lg:grid space-y-6 lg:space-y-0 gap-12.5 lg:grid-cols-3 lg:gap-13'
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </ul>

        <PricingHelpCallout />
      </Container>
    </section>
  );
};

export default PricingSection;
