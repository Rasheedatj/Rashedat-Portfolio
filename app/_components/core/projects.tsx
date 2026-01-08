import ProjectItem from '../ui/project-item';

export interface ProjectI {
  id: string;
  title: string;
  image: string;
  description: string[];
  link: string;
  tools: string[];
}

const projects: ProjectI[] = [
  {
    id: 'P1',
    title: 'Credicaf',
    image: '/credicaf.png',
    description: [
      'Eliminated manual paperwork by building a centralized change-management system that digitized approvals, tracking, and record-keeping across the business.',
      'The system delivers a fast, secure, and intuitive user experience, supports role-based access, and enables teams to quickly find, review, and manage changes with real-time data, resulting in smoother operations and business transparency.',
    ],
    tools: ['React.js', 'Styled Components', 'Github', 'Axios', 'Context API'],
    link: 'https://credi-caf.vercel.app/',
  },
  {
    id: 'P2',
    title: 'NotchHR',
    image: '/xalary.png',
    description: [
      'Improved the credibility of an existing website by refining the interface, fixing broken functionalities, and optimizing the app for speed.',

      'The Figma conversion required close attention to detail and fast execution, as issues affected daily usage. By identifying problem areas, correcting UI inconsistencies, and removing performance bottlenecks, the app became smoother, stable, professional, more responsive, and more reliable for users.',
    ],
    tools: ['React.js', 'SCSS', 'Github', 'Redux', 'Vercel'],
    link: 'https://my-xalary.vercel.app/',
  },
  {
    id: 'P3',
    title: 'TooDoo',
    image: '/toodoo.png',
    description: [
      '   Built a production-ready mobile application MVP for a startup, enabling users to book on-demand services such as cleaning and laundry from their mobile devices.',
      'The app was designed to validate the business idea quickly, so the focus was on speed, clarity, and reliability. I delivered a polished mobile experience that works seamlessly on both iOS and Android, adapts smoothly across screen sizes, and stays true to the original Figma designs.',
    ],
    tools: ['React Native', 'Expo', 'Stylesheet'],
    link: 'https://github.com/Rasheedatj/toodoo',
  },
  {
    id: 'P4',
    title: 'Escrow',
    image: '/escrow.png',
    description: [
      ' Improved user retention by 47% by redesigning and refining the onboarding flow for a data-management startup. The goal was to create a calm, welcoming experience that guided users without overwhelming them.',
      'I focused on reducing friction, simplifying decisions, and developing flows that respected users’ time and attention. The result was a stronger first impression, fewer early drop-offs, and an onboarding experience that helped users understand the product’s value quickly.',
    ],
    tools: ['React Native', 'Expo', 'Stylesheet'],
    link: 'https://github.com/Rasheedatj/Escrow',
  },
];
const Projects = () => {
  return (
    <section className='relative' id='Projects' data-section>
      <h1 className='section-title '>Projects</h1>

      <section className='section-spacing'>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
