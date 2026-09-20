import Logo from '@/components/layout/Logo';
import MobileMenu from '@/components/layout/MobileMenu';
import NavLinks from '@/components/layout/NavLinks';
import ButtonLink from '@/components/ui/ButtonLink';
import Container from '@/components/ui/Container';
import { contactHref } from '@/data/site';

const Header = () => {
  return (
    <header className='relative z-20 py-8'>
      <Container className='flex items-center justify-between'>
        <Logo priority />
        <div className='hidden md:block'>
          <NavLinks label='Primary' showActiveIndicator />
        </div>
        <div className='flex items-center'>
          <div className='hidden md:block'>
            <ButtonLink href={contactHref} taped>
              Let’s Talk
            </ButtonLink>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
