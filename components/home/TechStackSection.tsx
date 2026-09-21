import TechStackGroup from '@/components/home/TechStackGroup';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { techStackGroups } from '@/data/tech-stack';

const TechStackSection = () => {
  return (
    <section aria-labelledby='tech-stack-heading' className='pt-4.5 lg:pt-21'>
      <Container width='w-[min(76.875rem,100%-2rem)]'>
        <SectionHeading
          id='tech-stack-heading'
          title='What I Build With'
          description='The Tools & Technologies I Use Most To Turn Ideas Into Real Shippable Products'
          titleClassName='max-w-none'
          descriptionClassName='max-w-85 lg:max-w-90 lg:leading-8.25!'
          gapClassName='space-y-5 lg:space-y-13'
          underline
          mobileUnderline
        />

        <ul className='mt-6 space-y-3.5 lg:mt-11 lg:space-y-5'>
          {techStackGroups.map((group, index) => (
            <TechStackGroup key={group.id} group={group} index={index} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TechStackSection;
