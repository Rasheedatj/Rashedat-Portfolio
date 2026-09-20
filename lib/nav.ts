import type { NavItem } from '@/types/site';

export const isNavItemActive = (pathname: string, item: NavItem): boolean =>
  (item.activePaths ?? []).some((path) =>
    path === '/'
      ? pathname === '/'
      : pathname === path || pathname.startsWith(`${path}/`),
  );
