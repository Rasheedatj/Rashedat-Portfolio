import HeroActions from '@/components/home/HeroActions';
import HeroPortrait from '@/components/home/HeroPortrait';
import Container from '@/components/ui/Container';

const HeroSection = () => {
  return (
    <section className='pt-6 '>
      <Container className='grid gap-15 md:grid-cols-[30rem_1fr] md:items-center'>
        <div className='order-2 md:order-1'>
          <HeroPortrait />
        </div>
        <div className='order-1 md:order-2 space-y-6 md:space-y-12'>
          <article className='space-y-3 md:space-y-6'>
            <h1 className='font-display text-2xl leading-[1.2] text-espresso md:text-[56px] md:leading-16.25 max-w-175'>
              I Build Mobile Products That Look Good And Work Even Better.
            </h1>
            <p className='max-w-132 text-[13px] leading-[1.9] font-semibold text-espresso md:text-lg'>
              Mobile Engineer With 4 Years Of Experience Building And Shipping
              Production-Ready Applications With React Native, Expo And
              TypeScript.
            </p>
          </article>

          <HeroActions />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
