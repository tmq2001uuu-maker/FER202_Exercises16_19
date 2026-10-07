import React from 'react';
import AnimalCard from './components/AnimalCard';
import animals from './data/animals';

export function showAdditionalData(additional) {
  const message = Object.entries(additional)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  window.alert(message);
}

export default function App() {
  return (
    <main>
      <h1>Animal Information — PropTypes</h1>
      <div className="animal-grid">
        {animals.map(animal => (
          <AnimalCard key={animal.name} {...animal} showAdditional={showAdditionalData} />
        ))}
      </div>
    </main>
  );
}
