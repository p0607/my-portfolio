import React from 'react';

const posts = [
  { title: 'Understanding LSTM networks', link: 'https://medium.com/@you/lstm', date: 'June 2025' },
  // add more...
];

 function Blog() {
  return (
    <section id="blog">
      <h2>Blog</h2>
      <ul>
        {posts.map(post => (
          <li key={post.title}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title} <span>({post.date})</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Blog;
