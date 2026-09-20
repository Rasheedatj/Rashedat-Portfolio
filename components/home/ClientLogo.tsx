import Image from 'next/image';
import type { Client } from '@/types/home';

type ClientLogoProps = {
  client: Client;
};

const ClientLogo = ({ client }: ClientLogoProps) => {
  const { name, logo } = client;

  return (
    <li className='flex  mx-5 md:mx-10.5 shrink-0 items-center gap-2 text-white'>
      <Image
        src={logo}
        alt={name + 'logo'}
        width={34}
        height={34}
        aria-hidden='true'
        style={{ height: 34, width: 'auto' }}
      />
    </li>
  );
};

export default ClientLogo;
