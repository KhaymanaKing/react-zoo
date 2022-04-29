import React from 'react';
import './Parade.css';

export default function ParadeAnimal({ animal }) {
  return (
    <div className='animal'>
      {animal === 'giraffe' && <span>🦒</span>}
      {animal === 'dinosaur' && <span>🦖</span>}
      {animal === 'turtle' && <span>🐢</span>}
      {animal === 'snake' && <span>🐍</span>}
    </div>
  );
}
