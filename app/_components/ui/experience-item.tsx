import { ExperienceI } from '../core/experience';
import Skill from './skill';

const ExperienceItem = ({ experience }: { experience: ExperienceI }) => {
  const { title, responsibilities, tools, company } = experience;
  return (
    <div className='group hover:bg-white/4 border border-none hover:border-text-slate-100 px-6 py-4 rounded-md'>
      <h1 className='leading-8 pb-1 group-hover:text-accent'>
        {title} <span className='text-xs px-1'> &bull;</span> {company}
      </h1>
      <ul className='list-disc pl-4 space-y-3'>
        {responsibilities.map((item) => (
          <li key={item} className='text-slate-400'>
            {item}
          </li>
        ))}
      </ul>

      <Skill skills={tools} />
    </div>
  );
};

export default ExperienceItem;
