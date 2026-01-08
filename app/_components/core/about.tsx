import React from 'react';

const About = () => {
  return (
    <section className='font-sans relative' id='About' data-section>
      <h1 className='section-title'>About</h1>

      <article className='px-6 space-y-5 text-slate-400 *:leading-7 pt-4 md:pt-0'>
        <p>
          Startup products are delicate. Without a developer who understands
          both <span className='bold'>technology</span> and{' '}
          <span className='bold'>business</span>, even strong ideas can fail due
          to poor execution.
        </p>
        <p>
          I’m a <span className='bold'>frontend developer</span> and
          product-minded partner who helps startups and growing businesses turn
          ideas into scalable, high-performing websites and mobile applications.
          When an idea is built right, it feels like the exact solution users
          have been searching for, and that’s where real conversions happen.
        </p>
        <p>
          I have 4+ years of experience helping founders move from “just an
          idea” to <span className='bold'>websites</span> and{' '}
          <span className='bold'>mobile applications</span> that attract users,
          convert effectively, and scale with confidence. If you have an idea
          you want to grow, let’s talk. I’m happy to learn about your goals,
          timeline, budget, and what <span className='bold'>success</span> looks
          like for your business
        </p>
        <p>
          In my spare time, I’m usually watching series, playing games with
          friends and trying new food.
        </p>
      </article>

      <button className='relative ml-6 mt-8 px-4 py-2 border-accent border-2 font-medium text-accent rounded-md hover:-translate-x-2 hover:-translate-y-2 duration-300 transition-all hover:shadow-accent hover:shadow-2xl'>
        <a
          href='https://calendly.com/jinaduikeoluwa/let-s-talk-about-your-application'
          className='absolute inset-0'
          target='_blank'
        ></a>
        Book a call
      </button>
    </section>
  );
};

export default About;
