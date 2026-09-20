import Image from 'next/image';
import type { ProofStat as ProofStatData } from '@/types/home';

type ProofStatProps = {
  stat: ProofStatData;
};

const ProofStat = ({ stat }: ProofStatProps) => {
  return (
    <li className='flex w-28.25 flex-col items-center text-center lg:w-auto'>
      <span className='flex h-8 items-center justify-center lg:h-13.5'>
        <Image
          src={stat.icon}
          alt=''
          width={54}
          height={54}
          aria-hidden='true'
          className='h-auto w-auto max-w-none scale-55 lg:scale-100'
        />
      </span>
      <p className='mt-1.5 max-w-25 text-[10px] leading-3.25 font-bold text-white lg:mt-3.5 lg:max-w-32.5 lg:text-sm lg:leading-4.5'>
        {stat.label}
      </p>
    </li>
  );
};

export default ProofStat;
