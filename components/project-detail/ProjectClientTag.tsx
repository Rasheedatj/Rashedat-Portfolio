import Image from 'next/image';

type ProjectClientTagProps = {
  client: string;
  year: string;
};

const ProjectClientTag = ({ client, year }: ProjectClientTagProps) => {
  return (
    <div className='relative w-fit rotate-3 rounded-lg bg-maroon px-4 py-3 text-honey shadow-2xl md:rounded-xl md:px-6 md:py-4'>
      <Image
        src='/yellow-tape.svg'
        alt=''
        width={47}
        height={60}
        aria-hidden='true'
        className='pointer-events-none absolute -top-4 -left-3 w-8 max-w-none md:-top-5 md:-left-4 md:w-10'
      />
      <div className='flex items-start gap-4 md:gap-6'>
        <div className='space-y-0.5'>
          <p className='text-[10px] font-semibold tracking-wide text-honey/70 md:text-xs'>
            Client
          </p>
          <p className='font-display text-sm font-medium md:text-lg'>
            {client}
          </p>
        </div>
        <div className='space-y-0.5'>
          <p className='text-[10px] font-semibold tracking-wide text-honey/70 md:text-xs'>
            Year
          </p>
          <p className='font-display text-sm font-medium md:text-lg'>
            {year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectClientTag;
