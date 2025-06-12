import React, { useEffect, useState } from 'react';
import FactDisplay from './FactDisplay';

// list of facts about me
const personalFacts = [
  "I have a unique talent or hobby that surprises people",
  "There's a place I've visited that changed my perspective on life",
  "I have an unusual fear or phobia",
  "I once had an embarrassing moment that became a funny story",
  "I have a hidden skill that most people don't know about"
];

const FactGenerator = () => {
  const [currentFact, setCurrentFact] = useState('');

  const generateRandomFact = () => {
    if (personalFacts && personalFacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * personalFacts.length);
      setCurrentFact(personalFacts[randomIndex]);
    }
  };

  useEffect(() => {
    console.log('currentFact', currentFact);
  }, [currentFact]);

  return (
    <div className="fun-fact-generator">
      <h2>🎲 Discover Something About Me 🎲</h2>

      <FactDisplay currentFact={currentFact} />

      <button
        className="fact-button"
        onClick={generateRandomFact}
      >
        Show Me A Fun Fact!
      </button>

      <p className="fact-count">
        There are {personalFacts?.length ?? 0} fun fact{personalFacts?.length !== 1 ? 's' : ''} about me.
      </p>
    </div>
  );
};

export default FactGenerator;
