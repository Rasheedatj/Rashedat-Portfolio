import Image from 'next/image';

const contacts = [
  {
    id: 'c1',
    title: 'Github',
    icon: '/icons/github.svg',
    link: 'https://github.com/Rasheedatj',
  },
  {
    id: 'c2',
    title: 'LinkedIn',
    icon: '/icons/linkedin.svg',
    link: 'https://www.linkedin.com/in/rashedat-jinadu',
  },
  {
    id: 'c3',
    title: 'X',
    icon: '/icons/linkedin.svg',
    link: 'https://twitter.com/Rasheedatj',
  },
  {
    id: 'c4',
    title: 'Email',
    icon: '/icons/linkedin.svg',
    link: 'https://mail.google.com/jinaduikeoluwa@gmail.com',
  },
  {
    id: 'c5',
    title: 'Calendly',
    icon: '/icons/linkedin.svg',
    link: 'https://calendly.com/jinaduikeoluwa/let-s-talk-about-your-application',
  },
];

const Contacts = () => {
  return (
    <div className='flex items-center gap-4'>
      {contacts.map((contact) => {
        return (
          <a
            key={contact.id}
            href={contact.link}
            target='_blank'
            className='block relative group hover:-translate-y-2 duration-300 ease-in-out transition-all'
          >
            <span className='bg-slate-500 text-white  px-1 py-1 rounded-sm text-xs hidden group-hover:block absolute -top-full left-1/2'>
              {contact.title}
            </span>
            <Image
              src={contact.icon}
              alt={contact.title}
              width={24}
              height={24}
              className='mt-1'
            />
          </a>
        );
      })}
    </div>
  );
};

export default Contacts;
