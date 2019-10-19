import React from 'react';
import './App.css';
import Skill from './comp/Skill.js';
import Exp from './comp/Exp.js';
import Footer from  './comp/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <h1 className="App-title">Sreejish</h1>
      <ul>
      <li>Email: srijishks@gmail.com</li>
      <li>Mobile: +64 21 0814 2101</li>
      </ul>
       </header>
       <Skill />
       <Exp />
       <Footer />     
    </div>
  );
}

export default App;
