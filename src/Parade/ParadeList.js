import React, { useState } from 'react';
import ParadeAnimal from './ParadeAnimal';
import './Parade.css';
import Button from '@mui/material/Button';

export default function Parade() {
  
  const [animals, setAnimal] = useState (['giraffe', 'Dinosaur']);
  

  function handleGiraffe(){
    animals.push('giraffe');
    setAnimal([...animals]);
  }
  function handleDinosaur(){
    animals.push('dinosaur');
    setAnimal([...animals]);
  }
  function handleTurtle(){
    animals.push('turtle');
    setAnimal([...animals]);
  }
  function handleSnake(){
    animals.push('snake');
    setAnimal([...animals]);
  }
  function handleDelete(){
    animals.pop();
    setAnimal([...animals]);
  }
  
  
  return (
    <div className='animal-parade-list'>
      <h1> Worlds smallest Emoji Parade</h1>
      {animals.map(animal => 
        <ParadeAnimal key={animal}
          animal={animal}/>
      )}
      <div className='animal-buttons'>
        <Button variant='contained' color='warning' onClick={handleGiraffe}>Giraffe</Button>
        <Button variant='contained' color='inherit' onClick={handleDinosaur}>Dinosaur</Button>
        <Button variant='contained' color='success' onClick={handleTurtle}> Turtle</Button>
        <Button variant='contained' onClick={handleSnake}>Snake</Button>
        <Button variant='contained' color='error' onClick={handleDelete}>Remove Last?</Button>
      </div>
    </div>
  );
}
