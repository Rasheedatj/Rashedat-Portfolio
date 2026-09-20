import Image from 'next/image';
import ClientLogo from '@/components/home/ClientLogo';
import Container from '@/components/ui/Container';
import { clients } from '@/data/clients';
import Marquee from 'react-fast-marquee';

const TrustedBySection = () => {
  return (
    <section aria-labelledby='trusted-by-heading'>
      <Container width='w-[min(87.5rem,)100%] md:w-[min(87.5rem,100%-2rem)]'>
        <div className="flex flex-col gap-6 bg-[url('/client-bg-mobile.avif')] md:bg-[url('/client-bg.avif')] bg-size-[100%_100%] bg-no-repeat  py-9 md:flex-row md:items-center md:gap-0 md:px-12 md:py-12">
          <div className='relative w-fit md:w-1/4 pl-8'>
            <h2
              id='trusted-by-heading'
              className='max-w-52 font-display text-base leading-tight font-semibold text-white md:text-lg'
            >
              Trusted By Amazing Clients
            </h2>
            <Image
              src='/double-yellow-stroke.svg'
              alt=''
              width={178}
              height={17}
              aria-hidden='true'
              className='mt-2 h-auto w-32 max-w-none md:w-40'
            />
          </div>

          <Marquee className='flex items-center '>
            {clients.map((client) => (
              <ClientLogo key={client.name} client={client} />
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
};

export default TrustedBySection;
