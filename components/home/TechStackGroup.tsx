import type { TechStackGroup as TechStackGroupData } from '@/types/home';

type TechStackGroupProps = {
  group: TechStackGroupData;
};

const TechStackGroup = ({ group }: TechStackGroupProps) => {
  return (
    <div>
      <h3>{group.title}</h3>
    </div>
  );
};

export default TechStackGroup;
