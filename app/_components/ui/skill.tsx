import React from 'react';

const Skill = ({ skills }: { skills: string[] }) => {
  return (
    <div className='flex items-center gap-4 mt-5 flex-wrap'>
      {skills.map((skill) => (
        <p
          key={skill}
          className='px-2 py-0.5 bg-accent/30 text-accent text-xs rounded-xl font-medium'
        >
          {skill}
        </p>
      ))}
    </div>
  );
};

export default Skill;
