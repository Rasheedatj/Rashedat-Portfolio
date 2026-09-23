import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import HeroSection from '@/components/home/HeroSection';
import HowIWorkSection from '@/components/home/HowIWorkSection';
import PricingSection from '@/components/home/PricingSection';
import ProofSection from '@/components/home/ProofSection';
import TechStackSection from '@/components/home/TechStackSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TrustedBySection from '@/components/home/TrustedBySection';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({ path: '/' });

const Page = () => {
  return (
    <section className='space-y-16 md:space-y-27 '>
      <HeroSection />
      <TrustedBySection />
      <FeaturedProjectsSection />
      <ProofSection />
      <PricingSection />
      <TechStackSection />
      <HowIWorkSection />
      <TestimonialsSection />
    </section>
  );
};

export default Page;
