import React from 'react';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';

const App = () => {
  return (
    <div className='container-fluid m-0 p-0'>
      <section id='intro'>
        <Intro />
      </section>
      <section id='about'>
        <About />
      </section>
    </div>
  );
}
export default App;
