import Image from 'next/image';

const Tape = () => {
  return (
    <>
      <Image
        src='/yellow-tape.svg'
        alt=''
        width={47}
        height={60}
        aria-hidden='true'
        className='pointer-events-none absolute -top-6 -left-5 max-w-none'
      />
      <Image
        src='/yellow-tape.svg'
        alt=''
        width={47}
        height={60}
        aria-hidden='true'
        className='pointer-events-none absolute -right-5 -bottom-6 max-w-none'
      />
    </>
  );
};

export default Tape;
