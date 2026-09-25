import Image from 'next/image';
import TechBadge from '@/components/ui/TechBadge';
import type { TechStackGroup as TechStackGroupData } from '@/types/home';

type TechStackGroupProps = {
  group: TechStackGroupData;
  index: number;
};

const TechStackGroup = ({ group, index }: TechStackGroupProps) => {
  const titleId = `${group.id}-title`;

  return (
    <li
      aria-labelledby={titleId}
      className='relative overflow-hidden rounded-md lg:rounded-[10px] border-[3px] border-[#b4a291]/80 bg-[#fcf9e5] p-5 shadow-[0_4px_12px_rgba(70,50,20,0.15)] lg:flex lg:min-h-43 lg:items-center lg:p-9 lg:gap-12'
    >
      <Image
        src='/skills-bg.avif'
        alt=''
        fill
        sizes='(min-width: 1024px) 1230px, 100vw'
        aria-hidden='true'
        className='pointer-events-none object-cover opacity-[0.02]'
      />

      <div className='relative lg:w-64.75 lg:shrink-0 space-y-3 md:space-y-6'>
        <p className='relative isolate w-fit font-display text-[13px] leading-6 font-medium text-maroon lg:text-2xl lg:leading-8'>
          <Image
            src='/multiple-yellow-stroke.svg'
            alt=''
            width={43}
            height={18}
            aria-hidden='true'
            className='absolute top-1/2 -left-1 -z-10 w-6.5 max-w-none -translate-y-1/2 lg:-left-1.5 lg:w-10.75'
          />
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3
          id={titleId}
          className='font-display text-lg leading-none font-medium text-maroon lg:text-4xl'
        >
          {group.title}
        </h3>
      </div>

      <ul className='relative mt-5.5 flex flex-wrap items-center gap-x-6.5 gap-y-6.75 lg:mt-0 lg:gap-x-12 lg:gap-y-6'>
        {group.items.map((tech) => (
          <TechBadge key={tech.id} tech={tech} />
        ))}
      </ul>
    </li>
  );
};

export default TechStackGroup;
