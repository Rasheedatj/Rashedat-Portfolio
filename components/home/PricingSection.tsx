'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import PricingCard from '@/components/home/PricingCard';
import PricingHelpCallout from '@/components/home/PricingHelpCallout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { pricingPlans } from '@/data/pricing-plans';
import { gsap } from '@/lib/gsap';

const PricingSection = () => {
  const listRef = useRef<HTMLUListElement>(null);

  // Cards stagger up into view together, once, as the list scrolls in.
  useGSAP(
    () => {
      const list = listRef.current;
      const cards = list?.children;
      if (!list || !cards?.length) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 1.0,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: list,
            start: 'top 85%',
            once: true,
          },
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
