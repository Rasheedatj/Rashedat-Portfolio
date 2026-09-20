import type { Client } from '@/types/home';

type ClientLogoProps = {
  client: Client;
};

const ClientLogo = ({ client }: ClientLogoProps) => {
  return <li>{client.name}</li>;
};

export default ClientLogo;
