import Image from 'next/image';
import type { Testimonial } from '@/types/home';

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

const tones: Record<string, string> = {
  periwinkle: 'bg-periwinkle text-ink',
  honey: 'bg-honey text-ink',
  flamingo: 'bg-flamingo text-ink',
  maroon: 'bg-maroon text-lemon',
  blue: 'bg-[#141B34] text-lemon',
};

const tilts = [
  '-rotate-2 lg:-rotate-1',
  '-rotate-2 lg:rotate-2',
  '-rotate-2 lg:-rotate-3',
];

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <li
      className={`relative shrink-0 snap-start flex min-h-40 w-72 flex-col p-4.5 pt-5 shadow-[0_5px_8px_rgba(35,30,21,0.18)] lg:max-h-50.5 lg:w-80 lg:p-5 lg:pt-6 ${tones[testimonial.tone]} ${tilts[index % tilts.length]}`}
    >
      <Image
        src='/testimonial-yellow-tape.svg'
        alt=''
        width={68}
        height={63}
        aria-hidden='true'
        className='pointer-events-none absolute -top-6 -left-6 max-w-none'
      />
      <Image
        src='/testimonail-pink-tape.svg'
        alt=''
        width={70}
        height={60}
        aria-hidden='true'
        className='pointer-events-none absolute -top-7 -right-3 max-w-none'
      />

      <blockquote className='text-[11px] leading-4.5 font-semibold lg:text-sm lg:leading-5.5'>
        {testimonial.quote}
      </blockquote>

      <figcaption className='mt-3.5 flex items-center gap-2 lg:mt-4 lg:gap-2.5'>
        <Image
          src={testimonial.avatar}
          alt=''
          width={35}
          height={35}
          aria-hidden='true'
          className='size-7 rounded-full lg:size-8.75'
        />
        <span className='text-xs font-semibold lg:text-[13px]'>
          {testimonial.author}
        </span>
      </figcaption>
    </li>
  );
};

export default TestimonialCard;
