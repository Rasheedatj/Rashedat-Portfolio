type LetsConnectNoteProps = {
  color?: string;
  className?: string;
};

const noteMask = "url('/lets-connect.svg')";

/** The note artwork is a raster, so it is tinted by using it as a mask. */
const LetsConnectNote = ({
  color = '#A7002C',
  className = '',
}: LetsConnectNoteProps) => {
  return (
    <span
      aria-hidden='true'
      className={`pointer-events-none block h-21.5 w-28.75 max-w-none ${className}`}
      style={{
        backgroundColor: color,
        maskImage: noteMask,
        WebkitMaskImage: noteMask,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskSize: '100% 100%',
        WebkitMaskSize: '100% 100%',
      }}
    />
  );
};

export default LetsConnectNote;
