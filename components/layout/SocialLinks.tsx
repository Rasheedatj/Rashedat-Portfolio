import SocialIcon from '@/components/ui/SocialIcon';
import { socialLinks } from '@/data/site';

type SocialLinksProps = {
  color?: string;
};

const SocialLinks = ({ color }: SocialLinksProps) => {
  return (
    <ul aria-label='Social links' className='flex items-center gap-6'>
      {socialLinks.map((link) => {
        const external = link.href.startsWith('http');

        return (
          <li key={link.platform}>
            <a
              href={link.href}
              aria-label={link.label}
              {...(external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              <SocialIcon platform={link.platform} color={color} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
