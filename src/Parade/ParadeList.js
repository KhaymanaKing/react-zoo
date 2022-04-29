import React from 'react';
import ParadeAnimal from './ParadeAnimal';
import './Parade.css';

export default function Parade({ animals }) {
  return (
    <div className='animal-parade-list'>
      {animals.map(animal => 
        <ParadeAnimal key={animal}
          animal={animal}/>
      )}
    </div>
  );
}
