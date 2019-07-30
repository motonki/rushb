import React from 'react';
import './App.css';
import TacticBook from '../tactics/TacticBook'
import Title from './Title.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Title />
        <TacticBook />
      </header>
    </div>
  );
}

export default App;
