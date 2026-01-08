import React from 'react';
import BlogItem from '../ui/blog-item';
export interface BlogI {
  id: string;
  title: string;
  date: string;
  link: string;
  image: string;
}

const blogs: BlogI[] = [
  {
    id: 'B1',
    title: 'Understanding Variables in JavaScript',
    date: 'September 25, 2025',
    link: ' https://rashedatj.hashnode.dev/javascript-variables',
    image: '/variables.webp',
  },
  {
    id: 'B2',
    title: 'Making Your First Open-Source Contribution',
    date: 'October 10, 2025',
    link: 'https://rashedatj.hashnode.dev/making-your-first-open-source-contribution',
    image: '/open-source.webp',
  },
];
const Blogs = () => {
  return (
    <section className='space-y-10' id='Blogs' data-section>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </section>
  );
};

export default Blogs;
