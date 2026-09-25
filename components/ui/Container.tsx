type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  width?: string;
};

const Container = ({
  children,
  className = '',
  width = 'w-[min(81.5rem,100%-2rem)] md:w-[min(81.5rem,100%-4rem)]',
}: ContainerProps) => {
  return <div className={`mx-auto ${className} ${width}`}>{children}</div>;
};

export default Container;
