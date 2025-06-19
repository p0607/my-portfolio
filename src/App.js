import React from 'react';
import './index.css';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Blog from './components/blog.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
