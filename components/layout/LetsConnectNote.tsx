import Image from 'next/image';

const LetsConnectNote = () => {
  return (
    <Image
      src='/lets-connect.svg'
      alt=''
      width={115}
      height={86}
      aria-hidden='true'
      className='pointer-events-none absolute -top-28 -left-10 hidden max-w-none md:block'
    />
  );
};

export default LetsConnectNote;
