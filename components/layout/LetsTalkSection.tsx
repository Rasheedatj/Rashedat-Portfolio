import Image from 'next/image';
import ButtonLink from '@/components/ui/ButtonLink';
import Container from '@/components/ui/Container';
import { emailHref } from '@/data/site';

const LetsTalkSection = () => {
  return (
    <section
      id='contact'
      aria-labelledby='lets-talk-heading'
      className="bg-cocoa bg-[url('/building-something-bg.avif')] bg-cover bg-center pt-23.25 pb-22 text-center text-white"
    >
      <Container className='flex flex-col items-center gap-9'>
        <div className='space-y-6'>
          <h2
            id='lets-talk-heading'
            className='font-display text-4xl leading-normal font-medium md:text-5xl'
          >
            Building Something ?
            <br />
            <span className='relative inline-block'>
              Let’s Talk.
              <Image
                src='/single-yellow-stroke.svg'
                alt=''
                width={178}
                height={17}
                aria-hidden='true'
                className='absolute top-full left-1/2 -mt-1 max-w-none -translate-x-1/2'
              />
            </span>
          </h2>
          <p className='max-w-140 text-lg leading-8.5 font-bold'>
            Whether You Need A Mobile Product, A Marketing Website, Or Extra
            Engineering Support. Tell Me What You Are Working On.
          </p>
        </div>

        <ButtonLink href={emailHref} variant='light' taped>
          Discuss Your Project
        </ButtonLink>
      </Container>
    </section>
  );
};

export default LetsTalkSection;
