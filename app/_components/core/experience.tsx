import ExperienceItem from '../ui/experience-item';

export interface ExperienceI {
  id: string;
  title: string;
  company: string;
  responsibilities: string[];
  tools: string[];
  logo: string;
}

const experiences: ExperienceI[] = [
  {
    id: 'E4',
    title: 'Mobile Application Developer',
    company: 'Koyo',
    responsibilities: [
      'Developed an iOS and android application from a single codebase',
      'Converted Figma designs into screens that adapt to different devices',
      'Integrated native features such as audio, image upload and device storage',
      'Integrated restful API with mobile application',
      'Participated in deployment to Testflight and App store',
    ],
    tools: ['React Native', 'Testflight', 'Deployment'],
    logo: '/koyo.png',
  },
  {
    id: 'E1',
    title: 'Intermediate Frontend Developer',
    company: 'OpenDesk',
    responsibilities: [
      'Developed an internal pension management tool that eliminated dependence on external tools',
      'Built a marketing website that generated 50% leads in the first month',
      'Engineered a data-intensive pipeline system that monitors digital meters and user requests.',
      'Handled heavy data processing and management on the frontend using Redux for state management',
      'Created internal modular and reusable components used across different projects',
    ],
    tools: [
      'Next.js',
      'React.js',
      'Tailwind.CSS',
      'React Query',
      'Redux',
      'Typescript',
      'Shadcn UI',
    ],
    logo: '/open-desk.png',
  },
  {
    id: 'E2',
    title: 'Frontend Developer',
    company: 'Remita',
    responsibilities: [
      '  Contributed to the redesign of the latest Remita website',
      'Participated in the internal testing and product quality assurance',
      'Worked with senior engineers to ship fintech solutions',
      'Built modular and reusable components used across different projects',
    ],
    tools: ['Next.js', 'React.js', 'Tailwind.CSS', 'Zustand', 'Typescript'],
    logo: '/remita.png',
  },
  {
    id: 'E3',
    title: 'Frontend Developer',
    company: 'ATB Tech',
    responsibilities: [
      'Implemented multiple job and skills upload on a human resource software',
      'Redesigned the company website, giving it a more modern look that retains users',
      'Collaborated with backend engineers, product designers, and project managers to ship new features',
      'Mentored junior frontend developers on the coding methodologies of the company',
      'Handled remote state management using React Query',
    ],
    tools: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'React.js'],
    logo: '/atb.png',
  },
];

const Experience = () => {
  return (
    <section className='font-sans relative' id='Experience' data-section>
      <h1 className='section-title'>Experience</h1>
      <section className='section-spacing'>
        {experiences.map((item) => (
          <ExperienceItem key={item.id} experience={item} />
        ))}
      </section>
    </section>
  );
};

export default Experience;
