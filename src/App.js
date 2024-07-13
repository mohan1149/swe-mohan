import React from 'react';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Experience from './components/Experience';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='container-fluid m-0 p-0'>
      <section id='intro'>
        <Intro />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='footer'>
        <Footer />
      </section>
    </div>
  );
}
export default App;
