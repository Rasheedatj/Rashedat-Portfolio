import Image from 'next/image';
import { ProjectI } from '../core/projects';
import Skill from './skill';
import { ImArrowUpRight2 } from 'react-icons/im';

const ProjectItem = ({ project }: { project: ProjectI }) => {
  const { title, image, description, link, tools } = project;
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-10 relative font-sans group hover:bg-white/4 border border-none hover:border-text-slate-100 px-6 py-4 rounded-md'>
      <a href={link} className='absolute inset-0'></a>
      <div className='w-1/2 md:w-[40%] h-25 relative'>
        <Image
          src={image}
          alt={title}
          fill
          className='aspect-square rounded border-slate-200/30 border-2'
        />
      </div>

      <article className='w-full'>
        <div className='pb-2 flex items-center gap-3'>
          <h1 className='group-hover:text-accent'>{title}</h1>
          <ImArrowUpRight2
            size={10}
            className='group-hover:text-accent group-hover:-translate-y-1 duration-200 ease-linear transition-all'
          />
        </div>
        {description.map((item) => (
          <p
            key={item}
            className='text-slate-400 first-of-type:pb-4 leading-6 text-sm'
          >
            {item}
          </p>
        ))}
        <Skill skills={tools} />
      </article>
    </div>
  );
};

export default ProjectItem;
