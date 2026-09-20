import type { ProjectLinks } from '@/types/project';

type StoreBadgesProps = {
  links: ProjectLinks;
};

const StoreBadges = ({ links }: StoreBadgesProps) => {
  return (
    <ul aria-label='Download links'>
      {links.appStore && <li></li>}
      {links.playStore && <li></li>}
    </ul>
  );
};

export default StoreBadges;
