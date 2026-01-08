import React from 'react';
import About from './core/about';
import Experience from './core/experience';
import Projects from './core/projects';
import Blogs from './core/blogs';
import Reccommendations from './core/reccommendations';

const Core = () => {
  return (
    <section className='md:w-1/2 py-20 space-y-20 md:overflow-scroll scrollbar-hidden h-screen   '>
      <About />
      <Experience />
      <Projects />
      <Blogs />
      <Reccommendations />
    </section>
  );
};

export default Core;
