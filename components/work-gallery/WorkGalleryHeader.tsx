type WorkGalleryHeaderProps = {
  children?: React.ReactNode;
};

const WorkGalleryHeader = ({ children }: WorkGalleryHeaderProps) => {
  return (
    <header className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10'>
      <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-14.25'>
        <h1
          id='work-gallery-heading'
          className='w-min font-display text-[28px] leading-7.5 font-medium text-espresso lg:text-[45px] lg:leading-12.5'
        >
          Work Gallery
        </h1>
        <p className='max-w-56 text-[13px] leading-6 font-semibold text-maroon-text lg:max-w-100 lg:text-lg lg:leading-9'>
          A Gallery Of Things I Have Helped Build And Ship.
        </p>
      </div>
      {children}
    </header>
  );
};

export default WorkGalleryHeader;
