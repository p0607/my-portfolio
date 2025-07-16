import React, { useState, useEffect } from 'react';
import './LearningTimeline.css';

const timelineData = [
  { year: '2018', title: 'Got out of college', desc: 'Rejected campus selection as was to prepare for PSU', icon: '🎓' },
  { year: '2019', title: 'Started exploring Excel & Python', desc: 'Took beginner crash course on Data Science', icon: '📊' },
  { year: '2020', title: 'Mastered Excel & VBA', desc: 'Automated reports, worked with formulas, built dashboards', icon: '📈' },
  { year: '2021', title: 'Learned SQL, Pandas, and Machine Learning', desc: 'Completed multiple small ML projects using real data', icon: '🤖' },
  { year: '2022', title: 'Built end-to-end DS projects', desc: 'From web scraping to visualization, GitHub published', icon: '🛠️' },
  { year: '2023', title: 'Explored React Native & Robotics', desc: 'Created UI apps, explored embedded systems', icon: '📱' },
  { year: '2024', title: 'Deepening AI + Embedded Focus', desc: 'Combining data skills with hardware for real-world solutions', icon: '🧠' },
  { year: '2025', title: 'Learning GEN AI', desc: 'There\'s more to catch on.', icon: '🚀' }
];

const HorizontalTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => (prev < timelineData.length ? prev + 1 : prev));
    }, 300);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      
      <div className="timeline-items-wrapper">
        {timelineData.map((item, index) => (
          <div 
            className={`timeline-item ${index <= visibleItems ? 'visible' : ''} ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <div className="timeline-dot">
              <span className="timeline-icon">{item.icon}</span>
            </div>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              {activeIndex === index && (
                <div className="timeline-details">
                  <button className="timeline-button">View Projects</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;