import Image from 'next/image';
import ButtonLink from '@/components/ui/ButtonLink';
import type { Hero } from '@/types/home';

type HeroActionsProps = {
  actions: Hero['actions'];
};

const HeroActions = ({ actions }: HeroActionsProps) => {
  return (
    <div className='flex flex-wrap items-center gap-6'>
      <ButtonLink href={actions.primary.href}>
        {actions.primary.label}
      </ButtonLink>
      <ButtonLink href={actions.resume.href} variant='outline' download>
        {actions.resume.label}
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
