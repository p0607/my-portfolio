import React, { useState, useEffect } from 'react';
import './header.css';

import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic8.jpg';
import pic4 from '../assets/pic10.jpg';
import pic5 from '../assets/pic5.webp';
import pic6 from '../assets/pic6.webp';
import pic7 from '../assets/37672.jpg';
import pic9 from '../assets/3771262.jpg';
import pic10 from '../assets/3772124.jpg';
import pic11 from '../assets/3772130.jpg';
import pic12 from '../assets/5118018.jpg';

const preloadImages = () => {
  const images = [pic2, pic3, pic4, pic5, pic6, pic7, pic9, pic10, pic11, pic12];
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

const slides = [
  
  { image: pic2, text: "I love working with data and code." },
  { image: pic3, text: "Check out my latest projects below." },
  { image: pic4, text: "Experienced in React and Node.js." },
  { image: pic5, text: "Skilled in Python and Machine Learning." },
  { image: pic6, text: "Let's build something amazing together!" },
  { image: pic7, text: "Open to collaboration and new ideas." },
  { image: pic9, text: "Scroll down to see my blog posts." },
  { image: pic10, text: "Check out my skills and interests." },
  { image: pic11, text: "Thank you for visiting!" },
  { image: pic12, text: "Let's connect on LinkedIn!" }
];

function Header() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    preloadImages();
    setLoaded(true);
    
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (idx) => {
    setCurrent(idx);
  };

  return (
    <header 
      className={`header ${loaded ? 'loaded' : ''}`}
      style={{
        backgroundImage: `url(${slides[current].image})`
      }}
    >
      <h1>Priyanka Sahani</h1>
      <p>Data Analyst & Full-Stack Developer | Data Scientist</p>
      
      <div className="slide-text">
        <div>{slides[current].text}</div>
      </div>
      
      <div className="slide-indicators">
        {slides.map((_, idx) => (
          <button
            key={`slide-${idx}`}
            className={`slide-indicator ${idx === current ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;
