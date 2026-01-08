import Headline from './navigation/headline';
import Contacts from './navigation/contacts';
import Menu from './navigation/menu';

const Navigation = () => {
  return (
    <section className='overflow-hidden md:h-screen px-6 md:px-0 pt-10 pb-10 md:pb-20 md:pt-20 md:w-1/2 flex flex-col'>
      <div className='h-full'>
        <Headline />
        <Menu />
      </div>

      <Contacts />
    </section>
  );
};

export default Navigation;
