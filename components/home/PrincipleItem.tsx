import type { Principle } from '@/types/home';

type PrincipleItemProps = {
  principle: Principle;
  index: number;
};

const PrincipleItem = ({ principle, index }: PrincipleItemProps) => {
  return (
    <li>
      <span>{String(index + 1).padStart(2, '0')}</span>
      <h3>{principle.title}</h3>
    </li>
  );
};

export default PrincipleItem;
