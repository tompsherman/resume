import React from 'react'
import Resume from './components/Resume'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Tom Sherman</h1>
      <h2 style={{fontSize: "2.5rem"}}>"I turn big dreams into reality"</h2>
      <Resume />
    </div>
  );
};

export default App;