import Image from 'next/image';
import ProofStat from '@/components/home/ProofStat';
import Container from '@/components/ui/Container';
import { proofStats } from '@/data/proof-stats';

const ProofSection = () => {
  return (
    <section aria-labelledby='proof-heading'>
      <Container width='w-full md:w-[min(87.5rem,100%-2rem)]'>
        <div className="flex flex-col justify-center bg-[url('/proof-mobile-bg.avif')] bg-size-[100%_100%] bg-no-repeat px-6 pb-24 pt-28 md:bg-[url('/proof-bg.avif')] lg:aspect-2744/706 lg:flex-row lg:items-center lg:justify-start lg:px-12 lg:pb-0 lg:pt-0 xl:pl-31.5">
          <div className='lg:w-92 lg:shrink-0'>
            <div className='relative w-fit'>
              <h2
                id='proof-heading'
                className='max-w-[10.5em] font-display text-[28px] leading-7 font-medium text-white lg:max-w-[7em] lg:text-5xl lg:leading-12'
              >
                Proof Beyond The Code.
              </h2>
              <Image
                src='/single-yellow-stroke.svg'
                alt=''
                width={178}
                height={17}
                aria-hidden='true'
                className='pointer-events-none absolute top-full left-0 mt-1 h-auto w-15 max-w-none lg:mt-2.5 lg:w-44.5'
              />
            </div>
            <p className='mt-7 max-w-68 text-[13px] leading-[1.9] font-bold text-saffron lg:mt-9.5 lg:max-w-64 lg:text-base lg:leading-6'>
              A Few Things I Am Proud Of, On And Off The Screen
            </p>
          </div>

          <ul
            aria-label='Highlights'
            className='mt-10 flex flex-wrap justify-center gap-y-5 lg:mt-0 lg:grid lg:min-w-0 lg:max-w-198 lg:flex-1 lg:grid-cols-4 lg:gap-y-0'
          >
            {proofStats.map((stat) => (
              <ProofStat key={stat.label} stat={stat} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ProofSection;
