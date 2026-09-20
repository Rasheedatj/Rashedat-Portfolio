type ProjectBuiltWithProps = {
  techStack: string[];
};

const ProjectBuiltWith = ({ techStack }: ProjectBuiltWithProps) => {
  return <div data-count={techStack.length}></div>;
};

export default ProjectBuiltWith;
