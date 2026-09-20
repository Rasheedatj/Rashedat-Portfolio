import type { PricingPlan } from '@/types/home';

type PricingCardProps = {
  plan: PricingPlan;
};

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <article>
      <h3>{plan.name}</h3>
    </article>
  );
};

export default PricingCard;
