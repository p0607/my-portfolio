// src/MainLayout.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/header.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Blog from './components/blog.jsx';
import Footer from './components/footer.jsx';

const MainLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const aboutColors = [
    '#f0f8ff', '#fffaf0', '#f5f5dc', '#f0fff0', '#fdf5e6',
    '#faf0e6', '#f0ffff', '#f5fffa', '#fffff0', '#fefefe', '#f9f9f9'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % aboutColors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Header current={currentSlide} setCurrent={setCurrentSlide} />
      <main>
        <About bgColor={aboutColors[currentSlide]} />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
