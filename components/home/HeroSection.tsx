import HeroActions from '@/components/home/HeroActions';
import HeroPortrait from '@/components/home/HeroPortrait';
import Container from '@/components/ui/Container';
import { hero } from '@/data/hero';

const HeroSection = () => {
  return (
    <section className='pt-6 pb-16 md:pb-24'>
      <Container className='grid gap-10 md:grid-cols-[30rem_1fr] md:items-center md:gap-14'>
        <div className='order-2 md:order-1'>
          <HeroPortrait portrait={hero.portrait} />
        </div>
        <div className='order-1 md:order-2 space-y-12'>
          <article className='space-y-6'>
            <h1 className='font-display text-[32px] leading-[1.2] text-espresso md:text-[52px] md:leading-16.25'>
              {hero.heading}
            </h1>
            <p className='max-w-132 text-base leading-[1.9] font-semibold text-espresso md:text-lg'>
              {hero.description}
            </p>
          </article>

          <HeroActions actions={hero.actions} />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
