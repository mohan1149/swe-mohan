import React from 'react';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Clients from './components/Clients';
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
      <section id='projects'>
        <Projects />
      </section>
      <section id='clients'>
        <Clients />
      </section>
      <section id='footer'>
        <Footer />
      </section>
    </div>
  );
}
export default App;
