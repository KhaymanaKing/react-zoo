import './App.css';
import ParadeList from './Parade/ParadeList';
import OpenSign from './OpenSign/OpenSign';
import EatingCompetition from './EatingCompetition/EatingCompetition';
import Button from '@mui/material/Button/Button';

import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [animal, setAnimal] = useState (['giraffe', 'Dinosaur']);
  
  function handleOpen(){
    setIsOpen(true);
  }
  function handleClose(){
    setIsOpen(false);
  }

  function handleGiraffe(){
    animal.push('giraffe');
    setAnimal([...animal]);
  }
  function handleDinosaur(){
    animal.push('dinosaur');
    setAnimal([...animal]);
  }
  function handleTurtle(){
    animal.push('turtle');
    setAnimal([...animal]);
  }
  function handleSnake(){
    animal.push('snake');
    setAnimal([...animal]);
  }
  function handleDelete(){
    animal.pop();
    setAnimal([...animal]);
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        Khaymans Zoo!
      </header>
      
      <OpenSign isOpen={isOpen}/>
      <Button variant='contained'value='open' onClick={handleOpen}>Open?</Button>
      <Button variant='contained' color='error' value='close' onClick={handleClose}>Close it Down!</Button>
      <EatingCompetition/>
      <h1> Worlds smallest Emoji Parade</h1>
      <ParadeList animals ={animal}/>    
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

export default App;
