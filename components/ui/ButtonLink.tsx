import Link from 'next/link';
import Tape from '@/components/ui/Tape';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'dark' | 'light' | 'outline';
  taped?: boolean;
  download?: boolean;
  external?: boolean;
  style?: string;
};

const variants = {
  dark: 'bg-maroon text-honey',
  light: 'bg-lemon text-maroon font-medium',
  outline: 'border-[1.53px] border-maroon text-espresso',
};

const ButtonLink = ({
  href,
  children,
  variant = 'dark',
  taped = false,
  download = false,
  external = false,
  style,
}: ButtonLinkProps) => {
  const className = `relative inline-flex h-8.25 items-center gap-2 rounded-lg md:rounded-2xl px-4 font-display text-[15px] md:h-11 md:px-5.5 md:text-lg ${variants[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={`${className} ${style}`}
      >
        {children}
        {taped && <Tape />}
      </a>
    );
  }

  return (
    <Link
      href={href}
      {...(download && { download: true })}
      className={className}
    >
      {children}
      {taped && <Tape />}
    </Link>
  );
};

export default ButtonLink;
