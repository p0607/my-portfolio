import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/you" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
      <a href="https://linkedin.com/in/you" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
      <p>&copy; 2025 Your Name</p>
    </footer>
  );
}
