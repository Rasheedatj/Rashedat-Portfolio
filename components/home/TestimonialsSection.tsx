import Image from 'next/image';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection = () => {
  return (
    <section
      id='testimonials'
      aria-labelledby='testimonials-heading'
      className='relative isolate overflow-x-clip pt-13.5 pb-20.75 lg:pt-20.75 lg:pb-5'
    >
      <div
        aria-hidden='true'
        className="absolute inset-y-0 left-1/2 -z-10 w-[min(81.5rem,100%)] -translate-x-1/2 bg-[url('/testimonial-bg.avif')] bg-cover bg-center bg-no-repeat lg:bg-size-[100%_100%]"
      />

      <div className='ps-5.5 lg:ps-[max(1.5rem,calc(50vw-593px))]'>
        <SectionHeading
          id='testimonials-heading'
          title='What People Say'
          titleClassName='max-w-none lg:max-w-[7em] lg:leading-12!'
          underline
          mobileUnderline
        />
      </div>

      <Image
        src='/testimonial-arrow.svg'
        alt=''
        width={96}
        height={86}
        aria-hidden='true'
        className='pointer-events-none absolute top-23.5 left-29 h-auto w-24 max-w-none lg:top-27.5 lg:left-[calc(50vw-53px)] lg:w-36'
      />

      <div className='mt-19.75 lg:mt-14'>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
