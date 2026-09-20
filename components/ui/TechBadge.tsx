import type { TechItem } from '@/types/home';

type TechBadgeProps = {
  tech: TechItem;
};

const TechBadge = ({ tech }: TechBadgeProps) => {
  return <li>{tech.name}</li>;
};

export default TechBadge;
