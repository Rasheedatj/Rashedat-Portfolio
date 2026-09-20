'use client';

import type { Testimonial } from '@/types/home';

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  return <div data-count={testimonials.length}></div>;
};

export default TestimonialsCarousel;
