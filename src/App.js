import './App.css';
import ParadeList from './Parade/ParadeList';
import OpenSign from './OpenSign/OpenSign';


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
      </header>
      
      <OpenSign isOpen={isOpen}/>
      <button onClick={handleOpen}>Open?</button>
      <button onClick={handleClose}>Close it Down!</button>

      <ParadeList animals ={animal}/>    
      <div className='animal-buttons'>
        <button onClick={handleGiraffe}>Giraffe</button>
        <button onClick={handleDinosaur}>Dinosaur</button>
        <button onClick={handleTurtle}> Turtle</button>
        <button onClick={handleSnake}>Snake</button>
        <button onClick={handleDelete}>Remove Last?</button>
      </div>
    </div>
  );
}

export default App;
