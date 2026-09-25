import type { ProjectImage } from '@/types/project';

type ProjectScreensCarouselProps = {
  screens: ProjectImage[];
};

const ProjectScreensCarousel = ({ screens }: ProjectScreensCarouselProps) => {
  return <div data-count={screens.length}></div>;
};

export default ProjectScreensCarousel;
