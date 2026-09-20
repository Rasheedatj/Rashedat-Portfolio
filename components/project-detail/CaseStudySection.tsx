import type { CaseStudySection as CaseStudySectionData } from '@/types/project';

type CaseStudySectionProps = {
  section: CaseStudySectionData;
};

const CaseStudySection = ({ section }: CaseStudySectionProps) => {
  return (
    <section>
      <h2>{section.heading}</h2>
    </section>
  );
};

export default CaseStudySection;
