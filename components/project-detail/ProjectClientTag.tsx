import Image from 'next/image';

type ProjectClientTagProps = {
  client: string;
  year: string;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
};

const ProjectClientTag = ({
  client,
  year,
  className = '',
  ref,
}: ProjectClientTagProps) => {
  return (
    <div
      ref={ref}
      className={`@container relative aspect-461/410 w-26 shrink-0 md:w-54 ${className}`}
    >
      <Image
        src='/client-year-bg.png'
        alt=''
        aria-hidden='true'
        fill
        sizes='(min-width: 768px) 216px, 104px'
        className='pointer-events-none object-contain'
      />
      {/* Rotated to follow the tilt of the sheet in the image. */}
      <dl className='absolute inset-0 -rotate-5 text-lemon'>
        <div className='absolute top-[37%] left-[40%] -translate-x-1/2 text-center space-y-1'>
          <dt className='leading-[1.4] text-[8px] lg:text-[17px] text-lemon font-medium font-display'>
            Client
          </dt>
          <dd className='text-[10px] lg:text-[22px] font-bold text-white'>
            {client}
          </dd>
        </div>
        <div className='absolute top-[37%] left-[76%] -translate-x-1/2 text-center space-y-1'>
          <dt className='leading-[1.4] text-[8px] lg:text-[17px] text-lemon font-medium font-display'>
            Year
          </dt>
          <dd className='text-[10px] lg:text-[22px] font-bold  text-white'>
            {year}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default ProjectClientTag;
