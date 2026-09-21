'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import TestimonialCard from '@/components/home/TestimonialCard';
import type { Testimonial } from '@/types/home';

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

const edgePadding =
  'ps-5.5 pe-5.5 scroll-ps-5.5 lg:ps-[max(1.5rem,calc(50vw-593px))] lg:scroll-ps-[max(1.5rem,calc(50vw-593px))]';

const labelClassName =
  'font-hand text-[13px] tracking-[0.1em] whitespace-nowrap text-crimson';

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [scroll, setScroll] = useState({ canScroll: false, atStart: true, atEnd: true });

  const measure = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setScroll({
      canScroll: el.scrollWidth > el.clientWidth + 1,
      atStart: el.scrollLeft <= 1,
      atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const [first, second] = Array.from(el.children) as HTMLElement[];
    const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <div role='region' aria-roledescription='carousel' aria-label='Testimonials'>
      <ul
        ref={scrollerRef}
        onScroll={measure}
        className={`flex snap-x snap-mandatory gap-12 overflow-x-auto pt-8 pb-8 [scrollbar-width:none] lg:gap-26 [&::-webkit-scrollbar]:hidden ${edgePadding}`}
      >
        {testimonials.map((testimonial, index) => (
          <li key={testimonial.id} className='shrink-0 snap-start'>
            <TestimonialCard testimonial={testimonial} index={index} />
          </li>
        ))}
      </ul>

      {scroll.canScroll && (
        <div className='mt-9 hidden items-start justify-center gap-14 lg:flex'>
          <button
            type='button'
            onClick={() => scrollByCard(-1)}
            disabled={scroll.atStart}
            aria-label='See more testimonials on the left'
            className='flex flex-col items-end gap-3 transition-opacity disabled:opacity-40'
          >
            <Image src='/arrow-left.svg' alt='' width={100} height={28} aria-hidden='true' className='w-25 max-w-none' />
            <span className={labelClassName}>See More On The Left</span>
          </button>
          <button
            type='button'
            onClick={() => scrollByCard(1)}
            disabled={scroll.atEnd}
            aria-label='See more testimonials on the right'
            className='flex flex-col items-start gap-3 transition-opacity disabled:opacity-40'
          >
            <Image src='/arrow-left.svg' alt='' width={100} height={28} aria-hidden='true' className='w-25 max-w-none -scale-x-100' />
            <span className={labelClassName}>See More On The Right</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialsCarousel;
