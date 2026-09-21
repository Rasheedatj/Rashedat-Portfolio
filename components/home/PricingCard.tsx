import Image from 'next/image';
import ButtonLink from '@/components/ui/ButtonLink';
import type { PricingPlan, PricingPlanTone } from '@/types/home';

type PricingCardProps = {
  plan: PricingPlan;
  index: number;
};

const tones: Record<PricingPlanTone, string> = {
  espresso: 'bg-[#2a2417]',
  slate: 'bg-[#535966]',
  graphite: 'bg-[#636364]',
};

const PricingCard = ({ plan, index }: PricingCardProps) => {
  const titleId = `${plan.id}-title`;

  return (
    <li
      aria-labelledby={titleId}
      className={`relative flex px-9 py-9 md:p-9 w-full gap-9 flex-col rounded-[10px] border-2 border-saffron/30 text-white shadow-[0_10px_30px_-10px_rgba(51,32,26,0.35)] ${tones[plan.tone]}`}
    >
      <section className='space-y-6'>
        {plan.tag && (
          <Image
            src={plan.tag.src}
            alt={plan.tag.alt}
            width={420}
            height={253}
            className='pointer-events-none absolute -top-7 -right-2.5 h-auto w-47.5 max-w-none lg:-right-2'
          />
        )}

        <div className='space-y-6'>
          <p className='relative isolate w-fit font-display font-medium text-2xl leading-8'>
            <Image
              src='/multiple-yellow-stroke.svg'
              alt=''
              width={43}
              height={18}
              aria-hidden='true'
              className='absolute top-1/2 -left-1.5 -z-10 w-10.75 max-w-none -translate-y-1/2'
            />
            {String(index + 1).padStart(2, '0')}
          </p>

          <div className='space-y-3'>
            <h3
              id={titleId}
              className='max-w-52 font-display text-4xl leading-9 font-medium'
            >
              {plan.name}
            </h3>

            <p className=' text-[13px] leading-5.25 font-bold'>
              {plan.description}
            </p>
          </div>
        </div>

        <hr className='w-46.25 border-white/15' />

        <div className='space-y-3'>
          <p className='font-display text-4xl leading-10 font-medium'>
            {plan.price}
          </p>
          <p className='text-[13px] leading-4 font-bold'>{plan.duration}</p>
        </div>

        <ul className='space-y-5'>
          {plan.features.map((feature) => (
            <li key={feature} className='flex items-center gap-2.5  font-bold'>
              <Image
                src='/check.svg'
                alt=''
                width={20}
                height={13}
                aria-hidden='true'
                className='shrink-0'
              />
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <div className='self-start mt-auto'>
        <ButtonLink href={plan.cta.href} variant='light' taped>
          {plan.cta.label}
        </ButtonLink>
      </div>
    </li>
  );
};

export default PricingCard;
