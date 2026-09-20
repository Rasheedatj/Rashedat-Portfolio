'use client';

import WorkFilterTabs from '@/components/work-gallery/WorkFilterTabs';
import WorkGalleryHeader from '@/components/work-gallery/WorkGalleryHeader';
import WorkGalleryList from '@/components/work-gallery/WorkGalleryList';

const WorkGallery = () => {
  return (
    <section>
      <WorkGalleryHeader>
        <WorkFilterTabs />
      </WorkGalleryHeader>
      <WorkGalleryList />
    </section>
  );
};

export default WorkGallery;
