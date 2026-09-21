import Image from 'next/image';
import type { Principle } from '@/types/home';

type PrincipleItemProps = {
  principle: Principle;
  index: number;
};

const PrincipleItem = ({ principle, index }: PrincipleItemProps) => {
  return (
    <li className='flex items-center rounded-xl bg-[#FEFAE9] p-4 shadow-[0_4px_16px_rgba(70,16,16,0.08)] lg:rounded-[20px] lg:p-7'>
      <p className='w-11.25 shrink-0 lg:w-26'>
        <span className='relative isolate block w-fit font-display text-2xl leading-none font-medium text-espresso lg:text-[48px] lg:text-maroon'>
          <Image
            src='/multiple-yellow-stroke.svg'
            alt=''
            width={43}
            height={18}
            aria-hidden='true'
            className='absolute top-1/2 left-1/2 -z-10 w-7 max-w-none -translate-x-1/2 -translate-y-1/2 lg:w-15'
          />
          {String(index + 1).padStart(2, '0')}
        </span>
      </p>
      <span
        aria-hidden='true'
        className='h-5 w-px shrink-0 bg-cocoa/25 lg:h-7.5'
      />
      <div className='ml-4 min-w-0 flex-1 lg:ml-12.75 space-y-1.5 md:space-y-3'>
        <h3 className='font-display text-base leading-tight font-medium text-maroon lg:text-[28px] lg:leading-9'>
          {principle.title}
        </h3>
        <p className='max-w-64.5 text-[13px] leading-5.25 font-semibold text-[#5c504a] lg:max-w-140 lg:text-lg lg:leading-8 lg:font-bold lg:tracking-[0.01em]'>
          {principle.description}
        </p>
      </div>
      <Image
        src={principle.icon}
        alt=''
        width={108}
        height={119}
        aria-hidden='true'
        className='ml-6 hidden h-auto w-auto max-w-none shrink-0 lg:block'
      />
    </li>
  );
};

export default PrincipleItem;
