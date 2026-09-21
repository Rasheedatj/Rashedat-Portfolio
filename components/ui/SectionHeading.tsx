import Image from 'next/image';

type SectionHeadingProps = {
  id?: string;
  title: string;
  description?: string;
  underline?: boolean;
  mobileUnderline?: boolean;
  descriptionClassName?: string;
  titleClassName?: string;
  gapClassName?: string;
};

const SectionHeading = ({
  id,
  title,
  description,
  underline = false,
  mobileUnderline = false,
  descriptionClassName = 'max-w-64 lg:max-w-84',
  titleClassName = 'max-w-[7.5em]',
  gapClassName = 'space-y-9',
}: SectionHeadingProps) => {
  return (
    <div className={gapClassName}>
      <div className='relative w-fit'>
        <h2
          id={id}
          className={`font-display text-[28px] leading-7.5 font-medium text-espresso lg:text-5xl lg:leading-10.5 ${titleClassName}`}
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
            className={`pointer-events-none absolute top-full -left-0.75 mt-1.5 h-auto max-w-none lg:w-44.5 ${mobileUnderline ? 'block w-22.5' : 'hidden lg:block'}`}
          />
        )}
      </div>
      {description && (
        <p
          className={`text-[12.5px] leading-[1.8] font-bold text-espresso lg:text-base lg:leading-[1.9] ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
