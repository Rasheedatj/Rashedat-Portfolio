type SectionHeadingProps = {
  title: string;
  description?: string;
};

const SectionHeading = ({ title, description }: SectionHeadingProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeading;
