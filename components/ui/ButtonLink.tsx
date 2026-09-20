import Link from 'next/link';
import Tape from '@/components/ui/Tape';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  taped?: boolean;
};

const variants = {
  dark: 'bg-maroon text-butter',
  light: 'bg-lemon text-maroon font-medium',
};

const ButtonLink = ({
  href,
  children,
  variant = 'dark',
  taped = false,
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`relative inline-flex text-lg h-11 items-center rounded-lg px-5.5 font-display ${variants[variant]}`}
    >
      {children}
      {taped && <Tape />}
    </Link>
  );
};

export default ButtonLink;
