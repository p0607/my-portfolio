import React from 'react';

const projects = [
  { title: 'Customer Churn Model', link: 'https://github.com/you/churn', description: 'ML model that predicts churn.' },
  { title: 'Twitter Sentiment', link: 'https://github.com/you/twitter-sentiment', description: 'NLP project analyzing tweets.' },
  // add more...
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
