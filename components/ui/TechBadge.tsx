import Image from 'next/image';
import type { TechItem } from '@/types/home';

type TechBadgeProps = {
  tech: TechItem;
};

const TechBadge = ({ tech }: TechBadgeProps) => {
  return (
    <li className='shrink-0'>
      <Image
        src={tech.logo}
        alt={tech.name}
        width={135}
        height={21}
        className='h-4.5 w-auto max-w-none lg:h-5.25'
      />
    </li>
  );
};

export default TechBadge;
