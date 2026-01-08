import Image from 'next/image';
import { BlogI } from '../core/blogs';
import { ImArrowUpRight2 } from 'react-icons/im';

const BlogItem = ({ blog }: { blog: BlogI }) => {
  const { title, image, link, date } = blog;
  return (
    <div className='flex flex-col-reverse lg:flex-row relative lg:items-center gap-5 group font-sans hover:bg-white/4 border border-none hover:border-text-slate-100 px-6 py-4 rounded-md'>
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
        <h1 className='text-slate-400 text-sm pb-2'>{date}</h1>
        <div className='pb-2 flex items-center gap-3'>
          <h1 className='group-hover:text-accent'>{title}</h1>
          <ImArrowUpRight2
            size={10}
            className='group-hover:text-accent group-hover:-translate-y-1 duration-200 ease-linear transition-all'
          />
        </div>
      </article>
    </div>
  );
};

export default BlogItem;
