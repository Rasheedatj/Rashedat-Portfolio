import TechStackGroup from '@/components/home/TechStackGroup';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { techStackGroups } from '@/data/tech-stack';

const TechStackSection = () => {
  return (
    <section aria-labelledby='tech-stack-heading'>
      <Container className='space-y-6 md:space-y-12'>
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

        <ul className='space-y-2 lg:space-y-6'>
          {techStackGroups.map((group, index) => (
            <TechStackGroup key={group.id} group={group} index={index} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TechStackSection;
