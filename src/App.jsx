import React from 'react';
import './App.css';
import FactGenerator from './FactGenerator';
import WelcomeHeader from './WelcomeHeader';

function App() {
  return (
    <div className="App">
      <WelcomeHeader />
      <FactGenerator />
    </div>
  );
}

export default App;
