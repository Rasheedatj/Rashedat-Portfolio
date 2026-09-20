type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`mx-auto w-[min(77.5rem,100%-2rem)]  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
