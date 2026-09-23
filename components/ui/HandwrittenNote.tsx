type HandwrittenNoteProps = {
  children: React.ReactNode;
  className?: string;
};

const HandwrittenNote = ({
  children,
  className = '',
}: HandwrittenNoteProps) => {
  return (
    <p
      aria-hidden='true'
      className={`font-hand text-sm leading-tight text-crimson md:text-base ${className}`}
    >
      {children}
    </p>
  );
};

export default HandwrittenNote;
