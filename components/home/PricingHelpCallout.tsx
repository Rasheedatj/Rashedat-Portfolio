import ButtonLink from '@/components/ui/ButtonLink';
import { contactHref } from '@/data/site';

const PricingHelpCallout = () => {
  return (
    <aside
      aria-labelledby='pricing-help-heading'
      className='flex flex-col gap-6 rounded-[10px] lg:rounded-2xl bg-butter-65 p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-12'
    >
      <div className='space-y-3'>
        <h3
          id='pricing-help-heading'
          className='max-w-[13em] font-display text-[21px] leading-5.5 font-medium text-maroon lg:text-4xl lg:leading-9.25'
        >
          Not Sure Which Fits Your Project ?
        </h3>
        <p className='text-[13px] leading-5.25 font-bold text-cocoa lg:mt-2.5 lg:max-w-138.75 lg:text-base lg:leading-6.5'>
          Tell Me What You Are Building, And I Will Recommend The Best Way To
          Move Forward
        </p>
      </div>
      <div className='shrink-0 lg:pr-0.5'>
        <ButtonLink href={contactHref} taped>
          Tell Me About Your Project
        </ButtonLink>
      </div>
    </aside>
  );
};

export default PricingHelpCallout;
