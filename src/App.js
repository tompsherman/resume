import React from 'react'
import Resume from './components/Resume'
import './App.css'

const App = () => {
  return (
<>
      <div className="App">
        <h1 id="home">Tom Sherman</h1>
        <h2 style={{fontSize: "2.5rem"}}>"I turn big dreams into reality"</h2>
        <Resume />
      </div>
        <footer className="footer">
          <p className="foot-note">(c) 2021-9999 Tom Sherman</p>
            <a className="foot-note" href="https://www.linkedin.com/in/tom-sherman-full-stack-csm/">
              <img className="foot-icon" src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1613823353/resume%20repo/linkedin_1_a7sju4.png" alt="linked in logo courtesy: freepik"/>
            </a>
            <a className="foot-note" href="https://github.com/tompsherman">
              <img className="foot-icon" src="https://res.cloudinary.com/dzom9ahsn/image/upload/v1613823016/resume%20repo/github_b2iwfk.png" alt="github logo attribute: freepik"/> 
            </a>
        </footer>
</>
  );
};

export default App;