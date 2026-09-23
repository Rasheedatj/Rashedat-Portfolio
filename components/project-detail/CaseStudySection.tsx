import Image from 'next/image';
import type { CaseStudySection as CaseStudySectionData } from '@/types/project';

type CaseStudySectionProps = {
  section: CaseStudySectionData;
};

const CaseStudySection = ({ section }: CaseStudySectionProps) => {
  return (
    <div className='flex flex-col gap-4 md:flex-row md:gap-16 items-start'>
      <p className='relative w-fit shrink-0 font-bold text-[15px] text-[#461010D9] uppercase md:w-32 md:text-[21px]'>
        {section.label}
        <Image
          src='/double-yellow-stroke.svg'
          alt=''
          width={100}
          height={17}
          aria-hidden='true'
          className='pointer-events-none absolute top-full left-0 mt-0.5 w-14 max-w-none'
        />
      </p>
      <div className=' space-y-3 lg:space-y-10'>
        <h2 className='font-display text-[21px] leading-tight font-medium text-espresso md:text-4xl md:leading-tight'>
          {section.heading}
        </h2>
        <p className='text-sm leading-relaxed text-espresso/70 md:text-[19px] font-semibold md:leading-[1.9]'>
          {section.body}
        </p>
      </div>
    </div>
  );
};

export default CaseStudySection;
