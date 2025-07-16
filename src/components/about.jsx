import React, { useRef } from 'react';
import './about.css';
import LearningTimeline from './LearningTimeline';
import figureImg from '../assets/doll.jpg';
import { TypeAnimation } from 'react-type-animation';

const About = ({ bgColor = "#f0f8ff" }) => {
  const aboutRef = useRef(null);

  return (
    <>
      <section 
        ref={aboutRef}
        id="about"
        className="about-container"
        style={{ backgroundColor: bgColor }}
      >
        <h2 className="about-title">
          <TypeAnimation
            sequence={[
              '👩‍💻 Priyanka in a Nutshell',
              1500,
              '🔍 Passionate Data Explorer',
              1500,
              '🌟 Creative Problem Solver',
              1500,
              '📊 Insights Alchemist',
              1500
            ]}
            repeat={Infinity}
            wrapper="span"
          />
        </h2>

        <div className="about-content">
          <div className="about-text">
            <p style ={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              I'm a data analyst with a curiosity-driven mindset and a deep love for solving problems through data.
              I believe that when combined with creativity, data has the power to drive smart decisions, create meaningful stories,
              and unlock future technologies.
            </p>
            <p style ={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              By day, I work on transforming messy, complex datasets into clear, actionable insights.
              I enjoy spotting patterns that others might overlook, streamlining data workflows,
              and building solutions that help teams make better decisions.
              My skill set spans across data wrangling, visualization, machine learning, and automation.
            </p>
            <p style ={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              At night, I like to feed my curiosity. Sometimes I'm diving into the latest advancements in AI and robotics.
              Other times, you'll find me picking apart coding challenges, experimenting with side projects,
              or learning Japanese—one kanji at a time.
            </p>
            <p style ={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              My toolbox includes <strong>Python, Excel, VBA, SQL (MySQL & PostgreSQL), TensorFlow, React Native, Spring Boot</strong>, and more.
              I'm always exploring new tools and frameworks to evolve my practice and stay ahead of the curve.
            </p>
            <p style ={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              You'll find my projects, code, and tutorials below—feel free to explore, clone, or contribute.
              I'm a big believer in open learning,
              and I hope my work helps or inspires someone out there, just as many others have inspired me.
            </p>

            <div className="cta-buttons">
              <a href="/Priyanka_Sahani_DS_1.pdf" className="btn" download>Download CV</a>
              <a href="#projects" className="btn">See Projects</a>
            </div>
          </div>

          <div className="about-image-wrapper">
            <div className="about-image">
              <img src={figureImg} alt="Profile Illustration" />
            </div>
          </div>
        </div>
      </section>
      <h1 className="about-title">
        
        <TypeAnimation
            sequence={[
              '🚀 Personal Learning Timeline',
              1500,
              '🔍 Passionate Data Explorer',
              1500,
              '🌟 Started Late',
              1500,
              '📊 But with Bigger Dreams',
              1500
            ]}
            repeat={Infinity}
            wrapper="span"
          /></h1>
      <LearningTimeline />
    </>
  );
};

export default About;