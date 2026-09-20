import Image from 'next/image';

const HeroPortrait = () => {
  return (
    <div className='relative mx-auto w-full max-w-120 rounded-[10px] bg-white pt-[5%] pr-[5.5%] pb-[13.5%] pl-[5.5%] shadow-[0_18px_40px_-20px_rgba(51,32,26,0.45)]'>
      <div className='relative aspect-438/530 overflow-hidden rounded-xs'>
        <Image
          src='/my-picture.avif'
          alt='Portrait of Jinadu Rashedat'
          fill
          sizes='(min-width: 768px) 30rem, 90vw'
          className='object-cover'
          priority
        />
      </div>
      <Image
        src='/user-picture-tape.svg'
        alt=''
        width={182}
        height={118}
        aria-hidden='true'
        className='pointer-events-none absolute -top-[9%] left-1/2 w-[34%] max-w-none -translate-x-[58%]'
      />
    </div>
  );
};

export default HeroPortrait;
