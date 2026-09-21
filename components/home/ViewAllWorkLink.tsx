import Image from 'next/image';
import Link from 'next/link';

const ViewAllWorkLink = () => {
  return (
    <div className='flex justify-center'>
      <Link
        href='/work-gallery'
        className='inline-flex items-center gap-2.5 font-display text-lg font-medium text-espresso lg:gap-3 lg:text-[45px]'
      >
        <span className='relative'>
          View All Work
          <Image
            src='single-downward-yellow-stroke.svg'
            alt=''
            width={265}
            height={17}
            aria-hidden='true'
            className='pointer-events-none absolute top-full left-0 -mt-1 h-2  lg:-mt-2.5 lg:h-3.5'
          />
          <Image
            src='/yellow-tape.svg'
            alt=''
            width={47}
            height={60}
            aria-hidden='true'
            className='pointer-events-none absolute -top-2 -left-3.5 h-auto w-5 max-w-none lg:-top-7 lg:-left-11 lg:w-17.5'
          />
          <Image
            src='/yellow-tape.svg'
            alt=''
            width={47}
            height={60}
            aria-hidden='true'
            className='pointer-events-none absolute -right-1 -bottom-3 h-auto w-5 max-w-none lg:right-6.5 lg:-bottom-7 lg:w-17.5'
          />
        </span>
        <Image
          src='/arrow-next.svg'
          alt=''
          width={57}
          height={16}
          aria-hidden='true'
          className='w-5.75 max-w-none lg:w-13.5'
        />
      </Link>
    </div>
  );
};

export default ViewAllWorkLink;
