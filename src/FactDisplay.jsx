import React from 'react';

const FactDisplay = ({ currentFact }) => {
  return (
    <div className="fact-display">
      {currentFact ? (
        <div>
          <p className="fact-text">{currentFact}</p>
        </div>
      ) : (
        <p className="prompt-text">🌟 Press the button below to view a fun fact about me! 🌟</p>
      )}
    </div>
  );
};

export default FactDisplay;