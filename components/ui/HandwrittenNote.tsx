type HandwrittenNoteProps = {
  children: React.ReactNode;
};

const HandwrittenNote = ({ children }: HandwrittenNoteProps) => {
  return <p aria-hidden='true'>{children}</p>;
};

export default HandwrittenNote;
