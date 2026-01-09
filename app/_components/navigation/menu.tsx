'use client';

import { useEffect, useState } from 'react';

const menu = [
  'About',
  // 'Stack',
  'Experience',
  'Projects',
  'Blogs',
  'Recommendations',
];

const Menu = () => {
  const [activeSection, setActiveSection] = useState('');

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-80px 0px -90% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;
  return (
    <ul className='space-y-6 mt-14 hidden md:block'>
      {menu.map((item) => {
        return (
          <li key={item} className='group max-w-fit z-10 relative'>
            <a className='flex items-center gap-4' href={`#${item}`}>
              <span
                className={`w-10  group-hover:h-0.5 group-hover:w-16  group-hover:bg-slate-200 rounded-xs block transition-all duration-100 ease-in ${
                  activeSection === item
                    ? 'h-0.5 w-16 bg-slate-200'
                    : 'h-px bg-slate-500'
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 transition-all duration-100 ease-in ${
                  activeSection === item ? 'text-slate-200' : 'text-slate-500'
                }`}
              >
                {item}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
