import PrincipleItem from '@/components/home/PrincipleItem';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { principles } from '@/data/principles';

const HowIWorkSection = () => {
  return (
    <section aria-labelledby='how-i-work-heading' className='pt-11 lg:pt-23'>
      <Container className='grid gap-7.5 lg:grid-cols-[minmax(12rem,1fr)_minmax(0,56.25rem)] lg:items-start lg:gap-0'>
        <SectionHeading
          id='how-i-work-heading'
          title='How I Work'
          description='A Few Principles I Bring Into Every Product I Work On'
          titleClassName='max-w-none lg:max-w-[3.5em]'
          descriptionClassName='max-w-56 lg:max-w-60 lg:leading-7.5!'
          gapClassName='space-y-7.5 lg:space-y-12'
          underline
          mobileUnderline
        />

        <ol className='space-y-3.25 lg:space-y-6'>
          {principles.map((principle, index) => (
            <PrincipleItem
              key={principle.title}
              principle={principle}
              index={index}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default HowIWorkSection;
