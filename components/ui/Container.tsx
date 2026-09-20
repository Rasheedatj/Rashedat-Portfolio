type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  width?: string;
};

const Container = ({
  children,
  className = '',
  width = 'w-[min(87.5rem,100%-2rem)] ',
}: ContainerProps) => {
  return <div className={`mx-auto ${className} ${width}`}>{children}</div>;
};

export default Container;
