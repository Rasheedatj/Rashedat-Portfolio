import Image from 'next/image';

type SectionHeadingProps = {
  id?: string;
  title: string;
  description?: string;
  underline?: boolean;
};

const SectionHeading = ({
  id,
  title,
  description,
  underline = false,
}: SectionHeadingProps) => {
  return (
    <div className='space-y-9'>
      <div className='relative w-fit'>
        <h2
          id={id}
          className='max-w-[7em] font-display text-[28px] leading-7.5 font-medium text-espresso lg:text-5xl lg:leading-10.5'
        >
          {title}
        </h2>
        {underline && (
          <Image
            src='/single-yellow-stroke.svg'
            alt=''
            width={178}
            height={17}
            aria-hidden='true'
            className='pointer-events-none absolute top-full -left-0.75 mt-1.5 hidden max-w-none lg:block'
          />
        )}
      </div>
      {description && (
        <p className='max-w-64 text-[12.5px] leading-[1.8] font-bold text-espresso lg:max-w-84 lg:text-base lg:leading-[1.9]'>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
