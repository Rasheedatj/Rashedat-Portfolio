import PricingCard from '@/components/home/PricingCard';
import PricingHelpCallout from '@/components/home/PricingHelpCallout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { pricingPlans } from '@/data/pricing-plans';

const PricingSection = () => {
  return (
    <section aria-labelledby='pricing-heading' id='choose-how-we-work'>
      <Container className='space-y-10'>
        <SectionHeading
          id='pricing-heading'
          title='Choose How We Can Work'
          description='Three Ways To Bring Me Into Your Product'
          descriptionClassName='max-w-none'
          underline
          mobileUnderline
        />

        <ul className='grid gap-12.5 lg:grid-cols-3 lg:gap-13'>
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </ul>

        <PricingHelpCallout />
      </Container>
    </section>
  );
};

export default PricingSection;
