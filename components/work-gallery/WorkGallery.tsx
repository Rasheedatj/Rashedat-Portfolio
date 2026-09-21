'use client';

import { useState } from 'react';
import WorkFilterTabs from '@/components/work-gallery/WorkFilterTabs';
import WorkGalleryHeader from '@/components/work-gallery/WorkGalleryHeader';
import WorkGalleryList from '@/components/work-gallery/WorkGalleryList';
import Container from '@/components/ui/Container';
import { getProjectsByFilter } from '@/lib/projects';
import type { WorkFilter } from '@/types/project';

const WorkGallery = () => {
  const [filter, setFilter] = useState<WorkFilter>('all');

  return (
    <section aria-labelledby='work-gallery-heading' className='pb-27'>
      <Container className='space-y-20 md:space-y-45'>
        <WorkGalleryHeader>
          <WorkFilterTabs value={filter} onChange={setFilter} />
        </WorkGalleryHeader>

        <WorkGalleryList projects={getProjectsByFilter(filter)} />
      </Container>
    </section>
  );
};

export default WorkGallery;
