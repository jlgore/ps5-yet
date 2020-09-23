import React from 'react';
import './App.css';

function App(props) {
  const hasPlayStationFive = props.hasPlayStationFive;
  if (!hasPlayStationFive) 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Does Jared have a PS5 yet?</h1>
        <p>
        <span role="img" aria-label="red dot">🔴</span> He does not. <span role="img" aria-label="red dot">🔴</span> 
        </p>
      </header>
    </div>
  );
  return (
    <div className="App">
    <header className="App-header">
      <h1>Does Jared have a PS5 yet?</h1>
      <p>
      <span role="img" aria-label="green dot">🟢</span> He does! <span role="img" aria-label="green dot">🟢</span> 
      </p>
    </header>
  </div>
  )
}

export default App;
