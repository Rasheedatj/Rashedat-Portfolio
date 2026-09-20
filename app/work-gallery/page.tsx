import WorkGallery from '@/components/work-gallery/WorkGallery';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Work Gallery',
  description:
    'A gallery of mobile apps and websites I have helped design, build and ship.',
  path: '/work-gallery',
});

const Page = () => {
  return <WorkGallery />;
};

export default Page;
