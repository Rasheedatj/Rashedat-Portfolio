import LetsConnectNote from '@/components/layout/LetsConnectNote';
import Logo from '@/components/layout/Logo';
import NavLinks from '@/components/layout/NavLinks';
import SocialLinks from '@/components/layout/SocialLinks';
import Container from '@/components/ui/Container';
import { siteConfig } from '@/data/site';

const Footer = () => {
  return (
    <footer className='pt-24 pb-12 md:pt-36'>
      <Container>
        <div className='flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between'>
          <article className='gap-1'>
            <h2 className='font-medium text-lg text-maroon font-display'>
              Jinadu Rashedat Ikeoluwa
            </h2>
            <p className='font-bold text-lg text-gold'>Mobile Engineer</p>
          </article>
          <NavLinks label='Footer' />
          <div className='relative'>
            <LetsConnectNote />
            <SocialLinks />
          </div>
        </div>
        <p className='mt-8 text-[13px] font-bold text-cocoa-60'>
          © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
