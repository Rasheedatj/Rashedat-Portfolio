import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';

const contacts = [
  {
    id: 'c1',
    title: 'Github',

    icon: <FaGithub size={24} className='contact' />,
    link: 'https://github.com/Rasheedatj',
  },
  {
    id: 'c2',
    title: 'LinkedIn',
    icon: <FaLinkedinIn size={24} className='contact' />,
    link: 'https://www.linkedin.com/in/rashedat-jinadu',
  },
  {
    id: 'c3',
    title: 'X',
    icon: <FaXTwitter size={24} className='contact' />,
    link: 'https://twitter.com/Rasheedatj',
  },
  {
    id: 'c4',
    title: 'Email',
    icon: <MdOutlineEmail size={24} className='contact' />,
    link: 'https://mail.google.com/jinaduikeoluwa@gmail.com',
  },
  {
    id: 'c5',
    title: 'Calendly',
    icon: <IoIosCall size={24} className='contact' />,
    link: 'https://calendly.com/jinaduikeoluwa/let-s-talk-about-your-application',
  },
];

const Contacts = () => {
  return (
    <div className='flex items-center gap-4 mt-6 lg:mt-0'>
      {contacts.map((contact) => {
        return (
          <a
            key={contact.id}
            href={contact.link}
            target='_blank'
            className='block relative group'
          >
            <span className='bg-accent text-slate-800  px-1 py-1 rounded-sm text-xs hidden group-hover:block absolute -top-8 left-1/2'>
              {contact.title}
            </span>

            {contact.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Contacts;
