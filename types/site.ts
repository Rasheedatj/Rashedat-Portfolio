export type NavItem = {
  label: string;
  href: string;
  /** Pathnames (and their children) on which this item shows as the current page. */
  activePaths?: string[];
};

export type SocialPlatform = 'github' | 'linkedin' | 'x' | 'email';

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};
