import Image from 'next/image';
import ButtonLink from '@/components/ui/ButtonLink';

const HeroActions = () => {
  return (
    <div className='flex flex-wrap items-center gap-6'>
      <ButtonLink href='/work-gallery'>View My Work</ButtonLink>
      <ButtonLink
        href='/Jinadu_Rashedat_Mobile_Engineer_cv.pdf'
        variant='outline'
        download
      >
        Download Resume
        <Image
          src='/download.svg'
          alt=''
          width={15}
          height={15}
          aria-hidden='true'
        />
      </ButtonLink>
    </div>
  );
};

export default HeroActions;
