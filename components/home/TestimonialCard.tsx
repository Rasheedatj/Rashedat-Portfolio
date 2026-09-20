import type { Testimonial } from '@/types/home';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <figure>
      <blockquote>{testimonial.quote}</blockquote>
    </figure>
  );
};

export default TestimonialCard;
