import TechBadge from '@/components/ui/TechBadge';
import { techItems } from '@/data/tech-stack';

type ProjectBuiltWithProps = {
  techStack: string[];
};

const ProjectBuiltWith = ({ techStack }: ProjectBuiltWithProps) => {
  const items = techStack
    .map((id) => techItems.find((item) => item.id === id))
    .filter((item): item is (typeof techItems)[number] => Boolean(item));

  if (!items.length) return null;

  return (
    <div className='flex flex-col gap-3 md:flex-row md:items-end md:gap-6'>
      <p className='text-xs font-bold text-maroon-text md:text-base w-35'>
        Built With
      </p>
      <ul className='flex items-center gap-4 md:gap-6 flex-wrap'>
        {items.map((item) => (
          <TechBadge key={item.id} tech={item} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectBuiltWith;
