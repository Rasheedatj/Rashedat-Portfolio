'use client';

import Image from 'next/image';
import type { WorkFilter } from '@/types/project';

type WorkFilterTabsProps = {
  value: WorkFilter;
  onChange: (filter: WorkFilter) => void;
};

const filters: { value: WorkFilter; label: string }[] = [
  { value: 'all', label: 'All Work' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'website', label: 'Websites' },
];

const WorkFilterTabs = ({ value, onChange }: WorkFilterTabsProps) => {
  return (
    <div
      role='group'
      aria-label='Filter projects'
      className='flex w-fit items-center rounded-lg gap-2 bg-[#FEFDE1] p-0.75 shadow-[0_4px_16px_rgba(70,16,16,0.08)] lg:p-1'
    >
      {filters.map((filter) => {
        const active = filter.value === value;

        return (
          <button
            key={filter.value}
            type='button'
            aria-pressed={active}
            onClick={() => onChange(filter.value)}
            className={`relative rounded-lg px-6 py-2 text-xs font-bold whitespace-nowrap text-maroon lg:h-10 lg:text-sm ${
              active ? 'bg-[#FDF1B1]' : ''
            }`}
          >
            {filter.label}
            {active && (
              <Image
                src='/tab-yellow-stroke.svg'
                alt=''
                width={178}
                height={17}
                aria-hidden='true'
                className='pointer-events-none absolute bottom-0.5 left-1/2 h-auto w-[70%] max-w-none -translate-x-1/2 lg:bottom-1'
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default WorkFilterTabs;
