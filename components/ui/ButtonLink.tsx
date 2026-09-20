import Link from 'next/link';
import Tape from '@/components/ui/Tape';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'dark' | 'light' | 'outline';
  taped?: boolean;
  download?: boolean;
};

const variants = {
  dark: 'bg-maroon text-honey',
  light: 'bg-lemon text-maroon font-medium',
  outline: 'border border-maroon text-espresso',
};

const ButtonLink = ({
  href,
  children,
  variant = 'dark',
  taped = false,
  download = false,
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      {...(download && { download: true })}
      className={`relative inline-flex h-11 items-center gap-2 rounded-2xl px-5.5 font-display text-lg ${variants[variant]}`}
    >
      {children}
      {taped && <Tape />}
    </Link>
  );
};

export default ButtonLink;
